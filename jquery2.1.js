/*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
(function(a, b) {
    function m(a, b, c) {
        var d = h[b.type] || {};
        return a == null ? (c || !b.def ? null : b.def) : (
            a = d.floor ? ~~a : parseFloat(a),
            isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a
        );
    }
    function n(b) {
        var c = f(),
            d = c._rgba = [];
        return b = b.toLowerCase(),
            l(e, function(a, e) {
                var f, h = e.re.exec(b),
                    i = h && e.parse(h),
                    j = e.space || "rgba";
                if (i) {
                    f = c[j](i);
                    c[g[j].cache] = f[g[j].cache];
                    d = c._rgba = f._rgba;
                    return !1;
                }
            }),
            d.length ? (d.join() === "0,0,0,0" && a.extend(d, k.transparent), c) : k[b];
    }
    
    // More functions continue here...
    
})(jQuery);
