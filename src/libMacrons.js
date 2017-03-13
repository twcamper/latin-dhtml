/* libMacrons.js */
/* Mike Wilson, April 8, 2005 */
/* Anyone may copy and/or modify this software without restriction */

/*
- There's probably a way to get the current font size.
  Using that one can pick from a selection of images showing
  a macron-enabled Y and y, thereby circumventing bad Y-macron fonts.
*/

/*
IMPORT: ()
EXPORT: macrons_init, macronsPrintable, macronsComparable
*/

var Macrons = new Array();

function macronsPrintable (str) {
    /* I want to use macron characters when printing
       so replace _a, _e, etc. with macroned a, e, ....
       */
    var newstr = new String();
    var i=0;
    while (i<str.length) {
        if (str.charAt(i) == "_")
            newstr += Macrons[str.charAt(++i)];
        else
            newstr += str.charAt(i);
        i++;
    }
    return newstr;
}

function macronsComparable (str) {
    /* Remove macrons to compare with user input */
    /* .replace()? Will need to copy anyway? */
    var newstr = new String();
    var i=0;
    while (i<str.length) {
        if (str.charAt(i) == "_")
            newstr += str.charAt(++i);
        else
            newstr += str.charAt(i);
        i++;
    }
    return newstr;
}

function macrons_init (macronStr) {
    /* Read macron vowels from the hidden SPAN and store them.
       (There must be a way to encode them directly.)
       I need to figure out a way to stick them in a source code array.
       */
    if (macronStr.length != 12)
        alert("macrons_init => macronStr of invalid length ("
            + macronStr.length + "): " + macronStr);
    var letters = "aeiouyAEIOUY";
    var i;
    for (i=0 ; i<letters.length ; i++)
        Macrons[letters.charAt(i)] = macronStr.charAt(i);
    /* These two aren't supported by current browser fonts
       and get displayed as y- or Y-.  So, just ignore the y macron.
       */
    Macrons["y"] = "y";
    Macrons["Y"] = "Y";
    return;
}
