/* libArray.js */
/* Mike Wilson, cmikewilsonAgmailDcom */
/* June 12, 2005 */
/* simple, generic array utilities */

/* ugly, but from w3schools.com */
function isArray (myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

function copyArray (a) {
    var b = [];
    for (var i in a)
        b.push(a[i]);
    return b;
}

function equal (a,b) {
    if ((typeof(a)=="number") && (typeof(b)=="number"))
	return (a==b);
    if (a.length == b.length) {
        for (i in a)
	    if (! equal(a[i],b[i]))
	        return false;
        return true;
        }
    else
        return false;
}

function map (f,as) {
    bs = []
    for (var a in as)
	bs.push(f(a))
    return bs;
}

function member (item, as) {
    for (var i in as)
	if (item == as[i])
	    return true;
    return false;
}

function removeall2 (item,as,start) {
    for (var i=start ; i<as.length ; i++)
	if (item==as[i]) {
	    as.splice(i,1);
	    removeall2(item,as,i);
	    break;
	}
    return as;
}

function removeall (item,as) {
    return removeall2(item,as,0);
}
