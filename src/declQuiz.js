/* declQuiz.js */
/* Mike Wilson, cmikewilsonAgmailDcom */
/* April 13, 2005 - March 31, 2006 */

/* Anyone may copy and/or modify this software without restriction. */

/*
- Would be nice to not re-ask the same thing.
- Can you delete globals?  Seems like I saw in the ECMAScript spec
  that one may not.
? Declension ending init code should go in origWD.js?
...
? Add adjectives here?  (I don't think so.  They should be separate.)
- dumpRow is slow and called repeatedly in dumpWords. (Not important.)
  The logic could be improved with indices, but IO is the slow part.
  macronize is a little slow.
? Looks like string[n] isn't allowed.  Mozilla is fine with it,
  but IE chokes.  Can't find it in the ECMA spec.  Must use .charAt(n); weird.
  */

/*
IMPORT from nounList:
    OrigWords, wordNom, wordGenEnd, wordGender, wordCap,
    M, F, N, MF, SP, SG, PL
IMPORT from sets: *
IMPORT from random: *
IMPORT from macrons: macrons_init, macronize, macronsComparable
*/

var Filters = [];
var WordStructs, Words = [];
var AllChapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                   21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
var ImplementedChapters = [];
var AllDecls = [1,2,3,4,5,0];
var AllCases = ["nom", "acc", "gen", "dat", "abl"];
var AllGenders = [M, F, N];
var AllNumbers = [SG, PL];
/* DeclensionEndings[declension type][sg/pl][nom/.../abl] */
var DeclensionEndings = [];
var CorrectlyAnswered = [];
var QuizBegun = false;
var QuizRowCounter = 0;
var ti, tf, t=0;    /* for occasional profiling */


function wordEnding (word, sp, casus) {
    /* return the declined word ending */
    return DeclensionEndings[wordDecl(word)][sp][casus];
}

function wordDecline (word, sp, casus) {
    /* return a declined word */
    var opt = wordDeclOpt(word);
    if ((opt > 0) && (sp === SG)) {
        if ((opt >= 1) && (casus == "nom"))
            return wordNom(word);
        if ((opt == 2) && (casus == "acc"))
            return wordNom(word);
    }
    return wordBase(word) + wordEnding(word, sp, casus);
}

function pluralisTantum(word) {
    /* is the word plural only? */
    return (wordSP(word) === PL);
}

function fillDeclensionEndingsArray() {
    /* DeclensionEndingsPrep is a table of declension endings.
       It's in a format that's easy to read and write,
       but a format like: DeclensionEndings["2a"][SG]["acc"]
       is better for program use.
       */
    var d, decl, sg, pl, f;
    for (d=0 ; d<DeclensionEndingsPrep.length ; d++) {
        decl = DeclensionEndingsPrep[d][0];
        sg   = DeclensionEndingsPrep[d][1];
        pl   = DeclensionEndingsPrep[d][2];
        DeclensionEndings[decl] = [];
        DeclensionEndings[decl][SG] = [];
        DeclensionEndings[decl][PL] = [];
        for (f=0 ; f<AllCases.length ; f++) {
            DeclensionEndings[decl][SG][AllCases[f]] = sg[f];
            DeclensionEndings[decl][PL][AllCases[f]] = pl[f];
        }
    }
    DeclensionEndingsPrep = null;
}

function wordFilter (a, filters, append) {
    /* remove any words not of the selected chapters and declensions */
    var b = [];
    if (filterEmpty()) {
        return b;
    }
    for (var i=0 ; i<a.length ; i++) {
        var word = a[i];
        var chapter = wordCap(word);
        var declensionNumber = +(wordDecl(word).charAt(0));
        var gender = wordGender(word);
        if (setMember(filters.caps, chapter))
            if (setMember(filters.decls, declensionNumber)) {
                var genders = gender.split("");
                if (setIntersect(filters.genders, genders))
                    if (!(pluralisTantum(word) && !setMember(filters.number, PL))) {
                        append(b, word, filters);
                    }
            }
    }
    return b;
}

