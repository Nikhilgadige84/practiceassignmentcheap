(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

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

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ia = {};

    function r(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ja("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function la(a) {
        return a.raw = a
    }

    function u(a) {
        var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ma(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (ha && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function w(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.xb = b.prototype
    }

    function ta(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ja("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = u(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ta(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ta(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ta(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    ja("Map", function(a) {
        function b() {
            var h = {};
            return h.I = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.g;
            return ka(function() {
                if (l) {
                    for (; l.head != h.g;) l = l.I;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.h[l];
            if (m && ta(h.h, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        u: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
            }
        }

        function e(h) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this.g,
                I: this.g.I,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.u), this.g.I.next = l.u, this.g.I = l.u, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.u.I.next = h.u.next, h.u.next.I = h.u.I, h.u.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.h = {};
            this.g = this.g.I = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).u
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ua(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ja("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    ja("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    ja("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var wa = ha && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ta(d, e) && (a[e] = d[e])
        }
        return a
    };
    ja("Object.assign", function(a) {
        return a || wa
    }, "es6");
    ja("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.s = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.l()
                })
            }
            this.g.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.j = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.j = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.L),
                reject: g(this.l)
            }
        };
        b.prototype.L = function(g) {
            if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.O(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.K(g) : this.m(g)
            }
        };
        b.prototype.K = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.l(k);
                return
            }
            "function" == typeof h ? this.aa(h, g) : this.m(g)
        };
        b.prototype.l = function(g) {
            this.C(2, g)
        };
        b.prototype.m = function(g) {
            this.C(1, g)
        };
        b.prototype.C = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.M();
            this.N()
        };
        b.prototype.M = function() {
            var g = this;
            e(function() {
                if (g.J()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.J =
            function() {
                if (this.s) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i;
                return k(g)
            };
        b.prototype.N = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.O = function(g) {
            var h = this.j();
            g.ca(h.resolve, h.reject)
        };
        b.prototype.aa = function(g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(t, v) {
                return "function" == typeof t ? function(A) {
                    try {
                        l(t(A))
                    } catch (H) {
                        m(H)
                    }
                } : v
            }
            var l, m, q = new b(function(t, v) {
                l = t;
                m = v
            });
            this.ca(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ca = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.s = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).ca(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(A) {
                    return function(H) {
                        t[A] = H;
                        v--;
                        0 == v && l(t)
                    }
                }
                var t = [],
                    v = 0;
                do t.push(void 0), v++, d(k.value).ca(q(t.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ja("Set", function(a) {
        function b(c) {
            this.g = new p.Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return r(this.g, "values").call(this.g)
        };
        b.prototype.keys = r(b.prototype,
            "values");
        b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    ja("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ja("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function za(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Aa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ca = 0;

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
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

    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Fa = Da : Fa = Ea;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ha(a) {
        var b = ["__uspapi"],
            c = x;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ia(a) {
        return a
    };
    var Ja = (new Date).getTime();
    var Ka;

    function La(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ma(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Na(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Oa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Pa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Qa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ra(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Sa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ta(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    };

    function Va(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Wa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        return null !== a && b in a
    }

    function Ya(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Za;

    function $a() {
        if (void 0 === Za) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                Za = a
            } else Za = a
        }
        return Za
    };

    function ab(a, b) {
        this.h = a === bb && b || "";
        this.g = cb
    }
    var cb = {},
        bb = {};

    function db(a, b) {
        this.g = b === eb ? a : ""
    }
    db.prototype.toString = function() {
        return this.g + ""
    };

    function fb(a) {
        return a instanceof db && a.constructor === db ? a.g : "type_error:TrustedResourceUrl"
    }
    var gb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        eb = {};

    function hb(a) {
        var b = $a();
        a = b ? b.createScriptURL(a) : a;
        return new db(a, eb)
    }

    function ib(a, b, c) {
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

    function jb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function kb(a, b) {
        var c = 0;
        a = jb(String(a)).split(".");
        b = jb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = lb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || lb(0 == f[2].length, 0 == g[2].length) || lb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function lb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var mb;
    a: {
        var nb = x.navigator;
        if (nb) {
            var ob = nb.userAgent;
            if (ob) {
                mb = ob;
                break a
            }
        }
        mb = ""
    }

    function y(a) {
        return -1 != mb.indexOf(a)
    }

    function pb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function qb() {
        function a(e) {
            e = Sa(e, d);
            return c[e] || ""
        }
        var b = mb;
        if (y("Trident") || y("MSIE")) return rb(b);
        b = pb(b);
        var c = {};
        b.forEach(function(e) {
            c[e[0]] = e[1]
        });
        var d = Ga(Xa, c);
        return y("Opera") ? a(["Version", "Opera"]) : y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : !y("Chrome") && !y("CriOS") || y("Edge") ? (b = b[2]) && b[1] || "" : a(["Chrome", "CriOS", "HeadlessChrome"])
    }

    function rb(a) {
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

    function sb(a, b, c) {
        this.g = c === tb ? a : ""
    }
    sb.prototype.toString = function() {
        return this.g.toString()
    };

    function ub(a) {
        return a instanceof sb && a.constructor === sb ? a.g : "type_error:SafeHtml"
    }
    var tb = {};

    function vb(a) {
        var b = $a();
        a = b ? b.createHTML(a) : a;
        return new sb(a, null, tb)
    }
    var wb = new sb(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, tb);
    var xb = Ma(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ub(wb);
        return !b.parentElement
    });

    function yb(a, b) {
        if (xb())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = ub(b)
    };

    function zb(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Ab(a) {
        Ab[" "](a);
        return a
    }
    Ab[" "] = function() {};
    var Bb = {},
        Cb = null;

    function Db(a) {
        var b;
        void 0 === b && (b = 0);
        if (!Cb) {
            Cb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Bb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Cb[h] && (Cb[h] = g)
                }
            }
        }
        b = Bb[b];
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
    };
    var Eb = "function" === typeof Uint8Array;

    function Fb(a, b, c) {
        return "object" === typeof a ? Eb && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Gb(a, b, c) : b(a)
    }

    function Gb(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = Fb(f, b, c))
            }
            Array.isArray(a) && a.eb && Hb(d);
            return d
        }
        d = {};
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Fb(f, b, c)));
        return d
    }

    function Ib(a) {
        return Gb(a, function(b) {
            return "number" === typeof b ? isFinite(b) ? b : String(b) : b
        }, function(b) {
            return Db(b)
        })
    }
    var Jb = {
        eb: {
            value: !0,
            configurable: !0
        }
    };

    function Hb(a) {
        Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Jb);
        return a
    };

    function z() {}
    var Kb;

    function Lb(a, b) {
        Kb = b;
        a = new a(b);
        Kb = null;
        return a
    }

    function B(a, b, c, d) {
        a.g = null;
        Kb && (b || (b = Kb), Kb = null);
        var e = a.constructor.messageId;
        b || (b = e ? [e] : []);
        a.j = e ? 0 : -1;
        a.h = b;
        a: {
            if (b = a.h.length)
                if (--b, e = a.h[b], !(null === e || "object" != typeof e || Array.isArray(e) || Eb && e instanceof Uint8Array)) {
                    a.l = b - a.j;
                    a.i = e;
                    break a
                }
            a.l = Number.MAX_VALUE
        }
        a.m = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (e = c[b], e < a.l) {
                    e += a.j;
                    var f = a.h[e];
                    f ? Hb(f) : a.h[e] = Mb
                } else Nb(a), (f = a.i[e]) ? Hb(f) : a.i[e] = Mb;
        if (d && d.length)
            for (c = 0; c < d.length; c++) Ob(a, d[c])
    }
    var Mb = Object.freeze(Hb([]));

    function Nb(a) {
        var b = a.l + a.j;
        a.h[b] || (a.i = a.h[b] = {})
    }

    function C(a, b) {
        if (b < a.l) {
            b += a.j;
            var c = a.h[b];
            return c !== Mb ? c : a.h[b] = Hb([])
        }
        if (a.i) return c = a.i[b], c !== Mb ? c : a.i[b] = Hb([])
    }

    function Pb(a, b) {
        a = C(a, b);
        return null == a ? a : !!a
    }

    function D(a, b, c) {
        a = C(a, b);
        return null == a ? c : a
    }

    function Qb(a, b, c) {
        c = void 0 === c ? !1 : c;
        a = Pb(a, b);
        return null == a ? c : a
    }

    function Rb(a, b) {
        var c = void 0 === c ? 0 : c;
        a = C(a, b);
        a = null == a ? a : +a;
        return null == a ? c : a
    }

    function Sb(a, b, c) {
        b < a.l ? a.h[b + a.j] = c : (Nb(a), a.i[b] = c);
        return a
    }

    function Ob(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = C(a, f);
            null != g && (c = f, d = g, Sb(a, f, void 0))
        }
        return c ? (Sb(a, c, d), c) : 0
    }

    function E(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            var d = C(a, c);
            d && (a.g[c] = new b(d))
        }
        return a.g[c]
    }

    function G(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            for (var d = C(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.g[c] = e
        }
        b = a.g[c];
        b == Mb && (b = a.g[c] = []);
        return b
    }

    function Tb(a) {
        if (a.g)
            for (var b in a.g)
                if (Object.prototype.hasOwnProperty.call(a.g, b)) {
                    var c = a.g[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Ub(c[d]);
                    else c && Ub(c)
                }
    }

    function Ub(a) {
        Tb(a);
        return a.h
    }

    function Vb(a) {
        Tb(a);
        return Ib(a.h)
    }

    function Wb(a, b) {
        switch (typeof b) {
            case "number":
                return isFinite(b) ? b : String(b);
            case "object":
                if (Eb && null != b && b instanceof Uint8Array) return Db(b)
        }
        return b
    };

    function Xb(a) {
        B(this, a, Yb, null)
    }
    w(Xb, z);

    function Zb(a) {
        B(this, a, null, null)
    }
    w(Zb, z);
    var Yb = [2, 3];

    function I(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function $b(a) {
        a = I(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ba: !0,
            nb: b,
            ka: a.ablation_viewport_offset
        } : null
    }

    function ac(a) {
        a = I(a);
        a.eids || (a.eids = []);
        return a.eids
    }

    function bc(a, b) {
        a = I(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function cc(a, b) {
        a = I(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function dc(a) {
        I(J).allow_second_reactive_tag = a
    };

    function ec(a) {
        return !!a
    }

    function fc(a) {
        if (!(gc || ec)(a)) throw Error(String(a));
    };

    function hc(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function jc(a) {
        var b = J.document;
        if (b.currentScript) return hc(b.currentScript, a);
        b = u(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === hc(c.value, a)) return 0;
        return 1
    };
    var K = {},
        kc = (K.google_ad_channel = !0, K.google_ad_client = !0, K.google_ad_host = !0, K.google_ad_host_channel = !0, K.google_adtest = !0, K.google_tag_for_child_directed_treatment = !0, K.google_tag_for_under_age_of_consent = !0, K.google_tag_partner = !0, K.google_restrict_data_processing = !0, K.google_page_url = !0, K.google_debug_params = !0, K.google_adbreak_test = !0, K.google_ad_frequency_hint = !0, K.google_admob_interstitial_slot = !0, K.google_admob_rewarded_slot = !0, K.google_max_ad_content_rating = !0, K);
    var lc = {};

    function mc() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var nc;

    function oc() {
        var a, b;
        void 0 === nc && (nc = null !== (b = null === (a = mc()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: function(c) {
                return c
            },
            createScript: function(c) {
                return c
            },
            createScriptURL: function(c) {
                return c
            }
        })) && void 0 !== b ? b : null);
        return nc
    };

    function pc() {}

    function qc(a, b) {
        if (b !== lc) throw Error("Bad secret");
        this.g = a
    }
    w(qc, pc);
    qc.prototype.toString = function() {
        return this.g.toString()
    };

    function rc(a) {
        var b, c = null === (b = oc()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new qc(null !== c && void 0 !== c ? c : a, lc)
    }

    function sc(a) {
        var b;
        if (null === (b = mc()) || void 0 === b ? 0 : b.isScriptURL(a)) return a;
        if (a instanceof qc) return a.g;
        throw Error("wrong type");
    };

    function tc(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError("trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === c.length) return rc(a[0]);
        d = a[0].toLowerCase();
        if (/^data:/.test(d)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(d) || /^\/\//.test(d)) {
            var e = d.indexOf("//") + 2;
            var f = d.indexOf("/",
                e);
            if (f <= e) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            e = d.substring(e, f);
            if (!/^[0-9a-z.:-]+$/i.test(e)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(e)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(e)) throw Error("The top-level domain must start with a letter.");
            e = !0
        } else e = !1;
        if (e = !e) {
            if (/^\//.test(d))
                if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1]) e = !0;
                else throw Error("The path start in the url is invalid.");
            else e = !1;
            e = !e
        }
        if (e) {
            if (/^about:blank/.test(d)) {
                if ("about:blank" !== d && !/^about:blank#/.test(d)) throw Error("The about url is invalid.");
                d = !0
            } else d = !1;
            e = !d
        }
        if (e) throw Error("Trying to interpolate expressions in an unsupported url format.");
        d = [a[0]];
        for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return rc(d.join(""))
    };
    var uc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        vc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        wc = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        xc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        yc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        zc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
            "/show_ads_impl_with_ama", ".js"
        ]),
        Ac = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        Bc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        Cc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);
    var Dc = document,
        J = window;
    var Ec = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Fc(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Gc(a) {
        return a instanceof pc ? sc(a) : fb(a)
    };

    function Hc(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Ic(a) {
        return !!(a.error && a.meta && a.id)
    };

    function Jc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Kc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Lc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Mc(a) {
        this.g = a || x.document || document
    }
    Mc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Nc() {
        return !Oc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Oc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Pc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Qc = /#|$/;

    function Rc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ab(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Sc(a, b) {
        var c = a.createElement("script");
        c.src = Gc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        (d = (b = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Tc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Uc(a, b) {
        if (!Vc() && !Wc()) {
            var c = Math.random();
            if (c < b) return c = Xc(x), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Xc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Yc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Zc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Wc = Ma(function() {
        return Ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], $c) || 1E-4 > Math.random()
    });

    function ad(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function bd(a, b, c) {
        a = Wc() ? null : Math.floor(1E3 * Xc(a));
        var d;
        if (d = null != a && b) a: {
            var e = String(a);
            try {
                if (b) {
                    b.setItem(c, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? a : null
    }
    var Vc = Ma(function() {
        return $c("MSIE")
    });

    function $c(a) {
        return -1 != mb.indexOf(a)
    }
    var cd = /^([0-9.]+)px$/,
        dd = /^(-?[0-9.]{1,30})$/;

    function ed(a) {
        return dd.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function L(a) {
        return (a = cd.exec(a)) ? +a[1] : null
    }

    function fd(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var gd = Ma(function() {
        return Nc() ? 2 : Oc() ? 1 : 0
    });

    function hd(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? Yc(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = jd(kd(ld(a.style.cssText), md(b, function(c) {
            return c + " !important"
        })))
    }
    var kd = r(Object, "assign") || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function md(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function jd(a) {
        var b = [];
        Yc(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function ld(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            Oa((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    }
    var nd = [];

    function od() {
        var a = nd;
        nd = [];
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function pd(a, b) {
        b = void 0 === b ? window.document : b;
        0 != a.length && b.head && a.forEach(function(c) {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = document.createElement("meta");
                    d.head.appendChild(e);
                    e.httpEquiv = "origin-trial";
                    e.content = c
                }
            }
        })
    }

    function qd(a) {
        "complete" === Dc.readyState || "interactive" === Dc.readyState ? (nd.push(a), 1 == nd.length && (p.Promise ? p.Promise.resolve().then(od) : window.setImmediate ? setImmediate(od) : setTimeout(od, 0))) : Dc.addEventListener("DOMContentLoaded", a)
    };

    function rd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function sd(a) {
        return (a = a || rd()) ? Rc(a.master) ? a.master : null : null
    };

    function td(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(f) {
                c && c(f);
                Kc(d, "load", e);
                Kc(d, "error", e)
            };
            Jc(d, "load", e);
            Jc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function ud(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Yc(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        vd(c)
    }

    function vd(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : td(b, a, null)
    };

    function wd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function xd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function yd(a) {
        var b = void 0 === b ? 1 : b;
        a = sd(rd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function zd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var Ad = !!window.google_async_iframe_id,
        Bd = Ad && window.parent || window;

    function Cd() {
        if (Ad && !Rc(Bd)) {
            var a = "." + Dc.domain;
            try {
                for (; 2 < a.split(".").length && !Rc(Bd);) Dc.domain = a = a.substr(a.indexOf(".") + 1), Bd = window.parent
            } catch (b) {}
            Rc(Bd) || (Bd = window)
        }
        return Bd
    }
    var Dd = /(^| )adsbygoogle($| )/;

    function Ed() {
        var a = void 0 === a ? J : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Fd(a) {
        a = a.top;
        return Rc(a) ? a : null
    };

    function Gd(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Hd(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Hd(a) {
        var b = "";
        wd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function gc(a) {
        return "string" === typeof a
    };

    function Id(a) {
        B(this, a, Jd, Kd)
    }
    w(Id, z);
    var Jd = [2, 8],
        Kd = [
            [3, 4, 5],
            [6, 7]
        ];
    var Ld;
    Ld = {
        sb: 0,
        Ta: 3,
        Ua: 4,
        Va: 5
    };
    var Md = Ld.Ta,
        Nd = Ld.Ua,
        Od = Ld.Va;

    function Pd(a) {
        return null != a ? !a : a
    }

    function Qd(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Rd(a, b) {
        var c = G(a, Id, 2);
        if (!c.length) return Sd(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Pd(Rd(c[0], b));
        c = Qa(c, function(d) {
            return function() {
                return Rd(d, b)
            }
        });
        switch (a) {
            case 2:
                return Qd(c, !1);
            case 3:
                return Qd(c, !0)
        }
    }

    function Sd(a, b) {
        var c = Ob(a, Kd[0]);
        a: {
            switch (c) {
                case Md:
                    var d = D(a, 3, 0);
                    break a;
                case Nd:
                    d = D(a, 4, 0);
                    break a;
                case Od:
                    d = D(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ma(C(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = D(a, 7, "");
            else a: {
                switch (c) {
                    case Nd:
                        a = Rb(a, 6);
                        break a;
                    case Od:
                        a = D(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === kb(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e >
                            a;
                    case 12:
                        return gc(a) && gc(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === kb(String(e), a);
                    case 11:
                        return null != e && 1 === kb(String(e), a)
                }
            }
        }
    }

    function Td(a, b) {
        return !a || !(!b || !Rd(a, b))
    };

    function M(a) {
        B(this, a, Ud, null)
    }
    w(M, z);
    M.prototype.getId = function() {
        return C(this, 3)
    };
    var Ud = [4];

    function Vd(a) {
        B(this, a, null, null)
    }
    w(Vd, z);

    function Wd(a) {
        B(this, a, null, null)
    }
    w(Wd, z);

    function Xd(a) {
        B(this, a, null, null)
    }
    w(Xd, z);

    function Yd(a) {
        B(this, a, Zd, null)
    }
    w(Yd, z);
    var Zd = [6, 7, 9, 10, 11];

    function $d(a) {
        B(this, a, ae, null)
    }
    w($d, z);
    var ae = [4];

    function be(a) {
        B(this, a, null, null)
    }
    w(be, z);

    function ce(a) {
        B(this, a, de, ee)
    }
    w(ce, z);
    var de = [5],
        ee = [
            [1, 2, 3, 6, 7]
        ];

    function fe(a) {
        B(this, a, ge, null)
    }
    w(fe, z);
    fe.prototype.getId = function() {
        return D(this, 1, 0)
    };
    fe.prototype.da = function() {
        return D(this, 7, 0)
    };
    var ge = [2];

    function he(a) {
        B(this, a, ie, null)
    }
    w(he, z);
    he.prototype.da = function() {
        return D(this, 5, 0)
    };
    var ie = [2];

    function je(a) {
        B(this, a, ke, null)
    }
    w(je, z);

    function le(a) {
        B(this, a, me, null)
    }
    w(le, z);
    le.prototype.da = function() {
        return D(this, 1, 0)
    };
    var ke = [1, 4, 2, 3],
        me = [2];

    function ne(a) {
        B(this, a, null, oe)
    }
    w(ne, z);
    var oe = [
        [13, 14]
    ];

    function pe(a) {
        B(this, a, null, null)
    }
    w(pe, z);

    function qe(a) {
        var b = new pe;
        return Sb(b, 5, a)
    };

    function re(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var se = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function te(a, b) {
        this.g = a;
        this.h = b
    }

    function ue(a, b, c) {
        this.url = a;
        this.W = b;
        this.Ha = !!c;
        this.depth = null
    };

    function ve() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function we(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function xe(a, b, c, d, e) {
        var f = [];
        Yc(a, function(g, h) {
            (g = ye(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ye(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(ye(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(xe(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ze(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ae(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(m, q) {
            return m - q
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = xe(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
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

    function Ae(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function Be(a, b, c, d, e, f) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof ve) var g = c;
            else g = new ve, Yc(c, function(k, l) {
                var m = g,
                    q = m.j++;
                k = we(l, k);
                m.g.push(q);
                m.h[q] = k
            });
            var h = ze(g, a.h, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? td(x, h, void 0 === f ? null : f) : td(x, h, null))
        } catch (k) {}
    };
    var Ce = null;

    function De() {
        if (null === Ce) {
            Ce = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ce = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ce
    };

    function Ee() {
        var a = x.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Fe() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ge(a, b) {
        var c = Fe() || Ee();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var He = x.performance,
        Ie = !!(He && He.mark && He.measure && He.clearMarks),
        Je = Ma(function() {
            var a;
            if (a = Ie) a = De(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Ke() {
        var a = Le;
        this.events = [];
        this.h = a || x;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Je() || (null != b ? b : 1 > Math.random())
    }

    function Me(a) {
        a && He && Je() && (He.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), He.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Ke.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new Ge(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        He && Je() && He.mark(b);
        return a
    };
    Ke.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (Fe() || Ee()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            He && Je() && He.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a)
        }
    };

    function Ne() {
        var a = Oe;
        this.l = Pe;
        this.h = null;
        this.j = this.B;
        this.g = void 0 === a ? null : a;
        this.i = !1
    }
    n = Ne.prototype;
    n.Pa = function(a) {
        this.j = a
    };
    n.oa = function(a) {
        this.h = a
    };
    n.Qa = function(a) {
        this.i = a
    };
    n.ia = function(a, b, c) {
        try {
            if (this.g && this.g.g) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Me(d), b = this.j(a, new Hc(h, {
                    message: Qe(h)
                }), void 0, c)
            } catch (k) {
                this.B(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ka = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.ia(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    n.B = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new ve;
            f.g.push(1);
            f.h[1] = we("context", a);
            Ic(b) || (b = new Hc(b, {
                message: Qe(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = we("msg", g)
            }
            var h = b.meta || {};
            if (this.h) try {
                this.h(h)
            } catch (ic) {}
            if (d) try {
                d(h)
            } catch (ic) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Rc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new ue(l || "", k));
                try {
                    d = k.parent
                } catch (ic) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ha = !0)
                }
            var t = new ue(x.location.href, x, !1);
            k = null;
            var v = b.length - 1;
            for (q = v; 0 <= q; --q) {
                var A = b[q];
                !k && se.test(A.url) && (k = A);
                if (A.url && !A.Ha) {
                    t = A;
                    break
                }
            }
            A = null;
            var H = b.length && b[v].url;
            0 != t.depth && H && (A = b[v]);
            var F = new te(t, A);
            if (F.h) {
                var da = F.h.url || "";
                f.g.push(4);
                f.h[4] = we("top", da)
            }
            var ya = {
                url: F.g.url || ""
            };
            if (F.g.url) {
                var id = F.g.url.match(Pc),
                    yf = id[1],
                    zf = id[3],
                    Af = id[4];
                t = "";
                yf && (t += yf + ":");
                zf && (t += "//", t += zf, Af && (t += ":" + Af));
                var Bf = t
            } else Bf = "";
            ya = [ya, {
                url: Bf
            }];
            f.g.push(5);
            f.h[5] = ya;
            Be(this.l, e, f, this.i, c)
        } catch (ic) {
            try {
                Be(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Qe(ic),
                    url: F && F.g.url
                }, this.i, c)
            } catch (qn) {}
        }
        return !0
    };

    function Qe(a) {
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
    };

    function N(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, N) : this.stack = Error().stack || ""
    }
    w(N, Error);

    function Re() {
        this.g = null;
        this.i = !1;
        this.j = Math.random();
        this.h = this.B
    }
    n = Re.prototype;
    n.oa = function(a) {
        this.g = a
    };
    n.Qa = function(a) {
        this.i = a
    };
    n.Pa = function(a) {
        this.h = a
    };
    n.B = function(a, b, c, d, e) {
        if ((this.i ? this.j : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Ic(b) || (b = new Hc(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (Sc(x.document, hb(x.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), x.error_rep_loaded = !0);
        return !1
    };
    n.ia = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.h(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    n.Ka = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.ia(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Pe, O, Le = Cd(),
        Oe = new Ke;

    function Se(a) {
        null != a && (Le.google_measure_js_timing = a);
        Le.google_measure_js_timing || (a = Oe, a.g = !1, a.events != a.h.google_js_reporting_queue && (Je() && Oa(a.events, Me), a.events.length = 0))
    }
    Pe = new function() {
        var a = void 0 === a ? J : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    };
    "number" !== typeof Le.google_srt && (Le.google_srt = Math.random());
    var Te = Pe,
        Ue = Le.google_srt;
    0 <= Ue && 1 >= Ue && (Te.g = Ue);
    O = new Ne;
    O.oa(function() {});
    O.Qa(!0);
    "complete" == Le.document.readyState ? Se() : Oe.g && Jc(Le, "load", function() {
        Se()
    });

    function Ve(a, b, c) {
        return O.ia(a, b, c)
    }

    function We(a, b) {
        return O.Ka(a, b, void 0, void 0)
    }

    function Xe(a, b, c) {
        Be(Pe, a, b, !0, c, void 0)
    }

    function Ye(a, b, c, d) {
        var e;
        Ic(b) ? e = b.msg || Qe(b.error) : e = Qe(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Hc ? b.error : b, c.pbr || (c.pbr = !0, O.B(a, b, .1, d, "puberror")), !1) : O.B(a, b, c, d)
    };

    function Ze(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Jc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };
    var $e = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function af() {
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
        this.floatingAdsStacking = new bf
    }

    function cf(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new bf) : a.google_reactive_ads_global_state = new af;
        return a.google_reactive_ads_global_state
    }

    function bf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function df(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function P(a) {
        return df(a).clientWidth
    };

    function Q() {
        this.j = this.j;
        this.l = this.l
    }
    Q.prototype.j = !1;
    Q.prototype.g = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };

    function ef(a, b, c) {
        return ff(a, void 0 === c ? "" : c, function(d) {
            return Ra(G(d, Zb, 2), function(e) {
                return C(e, 1) === b
            })
        })
    }

    function gf(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = Fd(a) || a;
        return hf(d, b) ? !0 : ff(a, c, function(e) {
            return Ra(C(e, 3), function(f) {
                return f === b
            })
        })
    }

    function jf(a) {
        return ff(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function hf(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ua(a.split(","), b.toString())
    }

    function ff(a, b, c) {
        a = Fd(a) || a;
        var d = kf(a);
        b && (b = re(String(b)));
        return Wa(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function kf(a) {
        a = lf(a);
        var b = {};
        wd(a, function(c, d) {
            try {
                var e = new Xb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function lf(a) {
        try {
            var b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Va(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    };

    function mf() {
        var a = Ab("31060919");
        return /^\d+$/.test(a) ? a : ""
    };

    function nf(a) {
        var b = {};
        this[Md] = (b[55] = function() {
            return 0 === a
        }, b[23] = function(c) {
            return ef(J, parseInt(c, 10))
        }, b[24] = function(c) {
            return gf(J, parseInt(c, 10))
        }, b);
        b = {};
        this[Nd] = (b[7] = function(c) {
            try {
                var d = window.localStorage
            } catch (g) {
                d = null
            }
            var e = c;
            c = window;
            e = void 0 === e ? 0 : e;
            e = 0 != e ? "google_experiment_mod" + e : "google_experiment_mod";
            var f = ad(d, e);
            d = null === f ? bd(c, d, e) : f;
            return null != d ? d : void 0
        }, b);
        b = {};
        this[Od] = (b[6] = mf, b)
    };

    function R(a) {
        if (a.ma && a.hasOwnProperty("ma")) return a.ma;
        var b = new a;
        return a.ma = b
    };

    function of () {
        var a = {};
        this.g = (a[Md] = {}, a[Nd] = {}, a[Od] = {}, a)
    };
    var pf = /^true$/.test("false");

    function qf(a, b) {
        switch (b) {
            case 1:
                return D(a, 1, 0);
            case 2:
                return D(a, 2, 0);
            case 3:
                return D(a, 3, 0);
            case 6:
                return D(a, 6, 0);
            default:
                return null
        }
    }

    function rf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Qb(a, 1);
            case 7:
                return D(a, 3, "");
            case 2:
                return Rb(a, 2);
            case 3:
                return D(a, 3, "");
            case 6:
                return C(a, 4);
            default:
                return null
        }
    }
    var sf = Ma(function() {
        if (!pf) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function tf(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        var e = sf();
        if (null != e[b]) return e[b];
        b = uf(d)[b];
        if (!b) return c;
        b = new ce(b);
        b = vf(b);
        a = rf(b, a);
        return null != a ? a : c
    }

    function vf(a) {
        var b = R( of ).g;
        if (b) {
            var c = Ta(G(a, be, 5), function(d) {
                return Td(E(d, Id, 1), b)
            });
            if (c) return E(c, $d, 2)
        }
        return E(a, $d, 4)
    }

    function wf() {
        this.g = {};
        this.h = []
    }

    function xf(a, b, c) {
        return !!tf(1, a, void 0 === b ? !1 : b, c)
    }

    function Cf(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(tf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Df(a, b, c) {
        return tf(3, a, void 0 === b ? "" : b, c)
    }

    function Ef(a, b, c) {
        b = void 0 === b ? [] : b;
        return tf(6, a, b, c)
    }

    function uf(a) {
        return R(wf).g[a] || (R(wf).g[a] = {})
    }

    function Ff(a, b) {
        var c = uf(b);
        Yc(a, function(d, e) {
            return c[e] = d
        })
    }

    function Gf(a, b) {
        var c = uf(b);
        Oa(a, function(d) {
            var e = Ob(d, ee[0]);
            (e = qf(d, e)) && (c[e] = Vb(d))
        })
    }

    function Hf(a, b) {
        var c = uf(b);
        Oa(a, function(d) {
            var e = new ce(d),
                f = Ob(e, ee[0]);
            (e = qf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function If() {
        return Qa(r(Object, "keys").call(Object, R(wf).g), function(a) {
            return Number(a)
        })
    }

    function Jf(a) {
        Ua(R(wf).h, a) || Ff(uf(4), a)
    };

    function S(a) {
        this.methodName = a
    }
    var Kf = new S(1),
        Lf = new S(15),
        Mf = new S(2),
        Nf = new S(3),
        Of = new S(4),
        Pf = new S(5),
        Qf = new S(6),
        Rf = new S(7),
        Sf = new S(8),
        Tf = new S(9),
        Uf = new S(10),
        Vf = new S(11),
        Wf = new S(12),
        Xf = new S(13),
        Yf = new S(14);

    function T(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Zf(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function $f(a) {
        T(Pf, xf, a);
        T(Qf, Cf, a);
        T(Rf, Df, a);
        T(Sf, Ef, a);
        T(Xf, Hf, a);
        T(Lf, Jf, a)
    }

    function ag(a) {
        T(Of, function(b) {
            R( of ).g = b
        }, a);
        T(Tf, function(b, c) {
            var d = R( of );
            d.g[Md][b] || (d.g[Md][b] = c)
        }, a);
        T(Uf, function(b, c) {
            var d = R( of );
            d.g[Nd][b] || (d.g[Nd][b] = c)
        }, a);
        T(Vf, function(b, c) {
            var d = R( of );
            d.g[Od][b] || (d.g[Od][b] = c)
        }, a);
        T(Yf, function(b) {
            for (var c = R( of ), d = u([Md, Nd, Od]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.g[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function bg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function cg(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function dg() {
        this.h = function() {};
        this.g = function() {
            return []
        }
    }

    function eg(a, b, c) {
        a.h = function(d) {
            Zf(Mf, b, function() {
                return []
            })(d, c)
        };
        a.g = function() {
            return Zf(Nf, b, function() {
                return []
            })(c)
        }
    };

    function fg(a, b) {
        try {
            a: {
                var c = a.split(".");a = x;
                for (var d = 0, e; d < c.length; d++)
                    if (e = a, a = a[c[d]], null == a) {
                        var f = null;
                        break a
                    }
                f = "function" === typeof a ? e[c[d - 1]]() : a
            }
            if (typeof f === b) return f
        }
        catch (g) {}
    }

    function gg() {
        var a = {};
        this[Md] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Ua(R(dg).g(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = fg(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a);
        a = {};
        this[Nd] = (a[3] = function() {
            return gd()
        }, a[6] = function(b) {
            b = fg(b, "number");
            return void 0 !==
                b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Pc)[3] || null) ? decodeURI(c) : c) ? Zc(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Od] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = fg(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };
    var hg = [12, 13, 20];

    function ig() {}
    ig.prototype.init = function(a, b, c) {
        var d = this;
        c = void 0 === c ? {} : c;
        var e = void 0 === c.Ga ? !1 : c.Ga,
            f = void 0 === c.fb ? {} : c.fb;
        c = void 0 === c.ib ? [] : c.ib;
        this.i = a;
        this.l = {};
        this.m = e;
        this.j = f;
        a = {};
        this.g = (a[b] = [], a[4] = [], a);
        this.h = {};
        (b = De()) && Oa(b.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (d.h[g] = !0)
        });
        Oa(c, function(g) {
            d.h[g] = !0
        });
        return this
    };

    function jg(a, b, c) {
        if (a.l[b]) return .001 >= Math.random() && ud({
            b: c,
            dp: b
        }, "tagging_dupdiv"), !0;
        a.l[b] = !0;
        return !1
    }

    function kg(a, b, c) {
        var d = [],
            e = lg(a.i, b);
        if (9 !== b && jg(a, b, c) || !e.length) return d;
        var f = Ua(hg, b);
        Oa(e, function(g) {
            if (g = mg(a, g, c)) {
                var h = g.getId();
                d.push(h);
                ng(a, h, f ? 4 : c);
                var k = G(g, ce, 2);
                k && (f ? Oa(If(), function(l) {
                    return Gf(k, l)
                }) : Gf(k, c))
            }
        });
        return d
    }

    function ng(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        Ua(a, b) ? ud({
            eids: JSON.stringify(a),
            dup: b
        }, "gpt_dupeid") : a.push(b)
    }

    function og(a, b) {
        a.i.push.apply(a.i, ma(Pa(Qa(b, function(c) {
            return new le(c)
        }), function(c) {
            return !Ua(hg, c.da())
        })))
    }

    function mg(a, b, c) {
        var d = R( of ).g;
        if (!Td(E(b, Id, 3), d)) return null;
        var e = G(b, fe, 2),
            f = e.length * D(b, 1, 0),
            g = D(b, 6, 0);
        if (g) {
            f = d[Nd];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g)
            } catch (k) {}
            return (b = pg(b, c)) ? qg(a, [b], 1) : null
        }
        if (g = D(b, 10, 0)) {
            f = null;
            switch (c) {
                case 1:
                    f = d[Nd][9];
                    break;
                case 2:
                    f = d[Nd][10];
                    break;
                default:
                    return null
            }
            c = f ? f(String(g)) : void 0;
            return void 0 === c && 1 === D(b, 11, 0) ? null : (b = pg(b, c)) ? qg(a, [b], 1) : null
        }
        c = d ? Pa(e, function(k) {
            return Td(E(k, Id, 3), d)
        }) : e;
        return c.length ?
            (b = D(b, 4, 0)) ? rg(a, b, f, c) : qg(a, c, f / 1E3) : null
    }

    function rg(a, b, c, d) {
        var e = null != a.j[b] ? a.j[b] : 1E3;
        if (0 >= e) return null;
        d = qg(a, d, c / e);
        a.j[b] = d ? 0 : e - c;
        return d
    }

    function qg(a, b, c) {
        var d = a.h,
            e = Sa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.m ? null : Uc(b, c)
    }

    function sg(a, b) {
        T(Kf, function(c) {
            a.h[c] = !0
        }, b);
        T(Mf, function(c, d) {
            return kg(a, c, d)
        }, b);
        T(Nf, function(c) {
            return (a.g[c] || []).concat(a.g[4])
        }, b);
        T(Wf, function(c) {
            return og(a, c)
        }, b)
    }

    function lg(a, b) {
        return (a = Sa(a, function(c) {
            return c.da() == b
        })) && G(a, he, 2) || []
    }

    function pg(a, b) {
        var c = G(a, fe, 2),
            d = c.length,
            e = D(a, 1, 0);
        a = D(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * Xc(window));
        var f = (b - a) % d;
        if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = R( of ).g;
        return !c || d && !Td(E(c, Id, 3), d) ? null : c
    };

    function U(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function tg(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    var ug = new tg(62, .001),
        vg = new tg(1077),
        wg = new U(316),
        xg = new U(313),
        yg = new U(369),
        zg = new U(1062),
        Ag = new U(1061),
        Bg = new tg(1041, 50),
        Cg = new U(1042, !0),
        Dg = new U(1040, !0),
        Eg = new U(1026),
        Fg = new U(1053),
        Gg = new tg(1046),
        Hg = new U(1049, !0),
        Ig = new U(218),
        Jg = new U(216),
        Kg = new U(217),
        Lg = new U(1002),
        Mg = new U(233),
        Ng = new U(232),
        Og = new U(227),
        Pg = new U(208),
        Qg = new U(282),
        Rg = new function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Sg = new tg(1079, 1),
        Tg = new U(251),
        Ug = new U(1059),
        Vg = new U(1936, !0),
        Wg = new U(203),
        Xg = new U(241),
        Yg = new U(84),
        Zg = new tg(1929, 50),
        $g = new tg(1905),
        ah = new U(240),
        bh = new U(1928),
        ch = new U(1941),
        dh = new U(370946349),
        eh = new U(374326588),
        fh = new U(379841917),
        gh = new U(377105258),
        hh = new tg(1935),
        ih = new U(1942);

    function jh() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    }

    function V(a) {
        return R(jh).h(a.g, a.defaultValue)
    }

    function kh(a) {
        return R(jh).i(a.g, a.defaultValue)
    };

    function lh() {
        this.g = function() {}
    }

    function mh(a) {
        R(lh).g(a)
    };

    function nh(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? cg() : d;
        e = void 0 === e ? 0 : e;
        d.hasOwnProperty("init-done") ? (Zf(Wf, d)(Qa(G(a, le, 2), function(f) {
            return Vb(f)
        })), Zf(Xf, d)(Qa(G(a, ce, 1), function(f) {
            return Vb(f)
        }), e), b && Zf(Yf, d)(b), oh(d, e)) : (sg(R(ig).init(G(a, le, 2), e, c), d), $f(d), ag(d), bg(d), oh(d, e), Gf(G(a, ce, 1), e), pf = pf || !(!c || !c.bb), mh(R(gg)), b && mh(b))
    }

    function oh(a, b) {
        a = void 0 === a ? cg() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        eg(R(dg), c, d);
        ph(a, b);
        R(lh).g = Zf(Yf, a);
        R(jh).j()
    }

    function ph(a, b) {
        b = void 0 === b ? 0 : b;
        var c = R(jh);
        c.h = function(d, e) {
            return Zf(Pf, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Zf(Qf, a, function() {
                return 0
            })(d, e, b)
        };
        c.g = function(d, e) {
            return Zf(Rf, a, function() {
                return ""
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Zf(Sf, a, function() {
                return []
            })(d, e, b)
        };
        c.j = function() {
            Zf(Lf, a)(b)
        }
    };

    function qh(a, b, c) {
        var d = I(a);
        if (d.plle) oh(cg(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == ad(d, "goog_pem_mod") && bd(a, d, "goog_pem_mod");
            d = E(b, je, 12);
            e = Qb(b, 9);
            nh(d, new nf(c), {
                Ga: e && !!a.google_disable_experiments,
                bb: e
            }, cg(a));
            R(dg).h(12);
            R(dg).h(10);
            c = ac(a);
            (b = D(b, 10, "")) && c.push(b);
            a = Fd(a) || a;
            Gd(a.location, "google_mc_lab") && c.push("44738307")
        }
    };

    function rh(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function sh(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function th(a) {
        B(this, a, null, uh)
    }
    w(th, z);

    function vh(a) {
        B(this, a, null, null)
    }
    w(vh, z);

    function wh(a) {
        B(this, a, null, null)
    }
    w(wh, z);

    function xh(a) {
        B(this, a, null, null)
    }
    w(xh, z);
    var uh = [
        [1, 2, 3]
    ];

    function yh(a) {
        B(this, a, zh, null)
    }
    w(yh, z);

    function Ah(a) {
        B(this, a, null, Bh)
    }
    w(Ah, z);

    function Ch(a) {
        B(this, a, null, null)
    }
    w(Ch, z);
    var zh = [1],
        Bh = [
            [1, 2]
        ];

    function Dh(a) {
        B(this, a, Eh, null)
    }
    w(Dh, z);

    function Fh(a) {
        B(this, a, null, null)
    }
    w(Fh, z);

    function Gh(a) {
        B(this, a, Hh, null)
    }
    w(Gh, z);

    function Ih(a) {
        B(this, a, null, null)
    }
    w(Ih, z);

    function Jh(a) {
        B(this, a, null, null)
    }
    w(Jh, z);

    function Kh(a) {
        B(this, a, null, null)
    }
    w(Kh, z);
    var Eh = [1, 2, 5, 7],
        Hh = [2, 5, 6, 11];

    function Lh(a, b) {
        a = sh(rh(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Zc(a),
            d = Mh(a);
        return r(b, "find").call(b, function(e) {
            var f = null != C(e, 7) ? C(E(e, Ih, 7), 1) : C(e, 1);
            e = null != C(e, 7) ? C(E(e, Ih, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function Mh(a) {
        for (var b = {};;) {
            b[Zc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function Nh(a) {
        this.g = a.slice(0)
    }
    Nh.prototype.apply = function(a) {
        return new Nh(a(this.g.slice(0)))
    };
    Nh.prototype.add = function(a) {
        var b = this.g.slice(0);
        b.push(a);
        return new Nh(b)
    };

    function Oh(a) {
        var b = void 0 === a.Ca ? void 0 : a.Ca,
            c = void 0 === a.ab ? void 0 : a.ab,
            d = void 0 === a.Ma ? void 0 : a.Ma;
        this.g = void 0 === a.Xa ? void 0 : a.Xa;
        this.j = new Nh(b || []);
        this.i = d;
        this.h = c
    };

    function Ph() {
        this.g = {};
        this.h = {}
    }
    Ph.prototype.set = function(a, b) {
        var c = Qh(a);
        this.g[c] = b;
        this.h[c] = a
    };
    Ph.prototype.get = function(a, b) {
        a = Qh(a);
        return void 0 !== this.g[a] ? this.g[a] : b
    };

    function Qh(a) {
        return a instanceof Object ? String(Aa(a)) : a + ""
    };

    function Rh(a) {
        var b = [],
            c = a.j;
        c && c.g.length && b.push({
            R: "a",
            Y: Sh(c)
        });
        null != a.g && b.push({
            R: "as",
            Y: a.g
        });
        null != a.h && b.push({
            R: "i",
            Y: String(a.h)
        });
        null != a.i && b.push({
            R: "rp",
            Y: String(a.i)
        });
        b.sort(function(d, e) {
            return d.R.localeCompare(e.R)
        });
        b.unshift({
            R: "t",
            Y: "aa"
        });
        return b
    }

    function Sh(a) {
        a = a.g.slice(0).map(Th);
        a = JSON.stringify(a);
        return Zc(a)
    }

    function Th(a) {
        var b = {};
        null != C(a, 7) && (b.q = C(a, 7));
        null != C(a, 2) && (b.o = C(a, 2));
        null != C(a, 5) && (b.p = C(a, 5));
        return b
    };

    function Uh(a, b) {
        this.Ea = a;
        this.La = b
    }

    function Vh(a) {
        var b = [].slice.call(arguments).filter(La(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ea || []);
            d = r(Object, "assign").call(Object, d, e.La)
        });
        return new Uh(c, d)
    }

    function Wh(a) {
        switch (a) {
            case 1:
                return new Uh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Uh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Uh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Uh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Xh(a) {
        if (null == a) a = null;
        else {
            var b = Rh(a);
            a = [];
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.Y);
                a.push(c.R + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Uh(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Yh = {},
        Zh = new Uh(["google-auto-placed"], (Yh.google_reactive_ad_format = 40, Yh.google_tag_origin = "qs", Yh));
    var $h = {},
        ai = ($h.google_ad_channel = !0, $h.google_ad_host = !0, $h);

    function bi(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Xe("ama", b, .01)
    }

    function ci(a) {
        var b = {};
        Yc(ai, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function di(a) {
        if (V(wg)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Lb(Dh, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function ei(a) {
        a = E(a, Fh, 3);
        return !a || C(a, 1) <= Date.now() ? !1 : !0
    }

    function fi(a) {
        return (a = di(a)) ? ei(a) ? a : null : null
    }

    function gi(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            bi(a, {
                lserr: 1
            })
        }
    };
    var hi = null;

    function ii(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == hi) {
                hi = !1;
                try {
                    var d = Fd(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (hi = !0);
                    x.localStorage.getItem("google_logging") && (hi = !0)
                } catch (e) {}
            }
            a = hi
        }
        a && (d = x.document, a = new ab(bb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = hb(a instanceof ab && a.constructor === ab && a.g === cb ? a.h : "type_error:Const"), Sc(d, a))
    };

    function ji(a) {
        this.g = new Ph;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    ji.prototype.add = function(a) {
        this.g.set(a, !0)
    };
    ji.prototype.contains = function(a) {
        return void 0 !== this.g.g[Qh(a)]
    };

    function ki(a) {
        B(this, a, null, null)
    }
    w(ki, z);

    function li(a, b) {
        this.g = a;
        this.h = b
    }

    function mi(a) {
        return null != a.g ? a.g.value : null
    }

    function ni(a, b) {
        null != a.g && b(a.g.value);
        return a
    }
    li.prototype.map = function(a) {
        return null != this.g ? (a = a(this.g.value), a instanceof li ? a : oi(a)) : this
    };

    function pi(a, b) {
        null != a.g || b(a.h);
        return a
    }

    function oi(a) {
        return new li({
            value: a
        }, null)
    }

    function qi(a) {
        return new li(null, a)
    }

    function ri(a) {
        try {
            return oi(a())
        } catch (b) {
            return qi(b)
        }
    };
    var si = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function ti(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = L(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function ui(a, b) {
        return !((dd.test(b.google_ad_width) || cd.test(a.style.width)) && (dd.test(b.google_ad_height) || cd.test(a.style.height)))
    }

    function vi(a, b) {
        return (a = wi(a, b)) ? a.y : 0
    }

    function wi(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function xi(a, b) {
        do {
            var c = Tc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function yi(a) {
        var b = 0,
            c;
        for (c in si) - 1 != a.indexOf(c) && (b |= si[c]);
        return b
    }

    function zi(a, b, c, d, e) {
        if (a.top != a) return Fd(a) ? 3 : 16;
        if (!(488 > P(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = P(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = P(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Tc(b, a)) && (e = L(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Ai(a, b, c, d) {
        var e = zi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || xi(c, b) ? Bi(b) ? a = !0 : (b = P(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Ci(a, b, c) {
        a = a.style;
        "rtl" == b ? V(Tg) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : V(Tg) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }

    function Di(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Tc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Ei(a, b) {
        for (var c = 0; 100 > c && b.parentElement; ++c) {
            for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && Di(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    }

    function Fi(a, b, c) {
        a = wi(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Gi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Tc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Ci(b, c, "0px");
            b.style.width = P(a) + "px";
            if (0 !== Fi(a, b, c)) {
                Ci(b, c, "0px");
                var d = Fi(a, b, c);
                Ci(b, c, -1 * d + "px");
                a = Fi(a, b, c);
                0 !== a && a !== d && Ci(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }

    function Bi(a) {
        return V(Mg) || a.location && "#bffwroe2etoq" == a.location.hash
    };

    function W(a, b) {
        this.j = a;
        this.i = b
    }
    W.prototype.minWidth = function() {
        return this.j
    };
    W.prototype.height = function() {
        return this.i
    };
    W.prototype.g = function(a) {
        return 300 < a && 300 < this.i ? this.j : Math.min(1200, Math.round(a))
    };
    W.prototype.h = function() {};

    function Hi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Tc(a, b)) && e[c] && d(e[c]) || null
    }

    function Ii(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Ji(a, b, c, d) {
        var e = a && Ki(c, b),
            f = Li(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Mi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Ki(a, b) {
        return vi(a, b) < df(b).clientHeight - 100
    }

    function Ni(a, b) {
        var c = Hi(b, a, "height", L);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Hi(b, a, "height", L);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && L(b.style.height)) && (c = Math.min(c, d)), (d = Hi(b, a, "maxHeight", L)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Li(a, b) {
        var c = 0 == zd(a);
        return b && c ? Math.max(250, 2 * df(a).clientHeight / 3) : 250
    };

    function Oi(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Pi(a) {
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
    };

    function Qi(a, b, c) {
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
        Pi(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Ri(a, b, c) {
        function d(f) {
            f = Si(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Si(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Ti(a.previousSibling, e),
                    ea: function(f) {
                        return Ti(f.previousSibling, e)
                    },
                    ha: 0
                };
            case 2:
                return {
                    init: Ti(a.lastChild, e),
                    ea: function(f) {
                        return Ti(f.previousSibling, e)
                    },
                    ha: 0
                };
            case 3:
                return {
                    init: Ti(a.nextSibling, d),
                    ea: function(f) {
                        return Ti(f.nextSibling, d)
                    },
                    ha: 3
                };
            case 1:
                return {
                    init: Ti(a.firstChild, d),
                    ea: function(f) {
                        return Ti(f.nextSibling, d)
                    },
                    ha: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Si(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ti(a, b) {
        return a && b(a) ? a : null
    };

    function Ui(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = zb(d.ub);
            a[e] = d.value
        }
    };

    function Vi(a, b, c, d) {
        this.j = a;
        this.h = b;
        this.i = c;
        this.g = d
    }

    function Wi(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.j)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = Xi(a, b);
        "number" === typeof a.h && (c = a.h, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.i) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = Yi(b[d]);
                var f = a.i;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Vi.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.j,
            occurrenceIndex: this.h,
            paragraphIndex: this.i,
            ignoreMode: this.g
        })
    };

    function Xi(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Yi(a) {
        var b = [];
        Oi(a.getElementsByTagName("p"), function(c) {
            100 <= Zi(c) && b.push(c)
        });
        return b
    }

    function Zi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Oi(a.childNodes, function(c) {
            b += Zi(c)
        });
        return b
    }

    function $i(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function aj(a) {
        if (!a) return null;
        var b = C(a, 7);
        if (C(a, 1) || a.getId() || 0 < C(a, 4).length) {
            var c = a.getId(),
                d = C(a, 1),
                e = C(a, 4);
            b = C(a, 2);
            var f = C(a, 5);
            a = bj(C(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + $i(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + $i(e[c]);
            b = (e = g) ? new Vi(e, b, f, a) : null
        } else b = b ? new Vi(b, C(a, 2), C(a, 5), bj(C(a, 6))) : null;
        return b
    }
    var cj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function bj(a) {
        return null == a ? a : cj[a]
    }
    var dj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function ej(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function fj(a) {
        a = ej(a);
        return a.optimization = a.optimization || {}
    };

    function gj(a) {
        switch (C(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = E(a, M, 1), null == b ? b = null : (a = C(a, 2), b = null == a ? null : new Oh({
                    Ca: [b],
                    Ma: a
                }));
                return null != b ? oi(b) : qi(Error("Missing dimension when creating placement id"));
            case 3:
                return qi(Error("Missing dimension when creating placement id"));
            default:
                return qi(Error("Invalid type: " + C(a, 8)))
        }
    };

    function hj() {
        this.g = new Ph
    }
    hj.prototype.set = function(a, b) {
        var c = this.g.get(a);
        c || (c = new ji, this.g.set(a, c));
        c.add(b)
    };

    function ij(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function jj(a, b) {
        this.h = a;
        this.g = b
    }

    function kj(a, b) {
        var c = new hj,
            d = new ji;
        b.forEach(function(e) {
            if (E(e, vh, 1)) {
                e = E(e, vh, 1);
                if (E(e, Vd, 1) && E(E(e, Vd, 1), M, 1) && E(e, Vd, 2) && E(E(e, Vd, 2), M, 1)) {
                    var f = lj(a, E(E(e, Vd, 1), M, 1)),
                        g = lj(a, E(E(e, Vd, 2), M, 1));
                    if (f && g)
                        for (f = u(ij({
                                anchor: f,
                                position: C(E(e, Vd, 1), 2)
                            }, {
                                anchor: g,
                                position: C(E(e, Vd, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Aa(g.anchor), g.position)
                }
                E(e, Vd, 3) && E(E(e, Vd, 3), M, 1) && (f = lj(a, E(E(e, Vd, 3), M, 1))) && c.set(Aa(f), C(E(e, Vd, 3), 2))
            } else E(e, wh, 2) ? mj(a, E(e, wh, 2), c) : E(e, xh, 3) && nj(a, E(e,
                xh, 3), d)
        });
        return new jj(c, d)
    }

    function mj(a, b, c) {
        E(b, M, 1) && (a = oj(a, E(b, M, 1))) && a.forEach(function(d) {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function nj(a, b, c) {
        E(b, M, 1) && (a = oj(a, E(b, M, 1))) && a.forEach(function(d) {
            c.add(Aa(d))
        })
    }

    function lj(a, b) {
        return (a = oj(a, b)) && 0 < a.length ? a[0] : null
    }

    function oj(a, b) {
        return (b = aj(b)) ? Wi(b, a) : null
    };

    function pj(a, b) {
        if (!a) return !1;
        a = Tc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function qj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function rj(a) {
        return !!a.nextSibling || !!a.parentNode && rj(a.parentNode)
    };

    function sj(a, b) {
        return a && null != C(a, 4) && b[C(E(a, Xd, 4), 2)] ? !1 : !0
    }

    function tj(a) {
        var b = {};
        a && C(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function uj(a, b, c, d, e) {
        this.g = a;
        this.C = b;
        this.i = c;
        this.l = e || null;
        this.m = (this.s = d) ? kj(a.document, G(d, th, 5)) : kj(a.document, []);
        this.h = 0;
        this.j = !1
    }

    function vj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        var c = G(a.i, Yd, 1);
        a.h = 0;
        var d = tj(a.s);
        try {
            var e = a.g.localStorage.getItem("google_ama_settings");
            var f = e ? Lb(ki, e ? JSON.parse(e) : null) : null
        } catch (m) {
            f = null
        }
        if (null !== f && Qb(f, 2, !1)) return ej(a.g).eatf = !0, ii(7, [!0, 0, !1]), !0;
        f = new ji([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (E(h, Xd, 4) && f.contains(C(E(h, Xd, 4), 1)) && 1 === C(h, 8) && sj(h, d)) {
                g.h++;
                if (h = wj(g, h, l, d)) l = ej(g.g), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++,
                    l.placed.push({
                        index: k,
                        element: h.ba
                    }), ii(7, [!1, g.h, !0]);
                g = h
            } else g = null;
            if (g) return !0
        }
        ii(7, [!1, a.h, !1]);
        return !1
    }

    function wj(a, b, c, d) {
        if (!sj(b, d) || 1 != C(b, 8)) return null;
        d = E(b, M, 1);
        if (!d) return null;
        d = aj(d);
        if (!d) return null;
        d = Wi(d, a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = C(b, 2);
        e = dj[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = pj(qj(d), f);
                        break a;
                    case 3:
                        f = pj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = pj(g ? 1 == g.nodeType ? g : qj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !rj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Pi(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.m;
            f = C(b, 2);
            g =
                Aa(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(Aa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(Aa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        c = E(b, Wd, 3);
        f = {};
        c && (f.Sa = C(c, 1), f.Da = C(c, 2), f.clearBoth = !!Pb(c, 3));
        c = E(b, Xd, 4) && C(E(b, Xd, 4), 2) ? C(E(b, Xd, 4), 2) : null;
        c = Wh(c);
        g = null == C(b, 12) ? null : C(b, 12);
        g = null == g ? null : new Uh(null, {
            google_ml_rank: g
        });
        b = xj(a, b);
        b = Vh(a.l, c, g, b);
        c = a.g;
        a = a.C;
        var h = c.document,
            k = f.clearBoth ||
            !1;
        g = Lc((new Mc(h)).g, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.gb && Ui(k, f.gb);
        h = Lc((new Mc(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Sa && (k.marginTop = f.Sa);
        f.Da && (k.marginBottom = f.Da);
        f.Wa && Ui(k, f.Wa);
        g.appendChild(h);
        f = {
            la: g,
            ba: h
        };
        f.ba.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ea) f.la.className = h.join(" ");
        h = f.ba;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client",
            a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.la;
                var q = void 0 === q ? 0 : q;
                if (V(xg)) {
                    q = void 0 === q ? 0 : q;
                    var t = Ri(d, e, q);
                    if (t.init) {
                        var v = t.init;
                        for (d = v; d = t.ea(d);) v = d;
                        var A = {
                            anchor: v,
                            position: t.ha
                        }
                    } else A = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    Qi(m, A.anchor, A.position)
                } else Qi(m, d, e);
                b: {
                    var H = f.ba;H.setAttribute("data-adsbygoogle-status", "reserved");H.className += " adsbygoogle-noablate";m = {
                        element: H
                    };
                    var F = b && b.La;
                    if (H.hasAttribute("data-pub-vars")) {
                        try {
                            F = JSON.parse(H.getAttribute("data-pub-vars"))
                        } catch (da) {
                            break b
                        }
                        H.removeAttribute("data-pub-vars")
                    }
                    F &&
                    (m.params = F);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (da) {
                (H = f.la) && H.parentNode && (F = H.parentNode, F.removeChild(H), Pi(F) && (F.style.display = F.getAttribute("data-init-display") || "none"));
                H = !1;
                break a
            }
            H = !0
        }
        return H ? f : null
    }

    function xj(a, b) {
        return mi(pi(gj(b).map(Xh), function(c) {
            ej(a.g).exception = c
        }))
    };

    function yj() {
        this.h = new zj(this);
        this.g = 0
    }
    yj.prototype.resolve = function(a) {
        Aj(this);
        this.g = 1;
        this.j = a;
        Bj(this.h)
    };
    yj.prototype.reject = function(a) {
        Aj(this);
        this.g = 2;
        this.i = a;
        Bj(this.h)
    };

    function Aj(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }

    function zj(a) {
        this.g = a
    }
    zj.prototype.then = function(a, b) {
        if (this.h) throw Error("Then functions already set.");
        this.h = a;
        this.i = b;
        Bj(this)
    };

    function Bj(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Cj(a) {
        this.exception = a
    }

    function Dj(a, b, c) {
        this.i = a;
        this.g = b;
        this.h = c
    }
    Dj.prototype.start = function() {
        this.j()
    };
    Dj.prototype.j = function() {
        try {
            switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    vj(this.g, !0);
                    Ej(this);
                    break;
                default:
                    vj(this.g, !1) ? Ej(this) : this.i.setTimeout(Fa(this.j, this), 100)
            }
        } catch (a) {
            Ej(this, a)
        }
    };

    function Ej(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            ej(e.g);
            G(e.i, Yd, 1);
            d.call(c, new Cj(b))
        } catch (f) {
            a.h.reject(f)
        }
    };

    function Fj(a) {
        bi(a, {
            atf: 1
        })
    }

    function Gj(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        bi(a, {
            atf: 0
        })
    };

    function Hj() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Ij() {
        var a = new Hj;
        this.promise = a.promise;
        this.resolve = a.resolve
    }

    function Jj(a) {
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp;
        b[7] || (b[7] = new Ij, a && a());
        return b[7]
    }

    function Kj(a) {
        return Jj(function() {
            Sc(x.document, a)
        }).promise
    };

    function Lj(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Mj(a) {
        var b = gf(x, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = .5 > Math.random(),
            d = Gd(x.location, "google_ads_preview");
        return b && !a && c || d
    }

    function Nj(a) {
        if (x.google_apltlad || x.top != x || !a.google_ad_client) return null;
        var b = Mj(a);
        x.google_apltlad = !0;
        var c = Lj(a.google_ad_client),
            d = c.enable_page_level_ads;
        Yc(a, function(e, f) {
            kc[f] && "google_ad_client" !== f && (d[f] = e)
        });
        if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region;
        return c
    }

    function Oj(a) {
        return za(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };
    var Pj = null;

    function Qj() {
        this.S = {}
    }

    function Rj() {
        if (Sj) return Sj;
        var a = sd() || Cd(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Sj = b : a.google_persistent_state_async = Sj = new Qj
    }

    function Tj(a) {
        return Uj[a] || "google_ps_" + a
    }

    function Vj(a, b, c) {
        b = Tj(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function Wj() {
        var a = Rj();
        return Vj(a, 24, void 0)
    }
    var Sj = null,
        Xj = {},
        Uj = (Xj[8] = "google_prev_ad_formats_by_region", Xj[9] = "google_prev_ad_slotnames_by_region", Xj);

    function Yj(a) {
        B(this, a, null, null)
    }
    w(Yj, z);

    function Zj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? ri(function() {
            return Lb(Yj, c ? JSON.parse(c) : null)
        }) : oi(null)
    };

    function ak(a) {
        this.g = a || {
            cookie: ""
        }
    }
    ak.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.vb;
            d = c.wb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.tb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    ak.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = jb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function bk(a) {
        Q.call(this);
        this.i = a;
        this.h = null;
        this.s = {};
        this.m = null
    }
    w(bk, Q);
    bk.prototype.g = function() {
        this.s = {};
        this.m && (Kc(this.i, "message", this.m), delete this.m);
        delete this.s;
        delete this.i;
        delete this.h;
        Q.prototype.g.call(this)
    };

    function ck(a) {
        var b;
        (b = "function" === typeof a.i.__tcfapi) || (a.h ? a = a.h : (a.h = fd(a.i, "__tcfapiLocator"), a = a.h), b = null != a);
        return b
    };

    function dk(a) {
        var b = a.W,
            c = a.Ra,
            d = a.Ya;
        ek({
            W: b,
            na: a.na,
            fa: void 0 === a.fa ? !1 : a.fa,
            ga: void 0 === a.ga ? !1 : a.ga
        }) ? (a = Wj()) ? d(fk(b, gk(a))) : hk(b, c).then(function(e) {
            return e.map(gk)
        }).then(function(e) {
            return e.map(function(f) {
                return fk(b, f)
            })
        }).then(d) : d(fk(b, qe(!0)))
    }

    function ek(a) {
        var b = a.W,
            c = a.na,
            d = a.fa;
        if (!(a = !a.ga && ck(new bk(b)))) {
            if (d = !d) {
                if (c) {
                    b = Zj(b);
                    if (null != b.g)
                        if ((b = b.g.value) && null != C(b, 1)) b: switch (b = C(b, 1), b) {
                            case 1:
                                b = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + b);
                        } else b = !1;
                        else O.B(806, b.h, void 0, void 0), b = !1;
                    c = !b
                }
                d = c
            }
            a = d
        }
        return a ? !0 : !1
    }

    function hk(a, b) {
        return p.Promise.race([ik(), jk(a, b)])
    }

    function ik() {
        return (new p.Promise(function(a) {
            var b = Rj();
            a = {
                resolve: a
            };
            var c = Vj(b, 25, []);
            c.push(a);
            b.S[Tj(25)] = c
        })).then(kk)
    }

    function jk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, qi(Error("tcto")))
        })
    }

    function kk(a) {
        return a ? oi(a) : qi(Error("tcnull"))
    }

    function gk(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0), void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0), a.internalErrorState = void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus &&
            ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && ("DE" === a.publisherCC ||
                    V(Vg) && "CH" === a.publisherCC) ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return qe(a)
    }

    function fk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Pb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? oi(b) : qi(Error("unav"))
    };

    function lk(a, b, c, d, e, f, g) {
        this.g = x;
        this.C = a;
        this.i = b;
        this.h = c;
        this.s = d;
        this.l = e;
        this.j = f;
        this.m = g
    }

    function mk(a) {
        if (a.i) dk({
            W: a.g,
            na: a.m,
            Ra: a.h,
            Ya: function(c) {
                return nk(a, c)
            },
            ga: a.l,
            fa: a.j
        });
        else {
            try {
                var b = oi(a.g.localStorage)
            } catch (c) {
                b = qi(Error("unav"))
            }
            nk(a, b)
        }
    }

    function nk(a, b) {
        pi(ni(b, function(c) {
            ok(a, "ok");
            pk(a.g, a.C, c)
        }), function(c) {
            return ok(a, c.message)
        })
    }

    function ok(a, b) {
        a.s && Xe("abg::amalserr", {
            status: b,
            guarding: a.i,
            timeout: a.h,
            rate: .01
        }, .01)
    }

    function pk(a, b, c) {
        if (!I(J).ama_ran_on_page) {
            var d = fi(c);
            if (d) {
                if (null != C(d, 24)) {
                    c = fj(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = E(d, yh, 24)) ? 0 : null == (f = E(e, Ah, 3)) ? 0 : E(f, Ch, 2))
                }
                if (Oj(b) && (e = Lh(a, G(d, Gh, 7)), !e || !Pb(e, 8))) return;
                I(J).ama_ran_on_page = !0;
                if ((e = E(d, Jh, 13)) && 1 === C(e, 1)) {
                    var g = 0,
                        h = E(e, Kh, 6);
                    h && C(h, 3) && (g = C(h, 3) || 0);
                    cc(a, g)
                } else if (null == (g = E(d, yh, 24)) ? 0 : null == (h = E(g, Ah, 3)) ? 0 : E(h, Ch, 2)) fj(a).ablatingThisPageview = !0, cc(a, 1);
                ii(3, [Vb(d)]);
                var k = b.google_ad_client || "";
                b = ci(za(b.enable_page_level_ads) ?
                    b.enable_page_level_ads : {});
                var l = Vh(Zh, new Uh(null, b));
                Ve(782, function() {
                    var m = l;
                    try {
                        var q = Lh(a, G(d, Gh, 7)),
                            t;
                        if (t = q) a: {
                            var v;
                            if (v = C(q, 2))
                                for (var A = 0; A < v.length; A++)
                                    if (1 == v[A]) {
                                        t = !0;
                                        break a
                                    }
                            t = !1
                        }
                        if (t) {
                            if (C(q, 4)) {
                                t = {};
                                var H = new Uh(null, (t.google_package = C(q, 4), t));
                                m = Vh(m, H)
                            }
                            var F = new uj(a, k, d, q, m),
                                da = new yj;
                            (new Dj(a, F, da)).start();
                            da.h.then(Ga(Fj, a), Ga(Gj, a))
                        }
                    } catch (ya) {
                        bi(a, {
                            atf: -1
                        })
                    }
                })
            } else gi(a, c)
        }
    };

    function qk() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function rk(a, b) {
        a.oa(function(c) {
            c.shv = String(b);
            c.mnvr = "m202107130101";
            var d = R(dg).g();
            var e = ac(x);
            (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };
    var sk = "undefined" === typeof sttc ? void 0 : sttc;

    function tk(a) {
        try {
            return fc(a), new ne(JSON.parse(a))
        } catch (b) {
            O.B(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                c.jspb = String(a)
            })
        }
        return new ne
    };

    function uk(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var vk = null;

    function X(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        W.call(this, a, b);
        this.Z = c;
        this.cb = d
    }
    w(X, W);
    X.prototype.ja = function() {
        return this.Z
    };
    X.prototype.h = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function wk(a) {
        return function(b) {
            return !!(b.Z & a)
        }
    };
    var xk = Ab("script");

    function yk(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.m = a;
        this.O = b;
        this.Z = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.L = void 0 === e ? null : e;
        this.g = void 0 === f ? null : f;
        this.i = void 0 === g ? null : g;
        this.N = void 0 === h ? null : h;
        this.J = void 0 === k ? null : k;
        this.j = void 0 === l ? null : l;
        this.l = void 0 === m ? null : m;
        this.K = void 0 === q ? null : q;
        this.M = this.C = this.s = null
    }
    yk.prototype.size = function() {
        return this.O
    };

    function zk(a, b, c) {
        null != a.Z && (c.google_responsive_formats = a.Z);
        null != a.L && (c.google_safe_for_responsive_override = a.L);
        null != a.g && (!0 === a.g ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.g));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.m;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.g && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.N && (c.gfwroml = a.N);
        null != a.J && (c.gfwromr = a.J);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.K && (c.gfwroz = a.K);
        null != a.s && (c.gml = a.s);
        null != a.C && (c.gmr = a.C);
        null != a.M && (c.gzi = a.M);
        b = Cd();
        b = Fd(b) || b;
        Gd(b.location, "google_responsive_slot_debug") &&
            (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.g || !0 !== a.i ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        Gd(b.location, "google_responsive_dummy_ad") && (Ua([1, 2, 3, 4, 5, 6, 7, 8], a.m) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + xk + ">window.top.postMessage('" + a + "', '*');\n          </" + xk + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
            d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
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
    var Ak = {},
        Bk = (Ak.image_stacked = 1 / 1.91, Ak.image_sidebyside = 1 / 3.82, Ak.mobile_banner_image_sidebyside = 1 / 3.82, Ak.pub_control_image_stacked = 1 / 1.91, Ak.pub_control_image_sidebyside = 1 / 3.82, Ak.pub_control_image_card_stacked = 1 / 1.91, Ak.pub_control_image_card_sidebyside = 1 / 3.74, Ak.pub_control_text = 0, Ak.pub_control_text_card = 0, Ak),
        Ck = {},
        Dk = (Ck.image_stacked = 80, Ck.image_sidebyside = 0, Ck.mobile_banner_image_sidebyside = 0, Ck.pub_control_image_stacked = 80, Ck.pub_control_image_sidebyside = 0, Ck.pub_control_image_card_stacked =
            85, Ck.pub_control_image_card_sidebyside = 0, Ck.pub_control_text = 80, Ck.pub_control_text_card = 80, Ck),
        Ek = {},
        Fk = (Ek.pub_control_image_stacked = 100, Ek.pub_control_image_sidebyside = 200, Ek.pub_control_image_card_stacked = 150, Ek.pub_control_image_card_sidebyside = 250, Ek.pub_control_text = 100, Ek.pub_control_text_card = 150, Ek);

    function Gk(a) {
        var b = 0;
        a.H && b++;
        a.D && b++;
        a.F && b++;
        if (3 > b) return {
            G: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.H.split(",");
        var c = a.F.split(",");
        a = a.D.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            G: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            G: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                G: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                G: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            F: d,
            D: e,
            Ja: b
        }
    }

    function Hk(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Ik = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Jk(a, b) {
        W.call(this, a, b)
    }
    w(Jk, W);
    Jk.prototype.g = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Kk(a, b) {
        Lk(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new yk(9, new Jk(a, Math.floor(a * b.google_phwr)));
        var c = Nc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Bk.mobile_banner_image_sidebyside + Dk.mobile_banner_image_sidebyside) + 96), a = {
            V: a,
            T: c,
            D: 1,
            F: 12,
            H: "mobile_banner_image_sidebyside"
        }) : (a = Hk(a), a = {
            V: a.width,
            T: a.height,
            D: 1,
            F: 13,
            H: "image_sidebyside"
        }) : (a = Hk(a), a = {
            V: a.width,
            T: a.height,
            D: 4,
            F: 2,
            H: "image_stacked"
        });
        Mk(b, a);
        return new yk(9, new Jk(a.V, a.T))
    }

    function Nk(a, b) {
        Lk(a, b);
        var c = Gk({
            F: b.google_content_recommendation_rows_num,
            D: b.google_content_recommendation_columns_num,
            H: b.google_content_recommendation_ui_type
        });
        if (c.G) a = {
            V: 0,
            T: 0,
            D: 0,
            F: 0,
            H: "image_stacked",
            G: c.G
        };
        else {
            var d = 2 === c.Ja.length && 468 <= a ? 1 : 0;
            var e = c.Ja[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Fk[e];
            for (var g = c.D[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.F[d];
            d = Math.floor(((a - 8 * f - 8) / f * Bk[e] + Dk[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    pa: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    pa: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = a.pa ? {
                V: 0,
                T: 0,
                D: 0,
                F: 0,
                H: e,
                G: a.pa
            } : {
                V: a.width,
                T: a.height,
                D: f,
                F: c,
                H: e
            }
        }
        if (a.G) throw new N(a.G);
        Mk(b, a);
        return new yk(9, new Jk(a.V, a.T))
    }

    function Lk(a, b) {
        if (0 >= a) throw new N("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Mk(a, b) {
        a.google_content_recommendation_ui_type = b.H;
        a.google_content_recommendation_columns_num = b.D;
        a.google_content_recommendation_rows_num = b.F
    };

    function Ok(a, b) {
        W.call(this, a, b)
    }
    w(Ok, W);
    Ok.prototype.g = function() {
        return this.minWidth()
    };
    Ok.prototype.h = function(a, b, c) {
        Gi(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Pk = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Qk(a, b) {
        W.call(this, a, b)
    }
    w(Qk, W);
    Qk.prototype.g = function() {
        return Math.min(1200, this.minWidth())
    };

    function Rk(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = zi(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = P(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (Ei(b, c), Gi(b, c), a = g)
        }
        if (250 > a) throw new N("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" +
                f);
            return new yk(11, new W(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new N("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new N("Invalid height: height=" + f);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new N("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new yk(11, new W(a, f))
        }
        d = Pk[f];
        if (!d) throw new N("Invalid data-ad-layout value: " + f);
        c = Ki(c, b);
        b = P(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new yk(11, "in-article" == f ? new Qk(a, b) : new W(a, b))
    };

    function Sk(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Tk(a, b) {
        for (var c = Uk.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Y = [new X(970, 90, 2), new X(728, 90, 2), new X(468, 60, 2), new X(336, 280, 1), new X(320, 100, 2), new X(320, 50, 2), new X(300, 600, 4), new X(300, 250, 1), new X(250, 250, 1), new X(234, 60, 2), new X(200, 200, 1), new X(180, 150, 1), new X(160, 600, 4), new X(125, 125, 1), new X(120, 600, 4), new X(120, 240, 4), new X(120, 120, 1, !0)],
        Uk = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];

    function Vk(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            v: a,
            A: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Wk(b) || e.google_ad_resize ? (488 > P(c) && (Bi(c) || V(Lg)) && Ei(c, d), b = Ai(a, c, d, e), c = !0 !== b ? {
            v: a,
            A: b
        } : {
            v: P(c) || a,
            A: !0
        }) : c = {
            v: a,
            A: 2
        };
        b = c.A;
        return !0 !== b ? {
            v: a,
            A: b
        } : d.parentElement ? {
            v: c.v,
            A: b
        } : {
            v: a,
            A: b
        }
    }

    function Xk(a, b, c, d, e) {
        var f = Ve(247, function() {
                return Vk(a, b, c, d, e)
            }),
            g = f.v;
        f = f.A;
        var h = !0 === f,
            k = L(d.style.width),
            l = L(d.style.height),
            m = Yk(g, b, c, d, e, h);
        g = m.U;
        h = m.P;
        var q = m.ja;
        m = m.Ia;
        var t = Zk(b, q),
            v, A = (v = Hi(d, c, "marginLeft", L)) ? v + "px" : "",
            H = (v = Hi(d, c, "marginRight", L)) ? v + "px" : "";
        v = Hi(d, c, "zIndex") || "";
        return new yk(t, g, q, null, m, f, h, A, H, l, k, v)
    }

    function Wk(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Yk(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, P(c)) ? 4 : 3 : yi(b);
        var g = !1,
            h = !1;
        if (488 > P(c)) {
            var k = xi(d, c);
            var l = Ki(d, c);
            g = !l && k;
            h = l && k
        }
        l = 488 > P(c);
        var m = [Ii(a), wk(b)];
        Bi(c) || m.push(Ji(l, c, d, h));
        null != e.google_max_responsive_height && m.push(Mi(e.google_max_responsive_height));
        var q = [function(v) {
            return !v.cb
        }];
        !g && !h || Bi(c) || (g = Ni(c, d), q.push(Mi(g)));
        var t = l && !f && 3 === b && $k(c) ? new X(a, Math.floor(a / 1.2), 1) : Tk(Sk(m), Sk(q));
        if (!t) throw new N("No slot size for availableWidth=" + a);
        l = Ve(248, function() {
            var v;
            a: if (f) {
                if (e.gfwrnh && (v = L(e.gfwrnh))) {
                    v = {
                        U: new Ok(a, v),
                        P: !0
                    };
                    break a
                }
                v = a / 1.2;
                if (Bi(c)) var A = v;
                else {
                    A = Math;
                    var H = A.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var F = Infinity;
                    else {
                        F = d;
                        var da = Infinity;
                        do {
                            var ya = Hi(F, c, "height", L);
                            ya && (da = Math.min(da, ya));
                            (ya = Hi(F, c, "maxHeight", L)) && (da = Math.min(da, ya))
                        } while ((F = F.parentElement) && "HTML" != F.tagName);
                        F = da
                    }
                    A = H.call(A, v, F);
                    if (A < .5 * v || 100 > A) A = v
                }
                V(Qg) && !Ki(d, c) && (A = Math.max(A, .5 * df(c).clientHeight));
                v = {
                    U: new Ok(a, Math.floor(A)),
                    P: A < v ? 102 : !0
                }
            } else v = {
                U: t,
                P: 100
            };
            return v
        });
        g = l.U;
        l = l.P;
        return "in-article" === e.google_ad_layout && al(c) ? {
            U: bl(a, c, d, g, e),
            P: !1,
            ja: b,
            Ia: k
        } : {
            U: g,
            P: l,
            ja: b,
            Ia: k
        }
    }

    function Zk(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function bl(a, b, c, d, e) {
        var f = e.google_ad_height || Hi(c, b, "height", L);
        b = Rk(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(), b.height(), 1) : d
    }

    function al(a) {
        return V(Og) || a.location && "#hffwroe2etoq" == a.location.hash
    }

    function $k(a) {
        return V(Ng) || a.location && "#affwroe2etoq" == a.location.hash
    };

    function cl(a, b, c, d, e) {
        var f;
        (f = P(b)) ? 488 > P(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Gi(b, c), f = {
            v: f,
            A: !0
        }) : f = {
            v: a,
            A: 5
        } : f = {
            v: a,
            A: 4
        }: f = {
            v: a,
            A: 10
        };
        var g = f;
        f = g.v;
        g = g.A;
        if (!0 !== g || a == f) return new yk(12, new W(a, d), null, null, !0, g, 100);
        a = Yk(f, "auto", b, c, e, !0);
        return new yk(1, a.U, a.ja, 2, !0, g, a.P)
    };

    function dl(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = u(Ik), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Wk(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = V(Pg) || V(Og) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (el(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return el(b), 1
    }

    function fl(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Hi(b, d, "width", L) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = gl(a, e, b, c, d)) ? f : Xk(e, c.google_ad_format, d, b, c);
        f.size().h(d, c, b);
        zk(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function gl(a, b, c, d, e) {
        var f = d.google_ad_height || Hi(c, e, "height", L);
        switch (a) {
            case 5:
                return f = Ve(247, function() {
                    return Vk(b, d.google_ad_format, e, c, d)
                }), a = f.v, f = f.A, !0 === f && b != a && Gi(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Kk(a, d);
            case 9:
                return Nk(b, d);
            case 8:
                return Rk(b, e, c, f, d);
            case 10:
                return cl(b, e, c, f, d)
        }
    }

    function el(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Z(a) {
        this.j = [];
        this.h = a || window;
        this.g = 0;
        this.i = null;
        this.l = 0
    }
    var hl;
    n = Z.prototype;
    n.Za = function(a, b) {
        0 != this.g || 0 != this.j.length || b && b != window ? this.Fa(a, b) : (this.g = 2, this.Oa(new il(a, window)))
    };
    n.Fa = function(a, b) {
        this.j.push(new il(a, b || this.h));
        jl(this)
    };
    n.hb = function(a) {
        this.g = 1;
        if (a) {
            var b = We(188, Fa(this.Na, this, !0));
            this.i = this.h.setTimeout(b, a)
        }
    };
    n.Na = function(a) {
        a && ++this.l;
        1 == this.g && (null != this.i && (this.h.clearTimeout(this.i), this.i = null), this.g = 0);
        jl(this)
    };
    n.ob = function() {
        return !(!window || !Array)
    };
    n.$a = function() {
        return this.l
    };

    function jl(a) {
        var b = We(189, Fa(a.pb, a));
        a.h.setTimeout(b, 0)
    }
    n.pb = function() {
        if (0 == this.g && this.j.length) {
            var a = this.j.shift();
            this.g = 2;
            var b = We(190, Fa(this.Oa, this, a));
            a.W.setTimeout(b, 0);
            jl(this)
        }
    };
    n.Oa = function(a) {
        this.g = 0;
        a.g()
    };

    function kl(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function ll() {
        if (hl && kl(hl)) return hl;
        var a;
        if (!Pj) {
            for (var b = a = x, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, Rc(a)) b = a;
                else break;
            Pj = b
        }
        a = Pj;
        return (b = a.google_jobrunner) && ("object" === typeof b || "function" === typeof b) && kl(b) && xd(b.nq) && xd(b.nqa) && xd(b.al) && xd(b.rl) ? hl = b : a.google_jobrunner = hl = new Z(a)
    }

    function ml(a, b) {
        ll().nq(a, b)
    }

    function nl(a, b) {
        ll().nqa(a, b)
    }
    Z.prototype.nq = Z.prototype.Za;
    Z.prototype.nqa = Z.prototype.Fa;
    Z.prototype.al = Z.prototype.hb;
    Z.prototype.rl = Z.prototype.Na;
    Z.prototype.sz = Z.prototype.ob;
    Z.prototype.tc = Z.prototype.$a;

    function il(a, b) {
        this.g = a;
        this.W = b
    };

    function ol(a, b) {
        var c = Fd(b);
        if (c) {
            c = P(c);
            var d = Tc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var pl = {},
        ql = (pl.google_ad_modifications = !0, pl.google_analytics_domain_name = !0, pl.google_analytics_uacct = !0, pl.google_pause_ad_requests = !0, pl.google_trust_token_operation_status = !0, pl.google_user_agent_client_hint = !0, pl);

    function rl(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function sl(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function tl(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };
    var ul = ["AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function vl() {
        var a = J.document;
        a = void 0 === a ? window.document : a;
        pd(ul, a)
    };
    var wl = ["A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd/r0vL69mRRA36YutI9P/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
        "AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function xl() {
        var a = J.document;
        a = void 0 === a ? window.document : a;
        pd(wl, a)
    };

    function yl(a, b, c) {
        var d = window;
        return function() {
            var e = Fe(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Fe() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function zl(a, b) {
        return yl(a, b, function(c, d) {
            (new Re).B(c, d)
        })
    };

    function Al(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Bl(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Cl() {
        var a = new p.Set;
        try {
            if ("undefined" === typeof googletag || !googletag.pubads) return a;
            for (var b = googletag.pubads(), c = u(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
        } catch (e) {}
        return a
    }

    function Dl(a) {
        a = a.id;
        return null != a && (Cl().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }

    function El(a, b, c) {
        if (!a.sources) return !1;
        var d = kh(Zg);
        switch (Fl(a)) {
            case 2:
                var e = Gl(a);
                if (e) return c.some(function(g) {
                    return Hl(e, g, d)
                });
            case 1:
                var f = Il(a);
                if (f) return b.some(function(g) {
                    return Hl(f, g, d)
                })
        }
        return !1
    }

    function Fl(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Il(a) {
        return Jl(a, function(b) {
            return b.currentRect
        })
    }

    function Gl(a) {
        return Jl(a, function(b) {
            return b.previousRect
        })
    }

    function Jl(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Kl() {
        Q.call(this);
        this.i = this.h = this.K = this.J = this.C = 0;
        this.xa = this.ua = Number.NEGATIVE_INFINITY;
        this.qa = this.sa = this.ta = this.va = this.Aa = this.m = this.za = this.O = 0;
        this.ra = !1;
        this.L = this.N = this.s = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.ya = a ? a.getAttribute("data-google-query-id") : null;
        this.M = null;
        this.wa = !1;
        this.aa = function() {}
    }
    w(Kl, Q);

    function Ll() {
        var a = new Kl;
        if (V(Wg) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Ml(a).observe({
                type: c,
                buffered: !V(ah)
            });
            Nl(a)
        }
    }

    function Ml(a) {
        a.M || (a.M = new PerformanceObserver(zl(640, function(b) {
            var c = Ol !== window.scrollX || Pl !== window.scrollY ? [] : Ql,
                d = Rl();
            b = u(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!V(Xg) || .01 < e.value)) {
                        f.C += Number(e.value);
                        Number(e.value) > f.J && (f.J = Number(e.value));
                        f.K += 1;
                        var g = El(e, c, d);
                        g && (f.m += e.value, f.va++);
                        if (5E3 < e.startTime - f.ua || 1E3 < e.startTime - f.xa) f.ua = e.startTime, f.h = 0, f.i = 0;
                        f.xa = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.O && (f.O = f.h, f.Aa = f.i, f.za = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.ta = Math.floor(e.renderTime || e.loadTime);
                    a.sa = e.size;
                    break;
                case "first-input":
                    a.qa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ra = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.s += e, a.N = Math.max(a.N, e), a.L += 1
            }
        })));
        return a.M
    }

    function Nl(a) {
        var b = zl(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Sl(a)
            }),
            c = zl(641, function() {
                return void Sl(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        var d = kh($g),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.aa = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Ml(a).disconnect();
            e && clearTimeout(e)
        }
    }
    Kl.prototype.g = function() {
        Q.prototype.g.call(this);
        this.aa()
    };

    function Sl(a) {
        if (!a.wa) {
            a.wa = !0;
            Ml(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Bl("cls", a.C), b += Bl("mls", a.J), b += Al("nls", a.K), window.LayoutShiftAttribution && (b += Bl("cas", a.m), b += Al("nas", a.va)), b += Bl("wls", a.O), b += Bl("tls", a.za), window.LayoutShiftAttribution && (b += Bl("was", a.Aa)));
            window.LargestContentfulPaint && (b += Al("lcp", a.ta), b += Al("lcps", a.sa));
            window.PerformanceEventTiming && a.ra && (b += Al("fid", a.qa));
            window.PerformanceLongTaskTiming &&
                (b += Al("cbt", a.s), b += Al("mbt", a.N), b += Al("nlt", a.L));
            for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Dl(e.value) && c++;
            b += Al("nif", c);
            b += Al("ifi", zd(window));
            c = R(dg).g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            if (a.ya) c = "&qqid=" + encodeURIComponent(a.ya);
            else {
                if ("number" !== typeof x.goog_pvsid) try {
                    Object.defineProperty(x, "goog_pvsid", {
                        value: Math.floor(Math.random() * Math.pow(2, 52)),
                        configurable: !1
                    })
                } catch (f) {}
                c = Al("pvsid", Number(x.goog_pvsid) ||
                    -1)
            }
            b += c;
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.j || (a.j = !0, a.g())
        }
    }

    function Hl(a, b, c) {
        if (0 === c) return !0;
        var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
    }

    function Rl() {
        var a = [].concat(ma(document.getElementsByTagName("iframe"))).filter(Dl),
            b = [].concat(ma(Cl())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Ol = window.scrollX;
        Pl = window.scrollY;
        return Ql = [].concat(ma(a), ma(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Ol = void 0,
        Pl = void 0,
        Ql = [];

    function Tl(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }
    var Ul = {
        issuerOrigin: "https://adservice.google.com",
        issuancePath: "/tt/i",
        redemptionPath: "/tt/r",
        shouldRedeemToken: function() {
            var a = void 0 === a ? window : a;
            return !Tl(a) || V(ih) ? !0 : !1
        },
        shouldRequestToken: function() {
            return !1
        }
    };

    function Vl() {
        var a = void 0 === a ? window : a;
        if (!Tl(a) && V(bh) || Tl(a) && V(ch)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    }
    var Wl = {
        issuerOrigin: "https://attestation.android.com",
        issuancePath: "/att/i",
        redemptionPath: "/att/r",
        shouldRedeemToken: function() {
            return Vl()
        },
        shouldRequestToken: function() {
            return Vl()
        }
    };
    var Xl = ["A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9"
    ];

    function Yl(a, b, c) {
        a = void 0 === a ? function() {} : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        Q.call(this);
        Zl();
        this.s = b || V(eh) ? [Wl] : [Ul, Wl];
        this.i = c;
        this.m = a;
        if (document.hasTrustToken && !V(dh))
            if (V(gh)) {
                if (!Array.isArray(window.goog_tt_state)) {
                    var d = $l(this);
                    Object.defineProperty(window, "goog_tt_state", {
                        configurable: !1,
                        get: function() {
                            return d.slice()
                        }
                    })
                }
            } else this.h = $l(this)
    }
    w(Yl, Q);

    function Zl() {
        var a = void 0 === a ? window.document : a;
        pd(Xl, a)
    }

    function $l(a) {
        var b = a.s.map(function(c) {
            return {
                issuerOrigin: c.issuerOrigin,
                state: V(fh) && !a.i ? 12 : 1
            }
        });
        V(gh) || a.m(b);
        return b
    }

    function am(a, b, c) {
        if (V(gh)) {
            if (a = r(window.goog_tt_state, "find").call(window.goog_tt_state, function(e) {
                    return e.issuerOrigin === b
                })) a.state = c
        } else {
            var d = r(a.h, "find").call(a.h, function(e) {
                return e.issuerOrigin === b
            });
            d && (d.state = c, a.m(a.h))
        }
    }

    function bm() {
        var a = window.goog_tt_state;
        return Array.isArray(a) && a.some(function(b) {
            return 1 != b.state
        })
    }

    function cm(a, b) {
        var c = b.issuerOrigin + b.redemptionPath,
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
        am(a, b.issuerOrigin, 2);
        return window.fetch(c, d).then(function(e) {
            if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            am(a, b.issuerOrigin, 6)
        }).catch(function(e) {
            e && "NoModificationAllowedError" === e.name ? am(a, b.issuerOrigin, 6) : am(a, b.issuerOrigin, 5)
        })
    }

    function dm(a, b, c) {
        var d = b.issuerOrigin + b.issuancePath;
        am(a, b.issuerOrigin, 8);
        return window.fetch(d, {
            trustToken: {
                type: "token-request"
            }
        }).then(function(e) {
            if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            am(a, b.issuerOrigin, 10);
            if (c) return cm(a, b)
        }).catch(function(e) {
            if (e && "NoModificationAllowedError" === e.name) {
                if (am(a, b.issuerOrigin, 10), c) return cm(a, b)
            } else am(a, b.issuerOrigin, 9)
        })
    }

    function em(a) {
        if (!(!document.hasTrustToken || V(dh) || V(fh) && !a.i || V(gh) && bm())) {
            var b = [];
            a.s.forEach(function(c) {
                var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                            if (d) return cm(a, c)
                        } else {
                            if (e) return dm(a, c, d);
                            am(a, c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else am(a, c.issuerOrigin, 7)
            });
            if (p.Promise && p.Promise.all) return p.Promise.all(b)
        }
    };

    function fm(a) {
        B(this, a, gm, null)
    }
    w(fm, z);
    var gm = [6];
    var hm = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function im() {
        var a = J;
        return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(hm).then(function(b) {
            var c = new fm;
            c = Sb(c, 1, b.platform);
            c = Sb(c, 2, b.platformVersion);
            c = Sb(c, 3, b.architecture);
            c = Sb(c, 4, b.model);
            c = Sb(c, 5, b.uaFullVersion);
            return Sb(c, 9, b.bitness)
        }) : null
    };

    function jm(a) {
        a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
    }

    function km(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function lm(a, b, c) {
        var d = J;
        c = void 0 === c ? "" : c;
        jm(d);
        d.google_sa_queue || (d.google_sa_queue = [], d.google_sl_win = d, d.google_process_slots = function() {
            return mm(d)
        }, a = nm(d, c, a, b), Sc(d.document, a).id = "google_shimpl")
    }
    var mm = We(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || Xe("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && Ve(216, c);
        b.length && a.setTimeout(function() {
            return mm(a)
        }, 0)
    });

    function om(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function nm(a, b, c, d) {
        var e = Math.random() < kh(Gg) ? hb(Gc(c.kb).toString()) : null;
        c = Qb(d, 4) ? c.jb : c.lb;
        c = e ? e : hb(Gc(c).toString());
        e = {};
        a: {
            if (Qb(d, 4)) {
                if (d = b || pm(a)) {
                    var f = {};
                    d = (f.client = d, f.plah = a.location.host, f.amaexp = 1, f);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        qm(d, e);
        a: {
            if (d = kh(vg))
                if (b = b || pm(a)) {
                    f = {};
                    a = (f.client = b, f.plah = a.location.host, f.eid = "" + d, f.ama_t = "adsense", f);
                    break a
                }
            a = {}
        }
        qm(a, e);
        a = [];
        R(jh).g(Rg.g, Rg.defaultValue) && a.push(R(jh).g(Rg.g, Rg.defaultValue));
        qm(0 === a.length ? {} : {
            bust: a.join("~")
        }, e);
        a = gb.exec(fb(c).toString());
        c = a[3] || "";
        return hb(a[1] + ib("?", a[2] || "", e) + ib("#", c, void 0))
    }

    function qm(a, b) {
        Yc(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function pm(a) {
        if (a.google_ad_client) return a.google_ad_client;
        if (Hg) {
            var b = I(a).head_tag_slot_vars;
            if (b && b.google_ad_client) return b.google_ad_client
        } else if (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) return b.getAttribute("data-ad-client");
        if (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) return b.getAttribute("data-ad-client");
        b: {
            b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) ||
            /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Ed() ? rl : sl;
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                    b = d;
                    break b
                }
            }
            b = null
        }
        if (b) {
            a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            for (c = {}; d = a.exec(b);) c[d[1]] = tl(d[2]);
            b = c.google_ad_client ? c.google_ad_client : ""
        } else b = "";
        return b ? b : ""
    }

    function rm(a) {
        if (!vk) a: {
            for (var b = [x.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (l) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    vk = h;
                    break a
                }
            } catch (l) {}
            vk = null
        }
        if (vk) return null;
        c = Lc(document, "IFRAME");
        c.id = "google_esf";
        c.name = "google_esf";
        a = a.rb;
        if (a instanceof pc) {
            var k;
            a = sc(a);
            a = (null === (k = mc()) || void 0 === k ? 0 : k.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
        } else a = fb(a).toString();
        c.src = a;
        c.style.display = "none";
        return c
    }

    function sm(a, b, c, d) {
        tm(a, b, c, d, function(e, f) {
            var g = e.document;
            e = void 0;
            for (var h = 0; !e || g.getElementById(e + "_anchor");) e = "aswift_" + h++;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0),
                l = f.ds || "";
            l && (l += r(l, "endsWith").call(l, ";") ? "" : ";");
            if (V(Ug)) f = Lc(document, "INS"), f.id = e + "_anchor", uk(f, h, k), f.style.display = "block", g = Lc(document, "INS"), g.id = e + "_expand", uk(g, h, k), g.style.display = "inline-table", g.appendChild(f), c.appendChild(g);
            else {
                var m = "";
                m = void 0 === m ? "" : m;
                h = "border:none;height:" +
                    k + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (h + "px;background-color:transparent;");
                h = ['<ins id="' + (e + '_expand"'), ' style="display:inline-table;' + h + (void 0 === l ? "" : l) + '"', m ? ' data-ad-slot="' + m + '">' : ">", '<ins id="' + (e + '_anchor" style="display:block;') + h + '">', "</ins></ins>"].join("");
                16 == f.google_reactive_ad_format || f.rss ? (f = g.createElement("div"), g = vb(h), yb(f, g), c.appendChild(f.firstChild)) : (f = vb(h), yb(c, f))
            }
            return e
        })
    }

    function tm(a, b, c, d, e) {
        var f = e(a, b);
        um(a, c, b);
        c = Ja;
        e = (new Date).getTime();
        b.google_lrv = D(d, 2, "");
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? ml : nl;
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            iframeWin: null,
            vars: b
        };
        om(a, function() {
            b.dninfo += "_" + !!a.document.getElementById(f + "_anchor");
            var h = a.google_sa_impl(g);
            h && h.catch && h.catch(function(k) {
                O.B(911,
                    k instanceof Error ? k : Error(k), void 0, void 0)
            })
        }, c)
    }

    function um(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Ec[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Zc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var v = t.frames;
                    for (d = 0; d < v.length; ++d)
                        if (a === v[d]) {
                            b.push(d);
                            break
                        }
                    a = t;
                    t = a.parent
                }
            } catch (A) {}
            c.google_ad_dom_fingerprint = Zc(h + b.join()).toString()
        }
    };

    function vm(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function wm(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            var d = c.search(Qc),
                e;
            b: {
                for (e = 0; 0 <= (e = c.indexOf("client", e)) && e < d;) {
                    var f = c.charCodeAt(e - 1);
                    if (38 == f || 63 == f)
                        if (f = c.charCodeAt(e + 6), !f || 61 == f || 38 == f || 35 == f) break b;
                    e += 7
                }
                e = -1
            }
            if (0 > e) c = null;
            else {
                f = c.indexOf("&", e);
                if (0 > f || f > d) f = d;
                e += 7;
                c = decodeURIComponent(c.substr(e, f - e).replace(/\+/g, " "))
            }
            c && (b.google_ad_client = vm("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) f = a[d], /data-/.test(f.name) && (e = jb(f.name.replace("data-matched-content",
            "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), b.hasOwnProperty(e) || (f = vm(e, f.value), null !== f && (b[e] = f)))
    }

    function xm(a) {
        if (a = rd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function ym(a, b, c) {
        wm(a, b);
        if (c.document && c.document.body && !dl(c, b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10),
                e = ol(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!Ec[d + "x" + f];
                var g = e;
                if (d) {
                    var h = Fc(e, f);
                    if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                    else throw new N("No slot size for availableWidth=" + e);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = g;
                a.style.width = e + "px";
                f = Xk(e, "auto", c, a, b);
                g = e;
                f.size().h(c, b, a);
                zk(f, g, b);
                f = f.size();
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
            }
        }
        d = a.offsetWidth || Hi(a, c, "width", L) || b.google_ad_width || 0;
        e = Ga(Xk, d, "auto", c, a, b, !1, !0);
        f = Fd(c) || c;
        g = b.google_ad_client;
        f = f.location && "#ftptohbh" === f.location.hash ? 2 : Gd(f.location, "google_responsive_slot_debug") || Gd(f.location, "google_responsive_slot_preview") || V(Kg) ? 1 : V(Ig) ? 2 : ef(f, 1, g) ? 1 : 0;
        if (g = 0 !== f) b: if (!(488 > P(c) || V(Jg)) || b.google_reactive_ad_format || dl(c,
                    b) || ui(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = Tc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b
                    }
                    if (!Ua(["static", "relative"], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b
                    }
                }
                if (!V(Jg) && (g = zi(c, a, d, .3, b), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b
                }
                g = c.top == c ? !0 : !1
            }
        g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, zk(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
        if (e = dl(c, b)) fl(e,
            a, b, c, d);
        else {
            if (ui(a, b)) {
                if (d = Tc(a, c)) a.style.width = d.width, a.style.height = d.height, ti(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = xm(c)
            } else ti(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? fl(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Ai(a.offsetWidth ||
                parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function zm(a) {
        B(this, a, null, null)
    }
    w(zm, z);

    function Am(a) {
        B(this, a, null, null)
    }
    w(Am, z);

    function Bm(a) {
        B(this, a, null, null)
    }
    w(Bm, z);

    function Cm(a) {
        a = (a = (new ak(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? Lb(zm, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    }

    function Dm(a) {
        return (a = Cm(a)) ? E(a, Am, 4) : null
    };

    function Em(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var e = Lc(d.g, "IFRAME");
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = "__uspapiLocator";
                    c.body.appendChild(e)
                } else a.setTimeout(b, 5)
        }
        var c = a.document,
            d = a ? new Mc(9 == a.nodeType ? a : a.ownerDocument || a.document) : Ka || (Ka = new Mc);
        b()
    };

    function Fm(a) {
        this.g = a;
        this.h = a.document;
        this.i = (a = (a = Cm(this.h)) ? E(a, Bm, 5) || null : null) ? C(a, 2) : null;
        (a = Dm(this.h)) && null != C(a, 1) && C(a, 1);
        (a = Dm(this.h)) && null != C(a, 2) && C(a, 2)
    }

    function Gm() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new Fm(a), Hm(a))
    }

    function Hm(a) {
        !a.i || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Em(a.g), Ha(function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.j.apply(a, ma(c))
        }))
    }
    Fm.prototype.j = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.i
        }, !0)
    };

    function Im(a, b) {
        b = void 0 === b ? 500 : b;
        Q.call(this);
        this.i = a;
        this.Ra = b;
        this.h = null;
        this.s = {};
        this.m = null
    }
    w(Im, Q);
    Im.prototype.g = function() {
        this.s = {};
        this.m && (Kc(this.i, "message", this.m), delete this.m);
        delete this.s;
        delete this.i;
        delete this.h;
        Q.prototype.g.call(this)
    };

    function Jm(a) {
        Q.call(this);
        this.i = a;
        this.h = null;
        this.m = !1
    }
    w(Jm, Q);
    var Km = null,
        Lm = [],
        Mm = new p.Map;

    function Nm(a) {
        return Dd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function Om(a, b, c) {
        a.setAttribute("data-adsbygoogle-status", "done");
        Pm(a, b, c)
    }

    function Pm(a, b, c) {
        var d = window,
            e = Cd();
        e.google_spfd || (e.google_spfd = ym);
        (e = b.google_reactive_ads_config) || ym(a, b, d);
        km(d, b);
        if (!Qm(a, b, d)) {
            e || (d.google_lpabyc = vi(a, d) + Hi(a, d, "height", L));
            if (e) {
                e = e.page_level_pubvars || {};
                if (I(J).page_contains_reactive_tag && !I(J).allow_second_reactive_tag) {
                    if (e.pltais) {
                        dc(!1);
                        return
                    }
                    throw new N("Only one 'enable_page_level_ads' allowed per page.");
                }
                I(J).page_contains_reactive_tag = !0;
                dc(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = yd(d);
            wd(ql, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (I(J).first_tag_on_page || 0);
            Ve(164, function() {
                sm(d, b, a, c)
            })
        }
    }

    function Qm(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className),
            f = $b(c);
        if (f && f.Ba && "on" != b.google_adtest && !e) {
            e = vi(a, c);
            var g = df(c).clientHeight;
            if (!f.ka || f.ka && ((0 == g ? null : e / g) || 0) >= f.ka) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Aa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.nb && (null !== ed(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== ed(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Tc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Rm(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Nm(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function Sm(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Tm(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Um() {
        var a = Lc(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        hd(a);
        return a
    }

    function Vm(a, b) {
        var c = {};
        wd($e, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        za(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Um();
        Dc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!I(J).pause_ad_requests;
        Om(d, e, b)
    }

    function Wm(a, b) {
        function c() {
            return Vm(a, b)
        }
        cf(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Na(We(191, c));
            Jc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Tm(a, b, c) {
        var d = {};
        Ve(165, function() {
            Xm(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Ym(a) {
        delete a.google_checked_head;
        Yc(a, function(b, c) {
            kc[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Zm(a) {
        var b = J,
            c = V(Hg) && b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = I(window);
            if (d.head_tag_slot_vars) throw new N("Only one AdSense head tag supported per page. The second tag is ignored.");
            var e = {};
            wm(c, e);
            Ym(e);
            var f = Ya(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            b.adsbygoogle || (b.adsbygoogle = []);
            b = b.adsbygoogle;
            b.loaded ? b.push(c) : b.splice(0, 0, c);
            e.google_adbreak_test && $m(f, a);
            Ze(function() {
                $m(f, a)
            })
        }
    }

    function an(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks || "string" === typeof a.EXPERIMENTAL_userInteractionChecks) return 3
        }
        return 0
    }

    function Xm(a, b, c, d) {
        if (null == a) throw new N("push() called with no parameters.");
        bn(a, D(d, 7, ""), D(d, 2, ""));
        var e = an(a);
        if (0 !== e) null == Km ? (cn(a), Lm.push(a)) : 3 === e ? Ve(787, function() {
            Km.handleAdConfig(a)
        }) : Km.handleAdBreak(a).catch(function(g) {
            O.B(730, g instanceof Error ? g : Error(String(g)), void 0, void 0)
        });
        else {
            Ja = (new Date).getTime();
            lm(c, d, dn(a));
            en();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        c = !0;
                        break a
                    }
                    throw new N("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }
            if (c) fn(a, d, b);
            else if ((c = a.params) && wd(c, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                c = gn(a.element);
                wm(c, b);
                e = I(x).head_tag_slot_vars || {};
                Yc(e, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (c.hasAttribute("data-require-head") && !I(x).head_tag_slot_vars) throw new N("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new N("Ad client is missing from the slot.");
                b.google_apsail = jf(b.google_ad_client);
                var f = (e = 0 === (I(J).first_tag_on_page || 0) && Nj(b)) && Oj(e);
                e && !f && (fn(e, d), I(J).skip_next_reactive_tag = !0);
                0 === (I(J).first_tag_on_page || 0) && (I(J).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!I(J).pause_ad_requests;
                Om(c, b, d);
                e && f && hn(e)
            }
        }
    }
    var jn = !1;

    function bn(a, b, c) {
        var d = J;
        V(Fg) && !jn && (jn = !0, (a = dn(a)) || (a = pm(d)), Xe("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, 1))
    }

    function dn(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function en() {
        var a = J;
        if (V(yg)) {
            var b = $b(a);
            if (!(b = b && b.Ba)) {
                try {
                    var c = a.localStorage
                } catch (d) {
                    c = null
                }
                c = c ? di(c) : null;
                b = !(c && ei(c) && c)
            }
            b || cc(a, 1)
        }
    }

    function hn(a) {
        qd(function() {
            cf(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function fn(a, b, c) {
        I(J).skip_next_reactive_tag ? I(J).skip_next_reactive_tag = !1 : (0 === (I(J).first_tag_on_page || 0) && (I(J).first_tag_on_page = 1), c && a.tag_partner && (bc(x, a.tag_partner), bc(c, a.tag_partner)), c = Qb(b, 6), I(J).ama_ran_on_page || mk(new lk(a, V(Dg), kh(Bg), V(Cg), V(Ag), V(zg), c)), Wm(a, b))
    }

    function gn(a) {
        if (a) {
            if (!Nm(a) && (a.id ? a = Rm(a.id) : a = null, !a)) throw new N("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new N("'element' is not a good DOM element.");
        } else if (a = Rm(), !a) throw new N("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function kn() {
        var a = J,
            b = new bk(a),
            c = new Im(a),
            d = new Jm(a);
        a = a.__cmp ? 1 : 0;
        b = ck(b) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = c.i) || void 0 === e ? void 0 : e.__uspapi)) || (c.h ? c = c.h : (c.h = fd(c.i, "__uspapiLocator"), c = c.h), f = null != c);
        d.m || (d.h || (d.i.googlefc ? d.h = d.i : d.h = fd(d.i, "googlefcPresent")), d.m = !0);
        Xe("cmpMet", {
            tcfv1: a,
            tcfv2: b,
            usp: f ? 1 : 0,
            fc: d.h ? 1 : 0,
            ptt: 9
        }, kh(ug))
    }

    function ln(a) {
        Rj().S[Tj(26)] = !!Number(a)
    }

    function mn(a) {
        Number(a) ? I(J).pause_ad_requests = !0 : (I(J).pause_ad_requests = !1, a = function() {
            if (!I(J).pause_ad_requests) {
                var b = Cd(),
                    c = Cd();
                try {
                    if (Dc.createEvent) {
                        var d = Dc.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (xd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (xd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function nn(a) {
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        J._gfp_a_ = a
    }

    function on(a) {
        xd(a) && window.setTimeout(a, 0)
    }

    function $m(a, b) {
        (aa = Kj(hb(Gc(b.mb).toString())).then(function(c) {
            null == Km && (c.init(a), Km = c, pn())
        }).catch(function(c) {
            O.B(723, c instanceof Error ? c : Error(String(c)), void 0, void 0)
        }), r(aa, "finally")).call(aa, function() {
            Lm.length = 0
        })
    }

    function pn() {
        for (var a = u(r(Mm, "keys").call(Mm)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Mm.get(b); - 1 !== c && (x.clearTimeout(c), Mm.delete(b))
        }
        a = {};
        for (b = 0; b < Lm.length; a = {
                $: a.$,
                X: a.X
            }, b++) Mm.has(b) || (a.X = Lm[b], a.$ = an(a.X), Ve(723, function(d) {
            return function() {
                3 === d.$ ? Km.handleAdConfig(d.X) : 2 === d.$ && Km.handleAdBreakBeforeReady(d.X).catch(function(e) {
                    O.B(730, e instanceof Error ? e : Error(String(e)), void 0, void 0)
                })
            }
        }(a)))
    }

    function cn(a) {
        var b = Lm.length;
        if (2 === an(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Mm.set(b, -1)
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * kh(Sg));
            Mm.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        O.Pa(Ye);
        Ve(166, function() {
            var e = tk(b);
            rk(O, D(e, 2, ""));
            d();
            ii(16, [1, Vb(e)]);
            var f = sd(rd(J)) || J,
                g = c(a, e);
            qh(f, e, null === J.document.currentScript ? 1 : jc(g.qb));
            if ((!y("Trident") && !y("MSIE") || 0 <= kb(qb(), 11)) && (null == (J.Prototype || {}).Version || !V(Eg))) {
                Se(V(Yg));
                if (!V(fh)) {
                    var h = We(780, function(t) {
                        J.google_trust_token_operation_status = t
                    });
                    We(779, function() {
                        var t = V(gh) ? new Yl : new Yl(h);
                        0 < kh(hh) ? J.google_trust_token_operation_promise = em(t) : em(t)
                    })()
                }
                f = im();
                null !=
                    f && f.then(function(t) {
                        J.google_user_agent_client_hint = JSON.stringify(t.h && Ub(t), Wb)
                    });
                xl();
                vl();
                Gm();
                try {
                    Ll()
                } catch (t) {}
                if (f = Fd(x)) f = cf(f), f.tagSpecificState[1] || (f.tagSpecificState[1] = new qk);
                Zm(g);
                f = window;
                var k = f.adsbygoogle;
                if (!k || !k.loaded) {
                    kh(ug) && kn();
                    var l = {
                        push: function(t) {
                            Tm(t, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(l, "requestNonPersonalizedAds", {
                            set: ln
                        }), Object.defineProperty(l, "pauseAdRequests", {
                            set: mn
                        }), Object.defineProperty(l, "cookieOptions", {
                            set: nn
                        }), Object.defineProperty(l, "onload", {
                            set: on
                        })
                    } catch (t) {}
                    if (k)
                        for (var m = u(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), q = m.next(); !q.done; q = m.next()) q = q.value, void 0 !== k[q] && (l[q] = k[q]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Sm(k, g, e);
                    f.adsbygoogle = l;
                    k && (l.onload = k.onload);
                    (f = rm(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202107130101", sk, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "";
        D(b, 3, "");
        var d = D(b, 3, "").replace(/^\//, "");
        b = D(b, 2, "");
        var e = a ? tc(uc, a, c) : tc(vc, b, d, c),
            f = tc(wc, b, d);
        return {
            mb: e,
            lb: a ?
                tc(xc, a, c) : tc(yc, b, d, c),
            jb: a ? tc(zc, a, c) : tc(Ac, b, d, c),
            kb: a ? tc(Bc, a, c) : tc(Cc, b, d, c),
            rb: f,
            qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20210712\",\"\/r20190131\",null,[],null,null,\".google.co.in\",null,null,[],[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1049,null,null,[1]],[1078,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[1036,null,null,[1]],[310,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1074,null,null,[1]],[230,null,null,[1]],[1931,null,null,[1]],[377431981,null,null,[1]],[377914450,null,null,[1]],[1945,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[374326588,null,null,[1]],[377105258,null,null,[1]]],[[10,[[10,[[44739547],[44739548,[[1049,null,null,[1]]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44743411],[44743412,[[null,1072,null,[null,0.75]]]],[44743413,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,100],[1,[[44743414],[44743415,[[null,1072,null,[null,0.75]]]],[44743416,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,120],[1,[[44743417],[44743418,[[null,1072,null,[null,0.75]]]],[44743419,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,140],[1,[[44745298],[44745299,[[1033,null,null,[1]]]],[44745300,[[1033,null,null,[1]]]],[44745301,[[1033,null,null,[1]]]],[44745302,[[1033,null,null,[1]]]],[44745303,[[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[50,[[31060004,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060005,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060030],[31060031,[[1928,null,null,[1]]]]]],[10,[[31060930],[31060932,[[1060,null,null,[1]]]]]],[50,[[31060956],[31060957,[[1059,null,null,[1]]]]]],[100,[[31060972]]],[1000,[[31060973,null,[6,null,null,null,6,null,\"31060917\"]],[31060974,[[null,null,14,[null,null,\"exp=31060974\"]]],[6,null,null,null,6,null,\"31060918\"]],[31060975,[[null,null,14,[null,null,\"exp=31060975\"]]],[6,null,null,null,6,null,\"31060919\"]]]],[10,[[31061380],[31061381,[[1073,null,null,[1]]]]]],[10,[[31061485],[31061486,[[1078,null,null,[1]]]]]],[1000,[[31061745,null,[6,null,null,null,6,null,\"31060917\"]],[31061746,[[null,null,14,[null,null,\"exp=31061746\"]]],[6,null,null,null,6,null,\"31060918\"]],[31061747,[[null,null,14,[null,null,\"exp=31061747\"]]],[6,null,null,null,6,null,\"31060919\"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[50,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[12,[[1000,[[20211866,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]]]]]],[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,360245595,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[null,[[31061487],[31061488,[[379841917,null,null,[1]],[null,1935,null,[null,200]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[44740386]]],[10,[[44743203,[[1940,null,null,[1]]]],[44743204,[[1940,null,null,[]]]],[44744170]]]]],[20,[[10,[[31061694],[31061695,[[380025941,null,null,[1]]]]],null,null,null,null,null,201,null,102]]],[17,[[null,[[44744439,[[290,null,null,[1]],[190,null,null,[1]]]],[44744441,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[290,null,null,[1]],[190,null,null,[1]]]]],null,null,null,null,null,null,null,105],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[1000,[[31060474,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[100,[[31060744],[31060745,[[360245598,null,null,[1]],[null,1927,null,[null,100]]]]],[4,null,9,null,null,null,null,[\"document.interestCohort\"]]],[null,[[31060791,null,[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame_ctrl\"]]],[31060792,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame\"]]]]]]],[13,[[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"31061691\"]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]]]]]");