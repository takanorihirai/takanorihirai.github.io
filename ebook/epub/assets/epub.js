!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e(require("xmldom"), require("JSZip")))
        : "function" == typeof define && define.amd
            ? define(["xmldom", "JSZip"], e)
            : "object" == typeof exports
                ? (exports.ePub = e(require("xmldom"), require("JSZip")))
                : (t.ePub = e(t.xmldom, t.JSZip));
})(window, function (t, e) {
    return (function (t) {
        var e = {};
        function i(n) {
            if (e[n]) return e[n].exports;
            var s = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
        }
        return (
            (i.m = t),
            (i.c = e),
            (i.d = function (t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (i.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (
                    (i.r(n),
                        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
                        2 & e && "string" != typeof t)
                )
                    for (var s in t)
                        i.d(
                            n,
                            s,
                            function (e) {
                                return t[e];
                            }.bind(null, s)
                        );
                return n;
            }),
            (i.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                            return t.default;
                        }
                        : function () {
                            return t;
                        };
                return i.d(e, "a", e), e;
            }),
            (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (i.p = "/dist/"),
            i((i.s = 29))
        );
    })([
        function (t, e, i) {
            "use strict";
            i.r(e),
                i.d(e, "requestAnimationFrame", function () {
                    return s;
                }),
                i.d(e, "uuid", function () {
                    return o;
                }),
                i.d(e, "documentHeight", function () {
                    return a;
                }),
                i.d(e, "isElement", function () {
                    return h;
                }),
                i.d(e, "isNumber", function () {
                    return l;
                }),
                i.d(e, "isFloat", function () {
                    return c;
                }),
                i.d(e, "prefixed", function () {
                    return d;
                }),
                i.d(e, "defaults", function () {
                    return u;
                }),
                i.d(e, "extend", function () {
                    return f;
                }),
                i.d(e, "insert", function () {
                    return p;
                }),
                i.d(e, "locationOf", function () {
                    return g;
                }),
                i.d(e, "indexOfSorted", function () {
                    return m;
                }),
                i.d(e, "bounds", function () {
                    return v;
                }),
                i.d(e, "borders", function () {
                    return y;
                }),
                i.d(e, "nodeBounds", function () {
                    return b;
                }),
                i.d(e, "windowBounds", function () {
                    return w;
                }),
                i.d(e, "indexOfNode", function () {
                    return x;
                }),
                i.d(e, "indexOfTextNode", function () {
                    return E;
                }),
                i.d(e, "indexOfElementNode", function () {
                    return _;
                }),
                i.d(e, "isXml", function () {
                    return S;
                }),
                i.d(e, "createBlob", function () {
                    return O;
                }),
                i.d(e, "createBlobUrl", function () {
                    return C;
                }),
                i.d(e, "revokeBlobUrl", function () {
                    return T;
                }),
                i.d(e, "createBase64Url", function () {
                    return k;
                }),
                i.d(e, "type", function () {
                    return N;
                }),
                i.d(e, "parse", function () {
                    return R;
                }),
                i.d(e, "qs", function () {
                    return I;
                }),
                i.d(e, "qsa", function () {
                    return L;
                }),
                i.d(e, "qsp", function () {
                    return j;
                }),
                i.d(e, "sprint", function () {
                    return A;
                }),
                i.d(e, "treeWalker", function () {
                    return z;
                }),
                i.d(e, "walk", function () {
                    return P;
                }),
                i.d(e, "blob2base64", function () {
                    return D;
                }),
                i.d(e, "defer", function () {
                    return B;
                }),
                i.d(e, "querySelectorByType", function () {
                    return q;
                }),
                i.d(e, "findChildren", function () {
                    return M;
                }),
                i.d(e, "parents", function () {
                    return W;
                }),
                i.d(e, "filterChildren", function () {
                    return F;
                }),
                i.d(e, "getParentByTagName", function () {
                    return U;
                }),
                i.d(e, "RangeObject", function () {
                    return H;
                });
            var n = i(14);
            const s =
                "undefined" != typeof window &&
                (window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame),
                r =
                    "undefined" != typeof URL
                        ? URL
                        : "undefined" != typeof window
                            ? window.URL || window.webkitURL || window.mozURL
                            : void 0;
            function o() {
                var t = new Date().getTime();
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (e) {
                        var i = (t + 16 * Math.random()) % 16 | 0;
                        return (
                            (t = Math.floor(t / 16)),
                            ("x" == e ? i : (7 & i) | 8).toString(16)
                        );
                    }
                );
            }
            function a() {
                return Math.max(
                    document.documentElement.clientHeight,
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight
                );
            }
            function h(t) {
                return !(!t || 1 != t.nodeType);
            }
            function l(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
            }
            function c(t) {
                let e = parseFloat(t);
                return (
                    !1 !== l(t) &&
                    (("string" == typeof t && t.indexOf(".") > -1) || Math.floor(e) !== e)
                );
            }
            function d(t) {
                var e = ["-webkit-", "-webkit-", "-moz-", "-o-", "-ms-"],
                    i = t.toLowerCase(),
                    n = ["Webkit", "webkit", "Moz", "O", "ms"].length;
                if ("undefined" == typeof document || void 0 !== document.body.style[i])
                    return t;
                for (var s = 0; s < n; s++)
                    if (void 0 !== document.body.style[e[s] + i]) return e[s] + i;
                return t;
            }
            function u(t) {
                for (var e = 1, i = arguments.length; e < i; e++) {
                    var n = arguments[e];
                    for (var s in n) void 0 === t[s] && (t[s] = n[s]);
                }
                return t;
            }
            function f(t) {
                var e = [].slice.call(arguments, 1);
                return (
                    e.forEach(function (e) {
                        e &&
                            Object.getOwnPropertyNames(e).forEach(function (i) {
                                Object.defineProperty(
                                    t,
                                    i,
                                    Object.getOwnPropertyDescriptor(e, i)
                                );
                            });
                    }),
                    t
                );
            }
            function p(t, e, i) {
                var n = g(t, e, i);
                return e.splice(n, 0, t), n;
            }
            function g(t, e, i, n, s) {
                var r,
                    o = n || 0,
                    a = s || e.length,
                    h = parseInt(o + (a - o) / 2);
                return (
                    i ||
                    (i = function (t, e) {
                        return t > e ? 1 : t < e ? -1 : t == e ? 0 : void 0;
                    }),
                    a - o <= 0
                        ? h
                        : ((r = i(e[h], t)),
                            a - o == 1
                                ? r >= 0
                                    ? h
                                    : h + 1
                                : 0 === r
                                    ? h
                                    : -1 === r
                                        ? g(t, e, i, h, a)
                                        : g(t, e, i, o, h))
                );
            }
            function m(t, e, i, n, s) {
                var r,
                    o = n || 0,
                    a = s || e.length,
                    h = parseInt(o + (a - o) / 2);
                return (
                    i ||
                    (i = function (t, e) {
                        return t > e ? 1 : t < e ? -1 : t == e ? 0 : void 0;
                    }),
                    a - o <= 0
                        ? -1
                        : ((r = i(e[h], t)),
                            a - o == 1
                                ? 0 === r
                                    ? h
                                    : -1
                                : 0 === r
                                    ? h
                                    : -1 === r
                                        ? m(t, e, i, h, a)
                                        : m(t, e, i, o, h))
                );
            }
            function v(t) {
                var e = window.getComputedStyle(t),
                    i = 0,
                    n = 0;
                return (
                    [
                        "width",
                        "paddingRight",
                        "paddingLeft",
                        "marginRight",
                        "marginLeft",
                        "borderRightWidth",
                        "borderLeftWidth",
                    ].forEach(function (t) {
                        i += parseFloat(e[t]) || 0;
                    }),
                    [
                        "height",
                        "paddingTop",
                        "paddingBottom",
                        "marginTop",
                        "marginBottom",
                        "borderTopWidth",
                        "borderBottomWidth",
                    ].forEach(function (t) {
                        n += parseFloat(e[t]) || 0;
                    }),
                    { height: n, width: i }
                );
            }
            function y(t) {
                var e = window.getComputedStyle(t),
                    i = 0,
                    n = 0;
                return (
                    [
                        "paddingRight",
                        "paddingLeft",
                        "marginRight",
                        "marginLeft",
                        "borderRightWidth",
                        "borderLeftWidth",
                    ].forEach(function (t) {
                        i += parseFloat(e[t]) || 0;
                    }),
                    [
                        "paddingTop",
                        "paddingBottom",
                        "marginTop",
                        "marginBottom",
                        "borderTopWidth",
                        "borderBottomWidth",
                    ].forEach(function (t) {
                        n += parseFloat(e[t]) || 0;
                    }),
                    { height: n, width: i }
                );
            }
            function b(t) {
                let e,
                    i = t.ownerDocument;
                if (t.nodeType == Node.TEXT_NODE) {
                    let n = i.createRange();
                    n.selectNodeContents(t), (e = n.getBoundingClientRect());
                } else e = t.getBoundingClientRect();
                return e;
            }
            function w() {
                var t = window.innerWidth,
                    e = window.innerHeight;
                return { top: 0, left: 0, right: t, bottom: e, width: t, height: e };
            }
            function x(t, e) {
                for (
                    var i, n = t.parentNode.childNodes, s = -1, r = 0;
                    r < n.length && ((i = n[r]).nodeType === e && s++, i != t);
                    r++
                );
                return s;
            }
            function E(t) {
                return x(t, 3);
            }
            function _(t) {
                return x(t, 1);
            }
            function S(t) {
                return ["xml", "opf", "ncx"].indexOf(t) > -1;
            }
            function O(t, e) {
                return new Blob([t], { type: e });
            }
            function C(t, e) {
                var i = O(t, e);
                return r.createObjectURL(i);
            }
            function T(t) {
                return r.revokeObjectURL(t);
            }
            function k(t, e) {
                if ("string" == typeof t)
                    return "data:" + e + ";base64," + btoa(encodeURIComponent(t));
            }
            function N(t) {
                return Object.prototype.toString.call(t).slice(8, -1);
            }
            function R(t, e, i) {
                var s;
                return (
                    (s = "undefined" == typeof DOMParser || i ? n.DOMParser : DOMParser),
                    65279 === t.charCodeAt(0) && (t = t.slice(1)),
                    new s().parseFromString(t, e)
                );
            }
            function I(t, e) {
                var i;
                if (!t) throw new Error("No Element Provided");
                return void 0 !== t.querySelector
                    ? t.querySelector(e)
                    : (i = t.getElementsByTagName(e)).length
                        ? i[0]
                        : void 0;
            }
            function L(t, e) {
                return void 0 !== t.querySelector
                    ? t.querySelectorAll(e)
                    : t.getElementsByTagName(e);
            }
            function j(t, e, i) {
                var n, s;
                if (void 0 !== t.querySelector) {
                    for (var r in ((e += "["), i)) e += r + "~='" + i[r] + "'";
                    return (e += "]"), t.querySelector(e);
                }
                if (
                    ((n = t.getElementsByTagName(e)),
                        (s = Array.prototype.slice.call(n, 0).filter(function (t) {
                            for (var e in i) if (t.getAttribute(e) === i[e]) return !0;
                            return !1;
                        })))
                )
                    return s[0];
            }
            function A(t, e) {
                void 0 !== (t.ownerDocument || t).createTreeWalker
                    ? z(t, e, NodeFilter.SHOW_TEXT)
                    : P(t, function (t) {
                        t && 3 === t.nodeType && e(t);
                    });
            }
            function z(t, e, i) {
                var n = document.createTreeWalker(t, i, null, !1);
                let s;
                for (; (s = n.nextNode());) e(s);
            }
            function P(t, e) {
                if (e(t)) return !0;
                if ((t = t.firstChild))
                    do {
                        if (P(t, e)) return !0;
                        t = t.nextSibling;
                    } while (t);
            }
            function D(t) {
                return new Promise(function (e, i) {
                    var n = new FileReader();
                    n.readAsDataURL(t),
                        (n.onloadend = function () {
                            e(n.result);
                        });
                });
            }
            function B() {
                (this.resolve = null),
                    (this.reject = null),
                    (this.id = o()),
                    (this.promise = new Promise((t, e) => {
                        (this.resolve = t), (this.reject = e);
                    })),
                    Object.freeze(this);
            }
            function q(t, e, i) {
                var n;
                if (
                    (void 0 !== t.querySelector &&
                        (n = t.querySelector(`${e}[*|type="${i}"]`)),
                        n && 0 !== n.length)
                )
                    return n;
                n = L(t, e);
                for (var s = 0; s < n.length; s++)
                    if (
                        n[s].getAttributeNS("http://www.idpf.org/2007/ops", "type") === i ||
                        n[s].getAttribute("epub:type") === i
                    )
                        return n[s];
            }
            function M(t) {
                for (var e = [], i = t.childNodes, n = 0; n < i.length; n++) {
                    let t = i[n];
                    1 === t.nodeType && e.push(t);
                }
                return e;
            }
            function W(t) {
                for (var e = [t]; t; t = t.parentNode) e.unshift(t);
                return e;
            }
            function F(t, e, i) {
                for (var n = [], s = t.childNodes, r = 0; r < s.length; r++) {
                    let t = s[r];
                    if (1 === t.nodeType && t.nodeName.toLowerCase() === e) {
                        if (i) return t;
                        n.push(t);
                    }
                }
                if (!i) return n;
            }
            function U(t, e) {
                let i;
                if (null !== t && "" !== e)
                    for (i = t.parentNode; 1 === i.nodeType;) {
                        if (i.tagName.toLowerCase() === e) return i;
                        i = i.parentNode;
                    }
            }
            class H {
                constructor() {
                    (this.collapsed = !1),
                        (this.commonAncestorContainer = void 0),
                        (this.endContainer = void 0),
                        (this.endOffset = void 0),
                        (this.startContainer = void 0),
                        (this.startOffset = void 0);
                }
                setStart(t, e) {
                    (this.startContainer = t),
                        (this.startOffset = e),
                        this.endContainer
                            ? (this.commonAncestorContainer = this._commonAncestorContainer())
                            : this.collapse(!0),
                        this._checkCollapsed();
                }
                setEnd(t, e) {
                    (this.endContainer = t),
                        (this.endOffset = e),
                        this.startContainer
                            ? ((this.collapsed = !1),
                                (this.commonAncestorContainer =
                                    this._commonAncestorContainer()))
                            : this.collapse(!1),
                        this._checkCollapsed();
                }
                collapse(t) {
                    (this.collapsed = !0),
                        t
                            ? ((this.endContainer = this.startContainer),
                                (this.endOffset = this.startOffset),
                                (this.commonAncestorContainer = this.startContainer.parentNode))
                            : ((this.startContainer = this.endContainer),
                                (this.startOffset = this.endOffset),
                                (this.commonAncestorContainer = this.endOffset.parentNode));
                }
                selectNode(t) {
                    let e = t.parentNode,
                        i = Array.prototype.indexOf.call(e.childNodes, t);
                    this.setStart(e, i), this.setEnd(e, i + 1);
                }
                selectNodeContents(t) {
                    t.childNodes[t.childNodes - 1];
                    let e =
                        3 === t.nodeType ? t.textContent.length : parent.childNodes.length;
                    this.setStart(t, 0), this.setEnd(t, e);
                }
                _commonAncestorContainer(t, e) {
                    var i = W(t || this.startContainer),
                        n = W(e || this.endContainer);
                    if (i[0] == n[0])
                        for (var s = 0; s < i.length; s++)
                            if (i[s] != n[s]) return i[s - 1];
                }
                _checkCollapsed() {
                    this.startContainer === this.endContainer &&
                        this.startOffset === this.endOffset
                        ? (this.collapsed = !0)
                        : (this.collapsed = !1);
                }
                toString() { }
            }
        },
        function (t, e, i) {
            "use strict";
            i.d(e, "b", function () {
                return n;
            }),
                i.d(e, "a", function () {
                    return s;
                }),
                i.d(e, "c", function () {
                    return r;
                });
            const n = "0.3",
                s = [
                    "keydown",
                    "keyup",
                    "keypressed",
                    "mouseup",
                    "mousedown",
                    "mousemove",
                    "click",
                    "touchend",
                    "touchstart",
                    "touchmove",
                ],
                r = {
                    BOOK: { OPEN_FAILED: "openFailed" },
                    CONTENTS: {
                        EXPAND: "expand",
                        RESIZE: "resize",
                        SELECTED: "selected",
                        SELECTED_RANGE: "selectedRange",
                        LINK_CLICKED: "linkClicked",
                    },
                    LOCATIONS: { CHANGED: "changed" },
                    MANAGERS: {
                        RESIZE: "resize",
                        RESIZED: "resized",
                        ORIENTATION_CHANGE: "orientationchange",
                        ADDED: "added",
                        SCROLL: "scroll",
                        SCROLLED: "scrolled",
                        REMOVED: "removed",
                    },
                    VIEWS: {
                        AXIS: "axis",
                        WRITING_MODE: "writingMode",
                        LOAD_ERROR: "loaderror",
                        RENDERED: "rendered",
                        RESIZED: "resized",
                        DISPLAYED: "displayed",
                        SHOWN: "shown",
                        HIDDEN: "hidden",
                        MARK_CLICKED: "markClicked",
                    },
                    RENDITION: {
                        STARTED: "started",
                        ATTACHED: "attached",
                        DISPLAYED: "displayed",
                        DISPLAY_ERROR: "displayerror",
                        RENDERED: "rendered",
                        REMOVED: "removed",
                        RESIZED: "resized",
                        ORIENTATION_CHANGE: "orientationchange",
                        LOCATION_CHANGED: "locationChanged",
                        RELOCATED: "relocated",
                        MARK_CLICKED: "markClicked",
                        SELECTED: "selected",
                        LAYOUT: "layout",
                    },
                    LAYOUT: { UPDATED: "updated" },
                    ANNOTATION: { ATTACH: "attach", DETACH: "detach" },
                };
        },
        function (t, e, i) {
            "use strict";
            var n = i(0);
            class s {
                constructor(t, e, i) {
                    var r;
                    if (
                        ((this.str = ""),
                            (this.base = {}),
                            (this.spinePos = 0),
                            (this.range = !1),
                            (this.path = {}),
                            (this.start = null),
                            (this.end = null),
                            !(this instanceof s))
                    )
                        return new s(t, e, i);
                    if (
                        ("string" == typeof e
                            ? (this.base = this.parseComponent(e))
                            : "object" == typeof e && e.steps && (this.base = e),
                            "string" === (r = this.checkType(t)))
                    )
                        return (this.str = t), Object(n.extend)(this, this.parse(t));
                    if ("range" === r)
                        return Object(n.extend)(this, this.fromRange(t, this.base, i));
                    if ("node" === r)
                        return Object(n.extend)(this, this.fromNode(t, this.base, i));
                    if ("EpubCFI" === r && t.path) return t;
                    if (t) throw new TypeError("not a valid argument for EpubCFI");
                    return this;
                }
                checkType(t) {
                    return this.isCfiString(t)
                        ? "string"
                        : !t ||
                            "object" != typeof t ||
                            ("Range" !== Object(n.type)(t) && void 0 === t.startContainer)
                            ? t && "object" == typeof t && void 0 !== t.nodeType
                                ? "node"
                                : !!(t && "object" == typeof t && t instanceof s) && "EpubCFI"
                            : "range";
                }
                parse(t) {
                    var e,
                        i,
                        n,
                        s = {
                            spinePos: -1,
                            range: !1,
                            base: {},
                            path: {},
                            start: null,
                            end: null,
                        };
                    return "string" != typeof t
                        ? { spinePos: -1 }
                        : (0 === t.indexOf("epubcfi(") &&
                            ")" === t[t.length - 1] &&
                            (t = t.slice(8, t.length - 1)),
                            (e = this.getChapterComponent(t))
                                ? ((s.base = this.parseComponent(e)),
                                    (i = this.getPathComponent(t)),
                                    (s.path = this.parseComponent(i)),
                                    (n = this.getRange(t)) &&
                                    ((s.range = !0),
                                        (s.start = this.parseComponent(n[0])),
                                        (s.end = this.parseComponent(n[1]))),
                                    (s.spinePos = s.base.steps[1].index),
                                    s)
                                : { spinePos: -1 });
                }
                parseComponent(t) {
                    var e,
                        i = { steps: [], terminal: { offset: null, assertion: null } },
                        n = t.split(":"),
                        s = n[0].split("/");
                    return (
                        n.length > 1 && ((e = n[1]), (i.terminal = this.parseTerminal(e))),
                        "" === s[0] && s.shift(),
                        (i.steps = s.map(
                            function (t) {
                                return this.parseStep(t);
                            }.bind(this)
                        )),
                        i
                    );
                }
                parseStep(t) {
                    var e, i, n, s, r;
                    if (
                        ((s = t.match(/\[(.*)\]/)) && s[1] && (r = s[1]),
                            (i = parseInt(t)),
                            !isNaN(i))
                    )
                        return (
                            i % 2 == 0
                                ? ((e = "element"), (n = i / 2 - 1))
                                : ((e = "text"), (n = (i - 1) / 2)),
                            { type: e, index: n, id: r || null }
                        );
                }
                parseTerminal(t) {
                    var e,
                        i,
                        s = t.match(/\[(.*)\]/);
                    return (
                        s && s[1]
                            ? ((e = parseInt(t.split("[")[0])), (i = s[1]))
                            : (e = parseInt(t)),
                        Object(n.isNumber)(e) || (e = null),
                        { offset: e, assertion: i }
                    );
                }
                getChapterComponent(t) {
                    return t.split("!")[0];
                }
                getPathComponent(t) {
                    var e = t.split("!");
                    if (e[1]) {
                        return e[1].split(",")[0];
                    }
                }
                getRange(t) {
                    var e = t.split(",");
                    return 3 === e.length && [e[1], e[2]];
                }
                getCharecterOffsetComponent(t) {
                    return t.split(":")[1] || "";
                }
                joinSteps(t) {
                    return t
                        ? t
                            .map(function (t) {
                                var e = "";
                                return (
                                    "element" === t.type && (e += 2 * (t.index + 1)),
                                    "text" === t.type && (e += 1 + 2 * t.index),
                                    t.id && (e += "[" + t.id + "]"),
                                    e
                                );
                            })
                            .join("/")
                        : "";
                }
                segmentString(t) {
                    var e = "/";
                    return (
                        (e += this.joinSteps(t.steps)),
                        t.terminal &&
                        null != t.terminal.offset &&
                        (e += ":" + t.terminal.offset),
                        t.terminal &&
                        null != t.terminal.assertion &&
                        (e += "[" + t.terminal.assertion + "]"),
                        e
                    );
                }
                toString() {
                    var t = "epubcfi(";
                    return (
                        (t += this.segmentString(this.base)),
                        (t += "!"),
                        (t += this.segmentString(this.path)),
                        this.range &&
                        this.start &&
                        ((t += ","), (t += this.segmentString(this.start))),
                        this.range &&
                        this.end &&
                        ((t += ","), (t += this.segmentString(this.end))),
                        (t += ")")
                    );
                }
                compare(t, e) {
                    var i, n, r, o;
                    if (
                        ("string" == typeof t && (t = new s(t)),
                            "string" == typeof e && (e = new s(e)),
                            t.spinePos > e.spinePos)
                    )
                        return 1;
                    if (t.spinePos < e.spinePos) return -1;
                    t.range
                        ? ((i = t.path.steps.concat(t.start.steps)), (r = t.start.terminal))
                        : ((i = t.path.steps), (r = t.path.terminal)),
                        e.range
                            ? ((n = e.path.steps.concat(e.start.steps)),
                                (o = e.start.terminal))
                            : ((n = e.path.steps), (o = e.path.terminal));
                    for (var a = 0; a < i.length; a++) {
                        if (!i[a]) return -1;
                        if (!n[a]) return 1;
                        if (i[a].index > n[a].index) return 1;
                        if (i[a].index < n[a].index) return -1;
                    }
                    return i.length < n.length
                        ? -1
                        : r.offset > o.offset
                            ? 1
                            : r.offset < o.offset
                                ? -1
                                : 0;
                }
                step(t) {
                    var e = 3 === t.nodeType ? "text" : "element";
                    return {
                        id: t.id,
                        tagName: t.tagName,
                        type: e,
                        index: this.position(t),
                    };
                }
                filteredStep(t, e) {
                    var i,
                        n = this.filter(t, e);
                    if (n)
                        return (
                            (i = 3 === n.nodeType ? "text" : "element"),
                            {
                                id: n.id,
                                tagName: n.tagName,
                                type: i,
                                index: this.filteredPosition(n, e),
                            }
                        );
                }
                pathTo(t, e, i) {
                    for (
                        var n,
                        s = { steps: [], terminal: { offset: null, assertion: null } },
                        r = t;
                        r && r.parentNode && 9 != r.parentNode.nodeType;

                    )
                        (n = i ? this.filteredStep(r, i) : this.step(r)) &&
                            s.steps.unshift(n),
                            (r = r.parentNode);
                    return (
                        null != e &&
                        e >= 0 &&
                        ((s.terminal.offset = e),
                            "text" != s.steps[s.steps.length - 1].type &&
                            s.steps.push({ type: "text", index: 0 })),
                        s
                    );
                }
                equalStep(t, e) {
                    return (
                        !(!t || !e) &&
                        t.index === e.index &&
                        t.id === e.id &&
                        t.type === e.type
                    );
                }
                fromRange(t, e, i) {
                    var n = { range: !1, base: {}, path: {}, start: null, end: null },
                        s = t.startContainer,
                        r = t.endContainer,
                        o = t.startOffset,
                        a = t.endOffset,
                        h = !1;
                    if (
                        (i && (h = null != s.ownerDocument.querySelector("." + i)),
                            "string" == typeof e
                                ? ((n.base = this.parseComponent(e)),
                                    (n.spinePos = n.base.steps[1].index))
                                : "object" == typeof e && (n.base = e),
                            t.collapsed)
                    )
                        h && (o = this.patchOffset(s, o, i)),
                            (n.path = this.pathTo(s, o, i));
                    else {
                        (n.range = !0),
                            h && (o = this.patchOffset(s, o, i)),
                            (n.start = this.pathTo(s, o, i)),
                            h && (a = this.patchOffset(r, a, i)),
                            (n.end = this.pathTo(r, a, i)),
                            (n.path = { steps: [], terminal: null });
                        var l,
                            c = n.start.steps.length;
                        for (
                            l = 0;
                            l < c && this.equalStep(n.start.steps[l], n.end.steps[l]);
                            l++
                        )
                            l === c - 1
                                ? n.start.terminal === n.end.terminal &&
                                (n.path.steps.push(n.start.steps[l]), (n.range = !1))
                                : n.path.steps.push(n.start.steps[l]);
                        (n.start.steps = n.start.steps.slice(n.path.steps.length)),
                            (n.end.steps = n.end.steps.slice(n.path.steps.length));
                    }
                    return n;
                }
                fromNode(t, e, i) {
                    var n = { range: !1, base: {}, path: {}, start: null, end: null };
                    return (
                        "string" == typeof e
                            ? ((n.base = this.parseComponent(e)),
                                (n.spinePos = n.base.steps[1].index))
                            : "object" == typeof e && (n.base = e),
                        (n.path = this.pathTo(t, null, i)),
                        n
                    );
                }
                filter(t, e) {
                    var i,
                        n,
                        s,
                        r,
                        o,
                        a = !1;
                    return (
                        3 === t.nodeType
                            ? ((a = !0),
                                (s = t.parentNode),
                                (i = t.parentNode.classList.contains(e)))
                            : ((a = !1), (i = t.classList.contains(e))),
                        i && a
                            ? ((r = s.previousSibling),
                                (o = s.nextSibling),
                                r && 3 === r.nodeType
                                    ? (n = r)
                                    : o && 3 === o.nodeType && (n = o),
                                n || t)
                            : !(i && !a) && t
                    );
                }
                patchOffset(t, e, i) {
                    if (3 != t.nodeType) throw new Error("Anchor must be a text node");
                    var n = t,
                        s = e;
                    for (
                        t.parentNode.classList.contains(i) && (n = t.parentNode);
                        n.previousSibling;

                    ) {
                        if (1 === n.previousSibling.nodeType) {
                            if (!n.previousSibling.classList.contains(i)) break;
                            s += n.previousSibling.textContent.length;
                        } else s += n.previousSibling.textContent.length;
                        n = n.previousSibling;
                    }
                    return s;
                }
                normalizedMap(t, e, i) {
                    var n,
                        s,
                        r,
                        o = {},
                        a = -1,
                        h = t.length;
                    for (n = 0; n < h; n++)
                        1 === (s = t[n].nodeType) && t[n].classList.contains(i) && (s = 3),
                            n > 0 && 3 === s && 3 === r
                                ? (o[n] = a)
                                : e === s && ((a += 1), (o[n] = a)),
                            (r = s);
                    return o;
                }
                position(t) {
                    var e, i;
                    return (
                        1 === t.nodeType
                            ? ((e = t.parentNode.children) ||
                                (e = Object(n.findChildren)(t.parentNode)),
                                (i = Array.prototype.indexOf.call(e, t)))
                            : (i = (e = this.textNodes(t.parentNode)).indexOf(t)),
                        i
                    );
                }
                filteredPosition(t, e) {
                    var i, n;
                    return (
                        1 === t.nodeType
                            ? ((i = t.parentNode.children), (n = this.normalizedMap(i, 1, e)))
                            : ((i = t.parentNode.childNodes),
                                t.parentNode.classList.contains(e) &&
                                (i = (t = t.parentNode).parentNode.childNodes),
                                (n = this.normalizedMap(i, 3, e))),
                        n[Array.prototype.indexOf.call(i, t)]
                    );
                }
                stepsToXpath(t) {
                    var e = [".", "*"];
                    return (
                        t.forEach(function (t) {
                            var i = t.index + 1;
                            t.id
                                ? e.push("*[position()=" + i + " and @id='" + t.id + "']")
                                : "text" === t.type
                                    ? e.push("text()[" + i + "]")
                                    : e.push("*[" + i + "]");
                        }),
                        e.join("/")
                    );
                }
                stepsToQuerySelector(t) {
                    var e = ["html"];
                    return (
                        t.forEach(function (t) {
                            var i = t.index + 1;
                            t.id
                                ? e.push("#" + t.id)
                                : "text" === t.type || e.push("*:nth-child(" + i + ")");
                        }),
                        e.join(">")
                    );
                }
                textNodes(t, e) {
                    return Array.prototype.slice.call(t.childNodes).filter(function (t) {
                        return 3 === t.nodeType || !(!e || !t.classList.contains(e));
                    });
                }
                walkToNode(t, e, i) {
                    var s,
                        r,
                        o = e || document,
                        a = o.documentElement,
                        h = t.length;
                    for (
                        r = 0;
                        r < h &&
                        ("element" === (s = t[r]).type
                            ? (a = s.id
                                ? o.getElementById(s.id)
                                : (a.children || Object(n.findChildren)(a))[s.index])
                            : "text" === s.type && (a = this.textNodes(a, i)[s.index]),
                            a);
                        r++
                    );
                    return a;
                }
                findNode(t, e, i) {
                    var n,
                        s,
                        r = e || document;
                    return (
                        i || void 0 === r.evaluate
                            ? (n = i ? this.walkToNode(t, r, i) : this.walkToNode(t, r))
                            : ((s = this.stepsToXpath(t)),
                                (n = r.evaluate(
                                    s,
                                    r,
                                    null,
                                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                                    null
                                ).singleNodeValue)),
                        n
                    );
                }
                fixMiss(t, e, i, n) {
                    var s,
                        r,
                        o = this.findNode(t.slice(0, -1), i, n),
                        a = o.childNodes,
                        h = this.normalizedMap(a, 3, n),
                        l = t[t.length - 1].index;
                    for (let t in h) {
                        if (!h.hasOwnProperty(t)) return;
                        if (h[t] === l) {
                            if (!(e > (r = (s = a[t]).textContent.length))) {
                                o = 1 === s.nodeType ? s.childNodes[0] : s;
                                break;
                            }
                            e -= r;
                        }
                    }
                    return { container: o, offset: e };
                }
                toRange(t, e) {
                    var i,
                        s,
                        r,
                        o,
                        a,
                        h,
                        l,
                        c,
                        d = t || document,
                        u = !!e && null != d.querySelector("." + e);
                    if (
                        ((i =
                            void 0 !== d.createRange ? d.createRange() : new n.RangeObject()),
                            this.range
                                ? ((s = this.start),
                                    (h = this.path.steps.concat(s.steps)),
                                    (o = this.findNode(h, d, u ? e : null)),
                                    (r = this.end),
                                    (l = this.path.steps.concat(r.steps)),
                                    (a = this.findNode(l, d, u ? e : null)))
                                : ((s = this.path),
                                    (h = this.path.steps),
                                    (o = this.findNode(this.path.steps, d, u ? e : null))),
                            !o)
                    )
                        return (
                            console.log("No startContainer found for", this.toString()), null
                        );
                    try {
                        null != s.terminal.offset
                            ? i.setStart(o, s.terminal.offset)
                            : i.setStart(o, 0);
                    } catch (t) {
                        (c = this.fixMiss(h, s.terminal.offset, d, u ? e : null)),
                            i.setStart(c.container, c.offset);
                    }
                    if (a)
                        try {
                            null != r.terminal.offset
                                ? i.setEnd(a, r.terminal.offset)
                                : i.setEnd(a, 0);
                        } catch (t) {
                            (c = this.fixMiss(l, this.end.terminal.offset, d, u ? e : null)),
                                i.setEnd(c.container, c.offset);
                        }
                    return i;
                }
                isCfiString(t) {
                    return (
                        "string" == typeof t &&
                        0 === t.indexOf("epubcfi(") &&
                        ")" === t[t.length - 1]
                    );
                }
                generateChapterComponent(t, e, i) {
                    var n = "/" + 2 * (t + 1) + "/";
                    return (n += 2 * (parseInt(e) + 1)), i && (n += "[" + i + "]"), n;
                }
                collapse(t) {
                    this.range &&
                        ((this.range = !1),
                            t
                                ? ((this.path.steps = this.path.steps.concat(this.start.steps)),
                                    (this.path.terminal = this.start.terminal))
                                : ((this.path.steps = this.path.steps.concat(this.end.steps)),
                                    (this.path.terminal = this.end.terminal)));
                }
            }
            e.a = s;
        },
        function (t, e, i) {
            "use strict";
            var n,
                s,
                r,
                o,
                a,
                h,
                l,
                c = i(30),
                d = i(47),
                u = Function.prototype.apply,
                f = Function.prototype.call,
                p = Object.create,
                g = Object.defineProperty,
                m = Object.defineProperties,
                v = Object.prototype.hasOwnProperty,
                y = { configurable: !0, enumerable: !1, writable: !0 };
            (s = function (t, e) {
                var i, s;
                return (
                    d(e),
                    (s = this),
                    n.call(
                        this,
                        t,
                        (i = function () {
                            r.call(s, t, i), u.call(e, this, arguments);
                        })
                    ),
                    (i.__eeOnceListener__ = e),
                    this
                );
            }),
                (a = {
                    on: (n = function (t, e) {
                        var i;
                        return (
                            d(e),
                            v.call(this, "__ee__")
                                ? (i = this.__ee__)
                                : ((i = y.value = p(null)),
                                    g(this, "__ee__", y),
                                    (y.value = null)),
                            i[t]
                                ? "object" == typeof i[t]
                                    ? i[t].push(e)
                                    : (i[t] = [i[t], e])
                                : (i[t] = e),
                            this
                        );
                    }),
                    once: s,
                    off: (r = function (t, e) {
                        var i, n, s, r;
                        if ((d(e), !v.call(this, "__ee__"))) return this;
                        if (!(i = this.__ee__)[t]) return this;
                        if ("object" == typeof (n = i[t]))
                            for (r = 0; (s = n[r]); ++r)
                                (s !== e && s.__eeOnceListener__ !== e) ||
                                    (2 === n.length ? (i[t] = n[r ? 0 : 1]) : n.splice(r, 1));
                        else (n !== e && n.__eeOnceListener__ !== e) || delete i[t];
                        return this;
                    }),
                    emit: (o = function (t) {
                        var e, i, n, s, r;
                        if (v.call(this, "__ee__") && (s = this.__ee__[t]))
                            if ("object" == typeof s) {
                                for (
                                    i = arguments.length, r = new Array(i - 1), e = 1;
                                    e < i;
                                    ++e
                                )
                                    r[e - 1] = arguments[e];
                                for (s = s.slice(), e = 0; (n = s[e]); ++e) u.call(n, this, r);
                            } else
                                switch (arguments.length) {
                                    case 1:
                                        f.call(s, this);
                                        break;
                                    case 2:
                                        f.call(s, this, arguments[1]);
                                        break;
                                    case 3:
                                        f.call(s, this, arguments[1], arguments[2]);
                                        break;
                                    default:
                                        for (
                                            i = arguments.length, r = new Array(i - 1), e = 1;
                                            e < i;
                                            ++e
                                        )
                                            r[e - 1] = arguments[e];
                                        u.call(s, this, r);
                                }
                    }),
                }),
                (h = { on: c(n), once: c(s), off: c(r), emit: c(o) }),
                (l = m({}, h)),
                (t.exports = e =
                    function (t) {
                        return null == t ? p(l) : m(Object(t), h);
                    }),
                (e.methods = a);
        },
        function (t, e, i) {
            "use strict";
            var n = i(7),
                s = i.n(n);
            e.a = class {
                constructor(t) {
                    var e;
                    t.indexOf("://") > -1 && (t = new URL(t).pathname),
                        (e = this.parse(t)),
                        (this.path = t),
                        this.isDirectory(t)
                            ? (this.directory = t)
                            : (this.directory = e.dir + "/"),
                        (this.filename = e.base),
                        (this.extension = e.ext.slice(1));
                }
                parse(t) {
                    return s.a.parse(t);
                }
                isAbsolute(t) {
                    return s.a.isAbsolute(t || this.path);
                }
                isDirectory(t) {
                    return "/" === t.charAt(t.length - 1);
                }
                resolve(t) {
                    return s.a.resolve(this.directory, t);
                }
                relative(t) {
                    return t && t.indexOf("://") > -1
                        ? t
                        : s.a.relative(this.directory, t);
                }
                splitPath(t) {
                    return this.splitPathRe.exec(t).slice(1);
                }
                toString() {
                    return this.path;
                }
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(4),
                s = i(7),
                r = i.n(s);
            e.a = class {
                constructor(t, e) {
                    var i = t.indexOf("://") > -1,
                        s = t;
                    if (
                        ((this.Url = void 0),
                            (this.href = t),
                            (this.protocol = ""),
                            (this.origin = ""),
                            (this.hash = ""),
                            (this.hash = ""),
                            (this.search = ""),
                            (this.base = e),
                            !i &&
                            !1 !== e &&
                            "string" != typeof e &&
                            window &&
                            window.location &&
                            (this.base = window.location.href),
                            i || this.base)
                    )
                        try {
                            this.base
                                ? (this.Url = new URL(t, this.base))
                                : (this.Url = new URL(t)),
                                (this.href = this.Url.href),
                                (this.protocol = this.Url.protocol),
                                (this.origin = this.Url.origin),
                                (this.hash = this.Url.hash),
                                (this.search = this.Url.search),
                                (s =
                                    this.Url.pathname + (this.Url.search ? this.Url.search : ""));
                        } catch (t) {
                            (this.Url = void 0),
                                this.base && (s = new n.a(this.base).resolve(s));
                        }
                    (this.Path = new n.a(s)),
                        (this.directory = this.Path.directory),
                        (this.filename = this.Path.filename),
                        (this.extension = this.Path.extension);
                }
                path() {
                    return this.Path;
                }
                resolve(t) {
                    var e;
                    return t.indexOf("://") > -1
                        ? t
                        : ((e = r.a.resolve(this.directory, t)), this.origin + e);
                }
                relative(t) {
                    return r.a.relative(t, this.directory);
                }
                toString() {
                    return this.href;
                }
            };
        },
        function (t, e, i) {
            "use strict";
            e.a = class {
                constructor(t) {
                    (this.context = t || this), (this.hooks = []);
                }
                register() {
                    for (var t = 0; t < arguments.length; ++t)
                        if ("function" == typeof arguments[t])
                            this.hooks.push(arguments[t]);
                        else
                            for (var e = 0; e < arguments[t].length; ++e)
                                this.hooks.push(arguments[t][e]);
                }
                deregister(t) {
                    let e;
                    for (let i = 0; i < this.hooks.length; i++)
                        if (((e = this.hooks[i]), e === t)) {
                            this.hooks.splice(i, 1);
                            break;
                        }
                }
                trigger() {
                    var t = arguments,
                        e = this.context,
                        i = [];
                    return (
                        this.hooks.forEach(function (n) {
                            try {
                                var s = n.apply(e, t);
                            } catch (t) {
                                console.log(t);
                            }
                            s && "function" == typeof s.then && i.push(s);
                        }),
                        Promise.all(i)
                    );
                }
                list() {
                    return this.hooks;
                }
                clear() {
                    return (this.hooks = []);
                }
            };
        },
        function (t, e, i) {
            "use strict";
            if (!n)
                var n = {
                    cwd: function () {
                        return "/";
                    },
                };
            function s(t) {
                if ("string" != typeof t)
                    throw new TypeError("Path must be a string. Received " + t);
            }
            function r(t, e) {
                for (var i, n = "", s = -1, r = 0, o = 0; o <= t.length; ++o) {
                    if (o < t.length) i = t.charCodeAt(o);
                    else {
                        if (47 === i) break;
                        i = 47;
                    }
                    if (47 === i) {
                        if (s === o - 1 || 1 === r);
                        else if (s !== o - 1 && 2 === r) {
                            if (
                                n.length < 2 ||
                                46 !== n.charCodeAt(n.length - 1) ||
                                46 !== n.charCodeAt(n.length - 2)
                            )
                                if (n.length > 2) {
                                    for (
                                        var a = n.length - 1, h = a;
                                        h >= 0 && 47 !== n.charCodeAt(h);
                                        --h
                                    );
                                    if (h !== a) {
                                        (n = -1 === h ? "" : n.slice(0, h)), (s = o), (r = 0);
                                        continue;
                                    }
                                } else if (2 === n.length || 1 === n.length) {
                                    (n = ""), (s = o), (r = 0);
                                    continue;
                                }
                            e && (n.length > 0 ? (n += "/..") : (n = ".."));
                        } else
                            n.length > 0
                                ? (n += "/" + t.slice(s + 1, o))
                                : (n = t.slice(s + 1, o));
                        (s = o), (r = 0);
                    } else 46 === i && -1 !== r ? ++r : (r = -1);
                }
                return n;
            }
            var o = {
                resolve: function () {
                    for (
                        var t, e = "", i = !1, o = arguments.length - 1;
                        o >= -1 && !i;
                        o--
                    ) {
                        var a;
                        o >= 0
                            ? (a = arguments[o])
                            : (void 0 === t && (t = n.cwd()), (a = t)),
                            s(a),
                            0 !== a.length &&
                            ((e = a + "/" + e), (i = 47 === a.charCodeAt(0)));
                    }
                    return (
                        (e = r(e, !i)),
                        i ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
                    );
                },
                normalize: function (t) {
                    if ((s(t), 0 === t.length)) return ".";
                    var e = 47 === t.charCodeAt(0),
                        i = 47 === t.charCodeAt(t.length - 1);
                    return (
                        0 !== (t = r(t, !e)).length || e || (t = "."),
                        t.length > 0 && i && (t += "/"),
                        e ? "/" + t : t
                    );
                },
                isAbsolute: function (t) {
                    return s(t), t.length > 0 && 47 === t.charCodeAt(0);
                },
                join: function () {
                    if (0 === arguments.length) return ".";
                    for (var t, e = 0; e < arguments.length; ++e) {
                        var i = arguments[e];
                        s(i), i.length > 0 && (void 0 === t ? (t = i) : (t += "/" + i));
                    }
                    return void 0 === t ? "." : o.normalize(t);
                },
                relative: function (t, e) {
                    if ((s(t), s(e), t === e)) return "";
                    if ((t = o.resolve(t)) === (e = o.resolve(e))) return "";
                    for (var i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
                    for (
                        var n = t.length, r = n - i, a = 1;
                        a < e.length && 47 === e.charCodeAt(a);
                        ++a
                    );
                    for (
                        var h = e.length - a, l = r < h ? r : h, c = -1, d = 0;
                        d <= l;
                        ++d
                    ) {
                        if (d === l) {
                            if (h > l) {
                                if (47 === e.charCodeAt(a + d)) return e.slice(a + d + 1);
                                if (0 === d) return e.slice(a + d);
                            } else
                                r > l &&
                                    (47 === t.charCodeAt(i + d) ? (c = d) : 0 === d && (c = 0));
                            break;
                        }
                        var u = t.charCodeAt(i + d);
                        if (u !== e.charCodeAt(a + d)) break;
                        47 === u && (c = d);
                    }
                    var f = "";
                    for (d = i + c + 1; d <= n; ++d)
                        (d !== n && 47 !== t.charCodeAt(d)) ||
                            (0 === f.length ? (f += "..") : (f += "/.."));
                    return f.length > 0
                        ? f + e.slice(a + c)
                        : ((a += c), 47 === e.charCodeAt(a) && ++a, e.slice(a));
                },
                _makeLong: function (t) {
                    return t;
                },
                dirname: function (t) {
                    if ((s(t), 0 === t.length)) return ".";
                    for (
                        var e = t.charCodeAt(0),
                        i = 47 === e,
                        n = -1,
                        r = !0,
                        o = t.length - 1;
                        o >= 1;
                        --o
                    )
                        if (47 === (e = t.charCodeAt(o))) {
                            if (!r) {
                                n = o;
                                break;
                            }
                        } else r = !1;
                    return -1 === n
                        ? i
                            ? "/"
                            : "."
                        : i && 1 === n
                            ? "//"
                            : t.slice(0, n);
                },
                basename: function (t, e) {
                    if (void 0 !== e && "string" != typeof e)
                        throw new TypeError('"ext" argument must be a string');
                    s(t);
                    var i,
                        n = 0,
                        r = -1,
                        o = !0;
                    if (void 0 !== e && e.length > 0 && e.length <= t.length) {
                        if (e.length === t.length && e === t) return "";
                        var a = e.length - 1,
                            h = -1;
                        for (i = t.length - 1; i >= 0; --i) {
                            var l = t.charCodeAt(i);
                            if (47 === l) {
                                if (!o) {
                                    n = i + 1;
                                    break;
                                }
                            } else
                                -1 === h && ((o = !1), (h = i + 1)),
                                    a >= 0 &&
                                    (l === e.charCodeAt(a)
                                        ? -1 == --a && (r = i)
                                        : ((a = -1), (r = h)));
                        }
                        return (
                            n === r ? (r = h) : -1 === r && (r = t.length), t.slice(n, r)
                        );
                    }
                    for (i = t.length - 1; i >= 0; --i)
                        if (47 === t.charCodeAt(i)) {
                            if (!o) {
                                n = i + 1;
                                break;
                            }
                        } else -1 === r && ((o = !1), (r = i + 1));
                    return -1 === r ? "" : t.slice(n, r);
                },
                extname: function (t) {
                    s(t);
                    for (
                        var e = -1, i = 0, n = -1, r = !0, o = 0, a = t.length - 1;
                        a >= 0;
                        --a
                    ) {
                        var h = t.charCodeAt(a);
                        if (47 !== h)
                            -1 === n && ((r = !1), (n = a + 1)),
                                46 === h
                                    ? -1 === e
                                        ? (e = a)
                                        : 1 !== o && (o = 1)
                                    : -1 !== e && (o = -1);
                        else if (!r) {
                            i = a + 1;
                            break;
                        }
                    }
                    return -1 === e ||
                        -1 === n ||
                        0 === o ||
                        (1 === o && e === n - 1 && e === i + 1)
                        ? ""
                        : t.slice(e, n);
                },
                format: function (t) {
                    if (null === t || "object" != typeof t)
                        throw new TypeError(
                            'Parameter "pathObject" must be an object, not ' + typeof t
                        );
                    return (function (t, e) {
                        var i = e.dir || e.root,
                            n = e.base || (e.name || "") + (e.ext || "");
                        return i ? (i === e.root ? i + n : i + t + n) : n;
                    })("/", t);
                },
                parse: function (t) {
                    s(t);
                    var e = { root: "", dir: "", base: "", ext: "", name: "" };
                    if (0 === t.length) return e;
                    var i,
                        n = t.charCodeAt(0),
                        r = 47 === n;
                    r ? ((e.root = "/"), (i = 1)) : (i = 0);
                    for (
                        var o = -1, a = 0, h = -1, l = !0, c = t.length - 1, d = 0;
                        c >= i;
                        --c
                    )
                        if (47 !== (n = t.charCodeAt(c)))
                            -1 === h && ((l = !1), (h = c + 1)),
                                46 === n
                                    ? -1 === o
                                        ? (o = c)
                                        : 1 !== d && (d = 1)
                                    : -1 !== o && (d = -1);
                        else if (!l) {
                            a = c + 1;
                            break;
                        }
                    return (
                        -1 === o ||
                            -1 === h ||
                            0 === d ||
                            (1 === d && o === h - 1 && o === a + 1)
                            ? -1 !== h &&
                            (e.base = e.name = 0 === a && r ? t.slice(1, h) : t.slice(a, h))
                            : (0 === a && r
                                ? ((e.name = t.slice(1, o)), (e.base = t.slice(1, h)))
                                : ((e.name = t.slice(a, o)), (e.base = t.slice(a, h))),
                                (e.ext = t.slice(o, h))),
                        a > 0 ? (e.dir = t.slice(0, a - 1)) : r && (e.dir = "/"),
                        e
                    );
                },
                sep: "/",
                delimiter: ":",
                posix: null,
            };
            t.exports = o;
        },
        function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return r;
            }),
                i.d(e, "b", function () {
                    return o;
                }),
                i.d(e, "d", function () {
                    return a;
                }),
                i.d(e, "c", function () {
                    return h;
                }),
                i.d(e, "e", function () {
                    return l;
                });
            var n = i(0),
                s = i(5);
            i(4);
            function r(t, e) {
                var i,
                    s,
                    r = e.url,
                    o = r.indexOf("://") > -1;
                t &&
                    ((s = Object(n.qs)(t, "head")),
                        (i = Object(n.qs)(s, "base")) ||
                        ((i = t.createElement("base")), s.insertBefore(i, s.firstChild)),
                        !o && window && window.location && (r = window.location.origin + r),
                        i.setAttribute("href", r));
            }
            function o(t, e) {
                var i,
                    s,
                    r = e.canonical;
                t &&
                    ((i = Object(n.qs)(t, "head")),
                        (s = Object(n.qs)(i, "link[rel='canonical']"))
                            ? s.setAttribute("href", r)
                            : ((s = t.createElement("link")).setAttribute("rel", "canonical"),
                                s.setAttribute("href", r),
                                i.appendChild(s)));
            }
            function a(t, e) {
                var i,
                    s,
                    r = e.idref;
                t &&
                    ((i = Object(n.qs)(t, "head")),
                        (s = Object(n.qs)(i, "link[property='dc.identifier']"))
                            ? s.setAttribute("content", r)
                            : ((s = t.createElement("meta")).setAttribute(
                                "name",
                                "dc.identifier"
                            ),
                                s.setAttribute("content", r),
                                i.appendChild(s)));
            }
            function h(t, e) {
                var i = t.querySelectorAll("a[href]");
                if (i.length)
                    for (
                        var r = Object(n.qs)(t.ownerDocument, "base"),
                        o = r ? r.getAttribute("href") : void 0,
                        a = function (t) {
                            var i = t.getAttribute("href");
                            if (0 !== i.indexOf("mailto:"))
                                if (i.indexOf("://") > -1) t.setAttribute("target", "_blank");
                                else {
                                    var n;
                                    try {
                                        n = new s.a(i, o);
                                    } catch (t) { }
                                    t.onclick = function () {
                                        return (
                                            n && n.hash
                                                ? e(n.Path.path + n.hash)
                                                : e(n ? n.Path.path : i),
                                            !1
                                        );
                                    };
                                }
                        }.bind(this),
                        h = 0;
                        h < i.length;
                        h++
                    )
                        a(i[h]);
            }
            function l(t, e, i) {
                return (
                    e.forEach(function (e, n) {
                        e &&
                            i[n] &&
                            ((e = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
                                (t = t.replace(new RegExp(e, "g"), i[n])));
                    }),
                    t
                );
            }
        },
        function (t, e, i) {
            "use strict";
            var n = i(0);
            e.a = class {
                constructor(t) {
                    (this._q = []),
                        (this.context = t),
                        (this.tick = n.requestAnimationFrame),
                        (this.running = !1),
                        (this.paused = !1);
                }
                enqueue() {
                    var t,
                        e,
                        i = [].shift.call(arguments),
                        s = arguments;
                    if (!i) throw new Error("No Task Provided");
                    return (
                        (e =
                            "function" == typeof i
                                ? {
                                    task: i,
                                    args: s,
                                    deferred: (t = new n.defer()),
                                    promise: t.promise,
                                }
                                : { promise: i }),
                        this._q.push(e),
                        0 != this.paused || this.running || this.run(),
                        e.promise
                    );
                }
                dequeue() {
                    var t, e, i;
                    return !this._q.length || this.paused
                        ? ((t = new n.defer()).deferred.resolve(), t.promise)
                        : (e = (t = this._q.shift()).task)
                            ? (i = e.apply(this.context, t.args)) && "function" == typeof i.then
                                ? i.then(
                                    function () {
                                        t.deferred.resolve.apply(this.context, arguments);
                                    }.bind(this),
                                    function () {
                                        t.deferred.reject.apply(this.context, arguments);
                                    }.bind(this)
                                )
                                : (t.deferred.resolve.apply(this.context, i), t.promise)
                            : t.promise
                                ? t.promise
                                : void 0;
                }
                dump() {
                    for (; this._q.length;) this.dequeue();
                }
                run() {
                    return (
                        this.running ||
                        ((this.running = !0), (this.defered = new n.defer())),
                        this.tick.call(window, () => {
                            this._q.length
                                ? this.dequeue().then(
                                    function () {
                                        this.run();
                                    }.bind(this)
                                )
                                : (this.defered.resolve(), (this.running = void 0));
                        }),
                        1 == this.paused && (this.paused = !1),
                        this.defered.promise
                    );
                }
                flush() {
                    return this.running
                        ? this.running
                        : this._q.length
                            ? ((this.running = this.dequeue().then(
                                function () {
                                    return (this.running = void 0), this.flush();
                                }.bind(this)
                            )),
                                this.running)
                            : void 0;
                }
                clear() {
                    this._q = [];
                }
                length() {
                    return this._q.length;
                }
                pause() {
                    this.paused = !0;
                }
                stop() {
                    (this._q = []), (this.running = !1), (this.paused = !0);
                }
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(3),
                s = i.n(n),
                r = i(0);
            function o() {
                var t = "reverse",
                    e = (function () {
                        var t = document.createElement("div");
                        (t.dir = "rtl"),
                            (t.style.position = "fixed"),
                            (t.style.width = "1px"),
                            (t.style.height = "1px"),
                            (t.style.top = "0px"),
                            (t.style.left = "0px"),
                            (t.style.overflow = "hidden");
                        var e = document.createElement("div");
                        e.style.width = "2px";
                        var i = document.createElement("span");
                        (i.style.width = "1px"), (i.style.display = "inline-block");
                        var n = document.createElement("span");
                        return (
                            (n.style.width = "1px"),
                            (n.style.display = "inline-block"),
                            e.appendChild(i),
                            e.appendChild(n),
                            t.appendChild(e),
                            t
                        );
                    })();
                return (
                    document.body.appendChild(e),
                    e.scrollLeft > 0
                        ? (t = "default")
                        : "undefined" != typeof Element && Element.prototype.scrollIntoView
                            ? (e.children[0].children[1].scrollIntoView(),
                                e.scrollLeft < 0 && (t = "negative"))
                            : ((e.scrollLeft = 1), 0 === e.scrollLeft && (t = "negative")),
                    document.body.removeChild(e),
                    t
                );
            }
            var a = i(11),
                h = i(9),
                l = i(27),
                c = i.n(l);
            var d = class {
                constructor(t) {
                    (this.settings = t || {}),
                        (this.id = "epubjs-container-" + Object(r.uuid)()),
                        (this.container = this.create(this.settings)),
                        this.settings.hidden && (this.wrapper = this.wrap(this.container));
                }
                create(t) {
                    let e = t.height,
                        i = t.width,
                        n = t.overflow || !1,
                        s = t.axis || "vertical",
                        o = t.direction;
                    Object(r.extend)(this.settings, t),
                        t.height && Object(r.isNumber)(t.height) && (e = t.height + "px"),
                        t.width && Object(r.isNumber)(t.width) && (i = t.width + "px");
                    let a = document.createElement("div");
                    return (
                        (a.id = this.id),
                        a.classList.add("epub-container"),
                        (a.style.wordSpacing = "0"),
                        (a.style.lineHeight = "0"),
                        (a.style.verticalAlign = "top"),
                        (a.style.position = "relative"),
                        "horizontal" === s &&
                        ((a.style.display = "flex"),
                            (a.style.flexDirection = "row"),
                            (a.style.flexWrap = "nowrap")),
                        i && (a.style.width = i),
                        e && (a.style.height = e),
                        n &&
                        ("scroll" === n && "vertical" === s
                            ? ((a.style["overflow-y"] = n),
                                (a.style["overflow-x"] = "hidden"))
                            : "scroll" === n && "horizontal" === s
                                ? ((a.style["overflow-y"] = "hidden"),
                                    (a.style["overflow-x"] = n))
                                : (a.style.overflow = n)),
                        o && ((a.dir = o), (a.style.direction = o)),
                        o && this.settings.fullsize && (document.body.style.direction = o),
                        a
                    );
                }
                wrap(t) {
                    var e = document.createElement("div");
                    return (
                        (e.style.visibility = "hidden"),
                        (e.style.overflow = "hidden"),
                        (e.style.width = "0"),
                        (e.style.height = "0"),
                        e.appendChild(t),
                        e
                    );
                }
                getElement(t) {
                    var e;
                    if (
                        (Object(r.isElement)(t)
                            ? (e = t)
                            : "string" == typeof t && (e = document.getElementById(t)),
                            !e)
                    )
                        throw new Error("Not an Element");
                    return e;
                }
                attachTo(t) {
                    var e,
                        i = this.getElement(t);
                    if (i)
                        return (
                            (e = this.settings.hidden ? this.wrapper : this.container),
                            i.appendChild(e),
                            (this.element = i),
                            i
                        );
                }
                getContainer() {
                    return this.container;
                }
                onResize(t) {
                    (Object(r.isNumber)(this.settings.width) &&
                        Object(r.isNumber)(this.settings.height)) ||
                        ((this.resizeFunc = c()(t, 50)),
                            window.addEventListener("resize", this.resizeFunc, !1));
                }
                onOrientationChange(t) {
                    (this.orientationChangeFunc = t),
                        window.addEventListener(
                            "orientationchange",
                            this.orientationChangeFunc,
                            !1
                        );
                }
                size(t, e) {
                    var i;
                    let n = t || this.settings.width,
                        s = e || this.settings.height;
                    null === t
                        ? (i = this.element.getBoundingClientRect()).width &&
                        ((t = Math.floor(i.width)),
                            (this.container.style.width = t + "px"))
                        : Object(r.isNumber)(t)
                            ? (this.container.style.width = t + "px")
                            : (this.container.style.width = t),
                        null === e
                            ? (i = i || this.element.getBoundingClientRect()).height &&
                            ((e = i.height), (this.container.style.height = e + "px"))
                            : Object(r.isNumber)(e)
                                ? (this.container.style.height = e + "px")
                                : (this.container.style.height = e),
                        Object(r.isNumber)(t) || (t = this.container.clientWidth),
                        Object(r.isNumber)(e) || (e = this.container.clientHeight),
                        (this.containerStyles = window.getComputedStyle(this.container)),
                        (this.containerPadding = {
                            left: parseFloat(this.containerStyles["padding-left"]) || 0,
                            right: parseFloat(this.containerStyles["padding-right"]) || 0,
                            top: parseFloat(this.containerStyles["padding-top"]) || 0,
                            bottom: parseFloat(this.containerStyles["padding-bottom"]) || 0,
                        });
                    let o = Object(r.windowBounds)(),
                        a = window.getComputedStyle(document.body),
                        h = parseFloat(a["padding-left"]) || 0,
                        l = parseFloat(a["padding-right"]) || 0,
                        c = parseFloat(a["padding-top"]) || 0,
                        d = parseFloat(a["padding-bottom"]) || 0;
                    return (
                        n || (t = o.width - h - l),
                        ((this.settings.fullsize && !s) || !s) && (e = o.height - c - d),
                        {
                            width:
                                t - this.containerPadding.left - this.containerPadding.right,
                            height:
                                e - this.containerPadding.top - this.containerPadding.bottom,
                        }
                    );
                }
                bounds() {
                    let t;
                    return (
                        "visible" !== this.container.style.overflow &&
                        (t = this.container && this.container.getBoundingClientRect()),
                        t && t.width && t.height ? t : Object(r.windowBounds)()
                    );
                }
                getSheet() {
                    var t = document.createElement("style");
                    return (
                        t.appendChild(document.createTextNode("")),
                        document.head.appendChild(t),
                        t.sheet
                    );
                }
                addStyleRules(t, e) {
                    var i = "#" + this.id + " ",
                        n = "";
                    this.sheet || (this.sheet = this.getSheet()),
                        e.forEach(function (t) {
                            for (var e in t)
                                t.hasOwnProperty(e) && (n += e + ":" + t[e] + ";");
                        }),
                        this.sheet.insertRule(i + t + " {" + n + "}", 0);
                }
                axis(t) {
                    "horizontal" === t
                        ? ((this.container.style.display = "flex"),
                            (this.container.style.flexDirection = "row"),
                            (this.container.style.flexWrap = "nowrap"))
                        : (this.container.style.display = "block"),
                        (this.settings.axis = t);
                }
                direction(t) {
                    this.container &&
                        ((this.container.dir = t), (this.container.style.direction = t)),
                        this.settings.fullsize && (document.body.style.direction = t),
                        (this.settings.dir = t);
                }
                overflow(t) {
                    this.container &&
                        ("scroll" === t && "vertical" === this.settings.axis
                            ? ((this.container.style["overflow-y"] = t),
                                (this.container.style["overflow-x"] = "hidden"))
                            : "scroll" === t && "horizontal" === this.settings.axis
                                ? ((this.container.style["overflow-y"] = "hidden"),
                                    (this.container.style["overflow-x"] = t))
                                : (this.container.style.overflow = t)),
                        (this.settings.overflow = t);
                }
                destroy() {
                    this.element &&
                        (this.settings.hidden ? this.wrapper : this.container,
                            this.element.contains(this.container) &&
                            this.element.removeChild(this.container),
                            window.removeEventListener("resize", this.resizeFunc),
                            window.removeEventListener(
                                "orientationChange",
                                this.orientationChangeFunc
                            ));
                }
            };
            var u = class {
                constructor(t) {
                    (this.container = t),
                        (this._views = []),
                        (this.length = 0),
                        (this.hidden = !1);
                }
                all() {
                    return this._views;
                }
                first() {
                    return this._views[0];
                }
                last() {
                    return this._views[this._views.length - 1];
                }
                indexOf(t) {
                    return this._views.indexOf(t);
                }
                slice() {
                    return this._views.slice.apply(this._views, arguments);
                }
                get(t) {
                    return this._views[t];
                }
                append(t) {
                    return (
                        this._views.push(t),
                        this.container && this.container.appendChild(t.element),
                        this.length++,
                        t
                    );
                }
                prepend(t) {
                    return (
                        this._views.unshift(t),
                        this.container &&
                        this.container.insertBefore(
                            t.element,
                            this.container.firstChild
                        ),
                        this.length++,
                        t
                    );
                }
                insert(t, e) {
                    return (
                        this._views.splice(e, 0, t),
                        this.container &&
                        (e < this.container.children.length
                            ? this.container.insertBefore(
                                t.element,
                                this.container.children[e]
                            )
                            : this.container.appendChild(t.element)),
                        this.length++,
                        t
                    );
                }
                remove(t) {
                    var e = this._views.indexOf(t);
                    e > -1 && this._views.splice(e, 1), this.destroy(t), this.length--;
                }
                destroy(t) {
                    t.displayed && t.destroy(),
                        this.container && this.container.removeChild(t.element),
                        (t = null);
                }
                forEach() {
                    return this._views.forEach.apply(this._views, arguments);
                }
                clear() {
                    var t,
                        e = this.length;
                    if (this.length) {
                        for (var i = 0; i < e; i++) (t = this._views[i]), this.destroy(t);
                        (this._views = []), (this.length = 0);
                    }
                }
                find(t) {
                    for (var e, i = this.length, n = 0; n < i; n++)
                        if ((e = this._views[n]).displayed && e.section.index == t.index)
                            return e;
                }
                displayed() {
                    for (var t, e = [], i = this.length, n = 0; n < i; n++)
                        (t = this._views[n]).displayed && e.push(t);
                    return e;
                }
                show() {
                    for (var t, e = this.length, i = 0; i < e; i++)
                        (t = this._views[i]).displayed && t.show();
                    this.hidden = !1;
                }
                hide() {
                    for (var t, e = this.length, i = 0; i < e; i++)
                        (t = this._views[i]).displayed && t.hide();
                    this.hidden = !0;
                }
            },
                f = i(1);
            class p {
                constructor(t) {
                    (this.name = "default"),
                        (this.optsSettings = t.settings),
                        (this.View = t.view),
                        (this.request = t.request),
                        (this.renditionQueue = t.queue),
                        (this.q = new h.a(this)),
                        (this.settings = Object(r.extend)(this.settings || {}, {
                            infinite: !0,
                            hidden: !1,
                            width: void 0,
                            height: void 0,
                            axis: void 0,
                            writingMode: void 0,
                            flow: "scrolled",
                            ignoreClass: "",
                            fullsize: void 0,
                        })),
                        Object(r.extend)(this.settings, t.settings || {}),
                        (this.viewSettings = {
                            ignoreClass: this.settings.ignoreClass,
                            axis: this.settings.axis,
                            flow: this.settings.flow,
                            layout: this.layout,
                            method: this.settings.method,
                            width: 0,
                            height: 0,
                            forceEvenPages: !0,
                        }),
                        (this.rendered = !1);
                }
                render(t, e) {
                    let i = t.tagName;
                    void 0 !== this.settings.fullsize ||
                        !i ||
                        ("body" != i.toLowerCase() && "html" != i.toLowerCase()) ||
                        (this.settings.fullsize = !0),
                        this.settings.fullsize &&
                        ((this.settings.overflow = "visible"),
                            (this.overflow = this.settings.overflow)),
                        (this.settings.size = e),
                        (this.settings.rtlScrollType = o()),
                        (this.stage = new d({
                            width: e.width,
                            height: e.height,
                            overflow: this.overflow,
                            hidden: this.settings.hidden,
                            axis: this.settings.axis,
                            fullsize: this.settings.fullsize,
                            direction: this.settings.direction,
                        })),
                        this.stage.attachTo(t),
                        (this.container = this.stage.getContainer()),
                        (this.views = new u(this.container)),
                        (this._bounds = this.bounds()),
                        (this._stageSize = this.stage.size()),
                        (this.viewSettings.width = this._stageSize.width),
                        (this.viewSettings.height = this._stageSize.height),
                        this.stage.onResize(this.onResized.bind(this)),
                        this.stage.onOrientationChange(this.onOrientationChange.bind(this)),
                        this.addEventListeners(),
                        this.layout && this.updateLayout(),
                        (this.rendered = !0);
                }
                addEventListeners() {
                    var t;
                    window.addEventListener(
                        "unload",
                        function (t) {
                            this.destroy();
                        }.bind(this)
                    ),
                        (t = this.settings.fullsize ? window : this.container),
                        (this._onScroll = this.onScroll.bind(this)),
                        t.addEventListener("scroll", this._onScroll);
                }
                removeEventListeners() {
                    (this.settings.fullsize
                        ? window
                        : this.container
                    ).removeEventListener("scroll", this._onScroll),
                        (this._onScroll = void 0);
                }
                destroy() {
                    clearTimeout(this.orientationTimeout),
                        clearTimeout(this.resizeTimeout),
                        clearTimeout(this.afterScrolled),
                        this.clear(),
                        this.removeEventListeners(),
                        this.stage.destroy(),
                        (this.rendered = !1);
                }
                onOrientationChange(t) {
                    let { orientation: e } = window;
                    this.optsSettings.resizeOnOrientationChange && this.resize(),
                        clearTimeout(this.orientationTimeout),
                        (this.orientationTimeout = setTimeout(
                            function () {
                                (this.orientationTimeout = void 0),
                                    this.optsSettings.resizeOnOrientationChange && this.resize(),
                                    this.emit(f.c.MANAGERS.ORIENTATION_CHANGE, e);
                            }.bind(this),
                            500
                        ));
                }
                onResized(t) {
                    this.resize();
                }
                resize(t, e, i) {
                    let n = this.stage.size(t, e);
                    (this.winBounds = Object(r.windowBounds)()),
                        this.orientationTimeout &&
                            this.winBounds.width === this.winBounds.height
                            ? (this._stageSize = void 0)
                            : (this._stageSize &&
                                this._stageSize.width === n.width &&
                                this._stageSize.height === n.height) ||
                            ((this._stageSize = n),
                                (this._bounds = this.bounds()),
                                this.clear(),
                                (this.viewSettings.width = this._stageSize.width),
                                (this.viewSettings.height = this._stageSize.height),
                                this.updateLayout(),
                                this.emit(
                                    f.c.MANAGERS.RESIZED,
                                    {
                                        width: this._stageSize.width,
                                        height: this._stageSize.height,
                                    },
                                    i
                                ));
                }
                createView(t, e) {
                    return new this.View(
                        t,
                        Object(r.extend)(this.viewSettings, { forceRight: e })
                    );
                }
                handleNextPrePaginated(t, e, i) {
                    let n;
                    if ("pre-paginated" === this.layout.name && this.layout.divisor > 1) {
                        if (t || 0 === e.index) return;
                        if (
                            ((n = e.next()), n && !n.properties.includes("page-spread-left"))
                        )
                            return i.call(this, n);
                    }
                }
                display(t, e) {
                    var i = new r.defer(),
                        n = i.promise;
                    (e === t.href || Object(r.isNumber)(e)) && (e = void 0);
                    var s = this.views.find(t);
                    if (s && t && "pre-paginated" !== this.layout.name) {
                        let t = s.offset();
                        if ("ltr" === this.settings.direction)
                            this.scrollTo(t.left, t.top, !0);
                        else {
                            let e = s.width();
                            this.scrollTo(t.left + e, t.top, !0);
                        }
                        if (e) {
                            let t = s.locationOf(e),
                                i = s.width();
                            this.moveTo(t, i);
                        }
                        return i.resolve(), n;
                    }
                    this.clear();
                    let o = !1;
                    return (
                        "pre-paginated" === this.layout.name &&
                        2 === this.layout.divisor &&
                        t.properties.includes("page-spread-right") &&
                        (o = !0),
                        this.add(t, o)
                            .then(
                                function (t) {
                                    if (e) {
                                        let i = t.locationOf(e),
                                            n = t.width();
                                        this.moveTo(i, n);
                                    }
                                }.bind(this),
                                (t) => {
                                    i.reject(t);
                                }
                            )
                            .then(
                                function () {
                                    return this.handleNextPrePaginated(o, t, this.add);
                                }.bind(this)
                            )
                            .then(
                                function () {
                                    this.views.show(), i.resolve();
                                }.bind(this)
                            ),
                        n
                    );
                }
                afterDisplayed(t) {
                    this.emit(f.c.MANAGERS.ADDED, t);
                }
                afterResized(t) {
                    this.emit(f.c.MANAGERS.RESIZE, t.section);
                }
                moveTo(t, e) {
                    var i = 0,
                        n = 0;
                    this.isPaginated
                        ? ((i =
                            Math.floor(t.left / this.layout.delta) * this.layout.delta) +
                            this.layout.delta >
                            this.container.scrollWidth &&
                            (i = this.container.scrollWidth - this.layout.delta),
                            (n = Math.floor(t.top / this.layout.delta) * this.layout.delta) +
                            this.layout.delta >
                            this.container.scrollHeight &&
                            (n = this.container.scrollHeight - this.layout.delta))
                        : (n = t.top),
                        "rtl" === this.settings.direction &&
                        ((i += this.layout.delta), (i -= e)),
                        this.scrollTo(i, n, !0);
                }
                add(t, e) {
                    var i = this.createView(t, e);
                    return (
                        this.views.append(i),
                        (i.onDisplayed = this.afterDisplayed.bind(this)),
                        (i.onResize = this.afterResized.bind(this)),
                        i.on(f.c.VIEWS.AXIS, (t) => {
                            this.updateAxis(t);
                        }),
                        i.on(f.c.VIEWS.WRITING_MODE, (t) => {
                            this.updateWritingMode(t);
                        }),
                        i.display(this.request)
                    );
                }
                append(t, e) {
                    var i = this.createView(t, e);
                    return (
                        this.views.append(i),
                        (i.onDisplayed = this.afterDisplayed.bind(this)),
                        (i.onResize = this.afterResized.bind(this)),
                        i.on(f.c.VIEWS.AXIS, (t) => {
                            this.updateAxis(t);
                        }),
                        i.on(f.c.VIEWS.WRITING_MODE, (t) => {
                            this.updateWritingMode(t);
                        }),
                        i.display(this.request)
                    );
                }
                prepend(t, e) {
                    var i = this.createView(t, e);
                    return (
                        i.on(f.c.VIEWS.RESIZED, (t) => {
                            this.counter(t);
                        }),
                        this.views.prepend(i),
                        (i.onDisplayed = this.afterDisplayed.bind(this)),
                        (i.onResize = this.afterResized.bind(this)),
                        i.on(f.c.VIEWS.AXIS, (t) => {
                            this.updateAxis(t);
                        }),
                        i.on(f.c.VIEWS.WRITING_MODE, (t) => {
                            this.updateWritingMode(t);
                        }),
                        i.display(this.request)
                    );
                }
                counter(t) {
                    "vertical" === this.settings.axis
                        ? this.scrollBy(0, t.heightDelta, !0)
                        : this.scrollBy(t.widthDelta, 0, !0);
                }
                next() {
                    var t;
                    let e = this.settings.direction;
                    if (this.views.length) {
                        if (
                            !this.isPaginated ||
                            "horizontal" !== this.settings.axis ||
                            (e && "ltr" !== e)
                        )
                            if (
                                this.isPaginated &&
                                "horizontal" === this.settings.axis &&
                                "rtl" === e
                            )
                                (this.scrollLeft = this.container.scrollLeft),
                                    "default" === this.settings.rtlScrollType
                                        ? this.container.scrollLeft > 0
                                            ? this.scrollBy(this.layout.delta, 0, !0)
                                            : (t = this.views.last().section.next())
                                        : this.container.scrollLeft + -1 * this.layout.delta >
                                            -1 * this.container.scrollWidth
                                            ? this.scrollBy(this.layout.delta, 0, !0)
                                            : (t = this.views.last().section.next());
                            else if (this.isPaginated && "vertical" === this.settings.axis) {
                                (this.scrollTop = this.container.scrollTop),
                                    this.container.scrollTop + this.container.offsetHeight <
                                        this.container.scrollHeight
                                        ? this.scrollBy(0, this.layout.height, !0)
                                        : (t = this.views.last().section.next());
                            } else t = this.views.last().section.next();
                        else
                            (this.scrollLeft = this.container.scrollLeft),
                                this.container.scrollLeft +
                                    this.container.offsetWidth +
                                    this.layout.delta <=
                                    this.container.scrollWidth
                                    ? this.scrollBy(this.layout.delta, 0, !0)
                                    : (t = this.views.last().section.next());
                        if (t) {
                            this.clear(), this.updateLayout();
                            let e = !1;
                            return (
                                "pre-paginated" === this.layout.name &&
                                2 === this.layout.divisor &&
                                t.properties.includes("page-spread-right") &&
                                (e = !0),
                                this.append(t, e)
                                    .then(
                                        function () {
                                            return this.handleNextPrePaginated(e, t, this.append);
                                        }.bind(this),
                                        (t) => t
                                    )
                                    .then(
                                        function () {
                                            this.isPaginated ||
                                                "horizontal" !== this.settings.axis ||
                                                "rtl" !== this.settings.direction ||
                                                "default" !== this.settings.rtlScrollType ||
                                                this.scrollTo(this.container.scrollWidth, 0, !0),
                                                this.views.show();
                                        }.bind(this)
                                    )
                            );
                        }
                    }
                }
                prev() {
                    var t;
                    let e = this.settings.direction;
                    if (this.views.length) {
                        if (
                            !this.isPaginated ||
                            "horizontal" !== this.settings.axis ||
                            (e && "ltr" !== e)
                        )
                            if (
                                this.isPaginated &&
                                "horizontal" === this.settings.axis &&
                                "rtl" === e
                            )
                                (this.scrollLeft = this.container.scrollLeft),
                                    "default" === this.settings.rtlScrollType
                                        ? this.container.scrollLeft + this.container.offsetWidth <
                                            this.container.scrollWidth
                                            ? this.scrollBy(-this.layout.delta, 0, !0)
                                            : (t = this.views.first().section.prev())
                                        : this.container.scrollLeft < 0
                                            ? this.scrollBy(-this.layout.delta, 0, !0)
                                            : (t = this.views.first().section.prev());
                            else if (this.isPaginated && "vertical" === this.settings.axis) {
                                (this.scrollTop = this.container.scrollTop),
                                    this.container.scrollTop > 0
                                        ? this.scrollBy(0, -this.layout.height, !0)
                                        : (t = this.views.first().section.prev());
                            } else t = this.views.first().section.prev();
                        else
                            (this.scrollLeft = this.container.scrollLeft),
                                this.container.scrollLeft > 0
                                    ? this.scrollBy(-this.layout.delta, 0, !0)
                                    : (t = this.views.first().section.prev());
                        if (t) {
                            this.clear(), this.updateLayout();
                            let e = !1;
                            return (
                                "pre-paginated" === this.layout.name &&
                                2 === this.layout.divisor &&
                                "object" != typeof t.prev() &&
                                (e = !0),
                                this.prepend(t, e)
                                    .then(
                                        function () {
                                            var e;
                                            if (
                                                "pre-paginated" === this.layout.name &&
                                                this.layout.divisor > 1 &&
                                                (e = t.prev())
                                            )
                                                return this.prepend(e);
                                        }.bind(this),
                                        (t) => t
                                    )
                                    .then(
                                        function () {
                                            this.isPaginated &&
                                                "horizontal" === this.settings.axis &&
                                                ("rtl" === this.settings.direction
                                                    ? "default" === this.settings.rtlScrollType
                                                        ? this.scrollTo(0, 0, !0)
                                                        : this.scrollTo(
                                                            -1 * this.container.scrollWidth +
                                                            this.layout.delta,
                                                            0,
                                                            !0
                                                        )
                                                    : this.scrollTo(
                                                        this.container.scrollWidth - this.layout.delta,
                                                        0,
                                                        !0
                                                    )),
                                                this.views.show();
                                        }.bind(this)
                                    )
                            );
                        }
                    }
                }
                current() {
                    var t = this.visible();
                    return t.length ? t[t.length - 1] : null;
                }
                clear() {
                    this.views &&
                        (this.views.hide(), this.scrollTo(0, 0, !0), this.views.clear());
                }
                currentLocation() {
                    return (
                        this.updateLayout(),
                        this.isPaginated && "horizontal" === this.settings.axis
                            ? (this.location = this.paginatedLocation())
                            : (this.location = this.scrolledLocation()),
                        this.location
                    );
                }
                scrolledLocation() {
                    let t = this.visible(),
                        e = this.container.getBoundingClientRect(),
                        i = e.height < window.innerHeight ? e.height : window.innerHeight,
                        n = e.width < window.innerWidth ? e.width : window.innerWidth,
                        s = "vertical" === this.settings.axis,
                        r = (this.settings.direction, 0);
                    return (
                        this.settings.fullsize && (r = s ? window.scrollY : window.scrollX),
                        t.map((t) => {
                            let o,
                                a,
                                h,
                                l,
                                { index: c, href: d } = t.section,
                                u = t.position(),
                                f = t.width(),
                                p = t.height();
                            s
                                ? ((o = r + e.top - u.top + 0),
                                    (a = o + i - 0),
                                    (l = this.layout.count(p, i).pages),
                                    (h = i))
                                : ((o = r + e.left - u.left + 0),
                                    (a = o + n - 0),
                                    (l = this.layout.count(f, n).pages),
                                    (h = n));
                            let g = Math.ceil(o / h),
                                m = [],
                                v = Math.ceil(a / h);
                            if ("rtl" === this.settings.direction && !s) {
                                let t = g;
                                (g = l - v), (v = l - t);
                            }
                            m = [];
                            for (var y = g; y <= v; y++) {
                                let t = y + 1;
                                m.push(t);
                            }
                            return {
                                index: c,
                                href: d,
                                pages: m,
                                totalPages: l,
                                mapping: this.mapping.page(t.contents, t.section.cfiBase, o, a),
                            };
                        })
                    );
                }
                paginatedLocation() {
                    let t = this.visible(),
                        e = this.container.getBoundingClientRect(),
                        i = 0,
                        n = 0;
                    return (
                        this.settings.fullsize && (i = window.scrollX),
                        t.map((t) => {
                            let s,
                                r,
                                o,
                                a,
                                { index: h, href: l } = t.section,
                                c = t.position(),
                                d = t.width();
                            "rtl" === this.settings.direction
                                ? ((s = e.right - i),
                                    (a = Math.min(Math.abs(s - c.left), this.layout.width) - n),
                                    (o = c.width - (c.right - s) - n),
                                    (r = o - a))
                                : ((s = e.left + i),
                                    (a = Math.min(c.right - s, this.layout.width) - n),
                                    (r = s - c.left + n),
                                    (o = r + a)),
                                (n += a);
                            let u = this.mapping.page(t.contents, t.section.cfiBase, r, o),
                                f = this.layout.count(d).pages,
                                p = Math.floor(r / this.layout.pageWidth),
                                g = [],
                                m = Math.floor(o / this.layout.pageWidth);
                            if (
                                (p < 0 && ((p = 0), (m += 1)),
                                    "rtl" === this.settings.direction)
                            ) {
                                let t = p;
                                (p = f - m), (m = f - t);
                            }
                            for (var v = p + 1; v <= m; v++) {
                                let t = v;
                                g.push(t);
                            }
                            return { index: h, href: l, pages: g, totalPages: f, mapping: u };
                        })
                    );
                }
                isVisible(t, e, i, n) {
                    var s = t.position(),
                        r = n || this.bounds();
                    return (
                        ("horizontal" === this.settings.axis &&
                            s.right > r.left - e &&
                            s.left < r.right + i) ||
                        ("vertical" === this.settings.axis &&
                            s.bottom > r.top - e &&
                            s.top < r.bottom + i)
                    );
                }
                visible() {
                    for (
                        var t,
                        e = this.bounds(),
                        i = this.views.displayed(),
                        n = i.length,
                        s = [],
                        r = 0;
                        r < n;
                        r++
                    )
                        (t = i[r]), !0 === this.isVisible(t, 0, 0, e) && s.push(t);
                    return s;
                }
                scrollBy(t, e, i) {
                    let n = "rtl" === this.settings.direction ? -1 : 1;
                    i && (this.ignore = !0),
                        this.settings.fullsize
                            ? window.scrollBy(t * n, e * n)
                            : (t && (this.container.scrollLeft += t * n),
                                e && (this.container.scrollTop += e)),
                        (this.scrolled = !0);
                }
                scrollTo(t, e, i) {
                    i && (this.ignore = !0),
                        this.settings.fullsize
                            ? window.scrollTo(t, e)
                            : ((this.container.scrollLeft = t),
                                (this.container.scrollTop = e)),
                        (this.scrolled = !0);
                }
                onScroll() {
                    let t, e;
                    this.settings.fullsize
                        ? ((t = window.scrollY), (e = window.scrollX))
                        : ((t = this.container.scrollTop), (e = this.container.scrollLeft)),
                        (this.scrollTop = t),
                        (this.scrollLeft = e),
                        this.ignore
                            ? (this.ignore = !1)
                            : (this.emit(f.c.MANAGERS.SCROLL, { top: t, left: e }),
                                clearTimeout(this.afterScrolled),
                                (this.afterScrolled = setTimeout(
                                    function () {
                                        this.emit(f.c.MANAGERS.SCROLLED, {
                                            top: this.scrollTop,
                                            left: this.scrollLeft,
                                        });
                                    }.bind(this),
                                    20
                                )));
                }
                bounds() {
                    return this.stage.bounds();
                }
                applyLayout(t) {
                    (this.layout = t),
                        this.updateLayout(),
                        this.views &&
                        this.views.length > 0 &&
                        "pre-paginated" === this.layout.name &&
                        this.display(this.views.first().section);
                }
                updateLayout() {
                    this.stage &&
                        ((this._stageSize = this.stage.size()),
                            this.isPaginated
                                ? (this.layout.calculate(
                                    this._stageSize.width,
                                    this._stageSize.height,
                                    this.settings.gap
                                ),
                                    (this.settings.offset =
                                        this.layout.delta / this.layout.divisor))
                                : this.layout.calculate(
                                    this._stageSize.width,
                                    this._stageSize.height
                                ),
                            (this.viewSettings.width = this.layout.width),
                            (this.viewSettings.height = this.layout.height),
                            this.setLayout(this.layout));
                }
                setLayout(t) {
                    (this.viewSettings.layout = t),
                        (this.mapping = new a.a(
                            t.props,
                            this.settings.direction,
                            this.settings.axis
                        )),
                        this.views &&
                        this.views.forEach(function (e) {
                            e && e.setLayout(t);
                        });
                }
                updateWritingMode(t) {
                    this.writingMode = t;
                }
                updateAxis(t, e) {
                    (e || t !== this.settings.axis) &&
                        ((this.settings.axis = t),
                            this.stage && this.stage.axis(t),
                            (this.viewSettings.axis = t),
                            this.mapping &&
                            (this.mapping = new a.a(
                                this.layout.props,
                                this.settings.direction,
                                this.settings.axis
                            )),
                            this.layout &&
                            ("vertical" === t
                                ? this.layout.spread("none")
                                : this.layout.spread(this.layout.settings.spread)));
                }
                updateFlow(t, e = "auto") {
                    let i = "paginated" === t || "auto" === t;
                    (this.isPaginated = i),
                        "scrolled-doc" === t ||
                            "scrolled-continuous" === t ||
                            "scrolled" === t
                            ? this.updateAxis("vertical")
                            : this.updateAxis("horizontal"),
                        (this.viewSettings.flow = t),
                        this.settings.overflow
                            ? (this.overflow = this.settings.overflow)
                            : (this.overflow = i ? "hidden" : e),
                        this.stage && this.stage.overflow(this.overflow),
                        this.updateLayout();
                }
                getContents() {
                    var t = [];
                    return this.views
                        ? (this.views.forEach(function (e) {
                            const i = e && e.contents;
                            i && t.push(i);
                        }),
                            t)
                        : t;
                }
                direction(t = "ltr") {
                    (this.settings.direction = t),
                        this.stage && this.stage.direction(t),
                        (this.viewSettings.direction = t),
                        this.updateLayout();
                }
                isRendered() {
                    return this.rendered;
                }
            }
            s()(p.prototype);
            e.a = p;
        },
        function (t, e, i) {
            "use strict";
            var n = i(2),
                s = i(0);
            e.a = class {
                constructor(t, e, i, n = !1) {
                    (this.layout = t),
                        (this.horizontal = "horizontal" === i),
                        (this.direction = e || "ltr"),
                        (this._dev = n);
                }
                section(t) {
                    var e = this.findRanges(t);
                    return this.rangeListToCfiList(t.section.cfiBase, e);
                }
                page(t, e, i, s) {
                    var r,
                        o = !(!t || !t.document) && t.document.body;
                    if (o) {
                        if (
                            ((r = this.rangePairToCfiPair(e, {
                                start: this.findStart(o, i, s),
                                end: this.findEnd(o, i, s),
                            })),
                                !0 === this._dev)
                        ) {
                            let e = t.document,
                                i = new n.a(r.start).toRange(e),
                                s = new n.a(r.end).toRange(e),
                                o = e.defaultView.getSelection(),
                                a = e.createRange();
                            o.removeAllRanges(),
                                a.setStart(i.startContainer, i.startOffset),
                                a.setEnd(s.endContainer, s.endOffset),
                                o.addRange(a);
                        }
                        return r;
                    }
                }
                walk(t, e) {
                    if (!t || t.nodeType !== Node.TEXT_NODE) {
                        var i = function (t) {
                            return t.data.trim().length > 0
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_REJECT;
                        },
                            n = i;
                        n.acceptNode = i;
                        for (
                            var s,
                            r,
                            o = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, n, !1);
                            (s = o.nextNode()) && !(r = e(s));

                        );
                        return r;
                    }
                }
                findRanges(t) {
                    for (
                        var e,
                        i,
                        n = [],
                        s = t.contents.scrollWidth(),
                        r = Math.ceil(s / this.layout.spreadWidth) * this.layout.divisor,
                        o = this.layout.columnWidth,
                        a = this.layout.gap,
                        h = 0;
                        h < r.pages;
                        h++
                    )
                        (e = (o + a) * h),
                            (i = o * (h + 1) + a * h),
                            n.push({
                                start: this.findStart(t.document.body, e, i),
                                end: this.findEnd(t.document.body, e, i),
                            });
                    return n;
                }
                findStart(t, e, i) {
                    for (var n, r, o = [t], a = t; o.length;)
                        if (
                            ((n = o.shift()),
                                (r = this.walk(n, (t) => {
                                    var n, r, h, l, c;
                                    if (
                                        ((c = Object(s.nodeBounds)(t)),
                                            this.horizontal && "ltr" === this.direction)
                                    ) {
                                        if (
                                            ((n = this.horizontal ? c.left : c.top),
                                                (r = this.horizontal ? c.right : c.bottom),
                                                n >= e && n <= i)
                                        )
                                            return t;
                                        if (r > e) return t;
                                        (a = t), o.push(t);
                                    } else if (this.horizontal && "rtl" === this.direction) {
                                        if (((n = c.left), (r = c.right) <= i && r >= e)) return t;
                                        if (n < i) return t;
                                        (a = t), o.push(t);
                                    } else {
                                        if (((h = c.top), (l = c.bottom), h >= e && h <= i)) return t;
                                        if (l > e) return t;
                                        (a = t), o.push(t);
                                    }
                                })))
                        )
                            return this.findTextStartRange(r, e, i);
                    return this.findTextStartRange(a, e, i);
                }
                findEnd(t, e, i) {
                    for (var n, r, o = [t], a = t; o.length;)
                        if (
                            ((n = o.shift()),
                                (r = this.walk(n, (t) => {
                                    var n, r, h, l, c;
                                    if (
                                        ((c = Object(s.nodeBounds)(t)),
                                            this.horizontal && "ltr" === this.direction)
                                    ) {
                                        if (
                                            ((n = Math.round(c.left)),
                                                (r = Math.round(c.right)),
                                                n > i && a)
                                        )
                                            return a;
                                        if (r > i) return t;
                                        (a = t), o.push(t);
                                    } else if (this.horizontal && "rtl" === this.direction) {
                                        if (
                                            ((n = Math.round(this.horizontal ? c.left : c.top)),
                                                (r = Math.round(this.horizontal ? c.right : c.bottom)) <
                                                e && a)
                                        )
                                            return a;
                                        if (n < e) return t;
                                        (a = t), o.push(t);
                                    } else {
                                        if (
                                            ((h = Math.round(c.top)),
                                                (l = Math.round(c.bottom)),
                                                h > i && a)
                                        )
                                            return a;
                                        if (l > i) return t;
                                        (a = t), o.push(t);
                                    }
                                })))
                        )
                            return this.findTextEndRange(r, e, i);
                    return this.findTextEndRange(a, e, i);
                }
                findTextStartRange(t, e, i) {
                    for (
                        var n, s, r = this.splitTextNodeIntoRanges(t), o = 0;
                        o < r.length;
                        o++
                    )
                        if (
                            ((s = (n = r[o]).getBoundingClientRect()),
                                this.horizontal && "ltr" === this.direction)
                        ) {
                            if (s.left >= e) return n;
                        } else if (this.horizontal && "rtl" === this.direction) {
                            if (s.right <= i) return n;
                        } else if (s.top >= e) return n;
                    return r[0];
                }
                findTextEndRange(t, e, i) {
                    for (
                        var n, s, r, o, a, h, l, c = this.splitTextNodeIntoRanges(t), d = 0;
                        d < c.length;
                        d++
                    ) {
                        if (
                            ((r = (s = c[d]).getBoundingClientRect()),
                                this.horizontal && "ltr" === this.direction)
                        ) {
                            if (((o = r.left), (a = r.right), o > i && n)) return n;
                            if (a > i) return s;
                        } else if (this.horizontal && "rtl" === this.direction) {
                            if (((o = r.left), (a = r.right) < e && n)) return n;
                            if (o < e) return s;
                        } else {
                            if (((h = r.top), (l = r.bottom), h > i && n)) return n;
                            if (l > i) return s;
                        }
                        n = s;
                    }
                    return c[c.length - 1];
                }
                splitTextNodeIntoRanges(t, e) {
                    var i,
                        n = [],
                        s = (t.textContent || "").trim(),
                        r = t.ownerDocument,
                        o = e || " ",
                        a = s.indexOf(o);
                    if (-1 === a || t.nodeType != Node.TEXT_NODE)
                        return (i = r.createRange()).selectNodeContents(t), [i];
                    for (
                        (i = r.createRange()).setStart(t, 0),
                        i.setEnd(t, a),
                        n.push(i),
                        i = !1;
                        -1 != a;

                    )
                        (a = s.indexOf(o, a + 1)) > 0 &&
                            (i && (i.setEnd(t, a), n.push(i)),
                                (i = r.createRange()).setStart(t, a + 1));
                    return i && (i.setEnd(t, s.length), n.push(i)), n;
                }
                rangePairToCfiPair(t, e) {
                    var i = e.start,
                        s = e.end;
                    return (
                        i.collapse(!0),
                        s.collapse(!1),
                        { start: new n.a(i, t).toString(), end: new n.a(s, t).toString() }
                    );
                }
                rangeListToCfiList(t, e) {
                    for (var i, n = [], s = 0; s < e.length; s++)
                        (i = this.rangePairToCfiPair(t, e[s])), n.push(i);
                    return n;
                }
                axis(t) {
                    return t && (this.horizontal = "horizontal" === t), this.horizontal;
                }
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(3),
                s = i.n(n),
                r = i(0),
                o = i(2),
                a = i(11),
                h = i(8),
                l = i(1);
            const c = "undefined" != typeof navigator,
                d = c && /Chrome/.test(navigator.userAgent),
                u = c && !d && /AppleWebKit/.test(navigator.userAgent);
            class f {
                constructor(t, e, i, n) {
                    (this.epubcfi = new o.a()),
                        (this.document = t),
                        (this.documentElement = this.document.documentElement),
                        (this.content = e || this.document.body),
                        (this.window = this.document.defaultView),
                        (this._size = { width: 0, height: 0 }),
                        (this.sectionIndex = n || 0),
                        (this.cfiBase = i || ""),
                        this.epubReadingSystem("epub.js", l.b),
                        (this.called = 0),
                        (this.active = !0),
                        this.listeners();
                }
                static get listenedEvents() {
                    return l.a;
                }
                width(t) {
                    var e = this.content;
                    return (
                        t && Object(r.isNumber)(t) && (t += "px"),
                        t && (e.style.width = t),
                        parseInt(this.window.getComputedStyle(e).width)
                    );
                }
                height(t) {
                    var e = this.content;
                    return (
                        t && Object(r.isNumber)(t) && (t += "px"),
                        t && (e.style.height = t),
                        parseInt(this.window.getComputedStyle(e).height)
                    );
                }
                contentWidth(t) {
                    var e = this.content || this.document.body;
                    return (
                        t && Object(r.isNumber)(t) && (t += "px"),
                        t && (e.style.width = t),
                        parseInt(this.window.getComputedStyle(e).width)
                    );
                }
                contentHeight(t) {
                    var e = this.content || this.document.body;
                    return (
                        t && Object(r.isNumber)(t) && (t += "px"),
                        t && (e.style.height = t),
                        parseInt(this.window.getComputedStyle(e).height)
                    );
                }
                textWidth() {
                    let t,
                        e,
                        i = this.document.createRange(),
                        n = this.content || this.document.body,
                        s = Object(r.borders)(n);
                    return (
                        i.selectNodeContents(n),
                        (t = i.getBoundingClientRect()),
                        (e = t.width),
                        s && s.width && (e += s.width),
                        Math.round(e)
                    );
                }
                textHeight() {
                    let t,
                        e,
                        i = this.document.createRange(),
                        n = this.content || this.document.body;
                    return (
                        i.selectNodeContents(n),
                        (t = i.getBoundingClientRect()),
                        (e = t.bottom),
                        Math.round(e)
                    );
                }
                scrollWidth() {
                    return this.documentElement.scrollWidth;
                }
                scrollHeight() {
                    return this.documentElement.scrollHeight;
                }
                overflow(t) {
                    return (
                        t && (this.documentElement.style.overflow = t),
                        this.window.getComputedStyle(this.documentElement).overflow
                    );
                }
                overflowX(t) {
                    return (
                        t && (this.documentElement.style.overflowX = t),
                        this.window.getComputedStyle(this.documentElement).overflowX
                    );
                }
                overflowY(t) {
                    return (
                        t && (this.documentElement.style.overflowY = t),
                        this.window.getComputedStyle(this.documentElement).overflowY
                    );
                }
                css(t, e, i) {
                    var n = this.content || this.document.body;
                    return (
                        e
                            ? n.style.setProperty(t, e, i ? "important" : "")
                            : n.style.removeProperty(t),
                        this.window.getComputedStyle(n)[t]
                    );
                }
                viewport(t) {
                    var e,
                        i = this.document.querySelector("meta[name='viewport']"),
                        n = {
                            width: void 0,
                            height: void 0,
                            scale: void 0,
                            minimum: void 0,
                            maximum: void 0,
                            scalable: void 0,
                        },
                        s = [];
                    if (i && i.hasAttribute("content")) {
                        let t = i.getAttribute("content"),
                            e = t.match(/width\s*=\s*([^,]*)/),
                            s = t.match(/height\s*=\s*([^,]*)/),
                            r = t.match(/initial-scale\s*=\s*([^,]*)/),
                            o = t.match(/minimum-scale\s*=\s*([^,]*)/),
                            a = t.match(/maximum-scale\s*=\s*([^,]*)/),
                            h = t.match(/user-scalable\s*=\s*([^,]*)/);
                        e && e.length && void 0 !== e[1] && (n.width = e[1]),
                            s && s.length && void 0 !== s[1] && (n.height = s[1]),
                            r && r.length && void 0 !== r[1] && (n.scale = r[1]),
                            o && o.length && void 0 !== o[1] && (n.minimum = o[1]),
                            a && a.length && void 0 !== a[1] && (n.maximum = a[1]),
                            h && h.length && void 0 !== h[1] && (n.scalable = h[1]);
                    }
                    return (
                        (e = Object(r.defaults)(t || {}, n)),
                        t &&
                        (e.width && s.push("width=" + e.width),
                            e.height && s.push("height=" + e.height),
                            e.scale && s.push("initial-scale=" + e.scale),
                            "no" === e.scalable
                                ? (s.push("minimum-scale=" + e.scale),
                                    s.push("maximum-scale=" + e.scale),
                                    s.push("user-scalable=" + e.scalable))
                                : (e.scalable && s.push("user-scalable=" + e.scalable),
                                    e.minimum && s.push("minimum-scale=" + e.minimum),
                                    e.maximum && s.push("minimum-scale=" + e.maximum)),
                            i ||
                            ((i = this.document.createElement("meta")).setAttribute(
                                "name",
                                "viewport"
                            ),
                                this.document.querySelector("head").appendChild(i)),
                            i.setAttribute("content", s.join(", ")),
                            this.window.scrollTo(0, 0)),
                        e
                    );
                }
                expand() {
                    this.emit(l.c.CONTENTS.EXPAND);
                }
                listeners() {
                    this.imageLoadListeners(),
                        this.mediaQueryListeners(),
                        this.addEventListeners(),
                        this.addSelectionListeners(),
                        "undefined" == typeof ResizeObserver
                            ? (this.resizeListeners(), this.visibilityListeners())
                            : this.resizeObservers(),
                        this.linksHandler();
                }
                removeListeners() {
                    this.removeEventListeners(),
                        this.removeSelectionListeners(),
                        this.observer && this.observer.disconnect(),
                        clearTimeout(this.expanding);
                }
                resizeCheck() {
                    let t = this.textWidth(),
                        e = this.textHeight();
                    (t == this._size.width && e == this._size.height) ||
                        ((this._size = { width: t, height: e }),
                            this.onResize && this.onResize(this._size),
                            this.emit(l.c.CONTENTS.RESIZE, this._size));
                }
                resizeListeners() {
                    clearTimeout(this.expanding),
                        requestAnimationFrame(this.resizeCheck.bind(this)),
                        (this.expanding = setTimeout(this.resizeListeners.bind(this), 350));
                }
                visibilityListeners() {
                    document.addEventListener("visibilitychange", () => {
                        "visible" === document.visibilityState && !1 === this.active
                            ? ((this.active = !0), this.resizeListeners())
                            : ((this.active = !1), clearTimeout(this.expanding));
                    });
                }
                transitionListeners() {
                    let t = this.content;
                    (t.style.transitionProperty =
                        "font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height"),
                        (t.style.transitionDuration = "0.001ms"),
                        (t.style.transitionTimingFunction = "linear"),
                        (t.style.transitionDelay = "0"),
                        (this._resizeCheck = this.resizeCheck.bind(this)),
                        this.document.addEventListener("transitionend", this._resizeCheck);
                }
                mediaQueryListeners() {
                    for (
                        var t = this.document.styleSheets,
                        e = function (t) {
                            t.matches &&
                                !this._expanding &&
                                setTimeout(this.expand.bind(this), 1);
                        }.bind(this),
                        i = 0;
                        i < t.length;
                        i += 1
                    ) {
                        var n;
                        try {
                            n = t[i].cssRules;
                        } catch (t) {
                            return;
                        }
                        if (!n) return;
                        for (var s = 0; s < n.length; s += 1) {
                            if (n[s].media)
                                this.window.matchMedia(n[s].media.mediaText).addListener(e);
                        }
                    }
                }
                resizeObservers() {
                    (this.observer = new ResizeObserver((t) => {
                        requestAnimationFrame(this.resizeCheck.bind(this));
                    })),
                        this.observer.observe(this.document.documentElement);
                }
                mutationObservers() {
                    this.observer = new MutationObserver((t) => {
                        this.resizeCheck();
                    });
                    this.observer.observe(this.document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                    });
                }
                imageLoadListeners() {
                    for (
                        var t, e = this.document.querySelectorAll("img"), i = 0;
                        i < e.length;
                        i++
                    )
                        void 0 !== (t = e[i]).naturalWidth &&
                            0 === t.naturalWidth &&
                            (t.onload = this.expand.bind(this));
                }
                fontLoadListeners() {
                    this.document &&
                        this.document.fonts &&
                        this.document.fonts.ready.then(
                            function () {
                                this.resizeCheck();
                            }.bind(this)
                        );
                }
                root() {
                    return this.document ? this.document.documentElement : null;
                }
                locationOf(t, e) {
                    var i,
                        n = { left: 0, top: 0 };
                    if (!this.document) return n;
                    if (this.epubcfi.isCfiString(t)) {
                        let s = new o.a(t).toRange(this.document, e);
                        if (s) {
                            try {
                                if (
                                    !s.endContainer ||
                                    (s.startContainer == s.endContainer &&
                                        s.startOffset == s.endOffset)
                                ) {
                                    let t = s.startContainer.textContent.indexOf(
                                        " ",
                                        s.startOffset
                                    );
                                    -1 == t && (t = s.startContainer.textContent.length),
                                        s.setEnd(s.startContainer, t);
                                }
                            } catch (t) {
                                console.error(
                                    "setting end offset to start container length failed",
                                    t
                                );
                            }
                            if (s.startContainer.nodeType === Node.ELEMENT_NODE)
                                (i = s.startContainer.getBoundingClientRect()),
                                    (n.left = i.left),
                                    (n.top = i.top);
                            else if (u) {
                                let t = s.startContainer,
                                    e = new Range();
                                try {
                                    1 === t.nodeType
                                        ? (i = t.getBoundingClientRect())
                                        : s.startOffset + 2 < t.length
                                            ? (e.setStart(t, s.startOffset),
                                                e.setEnd(t, s.startOffset + 2),
                                                (i = e.getBoundingClientRect()))
                                            : s.startOffset - 2 > 0
                                                ? (e.setStart(t, s.startOffset - 2),
                                                    e.setEnd(t, s.startOffset),
                                                    (i = e.getBoundingClientRect()))
                                                : (i = t.parentNode.getBoundingClientRect());
                                } catch (t) {
                                    console.error(t, t.stack);
                                }
                            } else i = s.getBoundingClientRect();
                        }
                    } else if ("string" == typeof t && t.indexOf("#") > -1) {
                        let e = t.substring(t.indexOf("#") + 1),
                            n = this.document.getElementById(e);
                        if (n)
                            if (u) {
                                let t = new Range();
                                t.selectNode(n), (i = t.getBoundingClientRect());
                            } else i = n.getBoundingClientRect();
                    }
                    return i && ((n.left = i.left), (n.top = i.top)), n;
                }
                addStylesheet(t) {
                    return new Promise(
                        function (e, i) {
                            var n,
                                s = !1;
                            this.document
                                ? (n = this.document.querySelector("link[href='" + t + "']"))
                                    ? e(!0)
                                    : (((n = this.document.createElement("link")).type =
                                        "text/css"),
                                        (n.rel = "stylesheet"),
                                        (n.href = t),
                                        (n.onload = n.onreadystatechange =
                                            function () {
                                                s ||
                                                    (this.readyState && "complete" != this.readyState) ||
                                                    ((s = !0),
                                                        setTimeout(() => {
                                                            e(!0);
                                                        }, 1));
                                            }),
                                        this.document.head.appendChild(n))
                                : e(!1);
                        }.bind(this)
                    );
                }
                _getStylesheetNode(t) {
                    var e;
                    return (
                        (t = "epubjs-inserted-css-" + (t || "")),
                        !!this.document &&
                        ((e = this.document.getElementById(t)) ||
                            (((e = this.document.createElement("style")).id = t),
                                this.document.head.appendChild(e)),
                            e)
                    );
                }
                addStylesheetCss(t, e) {
                    return (
                        !(!this.document || !t) &&
                        ((this._getStylesheetNode(e).innerHTML = t), !0)
                    );
                }
                addStylesheetRules(t, e) {
                    var i;
                    if (this.document && t && 0 !== t.length)
                        if (
                            ((i = this._getStylesheetNode(e).sheet),
                                "[object Array]" === Object.prototype.toString.call(t))
                        )
                            for (var n = 0, s = t.length; n < s; n++) {
                                var r = 1,
                                    o = t[n],
                                    a = t[n][0],
                                    h = "";
                                "[object Array]" === Object.prototype.toString.call(o[1][0]) &&
                                    ((o = o[1]), (r = 0));
                                for (var l = o.length; r < l; r++) {
                                    var c = o[r];
                                    h += c[0] + ":" + c[1] + (c[2] ? " !important" : "") + ";\n";
                                }
                                i.insertRule(a + "{" + h + "}", i.cssRules.length);
                            }
                        else {
                            Object.keys(t).forEach((e) => {
                                const n = t[e];
                                if (Array.isArray(n))
                                    n.forEach((t) => {
                                        const n = Object.keys(t)
                                            .map((e) => `${e}:${t[e]}`)
                                            .join(";");
                                        i.insertRule(`${e}{${n}}`, i.cssRules.length);
                                    });
                                else {
                                    const t = Object.keys(n)
                                        .map((t) => `${t}:${n[t]}`)
                                        .join(";");
                                    i.insertRule(`${e}{${t}}`, i.cssRules.length);
                                }
                            });
                        }
                }
                addScript(t) {
                    return new Promise(
                        function (e, i) {
                            var n,
                                s = !1;
                            this.document
                                ? (((n = this.document.createElement("script")).type =
                                    "text/javascript"),
                                    (n.async = !0),
                                    (n.src = t),
                                    (n.onload = n.onreadystatechange =
                                        function () {
                                            s ||
                                                (this.readyState && "complete" != this.readyState) ||
                                                ((s = !0),
                                                    setTimeout(function () {
                                                        e(!0);
                                                    }, 1));
                                        }),
                                    this.document.head.appendChild(n))
                                : e(!1);
                        }.bind(this)
                    );
                }
                addClass(t) {
                    var e;
                    this.document &&
                        (e = this.content || this.document.body) &&
                        e.classList.add(t);
                }
                removeClass(t) {
                    var e;
                    this.document &&
                        (e = this.content || this.document.body) &&
                        e.classList.remove(t);
                }
                addEventListeners() {
                    this.document &&
                        ((this._triggerEvent = this.triggerEvent.bind(this)),
                            l.a.forEach(function (t) {
                                this.document.addEventListener(t, this._triggerEvent, {
                                    passive: !0,
                                });
                            }, this));
                }
                removeEventListeners() {
                    this.document &&
                        (l.a.forEach(function (t) {
                            this.document.removeEventListener(t, this._triggerEvent, {
                                passive: !0,
                            });
                        }, this),
                            (this._triggerEvent = void 0));
                }
                triggerEvent(t) {
                    this.emit(t.type, t);
                }
                addSelectionListeners() {
                    this.document &&
                        ((this._onSelectionChange = this.onSelectionChange.bind(this)),
                            this.document.addEventListener(
                                "selectionchange",
                                this._onSelectionChange,
                                { passive: !0 }
                            ));
                }
                removeSelectionListeners() {
                    this.document &&
                        (this.document.removeEventListener(
                            "selectionchange",
                            this._onSelectionChange,
                            { passive: !0 }
                        ),
                            (this._onSelectionChange = void 0));
                }
                onSelectionChange(t) {
                    this.selectionEndTimeout && clearTimeout(this.selectionEndTimeout),
                        (this.selectionEndTimeout = setTimeout(
                            function () {
                                var t = this.window.getSelection();
                                this.triggerSelectedEvent(t);
                            }.bind(this),
                            250
                        ));
                }
                triggerSelectedEvent(t) {
                    var e, i;
                    t &&
                        t.rangeCount > 0 &&
                        ((e = t.getRangeAt(0)).collapsed ||
                            ((i = new o.a(e, this.cfiBase).toString()),
                                this.emit(l.c.CONTENTS.SELECTED, i),
                                this.emit(l.c.CONTENTS.SELECTED_RANGE, e)));
                }
                range(t, e) {
                    return new o.a(t).toRange(this.document, e);
                }
                cfiFromRange(t, e) {
                    return new o.a(t, this.cfiBase, e).toString();
                }
                cfiFromNode(t, e) {
                    return new o.a(t, this.cfiBase, e).toString();
                }
                map(t) {
                    return new a.a(t).section();
                }
                size(t, e) {
                    var i = { scale: 1, scalable: "no" };
                    this.layoutStyle("scrolling"),
                        t >= 0 &&
                        (this.width(t),
                            (i.width = t),
                            this.css("padding", "0 " + t / 12 + "px")),
                        e >= 0 && (this.height(e), (i.height = e)),
                        this.css("margin", "0"),
                        this.css("box-sizing", "border-box"),
                        this.viewport(i);
                }
                columns(t, e, i, n, s) {
                    let o = Object(r.prefixed)("column-axis"),
                        a = Object(r.prefixed)("column-gap"),
                        h = Object(r.prefixed)("column-width"),
                        l = Object(r.prefixed)("column-fill"),
                        c =
                            0 === this.writingMode().indexOf("vertical")
                                ? "vertical"
                                : "horizontal";
                    this.layoutStyle("paginated"),
                        "rtl" === s && "horizontal" === c && this.direction(s),
                        this.width(t),
                        this.height(e),
                        this.viewport({ width: t, height: e, scale: 1, scalable: "no" }),
                        this.css("overflow-y", "hidden"),
                        this.css("margin", "0", !0),
                        "vertical" === c
                            ? (this.css("padding-top", n / 2 + "px", !0),
                                this.css("padding-bottom", n / 2 + "px", !0),
                                this.css("padding-left", "20px"),
                                this.css("padding-right", "20px"),
                                this.css(o, "vertical"))
                            : (this.css("padding-top", "20px"),
                                this.css("padding-bottom", "20px"),
                                this.css("padding-left", n / 2 + "px", !0),
                                this.css("padding-right", n / 2 + "px", !0),
                                this.css(o, "horizontal")),
                        this.css("box-sizing", "border-box"),
                        this.css("max-width", "inherit"),
                        this.css(l, "auto"),
                        this.css(a, n + "px"),
                        this.css(h, i + "px"),
                        this.css("-webkit-line-box-contain", "block glyphs replaced");
                }
                scaler(t, e, i) {
                    var n = "scale(" + t + ")",
                        s = "";
                    this.css("transform-origin", "top left"),
                        (e >= 0 || i >= 0) &&
                        (s = " translate(" + (e || 0) + "px, " + (i || 0) + "px )"),
                        this.css("transform", n + s);
                }
                fit(t, e, i) {
                    var n = this.viewport(),
                        s = parseInt(n.width),
                        r = parseInt(n.height),
                        o = t / s,
                        a = e / r,
                        h = o < a ? o : a;
                    if (
                        (this.layoutStyle("paginated"),
                            this.width(s),
                            this.height(r),
                            this.overflow("hidden"),
                            this.scaler(h, 0, 0),
                            this.css("background-size", s * h + "px " + r * h + "px"),
                            this.css("background-color", "transparent"),
                            i && i.properties.includes("page-spread-left"))
                    ) {
                        var l = t - s * h;
                        this.css("margin-left", l + "px");
                    }
                }
                direction(t) {
                    this.documentElement && (this.documentElement.style.direction = t);
                }
                mapPage(t, e, i, n, s) {
                    return new a.a(e, s).page(this, t, i, n);
                }
                linksHandler() {
                    Object(h.c)(this.content, (t) => {
                        this.emit(l.c.CONTENTS.LINK_CLICKED, t);
                    });
                }
                writingMode(t) {
                    let e = Object(r.prefixed)("writing-mode");
                    return (
                        t && this.documentElement && (this.documentElement.style[e] = t),
                        this.window.getComputedStyle(this.documentElement)[e] || ""
                    );
                }
                layoutStyle(t) {
                    return (
                        t &&
                        ((this._layoutStyle = t),
                            (navigator.epubReadingSystem.layoutStyle = this._layoutStyle)),
                        this._layoutStyle || "paginated"
                    );
                }
                epubReadingSystem(t, e) {
                    return (
                        (navigator.epubReadingSystem = {
                            name: t,
                            version: e,
                            layoutStyle: this.layoutStyle(),
                            hasFeature: function (t) {
                                switch (t) {
                                    case "dom-manipulation":
                                    case "layout-changes":
                                    case "touch-events":
                                    case "mouse-events":
                                    case "keyboard-events":
                                        return !0;
                                    case "spine-scripting":
                                    default:
                                        return !1;
                                }
                            },
                        }),
                        navigator.epubReadingSystem
                    );
                }
                destroy() {
                    this.removeListeners();
                }
            }
            s()(f.prototype), (e.a = f);
        },
        function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.Underline = e.Highlight = e.Mark = e.Pane = void 0);
            var n = (function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n);
                    }
                }
                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            })(),
                s = o(i(48)),
                r = o(i(49));
            function o(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function a(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function h(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            function l(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            e.Pane = (function () {
                function t(e) {
                    var i =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : document.body;
                    l(this, t),
                        (this.target = e),
                        (this.element = s.default.createElement("svg")),
                        (this.marks = []),
                        (this.element.style.position = "absolute"),
                        this.element.setAttribute("pointer-events", "none"),
                        r.default.proxyMouse(this.target, this.marks),
                        (this.container = i),
                        this.container.appendChild(this.element),
                        this.render();
                }
                return (
                    n(t, [
                        {
                            key: "addMark",
                            value: function (t) {
                                var e = s.default.createElement("g");
                                return (
                                    this.element.appendChild(e),
                                    t.bind(e, this.container),
                                    this.marks.push(t),
                                    t.render(),
                                    t
                                );
                            },
                        },
                        {
                            key: "removeMark",
                            value: function (t) {
                                var e = this.marks.indexOf(t);
                                if (-1 !== e) {
                                    var i = t.unbind();
                                    this.element.removeChild(i), this.marks.splice(e, 1);
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t, e, i, n;
                                !(function (t, e) {
                                    t.style.setProperty("top", e.top + "px", "important"),
                                        t.style.setProperty("left", e.left + "px", "important"),
                                        t.style.setProperty("height", e.height + "px", "important"),
                                        t.style.setProperty("width", e.width + "px", "important");
                                })(
                                    this.element,
                                    ((t = this.target),
                                        (e = this.container),
                                        (i = e.getBoundingClientRect()),
                                        (n = t.getBoundingClientRect()),
                                    {
                                        top: n.top - i.top,
                                        left: n.left - i.left,
                                        height: t.scrollHeight,
                                        width: t.scrollWidth,
                                    })
                                );
                                var s = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var a, h = this.marks[Symbol.iterator]();
                                        !(s = (a = h.next()).done);
                                        s = !0
                                    ) {
                                        a.value.render();
                                    }
                                } catch (t) {
                                    (r = !0), (o = t);
                                } finally {
                                    try {
                                        !s && h.return && h.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                            },
                        },
                    ]),
                    t
                );
            })();
            var c = (e.Mark = (function () {
                function t() {
                    l(this, t), (this.element = null);
                }
                return (
                    n(t, [
                        {
                            key: "bind",
                            value: function (t, e) {
                                (this.element = t), (this.container = e);
                            },
                        },
                        {
                            key: "unbind",
                            value: function () {
                                var t = this.element;
                                return (this.element = null), t;
                            },
                        },
                        { key: "render", value: function () { } },
                        {
                            key: "dispatchEvent",
                            value: function (t) {
                                this.element && this.element.dispatchEvent(t);
                            },
                        },
                        {
                            key: "getBoundingClientRect",
                            value: function () {
                                return this.element.getBoundingClientRect();
                            },
                        },
                        {
                            key: "getClientRects",
                            value: function () {
                                for (var t = [], e = this.element.firstChild; e;)
                                    t.push(e.getBoundingClientRect()), (e = e.nextSibling);
                                return t;
                            },
                        },
                        {
                            key: "filteredRanges",
                            value: function () {
                                var t = Array.from(this.range.getClientRects());
                                return t.filter(function (e) {
                                    for (var i = 0; i < t.length; i++) {
                                        if (t[i] === e) return !0;
                                        if (
                                            ((n = t[i]),
                                                (s = e).right <= n.right &&
                                                s.left >= n.left &&
                                                s.top >= n.top &&
                                                s.bottom <= n.bottom)
                                        )
                                            return !1;
                                    }
                                    var n, s;
                                    return !0;
                                });
                            },
                        },
                    ]),
                    t
                );
            })()),
                d = (e.Highlight = (function (t) {
                    function e(t, i, n, s) {
                        l(this, e);
                        var r = a(
                            this,
                            (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                        );
                        return (
                            (r.range = t),
                            (r.className = i),
                            (r.data = n || {}),
                            (r.attributes = s || {}),
                            r
                        );
                    }
                    return (
                        h(e, t),
                        n(e, [
                            {
                                key: "bind",
                                value: function (t, i) {
                                    for (var n in ((function t(e, i, n) {
                                        null === e && (e = Function.prototype);
                                        var s = Object.getOwnPropertyDescriptor(e, i);
                                        if (void 0 === s) {
                                            var r = Object.getPrototypeOf(e);
                                            return null === r ? void 0 : t(r, i, n);
                                        }
                                        if ("value" in s) return s.value;
                                        var o = s.get;
                                        return void 0 !== o ? o.call(n) : void 0;
                                    })(
                                        e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                                        "bind",
                                        this
                                    ).call(this, t, i),
                                        this.data))
                                        this.data.hasOwnProperty(n) &&
                                            (this.element.dataset[n] = this.data[n]);
                                    for (var n in this.attributes)
                                        this.attributes.hasOwnProperty(n) &&
                                            this.element.setAttribute(n, this.attributes[n]);
                                    this.className && this.element.classList.add(this.className);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    for (; this.element.firstChild;)
                                        this.element.removeChild(this.element.firstChild);
                                    for (
                                        var t = this.element.ownerDocument.createDocumentFragment(),
                                        e = this.filteredRanges(),
                                        i = this.element.getBoundingClientRect(),
                                        n = this.container.getBoundingClientRect(),
                                        r = 0,
                                        o = e.length;
                                        r < o;
                                        r++
                                    ) {
                                        var a = e[r],
                                            h = s.default.createElement("rect");
                                        h.setAttribute("x", a.left - i.left + n.left),
                                            h.setAttribute("y", a.top - i.top + n.top),
                                            h.setAttribute("height", a.height),
                                            h.setAttribute("width", a.width),
                                            t.appendChild(h);
                                    }
                                    this.element.appendChild(t);
                                },
                            },
                        ]),
                        e
                    );
                })(c));
            e.Underline = (function (t) {
                function e(t, i, n, s) {
                    return (
                        l(this, e),
                        a(
                            this,
                            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, n, s)
                        )
                    );
                }
                return (
                    h(e, t),
                    n(e, [
                        {
                            key: "render",
                            value: function () {
                                for (; this.element.firstChild;)
                                    this.element.removeChild(this.element.firstChild);
                                for (
                                    var t = this.element.ownerDocument.createDocumentFragment(),
                                    e = this.filteredRanges(),
                                    i = this.element.getBoundingClientRect(),
                                    n = this.container.getBoundingClientRect(),
                                    r = 0,
                                    o = e.length;
                                    r < o;
                                    r++
                                ) {
                                    var a = e[r],
                                        h = s.default.createElement("rect");
                                    h.setAttribute("x", a.left - i.left + n.left),
                                        h.setAttribute("y", a.top - i.top + n.top),
                                        h.setAttribute("height", a.height),
                                        h.setAttribute("width", a.width),
                                        h.setAttribute("fill", "none");
                                    var l = s.default.createElement("line");
                                    l.setAttribute("x1", a.left - i.left + n.left),
                                        l.setAttribute("x2", a.left - i.left + n.left + a.width),
                                        l.setAttribute("y1", a.top - i.top + n.top + a.height - 1),
                                        l.setAttribute("y2", a.top - i.top + n.top + a.height - 1),
                                        l.setAttribute("stroke-width", 1),
                                        l.setAttribute("stroke", "black"),
                                        l.setAttribute("stroke-linecap", "square"),
                                        t.appendChild(h),
                                        t.appendChild(l);
                                }
                                this.element.appendChild(t);
                            },
                        },
                    ]),
                    e
                );
            })(d);
        },
        function (e, i) {
            e.exports = t;
        },
        function (t, e, i) {
            "use strict";
            var n = i(3),
                s = i.n(n),
                r = i(0),
                o = i(6),
                a = i(2),
                h = i(9),
                l = i(1);
            class c {
                constructor(t) {
                    (this.settings = t),
                        (this.name = t.layout || "reflowable"),
                        (this._spread = "none" !== t.spread),
                        (this._minSpreadWidth = t.minSpreadWidth || 800),
                        (this._evenSpreads = t.evenSpreads || !1),
                        "scrolled" === t.flow ||
                            "scrolled-continuous" === t.flow ||
                            "scrolled-doc" === t.flow
                            ? (this._flow = "scrolled")
                            : (this._flow = "paginated"),
                        (this.width = 0),
                        (this.height = 0),
                        (this.spreadWidth = 0),
                        (this.delta = 0),
                        (this.columnWidth = 0),
                        (this.gap = 0),
                        (this.divisor = 1),
                        (this.props = {
                            name: this.name,
                            spread: this._spread,
                            flow: this._flow,
                            width: 0,
                            height: 0,
                            spreadWidth: 0,
                            delta: 0,
                            columnWidth: 0,
                            gap: 0,
                            divisor: 1,
                        });
                }
                flow(t) {
                    return (
                        void 0 !== t &&
                        ((this._flow =
                            "scrolled" === t ||
                                "scrolled-continuous" === t ||
                                "scrolled-doc" === t
                                ? "scrolled"
                                : "paginated"),
                            this.update({ flow: this._flow })),
                        this._flow
                    );
                }
                spread(t, e) {
                    return (
                        t &&
                        ((this._spread = "none" !== t),
                            this.update({ spread: this._spread })),
                        e >= 0 && (this._minSpreadWidth = e),
                        this._spread
                    );
                }
                calculate(t, e, i) {
                    var n,
                        s,
                        r,
                        o,
                        a = 1,
                        h = i || 0,
                        l = t,
                        c = e,
                        d = Math.floor(l / 12);
                    (a = this._spread && l >= this._minSpreadWidth ? 2 : 1),
                        "reflowable" !== this.name ||
                        "paginated" !== this._flow ||
                        i >= 0 ||
                        (h = d % 2 == 0 ? d : d - 1),
                        "pre-paginated" === this.name && (h = 0),
                        a > 1 ? (r = (n = l / a - h) + h) : ((n = l), (r = l)),
                        "pre-paginated" === this.name && a > 1 && (l = n),
                        (s = n * a + h),
                        (o = l),
                        (this.width = l),
                        (this.height = c),
                        (this.spreadWidth = s),
                        (this.pageWidth = r),
                        (this.delta = o),
                        (this.columnWidth = n),
                        (this.gap = h),
                        (this.divisor = a),
                        this.update({
                            width: l,
                            height: c,
                            spreadWidth: s,
                            pageWidth: r,
                            delta: o,
                            columnWidth: n,
                            gap: h,
                            divisor: a,
                        });
                }
                format(t, e, i) {
                    return "pre-paginated" === this.name
                        ? t.fit(this.columnWidth, this.height, e)
                        : "paginated" === this._flow
                            ? t.columns(
                                this.width,
                                this.height,
                                this.columnWidth,
                                this.gap,
                                this.settings.direction
                            )
                            : i && "horizontal" === i
                                ? t.size(null, this.height)
                                : t.size(this.width, null);
                }
                count(t, e) {
                    let i, n;
                    return (
                        "pre-paginated" === this.name
                            ? ((i = 1), (n = 1))
                            : "paginated" === this._flow
                                ? ((e = e || this.delta),
                                    (i = Math.ceil(t / e)),
                                    (n = i * this.divisor))
                                : ((e = e || this.height), (i = Math.ceil(t / e)), (n = i)),
                        { spreads: i, pages: n }
                    );
                }
                update(t) {
                    if (
                        (Object.keys(t).forEach((e) => {
                            this.props[e] === t[e] && delete t[e];
                        }),
                            Object.keys(t).length > 0)
                    ) {
                        let e = Object(r.extend)(this.props, t);
                        this.emit(l.c.LAYOUT.UPDATED, e, t);
                    }
                }
            }
            s()(c.prototype);
            var d = c,
                u = i(5);
            var f = class {
                constructor(t) {
                    (this.rendition = t),
                        (this._themes = {
                            default: { rules: {}, url: "", serialized: "" },
                        }),
                        (this._overrides = {}),
                        (this._current = "default"),
                        (this._injected = []),
                        this.rendition.hooks.content.register(this.inject.bind(this)),
                        this.rendition.hooks.content.register(this.overrides.bind(this));
                }
                register() {
                    if (0 !== arguments.length)
                        return 1 === arguments.length && "object" == typeof arguments[0]
                            ? this.registerThemes(arguments[0])
                            : 1 === arguments.length && "string" == typeof arguments[0]
                                ? this.default(arguments[0])
                                : 2 === arguments.length && "string" == typeof arguments[1]
                                    ? this.registerUrl(arguments[0], arguments[1])
                                    : 2 === arguments.length && "object" == typeof arguments[1]
                                        ? this.registerRules(arguments[0], arguments[1])
                                        : void 0;
                }
                default(t) {
                    if (t)
                        return "string" == typeof t
                            ? this.registerUrl("default", t)
                            : "object" == typeof t
                                ? this.registerRules("default", t)
                                : void 0;
                }
                registerThemes(t) {
                    for (var e in t)
                        t.hasOwnProperty(e) &&
                            ("string" == typeof t[e]
                                ? this.registerUrl(e, t[e])
                                : this.registerRules(e, t[e]));
                }
                registerCss(t, e) {
                    (this._themes[t] = { serialized: e }),
                        (this._injected[t] || "default" == t) && this.update(t);
                }
                registerUrl(t, e) {
                    var i = new u.a(e);
                    (this._themes[t] = { url: i.toString() }),
                        (this._injected[t] || "default" == t) && this.update(t);
                }
                registerRules(t, e) {
                    (this._themes[t] = { rules: e }),
                        (this._injected[t] || "default" == t) && this.update(t);
                }
                select(t) {
                    var e = this._current;
                    (this._current = t),
                        this.update(t),
                        this.rendition.getContents().forEach((i) => {
                            i.removeClass(e), i.addClass(t);
                        });
                }
                update(t) {
                    this.rendition.getContents().forEach((e) => {
                        this.add(t, e);
                    });
                }
                inject(t) {
                    var e,
                        i = [],
                        n = this._themes;
                    for (var s in n)
                        !n.hasOwnProperty(s) ||
                            (s !== this._current && "default" !== s) ||
                            ((((e = n[s]).rules && Object.keys(e.rules).length > 0) ||
                                (e.url && -1 === i.indexOf(e.url))) &&
                                this.add(s, t),
                                this._injected.push(s));
                    "default" != this._current && t.addClass(this._current);
                }
                add(t, e) {
                    var i = this._themes[t];
                    i &&
                        e &&
                        (i.url
                            ? e.addStylesheet(i.url)
                            : i.serialized
                                ? (e.addStylesheetCss(i.serialized, t), (i.injected = !0))
                                : i.rules &&
                                (e.addStylesheetRules(i.rules, t), (i.injected = !0)));
                }
                override(t, e, i) {
                    var n = this.rendition.getContents();
                    (this._overrides[t] = { value: e, priority: !0 === i }),
                        n.forEach((e) => {
                            e.css(t, this._overrides[t].value, this._overrides[t].priority);
                        });
                }
                removeOverride(t) {
                    var e = this.rendition.getContents();
                    delete this._overrides[t],
                        e.forEach((e) => {
                            e.css(t);
                        });
                }
                overrides(t) {
                    var e = this._overrides;
                    for (var i in e)
                        e.hasOwnProperty(i) && t.css(i, e[i].value, e[i].priority);
                }
                fontSize(t) {
                    this.override("font-size", t);
                }
                font(t) {
                    this.override("font-family", t, !0);
                }
                destroy() {
                    (this.rendition = void 0),
                        (this._themes = void 0),
                        (this._overrides = void 0),
                        (this._current = void 0),
                        (this._injected = void 0);
                }
            };
            i(12);
            class p {
                constructor({
                    type: t,
                    cfiRange: e,
                    data: i,
                    sectionIndex: n,
                    cb: s,
                    className: r,
                    styles: o,
                }) {
                    (this.type = t),
                        (this.cfiRange = e),
                        (this.data = i),
                        (this.sectionIndex = n),
                        (this.mark = void 0),
                        (this.cb = s),
                        (this.className = r),
                        (this.styles = o);
                }
                update(t) {
                    this.data = t;
                }
                attach(t) {
                    let e,
                        {
                            cfiRange: i,
                            data: n,
                            type: s,
                            mark: r,
                            cb: o,
                            className: a,
                            styles: h,
                        } = this;
                    return (
                        "highlight" === s
                            ? (e = t.highlight(i, n, o, a, h))
                            : "underline" === s
                                ? (e = t.underline(i, n, o, a, h))
                                : "mark" === s && (e = t.mark(i, n, o)),
                        (this.mark = e),
                        this.emit(l.c.ANNOTATION.ATTACH, e),
                        e
                    );
                }
                detach(t) {
                    let e,
                        { cfiRange: i, type: n } = this;
                    return (
                        t &&
                        ("highlight" === n
                            ? (e = t.unhighlight(i))
                            : "underline" === n
                                ? (e = t.ununderline(i))
                                : "mark" === n && (e = t.unmark(i))),
                        (this.mark = void 0),
                        this.emit(l.c.ANNOTATION.DETACH, e),
                        e
                    );
                }
                text() { }
            }
            s()(p.prototype);
            var g = class {
                constructor(t) {
                    (this.rendition = t),
                        (this.highlights = []),
                        (this.underlines = []),
                        (this.marks = []),
                        (this._annotations = {}),
                        (this._annotationsBySectionIndex = {}),
                        this.rendition.hooks.render.register(this.inject.bind(this)),
                        this.rendition.hooks.unloaded.register(this.clear.bind(this));
                }
                add(t, e, i, n, s, r) {
                    let o = encodeURI(e + t),
                        h = new a.a(e).spinePos,
                        l = new p({
                            type: t,
                            cfiRange: e,
                            data: i,
                            sectionIndex: h,
                            cb: n,
                            className: s,
                            styles: r,
                        });
                    return (
                        (this._annotations[o] = l),
                        h in this._annotationsBySectionIndex
                            ? this._annotationsBySectionIndex[h].push(o)
                            : (this._annotationsBySectionIndex[h] = [o]),
                        this.rendition.views().forEach((t) => {
                            l.sectionIndex === t.index && l.attach(t);
                        }),
                        l
                    );
                }
                remove(t, e) {
                    let i = encodeURI(t + e);
                    if (i in this._annotations) {
                        let t = this._annotations[i];
                        if (e && t.type !== e) return;
                        this.rendition.views().forEach((e) => {
                            this._removeFromAnnotationBySectionIndex(t.sectionIndex, i),
                                t.sectionIndex === e.index && t.detach(e);
                        }),
                            delete this._annotations[i];
                    }
                }
                _removeFromAnnotationBySectionIndex(t, e) {
                    this._annotationsBySectionIndex[t] = this._annotationsAt(t).filter(
                        (t) => t !== e
                    );
                }
                _annotationsAt(t) {
                    return this._annotationsBySectionIndex[t];
                }
                highlight(t, e, i, n, s) {
                    return this.add("highlight", t, e, i, n, s);
                }
                underline(t, e, i, n, s) {
                    return this.add("underline", t, e, i, n, s);
                }
                mark(t, e, i) {
                    return this.add("mark", t, e, i);
                }
                each() {
                    return this._annotations.forEach.apply(
                        this._annotations,
                        arguments
                    );
                }
                inject(t) {
                    let e = t.index;
                    if (e in this._annotationsBySectionIndex) {
                        this._annotationsBySectionIndex[e].forEach((e) => {
                            this._annotations[e].attach(t);
                        });
                    }
                }
                clear(t) {
                    let e = t.index;
                    if (e in this._annotationsBySectionIndex) {
                        this._annotationsBySectionIndex[e].forEach((e) => {
                            this._annotations[e].detach(t);
                        });
                    }
                }
                show() { }
                hide() { }
            },
                m = i(19),
                v = i(10),
                y = i(21);
            class b {
                constructor(t, e) {
                    (this.settings = Object(r.extend)(this.settings || {}, {
                        width: null,
                        height: null,
                        ignoreClass: "",
                        manager: "default",
                        view: "iframe",
                        flow: null,
                        layout: null,
                        spread: null,
                        minSpreadWidth: 800,
                        stylesheet: null,
                        resizeOnOrientationChange: !0,
                        script: null,
                        snap: !1,
                        defaultDirection: "ltr",
                    })),
                        Object(r.extend)(this.settings, e),
                        "object" == typeof this.settings.manager &&
                        (this.manager = this.settings.manager),
                        (this.book = t),
                        (this.hooks = {}),
                        (this.hooks.display = new o.a(this)),
                        (this.hooks.serialize = new o.a(this)),
                        (this.hooks.content = new o.a(this)),
                        (this.hooks.unloaded = new o.a(this)),
                        (this.hooks.layout = new o.a(this)),
                        (this.hooks.render = new o.a(this)),
                        (this.hooks.show = new o.a(this)),
                        this.hooks.content.register(this.handleLinks.bind(this)),
                        this.hooks.content.register(this.passEvents.bind(this)),
                        this.hooks.content.register(this.adjustImages.bind(this)),
                        this.book.spine.hooks.content.register(
                            this.injectIdentifier.bind(this)
                        ),
                        this.settings.stylesheet &&
                        this.book.spine.hooks.content.register(
                            this.injectStylesheet.bind(this)
                        ),
                        this.settings.script &&
                        this.book.spine.hooks.content.register(
                            this.injectScript.bind(this)
                        ),
                        (this.themes = new f(this)),
                        (this.annotations = new g(this)),
                        (this.epubcfi = new a.a()),
                        (this.q = new h.a(this)),
                        (this.location = void 0),
                        this.q.enqueue(this.book.opened),
                        (this.starting = new r.defer()),
                        (this.started = this.starting.promise),
                        this.q.enqueue(this.start);
                }
                setManager(t) {
                    this.manager = t;
                }
                requireManager(t) {
                    return "string" == typeof t && "default" === t
                        ? v.a
                        : "string" == typeof t && "continuous" === t
                            ? y.a
                            : t;
                }
                requireView(t) {
                    return "string" == typeof t && "iframe" === t ? m.a : t;
                }
                start() {
                    switch (
                    (this.settings.layout ||
                        ("pre-paginated" !== this.book.package.metadata.layout &&
                            "true" !== this.book.displayOptions.fixedLayout) ||
                        (this.settings.layout = "pre-paginated"),
                        this.book.package.metadata.spread)
                    ) {
                        case "none":
                            this.settings.spread = "none";
                            break;
                        case "both":
                            this.settings.spread = !0;
                    }
                    this.manager ||
                        ((this.ViewManager = this.requireManager(this.settings.manager)),
                            (this.View = this.requireView(this.settings.view)),
                            (this.manager = new this.ViewManager({
                                view: this.View,
                                queue: this.q,
                                request: this.book.load.bind(this.book),
                                settings: this.settings,
                            }))),
                        this.direction(
                            this.book.package.metadata.direction ||
                            this.settings.defaultDirection
                        ),
                        (this.settings.globalLayoutProperties =
                            this.determineLayoutProperties(this.book.package.metadata)),
                        this.flow(this.settings.globalLayoutProperties.flow),
                        this.layout(this.settings.globalLayoutProperties),
                        this.manager.on(l.c.MANAGERS.ADDED, this.afterDisplayed.bind(this)),
                        this.manager.on(l.c.MANAGERS.REMOVED, this.afterRemoved.bind(this)),
                        this.manager.on(l.c.MANAGERS.RESIZED, this.onResized.bind(this)),
                        this.manager.on(
                            l.c.MANAGERS.ORIENTATION_CHANGE,
                            this.onOrientationChange.bind(this)
                        ),
                        this.manager.on(
                            l.c.MANAGERS.SCROLLED,
                            this.reportLocation.bind(this)
                        ),
                        this.emit(l.c.RENDITION.STARTED),
                        this.starting.resolve();
                }
                attachTo(t) {
                    return this.q.enqueue(
                        function () {
                            this.manager.render(t, {
                                width: this.settings.width,
                                height: this.settings.height,
                            }),
                                this.emit(l.c.RENDITION.ATTACHED);
                        }.bind(this)
                    );
                }
                display(t) {
                    return (
                        this.displaying && this.displaying.resolve(),
                        this.q.enqueue(this._display, t)
                    );
                }
                _display(t) {
                    if (this.book) {
                        this.epubcfi.isCfiString(t);
                        var e,
                            i = new r.defer(),
                            n = i.promise;
                        return (
                            (this.displaying = i),
                            this.book.locations.length() &&
                            Object(r.isFloat)(t) &&
                            (t = this.book.locations.cfiFromPercentage(parseFloat(t))),
                            (e = this.book.spine.get(t))
                                ? (this.manager.display(e, t).then(
                                    () => {
                                        i.resolve(e),
                                            (this.displaying = void 0),
                                            this.emit(l.c.RENDITION.DISPLAYED, e),
                                            this.reportLocation();
                                    },
                                    (t) => {
                                        this.emit(l.c.RENDITION.DISPLAY_ERROR, t);
                                    }
                                ),
                                    n)
                                : (i.reject(new Error("No Section Found")), n)
                        );
                    }
                }
                afterDisplayed(t) {
                    t.on(l.c.VIEWS.MARK_CLICKED, (e, i) =>
                        this.triggerMarkEvent(e, i, t.contents)
                    ),
                        this.hooks.render.trigger(t, this).then(() => {
                            t.contents
                                ? this.hooks.content.trigger(t.contents, this).then(() => {
                                    this.emit(l.c.RENDITION.RENDERED, t.section, t);
                                })
                                : this.emit(l.c.RENDITION.RENDERED, t.section, t);
                        });
                }
                afterRemoved(t) {
                    this.hooks.unloaded.trigger(t, this).then(() => {
                        this.emit(l.c.RENDITION.REMOVED, t.section, t);
                    });
                }
                onResized(t, e) {
                    this.emit(
                        l.c.RENDITION.RESIZED,
                        { width: t.width, height: t.height },
                        e
                    ),
                        this.location &&
                        this.location.start &&
                        this.display(e || this.location.start.cfi);
                }
                onOrientationChange(t) {
                    this.emit(l.c.RENDITION.ORIENTATION_CHANGE, t);
                }
                moveTo(t) {
                    this.manager.moveTo(t);
                }
                resize(t, e, i) {
                    t && (this.settings.width = t),
                        e && (this.settings.height = e),
                        this.manager.resize(t, e, i);
                }
                clear() {
                    this.manager.clear();
                }
                next() {
                    return this.q
                        .enqueue(this.manager.next.bind(this.manager))
                        .then(this.reportLocation.bind(this));
                }
                prev() {
                    return this.q
                        .enqueue(this.manager.prev.bind(this.manager))
                        .then(this.reportLocation.bind(this));
                }
                determineLayoutProperties(t) {
                    var e = this.settings.layout || t.layout || "reflowable",
                        i = this.settings.spread || t.spread || "auto",
                        n = this.settings.orientation || t.orientation || "auto",
                        s = this.settings.flow || t.flow || "auto",
                        r = t.viewport || "",
                        o = this.settings.minSpreadWidth || t.minSpreadWidth || 800,
                        a = this.settings.direction || t.direction || "ltr";
                    return (
                        (0 === this.settings.width || this.settings.width > 0) &&
                        (0 === this.settings.height || this.settings.height),
                        {
                            layout: e,
                            spread: i,
                            orientation: n,
                            flow: s,
                            viewport: r,
                            minSpreadWidth: o,
                            direction: a,
                        }
                    );
                }
                flow(t) {
                    var e = t;
                    ("scrolled" !== t &&
                        "scrolled-doc" !== t &&
                        "scrolled-continuous" !== t) ||
                        (e = "scrolled"),
                        ("auto" !== t && "paginated" !== t) || (e = "paginated"),
                        (this.settings.flow = t),
                        this._layout && this._layout.flow(e),
                        this.manager &&
                        this._layout &&
                        this.manager.applyLayout(this._layout),
                        this.manager && this.manager.updateFlow(e),
                        this.manager &&
                        this.manager.isRendered() &&
                        this.location &&
                        (this.manager.clear(), this.display(this.location.start.cfi));
                }
                layout(t) {
                    return (
                        t &&
                        ((this._layout = new d(t)),
                            this._layout.spread(t.spread, this.settings.minSpreadWidth),
                            this._layout.on(l.c.LAYOUT.UPDATED, (t, e) => {
                                this.emit(l.c.RENDITION.LAYOUT, t, e);
                            })),
                        this.manager &&
                        this._layout &&
                        this.manager.applyLayout(this._layout),
                        this._layout
                    );
                }
                spread(t, e) {
                    (this.settings.spread = t),
                        e && (this.settings.minSpreadWidth = e),
                        this._layout && this._layout.spread(t, e),
                        this.manager &&
                        this.manager.isRendered() &&
                        this.manager.updateLayout();
                }
                direction(t) {
                    (this.settings.direction = t || "ltr"),
                        this.manager && this.manager.direction(this.settings.direction),
                        this.manager &&
                        this.manager.isRendered() &&
                        this.location &&
                        (this.manager.clear(), this.display(this.location.start.cfi));
                }
                reportLocation() {
                    return this.q.enqueue(
                        function () {
                            requestAnimationFrame(
                                function () {
                                    var t = this.manager.currentLocation();
                                    if (t && t.then && "function" == typeof t.then)
                                        t.then(
                                            function (t) {
                                                let e = this.located(t);
                                                e &&
                                                    e.start &&
                                                    e.end &&
                                                    ((this.location = e),
                                                        this.emit(l.c.RENDITION.LOCATION_CHANGED, {
                                                            index: this.location.start.index,
                                                            href: this.location.start.href,
                                                            start: this.location.start.cfi,
                                                            end: this.location.end.cfi,
                                                            percentage: this.location.start.percentage,
                                                        }),
                                                        this.emit(l.c.RENDITION.RELOCATED, this.location));
                                            }.bind(this)
                                        );
                                    else if (t) {
                                        let e = this.located(t);
                                        if (!e || !e.start || !e.end) return;
                                        (this.location = e),
                                            this.emit(l.c.RENDITION.LOCATION_CHANGED, {
                                                index: this.location.start.index,
                                                href: this.location.start.href,
                                                start: this.location.start.cfi,
                                                end: this.location.end.cfi,
                                                percentage: this.location.start.percentage,
                                            }),
                                            this.emit(l.c.RENDITION.RELOCATED, this.location);
                                    }
                                }.bind(this)
                            );
                        }.bind(this)
                    );
                }
                currentLocation() {
                    var t = this.manager.currentLocation();
                    if (t && t.then && "function" == typeof t.then)
                        t.then(
                            function (t) {
                                return this.located(t);
                            }.bind(this)
                        );
                    else if (t) {
                        return this.located(t);
                    }
                }
                located(t) {
                    if (!t.length) return {};
                    let e = t[0],
                        i = t[t.length - 1],
                        n = {
                            start: {
                                index: e.index,
                                href: e.href,
                                cfi: e.mapping.start,
                                displayed: { page: e.pages[0] || 1, total: e.totalPages },
                            },
                            end: {
                                index: i.index,
                                href: i.href,
                                cfi: i.mapping.end,
                                displayed: {
                                    page: i.pages[i.pages.length - 1] || 1,
                                    total: i.totalPages,
                                },
                            },
                        },
                        s = this.book.locations.locationFromCfi(e.mapping.start),
                        r = this.book.locations.locationFromCfi(i.mapping.end);
                    null != s &&
                        ((n.start.location = s),
                            (n.start.percentage =
                                this.book.locations.percentageFromLocation(s))),
                        null != r &&
                        ((n.end.location = r),
                            (n.end.percentage =
                                this.book.locations.percentageFromLocation(r)));
                    let o = this.book.pageList.pageFromCfi(e.mapping.start),
                        a = this.book.pageList.pageFromCfi(i.mapping.end);
                    return (
                        -1 != o && (n.start.page = o),
                        -1 != a && (n.end.page = a),
                        i.index === this.book.spine.last().index &&
                        n.end.displayed.page >= n.end.displayed.total &&
                        (n.atEnd = !0),
                        e.index === this.book.spine.first().index &&
                        1 === n.start.displayed.page &&
                        (n.atStart = !0),
                        n
                    );
                }
                destroy() {
                    this.manager && this.manager.destroy(), (this.book = void 0);
                }
                passEvents(t) {
                    l.a.forEach((e) => {
                        t.on(e, (e) => this.triggerViewEvent(e, t));
                    }),
                        t.on(l.c.CONTENTS.SELECTED, (e) => this.triggerSelectedEvent(e, t));
                }
                triggerViewEvent(t, e) {
                    this.emit(t.type, t, e);
                }
                triggerSelectedEvent(t, e) {
                    this.emit(l.c.RENDITION.SELECTED, t, e);
                }
                triggerMarkEvent(t, e, i) {
                    this.emit(l.c.RENDITION.MARK_CLICKED, t, e, i);
                }
                getRange(t, e) {
                    var i = new a.a(t),
                        n = this.manager.visible().filter(function (t) {
                            if (i.spinePos === t.index) return !0;
                        });
                    if (n.length) return n[0].contents.range(i, e);
                }
                adjustImages(t) {
                    if ("pre-paginated" === this._layout.name)
                        return new Promise(function (t) {
                            t();
                        });
                    let e = t.window.getComputedStyle(t.content, null),
                        i =
                            0.95 *
                            (t.content.offsetHeight -
                                (parseFloat(e.paddingTop) + parseFloat(e.paddingBottom))),
                        n = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
                    return (
                        t.addStylesheetRules({
                            img: {
                                "max-width":
                                    (this._layout.columnWidth
                                        ? this._layout.columnWidth - n + "px"
                                        : "100%") + "!important",
                                "max-height": i + "px!important",
                                "object-fit": "contain",
                                "page-break-inside": "avoid",
                                "break-inside": "avoid",
                                "box-sizing": "border-box",
                            },
                            svg: {
                                "max-width":
                                    (this._layout.columnWidth
                                        ? this._layout.columnWidth - n + "px"
                                        : "100%") + "!important",
                                "max-height": i + "px!important",
                                "page-break-inside": "avoid",
                                "break-inside": "avoid",
                            },
                        }),
                        new Promise(function (t, e) {
                            setTimeout(function () {
                                t();
                            }, 1);
                        })
                    );
                }
                getContents() {
                    return this.manager ? this.manager.getContents() : [];
                }
                views() {
                    return (this.manager ? this.manager.views : void 0) || [];
                }
                handleLinks(t) {
                    t &&
                        t.on(l.c.CONTENTS.LINK_CLICKED, (t) => {
                            let e = this.book.path.relative(t);
                            this.display(e);
                        });
                }
                injectStylesheet(t, e) {
                    let i = t.createElement("link");
                    i.setAttribute("type", "text/css"),
                        i.setAttribute("rel", "stylesheet"),
                        i.setAttribute("href", this.settings.stylesheet),
                        t.getElementsByTagName("head")[0].appendChild(i);
                }
                injectScript(t, e) {
                    let i = t.createElement("script");
                    i.setAttribute("type", "text/javascript"),
                        i.setAttribute("src", this.settings.script),
                        (i.textContent = " "),
                        t.getElementsByTagName("head")[0].appendChild(i);
                }
                injectIdentifier(t, e) {
                    let i = this.book.packaging.metadata.identifier,
                        n = t.createElement("meta");
                    n.setAttribute("name", "dc.relation.ispartof"),
                        i && n.setAttribute("content", i),
                        t.getElementsByTagName("head")[0].appendChild(n);
                }
            }
            s()(b.prototype);
            e.a = b;
        },
        function (t, e) {
            var i;
            i = (function () {
                return this;
            })();
            try {
                i = i || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (i = window);
            }
            t.exports = i;
        },
        function (t, e, i) {
            "use strict";
            var n = i(41)();
            t.exports = function (t) {
                return t !== n && null !== t;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(3),
                s = i.n(n),
                r = i(0),
                o = i(2),
                a = i(12),
                h = i(1),
                l = i(13);
            class c {
                constructor(t, e) {
                    (this.settings = Object(r.extend)(
                        {
                            ignoreClass: "",
                            axis: void 0,
                            direction: void 0,
                            width: 0,
                            height: 0,
                            layout: void 0,
                            globalLayoutProperties: {},
                            method: void 0,
                            forceRight: !1,
                        },
                        e || {}
                    )),
                        (this.id = "epubjs-view-" + Object(r.uuid)()),
                        (this.section = t),
                        (this.index = t.index),
                        (this.element = this.container(this.settings.axis)),
                        (this.added = !1),
                        (this.displayed = !1),
                        (this.rendered = !1),
                        (this.fixedWidth = 0),
                        (this.fixedHeight = 0),
                        (this.epubcfi = new o.a()),
                        (this.layout = this.settings.layout),
                        (this.pane = void 0),
                        (this.highlights = {}),
                        (this.underlines = {}),
                        (this.marks = {});
                }
                container(t) {
                    var e = document.createElement("div");
                    return (
                        e.classList.add("epub-view"),
                        (e.style.height = "0px"),
                        (e.style.width = "0px"),
                        (e.style.overflow = "hidden"),
                        (e.style.position = "relative"),
                        (e.style.display = "block"),
                        (e.style.flex = t && "horizontal" == t ? "none" : "initial"),
                        e
                    );
                }
                create() {
                    return (
                        this.iframe ||
                        (this.element || (this.element = this.createContainer()),
                            (this.iframe = document.createElement("iframe")),
                            (this.iframe.id = this.id),
                            (this.iframe.scrolling = "no"),
                            (this.iframe.style.overflow = "hidden"),
                            (this.iframe.seamless = "seamless"),
                            (this.iframe.style.border = "none"),
                            this.iframe.setAttribute("enable-annotation", "true"),
                            (this.resizing = !0),
                            (this.element.style.visibility = "hidden"),
                            (this.iframe.style.visibility = "hidden"),
                            (this.iframe.style.width = "0"),
                            (this.iframe.style.height = "0"),
                            (this._width = 0),
                            (this._height = 0),
                            this.element.setAttribute("ref", this.index),
                            (this.added = !0),
                            (this.elementBounds = Object(r.bounds)(this.element)),
                            "srcdoc" in this.iframe
                                ? (this.supportsSrcdoc = !0)
                                : (this.supportsSrcdoc = !1),
                            this.settings.method ||
                            (this.settings.method = this.supportsSrcdoc
                                ? "srcdoc"
                                : "write")),
                        this.iframe
                    );
                }
                render(t, e) {
                    return (
                        this.create(),
                        this.size(),
                        this.sectionRender || (this.sectionRender = this.section.render(t)),
                        this.sectionRender
                            .then(
                                function (t) {
                                    return this.load(t);
                                }.bind(this)
                            )
                            .then(
                                function () {
                                    let t,
                                        e = this.contents.writingMode();
                                    return (
                                        (t =
                                            "scrolled" === this.settings.flow
                                                ? 0 === e.indexOf("vertical")
                                                    ? "horizontal"
                                                    : "vertical"
                                                : 0 === e.indexOf("vertical")
                                                    ? "vertical"
                                                    : "horizontal"),
                                        0 === e.indexOf("vertical") &&
                                        "paginated" === this.settings.flow &&
                                        (this.layout.delta = this.layout.height),
                                        this.setAxis(t),
                                        this.emit(h.c.VIEWS.AXIS, t),
                                        this.setWritingMode(e),
                                        this.emit(h.c.VIEWS.WRITING_MODE, e),
                                        this.layout.format(this.contents, this.section, this.axis),
                                        this.addListeners(),
                                        new Promise((t, e) => {
                                            this.expand(),
                                                this.settings.forceRight &&
                                                (this.element.style.marginLeft = this.width() + "px"),
                                                t();
                                        })
                                    );
                                }.bind(this),
                                function (t) {
                                    return (
                                        this.emit(h.c.VIEWS.LOAD_ERROR, t),
                                        new Promise((e, i) => {
                                            i(t);
                                        })
                                    );
                                }.bind(this)
                            )
                            .then(
                                function () {
                                    this.emit(h.c.VIEWS.RENDERED, this.section);
                                }.bind(this)
                            )
                    );
                }
                reset() {
                    this.iframe &&
                        ((this.iframe.style.width = "0"),
                            (this.iframe.style.height = "0"),
                            (this._width = 0),
                            (this._height = 0),
                            (this._textWidth = void 0),
                            (this._contentWidth = void 0),
                            (this._textHeight = void 0),
                            (this._contentHeight = void 0)),
                        (this._needsReframe = !0);
                }
                size(t, e) {
                    var i = t || this.settings.width,
                        n = e || this.settings.height;
                    "pre-paginated" === this.layout.name
                        ? this.lock("both", i, n)
                        : "horizontal" === this.settings.axis
                            ? this.lock("height", i, n)
                            : this.lock("width", i, n),
                        (this.settings.width = i),
                        (this.settings.height = n);
                }
                lock(t, e, i) {
                    var n,
                        s = Object(r.borders)(this.element);
                    (n = this.iframe
                        ? Object(r.borders)(this.iframe)
                        : { width: 0, height: 0 }),
                        "width" == t &&
                        Object(r.isNumber)(e) &&
                        (this.lockedWidth = e - s.width - n.width),
                        "height" == t &&
                        Object(r.isNumber)(i) &&
                        (this.lockedHeight = i - s.height - n.height),
                        "both" === t &&
                        Object(r.isNumber)(e) &&
                        Object(r.isNumber)(i) &&
                        ((this.lockedWidth = e - s.width - n.width),
                            (this.lockedHeight = i - s.height - n.height)),
                        this.displayed && this.iframe && this.expand();
                }
                expand(t) {
                    var e,
                        i = this.lockedWidth,
                        n = this.lockedHeight;
                    this.iframe &&
                        !this._expanding &&
                        ((this._expanding = !0),
                            "pre-paginated" === this.layout.name
                                ? ((i = this.layout.columnWidth), (n = this.layout.height))
                                : "horizontal" === this.settings.axis
                                    ? ((i = this.contents.textWidth()) % this.layout.pageWidth > 0 &&
                                        (i =
                                            Math.ceil(i / this.layout.pageWidth) *
                                            this.layout.pageWidth),
                                        this.settings.forceEvenPages &&
                                        ((e = i / this.layout.pageWidth),
                                            this.layout.divisor > 1 &&
                                            "reflowable" === this.layout.name &&
                                            e % 2 > 0 &&
                                            (i += this.layout.pageWidth)))
                                    : "vertical" === this.settings.axis &&
                                    ((n = this.contents.textHeight()),
                                        "paginated" === this.settings.flow &&
                                        n % this.layout.height > 0 &&
                                        (n = Math.ceil(n / this.layout.height) * this.layout.height)),
                            (this._needsReframe || i != this._width || n != this._height) &&
                            this.reframe(i, n),
                            (this._expanding = !1));
                }
                reframe(t, e) {
                    var i;
                    Object(r.isNumber)(t) &&
                        ((this.element.style.width = t + "px"),
                            (this.iframe.style.width = t + "px"),
                            (this._width = t)),
                        Object(r.isNumber)(e) &&
                        ((this.element.style.height = e + "px"),
                            (this.iframe.style.height = e + "px"),
                            (this._height = e)),
                        (i = {
                            width: t,
                            height: e,
                            widthDelta: this.prevBounds ? t - this.prevBounds.width : t,
                            heightDelta: this.prevBounds ? e - this.prevBounds.height : e,
                        }),
                        this.pane && this.pane.render(),
                        requestAnimationFrame(() => {
                            let t;
                            for (let e in this.marks)
                                this.marks.hasOwnProperty(e) &&
                                    ((t = this.marks[e]), this.placeMark(t.element, t.range));
                        }),
                        this.onResize(this, i),
                        this.emit(h.c.VIEWS.RESIZED, i),
                        (this.prevBounds = i),
                        (this.elementBounds = Object(r.bounds)(this.element));
                }
                load(t) {
                    var e = new r.defer(),
                        i = e.promise;
                    if (!this.iframe)
                        return e.reject(new Error("No Iframe Available")), i;
                    if (
                        ((this.iframe.onload = function (t) {
                            this.onLoad(t, e);
                        }.bind(this)),
                            "blobUrl" === this.settings.method)
                    )
                        (this.blobUrl = Object(r.createBlobUrl)(
                            t,
                            "application/xhtml+xml"
                        )),
                            (this.iframe.src = this.blobUrl),
                            this.element.appendChild(this.iframe);
                    else if ("srcdoc" === this.settings.method)
                        (this.iframe.srcdoc = t), this.element.appendChild(this.iframe);
                    else {
                        if (
                            (this.element.appendChild(this.iframe),
                                (this.document = this.iframe.contentDocument),
                                !this.document)
                        )
                            return e.reject(new Error("No Document Available")), i;
                        if (
                            (this.iframe.contentDocument.open(),
                                window.MSApp && MSApp.execUnsafeLocalFunction)
                        ) {
                            var n = this;
                            MSApp.execUnsafeLocalFunction(function () {
                                n.iframe.contentDocument.write(t);
                            });
                        } else this.iframe.contentDocument.write(t);
                        this.iframe.contentDocument.close();
                    }
                    return i;
                }
                onLoad(t, e) {
                    (this.window = this.iframe.contentWindow),
                        (this.document = this.iframe.contentDocument),
                        (this.contents = new a.a(
                            this.document,
                            this.document.body,
                            this.section.cfiBase,
                            this.section.index
                        )),
                        (this.rendering = !1);
                    var i = this.document.querySelector("link[rel='canonical']");
                    i
                        ? i.setAttribute("href", this.section.canonical)
                        : ((i = this.document.createElement("link")).setAttribute(
                            "rel",
                            "canonical"
                        ),
                            i.setAttribute("href", this.section.canonical),
                            this.document.querySelector("head").appendChild(i)),
                        this.contents.on(h.c.CONTENTS.EXPAND, () => {
                            this.displayed &&
                                this.iframe &&
                                (this.expand(),
                                    this.contents && this.layout.format(this.contents));
                        }),
                        this.contents.on(h.c.CONTENTS.RESIZE, (t) => {
                            this.displayed &&
                                this.iframe &&
                                (this.expand(),
                                    this.contents && this.layout.format(this.contents));
                        }),
                        e.resolve(this.contents);
                }
                setLayout(t) {
                    (this.layout = t),
                        this.contents && (this.layout.format(this.contents), this.expand());
                }
                setAxis(t) {
                    (this.settings.axis = t),
                        (this.element.style.flex = "horizontal" == t ? "none" : "initial"),
                        this.size();
                }
                setWritingMode(t) {
                    this.writingMode = t;
                }
                addListeners() { }
                removeListeners(t) { }
                display(t) {
                    var e = new r.defer();
                    return (
                        this.displayed
                            ? e.resolve(this)
                            : this.render(t).then(
                                function () {
                                    this.emit(h.c.VIEWS.DISPLAYED, this),
                                        this.onDisplayed(this),
                                        (this.displayed = !0),
                                        e.resolve(this);
                                }.bind(this),
                                function (t) {
                                    e.reject(t, this);
                                }
                            ),
                        e.promise
                    );
                }
                show() {
                    (this.element.style.visibility = "visible"),
                        this.iframe &&
                        ((this.iframe.style.visibility = "visible"),
                            (this.iframe.style.transform = "translateZ(0)"),
                            this.iframe.offsetWidth,
                            (this.iframe.style.transform = null)),
                        this.emit(h.c.VIEWS.SHOWN, this);
                }
                hide() {
                    (this.element.style.visibility = "hidden"),
                        (this.iframe.style.visibility = "hidden"),
                        (this.stopExpanding = !0),
                        this.emit(h.c.VIEWS.HIDDEN, this);
                }
                offset() {
                    return { top: this.element.offsetTop, left: this.element.offsetLeft };
                }
                width() {
                    return this._width;
                }
                height() {
                    return this._height;
                }
                position() {
                    return this.element.getBoundingClientRect();
                }
                locationOf(t) {
                    this.iframe.getBoundingClientRect();
                    var e = this.contents.locationOf(t, this.settings.ignoreClass);
                    return { left: e.left, top: e.top };
                }
                onDisplayed(t) { }
                onResize(t, e) { }
                bounds(t) {
                    return (
                        (!t && this.elementBounds) ||
                        (this.elementBounds = Object(r.bounds)(this.element)),
                        this.elementBounds
                    );
                }
                highlight(t, e = {}, i, n = "epubjs-hl", s = {}) {
                    if (!this.contents) return;
                    const r = Object.assign(
                        {
                            fill: "yellow",
                            "fill-opacity": "0.3",
                            "mix-blend-mode": "multiply",
                        },
                        s
                    );
                    let o = this.contents.range(t),
                        a = () => {
                            this.emit(h.c.VIEWS.MARK_CLICKED, t, e);
                        };
                    (e.epubcfi = t),
                        this.pane || (this.pane = new l.Pane(this.iframe, this.element));
                    let c = new l.Highlight(o, n, e, r),
                        d = this.pane.addMark(c);
                    return (
                        (this.highlights[t] = {
                            mark: d,
                            element: d.element,
                            listeners: [a, i],
                        }),
                        d.element.setAttribute("ref", n),
                        d.element.addEventListener("click", a),
                        d.element.addEventListener("touchstart", a),
                        i &&
                        (d.element.addEventListener("click", i),
                            d.element.addEventListener("touchstart", i)),
                        d
                    );
                }
                underline(t, e = {}, i, n = "epubjs-ul", s = {}) {
                    if (!this.contents) return;
                    const r = Object.assign(
                        {
                            stroke: "black",
                            "stroke-opacity": "0.3",
                            "mix-blend-mode": "multiply",
                        },
                        s
                    );
                    let o = this.contents.range(t),
                        a = () => {
                            this.emit(h.c.VIEWS.MARK_CLICKED, t, e);
                        };
                    (e.epubcfi = t),
                        this.pane || (this.pane = new l.Pane(this.iframe, this.element));
                    let c = new l.Underline(o, n, e, r),
                        d = this.pane.addMark(c);
                    return (
                        (this.underlines[t] = {
                            mark: d,
                            element: d.element,
                            listeners: [a, i],
                        }),
                        d.element.setAttribute("ref", n),
                        d.element.addEventListener("click", a),
                        d.element.addEventListener("touchstart", a),
                        i &&
                        (d.element.addEventListener("click", i),
                            d.element.addEventListener("touchstart", i)),
                        d
                    );
                }
                mark(t, e = {}, i) {
                    if (!this.contents) return;
                    if (t in this.marks) {
                        return this.marks[t];
                    }
                    let n = this.contents.range(t);
                    if (!n) return;
                    let s = n.commonAncestorContainer,
                        r = 1 === s.nodeType ? s : s.parentNode,
                        o = (i) => {
                            this.emit(h.c.VIEWS.MARK_CLICKED, t, e);
                        };
                    n.collapsed && 1 === s.nodeType
                        ? ((n = new Range()), n.selectNodeContents(s))
                        : n.collapsed && ((n = new Range()), n.selectNodeContents(r));
                    let a = this.document.createElement("a");
                    return (
                        a.setAttribute("ref", "epubjs-mk"),
                        (a.style.position = "absolute"),
                        (a.dataset.epubcfi = t),
                        e &&
                        Object.keys(e).forEach((t) => {
                            a.dataset[t] = e[t];
                        }),
                        i &&
                        (a.addEventListener("click", i),
                            a.addEventListener("touchstart", i)),
                        a.addEventListener("click", o),
                        a.addEventListener("touchstart", o),
                        this.placeMark(a, n),
                        this.element.appendChild(a),
                        (this.marks[t] = { element: a, range: n, listeners: [o, i] }),
                        r
                    );
                }
                placeMark(t, e) {
                    let i, n, s;
                    if (
                        "pre-paginated" === this.layout.name ||
                        "horizontal" !== this.settings.axis
                    ) {
                        let t = e.getBoundingClientRect();
                        (i = t.top), (n = t.right);
                    } else {
                        let t,
                            o = e.getClientRects();
                        for (var r = 0; r != o.length; r++)
                            (t = o[r]),
                                (!s || t.left < s) &&
                                ((s = t.left),
                                    (n =
                                        Math.ceil(s / this.layout.props.pageWidth) *
                                        this.layout.props.pageWidth -
                                        this.layout.gap / 2),
                                    (i = t.top));
                    }
                    (t.style.top = i + "px"), (t.style.left = n + "px");
                }
                unhighlight(t) {
                    let e;
                    t in this.highlights &&
                        ((e = this.highlights[t]),
                            this.pane.removeMark(e.mark),
                            e.listeners.forEach((t) => {
                                t &&
                                    (e.element.removeEventListener("click", t),
                                        e.element.removeEventListener("touchstart", t));
                            }),
                            delete this.highlights[t]);
                }
                ununderline(t) {
                    let e;
                    t in this.underlines &&
                        ((e = this.underlines[t]),
                            this.pane.removeMark(e.mark),
                            e.listeners.forEach((t) => {
                                t &&
                                    (e.element.removeEventListener("click", t),
                                        e.element.removeEventListener("touchstart", t));
                            }),
                            delete this.underlines[t]);
                }
                unmark(t) {
                    let e;
                    t in this.marks &&
                        ((e = this.marks[t]),
                            this.element.removeChild(e.element),
                            e.listeners.forEach((t) => {
                                t &&
                                    (e.element.removeEventListener("click", t),
                                        e.element.removeEventListener("touchstart", t));
                            }),
                            delete this.marks[t]);
                }
                destroy() {
                    for (let t in this.highlights) this.unhighlight(t);
                    for (let t in this.underlines) this.ununderline(t);
                    for (let t in this.marks) this.unmark(t);
                    this.blobUrl && Object(r.revokeBlobUrl)(this.blobUrl),
                        this.displayed &&
                        ((this.displayed = !1),
                            this.removeListeners(),
                            this.contents.destroy(),
                            (this.stopExpanding = !0),
                            this.element.removeChild(this.iframe),
                            (this.iframe = void 0),
                            (this.contents = void 0),
                            (this._textWidth = null),
                            (this._textHeight = null),
                            (this._width = null),
                            (this._height = null));
                }
            }
            s()(c.prototype), (e.a = c);
        },
        function (t, e, i) {
            var n = i(18),
                s = i(50),
                r = i(52),
                o = Math.max,
                a = Math.min;
            t.exports = function (t, e, i) {
                var h,
                    l,
                    c,
                    d,
                    u,
                    f,
                    p = 0,
                    g = !1,
                    m = !1,
                    v = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                function y(e) {
                    var i = h,
                        n = l;
                    return (h = l = void 0), (p = e), (d = t.apply(n, i));
                }
                function b(t) {
                    return (p = t), (u = setTimeout(x, e)), g ? y(t) : d;
                }
                function w(t) {
                    var i = t - f;
                    return void 0 === f || i >= e || i < 0 || (m && t - p >= c);
                }
                function x() {
                    var t = s();
                    if (w(t)) return E(t);
                    u = setTimeout(
                        x,
                        (function (t) {
                            var i = e - (t - f);
                            return m ? a(i, c - (t - p)) : i;
                        })(t)
                    );
                }
                function E(t) {
                    return (u = void 0), v && h ? y(t) : ((h = l = void 0), d);
                }
                function _() {
                    var t = s(),
                        i = w(t);
                    if (((h = arguments), (l = this), (f = t), i)) {
                        if (void 0 === u) return b(f);
                        if (m) return clearTimeout(u), (u = setTimeout(x, e)), y(f);
                    }
                    return void 0 === u && (u = setTimeout(x, e)), d;
                }
                return (
                    (e = r(e) || 0),
                    n(i) &&
                    ((g = !!i.leading),
                        (c = (m = "maxWait" in i) ? o(r(i.maxWait) || 0, e) : c),
                        (v = "trailing" in i ? !!i.trailing : v)),
                    (_.cancel = function () {
                        void 0 !== u && clearTimeout(u), (p = 0), (h = f = l = u = void 0);
                    }),
                    (_.flush = function () {
                        return void 0 === u ? d : E(s());
                    }),
                    _
                );
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(0),
                s = i(10),
                r = i(1),
                o = i(3),
                a = i.n(o);
            const h = Math.PI / 2,
                l = {
                    easeOutSine: function (t) {
                        return Math.sin(t * h);
                    },
                    easeInOutSine: function (t) {
                        return -0.5 * (Math.cos(Math.PI * t) - 1);
                    },
                    easeInOutQuint: function (t) {
                        return (t /= 0.5) < 1
                            ? 0.5 * Math.pow(t, 5)
                            : 0.5 * (Math.pow(t - 2, 5) + 2);
                    },
                    easeInCubic: function (t) {
                        return Math.pow(t, 3);
                    },
                };
            class c {
                constructor(t, e) {
                    (this.settings = Object(n.extend)(
                        {
                            duration: 80,
                            minVelocity: 0.2,
                            minDistance: 10,
                            easing: l.easeInCubic,
                        },
                        e || {}
                    )),
                        (this.supportsTouch = this.supportsTouch()),
                        this.supportsTouch && this.setup(t);
                }
                setup(t) {
                    (this.manager = t),
                        (this.layout = this.manager.layout),
                        (this.fullsize = this.manager.settings.fullsize),
                        this.fullsize
                            ? ((this.element = this.manager.stage.element),
                                (this.scroller = window),
                                this.disableScroll())
                            : ((this.element = this.manager.stage.container),
                                (this.scroller = this.element),
                                (this.element.style.WebkitOverflowScrolling = "touch")),
                        (this.manager.settings.offset = this.layout.width),
                        (this.manager.settings.afterScrolledTimeout =
                            2 * this.settings.duration),
                        (this.isVertical = "vertical" === this.manager.settings.axis),
                        this.manager.isPaginated &&
                        !this.isVertical &&
                        ((this.touchCanceler = !1),
                            (this.resizeCanceler = !1),
                            (this.snapping = !1),
                            this.scrollLeft,
                            this.scrollTop,
                            (this.startTouchX = void 0),
                            (this.startTouchY = void 0),
                            (this.startTime = void 0),
                            (this.endTouchX = void 0),
                            (this.endTouchY = void 0),
                            (this.endTime = void 0),
                            this.addListeners());
                }
                supportsTouch() {
                    return !!(
                        "ontouchstart" in window ||
                        (window.DocumentTouch && document instanceof DocumentTouch)
                    );
                }
                disableScroll() {
                    this.element.style.overflow = "hidden";
                }
                enableScroll() {
                    this.element.style.overflow = "";
                }
                addListeners() {
                    (this._onResize = this.onResize.bind(this)),
                        window.addEventListener("resize", this._onResize),
                        (this._onScroll = this.onScroll.bind(this)),
                        this.scroller.addEventListener("scroll", this._onScroll),
                        (this._onTouchStart = this.onTouchStart.bind(this)),
                        this.scroller.addEventListener("touchstart", this._onTouchStart, {
                            passive: !0,
                        }),
                        this.on("touchstart", this._onTouchStart),
                        (this._onTouchMove = this.onTouchMove.bind(this)),
                        this.scroller.addEventListener("touchmove", this._onTouchMove, {
                            passive: !0,
                        }),
                        this.on("touchmove", this._onTouchMove),
                        (this._onTouchEnd = this.onTouchEnd.bind(this)),
                        this.scroller.addEventListener("touchend", this._onTouchEnd, {
                            passive: !0,
                        }),
                        this.on("touchend", this._onTouchEnd),
                        (this._afterDisplayed = this.afterDisplayed.bind(this)),
                        this.manager.on(r.c.MANAGERS.ADDED, this._afterDisplayed);
                }
                removeListeners() {
                    window.removeEventListener("resize", this._onResize),
                        (this._onResize = void 0),
                        this.scroller.removeEventListener("scroll", this._onScroll),
                        (this._onScroll = void 0),
                        this.scroller.removeEventListener(
                            "touchstart",
                            this._onTouchStart,
                            { passive: !0 }
                        ),
                        this.off("touchstart", this._onTouchStart),
                        (this._onTouchStart = void 0),
                        this.scroller.removeEventListener("touchmove", this._onTouchMove, {
                            passive: !0,
                        }),
                        this.off("touchmove", this._onTouchMove),
                        (this._onTouchMove = void 0),
                        this.scroller.removeEventListener("touchend", this._onTouchEnd, {
                            passive: !0,
                        }),
                        this.off("touchend", this._onTouchEnd),
                        (this._onTouchEnd = void 0),
                        this.manager.off(r.c.MANAGERS.ADDED, this._afterDisplayed),
                        (this._afterDisplayed = void 0);
                }
                afterDisplayed(t) {
                    let e = t.contents;
                    ["touchstart", "touchmove", "touchend"].forEach((t) => {
                        e.on(t, (t) => this.triggerViewEvent(t, e));
                    });
                }
                triggerViewEvent(t, e) {
                    this.emit(t.type, t, e);
                }
                onScroll(t) {
                    (this.scrollLeft = this.fullsize
                        ? window.scrollX
                        : this.scroller.scrollLeft),
                        (this.scrollTop = this.fullsize
                            ? window.scrollY
                            : this.scroller.scrollTop);
                }
                onResize(t) {
                    this.resizeCanceler = !0;
                }
                onTouchStart(t) {
                    let { screenX: e, screenY: i } = t.touches[0];
                    this.fullsize && this.enableScroll(),
                        (this.touchCanceler = !0),
                        this.startTouchX ||
                        ((this.startTouchX = e),
                            (this.startTouchY = i),
                            (this.startTime = this.now())),
                        (this.endTouchX = e),
                        (this.endTouchY = i),
                        (this.endTime = this.now());
                }
                onTouchMove(t) {
                    let { screenX: e, screenY: i } = t.touches[0],
                        n = Math.abs(i - this.endTouchY);
                    (this.touchCanceler = !0),
                        !this.fullsize &&
                        n < 10 &&
                        (this.element.scrollLeft -= e - this.endTouchX),
                        (this.endTouchX = e),
                        (this.endTouchY = i),
                        (this.endTime = this.now());
                }
                onTouchEnd(t) {
                    this.fullsize && this.disableScroll(), (this.touchCanceler = !1);
                    let e = this.wasSwiped();
                    0 !== e ? this.snap(e) : this.snap(),
                        (this.startTouchX = void 0),
                        (this.startTouchY = void 0),
                        (this.startTime = void 0),
                        (this.endTouchX = void 0),
                        (this.endTouchY = void 0),
                        (this.endTime = void 0);
                }
                wasSwiped() {
                    let t = this.layout.pageWidth * this.layout.divisor,
                        e = this.endTouchX - this.startTouchX,
                        i = Math.abs(e),
                        n = e / (this.endTime - this.startTime),
                        s = this.settings.minVelocity;
                    return i <= this.settings.minDistance || i >= t
                        ? 0
                        : n > s
                            ? -1
                            : n < -s
                                ? 1
                                : void 0;
                }
                needsSnap() {
                    return (
                        this.scrollLeft % (this.layout.pageWidth * this.layout.divisor) != 0
                    );
                }
                snap(t = 0) {
                    let e = this.scrollLeft,
                        i = this.layout.pageWidth * this.layout.divisor,
                        n = Math.round(e / i) * i;
                    return t && (n += t * i), this.smoothScrollTo(n);
                }
                smoothScrollTo(t) {
                    const e = new n.defer(),
                        i = this.scrollLeft,
                        s = this.now(),
                        r = this.settings.duration,
                        o = this.settings.easing;
                    return (
                        (this.snapping = !0),
                        function n() {
                            const a = this.now(),
                                h = Math.min(1, (a - s) / r);
                            if ((o(h), this.touchCanceler || this.resizeCanceler))
                                return (
                                    (this.resizeCanceler = !1),
                                    (this.snapping = !1),
                                    void e.resolve()
                                );
                            h < 1
                                ? (window.requestAnimationFrame(n.bind(this)),
                                    this.scrollTo(i + (t - i) * h, 0))
                                : (this.scrollTo(t, 0), (this.snapping = !1), e.resolve());
                        }.call(this),
                        e.promise
                    );
                }
                scrollTo(t = 0, e = 0) {
                    this.fullsize
                        ? window.scroll(t, e)
                        : ((this.scroller.scrollLeft = t), (this.scroller.scrollTop = e));
                }
                now() {
                    return "now" in window.performance
                        ? performance.now()
                        : new Date().getTime();
                }
                destroy() {
                    this.scroller &&
                        (this.fullsize && this.enableScroll(),
                            this.removeListeners(),
                            (this.scroller = void 0));
                }
            }
            a()(c.prototype);
            var d = c,
                u = i(20),
                f = i.n(u);
            class p extends s.a {
                constructor(t) {
                    super(t),
                        (this.name = "continuous"),
                        (this.settings = Object(n.extend)(this.settings || {}, {
                            infinite: !0,
                            overflow: void 0,
                            axis: void 0,
                            writingMode: void 0,
                            flow: "scrolled",
                            offset: 500,
                            offsetDelta: 250,
                            width: void 0,
                            height: void 0,
                            snap: !1,
                            afterScrolledTimeout: 10,
                        })),
                        Object(n.extend)(this.settings, t.settings || {}),
                        "undefined" != t.settings.gap &&
                        0 === t.settings.gap &&
                        (this.settings.gap = t.settings.gap),
                        (this.viewSettings = {
                            ignoreClass: this.settings.ignoreClass,
                            axis: this.settings.axis,
                            flow: this.settings.flow,
                            layout: this.layout,
                            width: 0,
                            height: 0,
                            forceEvenPages: !1,
                        }),
                        (this.scrollTop = 0),
                        (this.scrollLeft = 0);
                }
                display(t, e) {
                    return s.a.prototype.display.call(this, t, e).then(
                        function () {
                            return this.fill();
                        }.bind(this)
                    );
                }
                fill(t) {
                    var e = t || new n.defer();
                    return (
                        this.q
                            .enqueue(() => this.check())
                            .then((t) => {
                                t ? this.fill(e) : e.resolve();
                            }),
                        e.promise
                    );
                }
                moveTo(t) {
                    var e = 0,
                        i = 0;
                    this.isPaginated
                        ? ((e = Math.floor(t.left / this.layout.delta) * this.layout.delta),
                            this.settings.offsetDelta)
                        : ((i = t.top), t.top, this.settings.offsetDelta),
                        (e > 0 || i > 0) && this.scrollBy(e, i, !0);
                }
                afterResized(t) {
                    this.emit(r.c.MANAGERS.RESIZE, t.section);
                }
                removeShownListeners(t) {
                    t.onDisplayed = function () { };
                }
                add(t) {
                    var e = this.createView(t);
                    return (
                        this.views.append(e),
                        e.on(r.c.VIEWS.RESIZED, (t) => {
                            e.expanded = !0;
                        }),
                        e.on(r.c.VIEWS.AXIS, (t) => {
                            this.updateAxis(t);
                        }),
                        e.on(r.c.VIEWS.WRITING_MODE, (t) => {
                            this.updateWritingMode(t);
                        }),
                        (e.onDisplayed = this.afterDisplayed.bind(this)),
                        (e.onResize = this.afterResized.bind(this)),
                        e.display(this.request)
                    );
                }
                append(t) {
                    var e = this.createView(t);
                    return (
                        e.on(r.c.VIEWS.RESIZED, (t) => {
                            e.expanded = !0;
                        }),
                        e.on(r.c.VIEWS.AXIS, (t) => {
                            this.updateAxis(t);
                        }),
                        e.on(r.c.VIEWS.WRITING_MODE, (t) => {
                            this.updateWritingMode(t);
                        }),
                        this.views.append(e),
                        (e.onDisplayed = this.afterDisplayed.bind(this)),
                        e
                    );
                }
                prepend(t) {
                    var e = this.createView(t);
                    return (
                        e.on(r.c.VIEWS.RESIZED, (t) => {
                            this.counter(t), (e.expanded = !0);
                        }),
                        e.on(r.c.VIEWS.AXIS, (t) => {
                            this.updateAxis(t);
                        }),
                        e.on(r.c.VIEWS.WRITING_MODE, (t) => {
                            this.updateWritingMode(t);
                        }),
                        this.views.prepend(e),
                        (e.onDisplayed = this.afterDisplayed.bind(this)),
                        e
                    );
                }
                counter(t) {
                    "vertical" === this.settings.axis
                        ? this.scrollBy(0, t.heightDelta, !0)
                        : this.scrollBy(t.widthDelta, 0, !0);
                }
                update(t) {
                    for (
                        var e,
                        i = this.bounds(),
                        s = this.views.all(),
                        r = s.length,
                        o = [],
                        a = void 0 !== t ? t : this.settings.offset || 0,
                        h = new n.defer(),
                        l = [],
                        c = 0;
                        c < r;
                        c++
                    )
                        if (((e = s[c]), !0 === this.isVisible(e, a, a, i))) {
                            if (e.displayed) e.show();
                            else {
                                let t = e.display(this.request).then(
                                    function (t) {
                                        t.show();
                                    },
                                    (t) => {
                                        e.hide();
                                    }
                                );
                                l.push(t);
                            }
                            o.push(e);
                        } else
                            this.q.enqueue(e.destroy.bind(e)),
                                clearTimeout(this.trimTimeout),
                                (this.trimTimeout = setTimeout(
                                    function () {
                                        this.q.enqueue(this.trim.bind(this));
                                    }.bind(this),
                                    250
                                ));
                    return l.length
                        ? Promise.all(l).catch((t) => {
                            h.reject(t);
                        })
                        : (h.resolve(), h.promise);
                }
                check(t, e) {
                    var i = new n.defer(),
                        s = [],
                        r = "horizontal" === this.settings.axis,
                        o = this.settings.offset || 0;
                    t && r && (o = t), e && !r && (o = e);
                    var a = this._bounds;
                    let h = r ? this.scrollLeft : this.scrollTop,
                        l = r ? Math.floor(a.width) : a.height,
                        c = r ? this.container.scrollWidth : this.container.scrollHeight,
                        d =
                            this.writingMode && 0 === this.writingMode.indexOf("vertical")
                                ? "vertical"
                                : "horizontal",
                        u = this.settings.rtlScrollType,
                        f = "rtl" === this.settings.direction;
                    this.settings.fullsize
                        ? ((r && f && "negative" === u) || (!r && f && "default" === u)) &&
                        (h *= -1)
                        : (f && "default" === u && "horizontal" === d && (h = c - l - h),
                            f && "negative" === u && "horizontal" === d && (h *= -1));
                    let p = () => {
                        let t = this.views.first(),
                            e = t && t.section.prev();
                        e && s.push(this.prepend(e));
                    },
                        g = h - o;
                    h + l + o >= c &&
                        (() => {
                            let t = this.views.last(),
                                e = t && t.section.next();
                            e && s.push(this.append(e));
                        })(),
                        g < 0 && p();
                    let m = s.map((t) => t.display(this.request));
                    return s.length
                        ? Promise.all(m)
                            .then(() => this.check())
                            .then(
                                () => this.update(o),
                                (t) => t
                            )
                        : (this.q.enqueue(
                            function () {
                                this.update();
                            }.bind(this)
                        ),
                            i.resolve(!1),
                            i.promise);
                }
                trim() {
                    for (
                        var t = new n.defer(),
                        e = this.views.displayed(),
                        i = e[0],
                        s = e[e.length - 1],
                        r = this.views.indexOf(i),
                        o = this.views.indexOf(s),
                        a = this.views.slice(0, r),
                        h = this.views.slice(o + 1),
                        l = 0;
                        l < a.length - 1;
                        l++
                    )
                        this.erase(a[l], a);
                    for (var c = 1; c < h.length; c++) this.erase(h[c]);
                    return t.resolve(), t.promise;
                }
                erase(t, e) {
                    var i, n;
                    this.settings.fullsize
                        ? ((i = window.scrollY), (n = window.scrollX))
                        : ((i = this.container.scrollTop), (n = this.container.scrollLeft));
                    var s = t.bounds();
                    this.views.remove(t),
                        e &&
                        ("vertical" === this.settings.axis
                            ? this.scrollTo(0, i - s.height, !0)
                            : "rtl" === this.settings.direction
                                ? this.settings.fullsize
                                    ? this.scrollTo(n + Math.floor(s.width), 0, !0)
                                    : this.scrollTo(n, 0, !0)
                                : this.scrollTo(n - Math.floor(s.width), 0, !0));
                }
                addEventListeners(t) {
                    window.addEventListener(
                        "unload",
                        function (t) {
                            (this.ignore = !0), this.destroy();
                        }.bind(this)
                    ),
                        this.addScrollListeners(),
                        this.isPaginated &&
                        this.settings.snap &&
                        (this.snapper = new d(
                            this,
                            this.settings.snap &&
                            "object" == typeof this.settings.snap &&
                            this.settings.snap
                        ));
                }
                addScrollListeners() {
                    var t;
                    this.tick = n.requestAnimationFrame;
                    let e =
                        "rtl" === this.settings.direction &&
                            "default" === this.settings.rtlScrollType
                            ? -1
                            : 1;
                    (this.scrollDeltaVert = 0),
                        (this.scrollDeltaHorz = 0),
                        this.settings.fullsize
                            ? ((t = window),
                                (this.scrollTop = window.scrollY * e),
                                (this.scrollLeft = window.scrollX * e))
                            : ((t = this.container),
                                (this.scrollTop = this.container.scrollTop),
                                (this.scrollLeft = this.container.scrollLeft)),
                        (this._onScroll = this.onScroll.bind(this)),
                        t.addEventListener("scroll", this._onScroll),
                        (this._scrolled = f()(this.scrolled.bind(this), 30)),
                        (this.didScroll = !1);
                }
                removeEventListeners() {
                    (this.settings.fullsize
                        ? window
                        : this.container
                    ).removeEventListener("scroll", this._onScroll),
                        (this._onScroll = void 0);
                }
                onScroll() {
                    let t,
                        e,
                        i =
                            "rtl" === this.settings.direction &&
                                "default" === this.settings.rtlScrollType
                                ? -1
                                : 1;
                    this.settings.fullsize
                        ? ((t = window.scrollY * i), (e = window.scrollX * i))
                        : ((t = this.container.scrollTop), (e = this.container.scrollLeft)),
                        (this.scrollTop = t),
                        (this.scrollLeft = e),
                        this.ignore ? (this.ignore = !1) : this._scrolled(),
                        (this.scrollDeltaVert += Math.abs(t - this.prevScrollTop)),
                        (this.scrollDeltaHorz += Math.abs(e - this.prevScrollLeft)),
                        (this.prevScrollTop = t),
                        (this.prevScrollLeft = e),
                        clearTimeout(this.scrollTimeout),
                        (this.scrollTimeout = setTimeout(
                            function () {
                                (this.scrollDeltaVert = 0), (this.scrollDeltaHorz = 0);
                            }.bind(this),
                            150
                        )),
                        clearTimeout(this.afterScrolled),
                        (this.didScroll = !1);
                }
                scrolled() {
                    this.q.enqueue(
                        function () {
                            return this.check();
                        }.bind(this)
                    ),
                        this.emit(r.c.MANAGERS.SCROLL, {
                            top: this.scrollTop,
                            left: this.scrollLeft,
                        }),
                        clearTimeout(this.afterScrolled),
                        (this.afterScrolled = setTimeout(
                            function () {
                                (this.snapper &&
                                    this.snapper.supportsTouch &&
                                    this.snapper.needsSnap()) ||
                                    this.emit(r.c.MANAGERS.SCROLLED, {
                                        top: this.scrollTop,
                                        left: this.scrollLeft,
                                    });
                            }.bind(this),
                            this.settings.afterScrolledTimeout
                        ));
                }
                next() {
                    let t =
                        "pre-paginated" === this.layout.props.name &&
                            this.layout.props.spread
                            ? 2 * this.layout.props.delta
                            : this.layout.props.delta;
                    this.views.length &&
                        (this.isPaginated && "horizontal" === this.settings.axis
                            ? this.scrollBy(t, 0, !0)
                            : this.scrollBy(0, this.layout.height, !0),
                            this.q.enqueue(
                                function () {
                                    return this.check();
                                }.bind(this)
                            ));
                }
                prev() {
                    let t =
                        "pre-paginated" === this.layout.props.name &&
                            this.layout.props.spread
                            ? 2 * this.layout.props.delta
                            : this.layout.props.delta;
                    this.views.length &&
                        (this.isPaginated && "horizontal" === this.settings.axis
                            ? this.scrollBy(-t, 0, !0)
                            : this.scrollBy(0, -this.layout.height, !0),
                            this.q.enqueue(
                                function () {
                                    return this.check();
                                }.bind(this)
                            ));
                }
                updateFlow(t) {
                    this.rendered &&
                        this.snapper &&
                        (this.snapper.destroy(), (this.snapper = void 0)),
                        super.updateFlow(t, "scroll"),
                        this.rendered &&
                        this.isPaginated &&
                        this.settings.snap &&
                        (this.snapper = new d(
                            this,
                            this.settings.snap &&
                            "object" == typeof this.settings.snap &&
                            this.settings.snap
                        ));
                }
                destroy() {
                    super.destroy(), this.snapper && this.snapper.destroy();
                }
            }
            e.a = p;
        },
        function (t, e, i) {
            (function (e) {
                t.exports = (function t(e, i, n) {
                    function s(o, a) {
                        if (!i[o]) {
                            if (!e[o]) {
                                if (r) return r(o, !0);
                                var h = new Error("Cannot find module '" + o + "'");
                                throw ((h.code = "MODULE_NOT_FOUND"), h);
                            }
                            var l = (i[o] = { exports: {} });
                            e[o][0].call(
                                l.exports,
                                function (t) {
                                    var i = e[o][1][t];
                                    return s(i || t);
                                },
                                l,
                                l.exports,
                                t,
                                e,
                                i,
                                n
                            );
                        }
                        return i[o].exports;
                    }
                    for (var r = !1, o = 0; o < n.length; o++) s(n[o]);
                    return s;
                })(
                    {
                        1: [
                            function (t, i, n) {
                                (function (t) {
                                    "use strict";
                                    var e,
                                        n,
                                        s = t.MutationObserver || t.WebKitMutationObserver;
                                    if (s) {
                                        var r = 0,
                                            o = new s(c),
                                            a = t.document.createTextNode("");
                                        o.observe(a, { characterData: !0 }),
                                            (e = function () {
                                                a.data = r = ++r % 2;
                                            });
                                    } else if (t.setImmediate || void 0 === t.MessageChannel)
                                        e =
                                            "document" in t &&
                                                "onreadystatechange" in t.document.createElement("script")
                                                ? function () {
                                                    var e = t.document.createElement("script");
                                                    (e.onreadystatechange = function () {
                                                        c(),
                                                            (e.onreadystatechange = null),
                                                            e.parentNode.removeChild(e),
                                                            (e = null);
                                                    }),
                                                        t.document.documentElement.appendChild(e);
                                                }
                                                : function () {
                                                    setTimeout(c, 0);
                                                };
                                    else {
                                        var h = new t.MessageChannel();
                                        (h.port1.onmessage = c),
                                            (e = function () {
                                                h.port2.postMessage(0);
                                            });
                                    }
                                    var l = [];
                                    function c() {
                                        var t, e;
                                        n = !0;
                                        for (var i = l.length; i;) {
                                            for (e = l, l = [], t = -1; ++t < i;) e[t]();
                                            i = l.length;
                                        }
                                        n = !1;
                                    }
                                    i.exports = function (t) {
                                        1 !== l.push(t) || n || e();
                                    };
                                }.call(
                                    this,
                                    void 0 !== e
                                        ? e
                                        : "undefined" != typeof self
                                            ? self
                                            : "undefined" != typeof window
                                                ? window
                                                : {}
                                ));
                            },
                            {},
                        ],
                        2: [
                            function (t, e, i) {
                                "use strict";
                                var n = t(1);
                                function s() { }
                                var r = {},
                                    o = ["REJECTED"],
                                    a = ["FULFILLED"],
                                    h = ["PENDING"];
                                function l(t) {
                                    if ("function" != typeof t)
                                        throw new TypeError("resolver must be a function");
                                    (this.state = h),
                                        (this.queue = []),
                                        (this.outcome = void 0),
                                        t !== s && f(this, t);
                                }
                                function c(t, e, i) {
                                    (this.promise = t),
                                        "function" == typeof e &&
                                        ((this.onFulfilled = e),
                                            (this.callFulfilled = this.otherCallFulfilled)),
                                        "function" == typeof i &&
                                        ((this.onRejected = i),
                                            (this.callRejected = this.otherCallRejected));
                                }
                                function d(t, e, i) {
                                    n(function () {
                                        var n;
                                        try {
                                            n = e(i);
                                        } catch (e) {
                                            return r.reject(t, e);
                                        }
                                        n === t
                                            ? r.reject(
                                                t,
                                                new TypeError("Cannot resolve promise with itself")
                                            )
                                            : r.resolve(t, n);
                                    });
                                }
                                function u(t) {
                                    var e = t && t.then;
                                    if (
                                        t &&
                                        ("object" == typeof t || "function" == typeof t) &&
                                        "function" == typeof e
                                    )
                                        return function () {
                                            e.apply(t, arguments);
                                        };
                                }
                                function f(t, e) {
                                    var i = !1;
                                    function n(e) {
                                        i || ((i = !0), r.reject(t, e));
                                    }
                                    function s(e) {
                                        i || ((i = !0), r.resolve(t, e));
                                    }
                                    var o = p(function () {
                                        e(s, n);
                                    });
                                    "error" === o.status && n(o.value);
                                }
                                function p(t, e) {
                                    var i = {};
                                    try {
                                        (i.value = t(e)), (i.status = "success");
                                    } catch (t) {
                                        (i.status = "error"), (i.value = t);
                                    }
                                    return i;
                                }
                                (e.exports = l),
                                    (l.prototype.catch = function (t) {
                                        return this.then(null, t);
                                    }),
                                    (l.prototype.then = function (t, e) {
                                        if (
                                            ("function" != typeof t && this.state === a) ||
                                            ("function" != typeof e && this.state === o)
                                        )
                                            return this;
                                        var i = new this.constructor(s);
                                        return (
                                            this.state !== h
                                                ? d(i, this.state === a ? t : e, this.outcome)
                                                : this.queue.push(new c(i, t, e)),
                                            i
                                        );
                                    }),
                                    (c.prototype.callFulfilled = function (t) {
                                        r.resolve(this.promise, t);
                                    }),
                                    (c.prototype.otherCallFulfilled = function (t) {
                                        d(this.promise, this.onFulfilled, t);
                                    }),
                                    (c.prototype.callRejected = function (t) {
                                        r.reject(this.promise, t);
                                    }),
                                    (c.prototype.otherCallRejected = function (t) {
                                        d(this.promise, this.onRejected, t);
                                    }),
                                    (r.resolve = function (t, e) {
                                        var i = p(u, e);
                                        if ("error" === i.status) return r.reject(t, i.value);
                                        var n = i.value;
                                        if (n) f(t, n);
                                        else {
                                            (t.state = a), (t.outcome = e);
                                            for (var s = -1, o = t.queue.length; ++s < o;)
                                                t.queue[s].callFulfilled(e);
                                        }
                                        return t;
                                    }),
                                    (r.reject = function (t, e) {
                                        (t.state = o), (t.outcome = e);
                                        for (var i = -1, n = t.queue.length; ++i < n;)
                                            t.queue[i].callRejected(e);
                                        return t;
                                    }),
                                    (l.resolve = function (t) {
                                        return t instanceof this ? t : r.resolve(new this(s), t);
                                    }),
                                    (l.reject = function (t) {
                                        var e = new this(s);
                                        return r.reject(e, t);
                                    }),
                                    (l.all = function (t) {
                                        var e = this;
                                        if ("[object Array]" !== Object.prototype.toString.call(t))
                                            return this.reject(new TypeError("must be an array"));
                                        var i = t.length,
                                            n = !1;
                                        if (!i) return this.resolve([]);
                                        for (
                                            var o = new Array(i), a = 0, h = -1, l = new this(s);
                                            ++h < i;

                                        )
                                            c(t[h], h);
                                        return l;
                                        function c(t, s) {
                                            e.resolve(t).then(
                                                function (t) {
                                                    (o[s] = t),
                                                        ++a !== i || n || ((n = !0), r.resolve(l, o));
                                                },
                                                function (t) {
                                                    n || ((n = !0), r.reject(l, t));
                                                }
                                            );
                                        }
                                    }),
                                    (l.race = function (t) {
                                        var e = this;
                                        if ("[object Array]" !== Object.prototype.toString.call(t))
                                            return this.reject(new TypeError("must be an array"));
                                        var i = t.length,
                                            n = !1;
                                        if (!i) return this.resolve([]);
                                        for (var o, a = -1, h = new this(s); ++a < i;)
                                            (o = t[a]),
                                                e.resolve(o).then(
                                                    function (t) {
                                                        n || ((n = !0), r.resolve(h, t));
                                                    },
                                                    function (t) {
                                                        n || ((n = !0), r.reject(h, t));
                                                    }
                                                );
                                        return h;
                                    });
                            },
                            { 1: 1 },
                        ],
                        3: [
                            function (t, i, n) {
                                (function (e) {
                                    "use strict";
                                    "function" != typeof e.Promise && (e.Promise = t(2));
                                }.call(
                                    this,
                                    void 0 !== e
                                        ? e
                                        : "undefined" != typeof self
                                            ? self
                                            : "undefined" != typeof window
                                                ? window
                                                : {}
                                ));
                            },
                            { 2: 2 },
                        ],
                        4: [
                            function (t, e, i) {
                                "use strict";
                                var n =
                                    "function" == typeof Symbol &&
                                        "symbol" == typeof Symbol.iterator
                                        ? function (t) {
                                            return typeof t;
                                        }
                                        : function (t) {
                                            return t &&
                                                "function" == typeof Symbol &&
                                                t.constructor === Symbol &&
                                                t !== Symbol.prototype
                                                ? "symbol"
                                                : typeof t;
                                        },
                                    s = (function () {
                                        try {
                                            if ("undefined" != typeof indexedDB) return indexedDB;
                                            if ("undefined" != typeof webkitIndexedDB)
                                                return webkitIndexedDB;
                                            if ("undefined" != typeof mozIndexedDB)
                                                return mozIndexedDB;
                                            if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                            if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                                        } catch (t) {
                                            return;
                                        }
                                    })();
                                function r(t, e) {
                                    (t = t || []), (e = e || {});
                                    try {
                                        return new Blob(t, e);
                                    } catch (s) {
                                        if ("TypeError" !== s.name) throw s;
                                        for (
                                            var i = new (
                                                "undefined" != typeof BlobBuilder
                                                    ? BlobBuilder
                                                    : "undefined" != typeof MSBlobBuilder
                                                        ? MSBlobBuilder
                                                        : "undefined" != typeof MozBlobBuilder
                                                            ? MozBlobBuilder
                                                            : WebKitBlobBuilder
                                            )(),
                                            n = 0;
                                            n < t.length;
                                            n += 1
                                        )
                                            i.append(t[n]);
                                        return i.getBlob(e.type);
                                    }
                                }
                                "undefined" == typeof Promise && t(3);
                                var o = Promise;
                                function a(t, e) {
                                    e &&
                                        t.then(
                                            function (t) {
                                                e(null, t);
                                            },
                                            function (t) {
                                                e(t);
                                            }
                                        );
                                }
                                function h(t, e, i) {
                                    "function" == typeof e && t.then(e),
                                        "function" == typeof i && t.catch(i);
                                }
                                function l(t) {
                                    return (
                                        "string" != typeof t &&
                                        (console.warn(
                                            t + " used as a key, but it is not a string."
                                        ),
                                            (t = String(t))),
                                        t
                                    );
                                }
                                function c() {
                                    if (
                                        arguments.length &&
                                        "function" == typeof arguments[arguments.length - 1]
                                    )
                                        return arguments[arguments.length - 1];
                                }
                                var d = void 0,
                                    u = {},
                                    f = Object.prototype.toString;
                                function p(t) {
                                    return "boolean" == typeof d
                                        ? o.resolve(d)
                                        : (function (t) {
                                            return new o(function (e) {
                                                var i = t.transaction(
                                                    "local-forage-detect-blob-support",
                                                    "readwrite"
                                                ),
                                                    n = r([""]);
                                                i
                                                    .objectStore("local-forage-detect-blob-support")
                                                    .put(n, "key"),
                                                    (i.onabort = function (t) {
                                                        t.preventDefault(), t.stopPropagation(), e(!1);
                                                    }),
                                                    (i.oncomplete = function () {
                                                        var t =
                                                            navigator.userAgent.match(/Chrome\/(\d+)/),
                                                            i = navigator.userAgent.match(/Edge\//);
                                                        e(i || !t || parseInt(t[1], 10) >= 43);
                                                    });
                                            }).catch(function () {
                                                return !1;
                                            });
                                        })(t).then(function (t) {
                                            return (d = t);
                                        });
                                }
                                function g(t) {
                                    var e = u[t.name],
                                        i = {};
                                    (i.promise = new o(function (t, e) {
                                        (i.resolve = t), (i.reject = e);
                                    })),
                                        e.deferredOperations.push(i),
                                        e.dbReady
                                            ? (e.dbReady = e.dbReady.then(function () {
                                                return i.promise;
                                            }))
                                            : (e.dbReady = i.promise);
                                }
                                function m(t) {
                                    var e = u[t.name].deferredOperations.pop();
                                    if (e) return e.resolve(), e.promise;
                                }
                                function v(t, e) {
                                    var i = u[t.name].deferredOperations.pop();
                                    if (i) return i.reject(e), i.promise;
                                }
                                function y(t, e) {
                                    return new o(function (i, n) {
                                        if (
                                            ((u[t.name] = u[t.name] || {
                                                forages: [],
                                                db: null,
                                                dbReady: null,
                                                deferredOperations: [],
                                            }),
                                                t.db)
                                        ) {
                                            if (!e) return i(t.db);
                                            g(t), t.db.close();
                                        }
                                        var r = [t.name];
                                        e && r.push(t.version);
                                        var o = s.open.apply(s, r);
                                        e &&
                                            (o.onupgradeneeded = function (e) {
                                                var i = o.result;
                                                try {
                                                    i.createObjectStore(t.storeName),
                                                        e.oldVersion <= 1 &&
                                                        i.createObjectStore(
                                                            "local-forage-detect-blob-support"
                                                        );
                                                } catch (i) {
                                                    if ("ConstraintError" !== i.name) throw i;
                                                    console.warn(
                                                        'The database "' +
                                                        t.name +
                                                        '" has been upgraded from version ' +
                                                        e.oldVersion +
                                                        " to version " +
                                                        e.newVersion +
                                                        ', but the storage "' +
                                                        t.storeName +
                                                        '" already exists.'
                                                    );
                                                }
                                            }),
                                            (o.onerror = function (t) {
                                                t.preventDefault(), n(o.error);
                                            }),
                                            (o.onsuccess = function () {
                                                var e = o.result;
                                                (e.onversionchange = function (t) {
                                                    t.target.close();
                                                }),
                                                    i(e),
                                                    m(t);
                                            });
                                    });
                                }
                                function b(t) {
                                    return y(t, !1);
                                }
                                function w(t) {
                                    return y(t, !0);
                                }
                                function x(t, e) {
                                    if (!t.db) return !0;
                                    var i = !t.db.objectStoreNames.contains(t.storeName),
                                        n = t.version < t.db.version,
                                        s = t.version > t.db.version;
                                    if (
                                        (n &&
                                            (t.version !== e &&
                                                console.warn(
                                                    'The database "' +
                                                    t.name +
                                                    "\" can't be downgraded from version " +
                                                    t.db.version +
                                                    " to version " +
                                                    t.version +
                                                    "."
                                                ),
                                                (t.version = t.db.version)),
                                            s || i)
                                    ) {
                                        if (i) {
                                            var r = t.db.version + 1;
                                            r > t.version && (t.version = r);
                                        }
                                        return !0;
                                    }
                                    return !1;
                                }
                                function E(t) {
                                    return r(
                                        [
                                            (function (t) {
                                                for (
                                                    var e = t.length,
                                                    i = new ArrayBuffer(e),
                                                    n = new Uint8Array(i),
                                                    s = 0;
                                                    s < e;
                                                    s++
                                                )
                                                    n[s] = t.charCodeAt(s);
                                                return i;
                                            })(atob(t.data)),
                                        ],
                                        { type: t.type }
                                    );
                                }
                                function _(t) {
                                    return t && t.__local_forage_encoded_blob;
                                }
                                function S(t) {
                                    var e = this,
                                        i = e._initReady().then(function () {
                                            var t = u[e._dbInfo.name];
                                            if (t && t.dbReady) return t.dbReady;
                                        });
                                    return h(i, t, t), i;
                                }
                                function O(t, e, i, n) {
                                    void 0 === n && (n = 1);
                                    try {
                                        var s = t.db.transaction(t.storeName, e);
                                        i(null, s);
                                    } catch (s) {
                                        if (
                                            n > 0 &&
                                            (!t.db ||
                                                "InvalidStateError" === s.name ||
                                                "NotFoundError" === s.name)
                                        )
                                            return o
                                                .resolve()
                                                .then(function () {
                                                    if (
                                                        !t.db ||
                                                        ("NotFoundError" === s.name &&
                                                            !t.db.objectStoreNames.contains(t.storeName) &&
                                                            t.version <= t.db.version)
                                                    )
                                                        return t.db && (t.version = t.db.version + 1), w(t);
                                                })
                                                .then(function () {
                                                    return (function (t) {
                                                        g(t);
                                                        for (
                                                            var e = u[t.name], i = e.forages, n = 0;
                                                            n < i.length;
                                                            n++
                                                        ) {
                                                            var s = i[n];
                                                            s._dbInfo.db &&
                                                                (s._dbInfo.db.close(), (s._dbInfo.db = null));
                                                        }
                                                        return (
                                                            (t.db = null),
                                                            b(t)
                                                                .then(function (e) {
                                                                    return (t.db = e), x(t) ? w(t) : e;
                                                                })
                                                                .then(function (n) {
                                                                    t.db = e.db = n;
                                                                    for (var s = 0; s < i.length; s++)
                                                                        i[s]._dbInfo.db = n;
                                                                })
                                                                .catch(function (e) {
                                                                    throw (v(t, e), e);
                                                                })
                                                        );
                                                    })(t).then(function () {
                                                        O(t, e, i, n - 1);
                                                    });
                                                })
                                                .catch(i);
                                        i(s);
                                    }
                                }
                                var C = {
                                    _driver: "asyncStorage",
                                    _initStorage: function (t) {
                                        var e = this,
                                            i = { db: null };
                                        if (t) for (var n in t) i[n] = t[n];
                                        var s = u[i.name];
                                        s ||
                                            ((s = {
                                                forages: [],
                                                db: null,
                                                dbReady: null,
                                                deferredOperations: [],
                                            }),
                                                (u[i.name] = s)),
                                            s.forages.push(e),
                                            e._initReady ||
                                            ((e._initReady = e.ready), (e.ready = S));
                                        var r = [];
                                        function a() {
                                            return o.resolve();
                                        }
                                        for (var h = 0; h < s.forages.length; h++) {
                                            var l = s.forages[h];
                                            l !== e && r.push(l._initReady().catch(a));
                                        }
                                        var c = s.forages.slice(0);
                                        return o
                                            .all(r)
                                            .then(function () {
                                                return (i.db = s.db), b(i);
                                            })
                                            .then(function (t) {
                                                return (
                                                    (i.db = t),
                                                    x(i, e._defaultConfig.version) ? w(i) : t
                                                );
                                            })
                                            .then(function (t) {
                                                (i.db = s.db = t), (e._dbInfo = i);
                                                for (var n = 0; n < c.length; n++) {
                                                    var r = c[n];
                                                    r !== e &&
                                                        ((r._dbInfo.db = i.db),
                                                            (r._dbInfo.version = i.version));
                                                }
                                            });
                                    },
                                    _support: (function () {
                                        try {
                                            if (!s || !s.open) return !1;
                                            var t =
                                                "undefined" != typeof openDatabase &&
                                                /(Safari|iPhone|iPad|iPod)/.test(
                                                    navigator.userAgent
                                                ) &&
                                                !/Chrome/.test(navigator.userAgent) &&
                                                !/BlackBerry/.test(navigator.platform),
                                                e =
                                                    "function" == typeof fetch &&
                                                    -1 !== fetch.toString().indexOf("[native code");
                                            return (
                                                (!t || e) &&
                                                "undefined" != typeof indexedDB &&
                                                "undefined" != typeof IDBKeyRange
                                            );
                                        } catch (t) {
                                            return !1;
                                        }
                                    })(),
                                    iterate: function (t, e) {
                                        var i = this,
                                            n = new o(function (e, n) {
                                                i.ready()
                                                    .then(function () {
                                                        O(i._dbInfo, "readonly", function (s, r) {
                                                            if (s) return n(s);
                                                            try {
                                                                var o = r
                                                                    .objectStore(i._dbInfo.storeName)
                                                                    .openCursor(),
                                                                    a = 1;
                                                                (o.onsuccess = function () {
                                                                    var i = o.result;
                                                                    if (i) {
                                                                        var n = i.value;
                                                                        _(n) && (n = E(n));
                                                                        var s = t(n, i.key, a++);
                                                                        void 0 !== s ? e(s) : i.continue();
                                                                    } else e();
                                                                }),
                                                                    (o.onerror = function () {
                                                                        n(o.error);
                                                                    });
                                                            } catch (t) {
                                                                n(t);
                                                            }
                                                        });
                                                    })
                                                    .catch(n);
                                            });
                                        return a(n, e), n;
                                    },
                                    getItem: function (t, e) {
                                        var i = this;
                                        t = l(t);
                                        var n = new o(function (e, n) {
                                            i.ready()
                                                .then(function () {
                                                    O(i._dbInfo, "readonly", function (s, r) {
                                                        if (s) return n(s);
                                                        try {
                                                            var o = r
                                                                .objectStore(i._dbInfo.storeName)
                                                                .get(t);
                                                            (o.onsuccess = function () {
                                                                var t = o.result;
                                                                void 0 === t && (t = null),
                                                                    _(t) && (t = E(t)),
                                                                    e(t);
                                                            }),
                                                                (o.onerror = function () {
                                                                    n(o.error);
                                                                });
                                                        } catch (t) {
                                                            n(t);
                                                        }
                                                    });
                                                })
                                                .catch(n);
                                        });
                                        return a(n, e), n;
                                    },
                                    setItem: function (t, e, i) {
                                        var n = this;
                                        t = l(t);
                                        var s = new o(function (i, s) {
                                            var r;
                                            n.ready()
                                                .then(function () {
                                                    return (
                                                        (r = n._dbInfo),
                                                        "[object Blob]" === f.call(e)
                                                            ? p(r.db).then(function (t) {
                                                                return t
                                                                    ? e
                                                                    : ((i = e),
                                                                        new o(function (t, e) {
                                                                            var n = new FileReader();
                                                                            (n.onerror = e),
                                                                                (n.onloadend = function (e) {
                                                                                    var n = btoa(
                                                                                        e.target.result || ""
                                                                                    );
                                                                                    t({
                                                                                        __local_forage_encoded_blob: !0,
                                                                                        data: n,
                                                                                        type: i.type,
                                                                                    });
                                                                                }),
                                                                                n.readAsBinaryString(i);
                                                                        }));
                                                                var i;
                                                            })
                                                            : e
                                                    );
                                                })
                                                .then(function (e) {
                                                    O(n._dbInfo, "readwrite", function (r, o) {
                                                        if (r) return s(r);
                                                        try {
                                                            var a = o.objectStore(n._dbInfo.storeName);
                                                            null === e && (e = void 0);
                                                            var h = a.put(e, t);
                                                            (o.oncomplete = function () {
                                                                void 0 === e && (e = null), i(e);
                                                            }),
                                                                (o.onabort = o.onerror =
                                                                    function () {
                                                                        var t = h.error
                                                                            ? h.error
                                                                            : h.transaction.error;
                                                                        s(t);
                                                                    });
                                                        } catch (t) {
                                                            s(t);
                                                        }
                                                    });
                                                })
                                                .catch(s);
                                        });
                                        return a(s, i), s;
                                    },
                                    removeItem: function (t, e) {
                                        var i = this;
                                        t = l(t);
                                        var n = new o(function (e, n) {
                                            i.ready()
                                                .then(function () {
                                                    O(i._dbInfo, "readwrite", function (s, r) {
                                                        if (s) return n(s);
                                                        try {
                                                            var o = r
                                                                .objectStore(i._dbInfo.storeName)
                                                                .delete(t);
                                                            (r.oncomplete = function () {
                                                                e();
                                                            }),
                                                                (r.onerror = function () {
                                                                    n(o.error);
                                                                }),
                                                                (r.onabort = function () {
                                                                    var t = o.error
                                                                        ? o.error
                                                                        : o.transaction.error;
                                                                    n(t);
                                                                });
                                                        } catch (t) {
                                                            n(t);
                                                        }
                                                    });
                                                })
                                                .catch(n);
                                        });
                                        return a(n, e), n;
                                    },
                                    clear: function (t) {
                                        var e = this,
                                            i = new o(function (t, i) {
                                                e.ready()
                                                    .then(function () {
                                                        O(e._dbInfo, "readwrite", function (n, s) {
                                                            if (n) return i(n);
                                                            try {
                                                                var r = s
                                                                    .objectStore(e._dbInfo.storeName)
                                                                    .clear();
                                                                (s.oncomplete = function () {
                                                                    t();
                                                                }),
                                                                    (s.onabort = s.onerror =
                                                                        function () {
                                                                            var t = r.error
                                                                                ? r.error
                                                                                : r.transaction.error;
                                                                            i(t);
                                                                        });
                                                            } catch (t) {
                                                                i(t);
                                                            }
                                                        });
                                                    })
                                                    .catch(i);
                                            });
                                        return a(i, t), i;
                                    },
                                    length: function (t) {
                                        var e = this,
                                            i = new o(function (t, i) {
                                                e.ready()
                                                    .then(function () {
                                                        O(e._dbInfo, "readonly", function (n, s) {
                                                            if (n) return i(n);
                                                            try {
                                                                var r = s
                                                                    .objectStore(e._dbInfo.storeName)
                                                                    .count();
                                                                (r.onsuccess = function () {
                                                                    t(r.result);
                                                                }),
                                                                    (r.onerror = function () {
                                                                        i(r.error);
                                                                    });
                                                            } catch (t) {
                                                                i(t);
                                                            }
                                                        });
                                                    })
                                                    .catch(i);
                                            });
                                        return a(i, t), i;
                                    },
                                    key: function (t, e) {
                                        var i = this,
                                            n = new o(function (e, n) {
                                                t < 0
                                                    ? e(null)
                                                    : i
                                                        .ready()
                                                        .then(function () {
                                                            O(i._dbInfo, "readonly", function (s, r) {
                                                                if (s) return n(s);
                                                                try {
                                                                    var o = r.objectStore(
                                                                        i._dbInfo.storeName
                                                                    ),
                                                                        a = !1,
                                                                        h = o.openKeyCursor();
                                                                    (h.onsuccess = function () {
                                                                        var i = h.result;
                                                                        i
                                                                            ? 0 === t || a
                                                                                ? e(i.key)
                                                                                : ((a = !0), i.advance(t))
                                                                            : e(null);
                                                                    }),
                                                                        (h.onerror = function () {
                                                                            n(h.error);
                                                                        });
                                                                } catch (t) {
                                                                    n(t);
                                                                }
                                                            });
                                                        })
                                                        .catch(n);
                                            });
                                        return a(n, e), n;
                                    },
                                    keys: function (t) {
                                        var e = this,
                                            i = new o(function (t, i) {
                                                e.ready()
                                                    .then(function () {
                                                        O(e._dbInfo, "readonly", function (n, s) {
                                                            if (n) return i(n);
                                                            try {
                                                                var r = s
                                                                    .objectStore(e._dbInfo.storeName)
                                                                    .openKeyCursor(),
                                                                    o = [];
                                                                (r.onsuccess = function () {
                                                                    var e = r.result;
                                                                    e ? (o.push(e.key), e.continue()) : t(o);
                                                                }),
                                                                    (r.onerror = function () {
                                                                        i(r.error);
                                                                    });
                                                            } catch (t) {
                                                                i(t);
                                                            }
                                                        });
                                                    })
                                                    .catch(i);
                                            });
                                        return a(i, t), i;
                                    },
                                    dropInstance: function (t, e) {
                                        e = c.apply(this, arguments);
                                        var i = this.config();
                                        (t = ("function" != typeof t && t) || {}).name ||
                                            ((t.name = t.name || i.name),
                                                (t.storeName = t.storeName || i.storeName));
                                        var n,
                                            r = this;
                                        if (t.name) {
                                            var h = t.name === i.name && r._dbInfo.db,
                                                l = h
                                                    ? o.resolve(r._dbInfo.db)
                                                    : b(t).then(function (e) {
                                                        var i = u[t.name],
                                                            n = i.forages;
                                                        i.db = e;
                                                        for (var s = 0; s < n.length; s++)
                                                            n[s]._dbInfo.db = e;
                                                        return e;
                                                    });
                                            n = t.storeName
                                                ? l.then(function (e) {
                                                    if (e.objectStoreNames.contains(t.storeName)) {
                                                        var i = e.version + 1;
                                                        g(t);
                                                        var n = u[t.name],
                                                            r = n.forages;
                                                        e.close();
                                                        for (var a = 0; a < r.length; a++) {
                                                            var h = r[a];
                                                            (h._dbInfo.db = null),
                                                                (h._dbInfo.version = i);
                                                        }
                                                        return new o(function (e, n) {
                                                            var r = s.open(t.name, i);
                                                            (r.onerror = function (t) {
                                                                r.result.close(), n(t);
                                                            }),
                                                                (r.onupgradeneeded = function () {
                                                                    r.result.deleteObjectStore(t.storeName);
                                                                }),
                                                                (r.onsuccess = function () {
                                                                    var t = r.result;
                                                                    t.close(), e(t);
                                                                });
                                                        })
                                                            .then(function (t) {
                                                                n.db = t;
                                                                for (var e = 0; e < r.length; e++) {
                                                                    var i = r[e];
                                                                    (i._dbInfo.db = t), m(i._dbInfo);
                                                                }
                                                            })
                                                            .catch(function (e) {
                                                                throw (
                                                                    ((v(t, e) || o.resolve()).catch(
                                                                        function () { }
                                                                    ),
                                                                        e)
                                                                );
                                                            });
                                                    }
                                                })
                                                : l.then(function (e) {
                                                    g(t);
                                                    var i = u[t.name],
                                                        n = i.forages;
                                                    e.close();
                                                    for (var r = 0; r < n.length; r++)
                                                        n[r]._dbInfo.db = null;
                                                    return new o(function (e, i) {
                                                        var n = s.deleteDatabase(t.name);
                                                        (n.onerror = function () {
                                                            var t = n.result;
                                                            t && t.close(), i(n.error);
                                                        }),
                                                            (n.onblocked = function () {
                                                                console.warn(
                                                                    'dropInstance blocked for database "' +
                                                                    t.name +
                                                                    '" until all open connections are closed'
                                                                );
                                                            }),
                                                            (n.onsuccess = function () {
                                                                var t = n.result;
                                                                t && t.close(), e(t);
                                                            });
                                                    })
                                                        .then(function (t) {
                                                            i.db = t;
                                                            for (var e = 0; e < n.length; e++)
                                                                m(n[e]._dbInfo);
                                                        })
                                                        .catch(function (e) {
                                                            throw (
                                                                ((v(t, e) || o.resolve()).catch(
                                                                    function () { }
                                                                ),
                                                                    e)
                                                            );
                                                        });
                                                });
                                        } else n = o.reject("Invalid arguments");
                                        return a(n, e), n;
                                    },
                                },
                                    T =
                                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                    k = /^~~local_forage_type~([^~]+)~/,
                                    N = "__lfsc__:".length,
                                    R = N + "arbf".length,
                                    I = Object.prototype.toString;
                                function L(t) {
                                    var e,
                                        i,
                                        n,
                                        s,
                                        r,
                                        o = 0.75 * t.length,
                                        a = t.length,
                                        h = 0;
                                    "=" === t[t.length - 1] &&
                                        (o--, "=" === t[t.length - 2] && o--);
                                    var l = new ArrayBuffer(o),
                                        c = new Uint8Array(l);
                                    for (e = 0; e < a; e += 4)
                                        (i = T.indexOf(t[e])),
                                            (n = T.indexOf(t[e + 1])),
                                            (s = T.indexOf(t[e + 2])),
                                            (r = T.indexOf(t[e + 3])),
                                            (c[h++] = (i << 2) | (n >> 4)),
                                            (c[h++] = ((15 & n) << 4) | (s >> 2)),
                                            (c[h++] = ((3 & s) << 6) | (63 & r));
                                    return l;
                                }
                                function j(t) {
                                    var e,
                                        i = new Uint8Array(t),
                                        n = "";
                                    for (e = 0; e < i.length; e += 3)
                                        (n += T[i[e] >> 2]),
                                            (n += T[((3 & i[e]) << 4) | (i[e + 1] >> 4)]),
                                            (n += T[((15 & i[e + 1]) << 2) | (i[e + 2] >> 6)]),
                                            (n += T[63 & i[e + 2]]);
                                    return (
                                        i.length % 3 == 2
                                            ? (n = n.substring(0, n.length - 1) + "=")
                                            : i.length % 3 == 1 &&
                                            (n = n.substring(0, n.length - 2) + "=="),
                                        n
                                    );
                                }
                                var A = {
                                    serialize: function (t, e) {
                                        var i = "";
                                        if (
                                            (t && (i = I.call(t)),
                                                t &&
                                                ("[object ArrayBuffer]" === i ||
                                                    (t.buffer &&
                                                        "[object ArrayBuffer]" === I.call(t.buffer))))
                                        ) {
                                            var n,
                                                s = "__lfsc__:";
                                            t instanceof ArrayBuffer
                                                ? ((n = t), (s += "arbf"))
                                                : ((n = t.buffer),
                                                    "[object Int8Array]" === i
                                                        ? (s += "si08")
                                                        : "[object Uint8Array]" === i
                                                            ? (s += "ui08")
                                                            : "[object Uint8ClampedArray]" === i
                                                                ? (s += "uic8")
                                                                : "[object Int16Array]" === i
                                                                    ? (s += "si16")
                                                                    : "[object Uint16Array]" === i
                                                                        ? (s += "ur16")
                                                                        : "[object Int32Array]" === i
                                                                            ? (s += "si32")
                                                                            : "[object Uint32Array]" === i
                                                                                ? (s += "ui32")
                                                                                : "[object Float32Array]" === i
                                                                                    ? (s += "fl32")
                                                                                    : "[object Float64Array]" === i
                                                                                        ? (s += "fl64")
                                                                                        : e(
                                                                                            new Error("Failed to get type for BinaryArray")
                                                                                        )),
                                                e(s + j(n));
                                        } else if ("[object Blob]" === i) {
                                            var r = new FileReader();
                                            (r.onload = function () {
                                                var i =
                                                    "~~local_forage_type~" +
                                                    t.type +
                                                    "~" +
                                                    j(this.result);
                                                e("__lfsc__:blob" + i);
                                            }),
                                                r.readAsArrayBuffer(t);
                                        } else
                                            try {
                                                e(JSON.stringify(t));
                                            } catch (i) {
                                                console.error(
                                                    "Couldn't convert value into a JSON string: ",
                                                    t
                                                ),
                                                    e(null, i);
                                            }
                                    },
                                    deserialize: function (t) {
                                        if ("__lfsc__:" !== t.substring(0, N)) return JSON.parse(t);
                                        var e,
                                            i = t.substring(R),
                                            n = t.substring(N, R);
                                        if ("blob" === n && k.test(i)) {
                                            var s = i.match(k);
                                            (e = s[1]), (i = i.substring(s[0].length));
                                        }
                                        var o = L(i);
                                        switch (n) {
                                            case "arbf":
                                                return o;
                                            case "blob":
                                                return r([o], { type: e });
                                            case "si08":
                                                return new Int8Array(o);
                                            case "ui08":
                                                return new Uint8Array(o);
                                            case "uic8":
                                                return new Uint8ClampedArray(o);
                                            case "si16":
                                                return new Int16Array(o);
                                            case "ur16":
                                                return new Uint16Array(o);
                                            case "si32":
                                                return new Int32Array(o);
                                            case "ui32":
                                                return new Uint32Array(o);
                                            case "fl32":
                                                return new Float32Array(o);
                                            case "fl64":
                                                return new Float64Array(o);
                                            default:
                                                throw new Error("Unkown type: " + n);
                                        }
                                    },
                                    stringToBuffer: L,
                                    bufferToString: j,
                                };
                                function z(t, e, i, n) {
                                    t.executeSql(
                                        "CREATE TABLE IF NOT EXISTS " +
                                        e.storeName +
                                        " (id INTEGER PRIMARY KEY, key unique, value)",
                                        [],
                                        i,
                                        n
                                    );
                                }
                                function P(t, e, i, n, s, r) {
                                    t.executeSql(
                                        i,
                                        n,
                                        s,
                                        function (t, o) {
                                            o.code === o.SYNTAX_ERR
                                                ? t.executeSql(
                                                    "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                                                    [e.storeName],
                                                    function (t, a) {
                                                        a.rows.length
                                                            ? r(t, o)
                                                            : z(
                                                                t,
                                                                e,
                                                                function () {
                                                                    t.executeSql(i, n, s, r);
                                                                },
                                                                r
                                                            );
                                                    },
                                                    r
                                                )
                                                : r(t, o);
                                        },
                                        r
                                    );
                                }
                                function D(t, e, i, n) {
                                    var s = this;
                                    t = l(t);
                                    var r = new o(function (r, o) {
                                        s.ready()
                                            .then(function () {
                                                void 0 === e && (e = null);
                                                var a = e,
                                                    h = s._dbInfo;
                                                h.serializer.serialize(e, function (e, l) {
                                                    l
                                                        ? o(l)
                                                        : h.db.transaction(
                                                            function (i) {
                                                                P(
                                                                    i,
                                                                    h,
                                                                    "INSERT OR REPLACE INTO " +
                                                                    h.storeName +
                                                                    " (key, value) VALUES (?, ?)",
                                                                    [t, e],
                                                                    function () {
                                                                        r(a);
                                                                    },
                                                                    function (t, e) {
                                                                        o(e);
                                                                    }
                                                                );
                                                            },
                                                            function (e) {
                                                                if (e.code === e.QUOTA_ERR) {
                                                                    if (n > 0)
                                                                        return void r(
                                                                            D.apply(s, [t, a, i, n - 1])
                                                                        );
                                                                    o(e);
                                                                }
                                                            }
                                                        );
                                                });
                                            })
                                            .catch(o);
                                    });
                                    return a(r, i), r;
                                }
                                function B(t) {
                                    return new o(function (e, i) {
                                        t.transaction(
                                            function (n) {
                                                n.executeSql(
                                                    "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                                    [],
                                                    function (i, n) {
                                                        for (var s = [], r = 0; r < n.rows.length; r++)
                                                            s.push(n.rows.item(r).name);
                                                        e({ db: t, storeNames: s });
                                                    },
                                                    function (t, e) {
                                                        i(e);
                                                    }
                                                );
                                            },
                                            function (t) {
                                                i(t);
                                            }
                                        );
                                    });
                                }
                                var q = {
                                    _driver: "webSQLStorage",
                                    _initStorage: function (t) {
                                        var e = this,
                                            i = { db: null };
                                        if (t)
                                            for (var n in t)
                                                i[n] = "string" != typeof t[n] ? t[n].toString() : t[n];
                                        var s = new o(function (t, n) {
                                            try {
                                                i.db = openDatabase(
                                                    i.name,
                                                    String(i.version),
                                                    i.description,
                                                    i.size
                                                );
                                            } catch (t) {
                                                return n(t);
                                            }
                                            i.db.transaction(function (s) {
                                                z(
                                                    s,
                                                    i,
                                                    function () {
                                                        (e._dbInfo = i), t();
                                                    },
                                                    function (t, e) {
                                                        n(e);
                                                    }
                                                );
                                            }, n);
                                        });
                                        return (i.serializer = A), s;
                                    },
                                    _support: "function" == typeof openDatabase,
                                    iterate: function (t, e) {
                                        var i = this,
                                            n = new o(function (e, n) {
                                                i.ready()
                                                    .then(function () {
                                                        var s = i._dbInfo;
                                                        s.db.transaction(function (i) {
                                                            P(
                                                                i,
                                                                s,
                                                                "SELECT * FROM " + s.storeName,
                                                                [],
                                                                function (i, n) {
                                                                    for (
                                                                        var r = n.rows, o = r.length, a = 0;
                                                                        a < o;
                                                                        a++
                                                                    ) {
                                                                        var h = r.item(a),
                                                                            l = h.value;
                                                                        if (
                                                                            (l && (l = s.serializer.deserialize(l)),
                                                                                void 0 !== (l = t(l, h.key, a + 1)))
                                                                        )
                                                                            return void e(l);
                                                                    }
                                                                    e();
                                                                },
                                                                function (t, e) {
                                                                    n(e);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(n);
                                            });
                                        return a(n, e), n;
                                    },
                                    getItem: function (t, e) {
                                        var i = this;
                                        t = l(t);
                                        var n = new o(function (e, n) {
                                            i.ready()
                                                .then(function () {
                                                    var s = i._dbInfo;
                                                    s.db.transaction(function (i) {
                                                        P(
                                                            i,
                                                            s,
                                                            "SELECT * FROM " +
                                                            s.storeName +
                                                            " WHERE key = ? LIMIT 1",
                                                            [t],
                                                            function (t, i) {
                                                                var n = i.rows.length
                                                                    ? i.rows.item(0).value
                                                                    : null;
                                                                n && (n = s.serializer.deserialize(n)), e(n);
                                                            },
                                                            function (t, e) {
                                                                n(e);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(n);
                                        });
                                        return a(n, e), n;
                                    },
                                    setItem: function (t, e, i) {
                                        return D.apply(this, [t, e, i, 1]);
                                    },
                                    removeItem: function (t, e) {
                                        var i = this;
                                        t = l(t);
                                        var n = new o(function (e, n) {
                                            i.ready()
                                                .then(function () {
                                                    var s = i._dbInfo;
                                                    s.db.transaction(function (i) {
                                                        P(
                                                            i,
                                                            s,
                                                            "DELETE FROM " + s.storeName + " WHERE key = ?",
                                                            [t],
                                                            function () {
                                                                e();
                                                            },
                                                            function (t, e) {
                                                                n(e);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(n);
                                        });
                                        return a(n, e), n;
                                    },
                                    clear: function (t) {
                                        var e = this,
                                            i = new o(function (t, i) {
                                                e.ready()
                                                    .then(function () {
                                                        var n = e._dbInfo;
                                                        n.db.transaction(function (e) {
                                                            P(
                                                                e,
                                                                n,
                                                                "DELETE FROM " + n.storeName,
                                                                [],
                                                                function () {
                                                                    t();
                                                                },
                                                                function (t, e) {
                                                                    i(e);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(i);
                                            });
                                        return a(i, t), i;
                                    },
                                    length: function (t) {
                                        var e = this,
                                            i = new o(function (t, i) {
                                                e.ready()
                                                    .then(function () {
                                                        var n = e._dbInfo;
                                                        n.db.transaction(function (e) {
                                                            P(
                                                                e,
                                                                n,
                                                                "SELECT COUNT(key) as c FROM " + n.storeName,
                                                                [],
                                                                function (e, i) {
                                                                    var n = i.rows.item(0).c;
                                                                    t(n);
                                                                },
                                                                function (t, e) {
                                                                    i(e);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(i);
                                            });
                                        return a(i, t), i;
                                    },
                                    key: function (t, e) {
                                        var i = this,
                                            n = new o(function (e, n) {
                                                i.ready()
                                                    .then(function () {
                                                        var s = i._dbInfo;
                                                        s.db.transaction(function (i) {
                                                            P(
                                                                i,
                                                                s,
                                                                "SELECT key FROM " +
                                                                s.storeName +
                                                                " WHERE id = ? LIMIT 1",
                                                                [t + 1],
                                                                function (t, i) {
                                                                    var n = i.rows.length
                                                                        ? i.rows.item(0).key
                                                                        : null;
                                                                    e(n);
                                                                },
                                                                function (t, e) {
                                                                    n(e);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(n);
                                            });
                                        return a(n, e), n;
                                    },
                                    keys: function (t) {
                                        var e = this,
                                            i = new o(function (t, i) {
                                                e.ready()
                                                    .then(function () {
                                                        var n = e._dbInfo;
                                                        n.db.transaction(function (e) {
                                                            P(
                                                                e,
                                                                n,
                                                                "SELECT key FROM " + n.storeName,
                                                                [],
                                                                function (e, i) {
                                                                    for (
                                                                        var n = [], s = 0;
                                                                        s < i.rows.length;
                                                                        s++
                                                                    )
                                                                        n.push(i.rows.item(s).key);
                                                                    t(n);
                                                                },
                                                                function (t, e) {
                                                                    i(e);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(i);
                                            });
                                        return a(i, t), i;
                                    },
                                    dropInstance: function (t, e) {
                                        e = c.apply(this, arguments);
                                        var i = this.config();
                                        (t = ("function" != typeof t && t) || {}).name ||
                                            ((t.name = t.name || i.name),
                                                (t.storeName = t.storeName || i.storeName));
                                        var n,
                                            s = this;
                                        return (
                                            a(
                                                (n = t.name
                                                    ? new o(function (e) {
                                                        var n;
                                                        (n =
                                                            t.name === i.name
                                                                ? s._dbInfo.db
                                                                : openDatabase(t.name, "", "", 0)),
                                                            t.storeName
                                                                ? e({ db: n, storeNames: [t.storeName] })
                                                                : e(B(n));
                                                    }).then(function (t) {
                                                        return new o(function (e, i) {
                                                            t.db.transaction(
                                                                function (n) {
                                                                    function s(t) {
                                                                        return new o(function (e, i) {
                                                                            n.executeSql(
                                                                                "DROP TABLE IF EXISTS " + t,
                                                                                [],
                                                                                function () {
                                                                                    e();
                                                                                },
                                                                                function (t, e) {
                                                                                    i(e);
                                                                                }
                                                                            );
                                                                        });
                                                                    }
                                                                    for (
                                                                        var r = [],
                                                                        a = 0,
                                                                        h = t.storeNames.length;
                                                                        a < h;
                                                                        a++
                                                                    )
                                                                        r.push(s(t.storeNames[a]));
                                                                    o.all(r)
                                                                        .then(function () {
                                                                            e();
                                                                        })
                                                                        .catch(function (t) {
                                                                            i(t);
                                                                        });
                                                                },
                                                                function (t) {
                                                                    i(t);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    : o.reject("Invalid arguments")),
                                                e
                                            ),
                                            n
                                        );
                                    },
                                };
                                function M(t, e) {
                                    var i = t.name + "/";
                                    return (
                                        t.storeName !== e.storeName && (i += t.storeName + "/"), i
                                    );
                                }
                                function W() {
                                    return (
                                        !(function () {
                                            try {
                                                return (
                                                    localStorage.setItem("_localforage_support_test", !0),
                                                    localStorage.removeItem("_localforage_support_test"),
                                                    !1
                                                );
                                            } catch (t) {
                                                return !0;
                                            }
                                        })() || localStorage.length > 0
                                    );
                                }
                                var F = {
                                    _driver: "localStorageWrapper",
                                    _initStorage: function (t) {
                                        var e = {};
                                        if (t) for (var i in t) e[i] = t[i];
                                        return (
                                            (e.keyPrefix = M(t, this._defaultConfig)),
                                            W()
                                                ? ((this._dbInfo = e),
                                                    (e.serializer = A),
                                                    o.resolve())
                                                : o.reject()
                                        );
                                    },
                                    _support: (function () {
                                        try {
                                            return (
                                                "undefined" != typeof localStorage &&
                                                "setItem" in localStorage &&
                                                !!localStorage.setItem
                                            );
                                        } catch (t) {
                                            return !1;
                                        }
                                    })(),
                                    iterate: function (t, e) {
                                        var i = this,
                                            n = i.ready().then(function () {
                                                for (
                                                    var e = i._dbInfo,
                                                    n = e.keyPrefix,
                                                    s = n.length,
                                                    r = localStorage.length,
                                                    o = 1,
                                                    a = 0;
                                                    a < r;
                                                    a++
                                                ) {
                                                    var h = localStorage.key(a);
                                                    if (0 === h.indexOf(n)) {
                                                        var l = localStorage.getItem(h);
                                                        if (
                                                            (l && (l = e.serializer.deserialize(l)),
                                                                void 0 !== (l = t(l, h.substring(s), o++)))
                                                        )
                                                            return l;
                                                    }
                                                }
                                            });
                                        return a(n, e), n;
                                    },
                                    getItem: function (t, e) {
                                        var i = this;
                                        t = l(t);
                                        var n = i.ready().then(function () {
                                            var e = i._dbInfo,
                                                n = localStorage.getItem(e.keyPrefix + t);
                                            return n && (n = e.serializer.deserialize(n)), n;
                                        });
                                        return a(n, e), n;
                                    },
                                    setItem: function (t, e, i) {
                                        var n = this;
                                        t = l(t);
                                        var s = n.ready().then(function () {
                                            void 0 === e && (e = null);
                                            var i = e;
                                            return new o(function (s, r) {
                                                var o = n._dbInfo;
                                                o.serializer.serialize(e, function (e, n) {
                                                    if (n) r(n);
                                                    else
                                                        try {
                                                            localStorage.setItem(o.keyPrefix + t, e), s(i);
                                                        } catch (t) {
                                                            ("QuotaExceededError" !== t.name &&
                                                                "NS_ERROR_DOM_QUOTA_REACHED" !== t.name) ||
                                                                r(t),
                                                                r(t);
                                                        }
                                                });
                                            });
                                        });
                                        return a(s, i), s;
                                    },
                                    removeItem: function (t, e) {
                                        var i = this;
                                        t = l(t);
                                        var n = i.ready().then(function () {
                                            var e = i._dbInfo;
                                            localStorage.removeItem(e.keyPrefix + t);
                                        });
                                        return a(n, e), n;
                                    },
                                    clear: function (t) {
                                        var e = this,
                                            i = e.ready().then(function () {
                                                for (
                                                    var t = e._dbInfo.keyPrefix,
                                                    i = localStorage.length - 1;
                                                    i >= 0;
                                                    i--
                                                ) {
                                                    var n = localStorage.key(i);
                                                    0 === n.indexOf(t) && localStorage.removeItem(n);
                                                }
                                            });
                                        return a(i, t), i;
                                    },
                                    length: function (t) {
                                        var e = this.keys().then(function (t) {
                                            return t.length;
                                        });
                                        return a(e, t), e;
                                    },
                                    key: function (t, e) {
                                        var i = this,
                                            n = i.ready().then(function () {
                                                var e,
                                                    n = i._dbInfo;
                                                try {
                                                    e = localStorage.key(t);
                                                } catch (t) {
                                                    e = null;
                                                }
                                                return e && (e = e.substring(n.keyPrefix.length)), e;
                                            });
                                        return a(n, e), n;
                                    },
                                    keys: function (t) {
                                        var e = this,
                                            i = e.ready().then(function () {
                                                for (
                                                    var t = e._dbInfo,
                                                    i = localStorage.length,
                                                    n = [],
                                                    s = 0;
                                                    s < i;
                                                    s++
                                                ) {
                                                    var r = localStorage.key(s);
                                                    0 === r.indexOf(t.keyPrefix) &&
                                                        n.push(r.substring(t.keyPrefix.length));
                                                }
                                                return n;
                                            });
                                        return a(i, t), i;
                                    },
                                    dropInstance: function (t, e) {
                                        if (
                                            ((e = c.apply(this, arguments)),
                                                !(t = ("function" != typeof t && t) || {}).name)
                                        ) {
                                            var i = this.config();
                                            (t.name = t.name || i.name),
                                                (t.storeName = t.storeName || i.storeName);
                                        }
                                        var n,
                                            s = this;
                                        return (
                                            a(
                                                (n = t.name
                                                    ? new o(function (e) {
                                                        t.storeName
                                                            ? e(M(t, s._defaultConfig))
                                                            : e(t.name + "/");
                                                    }).then(function (t) {
                                                        for (
                                                            var e = localStorage.length - 1;
                                                            e >= 0;
                                                            e--
                                                        ) {
                                                            var i = localStorage.key(e);
                                                            0 === i.indexOf(t) &&
                                                                localStorage.removeItem(i);
                                                        }
                                                    })
                                                    : o.reject("Invalid arguments")),
                                                e
                                            ),
                                            n
                                        );
                                    },
                                },
                                    U = function (t, e) {
                                        for (var i, n, s = t.length, r = 0; r < s;) {
                                            if (
                                                (i = t[r]) === (n = e) ||
                                                ("number" == typeof i &&
                                                    "number" == typeof n &&
                                                    isNaN(i) &&
                                                    isNaN(n))
                                            )
                                                return !0;
                                            r++;
                                        }
                                        return !1;
                                    },
                                    H =
                                        Array.isArray ||
                                        function (t) {
                                            return (
                                                "[object Array]" === Object.prototype.toString.call(t)
                                            );
                                        },
                                    V = {},
                                    X = {},
                                    G = { INDEXEDDB: C, WEBSQL: q, LOCALSTORAGE: F },
                                    Y = [
                                        G.INDEXEDDB._driver,
                                        G.WEBSQL._driver,
                                        G.LOCALSTORAGE._driver,
                                    ],
                                    K = ["dropInstance"],
                                    Z = [
                                        "clear",
                                        "getItem",
                                        "iterate",
                                        "key",
                                        "keys",
                                        "length",
                                        "removeItem",
                                        "setItem",
                                    ].concat(K),
                                    $ = {
                                        description: "",
                                        driver: Y.slice(),
                                        name: "localforage",
                                        size: 4980736,
                                        storeName: "keyvaluepairs",
                                        version: 1,
                                    };
                                function J(t, e) {
                                    t[e] = function () {
                                        var i = arguments;
                                        return t.ready().then(function () {
                                            return t[e].apply(t, i);
                                        });
                                    };
                                }
                                function Q() {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var e = arguments[t];
                                        if (e)
                                            for (var i in e)
                                                e.hasOwnProperty(i) &&
                                                    (H(e[i])
                                                        ? (arguments[0][i] = e[i].slice())
                                                        : (arguments[0][i] = e[i]));
                                    }
                                    return arguments[0];
                                }
                                var tt = new ((function () {
                                    function t(e) {
                                        for (var i in ((function (t, e) {
                                            if (!(t instanceof e))
                                                throw new TypeError(
                                                    "Cannot call a class as a function"
                                                );
                                        })(this, t),
                                            G))
                                            if (G.hasOwnProperty(i)) {
                                                var n = G[i],
                                                    s = n._driver;
                                                (this[i] = s), V[s] || this.defineDriver(n);
                                            }
                                        (this._defaultConfig = Q({}, $)),
                                            (this._config = Q({}, this._defaultConfig, e)),
                                            (this._driverSet = null),
                                            (this._initDriver = null),
                                            (this._ready = !1),
                                            (this._dbInfo = null),
                                            this._wrapLibraryMethodsWithReady(),
                                            this.setDriver(this._config.driver).catch(function () { });
                                    }
                                    return (
                                        (t.prototype.config = function (t) {
                                            if ("object" === (void 0 === t ? "undefined" : n(t))) {
                                                if (this._ready)
                                                    return new Error(
                                                        "Can't call config() after localforage has been used."
                                                    );
                                                for (var e in t) {
                                                    if (
                                                        ("storeName" === e &&
                                                            (t[e] = t[e].replace(/\W/g, "_")),
                                                            "version" === e && "number" != typeof t[e])
                                                    )
                                                        return new Error(
                                                            "Database version must be a number."
                                                        );
                                                    this._config[e] = t[e];
                                                }
                                                return (
                                                    !("driver" in t) ||
                                                    !t.driver ||
                                                    this.setDriver(this._config.driver)
                                                );
                                            }
                                            return "string" == typeof t
                                                ? this._config[t]
                                                : this._config;
                                        }),
                                        (t.prototype.defineDriver = function (t, e, i) {
                                            var n = new o(function (e, i) {
                                                try {
                                                    var n = t._driver,
                                                        s = new Error(
                                                            "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                                                        );
                                                    if (!t._driver) return void i(s);
                                                    for (
                                                        var r = Z.concat("_initStorage"),
                                                        h = 0,
                                                        l = r.length;
                                                        h < l;
                                                        h++
                                                    ) {
                                                        var c = r[h];
                                                        if ((!U(K, c) || t[c]) && "function" != typeof t[c])
                                                            return void i(s);
                                                    }
                                                    !(function () {
                                                        for (
                                                            var e = function (t) {
                                                                return function () {
                                                                    var e = new Error(
                                                                        "Method " +
                                                                        t +
                                                                        " is not implemented by the current driver"
                                                                    ),
                                                                        i = o.reject(e);
                                                                    return (
                                                                        a(i, arguments[arguments.length - 1]), i
                                                                    );
                                                                };
                                                            },
                                                            i = 0,
                                                            n = K.length;
                                                            i < n;
                                                            i++
                                                        ) {
                                                            var s = K[i];
                                                            t[s] || (t[s] = e(s));
                                                        }
                                                    })();
                                                    var d = function (i) {
                                                        V[n] &&
                                                            console.info(
                                                                "Redefining LocalForage driver: " + n
                                                            ),
                                                            (V[n] = t),
                                                            (X[n] = i),
                                                            e();
                                                    };
                                                    "_support" in t
                                                        ? t._support && "function" == typeof t._support
                                                            ? t._support().then(d, i)
                                                            : d(!!t._support)
                                                        : d(!0);
                                                } catch (t) {
                                                    i(t);
                                                }
                                            });
                                            return h(n, e, i), n;
                                        }),
                                        (t.prototype.driver = function () {
                                            return this._driver || null;
                                        }),
                                        (t.prototype.getDriver = function (t, e, i) {
                                            var n = V[t]
                                                ? o.resolve(V[t])
                                                : o.reject(new Error("Driver not found."));
                                            return h(n, e, i), n;
                                        }),
                                        (t.prototype.getSerializer = function (t) {
                                            var e = o.resolve(A);
                                            return h(e, t), e;
                                        }),
                                        (t.prototype.ready = function (t) {
                                            var e = this,
                                                i = e._driverSet.then(function () {
                                                    return (
                                                        null === e._ready && (e._ready = e._initDriver()),
                                                        e._ready
                                                    );
                                                });
                                            return h(i, t, t), i;
                                        }),
                                        (t.prototype.setDriver = function (t, e, i) {
                                            var n = this;
                                            H(t) || (t = [t]);
                                            var s = this._getSupportedDrivers(t);
                                            function r() {
                                                n._config.driver = n.driver();
                                            }
                                            function a(t) {
                                                return (
                                                    n._extend(t),
                                                    r(),
                                                    (n._ready = n._initStorage(n._config)),
                                                    n._ready
                                                );
                                            }
                                            var l =
                                                null !== this._driverSet
                                                    ? this._driverSet.catch(function () {
                                                        return o.resolve();
                                                    })
                                                    : o.resolve();
                                            return (
                                                (this._driverSet = l
                                                    .then(function () {
                                                        var t = s[0];
                                                        return (
                                                            (n._dbInfo = null),
                                                            (n._ready = null),
                                                            n.getDriver(t).then(function (t) {
                                                                (n._driver = t._driver),
                                                                    r(),
                                                                    n._wrapLibraryMethodsWithReady(),
                                                                    (n._initDriver = (function (t) {
                                                                        return function () {
                                                                            var e = 0;
                                                                            return (function i() {
                                                                                for (; e < t.length;) {
                                                                                    var s = t[e];
                                                                                    return (
                                                                                        e++,
                                                                                        (n._dbInfo = null),
                                                                                        (n._ready = null),
                                                                                        n.getDriver(s).then(a).catch(i)
                                                                                    );
                                                                                }
                                                                                r();
                                                                                var h = new Error(
                                                                                    "No available storage method found."
                                                                                );
                                                                                return (
                                                                                    (n._driverSet = o.reject(h)),
                                                                                    n._driverSet
                                                                                );
                                                                            })();
                                                                        };
                                                                    })(s));
                                                            })
                                                        );
                                                    })
                                                    .catch(function () {
                                                        r();
                                                        var t = new Error(
                                                            "No available storage method found."
                                                        );
                                                        return (n._driverSet = o.reject(t)), n._driverSet;
                                                    })),
                                                h(this._driverSet, e, i),
                                                this._driverSet
                                            );
                                        }),
                                        (t.prototype.supports = function (t) {
                                            return !!X[t];
                                        }),
                                        (t.prototype._extend = function (t) {
                                            Q(this, t);
                                        }),
                                        (t.prototype._getSupportedDrivers = function (t) {
                                            for (var e = [], i = 0, n = t.length; i < n; i++) {
                                                var s = t[i];
                                                this.supports(s) && e.push(s);
                                            }
                                            return e;
                                        }),
                                        (t.prototype._wrapLibraryMethodsWithReady = function () {
                                            for (var t = 0, e = Z.length; t < e; t++) J(this, Z[t]);
                                        }),
                                        (t.prototype.createInstance = function (e) {
                                            return new t(e);
                                        }),
                                        t
                                    );
                                })())();
                                e.exports = tt;
                            },
                            { 3: 3 },
                        ],
                    },
                    {},
                    [4]
                )(4);
            }.call(this, i(16)));
        },
        function (t, e, i) {
            "use strict";
            var n = i(3),
                s = i.n(n),
                r = i(0),
                o = i(5),
                a = i(4),
                h = i(2),
                l = i(6),
                c = i(8);
            var d = function (t, e, i, n) {
                var s,
                    o = "undefined" != typeof window && window.URL,
                    h = o ? "blob" : "arraybuffer",
                    l = new r.defer(),
                    c = new XMLHttpRequest(),
                    d = XMLHttpRequest.prototype;
                for (s in ("overrideMimeType" in d ||
                    Object.defineProperty(d, "overrideMimeType", {
                        value: function () { },
                    }),
                    i && (c.withCredentials = !0),
                    (c.onreadystatechange = function () {
                        if (this.readyState === XMLHttpRequest.DONE) {
                            var t = !1;
                            if (
                                (("" !== this.responseType &&
                                    "document" !== this.responseType) ||
                                    (t = this.responseXML),
                                    200 === this.status || 0 === this.status || t)
                            ) {
                                var i;
                                if (!this.response && !t)
                                    return (
                                        l.reject({
                                            status: this.status,
                                            message: "Empty Response",
                                            stack: new Error().stack,
                                        }),
                                        l.promise
                                    );
                                if (403 === this.status)
                                    return (
                                        l.reject({
                                            status: this.status,
                                            response: this.response,
                                            message: "Forbidden",
                                            stack: new Error().stack,
                                        }),
                                        l.promise
                                    );
                                (i = t
                                    ? this.responseXML
                                    : Object(r.isXml)(e)
                                        ? Object(r.parse)(this.response, "text/xml")
                                        : "xhtml" == e
                                            ? Object(r.parse)(this.response, "application/xhtml+xml")
                                            : "html" == e || "htm" == e
                                                ? Object(r.parse)(this.response, "text/html")
                                                : "json" == e
                                                    ? JSON.parse(this.response)
                                                    : "blob" == e
                                                        ? o
                                                            ? this.response
                                                            : new Blob([this.response])
                                                        : this.response),
                                    l.resolve(i);
                            } else
                                l.reject({
                                    status: this.status,
                                    message: this.response,
                                    stack: new Error().stack,
                                });
                        }
                    }),
                    (c.onerror = function (t) {
                        l.reject(t);
                    }),
                    c.open("GET", t, !0),
                    n))
                    c.setRequestHeader(s, n[s]);
                return (
                    "json" == e && c.setRequestHeader("Accept", "application/json"),
                    e || (e = new a.a(t).extension),
                    "blob" == e && (c.responseType = h),
                    Object(r.isXml)(e) && c.overrideMimeType("text/xml"),
                    "binary" == e && (c.responseType = "arraybuffer"),
                    c.send(),
                    l.promise
                );
            },
                u = i(14);
            var f = class {
                constructor(t, e) {
                    (this.idref = t.idref),
                        (this.linear = "yes" === t.linear),
                        (this.properties = t.properties),
                        (this.index = t.index),
                        (this.href = t.href),
                        (this.url = t.url),
                        (this.canonical = t.canonical),
                        (this.next = t.next),
                        (this.prev = t.prev),
                        (this.cfiBase = t.cfiBase),
                        e
                            ? (this.hooks = e)
                            : ((this.hooks = {}),
                                (this.hooks.serialize = new l.a(this)),
                                (this.hooks.content = new l.a(this))),
                        (this.document = void 0),
                        (this.contents = void 0),
                        (this.output = void 0);
                }
                load(t) {
                    var e = t || this.request || d,
                        i = new r.defer(),
                        n = i.promise;
                    return (
                        this.contents
                            ? i.resolve(this.contents)
                            : e(this.url)
                                .then(
                                    function (t) {
                                        return (
                                            (this.document = t),
                                            (this.contents = t.documentElement),
                                            this.hooks.content.trigger(this.document, this)
                                        );
                                    }.bind(this)
                                )
                                .then(
                                    function () {
                                        i.resolve(this.contents);
                                    }.bind(this)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                        n
                    );
                }
                base() {
                    return Object(c.a)(this.document, this);
                }
                render(t) {
                    var e = new r.defer(),
                        i = e.promise;
                    return (
                        this.output,
                        this.load(t)
                            .then(
                                function (t) {
                                    var e =
                                        (
                                            ("undefined" != typeof navigator &&
                                                navigator.userAgent) ||
                                            ""
                                        ).indexOf("Trident") >= 0,
                                        i = new (
                                            "undefined" == typeof XMLSerializer || e
                                                ? u.DOMParser
                                                : XMLSerializer
                                        )();
                                    return (this.output = i.serializeToString(t)), this.output;
                                }.bind(this)
                            )
                            .then(
                                function () {
                                    return this.hooks.serialize.trigger(this.output, this);
                                }.bind(this)
                            )
                            .then(
                                function () {
                                    e.resolve(this.output);
                                }.bind(this)
                            )
                            .catch(function (t) {
                                e.reject(t);
                            }),
                        i
                    );
                }
                find(t) {
                    var e = this,
                        i = [],
                        n = t.toLowerCase();
                    return (
                        Object(r.sprint)(e.document, function (t) {
                            !(function (t) {
                                for (
                                    var s,
                                    r,
                                    o,
                                    a = t.textContent.toLowerCase(),
                                    h = e.document.createRange(),
                                    l = -1;
                                    -1 != r;

                                )
                                    -1 != (r = a.indexOf(n, l + 1)) &&
                                        ((h = e.document.createRange()).setStart(t, r),
                                            h.setEnd(t, r + n.length),
                                            (s = e.cfiFromRange(h)),
                                            (o =
                                                t.textContent.length < 150
                                                    ? t.textContent
                                                    : "..." +
                                                    (o = t.textContent.substring(r - 75, r + 75)) +
                                                    "..."),
                                            i.push({ cfi: s, excerpt: o })),
                                        (l = r);
                            })(t);
                        }),
                        i
                    );
                }
                search(t, e = 5) {
                    if (void 0 === document.createTreeWalker) return this.find(t);
                    let i = [];
                    const n = this,
                        s = t.toLowerCase(),
                        r = function (t) {
                            const e = t
                                .reduce((t, e) => t + e.textContent, "")
                                .toLowerCase()
                                .indexOf(s);
                            if (-1 != e) {
                                const r = 0,
                                    o = e + s.length;
                                let a = 0,
                                    h = 0;
                                if (e < t[r].length) {
                                    let s;
                                    for (; a < t.length - 1 && ((h += t[a].length), !(o <= h));)
                                        a += 1;
                                    let l = t[r],
                                        c = t[a],
                                        d = n.document.createRange();
                                    d.setStart(l, e);
                                    let u = t
                                        .slice(0, a)
                                        .reduce((t, e) => t + e.textContent.length, 0);
                                    d.setEnd(c, u > o ? o : o - u), (s = n.cfiFromRange(d));
                                    let f = t
                                        .slice(0, a + 1)
                                        .reduce((t, e) => t + e.textContent, "");
                                    f.length > 150 &&
                                        ((f = f.substring(e - 75, e + 75)),
                                            (f = "..." + f + "...")),
                                        i.push({ cfi: s, excerpt: f });
                                }
                            }
                        },
                        o = document.createTreeWalker(
                            n.document,
                            NodeFilter.SHOW_TEXT,
                            null,
                            !1
                        );
                    let a,
                        h = [];
                    for (; (a = o.nextNode());)
                        h.push(a), h.length == e && (r(h.slice(0, e)), (h = h.slice(1, e)));
                    return h.length > 0 && r(h), i;
                }
                reconcileLayoutSettings(t) {
                    var e = {
                        layout: t.layout,
                        spread: t.spread,
                        orientation: t.orientation,
                    };
                    return (
                        this.properties.forEach(function (t) {
                            var i,
                                n,
                                s = t.replace("rendition:", ""),
                                r = s.indexOf("-");
                            -1 != r &&
                                ((i = s.slice(0, r)), (n = s.slice(r + 1)), (e[i] = n));
                        }),
                        e
                    );
                }
                cfiFromRange(t) {
                    return new h.a(t, this.cfiBase).toString();
                }
                cfiFromElement(t) {
                    return new h.a(t, this.cfiBase).toString();
                }
                unload() {
                    (this.document = void 0),
                        (this.contents = void 0),
                        (this.output = void 0);
                }
                destroy() {
                    this.unload(),
                        this.hooks.serialize.clear(),
                        this.hooks.content.clear(),
                        (this.hooks = void 0),
                        (this.idref = void 0),
                        (this.linear = void 0),
                        (this.properties = void 0),
                        (this.index = void 0),
                        (this.href = void 0),
                        (this.url = void 0),
                        (this.next = void 0),
                        (this.prev = void 0),
                        (this.cfiBase = void 0);
                }
            };
            var p = class {
                constructor() {
                    (this.spineItems = []),
                        (this.spineByHref = {}),
                        (this.spineById = {}),
                        (this.hooks = {}),
                        (this.hooks.serialize = new l.a()),
                        (this.hooks.content = new l.a()),
                        this.hooks.content.register(c.a),
                        this.hooks.content.register(c.b),
                        this.hooks.content.register(c.d),
                        (this.epubcfi = new h.a()),
                        (this.loaded = !1),
                        (this.items = void 0),
                        (this.manifest = void 0),
                        (this.spineNodeIndex = void 0),
                        (this.baseUrl = void 0),
                        (this.length = void 0);
                }
                unpack(t, e, i) {
                    (this.items = t.spine),
                        (this.manifest = t.manifest),
                        (this.spineNodeIndex = t.spineNodeIndex),
                        (this.baseUrl = t.baseUrl || t.basePath || ""),
                        (this.length = this.items.length),
                        this.items.forEach((t, n) => {
                            var s,
                                r = this.manifest[t.idref];
                            (t.index = n),
                                (t.cfiBase = this.epubcfi.generateChapterComponent(
                                    this.spineNodeIndex,
                                    t.index,
                                    t.idref
                                )),
                                t.href &&
                                ((t.url = e(t.href, !0)), (t.canonical = i(t.href))),
                                r &&
                                ((t.href = r.href),
                                    (t.url = e(t.href, !0)),
                                    (t.canonical = i(t.href)),
                                    r.properties.length &&
                                    t.properties.push.apply(t.properties, r.properties)),
                                "yes" === t.linear
                                    ? ((t.prev = function () {
                                        let e = t.index;
                                        for (; e > 0;) {
                                            let t = this.get(e - 1);
                                            if (t && t.linear) return t;
                                            e -= 1;
                                        }
                                    }.bind(this)),
                                        (t.next = function () {
                                            let e = t.index;
                                            for (; e < this.spineItems.length - 1;) {
                                                let t = this.get(e + 1);
                                                if (t && t.linear) return t;
                                                e += 1;
                                            }
                                        }.bind(this)))
                                    : ((t.prev = function () { }), (t.next = function () { })),
                                (s = new f(t, this.hooks)),
                                this.append(s);
                        }),
                        (this.loaded = !0);
                }
                get(t) {
                    var e = 0;
                    if (void 0 === t)
                        for (; e < this.spineItems.length;) {
                            let t = this.spineItems[e];
                            if (t && t.linear) break;
                            e += 1;
                        }
                    else if (this.epubcfi.isCfiString(t)) {
                        e = new h.a(t).spinePos;
                    } else
                        "number" == typeof t || !1 === isNaN(t)
                            ? (e = t)
                            : "string" == typeof t && 0 === t.indexOf("#")
                                ? (e = this.spineById[t.substring(1)])
                                : "string" == typeof t &&
                                ((t = t.split("#")[0]),
                                    (e = this.spineByHref[t] || this.spineByHref[encodeURI(t)]));
                    return this.spineItems[e] || null;
                }
                append(t) {
                    var e = this.spineItems.length;
                    return (
                        (t.index = e),
                        this.spineItems.push(t),
                        (this.spineByHref[decodeURI(t.href)] = e),
                        (this.spineByHref[encodeURI(t.href)] = e),
                        (this.spineByHref[t.href] = e),
                        (this.spineById[t.idref] = e),
                        e
                    );
                }
                prepend(t) {
                    return (
                        (this.spineByHref[t.href] = 0),
                        (this.spineById[t.idref] = 0),
                        this.spineItems.forEach(function (t, e) {
                            t.index = e;
                        }),
                        0
                    );
                }
                remove(t) {
                    var e = this.spineItems.indexOf(t);
                    if (e > -1)
                        return (
                            delete this.spineByHref[t.href],
                            delete this.spineById[t.idref],
                            this.spineItems.splice(e, 1)
                        );
                }
                each() {
                    return this.spineItems.forEach.apply(this.spineItems, arguments);
                }
                first() {
                    let t = 0;
                    do {
                        let e = this.get(t);
                        if (e && e.linear) return e;
                        t += 1;
                    } while (t < this.spineItems.length);
                }
                last() {
                    let t = this.spineItems.length - 1;
                    do {
                        let e = this.get(t);
                        if (e && e.linear) return e;
                        t -= 1;
                    } while (t >= 0);
                }
                destroy() {
                    this.each((t) => t.destroy()),
                        (this.spineItems = void 0),
                        (this.spineByHref = void 0),
                        (this.spineById = void 0),
                        this.hooks.serialize.clear(),
                        this.hooks.content.clear(),
                        (this.hooks = void 0),
                        (this.epubcfi = void 0),
                        (this.loaded = !1),
                        (this.items = void 0),
                        (this.manifest = void 0),
                        (this.spineNodeIndex = void 0),
                        (this.baseUrl = void 0),
                        (this.length = void 0);
                }
            },
                g = i(9),
                m = i(1);
            class v {
                constructor(t, e, i) {
                    (this.spine = t),
                        (this.request = e),
                        (this.pause = i || 100),
                        (this.q = new g.a(this)),
                        (this.epubcfi = new h.a()),
                        (this._locations = []),
                        (this._locationsWords = []),
                        (this.total = 0),
                        (this.break = 150),
                        (this._current = 0),
                        (this._wordCounter = 0),
                        (this.currentLocation = ""),
                        (this._currentCfi = ""),
                        (this.processingTimeout = void 0);
                }
                generate(t) {
                    return (
                        t && (this.break = t),
                        this.q.pause(),
                        this.spine.each(
                            function (t) {
                                t.linear && this.q.enqueue(this.process.bind(this), t);
                            }.bind(this)
                        ),
                        this.q.run().then(
                            function () {
                                return (
                                    (this.total = this._locations.length - 1),
                                    this._currentCfi && (this.currentLocation = this._currentCfi),
                                    this._locations
                                );
                            }.bind(this)
                        )
                    );
                }
                createRange() {
                    return {
                        startContainer: void 0,
                        startOffset: void 0,
                        endContainer: void 0,
                        endOffset: void 0,
                    };
                }
                process(t) {
                    return t.load(this.request).then(
                        function (e) {
                            var i = new r.defer(),
                                n = this.parse(e, t.cfiBase);
                            return (
                                (this._locations = this._locations.concat(n)),
                                t.unload(),
                                (this.processingTimeout = setTimeout(
                                    () => i.resolve(n),
                                    this.pause
                                )),
                                i.promise
                            );
                        }.bind(this)
                    );
                }
                parse(t, e, i) {
                    var n,
                        s,
                        o = [],
                        a = t.ownerDocument,
                        l = Object(r.qs)(a, "body"),
                        c = 0,
                        d = i || this.break;
                    if (
                        (Object(r.sprint)(
                            l,
                            function (t) {
                                var i,
                                    r = t.length,
                                    a = 0;
                                if (0 === t.textContent.trim().length) return !1;
                                for (
                                    0 == c &&
                                    (((n = this.createRange()).startContainer = t),
                                        (n.startOffset = 0)),
                                    (i = d - c) > r && ((c += r), (a = r));
                                    a < r;

                                )
                                    if (
                                        ((i = d - c),
                                            0 === c &&
                                            ((a += 1),
                                                ((n = this.createRange()).startContainer = t),
                                                (n.startOffset = a)),
                                            a + i >= r)
                                    )
                                        (c += r - a), (a = r);
                                    else {
                                        (a += i), (n.endContainer = t), (n.endOffset = a);
                                        let s = new h.a(n, e).toString();
                                        o.push(s), (c = 0);
                                    }
                                s = t;
                            }.bind(this)
                        ),
                            n && n.startContainer && s)
                    ) {
                        (n.endContainer = s), (n.endOffset = s.length);
                        let t = new h.a(n, e).toString();
                        o.push(t), (c = 0);
                    }
                    return o;
                }
                generateFromWords(t, e, i) {
                    var n = t ? new h.a(t) : void 0;
                    return (
                        this.q.pause(),
                        (this._locationsWords = []),
                        (this._wordCounter = 0),
                        this.spine.each(
                            function (t) {
                                t.linear &&
                                    (n
                                        ? t.index >= n.spinePos &&
                                        this.q.enqueue(this.processWords.bind(this), t, e, n, i)
                                        : this.q.enqueue(this.processWords.bind(this), t, e, n, i));
                            }.bind(this)
                        ),
                        this.q.run().then(
                            function () {
                                return (
                                    this._currentCfi && (this.currentLocation = this._currentCfi),
                                    this._locationsWords
                                );
                            }.bind(this)
                        )
                    );
                }
                processWords(t, e, i, n) {
                    return n && this._locationsWords.length >= n
                        ? Promise.resolve()
                        : t.load(this.request).then(
                            function (s) {
                                var o = new r.defer(),
                                    a = this.parseWords(s, t, e, i),
                                    h = n - this._locationsWords.length;
                                return (
                                    (this._locationsWords = this._locationsWords.concat(
                                        a.length >= n ? a.slice(0, h) : a
                                    )),
                                    t.unload(),
                                    (this.processingTimeout = setTimeout(
                                        () => o.resolve(a),
                                        this.pause
                                    )),
                                    o.promise
                                );
                            }.bind(this)
                        );
                }
                countWords(t) {
                    return (t = (t = (t = t.replace(/(^\s*)|(\s*$)/gi, "")).replace(
                        /[ ]{2,}/gi,
                        " "
                    )).replace(/\n /, "\n")).split(" ").length;
                }
                parseWords(t, e, i, n) {
                    var s,
                        o = e.cfiBase,
                        a = [],
                        l = t.ownerDocument,
                        c = Object(r.qs)(l, "body"),
                        d = i,
                        u = !n || n.spinePos !== e.index;
                    n &&
                        e.index === n.spinePos &&
                        (s = n.findNode(
                            n.range ? n.path.steps.concat(n.start.steps) : n.path.steps,
                            t.ownerDocument
                        ));
                    return (
                        Object(r.sprint)(
                            c,
                            function (t) {
                                if (!u) {
                                    if (t !== s) return !1;
                                    u = !0;
                                }
                                if (
                                    t.textContent.length < 10 &&
                                    0 === t.textContent.trim().length
                                )
                                    return !1;
                                var e,
                                    i = this.countWords(t.textContent),
                                    n = 0;
                                if (0 === i) return !1;
                                for (
                                    (e = d - this._wordCounter) > i &&
                                    ((this._wordCounter += i), (n = i));
                                    n < i;

                                )
                                    if (n + (e = d - this._wordCounter) >= i)
                                        (this._wordCounter += i - n), (n = i);
                                    else {
                                        n += e;
                                        let i = new h.a(t, o);
                                        a.push({ cfi: i.toString(), wordCount: this._wordCounter }),
                                            (this._wordCounter = 0);
                                    }
                                t;
                            }.bind(this)
                        ),
                        a
                    );
                }
                locationFromCfi(t) {
                    let e;
                    return (
                        h.a.prototype.isCfiString(t) && (t = new h.a(t)),
                        0 === this._locations.length
                            ? -1
                            : ((e = Object(r.locationOf)(
                                t,
                                this._locations,
                                this.epubcfi.compare
                            )),
                                e > this.total ? this.total : e)
                    );
                }
                percentageFromCfi(t) {
                    if (0 === this._locations.length) return null;
                    var e = this.locationFromCfi(t);
                    return this.percentageFromLocation(e);
                }
                percentageFromLocation(t) {
                    return t && this.total ? t / this.total : 0;
                }
                cfiFromLocation(t) {
                    var e = -1;
                    return (
                        "number" != typeof t && (t = parseInt(t)),
                        t >= 0 && t < this._locations.length && (e = this._locations[t]),
                        e
                    );
                }
                cfiFromPercentage(t) {
                    let e;
                    if (
                        (t > 1 &&
                            console.warn(
                                "Normalize cfiFromPercentage value to between 0 - 1"
                            ),
                            t >= 1)
                    ) {
                        let t = new h.a(this._locations[this.total]);
                        return t.collapse(), t.toString();
                    }
                    return (e = Math.ceil(this.total * t)), this.cfiFromLocation(e);
                }
                load(t) {
                    return (
                        (this._locations = "string" == typeof t ? JSON.parse(t) : t),
                        (this.total = this._locations.length - 1),
                        this._locations
                    );
                }
                save() {
                    return JSON.stringify(this._locations);
                }
                getCurrent() {
                    return this._current;
                }
                setCurrent(t) {
                    var e;
                    if ("string" == typeof t) this._currentCfi = t;
                    else {
                        if ("number" != typeof t) return;
                        this._current = t;
                    }
                    0 !== this._locations.length &&
                        ("string" == typeof t
                            ? ((e = this.locationFromCfi(t)), (this._current = e))
                            : (e = t),
                            this.emit(m.c.LOCATIONS.CHANGED, {
                                percentage: this.percentageFromLocation(e),
                            }));
                }
                get currentLocation() {
                    return this._current;
                }
                set currentLocation(t) {
                    this.setCurrent(t);
                }
                length() {
                    return this._locations.length;
                }
                destroy() {
                    (this.spine = void 0),
                        (this.request = void 0),
                        (this.pause = void 0),
                        this.q.stop(),
                        (this.q = void 0),
                        (this.epubcfi = void 0),
                        (this._locations = void 0),
                        (this.total = void 0),
                        (this.break = void 0),
                        (this._current = void 0),
                        (this.currentLocation = void 0),
                        (this._currentCfi = void 0),
                        clearTimeout(this.processingTimeout);
                }
            }
            s()(v.prototype);
            var y = v,
                b = i(7),
                w = i.n(b);
            var x = class {
                constructor(t) {
                    (this.packagePath = ""),
                        (this.directory = ""),
                        (this.encoding = ""),
                        t && this.parse(t);
                }
                parse(t) {
                    var e;
                    if (!t) throw new Error("Container File Not Found");
                    if (!(e = Object(r.qs)(t, "rootfile")))
                        throw new Error("No RootFile Found");
                    (this.packagePath = e.getAttribute("full-path")),
                        (this.directory = w.a.dirname(this.packagePath)),
                        (this.encoding = t.xmlEncoding);
                }
                destroy() {
                    (this.packagePath = void 0),
                        (this.directory = void 0),
                        (this.encoding = void 0);
                }
            };
            var E = class {
                constructor(t) {
                    (this.manifest = {}),
                        (this.navPath = ""),
                        (this.ncxPath = ""),
                        (this.coverPath = ""),
                        (this.spineNodeIndex = 0),
                        (this.spine = []),
                        (this.metadata = {}),
                        t && this.parse(t);
                }
                parse(t) {
                    var e, i, n;
                    if (!t) throw new Error("Package File Not Found");
                    if (!(e = Object(r.qs)(t, "metadata")))
                        throw new Error("No Metadata Found");
                    if (!(i = Object(r.qs)(t, "manifest")))
                        throw new Error("No Manifest Found");
                    if (!(n = Object(r.qs)(t, "spine")))
                        throw new Error("No Spine Found");
                    return (
                        (this.manifest = this.parseManifest(i)),
                        (this.navPath = this.findNavPath(i)),
                        (this.ncxPath = this.findNcxPath(i, n)),
                        (this.coverPath = this.findCoverPath(t)),
                        (this.spineNodeIndex = Object(r.indexOfElementNode)(n)),
                        (this.spine = this.parseSpine(n, this.manifest)),
                        (this.uniqueIdentifier = this.findUniqueIdentifier(t)),
                        (this.metadata = this.parseMetadata(e)),
                        (this.metadata.direction = n.getAttribute(
                            "page-progression-direction"
                        )),
                        {
                            metadata: this.metadata,
                            spine: this.spine,
                            manifest: this.manifest,
                            navPath: this.navPath,
                            ncxPath: this.ncxPath,
                            coverPath: this.coverPath,
                            spineNodeIndex: this.spineNodeIndex,
                        }
                    );
                }
                parseMetadata(t) {
                    var e = {};
                    return (
                        (e.title = this.getElementText(t, "title")),
                        (e.creator = this.getElementText(t, "creator")),
                        (e.description = this.getElementText(t, "description")),
                        (e.pubdate = this.getElementText(t, "date")),
                        (e.publisher = this.getElementText(t, "publisher")),
                        (e.identifier = this.getElementText(t, "identifier")),
                        (e.language = this.getElementText(t, "language")),
                        (e.rights = this.getElementText(t, "rights")),
                        (e.modified_date = this.getPropertyText(t, "dcterms:modified")),
                        (e.layout = this.getPropertyText(t, "rendition:layout")),
                        (e.orientation = this.getPropertyText(t, "rendition:orientation")),
                        (e.flow = this.getPropertyText(t, "rendition:flow")),
                        (e.viewport = this.getPropertyText(t, "rendition:viewport")),
                        (e.media_active_class = this.getPropertyText(
                            t,
                            "media:active-class"
                        )),
                        (e.spread = this.getPropertyText(t, "rendition:spread")),
                        e
                    );
                }
                parseManifest(t) {
                    var e = {},
                        i = Object(r.qsa)(t, "item");
                    return (
                        Array.prototype.slice.call(i).forEach(function (t) {
                            var i = t.getAttribute("id"),
                                n = t.getAttribute("href") || "",
                                s = t.getAttribute("media-type") || "",
                                r = t.getAttribute("media-overlay") || "",
                                o = t.getAttribute("properties") || "";
                            e[i] = {
                                href: n,
                                type: s,
                                overlay: r,
                                properties: o.length ? o.split(" ") : [],
                            };
                        }),
                        e
                    );
                }
                parseSpine(t, e) {
                    var i = [],
                        n = Object(r.qsa)(t, "itemref");
                    return (
                        Array.prototype.slice.call(n).forEach(function (t, e) {
                            var n = t.getAttribute("idref"),
                                s = t.getAttribute("properties") || "",
                                r = s.length ? s.split(" ") : [],
                                o = {
                                    idref: n,
                                    linear: t.getAttribute("linear") || "yes",
                                    properties: r,
                                    index: e,
                                };
                            i.push(o);
                        }),
                        i
                    );
                }
                findUniqueIdentifier(t) {
                    var e = t.documentElement.getAttribute("unique-identifier");
                    if (!e) return "";
                    var i = t.getElementById(e);
                    return i &&
                        "identifier" === i.localName &&
                        "http://purl.org/dc/elements/1.1/" === i.namespaceURI &&
                        i.childNodes.length > 0
                        ? i.childNodes[0].nodeValue.trim()
                        : "";
                }
                findNavPath(t) {
                    var e = Object(r.qsp)(t, "item", { properties: "nav" });
                    return !!e && e.getAttribute("href");
                }
                findNcxPath(t, e) {
                    var i,
                        n = Object(r.qsp)(t, "item", {
                            "media-type": "application/x-dtbncx+xml",
                        });
                    return (
                        n ||
                        ((i = e.getAttribute("toc")) && (n = t.querySelector("#" + i))),
                        !!n && n.getAttribute("href")
                    );
                }
                findCoverPath(t) {
                    Object(r.qs)(t, "package").getAttribute("version");
                    var e = Object(r.qsp)(t, "item", { properties: "cover-image" });
                    if (e) return e.getAttribute("href");
                    var i = Object(r.qsp)(t, "meta", { name: "cover" });
                    if (i) {
                        var n = i.getAttribute("content"),
                            s = t.getElementById(n);
                        return s ? s.getAttribute("href") : "";
                    }
                    return !1;
                }
                getElementText(t, e) {
                    var i,
                        n = t.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", e);
                    return n && 0 !== n.length && (i = n[0]).childNodes.length
                        ? i.childNodes[0].nodeValue
                        : "";
                }
                getPropertyText(t, e) {
                    var i = Object(r.qsp)(t, "meta", { property: e });
                    return i && i.childNodes.length ? i.childNodes[0].nodeValue : "";
                }
                load(t) {
                    this.metadata = t.metadata;
                    let e = t.readingOrder || t.spine;
                    return (
                        (this.spine = e.map(
                            (t, e) => ((t.index = e), (t.linear = t.linear || "yes"), t)
                        )),
                        t.resources.forEach((t, e) => {
                            (this.manifest[e] = t),
                                t.rel && "cover" === t.rel[0] && (this.coverPath = t.href);
                        }),
                        (this.spineNodeIndex = 0),
                        (this.toc = t.toc.map((t, e) => ((t.label = t.title), t))),
                        {
                            metadata: this.metadata,
                            spine: this.spine,
                            manifest: this.manifest,
                            navPath: this.navPath,
                            ncxPath: this.ncxPath,
                            coverPath: this.coverPath,
                            spineNodeIndex: this.spineNodeIndex,
                            toc: this.toc,
                        }
                    );
                }
                destroy() {
                    (this.manifest = void 0),
                        (this.navPath = void 0),
                        (this.ncxPath = void 0),
                        (this.coverPath = void 0),
                        (this.spineNodeIndex = void 0),
                        (this.spine = void 0),
                        (this.metadata = void 0);
                }
            };
            var _ = class {
                constructor(t) {
                    (this.toc = []),
                        (this.tocByHref = {}),
                        (this.tocById = {}),
                        (this.landmarks = []),
                        (this.landmarksByType = {}),
                        (this.length = 0),
                        t && this.parse(t);
                }
                parse(t) {
                    let e,
                        i,
                        n = t.nodeType;
                    n && ((e = Object(r.qs)(t, "html")), (i = Object(r.qs)(t, "ncx"))),
                        n
                            ? e
                                ? ((this.toc = this.parseNav(t)),
                                    (this.landmarks = this.parseLandmarks(t)))
                                : i && (this.toc = this.parseNcx(t))
                            : (this.toc = this.load(t)),
                        (this.length = 0),
                        this.unpack(this.toc);
                }
                unpack(t) {
                    for (var e, i = 0; i < t.length; i++)
                        (e = t[i]).href && (this.tocByHref[e.href] = i),
                            e.id && (this.tocById[e.id] = i),
                            this.length++,
                            e.subitems.length && this.unpack(e.subitems);
                }
                get(t) {
                    var e;
                    return t
                        ? (0 === t.indexOf("#")
                            ? (e = this.tocById[t.substring(1)])
                            : t in this.tocByHref && (e = this.tocByHref[t]),
                            this.getByIndex(t, e, this.toc))
                        : this.toc;
                }
                getByIndex(t, e, i) {
                    if (0 === i.length) return;
                    const n = i[e];
                    if (!n || (t !== n.id && t !== n.href)) {
                        let n;
                        for (
                            let s = 0;
                            s < i.length &&
                            ((n = this.getByIndex(t, e, i[s].subitems)), !n);
                            ++s
                        );
                        return n;
                    }
                    return n;
                }
                landmark(t) {
                    var e;
                    return t
                        ? ((e = this.landmarksByType[t]), this.landmarks[e])
                        : this.landmarks;
                }
                parseNav(t) {
                    var e = Object(r.querySelectorByType)(t, "nav", "toc"),
                        i = [];
                    if (!e) return i;
                    let n = Object(r.filterChildren)(e, "ol", !0);
                    return n ? (i = this.parseNavList(n)) : i;
                }
                parseNavList(t, e) {
                    const i = [];
                    if (!t) return i;
                    if (!t.children) return i;
                    for (let n = 0; n < t.children.length; n++) {
                        const s = this.navItem(t.children[n], e);
                        s && i.push(s);
                    }
                    return i;
                }
                navItem(t, e) {
                    let i = t.getAttribute("id") || void 0,
                        n = Object(r.filterChildren)(t, "a", !0);
                    if (!n) return;
                    let s = n.getAttribute("href") || "";
                    i || (i = s);
                    let o = n.textContent || "",
                        a = [],
                        h = Object(r.filterChildren)(t, "ol", !0);
                    return (
                        h && (a = this.parseNavList(h, i)),
                        { id: i, href: s, label: o, subitems: a, parent: e }
                    );
                }
                parseLandmarks(t) {
                    var e,
                        i,
                        n = Object(r.querySelectorByType)(t, "nav", "landmarks"),
                        s = n ? Object(r.qsa)(n, "li") : [],
                        o = s.length,
                        a = [];
                    if (!s || 0 === o) return a;
                    for (e = 0; e < o; ++e)
                        (i = this.landmarkItem(s[e])) &&
                            (a.push(i), (this.landmarksByType[i.type] = e));
                    return a;
                }
                landmarkItem(t) {
                    let e = Object(r.filterChildren)(t, "a", !0);
                    if (!e) return;
                    let i =
                        e.getAttributeNS("http://www.idpf.org/2007/ops", "type") ||
                        void 0;
                    return {
                        href: e.getAttribute("href") || "",
                        label: e.textContent || "",
                        type: i,
                    };
                }
                parseNcx(t) {
                    var e,
                        i,
                        n = Object(r.qsa)(t, "navPoint"),
                        s = n.length,
                        o = {},
                        a = [];
                    if (!n || 0 === s) return a;
                    for (e = 0; e < s; ++e)
                        (o[(i = this.ncxItem(n[e])).id] = i),
                            i.parent ? o[i.parent].subitems.push(i) : a.push(i);
                    return a;
                }
                ncxItem(t) {
                    var e,
                        i = t.getAttribute("id") || !1,
                        n = Object(r.qs)(t, "content").getAttribute("src"),
                        s = Object(r.qs)(t, "navLabel"),
                        o = s.textContent ? s.textContent : "",
                        a = t.parentNode;
                    return (
                        !a ||
                        ("navPoint" !== a.nodeName &&
                            "navPoint" !== a.nodeName.split(":").slice(-1)[0]) ||
                        (e = a.getAttribute("id")),
                        { id: i, href: n, label: o, subitems: [], parent: e }
                    );
                }
                load(t) {
                    return t.map(
                        (t) => (
                            (t.label = t.title),
                            (t.subitems = t.children ? this.load(t.children) : []),
                            t
                        )
                    );
                }
                forEach(t) {
                    return this.toc.forEach(t);
                }
            },
                S = {
                    application: {
                        ecmascript: ["es", "ecma"],
                        javascript: "js",
                        ogg: "ogx",
                        pdf: "pdf",
                        postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
                        "rdf+xml": "rdf",
                        smil: ["smi", "smil"],
                        "xhtml+xml": ["xhtml", "xht"],
                        xml: ["xml", "xsl", "xsd", "opf", "ncx"],
                        zip: "zip",
                        "x-httpd-eruby": "rhtml",
                        "x-latex": "latex",
                        "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
                        "x-object": "o",
                        "x-shockwave-flash": ["swf", "swfl"],
                        "x-silverlight": "scr",
                        "epub+zip": "epub",
                        "font-tdpfr": "pfr",
                        "inkml+xml": ["ink", "inkml"],
                        json: "json",
                        "jsonml+json": "jsonml",
                        "mathml+xml": "mathml",
                        "metalink+xml": "metalink",
                        mp4: "mp4s",
                        "omdoc+xml": "omdoc",
                        oxps: "oxps",
                        "vnd.amazon.ebook": "azw",
                        widget: "wgt",
                        "x-dtbook+xml": "dtb",
                        "x-dtbresource+xml": "res",
                        "x-font-bdf": "bdf",
                        "x-font-ghostscript": "gsf",
                        "x-font-linux-psf": "psf",
                        "x-font-otf": "otf",
                        "x-font-pcf": "pcf",
                        "x-font-snf": "snf",
                        "x-font-ttf": ["ttf", "ttc"],
                        "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
                        "x-font-woff": "woff",
                        "x-mobipocket-ebook": ["prc", "mobi"],
                        "x-mspublisher": "pub",
                        "x-nzb": "nzb",
                        "x-tgif": "obj",
                        "xaml+xml": "xaml",
                        "xml-dtd": "dtd",
                        "xproc+xml": "xpl",
                        "xslt+xml": "xslt",
                        "internet-property-stream": "acx",
                        "x-compress": "z",
                        "x-compressed": "tgz",
                        "x-gzip": "gz",
                    },
                    audio: {
                        flac: "flac",
                        midi: ["mid", "midi", "kar", "rmi"],
                        mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
                        mpegurl: "m3u",
                        ogg: ["oga", "ogg", "spx"],
                        "x-aiff": ["aif", "aiff", "aifc"],
                        "x-ms-wma": "wma",
                        "x-wav": "wav",
                        adpcm: "adp",
                        mp4: "mp4a",
                        webm: "weba",
                        "x-aac": "aac",
                        "x-caf": "caf",
                        "x-matroska": "mka",
                        "x-pn-realaudio-plugin": "rmp",
                        xm: "xm",
                        mid: ["mid", "rmi"],
                    },
                    image: {
                        gif: "gif",
                        ief: "ief",
                        jpeg: ["jpeg", "jpg", "jpe"],
                        pcx: "pcx",
                        png: "png",
                        "svg+xml": ["svg", "svgz"],
                        tiff: ["tiff", "tif"],
                        "x-icon": "ico",
                        bmp: "bmp",
                        webp: "webp",
                        "x-pict": ["pic", "pct"],
                        "x-tga": "tga",
                        "cis-cod": "cod",
                    },
                    text: {
                        "cache-manifest": ["manifest", "appcache"],
                        css: "css",
                        csv: "csv",
                        html: ["html", "htm", "shtml", "stm"],
                        mathml: "mml",
                        plain: [
                            "txt",
                            "text",
                            "brf",
                            "conf",
                            "def",
                            "list",
                            "log",
                            "in",
                            "bas",
                        ],
                        richtext: "rtx",
                        "tab-separated-values": "tsv",
                        "x-bibtex": "bib",
                    },
                    video: {
                        mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
                        mp4: ["mp4", "mp4v", "mpg4"],
                        quicktime: ["qt", "mov"],
                        ogg: "ogv",
                        "vnd.mpegurl": ["mxu", "m4u"],
                        "x-flv": "flv",
                        "x-la-asf": ["lsf", "lsx"],
                        "x-mng": "mng",
                        "x-ms-asf": ["asf", "asx", "asr"],
                        "x-ms-wm": "wm",
                        "x-ms-wmv": "wmv",
                        "x-ms-wmx": "wmx",
                        "x-ms-wvx": "wvx",
                        "x-msvideo": "avi",
                        "x-sgi-movie": "movie",
                        "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
                        "3gpp2": "3g2",
                        h261: "h261",
                        h263: "h263",
                        h264: "h264",
                        jpeg: "jpgv",
                        jpm: ["jpm", "jpgm"],
                        mj2: ["mj2", "mjp2"],
                        "vnd.ms-playready.media.pyv": "pyv",
                        "vnd.uvvu.mp4": ["uvu", "uvvu"],
                        "vnd.vivo": "viv",
                        webm: "webm",
                        "x-f4v": "f4v",
                        "x-m4v": "m4v",
                        "x-ms-vob": "vob",
                        "x-smv": "smv",
                    },
                },
                O = (function () {
                    var t,
                        e,
                        i,
                        n,
                        s = {};
                    for (t in S)
                        if (S.hasOwnProperty(t))
                            for (e in S[t])
                                if (S[t].hasOwnProperty(e))
                                    if ("string" == typeof (i = S[t][e])) s[i] = t + "/" + e;
                                    else for (n = 0; n < i.length; n++) s[i[n]] = t + "/" + e;
                    return s;
                })();
            var C = {
                lookup: function (t) {
                    return (t && O[t.split(".").pop().toLowerCase()]) || "text/plain";
                },
            };
            var T = class {
                constructor(t, e) {
                    (this.settings = {
                        replacements: (e && e.replacements) || "base64",
                        archive: e && e.archive,
                        resolver: e && e.resolver,
                        request: e && e.request,
                    }),
                        this.process(t);
                }
                process(t) {
                    (this.manifest = t),
                        (this.resources = Object.keys(t).map(function (e) {
                            return t[e];
                        })),
                        (this.replacementUrls = []),
                        (this.html = []),
                        (this.assets = []),
                        (this.css = []),
                        (this.urls = []),
                        (this.cssUrls = []),
                        this.split(),
                        this.splitUrls();
                }
                split() {
                    (this.html = this.resources.filter(function (t) {
                        if ("application/xhtml+xml" === t.type || "text/html" === t.type)
                            return !0;
                    })),
                        (this.assets = this.resources.filter(function (t) {
                            if ("application/xhtml+xml" !== t.type && "text/html" !== t.type)
                                return !0;
                        })),
                        (this.css = this.resources.filter(function (t) {
                            if ("text/css" === t.type) return !0;
                        }));
                }
                splitUrls() {
                    (this.urls = this.assets.map(
                        function (t) {
                            return t.href;
                        }.bind(this)
                    )),
                        (this.cssUrls = this.css.map(function (t) {
                            return t.href;
                        }));
                }
                createUrl(t) {
                    var e = new o.a(t),
                        i = C.lookup(e.filename);
                    return this.settings.archive
                        ? this.settings.archive.createUrl(t, {
                            base64: "base64" === this.settings.replacements,
                        })
                        : "base64" === this.settings.replacements
                            ? this.settings
                                .request(t, "blob")
                                .then((t) => Object(r.blob2base64)(t))
                                .then((t) => Object(r.createBase64Url)(t, i))
                            : this.settings
                                .request(t, "blob")
                                .then((t) => Object(r.createBlobUrl)(t, i));
                }
                replacements() {
                    if ("none" === this.settings.replacements)
                        return new Promise(
                            function (t) {
                                t(this.urls);
                            }.bind(this)
                        );
                    var t = this.urls.map((t) => {
                        var e = this.settings.resolver(t);
                        return this.createUrl(e).catch((t) => (console.error(t), null));
                    });
                    return Promise.all(t).then(
                        (t) => (
                            (this.replacementUrls = t.filter((t) => "string" == typeof t)), t
                        )
                    );
                }
                replaceCss(t, e) {
                    var i = [];
                    return (
                        (t = t || this.settings.archive),
                        (e = e || this.settings.resolver),
                        this.cssUrls.forEach(
                            function (n) {
                                var s = this.createCssFile(n, t, e).then(
                                    function (t) {
                                        var e = this.urls.indexOf(n);
                                        e > -1 && (this.replacementUrls[e] = t);
                                    }.bind(this)
                                );
                                i.push(s);
                            }.bind(this)
                        ),
                        Promise.all(i)
                    );
                }
                createCssFile(t) {
                    if (w.a.isAbsolute(t))
                        return new Promise(function (t) {
                            t();
                        });
                    var e,
                        i = this.settings.resolver(t);
                    e = this.settings.archive
                        ? this.settings.archive.getText(i)
                        : this.settings.request(i, "text");
                    var n = this.urls.map((t) => {
                        var e = this.settings.resolver(t);
                        return new a.a(i).relative(e);
                    });
                    return e
                        ? e.then(
                            (t) => (
                                (t = Object(c.e)(t, n, this.replacementUrls)),
                                "base64" === this.settings.replacements
                                    ? Object(r.createBase64Url)(t, "text/css")
                                    : Object(r.createBlobUrl)(t, "text/css")
                            ),
                            (t) =>
                                new Promise(function (t) {
                                    t();
                                })
                        )
                        : new Promise(function (t) {
                            t();
                        });
                }
                relativeTo(t, e) {
                    return (
                        (e = e || this.settings.resolver),
                        this.urls.map(
                            function (i) {
                                var n = e(i);
                                return new a.a(t).relative(n);
                            }.bind(this)
                        )
                    );
                }
                get(t) {
                    var e = this.urls.indexOf(t);
                    if (-1 !== e)
                        return this.replacementUrls.length
                            ? new Promise(
                                function (t, i) {
                                    t(this.replacementUrls[e]);
                                }.bind(this)
                            )
                            : this.createUrl(t);
                }
                substitute(t, e) {
                    var i;
                    return (
                        (i = e ? this.relativeTo(e) : this.urls),
                        Object(c.e)(t, i, this.replacementUrls)
                    );
                }
                destroy() {
                    (this.settings = void 0),
                        (this.manifest = void 0),
                        (this.resources = void 0),
                        (this.replacementUrls = void 0),
                        (this.html = void 0),
                        (this.assets = void 0),
                        (this.css = void 0),
                        (this.urls = void 0),
                        (this.cssUrls = void 0);
                }
            };
            var k = class {
                constructor(t) {
                    (this.pages = []),
                        (this.locations = []),
                        (this.epubcfi = new h.a()),
                        (this.firstPage = 0),
                        (this.lastPage = 0),
                        (this.totalPages = 0),
                        (this.toc = void 0),
                        (this.ncx = void 0),
                        t && (this.pageList = this.parse(t)),
                        this.pageList &&
                        this.pageList.length &&
                        this.process(this.pageList);
                }
                parse(t) {
                    var e = Object(r.qs)(t, "html"),
                        i = Object(r.qs)(t, "ncx");
                    return e ? this.parseNav(t) : i ? this.parseNcx(t) : void 0;
                }
                parseNav(t) {
                    var e,
                        i,
                        n = Object(r.querySelectorByType)(t, "nav", "page-list"),
                        s = n ? Object(r.qsa)(n, "li") : [],
                        o = s.length,
                        a = [];
                    if (!s || 0 === o) return a;
                    for (e = 0; e < o; ++e) (i = this.item(s[e])), a.push(i);
                    return a;
                }
                parseNcx(t) {
                    var e,
                        i,
                        n,
                        s,
                        o = [],
                        a = 0;
                    if (!(i = Object(r.qs)(t, "pageList"))) return o;
                    if (
                        ((s = (n = Object(r.qsa)(i, "pageTarget")).length),
                            !n || 0 === n.length)
                    )
                        return o;
                    for (a = 0; a < s; ++a) (e = this.ncxItem(n[a])), o.push(e);
                    return o;
                }
                ncxItem(t) {
                    var e = Object(r.qs)(t, "navLabel"),
                        i = Object(r.qs)(e, "text").textContent;
                    return {
                        href: Object(r.qs)(t, "content").getAttribute("src"),
                        page: parseInt(i, 10),
                    };
                }
                item(t) {
                    var e,
                        i,
                        n = Object(r.qs)(t, "a"),
                        s = n.getAttribute("href") || "",
                        o = n.textContent || "",
                        a = parseInt(o);
                    return -1 != s.indexOf("epubcfi")
                        ? ((i = (e = s.split("#"))[0]),
                            { cfi: e.length > 1 && e[1], href: s, packageUrl: i, page: a })
                        : { href: s, page: a };
                }
                process(t) {
                    t.forEach(function (t) {
                        this.pages.push(t.page), t.cfi && this.locations.push(t.cfi);
                    }, this),
                        (this.firstPage = parseInt(this.pages[0])),
                        (this.lastPage = parseInt(this.pages[this.pages.length - 1])),
                        (this.totalPages = this.lastPage - this.firstPage);
                }
                pageFromCfi(t) {
                    var e = -1;
                    if (0 === this.locations.length) return -1;
                    var i = Object(r.indexOfSorted)(
                        t,
                        this.locations,
                        this.epubcfi.compare
                    );
                    return (
                        -1 != i
                            ? (e = this.pages[i])
                            : void 0 !==
                            (e =
                                (i = Object(r.locationOf)(
                                    t,
                                    this.locations,
                                    this.epubcfi.compare
                                )) -
                                    1 >=
                                    0
                                    ? this.pages[i - 1]
                                    : this.pages[0]) || (e = -1),
                        e
                    );
                }
                cfiFromPage(t) {
                    var e = -1;
                    "number" != typeof t && (t = parseInt(t));
                    var i = this.pages.indexOf(t);
                    return -1 != i && (e = this.locations[i]), e;
                }
                pageFromPercentage(t) {
                    return Math.round(this.totalPages * t);
                }
                percentageFromPage(t) {
                    var e = (t - this.firstPage) / this.totalPages;
                    return Math.round(1e3 * e) / 1e3;
                }
                percentageFromCfi(t) {
                    var e = this.pageFromCfi(t);
                    return this.percentageFromPage(e);
                }
                destroy() {
                    (this.pages = void 0),
                        (this.locations = void 0),
                        (this.epubcfi = void 0),
                        (this.pageList = void 0),
                        (this.toc = void 0),
                        (this.ncx = void 0);
                }
            },
                N = i(15),
                R = i(28),
                I = i.n(R);
            var L = class {
                constructor() {
                    (this.zip = void 0), (this.urlCache = {}), this.checkRequirements();
                }
                checkRequirements() {
                    try {
                        this.zip = new I.a();
                    } catch (t) {
                        throw new Error("JSZip lib not loaded");
                    }
                }
                open(t, e) {
                    return this.zip.loadAsync(t, { base64: e });
                }
                openUrl(t, e) {
                    return d(t, "binary").then(
                        function (t) {
                            return this.zip.loadAsync(t, { base64: e });
                        }.bind(this)
                    );
                }
                request(t, e) {
                    var i,
                        n = new r.defer(),
                        s = new a.a(t);
                    return (
                        e || (e = s.extension),
                        (i = "blob" == e ? this.getBlob(t) : this.getText(t))
                            ? i.then(
                                function (t) {
                                    let i = this.handleResponse(t, e);
                                    n.resolve(i);
                                }.bind(this)
                            )
                            : n.reject({
                                message: "File not found in the epub: " + t,
                                stack: new Error().stack,
                            }),
                        n.promise
                    );
                }
                handleResponse(t, e) {
                    return "json" == e
                        ? JSON.parse(t)
                        : Object(r.isXml)(e)
                            ? Object(r.parse)(t, "text/xml")
                            : "xhtml" == e
                                ? Object(r.parse)(t, "application/xhtml+xml")
                                : "html" == e || "htm" == e
                                    ? Object(r.parse)(t, "text/html")
                                    : t;
                }
                getBlob(t, e) {
                    var i = window.decodeURIComponent(t.substr(1)),
                        n = this.zip.file(i);
                    if (n)
                        return (
                            (e = e || C.lookup(n.name)),
                            n.async("uint8array").then(function (t) {
                                return new Blob([t], { type: e });
                            })
                        );
                }
                getText(t, e) {
                    var i = window.decodeURIComponent(t.substr(1)),
                        n = this.zip.file(i);
                    if (n)
                        return n.async("string").then(function (t) {
                            return t;
                        });
                }
                getBase64(t, e) {
                    var i = window.decodeURIComponent(t.substr(1)),
                        n = this.zip.file(i);
                    if (n)
                        return (
                            (e = e || C.lookup(n.name)),
                            n.async("base64").then(function (t) {
                                return "data:" + e + ";base64," + t;
                            })
                        );
                }
                createUrl(t, e) {
                    var i,
                        n,
                        s = new r.defer(),
                        o = window.URL || window.webkitURL || window.mozURL,
                        a = e && e.base64;
                    return t in this.urlCache
                        ? (s.resolve(this.urlCache[t]), s.promise)
                        : (a
                            ? (n = this.getBase64(t)) &&
                            n.then(
                                function (e) {
                                    (this.urlCache[t] = e), s.resolve(e);
                                }.bind(this)
                            )
                            : (n = this.getBlob(t)) &&
                            n.then(
                                function (e) {
                                    (i = o.createObjectURL(e)),
                                        (this.urlCache[t] = i),
                                        s.resolve(i);
                                }.bind(this)
                            ),
                            n ||
                            s.reject({
                                message: "File not found in the epub: " + t,
                                stack: new Error().stack,
                            }),
                            s.promise);
                }
                revokeUrl(t) {
                    var e = window.URL || window.webkitURL || window.mozURL,
                        i = this.urlCache[t];
                    i && e.revokeObjectURL(i);
                }
                destroy() {
                    var t = window.URL || window.webkitURL || window.mozURL;
                    for (let e in this.urlCache) t.revokeObjectURL(e);
                    (this.zip = void 0), (this.urlCache = {});
                }
            },
                j = i(22),
                A = i.n(j);
            class z {
                constructor(t, e, i) {
                    (this.urlCache = {}),
                        (this.storage = void 0),
                        (this.name = t),
                        (this.requester = e || d),
                        (this.resolver = i),
                        (this.online = !0),
                        this.checkRequirements(),
                        this.addListeners();
                }
                checkRequirements() {
                    try {
                        let t;
                        void 0 === A.a && (t = A.a),
                            (this.storage = t.createInstance({ name: this.name }));
                    } catch (t) {
                        throw new Error("localForage lib not loaded");
                    }
                }
                addListeners() {
                    (this._status = this.status.bind(this)),
                        window.addEventListener("online", this._status),
                        window.addEventListener("offline", this._status);
                }
                removeListeners() {
                    window.removeEventListener("online", this._status),
                        window.removeEventListener("offline", this._status),
                        (this._status = void 0);
                }
                status(t) {
                    let e = navigator.onLine;
                    (this.online = e),
                        e ? this.emit("online", this) : this.emit("offline", this);
                }
                add(t, e) {
                    let i = t.resources.map((t) => {
                        let { href: i } = t,
                            n = this.resolver(i),
                            s = window.encodeURIComponent(n);
                        return this.storage
                            .getItem(s)
                            .then((t) =>
                                !t || e
                                    ? this.requester(n, "binary").then((t) =>
                                        this.storage.setItem(s, t)
                                    )
                                    : t
                            );
                    });
                    return Promise.all(i);
                }
                put(t, e, i) {
                    let n = window.encodeURIComponent(t);
                    return this.storage
                        .getItem(n)
                        .then(
                            (s) =>
                                s ||
                                this.requester(t, "binary", e, i).then((t) =>
                                    this.storage.setItem(n, t)
                                )
                        );
                }
                request(t, e, i, n) {
                    return this.online
                        ? this.requester(t, e, i, n).then((e) => (this.put(t), e))
                        : this.retrieve(t, e);
                }
                retrieve(t, e) {
                    new r.defer();
                    var i = new a.a(t);
                    return (
                        e || (e = i.extension),
                        ("blob" == e ? this.getBlob(t) : this.getText(t)).then((i) => {
                            var n,
                                s = new r.defer();
                            return (
                                i
                                    ? ((n = this.handleResponse(i, e)), s.resolve(n))
                                    : s.reject({
                                        message: "File not found in storage: " + t,
                                        stack: new Error().stack,
                                    }),
                                s.promise
                            );
                        })
                    );
                }
                handleResponse(t, e) {
                    return "json" == e
                        ? JSON.parse(t)
                        : Object(r.isXml)(e)
                            ? Object(r.parse)(t, "text/xml")
                            : "xhtml" == e
                                ? Object(r.parse)(t, "application/xhtml+xml")
                                : "html" == e || "htm" == e
                                    ? Object(r.parse)(t, "text/html")
                                    : t;
                }
                getBlob(t, e) {
                    let i = window.encodeURIComponent(t);
                    return this.storage.getItem(i).then(function (i) {
                        if (i) return (e = e || C.lookup(t)), new Blob([i], { type: e });
                    });
                }
                getText(t, e) {
                    let i = window.encodeURIComponent(t);
                    return (
                        (e = e || C.lookup(t)),
                        this.storage.getItem(i).then(function (t) {
                            var i,
                                n = new r.defer(),
                                s = new FileReader();
                            if (t)
                                return (
                                    (i = new Blob([t], { type: e })),
                                    s.addEventListener("loadend", () => {
                                        n.resolve(s.result);
                                    }),
                                    s.readAsText(i, e),
                                    n.promise
                                );
                        })
                    );
                }
                getBase64(t, e) {
                    let i = window.encodeURIComponent(t);
                    return (
                        (e = e || C.lookup(t)),
                        this.storage.getItem(i).then((t) => {
                            var i,
                                n = new r.defer(),
                                s = new FileReader();
                            if (t)
                                return (
                                    (i = new Blob([t], { type: e })),
                                    s.addEventListener("loadend", () => {
                                        n.resolve(s.result);
                                    }),
                                    s.readAsDataURL(i, e),
                                    n.promise
                                );
                        })
                    );
                }
                createUrl(t, e) {
                    var i,
                        n,
                        s = new r.defer(),
                        o = window.URL || window.webkitURL || window.mozURL,
                        a = e && e.base64;
                    return t in this.urlCache
                        ? (s.resolve(this.urlCache[t]), s.promise)
                        : (a
                            ? (n = this.getBase64(t)) &&
                            n.then(
                                function (e) {
                                    (this.urlCache[t] = e), s.resolve(e);
                                }.bind(this)
                            )
                            : (n = this.getBlob(t)) &&
                            n.then(
                                function (e) {
                                    (i = o.createObjectURL(e)),
                                        (this.urlCache[t] = i),
                                        s.resolve(i);
                                }.bind(this)
                            ),
                            n ||
                            s.reject({
                                message: "File not found in storage: " + t,
                                stack: new Error().stack,
                            }),
                            s.promise);
                }
                revokeUrl(t) {
                    var e = window.URL || window.webkitURL || window.mozURL,
                        i = this.urlCache[t];
                    i && e.revokeObjectURL(i);
                }
                destroy() {
                    var t = window.URL || window.webkitURL || window.mozURL;
                    for (let e in this.urlCache) t.revokeObjectURL(e);
                    (this.urlCache = {}), this.removeListeners();
                }
            }
            s()(z.prototype);
            var P = z;
            var D = class {
                constructor(t) {
                    (this.interactive = ""),
                        (this.fixedLayout = ""),
                        (this.openToSpread = ""),
                        (this.orientationLock = ""),
                        t && this.parse(t);
                }
                parse(t) {
                    if (!t) return this;
                    const e = Object(r.qs)(t, "display_options");
                    if (!e) return this;
                    return (
                        Object(r.qsa)(e, "option").forEach((t) => {
                            let e = "";
                            switch (
                            (t.childNodes.length && (e = t.childNodes[0].nodeValue),
                                t.attributes.name.value)
                            ) {
                                case "interactive":
                                    this.interactive = e;
                                    break;
                                case "fixed-layout":
                                    this.fixedLayout = e;
                                    break;
                                case "open-to-spread":
                                    this.openToSpread = e;
                                    break;
                                case "orientation-lock":
                                    this.orientationLock = e;
                            }
                        }),
                        this
                    );
                }
                destroy() {
                    (this.interactive = void 0),
                        (this.fixedLayout = void 0),
                        (this.openToSpread = void 0),
                        (this.orientationLock = void 0);
                }
            };
            const B = "binary",
                q = "base64",
                M = "epub",
                W = "opf",
                F = "json",
                U = "directory";
            class H {
                constructor(t, e) {
                    void 0 === e &&
                        "string" != typeof t &&
                        t instanceof Blob == !1 &&
                        t instanceof ArrayBuffer == !1 &&
                        ((e = t), (t = void 0)),
                        (this.settings = Object(r.extend)(this.settings || {}, {
                            requestMethod: void 0,
                            requestCredentials: void 0,
                            requestHeaders: void 0,
                            encoding: void 0,
                            replacements: void 0,
                            canonical: void 0,
                            openAs: void 0,
                            store: void 0,
                        })),
                        Object(r.extend)(this.settings, e),
                        (this.opening = new r.defer()),
                        (this.opened = this.opening.promise),
                        (this.isOpen = !1),
                        (this.loading = {
                            manifest: new r.defer(),
                            spine: new r.defer(),
                            metadata: new r.defer(),
                            cover: new r.defer(),
                            navigation: new r.defer(),
                            pageList: new r.defer(),
                            resources: new r.defer(),
                            displayOptions: new r.defer(),
                        }),
                        (this.loaded = {
                            manifest: this.loading.manifest.promise,
                            spine: this.loading.spine.promise,
                            metadata: this.loading.metadata.promise,
                            cover: this.loading.cover.promise,
                            navigation: this.loading.navigation.promise,
                            pageList: this.loading.pageList.promise,
                            resources: this.loading.resources.promise,
                            displayOptions: this.loading.displayOptions.promise,
                        }),
                        (this.ready = Promise.all([
                            this.loaded.manifest,
                            this.loaded.spine,
                            this.loaded.metadata,
                            this.loaded.cover,
                            this.loaded.navigation,
                            this.loaded.resources,
                            this.loaded.displayOptions,
                        ])),
                        (this.isRendered = !1),
                        (this.request = this.settings.requestMethod || d),
                        (this.spine = new p()),
                        (this.locations = new y(this.spine, this.load.bind(this))),
                        (this.navigation = void 0),
                        (this.pageList = void 0),
                        (this.url = void 0),
                        (this.path = void 0),
                        (this.archived = !1),
                        (this.archive = void 0),
                        (this.storage = void 0),
                        (this.resources = void 0),
                        (this.rendition = void 0),
                        (this.container = void 0),
                        (this.packaging = void 0),
                        (this.displayOptions = void 0),
                        this.settings.store && this.store(this.settings.store),
                        t &&
                        this.open(t, this.settings.openAs).catch((e) => {
                            var i = new Error("Cannot load book at " + t);
                            this.emit(m.c.BOOK.OPEN_FAILED, i);
                        });
                }
                open(t, e) {
                    var i,
                        n = e || this.determineType(t);
                    return (
                        n === B
                            ? ((this.archived = !0),
                                (this.url = new o.a("/", "")),
                                (i = this.openEpub(t)))
                            : n === q
                                ? ((this.archived = !0),
                                    (this.url = new o.a("/", "")),
                                    (i = this.openEpub(t, n)))
                                : n === M
                                    ? ((this.archived = !0),
                                        (this.url = new o.a("/", "")),
                                        (i = this.request(
                                            t,
                                            "binary",
                                            this.settings.requestCredentials,
                                            this.settings.requestHeaders
                                        ).then(this.openEpub.bind(this))))
                                    : n == W
                                        ? ((this.url = new o.a(t)),
                                            (i = this.openPackaging(this.url.Path.toString())))
                                        : n == F
                                            ? ((this.url = new o.a(t)),
                                                (i = this.openManifest(this.url.Path.toString())))
                                            : ((this.url = new o.a(t)),
                                                (i = this.openContainer("META-INF/container.xml").then(
                                                    this.openPackaging.bind(this)
                                                ))),
                        i
                    );
                }
                openEpub(t, e) {
                    return this.unarchive(t, e || this.settings.encoding)
                        .then(() => this.openContainer("META-INF/container.xml"))
                        .then((t) => this.openPackaging(t));
                }
                openContainer(t) {
                    return this.load(t).then(
                        (t) => (
                            (this.container = new x(t)),
                            this.resolve(this.container.packagePath)
                        )
                    );
                }
                openPackaging(t) {
                    return (
                        (this.path = new a.a(t)),
                        this.load(t).then(
                            (t) => ((this.packaging = new E(t)), this.unpack(this.packaging))
                        )
                    );
                }
                openManifest(t) {
                    return (
                        (this.path = new a.a(t)),
                        this.load(t).then(
                            (t) => (
                                (this.packaging = new E()),
                                this.packaging.load(t),
                                this.unpack(this.packaging)
                            )
                        )
                    );
                }
                load(t) {
                    var e = this.resolve(t);
                    return this.archived
                        ? this.archive.request(e)
                        : this.request(
                            e,
                            null,
                            this.settings.requestCredentials,
                            this.settings.requestHeaders
                        );
                }
                resolve(t, e) {
                    if (t) {
                        var i = t;
                        return t.indexOf("://") > -1
                            ? t
                            : (this.path && (i = this.path.resolve(t)),
                                0 != e && this.url && (i = this.url.resolve(i)),
                                i);
                    }
                }
                canonical(t) {
                    return t
                        ? this.settings.canonical
                            ? this.settings.canonical(t)
                            : this.resolve(t, !0)
                        : "";
                }
                determineType(t) {
                    var e;
                    return "base64" === this.settings.encoding
                        ? q
                        : "string" != typeof t
                            ? B
                            : ((e = new o.a(t).path().extension) &&
                                (e = e.replace(/\?.*$/, "")),
                                e
                                    ? "epub" === e
                                        ? M
                                        : "opf" === e
                                            ? W
                                            : "json" === e
                                                ? F
                                                : void 0
                                    : U);
                }
                unpack(t) {
                    (this.package = t),
                        "" === this.packaging.metadata.layout
                            ? this.load(
                                this.url.resolve(
                                    "META-INF/com.apple.ibooks.display-options.xml"
                                )
                            )
                                .then((t) => {
                                    (this.displayOptions = new D(t)),
                                        this.loading.displayOptions.resolve(this.displayOptions);
                                })
                                .catch((t) => {
                                    (this.displayOptions = new D()),
                                        this.loading.displayOptions.resolve(this.displayOptions);
                                })
                            : ((this.displayOptions = new D()),
                                this.loading.displayOptions.resolve(this.displayOptions)),
                        this.spine.unpack(
                            this.packaging,
                            this.resolve.bind(this),
                            this.canonical.bind(this)
                        ),
                        (this.resources = new T(this.packaging.manifest, {
                            archive: this.archive,
                            resolver: this.resolve.bind(this),
                            request: this.request.bind(this),
                            replacements:
                                this.settings.replacements ||
                                (this.archived ? "blobUrl" : "base64"),
                        })),
                        this.loadNavigation(this.packaging).then(() => {
                            this.loading.navigation.resolve(this.navigation);
                        }),
                        this.packaging.coverPath &&
                        (this.cover = this.resolve(this.packaging.coverPath)),
                        this.loading.manifest.resolve(this.packaging.manifest),
                        this.loading.metadata.resolve(this.packaging.metadata),
                        this.loading.spine.resolve(this.spine),
                        this.loading.cover.resolve(this.cover),
                        this.loading.resources.resolve(this.resources),
                        this.loading.pageList.resolve(this.pageList),
                        (this.isOpen = !0),
                        this.archived ||
                            (this.settings.replacements && "none" != this.settings.replacements)
                            ? this.replacements()
                                .then(() => {
                                    this.loaded.displayOptions.then(() => {
                                        this.opening.resolve(this);
                                    });
                                })
                                .catch((t) => {
                                    console.error(t);
                                })
                            : this.loaded.displayOptions.then(() => {
                                this.opening.resolve(this);
                            });
                }
                loadNavigation(t) {
                    let e = t.navPath || t.ncxPath,
                        i = t.toc;
                    return i
                        ? new Promise((e, n) => {
                            (this.navigation = new _(i)),
                                t.pageList && (this.pageList = new k(t.pageList)),
                                e(this.navigation);
                        })
                        : e
                            ? this.load(e, "xml").then(
                                (t) => (
                                    (this.navigation = new _(t)),
                                    (this.pageList = new k(t)),
                                    this.navigation
                                )
                            )
                            : new Promise((t, e) => {
                                (this.navigation = new _()),
                                    (this.pageList = new k()),
                                    t(this.navigation);
                            });
                }
                section(t) {
                    return this.spine.get(t);
                }
                renderTo(t, e) {
                    return (
                        (this.rendition = new N.a(this, e)),
                        this.rendition.attachTo(t),
                        this.rendition
                    );
                }
                setRequestCredentials(t) {
                    this.settings.requestCredentials = t;
                }
                setRequestHeaders(t) {
                    this.settings.requestHeaders = t;
                }
                unarchive(t, e) {
                    return (this.archive = new L()), this.archive.open(t, e);
                }
                store(t) {
                    let e =
                        this.settings.replacements &&
                        "none" !== this.settings.replacements,
                        i = this.url,
                        n = this.settings.requestMethod || d.bind(this);
                    return (
                        (this.storage = new P(t, n, this.resolve.bind(this))),
                        (this.request = this.storage.request.bind(this.storage)),
                        this.opened.then(() => {
                            this.archived &&
                                (this.storage.requester = this.archive.request.bind(
                                    this.archive
                                ));
                            let t = (t, e) => {
                                e.output = this.resources.substitute(t, e.url);
                            };
                            (this.resources.settings.replacements = e || "blobUrl"),
                                this.resources
                                    .replacements()
                                    .then(() => this.resources.replaceCss()),
                                this.storage.on("offline", () => {
                                    (this.url = new o.a("/", "")),
                                        this.spine.hooks.serialize.register(t);
                                }),
                                this.storage.on("online", () => {
                                    (this.url = i), this.spine.hooks.serialize.deregister(t);
                                });
                        }),
                        this.storage
                    );
                }
                coverUrl() {
                    return this.loaded.cover.then(() =>
                        this.cover
                            ? this.archived
                                ? this.archive.createUrl(this.cover)
                                : this.cover
                            : null
                    );
                }
                replacements() {
                    return (
                        this.spine.hooks.serialize.register((t, e) => {
                            e.output = this.resources.substitute(t, e.url);
                        }),
                        this.resources
                            .replacements()
                            .then(() => this.resources.replaceCss())
                    );
                }
                getRange(t) {
                    var e = new h.a(t),
                        i = this.spine.get(e.spinePos),
                        n = this.load.bind(this);
                    return i
                        ? i.load(n).then(function (t) {
                            return e.toRange(i.document);
                        })
                        : new Promise((t, e) => {
                            e("CFI could not be found");
                        });
                }
                key(t) {
                    var e = t || this.packaging.metadata.identifier || this.url.filename;
                    return `epubjs:${m.b}:${e}`;
                }
                destroy() {
                    (this.opened = void 0),
                        (this.loading = void 0),
                        (this.loaded = void 0),
                        (this.ready = void 0),
                        (this.isOpen = !1),
                        (this.isRendered = !1),
                        this.spine && this.spine.destroy(),
                        this.locations && this.locations.destroy(),
                        this.pageList && this.pageList.destroy(),
                        this.archive && this.archive.destroy(),
                        this.resources && this.resources.destroy(),
                        this.container && this.container.destroy(),
                        this.packaging && this.packaging.destroy(),
                        this.rendition && this.rendition.destroy(),
                        this.displayOptions && this.displayOptions.destroy(),
                        (this.spine = void 0),
                        (this.locations = void 0),
                        (this.pageList = void 0),
                        (this.archive = void 0),
                        (this.resources = void 0),
                        (this.container = void 0),
                        (this.packaging = void 0),
                        (this.rendition = void 0),
                        (this.navigation = void 0),
                        (this.url = void 0),
                        (this.path = void 0),
                        (this.archived = !1);
                }
            }
            s()(H.prototype);
            e.a = H;
        },
        function (t, e, i) {
            "use strict";
            t.exports = function (t) {
                return null != t;
            };
        },
        function (t, e, i) {
            var n = i(51),
                s = "object" == typeof self && self && self.Object === Object && self,
                r = n || s || Function("return this")();
            t.exports = r;
        },
        function (t, e, i) {
            var n = i(25).Symbol;
            t.exports = n;
        },
        function (t, e, i) {
            var n = i(20),
                s = i(18);
            t.exports = function (t, e, i) {
                var r = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return (
                    s(i) &&
                    ((r = "leading" in i ? !!i.leading : r),
                        (o = "trailing" in i ? !!i.trailing : o)),
                    n(t, e, { leading: r, maxWait: e, trailing: o })
                );
            };
        },
        function (t, i) {
            t.exports = e;
        },
        function (t, e, i) {
            "use strict";
            i.r(e),
                function (t) {
                    var n = i(23),
                        s = i(15),
                        r = i(2),
                        o = i(12),
                        a = i(0),
                        h = i(1);
                    i(19), i(10), i(21);
                    function l(t, e) {
                        return new n.a(t, e);
                    }
                    (l.VERSION = h.b),
                        void 0 !== t && (t.EPUBJS_VERSION = h.b),
                        (l.Book = n.a),
                        (l.Rendition = s.a),
                        (l.Contents = o.a),
                        (l.CFI = r.a),
                        (l.utils = a),
                        (e.default = l);
                }.call(this, i(16));
        },
        function (t, e, i) {
            "use strict";
            var n = i(24),
                s = i(31),
                r = i(35),
                o = i(43),
                a = i(44);
            (t.exports = function (t, e) {
                var i, s, h, l, c;
                return (
                    arguments.length < 2 || "string" != typeof t
                        ? ((l = e), (e = t), (t = null))
                        : (l = arguments[2]),
                    n(t)
                        ? ((i = a.call(t, "c")), (s = a.call(t, "e")), (h = a.call(t, "w")))
                        : ((i = h = !0), (s = !1)),
                    (c = { value: e, configurable: i, enumerable: s, writable: h }),
                    l ? r(o(l), c) : c
                );
            }).gs = function (t, e, i) {
                var h, l, c, d;
                return (
                    "string" != typeof t
                        ? ((c = i), (i = e), (e = t), (t = null))
                        : (c = arguments[3]),
                    n(e)
                        ? s(e)
                            ? n(i)
                                ? s(i) || ((c = i), (i = void 0))
                                : (i = void 0)
                            : ((c = e), (e = i = void 0))
                        : (e = void 0),
                    n(t)
                        ? ((h = a.call(t, "c")), (l = a.call(t, "e")))
                        : ((h = !0), (l = !1)),
                    (d = { get: e, set: i, configurable: h, enumerable: l }),
                    c ? r(o(c), d) : d
                );
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(32),
                s = /^\s*class[\s{/}]/,
                r = Function.prototype.toString;
            t.exports = function (t) {
                return !!n(t) && !s.test(r.call(t));
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(33);
            t.exports = function (t) {
                if ("function" != typeof t) return !1;
                if (!hasOwnProperty.call(t, "length")) return !1;
                try {
                    if ("number" != typeof t.length) return !1;
                    if ("function" != typeof t.call) return !1;
                    if ("function" != typeof t.apply) return !1;
                } catch (t) {
                    return !1;
                }
                return !n(t);
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(34);
            t.exports = function (t) {
                if (!n(t)) return !1;
                try {
                    return !!t.constructor && t.constructor.prototype === t;
                } catch (t) {
                    return !1;
                }
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(24),
                s = { object: !0, function: !0, undefined: !0 };
            t.exports = function (t) {
                return !!n(t) && hasOwnProperty.call(s, typeof t);
            };
        },
        function (t, e, i) {
            "use strict";
            t.exports = i(36)() ? Object.assign : i(37);
        },
        function (t, e, i) {
            "use strict";
            t.exports = function () {
                var t,
                    e = Object.assign;
                return (
                    "function" == typeof e &&
                    (e((t = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
                        t.foo + t.bar + t.trzy === "razdwatrzy")
                );
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(38),
                s = i(42),
                r = Math.max;
            t.exports = function (t, e) {
                var i,
                    o,
                    a,
                    h = r(arguments.length, 2);
                for (
                    t = Object(s(t)),
                    a = function (n) {
                        try {
                            t[n] = e[n];
                        } catch (t) {
                            i || (i = t);
                        }
                    },
                    o = 1;
                    o < h;
                    ++o
                )
                    n((e = arguments[o])).forEach(a);
                if (void 0 !== i) throw i;
                return t;
            };
        },
        function (t, e, i) {
            "use strict";
            t.exports = i(39)() ? Object.keys : i(40);
        },
        function (t, e, i) {
            "use strict";
            t.exports = function () {
                try {
                    return Object.keys("primitive"), !0;
                } catch (t) {
                    return !1;
                }
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(17),
                s = Object.keys;
            t.exports = function (t) {
                return s(n(t) ? Object(t) : t);
            };
        },
        function (t, e, i) {
            "use strict";
            t.exports = function () { };
        },
        function (t, e, i) {
            "use strict";
            var n = i(17);
            t.exports = function (t) {
                if (!n(t)) throw new TypeError("Cannot use null or undefined");
                return t;
            };
        },
        function (t, e, i) {
            "use strict";
            var n = i(17),
                s = Array.prototype.forEach,
                r = Object.create,
                o = function (t, e) {
                    var i;
                    for (i in t) e[i] = t[i];
                };
            t.exports = function (t) {
                var e = r(null);
                return (
                    s.call(arguments, function (t) {
                        n(t) && o(Object(t), e);
                    }),
                    e
                );
            };
        },
        function (t, e, i) {
            "use strict";
            t.exports = i(45)() ? String.prototype.contains : i(46);
        },
        function (t, e, i) {
            "use strict";
            var n = "razdwatrzy";
            t.exports = function () {
                return (
                    "function" == typeof n.contains &&
                    !0 === n.contains("dwa") &&
                    !1 === n.contains("foo")
                );
            };
        },
        function (t, e, i) {
            "use strict";
            var n = String.prototype.indexOf;
            t.exports = function (t) {
                return n.call(this, t, arguments[1]) > -1;
            };
        },
        function (t, e, i) {
            "use strict";
            t.exports = function (t) {
                if ("function" != typeof t)
                    throw new TypeError(t + " is not a function");
                return t;
            };
        },
        function (t, e, i) {
            "use strict";
            function n(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.createElement = n),
                (e.default = { createElement: n });
        },
        function (t, e, i) {
            "use strict";
            function n(t, e) {
                function i(i) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var o = e[n],
                            a = i.clientX,
                            h = i.clientY;
                        if (
                            (i.touches &&
                                i.touches.length &&
                                ((a = i.touches[0].clientX), (h = i.touches[0].clientY)),
                                r(o, t, a, h))
                        ) {
                            o.dispatchEvent(s(i));
                            break;
                        }
                    }
                }
                if ("iframe" === t.nodeName || "IFRAME" === t.nodeName)
                    try {
                        this.target = t.contentDocument;
                    } catch (e) {
                        this.target = t;
                    }
                else this.target = t;
                for (
                    var n = ["mouseup", "mousedown", "click", "touchstart"], o = 0;
                    o < n.length;
                    o++
                ) {
                    var a = n[o];
                    this.target.addEventListener(
                        a,
                        function (t) {
                            return i(t);
                        },
                        !1
                    );
                }
            }
            function s(t) {
                var e = Object.assign({}, t, { bubbles: !1 });
                try {
                    return new MouseEvent(t.type, e);
                } catch (n) {
                    var i = document.createEvent("MouseEvents");
                    return (
                        i.initMouseEvent(
                            t.type,
                            !1,
                            e.cancelable,
                            e.view,
                            e.detail,
                            e.screenX,
                            e.screenY,
                            e.clientX,
                            e.clientY,
                            e.ctrlKey,
                            e.altKey,
                            e.shiftKey,
                            e.metaKey,
                            e.button,
                            e.relatedTarget
                        ),
                        i
                    );
                }
            }
            function r(t, e, i, n) {
                var s = e.getBoundingClientRect();
                function r(t, e, i) {
                    var n = t.top - s.top,
                        r = t.left - s.left,
                        o = n + t.height,
                        a = r + t.width;
                    return n <= i && r <= e && o > i && a > e;
                }
                if (!r(t.getBoundingClientRect(), i, n)) return !1;
                for (var o = t.getClientRects(), a = 0, h = o.length; a < h; a++)
                    if (r(o[a], i, n)) return !0;
                return !1;
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.proxyMouse = n),
                (e.clone = s),
                (e.default = { proxyMouse: n });
        },
        function (t, e, i) {
            var n = i(25);
            t.exports = function () {
                return n.Date.now();
            };
        },
        function (t, e, i) {
            (function (e) {
                var i = "object" == typeof e && e && e.Object === Object && e;
                t.exports = i;
            }.call(this, i(16)));
        },
        function (t, e, i) {
            var n = i(53),
                s = i(18),
                r = i(55),
                o = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                l = parseInt;
            t.exports = function (t) {
                if ("number" == typeof t) return t;
                if (r(t)) return NaN;
                if (s(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = s(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = n(t);
                var i = a.test(t);
                return i || h.test(t) ? l(t.slice(2), i ? 2 : 8) : o.test(t) ? NaN : +t;
            };
        },
        function (t, e, i) {
            var n = i(54),
                s = /^\s+/;
            t.exports = function (t) {
                return t ? t.slice(0, n(t) + 1).replace(s, "") : t;
            };
        },
        function (t, e) {
            var i = /\s/;
            t.exports = function (t) {
                for (var e = t.length; e-- && i.test(t.charAt(e)););
                return e;
            };
        },
        function (t, e, i) {
            var n = i(56),
                s = i(59);
            t.exports = function (t) {
                return "symbol" == typeof t || (s(t) && "[object Symbol]" == n(t));
            };
        },
        function (t, e, i) {
            var n = i(26),
                s = i(57),
                r = i(58),
                o = n ? n.toStringTag : void 0;
            t.exports = function (t) {
                return null == t
                    ? void 0 === t
                        ? "[object Undefined]"
                        : "[object Null]"
                    : o && o in Object(t)
                        ? s(t)
                        : r(t);
            };
        },
        function (t, e, i) {
            var n = i(26),
                s = Object.prototype,
                r = s.hasOwnProperty,
                o = s.toString,
                a = n ? n.toStringTag : void 0;
            t.exports = function (t) {
                var e = r.call(t, a),
                    i = t[a];
                try {
                    t[a] = void 0;
                    var n = !0;
                } catch (t) { }
                var s = o.call(t);
                return n && (e ? (t[a] = i) : delete t[a]), s;
            };
        },
        function (t, e) {
            var i = Object.prototype.toString;
            t.exports = function (t) {
                return i.call(t);
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return null != t && "object" == typeof t;
            };
        },
    ]).default;
});