function pushWordStruct(list, w, filters) {
    for (var caseIndex in filters.cases) {
        for (var numberIndex in filters.number) {
            if (pluralisTantum(w) && filters.number[numberIndex] === "sg") {
                continue;
            }
            var ws = {"w" : w, "n" : filters.number[numberIndex], "c" : filters.cases[caseIndex] };
            ws.inflected = macronize(wordDecline(ws.w, ws.n, ws.c))
            if (!alreadyCorrect(ws.inflected)) {
                list.push(ws);
            }
        }
    }
}


function copyArray (a) {
    var b = [];
    for (var i in a)
        b.push(a[i]);
    return b;
}

function compareAnswer (input) {
    var entered = input.value;
    if (entered.length === 0) {
        return;
    }
    var resultCell = input.parentNode.nextSibling;
    var answer = resultCell.id;
    var msg;
    if (answer.toLowerCase() == entered.toLowerCase()) {
        msg = answer + " ✓";
        resultCell.className = "correct";
        CorrectlyAnswered.push(answer);
        input.removeAttribute("onKeypress");
    }
    else {
        msg = answer + " !";
        resultCell.className = "incorrect";
    }
    setResponseText(resultCell, msg);
}

function setResponseText(resultNode, msg) {
    var oldTextNode = resultNode.childNodes[0];
    if (oldTextNode) {
        resultNode.removeChild(oldTextNode);
    }
    resultNode.appendChild(document.createTextNode(msg));
}


function askWord() {
    if (Filters.dirty) {
        applyFilter();
        displayWordCount(WordStructs.length);
    }
    if (WordStructs.length === 0) {
        promptContinue();
    } else {
        addNewRow(WordStructs.pop());
    }
}

function promptShow() {
    var button = document.getElementById("dumpButton");
    if (button) {
        button.focus();
    }
}

function promptContinue() {
    var button = document.getElementById("continueButton");
    if (QuizBegun && button) {
        button.focus();
    }
}

function alreadyCorrect(inflected) {
    for (var i in CorrectlyAnswered) {
        if (CorrectlyAnswered[i] === inflected) {
            return true;
        }
    }
    return false;
}

function newTable(id) {
    var div = document.getElementById("main");
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    table.id = id;
    table.appendChild(tbody);
    div.appendChild(table);
    return table;
}

function tbody(tableID) {
    var table = document.getElementById(tableID);
    if (table) {
        return table;
    }
    return newTable(tableID).firstChild;
}

function addNewRow(wordStruct) {
    var tr = tbody("quizTable").insertRow(-1);
    setNewCounter(tr.insertCell(-1));
    setNewEntry(tr.insertCell(-1), wordStruct.w);
    setNewCaseNumberLabel(tr.insertCell(-1), wordStruct.c, wordStruct.n);
    setNewInput(tr.insertCell(-1));
    setNewResult(tr.insertCell(-1), wordStruct.inflected);

    if (window.scrollBy) {    /* scroll down -- not standard */
        window.scrollBy(0,100);
    }
}

function setNewCounter(td) {
    var oldCounter = document.getElementById("quizRowCounter");
    if (oldCounter) {
        oldCounter.removeAttribute("id");
        oldCounter.removeChild(oldCounter.childNodes[0]);
    }
    td.id = "quizRowCounter";
    td.appendChild(document.createTextNode(++QuizRowCounter));
}

function setNewEntry(td, w) {
    /* Show the sg nominative, sg genitive ending, and gender of the word. */
    td.className = "ref";
    var txt = macronize(wordNom(w)) + " " + macronize(wordGenEnd(w)) + " " + wordGender(w);
    if (pluralisTantum(w))
        txt = txt + " pl";
    td.appendChild(document.createTextNode(txt));
}

function setNewCaseNumberLabel(td, targetCase, number) {
    td.className = "targetform";
    if (number == PL)
        td.className += " plural";
    td.appendChild(document.createTextNode(targetCase + " " + number + ":"));
}

function setNewInput(td) {
    var input = document.createElement("input");
    /* avoid NS_ERROR_XPC_JS_THREW_STRING autocomplete bug */
    input.setAttribute("autocomplete", "off");
    input.setAttribute("type", "text");
    input.setAttribute("size", "20");
    input.onkeypress = checkKeypress;
    setLast(input);
    td.appendChild(input);
    input.select();
    input.focus();
}

function setLast(input) {
    var oldLast = document.getElementById("lastRow");
    if (oldLast) {
        oldLast.removeAttribute("id");
    }
    input.id = "lastRow";
}

