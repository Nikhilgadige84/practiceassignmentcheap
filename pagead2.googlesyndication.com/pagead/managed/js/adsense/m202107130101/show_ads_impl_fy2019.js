(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        r = this || self;

    function ba() {}

    function ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ea(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function la(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la = ia : la = ka;
        return la.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function na() {
        return Date.now()
    }

    function oa(a, b) {
        a = a.split(".");
        var c = r;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function pa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Lh = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Eh = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function qa(a) {
        return a
    };

    function ra(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ra);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    pa(ra, Error);
    ra.prototype.name = "CustomError";
    var sa;

    function ta(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        ra.call(this, c + a[d])
    }
    pa(ta, ra);
    ta.prototype.name = "AssertionError";

    function ua() {
        return !1
    }

    function va() {
        return !0
    }

    function wa(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function xa(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function za(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Aa(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Ba(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Ca(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function Da(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ea(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Fa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ga(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ha(a, b, c) {
        let d = c;
        Ea(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ia(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ja(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function Ka(a, b) {
        return 0 <= Da(a, b)
    }

    function La(a, b) {
        b = Da(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Ma(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Na(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Oa(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Pa(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Pa.apply(null, Oa(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Qa(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Ra(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Sa(a) {
        var b = Ta;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Ua(a) {
        let b = 0;
        for (const c in a) b++
    }

    function Va(a, b) {
        return null !== a && b in a
    }

    function Wa(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ya(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Xa.length; f++) c = Xa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Za = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var $a;

    function ab() {
        if (void 0 === $a) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: qa,
                        createScript: qa,
                        createScriptURL: qa
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                $a = a
            } else $a = a
        }
        return $a
    };

    function bb(a, b) {
        this.l = a === cb && b || "";
        this.B = db
    }
    bb.prototype.ha = !0;
    bb.prototype.j = function() {
        return this.l
    };

    function eb(a) {
        return a instanceof bb && a.constructor === bb && a.B === db ? a.l : "type_error:Const"
    }

    function fb(a) {
        return new bb(cb, a)
    }
    var db = {},
        cb = {};
    const gb = {};
    class ib {
        constructor(a, b) {
            this.l = b === gb ? a : "";
            this.ha = !0
        }
        j() {
            return this.l.toString()
        }
    }
    ib.prototype.toString = function() {
        return this.l.toString()
    };
    var kb = class {
        constructor(a, b) {
            this.B = b === jb ? a : ""
        }
    };
    kb.prototype.ha = !0;
    kb.prototype.j = function() {
        return this.B.toString()
    };
    kb.prototype.A = !0;
    kb.prototype.l = function() {
        return 1
    };

    function lb(a, b) {
        a = mb.exec(nb(a).toString());
        var c = a[3] || "";
        return ob(a[1] + pb("?", a[2] || "", b) + pb("#", c, void 0))
    }
    kb.prototype.toString = function() {
        return this.B + ""
    };

    function nb(a) {
        return a instanceof kb && a.constructor === kb ? a.B : "type_error:TrustedResourceUrl"
    }

    function qb(a, b) {
        var c = eb(a);
        if (!rb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(sb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof bb ? eb(d) : encodeURIComponent(String(d))
        });
        return ob(a)
    }
    var sb = /%{(\w+)}/g,
        rb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        mb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        jb = {};

    function ob(a) {
        const b = ab();
        a = b ? b.createScriptURL(a) : a;
        return new kb(a, jb)
    }

    function pb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function tb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function ub(a) {
        if (!vb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(wb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(xb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(yb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(zb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ab, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Bb, "&#0;"));
        return a
    }
    var wb = /&/g,
        xb = /</g,
        yb = />/g,
        zb = /"/g,
        Ab = /'/g,
        Bb = /\x00/g,
        vb = /[\x00&<>"']/;

    function Cb(a, b) {
        let c = 0;
        a = tb(String(a)).split(".");
        b = tb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Db(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Db(0 == e[2].length, 0 == f[2].length) || Db(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Db(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Fb = class {
        constructor(a, b) {
            this.B = b === Eb ? a : ""
        }
    };
    Fb.prototype.ha = !0;
    Fb.prototype.j = function() {
        return this.B.toString()
    };
    Fb.prototype.A = !0;
    Fb.prototype.l = function() {
        return 1
    };
    Fb.prototype.toString = function() {
        return this.B.toString()
    };

    function Gb(a) {
        return a instanceof Fb && a.constructor === Fb ? a.B : "type_error:SafeUrl"
    }
    var Hb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Ib = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function Jb(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(Ib);
        return b && Hb.test(b[1]) ? new Fb(a, Eb) : null
    }
    var Kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Lb(a) {
        if (a instanceof Fb) return a;
        a = "object" == typeof a && a.ha ? a.j() : String(a);
        return Kb.test(a) ? new Fb(a, Eb) : Jb(a)
    }

    function Mb(a, b) {
        if (a instanceof Fb) return a;
        a = "object" == typeof a && a.ha ? a.j() : String(a);
        if (b && /^data:/i.test(a) && (b = Jb(a) || Nb, b.j() == a)) return b;
        Kb.test(a) || (a = "about:invalid#zClosurez");
        return new Fb(a, Eb)
    }
    var Eb = {},
        Nb = new Fb("about:invalid#zClosurez", Eb);
    var Pb = class {
        constructor(a, b) {
            this.l = b === Ob ? a : ""
        }
    };
    Pb.prototype.ha = !0;
    Pb.prototype.j = function() {
        return this.l
    };
    Pb.prototype.toString = function() {
        return this.l.toString()
    };
    var Ob = {},
        Qb = new Pb("", Ob);

    function Rb(a) {
        if (a instanceof Fb) return 'url("' + Gb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof bb) a = eb(a);
        else {
            a = String(a);
            var b = a.replace(Sb, "$1").replace(Sb, "$1").replace(Tb, "url");
            if (Ub.test(b)) {
                if (b = !Vb.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Wb(a)
                }
                a = b ? Xb(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new ta("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Wb(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Ub = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Tb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Sb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Vb = /\/\*/;

    function Xb(a) {
        return a.replace(Tb, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (Lb(d) || Nb).j();
            return c + f + b + f + e
        })
    };
    var Yb;
    a: {
        var Zb = r.navigator;
        if (Zb) {
            var $b = Zb.userAgent;
            if ($b) {
                Yb = $b;
                break a
            }
        }
        Yb = ""
    }

    function t(a) {
        return -1 != Yb.indexOf(a)
    }

    function ac(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function bc() {
        return t("Opera")
    }

    function cc() {
        return t("Trident") || t("MSIE")
    }

    function dc() {
        return t("Firefox") || t("FxiOS")
    }

    function ec() {
        return t("Safari") && !(fc() || t("Coast") || bc() || t("Edge") || t("Edg/") || t("OPR") || dc() || t("Silk") || t("Android"))
    }

    function fc() {
        return (t("Chrome") || t("CriOS")) && !t("Edge")
    }

    function gc() {
        function a(e) {
            const f = Ja(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = Yb;
        if (cc()) return hc(b);
        b = ac(b);
        var c = {};
        b.forEach(function(e) {
            c[e[0]] = e[1]
        });
        var d = ma(Va, c);
        return bc() ? a(["Version", "Opera"]) : t("Edge") ? a(["Edge"]) : t("Edg/") ? a(["Edg"]) : fc() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }

    function hc(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };
    var jc = class {
        constructor(a, b, c) {
            this.B = c === ic ? a : "";
            this.C = b
        }
    };
    jc.prototype.A = !0;
    jc.prototype.l = function() {
        return this.C
    };
    jc.prototype.ha = !0;
    jc.prototype.j = function() {
        return this.B.toString()
    };
    jc.prototype.toString = function() {
        return this.B.toString()
    };

    function kc(a) {
        return a instanceof jc && a.constructor === jc ? a.B : "type_error:SafeHtml"
    }

    function lc(a) {
        if (a instanceof jc) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.A && (c = a.l());
        return mc(ub(b && a.ha ? a.j() : String(a)), c)
    }
    var nc = /^[a-zA-Z0-9-]+$/,
        oc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        pc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function qc(a) {
        function b(f) {
            Array.isArray(f) ? f.forEach(b) : (f = lc(f), e.push(kc(f).toString()), f = f.l(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = lc(rc),
            d = c.l(),
            e = [];
        a.forEach(b);
        return mc(e.join(kc(c).toString()), d)
    }

    function sc(a) {
        return qc(Array.prototype.slice.call(arguments))
    }
    var ic = {};

    function mc(a, b) {
        const c = ab();
        a = c ? c.createHTML(a) : a;
        return new jc(a, b, ic)
    }
    var tc = mc("<!DOCTYPE html>", 0),
        rc = new jc(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, ic);
    var uc = za(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = kc(rc);
        return !b.parentElement
    });

    function vc(a, b) {
        if (uc())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = kc(b)
    }

    function wc(a, b) {
        b = b instanceof Fb ? b : Mb(b, /^data:image\//i.test(b));
        a.src = Gb(b)
    }
    var xc = /^[\w+/_-]+[=]{0,2}$/;

    function yc() {
        var a = r.document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && xc.test(a) ? a : "" : ""
    };

    function zc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(Ac, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = mc(e + " ", null), vc(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Ac = /&([^;\s<&]+);?/g;

    function Bc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Cc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Dc(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Ec(a) {
        Ec[" "](a);
        return a
    }
    Ec[" "] = ba;

    function Fc(a, b) {
        try {
            return Ec(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Gc(a, b) {
        var c = Hc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ic = bc(),
        Jc = cc(),
        Kc = t("Edge"),
        Lc = Kc || Jc,
        Mc = t("Gecko") && !(-1 != Yb.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
        Nc = -1 != Yb.toLowerCase().indexOf("webkit") && !t("Edge");

    function Oc() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }
    var Pc;
    a: {
        var Qc = "",
            Rc = function() {
                var a = Yb;
                if (Mc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Kc) return /Edge\/([\d\.]+)/.exec(a);
                if (Jc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Nc) return /WebKit\/(\S+)/.exec(a);
                if (Ic) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Rc && (Qc = Rc ? Rc[1] : "");
        if (Jc) {
            var Sc = Oc();
            if (null != Sc && Sc > parseFloat(Qc)) {
                Pc = String(Sc);
                break a
            }
        }
        Pc = Qc
    }
    var Tc = Pc,
        Hc = {};

    function Uc(a) {
        return Gc(a, function() {
            return 0 <= Cb(Tc, a)
        })
    }
    var Vc;
    if (r.document && Jc) {
        var Wc = Oc();
        Vc = Wc ? Wc : parseInt(Tc, 10) || void 0
    } else Vc = void 0;
    var Xc = Vc;
    var Yc = {},
        Zc = null;

    function $c(a, b) {
        void 0 === b && (b = 0);
        if (!Zc) {
            Zc = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Yc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Zc[h] && (Zc[h] = g)
                }
            }
        }
        b = Yc[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + k + l + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    }

    function ad(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return $c(b, 3)
    };
    var bd = "function" === typeof Uint8Array;

    function cd(a) {
        return dd(a, b => b, b => new Uint8Array(b))
    }

    function ed(a, b, c) {
        return "object" === typeof a ? bd && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : dd(a, b, c) : b(a)
    }

    function dd(a, b, c) {
        if (Array.isArray(a)) {
            var d = Array(a.length);
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = ed(f, b, c))
            }
            Array.isArray(a) && a[fd] && gd(d);
            return d
        }
        d = {};
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = ed(f, b, c)));
        return d
    }

    function hd(a) {
        return dd(a, b => "number" === typeof b ? isFinite(b) ? b : String(b) : b, b => $c(b))
    }
    const fd = Symbol("IS_REPEATED_FIELD");

    function gd(a) {
        Array.isArray(a) && !Object.isFrozen(a) && (a[fd] = !0);
        return a
    };

    function w() {}
    let id;

    function jd(a, b) {
        id = b;
        a = new a(b);
        id = null;
        return a
    }

    function x(a, b, c, d) {
        a.j = null;
        id && (b || (b = id), id = null);
        var e = a.constructor.messageId;
        b || (b = e ? [e] : []);
        a.C = e ? 0 : -1;
        a.A = b;
        a: {
            if (b = a.A.length)
                if (--b, e = a.A[b], !(null === e || "object" != typeof e || Array.isArray(e) || bd && e instanceof Uint8Array)) {
                    a.D = b - a.C;
                    a.B = e;
                    break a
                }
            a.D = Number.MAX_VALUE
        }
        a.J = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (e = c[b], e < a.D) {
                    e += a.C;
                    var f = a.A[e];
                    f ? gd(f) : a.A[e] = kd
                } else ld(a), (f = a.B[e]) ? gd(f) : a.B[e] = kd;
        if (d && d.length)
            for (e = 0; e < d.length; e++) {
                {
                    let g = f = void 0;
                    c = a;
                    b = d[e];
                    for (let h = 0; h < b.length; h++) {
                        let k =
                            b[h],
                            l = y(c, k);
                        null != l && (g = k, f = l, z(c, k, void 0))
                    }
                    g && z(c, g, f)
                }
            }
    }
    const kd = Object.freeze(gd([]));

    function ld(a) {
        let b = a.D + a.C;
        a.A[b] || (a.B = a.A[b] = {})
    }

    function y(a, b) {
        if (b < a.D) {
            b += a.C;
            var c = a.A[b];
            return c !== kd ? c : a.A[b] = gd([])
        }
        if (a.B) return c = a.B[b], c !== kd ? c : a.B[b] = gd([])
    }

    function md(a, b) {
        return null != y(a, b)
    }

    function nd(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function A(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function od(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function pd(a, b, c = !1) {
        a = A(a, b);
        return null == a ? c : a
    }

    function z(a, b, c) {
        b < a.D ? a.A[b + a.C] = c : (ld(a), a.B[b] = c);
        return a
    }

    function qd(a, b, c, d) {
        c !== d ? z(a, b, c) : b < a.D ? a.A[b + a.C] = null : (ld(a), delete a.B[b]);
        return a
    }

    function D(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }

    function H(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c),
                e = [];
            for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == kd && (b = a.j[c] = []);
        return b
    }

    function rd(a, b, c) {
        a.j || (a.j = {});
        let d = c ? sd(c) : c;
        a.j[b] = c;
        return z(a, b, d)
    }

    function td(a) {
        if (a.j)
            for (var b in a.j)
                if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                    var c = a.j[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && sd(c[d]);
                    else c && sd(c)
                }
    }

    function sd(a) {
        td(a);
        return a.A
    }

    function ud(a) {
        td(a);
        return hd(a.A)
    }

    function vd(a) {
        return JSON.stringify(a.A && sd(a), wd)
    }

    function wd(a, b) {
        switch (typeof b) {
            case "number":
                return isFinite(b) ? b : String(b);
            case "object":
                if (bd && null != b && b instanceof Uint8Array) return $c(b)
        }
        return b
    }

    function xd(a, b) {
        return jd(a, b ? JSON.parse(b) : null)
    }

    function J(a, b) {
        return od(a, b, "")
    }

    function zd(a, b) {
        return qd(a, b, 1, 0)
    };

    function Ad(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };
    var Bd = fb("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Cd = {};

    function Dd() {
        if (Cd !== Cd) throw Error("Bad secret");
    };

    function Ed() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    let Fd;

    function Gd() {
        var a, b;
        void 0 === Fd && (Fd = null !== (b = null === (a = Ed()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: c => c,
            createScript: c => c,
            createScriptURL: c => c
        })) && void 0 !== b ? b : null);
        return Fd
    };
    var Hd = class {};
    class Id extends Hd {
        constructor(a) {
            super();
            Dd();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Jd(a) {
        var b, c = null === (b = Gd()) || void 0 === b ? void 0 : b.createScript(a);
        return new Id(null !== c && void 0 !== c ? c : a)
    }

    function Kd(a) {
        var b;
        if (null === (b = Ed()) || void 0 === b ? 0 : b.isScript(a)) return a;
        if (a instanceof Id) return a.j;
        throw Error("wrong type");
    };
    var Ld = class {};
    class Md extends Ld {
        constructor(a) {
            super();
            Dd();
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    var Nd = new Md("about:invalid#zTSz");
    var Od = class {};
    class Pd extends Od {
        constructor(a) {
            super();
            Dd();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Qd(a) {
        var b;
        const c = null === (b = Gd()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Pd(null !== c && void 0 !== c ? c : a)
    }

    function Rd(a) {
        var b;
        if (null === (b = Ed()) || void 0 === b ? 0 : b.isScriptURL(a)) return a;
        if (a instanceof Pd) return a.j;
        throw Error("wrong type");
    }

    function Sd(a) {
        var b;
        a = Rd(a);
        return (null === (b = Ed()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
    };

    function Td(a) {
        return a instanceof Od ? Rd(a) : nb(a)
    }

    function Ud(a) {
        if (a instanceof Ld)
            if (a instanceof Md) a = a.j;
            else throw Error("wrong type");
        else a = Gb(a);
        return a
    };

    function Vd(a) {
        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        (b = (c = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]")) ? c.nonce || c.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Wd(a, b) {
        b = b instanceof Hd ? Kd(b) : b instanceof ib && b.constructor === ib ? b.l : "type_error:SafeScript";
        a.textContent = b;
        Vd(a)
    }

    function Xd(a, b) {
        a.src = Td(b);
        Vd(a)
    };
    var Yd = {
            passive: !0
        },
        Zd = za(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function $d(a) {
        return a ? a.passive && Zd() ? a : a.capture || !1 : !1
    }

    function K(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, $d(d)), !0) : !1
    }

    function ae(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, $d(d)), !0) : !1
    };

    function be(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                var g;
                f.onload = null;
                f.onerror = null;
                null === (g = f.parentElement) || void 0 === g ? void 0 : g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Xd(f, a);
            "complete" !== b.document.readyState ? K(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function ce(a) {
        return Ad(this, function*() {
            var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.Ca}`;
            let c = void 0;
            try {
                c = yield de(b)
            } catch (g) {}
            if (c) {
                b = a.Ma || c.sodar_query_id;
                var d = void 0 === c.rc_enable ? "n" : c.rc_enable,
                    e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                    f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                if (b && c.bg_hash_basename && c.bg_binary) return {
                    context: a.A,
                    md: c.bg_hash_basename,
                    ld: c.bg_binary,
                    Ed: a.j + "_" + a.l,
                    Ma: b,
                    Ca: a.Ca,
                    pb: d,
                    yb: e,
                    nb: f
                }
            }
        })
    }
    let de = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });

    function ee(a) {
        Ad(this, function*() {
            const b = yield ce(a);
            if (b) {
                var c = window,
                    d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.md,
                    ["_bgp_"]: b.ld,
                    ["_li_"]: b.Ed,
                    ["_jk_"]: b.Ma,
                    ["_st_"]: b.Ca,
                    ["_rc_"]: b.pb,
                    ["_dl_"]: b.yb,
                    ["_g2_"]: b.nb
                });
                if (d = c.GoogleDX5YKUSk) c.GoogleDX5YKUSk = void 0, d[1]();
                c = qb(Bd, {
                    basename: "sodar2"
                });
                be(c)
            }
            return b
        })
    };

    function fe(a, b) {
        return rd(a, 5, b)
    }

    function ge(a, b) {
        return qd(a, 3, b, "")
    }
    var he = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };

    function ie(a, b) {
        return qd(a, 1, b, "")
    }
    var je = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function ke(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var le = class {
            constructor(a) {
                this.j = a.j;
                this.l = a.l;
                this.A = a.A;
                this.Ma = a.Ma;
                this.ca = a.M();
                this.Ca = a.Ca;
                this.pb = a.pb;
                this.yb = a.yb;
                this.nb = a.nb
            }
        },
        me = class {
            constructor(a, b, c) {
                this.j = a;
                this.l = b;
                this.A = c;
                this.ca = window;
                this.Ca = "env";
                this.pb = "n";
                this.yb = "0";
                this.nb = "1"
            }
            M() {
                return this.ca
            }
        };
    var oe = class extends w {
            constructor(a) {
                super();
                x(this, a, ne, null)
            }
        },
        ne = [2, 3];
    var pe = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
        l() {
            return y(this, 1)
        }
        H() {
            return y(this, 2)
        }
        I() {
            return y(this, 3)
        }
        F() {
            return y(this, 4)
        }
    };
    var qe = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
        l() {
            return y(this, 1)
        }
        H() {
            return y(this, 2)
        }
        I() {
            return y(this, 3)
        }
        F() {
            return y(this, 4)
        }
    };
    var re = {
        le: "google_adtest",
        qe: "google_ad_client",
        re: "google_ad_format",
        te: "google_ad_height",
        Ge: "google_ad_width",
        xe: "google_ad_layout",
        ye: "google_ad_layout_key",
        ze: "google_ad_output",
        Ae: "google_ad_region",
        De: "google_ad_slot",
        Ee: "google_ad_type",
        Fe: "google_ad_url",
        He: "google_allow_expandable_ads",
        Ve: "google_analytics_domain_name",
        We: "google_analytics_uacct",
        lf: "google_container_id",
        wf: "google_gl",
        Qf: "google_enable_ose",
        Yf: "google_full_width_responsive",
        Qg: "google_rl_filtering",
        Pg: "google_rl_mode",
        Rg: "google_rt",
        Og: "google_rl_dest_url",
        Bg: "google_max_radlink_len",
        Gg: "google_num_radlinks",
        Hg: "google_num_radlinks_per_unit",
        pe: "google_ad_channel",
        Ag: "google_max_num_ads",
        Cg: "google_max_responsive_height",
        ff: "google_color_border",
        Pf: "google_enable_content_recommendations",
        tf: "google_content_recommendation_ui_type",
        sf: "google_source_type",
        rf: "google_content_recommendation_rows_num",
        qf: "google_content_recommendation_columns_num",
        pf: "google_content_recommendation_ad_positions",
        uf: "google_content_recommendation_use_square_imgs",
        hf: "google_color_link",
        gf: "google_color_line",
        kf: "google_color_url",
        me: "google_ad_block",
        Ce: "google_ad_section",
        ne: "google_ad_callback",
        cf: "google_captcha_token",
        jf: "google_color_text",
        Te: "google_alternate_ad_url",
        we: "google_ad_host_tier_id",
        df: "google_city",
        ue: "google_ad_host",
        ve: "google_ad_host_channel",
        Ue: "google_alternate_color",
        ef: "google_color_bg",
        Rf: "google_encoding",
        Wf: "google_font_face",
        zf: "google_cust_ch",
        Cf: "google_cust_job",
        Bf: "google_cust_interests",
        Af: "google_cust_id",
        Df: "google_cust_u_url",
        $f: "google_hints",
        og: "google_image_size",
        Dg: "google_mtl",
        xh: "google_cpm",
        nf: "google_contents",
        Fg: "google_native_settings_key",
        vf: "google_country",
        oh: "google_targeting",
        Xf: "google_font_size",
        Gf: "google_disable_video_autoplay",
        Ch: "google_video_product_type",
        Bh: "google_video_doc_id",
        Ah: "google_cust_gender",
        jh: "google_cust_lh",
        ih: "google_cust_l",
        wh: "google_tfs",
        Eg: "google_native_ad_template",
        tg: "google_kw",
        kh: "google_tag_for_child_directed_treatment",
        lh: "google_tag_for_under_age_of_consent",
        Tg: "google_region",
        yf: "google_cust_criteria",
        Be: "google_safe",
        xf: "google_ctr_threshold",
        Ug: "google_resizing_allowed",
        Wg: "google_resizing_width",
        Vg: "google_resizing_height",
        zh: "google_cust_age",
        LANGUAGE: "google_language",
        ug: "google_kw_type",
        Mg: "google_pucrd",
        Lg: "google_page_url",
        mh: "google_tag_partner",
        $g: "google_restrict_data_processing",
        ie: "google_adbreak_test",
        se: "google_ad_frequency_hint",
        je: "google_admob_interstitial_slot",
        ke: "google_admob_rewarded_slot",
        zg: "google_max_ad_content_rating"
    };
    var se = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        te = a => {
            a = se(a);
            a.eids || (a.eids = []);
            return a.eids
        },
        ue = (a, b) => {
            a = se(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var we = class extends w {
            constructor(a) {
                super();
                x(this, a, ve, null)
            }
        },
        xe = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        ze = class extends w {
            constructor(a) {
                super();
                x(this, a, ye, null)
            }
        },
        ve = [2],
        ye = [2];
    class Ae {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    var Be = Jc && !Uc("9");

    function Ce(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function De(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Ee(a) {
        return De.apply(null, arguments) / arguments.length
    };

    function Fe(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Fe.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Fe.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Fe.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Ge(a, b) {
        this.width = a;
        this.height = b
    }
    Ge.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Ge.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ge.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ge.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function He(a) {
        return a ? new Ie(Je(a)) : sa || (sa = new Ie)
    }

    function Ke(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Ge(a.clientWidth, a.clientHeight)
    }

    function Le(a) {
        var b = a.scrollingElement ? a.scrollingElement : Nc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Jc && Uc("10") && a.pageYOffset != b.scrollTop ? new Fe(b.scrollLeft, b.scrollTop) : new Fe(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Me(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Ne(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Oe(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Je(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Pe = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Qe = {
            IMG: " ",
            BR: "\n"
        };

    function Re(a) {
        if (Be && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Se(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Be || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Se(a, b, c) {
        if (!(a.nodeName in Pe))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Qe) b.push(Qe[a.nodeName]);
        else
            for (a = a.firstChild; a;) Se(a, b, c), a = a.nextSibling
    }

    function We(a, b, c, d) {
        if (!b && !c) return null;
        var e = b ? String(b).toUpperCase() : null;
        return Xe(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && Ka(f.className.split(/\s+/), c))
        }, d)
    }

    function Xe(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function Ie(a) {
        this.j = a || r.document || document
    }

    function Ye(a, b) {
        return Ne(a.j, b)
    }
    Ie.prototype.M = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    Ie.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    Ie.prototype.l = Oe;

    function Ze() {
        return !(t("iPad") || t("Android") && !t("Mobile") || t("Silk")) && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    };
    var $e = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function af(a) {
        try {
            return !!a && null != a.location.href && Fc(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function bf(a, b, c, d) {
        d = d || r;
        c && (d = cf(d));
        for (c = 0; d && 40 > c++ && (!b && !af(d) || !a(d));) d = cf(d)
    }

    function cf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function df(a, b) {
        const c = a.createElement("script");
        Xd(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function ef(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function ff(a, b) {
        if (!gf()) {
            let c = Math.random();
            if (c < b) return c = hf(r), a[Math.floor(c * a.length)]
        }
        return null
    }

    function hf(a) {
        if (!a.crypto) return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function jf(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function kf(a) {
        const b = [];
        jf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function lf(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var gf = za(() => Ia(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], mf) || 1E-4 > Math.random());
    const mf = a => -1 != Yb.indexOf(a);
    var nf = /^([0-9.]+)px$/,
        of = /^(-?[0-9.]{1,30})$/;

    function pf(a, b) {
        return of.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    }

    function qf(a) {
        return /^true$/.test(a)
    }

    function rf(a) {
        return (a = nf.exec(a)) ? +a[1] : null
    }

    function sf() {
        var a = r.document.URL;
        if (!a) return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var tf = {
        Ie: "allow-forms",
        Je: "allow-modals",
        Ke: "allow-orientation-lock",
        Le: "allow-pointer-lock",
        Me: "allow-popups",
        Ne: "allow-popups-to-escape-sandbox",
        Oe: "allow-presentation",
        Pe: "allow-same-origin",
        Qe: "allow-scripts",
        Re: "allow-top-navigation",
        Se: "allow-top-navigation-by-user-activation"
    };
    const uf = za(() => kf(tf));

    function vf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = uf();
        return a.length ? Fa(b, c => !Ka(a, c)) : b
    }

    function wf() {
        const a = Ne(document, "IFRAME"),
            b = {};
        Ea(uf(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var xf = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        yf = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (xf(a, b)) return a;
                if (!(a = cf(a))) break
            }
            return null
        },
        L = (a, b) => {
            a.style.setProperty ? jf(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = zf(Af(Bf(a.style.cssText), Cf(b, c => c + " !important")))
        },
        Af = Object.assign || function(a, b) {
            for (let c = 1; c < arguments.length; c++) {
                const d = arguments[c];
                if (d)
                    for (let e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        },
        Cf = (a, b) => {
            const c = {};
            for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        },
        zf = a => {
            const b = [];
            jf(a, (c, d) => {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        },
        Bf = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ea((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Df = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Ef = /\.proxy\.googleprod\.com(:\d+)?$/;
    const Ff = /.*domain\.test$/;
    var Gf = a => !!Df[a] || Ef.test(a) || Ff.test(a),
        Hf = (a, b) => {
            b = Ja(a, b);
            if (0 <= b) {
                const c = a[b];
                Array.prototype.splice.call(a, b, 1);
                return c
            }
            return null
        },
        Kf = (a = window.document) => {
            var b = If;
            0 != b.length && a.head && b.forEach(c => {
                c && Jf(c, a)
            })
        },
        Jf = (a, b = window.document) => {
            if (a && b.head) {
                var c = document.createElement("meta");
                b.head.appendChild(c);
                c.httpEquiv = "origin-trial";
                c.content = a
            }
        },
        Lf = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (c) {
                b &&
                    b.ia(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.ia(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        };

    function Mf(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Oe(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        bf(f => {
            if (!f.parent || !af(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? Me(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    Mf(f.parent, g[l], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var Nf = (a, b) => {
            Mf(Me(Je(a)), a, b)
        },
        Of = (a, b) => {
            const c = document.createElement("div");
            c.id = a;
            c.textContent = b;
            L(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        },
        Pf = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Qf(a, b, c = null) {
        Rf(a, b, c)
    }

    function Rf(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = a.document.createElement("img");
        if (c) {
            const e = f => {
                c && c(f);
                ae(d, "load", e);
                ae(d, "error", e)
            };
            K(d, "load", e);
            K(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Tf = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
            jf(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            Sf(b)
        },
        Sf = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Qf(b, a)
        };
    var Uf = document,
        M = window;

    function Vf(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    Vf.prototype.getHeight = function() {
        return this.bottom - this.top
    };

    function Wf(a) {
        return new Vf(a.top, a.right, a.bottom, a.left)
    }
    Vf.prototype.contains = function(a) {
        return this && a ? a instanceof Vf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Xf(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    Vf.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    Vf.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Vf.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Yf(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Zf(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Yf(c, e, d - c, a - e)
        }
        return null
    }

    function $f(a, b) {
        var c = Zf(a, b);
        if (!c || !c.height || !c.width) return [new Yf(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Yf(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Yf(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Yf(a.left, d, b.left - a.left, e));
        h < f && c.push(new Yf(h, d, f - h, e));
        return c
    }
    Yf.prototype.contains = function(a) {
        return a instanceof Fe ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Yf.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Yf.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Yf.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const ag = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function bg(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function cg() {
        const a = bg();
        return a && a.initialIntersection
    }

    function dg() {
        const a = cg();
        return a && ca(a.rootBounds) ? new Ge(a.rootBounds.width, a.rootBounds.height) : null
    }

    function eg(a) {
        return (a = a || bg()) ? af(a.master) ? a.master : null : null
    }

    function fg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            La(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || df(a.document, g ? qb(fb("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : ob(eb(fb("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, K(a, "message", f), d = () => {
            ae(a, "message", f)
        });
        return e
    };

    function gg(a, b, c) {
        if (!Array.isArray(a) || !Array.isArray(a.raw) || !b && 1 !== a.length) throw new TypeError(c);
    };
    class hg {
        constructor(a) {
            this.Dd = a
        }
    }

    function ig(a) {
        return new hg(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const jg = [ig("data"), ig("http"), ig("https"), ig("mailto"), ig("ftp"), new hg(a => /^[^:]*([/?#]|$)/.test(a))];

    function kg(a, b = jg) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof hg && d.Dd(a)) return new Md(a)
        }
    }

    function lg(a) {
        return kg(a, jg) || Nd
    };

    function mg(a) {
        ng();
        return ob(a)
    }
    var ng = ba;

    function og(a, b, c) {
        if ("string" === typeof b)(b = pg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = pg(c, d);
                f && (c.style[f] = e)
            }
    }
    var qg = {};

    function pg(a, b) {
        var c = qg[b];
        if (!c) {
            var d = Cc(b);
            c = d;
            void 0 === a.style[d] && (d = (Nc ? "Webkit" : Mc ? "Moz" : Jc ? "ms" : Ic ? "O" : null) + Dc(d), void 0 !== a.style[d] && (c = d));
            qg[b] = c
        }
        return c
    }

    function rg(a, b) {
        var c = Je(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function sg(a, b) {
        return rg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function tg(a) {
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

    function ug(a) {
        var b = Je(a),
            c = new Fe(0, 0);
        var d = b ? Je(b) : document;
        d = !Jc || 9 <= Number(Xc) || "CSS1Compat" == He(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = tg(a);
        b = Le(He(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function vg(a) {
        var b = wg;
        if ("none" != sg(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function wg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Nc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = tg(a), new Ge(a.right - a.left, a.bottom - a.top)) : new Ge(b, c)
    }

    function xg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function yg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? xg(a, b) : 0
    }
    var zg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Ag(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in zg ? zg[b] : xg(a, b)
    };
    var Bg = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Cg = a => !(!a || !a.call) && "function" === typeof a,
        Dg = a => "number" === typeof a && 0 < a,
        Eg = () => {
            var a = N();
            "google_onload_fired" in a || (a.google_onload_fired = !1, K(a, "load", () => {
                a.google_onload_fired = !0
            }))
        },
        Gg = (a, b) => {
            a = Fg(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Fg = a => Object.entries(Hg(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Hg = a => {
            const b = {};
            Bg(a,
                (c, d) => {
                    if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
                });
            return b
        },
        Ig = () => {
            try {
                return M.history.length
            } catch (a) {
                return 0
            }
        },
        Jg = a => {
            a = eg(bg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Kg = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        Lg = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = Ig();
            a.u_java = !!M.navigator && "unknown" !== typeof M.navigator.javaEnabled && !!M.navigator.javaEnabled && M.navigator.javaEnabled();
            M.screen && (a.u_h = M.screen.height, a.u_w = M.screen.width, a.u_ah =
                M.screen.availHeight, a.u_aw = M.screen.availWidth, a.u_cd = M.screen.colorDepth);
            M.navigator && M.navigator.plugins && (a.u_nplug = M.navigator.plugins.length);
            M.navigator && M.navigator.mimeTypes && (a.u_nmime = M.navigator.mimeTypes.length)
        },
        Mg = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Ng = !!window.google_async_iframe_id;
    let Og = Ng && window.parent || window;
    var N = () => {
            if (Ng && !af(Og)) {
                let a = "." + Uf.domain;
                try {
                    for (; 2 < a.split(".").length && !af(Og);) Uf.domain = a = a.substr(a.indexOf(".") + 1), Og = window.parent
                } catch (b) {}
                af(Og) || (Og = window)
            }
            return Og
        },
        Pg = /(^| )adsbygoogle($| )/,
        Qg = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Rg = () => {
            var a;
            let b;
            const c = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/,
                    ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (cc()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g,
                        ".")
                }
            }
            return "0"
        },
        Sg = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Tg = a => {
            a = a.top;
            return af(a) ? a : null
        },
        Ug = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Vg = (a, b) => a.source !== b.contentWindow &&
        a.source.parent !== b.contentWindow ? !1 : !0;
    const Wg = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var Xg = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Yg = class {
            constructor(a, b, c) {
                this.url = a;
                this.ca = b;
                this.mc = !!c;
                this.depth = null
            }
        };

    function Zg(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function $g(a, b, c, d, e) {
        const f = [];
        jf(a, function(g, h) {
            (g = ah(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ah(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(ah(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent($g(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function bh(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function ch(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = bh(a) - c.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let l = $g(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.A;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class dh {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function O(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let g;
            c instanceof dh ? g = c : (g = new dh, jf(c, (k, l) => {
                var m = g,
                    n = m.B++;
                k = Zg(l, k);
                m.j.push(n);
                m.l[n] = k
            }));
            const h = ch(g, a.l, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Qf(r, h, f) : Qf(r, h))
        } catch (g) {}
    }
    class eh {
        constructor() {
            this.l = "http:" === M.location.protocol ? "http:" : "https:";
            this.j = Math.random()
        }
    };
    let fh = null;

    function gh() {
        if (null === fh) {
            fh = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    fh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return fh
    };
    var hh = () => {
            const a = r.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : na()
        },
        ih = () => {
            const a = r.performance;
            return a && a.now ? a.now() : null
        };
    class jh {
        constructor(a, b) {
            var c = ih() || hh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const kh = r.performance,
        lh = !!(kh && kh.mark && kh.measure && kh.clearMarks),
        mh = za(() => {
            var a;
            if (a = lh) a = gh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function nh(a) {
        a && kh && mh() && (kh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), kh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function oh(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (mh() && Ea(a.events, nh), a.events.length = 0)
    }

    function ph(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw nh(c), e;
        }
        a.end(c);
        return d
    }
    class qh {
        constructor(a) {
            this.events = [];
            this.l = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = mh() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new jh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            kh && mh() && kh.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (ih() || hh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                kh && mh() && kh.mark(b);
                !this.j ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function rh(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = sh(a.stack, b));
        return b
    }

    function sh(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function th(a, b) {
        a.j = b
    }

    function uh(a, b, c, d) {
        let e, f;
        try {
            a.l && a.l.j ? (f = a.l.start(b.toString(), 3), e = c(), a.l.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                nh(f), c = a.C(b, new Ae(g, {
                    message: rh(g)
                }), void 0, d)
            } catch (h) {
                a.ia(217, h)
            }
            if (c) {
                let h, k;
                null == (h = window.console) || null == (k = h.error) || k.call(h, g)
            } else throw g;
        }
        return e
    }

    function vh(a, b, c, d, e) {
        return (...f) => uh(a, b, () => c.apply(d, f), e)
    }
    class wh {
        constructor() {
            var a = xh;
            this.B = P;
            this.j = null;
            this.C = this.ia;
            this.l = void 0 === a ? null : a;
            this.A = !1
        }
        ia(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const E = new dh;
                var g = E;
                g.j.push(1);
                g.l[1] = Zg("context", a);
                b.error && b.meta && b.id || (b = new Ae(b, {
                    message: rh(b)
                }));
                if (b.msg) {
                    g = E;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Zg("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (U) {}
                if (d) try {
                    d(b)
                } catch (U) {}
                d = E;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = r;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (af(l)) {
                        var m = l.location.href;
                        b = l.document &&
                            l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Yg(m || "", l));
                    try {
                        d = l.parent
                    } catch (U) {
                        d = null
                    }
                } while (d && l != d);
                for (let U = 0, ja = k.length - 1; U <= ja; ++U) k[U].depth = ja - U;
                l = r;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.mc = !0)
                    }
                var p = k;
                let da = new Yg(r.location.href, r, !1);
                l = null;
                const hb = p.length - 1;
                for (n = hb; 0 <= n; --n) {
                    var q = p[n];
                    !l && Wg.test(q.url) && (l = q);
                    if (q.url && !q.mc) {
                        da = q;
                        break
                    }
                }
                q = null;
                const ya = p.length && p[hb].url;
                0 != da.depth && ya && (q = p[hb]);
                f = new Xg(da, q);
                if (f.l) {
                    p = E;
                    var v = f.l.url || "";
                    p.j.push(4);
                    p.l[4] = Zg("top", v)
                }
                var u = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var B = f.j.url.match($e),
                        F = B[1],
                        G = B[3],
                        I = B[4];
                    v = "";
                    F && (v += F + ":");
                    G && (v += "//", v += G, I && (v += ":" + I));
                    var C = v
                } else C = "";
                F = E;
                u = [u, {
                    url: C
                }];
                F.j.push(5);
                F.l[5] = u;
                O(this.B, e, E, this.A, c)
            } catch (E) {
                try {
                    O(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: rh(E),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (da) {}
            }
            return !0
        }
    };
    let P, yh;
    const zh = N(),
        xh = new qh(zh);
    P = new eh;
    "number" !== typeof zh.google_srt && (zh.google_srt = Math.random());
    var Ah = P,
        Bh = zh.google_srt;
    0 <= Bh && 1 >= Bh && (Ah.j = Bh);
    yh = new wh;
    yh.j = () => {};
    yh.A = !0;
    "complete" == zh.document.readyState ? zh.google_measure_js_timing || oh(xh) : xh.j && K(zh, "load", () => {
        zh.google_measure_js_timing || oh(xh)
    });
    var Ch = (a, b) => uh(yh, a, b, void 0),
        Q = (a, b) => vh(yh, a, b, void 0, void 0),
        Dh = (a, b, c, d) => {
            O(P, a, b, !0, c, d)
        };
    const Eh = (function(a, ...b) {
        gg(a, !0, "safeUrl is a template literal tag function and can only be called as such (e.g. safeUrl`./somepath.html`)");
        var c = a[0];
        var d = c.search(/[:/?#]/);
        0 > d ? c = 0 === b.length : ":" !== c.charAt(d) ? c = !0 : (c = c.substring(0, d).toLowerCase(), c = /^[a-z][a-z\d+.-]*$/.test(c) && "javascript" !== c);
        if (!c) throw Error(`Trying to interpolate with unsupported prefix: ${a[0]}`);
        c = [a[0]];
        for (d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return new Md(c.join(""))
    })
    `https://support.google.com/adsense/#topic=3373519`;
    class Fh {
        constructor() {
            this.l = !1;
            this.j = 0
        }
    }

    function Gh(a, b, c, d, e, f, g) {
        for (let I = 0; I < b.childNodes.length; I++) {
            var h = b.childNodes[I];
            if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
                a: {
                    var k = a;
                    var l = d,
                        m = e,
                        n = h.textContent,
                        p = c,
                        q = f,
                        v = g,
                        u = [];
                    let C = 0;
                    for (;;) {
                        var B = n.length;
                        let E = null;
                        var F = "";
                        for (const da of H(p, ze, 2))
                            for (const hb of H(da, xe, 2)) {
                                const ya = J(hb, 1);
                                for (var G = C; G < n.length;) {
                                    G = n.indexOf(ya, G);
                                    if (-1 === G) break;
                                    if (G > B || G === B && null !== E && ya.length < E.length) break;
                                    if (q.j + Hh(n.substr(C, G - C)) >= od(p, 5, 0)) {
                                        B = G;
                                        E = ya;
                                        F = J(da, 1);
                                        break
                                    }
                                    G += 1
                                }
                            }
                        if (null ===
                            E) {
                            if (0 === C) {
                                q.j += Hh(n);
                                k = null;
                                break a
                            }
                            C < n.length && (l = n.substr(C), u.push(k.document.createTextNode(l)), q.j += Hh(l));
                            k = u;
                            break a
                        }
                        B > C && u.push(k.document.createTextNode(n.substr(C, B - C)));
                        u.push(Ih(k, F, l, J(p, 1), E, m));
                        q.j = 0;
                        C = B + E.length;
                        B = v;
                        B.l++;
                        B.j.add(F)
                    }
                }
                if (k) {
                    for (const C of k) b.insertBefore(C, h);
                    b.removeChild(h);
                    I += k.length - 1;
                    if (!f.l) a: {
                        h = a;k = b;l = J(c, 3);u = J(c, 6);f.l = !0;q = h;m = q.document.createElement("A");m.appendChild(q.document.createTextNode(u));m.href = Ud(Eh);m.setAttribute("target", "_blank");m.style.padding =
                        "0 8px";u = q.document.createElement("P");u.className = "google-adfil-skip";u.appendChild(q.document.createTextNode(l));u.appendChild(m);q = u.style;q.border = "0 solid #bdc1c6";q.borderWidth = "1px 0";q.margin = "6pt 0";q.padding = "21px";q.width = "100%";q = u;
                        for (u = k; u;) {
                            b: switch (u.tagName) {
                                case "DIV":
                                case "DL":
                                case "P":
                                case "UL":
                                case "OL":
                                case "TABLE":
                                    k = !0;
                                    break b;
                                default:
                                    k = !1
                            }
                            if (k) {
                                u.parentNode && u.parentNode.insertBefore(q, u.nextSibling);
                                break a
                            }
                            u = u.parentElement
                        }
                        h.document.body.appendChild(q)
                    }
                }
            }
            else {
                a: if (k = h,
                        k.nodeType !== Node.ELEMENT_NODE || k.classList.contains("google-adfil-skip")) k = !1;
                    else switch (k.tagName) {
                        case "A":
                        case "IFRAME":
                        case "BUTTON":
                        case "CANVAS":
                        case "CODE":
                        case "EMBED":
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "OBJECT":
                        case "PRE":
                        case "SAMP":
                        case "SCRIPT":
                        case "SELECT":
                        case "SUB":
                        case "SUPER":
                        case "SVG":
                        case "TEXTAREA":
                        case "VIDEO":
                            k = !1;
                            break a;
                        default:
                            k = !0
                    }
                k && Gh(a, h, c, d, e, f, g)
            }
        }
    }

    function Ih(a, b, c, d, e, f) {
        const g = lg("https://www.google.com/search?psb=1&tbm=shop" + `&q=${encodeURIComponent(`"${b}"`)}` + `&utm_source=${encodeURIComponent(c)}` + "&utm_medium=web-affiliate" + `&utm_campaign=${encodeURIComponent(d)}` + `&utm_term=${encodeURIComponent(e)}` + "&utm_content=textlink"),
            h = a.document.createElement("A");
        h.appendChild(a.document.createTextNode(e));
        h.href = Ud(g);
        h.style.setProperty("webkitTextDecoration", h.style.textDecoration = "underline dotted currentcolor");
        const k = a.performance.now();
        h.addEventListener("click", l => {
            Dh("adfil-clk", {
                wp: c,
                c: f,
                e: d,
                m: e,
                q: b,
                v: Math.round(a.performance.now() - k)
            }, 1, () => {
                a.location.href = Ud(g)
            });
            l.preventDefault();
            return !1
        });
        return h
    }

    function Hh(a) {
        a = a.trim();
        return "" === a ? 0 : a.split(/\s+/).length
    };
    var Jh = class {
        constructor() {
            this.l = 0;
            this.j = new Set;
            this.A = 0
        }
    };
    var R = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Kh = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var Lh = new R(1081),
        Mh = new R(236),
        Nh = new R(383, !0),
        Oh = new R(1043),
        Ph = new Kh(1032),
        Qh = new Kh(1044),
        Rh = new Kh(1017, -1),
        Sh = new R(316),
        Th = new R(1021, !0),
        Uh = new R(334),
        Vh = new Kh(54),
        Wh = new R(1004),
        Xh = new R(313),
        Yh = new Kh(66, -1),
        Zh = new Kh(65, -1),
        $h = new R(369),
        ai = new R(368),
        bi = new Kh(1067),
        ci = new R(348),
        di = new R(265),
        ei = new R(260),
        fi = new R(1076),
        gi = new R(233),
        hi = new Kh(29, 2),
        ii = new Kh(30, 3),
        ji = new Kh(1056),
        ki = new Kh(1057),
        li = new Kh(1072),
        mi = new R(1073),
        ni = new R(290),
        oi = new R(190),
        pi = new Kh(1068),
        qi = new R(1036, !0),
        ri = new R(154),
        si = new R(1045),
        ti = new R(251),
        ui = new R(1031),
        vi = new Kh(1066),
        wi = new R(380254521),
        xi = new R(83),
        yi = new R(360245598),
        zi = new R(1936, !0),
        Ai = new Kh(1927),
        Bi = new R(1931, !0),
        Ci = new R(377431981),
        Di = new R(77),
        Ei = new R(78),
        Fi = new R(309),
        Gi = new R(80),
        Hi = new R(76),
        Ii = new R(81),
        Ji = new R(380025941),
        Ki = new R(84),
        Li = new R(3655606),
        Mi = new R(188),
        Ni = new R(1928),
        Oi = new R(1941),
        Pi = new R(370946349),
        Qi = new R(374326588),
        Ri = new R(379841917),
        Si = new R(377105258),
        Ti = new Kh(1935),
        Ui = new R(1942);
    var Vi = a => {
        if (a.Mb && a.hasOwnProperty("Mb")) return a.Mb;
        const b = new a;
        return a.Mb = b
    };
    var Wi = class {
            constructor() {
                const a = {};
                this.l = (b, c) => null != a[b] ? a[b] : c;
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.j = () => {}
            }
        },
        S = a => Vi(Wi).l(a.j, a.defaultValue),
        T = a => Vi(Wi).A(a.j, a.defaultValue);
    const Xi = a => !!a;

    function Yi(a) {
        if (!(Zi || Xi)(a)) throw Error(String(a));
    };
    var Ta = {
        Sg: 0,
        Sf: 1,
        Tf: 2,
        Zf: 8,
        eh: 9,
        xg: 10,
        yg: 11,
        Zg: 16,
        Ff: 17,
        Ef: 24,
        vg: 25,
        Ye: 26,
        Xe: 27,
        Lc: 30,
        qg: 32,
        sg: 40
    };
    var $i = {
            Ze: "google_ads_preview",
            Hf: "google_mc_lab",
            Vf: "google_anchor_debug",
            Uf: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            pg: "google_scr_debug",
            rg: "google_ia_debug_allow_onclick",
            Kg: "googleads",
            Lc: "google_pedestal_debug",
            fh: "google_shoppable_images_debug",
            gh: "google_shoppable_images_cookie",
            hh: "google_shoppable_images_forced",
            Mc: "google_responsive_slot_debug",
            Yg: "google_responsive_slot_preview",
            Xg: "google_responsive_dummy_ad"
        },
        aj = {
            ["google_bottom_anchor_debug"]: 1,
            ["google_anchor_debug"]: 2,
            ["google_ia_debug"]: 8,
            ["google_scr_debug"]: 9,
            ["googleads"]: 2,
            ["google_pedestal_debug"]: 30
        };
    var bj = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        bh: 4,
        Mc: 6,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE",
        6: "RESPONSIVE_DEBUG"
    };
    var dj = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = cj(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        cj = a => {
            let b = "";
            Bg(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        ej = () => {
            var a = r.location;
            let b = !1;
            Bg($i, c => {
                dj(a, c) && (b = !0)
            });
            return b
        },
        fj = (a, b) => {
            switch (a) {
                case 1:
                    return dj(b, "google_ia_debug");
                case 2:
                    return dj(b, "google_bottom_anchor_debug");
                case 3:
                    return dj(b, "google_anchor_debug") || dj(b, "googleads");
                case 4:
                    return dj(b, "google_scr_debug");
                case 6:
                    return dj(b,
                        "google_responsive_slot_debug")
            }
            return !1
        };
    var Zi = a => "string" === typeof a;
    var gj;
    gj = {
        Ng: 0,
        Jc: 3,
        Kc: 4,
        Nc: 5
    };
    var hj = gj.Jc,
        ij = gj.Kc,
        jj = gj.Nc;

    function kj(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var lj = class {
            constructor() {
                this.j = null;
                this.l = {
                    [hj]: {},
                    [ij]: {},
                    [jj]: {}
                };
                const a = b => this.j ? lf(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[ij] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        mj;
    var oj = class extends w {
            constructor(a) {
                super();
                x(this, a, nj, null)
            }
        },
        nj = [4];
    var pj = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var rj = class extends w {
            constructor(a) {
                super();
                x(this, a, qj, null)
            }
        },
        qj = [3, 4];
    var sj = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
        V() {
            return D(this, oj, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var tj = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function uj() {
        var a = new vj;
        return z(a, 2, 1)
    }
    var vj = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var xj = class extends w {
            constructor(a) {
                super();
                x(this, a, wj, null)
            }
            V() {
                return D(this, oj, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        wj = [6, 7, 9, 10, 11];
    var zj = class extends w {
            constructor(a) {
                super();
                x(this, a, yj, null)
            }
        },
        yj = [4];
    var Aj = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Cj = class extends w {
            constructor(a) {
                super();
                x(this, a, null, Bj)
            }
        },
        Bj = [
            [13, 14]
        ];

    function Dj(a, ...b) {
        gg(a, !0, "trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === b.length) return Qd(a[0]);
        var c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
            d = !0
        } else d = !1;
        if (d = !d) {
            if (/^\//.test(c))
                if ("/" === c || 1 < c.length && "/" !== c[1] && "\\" !== c[1]) d = !0;
                else throw Error("The path start in the url is invalid.");
            else d = !1;
            d = !d
        }
        if (d) {
            if (/^about:blank/.test(c)) {
                if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
                c = !0
            } else c = !1;
            d = !c
        }
        if (d) throw Error("Trying to interpolate expressions in an unsupported url format.");
        c = [a[0]];
        for (d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Qd(c.join(""))
    }

    function Ej(a, b) {
        let c = Sd(a);
        if (/#/.test(c)) throw Error(`Found a hash in url (${c}), appending not supported`);
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Qd(c)
    }

    function Fj() {
        var a;
        var b = Kd(Gj);
        b = (null === (a = Ed()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
        return Qd(URL.createObjectURL(new Blob([b], {
            type: "text/javascript"
        })))
    };
    var Hj = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    var Ij = class {
        constructor(a) {
            this.N = a.N;
            this.pubWin = a.pubWin;
            this.G = a.G;
            this.X = a.X;
            this.ga = a.ga;
            this.Y = a.Y;
            this.W = a.W;
            this.A = -1;
            this.j = 0;
            this.B = this.F = null;
            this.H = this.C = 0;
            this.l = [];
            this.Ha = this.D = ""
        }
    };
    var Jj = (a, b, c) => {
        a.j |= 2;
        return b[c % b.length]
    };
    var Kj = class {
            constructor() {
                var a = {
                    notify: /^expandable-xpc-ready$/
                };
                this.j = this.l = null;
                "function" === typeof a ? this.j = a : this.l = a
            }
            getVerifier(a) {
                return this.l ? this.l[a] : null
            }
            getSchema(a) {
                return this.j ? this.j(a) : null
            }
            doesReturnAnotherSchema() {
                return this.j ? !0 : !1
            }
        },
        Lj = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            K(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = ae(a, "message", e));
                return g
            }
        },
        Mj = (a, b, c, d = null) => {
            const e = Lj(a, b, wa(c, () => e()), d);
            return e
        },
        Nj = class extends Error {
            constructor() {
                super()
            }
        },
        Oj = (a, b, c, d, e) => {
            if (Array.isArray(a)) {
                var f = a;
                for (var g = 0; g < a.length; g++) a[g] = Oj(a[g], b, c, d, e)
            } else if (ca(a)) {
                if (b.doesReturnAnotherSchema())
                    if (f = b.getSchema(a)) {
                        if (b = f, b.doesReturnAnotherSchema()) return Oj(a, b, c, d, e)
                    } else throw new Nj;
                f = {};
                for (g in a)
                    if (Object.prototype.hasOwnProperty.call(a, g)) {
                        d = b.getVerifier(g);
                        c = a[g];
                        var h = b;
                        if (d) {
                            const k = d.predicate || d;
                            if ("function" === typeof k) {
                                h = k(c);
                                if (!h) {
                                    if (!d || !d.nullOnInvalid) throw new Nj;
                                    e && (e[g] = !0);
                                    f[g] = null;
                                    continue
                                }
                                if (h instanceof Kj) d = null;
                                else {
                                    f[g] = c;
                                    continue
                                }
                            }
                        } else if (!ca(c)) continue;
                        f[g] = Oj(c, h, g, d, e)
                    }
            } else if (f = a, b = d ? d.predicate || d : void 0, b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || "function" === typeof b && !b(a)) {
                if (!d || !d.nullOnInvalid) throw new Nj;
                e && (e[c] = !0);
                f = null
            }
            return f
        },
        Qj = (a, b) => {
            var c = Pj;
            return Lj(a, "ct", (d, e) => {
                try {
                    const f = Oj(d, c, null, null, null);
                    b(f, e)
                } catch (f) {
                    if (!(f instanceof Nj)) throw f;
                }
            })
        },
        Rj = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Rj(a[f], b, c, d, --e)
        };
    var Sj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        Tj = {
            [1]: 1,
            [2]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function Uj(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Vj) : a.google_reactive_ads_global_state = new Wj;
        return a.google_reactive_ads_global_state
    }
    class Wj {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Vj
        }
    }
    var Vj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Xj = 728 * 1.38,
        Yj = (a, b = 420) => (a = V(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Zj = a => {
            var b = V(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        bk = a => Math.max(0, ak(a, !0) - V(a).clientHeight),
        V = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        ak = (a, b) => {
            const c = V(a);
            return b ? c.scrollHeight == V(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        dk = (a, b) => ck(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        ek = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        fk = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        gk = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        hk = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        ik = (a, b, c, d, e) => {
            O(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        ck = a => 26 === a || 27 === a || 40 === a;

    function jk() {
        this.R = this.R;
        this.Z = this.Z
    }
    jk.prototype.R = !1;
    jk.prototype.fb = function() {
        this.R || (this.R = !0, this.B())
    };
    jk.prototype.B = function() {
        if (this.Z)
            for (; this.Z.length;) this.Z.shift()()
    };

    function kk(a, b, c) {
        try {
            if (!Gf(c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ua[d]) && uh(a.ja, 168, () => {
            e.call(a, b, c)
        }, f => {
            f.msg_type = d
        })
    }
    class lk extends jk {
        constructor(a) {
            var b = P;
            super();
            this.j = a;
            this.ja = yh;
            this.Oc = b;
            this.Ua = {};
            this.Ic = vh(this.ja, 168, (c, d) => void kk(this, c, d));
            this.jd = vh(this.ja, 169, (c, d) => ik(this.j, "ras::xsf", this.Oc, c, d));
            this.ka = [];
            this.L(this.Ua);
            this.ka.push(Lj(this.j, "sth", this.Ic, this.jd))
        }
        B() {
            for (const a of this.ka) a();
            this.ka.length = 0;
            super.B()
        }
    };
    class mk extends lk {
        constructor(a) {
            super(a);
            this.j = a
        }
    };

    function nk(a) {
        try {
            const b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Ra(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    class ok extends mk {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.A = () => {};
            K(this.l, "load", this.A)
        }
        B() {
            this.l && ae(this.l, "load", this.A);
            super.B();
            this.l = null
        }
        L(a) {
            a["adsense-labs"] = b => {
                if (b = hk(b).settings) try {
                    var c = new oe(JSON.parse(b));
                    if (md(c, 1)) {
                        var d = this.j,
                            e = y(c, 1) || "";
                        const f = nk(d);
                        null !== c && (f[e] = ud(c));
                        try {
                            d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                        } catch (g) {}
                    }
                } catch (f) {}
            }
        }
    };
    class pk {
        constructor(a) {
            this.methodName = a
        }
    }
    var qk = new pk(15),
        rk = new pk(2),
        sk = new pk(3),
        tk = new pk(5),
        uk = new pk(6),
        vk = new pk(7),
        wk = new pk(8),
        xk = new pk(14),
        yk = (a, b, c) => b[a.methodName] || c || (() => {});
    var zk = (a = r) => a.ggeac || (a.ggeac = {});

    function Ak(a, b) {
        a.j = c => {
            yk(rk, b, () => [])(c, 1)
        };
        a.l = () => yk(sk, b, () => [])(1)
    }
    class Bk {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    class Ck {
        constructor() {
            this.j = () => {}
        }
    };
    var Ek = (a = zk()) => {
            Ak(Vi(Bk), a);
            Dk(a);
            Vi(Ck).j = yk(xk, a);
            Vi(Wi).j()
        },
        Dk = a => {
            const b = Vi(Wi);
            b.l = (c, d) => yk(tk, a, () => !1)(c, d, 1);
            b.A = (c, d) => yk(uk, a, () => 0)(c, d, 1);
            b.B = (c, d) => yk(vk, a, () => "")(c, d, 1);
            b.C = (c, d) => yk(wk, a, () => [])(c, d, 1);
            b.j = () => {
                yk(qk, a)(1)
            }
        };
    var Fk = a => {
        const b = Vi(Bk).l();
        a = te(a);
        return b.concat(a).join(",")
    };
    var Gk = (a, b) => {
        const c = sf();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(r.document.location.protocol), "//", encodeURIComponent(r.document.location.host)].join("")
    };
    ob(eb(fb("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Pj = new Kj;

    function Hk(a, b, c, d) {
        Gf(d.origin) && "expandable-xpc-ready" == c.notify && Ik(a, b)
    }

    function Ik(a, b) {
        var c = a.Lb;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.cc,
            f: a.Rd,
            g: a.$c,
            h: a.Cd,
            i: void 0
        });
        r.setTimeout(Q(220, Qg(ma(function(d) {
            df(c.document, mg(d))
        }, b))), 0)
    };

    function Jk(a, b = r) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Fe(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Kk(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Lk = (a, b = !1) => {
            try {
                return b ? (new Ge(a.innerWidth, a.innerHeight)).round() : Ke(a || window).round()
            } catch (c) {
                return new Ge(-12245933, -12245933)
            }
        },
        Mk = (a, b) => {
            var c;
            var d;
            c = (d = (d = bg()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new Yf(c.left, c.top, c.width, c.height) : null) ? new Fe(d.left, d.top) : (c = cg()) && ca(c.rootBounds) ? new Fe(c.rootBounds.left + c.boundingClientRect.left, c.rootBounds.top + c.boundingClientRect.top) : null;
            if (c) return c;
            try {
                var e = new Fe(0, 0),
                    f = Me(Je(b));
                if (Fc(f, "parent")) {
                    do {
                        if (f == a) var g = ug(b);
                        else {
                            var h = tg(b);
                            g = new Fe(h.left, h.top)
                        }
                        c = g;
                        e.x += c.x;
                        e.y += c.y
                    } while (f && f != a && f != f.parent && (b = f.frameElement) && (f = f.parent))
                }
                return e
            } catch (k) {
                return yh.ia(888, k), new Fe(-12245933, -12245933)
            }
        };
    var Ok = class extends w {
            constructor() {
                super();
                x(this, void 0, Nk, null)
            }
        },
        Nk = [15];
    var Pk = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    var Qk = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    let Rk = null,
        Sk = null;
    var Tk = () => {
            if (null != Rk) return Rk;
            Rk = !1;
            try {
                const a = Tg(r);
                a && -1 !== a.location.hash.indexOf("google_logging") && (Rk = !0);
                r.localStorage.getItem("google_logging") && (Rk = !0)
            } catch (a) {}
            return Rk
        },
        Uk = () => {
            if (null != Sk) return Sk;
            Sk = !1;
            try {
                const a = Tg(r);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || r.localStorage.getItem("auto_ads_logging")) Sk = !0
            } catch (a) {}
            return Sk
        },
        Vk = (a, b = []) => {
            let c = !1;
            r.google_logging_queue || (c = !0, r.google_logging_queue = []);
            r.google_logging_queue.push([a, b]);
            c && Tk() && df(r.document,
                ob(eb(fb("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    ob(eb(fb("https://pagead2.googlesyndication.com/pagead/osd.js")));

    function Wk() {
        var a = Xk,
            b = Yk;
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = ff([0], a), null == d && ((d = ff([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };

    function Zk(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function $k(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function al(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    const bl = new qh(N());
    var cl = () => {
        const a = N();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || oh(bl))
    };
    (() => {
        const a = N();
        a && a.document && ("complete" == a.document.readyState ? cl() : bl.j && K(a, "load", () => {
            cl()
        }))
    })();
    var el = () => {
            var a = dl;
            const b = N() || r;
            return b.google_osd_loaded ? !1 : (df(b.document, a), b.google_osd_loaded = !0)
        },
        fl = (a, b, c) => {
            a && (c ? K(a, "load", b) : ae(a, "load", b))
        },
        gl = () => {
            const a = (N() || r).google_osd_amcb;
            return "function" === typeof a ? a : null
        },
        hl = ob(eb(fb("https://www.googletagservices.com/activeview/js/current/osd.js")));

    function il() {
        const a = N(),
            b = a.__google_ad_urls;
        if (!b) return a.__google_ad_urls = new jl(a);
        try {
            if (0 <= b.getOseId()) return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new jl(a, b)
        } catch (c) {
            return a.__google_ad_urls = new jl(a)
        }
    }
    class jl {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.A = b ? b.A : "";
            this.j = b && b.j ? b.j : [];
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].B = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.A && e.j && (e.A = !0, a(e.j, e.D, e.J, e.l, void 0, e.B, e.F, e.I, e.H))
            }
            b && ((N() || r).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId()) return this.getOseId();
            let b = Wk();
            if (!b) return 0;
            this.l = b;
            this.A = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.A
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a,
            b, c, d, e, f, g = () => {}) {
            c = gl();
            e = hh() || -1;
            f = r.pageYOffset;
            0 <= f || (f = -1);
            c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new kl(a, b, d, g, e, f), this.j.push(g), fl(d, g.C, !0), dl || (Qf(r, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`), dl = hl), el() && Eg())
        }
        unloadAdBlock(a, b, c = !1) {
            b = N();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c && (c = Hf(this.j, d => d.j == a)) && fl(a, c.C, !1)
        }
    }
    var dl = null,
        Yk = 0,
        Xk = 0,
        kl = class {
            constructor(a, b, c, d = ba, e = -1, f = -1) {
                this.D = a;
                this.J = b;
                this.j = c;
                this.B = this.A = this.l = !1;
                this.F = d;
                this.I = e;
                this.H = f;
                this.C = () => this.l = !0
            }
        };
    window.Goog_AdSense_getAdAdapterInstance = il;
    oa("Goog_AdSense_OsdAdapter", jl);

    function ll() {
        let a = N();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new ml
    }
    class ml {
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
    };
    let nl = null;
    var ol = (a, b) => {
            let c = 0,
                d = a,
                e = 0;
            for (; a && a != a.parent;)
                if (a = a.parent, e++, af(a)) d = a, c = e;
                else if (b) break;
            return {
                ca: d,
                level: c
            }
        },
        pl = () => {
            nl || (nl = ol(r, !0).ca);
            return nl
        };
    var ql = (a, b, c, d) => {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            const e = b.documentElement;
            if (c && d) {
                let f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        rl = (a, b) => {
            Bg(a, (c, d) => {
                b[d] = c
            })
        },
        sl = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                qb: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                qb: c
            }
        },
        tl = () => {
            var a = N();
            if (a == a.top) return 0;
            for (; a && a != a.top && af(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var ul = a => {
            a = a.google_reactive_ad_format;
            return Sa(a) ? "" + a : null
        },
        vl = a => !!ul(a) || null != a.google_pgb_reactive,
        wl = a => {
            a = ul(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    const xl = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        yl = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Al = class extends w {
            constructor(a) {
                super();
                x(this, a, zl, null)
            }
        },
        Bl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Cl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        zl = [3];
    var El = class extends w {
            constructor(a) {
                super();
                x(this, a, Dl, null)
            }
        },
        Dl = [2];
    var Fl = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Hl = class extends w {
            constructor(a) {
                super();
                x(this, a, Gl, null)
            }
        },
        Gl = [1];
    var Jl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, Il)
            }
        },
        Kl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Ll = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Ml = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Il = [
            [1, 2, 3]
        ];
    var Nl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Ol = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        };
    var Pl = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Rl = class extends w {
            constructor(a) {
                super();
                x(this, a, Ql, null)
            }
        },
        Sl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Ql = [1];
    var Ul = class extends w {
            constructor(a) {
                super();
                x(this, a, Tl, null)
            }
        },
        Wl = class extends w {
            constructor(a) {
                super();
                x(this, a, Vl, null)
            }
        },
        Xl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Zl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, Yl)
            }
        },
        am = class extends w {
            constructor(a) {
                super();
                x(this, a, null, $l)
            }
        },
        bm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Tl = [1],
        Vl = [1],
        Yl = [
            [1, 2]
        ],
        $l = [
            [1, 2]
        ];

    function cm(a) {
        return D(a, dm, 13)
    }

    function em(a) {
        return D(a, fm, 15)
    }
    var hm = class extends w {
            constructor(a) {
                super();
                x(this, a, gm, null)
            }
        },
        im = class extends w {
            constructor() {
                super();
                x(this, void 0, null, null)
            }
        },
        jm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        lm = class extends w {
            constructor(a) {
                super();
                x(this, a, km, null)
            }
        },
        mm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        nm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        dm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        om = class extends w {
            constructor(a) {
                super();
                x(this,
                    a, null, null)
            }
        },
        fm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        pm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        qm = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        gm = [1, 2, 5, 7],
        km = [2, 5, 6, 11];
    var rm = (a, b) => {
        a = y(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const tm = (a, b) => {
            a = yl(xl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = lf(a),
                d = sm(a);
            return b.find(e => {
                const f = md(e, 7) ? y(D(e, mm, 7), 1) : y(e, 1);
                e = md(e, 7) ? y(D(e, mm, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        sm = a => {
            const b = {};
            for (;;) {
                b[lf(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    class um {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function vm(a, b) {
        a.j.forEach((c, d) => void b(c, d, a))
    }

    function wm(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new xm(d)
    }

    function ym(a, b = 1) {
        a = a.j.slice(0);
        const c = new um(b);
        Qa(a, () => c.next());
        return new xm(a)
    }
    const xm = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        filter(a) {
            return new xm(Fa(this.j, a))
        }
        apply(a) {
            return new xm(a(this.j.slice(0)))
        }
        sort(a) {
            return new xm(this.j.slice(0).sort(a))
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new xm(b)
        }
    };
    class zm {
        constructor(a, {
            $b: b,
            Sc: c,
            Ad: d,
            Bc: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new xm(b || []);
            this.l = e;
            this.j = d
        }
    };

    function Am(a, b) {
        return void 0 !== a.j[Bm(b)]
    }

    function Cm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Dm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Em = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Bm(a);
            this.j[c] = b;
            this.l[c] = a
        }
        get(a, b) {
            a = Bm(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ka() {
            return Cm(this).length
        }
    };

    function Bm(a) {
        return a instanceof Object ? String(ea(a)) : a + ""
    };
    var Fm = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Em;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Hm = a => {
            var b = Gm(a);
            a = [];
            for (let c of b) b = String(c.Fa), a.push(c.sa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Gm = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                sa: "a",
                Fa: Im(c)
            });
            null != a.A && b.push({
                sa: "as",
                Fa: a.A
            });
            null != a.j && b.push({
                sa: "i",
                Fa: String(a.j)
            });
            null != a.l && b.push({
                sa: "rp",
                Fa: String(a.l)
            });
            b.sort(function(d, e) {
                return d.sa.localeCompare(e.sa)
            });
            b.unshift({
                sa: "t",
                Fa: Jm(a.C)
            });
            return b
        },
        Jm = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Im = a => {
            a = a.j.slice(0).map(Km);
            a = JSON.stringify(a);
            return lf(a)
        },
        Km = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null !=
                y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };

    function Lm(a) {
        const b = [].slice.call(arguments).filter(xa(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.dc || []);
            d = Object.assign(d, e.La())
        });
        return new Mm(c, d)
    }

    function Nm(a) {
        switch (a) {
            case 1:
                return new Mm(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Mm(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Mm(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Mm(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Om(a) {
        return null == a ? null : new Mm(null, {
            google_placement_id: Hm(a)
        })
    }
    class Mm {
        constructor(a, b) {
            this.dc = a;
            this.j = b
        }
        La() {
            return this.j
        }
    };
    const Pm = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var Qm = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            O(P, "ama", b, !0, .01, void 0)
        },
        Rm = a => {
            const b = {};
            jf(Pm, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var Sm = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                Qm(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            Qm(a, {
                lserr: 1
            })
        }
    };
    var Tm = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };

    function Um(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.Wa = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                ca(c) && (a.G = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                Dg(a.B) && Dg(a.l) || O(P, "rctnosize", b, !0, void 0, void 0);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class Vm {
        constructor() {
            this.D = this.G = this.A = this.Wa = null;
            this.l = this.B = 0
        }
        H() {
            return !0
        }
    };
    class Wm extends Vm {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        H(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = xd(hm, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    var Zm = (a, b) => {
        const c = new Xm(a, b);
        return () => Ym(c)
    };

    function Ym(a) {
        if (a.j) return !1;
        if (null == a.l) return $m(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return $m(a), !0;
        an(a, b);
        return !0
    }

    function $m(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function an(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            $m(a)
        }, b)
    }
    class Xm {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function bn(a, b) {
        a.D ? b(a.A) : a.l.push(b)
    }

    function cn(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class dn {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = Zm(a, () => {
                if (null != this.C) {
                    var b = ak(this.j, !0) - this.C;
                    1E3 < b && cn(this, b)
                }
            });
            this.B = null
        }
        O(a, b) {
            null == a ? (this.C = a = ak(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.O(void 0, b)
            }, a)
        }
        fb() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
    };
    const en = class {
        constructor(a) {
            this.j = new Em;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        contains(a) {
            return Am(this.j, a)
        }
    };
    var fn = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function gn(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? xd(fn, b) : null
        } catch (b) {
            return null
        }
    }

    function hn(a, b) {
        if (void 0 !== a.Gb) {
            let c = gn(b);
            c || (c = new fn);
            void 0 !== a.Gb && z(c, 2, a.Gb);
            z(c, 1, na() + 864E5);
            a = vd(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = gn(b)) && y(a, 1) < na()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function jn(a) {
        return new kn({
            value: a
        }, null)
    }

    function ln(a) {
        return new kn(null, Error(a))
    }

    function mn(a) {
        return null != a.j ? a.j.value : null
    }

    function nn(a, b) {
        null != a.j && b(a.j.value)
    }

    function on(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class kn {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof kn ? a : jn(a)) : this
        }
    };
    class pn {
        constructor(a) {
            this.j = new en(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };
    var qn = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= Yj(a, 1E4)
            } catch (c) {
                b |= 32
            }
            return b
        },
        rn = a => {
            if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
            a = Math.min(a, 600);
            return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
        };
    var sn = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        tn = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = !!a.rss || 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b.top == b
        },
        un = (a, b, c) => {
            a = a.style;
            "rtl" == b ? S(ti) ? a.setProperty("margin-right", c, "important") :
                a.marginRight = c : S(ti) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        };
    const vn = (a, b, c) => {
        a = sn(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var wn = (a, b) => {
            b = b.parentElement;
            return b ? (a = ef(b, a)) ? a.direction : "" : ""
        },
        xn = (a, b, c) => {
            if (0 === vn(a, b, c)) return !1;
            un(b, c, "0px");
            const d = vn(a, b, c);
            un(b, c, -1 * d + "px");
            a = vn(a, b, c);
            0 !== a && a !== d && un(b, c, d / (a - d) * d + "px");
            return !0
        };

    function yn(a, b) {
        zn(a).forEach(b, void 0)
    }

    function zn(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function An(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Bn(a) {
        return zn(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Cn(a, b) {
        a = Ye(new Ie(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Dn(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        An(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function En(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            An(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Gn = (a, b, c, d = 0) => {
            var e = Fn(b, c, d);
            if (e.O) {
                for (c = b = e.O; c = e.hb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.vb
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Dn(a, e.anchor, e.position)
        },
        Hn = (a, b, c, d = 0) => {
            S(Xh) ? Gn(a, b, c, d) : Dn(a, b, c)
        };

    function Fn(a, b, c) {
        const d = f => {
                f = In(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = In(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    O: Jn(a.previousSibling, d),
                    hb: f => Jn(f.previousSibling, d),
                    vb: 0
                };
            case 2:
                return {
                    O: Jn(a.lastChild, d),
                    hb: f => Jn(f.previousSibling, d),
                    vb: 0
                };
            case 3:
                return {
                    O: Jn(a.nextSibling, e),
                    hb: f => Jn(f.nextSibling, e),
                    vb: 3
                };
            case 1:
                return {
                    O: Jn(a.firstChild, e),
                    hb: f => Jn(f.nextSibling, e),
                    vb: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function In(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Jn(a, b) {
        return a && b(a) ? a : null
    };

    function Kn(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Cc(d.Rb);
            a[e] = d.value
        }
    }

    function Ln(a, b, c, d, e, f) {
        a = Mn(a, e);
        a.aa.setAttribute("data-ad-format", d ? d : "auto");
        Nn(a, b, c, f);
        return a
    }

    function On(a, b, c = null) {
        a = Mn(a, {});
        Nn(a, b, null, c);
        return a
    }

    function Nn(a, b, c, d) {
        var e = [];
        if (d = d && d.dc) a.xa.className = d.join(" ");
        a = a.aa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Mn(a, b) {
        var c = Cn(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.ub && Kn(d, b.ub);
        a = Ye(new Ie(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Yb && (d.marginTop = b.Yb);
        b.Db && (d.marginBottom = b.Db);
        b.Da && Kn(d, b.Da);
        c.appendChild(a);
        return {
            xa: c,
            aa: a
        }
    }

    function Qn(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.La();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Rn(a) {
        var b = Bn(a.document);
        Ea(b, function(c) {
            var d = Sn(a, c),
                e;
            if (e = d) e = sn(c, a), e = !((e ? e.y : 0) < V(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Qn(a, c))
        })
    }

    function Sn(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in re) a[re[c]] && (b[re[c]] = a[re[c]]);
        return b
    };
    var Tn = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return Ln(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return rn(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Un(a) {
        var b = [];
        yn(a.getElementsByTagName("p"), function(c) {
            100 <= Vn(c) && b.push(c)
        });
        return b
    }

    function Vn(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        yn(a.childNodes, function(c) {
            b += Vn(c)
        });
        return b
    }

    function Wn(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Xn(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Yn(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.B)
        } catch (g) {}
        if (!c.length) return [];
        b = Na(c);
        b = Xn(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.A) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Un(b[d]),
                    f = a.A;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Zn = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function $n(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || y(a, 3) || 0 < y(a, 4).length) {
            var c = y(a, 3),
                d = y(a, 1),
                e = y(a, 4);
            b = y(a, 2);
            var f = y(a, 5);
            a = ao(y(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Wn(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Wn(e[c]);
            b = (e = g) ? new Zn(e, b, f, a) : null
        } else b = b ? new Zn(b, y(a, 2), y(a, 5), ao(y(a, 6))) : null;
        return b
    }
    var bo = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function ao(a) {
        return null == a ? a : bo[a]
    }

    function co(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Rb = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function eo(a, b) {
        var c = {};
        a && (c.Yb = y(a, 1), c.Db = y(a, 2), c.clearBoth = !!A(a, 3));
        b && (c.ub = co(H(b, pj, 3)), c.Da = co(H(b, pj, 4)));
        return c
    }
    var fo = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        go = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const ho = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return Ln(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };

    function io(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function jo(a) {
        a = Ga(a, b => new Vf(b.top, b.right, b.bottom, b.left));
        a = ko(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function ko(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Ha(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Wf(a[0]))
    };

    function lo(a, b, c) {
        return {
            top: a.j - c,
            right: a.A + a.l + b,
            bottom: a.j + c,
            left: a.A - b
        }
    }
    class mo {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };
    class no {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = rn(a);
            return new Mm(["ap_container"], {
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    };
    var oo = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const po = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < H(this.j, rj, 9).length ? H(this.j, rj, 9)[0] : null,
                f = eo(D(this.j, tj, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = Ye(new Ie(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ub && Kn(c.style, f.ub);
                d = Ye(new Ie(d), "INS");
                f.Da && Kn(d.style, f.Da);
                c.appendChild(d);
                f = {
                    xa: c,
                    aa: d
                };
                f.aa.setAttribute("data-ad-type", "text");
                f.aa.setAttribute("data-native-settings-key",
                    e);
                Nn(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < H(this.j, rj, 9).length ? H(this.j, rj, 9)[0] : null;
            if (!a) return null;
            a = H(a, pj, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    var qo = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        Rb: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Da: g
                }
            } else c = {};
            a = Ln(d.document, a, f, e, c, b);
            a.aa.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        La() {
            return this.j
        }
    };
    class ro {
        constructor(a) {
            this.l = a
        }
        j() {
            return new Mm([], {
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    };
    var so = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = Yn(this.B, a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function to(a, b, c, d) {
        var e = a.V();
        if (!e) return null;
        var f = $n(e);
        if (!f) return null;
        var g = a.l();
        g = fo[g];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = D(a, tj, 3)) ? A(g, 3) : null;
        f = new so(f, h);
        h = y(a, 10).slice(0);
        md(e, 5) && h.push(1);
        var k = d ? d : {};
        d = y(a, 12);
        e = md(a, 4) ? D(a, vj, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return k = k.kd || null, new uo(f, new ho(eo(D(a, tj, 3), null)), k, g, 0, h, e, c, b, d, a);
            case 2:
                return new uo(f, new po(a), k.Bd || new ro("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function vo(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = to(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function wo(a) {
        return a.B
    }

    function xo(a) {
        return a.D instanceof qo ? a.D.La() : null
    }

    function yo(a, b, c) {
        Am(a.K, b) || a.K.set(b, []);
        a.K.get(b).push(c)
    }

    function zo(a) {
        return Cn(a.j.document, a.I || !1)
    }

    function Ao(a) {
        return a.D.A(a.j)
    }

    function Bo(a, b = null, c = null) {
        return new uo(a.H, b || a.D, c || a.L, a.I, a.za, a.Ob, a.Oa, a.j, a.Z, a.F, a.A, a.C, a.R)
    }
    class uo {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.H = a;
            this.D = b;
            this.L = c;
            this.I = d;
            this.za = e;
            this.Ob = f;
            this.Oa = g ? g : new vj;
            this.j = h;
            this.Z = k;
            this.F = l;
            this.A = m;
            this.C = n;
            this.R = p;
            this.J = [];
            this.B = !1;
            this.K = new Em
        }
        M() {
            return this.j
        }
        l() {
            return this.H.l()
        }
    };
    const Co = {
        TABLE: {
            Ga: new pn([1, 2])
        },
        THEAD: {
            Ga: new pn([0, 3, 1, 2])
        },
        TBODY: {
            Ga: new pn([0, 3, 1, 2])
        },
        TR: {
            Ga: new pn([0, 3, 1, 2])
        },
        TD: {
            Ga: new pn([0, 3])
        }
    };

    function Do(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Da(e, f), 0 > c || b.push(new Eo(a, [f], c, f, 3, Re(f).trim(), d));
        return b
    }

    function Fo(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const p = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == p || "inline-block" == p ? null : m
                }
                m ? (d.length && k && e.push(new Eo(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Re(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Eo(a, d, h, b, 2, k, c));
        return e
    }

    function Go(a, b) {
        return a.j - b.j
    }

    function Ho(a) {
        const b = uj();
        return new uo(new oo(a.zb, a.Ab), new ho({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class Eo {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.cb = b.slice(0);
            this.j = c;
            this.zb = d;
            this.Ab = e;
            this.B = f;
            this.l = g
        }
        M() {
            return this.l
        }
    };

    function Io(a) {
        return Ma(a.B ? Fo(a.j, a.na, a.l) : [], a.A ? Do(a.j, a.A, a.na, a.l) : []).filter(b => {
            var c = b.zb.tagName;
            c ? (c = Co[c.toUpperCase()], b = null != c && c.Ga.contains(b.Ab)) : b = !1;
            return !b
        })
    }
    class Jo {
        constructor(a, b, c) {
            this.na = a;
            this.A = b.bb;
            this.B = b.jc;
            this.j = b.articleStructure;
            this.l = c
        }
    };
    var Ko = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    const Lo = new en("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    const Mo = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? zc(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Lo.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Mo(a, b[c])) return !0
        }
        return !1
    };

    function No(a, b) {
        if (!b) return !1;
        const c = ea(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = No(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Oo(a, b) {
        return Ia(b.cb, c => No(a, c))
    }
    class Po {
        constructor(a) {
            this.j = new Em;
            this.l = a
        }
    };
    class Qo {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var So = (a, {
            Gh: b = !1,
            Hh: c = 3,
            ce: d = null
        } = {}) => {
            a = Io(a);
            return Ro(a, b, c, d)
        },
        Ro = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Go);
            a = [];
            b = new Qo(b, d);
            for (const l of e) {
                d = b;
                e = {
                    wb: l,
                    mb: 51 > l.B.length ? !1 : null != d.A ? !Oo(d.A, l) : !0
                };
                if (d.B || e.mb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].wb;
                        b: {
                            var g = f.M();
                            var h = f.cb[f.cb.length - 1];f = e.wb.cb[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Mo(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.mb && d.l.push(e.wb)) : (d.j = [e], d.l = e.mb ? [e.wb] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].mb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Uo = (a, b) => {
            a = To(a, b);
            const c = new Po(b);
            return Ko(a, d => So(d, {
                ce: c
            }))
        },
        To = (a, b) => {
            const c = new Em;
            a.forEach(d => {
                var e = $n(D(d, oj, 1));
                if (e) {
                    const f = e.toString();
                    Am(c, f) || c.set(f, {
                        articleStructure: d,
                        Zc: e,
                        bb: null,
                        jc: !1
                    });
                    e = c.get(f);
                    (d = (d = D(d, oj, 2)) ? y(d, 7) : null) ? e.bb = e.bb ? e.bb + "," + d : d: e.jc = !0
                }
            });
            return Dm(c).map(d => {
                const e = Yn(d.Zc, b.document);
                return e.length ? new Jo(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Vo = a => (null == a ? 0 : a.google_ad_slot) ? jn(new zm(1, {
            Sc: a.google_ad_slot
        })) : ln("Missing dimension when creating placement id"),
        Xo = a => {
            switch (a.za) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.V(), null == a ? a = null : (b = b.l(), a = null == b ? null : new zm(0, {
                        $b: [a],
                        Bc: b
                    })));
                    return null != a ? jn(a) : ln("Missing dimension when creating placement id");
                case 2:
                    return a = Wo(a), null != a ? jn(a) : ln("Missing dimension when creating placement id");
                default:
                    return ln("Invalid type: " + a.za)
            }
        };
    const Wo = a => {
        if (null == a || null == a.C) return null;
        const b = D(a.C, oj, 1),
            c = D(a.C, oj, 2);
        if (null == b || null == c) return null;
        const d = a.R;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new zm(0, {
            $b: [b, c],
            Ad: d,
            Bc: go[a]
        })
    };

    function Yo(a) {
        const b = xo(a.P);
        return (b ? Vo(b) : Xo(a.P)).map(c => Hm(c))
    }

    function Zo(a) {
        a.j = a.j || Yo(a);
        return a.j
    }

    function $o(a, b) {
        if (a.P.B) throw Error("AMA:AP:AP");
        Hn(b, a.V(), a.P.l());
        a = a.P;
        a.B = !0;
        null != b && a.J.push(b)
    }
    var ap = class {
        constructor(a, b, c) {
            this.P = a;
            this.l = b;
            this.T = c;
            this.j = null
        }
        V() {
            return this.l
        }
        fill(a, b) {
            var c = this.P;
            (a = c.D.l(a, b, this.l, c.j)) && $o(this, a.xa);
            return a
        }
    };
    var bp = Q(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.H.j(g.j);
                h && e.push({
                    xc: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var k = a.push;
                var l = e[f],
                    m = l.anchorElement,
                    n = l.xc,
                    p = n.I,
                    q = n.j.document.createElement("div");
                q.className = "google-auto-placed";
                var v = q.style;
                v.textAlign = "center";
                v.width = "100%";
                v.height = "0px";
                v.clear = p ? "both" : "none";
                var u = q;
                try {
                    Hn(u, m, n.l());
                    var B = u
                } catch (E) {
                    throw En(u), E;
                }
                k.call(a, B)
            }
            var F = fk(b),
                G = gk(b);
            for (f = 0; f < d.length; f++) {
                b = G;
                k = F;
                var I =
                    d[f].getBoundingClientRect(),
                    C = e[f];
                c.push(new ap(C.xc, C.anchorElement, new mo(I.left + b, I.top + k, I.right - I.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) En(d[f])
        }
        return c
    });
    const cp = a => {
            a = a.na.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        dp = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.na.getBoundingClientRect().width));
            return c => c.na.getBoundingClientRect().width > .5 * b
        },
        ep = (a, b) => a.na.getBoundingClientRect().top - b.na.getBoundingClientRect().top;

    function fp(a) {
        gg(a, !1, "safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;");
        return Jd(a[0])
    }

    function gp(a, ...b) {
        if (b.some(c => "" !== c)) throw Error("safeScriptWithArgs only allows empty string expressions to enable inline comments.");
        gg(a, !0, "safeScriptWithArgs is a template literal tag function that only accepts template literals. For example, safeScriptWithArgs`foo`;");
        return (...c) => {
            c = c.map(d => Jd(JSON.stringify(d).replace(/</g, "\\x3c")).toString());
            return Jd(`(${a.join("")})(${c.join(",")})`)
        }
    };
    var hp = class {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
        O() {
            var a = this.j,
                b = this.A.document;
            const c = b.createElement("div");
            c.id = "google-auto-placed-read-aloud-player";
            var d = b.createElement("script");
            Wd(d, fp `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`);
            c.appendChild(d);
            d = b.createElement("script");
            Xd(d, ob(eb(fb("https://www.google-analytics.com/analytics.js"))));
            d.setAttribute("async", "true");
            c.appendChild(d);
            const e = b.createElement("script");
            Xd(e, ob(eb(fb("https://www.gstatic.com/readaloud/player/web/api/js/api.js"))));
            d.setAttribute("async", "true");
            c.appendChild(e);
            b = b.createElement("google-read-aloud-player");
            b.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            b.setAttribute("data-tracking-ids", "UA-199725947-1");
            b.setAttribute("data-url", this.l.url);
            b.setAttribute("data-voice", "en-us-f-1");
            c.appendChild(b);
            $o(a, c)
        }
    };

    function ip(a, b, c) {
        let d;
        const e = null == (d = D(b, Rl, 6)) ? void 0 : H(d, Sl, 1);
        return e && 0 != e.length ? (b = D(b, Nl, 27)) ? D(b, Ol, 2) ? jn(new jp(a, e, b, c)) : ln("No AudioSenseConfig.PlacementConfig found") : ln("No AudioSenseConfig found") : ln("No ArticleStructure found")
    }
    var jp = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.B = c;
            this.l = d
        }
    };
    const kp = ["-webkit-text-fill-color"];

    function lp(a) {
        if (Lc) {
            {
                const c = ef(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = mp(a)
                } else a = np()
            }
        } else a = np();
        return a
    }
    var np = () => {
        const a = {
            all: "initial"
        };
        Ea(kp, b => {
            a[b] = "unset"
        });
        return a
    };

    function mp(a) {
        Ea(kp, b => {
            delete a[b]
        });
        return a
    };
    var op = class {
        constructor(a) {
            this.j = a
        }
        Ja(a) {
            const b = a.document.createElement("div");
            L(b, lp(a));
            L(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            L(c, lp(a));
            L(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var pp = (a, b) => (b = D(b, Rl, 6)) ? Uo(H(b, Sl, 1), a).map(c => Ho(c)) : [];

    function qp(a) {
        const b = a.j.document.createElement("SCRIPT");
        b.type = "text/javascript";
        var c = a.B.map(d => ({
            container: d,
            relatedSearches: 5
        }));
        c = gp `function(afsProperty, cseElementName, rsBlocks, language){ 
          function performSearch(query, rsToken) { 
            const element = google.search.cse.element.getElement(cseElementName); 
            element.execute(query, undefined, { rsToken: rsToken }); 
          } 
          const pageOptions = { 
            pubId: afsProperty, 
            styleId: '5134551505', 
            hl: language, 
            resultsPageBaseUrl: 'http://google.com', 
            resultsPageQueryParam: 'q', 
            relatedSearchTargeting: 'content', 
            relatedSearchResultClickedCallback: performSearch, 
            relatedSearchUseResultCallback: true, 
          }; 
          _googCsa('relatedsearch', pageOptions, rsBlocks); 
        }` (a.A, "auto-rs-prose", c, a.l);
        Wd(b, c);
        a.j.document.body.appendChild(b)
    }
    var rp = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.C = c;
            this.l = d || "en";
            this.A = this.C.replace("ca", "partner")
        }
        O() {
            if (0 != this.B.length) {
                var a = this.j.document.createElement("div");
                L(a, lp(this.j));
                L(a, {
                    width: 0,
                    height: 0
                });
                var b = this.j.document.createElement("div");
                b.classList.add("gcse-searchresults-only");
                b.setAttribute("data-gname", "auto-rs-prose");
                b.setAttribute("data-adclient", this.A);
                b.setAttribute("data-as_sitesearch", this.j.location.host);
                b.setAttribute("data-gl", this.l);
                a.appendChild(b);
                this.j.document.body.appendChild(a);
                a = this.j.document.createElement("SCRIPT");
                Xd(a, Dj `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                a = this.j.document.createElement("SCRIPT");
                a.type = "text/javascript";
                b = fp `(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`;
                Wd(a, b);
                this.j.document.head.appendChild(a);
                a = this.j.document.createElement("SCRIPT");
                b = Dj `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                b = Ej(b, new Map([
                    ["language",
                        this.l
                    ]
                ]));
                Xd(a, b);
                this.j.document.head.appendChild(a);
                qp(this)
            }
        }
    };

    function sp(a, b, c = !1) {
        a.l.push(b);
        c && b(a.j)
    }

    function tp(a, b) {
        a.j = b;
        Ea(a.l, c => {
            c(a.j)
        })
    }

    function up(a, b) {
        sp(b, c => tp(a, c), !0)
    }
    class vp {
        constructor(a) {
            this.j = a;
            this.l = []
        }
        map(a) {
            const b = new vp(a(this.j));
            sp(this, c => tp(b, a(c)));
            return b
        }
    };

    function wp(a) {
        const b = zo(a.A.P),
            c = a.D.Ja(a.F, () => a.B());
        b.appendChild(c);
        a.C && (b.className = a.C);
        return {
            sd: b,
            pd: c
        }
    }
    class xp {
        constructor(a, b, c, d) {
            this.F = a;
            this.A = b;
            this.D = c;
            this.C = d || null;
            this.j = null;
            this.l = new vp(null)
        }
        O() {
            const a = wp(this);
            this.j = a.sd;
            $o(this.A, this.j);
            tp(this.l, a.pd)
        }
        B() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            tp(this.l, null)
        }
        H() {
            return this.l
        }
    };
    var yp = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.A = c
        }
    };

    function zp(a, b) {
        return a.T.j - b.T.j
    };

    function Ap(a, b) {
        const c = a.document.createElement("img");
        Bp(a, c);
        wc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        L(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Cp(a, b) {
        const c = b.document.createElement("button");
        Bp(b, c);
        L(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Dp(a, b, c) {
        const d = b.document.createElement("img");
        wc(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        Bp(b, d);
        L(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Ep(a) {
        const b = a.document.createElement("ins");
        Bp(a, b);
        L(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Fp {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new vp(!1)
        }
        Ja(a, b, c, d) {
            const e = Ap(a, d),
                f = Ap(a),
                g = Cp(this, a),
                h = Dp(this, a, c);
            a = Ep(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            sp(this.j, k => {
                L(e, {
                    display: k ? "none" : "inline"
                });
                L(f, {
                    display: k ? "inline" : "none"
                });
                k ? (L(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), L(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (L(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), L(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        lc() {
            return 40
        }
        uc() {
            tp(this.j, !1);
            return 0
        }
        vc() {
            tp(this.j, !0)
        }
    }

    function Bp(a, b) {
        L(b, lp(a));
        L(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Gp(a, b) {
        const c = b.document.createElement("button");
        Hp(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        L(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Ip(a, b, c, d) {
        const e = b.document.createElement("div");
        L(e, lp(b));
        L(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        L(f, lp(b));
        L(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (L(e, {
                    "flex-direction": "row"
                }), a.j && L(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), L(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                L(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (L(e, {
                border: "0",
                "flex-direction": "column"
            }), L(f, {
                "margin-left": "0",
                "text-align": "center"
            }), L(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && L(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Hp(a, b, c) {
        L(c, lp(b));
        L(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Jp {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.H = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        Ja(a) {
            const b = a.document.createElement("div");
            Hp(this, a, b);
            L(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                wc(c, this.B);
                Hp(this, a, c);
                L(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Hp(this, a, c);
            L(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Gp(this, a);
            c.appendChild(b);
            return this.A ? Ip(this, a, c, this.A) : c
        }
    };
    var Kp = (a, b) => {
        b = b.filter(c => 5 == y(D(c, vj, 4), 1) && 1 == y(c, 8));
        b = vo(b, a);
        a = bp(b, a);
        a.sort((c, d) => d.T.j - c.T.j);
        return a[0] || null
    };
    var Np = (a, b, c, d = null, e, f = !1) => {
            let g = 0;
            try {
                g = e ? g | (a.innerHeight >= e ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8), g |= Yj(a, c), g |= Zj(a)
            } catch (h) {
                g |= 32
            }
            switch (b) {
                case 2:
                    Lp(a, f, d) && (g |= 16777216);
                    break;
                case 1:
                    Mp(a, f, d) && (g |= 16777216)
            }
            return g
        },
        Lp = (a, b, c = null) => {
            const d = a.innerWidth;
            b = Op(d, b ? Math.max(2, Math.min(10, Math.ceil(d / 300))) + 1 : 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Pp) + 15);
            return Qp(a, b, c)
        },
        Mp = (a, b, c = null) => {
            const d = a.innerWidth,
                e = a.innerHeight,
                f = Math.min(Math.round(a.innerWidth / 320 * 50), Pp) +
                15;
            b = Op(d, b ? Math.max(2, Math.min(10, Math.ceil(d / 300))) + 1 : 3, e - f, e);
            25 < f && b.push({
                x: d - 25,
                y: e - 25
            });
            return Qp(a, b, c)
        },
        Sp = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = Op(c, 3, e - b, e);
                f = Rp(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        Qp = (a, b, c = null) => null != Rp(a, b, c);

    function Rp(a, b, c = null) {
        for (const d of b)
            if (b = Tp(a, d, c)) return b;
        return null
    }

    function Tp(a, b, c = null) {
        var d = a.document;
        var e = b.x,
            f = b.y;
        d.hasOwnProperty("_goog_efp_called_") || (d._goog_efp_called_ = d.elementFromPoint(e, f));
        return (d = d.elementFromPoint(e, f)) ? Up(d, a, b, c) || Vp(d, a, b, c) || null : null
    }

    function Vp(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = Up(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var Op = (a, b, c, d) => {
        const e = [];
        for (let h = 0; 3 > h; h++)
            for (let k = 0; k < b; k++) {
                var f = e,
                    g = b - 1;
                f.push.call(f, {
                    x: (0 == g ? 0 : k / g) * a,
                    y: c + h / 2 * (d - c)
                })
            }
        return e
    };

    function Up(a, b, c, d = null) {
        if ("fixed" !== sg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= vg(a).width && 1 >= vg(a).height ? !0 : !1;
        d && O(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Pp = 90 * 1.38;

    function Wp(a) {
        if (a.I) {
            const b = fk(a.j);
            if (b > a.l + 100 || b < a.l - 100) Xp(a), a.l = bk(a.j)
        }
        a.J && a.j.clearTimeout(a.J);
        a.J = a.j.setTimeout(() => Yp(a), 200)
    }

    function Yp(a) {
        var b = bk(a.j);
        a.l && a.l > b && (a.l = b);
        b = fk(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Zp(a))
    }

    function $p(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function Xp(a) {
        a.I = !1;
        const b = a.D.uc();
        switch (b) {
            case 0:
                tp(a.C, a.F);
                break;
            case 1:
                a.A && (L(a.A, {
                    display: "none"
                }), tp(a.C, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Zp(a) {
        a.A || (a.A = aq(a));
        L(a.A, {
            display: "block"
        });
        a.I = !0;
        a.D.vc();
        tp(a.C, a.F)
    }

    function aq(a) {
        var b = Sp(a.j, a.D.lc() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        L(c, lp(a.j));
        L(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.F = a.D.Ja(a.j, () => a.B(), () => {
            $p(a);
            Xp(a)
        }, () => {
            $p(a);
            Zp(a)
        });
        c.appendChild(a.F);
        a.K && (c.className = a.K);
        a.j.document.body.appendChild(c);
        return c
    }
    class bq {
        constructor(a, b, c) {
            this.j = a;
            this.D = b;
            this.F = null;
            this.C = new vp(null);
            this.K = c || null;
            this.A = null;
            this.I = !1;
            this.l = 0;
            this.J = null;
            this.L = () => Wp(this)
        }
        O() {
            this.j.addEventListener("scroll", this.L);
            this.l = bk(this.j);
            Yp(this)
        }
        B() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            $p(this);
            tp(this.C, null)
        }
        H() {
            return this.C
        }
    };

    function cq(a) {
        tp(a.F, 0);
        null != a.A && (a.A.B(), a.A = null);
        null != a.l && (a.l.B(), a.l = null)
    }

    function dq(a) {
        a.l = new bq(a.D, a.K, a.I);
        a.l.O();
        up(a.C, a.l.H());
        tp(a.F, 2)
    }
    class eq {
        constructor(a, b, c, d, e) {
            this.D = a;
            this.J = b;
            this.L = c;
            this.K = d;
            this.I = e;
            this.F = new vp(0);
            this.C = new vp(null);
            this.l = this.A = this.j = null
        }
        O() {
            this.J ? (this.A = new xp(this.D, this.J, this.L, this.I), this.A.O(), up(this.C, this.A.H()), tp(this.F, 1), null == this.j && (this.j = new dn(this.D), this.j.O(2E3)), bn(this.j, () => {
                cq(this);
                dq(this)
            })) : dq(this)
        }
        B() {
            cq(this);
            this.j && (this.j.fb(), this.j = null)
        }
        H() {
            return this.C
        }
    };
    var fq = (a, b, c, d, e) => {
        a = new eq(a, Kp(a, e), new Jp(b, d, "#FFF", "#4A4A4A", "normal"), new Fp(b, c, d), "google-dns-link-placeholder");
        a.O();
        return a
    };
    var gq = a => a.googlefc = a.googlefc || {},
        hq = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function iq(a) {
        const b = jq(a);
        Ea(a.j.maxZIndexListeners, c => c(b))
    }

    function jq(a) {
        a = kf(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class kq {
        constructor(a) {
            this.j = Uj(a).floatingAdsStacking
        }
    }

    function lq(a) {
        if (null == a.j) {
            var b = a.l;
            const c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483643;
            iq(b);
            a.j = c
        }
    }

    function mq(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            iq(b);
            a.j = null
        }
    }
    class nq {
        constructor(a) {
            this.l = a;
            this.j = null
        }
    };

    function oq(a) {
        var b = hq(a.j);
        if (pq(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = fq(a.j, c, b, () => qq(a), a.B))
        }
    }

    function rq(a) {
        const b = gq(a.j);
        hq(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => oq(a)
        })
    }

    function qq(a) {
        lq(a.A);
        hq(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.B(), a.l = null);
            mq(a.A)
        })
    }
    class sq {
        constructor(a, b, c) {
            this.j = a;
            this.A = new nq(b);
            this.B = c;
            this.l = null
        }
    }

    function pq(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function tq(a) {
        const b = a.document.createElement("ins");
        uq(a, b);
        L(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function vq(a, b, c, d) {
        const e = a.document.createElement("img");
        wc(e, b);
        d && e.setAttribute("aria-label", d);
        uq(a, e);
        L(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function wq(a, b) {
        const c = b.document.createElement("span");
        uq(b, c);
        L(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function xq(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        L(c, lp(b));
        L(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function yq(a) {
        const b = a.document.createElement("div");
        L(b, lp(a));
        L(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class zq {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new vp(!1)
        }
        Ja(a, b, c, d) {
            c = tq(a);
            const e = vq(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = vq(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = wq(this, a),
                h = vq(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            L(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = xq(this, a);
            a = yq(a);
            a.appendChild(c);
            a.appendChild(k);
            sp(this.j, l => {
                L(e, {
                    display: l ? "none" : "inline"
                });
                L(f, {
                    display: l ? "inline" : "none"
                });
                l ? (L(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), L(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), L(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (L(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), L(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), L(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        lc() {
            return 71
        }
        uc() {
            tp(this.j, !1);
            return 0
        }
        vc() {
            tp(this.j, !0)
        }
    }

    function uq(a, b) {
        L(b, lp(a));
        L(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Aq(a) {
        Bq(a.l, b => {
            var c = a.B,
                d = b.$d,
                e = b.od,
                f = b.bd;
            b = b.showRevocationMessage;
            (new eq(c, Kp(c, a.A), new Jp(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new zq(d, e, f, b), "google-revocation-link-placeholder")).O()
        }, () => {
            mq(a.j)
        })
    }
    class Cq {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = new nq(b);
            this.A = c;
            this.l = d
        }
    };
    var Dq = a => {
        if (!a || !md(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function Eq(a) {
        if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            Dq(a.l) && (b = new Cq(a.j, a.C, a.B || H(a.l, xj, 4), a.A), lq(b.j), Aq(b), b = !0);
            var c;
            a: if ((c = a.l) && md(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (rq(new sq(a.j, a.C, a.B || H(a.l, xj, 4))), b = !0);
            b && (a.A.start(), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class Fq {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.C = d;
            this.B = e || null
        }
    };
    var Gq = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Ye(a, "SCRIPT");
                h.async = !0;
                Xd(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? Gq(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        Hq = (a, b, c = () => {}, d = () => {}) => {
            Gq(He(a), b, 0, !1, c, d)
        };
    var Iq = (a = null) => {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    var Jq = {
        kg: 0,
        jg: 1,
        gg: 2,
        bg: 3,
        hg: 4,
        cg: 5,
        ig: 6,
        eg: 7,
        fg: 8,
        ag: 9,
        dg: 10
    };
    var Kq = {
        mg: 0,
        ng: 1,
        lg: 2
    };
    Ua(Jq);
    Ua(Kq);
    var Lq = (a, b) => {
        const c = a.document,
            d = He(a),
            e = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const f = Ye(d, "IFRAME");
                        f.style.display = "none";
                        f.style.width = "0px";
                        f.style.height = "0px";
                        f.style.border = "none";
                        f.style.zIndex = "-1000";
                        f.style.left = "-1000px";
                        f.style.top = "-1000px";
                        f.name = b;
                        c.body.appendChild(f)
                    } else a.setTimeout(e, 5)
            };
        e()
    };
    const Mq = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Nq(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Mq(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }

    function Oq(a) {
        if (a.l) return a.l;
        a.l = yf(a.j, "__tcfapiLocator");
        return a.l
    }

    function Pq(a) {
        return "function" === typeof a.j.__tcfapi || null != Oq(a)
    }

    function Qq(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Oq(a)) {
            Rq(a);
            const e = ++a.F;
            a.C[e] = c;
            a.l && a.l.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Sq(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = Aa(() => b(c));
        let e = 0; - 1 !== a.D && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        Qq(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = Mq(c), Nq(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Qq(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
        })
    }

    function Tq(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = Aa(() => b(c));
        let e = 0; - 1 !== a.D && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        Qq(a, "addEventListener", (f, g) => {
            e && (clearTimeout(e), e = 0);
            g && (c = f);
            c.internalErrorState = Mq(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || Nq(c)) Qq(a, "removeEventListener", null, c.listenerId), d()
        })
    }

    function Uq(a) {
        return new Promise(b => {
            Tq(a, b)
        })
    }

    function Rq(a) {
        a.A || (a.A = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, K(a.j, "message", a.A))
    }
    class Vq extends jk {
        constructor(a, b = 500) {
            super();
            this.j = a;
            this.l = null;
            this.C = {};
            this.F = 0;
            this.D = b;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (ae(this.j, "message", this.A), delete this.A);
            delete this.C;
            delete this.j;
            delete this.l;
            super.B()
        }
    };

    function Bq(a, b, c) {
        const d = Iq(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Iq(a.j),
                    f = new Vq(a.j);
                Pq(f) && Sq(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        $d: e.getDefaultConsentRevocationText(),
                        od: e.getDefaultConsentRevocationCloseText(),
                        bd: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function Wq(a) {
        const b = qb(fb("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        Hq(a.j, b, () => {}, () => {})
    }
    class Xq {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            try {
                Lq(this.j, "googlefcPresent"), Wq(this)
            } catch (a) {}
        }
    };
    var Yq = (a, b, c) => {
        const d = D(a, Rl, 6);
        if (!d) return [];
        c = Uo(H(d, Sl, 1), c);
        return (a = em(a)) && A(a, 11) ? c.map(e => Ho(e)) : c.map(e => {
            const f = uj();
            return new uo(new oo(e.zb, e.Ab), new Tn, new no(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Zq = !Jc && !ec();

    function $q(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Zq && a.dataset) {
            if (!(!t("Android") || fc() || dc() || bc() || t("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var ar = (a, b, c) => {
            if (!b) return null;
            const d = Ne(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = V(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        cr = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Ze() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), br(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        br = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == $q(a[b])) return !0;
            return !1
        };
    const dr = {
            1: "0.5vp",
            2: "300px"
        },
        er = {
            1: 700,
            2: 1200
        },
        fr = {
            [1]: {
                Gc: "3vp",
                Wb: "1vp",
                Fc: "0.3vp"
            },
            [2]: {
                Gc: "900px",
                Wb: "300px",
                Fc: "90px"
            }
        };

    function gr(a) {
        const b = hr(a);
        return ir(b, V(a).clientHeight || er[b])
    }
    class jr {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function kr(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function lr(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = mr(y(d, 2), b),
                f = mr(y(d, 3), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Vb: {
                    tb: e,
                    ra: f
                }
            })
        }
        return c
    }

    function nr(a, b) {
        const c = mr(y(a, 2), b),
            d = mr(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = H(a, Bl, 3);
        f = lr(f, b);
        if (null === f) return null;
        const g = D(a, Cl, 7);
        b = g ? or(g, b) : void 0;
        return new jr(c, d, f, e, nd(a, 6), b)
    }

    function ir(a, b) {
        a = mr(dr[a], b);
        return new jr(null === a ? Infinity : a, null, [], 3, null)
    }

    function mr(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function hr(a) {
        a = 900 <= V(a).clientWidth;
        return Ze() && !a ? 1 : 2
    }

    function pr(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Vb: {
                tb: 2 * a,
                ra: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Vb: {
                tb: 3 * a,
                ra: 3 * b
            }
        }]
    }

    function or(a, b) {
        const c = mr(y(a, 2), b) || 0,
            d = y(a, 3) || 1;
        a = mr(y(a, 1), b) || 0;
        return {
            sc: c,
            qc: d,
            Ea: a
        }
    };

    function qr(a, b, c) {
        return io({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function rr(a) {
        if (!a.length) return null;
        const b = jo(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new sr(b, a)
    }
    class sr {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    var yr = (a, b) => {
        const c = Na(b.document.querySelectorAll(".google-auto-placed")),
            d = tr(b),
            e = ur(b),
            f = vr(b),
            g = wr(b),
            h = Na(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Na(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = [].concat(Na(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Na(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [m, n] of [
                [a.jb, c],
                [a.ya, d],
                [a.zd, e],
                [a.kb, f],
                [a.lb, g],
                [a.wd, h],
                [a.yd, k]
            ]) a = n, !1 === m ? b = b.concat(a) :
            l = l.concat(a);
        a = xr(l);
        b = xr(b);
        a = a.slice(0);
        for (const m of b)
            for (b = 0; b < a.length; b++)(m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return a
    };
    const zr = a => {
            try {
                return Fa(Ga(a.googletag.pubads().getSlots(), b => a.document.getElementById(b.getSlotElementId())), b => null != b)
            } catch (b) {}
            return null
        },
        tr = a => Na(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        ur = a => Na(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        vr = a => (zr(a) || Na(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Na(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        wr = a => Na(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var xr = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Ar = Q(453, yr),
        Br = Q(454, (a, b) => {
            const c = Na(b.document.querySelectorAll(".google-auto-placed")),
                d = tr(b),
                e = ur(b),
                f = vr(b),
                g = wr(b),
                h = Na(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = Na(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return xr([].concat(!0 === a.jb ? c : [], !0 === a.ya ? d : [], !0 === a.zd ? e : [], !0 === a.kb ? f : [], !0 === a.lb ? g : [], !0 === a.wd ? h : [], !0 === a.yd ? b : []))
        });

    function Cr(a, b, c) {
        const d = Dr(a);
        b = Er(d, b, c);
        return new Fr(a, d, b)
    }

    function Gr(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Hr(a) {
        return a.j.map(b => b.box)
    }

    function Ir(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Fr {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function Dr(a) {
        const b = Ar({
                ya: !1
            }, a),
            c = gk(a),
            d = fk(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || Gr(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Dh: e ? 1 : 0
            } : null
        }).filter(xa(e => null === e))
    }

    function Er(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Jr(a, b) : Ga(a, d => new sr(d.box, 1))
    }

    function Jr(a, b) {
        a = Ga(a, d => new sr(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (qr(d, a[f], b)) {
                        d = rr([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Kr(a) {
        return new Mm(["pedestal_container"], {
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class Lr {
        j(a) {
            return Kr(Math.floor(a.l))
        }
    };

    function Mr(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c, d;
        a = null === (c = Uj(a)) || void 0 === c ? void 0 : c.tagSpecificState[1];
        (c = null == a ? null : 4 === (null === (d = a.debugCard) || void 0 === d ? void 0 : d.getAdType()) ? a.debugCard : null) && c.displayAdLoadedContent(b)
    };
    var Nr = {};

    function Or(a, b, c) {
        let d = Pr(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Na && d.Na.length;) {
            const h = d.Na.shift();
            var g = Ao(h.P);
            const k = h.T.j,
                l = !!c.l.Pa || !!c.l.Qa || Qr(c.A.j) || !!c.l.hc || k > e;
            g = !g || g <= d.$a;
            if (l && g && Rr(c, h, {
                    oc: d.$a
                })) {
                e = k;
                if (d.Ya.j.length + 1 >= f) return !0;
                d = Pr(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    var Pr = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = Cr(b.M(), f.j ? f.j.Ea : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = V(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Ir(f)) : e = void 0;
        a = null == e || 50 <= e ? Sr(b, f, {
            types: a
        }, c) : null;
        return {
            Ya: f,
            $a: e,
            Na: a
        }
    };
    Nr[2] = ma(function(a, b) {
        a = Sr(b, Cr(b.M()), {
            types: a,
            ua: gr(b.M())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Rr(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Nr[5] = ma(Or, [0], 5);
    Nr[3] = function(a) {
        if (!a.B) return !1;
        var b = Sr(a, Cr(a.M()), {
            types: [0],
            ua: gr(a.M())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Rr(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    var Tr = a => {
            var b;
            a.l.Hc ? b = new jr(0, null, [], 3, null) : b = gr(a.M());
            return {
                types: [0],
                ua: b
            }
        },
        Vr = a => {
            var b = a.M().document.body.getBoundingClientRect().width;
            b = Kr(b);
            var c = a.j;
            var d = c.document.body,
                e = ar(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const l = f.pop(),
                            m = l.element;
                        var k = l.height;
                        0 < l.depth && k > g && (g = k, h = m);
                        if (5 > l.depth)
                            for (let n = 0; n < m.children.length; n++) {
                                const p =
                                    m.children[n];
                                k = e;
                                const q = p.getBoundingClientRect().width;
                                (null == q || null == k ? 0 : q >= .9 * k && q <= 1.01 * k) && f.push({
                                    element: p,
                                    depth: l.depth + 1,
                                    height: p.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? ar(c, e.parentNode || d, e) : null
            }
            c && (b = Lm(a.I, b), d = Ln(a.j.document, a.F, null, null, {}, b)) && (Hn(d.xa, c, 2, 256), Ur(a, d, b))
        },
        Xr = (a, b) => {
            var c = Tr(a);
            c.Ub = [5];
            c = Sr(a, Cr(a.M()), c, 8);
            Wr(a, c.reverse(), b)
        },
        Wr = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.T), Rr(a, d, {
                        Rc: b
                    })) return !0;
            return !1
        };
    Nr[8] = function(a) {
        var b = a.M().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Nr[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.ob()) return !0;
        b = Tr(a);
        b.Tb = [2, 4, 5];
        b = Sr(a, Cr(a.M()), b, 8);
        const c = new Lr;
        if (Wr(a, b, c)) return !0;
        if (a.l.ic) switch (a.l.wc || 0) {
            case 1:
                Xr(a, c);
                break;
            default:
                Vr(a)
        }
        return !0
    };
    Nr[6] = ma(Or, [2], 6);
    Nr[7] = ma(Or, [1], 7);
    Nr[9] = function(a) {
        const b = Pr([0, 2], a, 9);
        if (!b || !b.Na) return a.C.push(17), Mr(a.M()), a.B;
        for (var c of b.Na) {
            var d = c;
            var e = a.l.Ib || null;
            null == e ? d = null : (e = Bo(d.P, new Yr, new Zr(e, a.M())), d = new ap(e, d.V(), d.T));
            if (d && !(Ao(d.P) > b.$a) && Rr(a, d, {
                    oc: b.$a,
                    nd: !0
                })) return a = d.P.J, c = c.P, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        Mr(a.M());
        return a.B
    };

    function $r(a) {
        var b;
        if (!(b = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var c = "__storage_test__" == d
            } catch (d) {
                c = !1
            }
            b = !c
        }
        return b ? null : (a = as(a)) ? bs(a) : null
    }

    function bs(a = []) {
        const b = Date.now();
        return Fa(a, c => 36E5 > b - c)
    }
    var as = a => {
        try {
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || Ia(c, d => !Number.isInteger(d)) ? (a.removeItem("__lsv__"), []) : c
        } catch (b) {
            return null
        }
    };
    var cs = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Zj(a);
            d |= Yj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = $r(c);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            S(Ji) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Yr {
        l(a, b, c, d) {
            return On(d.document, a, b)
        }
        A(a) {
            return V(a).clientHeight || 0
        }
    };
    var ds = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Yj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var es = (a, b) => "relative" === a ? b : ["https://", a, b].join("");
    var fs = (a, b) => {
        var c = 0;
        try {
            c |= a != a.top ? 512 : 0;
            var d = Math.min(a.screen.width || 0, a.screen.height || 0);
            c |= d ? 320 > d ? 8192 : 0 : 2048;
            var e;
            if (e = a.navigator) {
                var f = a.navigator.userAgent;
                e = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f)
            }
            c |= e ? 1048576 : 0
        } catch (g) {
            c |= 32
        }
        c |= 0;
        e = Math.max(T(ji), Xj);
        f = P;
        d = a.innerWidth;
        d = 0 < T(ji) && d > Xj;
        return a = c | Np(a, b, e, f, d ? T(ki) : 0, S(fi))
    };
    class gs {
        constructor() {
            this.promise = new Promise(a => {
                this.j = a
            })
        }
    };
    var hs = class {
        constructor() {
            const a = new gs;
            this.promise = a.promise;
            this.resolve = a.j
        }
    };

    function is(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new hs, c && c());
        return b[a]
    }

    function js(a, b, c) {
        return is(a, b, function() {
            df(b.document, c)
        }).promise
    };
    var ks = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        ls = (a, b, c) => {
            let d = 0;
            try {
                d |= Yj(a, 2500);
                if (S(Fi)) {
                    const g = V(a).clientHeight;
                    d |= g ? 320 > g ? -2147483648 : 0 : 1073741824
                }
                d |= Zj(a);
                var e;
                if (e = b) {
                    var f = $r(c);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };
    const ms = {
        [27]: 512,
        [26]: 128
    };
    var ns = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === fs(a, c);
                case 8:
                    return b = !("on" === b.google_adtest || dj(a.location, "google_ia_debug")), 0 == (ks(a) | ls(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || dj(a.location, "google_scr_debug")), !cs(a, b, d);
                case 30:
                    return 0 == cr(a);
                case 26:
                    return 0 == ds(a);
                case 27:
                    return 0 === qn(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        os = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return fs(a, c);
                case 8:
                    return b = !("on" === b.google_adtest || dj(a.location,
                        "google_ia_debug")), ks(a) | ls(a, b, d);
                case 9:
                    return cs(a, !("on" === b.google_adtest || dj(a.location, "google_scr_debug")), d);
                case 16:
                    return tn(b, a) ? 0 : 8388608;
                case 30:
                    return cr(a);
                case 26:
                    return ds(a);
                case 27:
                    return qn(a);
                default:
                    return 32
            }
        },
        ps = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Sa(d)) return !1;
            a = Tg(a);
            if (!a || !ns(a, b, d, c)) return !1;
            b = Uj(a);
            if (dk(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        qs = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config &&
                vl(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        rs = a => {
            if (!a.hash) return null;
            let b = null;
            Bg($i, c => {
                !b && dj(a, c) && (b = aj[c])
            });
            return b
        },
        ts = a => {
            const b = a.N,
                c = Uj(b).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Bg(bj, d => {
                !c.debugCardRequested && "number" === typeof d && fj(d, b.location) && (c.debugCardRequested = !0, ss(b, a.ga.qd, e => {
                    c.debugCard = e.createDebugCard(d, b, a.G)
                }))
            })
        },
        vs = (a, b, c) => {
            if (!b) return null;
            const d = Uj(b);
            let e = 0;
            Bg(Ta, f => {
                const g = ms[f];
                g && 0 === us(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        ws = (a, b, c) => {
            const d = [];
            Bg(Ta, e => {
                const f = us(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        xs = a => {
            const b = [],
                c = {};
            Bg(a, (d, e) => {
                if ((e = Sj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        ys = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        us = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Uj(b),
                g = dk(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Bg(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === l && (h = !0)
            });
            h && rs(b.location) !== c && (e |= 128);
            return e | os(b, a, c, d)
        },
        zs = (a, b) => {
            if (a) {
                var c = Uj(a),
                    d = {};
                Bg(b, (e, f) => {
                    (f = Sj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Bg(Ta, e => {
                    d[Tj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        As = (a, b, c) => {
            b = Q(b, c);
            return js(1, N(), ob(Td(a).toString())).then(b)
        },
        ss = (a, b, c) => {
            c = Q(212, c);
            js(3, a, ob(Td(b).toString())).then(c)
        };
    const Bs = a => {
        a.adsbygoogle || (a.adsbygoogle = [], df(a.document, mg(es("pagead2.googlesyndication.com", "/pagead/js/adsbygoogle.js"))))
    };
    var Cs = (a, b) => {
        K(a, "load", () => {
            Bs(a);
            a.adsbygoogle.push(b)
        })
    };
    class Zr {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.G || {};
            c.google_ad_client = a.Wa;
            c.google_ad_height = V(b).clientHeight || 0;
            c.google_ad_width = V(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Tm;
            z(b, 1, a.C);
            a.j && rd(b, 2, a.j);
            a.F && z(b, 3, !0);
            c.google_rasc = vd(b);
            a.A && (c.google_adtest = "on");
            return new Mm(["fsi_container"], c)
        }
    };

    function Ds(a, b, c) {
        const d = lo(c, 1, b + 1);
        return !Ia(a, e => io(e, d))
    }

    function Es(a, b, c, d, e) {
        e = e.T;
        const f = lo(e, 0, b),
            g = lo(e, 0, c),
            h = lo(e, 0, d);
        return !Ia(a, k => io(k, g) || io(k, f) && !io(k, h))
    }

    function Fs(a, b, c, d) {
        const e = Hr(a);
        if (Ds(e, b, d.T)) return !0;
        if (!Es(e, b, c.sc, c.Ea, d)) return !1;
        const f = new sr(lo(d.T, 0, 0), 1);
        a = Fa(a.B, g => qr(g, f, c.Ea));
        b = Ha(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.qc ? !1 : !0
    };
    class Gs {
        constructor() {
            this.j = new Em
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new en, this.j.set(a, c));
            c.add(b)
        }
    };
    var Hs = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Is(a, b) {
        const c = new Gs,
            d = new en;
        b.forEach(e => {
            if (D(e, Kl, 1)) {
                e = D(e, Kl, 1);
                if (D(e, sj, 1) && D(e, sj, 1).V() && D(e, sj, 2) && D(e, sj, 2).V()) {
                    const g = Js(a, D(e, sj, 1).V()),
                        h = Js(a, D(e, sj, 2).V());
                    if (g && h)
                        for (var f of Hs({
                                anchor: g,
                                position: D(e, sj, 1).l()
                            }, {
                                anchor: h,
                                position: D(e, sj, 2).l()
                            })) c.set(ea(f.anchor), f.position)
                }
                D(e, sj, 3) && D(e, sj, 3).V() && (f = Js(a, D(e, sj, 3).V())) && c.set(ea(f), D(e, sj, 3).l())
            } else D(e, Ll, 2) ? Ks(a, D(e, Ll, 2), c) : D(e, Ml, 3) && Ls(a, D(e, Ml, 3), d)
        });
        return new Ms(c, d)
    }
    class Ms {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Ks = (a, b, c) => {
            D(b, oj, 1) && (a = Ns(a, D(b, oj, 1))) && a.forEach(d => {
                d = ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Ls = (a, b, c) => {
            D(b, oj, 1) && (a = Ns(a, D(b, oj, 1))) && a.forEach(d => {
                c.add(ea(d))
            })
        },
        Js = (a, b) => (a = Ns(a, b)) && 0 < a.length ? a[0] : null,
        Ns = (a, b) => (b = $n(b)) ? Yn(b, a) : null;

    function Os(a) {
        return function(b) {
            return bp(b, a)
        }
    }

    function Ps(a) {
        const b = V(a).clientHeight;
        return b ? ma(Qs, b + fk(a)) : ua
    }

    function Rs(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return ua;
        const d = Hr(c || Cr(b));
        return e => Ds(d, a, e.T)
    }

    function Ss(a, b, c, d) {
        if (0 > a || 0 > b.sc || 0 > b.qc || 0 > b.Ea) throw Error("ama::ead:nd");
        return Infinity === a ? ua : e => Fs(d || Cr(c, b.Ea), a, b, e)
    }

    function Ts(a) {
        if (!a.length) return ua;
        const b = new pn(a);
        return c => b.contains(c.za)
    }

    function Us(a) {
        return function(b) {
            for (let c of b.Ob)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Vs(a) {
        return a.length ? function(b) {
            const c = b.Ob;
            return a.some(d => -1 < c.indexOf(d))
        } : va
    }

    function Ws(a, b) {
        if (0 >= a) return va;
        const c = V(b).scrollHeight - a;
        return function(d) {
            return d.T.j <= c
        }
    }

    function Xs(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.Oa, 2) || 0]
        }
    }

    function Ys(a) {
        return a.length ? b => a.includes(y(b.Oa, 2) || 0) : va
    }

    function Zs(a) {
        return a.length ? b => a.includes(y(b.Oa, 1) || 0) : va
    }

    function $s(a, b) {
        const c = Is(a, b);
        return function(d) {
            var e = d.V();
            d = go[d.P.l()];
            var f = ea(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(ea(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(ea(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }
    const Qs = (a, b) => b.T.j >= a,
        at = (a, b, c) => {
            c = c.T.l;
            return a <= c && c <= b
        };
    var bt = Hm(new zm(0, {})),
        ct = Hm(new zm(1, {})),
        dt = a => a === bt || a === ct;

    function et(a, b, c) {
        Am(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class ft {
        constructor() {
            this.j = new Em
        }
    };

    function gt(a, b) {
        a.F.wpc = b;
        return a
    }

    function ht(a, b) {
        for (var c = 0; c < b.length; c++) a.ea(b[c]);
        return a
    }

    function it(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class jt {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.H = 0
        }
        ea(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = Wa(this.F);
            0 < this.H && (b.t = this.H);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && sh(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function kt(a, b) {
        b && (a.l.apv = y(b, 4), md(b, 23) && (a.l.sat = "" + y(D(b, jm, 23), 1)));
        return a
    }

    function lt(a, b) {
        a.l.afm = b.join(",");
        return a
    }
    class mt extends jt {
        constructor(a) {
            super(a);
            this.l = {}
        }
        B(a) {
            try {
                this.l.su = a.location.hostname
            } catch (b) {
                this.l.su = "_ex"
            }
            a = super.B(a);
            Ya(a, this.l);
            return a
        }
    }

    function nt(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function ot(a, b) {
        a.j.op = pt(b)
    }

    function qt(a, b, c) {
        30 >= c.length ? a.j[b] = rt(c) : (a.j[b] = rt(c.slice(0, 30)), a.j[b + "_c"] = c.length.toString())
    }

    function st(a, b, c) {
        qt(a, "fap", b);
        a.j.fad = pt(c)
    }

    function tt(a, b, c) {
        qt(a, "fmp", b);
        a.j.fmd = pt(c)
    }

    function ut(a, b, c) {
        qt(a, "vap", b);
        a.j.vad = pt(c)
    }

    function vt(a, b, c) {
        qt(a, "vmp", b);
        a.j.vmd = pt(c)
    }

    function wt(a, b, c) {
        qt(a, "pap", b);
        a.j.pad = pt(c)
    }

    function xt(a, b, c) {
        qt(a, "pmp", b);
        a.j.pmd = pt(c)
    }

    function yt(a, b) {
        qt(a, "psq", b)
    }
    var zt = class extends mt {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.j);
            return a
        }
    };

    function rt(a) {
        let b, c;
        return a.map(d => null != (c = null == (b = d) ? void 0 : b.toString()) ? c : "null").join("~")
    }

    function pt(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    class At {
        constructor(a) {
            this.j = this.A = this.l = !1;
            this.rb = null;
            this.Ba = a
        }
    }

    function Bt(a, b, c) {
        const d = b.P;
        if (!Am(a.j, d)) {
            let e;
            a.j.set(d, new At(null != (e = mn(Zo(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function Ct(a) {
        Bt(Dt, a, b => {
            b.l = !0
        })
    }

    function Et(a) {
        Bt(Dt, a, b => {
            b.A = !0
        })
    }

    function Ft(a) {
        var b = Dt;
        Bt(b, a, c => {
            c.j = !0
        });
        b.H.push(a.P)
    }

    function Gt(a, b) {
        Bt(Dt, a, c => {
            c.rb = b
        })
    }

    function Ht(a, b, c) {
        const d = [];
        let e = 0;
        for (const h of c.filter(b)) {
            let k;
            if (dt(null != (k = h.rb) ? k : "")) ++e;
            else {
                let l;
                b = a.l.get(null != (l = h.rb) ? l : "", null);
                d.push(b)
            }
        }
        let f, g;
        return {
            list: d.sort((h, k) => (null != (f = h) ? f : -1) - (null != (g = k) ? g : -1)),
            Aa: e
        }
    }

    function It(a, b) {
        ot(b, a.l.Ka());
        var c = Dm(a.j).filter(h => 0 === (h.Ba.startsWith(bt) ? 0 : 1)),
            d = Dm(a.j).filter(h => 1 === (h.Ba.startsWith(bt) ? 0 : 1)),
            e = Ht(a, h => h.l, c);
        st(b, e.list, e.Aa);
        e = Ht(a, h => h.l, d);
        tt(b, e.list, e.Aa);
        e = Ht(a, h => h.A, c);
        ut(b, e.list, e.Aa);
        e = Ht(a, h => h.A, d);
        vt(b, e.list, e.Aa);
        c = Ht(a, h => h.j, c);
        wt(b, c.list, c.Aa);
        d = Ht(a, h => h.j, d);
        xt(b, d.list, d.Aa);
        let f, g;
        yt(b, a.H.map(h => null == (f = a.j.get(h)) ? void 0 : f.rb).map(h => null != (g = a.l.get(h)) ? g : null))
    }
    var Dt = new class {
        constructor() {
            this.C = null;
            this.F = this.D = !1;
            this.A = null;
            this.J = this.I = !1;
            this.B = null;
            this.l = new Em;
            this.j = new Em;
            this.H = []
        }
    };
    class Jt {
        constructor(a = 0) {
            this.j = a
        }
    };
    class Kt {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function Lt(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Mt(a, b) {
        const c = a.B.filter(d => Cm(d.eb).every(e => d.eb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.eb.Ka() > e.eb.Ka() ? d : e, c[0])
    }

    function Nt(a, b) {
        b = Zo(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Am(a.A, b)) return a.A.get(b);
        var c = Fm(b);
        c = Mt(a, c);
        a.A.set(b, c);
        return c
    }

    function Ot(a, b) {
        let c;
        return (null == (c = Nt(a, b)) ? void 0 : c.Sd) || Number.MAX_VALUE
    }
    var Pt = class {
        constructor(a) {
            this.j = a;
            this.A = new Em;
            let b;
            this.B = ((null == (b = D(a, Wl, 2)) ? void 0 : H(b, Xl, 1)) || []).map(c => {
                const d = Fm(J(c, 1)),
                    e = od(c, 2, 0);
                return {
                    eb: d,
                    Sd: e,
                    Ba: J(c, 1)
                }
            });
            this.l = []
        }
    };

    function Qr(a) {
        return !!a.j && 0 < [...y(a.j.j, 1)].length
    }

    function Qt(a, b) {
        var c = b.T.j,
            d = Math,
            e = d.min;
        const f = b.V(),
            g = b.P.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? Lt(f.parentElement) : Lt(f));
        d = a.A;
        0 > d.j && (d.j = V(d.l).scrollHeight || 0);
        d = d.j - b.T.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.V();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function Rt(a, b) {
        if (0 == b.j.length) return b;
        const c = T(li) || 0;
        return 0 == c && Qr(a) || 0 < c && Qr(a) && c < b.filter(d => {
            let e;
            d = (null == (e = Nt(a.j, d)) ? void 0 : e.Ba) || "";
            return "" != d && !(d === bt || d === ct)
        }).j.length / b.j.length ? b.sort((d, e) => Ot(a.j, d) - Ot(a.j, e)) : b.sort((d, e) => Qt(a, d) - Qt(a, e))
    }

    function St(a, b) {
        return b.sort((c, d) => {
            const e = c.P.F,
                f = d.P.F;
            var g;
            null == e || null == f ? g = null == e && null == f ? Qt(a, c) - Qt(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Tt {
        constructor(a, b = 0, c = null) {
            this.A = new Kt(a);
            this.l = new Jt(b);
            this.j = c && new Pt(c)
        }
    };
    class Ut {
        constructor(a, b, c, d) {
            this.A = new xm(a);
            this.j = new Tt(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
            this.l = b;
            this.B = new ft
        }
        find(a, b) {
            b = void 0 === b ? 0 : b;
            const c = a.nc ? a.nc : [0],
                d = "number" === typeof a.Pb || null === a.Pb ? a.Pb : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.ra ? a.ra : 0,
                h = new en(a.de || []);
            let k = this.A.filter((m, n) => !h.contains(n));
            k = wm(wm(wm(wm(wm(wm(wm(k, Ts(c), Vt(1, b)), Us(a.Ia || []), Vt(2, b)), Xs(a.Hb || []), Vt(3, b)), Ys(a.Ih || []), Vt(4,
                b)), Zs(a.Ub || []), Vt(5, b)), Vs(a.Tb || []), Vt(6, b)), xa(wo), Vt(7, b));
            k = k.apply(Os(this.l));
            Qr(this.j) && vm(k, m => {
                Ct(m);
                var n;
                null != (n = this.j.j) && (n = Nt(n, m), null != (null == n ? void 0 : n.Ba) && Gt(m, n.Ba))
            });
            let l = k;
            null !== d && (l = a.Za && a.ec ? wm(l, Ss(d, a.ec, this.l, a.Ya), Wt(16, b)) : wm(l, Rs(d, this.l, a.Ya), Wt(9, b)));
            l = wm(l, ma(at, e, f), Wt(10, b));
            a.Xa && (l = wm(l, $s(this.l.document, a.Xa), Wt(11, b)));
            l = wm(wm(l, Ps(this.l), Wt(12, b)), Ws(g, this.l), Wt(13, b));
            Qr(this.j) && vm(l, m => Et(m));
            l = a.Qa ? St(this.j, l) : Rt(this.j, l);
            a.Pa && (l = ym(l,
                Bc(this.l.location.href + this.l.localStorage.google_experiment_mod)));
            1 === c.length && et(this.B, c[0], {
                dd: k.j.length,
                fe: l.j.length
            });
            return l.j.slice(0)
        }
    }
    const Vt = (a, b) => c => yo(c, b, a),
        Wt = (a, b) => c => yo(c.P, b, a);

    function Xt(a, b) {
        if (!a) return !1;
        a = ef(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Yt(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Zt(a) {
        return !!a.nextSibling || !!a.parentNode && Zt(a.parentNode)
    };

    function $t(a) {
        const b = ak(a, !0),
            c = V(a).scrollWidth,
            d = V(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = fk(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let q = 0,
            v = 0,
            u = Infinity,
            B = Infinity,
            F = null;
        var G = yr({
            ya: !1
        }, a);
        for (var I of G) {
            G = I.getBoundingClientRect();
            const da = b - (G.bottom + f);
            var C = void 0,
                E = void 0;
            if (I.className && -1 != I.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                C = I.getAttribute("google_element_uid");
                E = a.google_sv_map;
                if (!C ||
                    !E || !E[C]) continue;
                C = (E = Ug(E[C])) ? E.height : 0;
                E = E ? E.width : 0
            } else if (C = G.bottom - G.top, E = G.right - G.left, 1 >= C || 1 >= E) continue;
            g.push(C);
            k.push(E);
            l.push(C * E);
            I.className && -1 != I.className.indexOf("google-auto-placed") ? (v += 1, I.className && -1 != I.className.indexOf("pedestal_container") && (F = C)) : (u = Math.min(u, da), n.push(G), q += 1, h.push(C), m.push(C * E));
            B = Math.min(B, da);
            p.push(G)
        }
        u = Infinity === u ? null : u;
        B = Infinity === B ? null : B;
        f = au(n);
        p = au(p);
        h = bu(b, h);
        n = bu(b, g);
        m = bu(b * c, m);
        I = bu(b * c, l);
        return new cu(a, {
            rd: e,
            Qb: b,
            Nd: c,
            Md: d,
            Fd: q,
            cd: v,
            gd: du(g),
            hd: du(k),
            ed: du(l),
            Kd: f,
            Jd: p,
            Id: u,
            Hd: B,
            Fb: h,
            Eb: n,
            Yc: m,
            Xc: I,
            Od: F
        })
    }

    function eu(a, b, c, d) {
        const e = Ze() && !(900 <= V(a.l).clientWidth);
        d = Fa(d, f => Ka(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.rd,
            pg_h: fu(a.j.Qb),
            pg_w: fu(a.j.Nd),
            pg_hs: fu(a.j.Md),
            c: fu(a.j.Fd),
            aa_c: fu(a.j.cd),
            av_h: fu(a.j.gd),
            av_w: fu(a.j.hd),
            av_a: fu(a.j.ed),
            s: fu(a.j.Kd),
            all_s: fu(a.j.Jd),
            b: fu(a.j.Id),
            all_b: fu(a.j.Hd),
            d: fu(a.j.Fb),
            all_d: fu(a.j.Eb),
            ard: fu(a.j.Yc),
            all_ard: fu(a.j.Xc),
            pd_h: fu(a.j.Od),
            dt: e ? "m" : "d"
        }
    }
    class cu {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function du(a) {
        return Ee.apply(null, Fa(a, b => 0 < b)) || null
    }

    function bu(a, b) {
        return 0 >= a ? null : De.apply(null, b) / a
    }

    function au(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function fu(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function gu(a, b) {
        b = (V(b).clientHeight || 0) - fk(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Gr(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function hu(a) {
        const b = {};
        var c = Ar({
            ya: !1,
            jb: !1,
            kb: !1,
            lb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Gr);
        b.Tc = c.length;
        c = Br({
            kb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Gr);
        b.td = c.length;
        c = Br({
            lb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Gr);
        b.Ld = c.length;
        c = Br({
            jb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Gr);
        b.Wc = c.length;
        c = (V(a).clientHeight || 0) - fk(a);
        c = Ar({
            ya: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Gr).filter(la(iu, null, c));
        b.Uc = c.length;
        a = $t(a);
        c = null != a.j.Fb ? a.j.Fb :
            null;
        null != c && (b.Gd = c);
        a = null != a.j.Eb ? a.j.Eb : null;
        null != a && (b.Vc = a);
        return b
    }

    function Rr(a, b, {
        oc: c,
        Rc: d,
        nd: e
    } = {}) {
        const f = b.P;
        if (f.B) return !1;
        var g = b.V(),
            h = f.l(),
            k = a.B;
        a: {
            var l = a.j;
            switch (h) {
                case 0:
                    l = Xt(Yt(g), l);
                    break a;
                case 3:
                    l = Xt(g, l);
                    break a;
                case 2:
                    var m = g.lastChild;
                    l = Xt(m ? 1 == m.nodeType ? m : Yt(m) : null, l);
                    break a
            }
            l = !1
        }
        if (k = !l && !(!k && 2 == h && !Zt(g))) g = 1 == h || 2 == h ? g : g.parentNode, k = !(g && !An(g) && 0 >= g.offsetWidth);
        if (!k) return !1;
        c = null == c ? null : new Mm(null, {
            google_max_responsive_height: c
        });
        g = Nm(y(f.Oa, 2) || 0);
        h = f.F;
        h = null == h ? null : new Mm(null, {
            google_ml_rank: h
        });
        k = ju(a, f);
        d = Lm(a.I, f.L ?
            f.L.j(b.T) : null, c, d || null, g, h, k);
        c = b.fill(a.F, d);
        if (e) {
            if (c) {
                e = c.aa;
                g = e.style.width;
                e.style.width = "100%";
                h = e.offsetWidth;
                e.style.width = g;
                e = h;
                g = a.j;
                h = c.aa;
                k = d && d.La() || {};
                if (g.top != g) l = Tg(g) ? 3 : 16;
                else if (488 > V(g).clientWidth)
                    if (g.innerHeight >= g.innerWidth)
                        if (l = V(g).clientWidth, !l || .3 < (l - e) / l) l = 6;
                        else {
                            if (l = "true" != k.google_full_width_responsive) c: {
                                m = h.parentElement;
                                for (l = V(g).clientWidth; m; m = m.parentElement) {
                                    const n = ef(m, g);
                                    if (!n) continue;
                                    const p = rf(n.width);
                                    if (p && !(p >= l) && "visible" != n.overflow) {
                                        l = !0;
                                        break c
                                    }
                                }
                                l = !1
                            }
                            l = l ? 7 : !0
                        }
                else l = 5;
                else l = 4;
                if (!0 !== l) e = l;
                else {
                    if (!(k = "true" == k.google_full_width_responsive)) b: {
                        do
                            if ((k = ef(h, g)) && "fixed" == k.position) {
                                k = !1;
                                break b
                            }
                        while (h = h.parentElement);
                        k = !0
                    }
                    k ? S(gi) || g.location && "#bffwroe2etoq" == g.location.hash ? e = !0 : (g = V(g).clientWidth, e = g - e, e = g && 0 <= e ? !0 : g ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    g = c.aa;
                    if (h = wn(e, g)) g.style.border = g.style.borderStyle = g.style.outline = g.style.outlineStyle = g.style.transition = "none", g.style.borderSpacing = g.style.padding = "0", un(g, h,
                        "0px"), g.style.width = V(e).clientWidth + "px", xn(e, g, h), g.style.zIndex = 30;
                    e = !0
                } else En(c.xa), e = !1
            } else e = !1;
            e = !e
        }
        if (e || !Ur(a, c, d)) return !1;
        Vk(9, [f.F, f.za]);
        Qr(a.A.j) && Ft(b);
        return !0
    }

    function Sr(a, b, c, d) {
        const e = c.ua ? c.ua : a.D;
        var f = {
            tb: e.A,
            ra: e.C
        };
        for (let g of e.D) g.adCount <= b.j.length && (f = g.Vb);
        return a.A.find({
            de: ku(a),
            nc: c.types,
            Pb: f.tb,
            Ya: b,
            Ia: a.R,
            ra: f.ra || void 0,
            Pa: !!a.l.Pa,
            Qa: !!a.l.Qa,
            Tb: c.Tb,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            Hb: a.L,
            Xa: a.K,
            Ub: c.Ub,
            Za: !!a.l.Za,
            ec: e.j
        }, d)
    }

    function lu(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }

    function ku(a) {
        if (S(Wh)) return [];
        const b = lu(a);
        return null == b || null == b.placed ? [] : b.placed.map(c => c.index).filter(c => 0 <= c && c < a.A.A.j.length)
    }

    function ju(a, b) {
        return mn(on(Xo(b).map(Om), () => {
            a.C.push(18)
        }))
    }

    function Ur(a, b, c) {
        if (!b) return !1;
        try {
            Qn(a.j, b.aa, c)
        } catch (d) {
            return En(b.xa), a.C.push(6), !1
        }
        return !0
    }
    class mu {
        constructor(a, b, c, d, e = {}) {
            this.A = a;
            this.F = b;
            this.j = c;
            this.D = d.ua;
            this.R = d.Ia || [];
            this.I = d.ud || null;
            this.L = d.Hb || [];
            this.K = d.Xa || [];
            this.l = e;
            this.B = !1;
            this.J = [];
            this.C = [];
            this.H = void 0
        }
        M() {
            return this.j
        }
        ea(a) {
            this.J.push(a)
        }
        Nb() {
            return !!this.l.Dc
        }
        ob() {
            return !br(this.j)
        }
    }
    const iu = (a, b) => b.top <= a;

    function nu(a, b, c, d, e) {
        this.va = a;
        this.errors = b;
        this.Ra = c;
        this.j = d;
        this.l = e
    };
    var ou = (a, b, {
        ob: c = !1,
        Nb: d = !1,
        ae: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };
    class pu {
        constructor(a, b) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = La(this.l, 1);
            this.j = b
        }
    };

    function qu(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var su = class {
        constructor() {
            this.l = new ru(this);
            this.j = 0
        }
    };

    function tu(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var ru = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            tu(this)
        }
    };
    const uu = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class vu {
        j() {
            return new Mm([], {
                ["google_reactive_ad_format"]: 40,
                ["google_tag_origin"]: "qs"
            })
        }
    };
    class wu {
        j() {
            return new Mm(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function xu(a) {
        return Bn(a.j.document).map(b => {
            const c = new oo(b, 3);
            b = new qo(Sn(a.j, b));
            return new uo(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class yu {
        constructor(a) {
            var b = new wu;
            this.j = a;
            this.l = b || null
        }
    };
    const zu = {
        Yb: "10px",
        Db: "10px"
    };

    function Au(a) {
        return zn(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new uo(new oo(b, 1), new ho(zu), a.l, !1, 0, [], null, a.j, null))
    }
    class Bu {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function Cu(a, b) {
        a = a.getBoundingClientRect();
        return new Du(a.top + fk(b), a.bottom - a.top)
    }

    function Eu(a) {
        return new Du(Math.round(a.ta), Math.round(a.j))
    }
    class Du {
        constructor(a, b) {
            this.ta = a;
            this.j = b
        }
        getHeight() {
            return this.j
        }
    };

    function Fu(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function Gu(a) {
        return lu(a.A) && lu(a.A).placed || []
    }

    function Hu(a) {
        return Gu(a).map(b => Eu(Cu(b.element, a.j)))
    }

    function Iu(a) {
        return Gu(a).map(b => b.index)
    }

    function Ju(a, b) {
        const c = b.P;
        return !a.D && c.A && md(c.A, 8) && 1 == y(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Eu(Cu(d, a.j))) : [Eu(new Du(b.T.j, 0))]
    }

    function Ku(a) {
        a.sort((e, f) => e.ta - f.ta);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.ta;
            d = d.ta + d.j;
            f <= c ? c = Math.max(c, d) : (b.push(new Du(c, f - c)), c = d)
        }
        return b
    }

    function Lu(a, b) {
        const c = [];
        let d = 0;
        for (const e of Cm(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(e + "G" + f.map(g => g.ta + "~" + g.getHeight()).join("G"));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }
    var Mu = class {
        constructor(a, b, c) {
            this.H = -1 == c.Jb;
            this.B = c.Jb;
            this.I = -1 == c.gb;
            this.C = c.gb;
            this.F = -1 == c.sb;
            this.l = c.sb;
            this.D = c.xd;
            this.A = b;
            this.j = a
        }
    };
    var Nu = {
            la: "ama_success",
            ba: .1,
            qa: !0
        },
        Ou = {
            la: "ama_failure",
            ba: .1,
            qa: !0
        },
        Pu = {
            la: "ama_inf_scr",
            ba: .1,
            qa: !0
        },
        Qu = {
            la: "ama_inf_scr",
            ba: .1,
            qa: !0
        },
        Ru = {
            la: "ama_coverage",
            ba: .1,
            qa: !0
        },
        Su = {
            la: "ama_inf_scr",
            ba: 1,
            qa: !0
        },
        Tu = {
            la: "ama_opt",
            ba: .1,
            qa: !0
        };

    function Uu(a, b, c) {
        c = c.B(a.j);
        b.qa && (c.pvc = Lf(a.j));
        0 < b.ba && (c.r = b.ba, O(P, b.la, c, !0, b.ba, void 0))
    }
    var Vu = class {
        constructor(a) {
            this.j = a
        }
    };

    function Wu(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    Xu(a);
                    break;
                case 1:
                    b = new yp(a.l, a.j, a.C);
                    var c = pp(b.j, b.l);
                    c = bp(c, b.j).sort(zp);
                    c = 0 == c.length ? [] : [c[Math.floor(c.length / 2)]];
                    var d = b.j;
                    const e = [];
                    for (let f = 0; f < c.length; f++) {
                        const g = c[f],
                            h = "autors-container-" + f,
                            k = d.document.createElement("div");
                        k.setAttribute("id", h);
                        (new xp(d, g, new op(k))).O();
                        e.push(h)
                    }(new rp(b.j, e, b.A, y(D(b.l, Pl, 22), 1))).O();
                    break;
                case 2:
                    (b = D(a.j, zj, 18)) && Eq(new Fq(a.l, a.$ || new Xq(a.l, a.C), b, new kq(a.l), H(a.j, xj, 1)));
                    break;
                case 3:
                    Yu(a)
            }
        })
    }

    function Xu(a) {
        Zu(a) && $u(a, "p", av(a));
        if (cm(a.j) && 1 === y(cm(a.j), 1)) {
            var b = D(cm(a.j), om, 6);
            b && 2 === y(b, 1) && Rn(a.l)
        }
        b = a.A.Qd;
        a: {
            var c = a.l;
            var d = hr(c);c = V(c).clientHeight || er[d];
            var e = kr(H(b, Al, 2), d);
            if (e && (e = nr(e, c))) {
                d = e;
                break a
            }
            d = ir(d, c)
        }
        if (a.A.U && md(a.A.U, 10) && (c = nd(D(a.A.U, nm, 10), 1), null !== c && void 0 !== c)) {
            var f = a.l;
            d = c;
            c = hr(f);
            e = V(f).clientHeight || er[c];
            var g = void 0;
            b && (g = (g = (g = kr(H(b, Al, 2), c)) ? D(g, Cl, 7) : void 0) ? or(g, e) : void 0);
            var h = hr(f);
            f = V(f).clientHeight || er[h];
            const U = mr(fr[h].Wb, f);
            f = null ===
                U ? ir(h, f) : new jr(U, U, pr(U, U, 8), 8, .3, g);
            g = mr(fr[c].Gc, e);
            h = mr(fr[c].Wb, e);
            e = mr(fr[c].Fc, e);
            c = f.A;
            g && e && h && void 0 !== d && (c = .5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
            d = c;
            d = new jr(c, d, pr(c, d, f.l), f.l, f.B, f.j)
        }
        if (md(a.j, 26)) {
            c = D(a.j, qm, 26);
            e = a.l;
            g = A(c, 2);
            c = D(c, Al, 1);
            f = V(e).clientHeight || er[hr(e)];
            var k;
            e = null != (k = mr(null == c ? void 0 : y(c, 2), f)) ? k : d.A;
            var l;
            k = null != (l = mr(null == c ? void 0 : y(c, 5), f)) ? l : d.C;
            var m;
            l = g ? [] : null != (m = lr(null == c ? void 0 : H(c, Bl, 3), f)) ? m : d.D;
            var n;
            m = null != (n = null == c ? void 0 : y(c, 4)) ? n : d.l;
            var p;
            n = null != (p = null == c ? void 0 : nd(c, 6)) ? p : d.B;
            var q;
            p = null != (q = (null == c ? 0 : md(c, 7)) ? or(D(c, Cl, 7), f) : null) ? q : d.j;
            d = new jr(e, k, l, m, n, p)
        }
        q = a.A.U ? y(a.A.U, 6) : [];
        p = a.A.U ? H(a.A.U, Jl, 5) : [];
        var v;
        m = a.j;
        k = H(m, xj, 1);
        l = a.A.U && rm(a.A.U, 1) ? "text_image" : "text";
        c = new vu;
        n = vo(k, a.l, {
            kd: c,
            Bd: new ro(l)
        });
        k.length != n.length && a.K.push(13);
        n = n.concat(Au(new Bu(a.l, c)));
        k = 0;
        c = S($h);
        e = !1;
        cm(m) && 1 === y(cm(m), 1) && (f = D(cm(m), om, 6)) && (k = y(f, 2) || 0, 1 === y(f, 1) && (e = !0));
        var u, B;
        f = (null == (v = D(m, Ul, 24)) ? void 0 : null == (u = D(v, Zl, 3)) ? void 0 :
            null == (B = D(u, am, 3)) ? void 0 : D(B, bm, 2)) || !1;
        if (c || e || f) v = xu(new yu(a.l)), n = n.concat(v), Dt.I = !0, Dt.B = v.length;
        n = n.concat(Yq(m, l, a.l));
        v = D(m, Ul, 24);
        v = new Ut(n, a.l, k, v);
        u = a.C;
        B = a.l;
        q = {
            ua: d,
            ud: a.Z,
            Ia: a.A.Ia,
            Hb: q,
            Xa: p
        };
        n = S(ai);
        em(a.j) ? (p = em(a.j), n = n || pd(p, 14, !1), m = pd(p, 2, !1), l = pd(p, 3, !1), k = pd(p, 4, !1), d = pd(p, 5, !1), c = pd(p, 6, !1), e = nd(p, 8), p = {
            Pa: n,
            Qa: m,
            hc: l,
            Hc: k,
            ic: d,
            Dc: c,
            Pd: null == e ? 0 : e,
            wc: y(p, 10),
            Za: bv(a),
            Ib: a.L
        }) : p = {
            Pa: n,
            Qa: !1,
            hc: !1,
            Hc: !1,
            ic: !1,
            Dc: !1,
            Pd: 0,
            wc: 0,
            Za: bv(a),
            Ib: a.L
        };
        a.B = new mu(v, u, B, q, p);
        v = a.A.U ?
            y(a.A.U, 2) : [];
        u = y(b, 1);
        b = a.B;
        v = ou(u, v, {
            ob: b.ob(),
            Nb: b.Nb(),
            ae: !!b.l.Ib
        });
        b = new pu(v, b);
        a.H = b;
        v = a.H;
        b = new su;
        for (v.j.B = !0; 0 < v.l.length;) u = v, (B = Nr[v.l[0]]) ? u = B(u.j) : (u.j.ea(12), u = !0), u || v.j.ea(5), v.l.shift();
        try {
            var F = v.j.A.A.filter(wo).j.length,
                G = v.j.J.slice(0),
                I = v.j,
                C = [...I.C],
                E = I.A.j;
            var da = Qr(E) ? [...E.j.l] : [];
            var hb = [...C, ...da];
            var ya = new uu(new nu(F, G, hb, v.j.A.A.j.length, v.j.A.B.j));
            qu(b);
            b.j = 1;
            b.B = ya;
            tu(b.l)
        } catch (U) {
            F = U, qu(b), b.j = 2, b.A = F, tu(b.l)
        }
        b.l.then(la(a.ka, a), la(a.R, a))
    }

    function Yu(a) {
        nn(ip(a.l, a.j, a.ja), b => {
            a: {
                var c = b.j;
                var d = D(b.B, Ol, 2);
                var e = To(b.A, c);e = e.filter(cp).filter(dp(e));e.sort(ep);
                if (e = e[0] || null) switch (od(d, 1, 0)) {
                    case 1:
                        d = new xj;
                        e = D(e.j, oj, 1);
                        d = rd(d, 1, e);
                        d = z(d, 2, 2);
                        d = z(d, 8, 1);
                        d = vo([d], c);
                        c = bp(d, c)[0] || null;
                        break a;
                    default:
                        throw Error(`Unknown player position: ${od(d,1,0)}`);
                } else c = null
            }
            c && (new hp(b.j, c, b.l)).O()
        })
    }

    function bv(a) {
        return a.A.U && md(a.A.U, 10) ? .5 <= (nd(D(a.A.U, nm, 10), 1) || 0) : !0
    }

    function cv(a, b) {
        for (var c = ht(ht(new mt(b.va), b.errors), a.K), d = b.Ra, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.l.ppos = b.yc;
        c.l.eatf = b.Cb;
        c.l.reatf = b.ib;
        c.l.a = a.H.B.slice(0).join(",");
        a = gt(lt(kt(c, a.j), a.F), a.C);
        if (c = b.Bb) a.l.as_count = c.Tc, a.l.d_count = c.td, a.l.ng_count = c.Ld, a.l.am_count = c.Wc, a.l.atf_count = c.Uc, a.l.mdns = nt(c.Gd), a.l.alldns = nt(c.Vc);
        c = b.xb;
        null != c && (a.l.allp = c);
        if (c = b.vd) {
            d = [];
            for (var h of Cm(c)) 0 < c.get(h).length && (e = c.get(h)[0], d.push("(" + [h, e.dd, e.fe].join() + ")"));
            a.l.fd = d.join(",")
        }
        h = b.Qb;
        null != h && (a.l.pgh = h);
        void 0 !== b.exception && it(a, b.exception).ea(1);
        return a
    }

    function dv(a, b) {
        var c = cv(a, b);
        Uu(a.D, 0 < b.errors.length || 0 < a.K.length || void 0 !== b.exception ? 0 < a.J ? Qu : Ou : 0 < a.J ? Pu : Nu, c);
        if (D(a.j, Ul, 24)) {
            b = a.B.A.j.j;
            Dt.C = [...y(b.j, 1)];
            var d;
            let k;
            Dt.F = !!(null == (d = D(b.j, Zl, 3)) ? 0 : null == (k = D(d, am, 3)) ? 0 : D(k, bm, 2));
            d = new Em;
            var e;
            let l;
            for (const n of null != (l = null == (e = D(b.j, Wl, 2)) ? void 0 : H(e, Xl, 1)) ? l : []) d.set(J(n, 1), od(n, 2, 0));
            Dt.l = d;
            e = lu(a.B);
            var f;
            Dt.A = !!(null == e ? 0 : null == (f = e.optimization) ? 0 : f.ablationFromStorage);
            var g;
            if (null == e ? 0 : null == (g = e.optimization) ? 0 : g.ablatingThisPageview) Dt.D = !0;
            let m;
            Dt.J = !!(null == e ? 0 : null == (m = e.optimization) ? 0 : m.availableAbg);
            var h;
            f = Dt;
            c = new zt(c);
            f.C ? (g = null != (h = f.C) ? h : [], c.j.sl = g.join("~"), c.j.ab = pt(f.D), c.j.rr = pt(f.I), c.j.oab = pt(f.F), null != f.A && (c.j.sab = pt(f.A)), c.j.ls = pt(f.J), ot(c, f.l.Ka()), null != f.B && (c.j.rp = pt(f.B)), It(f, c)) : (h = "irr".replace(/~/g, ""), c.j.e = c.j.e ? c.j.e + ("~" + h) : h);
            h = c;
            Uu(a.D, Tu, h)
        }
    }

    function ev(a) {
        return cm(a.j) && 1 === y(cm(a.j), 1) ? !(D(cm(a.j), om, 6) && 1 <= (y(D(cm(a.j), om, 6), 3) || 0)) : !1
    }

    function fv(a) {
        if (ev(a)) {
            a = a.B;
            var b = Br({
                kb: !0,
                lb: !0
            }, a.j);
            a = 0 < gu(b, a.j)
        } else a = a.B.j, b = Ar({
            ya: !1,
            jb: !1
        }, a), a = 0 < gu(b, a);
        return a
    }

    function gv(a) {
        if (Zu(a)) {
            var b = av(a);
            a.I.O(null == b ? void 0 : b, () => {
                $u(a, "s", b)
            });
            bn(a.I, c => {
                $u(a, "d", av(a), c);
                a.I.fb();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = em(d)) ? 0 : pd(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = em(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.F) ? 0 : h.includes(0)) a.J++, Xu(a), $u(a, "r", av(a), c)
                    } catch (h) {
                        $u(a, "f", av(a), c), Uu(a.D, Qu, it(lt(kt(gt(new mt(0), a.C), a.j), a.F).ea(1), h))
                    }
                }
            })
        }
    }

    function hv(a, b, c) {
        {
            var d = lu(a.B),
                e = b.j;
            const f = e.j;
            let g = e.va,
                h = e.errors.slice(),
                k = e.Ra.slice(),
                l = b.exception;
            d ? (d.numAutoAdsPlaced ? g += d.numAutoAdsPlaced : a.H.A && k.push(13), void 0 !== d.exception && (l = d.exception), c = {
                va: g,
                xb: f,
                errors: e.errors.slice(),
                Ra: k,
                exception: l,
                ib: c,
                Cb: !!d.eatf
            }) : (k.push(12), a.H.A && k.push(13), c = {
                va: g,
                xb: f,
                errors: h,
                Ra: k,
                exception: l,
                ib: c,
                Cb: !1
            })
        }
        c.Bb = hu(a.B.j);
        if (b = b.j.l) c.vd = b;
        c.Qb = V(a.l).scrollHeight;
        if (Uk()) {
            d = a.B.A.A.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.K;
                for (const g of Cm(e)) d[g] =
                    e.get(g);
                d = {
                    anchorElement: f.H.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.za,
                    placed: f.B,
                    placementProto: f.A ? sd(f.A) : null,
                    articleStructure: f.C ? sd(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Vk(14, [{
                placementIdentifiers: b
            }, a.B.F, c.Bb])
        }
        return c
    }

    function iv(a, b) {
        a = a.B.j;
        a = a.googleSimulationState = a.googleSimulationState || {};
        a.amaConfigPlacementCount = b.xb;
        a.numAutoAdsPlaced = b.va;
        a.hasAtfAd = b.ib;
        void 0 !== b.exception && (a.exception = b.exception)
    }

    function $u(a, b, c, d) {
        a = {
            r: b,
            pg_h: V(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        O(P, Su.la, a, !0, Su.ba, void 0)
    }

    function Zu(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = em(b)) ? void 0 : pd(c, 18, !1)) ? d : !1
    }

    function av(a) {
        let b = null;
        em(a.j) && md(em(a.j), 19) && (b = y(em(a.j), 19));
        return b
    }
    class jv {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.A = e;
            this.F = f;
            this.Z = g || null;
            this.K = [];
            this.$ = h;
            this.I = k;
            this.L = l;
            this.J = 0;
            this.ja = {
                url: a.location.href
            }
        }
        ka(a) {
            try {
                const b = fv(this) || ev(this) ? fv(this) : void 0;
                hn({
                    Gb: b
                }, this.l);
                gv(this);
                const c = hv(this, a, fv(this));
                md(this.j, 25) && A(D(this.j, pm, 25), 1) && iv(this, c);
                dv(this, c);
                Q(753, () => {
                    if (S(Uh) && null != this.B) {
                        var d = this.l;
                        var e = this.B;
                        var f = {
                                Jb: T(Zh),
                                gb: T(Yh),
                                sb: T(Vh),
                                xd: S(Th)
                            },
                            g = Fu(f.Jb, "gapsMeasurementWindow") || Fu(f.gb,
                                "gapsPerMeasurementWindow") || Fu(f.sb, "maxGapsToReport");
                        e = null != g ? ln(g) : -1 == f.gb && -1 == f.sb ? ln("ShouldHaveLimits") : jn(new Mu(d, e, f));
                        d = Wa(c);
                        if (null != e.j) {
                            e = e.j.value;
                            f = bp(e.A.A.A.j.slice(0), e.j);
                            g = Hu(e);
                            var h = new en(Iu(e));
                            for (var k = 0; k < f.length; ++k)
                                if (!h.contains(k)) {
                                    var l = Ju(e, f[k]);
                                    g.push(...l)
                                }
                            g.push(new Du(0, 0));
                            g.push(Eu(new Du(V(e.j).scrollHeight, 0)));
                            f = Ku(g);
                            g = new Em;
                            for (h = 0; h < f.length; ++h) k = f[h], l = e.H ? 0 : Math.floor(k.ta / e.B), Am(g, l) || g.set(l, []), g.get(l).push(k);
                            f = Lu(e, g);
                            d.yc = `M${e.l}H${e.B}C${e.C}B${Number(!!e.D)}W${f.join("W")}`
                        } else d.yc =
                            "E" + e.l.message;
                        d = cv(this, d);
                        Uu(this.D, Ru, d)
                    }
                })()
            } catch (b) {
                this.R(b)
            }
        }
        R(a) {
            dv(this, {
                va: 0,
                xb: void 0,
                errors: [],
                Ra: [],
                exception: a,
                ib: void 0,
                Cb: void 0,
                Bb: void 0
            })
        }
    };
    var kv = (a, b, c, d, e = null) => {
        try {
            var f = a.localStorage
        } catch (m) {
            f = null
        }
        if (f) {
            if (S(Sh)) var g = null;
            else try {
                g = f.getItem("google_ama_config")
            } catch (m) {
                g = null
            }
            try {
                var h = g ? xd(hm, g) : null
            } catch (m) {
                h = null
            }
            g = h
        } else g = null;
        a: {
            if (d) try {
                var k = xd(hm, d);
                break a
            } catch (m) {
                Qm(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            k = null
        }
        if (d = k) {
            k = new im;
            rd(d, 3, k);
            g = em(d) && y(em(d), 13) ? y(em(d), 13) : 1;
            z(k, 1, Date.now() + 864E5 * g);
            k = jd(d.constructor, cd(sd(d)));
            em(d) && (g = new fm, h = pd(em(d), 12, !1), g = z(g, 12, h), h = pd(em(d), 15, !1), g = z(g, 15, h), rd(k, 15, g));
            g = H(k, xj, 1);
            for (h =
                0; h < g.length; h++) z(g[h], 11, gd([]));
            rd(k, 22, void 0);
            if (S(Sh)) Sm(a);
            else try {
                a.localStorage.setItem("google_ama_config", vd(k))
            } catch (m) {
                Qm(a, {
                    lserr: 1
                })
            }
            k = tm(a, H(d, lm, 7));
            a: {
                if (k && (g = y(k, 3), h = D(d, Hl, 9), g && h)) {
                    b: {
                        h = H(h, Fl, 1);
                        for (l of h)
                            if (y(l, 1) == g) {
                                var l = D(l, El, 2) || null;
                                break b
                            }
                        l = null
                    }
                    if (l) break a
                }
                l = D(d, El, 8) || new El
            }
            l = {
                Qd: l
            };
            k && (l.U = k);
            k && rm(k, 3) && (l.Ia = [1]);
            if (7 == c.google_pgb_reactive && (k = l.U, !k || !A(k, 8))) return !1;
            if (ue(a, 2))
                if (Vk(5, [ud(d)]), k = Rm(c), c = (c = l.U) && y(c, 4) || "", k.google_package = c, k = new Mm(["google-auto-placed"],
                        k), c = new Vu(a), k = void 0 === k ? null : k, g = new dn(a), e = void 0 === e ? null : e, h = null, k = void 0 === k ? null : k, h = void 0 === h ? null : h, g = void 0 === g ? null : g, e = void 0 === e ? null : e, b)
                    if (d) {
                        f = [];
                        D(d, zj, 18) && f.push(2);
                        l.U && f.push(0);
                        em(d) && A(em(d), 22) && f.push(1);
                        D(d, Nl, 27) && 1 == od(D(d, Nl, 27), 1, 0) && f.push(3);
                        try {
                            Wu(new jv(a, c, b, d, l, f, k, h, g, e))
                        } catch (m) {
                            Uk() && Vk(15, [m]), Uu(c, Ou, it(lt(kt(gt(new mt(0), b), d), f).ea(1), m))
                        }
                    } else Uu(c, Ou, gt(new mt(0), b).ea(8));
            else Uu(c, Ou, (new mt(0)).ea(9));
            return !0
        }
        g && (Qm(a, {
            cfg: 1,
            cl: 1
        }), Sm(a));
        return !1
    };
    var lv = a => "number" === typeof a.google_reactive_sra_index,
        qv = (a, b, c) => {
            const d = b.N || b.pubWin,
                e = b.G;
            e.google_reactive_plat = ws(d, e, c);
            var f = xs(a);
            f && (e.google_reactive_plaf = f);
            (f = ys(a)) && (e.google_reactive_fba = f);
            mv(a, e);
            f = rs(b.pubWin.location);
            nv(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            dg() || Lk(b.pubWin.top);
            f = Q(429, (h, k) => ov(b, d, e.google_ad_client, a, h, k, c));
            const g = Q(430, ma(ik, b.pubWin, 431, P));
            Mj(b.pubWin, "rsrai", f, g);
            Uj(d).wasReactiveTagRequestSent = !0;
            pv(b, a)
        };
    const pv = (a, b) => {
        const c = a.G,
            d = ca(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Q(353, (f, g) => {
            var h = a.pubWin,
                k = c.google_ad_client;
            return Gf(g.origin) ? kv(h, k, d, f.config) : !1
        });
        const e = Q(353, ma(ik, a.pubWin, 353, P));
        Mj(a.pubWin, "apcnf", b, e)
    };
    var ov = (a, b, c, d, e, f, g) => {
            if (!Gf(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!ue(b, 1)) return !0;
            f && Vk(6, [f]);
            e = e.amaConfig;
            const h = [],
                k = [],
                l = Uj(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const p = f[n],
                    q = p.adFormat;
                l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === q && e) {
                        p.pubVars = Object.assign(p.pubVars || {}, rv(d, p));
                        const v = new Wm;
                        if (Um(v, p)) {
                            m = v;
                            continue
                        }
                    }
                    h.push(p);
                    k.push(q)
                }
            }
            h.length && (Dh("rasra::pm", {
                rt: k.join(","),
                c
            }, .1), As(a.ga.zc, 522, n => {
                sv(h, b, c, n, d, g)
            }));
            e && kv(b, c, d, e, m);
            return !0
        },
        rv = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            ca(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        sv = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const k = a[h],
                    l = k.adFormat,
                    m = k.adKey,
                    n = d.configProcessorForAdFormat(l);
                l && n && m ? (k.pubVars = rv(e, k), delete k.google_reactive_sra_index, g.push(l), Ch(466, () => n.verifyAndProcessConfig(b, k, f))) : Dh("rasra::ivc", {
                    af: l,
                    ak: m,
                    c
                }, .1)
            }
            Dh("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        mv = (a, b) => {
            const c = [];
            let d = !1;
            Bg(Sj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ca(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = Sj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        nv = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    Ec("script");
    /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    var tv = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function uv() {
        var a = N(),
            b = bg(a);
        if (b) return (b = b || bg()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
        a = ol(a, !1).ca;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }

    function vv() {
        if (wv) return wv;
        const a = eg() || N(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? wv = b : a.google_persistent_state_async = wv = new xv
    }

    function yv(a) {
        return zv[a] || "google_ps_" + a
    }

    function W(a, b, c) {
        b = yv(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function Av(a, b) {
        var c = W(a, b, 0) + 1;
        return a.S[yv(b)] = c
    }

    function Bv() {
        var a = vv();
        return W(a, 20, {})
    }

    function Cv() {
        var a = vv();
        return W(a, 28, [])
    }
    class xv {
        constructor() {
            this.S = {}
        }
    }
    var wv = null;
    const zv = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Dv(a, b) {
        if (!tn(b, a)) return () => {};
        a = Ev(b, a);
        if (!a) return () => {};
        const c = Cv();
        b = Wa(b);
        const d = {
            Sb: a,
            G: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => La(c, d)
    }

    function Ev(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Pg.test(a.className);) a = a.parentElement;
        return a
    }

    function Fv(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = rf(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function Gv(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function Hv(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 0 : 90;
        if (a.j != c) {
            a.j = c;
            a = Cv();
            for (const d of a)
                if (d.Sb.offsetWidth != d.offsetWidth || d.G.google_full_width_responsive_allowed) d.offsetWidth = d.Sb.offsetWidth, Ch(467, () => {
                    var e = d.Sb,
                        f = d.G;
                    const g = Fv(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    N().google_spfd(e, f, b);
                    const h = Fv(e, f);
                    !h && g && 1 == e.childNodes.length ? (Gv(g, !1), S(si) ? f.rss = 1 : (f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize"), e.setAttribute("data-adsbygoogle-status", "reserved"), e.className += " adsbygoogle-noablate", Bs(b), b.adsbygoogle.push({
                        element: e,
                        params: f
                    })) : h && g ? h != g && (Gv(g, !1), Gv(h, !0)) : O(P, "auto_size_refresh", {
                        context: "showOrHideElm",
                        url: b.location.href,
                        nodes: e.childNodes.length
                    }, !0, void 0, void 0)
                })
        }
    }
    class Iv {
        constructor() {
            this.j = null
        }
        O(a) {
            const b = vv();
            W(b, 27, !1) || (b.S[yv(27)] = !0, this.j = a.innerHeight >= a.innerWidth ? 0 : 90, K(a, "resize", () => Hv(this, a)))
        }
    };
    var Jv = (a, b) => {
        th(a, c => {
            c.shv = String(b);
            c.mnvr = "m202107130101";
            const d = Fk(r);
            d && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };
    var Kv = class {
        constructor(a, b, c) {
            this.B = a;
            this.A = b;
            this.j = c;
            this.l = null;
            this.C = this.D = 0
        }
        F() {
            10 <= ++this.D && r.clearInterval(this.l);
            var a = wn(this.B, this.A);
            a = xn(this.B, this.A, a);
            const b = sn(this.A, this.B);
            null != b && 0 === b.x || r.clearInterval(this.l);
            a && (this.C++, a = {
                aligns: this.C,
                attempt: this.D,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: Fk(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, O(P, "rspv:al", a, !0, .01, void 0))
        }
    };

    function Lv(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Mv(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Lv(a) && Cg(a.nq) && Cg(a.nqa) && Cg(a.al) && Cg(a.rl)
    }

    function Nv(a) {
        const b = Q(189, la(a.R, a));
        a.l.setTimeout(b, 0)
    }
    class Ov {
        constructor(a) {
            this.B = [];
            this.l = a || window;
            this.j = 0;
            this.A = null;
            this.H = 0
        }
        I(a, b) {
            0 != this.j || 0 != this.B.length || b && b != window ? this.C(a, b) : (this.j = 2, this.F(new Pv(a, window)))
        }
        C(a, b) {
            this.B.push(new Pv(a, b || this.l));
            Nv(this)
        }
        K(a) {
            this.j = 1;
            if (a) {
                const b = Q(188, la(this.D, this, !0));
                this.A = this.l.setTimeout(b, a)
            }
        }
        D(a) {
            a && ++this.H;
            1 == this.j && (null != this.A && (this.l.clearTimeout(this.A), this.A = null), this.j = 0);
            Nv(this)
        }
        L() {
            return !(!window || !Array)
        }
        J() {
            return this.H
        }
        R() {
            if (0 == this.j && this.B.length) {
                const a =
                    this.B.shift();
                this.j = 2;
                const b = Q(190, la(this.F, this, a));
                a.ca.setTimeout(b, 0);
                Nv(this)
            }
        }
        F(a) {
            this.j = 0;
            a.j()
        }
    }
    var Qv;
    Ov.prototype.nq = Ov.prototype.I;
    Ov.prototype.nqa = Ov.prototype.C;
    Ov.prototype.al = Ov.prototype.K;
    Ov.prototype.rl = Ov.prototype.D;
    Ov.prototype.sz = Ov.prototype.L;
    Ov.prototype.tc = Ov.prototype.J;
    var Pv = class {
        constructor(a, b) {
            this.j = a;
            this.ca = b
        }
    };
    var Rv = "undefined" === typeof sttc ? void 0 : sttc;

    function Sv(a) {
        try {
            return Yi(a), new Cj(JSON.parse(a))
        } catch (b) {
            yh.ia(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.jspb = String(a)
            })
        }
        return new Cj
    };

    function Tv(a) {
        this.j = a || {
            cookie: ""
        }
    }
    Tv.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Jh, g = c.be || !1, f = c.domain || void 0, e = c.path || void 0, d = c.pc);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Tv.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = tb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    Tv.prototype.Ka = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };

    function Uv(a, b = window) {
        if (A(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function Vv(a) {
        return "null" !== a.origin
    }

    function Wv(a, b) {
        return A(a, 5) && Vv(b) ? b.document.cookie : null
    }

    function Xv(a, b, c) {
        b = Wv(b, c);
        return null === b ? null : (new Tv({
            cookie: b
        })).get(a) || ""
    };

    function Yv(a, b) {
        return Xv("__gads", b, a.j)
    }

    function Zv(a, b, c, d) {
        const e = {
            pc: c.H() - a.j.Date.now() / 1E3,
            path: c.I(),
            domain: c.F(),
            be: !1
        };
        c = c.l();
        a = a.j;
        A(d, 5) && Vv(a) && (new Tv(a.document)).set(b, c, e)
    }
    var $v = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };
    var aw = (a, b) => {
            const c = new XMLHttpRequest;
            try {
                c.open("GET", a)
            } catch (d) {
                throw Error("Error opening XHR: " + d);
            }
            return new Promise(d => {
                const e = () => {
                    c.readyState != XMLHttpRequest.DONE || 300 <= c.status || d(b(c.responseText))
                };
                c.onreadystatechange = e;
                c.onload = e;
                c.onerror = () => {
                    throw Error("XHR error: " + a);
                };
                c.send()
            })
        },
        bw = a => aw(a, b => b.includes('"_cookies_":') ? JSON.parse(b) : b);

    function cw(a, b, c, d) {
        return Q(629, e => {
            if ("string" === typeof e) {
                if ("[]" === e) return Promise.resolve();
                var f = xd(pe, e);
                S(ui) && z(f, 4, d)
            } else {
                delete a._gfp_s_;
                if (!e) throw Error("Invalid JSONP response");
                e = e._cookies_;
                if (!e) return Promise.resolve();
                var g = e[0];
                if (!g) throw Error("Invalid JSONP response");
                const l = g._expires_;
                var h = g._path_;
                e = g._domain_;
                if (S(ui)) e = d;
                else if ("string" !== typeof e) throw Error("Invalid JSONP response");
                const m = g._value_;
                if (m) {
                    if ("string" !== typeof m || "number" !== typeof l || "string" !==
                        typeof h) throw Error("Invalid JSONP response");
                    f = new pe;
                    f = z(f, 1, m);
                    f = z(f, 2, l);
                    f = z(f, 3, h);
                    f = z(f, 4, e)
                }
                if (S(wi) && (g = g._gpid_)) {
                    if ("string" !== typeof g || "number" !== typeof l || "string" !== typeof h) throw Error("Invalid JSONP response");
                    var k = new qe;
                    k = z(k, 1, g);
                    k = z(k, 2, l);
                    k = z(k, 3, h);
                    k = z(k, 4, e)
                }
            }
            f && (e = f, Zv(c, "__gads", e, b), A(b, 5) && .01 > c.j.Math.random() && (h = Yv(c, b), Tf({
                domain: e.F(),
                host: c.j.location.host,
                success: h === e.l() ? "1" : "0"
            })));
            S(wi) && k && Zv(c, "__gpi", k, b);
            return Promise.resolve()
        })
    }

    function dw(a, b, c) {
        let d = void 0;
        if (S(ui)) {
            a: {
                var e = c.location.host;
                if (c.navigator.cookieEnabled && e.includes(".")) {
                    e = e.replace(/:\d+$/, "");
                    e = e.split(".");
                    for (let h = 2; h <= e.length; h++) {
                        const k = e.slice(e.length - h).join(".");
                        var f = {
                                domain: k
                            },
                            g = c;
                        A(b, 5) && Vv(g) && (new Tv(g.document)).set("gadsTest", "test", f);
                        if ("test" === Xv("gadsTest", b, c)) {
                            e = k;
                            break a
                        }
                    }
                }
                e = null
            }
            e && (d = cw(c, b, a, e))
        }
        else {
            if (0 === a.l) {
                if (Yv(a, b)) e = !0;
                else if (e = a.j, A(b, 5) && Vv(e) && (new Tv(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" ===
                    Xv("GoogleAdServingTest", b, a.j)) f = a.j, A(b, 5) && Vv(f) && (f = new Tv(f.document), f.get("GoogleAdServingTest"), f.set("GoogleAdServingTest", "", {
                    pc: 0,
                    path: void 0,
                    domain: void 0
                }));
                a.l = e ? 2 : 1
            }
            2 === a.l && (d = cw(c, b, a))
        }
        c._gfp_p_ = !0;
        return d
    }

    function ew(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = Yv(b, a) || "";
        e && (d.cookie = e);
        S(wi) && ((e = Xv("__gpi", a, b.j) || "") && (d.gpi_cookie = e), d.gpid_exp = "1");
        const f = lb(ob(eb(fb("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = dw(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            df(c.document, f)
        }) : Promise.resolve()
    };
    let fw = (new Date).getTime();
    const gw = (a = window) => !a.PeriodicSyncManager;
    var hw = {
            issuerOrigin: "https://adservice.google.com",
            issuancePath: "/tt/i",
            redemptionPath: "/tt/r",
            shouldRedeemToken: () => !gw(window) || S(Ui) ? !0 : !1,
            shouldRequestToken: () => !1
        },
        iw = () => {
            var a = window;
            if (!gw(a) && S(Ni) || gw(a) && S(Oi)) {
                a = a.navigator.userAgent;
                const b = /Chrome/.test(a);
                return /Android/.test(a) && b
            }
            return !1
        },
        jw = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: () => iw(),
            shouldRequestToken: () => iw()
        };
    const If = ["A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9"
    ];

    function kw(a = window) {
        return a.goog_tt_state
    }

    function lw(a) {
        return a.some(b => 6 === b.state)
    }

    function mw(a, b) {
        a = a.filter(c => 6 === c.state).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        b && 0 < Object.keys(b).length && (a.additionalSigningData = ad(JSON.stringify(b)));
        return a
    }

    function nw(a) {
        const b = a.C.map(c => ({
            issuerOrigin: c.issuerOrigin,
            state: S(Ri) && !a.j ? 12 : 1
        }));
        S(Si) || a.l(b);
        return b
    }

    function ow(a, b, c) {
        if (S(Si)) {
            if (a = window.goog_tt_state.find(d => d.issuerOrigin === b)) a.state = c
        } else {
            const d = a.A.find(e => e.issuerOrigin === b);
            d && (d.state = c, a.l(a.A))
        }
    }

    function pw() {
        const a = window.goog_tt_state;
        return Array.isArray(a) && a.some(b => 1 != b.state)
    }

    function qw(a, b) {
        const c = `${b.issuerOrigin}${b.redemptionPath}`,
            d = {
                keepalive: !0,
                redirect: "follow",
                method: "get",
                trustToken: {
                    type: "token-redemption",
                    issuer: b.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        ow(a, b.issuerOrigin, 2);
        return window.fetch(c, d).then(e => {
            if (!e.ok) throw Error(`${e.status}: Network response was not ok!`);
            ow(a, b.issuerOrigin, 6)
        }).catch(e => {
            e && "NoModificationAllowedError" === e.name ? ow(a, b.issuerOrigin, 6) : ow(a, b.issuerOrigin, 5)
        })
    }

    function rw(a, b, c) {
        const d = `${b.issuerOrigin}${b.issuancePath}`;
        ow(a, b.issuerOrigin, 8);
        return window.fetch(d, {
            trustToken: {
                type: "token-request"
            }
        }).then(e => {
            if (!e.ok) throw Error(`${e.status}: Network response was not ok!`);
            ow(a, b.issuerOrigin, 10);
            if (c) return qw(a, b)
        }).catch(e => {
            if (e && "NoModificationAllowedError" === e.name) {
                if (ow(a, b.issuerOrigin, 10), c) return qw(a, b)
            } else ow(a, b.issuerOrigin, 9)
        })
    }

    function sw(a) {
        if (!(!document.hasTrustToken || S(Pi) || S(Ri) && !a.j || S(Si) && pw())) {
            var b = [];
            a.C.forEach(c => {
                const d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(g => {
                        if (g) {
                            if (d) return qw(a, c)
                        } else {
                            if (e) return rw(a, c, d);
                            ow(a, c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else ow(a, c.issuerOrigin, 7)
            });
            window.Promise && window.Promise.all && window.Promise.all(b)
        }
    }
    class tw extends jk {
        constructor(a = () => {}, b = !1) {
            super();
            Kf(window.document);
            this.C = S(Qi) ? [jw] : [hw, jw];
            this.j = b;
            this.l = a;
            if (document.hasTrustToken && !S(Pi))
                if (S(Si)) {
                    if (!Array.isArray(window.goog_tt_state)) {
                        const c = nw(this);
                        Object.defineProperty(window, "goog_tt_state", {
                            configurable: !1,
                            get() {
                                return c.slice()
                            }
                        })
                    }
                } else this.A = nw(this)
        }
    };
    var uw = Q(215, a => {
            const b = a.google_sa_queue,
                c = b.shift();
            a.google_sa_impl || Dh("shimpl", {
                t: "no_fn"
            });
            "function" === typeof c && Ch(216, c);
            b.length && a.setTimeout(() => uw(a), 0)
        }),
        vw = a => {
            const b = Ne(document, "IFRAME");
            Bg(a, (c, d) => {
                null != c && b.setAttribute(d, c)
            });
            return b
        };

    function ww(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        var d = new $v(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : S(Oh) ? (c = `${"https://partner.googleadservices.com/gampad/cookie.js"}?domain=${b.location.hostname}&client=${c}`, (e = Yv(d, a) || "") && (c += `&cookie=${e}`), (b = dw(d, a, b)) ? bw(c).then(b) : Promise.resolve()) :
                ew(a, d, b, c)
        } else Promise.resolve();
        a = Yv(d, a) || "";
        mj || (mj = new lj);
        d = mj;
        kj(d, a);
        a = d.l;
        Vi(Ck).j(a);
        Vi(Bk).j(20);
        Vi(Bk).j(17)
    };
    var yw = a => {
            const b = {};
            b.dtd = xw((new Date).getTime(), fw);
            return Gg(b, a)
        },
        xw = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var Aw = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => zw(e));
        return Mj(a, "adpnt", (f, g) => {
            var h;
            if (ek(g, c.contentWindow)) {
                f = hk(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    var k;
                    if (S(Li)) {
                        null !== (h = a.googletag) && void 0 !== h ? h : a.googletag = {};
                        var l = null !== (k = a.googletag.queryIds) && void 0 !== k ? k : [];
                        l.push(f);
                        500 < l.length && l.shift();
                        a.googletag.queryIds = l
                    }
                } catch (m) {}
                e.dataset.adStatus && O(P, "adsense_late_fill", {
                    status: e.dataset.adStatus
                }, !0, void 0, void 0);
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function zw(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var Bw = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };

    function Cw(a) {
        a.A = a.D;
        a.H.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        Dw(a)
    }

    function Ew(a, b) {
        (a.l.contentWindow || a.l.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }

    function Dw(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.F.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.setAttribute("height", a.A);
        a.F.style.height = a.A + "px";
        a.C.style.height = a.A + "px";
        a.H.style.height = a.A + "px"
    }

    function Fw(a, b) {
        b = pf(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.J = ug(a.H).y;
        a.I = fk(a.j);
        if (a.J + a.A < a.I) return "2";
        if (a.J > ak(a.j) - a.j.innerHeight) return "3";
        b = a.I;
        a.l.setAttribute("height", a.D);
        a.l.style.height = a.D + "px";
        a.F.style.overflow = "hidden";
        a.H.style.position = "relative";
        a.H.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.A);
        og(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        og(a.l, {
            clip: b
        });
        og(a.F, {
            clip: b
        });
        return "0"
    }

    function Gw(a, b = {}) {
        a.$ && (b.eid = a.$);
        b.qid = a.ma;
        O(P, "eoscrl", b, !0, Bw(String(a.Sa)), void 0)
    }
    class Hw extends mk {
        constructor(a, b) {
            super(a.N);
            this.l = b;
            this.F = a.W.firstElementChild;
            this.C = a.W;
            this.H = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.A = parseInt(this.C.style.height, 10);
            this.$ = null;
            this.Va = this.Ta = !1;
            this.ma = "";
            this.da = this.I = this.D = 0;
            this.Qc = this.A / 5;
            this.J = ug(this.H).y;
            this.Sa = null;
            this.Pc = Ca(Q(651, () => {
                this.J = ug(this.H).y;
                var c = this.I;
                this.I = fk(this.j);
                this.A < this.D ? (c = this.I - c, 0 < c && (this.da += c, this.da >= this.Qc ? (Cw(this),
                    Ew(this, this.D)) : (this.A = Math.min(this.D, this.A + c), Ew(this, c), Dw(this)))) : ae(this.j, "scroll", this.K)
            }), this);
            this.K = () => {
                var c = this.Pc;
                M.requestAnimationFrame ? M.requestAnimationFrame(c) : c()
            }
        }
        L(a) {
            a["expand-on-scroll"] = (b, c) => {
                Vg(c, this.l) && (b = hk(b), this.$ = b.i_expid, this.ma = b.qid, this.Sa = b.gen204_fraction, this.Ta || (this.Ta = !0, b = Fw(this, b), "0" === b && K(this.j, "scroll", this.K, Yd), c.source.postMessage(JSON.stringify({
                        ["msg_type"]: "expand-on-scroll-result",
                        ["eos_success"]: "0" === b,
                        googMsgType: "sth"
                    }), "*"),
                    Gw(this, {
                        err: b
                    })))
            };
            a["expand-on-scroll-force-expand"] = (b, c) => {
                Vg(c, this.l) && !this.Va && (this.Va = !0, Cw(this), ae(this.j, "scroll", this.K))
            }
        }
        B() {
            this.K && ae(this.j, "scroll", this.K, Yd);
            super.B()
        }
    };

    function Iw(a) {
        const b = a.I.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    class Jw extends jk {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.C = b;
            this.I = c;
            this.D = 0;
            this.A = Iw(this);
            this.H = Ba(this.F, this);
            this.j = Q(433, () => {
                var d = this.H;
                M.requestAnimationFrame ? M.requestAnimationFrame(d) : d()
            });
            K(this.l, "scroll", this.j, Yd)
        }
        F() {
            const a = Iw(this);
            if (a && !this.A) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (Rj(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && ae(this.l, "scroll", this.j, Yd))
            }
            this.A = a
        }
    };
    class Kw extends mk {
        constructor(a, b) {
            a.N && super(a.N);
            this.l = b;
            this.C = a.W;
            this.A = a.Y
        }
        L(a) {
            a.interscroller = (b, c) => {
                if (Vg(c, this.l) && (c = hk(b), b = c.i_h, c = c.i_f, null != b && "" !== b && null != c && "" !== c)) {
                    this.C.style.position = "relative";
                    L(this.A, {
                        position: "absolute",
                        clip: "rect(0, auto, auto, 0)"
                    });
                    var d = this.A.firstElementChild;
                    d && d.id == this.l.id && L(d, {
                        position: "fixed"
                    });
                    d = pf(sg(this.A, "zIndex").toString(), 0) + 1;
                    b = Of(this.l.id + "_header", b);
                    L(b, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("afterbegin", b);
                    b = Of(this.l.id + "_footer", c);
                    L(b, {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("beforeend", b)
                }
            }
        }
    };
    const Lw = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function Mw(a, b) {
        if (!a.ma) return "1";
        b = pf(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "2";
        a.C = ug(a.A).y;
        b = a.j.innerHeight;
        if (a.C + a.$ < b) return "4";
        if (a.C > ak(a.j) - b) return "3";
        a.A.setAttribute("height", a.D);
        a.A.style.height = a.D + "px";
        og(a.l, Lw);
        a.l.style.height = a.D + "px";
        a.K.style.position = "relative";
        a.da();
        return "0"
    }

    function Nw(a, b = {}) {
        a.F && (b.eid = a.F);
        b.qid = a.H;
        O(P, "pscrl", b, !0, Bw(String(a.I)), void 0)
    }
    class Ow extends mk {
        constructor(a, b) {
            a.N && super(a.N);
            this.A = b;
            this.l = a.W;
            this.K = this.l.parentElement;
            this.$ = parseInt(this.l.style.height, 10);
            this.F = null;
            this.J = !1;
            this.H = "";
            this.D = 0;
            this.C = ug(this.A).y;
            this.I = null;
            this.ma = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame;
            this.da = Q(636, () => {
                this.ma.call(this.j, this.da);
                var c = this.j.innerHeight,
                    d = fk(this.j);
                this.C = ug(this.K).y;
                d + c > this.C ? (d = d + c - this.C, c = Math.min(d,
                    this.$), d = this.D - d, d = Math.max(0, d), 0 >= d ? og(this.l, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : og(this.l, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), og(this.l, {
                    clip: "rect(" + d + "px, " + this.A.width + "px, " + (d + c) + "px, 0px)"
                })) : og(this.l, {
                    clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)"
                })
            })
        }
        L(a) {
            a["parallax-scroll"] = (b, c) => {
                b = hk(b);
                this.F = b.i_expid;
                this.H = b.qid;
                this.I = b.gen204_fraction;
                !this.J && Vg(c, this.A) && (this.J = !0, b = Mw(this, b), c.source.postMessage(JSON.stringify({
                    ["msg_type"]: "parallax-scroll-result",
                    ["ps_success"]: "0" === b,
                    googMsgType: "sth"
                }), "*"), Nw(this, {
                    err: b
                }))
            }
        }
    };

    function Pw(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Ke(a.j.M() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = Qw(a, b, c, a.j.j.elementsFromPoint(Ce(c.left + c.width / 2, c.left, c.right - 1), Ce(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = Qw(a, b, c, a.j.j.elementsFromPoint(Ce(c.left + c.width / 2, c.left, c.right - 1), Ce(c.top + 2, c.top, c.bottom - 1)), 2, e.pa),
            g = Qw(a, b, c, a.j.j.elementsFromPoint(Ce(c.left + 2, c.left, c.right - 1), Ce(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.pa, ...f.pa]);
        const h = Qw(a, b, c, a.j.j.elementsFromPoint(Ce(c.right - 1 - 2, c.left, c.right - 1), Ce(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.pa, ...f.pa, ...g.pa]);
        var k = Rw(a, b, c),
            l = n => Ka(a.A, n.overlapType) && Ka(a.B, n.overlapDepth) && Ka(a.l, n.overlapDetectionPoint);
        e = Fa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Fa(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = Le(a.j.j);
        const m = new Yf(c.left, c.top, c.width, c.height);
        e = [...Ga(e, n => new Yf(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Pa(Ga(l, n => $f(m, n.elementRect))), ...Fa($f(m, new Yf(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? Sw(m, e) : Tw(c, e)
        }
    }

    function Uw(a, b) {
        const c = a.j.M(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new qh,
                                        m = ph(l, () => Pw(a, k));
                                    m && (l.events.length && (m.executionTime = Math.round(Number(l.events[0].duration))), h.disconnect(), e(m))
                                }, Vw);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function Qw(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            pa: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if (Ka(f, p)) continue;
            h.push(p);
            const q = p.getBoundingClientRect();
            if (a.j.contains(p, b)) {
                g.push(Ww(a, c, p, q, 1, e));
                continue
            }
            if (a.j.contains(b, p)) {
                g.push(Ww(a, c, p, q, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = p;
                const B = k.j.l(l, m);
                if (!B) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: F,
                    wa: G
                } = Xw(k, l, B, m) || {},
                {
                    suspectAncestor: I,
                    wa: C
                } = Xw(k, m, B, l) || {};k = F && G && I && C ? G <= C ? {
                    suspectAncestor: F,
                    overlapType: Yw[G]
                } : {
                    suspectAncestor: I,
                    overlapType: Zw[C]
                } : F && G ? {
                    suspectAncestor: F,
                    overlapType: Yw[G]
                } : I && C ? {
                    suspectAncestor: I,
                    overlapType: Zw[C]
                } : null
            }
            const {
                suspectAncestor: v,
                overlapType: u
            } = k || {};
            v && u ? g.push(Ww(a, c, p, q, u, e, v)) : g.push(Ww(a, c, p, q, 9, e))
        }
        return {
            entries: g,
            pa: h
        }
    }

    function Rw(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = ef(b, a.j.M());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(Ww(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(Ww(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(Ww(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function Sw(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Zf(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Tw(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Ww(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Ka(a.A, e) && Ka(a.l, f)) {
            b = new Vf(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = $w(a, c)) && Xf(b, a)) c = 4;
            else {
                a = ax(c, d);
                if (Jc) {
                    e = yg(c, "paddingLeft");
                    f = yg(c, "paddingRight");
                    var k = yg(c, "paddingTop"),
                        l = yg(c, "paddingBottom");
                    e = new Vf(k, f, l, e)
                } else e = rg(c, "paddingLeft"), f = rg(c, "paddingRight"), k = rg(c, "paddingTop"), l = rg(c, "paddingBottom"), e = new Vf(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Xf(b, new Vf(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = ax(c, d), c = Xf(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function Xw(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.M();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = ef(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    wa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    wa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    wa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = bx(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        wa: 4
                    }
                }
            }
        }
        return (a = bx(a, e, b)) ? {
                suspectAncestor: a,
                wa: 5
            } :
            null
    }

    function bx(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = ef(f, a.j.M());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function $w(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Vf(a.top, a.right, a.bottom, a.left)
    }

    function ax(a, b) {
        if (!Jc || 9 <= Number(Xc)) {
            var c = rg(a, "borderLeftWidth");
            d = rg(a, "borderRightWidth");
            e = rg(a, "borderTopWidth");
            a = rg(a, "borderBottomWidth");
            c = new Vf(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Ag(a, "borderLeft");
            var d = Ag(a, "borderRight"),
                e = Ag(a, "borderTop");
            a = Ag(a, "borderBottom");
            c = new Vf(e, d, a, c)
        }
        return new Vf(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class cx {
        constructor(a, b = dx) {
            this.j = He(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const Yw = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        Zw = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Fa(kf({
        Nf: 1,
        Of: 2,
        rh: 3,
        sh: 4,
        uh: 5,
        Jf: 6,
        Kf: 7,
        Mf: 8,
        Ig: 9,
        th: 10,
        Lf: 11,
        qh: 12,
        If: 13
    }), a => !Ka([1, 2], a));
    kf({
        $e: 1,
        Jg: 2,
        mf: 3,
        vh: 4
    });
    const dx = kf({
            bf: 1,
            yh: 2,
            wg: 3,
            ah: 4
        }),
        Vw = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function ex(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Rb + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        og(a, "transition", b.join(","))
    }
    var fx = za(function() {
        if (Jc) return Uc("10.0");
        var a = Ne(document, "DIV"),
            b = Nc ? "-webkit" : Mc ? "-moz" : Jc ? "-ms" : Ic ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!nc.test("div")) throw Error("");
        if ("DIV" in pc) throw Error("");
        c = null;
        var d = "";
        if (b)
            for (l in b)
                if (Object.prototype.hasOwnProperty.call(b, l)) {
                    if (!nc.test(l)) throw Error("");
                    var e = b[l];
                    if (null != e) {
                        var f = l;
                        var g = e;
                        if (g instanceof bb) g = eb(g);
                        else if ("style" == f.toLowerCase()) {
                            e = void 0;
                            if (!ca(g)) throw Error("");
                            if (!(g instanceof Pb)) {
                                var h = "";
                                for (e in g)
                                    if (Object.prototype.hasOwnProperty.call(g, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var k = g[e];
                                        null != k && (k = Array.isArray(k) ? k.map(Rb).join(" ") : Rb(k), h += e + ":" + k + ";")
                                    }
                                g = h ? new Pb(h, Ob) : Qb
                            }
                            g = g instanceof Pb && g.constructor === Pb ? g.l : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in oc)
                                if (g instanceof kb) g = nb(g).toString();
                                else if (g instanceof Fb) g = Gb(g);
                            else if ("string" === typeof g) g =
                                (Lb(g) || Nb).j();
                            else throw Error("");
                        }
                        g.ha && (g = g.j());
                        f = f + '="' + ub(String(g)) + '"';
                        d += " " + f
                    }
                }
        var l = "<div" + d;
        d = void 0;
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === Za.div ? l += ">" : (c = sc(d), l += ">" + kc(c).toString() + "</div>", c = c.l());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = mc(l, c);
        vc(a, b);
        a = a.firstChild;
        b = a.style[Cc("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[pg(a, "transition")] || "")
    });

    function gx(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function hx(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function ix(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function jx(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(kx, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function lx(a) {
        var b = jx(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var mx = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function nx(a) {
        let b = a.$;
        a.J = function() {};
        ox(a, a.I, b);
        let c = a.I.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : ef(c, b)
            } catch (g) {
                ix(a.j, "c")
            }
            const f = px(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.Z = !0);
            if (d && !f && qx(e)) {
                hx(a.j, "l");
                a.K = c;
                break
            }
            d = d && f;
            if (e && rx(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Ua) break;
                try {
                    if (c = b.frameElement, b = b.parent, !af(b)) {
                        hx(a.j, "c");
                        break
                    }
                } catch (g) {
                    hx(a.j,
                        "c");
                    break
                }
            }
        }
        a.H && a.B && sx(a);
        return a.j
    }

    function tx(a) {
        function b() {
            ux(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) og(h, m[n], "0px")
                };
                l(vx);
                l(wx)
            }
        }
        const c = a.I;
        c.style.overflow = a.Ta ? "visible" : "hidden";
        a.H && (a.K ? (ex(c, xx), ex(a.K, xx)) : ex(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.R && (c.style.opacity = a.R);
        const d = null != a.F && null != a.A && (a.ka || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.ka || a.l > a.D) ? a.l : null;
        if (a.L) {
            const l = a.L.length;
            for (let m = 0; m < l; m++) ux(a.L[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.K,
            k = a.Z;
        a.H ? r.setTimeout(b, 1E3) : b()
    }

    function yx(a) {
        if (a.B && !a.ma || null == a.A && null == a.l && null == a.R && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        nx(a);
        a.B = b;
        if (!b || null != a.ja && !jx(a.j, a.ja, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.H = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        tx(a);
        return nx(a)
    }

    function rx(a, b) {
        let c = !1;
        "none" == b.display && (hx(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || hx(a.j, "v");
        "hidden" == b.overflow && hx(a.j, "o");
        "absolute" == b.position ? (hx(a.j, "a"), c = !0) : "fixed" == b.position && (hx(a.j, "f"), c = !0);
        return c
    }

    function ox(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = zx(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && gx(a.j, 0, "o"), d & 4 && gx(a.j, 1, "o"));
        return !(d & 1)
    }

    function px(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (B) {
            ix(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = pf(f),
            h = c.getAttribute("height"),
            k = pf(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = ox(a, c, b);
        var n = d && d.width,
            p = d && d.height,
            q = e && e.width,
            v = e && e.height,
            u = rf(n) == a.F && rf(p) == a.D;
        n = u ? n : q;
        v = u ? p : v;
        q = rf(n);
        u = rf(v);
        g = null !== a.F && (null !== q && a.F >= q || null !== g && a.F >= g);
        u = null !== a.D && (null !== u && a.D >= u || null !== k && a.D >= k);
        k = !m && qx(d);
        u = m || u || k || !(f || n || d && (!Ax(String(d.minWidth)) || !Bx(String(d.maxWidth))));
        l = m || g || k || l || !(h || v || d && (!Ax(String(d.minHeight)) || !Bx(String(d.maxHeight))));
        Cx(a, 0, u, c, "width", f, a.F, a.A);
        Dx(a, 0, "d", u, e, d, "width", n, a.F, a.A);
        Dx(a, 0, "m", u, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        Dx(a, 0, "M", u, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        if (a.Va) {
            c = /^html|body$/i.test(c.nodeName);
            p = rf(p);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && p && Math.round(p) !== a.l) && !(f = !h) && (f = p, f = (S(ei) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.B && !c && f) c = !(a.Sa && d && (S(di) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(rf(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !Ax(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !Bx(String(d.maxHeight)) && a.l && Math.round(p) < a.l && e.setProperty("max-height", "none", "important"))
        } else Cx(a, 1, l, c, "height", h, a.D, a.l), Dx(a, 1, "d", l, e, d, "height", v, a.D, a.l), Dx(a, 1, "m", l, e, d, "minHeight", e && e.minHeight,
            a.D, a.l), Dx(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
        return m
    }

    function sx(a) {
        function b() {
            if (0 < c) {
                var l = ef(e, d) || {};
                const m = rf(l.width);
                l = rf(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else r.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.$,
            e = a.I,
            f = a.A,
            g = a.l,
            h = a.J;
        let k;
        r.setTimeout(function() {
            k = r.setInterval(b, 16)
        }, 990)
    }

    function zx(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = ef(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function Cx(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = pf(f);
                null == f && (ix(a.j, "n"), gx(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.H) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else gx(a.j, b, "d")
        }
    }

    function Dx(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? Ax(f) : Bx(f)) || (f = rf(f), null == f ? hx(a.j, "p") : null != k && hx(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? Ax(h) : Bx(h)) return;
                h = rf(h);
                null == h && (ix(a.j, "p"), gx(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.H) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.J;
                            a.J = function(p, q) {
                                p == b && (e[g] = m - q + "px");
                                n && n(p, q)
                            }
                        } else e[g] = l + "px"
                } else gx(a.j, b, c)
        }
    }
    var Ix = class {
        constructor(a, b, c, d, e, f, g) {
            this.Ua = a;
            this.L = c;
            this.I = b;
            this.$ = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new Ex(this.I);
            this.B = g;
            this.ma = Fx(this.C, d.Xb, d.height, d.Ec);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = Gx(d.width);
            this.l = Gx(d.height);
            this.R = this.B ? Gx(d.opacity) : null;
            this.ja =
                d.check;
            this.H = "animate" == d.Xb && !Hx(this.C, this.l, this.da) && fx();
            this.Ta = !!d.Zb;
            this.j = new mx;
            Hx(this.C, this.l, this.da) && hx(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && hx(this.j, "b");
            this.K = this.J = null;
            this.Z = !1;
            this.ka = !!d.Zd;
            this.Va = !!d.Cc;
            this.da = !!d.Ec;
            this.Sa = d.Wa
        }
    };

    function Hx(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, Gx(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var Ex = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow),
                d;
            if (d = c) d = af(c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || r;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement :
                c.document.body).clientHeight;
            b = b && Zk(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function Fx(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return Hx(a, c, d)
        }
    }

    function qx(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function Jx(a, b, c, d) {
        return yx(new Ix(a, b, d, c, null, null, !0))
    }
    var Kx = new mx("s", ""),
        kx = /[lonvafrbpEe]/g;

    function Bx(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function Ax(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function ux(a, b, c) {
        null !== b && null !== pf(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== pf(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var vx = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        wx = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let Lx = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        Mx = vx;
    for (let a = 0; a < Mx.length; a++) Lx += ", " + Mx[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    Mx = wx;
    for (let a = 0; a < Mx.length; a++) Lx += ", " + Mx[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var xx = Lx;

    function Gx(a) {
        return "string" === typeof a ? pf(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function Nx(a, b, c, d, e, f, g, h, k, l) {
        const m = N();
        if (!a.l || !m) return l.err = "2", Ox(a, l, null), !1;
        if ("no_rsz" === f) return l.err = "7", Ox(a, l, null), !0;
        const n = new Ex(a.l);
        if (!n.j) return l.err = "3", Ox(a, l, null), !1;
        var p = n.boundingClientRect ? n.boundingClientRect.right - n.boundingClientRect.left : null;
        null != p && (l.w = p);
        p = n.getHeight();
        null != p && (l.h = p);
        if (Fx(n, f, d, k)) {
            var q = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
            p = q ? [a.l] : null;
            q = q || a.l;
            const v = S(ri);
            b = Jx(m, q, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Xb: f,
                Zb: g,
                Zd: h,
                Cc: v,
                Ec: k
            }, p);
            l.r_cui && qf(l.r_cui.toString()) && L(q, {
                height: (null === d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = lx(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            Ox(a, l, n);
            Ia(Vi(Bk).l(), u => Ka([248427477, 248427478], u)) && a.j === m && Uw(new cx(a.j, void 0), q).then(u => {
                Vk(8, [u]);
                return u
            }).then(u => {
                O(P, "resize-ovlp", {
                    adf: a.A,
                    eid: a.F,
                    io: Number(u.isOverlappingOrOutsideViewport),
                    oa: u.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.H,
                    url: a.I,
                    vp: u.viewportSize.width +
                        "x" + u.viewportSize.height
                }, !0, 1, void 0)
            }).catch(u => {
                O(P, "resize-ovlp-err", {
                    err: u.message
                }, !0, 1, void 0)
            });
            return !0
        }
        l.err = "1";
        Ox(a, l, n);
        return !1
    }

    function Px(a, b, c) {
        const d = {
            scrl: fk(a.j || N()),
            adk: a.D,
            adf: a.A,
            fmt: a.C
        };
        b && (d.str = Hx(b, pf(c.r_nh), qf(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        Bg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function Ox(a, b, c) {
        const d = Bw(String(b.gen204_fraction));
        b = Px(a, c, b);
        b.url = a.j.document.URL;
        O(P, "resize", b, !0, d, void 0)
    }
    class Qx extends mk {
        constructor(a, b, c) {
            super(a);
            this.l = b;
            this.D = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.F = Fk(c);
            this.H = String(c.google_ad_slot || "");
            this.I = String(c.google_page_url || "")
        }
        L(a) {
            a["resize-me"] = (b, c) => {
                if (ek(c, this.l.contentWindow)) {
                    b = hk(b);
                    var d = b.r_chk;
                    if (null == d || "" === d) {
                        var e = pf(b.r_nw),
                            f = pf(b.r_nh),
                            g = pf(b.r_no);
                        null != g || 0 !== e && 0 !== f || (g = 0);
                        var h = b.r_str;
                        h = h ? h : null;
                        e = Nx(this, d, e, f, g, h, qf(b.r_ao), qf(b.r_ifr),
                            qf(b.r_cab), b);
                        d = {
                            msg_type: "resize-result"
                        };
                        d.r_str = h;
                        d.r_status = e;
                        c = c.source;
                        d.googMsgType = "sth";
                        c.postMessage(JSON.stringify(d), "*");
                        this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                    }
                }
            }
        }
        B() {
            super.B();
            this.l = null
        }
    };
    var Rx = {
        ["google_ad_block"]: "ad_block",
        ["google_ad_client"]: "client",
        ["google_ad_output"]: "output",
        ["google_ad_callback"]: "callback",
        ["google_ad_height"]: "h",
        ["google_ad_resize"]: "twa",
        ["google_ad_slot"]: "slotname",
        ["google_ad_unit_key"]: "adk",
        ["google_ad_dom_fingerprint"]: "adf",
        ["google_placement_id"]: "pi",
        ["google_ad_width"]: "w",
        ["google_captcha_token"]: "captok",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_ctr_threshold"]: "ctr_t",
        ["google_cust_criteria"]: "cust_params",
        ["gfwrnwer"]: "fwrn",
        ["gfwrnher"]: "fwrnh",
        ["google_image_size"]: "image_size",
        ["google_last_modified_time"]: "lmt",
        ["google_loeid"]: "loeid",
        ["google_max_num_ads"]: "num_ads",
        ["google_max_radlink_len"]: "max_radlink_len",
        ["google_mtl"]: "mtl",
        ["google_native_settings_key"]: "nsk",
        ["google_enable_content_recommendations"]: "ecr",
        ["google_num_radlinks"]: "num_radlinks",
        ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
        ["google_pucrd"]: "pucrd",
        ["google_reactive_plaf"]: "plaf",
        ["google_reactive_plat"]: "plat",
        ["google_reactive_fba"]: "fba",
        ["google_reactive_sra_channels"]: "plach",
        ["google_responsive_auto_format"]: "rafmt",
        ["armr"]: "armr",
        ["google_rl_dest_url"]: "rl_dest_url",
        ["google_rl_filtering"]: "rl_filtering",
        ["google_rl_mode"]: "rl_mode",
        ["google_rt"]: "rt",
        ["google_video_play_muted"]: "vpmute",
        ["google_source_type"]: "src_type",
        ["google_restrict_data_processing"]: "rdp",
        ["google_tag_for_child_directed_treatment"]: "tfcd",
        ["google_tag_for_under_age_of_consent"]: "tfua",
        ["google_tag_origin"]: "to",
        ["google_ad_semantic_area"]: "sem",
        ["google_tfs"]: "tfs",
        ["google_package"]: "pwprc",
        ["google_tag_partner"]: "tp",
        ["fra"]: "fpla",
        ["google_ml_rank"]: "mlr",
        ["google_apsail"]: "psa",
        ["google_ad_channel"]: "channel",
        ["google_ad_type"]: "ad_type",
        ["google_ad_format"]: "format",
        ["google_color_bg"]: "color_bg",
        ["google_color_border"]: "color_border",
        ["google_color_link"]: "color_link",
        ["google_color_text"]: "color_text",
        ["google_color_url"]: "color_url",
        ["google_page_url"]: "url",
        ["google_allow_expandable_ads"]: "ea",
        ["google_ad_section"]: "region",
        ["google_cpm"]: "cpm",
        ["google_encoding"]: "oe",
        ["google_safe"]: "adsafe",
        ["google_flash_version"]: "flash",
        ["google_font_face"]: "f",
        ["google_font_size"]: "fs",
        ["google_hints"]: "hints",
        ["google_ad_host"]: "host",
        ["google_ad_host_channel"]: "h_ch",
        ["google_ad_host_tier_id"]: "ht_id",
        ["google_kw_type"]: "kw_type",
        ["google_kw"]: "kw",
        ["google_contents"]: "contents",
        ["google_targeting"]: "targeting",
        ["google_adtest"]: "adtest",
        ["google_alternate_color"]: "alt_color",
        ["google_alternate_ad_url"]: "alternate_ad_url",
        ["google_cust_age"]: "cust_age",
        ["google_cust_ch"]: "cust_ch",
        ["google_cust_gender"]: "cust_gender",
        ["google_cust_interests"]: "cust_interests",
        ["google_cust_job"]: "cust_job",
        ["google_cust_l"]: "cust_l",
        ["google_cust_lh"]: "cust_lh",
        ["google_cust_u_url"]: "cust_u_url",
        ["google_cust_id"]: "cust_id",
        ["google_language"]: "hl",
        ["google_city"]: "gcs",
        ["google_country"]: "gl",
        ["google_region"]: "gr",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_content_recommendation_ui_type"]: "crui",
        ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
        ["google_color_line"]: "color_line",
        ["google_disable_video_autoplay"]: "disable_video_autoplay",
        ["google_full_width_responsive_allowed"]: "fwr",
        ["google_full_width_responsive"]: "fwrattr",
        ["efwr"]: "efwr",
        ["google_pgb_reactive"]: "pra",
        ["google_resizing_allowed"]: "rs",
        ["google_resizing_height"]: "rh",
        ["google_resizing_width"]: "rw",
        ["rpe"]: "rpe",
        ["google_responsive_formats"]: "resp_fmts",
        ["google_safe_for_responsive_override"]: "sfro",
        ["google_video_doc_id"]: "video_doc_id",
        ["google_video_product_type"]: "video_product_type",
        ["google_webgl_support"]: "wgl"
    };
    let Sx = navigator;
    var Tx = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Ux = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Tx(a.toLowerCase())
        };
    const Vx = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Wx = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Xx = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    const Yx = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const Zx = /^blogger$/,
        $x = /^wordpress(.|\s|$)/i,
        ay = /^joomla!/i,
        by = /^drupal/i,
        cy = /\/wp-content\//,
        dy = /\/wp-content\/plugins\/advanced-ads/,
        ey = /\/wp-content\/themes\/genesis/,
        fy = /\/wp-content\/plugins\/genesis/;
    var gy = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (dy.test(e)) return 5;
                if (fy.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), ey.test(e) || fy.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (Zx.test(f)) return 1;
                if ($x.test(f)) return 2;
                if (ay.test(f)) return 3;
                if (by.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), cy.test(d))) return 2;
        return 0
    };

    function hy(a) {
        -1 == a.l && (a.l = Ha(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class iy {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var jy = () => {
        const a = new iy;
        r.SVGElement && r.document.createElementNS && a.set(0);
        const b = wf();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        r.TextDecoder && r.TextEncoder && a.set(4);
        return hy(a)
    };

    function ky(a, b, c) {
        const d = a.createElement("link");
        try {
            d.rel = "preload", d.href = b instanceof kb ? nb(b).toString() : b instanceof Fb ? Gb(b) : Gb(Mb(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    const ly = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        my = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let ny = () => r,
        oy = r;
    const py = a => {
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(r.location.hostname)}`];
        Y[3] >= na() && b.push(`adsid=${encodeURIComponent(Y[1])}`);
        return a + "?" + b.join("&")
    };
    let Y, Z;
    const qy = () => {
        oy = ny();
        Y = oy.googleToken = oy.googleToken || {};
        var a = na();
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = oy.googleIMState = oy.googleIMState || {};
        a = Z[1];
        ly.test(a) && !my.test(a) || (Z[1] = ".google.com");
        Array.isArray(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        Array.isArray(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    };
    var ry = a => {
        qy();
        ly.test(a) && !my.test(a) && (Z[1] = a)
    };
    const sy = {
            Kb: () => 0 < Z[8],
            Vd: () => {
                Z[8]++
            },
            Wd: () => {
                0 < Z[8] && Z[8]--
            },
            Xd: () => {
                Z[8] = 0
            },
            Kh: () => !1,
            kc: () => Z[5],
            ac: a => {
                try {
                    a()
                } catch (b) {
                    r.setTimeout(() => {
                        throw b;
                    }, 0)
                }
            },
            Ac: () => {
                if (!sy.Kb()) {
                    var a = r.document,
                        b = e => {
                            e = py(e);
                            a: {
                                try {
                                    var f = yc();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            ky(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = () => r.processGoogleToken({}, 2);
                            e = mg(e);
                            Xd(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), sy.Vd()
                            } catch (g) {}
                        },
                        c = Z[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    var d = {
                        ["newToken"]: "FBT"
                    };
                    r.setTimeout(() => r.processGoogleToken(d, 1), 1E3)
                }
            }
        },
        ty = a => {
            qy();
            const b = oy.googleToken[5] || 0;
            a && (0 != b || Y[3] >= na() ? sy.ac(a) : (sy.kc().push(a), sy.Ac()));
            Y[3] >= na() && Y[2] >= na() || sy.Ac()
        };
    var vy = a => {
        r.processGoogleToken = r.processGoogleToken || ((b, c) => uy(b, c));
        ty(a)
    };
    const uy = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        qy();
        1 == b ? sy.Xd() : sy.Wd();
        var h = oy.googleToken = oy.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !sy.Kb() && (!(Y[3] >= na()) || "NT" == Y[1]);
        var l = !(Y[3] >= na()) && 0 != b;
        if (k || d || l) d = na(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Qf(r, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, qy();
        if (k || !sy.Kb()) {
            b = sy.kc();
            for (c = 0; c < b.length; c++) sy.ac(b[c]);
            b.length = 0
        }
    };
    const wy = /[+, ]/;
    var zy = (a, b, c) => {
            const d = a.G;
            var e = N().document,
                f = {},
                g = N(),
                h;
            var k = ol(N(), !1).ca;
            var l = sl(k);
            var m = h = ql(N(), e, d.google_ad_width, d.google_ad_height);
            l = l.qb;
            var n = N();
            n = n.top == n ? 0 : af(n.top) ? 1 : 2;
            let p = 4;
            m || 1 != n ? m || 2 != n ? m && 1 == n ? p = 7 : m && 2 == n && (p = 8) : p = 6 : p = 5;
            l && (p |= 16);
            m = "" + p;
            l = tl();
            n = !!d.google_page_url;
            f.google_iframing = m;
            0 != l && (f.google_iframing_environment = l);
            if (!n && "ad.yieldmanager.com" == e.domain) {
                for (m = e.URL.substring(e.URL.lastIndexOf("http")); - 1 < m.indexOf("%");) try {
                    m = decodeURIComponent(m)
                } catch (v) {
                    break
                }
                d.google_page_url = m;
                n = !!m
            }
            n ? (f.google_page_url = d.google_page_url, f.google_page_location = (h ? e.referrer : e.URL) || "EMPTY") : (h && af(g.top) && e.referrer && g.top.document.referrer === e.referrer ? f.google_page_url = g.top.document.URL : f.google_page_url = h ? e.referrer : e.URL, f.google_page_location = null);
            if (e.URL === f.google_page_url) try {
                var q = Math.round(Date.parse(e.lastModified) / 1E3) || null
            } catch (v) {
                q = null
            } else q = null;
            f.google_last_modified_time = q;
            e = k == k.top ? k.document.referrer : (e = bg()) && e.referrer || "";
            f.google_referrer_url = e;
            rl(f, d);
            f =
                d.google_page_location || d.google_page_url;
            "EMPTY" == f && (f = d.google_page_url);
            f ? (f = f.toString(), 0 == f.indexOf("http://") ? f = f.substring(7, f.length) : 0 == f.indexOf("https://") && (f = f.substring(8, f.length)), e = f.indexOf("/"), -1 == e && (e = f.length), f = f.substring(0, e).split("."), e = !1, 3 <= f.length && (e = f[f.length - 3] in Yx), 2 <= f.length && (e = e || f[f.length - 2] in Yx), f = e) : f = !1;
            f = f ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
            b = xy(a, c, b);
            c = a.G;
            e = c.google_ad_channel;
            g = "/pagead/ads?";
            "ca-pub-6219811747049371" ===
            c.google_ad_client && yy.test(e) && (g = "/pagead/lopri?");
            c = es(f, g);
            a = pd(a.X, 9) && d.google_debug_params ? d.google_debug_params : "";
            a = Gg(b, c + a);
            return d.google_ad_url = a
        },
        Ay = a => encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + Fg({
            ["adk"]: a.google_ad_unit_key,
            ["client"]: a.google_ad_client,
            ["fa"]: a.google_reactive_ad_format
        }),
        By = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = Me(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && af(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b =
                null
            }
            else b = null;
            return b
        },
        Cy = (a, b) => {
            b.eid = Fk(a.pubWin);
            const c = a.G.google_loeid;
            "string" === typeof c && (a.j |= 4096, b.loeid = c)
        },
        Dy = (a, b) => {
            a = (a = Tg(a.pubWin)) && a.document ? Jk(a.document, a) : new Fe(-12245933, -12245933);
            b.scr_x = Math.round(a.x);
            b.scr_y = Math.round(a.y)
        };
    const Ey = a => {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var Fy = a => {
        const b = gh();
        b && (a.debug_experiment_id = b);
        a.creatives = Ey(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = Ey(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    };

    function Gy(a, b, c, d) {
        const e = a.G;
        var f = a.pubWin,
            g = a.N,
            h = pl();
        c.ref = e.google_referrer_url;
        c.loc = e.google_page_location;
        var k;
        (k = bg(f)) && ca(k.data) && "string" === typeof k.data.type ? (k = k.data.type.toLowerCase(), k = "doubleclick" == k || "adsense" == k ? null : k) : k = null;
        k && (c.apn = k.substr(0, 10));
        h = 0 < T(Qh) && a.Ha ? {
            url: a.Ha,
            qb: !0
        } : sl(h);
        c.url || c.loc || !h.url || (c.url = h.url, h.qb || (c.usrc = 1));
        k = e.google_trust_token_additional_signing_data || {};
        k.url = c.url;
        e.google_trust_token_additional_signing_data = k;
        h.url != (c.loc || c.url) &&
            (c.top = h.url);
        Qv && Lv(Qv) ? h = Qv : (h = pl(), k = h.google_jobrunner, h = Mv(k) ? Qv = k : h.google_jobrunner = Qv = new Ov(h));
        (h = Cg(h.tc) ? h.tc() : null) && (c.jtc = h);
        0 <= a.A && (c.eae = a.A);
        d = g ? Uv(d, g) : null;
        (d = vs(e, g, d)) && (c.fc = d);
        if (!Sg(e)) {
            d = a.pubWin.document;
            h = "";
            if (d.documentMode && (k = Ye(new Ie(d), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", d.body)) {
                d.body.appendChild(k);
                try {
                    var l = k.contentWindow.document;
                    l.open();
                    l.write(kc(tc));
                    l.close();
                    h += l.documentMode
                } catch (X) {}
                d.body.removeChild(k)
            }
            c.docm =
                h
        }
        let m, n, p, q, v, u, B, F, G, I;
        try {
            m = f.screenX, n = f.screenY
        } catch (X) {}
        try {
            p = f.outerWidth, q = f.outerHeight
        } catch (X) {}
        try {
            v = f.innerWidth, u = f.innerHeight
        } catch (X) {}
        try {
            B = f.screenLeft, F = f.screenTop
        } catch (X) {}
        try {
            v = f.innerWidth, u = f.innerHeight
        } catch (X) {}
        try {
            G = f.screen.availWidth, I = f.screen.availTop
        } catch (X) {}
        c.brdim = [B, F, m, n, G, I, p, q, v, u].join();
        l = 0;
        void 0 === r.postMessage && (l |= 1);
        0 < l && (c.osd = l);
        c.vis = Zk(f.document);
        b && (b = vl(e) ? Kx : yx(new Ix(f, b, null, {
                width: 0,
                height: 0
            }, e.google_ad_width, e.google_ad_height, !1)),
            c.rsz = b.toString(), c.abl = lx(b));
        if (!vl(e) && (b = Ug(e))) {
            f = 0;
            a: {
                try {
                    {
                        var C = e.google_async_iframe_id;
                        const X = N().document;
                        if (C) var E = X.getElementById(C);
                        else {
                            var da = X.getElementsByTagName("script"),
                                hb = da[da.length - 1];
                            E = hb && hb.parentNode || null
                        }
                    }
                    if (C = E) {
                        E = [];
                        da = 0;
                        for (var ya = Date.now(); 100 >= ++da && 50 > Date.now() - ya && (C = By(C));) 1 === C.nodeType && E.push(C);
                        var U = E;
                        b: {
                            for (ya = 0; ya < U.length; ya++) {
                                c: {
                                    var ja = U[ya];
                                    try {
                                        if (ja.parentNode && 0 < ja.offsetWidth && 0 < ja.offsetHeight && ja.style && "none" !== ja.style.display && "hidden" !==
                                            ja.style.visibility && (!ja.style.opacity || 0 !== Number(ja.style.opacity))) {
                                            const X = ja.getBoundingClientRect();
                                            var Te = 0 < X.right && 0 < X.bottom;
                                            break c
                                        }
                                    } catch (X) {}
                                    Te = !1
                                }
                                if (!Te) {
                                    var Ue = !1;
                                    break b
                                }
                            }
                            Ue = !0
                        }
                        if (Ue) {
                            b: {
                                const X = Date.now();Ue = /^html|body$/i;Te = /^fixed/i;
                                for (ja = 0; ja < U.length && 50 > Date.now() - X; ja++) {
                                    const Ve = U[ja];
                                    if (!Ue.test(Ve.tagName) && Te.test(Ve.style.position || sg(Ve, "position"))) {
                                        var yd = Ve;
                                        break b
                                    }
                                }
                                yd = null
                            }
                            break a
                        }
                    }
                } catch (X) {}
                yd = null
            }
            yd && yd.offsetWidth * yd.offsetHeight <= 4 * b.width * b.height && (f = 1);
            c.pfx = f
        }
        a: {
            if (.05 > Math.random() && g) try {
                const X = g.document.getElementsByTagName("head")[0];
                var Pn = X ? gy(X) : 0;
                break a
            } catch (X) {}
            Pn = 0
        }
        g = Pn;
        0 !== g && (c.cms = g);
        e.google_lrv !== J(a.X, 2) && (c.alvm = e.google_lrv || "none")
    }
    var Hy = (a, b) => {
            let c = 0;
            a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : bf(() => {
                c++;
                return !1
            }, !0, !0, a);
            c && (b.nhd = c)
        },
        Iy = (a, b) => {
            const c = W(b, 8, {});
            b = W(b, 9, {});
            const d = a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
        },
        Jy = (a, b, c) => {
            const d = a.G;
            var e = a.G;
            b.dt = fw;
            e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
            e = N();
            a: {
                var f = N();
                try {
                    var g = f.performance;
                    if (g && g.timing && g.now) {
                        var h = g.timing.navigationStart +
                            Math.round(g.now()) - g.timing.domLoading;
                        break a
                    }
                } catch (E) {}
                h = null
            }(e = h ? xw(h, e.Date.now() - fw, 1E6) : null) && (b.bdt = e);
            b.idt = xw(a.H, fw);
            e = a.G;
            b.shv = J(a.X, 2);
            "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
            /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
            if (e = bg(a.pubWin)) {
                b.is_amp = 1;
                h = e || bg();
                b.amp_v = h && h.mode ? +h.mode.version || null : null;
                if ((e = e || bg()) && e.container) {
                    e = e.container.split(",");
                    h = [];
                    for (g = 0; g < e.length; g++) h.push(ag[e[g]] || "x");
                    e = h.join()
                } else e =
                    null;
                e && (b.act = e)
            }
            N() == window.top && (b.abxe = 1);
            if ("_gfp_a_" in a.pubWin) {
                e = a.pubWin._gfp_a_;
                if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
                e && (e = Yv(new $v(a.pubWin), c)) && (b.cookie = e)
            }
            e = vv();
            g = W(e, 8, {});
            h = d.google_ad_section;
            g[h] && (b.prev_fmts = g[h]);
            g = W(e, 9, {});
            g[h] && (b.prev_slotnames = g[h].toLowerCase());
            Iy(d, e);
            h = W(e, 15, 0);
            0 < h && (b.nras = String(h));
            b.correlator = W(e, 7, uv());
            S(xi) && (b.rume = 1);
            if (d.google_ad_channel) {
                h = W(e, 10, {});
                g = "";
                f = d.google_ad_channel.split(wy);
                for (var k =
                        0; k < f.length; k++) {
                    var l = f[k];
                    h[l] ? g += l + "+" : h[l] = !0
                }
                b.pv_ch = g
            }
            if (d.google_ad_host_channel) {
                g = W(e, 11, []);
                f = d.google_ad_host_channel.split("|");
                e = -1;
                h = [];
                for (k = 0; k < f.length; k++) {
                    l = f[k].split(wy);
                    g[k] || (g[k] = {});
                    var m = "";
                    for (var n = 0; n < l.length; n++) {
                        var p = l[n];
                        "" !== p && (g[k][p] ? m += "+" + p : g[k][p] = !0)
                    }
                    m = m.slice(1);
                    h[k] = m;
                    "" !== m && (e = k)
                }
                g = "";
                if (-1 < e) {
                    for (f = 0; f < e; f++) g += h[f] + "|";
                    g += h[e]
                }
                b.pv_h_ch = g
            }
            b.frm = d.google_iframing;
            b.ife = d.google_iframing_environment;
            e = d.google_ad_client;
            try {
                var q = pl(),
                    v = q.google_prev_clients;
                v || (v = q.google_prev_clients = {});
                if (e in v) var u = 1;
                else v[e] = !0, u = 2
            } catch (E) {
                u = 0
            }
            b.pv = u;
            q = a.pubWin.document;
            u = a.G;
            e = Wv(c, a.pubWin) || "";
            c = q.domain;
            f = a.pubWin.screen;
            k = q.referrer;
            m = Ig();
            if (bg()) var B = N().gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                g = u.google_analytics_domain_name;
                c = "undefined" == typeof g ? Ux("auto", c) : Ux(g, c);
                n = -1 < e.indexOf("__utma=" + c + ".");
                l = -1 < e.indexOf("__utmb=" + c);
                (q = (eg() || N()).gaGlobal) || (q = {}, (eg() || N()).gaGlobal = q);
                v = !1;
                if (n) {
                    var F = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                    l ? q.sid = F[3] : q.sid || (q.sid = h + "");
                    q.vid = F[0] + "." + F[1];
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = h + "");
                    if (!q.vid) {
                        v = !0;
                        l = Math.round(2147483647 * Math.random());
                        n = Sx.appName;
                        p = Sx.version;
                        var G = Sx.language ? Sx.language : Sx.browserLanguage,
                            I = Sx.platform,
                            C = Sx.userAgent;
                        try {
                            F = Sx.javaEnabled()
                        } catch (E) {
                            F = !1
                        }
                        F = [n, p, G, I, C, F ? 1 : 0].join("");
                        f ? F += f.width + "x" + f.height + f.colorDepth : r.java && r.java.awt && (f = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), F += f.screen.width + "x" + f.screen.height);
                        F = F + e + (k || "");
                        for (f = F.length; 0 <
                            m;) F += m-- ^ f++;
                        q.vid = (l ^ Tx(F) & 2147483647) + "." + h
                    }
                    q.from_cookie = !1
                }
                if (!q.cid) {
                    b: for (h = g, F = 999, h && (h = 0 == h.indexOf(".") ? h.substr(1) : h, F = h.split(".").length), h = 999, e = e.split(";"), g = 0; g < e.length; g++)
                        if (f = Vx.exec(e[g]) || Wx.exec(e[g]) || Xx.exec(e[g])) {
                            k = f[1] || 0;
                            if (k == F) {
                                B = f[2];
                                break b
                            }
                            k < h && (h = k, B = f[2])
                        }v && B && -1 != B.search(/^\d+\.\d+$/) ? (q.vid = B, q.from_cookie = !0) : B != q.vid && (q.cid = B)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(2147483647 * Math.random()));
                B = q
            }
            b.ga_vid = B.vid;
            b.ga_sid = B.sid;
            b.ga_hid = B.hid;
            b.ga_fc = B.from_cookie;
            b.ga_cid = B.cid;
            b.ga_wpids = u.google_analytics_uacct;
            Hy(a.pubWin, b);
            (a = d.google_ad_layout) && 0 <= tv[a] && (b.rplot = tv[a])
        };
    const Ky = (a, b) => {
        a = a.B;
        var c;
        (c = null == a ? 0 : A(a, 6)) || (c = vv(), c = W(c, 26, void 0));
        c && (b.npa = 1);
        a && (md(a, 3) && (b.gdpr = A(a, 3) ? "1" : "0"), (c = y(a, 1)) && (b.us_privacy = c), (c = y(a, 2)) && (b.gdpr_consent = c), (c = y(a, 4)) && (b.addtl_consent = c), (a = y(a, 7)) && (b.tcfe = a))
    };
    var Ly = (a, b) => {
            const c = a.G;
            Ky(a, b);
            Bg(Rx, (d, e) => {
                b[d] = c[e]
            });
            vl(c) && (a = ul(c), b.fa = a);
            b.pi || null == c.google_ad_slot || (a = Vo(c), null != a.j && (a = Hm(a.j.value), b.pi = a))
        },
        My = (a, b) => {
            var c = dg() || Lk(a.pubWin.top);
            c && (b.biw = c.width, b.bih = c.height);
            c = a.pubWin;
            c.top != c && (a = Lk(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
        },
        Ny = (a, b) => {
            var c = a.pubWin;
            null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Lk(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = lf(a.join(""))) : a = 0;
            0 !== a && (b.ifk = a)
        },
        Oy = (a, b) => {
            (a = Bv()[a.G.google_ad_client]) && (b.psts = a.join())
        },
        Py = (a, b, c) => {
            a = Uv(c, a.pubWin);
            a: {
                c = -1;
                try {
                    a && (c = parseInt(a.getItem("goog_pem_mod"), 10))
                } catch (d) {
                    a = null;
                    break a
                }
                a = 0 <= c && 1E3 > c ? c : null
            }
            b.pem = a
        },
        Qy = (a, b) => {
            (a = a.pubWin.google_user_agent_client_hint) && (b.uach = ad(a))
        },
        Ry = (a, b) => {
            (a = S(Si) ? kw(a.pubWin) : a.pubWin.google_trust_token_operation_status) && 0 < a.length && (b.tt_state = ad(JSON.stringify(a)))
        },
        Sy = (a, b) => {
            if (a = a.pubWin.google_floc) b.floc_id = a.id, b.floc_ver = a.version
        },
        Ty = (a, b) => {
            try {
                const d = a.pubWin &&
                    a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                if (d) {
                    var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
                    0 <= c && (b.wsm = c + 1)
                }
            } catch (d) {}
        },
        xy = (a, b, c) => {
            const d = {};
            Ly(a, d);
            qy();
            d.adsid = Y[1];
            qy();
            d.pucrd = Y[6];
            Qy(a, d);
            Ry(a, d);
            Sy(a, d);
            Jy(a, d, c);
            Lg(d);
            b && Ch(889, () => {
                if (null == a.N) d.adx = -12245933, d.ady = -12245933;
                else {
                    var e = Mk(a.N, b);
                    d.adx && -12245933 != d.adx && d.ady && -12245933 != d.ady || (d.adx = Math.round(e.x), d.ady = Math.round(e.y));
                    Kk(b) || (d.adx = -12245933, d.ady = -12245933, a.j |= 32768)
                }
            });
            My(a, d);
            Ny(a, d);
            Dy(a, d);
            Cy(a, d);
            a.C && (d.oid = a.C);
            Oy(a, d);
            d.pvsid = Lf(a.pubWin, yh);
            Py(a, d, c);
            Ty(a, d);
            a.D && (d.scar = a.D);
            Gy(a, b, d, c);
            d.fu = a.j;
            d.bc = jy();
            qy();
            d.jar = Y[4];
            pd(a.X, 9) && Fy(d);
            Tk() && (d.atl = !0);
            d.rc = a.G.rss;
            return d
        };
    const yy = /YtLoPri/;
    var Uy = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    class Vy {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };
    Ua(Jq);
    Ua(Kq);
    var Wy = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Xy = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Yy = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        };
    const Zy = a => {
            a = (a = (new Tv(a)).get("FCCDCF", "")) ? a : null;
            try {
                return a ? xd(Wy, a) : null
            } catch (b) {
                return null
            }
        },
        $y = a => (a = Zy(a)) ? D(a, Xy, 4) : null;

    function az(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new bz(a), cz(a))
    }

    function cz(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Lq(a.j, "__uspapiLocator"), oa("__uspapi", (...b) => dz(a, ...b)))
    }

    function dz(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }
    class bz {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = Zy(this.l)) ? D(a, Yy, 5) || null : null) ? y(a, 2) : null;
            (a = $y(this.l)) && md(a, 1) && y(a, 1);
            (a = $y(this.l)) && md(a, 2) && y(a, 2)
        }
    };

    function ez(a, b, c, d) {
        var e, f, g, h, k, l, m;
        const n = new gs;
        let p = "";
        const q = v => {
            try {
                const u = "object" === typeof v.data ? v.data : JSON.parse(v.data);
                p === u.paw_id && (ae(a, "message", q), n.j(d(u)))
            } catch (u) {}
        };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (K(a, "message", q), p = c(a.gmaSdk), n.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || "function" ===
            typeof(null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (p = String(Math.floor(2147483647 * hf(a))), K(a, "message", q), b(a.webkit.messageHandlers, p), n.promise) : null
    }

    function fz(a) {
        return ez(a, (b, c) => {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function gz(a) {
        if (a.j) return a.j;
        a.j = yf(a.l, "__uspapiLocator");
        return a.j
    }

    function hz(a) {
        var b;
        return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != gz(a)
    }

    function iz(a, b) {
        var c, d;
        if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
        else if (gz(a)) {
            jz(a);
            const e = ++a.D;
            a.C[e] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }
            }, "*")
        }
    }

    function kz(a, b) {
        let c = {};
        if (hz(a)) {
            var d = Aa(() => b(c));
            iz(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function jz(a) {
        a.A || (a.A = b => {
            var c;
            try {
                let e = {};
                "string" === typeof b.data ? e = JSON.parse(b.data) : e = b.data;
                var d = e.__uspapiReturn;
                null === (c = a.C) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, K(a.l, "message", a.A))
    }
    var lz = class extends jk {
        constructor(a) {
            super();
            this.l = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (ae(this.l, "message", this.A), delete this.A);
            delete this.C;
            delete this.l;
            delete this.j;
            super.B()
        }
    };
    var mz = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var oz = class extends w {
            constructor(a) {
                super();
                x(this, a, nz, null)
            }
        },
        nz = [1, 2];
    var pz = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var qz = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function rz(a) {
        a.D || (a.l || (a.j.googlefc ? a.l = a.j : a.l = yf(a.j, "googlefcPresent")), a.D = !0);
        return !!a.l
    }

    function sz(a) {
        a.A || (a.A = b => {
            try {
                const c = xd(qz, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, K(a.j, "message", a.A))
    }

    function tz(a, b, c) {
        if (rz(a))
            if (a.l === a.j) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, d => {
                c(xd(qz, d))
            });
            else {
                sz(a);
                const d = a.F++;
                a.C[d] = c;
                a.l.postMessage({
                    ["__fciCall"]: {
                        command: b,
                        callId: d
                    }
                }, "*")
            }
    }

    function uz(a, b) {
        return new Promise(c => {
            tz(a, b, c)
        })
    }
    var vz = class extends jk {
            constructor(a) {
                super();
                this.j = a;
                this.A = this.l = null;
                this.C = {};
                this.F = 0;
                this.D = !1
            }
        },
        wz = (a, b, c, d) => {
            if (!b) return Promise.resolve(null);
            const e = D(b, mz, 3);
            b = D(b, pz, 2);
            return e && b && 1 === y(b, 1) && 2 === y(e, 1) ? uz(a, "getM25Consent").then(f => {
                var g = D(f, oz, 4);
                if (g) {
                    if (f = d, c) {
                        const h = y(g, 1);
                        h && h.includes(c) && (f = !1);
                        (g = y(g, 2)) && g.includes(c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : Promise.resolve(null)
        };
    const xz = (a, b) => {
        try {
            var c, d, e = ke(od(b, 2, 0)),
                f = J(b, 3);
            a: switch (od(b, 4, 0)) {
                case 1:
                    var g = "pt";
                    break a;
                case 2:
                    g = "cr";
                    break a;
                default:
                    g = ""
            }
            var h = new me(e, f, g),
                k = null !== (d = null === (c = D(b, je, 5)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : "";
            h.Ma = k;
            h.ca = a;
            ee(new le(h))
        } catch (l) {}
    };

    function yz(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? xz(a, b) : K(a, "load", () => void xz(a, b)))
    };

    function zz(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function Az(a) {
        const b = /^https?:\/\/[^/#?]+\/?$/;
        return !!a && !b.test(a)
    }

    function Bz(a) {
        if (a === a.top || af(a.top)) return Promise.resolve({
            status: 4
        });
        const b = zz(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Az(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new gs;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.j({
                Ha: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var Gj = fp `onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)`;

    function Cz(a, b) {
        const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
        a = a.document.getElementById(b.google_async_iframe_id + "_expand");
        if (null == c || null == a) throw Error("no_ins");
        return {
            Y: c,
            W: a
        }
    }
    var Ez = async (a, b, c) => {
            const d = c.vars,
                {
                    Y: e,
                    W: f
                } = Cz(c.pubWin, c.vars),
                g = new Ij({
                    N: Tg(c.pubWin),
                    pubWin: c.pubWin,
                    G: d,
                    X: a,
                    ga: b,
                    Y: e,
                    W: f
                });
            g.H = Date.now();
            Vk(1, [g.G]);
            try {
                await Dz(g)
            } catch (h) {
                if (!yh.ia(159, h, void 0, void 0)) throw h;
            }
            Ch(639, () => {
                {
                    var h = g.G;
                    const l = g.N;
                    if (l && 1 === h.google_responsive_auto_format && !0 === h.google_full_width_responsive_allowed) {
                        var k;
                        (k = (k = l.document.getElementById(h.google_async_iframe_id)) ? We(k, "INS", "adsbygoogle") : null) ? (h = new Kv(l, k, h), h.l = r.setInterval(la(h.F, h), 500), h.F(), h = !0) : h = !1
                    } else h = !1
                }
                return h
            });
            Ch(160, () => {
                const h = pl().google_jobrunner;
                Mv(h) && h.rl()
            });
            Ch(898, () => {
                a: {
                    var h = c.pubWin;
                    var k = c.vars;k.hasOwnProperty("adfcb") || (h = gf() ? null : Math.floor(20 * hf(h)), k.adfcb = h);k = k.adfcb;
                    if (null !== k) {
                        h = c.pubWin.top;
                        try {
                            if (!h.document.body) {
                                var l = void 0;
                                break a
                            }
                        } catch (v) {
                            l = void 0;
                            break a
                        }
                        l = c.vars.google_ad_client;
                        var m;
                        if (S(Lh) && h.performance) {
                            {
                                var n, p;
                                const v = null === (p = null === (n = h.location) || void 0 === n ? void 0 : n.hash) || void 0 === p ? void 0 : p.match(/\bgoog_cpmi=([^&]*)/);
                                if (v) {
                                    n =
                                        decodeURIComponent(v[1]);
                                    try {
                                        var q = new we(JSON.parse(n))
                                    } catch (u) {
                                        q = null
                                    }
                                } else q = null
                            }
                            if (q = q || D(a, we, 11)) n = h.document.body, null !== (m = n.classList) && void 0 !== m && m.contains && !n.hasAttribute("data-google-affiliate-annotated") && (n.setAttribute("data-google-affiliate-annotated", "1"), n = h.performance.now(), m = new Jh, p = Hh(h.document.body.innerText), m.A = p, p >= od(q, 4, 0) && Gh(h, h.document.body, q, l, k, new Fh, m), h = h.performance.now() - n, q = J(q, 1), O(P, "adfil-imp", {
                                wp: l,
                                c: k,
                                e: q,
                                n: m.l,
                                t: m.j.size,
                                w: m.A,
                                x: Math.round(h)
                            }, !0, 1, void 0))
                        }
                    }
                    l = void 0
                }
                return l
            })
        },
        Dz = a => {
            if (/_sdo/.test(a.G.google_ad_format)) return Promise.resolve();
            var b = vv(),
                c = W(b, 22, !1);
            c || (b.S[yv(22)] = !0);
            c || (Vi(Bk).j(13), Vi(Bk).j(11), b = te(a.G), (c = J(a.X, 10)) && b.push(c));
            b = vv();
            (c = W(b, 23, !1)) || (b.S[yv(23)] = !0);
            if (!c) {
                c = D(a.X, Aj, 5) || new Aj;
                b = pd(a.X, 6);
                b = new Vy(a.pubWin, a.G.google_ad_client, c, b);
                c = S(qi);
                b.l = c;
                const e = D(b.C, zj, 1);
                if (b.l) {
                    c = b.j;
                    if (b.B && !Dq(e)) {
                        var d = new Uy;
                        d = z(d, 1, 1)
                    } else d = null;
                    if (d) {
                        d = vd(d);
                        try {
                            c.localStorage.setItem("google_auto_fc_cmp_setting",
                                d)
                        } catch (f) {}
                    }
                }
                e && Eq(new Fq(b.j, new Xq(b.j, b.A), e, new kq(b.j)))
            }
            b = !bg() && !bc();
            return !b || b && !Fz(a) ? Gz(a) : Promise.resolve()
        };
    const Hz = (a, b, c) => {
        c = void 0 === c ? !1 : c;
        b = Mk(a.N, b);
        const d = dg() || Lk(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Jk(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    };

    function Fz(a) {
        return Iz(a) || Jz(a)
    }

    function Iz(a) {
        const b = a.G;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                O(P, "abg:cmppar", {
                    client: a.G.google_ad_client,
                    url: a.G.google_page_url
                }, !0, void 0, void 0)
            }, 1E4),
            d = Q(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                Fz(a) || Gz(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function Jz(a) {
        const b = a.pubWin.document,
            c = Kz();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.Y,
            e = $k(b);
        if (!e) return !1;
        if (!al(b)) return Lz(a, c.visible, d);
        const f = 3 === Zk(b);
        if (Hz(a, d) <= c.hidden && !f) return !1;
        let g = Q(332, () => {
            !al(b) && g && (ae(b, e, g), Lz(a, c.visible, d) || Gz(a), g = null)
        });
        return K(b, e, g)
    }
    async function Mz() {
        if (!cc() && !t("Edge")) {
            var a = T(bi),
                b = T(vi);
            if (!(0 >= b)) {
                var c = Fj(),
                    d = new Worker(Td(c), void 0);
                c = new Promise(f => {
                    d.addEventListener("message", g => {
                        0 <= g.data ? f() : d.postMessage({
                            a
                        })
                    })
                });
                var e = performance.now();
                await Promise.race([c, Pf(b, "timeout")]).then(f => {
                    "timeout" === f ? O(P, "adsense_td_worker_timeout", {
                        wait_ms: a,
                        timeout_ms: b
                    }, !0, void 0, void 0) : O(P, "adsense_td_worker_time", {
                        wait_ms: Math.round(performance.now() - e),
                        timeout_ms: b
                    }, !0, void 0, void 0)
                })
            }
        }
    }

    function Kz() {
        const a = {
            hidden: 0,
            visible: T(ii) || 4
        };
        if (!r.IntersectionObserver || S(ci)) a.visible = -1;
        if (Ze()) {
            const b = T(hi) || 1;
            a.visible *= b
        }
        return a
    }

    function Lz(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.G;
        if (!ck(d.google_reactive_ad_format) && (vl(d) || d.google_reactive_ads_config) || !Kk(c) || Hz(a, c) <= b) return !1;
        var e = vv();
        const f = W(e, 8, {});
        e = W(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        a.F = new r.IntersectionObserver((h, k) => {
            Ea(h, l => {
                0 >= l.intersectionRatio || (k.unobserve(l.target), Ch(294, () => {
                    Gz(a)
                }))
            })
        }, {
            rootMargin: 100 * b + "%"
        });
        a.F.observe(c);
        return !0
    }
    var Gz = async a => {
            Ch(326, () => {
                if (1 === Kg(a.G)) {
                    var c = S(Mi),
                        d = c || S(Ki),
                        e = N();
                    if (d && e === e.top) {
                        var f = new Pk;
                        d = new Qk;
                        var g = Lf(a.pubWin);
                        qd(f, 1, g, 0);
                        g = Fk(a.pubWin);
                        qd(f, 5, g, "");
                        zd(f, 2);
                        rd(d, 1, f);
                        f = new Ok;
                        f = qd(f, 10, !0, !1);
                        g = S(Di);
                        f = qd(f, 8, g, !1);
                        g = S(Ei);
                        f = qd(f, 9, g, !1);
                        g = S(Hi);
                        f = qd(f, 7, g, !1);
                        g = S(Gi);
                        f = qd(f, 13, g, !1);
                        g = S(Ii);
                        f = qd(f, 14, g, !1);
                        rd(d, 2, f);
                        e.google_rum_config = ud(d);
                        c = pd(a.X, 9) && c ? a.ga.Td : a.ga.Ud;
                        df(e.document, ob(Td(c).toString()))
                    } else oh(xh)
                }
            });
            try {
                await Nz(a)
            } catch (c) {
                yh.ia(827, c, void 0, void 0)
            }
            a.G.google_ad_channel =
                Oz(a, a.G.google_ad_channel);
            a.G.google_tag_partner = Pz(a, a.G.google_tag_partner);
            Qz(a);
            const b = a.G.google_start_time;
            "number" === typeof b && (fw = b, a.G.google_start_time = null);
            Ch(161, () => {
                const c = a.G;
                null == c.google_ad_output && (c.google_ad_output = "html");
                if (null != c.google_ad_client) {
                    var d;
                    (d = String(c.google_ad_client)) ? (d = d.toLowerCase()) && "ca-" != d.substring(0, 3) && (d = "ca-" + d): d = "";
                    c.google_ad_client = d
                }
                null != c.google_ad_slot && (c.google_ad_slot = String(c.google_ad_slot));
                if (null == c.google_flash_version) {
                    try {
                        var e =
                            Rg()
                    } catch (f) {
                        e = "0"
                    }
                    c.google_flash_version = e
                }
                c.google_webgl_support = !!M.WebGLRenderingContext;
                c.google_ad_section = c.google_ad_section || c.google_ad_region || "";
                c.google_country = c.google_country || c.google_gl || "";
                e = (new Date).getTime();
                Array.isArray(c.google_color_bg) && (c.google_color_bg = Jj(a, c.google_color_bg, e));
                Array.isArray(c.google_color_text) && (c.google_color_text = Jj(a, c.google_color_text, e));
                Array.isArray(c.google_color_link) && (c.google_color_link = Jj(a, c.google_color_link, e));
                Array.isArray(c.google_color_url) &&
                    (c.google_color_url = Jj(a, c.google_color_url, e));
                Array.isArray(c.google_color_border) && (c.google_color_border = Jj(a, c.google_color_border, e));
                Array.isArray(c.google_color_line) && (c.google_color_line = Jj(a, c.google_color_line, e))
            });
            Rz(a);
            vl(a.G) && (ej() && (a.G.google_adtest = a.G.google_adtest || "on"), a.G.google_pgb_reactive = a.G.google_pgb_reactive || 3);
            Sz(a.N);
            return Tz(a)
        },
        Rz = a => {
            a.N && (ts(a), rs(a.N.location) && Cs(a.N, {
                enable_page_level_ads: {
                    ["pltais"]: !0
                },
                google_ad_client: a.G.google_ad_client
            }))
        },
        Oz = (a, b) =>
        (b ? [b] : []).concat(se(a.G).ad_channels || []).join("+"),
        Pz = (a, b) => (b ? [b] : []).concat(se(a.G).tag_partners || []).join("+"),
        Vz = (a, b, c, d) => {
            c.src = yw(a);
            const e = d.pubWin.document;
            a = N() == window.top;
            const f = Ye(new Ie(e), "IFRAME");
            Bg(c, (g, h) => {
                null != g && f.setAttribute(h, g)
            });
            a && d.l.push(fg(d.pubWin, f));
            Uz(d.Y, f);
            S(Mh) && r.setTimeout(Q(644, () => {
                Nf(e.getElementById(b), () => {
                    r.setTimeout(() => {
                        for (const g of d.l) g();
                        d.l.length = 0
                    }, 200)
                })
            }), 0);
            return Promise.resolve(f)
        },
        Wz = (a, b, c) => 9 == a.G.google_reactive_ad_format && We(a.W,
            null, "fsi_container", void 0) ? (a.Y.appendChild(b), Promise.resolve(b)) : As(a.ga.zc, 525, d => {
            a.Y.appendChild(b);
            const e = Uv(c, a.pubWin);
            d.createAdSlot(a.N, a.G, b, a.W.parentElement, e);
            return b
        });

    function Xz(a, b, c, d) {
        yz(a.pubWin, ge(zd(zd(fe(new he, ie(new je, String(Lf(a.pubWin)))), 4), 2), J(a.X, 2)));
        const e = a.N;
        a.G.google_acr && a.G.google_acr(b);
        K(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            (a.G.ovlp || S(oi)) && e && e === a.pubWin && Yz(e, a, a.W, b)
        });
        var f = g => {
            g && a.l.push(() => g.fb())
        };
        Zz(a, b);
        !e || vl(a.G) && !wl(a.G) || (f(new Kw(a, b)), f(new Qx(e, b, a.G)), f(new Ow(a, b)), f(new Hw(a, b)), f(e.IntersectionObserver ? null : new Jw(e, b, a.Y)));
        e && (f(new ok(e, b)), a.l.push(Dv(e, a.G)), Vi(Iv).O(e), a.l.push(Aw(e,
            a.W, b)));
        S(mi) || $z(a, c, b);
        b && b.setAttribute("data-google-container-id", d);
        c = a.G.iaaso;
        null != c && (d = a.W, f = d.parentElement, (f && Pg.test(f.className) ? f : d).setAttribute("data-auto-ad-size", c));
        c = a.W;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        aA(a)
    }
    var Zz = (a, b) => {
        const c = a.pubWin,
            d = a.G.google_ad_client,
            e = Bv();
        let f = null;
        const g = Lj(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        })
    };
    const aA = a => {
            const b = bg(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    const c = e => {
                            "fill_sticky" === e.data && b.renderStart && b.renderStart()
                        },
                        d = Q(616, c);
                    K(a.pubWin, "message", d);
                    a.l.push(() => {
                        ae(a.pubWin, "message", c)
                    })
                } else b.renderStart && b.renderStart()
        },
        Yz = (a, b, c, d) => {
            Uw(new cx(a, void 0), c).then(e => {
                Vk(8, [e]);
                return e
            }).then(e => {
                const f = c.parentElement;
                (f && Pg.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(e => {
                const f = b.G.armr || "",
                    g =
                    e.executionTime || "",
                    h = null == b.G.iaaso ? "" : Number(b.G.iaaso),
                    k = Number(e.isOverlappingOrOutsideViewport),
                    l = Ga(e.entries, B => `${B.overlapType}:${B.overlapDepth}:${B.overlapDetectionPoint}`),
                    m = e.overlappedArea.toFixed(2),
                    n = d.dataset.googleQueryId || "",
                    p = m * e.targetRect.width * e.targetRect.height,
                    q = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                    v = Mg(e.target),
                    u = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
                e = e.viewportSize.width + "x" + e.viewportSize.height;
                Dh("ovlp", {
                    adf: b.G.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.G.google_ad_client,
                    eid: Fk(b.G),
                    et: g,
                    fwrattr: b.G.google_full_width_responsive,
                    iaaso: h,
                    io: k,
                    saldr: b.G.google_loader_used,
                    oa: m,
                    oe: l.join(","),
                    qid: n,
                    rafmt: b.G.google_responsive_auto_format,
                    roa: p,
                    slot: b.G.google_ad_slot,
                    sp: q,
                    tgt: v,
                    tr: u,
                    url: b.G.google_page_url,
                    vp: e
                }, 1)
            }).catch(e => {
                Vk(8, ["Error:", e.message, c]);
                O(P, "ovlp-err", {
                    err: e.message
                }, !0, 1, void 0)
            })
        };
    var bA = a => {
            var b = t("Edge") ? 4E3 : 8100;
            var c = a;
            c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            if (c !== a) {
                b -= 8;
                let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
                O(P, "trn", {
                    ol: a.length,
                    tr: -1 === d ? "" : a.substring(d + 1),
                    url: a
                }, !0, .01, void 0)
            }
            return c
        },
        cA = (a, b, c) => {
            var d = b,
                e = 0 === a.A;
            b = a.G;
            const f = b.google_async_iframe_id,
                g = b.google_ad_width,
                h = b.google_ad_height,
                k = lv(b),
                l = {
                    id: f,
                    name: f
                };
            k || (l.style = "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` +
                `height:${h}px;`);
            var m = wf();
            if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
                m = d;
                if (d = "fsb=" + encodeURIComponent("1")) {
                    var n = m.indexOf("#");
                    0 > n && (n = m.length);
                    var p = m.indexOf("?");
                    if (0 > p || p > n) {
                        p = n;
                        var q = ""
                    } else q = m.substring(p + 1, n);
                    m = [m.substr(0, p), q, m.substr(n)];
                    n = m[1];
                    m[1] = d ? n ? n + "&" + d : d : n;
                    d = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
                } else d = m;
                l.sandbox = vf().join(" ")
            }
            n = d;
            d = bA(d);
            p = e ? d.replace(/&ea=[^&]*/, "") + "&ea=0" : d;
            m = k ? d : yw(p);
            null != g && (l.width = String(g));
            null != h && (l.height =
                String(h));
            l.frameborder = "0";
            l.src = m;
            l.marginwidth = "0";
            l.marginheight = "0";
            l.vspace = "0";
            l.hspace = "0";
            l.allowtransparency = "true";
            l.scrolling = "no";
            l.allowfullscreen = "true";
            m = "";
            if (e) {
                m = 10;
                for (p = ""; 0 < m--;) p += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                m = p;
                d = Gk(d, m);
                Gk(n, m)
            } else d = p;
            b.dash && (l.srcdoc = b.dash);
            n = S(Si) ? kw(a.pubWin) : a.pubWin.google_trust_token_operation_status;
            p = b.google_trust_token_additional_signing_data;
            n && lw(n) && (n = mw(n, p)) && (l.trustToken =
                JSON.stringify(n));
            if (S(Bi)) {
                n = a.pubWin.document;
                S(Ci) ? p = (p = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) && 92 > Number(p[1]) ? "conversion-measurement" : "attribution-reporting" : p = "conversion-measurement";
                var v;
                if (null == (v = n.featurePolicy) ? 0 : v.features().includes(p)) l.allow = p
            }
            k ? (l.name = "", v = vw(l), c = Wz(a, v, c)) : c = Vz(d, f, l, a);
            e && (e = a.ga.ge.toString(), b = {
                    id: f,
                    url: d,
                    width: g,
                    height: h,
                    cc: m,
                    Rd: a.pubWin,
                    $c: f,
                    Fh: "google_expandable_ad_slot" + Kg(b),
                    Cd: e,
                    Lb: a.pubWin
                }, b = !b.id || !b.url || 0 >= b.width || 0 >= b.height ||
                !b.cc || !b.Lb ? void 0 : Qj(b.Lb, ma(Hk, b, e)), b && a.l.push(b));
            return c
        },
        $z = (a, b, c) => {
            const d = !cc() || 0 <= Cb(gc(), 11) ? il() : ll();
            d.getOseId() && (N().Goog_AdSense_getAdAdapterInstance = il, d.registerAdBlock(b, 1, "", c), a.l.push(() => {
                d.unloadAdBlock(c, !1, !0)
            }))
        };
    const fA = async (a, b) => {
            var c = a.G,
                d = a.pubWin,
                e = a.B;
            const f = Uv(e, a.pubWin);
            if (!A(e, 5) && S(Nh)) return Promise.resolve();
            A(e, 5) && ww(e, a.pubWin, a.G.google_ad_client);
            var g = a.G.google_reactive_ads_config;
            if (g) {
                zs(a.N, g);
                const h = Uv(e);
                qv(g, a, h);
                g = g.page_level_pubvars;
                ca(g) && Ya(a.G, g)
            }
            await Mz();
            A(e, 5) && await dA(a.G);
            if (!S(Ri)) {
                const h = T(Ti);
                g = d.google_trust_token_operation_promise;
                0 < h && g && await Promise.race([g, new Promise(k => void setTimeout(() => k(), h))])
            }
            g = "";
            lv(c) ? (g = a.ga.he.toString() + "#" + Ay(c), Iy(c, vv()),
                eA(c)) : (5 == c.google_pgb_reactive && c.google_reactive_ads_config || !qs(c) || ps(d, c, f)) && eA(c) && (g = zy(a, e, b));
            Vk(2, [c, g]);
            if (!g) return Promise.resolve();
            c.google_async_iframe_id || Jg(d);
            d = Kg(c);
            c = r.window === r.window.top ? "a!" + d.toString(36) : `${d.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^na()).toString(36)}`;
            b = b ? 0 < Hz(a, b, !0) : !1;
            d = {
                ["ifi"]: d,
                ["uci"]: c
            };
            b && (b = vv(), d.btvi = W(b, 21, 1), Av(b, 21));
            g = Gg(d, g);
            e = cA(a, g, e);
            g = bA(g);
            a.G.rpe && Jx(a.pubWin,
                a.Y, {
                    height: a.G.google_ad_height,
                    Xb: "force",
                    Zb: !0,
                    Cc: !0,
                    Wa: a.G.google_ad_client
                });
            e = await e;
            try {
                Xz(a, e, g, c)
            } catch (h) {
                yh.ia(223, h, void 0, void 0)
            }
        },
        dA = a => "aa" !== a.google_loader_used && "sa" !== a.google_loader_used || !(ec() ? 0 <= Cb(gc(), 11) : dc() && 0 <= Cb(gc(), 65)) ? (vy(null), Promise.resolve()) : new Promise(b => {
            vy(b.bind(null, !0))
        }),
        gA = a => {
            const b = new lz(a);
            return new Promise(c => {
                kz(b, d => {
                    d && "string" === typeof d.uspString ? c(d.uspString) : c()
                })
            })
        },
        hA = a => {
            let b = T(Rh);
            0 > b && (b = -1);
            a = new Vq(a, b);
            return Pq(a) ? Uq(a) : Promise.resolve()
        },
        iA = a => {
            var b = xf(r.top, "googlefcPresent");
            r.googlefc && !b && O(P, "adsense_fc_has_namespace_but_no_iframes", {
                publisherId: a
            }, !0, 1, void 0)
        },
        jA = a => rz(a) ? uz(a, "loaded") : Promise.resolve(),
        kA = (a, b) => {
            const c = b.ee,
                d = b.uspString;
            b = b.Yd;
            const e = new Hj;
            if (c) {
                if (Nq(c))
                    if (!1 !== c.gdprApplies && "tcunavailable" !== c.tcString && void 0 !== c.gdprApplies && "string" === typeof c.tcString && c.tcString.length) {
                        b: {
                            if (c.publisher && c.publisher.restrictions) {
                                var f = c.publisher.restrictions["1"];
                                if (void 0 !== f) {
                                    f = f["755"];
                                    break b
                                }
                            }
                            f = void 0
                        }
                        0 ===
                        f ? f = !1 : c.purpose && c.vendor ? (f = c.vendor.consents, (f = !(!f || !f["755"])) && c.purposeOneTreatment && ("DE" === c.publisherCC || S(zi) && "CH" === c.publisherCC) ? f = !0 : f && (f = c.purpose.consents, f = !(!f || !f["1"]))) : f = !0
                    }
                else f = !0;
                else f = !1;
                f = z(e, 5, f);
                f = z(f, 2, c.tcString);
                f = z(f, 4, c.addtlConsent || "");
                z(f, 7, c.internalErrorState);
                void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies)
            } else z(e, 5, !0);
            d && z(e, 1, d);
            null !== b && z(e, 6, b);
            a.B = e
        },
        lA = a => {
            var b = T(Ph);
            return 0 >= b ? Promise.resolve() : Promise.race([Ch(809, () => fz(a)), Pf(b)])
        },
        mA = a => {
            var b =
                T(Qh);
            if (0 >= b) return Promise.resolve();
            const c = hh();
            return Promise.race([Ch(832, () => Bz(a)), Pf(b)]).then(d => {
                let e;
                var f = {
                    etus: null != (e = null == d ? void 0 : d.status) ? e : 100,
                    sig: hh() - c,
                    tms: b
                };
                O(P, "afc_etu", f, !0, void 0, void 0);
                return null == d ? void 0 : d.Ha
            })
        },
        nA = a => {
            var b = T(Ti);
            return Promise.race([Q(779, () => {
                sw(new tw(() => {}, a))
            }), Pf(b)])
        };
    async function oA(a, b) {
        ny = N;
        ry(J(a.X, 8));
        az(a.pubWin);
        iA(a.G.google_ad_client);
        var c = new vz(a.pubWin),
            d = await jA(c);
        c = [hA(a.pubWin), gA(a.pubWin), wz(c, d, a.G.google_ad_client, pd(a.X, 6))];
        c = await Promise.all(c);
        kA(a, {
            ee: c[0],
            uspString: c[1],
            Yd: c[2]
        });
        S(Ri) && await nA(!!A(a.B, 5));
        c = lA(a.pubWin);
        d = Ch(868, () => mA(a.pubWin));
        a.D = await c || "";
        a.Ha = await d || "";
        await fA(a, b)
    }
    var Tz = a => {
        var b = a.G.google_ad_width,
            c = a.G.google_ad_height,
            d = a.pubWin.document,
            e = a.G;
        let f = 0;
        try {
            !1 === e.google_allow_expandable_ads && (f |= 1);
            if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || !/^http/.test(d.location.protocol)) f |= 2;
            a: {
                e = navigator;
                const h = e.userAgent,
                    k = e.platform,
                    l = /WebKit\/(\d+)/,
                    m = /rv:(\d+\.\d+)/,
                    n = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(h)) {
                    const p = (l.exec(h) || [0, 0])[1],
                        q = (m.exec(h) || [0, 0])[1];
                    if (/Win/.test(k) && /Trident/.test(h) &&
                        11 <= d.documentMode || !p && "Gecko" === e.product && 27 <= q && !n.test(h) || 536 <= p) {
                        var g = !0;
                        break a
                    }
                }
                g = !1
            }
            g || (f |= 4)
        } catch (h) {
            f |= 8
        }
        d = f;
        ql(a.pubWin, a.pubWin.document, b, c) && (d |= 2);
        a.A = d;
        0 === a.A || (a.G.google_allow_expandable_ads = !1);
        pl() != a.pubWin && (a.j |= 4);
        3 === Zk(a.pubWin.document) && (a.j |= 32);
        if (b = a.N) b = a.N, b = !(V(b).scrollWidth <= V(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype && a.pubWin.Prototype.Version && (a.j |= 16384);
        a.G.google_loader_features_used && (a.j |= a.G.google_loader_features_used);
        S(mi) ? a.C = 2 : (b = T(pi),
            dl = hl, Yk = .02, Xk = b, b = !cc() || 0 <= Cb(gc(), 11) ? il() : ll(), c = vv(), a.C = b.setupOse(W(c, 7, uv())));
        return oA(a, a.G.google_async_iframe_id ? a.Y : null)
    };

    function Uz(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }
    var eA = a => {
            const b = vv(),
                c = a.google_ad_section;
            vl(a) && Av(b, 15);
            if (Sg(a)) {
                if (100 < Av(b, 5)) return !1
            } else if (100 < Av(b, 6) - W(b, 15, 0) && "" == c) return !1;
            return !0
        },
        Qz = a => {
            const b = a.N;
            if (b && !se(b).ads_density_stats_processed && !bg(b) && (se(b).ads_density_stats_processed = !0, S(ni) || .01 > hf(b))) {
                const c = () => {
                    if (b) {
                        var d = eu($t(b), a.G.google_ad_client, b.location.hostname, Fk(a.G).split(","));
                        O(P, "ama_stats", d, !0, 1, void 0)
                    }
                };
                "complete" === b.document.readyState ? r.setTimeout(c, 1E3) : K(b, "load", () => {
                    r.setTimeout(c, 1E3)
                })
            }
        },
        Sz = a => {
            a && !se(a).host_pinged_back && (se(a).host_pinged_back = !0, O(P, "abg_host", {
                host: a.location.host
            }, !0, .01, void 0))
        },
        Nz = async a => {
            const b = a.pubWin.document;
            if ("function" === typeof b.interestCohort && S(yi)) {
                const c = T(Ai),
                    d = await Promise.race([(async () => {
                        const e = performance.now(),
                            f = await b.interestCohort();
                        O(P, "flocapi", {
                            time: performance.now() - e
                        }, !0, 1, void 0);
                        return f
                    })(), new Promise(e => void setTimeout(() => e(), c))]);
                d && (a.pubWin.google_floc = d)
            }
        };
    ((a, b, c) => {
        Ch(843, () => {
            var d = r.google_sl_win || r;
            if (!d.google_sa_impl) {
                var e = Sv(a);
                Jv(yh, J(e, 2));
                Vk(16, [3, ud(e)]);
                var f = c(b, e);
                d.google_sa_impl = async g => {
                    await Ez(e, f, g)
                };
                Ek(zk(d));
                d.google_process_slots && d.google_process_slots();
                d = (r.Prototype || {}).Version;
                null != d && Dh("prtpjs", {
                    version: d
                })
            }
        })
    })(Rv, "m202107130101", function(a, b) {
        const c = 2012 < od(b, 1, 0) ? `_fy${od(b,1,0)}` : "";
        J(b, 3);
        const d = J(b, 3).replace(/^\//, ""),
            e = J(b, 2);
        return {
            Ud: Dj `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum${c}.js`,
            Td: Dj `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum_debug${c}.js`,
            zc: a ? Dj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js` : Dj `https://pagead2.googlesyndication.com/pagead/js/${J(b,2)}/${d}/reactive_library${c}.js`,
            qd: a ? Dj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js` : Dj `https://pagead2.googlesyndication.com/pagead/js/${J(b,2)}/${d}/debug_card_library${c}.js`,
            ge: Dj `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/creativetoolset/xpc_expansion_embed.js`,
            he: Dj `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`
        }
    });
}).call(this, "[2019,\"r20210712\",\"\/r20110914\",null,[],null,null,\".google.co.in\",null,null,[]]");