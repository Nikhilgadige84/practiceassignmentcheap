(function(window, document) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);

    function fa(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }

    function ha(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function t(a) {
        if (!(a instanceof Array)) {
            a = ha(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ia = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja;

    function u(a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.sc = b.prototype
    }
    var oa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    fa("Object.assign", function(a) {
        return a || oa
    });
    fa("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var v = this || self;

    function pa() {}

    function qa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ta(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ua(a, b) {
        a = a.split(".");
        var c = v;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function va(a) {
        return a
    };
    var wa;

    function xa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function ya(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function w(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function za(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Aa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ca(a, b, c) {
        var d = c;
        w(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Da(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ea(a, b) {
        var c = 0;
        w(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Fa(a, b) {
        b = Ga(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ga(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ha(a, b) {
        return 0 <= ya(a, b)
    }

    function Ia(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ja(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ka(a, b) {
        a.sort(b || La)
    }

    function La(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ma(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function Na(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Oa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Pa(a) {
        var b = Qa,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Ra(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function x(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Sa.length; f++) c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ta;

    function Ua(a, b) {
        this.Eb = a === Va && b || "";
        this.g = Xa
    }
    Ua.prototype.Rb = !0;

    function Ya(a) {
        return a instanceof Ua && a.constructor === Ua && a.g === Xa ? a.Eb : "type_error:Const"
    }
    var Xa = {},
        Va = {};

    function Za(a) {
        if (void 0 === Ta) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (d) {
                    v.console && v.console.error(d.message)
                }
                Ta = b
            } else Ta = b
        }(b = Ta) && b.createScriptURL(a)
    };

    function $a(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var ab = /&/g,
        bb = /</g,
        cb = />/g,
        db = /"/g,
        eb = /'/g,
        fb = /\x00/g,
        gb = /[\x00&<>"']/;

    function y(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function hb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var z;
    a: {
        var ib = v.navigator;
        if (ib) {
            var jb = ib.userAgent;
            if (jb) {
                z = jb;
                break a
            }
        }
        z = ""
    }

    function A(a) {
        return -1 != z.indexOf(a)
    };

    function kb() {
        return A("Safari") && !(lb() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || A("Firefox") || A("FxiOS") || A("Silk") || A("Android"))
    }

    function lb() {
        return (A("Chrome") || A("CriOS")) && !A("Edge")
    };

    function mb(a) {
        gb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ab, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(bb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(cb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(db, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(eb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;")));
        return a
    }

    function nb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function ob(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function pb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var qb = "function" === typeof Uint8Array.prototype.slice,
        rb = 0,
        sb = 0;

    function tb() {
        this.g = new Uint8Array(64);
        this.h = 0
    }
    tb.prototype.push = function(a) {
        if (!(this.h + 1 < this.g.length)) {
            var b = this.g;
            this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
            this.g.set(b)
        }
        this.g[this.h++] = a
    };
    tb.prototype.length = function() {
        return this.h
    };
    tb.prototype.end = function() {
        var a = this.g,
            b = this.h;
        this.h = 0;
        return qb ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
    };

    function ub(a, b) {
        for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
        a.push(b)
    }

    function vb(a, b) {
        a.push(b >>> 0 & 255);
        a.push(b >>> 8 & 255);
        a.push(b >>> 16 & 255);
        a.push(b >>> 24 & 255)
    };

    function wb(a) {
        wb[" "](a);
        return a
    }
    wb[" "] = pa;

    function xb(a, b) {
        try {
            return wb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function yb(a, b) {
        var c = zb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ab = A("Opera"),
        B = A("Trident") || A("MSIE"),
        Bb = A("Edge"),
        Eb = A("Gecko") && !(y(z, "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        Fb = y(z, "WebKit") && !A("Edge"),
        Gb = Fb && A("Mobile");

    function Hb() {
        var a = v.document;
        return a ? a.documentMode : void 0
    }
    var Ib;
    a: {
        var Jb = "",
            Kb = function() {
                var a = z;
                if (Eb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Bb) return /Edge\/([\d\.]+)/.exec(a);
                if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Fb) return /WebKit\/(\S+)/.exec(a);
                if (Ab) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Kb && (Jb = Kb ? Kb[1] : "");
        if (B) {
            var Lb = Hb();
            if (null != Lb && Lb > parseFloat(Jb)) {
                Ib = String(Lb);
                break a
            }
        }
        Ib = Jb
    }
    var Mb = Ib,
        zb = {};

    function Nb(a) {
        return yb(a, function() {
            for (var b = 0, c = $a(String(Mb)).split("."), d = $a(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = hb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || hb(0 == g[2].length, 0 == h[2].length) || hb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Ob;
    if (v.document && B) {
        var Pb = Hb();
        Ob = Pb ? Pb : parseInt(Mb, 10) || void 0
    } else Ob = void 0;
    var Qb = Ob;
    var Rb = {},
        Sb = null;

    function Tb(a) {
        var b;
        void 0 === b && (b = 0);
        if (!Sb) {
            Sb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Rb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Sb[h] && (Sb[h] = g)
                }
            }
        }
        b = Rb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var m = a[f],
                n = a[f + 1];
            h = a[f + 2];
            g = b[m >> 2];
            m = b[(m & 3) << 4 | n >> 4];
            n = b[(n & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + m + n + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Ub() {
        this.h = [];
        this.g = new tb
    }

    function Vb(a, b, c) {
        if (null != c) {
            ub(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            rb = b;
            sb = d;
            c = rb;
            for (b = sb; 0 < b || 127 < c;) a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.push(c)
        }
    };
    var Wb = "function" === typeof Uint8Array;

    function Xb(a, b, c) {
        return "object" === typeof a ? Wb && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Yb(a, b, c) : b(a)
    }

    function Yb(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = Xb(f, b, c))
            }
            Array.isArray(a) && a.Sb && Zb(d);
            return d
        }
        d = {};
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Xb(f, b, c)));
        return d
    }

    function $b(a) {
        return Yb(a, function(b) {
            return "number" === typeof b ? isFinite(b) ? b : String(b) : b
        }, function(b) {
            return Tb(b)
        })
    }
    var ac = {
        Sb: {
            value: !0,
            configurable: !0
        }
    };

    function Zb(a) {
        Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, ac);
        return a
    };

    function bc(a, b, c, d) {
        cc(this, a, b, c, d)
    }
    var dc;

    function cc(a, b, c, d, e) {
        a.l = null;
        dc && (b || (b = dc), dc = null);
        var f = a.constructor.qc;
        b || (b = f ? [f] : []);
        a.i = f ? 0 : -1;
        a.g = b;
        a: {
            f = a.g.length;b = -1;
            if (f && (b = f - 1, f = a.g[b], !(null === f || "object" != typeof f || Array.isArray(f) || Wb && f instanceof Uint8Array))) {
                a.j = b - a.i;
                a.h = f;
                break a
            } - 1 < c ? (a.j = Math.max(c, b + 1 - a.i), a.h = null) : a.j = Number.MAX_VALUE
        }
        a.m = {};
        if (d)
            for (c = 0; c < d.length; c++) b = d[c], b < a.j ? (b += a.i, (f = a.g[b]) ? Zb(f) : a.g[b] = ec) : (fc(a), (f = a.h[b]) ? Zb(f) : a.h[b] = ec);
        if (e && e.length)
            for (d = 0; d < e.length; d++) {
                b = c = void 0;
                f = a;
                for (var g = e[d], h = 0; h < g.length; h++) {
                    var m = g[h],
                        n = gc(f, m);
                    null != n && (b = m, c = n, hc(f, m, void 0))
                }
                b && hc(f, b, c)
            }
    }
    var ec = Object.freeze(Zb([]));

    function fc(a) {
        var b = a.j + a.i;
        a.g[b] || (a.h = a.g[b] = {})
    }

    function gc(a, b) {
        if (b < a.j) {
            b += a.i;
            var c = a.g[b];
            return c !== ec ? c : a.g[b] = Zb([])
        }
        if (a.h) return c = a.h[b], c !== ec ? c : a.h[b] = Zb([])
    }

    function hc(a, b, c) {
        b < a.j ? a.g[b + a.i] = c : (fc(a), a.h[b] = c)
    }

    function ic(a, b, c) {
        0 !== c ? hc(a, b, c) : b < a.j ? a.g[b + a.i] = null : (fc(a), delete a.h[b]);
        return a
    }

    function jc(a) {
        if (a.l)
            for (var b in a.l)
                if (Object.prototype.hasOwnProperty.call(a.l, b)) {
                    var c = a.l[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && jc(c[d]);
                    else c && jc(c)
                }
        return a.g
    }
    bc.prototype.toJSON = function() {
        var a = this.g && jc(this);
        return $b(a)
    };
    bc.prototype.toString = function() {
        return jc(this).toString()
    };

    function kc(a, b) {
        a = gc(a, b);
        return null == a ? 0 : a
    };
    var lc;
    lc = ["av.key", "js", "20210716"].slice(-1)[0];
    var C = document,
        D = window;
    var mc = {};

    function nc() {}

    function oc(a, b) {
        if (b !== mc) throw Error("Bad secret");
        this.g = a
    }
    u(oc, nc);
    oc.prototype.toString = function() {
        return this.g
    };
    new oc("about:invalid#zTSz", mc);

    function pc(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var qc = xa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            v.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function rc(a) {
        return a ? a.passive && qc() ? a : a.capture || !1 : !1
    }

    function sc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, rc(d)), !0) : !1
    }

    function tc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, rc(void 0))
    };
    var uc = !B || 9 <= Number(Qb),
        vc = B || Ab || Fb;

    function F(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function G(a, b) {
        this.width = a;
        this.height = b
    }
    G.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    G.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    G.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    G.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function wc(a) {
        return a ? new xc(H(a)) : wa || (wa = new xc)
    }

    function yc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : zc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function zc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Ha(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function Ac(a, b) {
        Na(b, function(c, d) {
            c && "object" == typeof c && c.Rb && (c = c.Eb);
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Bc.hasOwnProperty(d) ? a.setAttribute(Bc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Bc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Cc(a) {
        var b = a.scrollingElement ? a.scrollingElement : Fb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return B && Nb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Dc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Fc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!uc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', mb(g.name), '"');
            if (g.type) {
                f.push(' type="', mb(g.type), '"');
                var h = {};
                x(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = String(f);
        "application/xhtml+xml" === e.contentType && (f = f.toLowerCase());
        f = e.createElement(f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : Ac(f, g));
        2 < d.length && Gc(e, f, d, 2);
        return f
    }

    function Gc(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!qa(f) || sa(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (sa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                w(g ? Ja(f) : f, e)
            }
        }
    }

    function H(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Hc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Dc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function Ic(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function xc(a) {
        this.g = a || v.document || document
    }
    xc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    xc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    xc.prototype.append = function(a, b) {
        Gc(H(a), a, arguments, 1)
    };
    xc.prototype.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };

    function Jc() {
        return A("iPad") || A("Android") && !A("Mobile") || A("Silk")
    };
    var Kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Lc(a) {
        try {
            return !!a && null != a.location.href && xb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Mc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Nc() {
        var a = Oc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };

    function I(a, b, c, d) {
        this.top = a;
        this.h = b;
        this.g = c;
        this.left = d
    }

    function Pc(a) {
        return a.h - a.left
    }

    function Qc(a) {
        return a.g - a.top
    }

    function Rc(a) {
        return new I(a.top, a.h, a.g, a.left)
    }
    I.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.h = Math.ceil(this.h);
        this.g = Math.ceil(this.g);
        this.left = Math.ceil(this.left);
        return this
    };
    I.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.h = Math.floor(this.h);
        this.g = Math.floor(this.g);
        this.left = Math.floor(this.left);
        return this
    };
    I.prototype.round = function() {
        this.top = Math.round(this.top);
        this.h = Math.round(this.h);
        this.g = Math.round(this.g);
        this.left = Math.round(this.left);
        return this
    };

    function Sc(a, b, c) {
        b instanceof F ? (a.left += b.x, a.h += b.x, a.top += b.y, a.g += b.y) : (a.left += b, a.h += b, "number" === typeof c && (a.top += c, a.g += c));
        return a
    };

    function Tc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Uc(a) {
        if (Vc()) Tc(window, a, !0);
        else {
            var b = v.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                c || (c = b.createElement("IFRAME"), c.style.display = "none", c.id = "goog-srcless-iframe", b.body.appendChild(c));
                b = c
            } else b = null;
            b && b.contentWindow && Tc(b.contentWindow, a, !0)
        }
    }
    var Vc = xa(function() {
        return "referrerPolicy" in v.document.createElement("img")
    });
    var Wc = {};

    function Xc(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Yc(a, b) {
        var c = new F(0, 0),
            d = Dc(H(a));
        if (!xb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = H(e);
                var g = new F(0, 0);
                var h = f ? H(f) : document;
                h = !B || 9 <= Number(Qb) || "CSS1Compat" == wc(h).g.compatMode ? h.documentElement : h.body;
                e != h && (e = Xc(e), f = Cc(wc(f).g), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = Xc(a), g = new F(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function Zc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function $c() {
        var a = C.documentElement,
            b = J();
        try {
            if (C.createEvent) {
                var c = C.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Zc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Zc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function ad() {
        var a = J();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var bd = !!window.google_async_iframe_id,
        cd = bd && window.parent || window;

    function J() {
        if (bd && !Lc(cd)) {
            var a = "." + C.domain;
            try {
                for (; 2 < a.split(".").length && !Lc(cd);) C.domain = a = a.substr(a.indexOf(".") + 1), cd = window.parent
            } catch (b) {}
            Lc(cd) || (cd = window)
        }
        return cd
    };

    function dd(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new G(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (r) {
                d = new G(-12245933, -12245933)
            }
            a = d;
            var m = Cc(wc(b.document).g);
            if (-12245933 == a.width) {
                var n = a.width;
                var l = new I(n, n, n, n)
            } else l = new I(m.y, m.x + a.width, m.y + a.height, m.x);
            return l
        } catch (r) {
            return new I(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var ed = {
            NONE: 0,
            Zb: 1
        },
        fd = {
            Yb: 0,
            nc: 1,
            lc: 2,
            oc: 3
        };

    function gd() {
        this.A = 0;
        this.i = !1;
        this.h = -1;
        this.g = !1;
        this.j = 0
    }
    gd.prototype.isVisible = function() {
        return this.g ? .3 <= this.A : .5 <= this.A
    };
    var K = {
            Xb: 0,
            $b: 1
        },
        hd = {
            668123728: 0,
            668123729: 1
        },
        id = {
            44731964: 0,
            44731965: 1
        },
        jd = {
            NONE: 0,
            fc: 1,
            ac: 2
        },
        kd = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };

    function ld() {
        this.g = null;
        this.j = !1;
        this.h = null
    }

    function L(a) {
        a.j = !0;
        return a
    }

    function md(a, b) {
        a.h && w(b, function(c) {
            c = a.h[c];
            void 0 !== c && a.i(c)
        })
    }

    function nd(a) {
        ld.call(this);
        this.l = a
    }
    u(nd, ld);
    nd.prototype.i = function(a) {
        var b;
        if (!(b = null !== this.g)) {
            a: {
                b = this.l;
                for (c in b)
                    if (b[c] == a) {
                        var c = !0;
                        break a
                    }
                c = !1
            }
            b = !c
        }
        b || (this.g = a)
    };

    function od() {
        ld.call(this)
    }
    u(od, ld);
    od.prototype.i = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    };

    function pd() {
        this.g = {};
        this.h = {}
    }

    function M(a, b, c) {
        a.g[b] || (a.g[b] = new nd(c));
        return a.g[b]
    }

    function qd(a, b, c) {
        (a = a.g[b]) && a.i(c)
    }

    function N(a, b) {
        var c = a.h;
        if (null !== c && b in c) return a.h[b];
        if (a = a.g[b]) return a.g
    }

    function rd(a) {
        var b = {},
            c = Oa(a.g, function(d) {
                return d.j
            });
        Na(c, function(d, e) {
            d = void 0 !== a.h[e] ? String(a.h[e]) : d.j && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function sd(a, b) {
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.g[e]) && e.i(d)
        }
        return b.join("&")
    }

    function td(a, b) {
        w(Ra(a.g), function(c) {
            return md(c, b)
        })
    }

    function ud(a, b) {
        b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Aa(b, function(c) {
            return Number(c)
        }), td(a, b))
    };
    var vd = !B && !kb();

    function wd(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (vd && a.dataset) {
            if (!(!A("Android") || lb() || A("Firefox") || A("FxiOS") || A("Opera") || A("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + ob(b))
    }

    function xd(a, b) {
        return /-[a-z]/.test(b) ? !1 : vd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + ob(b)) : !!a.getAttribute("data-" + ob(b))
    };

    function yd() {
        this.g = this.h = null;
        this.i = "no"
    };

    function zd(a, b) {
        this.h = (void 0 === a ? 0 : a) || 0;
        this.g = (void 0 === b ? "" : b) || ""
    }
    zd.prototype.i = function() {
        return !!this.h || !!this.g
    };
    zd.prototype.toString = function() {
        return this.h + (this.g ? "-" : "") + this.g
    };
    zd.prototype.matches = function(a) {
        return this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1
    };

    function O() {}
    O.prototype.g = function() {
        return 0
    };
    O.prototype.i = function() {
        return 0
    };
    O.prototype.j = function() {
        return 0
    };
    O.prototype.h = function() {
        return 0
    };

    function Ad() {
        if (!Bd()) throw Error();
    }
    u(Ad, O);

    function Bd() {
        return !(!D || !D.performance)
    }
    Ad.prototype.g = function() {
        return Bd() && D.performance.now ? D.performance.now() : O.prototype.g.call(this)
    };
    Ad.prototype.i = function() {
        return Bd() && D.performance.memory ? D.performance.memory.totalJSHeapSize || 0 : O.prototype.i.call(this)
    };
    Ad.prototype.j = function() {
        return Bd() && D.performance.memory ? D.performance.memory.usedJSHeapSize || 0 : O.prototype.j.call(this)
    };
    Ad.prototype.h = function() {
        return Bd() && D.performance.memory ? D.performance.memory.jsHeapSizeLimit || 0 : O.prototype.h.call(this)
    };

    function Cd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[C.visibilityState || C.webkitVisibilityState || C.mozVisibilityState || ""] || 0
    };

    function Dd() {}
    Dd.prototype.isVisible = function() {
        return 1 === Cd()
    };
    var Ed = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Fd() {
        var a = v,
            b = [],
            c = null;
        do {
            var d = a;
            if (Lc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new Gd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = v;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.ub = !0);
        return b
    }

    function Hd(a, b) {
        this.g = a;
        this.h = b
    }

    function Gd(a, b, c) {
        this.url = a;
        this.B = b;
        this.ub = !!c;
        this.depth = null
    };

    function Id() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function Jd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Kd(a, b, c, d, e) {
        var f = [];
        Mc(a, function(g, h) {
            (g = Ld(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ld(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Ld(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Kd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Md(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Nd(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(l, r) {
            return l - r
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], m = 0; m < h.length; m++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var n = Kd(h[m], a.i, ",$");
                if (n) {
                    n = e + n;
                    if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a.i;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Nd(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function P(a) {
        if (a.Sa && a.hasOwnProperty("Sa")) return a.Sa;
        var b = new a;
        return a.Sa = b
    };

    function Od() {
        this.h = new Dd;
        this.g = Bd() ? new Ad : new O
    }

    function Pd(a, b, c) {
        return D.setTimeout(b, c)
    }

    function Qd(a) {
        Q();
        var b = J() || D;
        Tc(b, a, !1)
    };

    function Rd() {}

    function Q() {
        var a = P(Rd);
        if (!a.g) {
            if (!D) throw Error("Context has not been set and window is undefined.");
            a.g = P(Od)
        }
        return a.g
    };

    function Sd(a) {
        cc(this, a, -1, null, null)
    }
    u(Sd, bc);

    function Td(a) {
        this.i = a;
        this.g = -1;
        this.h = this.j = 0
    }

    function Ud(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.g) return b.apply(null, t(d));
            try {
                return a.g = a.i.g.g(), b.apply(null, t(d))
            } finally {
                a.j += a.i.g.g() - a.g, a.g = -1, a.h += 1
            }
        }
    };

    function Vd(a, b) {
        this.h = a;
        this.i = b;
        this.g = new Td(a)
    };
    var Wd = {
        jc: 1,
        pc: 2,
        ic: 3
    };
    Za(Ya(new Ua(Va, "https://pagead2.googlesyndication.com/pagead/osd.js")));

    function Xd() {
        this.m = void 0;
        this.i = this.s = 0;
        this.o = -1;
        this.g = new pd;
        L(M(this.g, "mv", jd)).h = void 0 === kd ? null : kd;
        M(this.g, "omid", K);
        L(M(this.g, "epoh", K));
        L(M(this.g, "epph", K));
        L(M(this.g, "umt", K)).h = void 0 === hd ? null : hd;
        L(M(this.g, "phel", K));
        L(M(this.g, "phell", K));
        L(M(this.g, "oseid", Wd));
        var a = this.g;
        a.g.sloi || (a.g.sloi = new od);
        L(a.g.sloi);
        L(M(this.g, "ovms", fd));
        L(M(this.g, "xdi", K));
        L(M(this.g, "amp", K));
        L(M(this.g, "prf", K));
        L(M(this.g, "gtx", K));
        L(M(this.g, "mvp_lv", K));
        L(M(this.g, "ssmol", K)).h = void 0 === id ? null : id;
        this.j = new Vd(Q(), this.g);
        this.h = null;
        this.l = !1
    }

    function R() {
        return P(Xd)
    };

    function Yd() {
        var a = "https:";
        D && D.location && "http:" === D.location.protocol && (a = "http:");
        this.h = a;
        this.g = .01;
        this.i = Math.random()
    }

    function Zd(a, b, c, d, e) {
        if ((d ? a.i : Math.random()) < (e || a.g)) try {
            if (c instanceof Id) var f = c;
            else f = new Id, Mc(c, function(h, m) {
                var n = f,
                    l = n.j++;
                h = Jd(m, h);
                n.g.push(l);
                n.h[l] = h
            });
            var g = Md(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && Qd(g)
        } catch (h) {}
    };
    var $d = null;

    function ae() {
        var a = v.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function be() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ce(a, b) {
        var c = be() || ae();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var S = v.performance,
        de = !!(S && S.mark && S.measure && S.clearMarks),
        ee = xa(function() {
            var a;
            if (a = de) {
                var b;
                if (null === $d) {
                    $d = "";
                    try {
                        a = "";
                        try {
                            a = v.top.location.hash
                        } catch (c) {
                            a = v.location.hash
                        }
                        a && ($d = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = $d;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function fe() {
        var a = J();
        this.h = [];
        this.i = a || v;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = ee() || (null != b ? b : 1 > Math.random())
    }

    function ge(a) {
        a && S && ee() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    fe.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new ce(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && ee() && S.mark(b);
        return a
    };
    fe.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (be() || ae()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            S && ee() && S.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    };

    function he() {
        var a = ie;
        this.h = je;
        this.lb = "jserror";
        this.Wa = !0;
        this.Ka = null;
        this.i = this.Ta;
        this.g = void 0 === a ? null : a
    }

    function ke(a, b, c) {
        return Ud(R().j.g, function() {
            try {
                if (a.g && a.g.g) {
                    var d = a.g.start(b.toString(), 3);
                    var e = c();
                    a.g.end(d)
                } else e = c()
            } catch (g) {
                var f = a.Wa;
                try {
                    ge(d), f = a.i(b, new le(me(g)), void 0, void 0)
                } catch (h) {
                    a.Ta(217, h)
                }
                if (!f) throw g;
            }
            return e
        })()
    }

    function ne(a, b) {
        var c = oe;
        return Ud(R().j.g, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return ke(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    he.prototype.Ta = function(a, b, c, d, e) {
        e = e || this.lb;
        try {
            var f = new Id;
            f.g.push(1);
            f.h[1] = Jd("context", a);
            b.error && b.meta && b.id || (b = new le(me(b)));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = Jd("msg", g)
            }
            var h = b.meta || {};
            if (this.Ka) try {
                this.Ka(h)
            } catch (Ec) {}
            if (d) try {
                d(h)
            } catch (Ec) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            var m = Fd(),
                n = new Gd(v.location.href, v, !1);
            b = null;
            var l = m.length - 1;
            for (d = l; 0 <= d; --d) {
                var r = m[d];
                !b && Ed.test(r.url) && (b = r);
                if (r.url && !r.ub) {
                    n = r;
                    break
                }
            }
            r = null;
            var q = m.length && m[l].url;
            0 != n.depth && q && (r = m[l]);
            var p = new Hd(n, r);
            if (p.h) {
                var Ba = p.h.url || "";
                f.g.push(4);
                f.h[4] = Jd("top", Ba)
            }
            var E = {
                url: p.g.url || ""
            };
            if (p.g.url) {
                var ra = p.g.url.match(Kc),
                    Wa = ra[1],
                    aa = ra[3],
                    Cb = ra[4];
                m = "";
                Wa && (m += Wa + ":");
                aa && (m += "//", m += aa, Cb && (m += ":" + Cb));
                var Db = m
            } else Db = "";
            E = [E, {
                url: Db
            }];
            f.g.push(5);
            f.h[5] = E;
            Zd(this.h, e, f, !1, c)
        } catch (Ec) {
            try {
                Zd(this.h, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: me(Ec),
                    url: p && p.g.url
                }, !1, c)
            } catch (ni) {}
        }
        return this.Wa
    };

    function me(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }

    function le(a) {
        pc.call(this, Error(a), {
            message: a
        })
    }
    u(le, pc);
    var je, oe, ie = new fe;

    function pe() {
        var a = J();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = ie, a.g = !1, a.h != a.i.google_js_reporting_queue && (ee() && w(a.h, ge), a.h.length = 0))
    }(function() {
        je = new Yd;
        oe = new he;
        var a = J();
        a && a.document && ("complete" == a.document.readyState ? pe() : ie.g && sc(a, "load", function() {
            pe()
        }))
    })();

    function qe(a) {
        oe.Ka = function(b) {
            w(a, function(c) {
                c(b)
            })
        }
    }

    function re(a, b) {
        return ke(oe, a, b)
    }

    function se(a, b) {
        return ne(a, b)
    }

    function te(a, b) {
        Zd(je, a, b, "jserror" != a, void 0)
    }

    function ue(a, b, c, d) {
        oe.Ta(a, b, c, d)
    };
    var ve = Date.now(),
        we = -1,
        xe = -1,
        ye = !1;

    function T() {
        return Date.now() - ve
    }

    function ze() {
        var a = R().m,
            b = 0 <= xe ? T() - xe : -1,
            c = ye ? T() - we : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        ue(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function Ae(a, b, c) {
        var d = new I(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.i = b;
        this.g = d;
        this.h = c
    };

    function Be(a, b, c, d, e, f, g) {
        this.l = a;
        this.j = b;
        this.i = c;
        this.h = d;
        this.m = e;
        this.g = f;
        this.o = g
    };

    function Ce(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Lc(a) && (c = a, b = d);
        return {
            B: c,
            level: b
        }
    };
    var Qa = {
        Wb: "addEventListener",
        bc: "getMaxSize",
        cc: "getScreenSize",
        dc: "getState",
        ec: "getVersion",
        kc: "removeEventListener",
        hc: "isViewable"
    };

    function De(a) {
        var b = a !== a.top,
            c = a.top === Ce(a).B,
            d = -1,
            e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2), Pa(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            I: f,
            ya: e,
            Vb: d
        }
    };

    function Ee(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (C && C.URL) {
        var Fe, Oc = C.URL;
        Fe = !!Oc && 0 < Nc().length;
        oe.Wa = !Fe
    }

    function Ge(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = ne(d, c);
        sc(a, b, c, {
            capture: e
        });
        return c
    };

    function He(a) {
        var b = [];
        Na(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + Date.now());
        return b.join("\n")
    };
    var Ie = 0;

    function Je(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Ke(a, b) {
        try {
            Ie++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function Le(a, b) {
        b && (a(b), b.frames && w(b.frames, function(c) {
            Le(a, c)
        }))
    }

    function Me(a) {
        return new I(a.top, a.right, a.bottom, a.left)
    }

    function Ne() {
        var a = Q().h;
        return 0 === Cd() ? -1 : a.isVisible() ? 0 : 1
    }

    function Oe(a) {
        return [a.top, a.left, a.g, a.h].join("-")
    }

    function Pe(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = za(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === D.top || f
                    }), a = ha(c), c = a.next(); !c.done; c = a.next()) Ke(b, c.value);
            else {
                c = [];
                var d = Hc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = Aa(zc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return Hc(e)
                    })
                } catch (e) {}
                a = ha(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Le(ta(Ke, b), c)
                    } catch (e) {}
                }
            }
    }

    function Qe(a, b, c) {
        try {
            var d = He(b);
            Pe(a, d, c)
        } catch (e) {}
    };

    function Re() {
        var a = z;
        return a ? Da("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return y(a, b)
        }) || y(a, "OMI/") && !y(a, "XiaoMi/") ? !0 : y(a, "Presto") && y(a, "Linux") && !y(a, "X11") && !y(a, "Android") && !y(a, "Mobi") : !1
    }

    function Se() {
        var a = z;
        return y(a, "AppleTV") || y(a, "Apple TV") || y(a, "CFNetwork") || y(a, "tvOS")
    }

    function Te() {
        var a = z;
        return y(a, "sdk_google_atv_x86") || y(a, "Android TV")
    };

    function Ue() {
        this.i = !Lc(D.top);
        this.D = !this.i;
        this.m = Jc() || !Jc() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"));
        var a = Fd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(Kc)[3] || null) && decodeURI(a);
        this.g = new I(0, 0, 0, 0);
        this.o = new G(0, 0);
        this.l = new G(0, 0);
        this.h = new I(0, 0, 0, 0);
        this.s = new F(0, 0);
        this.C = this.u = !1;
        this.j = !(!D || !De(D).I);
        Ve(this)
    }

    function We(a, b) {
        b && b.screen && (a.o = new G(b.screen.width, b.screen.height))
    }

    function Xe(a, b) {
        var c = a.g ? new G(Pc(a.g), Qc(a.g)) : new G(0, 0);
        b = void 0 === b ? D : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var m = h.scrollHeight,
                    n = h.scrollWidth,
                    l = h.offsetHeight,
                    r = h.offsetWidth;
                h.clientHeight != l && (m = g.scrollHeight, n = g.scrollWidth, l = g.offsetHeight, r = g.offsetWidth);
                m > c.height ? m > l ? (d = m, e = n) : (d = l, e = r) : m < l ? (d = m, e = n) : (d = l, e = r)
            }
            var q = new G(e, d)
        } catch (p) {
            q = new G(-12245933, -12245933)
        }
        a.l = q
    }

    function Ve(a) {
        D && D.document && (a.h = dd(!1, D, a.m), a.g = dd(!0, D, a.m), Xe(a, D), We(a, D))
    }

    function Ye() {
        if (U().C) return !0;
        var a = Q().h.isVisible(),
            b = 0 === Cd();
        return a || b
    }

    function U() {
        return P(Ue)
    };

    function Ze(a) {
        this.i = a;
        this.h = 0;
        this.g = null
    }
    Ze.prototype.cancel = function() {
        Q();
        D.clearTimeout(this.g);
        this.g = null
    };

    function $e(a) {
        Q();
        a.g = Pd(0, Ud(R().j.g, se(143, function() {
            a.h++;
            a.i.sample()
        })), ze())
    };

    function V(a, b, c) {
        this.B = a;
        this.T = void 0 === c ? "na" : c;
        this.j = [];
        this.u = !1;
        this.i = new Ae(-1, !0, this);
        this.g = this;
        this.m = b;
        this.C = this.s = !1;
        this.L = "uk";
        this.J = !1;
        this.o = !0
    }
    k = V.prototype;
    k.X = function() {
        return !1
    };
    k.Ra = function() {
        return this.u = !0
    };
    k.$ = function() {
        return this.g.L
    };
    k.ga = function() {
        return this.g.C
    };

    function af(a, b, c) {
        if (!a.C || (void 0 === c ? 0 : c)) a.C = !0, a.L = b, a.m = 0, a.g != a || bf(a)
    }
    k.H = function() {
        return this.g.T
    };
    k.P = function() {
        return this.g.ob()
    };
    k.ob = function() {
        return {}
    };
    k.R = function() {
        return this.g.m
    };

    function cf(a, b) {
        Ha(a.j, b) || (a.j.push(b), b.fa(a.g), b.V(a.i), b.U() && (a.s = !0))
    }
    k.Ea = function() {
        var a = U();
        a.g = dd(!0, this.B, a.m)
    };
    k.Fa = function() {
        We(U(), this.B)
    };
    k.$a = function() {
        Xe(U(), this.B)
    };
    k.ab = function() {
        var a = U();
        a.h = dd(!1, this.B, a.m)
    };
    k.Pa = function() {
        return this.i.g
    };

    function df(a) {
        a = a.g;
        a.Fa();
        a.Ea();
        a.ab();
        a.$a();
        a.i.g = a.Pa()
    }
    k.sample = function() {};

    function ef(a) {
        a.s = a.j.length ? Da(a.j, function(b) {
            return b.U()
        }) : !1
    }

    function ff(a) {
        var b = Ja(a.j);
        w(b, function(c) {
            c.V(a.i)
        })
    }

    function bf(a) {
        var b = Ja(a.j);
        w(b, function(c) {
            c.fa(a.g)
        });
        a.g != a || ff(a)
    }
    k.fa = function(a) {
        var b = this.g;
        this.g = a.R() >= this.m ? a : this;
        b !== this.g ? (this.o = this.g.o, bf(this)) : this.o !== this.g.o && (this.o = this.g.o, bf(this))
    };
    k.V = function(a) {
        if (a.h === this.g) {
            var b = this.i,
                c = this.s;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.i == a.i) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.h == c.h && b.g == c.g && b.left == c.left : !1;
            this.i = a;
            !c && ff(this)
        }
    };
    k.U = function() {
        return this.s
    };
    k.F = function() {
        this.J = !0
    };
    k.ha = function() {
        return this.J
    };

    function gf(a, b, c, d) {
        this.h = a;
        this.g = new I(0, 0, 0, 0);
        this.o = new I(0, 0, 0, 0);
        this.i = b;
        this.G = c;
        this.J = d;
        this.D = !1;
        this.timestamp = -1;
        this.s = new Be(b.i, this.g, new I(0, 0, 0, 0), 0, 0, T(), 0)
    }
    k = gf.prototype;
    k.ma = function() {
        return !0
    };
    k.O = function() {};
    k.F = function() {
        if (!this.ha()) {
            var a = this.i,
                b = a.j,
                c = ya(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.s && this.U() && ef(a);
            this.O();
            this.D = !0
        }
    };
    k.ha = function() {
        return this.D
    };
    k.P = function() {
        return this.i.P()
    };
    k.R = function() {
        return this.i.R()
    };
    k.$ = function() {
        return this.i.$()
    };
    k.ga = function() {
        return this.i.ga()
    };
    k.fa = function() {};
    k.V = function() {
        this.Y()
    };
    k.U = function() {
        return this.J
    };

    function hf(a) {
        this.l = !1;
        this.g = a;
        this.j = pa
    }
    k = hf.prototype;
    k.R = function() {
        return this.g.R()
    };
    k.$ = function() {
        return this.g.$()
    };
    k.ga = function() {
        return this.g.ga()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Na(a, b, c), cf(this.g, d));
        return d
    };
    k.bb = function() {
        return this.na()
    };
    k.na = function() {
        return !1
    };
    k.sb = function(a) {
        return this.g.Ra() ? (cf(this.g, this), this.j = a, !0) : !1
    };
    k.fa = function(a) {
        0 == a.R() && this.j(a.$(), this)
    };
    k.V = function() {};
    k.U = function() {
        return !1
    };
    k.F = function() {
        this.l = !0
    };
    k.ha = function() {
        return this.l
    };
    k.P = function() {
        return {}
    };

    function jf(a, b, c) {
        this.i = void 0 === c ? 0 : c;
        this.h = a;
        this.g = null == b ? "" : b
    }

    function kf(a) {
        switch (Math.trunc(a.i)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function lf(a, b) {
        return a.i < b.i ? !0 : a.i > b.i ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };

    function mf() {
        this.i = 0;
        this.g = [];
        this.h = !1
    }
    mf.prototype.add = function(a, b, c) {
        ++this.i;
        a = new jf(a, b, c);
        this.g.push(new jf(a.h, a.g, a.i + this.i / 4096));
        this.h = !0;
        return this
    };

    function nf(a, b) {
        w(b.g, function(c) {
            a.add(c.h, c.g, kf(c))
        })
    }

    function of (a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        Mc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function pf(a) {
        var b = qf;
        a.h && (Ka(a.g, function(c, d) {
            return lf(d, c) ? 1 : lf(c, d) ? -1 : 0
        }), a.h = !1);
        return Ca(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function qf(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ha(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function rf(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new mf;
        void 0 !== a && nf(this.g, a);
        b && this.g.add("v", lc, -16)
    }
    rf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = pf(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };

    function sf(a) {
        var b = [],
            c = [];
        Na(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
            }
        });
        return b.concat(c)
    }

    function tf() {
        if (lc && "unreleased" !== lc) return lc
    };

    function uf() {
        this.g = 0
    }

    function vf(a) {
        this.u = a;
        this.s = !1
    }
    vf.prototype.m = function(a, b) {
        this.g = a;
        this.h = b
    };

    function wf() {
        vf.call(this, "capability")
    }
    u(wf, vf);
    wf.prototype.o = function() {
        return !0
    };
    wf.prototype.l = function() {
        var a = {};
        return a.b_name = this.g.W, a.v_name = this.h.W, a
    };

    function xf() {
        vf.call(this, "diff")
    }
    u(xf, vf);
    xf.prototype.o = function() {
        return !(.02 >= Math.abs(this.h.A - this.g.A))
    };
    xf.prototype.l = function() {
        var a = {};
        return a.b_name = this.g.W, a.v_name = this.h.W, a.b_vp_off = JSON.stringify(this.g.K), a.v_vp_off = JSON.stringify(this.h.K), a.b_vp_sz = JSON.stringify(this.g.Za), a.v_vp_sz = JSON.stringify(this.h.Za), a.b_exp = this.g.A, a.v_exp = this.h.A, a.efp_occ = this.g.Hb, a.sbv = this.g.ja, a
    };

    function yf() {
        vf.call(this, "capt");
        this.j = [];
        this.i = []
    }
    u(yf, vf);
    yf.prototype.m = function(a, b) {
        vf.prototype.m.call(this, a, b);
        20 <= this.i.length || (this.j.push(a.A), this.i.push(b.A))
    };
    yf.prototype.o = function() {
        return 20 === this.i.length
    };
    yf.prototype.l = function() {
        var a = zf(this.j, this.i),
            b = Af(this.j, this.i),
            c = {};
        return c.b_name = this.g.W, c.v_name = this.h.W, c.b_exp = this.j.join(","), c.v_exp = this.i.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function zf(a, b) {
        return Ea(Ma(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function Af(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return zf(Aa(a, c), Aa(b, c))
    };

    function Bf() {
        this.J = this.J;
        this.ua = this.ua
    }
    Bf.prototype.J = !1;
    Bf.prototype.ha = function() {
        return this.J
    };
    Bf.prototype.F = function() {
        this.J || (this.J = !0, this.Z())
    };
    Bf.prototype.Z = function() {
        if (this.ua)
            for (; this.ua.length;) this.ua.shift()()
    };

    function Cf(a, b, c, d, e) {
        e = void 0 === e ? [new wf, new xf, new yf] : e;
        Bf.call(this);
        this.g = a.Na(b, c, this.U());
        this.g.ma();
        this.i = e;
        this.h = d
    }
    u(Cf, Bf);
    Cf.prototype.Z = function() {
        this.g && (this.g.O(), this.g.F())
    };

    function Df(a, b, c) {
        w(a.i, function(d) {
            var e = a.h;
            if (!d.s && (d.m(b, c), d.o())) {
                d.s = !0;
                var f = d.l(),
                    g = new mf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.u);
                d = P(uf);
                g.add("i", d.g++);
                g.add("adk", e); of (g, f);
                e = new rf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = tf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Qd(e)
            }
        })
    }
    Cf.prototype.V = function() {};
    Cf.prototype.fa = function() {};
    Cf.prototype.U = function() {
        return !1
    };

    function Ef() {
        this.g = this.h = this.i = 0
    }

    function Ff(a, b, c, d) {
        b && (a.i += c, a.h += c, a.g = Math.max(a.g, a.h));
        if (void 0 === d ? !b : d) a.h = 0
    };
    var Gf = [1, .75, .5, .3, 0];

    function Hf(a) {
        this.g = a = void 0 === a ? Gf : a;
        this.h = Aa(this.g, function() {
            return new Ef
        })
    }

    function If(a) {
        return Jf(a, function(b) {
            return b.i
        }, !1)
    }

    function Kf(a) {
        return Jf(a, function(b) {
            return b.g
        }, !0)
    }

    function Lf(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.g.length; f++) {
            var h = a.g[f],
                m = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            Ff(a.h[f], g && m, e, !g || h)
        }
    }

    function Jf(a, b, c) {
        a = Aa(a.h, function(d) {
            return b(d)
        });
        return c ? a : Mf(a)
    }

    function Mf(a) {
        return Aa(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Nf() {
        this.g = new Hf;
        this.i = new Ef;
        this.h = -1;
        this.j = new Hf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function W(a) {
        return 1E3 <= a.i.g
    };
    var Of = new I(0, 0, 0, 0);

    function Pf(a, b) {
        b = Qf(b);
        return 0 === b ? 0 : Qf(a) / b
    }

    function Qf(a) {
        return Math.max(a.g - a.top, 0) * Math.max(a.h - a.left, 0)
    }

    function Rf(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (vc && !(B && Nb("9") && !Nb("10") && v.SVGElement && a instanceof v.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = sa(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = H(a),
                        g = f && Dc(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (m) {
                break
            }
        }
        return !1
    }

    function Sf(a, b, c) {
        if (!a || !b) return !1;
        b = Sc(Rc(a), -b.left, -b.top);
        a = (b.left + b.h) / 2;
        b = (b.top + b.g) / 2;
        var d = J();
        Lc(d.top) && d.top && d.top.document && (d = d.top);
        if (!Ee(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = H(c)) && b.defaultView && b.defaultView.frameElement) && Rf(b, a);
        d = a === c;
        a = !d && a && Ic(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Tf(a, b, c, d) {
        return U().i ? !1 : 0 >= Pc(a) || 0 >= Qc(a) ? !0 : c && d ? re(208, function() {
            return Sf(a, b, c)
        }) : !1
    };
    var Uf = new I(0, 0, 0, 0);

    function Vf(a, b, c) {
        Bf.call(this);
        this.position = Rc(Uf);
        this.i = new Nf;
        this.qa = -2;
        this.Jb = -1;
        this.Db = b;
        this.pa = null;
        this.N = !1;
        this.K = null;
        this.L = -1;
        this.va = c;
        this.Kb = this.Ja = pa;
        this.h = new yd;
        this.h.h = a;
        this.h.g = a;
        this.s = !1;
        this.m = {
            Ca: null,
            Ba: null
        };
        this.da = !0;
        this.G = null;
        R().s++;
        this.j = new gd;
        this.Ib = this.xa = -1;
        this.Da = 0;
        this.T = -1;
        this.g = null;
        this.Oa = new I(0, 0, 0, 0);
        this.Bb = !1;
        a = this.l = new pd;
        M(a, "od", ed);
        L(M(a, "opac", K));
        L(M(a, "sbeos", K));
        L(M(a, "prf", K));
        L(M(a, "mwt", K));
        M(a, "iogeo", K);
        (a = this.h.h) && a.getAttribute && xd(a, "googleAvInapp") && (U().j = !0);
        1 == this.va ? qd(this.l, "od", 1) : qd(this.l, "od", 0)
    }
    u(Vf, Bf);
    k = Vf.prototype;
    k.Z = function() {
        Wf(this);
        this.G && this.G.F();
        this.g && this.g.F();
        delete this.i;
        delete this.Ja;
        delete this.Kb;
        delete this.h.h;
        delete this.h.g;
        delete this.m;
        delete this.G;
        delete this.g;
        delete this.l;
        Bf.prototype.Z.call(this)
    };

    function Xf(a) {
        return a.g ? a.g.g : a.position
    }
    k.Ga = function(a) {
        var b = R();
        "string" === typeof a && 0 != a.length && sd(b.g, a)
    };
    k.cb = function() {
        return !1
    };
    k.ia = function() {
        this.N = !0
    };
    k.Aa = function() {
        return this.N
    };
    k.Va = function() {
        this.j.A = 0
    };

    function Yf(a, b) {
        if (a.g) {
            if (b.H() === a.g.H()) return;
            a.g.F();
            a.g = null
        }
        b = b.create(a.h.g, a.l, a.cb());
        if (b = null != b && b.ma() ? b : null) a.g = b
    }

    function Zf(a, b, c) {
        if (a.g) {
            a.g.Y();
            var d = a.g.s,
                e = d.l,
                f = e.g;
            if (null != d.i) {
                var g = d.j;
                a.K = new F(g.left - f.left, g.top - f.top);
                a.Oa = d.i
            }
            f = a.ja() ? Math.max(d.h, d.m) : d.h;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            a.pa && -1 != a.Db && -1 !== d.g && -1 !== a.pa.g ? (e = d.g - a.pa.g, e = 1E4 < e ? 0 : e) : e = 0;
            a.pa = d;
            a.Xa(f, b, c, !1, g, e, d.o)
        }
    }

    function $f(a) {
        if (a.Aa() && a.G) {
            var b = 1 == N(a.l, "od"),
                c = U().g,
                d = a.G,
                e = new G(Pc(c), Qc(c));
            c = a.ja();
            a = {
                W: a.g ? a.g.H() : "ns",
                K: a.K,
                Za: e,
                ja: c,
                A: a.j.A,
                Hb: b
            };
            if (b = d.g) {
                b.Y();
                e = b.s;
                var f = e.l.g,
                    g = null,
                    h = null;
                null != e.i && f && (g = e.j, g = new F(g.left - f.left, g.top - f.top), h = new G(f.h - f.left, f.g - f.top));
                c = {
                    W: b.H(),
                    K: g,
                    Za: h,
                    ja: c,
                    Hb: !1,
                    A: c ? Math.max(e.h, e.m) : e.h
                }
            } else c = null;
            c && Df(d, a, c)
        }
    }
    k.Xa = function(a, b, c, d, e, f, g) {
        this.s || (this.Aa() && (e = new gd, e.i = c, e.h = Ne(), e.A = 0 === this.L && 1 === N(this.l, "opac") ? 0 : a, e.g = this.ba(), e.j = g, a = this.i, c = this.j, d = d && this.j.A >= (this.ba() ? .3 : .5), a.h = Math.max(a.h, e.A), Lf(a.j, e.j, c.j, e.i, f, d), Lf(a.g, e.A, c.A, e.i, f, d), d = d || c.g != e.g ? c.isVisible() && e.isVisible() : c.isVisible(), c = !e.isVisible() || e.i, Ff(a.i, d, f, c), this.Db = b, 0 < e.A && (-1 === this.xa && (this.xa = b), this.Ib = b), -1 == this.Jb && W(this.i) && (this.Jb = b), -2 == this.qa && (this.qa = Qf(Xf(this)) ? e.A : -1), this.j = e), this.Ja(this))
    };
    k.ba = function() {
        return !1
    };
    k.ja = function() {
        return this.Bb || !1
    };

    function ag(a) {
        a.h.g && (a.m.Ca = Ge(a.h.g, "mouseover", function() {
            a.T = T()
        }, 149), a.m.Ba = Ge(a.h.g, "mouseout", function() {
            var b = T(); - 1 == a.T || b < a.T || (a.Da += b - a.T);
            a.T = -1
        }, 150))
    }

    function Wf(a) {
        a.h.g && (a.m.Ca && (tc(a.h.g, "mouseover", a.m.Ca), a.m.Ca = null), a.m.Ba && (tc(a.h.g, "mouseout", a.m.Ba), a.m.Ba = null))
    };
    Za(Ya(new Ua(Va, "https://www.googletagservices.com/activeview/js/current/osd.js")));

    function bg() {
        this.h = this.g = null;
        this.i = !1;
        cg(this)
    }

    function cg(a) {
        a.g || "function" !== typeof D.Goog_AdSense_getAdAdapterInstance || (a.g = D.Goog_AdSense_getAdAdapterInstance());
        if (!a.h) {
            var b = v.goog_osd_adp;
            a.h = b && "function" === typeof b.getOseId ? b : null
        }!a.i && yc() && (a.i = !0)
    }

    function dg(a, b, c, d) {
        cg(a);
        var e = U().u;
        a.g && a.g.getNewBlocks(b, e);
        a.h && a.h.getNewBlocks(b, e);
        a.i && !c() && (d(!0), b(yc(), "", 13, !0))
    }

    function eg(a) {
        cg(a);
        return (a.g ? a.g.numBlocks() : 0) + (a.h ? a.h.numBlocks() : 0) + (a.i ? 1 : 0)
    }

    function fg(a) {
        cg(a);
        return a.g ? a.g.getOseId() : a.h ? a.h.getOseId() : 0
    };

    function gg(a) {
        return kb() ? (a = (a = H(a)) && Dc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var hg = "StopIteration" in v ? v.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function ig() {}
    ig.prototype.next = function() {
        return ig.prototype.g.call(this)
    };
    ig.prototype.g = function() {
        throw hg;
    };
    ig.prototype.eb = function() {
        return this
    };

    function jg(a) {
        if (a instanceof ig) return a;
        if ("function" == typeof a.eb) return a.eb(!1);
        if (qa(a)) {
            var b = 0,
                c = new ig;
            c.g = function() {
                for (;;) {
                    if (b >= a.length) throw hg;
                    if (b in a) return a[b++];
                    b++
                }
            };
            c.next = c.g.bind(c);
            return c
        }
        throw Error("Not implemented");
    }

    function kg(a, b) {
        if (qa(a)) try {
            w(a, b, void 0)
        } catch (c) {
            if (c !== hg) throw c;
        } else {
            a = jg(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== hg) throw c;
            }
        }
    }

    function lg(a, b) {
        var c = 1;
        kg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function mg(a, b) {
        var c = jg(a);
        a = new ig;
        a.g = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw hg;
        };
        a.next = a.g.bind(a);
        return a
    }

    function ng(a) {
        var b = jg(a);
        a = new ig;
        var c = 100;
        a.g = function() {
            if (0 < c--) return b.next();
            throw hg;
        };
        a.next = a.g.bind(a);
        return a
    };

    function og(a, b) {
        this.j = b;
        this.i = null == a;
        this.h = a
    }
    u(og, ig);
    og.prototype.g = function() {
        if (this.i) throw hg;
        var a = this.h || null;
        this.i = null == a;
        var b;
        if (b = a) {
            b = this.j;
            if (xb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? gg : d;
                if (d(a)) try {
                    var e = H(a),
                        f = e && Dc(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.h = b;
        return a
    };
    og.prototype.next = function() {
        return og.prototype.g.call(this)
    };

    function pg(a) {
        var b = 1;
        a = ng(new og(a, !0));
        a = mg(a, function() {
            return 0 < b
        });
        return lg(a, function(c, d) {
            var e = 1;
            if (xb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = H(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[nb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Wc.opacity;
                        if (!h) {
                            var m = nb();
                            h = m;
                            void 0 === d.style[m] && (m = (Fb ? "Webkit" : Eb ? "Moz" : B ? "ms" : Ab ? "O" : null) + pb(m), void 0 !== d.style[m] && (h = m));
                            Wc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    };

    function qg(a, b, c, d, e, f, g) {
        g = void 0 === g ? [] : g;
        Vf.call(this, c, d, e);
        this.Ha = b;
        this.Ia = this.u = 0;
        this.xb = null;
        this.wb = this.nb = "";
        this.pb = [];
        this.rb = [];
        this.kb = this.vb = "";
        this.Ab = !1;
        this.C = 4;
        this.Fb = !1;
        this.aa = [];
        this.M = this.o = "";
        this.Cb = this.mb = this.zb = !1;
        this.oa = 0;
        this.ea = this.yb = Ne();
        this.sa = 0;
        this.ca = f;
        this.Gb = !1;
        this.ra = this.La = this.Ma = this.wa = this.D = -1;
        this.ta = g;
        rg(this, this.h.h);
        ud(R().g, this.Ha)
    }
    u(qg, Vf);

    function sg(a, b, c) {
        return (a = String(a[b] || wd(a, c) || "")) ? a.split("|") : []
    }

    function rg(a, b) {
        if (b) {
            if (0 == a.u)
                if (a.h.h) {
                    var c = a.h.h._adk_;
                    c || (c = (c = wd(a.h.h, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.u;
            a.u = c;
            "" == a.nb && (a.nb = String(b._avi_ || ""));
            "" == a.wb && (a.wb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.pb.length || (a.pb = sg(b, "_avicxn_", "googleAvCxn"));
            a.rb.length || (a.rb = sg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.vb && (a.vb = String(b._aviextcxn_ || wd(b, "googleAvExtCxn") || ""));
            "" == a.kb && (a.kb = String(b._cid_ || ""));
            a.Ab || (a.Ab = !!b._imm_ || xd(b, "googleAvImmediate"));
            "" == a.M && (a.M = String(b._cvu_ || wd(b, "googleAvCpmav") || ""));
            "" == a.o && (a.o = String(wd(b, "googleAvBtr") || ""));
            a.Ga(String(b._avm_ || wd(b, "googleAvMetadata") || ""));
            wd(b, "googleAvFlags");
            R()
        }
    }
    k = qg.prototype;
    k.Z = function() {
        delete this.aa;
        delete this.ta;
        Vf.prototype.Z.call(this)
    };

    function tg(a, b, c) {
        w(a.ta, function(d) {
            return d.g(a, c, b)
        })
    }
    k.Aa = function() {
        return this.N && !(1 == this.sa || 3 == this.sa)
    };
    k.Va = function() {
        Vf.prototype.Va.call(this);
        this.Oa = new I(0, 0, 0, 0)
    };
    k.ia = function() {
        this.N || (this.Ma = ae(), void 0 !== this.ca && this.ca(!1, this.qa), null != this.o && "" != this.o && (Uc(this.o), this.o = ""));
        Vf.prototype.ia.call(this);
        ug(this)
    };

    function ug(a) {
        if (a.N && v == v.top) {
            var b = v.pageYOffset;
            null != b && (a.ra = Math.max(b, a.ra));
            tg(a, 4, {})
        }
    }

    function vg(a) {
        return new zd(a.u, a.xb)
    }
    k.Ga = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new pd,
                c = R();
            M(b, "omid", K);
            sd(b, a);
            b = N(b, "omid");
            null !== b && (c.g.h.omid = b);
            a = sd(this.l, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.da = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.oa = 2 : "1" == d && (this.oa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Bb = !0) : "adf=1" == d && (this.Gb = !0)
            }
            this.j.g = this.ba();
            Vf.prototype.Ga.call(this, a)
        }
    };
    k.Xa = function(a, b, c, d, e, f, g) {
        var h = W(this.i),
            m = Math.floor(100 * this.j.A);
        this.oa = 242500 <= Qf(Xf(this)) ? 1 : 2;
        Vf.prototype.Xa.call(this, a, b, c, d, e, f, g); - 1 == this.ea && -1 != this.j.h ? this.ea = this.j.h : 0 == this.ea && 1 == this.j.h && (this.ea = 1);
        a = W(this.i);
        b = Math.floor(100 * this.j.A);
        (!h && a || b != m) && void 0 !== this.ca && this.ca(a, b);
        try {
            this.L = pg(this.h.g)
        } catch (n) {}
        ug(this)
    };
    k.ba = function() {
        return Gb ? !1 : 1 == this.oa
    };

    function wg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = U(),
            g = rd(a.l),
            h = f.s,
            m = Xf(a);
        g.p = [m.top + h.y, m.left + h.x, m.g + h.y, m.h + h.x];
        h = a.i;
        g.tos = If(h.g);
        g.mtos = Kf(h.g);
        g.mcvt = h.i.g;
        g.rs = a.va;
        (m = 5 == a.va) || (g.ht = a.Da);
        0 <= a.xa && (g.tfs = a.xa, g.tls = a.Ib);
        g.mc = Je(h.h);
        g.lte = Je(a.qa);
        g.bas = a.yb;
        g.bac = a.ea;
        f.i && (g["if"] = a.s ? 0 : 1);
        g.met = a.h.i;
        m && a.Ha && (g.req = encodeURIComponent(a.Ha).substring(0, 100));
        a.Cb && (g.ci = "1");
        a.ba() && (g.la = "1");
        g.avms = a.g ? a.g.H() : "ns";
        a.g && x(g, a.g.P());
        0 != a.sa && (g.md = a.sa);
        g.btr = null != a.o && "" != a.o ? 1 : 0;
        g.cpmav = xg(a) ? 1 : 0;
        g.lm = a.C;
        x(g, yg(a));
        d && x(g, d);
        g.adk = a.u;
        a.Gb && a.Ia && (g.adf = a.Ia);
        d = a.s;
        f = R();
        !c && d && f.h && (c = f.h);
        c && (g.r = c);
        0 === a.L && (g.invis = 1);
        c = sf(g).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = R().i;
        e[0] = b;
        e[7] = a.j.A;
        e[9] = Oe(a.Oa);
        e[28] = a.va;
        e[32] = a.g ? a.g.H() : "ns";
        e[5] = W(a.i) && 4 != a.C;
        e[13] = Kf(a.i.g).join(",");
        e[18] = 0 == Qf(Xf(a));
        null != a.K && (e[20] = a.K.y, e[21] = a.K.x);
        b = U();
        null != b.h && (e[22] = Pc(b.h), e[23] = Qc(b.h));
        null != b.g && (e[30] = Pc(b.g), e[31] = Qc(b.g), e[38] = Oe(b.g));
        c = b.s;
        g = Xf(a);
        e[37] = Oe(new I(g.top + c.y, g.h + c.x, g.g + c.y, g.left + c.x));
        b.l && (b = b.l, e[39] = b.width + "-" + b.height); - 1 != a.L && (e[25] = a.L);
        if (a = vg(a)) a.h && (e[4] = a.h), a.g && (e[12] = a.g);
        return e
    }

    function yg(a) {
        var b = a.D;
        var c = a.D;
        c = -1 == c || a.wa < c ? -1 : a.wa - c;
        var d = -1 == a.D || a.Ma < a.D ? -1 : a.Ma - a.D,
            e = {};
        return e.rst = 0 < b ? b : void 0, e.dlt = 0 <= c ? c : void 0, e.rpt = 0 <= d ? d : void 0, e.isd = 0 <= a.La ? a.La : void 0, e.msd = 0 <= a.ra ? a.ra : void 0, e
    }

    function xg(a) {
        return null != a.M && null != a.M.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
    }
    k.cb = function() {
        return !1
    };

    function zg(a, b, c, d) {
        gf.call(this, a, b, c, d)
    }
    u(zg, gf);
    k = zg.prototype;
    k.hb = function() {
        if (this.h) {
            var a = this.h,
                b = this.i.g.B;
            try {
                try {
                    var c = Me(a.getBoundingClientRect())
                } catch (n) {
                    c = new I(0, 0, 0, 0)
                }
                var d = c.h - c.left,
                    e = c.g - c.top,
                    f = Yc(a, b),
                    g = f.x,
                    h = f.y;
                var m = new I(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (n) {
                m = Rc(Of)
            }
            this.g = m
        }
    };
    k.ib = function() {
        this.o = this.i.i.g
    };
    k.tb = function(a) {
        return Tf(a, this.o, this.h, 1 == N(this.G, "od"))
    };
    k.Y = function() {
        this.timestamp = T();
        this.hb();
        if (this.h && "number" === typeof this.h.videoWidth && "number" === typeof this.h.videoHeight) {
            var a = this.h;
            var b = new G(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = Pc(a),
                d = Qc(a),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Rc(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.g = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.h = Math.round(c + d))));
            this.g = a
        }
        this.ib();
        a = this.g;
        c = this.o;
        a = a.left <= c.h && c.left <= a.h && a.top <= c.g && c.top <= a.g ? new I(Math.max(a.top, c.top), Math.min(a.h, c.h), Math.min(a.g, c.g), Math.max(a.left, c.left)) : new I(0, 0, 0, 0);
        c = a.top >= a.g || a.left >= a.h ? new I(0, 0, 0, 0) : a;
        a = this.i.i;
        b = e = d = 0;
        0 < (this.g.g - this.g.top) * (this.g.h - this.g.left) && (this.tb(c) ? c = new I(0, 0, 0, 0) : (d = U().o, b = new I(0, d.height, d.width, 0), d = Pf(c, this.g), e = Pf(c, U().g), b = Pf(c, b)));
        c = c.top >= c.g || c.left >= c.h ? new I(0, 0, 0, 0) : Sc(c, -this.g.left, -this.g.top);
        Ye() || (e = d = 0);
        this.s = new Be(a, this.g, c, d, e, this.timestamp, b)
    };
    k.H = function() {
        return this.i.H()
    };

    function Ag() {
        this.key = "goog_adspeed";
        this.i = [3, 4];
        this.h = null
    }
    Ag.prototype.g = function(a, b, c) {
        if (!Ha(this.i, c) || !vg(a).i()) return !1;
        c = {};
        c = (c[0] = this.key, c[40] = JSON.stringify(yg(a)), c);
        var d;
        if (d = this.h) a: {
            d = this.h;
            for (var e in d)
                if (!(e in c) || d[e] !== c[e]) {
                    d = !1;
                    break a
                }
            for (var f in c)
                if (!(f in d)) {
                    d = !1;
                    break a
                }
            d = !0
        }
        if (d) return !1;
        this.h = c;
        e = {};
        x(e, c, b);
        return Bg(a, {
            Ya: {},
            Ua: e
        })
    };

    function Cg() {
        this.key = "goog_update_data";
        this.h = 0;
        this.i = !1
    }
    Cg.prototype.g = function(a, b, c) {
        if (c != this.h || !vg(a).i()) return !1;
        c = 1 == a.C;
        var d = W(a.i),
            e = {},
            f = {};
        b = {
            Ua: (e[0] = this.key, e[40] = JSON.stringify(yg(a)), e),
            Ya: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.i ? (this.i = d, Bg(a, b)) : !1;
        this.i = d;
        return Bg(a, b)
    };

    function Dg(a) {
        Cg.call(this, a);
        this.key = "goog_image_request";
        this.h = 2
    }
    u(Dg, Cg);

    function Eg(a) {
        Cg.call(this, a);
        this.key = "goog_image_request";
        this.h = 1
    }
    u(Eg, Cg);
    Eg.prototype.g = function(a, b, c) {
        var d = !a.mb;
        if (W(a.i) && a.da || d) {
            if (b = Cg.prototype.g.call(this, a, b, c))
                if (W(a.i) || (a.mb = !0), W(a.i) || a.da) a.da = !1;
            return b
        }
        return !1
    };

    function Fg(a) {
        return Fa(X.g, function(b) {
            return a.matches(vg(b))
        })
    }

    function Gg(a) {
        var b = X;
        return a ? Fa(b.g, function(c) {
            return c.h.h == a
        }) : null
    }

    function Hg(a) {
        return Fa(a.g, function() {
            return !1
        })
    }

    function Ig() {
        var a = X;
        return 0 == a.h.length ? a.g : 0 == a.g.length ? a.h : Ia(a.g, a.h)
    }

    function Jg() {
        var a = X;
        a.h = [];
        a.g = []
    }

    function Kg(a, b) {
        a = a.g;
        var c = Ga(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), b.g && b.g.O(), b.F(), !0) : !1
    }

    function Lg(a) {
        var b = X;
        if (Kg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Hg(b)
            };
            for (var c = a(); c; c = a()) Kg(b, c)
        }
    }
    var X = P(function() {
        this.h = [];
        this.g = []
    });

    function Mg() {
        this.g = this.h = null
    }

    function Ng(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (null == a.h) return !1;
        a.g = Fa(a.h, function(d) {
            return null != d && d.bb()
        });
        a.g && (a.g.sb(c) ? df(a.g.g) : b(a.g.g.$(), a.g));
        return null != a.g
    };

    function Og(a) {
        a = Pg(a);
        hf.call(this, a.length ? a[a.length - 1] : new V(D, 0));
        this.i = a;
        this.h = null
    }
    u(Og, hf);
    k = Og.prototype;
    k.H = function() {
        return (this.h ? this.h : this.g).H()
    };
    k.P = function() {
        return (this.h ? this.h : this.g).P()
    };
    k.R = function() {
        return (this.h ? this.h : this.g).R()
    };
    k.sb = function(a) {
        var b = !1;
        w(this.i, function(c) {
            c.Ra() && (b = !0)
        });
        b && (this.j = a, cf(this.g, this));
        return b
    };
    k.F = function() {
        w(this.i, function(a) {
            a.F()
        });
        hf.prototype.F.call(this)
    };
    k.bb = function() {
        return Da(this.i, function(a) {
            return a.X()
        })
    };
    k.na = function() {
        return Da(this.i, function(a) {
            return a.X()
        })
    };
    k.Na = function(a, b, c) {
        return new zg(a, this.g, b, c)
    };
    k.V = function(a) {
        this.h = a.h
    };

    function Pg(a) {
        if (!a.length) return [];
        a = za(a, function(c) {
            return null != c && c.X()
        });
        for (var b = 1; b < a.length; b++) cf(a[b - 1], a[b]);
        return a
    };
    var Qg = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Rg(a, b, c, d) {
        gf.call(this, a, b, c, d);
        this.C = this.u = this.l = this.m = this.j = null
    }
    u(Rg, zg);
    k = Rg.prototype;
    k.ma = function() {
        var a = this;
        this.C || (this.C = T());
        if (re(298, function() {
                return Sg(a)
            })) return !0;
        af(this.i, "msf");
        return !1
    };
    k.O = function() {
        if (this.j && this.h) try {
            this.j.unobserve(this.h), this.m ? (this.m.unobserve(this.h), this.m = null) : this.l && (this.l.disconnect(), this.l = null)
        } catch (a) {}
    };

    function Tg(a) {
        return a.j && a.j.takeRecords ? a.j.takeRecords() : []
    }

    function Sg(a) {
        if (!a.h) return !1;
        var b = a.h,
            c = a.i.g.B,
            d = R().j.g;
        a.j = new c.IntersectionObserver(Ud(d, function(e) {
            return Ug(a, e)
        }), Qg);
        d = Ud(d, function() {
            a.j.unobserve(b);
            a.j.observe(b);
            Ug(a, Tg(a))
        });
        c.ResizeObserver ? (a.m = new c.ResizeObserver(d), a.m.observe(b)) : c.MutationObserver && (a.l = new v.MutationObserver(d), a.l.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.j.observe(b);
        Ug(a, Tg(a));
        return !0
    }

    function Ug(a, b) {
        try {
            if (b.length) {
                a.u || (a.u = T());
                var c = Vg(b),
                    d = Yc(a.h, a.i.g.B),
                    e = d.x,
                    f = d.y;
                a.g = new I(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = Me(c.intersectionRect);
                a.o = Sc(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.O(), ue(299, h)
        }
    }

    function Vg(a) {
        return Ca(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Y = function() {
        var a = Tg(this);
        0 < a.length && Ug(this, a);
        zg.prototype.Y.call(this)
    };
    k.hb = function() {};
    k.tb = function() {
        return !1
    };
    k.ib = function() {};
    k.P = function() {
        var a = {};
        return Object.assign(this.i.P(), (a.niot_obs = this.C, a.niot_cbk = this.u, a))
    };
    k.H = function() {
        return "nio"
    };

    function Wg(a) {
        a = void 0 === a ? D : a;
        hf.call(this, new V(a, 2))
    }
    u(Wg, hf);
    Wg.prototype.H = function() {
        return "nio"
    };
    Wg.prototype.na = function() {
        return !U().j && null != this.g.g.B.IntersectionObserver
    };
    Wg.prototype.Na = function(a, b, c) {
        return new Rg(a, this.g, b, c)
    };

    function Xg() {
        var a = Yg();
        V.call(this, D.top, a, "geo")
    }
    u(Xg, V);
    Xg.prototype.Pa = function() {
        return U().g
    };
    Xg.prototype.X = function() {
        var a = Yg();
        this.m !== a && (this.g != this && a > this.g.m && (this.g = this, bf(this)), this.m = a);
        return 2 == a
    };

    function Yg() {
        R();
        var a = U();
        return a.i || a.j ? 0 : 2
    };
    var Zg = {},
        $g = (Zg[1] = function() {
            return new Wg
        }, Zg[2] = function() {
            return new Og([P(Xg)])
        }, Zg);

    function ah() {
        this.g = null;
        this.h = $g
    }

    function bh() {
        var a = P(ah);
        a: {
            var b = N(R().g, "mv");
            if (null != b && (b = a.h[b]) && (b = b()) && b.na()) break a;b = null
        }
        a.g = b
    };

    function ch() {
        this.done = !1;
        this.g = {
            gb: 0,
            fb: 0,
            rc: 0,
            jb: 0,
            za: -1,
            Ob: 0,
            Nb: 0,
            Pb: 0
        };
        this.o = null;
        this.l = this.s = !1;
        this.m = "";
        this.i = null;
        this.u = 0;
        this.h = new Ze(this)
    }

    function dh(a) {
        var b = Y;
        if (!b.s) {
            b.s = !0;
            if (a) {
                a = Ig();
                for (var c, d = 0; d < a.length; ++d) c = a[d], c.h.g && ag(c)
            }
            eh(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.j.apply(b, t(f))
            });
            b.j()
        }
    }
    ch.prototype.sample = function() {
        fh(this, Ig(), !1)
    };

    function gh() {
        var a = P(ah);
        null != a.g && a.g.g && df(a.g.g);
        a = P(Mg);
        null != a.g && a.g.g ? df(a.g.g) : Ve(U())
    }

    function fh(a, b, c) {
        if (!a.done)
            if (a.h.cancel(), 0 == b.length) a.l = !1;
            else {
                a.i = null;
                try {
                    gh();
                    var d = T(),
                        e = R();
                    e.o = d;
                    if (null != P(Mg).g)
                        for (e = 0; e < b.length; e++) Zf(b[e], d, c);
                    else te(a.m, {
                        strategy_not_selected: 1,
                        bin: e.i
                    });
                    for (d = 0; d < b.length; d++) $f(b[d]);
                    ++a.g.jb;
                    hh(a)
                } finally {
                    c ? w(b, function(f) {
                        return f.Va()
                    }) : $e(a.h)
                }
            }
    }

    function eh(a, b) {
        if (!a.o) {
            b = ne(142, b);
            Q();
            var c;
            C.visibilityState ? c = "visibilitychange" : C.mozVisibilityState ? c = "mozvisibilitychange" : C.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && sc(C, c, b, {
                capture: !1
            }) && (a.o = b)
        }
    }
    ch.prototype.j = function() {
        var a = Ye(),
            b = T();
        a ? (ye || (we = b, w(X.h, function(c) {
            return c.i.m(b, !c.o())
        })), ye = !0) : (this.u = ih(this, b), ye = !1, w(X.h, function(c) {
            c.Aa() && c.i.l(b)
        }));
        this.l = !0;
        fh(this, Ig(), !a)
    };

    function jh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function kh(a, b, c) {
        if (!a.i || c) {
            c = b.document;
            var d = 0 <= xe ? T() - xe : -1,
                e = T(); - 1 == a.g.za && (d = e);
            var f = U(),
                g = R(),
                h = rd(g.g),
                m = Ig();
            try {
                if (0 < m.length) {
                    var n = f.g;
                    n && (h.bs = [Pc(n), Qc(n)]);
                    var l = f.l;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.scs = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = xe;
                h.bin = g.i;
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.g.gb, a.g.fb, a.g.jb, a.g.za, Ie, a.h.h, a.g.Ob, a.g.Nb, a.g.Pb].join("-");
                h.tvt = ih(a, e);
                f.j && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < m.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var r = f.h;
                    h.is = [Pc(r), Qc(r)]
                }
            } catch (Ba) {
                h.error = 1
            }
            a.i = h
        }
        b = a.i;
        a = {};
        for (var q in b) a[q] = b[q];
        q = R().j;
        if (1 == N(q.i, "prf")) {
            b = new Sd;
            n = q.g;
            l = 0; - 1 < n.g && (l = n.i.g.g() - n.g);
            b = ic(b, 1, n.j + l);
            n = q.g;
            b = ic(b, 5, -1 < n.g ? n.h + 1 : n.h);
            b = ic(b, 2, q.h.g.j());
            b = ic(b, 3, q.h.g.i());
            n = ic(b, 4, q.h.g.h());
            q = {};
            b = new Ub;
            var p = void 0 === p ? 0 : p;
            l = gc(n, 1);
            l = null == l ? l : +l;
            p = null == l ? p : l;
            if (0 !== p && (l = p, null != l)) {
                ub(b.g, 9);
                p = b.g;
                c = l;
                c = (l = 0 > c ? 1 : 0) ? -c : c;
                if (0 === c) sb = 0 < 1 / c ? 0 : 2147483648, rb = 0;
                else if (isNaN(c)) sb = 2147483647, rb = 4294967295;
                else if (1.7976931348623157E308 < c) sb = (l << 31 | 2146435072) >>> 0, rb = 0;
                else if (2.2250738585072014E-308 > c) r = c / Math.pow(2, -1074), sb = (l << 31 | r / 4294967296) >>> 0, rb = r >>> 0;
                else {
                    d = c;
                    r = 0;
                    if (2 <= d)
                        for (; 2 <= d && 1023 > r;) r++, d /= 2;
                    else
                        for (; 1 > d && -1022 < r;) d *= 2, r--;
                    c *= Math.pow(2, -r);
                    sb = (l << 31 | r + 1023 << 20 | 1048576 * c & 1048575) >>> 0;
                    rb = 4503599627370496 * c >>> 0
                }
                vb(p, rb);
                vb(p, sb)
            }
            p = kc(n, 2);
            0 !== p && null != p && Vb(b, 2, p);
            p = kc(n, 3);
            0 !== p && null != p && Vb(b, 3, p);
            p = kc(n, 4);
            0 !== p && null != p && Vb(b, 4, p);
            p = kc(n, 5);
            if (0 !== p && null != p && (n = p, null != n))
                if (ub(b.g, 40), p = b.g, 0 <= n) ub(p, n);
                else {
                    for (l = 0; 9 > l; l++) p.push(n & 127 | 128), n >>= 7;
                    p.push(1)
                }
            p = b.g.length();
            if (0 === p) p = new Uint8Array(0);
            else {
                p = new Uint8Array(p);
                l = b.h;
                r = l.length;
                for (c = n = 0; c < r; c++) d = l[c], 0 !== d.length && (p.set(d, n), n += d.length);
                l = b.g;
                r = l.h;
                0 !== r && (p.set(l.g.subarray(0, r), n), l.h = 0);
                b.h = [p]
            }
            p = (q.pf = Tb(p), q)
        } else p = {};
        x(a, p);
        return a
    }

    function lh() {
        w(Ig(), function(a) {
            if (a.h.h) {
                var b = a.u || 0,
                    c = P(ah);
                if (b = c.g ? new Cf(c.g, a.h.g, a.l, b) : null) a.G = b
            }
        })
    }

    function mh() {
        var a = P(Mg);
        if (null != a.g) {
            var b = a.g;
            w(Ig(), function(c) {
                return Yf(c, b)
            })
        }
    }

    function hh(a) {
        var b = R(),
            c = 1 === N(b.g, "llp");
        "osd" == a.m && w(X.g, function(d) {
            if (c) {
                if (1 == b.i || W(d.i) || d.s) {
                    var e = {};
                    tg(d, 0, (e.r = void 0, e))
                }
            } else e = {}, tg(d, 0, (e.r = void 0, e))
        })
    }

    function ih(a, b) {
        a = a.u;
        ye && (a += b - we);
        return a
    }

    function nh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function oh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function ph() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        oe.lb = "av-js";
        je.g = .01;
        qe([function(c) {
            var d = R(),
                e = {};
            x(c, (e.bin = d.i, e.type = "error", e), rd(d.g), kh(a, D), b());
            if (d = tf()) e = {}, x(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function qh(a) {
        var b = new rh;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return [new Cg(b), new Eg(b), new Dg(b), new Ag]
        }
    }
    var Y = P(ch);

    function rh() {}

    function Bg(a, b) {
        var c = b || {};
        b = void 0 === c.Ya ? {} : c.Ya;
        c = void 0 === c.Ua ? {} : c.Ua;
        var d = c.r,
            e = b[0],
            f = kh(Y, J(), !1),
            g = {};
        x(g, f, b);
        b = {};
        x(b, wg(a, e, d, g), c);
        Qe(a.h.h, b, a.aa);
        return !0
    };

    function sh() {
        V.call(this, D, 2, "iem")
    }
    u(sh, V);
    k = sh.prototype;
    k.Pa = function() {
        function a(q, p) {
            return !!b.B.document.elementFromPoint(q, p)
        }
        var b = this,
            c = new I(0, this.B.innerWidth || this.B.width, this.B.innerHeight || this.B.height, 0),
            d = Cc(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.h - d.x),
            h = Math.floor(c.g - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new I(f, g, h, e);
        var m = a(g, f),
            n = a(e, h);
        if (c) h = Z(f, h, function(q) {
            return a(e, q)
        }), g = Z(e, g, function(q) {
            return a(q, f)
        });
        else if (m) h = Z(f, h, function(q) {
            return a(g, q)
        }), e = Z(g, e, function(q) {
            return a(q, f)
        });
        else if (n) f = Z(h, f, function(q) {
            return a(e, q)
        }), g = Z(e, g, function(q) {
            return a(q, h)
        });
        else if (d) f = Z(h, f, function(q) {
            return a(g, q)
        }), e = Z(g, e, function(q) {
            return a(q, h)
        });
        else {
            var l = Math.floor((e + g) / 2),
                r = Math.floor((f + h) / 2);
            if (!a(l, r)) return new I(0, 0, 0, 0);
            f = Z(r, f, function(q) {
                return a(l, q)
            });
            h = Z(r, h, function(q) {
                return a(l, q)
            });
            e = Z(l, e, function(q) {
                return a(q, r)
            });
            g = Z(l, g, function(q) {
                return a(q, r)
            })
        }
        return new I(f, g, h, e)
    };

    function Z(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.X = function() {
        return U().i && B && Nb(8) && Ee(this.B)
    };
    k.Ea = function() {};
    k.Fa = function() {};
    k.$a = function() {};
    k.ab = function() {};

    function th() {
        V.call(this, D, 2, "mraid");
        this.M = 0;
        this.D = this.G = !1;
        this.l = null;
        this.h = De(this.B);
        this.i.g = new I(0, 0, 0, 0);
        this.N = !1
    }
    u(th, V);
    k = th.prototype;
    k.X = function() {
        return null != this.h.I
    };
    k.ob = function() {
        var a = {};
        this.M && (a.mraid = this.M);
        this.G && (a.mlc = 1);
        a.mtop = this.h.Vb;
        this.l && (a.mse = this.l);
        this.N && (a.msc = 1);
        a.mcp = this.h.ya;
        return a
    };
    k.S = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.I[a].apply(this.h.I, c)
        } catch (e) {
            ue(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function uh(a, b, c) {
        a.S("addEventListener", b, c)
    }
    k.Ra = function() {
        var a = this;
        if (this.u) return !this.ga();
        this.u = !0;
        if (2 === this.h.ya) return this.l = "ng", af(this, "w"), !1;
        if (1 === this.h.ya) return this.l = "mm", af(this, "w"), !1;
        U().C = !0;
        this.B.document.readyState && "complete" == this.B.document.readyState ? vh(this) : Ge(this.B, "load", function() {
            Pd(Q(), se(292, function() {
                return vh(a)
            }), 100)
        }, 292);
        return !0
    };

    function vh(a) {
        R().l = !!a.S("isViewable");
        uh(a, "viewableChange", wh);
        "loading" === a.S("getState") ? uh(a, "ready", xh) : yh(a)
    }

    function yh(a) {
        "string" === typeof a.h.I.AFMA_LIDAR ? (a.G = !0, zh(a)) : (a.h.ya = 3, a.l = "nc", af(a, "w"))
    }

    function zh(a) {
        a.D = !1;
        var b = 1 == N(R().g, "rmmt"),
            c = !!a.S("isViewable");
        (b ? !c : 1) && Pd(Q(), se(524, function() {
            a.D || (Ah(a), ue(540, Error()), a.l = "mt", af(a, "w"))
        }), 500);
        Bh(a);
        uh(a, a.h.I.AFMA_LIDAR, Ch)
    }

    function Bh(a) {
        var b = 1 == N(R().g, "sneio"),
            c = void 0 !== a.h.I.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.h.I.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.h.I.AFMA_LIDAR_EXP_2 = !0);
        c && (a.h.I.AFMA_LIDAR_EXP_1 = !b)
    }

    function Ah(a) {
        a.S("removeEventListener", a.h.I.AFMA_LIDAR, Ch);
        a.G = !1
    }
    k.Ea = function() {
        var a = U(),
            b = Dh(this, "getMaxSize");
        a.g = new I(0, b.width, b.height, 0)
    };
    k.Fa = function() {
        U().o = Dh(this, "getScreenSize")
    };

    function Dh(a, b) {
        if ("loading" === a.S("getState")) return new G(-1, -1);
        b = a.S(b);
        if (!b) return new G(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
    }
    k.F = function() {
        Ah(this);
        V.prototype.F.call(this)
    };

    function xh() {
        try {
            var a = P(th);
            a.S("removeEventListener", "ready", xh);
            yh(a)
        } catch (b) {
            ue(541, b)
        }
    }

    function Ch(a, b) {
        try {
            var c = P(th);
            c.D = !0;
            var d = a ? new I(a.y, a.x + a.width, a.y + a.height, a.x) : new I(0, 0, 0, 0);
            var e = T(),
                f = Ye();
            var g = new Ae(e, f, c);
            g.g = d;
            g.volume = b;
            c.V(g)
        } catch (h) {
            ue(542, h)
        }
    }

    function wh(a) {
        var b = R(),
            c = P(th);
        a && !b.l && (b.l = !0, c.N = !0, c.l && af(c, "w", !0))
    };

    function Eh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };

    function Fh(a) {
        this.g = a;
        this.defaultValue = !1
    };
    var Gh = new Fh(160),
        Hh = new Fh(900),
        Ih = new Fh(382);
    var Jh = ["FRAME", "IMG", "IFRAME"],
        Kh = /^[01](px)?$/;

    function Lh(a, b, c) {
        var d = !0,
            e = !1;
        d = void 0 === d ? !0 : d;
        e = void 0 === e ? !1 : e;
        var f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            c || (c = function(aa, Cb, Db) {
                aa.addEventListener(Cb, Db)
            });
            for (var g = !1, h = function(aa) {
                    g || (g = !0, b(aa))
                }, m, n, l = 0; l < Jh.length; ++l)
                if (Jh[l] == a.tagName) {
                    n = 3;
                    m = [a];
                    break
                }
            m || (m = a.querySelectorAll(Jh.join(",")), n = 2);
            var r = 0,
                q = 0,
                p = a = !1;
            l = {};
            for (var Ba = 0; Ba < m.length; l = {
                    ka: l.ka
                }, Ba++) {
                var E = m[Ba];
                if (!("IMG" != E.tagName || !E.complete || E.naturalWidth && E.naturalHeight ? Kh.test(E.getAttribute("width")) && Kh.test(E.getAttribute("height")) : 1)) {
                    if ("IMG" == E.tagName) var ra = E.naturalWidth && E.naturalHeight ? !0 : !1;
                    else try {
                        ra = "complete" === (E.readyState ? E.readyState : E.contentWindow && E.contentWindow.document && E.contentWindow.document.readyState) ? !0 : !1
                    } catch (aa) {
                        ra = void 0 === e ? !1 : e
                    }
                    if (ra) a = !0;
                    else {
                        r++;
                        l.ka = "IMG" === E.tagName;
                        var Wa = function(aa) {
                            return function() {
                                r--;
                                r || h(n);
                                aa.ka && (q--, !q && p && h(n))
                            }
                        }(l);
                        c(E, "load", Wa);
                        l.ka && (q++, c(E, "error", Wa))
                    }
                }
            }
            m = null;
            if (0 === r && !a && "complete" === v.document.readyState) n = 5;
            else if (r || !a) {
                c(v, "load", function() {
                    f && q ? p = !0 : h(4)
                });
                return
            }
            d && h(n)
        }
    };

    function Mh(a) {
        this.methodName = a
    }
    var Nh = new Mh(15),
        Oh = new Mh(5),
        Ph = new Mh(6),
        Qh = new Mh(7),
        Rh = new Mh(8);

    function Sh(a, b, c) {
        return b[a.methodName] || c || function() {}
    };

    function Th() {};

    function Uh() {
        var a = {};
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function() {}
    };

    function Vh() {};

    function Wh(a, b) {
        var c = P(Uh);
        c.g = function(d, e) {
            return Sh(Oh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Sh(Ph, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Sh(Qh, a, function() {
                return ""
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Sh(Rh, a, function() {
                return []
            })(d, e, b)
        };
        c.h = function() {
            Sh(Nh, a)(b)
        }
    };

    function Xh() {
        this.h = null;
        this.j = this.m = this.i = this.l = !1;
        Yh(this);
        ph()
    }

    function Zh() {
        var a = void 0,
            b = 4;
        if (void 0 === a) {
            var c = void 0 === c ? v : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        P(Th);
        Wh(a, b);
        P(Vh);
        P(Uh).h();
        b = R();
        P(Uh).g(Gh.g, Gh.defaultValue) && qd(b.g, "gtx", 1)
    }
    k = Xh.prototype;
    k.Tb = function(a) {
        this.l = a
    };
    k.qb = function() {
        $h(this);
        Q();
        D.clearTimeout(this.h);
        this.h = null;
        xe = T();
        ai(this)
    };

    function $h(a) {
        R().i = 1;
        if (!(0 < xe)) {
            try {
                if (!bi(a)) return;
                gh();
                ci(a)
            } catch (b) {}
            a.h = Pd(Q(), se(129, function() {
                return $h(a)
            }), 250)
        }
    }
    k.Ub = function(a, b, c, d, e, f, g, h, m) {
        var n = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        m = void 0 === m ? -1 : m;
        if (jh(D)) {
            var l = new qg(D, b, a, -1, c, g);
            l.ta = qh(l.C);
            e = R();
            0 < h && -1 == l.D && (l.D = h);
            0 <= m && (l.La = m);
            l.Ja = function(r) {
                for (var q = [], p = 0; p < arguments.length; ++p) q[p] = arguments[p];
                return n.Qb.apply(n, t(q))
            };
            l.Kb = function(r) {
                for (var q = [], p = 0; p < arguments.length; ++p) q[p] = arguments[p];
                return n.Qa.apply(n, t(q))
            };
            13 != c && (l.u = nh(b), l.xb = Eh(b), l.Ia = oh(b));
            f && (l.Cb = !0);
            qd(e.g, "oseid", fg(this.g));
            X.g.push(l);
            ++Y.g.fb;
            e.h ? this.Qa(l, e.h) : ((b = P(Mg).g) && Yf(l, b), ai(this), e.h || (d ? (di(l), l.ia()) : a && Lh(a, function() {
                l.ha() || (di(l), l.ia())
            }, function(r, q, p) {
                Ge(r, q, p, 130)
            }), Y.l || Y.j()))
        }
    };

    function ci(a) {
        ei(a);
        dg(a.g, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Ub.apply(a, t(c))
        }, function() {
            return a.l
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Tb.apply(a, t(c))
        })
    }

    function fi(a) {
        R();
        var b = P(Uh).g(Ih.g, Ih.defaultValue),
            c = [P(sh)];
        b || c.push(P(th));
        b = [P(Xg)];
        return [new Og(c), new Wg(a), new Og(b)]
    }

    function ai(a) {
        if (!a.j) {
            a.j = !0;
            try {
                var b = J(),
                    c = U();
                R().m = 947190542;
                if (bi(a)) {
                    Y.g.gb = eg(a.g);
                    var d = P(Mg);
                    if (null == d.h) {
                        var e = fi(b);
                        d.h = e
                    }
                    if (Ng(d, function(g) {
                            return gi(a, g)
                        })) {
                        if (!Y.done) {
                            mh();
                            c.u = !0;
                            ci(a);
                            var f;
                            (f = U().j || y(z, "CrKey") || y(z, "PlayStation") || y(z, "Roku") || Re() || y(z, "Xbox") || Se() || Te()) || (Q(), f = 0 !== Cd());
                            f ? (bh(), lh(), hi(a), $c()) : gi(a, "pv")
                        }
                    } else gi(a, "i")
                } else ii(a, "c")
            } catch (g) {
                throw gi(a, "x"), Jg(), g;
            }
        }
    }

    function hi(a) {
        if (-1 == Y.g.za) {
            J();
            var b = 2 == fg(a.g);
            dh(b);
            Pd(Q(), se(131, function() {
                ii(a, "t")
            }), 36E5);
            Y.g.za = T() - xe
        }
    }

    function gi(a, b) {
        R().h = b;
        for (var c = ha(X.g), d = c.next(); !d.done; d = c.next()) d.value.s = !0;
        ii(a, b, !1)
    }

    function ii(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Y.h.cancel();
            a.g || (a.g = new bg);
            if (2 == fg(a.g) || a.i)
                for (a = X.g, c && 0 < a.length && fh(Y, a, !0), c = ha(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    tg(a, 1, (d.r = b, d));
                    a.g && a.g.O()
                }
            Y.done = !0
        }
    }

    function bi(a) {
        if (!jh(J())) return !1;
        var b = new bg;
        if (!(b.g || b.h || b.i)) return !1;
        a.g = b;
        return !0
    }
    k.Qa = function(a, b) {
        a.s = !0;
        var c = {};
        tg(a, 2, (c.r = b, c));
        a.g && a.g.O()
    };
    k.Qb = function(a) {
        a && W(a.i) && (0 >= Qf(Xf(a)) ? 0 : xg(a) && !a.zb) && (Uc(a.M), a.zb = !0)
    };

    function ji(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c) var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
                                break;
                            case 4:
                            case 33:
                            case 6:
                            case 25:
                            case 28:
                            case 29:
                            case 24:
                            case 31:
                            case 30:
                            case 23:
                            case 22:
                            case 7:
                            case 21:
                            case 20:
                                f = Number(f);
                                break;
                            case 3:
                                if ("function" === typeof decodeURIComponent) try {
                                    f = decodeURIComponent(f)
                                } catch (m) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0], Ha("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_maybe_stop_monitoring goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Fg(new zd(c[4], c[12]))))
                    if (h = c[33], 0 < h && -1 == d.wa && (d.wa = h), "goog_stop_monitoring" === e) Lg(d);
                    else if ("goog_maybe_stop_monitoring" !== e || void 0 !== d.ca) {
                if (Ha(d.aa, b.source) || d.aa.push(b.source), "goog_request_monitoring" === e || !d.Fb)
                    if (d.Fb = !0, void 0 !== c[16] && (d.da = !!c[16]), void 0 !== c[6]) {
                        c = c[6];
                        b = ki(c, d.C);
                        if (b != d.C) {
                            if (5 == b) {
                                d.s = !0;
                                Lg(d);
                                return
                            }
                            d.C = b;
                            d.ta = qh(b)
                        }
                        b = P(Uh).g(Hh.g, Hh.defaultValue);
                        4 != c || b || d.ia();
                        c = U();
                        e = wg(d, "goog_acknowledge_monitoring");
                        e[8] = c.i;
                        e[36] = c.D;
                        Qe(d.h.h, e, d.aa);
                        c = R();
                        d.s && c.h ? (a.Qa(d, c.h), Lg(d)) : b || (a.i = !0)
                    }
            } else Lg(d)
        }
    }

    function di(a) {
        if (a && vg(a).i()) {
            var b = wg(a, "goog_get_mode");
            Qe(a.h.h, b)
        }
    }

    function ei(a) {
        if (!a.m) {
            Ge(D, "message", function(c) {
                return ji(a, c)
            }, 132);
            var b = li().contentWindow;
            b && Ge(b, "message", function(c) {
                return ji(a, c)
            }, 132);
            a.m = !0
        }
    }

    function mi(a) {
        Ge(J(), "unload", function() {
            ii(a, "u")
        }, 133)
    }

    function ki(a, b) {
        return Fa([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Lb = function(a) {
        (a = Gg(a)) && Lg(a)
    };
    k.Mb = function(a, b) {
        a && b && sa(a) && 1 == a.nodeType && sa(b) && 1 == b.nodeType && (a = Gg(a)) && (J(), Wf(a), a.h.g = b, ag(a), rg(a, b), a.g && (a = a.g, a.O(), a.h = b, a.ma(), a.Y()))
    };

    function li() {
        var a = Fc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        D.document.body.appendChild(a);
        return a
    }

    function Yh(a) {
        ua("Goog_Osd_UnloadAdBlock", se(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Lb.apply(a, t(c))
        }));
        ua("Goog_Osd_UpdateElementToMeasure", se(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Mb.apply(a, t(c))
        }))
    };
    re(155, function() {
        Zh();
        var a = new Xh;
        Y.m = "osd";
        mi(a);
        ad() ? a.qb() : ($h(a), Ge(J(), "load", function() {
            Pd(Q(), se(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.qb.apply(a, t(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);