function setNewResult(td, resultValueText) {
    td.id = resultValueText;
    td.className = "result";
}

function dumpRow (word, sg, pl) {
    /* Add two (or one) rows filled with all the declensions */
    var wordHeading = macronize(wordNom(word)) + " " + macronize(wordGenEnd(word)) + " " + wordGender(word);
    if (sg) {
        sgRow(word, wordHeading);
    }
    if (pl) {
        plRow(word, wordHeading, sg);
    }
}

function sgRow(word, heading) {
    var tr = newRow();
    setHeader(tr, heading);
    setRowMembers(tr, word, SG);
}

function plRow(word, heading, sg) {
    var tr = newRow();
    if (!sg) {
        if (pluralisTantum(word)) {
            heading = heading + " pl";
        }
        setHeader(tr, heading);
    }
    else {
        tr.insertCell(-1);
    }
    setRowMembers(tr, word, PL);
}

function setHeader(tr, headingTxt) {
    var th = tr.insertCell(-1);
    th.className = "ref";
    th.appendChild(document.createTextNode(headingTxt));
}

function newRow() {
    var tr = tbody("listTable").insertRow(-1);
    tr.className = "dump";
    return tr;
}

function setRowMembers(tr, word, number) {
    for (var i in AllCases)
        if (setMember(Filters.cases, AllCases[i])) {
            var td = tr.insertCell(-1);
            var inflectedWord = macronize(wordDecline(word, number, AllCases[i]));
            td.appendChild(document.createTextNode(inflectedWord));
        }
}

function notifyFilters() {
    markFilter();
    if (document.getElementById("quizTable")) {
        promptContinue();
    } else if (document.getElementById("listTable")) {
        promptShow();
    }
}

function filterEmpty() {
    return Filters.number.length === 0 ||
        Filters.genders.length === 0 ||
        Filters.cases.length === 0 ||
        Filters.decls.length === 0 ||
        Filters.caps.length === 0;
}

/*
Event Handlers
*/

function init() {
    /* read the macron vowels; I don't know how to get them otherwise */
    var macronList = document.getElementById("macrons").firstChild.nodeValue;
    macrons_init(macronList);
    fillDeclensionEndingsArray();

    /* set up default Filters */
    Filters.caps = [1];
    Filters.decls = copyArray(AllDecls);
    Filters.cases = copyArray(AllCases);
    Filters.genders = copyArray(AllGenders);
    Filters.number = copyArray(AllNumbers);
    Filters.dirty = true;

    var i = 0;

    /* figure out which chapters are implemented */
    for (i in OrigWords)
        setAdd(ImplementedChapters, wordCap(OrigWords[i]));

    /* disable unimplemented chapters */
    var unimplemented = setSubtract(AllChapters, ImplementedChapters);
    for (i in unimplemented)
        document.getElementById("cap"+unimplemented[i]).disabled = true;

    /* uncheck (for reloads), then check chapters, decls, etc. */
    for (i in ImplementedChapters)
        document.getElementById("cap"+ImplementedChapters[i]).checked = false;
    for (i in AllDecls)
        document.getElementById("d"+AllDecls[i]).checked = false;
    for (i in AllCases)
        document.getElementById("f"+AllCases[i]).checked = false;
    for (i in AllGenders)
        document.getElementById("g"+AllGenders[i]).checked = false;
    for (i in AllNumbers)
        document.getElementById(AllNumbers[i]).checked = false;

    for (i in Filters.caps)
        document.getElementById("cap"+Filters.caps[i]).checked = true;
    for (i in Filters.decls)
        document.getElementById("d"+Filters.decls[i]).checked = true;
    for (i in Filters.cases)
        document.getElementById("f"+Filters.cases[i]).checked = true;
    for (i in Filters.genders)
        document.getElementById("g"+Filters.genders[i]).checked = true;
    for (i in Filters.number)
        document.getElementById(Filters.number[i]).checked = true;
}

