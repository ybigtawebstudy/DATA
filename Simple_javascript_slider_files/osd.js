(function(window, document) {
    var k;

    function aa(a) {
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

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function r(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    Nb: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Nb;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da;

    function t(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Eb = b.prototype
    }
    var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function la(a, b) {
        if (b) {
            var c = ka;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    la("Object.assign", function(a) {
        return a || ma
    });
    la("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var u = this || self;

    function v(a) {
        return "string" == typeof a
    }

    function na(a) {
        return "number" == typeof a
    }

    function oa() {}

    function w(a) {
        a.Ta = void 0;
        a.g = function() {
            return a.Ta ? a.Ta : a.Ta = new a
        }
    }

    function pa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function qa(a) {
        return "array" == pa(a)
    }

    function ra(a) {
        var b = pa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function sa(a) {
        return "function" == pa(a)
    }

    function ta(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ua(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function va(a, b, c) {
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

    function wa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa = ua : wa = va;
        return wa.apply(null, arguments)
    }

    function xa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ya(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function za(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Eb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.hc = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    var Aa;
    Aa = ["av.key", "js", "20190626"].slice(-1)[0];
    var x = document,
        y = window;
    var Ba;

    function Ca(a, b) {
        if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function z(a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function Da(a, b) {
        for (var c = a.length, d = [], e = 0, f = v(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            } return d
    }

    function Ea(a, b) {
        for (var c = a.length, d = Array(c), e = v(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Fa(a, b, c) {
        var d = c;
        z(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ga(a, b) {
        for (var c = a.length, d = v(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ha(a, b) {
        var c = 0;
        z(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Ia(a, b) {
        b = Ja(a, b, void 0);
        return 0 > b ? null : v(a) ? a.charAt(b) : a[b]
    }

    function Ja(a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ka(a, b) {
        return 0 <= Ca(a, b)
    }

    function La(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ma(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Na(a, b) {
        a.sort(b || Oa)
    }

    function Oa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Pa(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function Qa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ra(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Sa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ta(a) {
        var b = Ua,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Va(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Xa(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Wa.length; f++) c = Wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Ya(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Za = /&/g,
        $a = /</g,
        ab = />/g,
        bb = /"/g,
        cb = /'/g,
        db = /\x00/g,
        eb = /[\x00&<>"']/;

    function A(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function fb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var B;
    a: {
        var gb = u.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                B = hb;
                break a
            }
        }
        B = ""
    }

    function C(a) {
        return -1 != B.indexOf(a)
    };

    function ib() {
        return C("Safari") && !(jb() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }

    function jb() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    };

    function kb(a) {
        eb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Za, "&amp;")), -1 != a.indexOf("<") && (a = a.replace($a, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ab, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(bb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(cb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(db, "&#0;")));
        return a
    }

    function lb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function mb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function nb(a) {
        var b = v(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(c, d, e) {
            return d + e.toUpperCase()
        })
    };

    function ob(a) {
        ob[" "](a);
        return a
    }
    ob[" "] = oa;

    function pb(a, b) {
        try {
            return ob(a[b]), !0
        } catch (c) {}
        return !1
    }

    function qb(a, b) {
        var c = rb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var sb = C("Opera"),
        D = C("Trident") || C("MSIE"),
        tb = C("Edge"),
        ub = C("Gecko") && !(A(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        vb = A(B, "WebKit") && !C("Edge"),
        wb = vb && C("Mobile");

    function xb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var yb;
    a: {
        var zb = "",
            Ab = function() {
                var a = B;
                if (ub) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (tb) return /Edge\/([\d\.]+)/.exec(a);
                if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (vb) return /WebKit\/(\S+)/.exec(a);
                if (sb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ab && (zb = Ab ? Ab[1] : "");
        if (D) {
            var Bb = xb();
            if (null != Bb && Bb > parseFloat(zb)) {
                yb = String(Bb);
                break a
            }
        }
        yb = zb
    }
    var Cb = yb,
        rb = {};

    function Db(a) {
        return qb(a, function() {
            for (var b = 0, c = Ya(String(Cb)).split("."), d = Ya(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = fb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || fb(0 == g[2].length, 0 == h[2].length) || fb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Eb;
    Eb = u.document && D ? xb() : void 0;
    var Fb = null;
    var Gb = 0,
        Hb = 0;

    function Ib() {
        this.a = []
    }
    Ib.prototype.length = function() {
        return this.a.length
    };

    function Jb(a) {
        var b = a.a;
        a.a = [];
        return b
    }

    function Kb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function Lb(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Mb() {
        this.b = [];
        this.c = 0;
        this.a = new Ib
    }
    Mb.prototype.reset = function() {
        this.b = [];
        Jb(this.a);
        this.c = 0
    };

    function Nb(a, b, c) {
        if (null != c) {
            Kb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            Gb = b;
            Hb = d;
            c = Gb;
            for (b = Hb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Ob() {}
    var Pb = "function" == typeof Uint8Array,
        Qb = [];

    function Rb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Qb ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Qb ? a.b[b] = [] : c
    }

    function Sb(a, b) {
        a = Rb(a, b);
        return null == a ? 0 : a
    }

    function Tb(a, b, c) {
        if (0 !== c)
            if (b < a.f) a.a[b + a.c] = c;
            else {
                var d = a.f + a.c;
                a.a[d] || (a.b = a.a[d] = {});
                a.b[b] = c
            }
        else a.a[b + a.c] = null
    }

    function Ub(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if (qa(c))
                    for (var d = 0; d < c.length; d++) c[d] && Ub(c[d]);
                else c && Ub(c)
            }
    }
    Ob.prototype.toString = function() {
        Ub(this);
        return this.a.toString()
    };
    var Vb = !D || 9 <= Number(Eb),
        Wb = D || sb || vb;

    function E(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    E.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    E.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    E.prototype.round = function() {
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

    function Xb(a) {
        return a ? new Yb(Zb(a)) : Ba || (Ba = new Yb)
    }

    function $b() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : ac(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function ac(a, b, c, d) {
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
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Ka(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function bc(a, b) {
        Ra(b, function(c, d) {
            c && "object" == typeof c && c.jc && (c = c.ic());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : cc.hasOwnProperty(d) ? a.setAttribute(cc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var cc = {
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

    function dc(a) {
        var b = a.scrollingElement ? a.scrollingElement : vb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return D && Db("10") && a.pageYOffset != b.scrollTop ? new E(b.scrollLeft, b.scrollTop) : new E(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function ec(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function fc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!Vb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', kb(g.name), '"');
            if (g.type) {
                f.push(' type="', kb(g.type), '"');
                var h = {};
                Xa(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (v(g) ? f.className = g : qa(g) ? f.className = g.join(" ") : bc(f, g));
        2 < d.length && gc(e, f, d);
        return f
    }

    function gc(a, b, c) {
        function d(g) {
            g && b.appendChild(v(g) ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ra(f) || ta(f) && 0 < f.nodeType ? d(f) : z(hc(f) ? Ma(f) : f, d)
        }
    }

    function ic(a) {
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

    function Zb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function jc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? ec(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function hc(a) {
        if (a && "number" == typeof a.length) {
            if (ta(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (sa(a)) return "function" == typeof a.item
        }
        return !1
    }

    function kc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Yb(a) {
        this.a = a || u.document || document
    };

    function lc() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };

    function mc(a) {
        try {
            return !!a && null != a.location.href && pb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function nc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function oc(a) {
        var b = [];
        nc(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function pc() {
        var a = qc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var rc = Qa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function sc(a) {
        return a ? a.passive && rc() ? a : a.capture || !1 : !1
    }

    function uc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, sc(d)), !0) : !1
    }

    function vc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, sc(void 0))
    };

    function wc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    var xc = Qa(function() {
        return "referrerPolicy" in u.document.createElement("img")
    });
    var yc = {
        ec: 1,
        gc: 2,
        dc: 3
    };
    var zc;
    zc = /^true$/.test("<<<IS_DEBUG_IP>>>");
    try {
        JSON.parse("<<<ADSENSE_EXPERIMENT_STATE_JSPB>>>")
    } catch (a) {};

    function H(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = H.prototype;
    k.I = function() {
        return this.right - this.left
    };
    k.H = function() {
        return this.bottom - this.top
    };

    function Ac(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Bc(a, b, c) {
        b instanceof E ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, na(c) && (a.top += c, a.bottom += c));
        return a
    };
    var Cc = {};

    function Dc(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };

    function Ec(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };

    function Fc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Gc() {
        var a = x.documentElement,
            b = I();
        try {
            if (x.createEvent) {
                var c = x.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Fc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Fc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function Hc() {
        var a = I();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Ic = !!window.google_async_iframe_id,
        Jc = Ic && window.parent || window;

    function I() {
        if (Ic && !mc(Jc)) {
            var a = "." + x.domain;
            try {
                for (; 2 < a.split(".").length && !mc(Jc);) x.domain = a = a.substr(a.indexOf(".") + 1), Jc = window.parent
            } catch (b) {}
            mc(Jc) || (Jc = window)
        }
        return Jc
    };

    function Kc(a, b, c) {
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
            } catch (q) {
                d = new G(-12245933, -12245933)
            }
            a = d;
            var n = dc(Xb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new H(m, m, m, m)
            } else l = new H(n.y, n.x + a.width, n.y + a.height, n.x);
            return l
        } catch (q) {
            return new H(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Lc = {
        NONE: 0,
        Wb: 1
    };

    function Mc() {
        this.o = 0;
        this.f = !1;
        this.b = -1;
        this.a = !1;
        this.c = 0
    }
    Mc.prototype.isVisible = function() {
        return this.a ? .3 <= this.o : .5 <= this.o
    };
    var J = {
            Vb: 0,
            Xb: 1
        },
        Nc = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Oc = {
            668123008: 0,
            668123009: 1
        },
        Pc = {
            668123028: 0,
            668123029: 1
        },
        Qc = {
            NONE: 0,
            cc: 1,
            Yb: 2
        },
        Rc = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        Sc = {
            319331040: 0,
            319331041: 1
        };

    function Tc() {
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function K(a) {
        a.b = !0;
        return a
    }

    function Uc(a, b) {
        a.c = void 0 === b ? null : b
    }

    function Vc(a, b) {
        a.c && z(b, function(c) {
            c = a.c[c];
            void 0 !== c && Wc(a, c)
        })
    }

    function Xc(a) {
        Tc.call(this);
        this.f = a
    }
    t(Xc, Tc);

    function Wc(a, b) {
        var c;
        if (!(c = null !== a.a)) {
            a: {
                c = a.f;
                for (d in c)
                    if (c[d] == b) {
                        var d = !0;
                        break a
                    } d = !1
            }
            c = !d
        }
        c || (a.a = b)
    };

    function Yc() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    Yc.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    };

    function L(a, b, c) {
        a.a[b] || (a.a[b] = new Xc(c));
        return a.a[b]
    }

    function Zc(a, b, c) {
        (a = a.a[b]) && Wc(a, c)
    }

    function M(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function $c(a) {
        var b = {},
            c = Sa(a.a, function(d) {
                return d.b
            });
        Ra(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function ad(a, b) {
        if (!a.c) return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && Wc(e, d)
        }
        return b.join("&")
    }

    function bd(a, b) {
        a.c && z(Va(a.a), function(c) {
            return Vc(c, b)
        })
    }

    function cd(a, b) {
        a.c && b && v(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Ea(b, function(c) {
            return Number(c)
        }), bd(a, b))
    };
    var dd = +new Date,
        ed = -1,
        fd = -1,
        gd = !1;

    function N() {
        return +new Date - dd
    }

    function hd() {
        var a = O.g().j,
            b = 0 <= fd ? N() - fd : -1,
            c = gd ? N() - ed : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            } void 0 === f && (f = d[a.length]);
        return f
    };

    function id() {}
    id.prototype.a = function() {
        return 0
    };
    id.prototype.c = function() {
        return 0
    };
    id.prototype.f = function() {
        return 0
    };
    id.prototype.b = function() {
        return 0
    };

    function jd() {
        if (!kd()) throw Error();
    }
    t(jd, id);

    function kd() {
        return !(!y || !y.performance)
    }
    jd.prototype.a = function() {
        return kd() && y.performance.now ? y.performance.now() : id.prototype.a.call(this)
    };
    jd.prototype.c = function() {
        return kd() && y.performance.memory ? y.performance.memory.totalJSHeapSize || 0 : id.prototype.c.call(this)
    };
    jd.prototype.f = function() {
        return kd() && y.performance.memory ? y.performance.memory.usedJSHeapSize || 0 : id.prototype.f.call(this)
    };
    jd.prototype.b = function() {
        return kd() && y.performance.memory ? y.performance.memory.jsHeapSizeLimit || 0 : id.prototype.b.call(this)
    };

    function ld() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        } [x.visibilityState || x.webkitVisibilityState || x.mozVisibilityState || ""] || 0
    };

    function md() {}
    md.prototype.isVisible = function() {
        return 1 === ld()
    };
    var nd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var od = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function pd() {
        var a = u,
            b = [],
            c = null;
        do {
            var d = a;
            if (mc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new qd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.rb = !0);
        return b
    }

    function rd(a, b) {
        this.a = a;
        this.b = b
    }

    function qd(a, b, c) {
        this.url = a;
        this.a = b;
        this.rb = !!c;
        this.depth = na(void 0) ? void 0 : null
    };

    function sd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function td(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function ud(a, b, c, d, e) {
        var f = [];
        nc(a, function(g, h) {
            (g = vd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function vd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(vd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ud(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function wd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = td(c, d)
    }

    function xd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = yd(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(l, q) {
            return l - q
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = ud(h[n], a.c, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.c;
                        break
                    } else a.f && (e = d, m[e - 1] == a.c && --e, b += m.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function yd(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function zd() {
        this.b = new md;
        this.a = kd() ? new jd : new id
    }
    zd.prototype.setInterval = function(a, b) {
        return y.setInterval(a, b)
    };
    zd.prototype.clearInterval = function(a) {
        y.clearInterval(a)
    };
    zd.prototype.setTimeout = function(a, b) {
        return y.setTimeout(a, b)
    };
    zd.prototype.clearTimeout = function(a) {
        y.clearTimeout(a)
    };

    function Ad(a) {
        P();
        var b = I() || y;
        wc(b, a, !1)
    }
    w(zd);

    function Bd() {}

    function P() {
        var a = Bd.g();
        if (!a.a) {
            if (!y) throw Error("Context has not been set and window is undefined.");
            a.a = zd.g()
        }
        return a.a
    }
    w(Bd);

    function Cd(a) {
        for (var b = a !== a.top, c = a.top, d = a, e = d, f = 0; d && d != d.parent;) d = d.parent, f++, mc(d) && (e = d);
        c = c === e;
        if (b && c && null != a.top.mraid) return {
            Ga: a.top.mraid,
            Ia: 3
        };
        a = a.mraid;
        return null != a ? b ? c ? {
            Ga: a,
            Ia: 2
        } : {
            Ga: a,
            Ia: 1
        } : {
            Ga: a,
            Ia: 0
        } : null
    };

    function Dd(a) {
        a = Ec(a);
        return !(!a || !a.observeIntersection)
    }

    function Ed(a) {
        return (a = a.document) && sa(a.elementFromPoint)
    };

    function Fd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    function Gd(a) {
        return !!a.b || !!a.a
    }
    Fd.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    };

    function Hd(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || qa(b) || Pb && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    za(Hd, Ob);

    function Id(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Jd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.a) return b.apply(null, r(d));
            try {
                return a.a = a.f.a.a(), b.apply(null, r(d))
            } finally {
                a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
            }
        }
    };

    function Kd(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Id(a)
    };

    function O() {
        this.j = void 0;
        this.f = this.l = 0;
        this.h = this.i = -1;
        this.a = new Yc;
        K(L(this.a, "nioh", J));
        Uc(K(L(this.a, "mv", Qc)), Rc);
        L(this.a, "omid", J);
        K(L(this.a, "epoh", J));
        K(L(this.a, "epph", J));
        Uc(K(L(this.a, "umt", J)), Oc);
        Uc(K(L(this.a, "gmpd", J)), Pc);
        Uc(K(L(this.a, "sel", J)), Nc);
        Uc(K(L(this.a, "buvpe", J)), Sc);
        K(L(this.a, "phel", J));
        K(L(this.a, "phell", J));
        K(L(this.a, "oseid", yc));
        K(L(this.a, "xdi", J));
        K(L(this.a, "amp", J));
        K(L(this.a, "prf", J));
        K(L(this.a, "uup", J));
        K(L(this.a, "gtx", J));
        K(L(this.a, "mvp_lv", J));
        this.c = new Kd(P(), this.a);
        this.b = null
    }
    w(O);

    function Ld() {
        var a = "https:";
        y && y.location && "http:" === y.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }

    function Md(a, b, c, d) {
        if (Math.random() < (d || a.a)) try {
            if (c instanceof sd) var e = c;
            else e = new sd, nc(c, function(g, h) {
                var n = e,
                    m = n.h++;
                g = td(h, g);
                n.a.push(m);
                n.b[m] = g
            });
            var f = xd(e, a.b, "/pagead/gen_204?id=" + b + "&");
            f && Ad(f)
        } catch (g) {}
    };

    function Nd(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Od = null;

    function Pd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Qd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Rd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Q = u.performance,
        Sd = !!(Q && Q.mark && Q.measure && Q.clearMarks),
        Td = Qa(function() {
            var a;
            if (a = Sd) {
                var b;
                if (null === Od) {
                    Od = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Od = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Od;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ud() {
        var a = I();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Td() || (null != b ? b : 1 > Math.random())
    }

    function Vd(a) {
        a && Q && Td() && (Q.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Q.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Ud.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Qd() || Pd();
        a = new Rd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Q && Td() && Q.mark(b);
        return a
    };

    function Wd() {
        var a = Xd;
        this.i = Yd;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function Zd(a, b, c) {
        return Jd(O.g().c.a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && na(g.value)) {
                        var h = Qd() || Pd();
                        g.duration = h - g.value;
                        var n = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        Q && Td() && Q.mark(n);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    Vd(d), f = a.j(b, new $d(ae(m)), void 0, void 0)
                } catch (l) {
                    a.c(217, l)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function be(a, b) {
        var c = ce;
        return Jd(O.g().c.a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return Zd(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Wd.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new sd;
            f.f = !0;
            wd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new $d(ae(b)));
            b.msg && wd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (F) {}
            if (d) try {
                d(g)
            } catch (F) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = pd(),
                n = new qd(u.location.href, u, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var l = h[d];
                !b && od.test(l.url) && (b = l);
                if (l.url && !l.rb) {
                    n = l;
                    break
                }
            }
            l = null;
            var q = h.length && h[m].url;
            0 != n.depth && q && (l = h[m]);
            var p = new rd(n, l);
            p.b && wd(f, 4, "top", p.b.url || "");
            wd(f, 5, "url", p.a.url || "");
            Md(this.i, e, f, c)
        } catch (F) {
            try {
                Md(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ae(F),
                    url: p && p.a.url
                }, c)
            } catch (tc) {}
        }
        return this.f
    };

    function ae(a) {
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

    function $d(a) {
        Nd.call(this, Error(a), {
            message: a
        })
    }
    t($d, Nd);
    var Yd, ce, Xd = new Ud;

    function de() {
        var a = I();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Xd, a.a = !1, a.b != a.c.google_js_reporting_queue && (Td() && z(a.b, Vd), a.b.length = 0))
    }(function() {
        Yd = new Ld;
        ce = new Wd;
        var a = I();
        a && a.document && ("complete" == a.document.readyState ? de() : Xd.a && uc(a, "load", function() {
            de()
        }))
    })();

    function ee(a) {
        ce.b = function(b) {
            z(a, function(c) {
                c(b)
            })
        }
    }

    function fe(a, b) {
        return Zd(ce, a, b)
    }

    function R(a, b) {
        return be(a, b)
    }

    function ge(a, b, c, d) {
        ce.c(a, b, c, d)
    };
    zc && (Yd.a = 1);
    if (x && x.URL) {
        var he, qc = x.URL;
        he = !!qc && 0 < pc().length;
        ce.f = !he
    }

    function S(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = be(d, c);
        uc(a, b, c, {
            capture: e
        });
        return c
    }

    function ie(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ga(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Fa(b, function(c, d) {
            return c.concat(Ma((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function je(a, b) {
        if (a) {
            var c = 0,
                d = null;
            a = ie(a);
            for (var e = 0; e < a.length; e++) {
                var f = !1;
                d = a[e];
                switch (d.nodeName) {
                    case "IMG":
                        var g = d;
                        if (g.complete || g.naturalWidth) f = !0;
                        break;
                    case "FRAME":
                    case "IFRAME":
                        g = d;
                        try {
                            if (g.readyState) f = "complete" == g.readyState;
                            else {
                                var h = g.contentWindow || g.contentDocument;
                                h.document && (h = h.document);
                                f = h && h.readyState ? "complete" == h.readyState : !1
                            }
                        } catch (n) {
                            f = !1
                        }
                }
                f || (c++, S(d, "load", function() {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    }

    function ke(a, b) {
        function c(d) {
            vc(a, d, c);
            b(d)
        }
        return S(a, "DOMNodeRemoved", c, 156, !1)
    };

    function le(a) {
        var b = [];
        Ra(a, function(c, d) {
            d = encodeURIComponent(d);
            v(c) && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    };

    function me() {
        this.a = null;
        this.status = 0
    };
    var ne = !D && !ib();

    function oe(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (ne && a.dataset) {
            if (!(!C("Android") || jb() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + mb(b))
    }

    function pe(a, b) {
        return /-[a-z]/.test(b) ? !1 : ne && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + mb(b)) : !!a.getAttribute("data-" + mb(b))
    };
    var qe = 0;

    function re(a, b) {
        try {
            qe++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function se(a, b) {
        b && (a(b), b.frames && z(b.frames, function(c) {
            se(a, c)
        }))
    }

    function ve(a, b, c) {
        a = a.exec(b);
        if (!(b = !a || !a[1])) {
            a = a[1];
            b = a.length;
            if (0 == b) a = 0;
            else {
                for (var d = 305419896, e = 0; e < b; e++) d ^= (d << 5) + (d >> 2) + a.charCodeAt(e) & 4294967295;
                a = 0 < d ? d : 4294967296 + d
            }
            b = c != a
        }
        return !b
    }

    function we(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = ic.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function xe(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"),
            e = new me;
        if ("" == b || -1 == c) return e.status = -1, e;
        try {
            b = [];
            for (var f = ba((a.document || document).getElementsByTagName("A")), g = f.next(); !g.done; g = f.next()) {
                var h = g.value;
                ve(d, h.href, c) && (e.status = 3, b.push(h))
            }
            if (0 < b.length) return we(b, e), e;
            var n = ba((a.document || document).getElementsByTagName("EMBED"));
            for (g = n.next(); !g.done; g = n.next()) {
                var m = g.value;
                ve(d, m.src, c) && (0 == m.getBoundingClientRect().height && m.parentElement && "OBJECT" == m.parentElement.tagName ? (e.status = 5, b.push(m.parentElement)) : (e.status = 4, b.push(m)))
            }
            if (0 < b.length) return we(b, e), e
        } catch (l) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function ye(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }

    function ze() {
        var a = P().b;
        return 0 === ld() ? -1 : a.isVisible() ? 0 : 1
    }

    function Ae(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function Be(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = Da(c, function(e) {
                    var f = e.parent && e.parent !== e;
                    return e === y.top || f
                }), a = ba(c), c = a.next(); !c.done; c = a.next()) re(b, c.value);
            else {
                c = [];
                var d = jc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = Ea(ac(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return jc(e)
                    })
                } catch (e) {}
                a = ba(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && se(xa(re, b), c)
                    } catch (e) {}
                }
            }
    }

    function Ce(a, b, c) {
        try {
            var d = le(b);
            Be(a, d, c)
        } catch (e) {}
    };

    function De() {
        var a = B;
        return a ? Ga("AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return A(a, b)
        }) ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    };

    function T() {
        this.b = !mc(y.top);
        this.u = !this.b || Dd(y);
        this.i = lc() || !lc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"));
        var a = pd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(nd)[3] || null) && decodeURI(a);
        this.a = new H(0, 0, 0, 0);
        this.j = new G(0, 0);
        this.h = new G(0, 0);
        this.c = new H(0, 0, 0, 0);
        this.l = new E(0, 0);
        this.s = this.m = !1;
        this.f = !(!y || !Cd(y));
        Ee(this)
    }

    function Fe(a, b) {
        b && b.screen && (a.j = new G(b.screen.width, b.screen.height))
    }

    function Ge(a, b) {
        var c = a.a ? new G(a.a.I(), a.a.H()) : new G(0, 0);
        b = void 0 === b ? y : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight,
                    m = h.scrollWidth,
                    l = h.offsetHeight,
                    q = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight, m = g.scrollWidth, l = g.offsetHeight, q = g.offsetWidth);
                n > c.height ? n > l ? (d = n, e = m) : (d = l, e = q) : n < l ? (d = n, e = m) : (d = l, e = q)
            }
            var p = new G(e, d)
        } catch (F) {
            p = new G(-12245933, -12245933)
        }
        a.h = p
    }

    function Ee(a) {
        y && y.document && (a.c = Kc(!1, y, a.i), a.a = Kc(!0, y, a.i), Ge(a, y), Fe(a, y))
    }

    function He() {
        if (T.g().s) return !0;
        var a = P().b.isVisible(),
            b = 0 === ld();
        return a || b
    }
    w(T);
    var Ie = new H(0, 0, 0, 0);

    function Je(a, b) {
        try {
            try {
                var c = ye(a.getBoundingClientRect())
            } catch (Xg) {
                c = new H(0, 0, 0, 0)
            }
            var d = c.right - c.left,
                e = c.bottom - c.top;
            var f = new E(0, 0),
                g = ec(Zb(a));
            if (pb(g, "parent")) {
                do {
                    if (g == b) {
                        c = a;
                        var h = Zb(c),
                            n = new E(0, 0),
                            m = void 0;
                        m = h ? Zb(h) : document;
                        var l = !D || 9 <= Number(Eb) || "CSS1Compat" == Xb(m).a.compatMode ? m.documentElement : m.body;
                        if (c != l) {
                            var q = Dc(c),
                                p = dc(Xb(h).a);
                            n.x = q.left + p.x;
                            n.y = q.top + p.y
                        }
                        var F = n
                    } else {
                        var tc = Dc(a);
                        F = new E(tc.left, tc.top)
                    }
                    c = F;
                    f.x += c.x;
                    f.y += c.y
                } while (g && g != b && g != g.parent && (a = g.frameElement) && (g = g.parent))
            }
            var te = f.x,
                ue = f.y;
            return new H(Math.round(ue), Math.round(te + d), Math.round(ue + e), Math.round(te))
        } catch (Xg) {
            return Ac(Ie)
        }
    }

    function Ke(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new H(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new H(0, 0, 0, 0)
    }

    function Le(a, b) {
        b = U(b);
        return 0 === b ? 0 : U(a) / b
    }

    function U(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Me(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Wb && !(D && Db("9") && !Db("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = ta(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = Zb(a),
                        g = f && ec(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (n) {
                break
            }
        }
        return !1
    }

    function Ne(a, b, c) {
        if (!a || !b) return !1;
        b = Bc(Ac(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = I();
        mc(d.top) && d.top && d.top.document && (d = d.top);
        if (!Ed(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = Zb(c)) && b.defaultView && b.defaultView.frameElement) && Me(b, a);
        d = a === c;
        a = !d && a && kc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Oe(a, b, c, d) {
        return T.g().b ? !1 : 0 >= a.I() || 0 >= a.H() ? !0 : c && d ? fe(208, function() {
            return Ne(a, b, c)
        }) : !1
    };

    function Pe(a, b, c) {
        var d = new H(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.b = b;
        this.a = d;
        this.c = c
    };

    function Qe(a, b, c, d, e, f, g) {
        this.i = a;
        this.f = b;
        this.b = c;
        this.a = d;
        this.c = e;
        this.h = g
    };

    function Re(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    Re.prototype.cancel = function() {
        P().clearTimeout(this.a);
        this.a = null
    };

    function Se(a) {
        var b = P(),
            c = O.g().c.a;
        a.a = b.setTimeout(Jd(c, R(143, function() {
            a.b++;
            a.c.Db()
        })), hd())
    };

    function V(a, b, c) {
        this.a = a;
        this.T = void 0 === c ? "na" : c;
        this.h = [];
        this.w = !1;
        this.b = new Pe(-1, !0, this);
        this.f = this;
        this.l = this.j = b;
        this.M = this.u = !1;
        this.F = "uk";
        this.K = !1
    }
    k = V.prototype;
    k.W = function() {
        return this.C()
    };
    k.C = function() {
        return !1
    };
    k.pb = function() {
        this.w = !0
    };
    k.ja = function() {
        return this.F
    };

    function Te(a, b) {
        a.M || (a.M = !0, a.F = b, a.l = 0, a.f == a && (a.j = 0, Ue(a)))
    }
    k.G = function() {
        return this.f == this ? this.T : this.f.G()
    };
    k.N = function() {
        return {}
    };
    k.P = function() {
        return this.j
    };

    function Ve(a, b) {
        Ka(a.h, b) || (a.h.push(b), b.V(a.f), b.R(a.b), b.S() && (a.u = !0))
    }
    k.Ua = function() {
        var a = T.g();
        a.a = Kc(!0, this.a, a.i)
    };
    k.Va = function() {
        Fe(T.g(), this.a)
    };
    k.wb = function() {
        Ge(T.g(), this.a)
    };
    k.xb = function() {
        var a = T.g();
        a.c = Kc(!1, this.a, a.i)
    };
    k.Ra = function() {
        return this.b.a
    };

    function We(a) {
        a = a.f;
        a.Va();
        a.Ua();
        a.xb();
        a.wb();
        a.b.a = a.Ra()
    }
    k.Db = function() {};

    function Xe(a) {
        a.u = a.h.length ? Ga(a.h, function(b) {
            return b.S()
        }) : !1
    }

    function Ye(a) {
        var b = Ma(a.h);
        z(b, function(c) {
            c.R(a.b)
        })
    }

    function Ue(a) {
        var b = Ma(a.h);
        z(b, function(c) {
            c.V(a.f)
        });
        a.f != a || Ye(a)
    }
    k.V = function(a) {
        var b = this.j,
            c = a.P();
        this.f = c < this.l ? this : a;
        this.j = this.f != this ? c : this.l;
        this.j != b && Ue(this)
    };

    function Ze(a, b) {
        var c = a.b,
            d = a.u;
        if (d = b && (void 0 === d || !d || c.volume == b.volume) && c.b == b.b) c = c.a, d = b.a, d = c == d ? !0 : c && d ? c.top == d.top && c.right == d.right && c.bottom == d.bottom && c.left == d.left : !1;
        a.b = b;
        !d && Ye(a)
    }
    k.R = function(a) {
        this.f != this && Ze(this, a)
    };
    k.S = function() {
        return this.u
    };
    k.D = function() {
        this.K = !0
    };
    k.ka = function() {
        return this.K
    };

    function $e(a, b, c, d) {
        this.a = a;
        this.c = new H(0, 0, 0, 0);
        this.m = new H(0, 0, 0, 0);
        this.i = this.b = b;
        this.F = c;
        this.A = d;
        this.B = !1;
        this.timestamp = -1;
        this.h = new Qe(b.b, this.c, new H(0, 0, 0, 0), 0, 0, N(), 0)
    }
    k = $e.prototype;
    k.Da = function() {
        return !0
    };
    k.Z = function() {};
    k.Na = function() {
        this.a && (this.c = Je(this.a, this.b.a))
    };
    k.ib = function() {
        this.m = this.b.b.a
    };
    k.U = function() {
        this.Na();
        this.h = new Qe(this.b.b, this.c, this.h.b, this.h.a, this.h.c, N(), this.h.h)
    };
    k.D = function() {
        if (!this.ka()) {
            var a = this.b,
                b = a.h,
                c = Ca(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.S() && Xe(a);
            this.B = !0
        }
    };
    k.ka = function() {
        return this.B
    };
    k.N = function() {
        return this.i.N()
    };
    k.P = function() {
        return this.i.P()
    };
    k.ja = function() {
        return this.i.ja()
    };
    k.V = function(a) {
        this.i = a;
        this.A.V(this)
    };
    k.R = function() {
        this.U()
    };
    k.S = function() {
        return this.A.S()
    };

    function af(a) {
        this.h = !1;
        this.b = a
    }
    k = af.prototype;
    k.P = function() {
        return this.b.P()
    };
    k.ja = function() {
        return this.b.ja()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.b && (d = this.za(a, b, c), Ve(this.b, d));
        return d
    };
    k.W = function() {
        return this.C()
    };
    k.C = function() {
        return !1
    };
    k.vb = function() {
        return !0
    };
    k.D = function() {
        this.h = !0
    };
    k.ka = function() {
        return this.h
    };
    k.N = function() {
        return {}
    };

    function bf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function cf(a) {
        switch (Math.trunc(a.c)) {
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

    function df(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function ef() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    ef.prototype.add = function(a, b, c) {
        ++this.c;
        a = new bf(a, b, c);
        this.a.push(new bf(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function ff(a, b) {
        z(b.a, function(c) {
            a.add(c.b, c.a, cf(c))
        })
    }

    function gf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        nc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function hf(a) {
        var b = jf;
        a.b && (Na(a.a, function(c, d) {
            return df(d, c) ? 1 : df(c, d) ? -1 : 0
        }), a.b = !1);
        return Fa(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function jf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : qa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ka(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function kf(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new ef;
        void 0 !== a && ff(this.a, a);
        b && this.a.add("v", Aa, -16)
    }
    kf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = hf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    };

    function lf(a) {
        var b = [],
            c = [];
        Ra(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (qa(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                case "aio":
                case "nio":
                case "iem":
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

    function mf() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID>>>")) return "<<<CAFE_VERSION_ID>>>";
        if (Aa && "unreleased" !== Aa) return Aa
    };

    function nf() {
        this.a = 0
    }
    w(nf);

    function of (a) {
        this.m = a;
        this.l = !1
    } of .prototype.i = function(a, b) {
        this.a = a;
        this.b = b
    };

    function pf() {
        of .call(this, "capability")
    }
    t(pf, of );
    pf.prototype.j = function() {
        return !0
    };
    pf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.X, a.v_name = this.b.X, a
    };

    function qf() {
        of .call(this, "diff")
    }
    t(qf, of );
    qf.prototype.j = function() {
        return !(.02 >= Math.abs(this.b.o - this.a.o))
    };
    qf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.X, a.v_name = this.b.X, a.b_vp_off = JSON.stringify(this.a.J), a.v_vp_off = JSON.stringify(this.b.J), a.b_vp_sz = JSON.stringify(this.a.ab), a.v_vp_sz = JSON.stringify(this.b.ab), a.b_exp = this.a.o, a.v_exp = this.b.o, a.efp_occ = this.a.Hb, a.sbv = this.a.ba, a
    };

    function rf() {
        of .call(this, "capt");
        this.f = [];
        this.c = []
    }
    t(rf, of );
    rf.prototype.i = function(a, b) {
        of .prototype.i.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.o), this.c.push(b.o))
    };
    rf.prototype.j = function() {
        return 20 === this.c.length
    };
    rf.prototype.h = function() {
        var a = sf(this.f, this.c),
            b = tf(this.f, this.c),
            c = {};
        return c.b_name = this.a.X, c.v_name = this.b.X, c.b_exp = this.f.join(","), c.v_exp = this.c.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function sf(a, b) {
        return Ha(Pa(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function tf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return sf(Ea(a, c), Ea(b, c))
    };

    function W() {
        this.da = this.da;
        this.va = this.va
    }
    W.prototype.da = !1;
    W.prototype.ka = function() {
        return this.da
    };
    W.prototype.D = function() {
        this.da || (this.da = !0, this.O())
    };
    W.prototype.O = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };

    function uf(a, b, c, d, e) {
        e = void 0 === e ? [new pf, new qf, new rf] : e;
        W.call(this);
        this.a = a.za(b, c, this);
        this.a.Da();
        this.c = e;
        this.b = d
    }
    t(uf, W);
    uf.prototype.O = function() {
        this.a && (this.a.Z(), this.a.D())
    };

    function vf(a, b, c) {
        z(a.c, function(d) {
            var e = a.b;
            if (!d.l && (d.i(b, c), d.j())) {
                d.l = !0;
                var f = d.h(),
                    g = new ef;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.m);
                d = nf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                gf(g, f);
                e = new kf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = mf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Ad(e)
            }
        })
    }
    uf.prototype.R = function() {};
    uf.prototype.V = function() {};
    uf.prototype.S = function() {
        return !1
    };

    function wf() {
        this.a = this.b = this.c = 0
    }

    function xf(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var yf = [1, .75, .5, .3, 0];

    function zf(a) {
        this.a = a = void 0 === a ? yf : a;
        this.b = Ea(this.a, function() {
            return new wf
        })
    }

    function Af(a) {
        return Bf(a, function(b) {
            return b.c
        }, !1)
    }

    function Cf(a) {
        return Bf(a, function(b) {
            return b.a
        }, !0)
    }

    function Df(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            xf(a.b[f], g && n, e, !g || h)
        }
    }

    function Bf(a, b, c) {
        a = Ea(a.b, function(d) {
            return b(d)
        });
        return c ? a : Ef(a)
    }

    function Ef(a) {
        return Ea(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Ff() {
        this.a = new zf;
        this.c = new wf;
        this.b = -1;
        this.f = new zf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function Gf(a) {
        return 1E3 <= a.c.a
    };
    var Hf = new H(0, 0, 0, 0);

    function X(a, b, c) {
        W.call(this);
        this.ua = Ac(Hf);
        this.b = new Ff;
        this.ra = -2;
        this.cb = -1;
        this.Ma = b;
        this.ca = -1 != b;
        this.J = null;
        this.K = -1;
        this.ga = c;
        this.eb = this.Oa = oa;
        this.i = this.a = a;
        this.s = !1;
        this.l = {
            Fa: null,
            Ea: null
        };
        this.ha = !0;
        this.L = null;
        this.La = !1;
        O.g().l++;
        this.f = new Mc;
        this.bb = this.ya = -1;
        this.Ka = 0;
        this.ea = -1;
        this.c = null;
        this.M = new H(0, 0, 0, 0);
        this.Gb = !1;
        a = this.h = new Yc;
        L(a, "od", Lc);
        K(L(a, "opac", J));
        L(a, "ue", J);
        L(a, "ud", J);
        K(L(a, "gcm", J));
        K(L(a, "cm", J));
        K(L(a, "sela", J));
        K(L(a, "sbeos", J));
        K(L(a, "prf", J));
        K(L(a, "mwt", J));
        K(L(a, "lcs", J));
        K(L(a, "roio", J));
        this.a && this.a.getAttribute && pe(this.a, "googleAvInapp") && (T.g().f = !0);
        1 == this.ga ? Zc(this.h, "od", 1) : Zc(this.h, "od", 0)
    }
    t(X, W);
    k = X.prototype;
    k.O = function() {
        If(this);
        this.L && this.L.D();
        this.c && this.c.D();
        delete this.b;
        delete this.Oa;
        delete this.eb;
        delete this.a;
        delete this.i;
        delete this.l;
        delete this.L;
        delete this.c;
        delete this.h;
        W.prototype.O.call(this)
    };

    function Jf(a) {
        return a.c ? a.c.c : a.ua
    }
    k.Ca = function(a) {
        var b = O.g();
        v(a) && 0 != a.length && ad(b.a, a)
    };
    k.R = function() {};
    k.V = function() {};
    k.S = function() {
        return !1
    };
    k.aa = function() {
        this.ca = !0
    };
    k.Ba = function() {
        return this.ca
    };
    k.Wa = function() {
        this.f.o = 0
    };
    k.Xa = function() {
        this.b = new Ff
    };

    function Kf(a) {
        return a.c ? a.c.G() : (O.g(), "ns")
    }

    function Lf(a, b) {
        b = b.create(a.i, a.h, a);
        if (b = null != b && b.Da() ? b : null) a.c = b
    }

    function Mf(a, b, c) {
        if (a.c) {
            a.c.U();
            var d = a.c.h,
                e = d.i,
                f = e.a;
            if (null != d.b) {
                var g = d.f;
                a.J = new E(g.left - f.left, g.top - f.top);
                a.M = d.b
            }
            f = a.ba() ? Math.max(d.a, d.c) : d.a;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            a.Za(Jf(a), f, b, c, !1, g, void 0, d.h)
        }
    }

    function Nf(a) {
        if (a.Ba() && a.L) {
            var b = 1 == M(a.h, "od"),
                c = T.g().a,
                d = a.L,
                e = Kf(a),
                f = new G(c.I(), c.H());
            c = a.ba();
            a = {
                X: e,
                J: a.J,
                ab: f,
                ba: c,
                o: a.f.o,
                Hb: b
            };
            if (b = d.a) {
                b.U();
                e = b.h;
                f = e.i.a;
                var g = null,
                    h = null;
                null != e.b && f && (g = e.f, g = new E(g.left - f.left, g.top - f.top), h = new G(f.right - f.left, f.bottom - f.top));
                c = {
                    X: b.G(),
                    J: g,
                    ab: h,
                    ba: c,
                    Hb: !1,
                    o: c ? Math.max(e.a, e.c) : e.a
                }
            } else c = null;
            c && vf(d, a, c)
        }
    }
    k.Za = function(a, b, c, d, e, f, g, h) {
        void 0 === g ? -1 == this.Ma ? f = 0 : (f = c - this.Ma || 1, f = 1E4 < f ? 1 : f) : f = g;
        g = f;
        h = void 0 === h ? -1 : h;
        if (!this.s) {
            na(b) || (this.J = new E(a.left - b.left, a.top - b.top));
            if (this.Ba()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Mc;
                h.f = d;
                h.b = ze();
                na(b) ? (h.o = Of(this, b), h.c = f) : (h.o = Of(this, a, b), h.c = 0 <= f ? f : h.o * U(a) / (y.screen.height * y.screen.width));
                h.a = this.ma();
                f = this.b;
                var n = this.f;
                e = e && this.f.o >= (this.ma() ? .3 : .5);
                f.b = Math.max(f.b, h.o);
                Df(f.f, h.c, n.c, h.f, g, e);
                Df(f.a, h.o, n.o, h.f, g, e);
                e = e || n.a != h.a ? n.isVisible() && h.isVisible() : n.isVisible();
                n = !h.isVisible() || h.f;
                xf(f.c, e, g, n);
                this.Ma = c;
                0 < h.o && (-1 === this.ya && (this.ya = c), this.bb = c); - 1 == this.cb && Gf(this.b) && (this.cb = c);
                if (-2 == this.ra) try {
                    a: {
                        var m = na(b) ? null : b;
                        if (a && a != Hf && 0 != U(Jf(this))) {
                            var l = T.g();
                            if (!m) {
                                if (!l.a) {
                                    var q = -1;
                                    break a
                                }
                                m = new H(0, l.a.I(), l.a.H(), 0)
                            }
                            q = m.I && 0 < m.I() && m.H && 0 < m.H() ? Of(this, a, m) : -1
                        } else q = -1
                    }
                    this.ra = q
                }
                catch (p) {
                    ge(207, p)
                }
                this.f = h;
                d && (this.f.o = 0)
            }
            this.Oa(this)
        }
    };

    function Of(a, b, c) {
        if (0 === a.K && 1 === M(a.h, "opac")) return 0;
        if (na(b)) return b;
        b = Ke(b, c);
        var d = 1 == M(a.h, "od");
        if (0 >= U(Jf(a)) || Oe(b, c, a.i, d)) return 0;
        d = U(b) / U(Jf(a));
        c = Le(b, c);
        return a.ba() ? Math.max(d, c) : d
    }
    k.ma = function() {
        return !1
    };
    k.ba = function() {
        return this.Gb || this.La
    };
    k.$a = function(a, b, c) {
        if (c) this.ua = c;
        else {
            a = b ? a : a.top;
            this.ua = Ac(Hf);
            try {
                this.i && (this.ua = Je(this.i, a))
            } catch (d) {}
        }
    };

    function Pf(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Qf(a) {
        a.a && (a.l.Fa = S(a.a, "mouseover", function() {
            var b = N();
            a.ea = b
        }, 149), a.l.Ea = S(a.a, "mouseout", function() {
            var b = N(); - 1 == a.ea || b < a.ea || (a.Ka += b - a.ea);
            a.ea = -1
        }, 150))
    }

    function If(a) {
        a.a && (a.l.Fa && (vc(a.a, "mouseover", a.l.Fa), a.l.Fa = null), a.l.Ea && (vc(a.a, "mouseout", a.l.Ea), a.l.Ea = null))
    }

    function Rf(a) {
        a.c && a.c.Z()
    };

    function Sf() {
        Tf(this)
    }

    function Tf(a) {
        !a.a && sa(y.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && sa(y.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && $b() && (a.c = !0)
    }

    function Uf(a, b, c, d) {
        Tf(a);
        var e = T.g().m;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0), b($b(), "", 13, !0))
    }

    function Vf(a) {
        Tf(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }

    function Wf(a) {
        Tf(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    };

    function Xf(a) {
        return ib() ? (a = (a = Zb(a)) && ec(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Yf = "StopIteration" in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Zf() {}
    Zf.prototype.next = function() {
        throw Yf;
    };
    Zf.prototype.fb = function() {
        return this
    };

    function $f(a) {
        if (a instanceof Zf) return a;
        if ("function" == typeof a.fb) return a.fb(!1);
        if (ra(a)) {
            var b = 0,
                c = new Zf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Yf;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function ag(a, b) {
        if (ra(a)) try {
            z(a, b, void 0)
        } catch (c) {
            if (c !== Yf) throw c;
        } else {
            a = $f(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Yf) throw c;
            }
        }
    }

    function bg(a, b) {
        var c = 1;
        ag(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function cg(a, b) {
        var c = $f(a);
        a = new Zf;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw Yf;
        };
        return a
    }

    function dg(a) {
        var b = $f(a);
        a = new Zf;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw Yf;
        };
        return a
    };

    function eg(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(eg, Zf);
    eg.prototype.next = function() {
        if (this.b) throw Yf;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (pb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Xf : d;
                if (d(a)) try {
                    var e = Zb(a),
                        f = e && ec(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.a = b;
        return a
    };

    function fg(a) {
        var b = 1;
        a = dg(new eg(a, !0));
        a = cg(a, function() {
            return 0 < b
        });
        return bg(a, function(c, d) {
            var e = 1;
            if (pb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = Zb(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[lb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Cc.opacity;
                        if (!h) {
                            var n = lb();
                            h = n;
                            void 0 === d.style[n] && (n = (vb ? "Webkit" : ub ? "Moz" : D ? "ms" : sb ? "O" : null) + nb(n), void 0 !== d.style[n] && (h = n));
                            Cc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                na(f) && !isNaN(f) && (e = f)
            }
            return b = c * e
        })
    };

    function gg(a, b, c, d, e, f, g) {
        f = void 0 === f ? oa : f;
        g = void 0 === g ? [] : g;
        X.call(this, c, d, e);
        this.B = b;
        this.na = this.m = 0;
        this.Ab = null;
        this.lb = this.yb = this.ub = this.zb = this.tb = "";
        this.Fb = !1;
        this.u = 4;
        this.Jb = !1;
        this.fa = [];
        this.T = "";
        this.Ib = this.mb = this.Cb = !1;
        this.Mb = -1;
        this.sb = "";
        this.ob = -1;
        this.A = 0;
        this.xa = -1;
        this.qa = 0;
        this.ia = this.Bb = ze();
        this.j = 0;
        this.Kb = f;
        this.Lb = !1;
        this.sa = this.Pa = this.Qa = this.wa = this.w = -1;
        this.F = {};
        this.ta = g;
        hg(this, c);
        this.B && v(this.B) && (b = this.B.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.La = !0);
        cd(O.g().a, this.B);
        b = T.g();
        this.$a(a, b.b)
    }
    t(gg, X);

    function hg(a, b) {
        if (b) {
            if (0 == a.m)
                if (a.a) {
                    var c = a.a._adk_;
                    c || (c = (c = oe(a.a, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.m;
            a.m = c;
            "" == a.tb && (a.tb = String(b._avi_ || ""));
            "" == a.zb && (a.zb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            "" == a.ub && (a.ub = String(b._avicxn_ || oe(b, "googleAvCxn") || ""));
            "" == a.yb && (a.yb = String(b._aviextcxn_ || oe(b, "googleAvExtCxn") || ""));
            "" == a.lb && (a.lb = String(b._cid_ || ""));
            a.Fb || (a.Fb = !!b._imm_ || pe(b, "googleAvImmediate"));
            "" == a.T && (a.T = String(b._cvu_ || oe(b, "googleAvCpmav") || ""));
            a.Ca(String(b._avm_ || oe(b, "googleAvMetadata") || ""))
        }
    }
    k = gg.prototype;
    k.O = function() {
        ig(this);
        delete this.fa;
        delete this.ta;
        delete this.Ja;
        delete this.oa;
        X.prototype.O.call(this)
    };

    function jg(a, b, c) {
        z(a.ta, function(d) {
            return d.a(a, c, b)
        })
    }
    k.Ba = function() {
        return this.ca && !(1 == this.j || 3 == this.j)
    };

    function ig(a) {
        a.Ja && vc(a.a, "DOMNodeRemoved", a.Ja);
        a.oa && a.oa.disconnect()
    }

    function kg(a) {
        a.a && (ig(a), a.xa = -1, u.MutationObserver ? (a.oa = new u.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.xa = N();
                    c.disconnect();
                    break
                }
        }), a.oa.observe(a.a, {
            childList: !0,
            subtree: !0
        })) : a.Ja = ke(a.a, function() {
            a.xa = N()
        }))
    }
    k.Wa = function() {
        X.prototype.Wa.call(this);
        this.M = new H(0, 0, 0, 0)
    };
    k.Xa = function() {
        X.prototype.Xa.call(this);
        this.M = new H(0, 0, 0, 0)
    };
    k.aa = function() {
        if (!this.ca) {
            this.Qa = Pd();
            this.Mb = N();
            var a = this.Kb(!1, this.ra);
            a && lg(this, a)
        }
        X.prototype.aa.call(this);
        mg(this)
    };

    function mg(a) {
        if (a.ca && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.sa = Math.max(b, a.sa))
        }
    }

    function ng(a) {
        return new Fd(a.m, a.Ab)
    }
    k.Ca = function(a) {
        if (v(a) && 0 != a.length) {
            var b = new Yc,
                c = O.g();
            L(b, "omid", J);
            ad(b, a);
            b = M(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = ad(this.h, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.ha = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.qa = 2 : "1" == d && (this.qa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Gb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.sb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10), isNaN(d) || (this.ob = d)) : "adf=1" == d && (this.Lb = !0)
            }
            this.f.a = this.ma();
            X.prototype.Ca.call(this, a)
        }
    };
    k.Za = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Gf(this.b),
            h = Math.floor(100 * this.f.o);
        this.qa = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        X.prototype.Za.call(this, a, b, c, d, e, f); - 1 == this.ia && -1 != this.f.b ? this.ia = this.f.b : 0 == this.ia && 1 == this.f.b && (this.ia = 1);
        na(b) || (0 < this.f.o ? (b = Ke(a, b), this.M = 0 >= U(Jf(this)) || b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Bc(b, -a.left, -a.top)) : this.M = new H(0, 0, 0, 0));
        a = Gf(this.b);
        b = Math.floor(100 * this.f.o);
        (!g && a || b != h) && (g = this.Kb(a, b)) && lg(this, g);
        try {
            this.K = fg(this.i)
        } catch (n) {}
        mg(this)
    };
    k.ma = function() {
        return wb ? !1 : 1 == this.qa
    };

    function og(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = pg(a);
        d && Xa(f, d);
        f.adk = a.m;
        a.Lb && a.na && (f.adf = a.na);
        d = a.s;
        var g = O.g();
        !c && d && g.b && (c = g.b);
        c && (f.r = c);
        0 === a.K && (f.invis = 1);
        c = lf(f).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = O.g().f;
        e[0] = b;
        e[7] = a.f.o;
        e[9] = Ae(a.M);
        e[28] = a.ga;
        e[32] = Kf(a);
        e[5] = Gf(a.b) && 4 != a.u;
        e[13] = Cf(a.b.a).join(",");
        e[18] = 0 == U(Jf(a));
        null != a.J && (e[20] = a.J.y, e[21] = a.J.x);
        b = T.g();
        null != b.c && (e[22] = b.c.I(), e[23] = b.c.H());
        null != b.a && (e[30] = b.a.I(), e[31] = b.a.H(), e[38] = Ae(b.a));
        c = b.l;
        f = Jf(a);
        e[37] = Ae(new H(f.top + c.y, f.right + c.x, f.bottom + c.y, f.left + c.x));
        b.h && (b = b.h, e[39] = b.width + "-" + b.height); - 1 != a.K && (e[25] = a.K);
        if (a = ng(a)) a.b && (e[4] = a.b), a.a && (e[12] = a.a);
        return e
    }

    function qg(a) {
        var b = T.g(),
            c = og(a, "goog_acknowledge_monitoring");
        c[8] = b.b;
        c[36] = b.u;
        Ce(a.a, c, a.fa)
    }
    k.$a = function(a, b, c) {
        if (!b && (-1 != this.Mb || -1 != this.xa) && 2 != this.A && 1 != this.A && -1 != this.A && 7 != this.A) {
            var d = null;
            try {
                d = this.i && this.i.getBoundingClientRect()
            } catch (e) {}
            d && 0 != d.width && 0 != d.height || (d = xe(a.top, this.sb, this.ob), this.A = d.status, d.a && (d.a == this.i ? this.A = 2 : rg(this, d.a)))
        }
        X.prototype.$a.call(this, a, b, c)
    };

    function pg(a) {
        var b = T.g(),
            c = $c(a.h),
            d = b.l,
            e = Jf(a);
        c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
        e = a.b;
        c.tos = Af(e.a);
        c.mtos = Cf(e.a);
        c.mcvt = e.c.a;
        c.rs = a.ga;
        (d = 5 == a.ga) || (c.ht = a.Ka);
        0 <= a.ya && (c.tfs = a.ya, c.tls = a.bb);
        c.mc = Pf(e.b);
        c.lte = Pf(a.ra);
        c.bas = a.Bb;
        c.bac = a.ia;
        e = O.g();
        b.b && (c["if"] = a.s ? 0 : 1);
        d && a.B && (c.req = encodeURIComponent(a.B).substring(0, 100));
        a.Ib && (c.ci = "1");
        a.ma() && (c.la = "1");
        a.La && (c.pa = "1");
        c.avms = Kf(a);
        a.c && Xa(c, a.c.N());
        0 != a.j && (c.md = a.j);
        1 != M(e.a, "nioh") && (c.avms_sel = e.i, c.first_poll = e.h);
        b = a.w;
        0 < b && (c.rst = b);
        b = a.w;
        b = -1 == b || a.wa < b ? -1 : a.wa - b;
        0 <= b && (c.dlt = b);
        b = -1 == a.w || a.Qa < a.w ? -1 : a.Qa - a.w;
        0 <= b && (c.rpt = b);
        0 <= a.Pa && (c.isd = a.Pa);
        0 <= a.sa && (c.msd = a.sa);
        c.lm = a.u;
        (a = sg(a)) && (c.ext = a);
        return c
    }

    function rg(a, b) {
        ig(a);
        If(a);
        a.i = b;
        Qf(a);
        hg(a, b);
        kg(a);
        a.c && (a = a.c, a.Z(), a.a = b, a.Da(), a.U())
    }

    function sg(a) {
        return a.F && 0 < oc(a.F).length ? encodeURIComponent(Ea(oc(a.F), function(b) {
            return b + "=" + a.F[b]
        }).join("&")) : null
    }

    function lg(a, b) {
        b && nc(b, function(c, d) {
            null == c ? delete a.F[d] : a.F[d] = c
        })
    };

    function tg() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    tg.prototype.a = function(a, b, c) {
        if (c != this.b || !Gd(ng(a))) return !1;
        c = {};
        c = (c[0] = this.key, c);
        Xa(c, b);
        b = Gf(a.b);
        if (1 == a.u) return b && !this.c ? (this.c = b, ug(a, c)) : !1;
        this.c = b;
        return ug(a, c)
    };

    function vg(a) {
        tg.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(vg, tg);

    function wg(a) {
        tg.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(wg, tg);
    wg.prototype.a = function(a, b, c) {
        var d = !a.mb;
        if (Gf(a.b) && a.ha || d) {
            if (b = tg.prototype.a.call(this, a, b, c))
                if (Gf(a.b) || (a.mb = !0), Gf(a.b) || a.ha) a.ha = !1;
            return b
        }
        return !1
    };

    function xg() {
        this.b = [];
        this.a = []
    }

    function yg(a) {
        return Ia(zg.a, function(b) {
            b = ng(b);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }

    function Ag(a) {
        var b = zg;
        return a ? Ia(b.a, function(c) {
            return c.a == a
        }) : null
    }

    function Bg(a) {
        return Ia(a.a, function() {
            return !1
        })
    }

    function Cg() {
        var a = zg;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : La(a.a, a.b)
    }
    xg.prototype.reset = function() {
        this.b = [];
        this.a = []
    };

    function Dg(a, b) {
        a = a.a;
        var c = Ja(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), Rf(b), b.D(), !0) : !1
    }

    function Eg(a) {
        var b = zg;
        if (Dg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Bg(b)
            };
            for (var c = a(); c; c = a()) Dg(b, c)
        }
    }
    w(xg);
    var zg = xg.g();

    function Fg() {
        this.a = this.b = null
    }

    function Gg(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Ia(a.b, function(d) {
            return null != d && d.W() && d.vb(c)
        });
        a.a && We(a.a.b);
        return null != a.a
    }
    w(Fg);

    function Hg(a, b, c, d) {
        $e.call(this, a, b, c, d)
    }
    t(Hg, $e);
    Hg.prototype.qb = function(a) {
        return Oe(a, this.m, this.a, 1 == M(this.F, "od"))
    };
    Hg.prototype.U = function() {
        var a = this.b.b;
        this.timestamp = -1 === a.time ? N() : a.time;
        this.Na();
        this.ib();
        a = Ke(this.c, this.m);
        var b = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a;
        a = this.b.b;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.c.bottom - this.c.top) * (this.c.right - this.c.left) && (this.qb(b) ? b = new H(0, 0, 0, 0) : (c = T.g().j, e = new H(0, c.height, c.width, 0), c = Le(b, this.c), d = Le(b, T.g().a), e = Le(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Bc(b, -this.c.left, -this.c.top);
        this.h = new Qe(a, this.c, b, c, d, 0, e)
    };
    Hg.prototype.G = function() {
        return this.i.G()
    };
    Hg.prototype.R = function(a) {
        if (!this.a) {
            var b = T.g().c;
            this.c = b ? b : new H(0, 0, 0, 0)
        }
        $e.prototype.R.call(this, a)
    };

    function Ig(a) {
        a = Jg(a);
        af.call(this, a.length ? a[a.length - 1] : new V(y, 0));
        this.c = a;
        this.f = oa;
        this.a = null
    }
    t(Ig, af);
    k = Ig.prototype;
    k.G = function() {
        return (this.a ? this.a : this.b).G()
    };
    k.N = function() {
        return (this.a ? this.a : this.b).N()
    };
    k.P = function() {
        return (this.a ? this.a : this.b).P()
    };
    k.vb = function(a) {
        this.f = a;
        z(this.c, function(b) {
            return b.pb()
        });
        Ve(this.b, this);
        return !0
    };
    k.D = function() {
        z(this.c, function(a) {
            a.D()
        });
        af.prototype.D.call(this)
    };
    k.W = function() {
        return Ga(this.c, function(a) {
            return a.W()
        })
    };
    k.C = function() {
        return Ga(this.c, function(a) {
            return a.C()
        })
    };
    k.za = function(a, b, c) {
        return new Hg(a, this.b, b, c)
    };
    k.V = function(a) {
        0 == a.P() && this.f(a.ja(), this)
    };
    k.R = function(a) {
        this.a = a.c
    };
    k.S = function() {
        return !1
    };

    function Jg(a) {
        if (!a.length) return [];
        a = Da(a, function(c) {
            return null != c && c.W()
        });
        for (var b = 1; b < a.length; b++) Ve(a[b - 1], a[b]);
        return a
    };

    function Kg(a, b, c, d) {
        $e.call(this, a, b, c, d);
        this.u = this.s = null
    }
    t(Kg, Hg);
    k = Kg.prototype;
    k.Da = function() {
        var a = this;
        this.u || (this.u = N());
        if (fe(298, function() {
            return a.w()
        })) return !0;
        Te(this.b, "msf");
        return !1
    };

    function Lg(a, b) {
        try {
            if (b.length) {
                a.s || (a.s = N());
                var c = Mg(b);
                a.c = ye(c.boundingClientRect);
                var d = ye(c.intersectionRect);
                a.m = Bc(d, a.c.left - d.left, a.c.top - d.top)
            }
        } catch (e) {
            a.Z(), ge(299, e)
        }
    }

    function Mg(a) {
        return Fa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Na = function() {};
    k.qb = function() {
        return !1
    };
    k.ib = function() {};
    k.N = function() {
        var a = {};
        return Object.assign(this.b.N(), (a.niot_obs = this.u, a.niot_cbk = this.s, a))
    };
    var Ng = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Og(a, b, c, d) {
        Kg.call(this, a, b, c, d);
        this.j = this.l = this.f = null
    }
    t(Og, Kg);
    Og.prototype.G = function() {
        return "nio"
    };
    Og.prototype.Z = function() {
        if (this.f && this.a) try {
            this.f.unobserve(this.a), this.l ? (this.l.unobserve(this.a), this.l = null) : this.j && (this.j.disconnect(), this.j = null)
        } catch (a) {}
    };

    function Pg(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    Og.prototype.w = function() {
        var a = this;
        if (!this.a) return !1;
        var b = this.a,
            c = this.b.a,
            d = O.g();
        this.f = new c.IntersectionObserver(Jd(d.c.a, function(f) {
            return Lg(a, f)
        }), Ng);
        if (1 == M(d.a, "roio")) {
            var e = function() {
                a.f.unobserve(b);
                a.f.observe(b);
                Lg(a, Pg(a))
            };
            c.ResizeObserver ? (this.l = new c.ResizeObserver(e), this.l.observe(b)) : c.MutationObserver && (this.j = new u.MutationObserver(e), this.j.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))
        }
        this.f.observe(b);
        1 !== M(d.a, "nioh") && Lg(this, Pg(this));
        return !0
    };
    Og.prototype.U = function() {
        if (1 !== M(O.g().a, "nioh")) {
            var a = Pg(this);
            0 < a.length && Lg(this, a)
        }
        Kg.prototype.U.call(this)
    };

    function Qg(a) {
        a = void 0 === a ? y : a;
        af.call(this, new V(a, 2))
    }
    t(Qg, af);
    Qg.prototype.G = function() {
        return "nio"
    };
    Qg.prototype.W = function() {
        var a = 1 !== M(O.g().a, "nioh"),
            b = T.g().b;
        return (a || b) && this.C()
    };
    Qg.prototype.C = function() {
        return "exc" !== (O.g(), "ns") && !T.g().f && null != this.b.a.IntersectionObserver
    };
    Qg.prototype.za = function(a, b, c) {
        return new Og(a, this.b, b, c)
    };

    function Rg() {
        var a = Sg();
        V.call(this, y.top, a, "geo")
    }
    t(Rg, V);
    Rg.prototype.Ra = function() {
        return T.g().a
    };
    Rg.prototype.C = function() {
        this.l = Sg();
        return 2 == this.l
    };

    function Sg() {
        O.g();
        var a = T.g();
        return a.b || a.f ? 0 : 2
    }
    w(Rg);
    var Tg = {},
        Ug = (Tg[1] = function() {
            return new Qg
        }, Tg[2] = function() {
            return new Ig([Rg.g()])
        }, Tg);

    function Vg() {
        this.a = null;
        this.b = Ug
    }

    function Wg() {
        var a = Vg.g();
        a: {
            var b = M(O.g().a, "mv");
            if (null != b && (b = a.b[b]) && (b = b()) && b.C()) break a;b = null
        }
        a.a = b
    }
    w(Vg);

    function Yg(a, b, c) {
        W.call(this);
        this.f = null != c ? wa(a, c) : a;
        this.c = b;
        this.b = wa(this.Rb, this);
        this.a = []
    }
    za(Yg, W);
    k = Yg.prototype;
    k.Ha = !1;
    k.Y = null;
    k.kb = function(a) {
        this.a = arguments;
        this.Y ? this.Ha = !0 : Zg(this)
    };
    k.stop = function() {
        this.Y && (u.clearTimeout(this.Y), this.Y = null, this.Ha = !1, this.a = [])
    };
    k.O = function() {
        Yg.Eb.O.call(this);
        this.stop()
    };
    k.Rb = function() {
        this.Y = null;
        this.Ha && (this.Ha = !1, Zg(this))
    };

    function Zg(a) {
        var b = a.b;
        var c = a.c;
        if (!sa(b))
            if (b && "function" == typeof b.handleEvent) b = wa(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : u.setTimeout(b, c || 0);
        a.Y = b;
        a.f.apply(null, a.a)
    };

    function $g() {
        this.done = !1;
        this.a = {
            hb: 0,
            gb: 0,
            Ya: 0,
            jb: 0,
            Aa: -1
        };
        this.w = this.f = this.m = this.h = this.s = null;
        this.j = this.B = !1;
        this.u = "";
        this.b = null;
        this.A = 0;
        this.c = new Re(this)
    }

    function ah() {
        var a = (O.g(), "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }

    function bh(a, b) {
        var c = Y;
        if (!c.B) {
            c.B = !0;
            if (!c.s && !ah()) {
                var d = R(137, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    return c.l.apply(c, r(f))
                });
                c.h = new Yg(d, 100);
                c.s = S(a, "scroll", function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    null !== c.h && c.h.kb.apply(c.h, r(f))
                }, 138)
            }
            c.m || ah() || (d = R(140, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return c.l.apply(c, r(f))
            }), c.f = new Yg(d, 100), c.m = S(a, "resize", function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                null !== c.f && c.f.kb.apply(c.f, r(f))
            }, 141));
            if (b)
                for (a = Cg(), d = 0; d < a.length; ++d) b = a[d], b.a && Qf(b);
            ch(c, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return c.i.apply(c, r(f))
            });
            c.i()
        }
    }
    $g.prototype.l = function() {
        dh(this, Cg(), !1)
    };
    $g.prototype.Db = function() {
        dh(this, Cg(), !1)
    };

    function eh() {
        var a = Vg.g();
        null != a.a && a.a.b && We(a.a.b);
        a = Fg.g();
        null != a.a && a.a.b ? We(a.a.b) : Ee(T.g())
    }

    function dh(a, b, c) {
        if (!a.done)
            if (a.c.cancel(), 0 == b.length) a.j = !1;
            else {
                a.b = null;
                try {
                    eh();
                    var d = N();
                    O.g().h = d;
                    if (null != Fg.g().a)
                        for (var e = 0; e < b.length; e++) Mf(b[e], d, c);
                    for (e = 0; e < b.length; e++) Nf(b[e]);
                    a.a.Ya += N() - d;
                    ++a.a.jb;
                    fh(a)
                } finally {
                    c ? z(b, function(f) {
                        return f.Wa()
                    }) : Se(a.c)
                }
            }
    }

    function ch(a, b) {
        if (!a.w) {
            b = be(142, b);
            P();
            var c;
            x.visibilityState ? c = "visibilitychange" : x.mozVisibilityState ? c = "mozvisibilitychange" : x.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && uc(x, c, b, {
                capture: !1
            }) && (a.w = b)
        }
    }
    $g.prototype.i = function() {
        var a = He(),
            b = N();
        a ? (gd || (ed = b, z(zg.b, function(c) {
            return c.b.i(b, !c.j())
        })), gd = !0) : (this.A = gh(this, b), gd = !1, z(zg.b, function(c) {
            c.Ba() && c.b.h(b)
        }));
        this.j = !0;
        dh(this, Cg(), !a)
    };

    function hh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function ih(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= fd ? N() - fd : -1,
                e = N(); - 1 == a.a.Aa && (d = e);
            var f = T.g(),
                g = O.g(),
                h = $c(g.a),
                n = Cg();
            try {
                if (0 < n.length) {
                    var m = f.a;
                    m && (h.bs = [m.I(), m.H()]);
                    var l = f.h;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = fd;
                h.bin = g.f;
                switch (O.g(), "ns") {
                    case "iem":
                        h.iem = 1;
                        break;
                    case "aio":
                        h.aio = 1;
                        break;
                    case "nio":
                        h.nio = 1
                }
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.a.hb, a.a.gb, a.a.Ya, a.a.jb, a.a.Aa, qe, a.c.b].join("-");
                h.tvt = gh(a, e);
                f.f && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.c;
                    h.is = [q.I(), q.H()]
                }
            } catch (F) {
                h.error = 1
            }
            a.b = h
        }
        b = a.b;
        a = {};
        for (var p in b) a[p] = b[p];
        p = O.g().c;
        if (1 == M(p.c, "prf")) {
            m = new Hd;
            b = p.a;
            l = 0; - 1 < b.a && (l = b.f.a.a() - l);
            Tb(m, 1, b.c + l);
            b = p.a;
            Tb(m, 5, -1 < b.a ? b.b + 1 : b.b);
            Tb(m, 2, p.b.a.f());
            Tb(m, 3, p.b.a.c());
            Tb(m, 4, p.b.a.b());
            p = {};
            b = new Mb;
            l = Rb(m, 1);
            l = null == l ? l : +l;
            l = null == l ? 0 : l;
            0 !== l && (q = l, null != q && (Kb(b.a, 9), l = b.a, d = q, d = (q = 0 > d ? 1 : 0) ? -d : d, 0 === d ? (Hb = 0 < 1 / d ? 0 : 2147483648, Gb = 0) : isNaN(d) ? (Hb = 2147483647, Gb = 4294967295) : 1.7976931348623157E308 < d ? (Hb = (q << 31 | 2146435072) >>> 0, Gb = 0) : 2.2250738585072014E-308 > d ? (d /= Math.pow(2, -1074), Hb = (q << 31 | d / 4294967296) >>> 0, Gb = d >>> 0) : (c = Math.floor(Math.log(d) / Math.LN2), 1024 == c && (c = 1023), d *= Math.pow(2, -c), Hb = (q << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0, Gb = 4503599627370496 * d >>> 0), Lb(l, Gb), Lb(l, Hb)));
            l = Sb(m, 2);
            0 !== l && null != l && Nb(b, 2, l);
            l = Sb(m, 3);
            0 !== l && null != l && Nb(b, 3, l);
            l = Sb(m, 4);
            0 !== l && null != l && Nb(b, 4, l);
            l = Sb(m, 5);
            if (0 !== l && null != l && null != l)
                if (Kb(b.a, 40), m = b.a, 0 <= l) Kb(m, l);
                else {
                    for (q = 0; 9 > q; q++) m.a.push(l & 127 | 128), l >>= 7;
                    m.a.push(1)
                } m = new Uint8Array(b.c + b.a.length());
            q = b.b;
            c = q.length;
            for (d = l = 0; d < c; d++) e = q[d], m.set(e, l), l += e.length;
            q = Jb(b.a);
            m.set(q, l);
            b.b = [m];
            if (!Fb)
                for (Fb = {}, b = 0; 65 > b; b++) Fb[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
            b = Fb;
            l = [];
            for (q = 0; q < m.length; q += 3) g = m[q], h = (c = q + 1 < m.length) ? m[q + 1] : 0, f = (d = q + 2 < m.length) ? m[q + 2] : 0, e = g >> 2, g = (g & 3) << 4 | h >> 4, h = (h & 15) << 2 | f >> 6, f &= 63, d || (f = 64, c || (h = 64)), l.push(b[e], b[g], b[h], b[f]);
            p = (p.pf = l.join(""), p)
        } else p = {};
        Xa(a, p);
        return a
    }

    function jh() {
        z(Cg(), function(a) {
            if (a.a) {
                var b = a.m || 0,
                    c = Vg.g();
                if (b = c.a ? new uf(c.a, a.a, a.h, b) : null) a.L = b
            }
        })
    }

    function kh() {
        var a = Fg.g();
        if (null != a.a) {
            var b = a.a;
            z(Cg(), function(c) {
                return Lf(c, b)
            })
        }
    }

    function fh(a) {
        "osd" == a.u && z(zg.a, function(b) {
            var c = {};
            jg(b, 0, (c.r = void 0, c))
        })
    }

    function gh(a, b) {
        a = a.A;
        gd && (a += b - ed);
        return a
    }

    function lh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function mh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function nh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        ce.h = "av-js";
        Yd.a = .01;
        ee([function(c) {
            var d = O.g(),
                e = {};
            Xa(c, (e.bin = d.f, e.type = "error", e), $c(d.a), ih(a, y), b());
            if (d = mf()) e = {}, Xa(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function oh(a) {
        var b = new ph,
            c = new tg(b),
            d = new wg(b);
        b = new vg(b);
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return [c, d, b]
        }
    }
    w($g);
    var Y = $g.g();

    function ph() {}

    function ug(a, b) {
        b = void 0 === b ? {} : b;
        var c = b.r,
            d = b[0],
            e = ih(Y, I(), !1);
        Xa(e, Sa(b, function(f, g) {
            return "r" != g && 0 != g
        }));
        b = og(a, d, c, e);
        Ce(a.a, b, a.fa);
        return !0
    };

    function qh(a, b, c, d) {
        Kg.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(qh, Kg);
    qh.prototype.G = function() {
        return "aio"
    };
    qh.prototype.Z = function() {
        if (this.f) try {
            this.f()
        } catch (a) {}
    };
    qh.prototype.w = function() {
        var a = this;
        if (!this.a) return !1;
        var b = this.b.a,
            c = O.g().c.a;
        this.f = Ec(b).observeIntersection(Jd(c, function(d) {
            return Lg(a, d)
        }));
        return !0
    };

    function rh(a) {
        a = void 0 === a ? y : a;
        af.call(this, new V(a, 2))
    }
    t(rh, af);
    rh.prototype.G = function() {
        return "aio"
    };
    rh.prototype.W = function() {
        return T.g().b && this.C()
    };
    rh.prototype.C = function() {
        return !T.g().f && Dd(this.b.a)
    };
    rh.prototype.za = function(a, b, c) {
        return new qh(a, this.b, b, c)
    };

    function sh() {
        V.call(this, y, 2, "iem")
    }
    t(sh, V);
    k = sh.prototype;
    k.Ra = function() {
        function a(p, F) {
            return !!b.a.document.elementFromPoint(p, F)
        }
        var b = this,
            c = new H(0, this.a.innerWidth || this.a.width, this.a.innerHeight || this.a.height, 0),
            d = dc(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.right - d.x),
            h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new H(f, g, h, e);
        var n = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, f)
        });
        else if (n) h = Z(f, h, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, f)
        });
        else if (m) f = Z(h, f, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, h)
        });
        else if (d) f = Z(h, f, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, h)
        });
        else {
            var l = Math.floor((e + g) / 2),
                q = Math.floor((f + h) / 2);
            if (!a(l, q)) return new H(0, 0, 0, 0);
            f = Z(q, f, function(p) {
                return a(l, p)
            });
            h = Z(q, h, function(p) {
                return a(l, p)
            });
            e = Z(l, e, function(p) {
                return a(p, q)
            });
            g = Z(l, g, function(p) {
                return a(p, q)
            })
        }
        return new H(f, g, h, e)
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
    k.C = function() {
        return T.g().b && D && Db(8) && Ed(this.a)
    };
    k.Ua = function() {};
    k.Va = function() {};
    k.wb = function() {};
    k.xb = function() {};
    w(sh);
    var Ua = {
        Ub: "addEventListener",
        Zb: "getMaxSize",
        $b: "getScreenSize",
        ac: "getState",
        bc: "getVersion",
        fc: "removeEventListener"
    };

    function th() {
        V.call(this, y, 2, "mraid");
        var a = this;
        this.L = 0;
        this.B = this.A = !1;
        this.m = null;
        this.i = 0;
        this.s = -1;
        this.c = null;
        var b = Cd(this.a);
        b && (this.c = b.Ga, this.s = b.Ia);
        this.c && !Ta(function(c) {
            return sa(a.c[c])
        }) && (this.c = null, this.s = -1);
        this.b.a = new H(0, 0, 0, 0)
    }
    t(th, V);
    k = th.prototype;
    k.C = function() {
        return null != this.c
    };
    k.N = function() {
        var a = {};
        this.L && (a.mraid = this.L);
        this.A && (a.mlc = 1);
        this.s && (a.mtop = this.s);
        this.m && (a.mse = this.m);
        return a
    };
    k.$ = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.c[a].apply(this.c, c)
        } catch (e) {
            ge(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function uh(a, b, c) {
        a.$("removeEventListener", b, c)
    }
    k.pb = function() {
        var a = this;
        if (!this.w) {
            this.w = !0;
            a: switch (this.s) {
                case 0:
                case 3:
                    var b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? (T.g().s = !0, this.a.document.readyState && "complete" == this.a.document.readyState ? vh(this) : S(this.a, "load", function() {
                P().setTimeout(R(292, function() {
                    return vh(a)
                }), 100)
            }, 292)) : Te(this, "i")
        }
    };

    function vh(a) {
        "loading" === a.$("getState") ? (wh(a), a.$("addEventListener", "ready", xh)) : yh(a)
    }

    function wh(a) {
        0 == a.i && (a.i = P().setTimeout(R(293, function() {
            a.i = -1;
            uh(a, "ready", xh);
            ge(539, Error());
            a.m = "rt";
            Te(a, "w")
        }), 500))
    }

    function yh(a) {
        a.i = -1;
        v(a.c.AFMA_LIDAR) ? (a.A = !0, zh(a)) : (a.m = "nc", Te(a, "w"))
    }

    function zh(a) {
        a.B = !1;
        P().setTimeout(R(524, function() {
            a.B || (Ah(a), ge(540, Error()), a.m = "mt", Te(a, "w"))
        }), 500);
        void 0 !== a.c.AFMA_LIDAR_EXP_1 && (a.c.AFMA_LIDAR_EXP_1 = !0);
        a.$("addEventListener", a.c.AFMA_LIDAR, Bh)
    }

    function Ah(a) {
        uh(a, a.c.AFMA_LIDAR, Bh);
        a.A = !1
    }
    k.Ua = function() {
        var a = T.g(),
            b = Ch(this, "getMaxSize");
        a.a = new H(0, b.width, b.height, 0)
    };
    k.Va = function() {
        T.g().j = Ch(this, "getScreenSize")
    };

    function Ch(a, b) {
        if ("loading" === a.$("getState")) return new G(-1, -1);
        b = a.$(b);
        if (!b) return new G(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
    }
    k.D = function() {
        Ah(this);
        V.prototype.D.call(this)
    };

    function xh() {
        try {
            var a = th.g();
            0 < a.i && P().clearTimeout(a.i);
            uh(a, "ready", xh);
            yh(a)
        } catch (b) {
            ge(541, b)
        }
    }

    function Bh(a, b) {
        try {
            var c = th.g();
            c.B = !0;
            var d = a ? new H(a.y, a.x + a.width, a.y + a.height, a.x) : new H(0, 0, 0, 0);
            var e = N(),
                f = He();
            var g = new Pe(e, f, c);
            g.a = d;
            g.volume = b;
            Ze(c, g)
        } catch (h) {
            ge(542, h)
        }
    }
    w(th);

    function Dh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };
    var Eh = new function(a) {
        this.a = a
    }(5);

    function Fh(a) {
        return a[Eh.a] || function() {}
    };

    function Gh() {}
    w(Gh);

    function Hh() {
        this.a = function() {
            return !1
        }
    }
    w(Hh);

    function Ih(a) {
        var b = void 0 === b ? !1 : b;
        return Hh.g().a(a, b)
    };

    function Jh() {}
    w(Jh);
    var Kh = Y.c;

    function Lh() {
        this.b = null;
        this.f = this.i = this.c = this.h = !1;
        Mh(this);
        nh()
    }

    function Nh() {
        if (void 0 === b) {
            var a = void 0 === a ? u : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        Gh.g();
        Hh.g().a = Fh(b);
        Jh.g();
        b = O.g();
        Ih(155) && Zc(b.a, "nioh", 1);
        Ih(160) && Zc(b.a, "gtx", 1)
    }
    k = Lh.prototype;
    k.Sb = function(a) {
        this.h = a
    };
    k.nb = function() {
        Oh(this);
        P().clearTimeout(this.b);
        this.b = null;
        fd = N();
        Ph(this)
    };

    function Oh(a) {
        O.g().f = 1;
        if (!(0 < fd)) {
            try {
                if (!Qh(a)) return;
                eh();
                Rh(a)
            } catch (b) {}
            a.b = P().setTimeout(R(129, function() {
                return Oh(a)
            }), 250)
        }
    }
    k.Tb = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (hh(y)) {
            var l = new gg(y, b, a, -1, c, g);
            l.ta = oh(l.u);
            e = O.g();
            kg(l);
            0 < h && -1 == l.w && (l.w = h);
            0 <= n && (l.Pa = n);
            l.Oa = function(q) {
                for (var p = [], F = 0; F < arguments.length; ++F) p[F] = arguments[F];
                return m.Ob.apply(m, r(p))
            };
            l.eb = function(q) {
                for (var p = [], F = 0; F < arguments.length; ++F) p[F] = arguments[F];
                return m.Sa.apply(m, r(p))
            };
            13 != c && (l.m = lh(b), l.Ab = Dh(b), l.na = mh(b));
            f && (l.Ib = !0);
            Zc(e.a, "oseid", Wf(this.a));
            zg.a.push(l);
            ++Y.a.gb;
            e.b ? this.Sa(l, e.b) : ((b = Fg.g().a) && Lf(l, b), Ph(this), e.b || (b = M(e.a, "sel"), 1 == b ? Zc(l.h, "sela", d ? 1 : 0) : (2 == b && (d = pe(a, "loadComplete")), d ? (Sh(l), l.aa()) : a && je(a, function() {
                l.ka() || (Sh(l), l.aa())
            }), Y.j || Y.i())))
        }
    };

    function Rh(a) {
        Th(a);
        Uf(a.a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Tb.apply(a, r(c))
        }, function() {
            return a.h
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Sb.apply(a, r(c))
        })
    }

    function Uh(a) {
        O.g();
        var b = [sh.g(), th.g()],
            c = [Rg.g()];
        return [new Ig(b), new Qg(a), new rh(a), new Ig(c)]
    }

    function Ph(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = I(),
                    c = T.g(),
                    d = O.g();
                d.j = 947190542;
                if (Qh(a)) {
                    Y.a.hb = Vf(a.a);
                    c.m = !0;
                    Rh(a);
                    var e;
                    (e = T.g().f || A(B, "CrKey") || A(B, "PlayStation") || A(B, "Roku") || De() || A(B, "Xbox")) || (P(), e = 0 !== ld());
                    if (e) {
                        d.i = N();
                        var f = Fg.g();
                        if (null == f.b) {
                            var g = Uh(b);
                            f.b = g
                        }
                        Gg(f, function(h) {
                            return Vh(a, h)
                        }) ? Y.done || (kh(), Wg(), jh(), Wh(a), Gc()) : Vh(a, "i")
                    } else Vh(a, "pv")
                } else Xh(a, "c")
            } catch (h) {
                throw Vh(a, "x"), zg.reset(), h;
            }
        }
    }

    function Wh(a) {
        if (-1 == Y.a.Aa) {
            var b = I(),
                c = 2 == Wf(a.a);
            bh(b, c);
            P().setTimeout(R(131, function() {
                Xh(a, "t")
            }), 36E5);
            Y.a.Aa = N() - fd
        }
    }

    function Vh(a, b) {
        O.g().b = b;
        for (var c = ba(zg.a), d = c.next(); !d.done; d = c.next()) d.value.s = !0;
        Xh(a, b, !1)
    }

    function Xh(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Kh.cancel();
            a.a || (a.a = new Sf);
            if (2 == Wf(a.a) || a.c)
                for (a = zg.a, c && 0 < a.length && dh(Y, a, !0), c = ba(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    jg(a, 1, (d.r = b, d));
                    Rf(a)
                }
            Y.done = !0
        }
    }

    function Qh(a) {
        if (!hh(I())) return !1;
        var b = new Sf;
        if (!(b.a || b.b || b.c)) return !1;
        a.a = b;
        return !0
    }
    k.Sa = function(a, b) {
        a.s = !0;
        var c = {};
        jg(a, 2, (c.r = b, c));
        Rf(a)
    };
    k.Ob = function(a) {
        if (a && Gf(a.b) && (0 >= U(Jf(a)) ? 0 : null != a.T && null != a.T.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.Cb)) {
            var b = a.T;
            if (xc()) wc(window, b, !0);
            else {
                var c = u.document;
                if (c.body) {
                    var d = c.getElementById("goog-srcless-iframe");
                    d || (d = (new Yb(c)).a.createElement("IFRAME"), d.style.display = "none", d.id = "goog-srcless-iframe", c.body.appendChild(d));
                    c = d
                } else c = null;
                c && c.contentWindow && wc(c.contentWindow, b, !0)
            }
            a.Cb = !0
        }
    };

    function Yh(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if (v(c)) {
                var d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 26:
                            case 15:
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
                            case 19:
                            case 3:
                                if (sa(decodeURIComponent)) try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            } else d = null;
            if (c = d)
                if (e = c[0], Ka("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_av_measurement_hold_update goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = yg(new Fd(c[4], c[12]))))
                    if (0 < c[33] && -1 == d.wa && (d.wa = c[33]), "goog_stop_monitoring" === e) Eg(d);
                    else if (h = c[26], void 0 !== h && (h = h ? 1 : 2, d.j == h || 2 == d.j || 1 == d.j && 3 == h || (d.j = h, 1 != d.j && 3 != d.j || d.Xa())), (c[35] || "goog_creative_loaded" === e) && d.aa(), Ka(d.fa, b.source) || d.fa.push(b.source), "goog_request_monitoring" === e || !d.Jb)
                        if (d.Jb = !0, void 0 !== c[16] && (d.ha = !!c[16]), c[19] && d.Ca(c[19]), void 0 !== c[6]) {
                            b = c[6];
                            c = Zh(b, d.u);
                            if (c != d.u) {
                                if (5 == c) {
                                    d.s = !0;
                                    Eg(d);
                                    return
                                }
                                d.u = c;
                                d.ta = oh(c)
                            }
                            4 != b || T.g().u ? (4 == b && d.aa(), qg(d), b = O.g(), d.s && b.b ? (a.Sa(d, b.b), Eg(d)) : a.c = !0) : (qg(d), Eg(d))
                        }
        }
    }

    function Sh(a) {
        if (a && Gd(ng(a))) {
            var b = og(a, "goog_get_mode");
            Ce(a.a, b)
        }
    }

    function Th(a) {
        if (!a.i) {
            S(y, "message", function(c) {
                return Yh(a, c)
            }, 132);
            var b = $h().contentWindow;
            b && S(b, "message", function(c) {
                return Yh(a, c)
            }, 132);
            a.i = !0
        }
    }

    function ai(a) {
        S(I(), "unload", function() {
            Xh(a, "u")
        }, 133)
    }

    function Zh(a, b) {
        return Ia([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Pb = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (a = Ag(a)) {
            var c = I();
            Rf(a);
            try {
                var d = a.a;
                if (null != d.contentWindow && 3 == a.ga) {
                    switch (a.u) {
                        case 2:
                        case 4:
                            break;
                        default:
                            return
                    }
                    var e = pg(a);
                    e.adk = a.m;
                    e.adf = a.na;
                    0 === a.K && (e.invis = 1);
                    e.r = "ac";
                    var f = ih(Y, c, !1);
                    Xa(e, f);
                    if (b) b = {}, jg(a, 1, (b.r = "ac", b));
                    else try {
                        c.google_image_requests || (c.google_image_requests = []), d.contentWindow.osdsir(c, e, a.s || 0 >= U(Jf(a)) ? 2 : Gf(a.b) ? 4 : 3)
                    } catch (g) {}
                }
            } finally {
                Eg(a)
            }
        }
    };
    k.Qb = function(a, b) {
        a && b && ta(a) && 1 == a.nodeType && ta(b) && 1 == b.nodeType && (a = Ag(a)) && rg(a, b, I())
    };

    function $h() {
        var a = fc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        y.document.body.appendChild(a);
        return a
    }

    function Mh(a) {
        ya("Goog_Osd_UnloadAdBlock", R(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Pb.apply(a, r(c))
        }));
        ya("Goog_Osd_UpdateElementToMeasure", R(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Qb.apply(a, r(c))
        }))
    };
    fe(155, function() {
        Nh();
        var a = new Lh;
        Y.u = "osd";
        ai(a);
        Hc() ? a.nb() : (Oh(a), S(I(), "load", function() {
            P().setTimeout(R(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.nb.apply(a, r(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);