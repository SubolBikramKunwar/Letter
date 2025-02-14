/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
(function(a, b) {
    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = a.document ? b(a, true) : function(a) {
            if (!a.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return b(a);
        };
    } else {
        b(a);
    }

}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var arr = [];
    var document = window.document;
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};

    function DOMEval(code, doc) {
        doc = doc || document;
        var script = doc.createElement("script");
        script.text = code;
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    
    // More functions continue here...
}));