function chCap (el, cap) {
    var i = 0;
    /* one of the chapter filter control checkboxes changed */
    if (cap == "all") {
        /* Select all chapters */
        Filters.caps = copyArray(ImplementedChapters);
        /* check all the boxes */
        for (i in Filters.caps)
            document.getElementById("cap"+Filters.caps[i]).checked = true;
    }
    else if (cap == "none") {
        /* deselect all chapters */
        Filters.caps = [];
        /* uncheck all the boxes */
        for (i in ImplementedChapters)
            document.getElementById("cap"+ImplementedChapters[i]).checked = false;
    }
    else if (el.checked)
        setAdd(Filters.caps, cap);
    else
        setRemove(Filters.caps, cap);
    notifyFilters();
    return true;
}

function chDecl (el, decl) {
    var i = 0;
    /* one of the Declension filter control checkboxes changed */
    if (decl == "all") {
        /* Select all decls */
        Filters.decls = copyArray(AllDecls);
        /* check all the boxes */
        for (i in Filters.decls)
            document.getElementById("d"+Filters.decls[i]).checked = true;
    }
    else if (decl == "none") {
        /* deselect all decls */
        Filters.decls = [];
        /* uncheck all the boxes */
        for (i in AllDecls)
            document.getElementById("d"+AllDecls[i]).checked = false;
    }
    else if (el.checked)
        setAdd(Filters.decls, decl);
    else
        setRemove(Filters.decls, decl);
    notifyFilters();
    return true;
}

function chCase (el, casus) {
    var i = 0;
    /* one of the Form filter control checkboxes changed */
    if (casus == "all") {
        Filters.cases = copyArray(AllCases);
        for (i in Filters.cases)
            document.getElementById("f"+Filters.cases[i]).checked = true;
    }
    else if (casus == "none") {
        Filters.cases = [];
        for (i in AllCases)
            document.getElementById("f"+AllCases[i]).checked = false;
    }
    else if (el.checked)
        setAdd(Filters.cases, casus);
    else
        setRemove(Filters.cases, casus);
    notifyFilters();
    return true;
}

function chGender (el, gender) {
    if (el.checked)
        setAdd(Filters.genders, gender);
    else
        setRemove(Filters.genders, gender);
    notifyFilters();
    return true;
}

function chCount (el, count) {
    if (el.checked)
        setAdd(Filters.number, count);
    else
        setRemove(Filters.number, count);
    notifyFilters();
    return true;
}

function applyFilter() {
    WordStructs = randomize(wordFilter(OrigWords, Filters, pushWordStruct));
    Filters.dirty = false;
}

function markFilter() {
    Filters.dirty = true;
}

function deleteTable(id) {
    var table = document.getElementById(id);
    if (table) {
        table.parentNode.removeChild(table);
    }
}

function newQuiz() {
    deleteTable("listTable");
    deleteTable("quizTable");
    CorrectlyAnswered = [];
    markFilter();
    QuizBegun = true;
    QuizRowCounter = 0;
    askWord();
}

function askMore() {
    deleteTable("listTable");
    askWord();
    QuizBegun = true;
}

function dumpWords() {
    //console.log("caps: "+Filters.caps+" decls:"+Filters.decls+" cases:"+Filters.cases+" genders:"+Filters.genders+" number:"+Filters.number);
    deleteTable("listTable");
    deleteTable("quizTable");
    Words = wordFilter(OrigWords, Filters, function (list, w) { list.push(w); });
    displayWordCount(Words.length);

    if (Words.length === 0) {
        return;
    }
    var sg = setMember(Filters.number, SG);
    var pl = setMember(Filters.number, PL);
    for (var i in Words) {
        var word = Words[i];
        if (pluralisTantum(word))
            dumpRow(word, false, pl);
        else
            dumpRow(word, sg, pl);
    }
}


function displayWordCount(total) {
    var span = document.getElementById("wordCount");
    if (span) {
        span.removeChild(span.childNodes[0]);
    } else {
        span = document.createElement("span");
        span.id = "wordCount";
        document.getElementById("buttonRow").appendChild(span);
    }
    span.appendChild(document.createTextNode(total + " words"));
}

function checkKeypress(event) {
    /* Check answer after ENTER keypress */
    if (((event) && (event.keyCode == 13)) || ((window.event) && (window.event.keyCode == 13))) {
        var input = event.target;
        compareAnswer(input);
        if (input.id === "lastRow") {
            askWord();
        } else {
            var last = document.getElementById("lastRow");
            last.select();
            last.focus();
        }
    } else
        /* ignore */;
        return true;
}
