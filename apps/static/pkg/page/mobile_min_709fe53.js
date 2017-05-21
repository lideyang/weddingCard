define("page/mobile", function (n, e, t) {
    (function () {
        var e, a, o, i, l, r, u, c, p, s, f, m, h, g, w, d, v, k, D, y, b, x, P, z;
        p = n("common"), s = n("loading"), m = n("pageManagement"), n("zepto/touch"), c = n("bounceFix"), h = n("slideProgress"), a = null, r = null, o = null, u = null, i = null, e = null, l = null, b = function () {
            var n, t, p, f;
            if (window.prehidePage = y(pageData), r = $(window), a = $(document), u = $("#wrapper"), o = $(document.documentElement), i = $(".view-count"), l = $(".view-count-paragraph"), e = $("#app-bottom"), c.add("wrapper"), null == pageData.viewcount && (pageData.viewcount = 0), !pageData.music && pageData.musiccfg) {
                t = pageData.musiccfg;
                try {
                    t = JSON.parse(t)
                } catch (g) {
                    n = g, t = {}
                }
                t = t || {}, pageData.musiccfg = t, pageData.music = t.mid, pageData.musicPath = t.src
            }
            return window.updateWinFontSize(), s.init({
                src: (pageData.level || 0) >= 2 ? null != (p = pageData.logoPath) ? p : "" : null,
                company: (pageData.level || 0) >= 2 ? null != (f = pageData.company) ? f : "" : null
            }), m.init({
                cb: function () {
                    return s.update(1, function () {
                        return s.hide()
                    })
                }, onProgress: function (n) {
                    return s.update(.9 * n + .1)
                }
            }), h.init(), u.on("swipeUp", function () {
                return m.next()
            }).on("swipeDown", function () {
                return m.prev()
            }).on("swipeLeft", function () {
                return m.left()
            }).on("swipeRight", function () {
                return m.right()
            }), window.nextPage = function () {
                return m.next()
            }, window.prevPage = function () {
                return m.prev()
            }, window.go = function (n) {
                return n ? m.go(n) : void 0
            }, w(), z(), P()
        }, v = function (n) {
            return n >= 1e5 ? Math.floor(n / 1e4) + "万" : n
        }, z = function () {
            return i.text(v(pageData.viewcount)), pageData.showviewcount === !1 || 0 === pageData.showviewcount ? l.css("display", "none") : void 0
        }, k = [{value: "免费创建这样的展示", desc: "/mobile?mobile=dilian"}, {
            value: "点我领1999元礼包",
            desc: "/mobile.html#/applyorgaccount?_k=u27s5i"
        }], d = function (n) {
            var e;
            return (e = n) ? (-1 === n.indexOf("http://") && -1 === n.indexOf("https://") && (e = "http://" + n), e) : null
        }, g = {
            otf: {company: "135编辑器", link: "http://www.135editor.com/"},
            ott: {company: "123微导航", link: "http://www.123vdh.com/"},
            youzan: {company: "有赞", link: "http://kdt.im/2o6ZPr"},
            drip: {company: "水滴微信平台", link: "http://weixin.drip.im/"},
            EPS59: {company: "趣现场", link: "http://www.wxscreen.com/"},
            EPS61: {company: "展酷", link: "http://m.zhankoo.com/"},
            EPS62: {company: "精准云销", link: "http://www.aimapp.net/solution/%E7%B2%BE%E9%94%80"}
        }, f = {
            KUWO: {
                company: "酷我音乐授权",
                link: "http://m.kuwo.cn?from=tuzhan",
                shares: [{value: "免费听音乐", desc: "http://m.kuwo.cn?from=tuzhan&text=1"}, {
                    value: "点我听音乐",
                    desc: "http://m.kuwo.cn?from=tuzhan&text=2"
                }, {value: "更多好声音", desc: "http://m.kuwo.cn?from=tuzhan&text=3"}]
            }
        }, P = function () {
            var n, t, a, o, i, l, r, u, c, p, s, m, h, w, v;
            return p = d(pageData.link), r = g[pageData.user_from], m = pageData.musiccfg || {}, s = f[m.type], c = parseInt(pageData.level || 0), isNaN(c) && (c = 0), c >= 3 ? pageData.company ? e.find(".free-show").html("<a class='link' rel='nofollow' href='" + (p || "javascript:void()") + "'>" + pageData.company + "</a>") : e.find(".free-show").hide() : c >= 2 ? (a = pageData.company ? "<a class='link' rel='nofollow' href='" + (p || "javascript:void()") + "'>" + pageData.company + "</a> | <a class='link' rel='nofollow' href='/mobile?mobile=1'>lidy技术支持</a>" : "<a class='link' rel='nofollow' href='/mobile?mobile=1'>lidy技术支持</a>", e.find(".free-show").html(a)) : null != r ? (a = "<a class='link' rel='nofollow' href='" + r.link + "'>" + r.company + "</a> | <a class='link' rel='nofollow' href='/mobile?mobile=1'>lidy技术支持</a>", e.find(".free-show").html(a)) : null != s ? (w = s.shares, p = m.link || s.link, i = p, o = s.company, null != w && (u = Math.floor(Math.random() * w.length), h = null != (v = w[u]) ? v : w[0], p = m.link || h.desc, i = h.desc, o = h.value), a = "<a class='link' data-href='" + i + "' rel='nofollow' href='" + p + "'>" + o + "</a> | <a class='link' rel='nofollow' href='/mobile?mobile=1'>lidy技术支持</a>", e.find(".free-show").html(a)) : (u = Math.floor(Math.random() * (k.length - .002)), (l = k[u]) ? (t = e.find(".j-free-show-span"), n = e.find(".j-free-show-link"), t.length && l.value && t.text(l.value), n.length && l.desc ? n.attr("href", l.desc) : void 0) : void 0)
        }, w = function () {
            var n;
            return n = null, window.addEventListener("resize", function () {
                var e;
                return n && clearTimeout(n), e = document.activeElement, "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? n = setTimeout(function () {
                    return window.updateWinFontSize(), a.trigger("winResize")
                }, 50) : void 0
            })
        }, D = function (n) {
            var e, t, a, o, i;
            if (t = [], !n || !n.trigger || 0 === n.trigger.length)return t;
            for (i = n.trigger, a = 0, o = i.length; o > a; a++)e = i[a], "go" === e.type && e.prehide && t.push(e.go);
            return t
        }, x = function (n) {
            var e, t, a, o;
            for (t = [], n.sort(function (n, e) {
                return n - e
            }), a = 0, o = n.length; o > a; a++)e = n[a], -1 === t.indexOf(e) && t.push(e);
            return t
        }, y = function (n) {
            var e, t, a, o, i, l, r, u, c, p, s;
            for (i = n.pages, a = i.length, l = [], t = null, r = 0, c = i.length; c > r; r++)if (o = i[r], o.cmps.length)for (s = o.cmps, u = 0, p = s.length; p > u; u++)e = s[u], t = D(e), t && a > t && (l = l.concat(t));
            return l = x(l)
        }, t.exports = {init: b}
    }).call(this)
});
;define("common", function (e, t, r) {
    (function () {
        var t, o, n, i, a, l, d, u;
        t = e("async"), e("common/requestAnimationFrame"), n = {}, n.processImageUrl = function (e) {
            return e
        }, i = function (e) {
            return function (t) {
                var r, o, n;
                return r = new Image, r.onload = r.onerror = function () {
                    return t()
                }, "string" == typeof e ? (n = e, o = {}) : (n = e.url, o = e.opts || {}), o.crossOrigin && (r.crossOrigin = "Anonymous"), r.src = n
            }
        }, n.preloadImages = function (e, r, o) {
            var n;
            return t.parallel(function () {
                var t, r, o;
                for (o = [], t = 0, r = e.length; r > t; t++)n = e[t], o.push(i(n));
                return o
            }(), function () {
                return "function" == typeof r ? r() : void 0
            }, $.extend({}, {timeout: 3e3}, o))
        }, l = document.body.clientWidth, a = document.body.clientHeight, o = .8, d = null, u = window.devicePixelRatio, n.calOuterStyle = function (e) {
            var t, r, o, n, i, a, l, d, u, s, c, h, f, p, g, w, b;
            for (i = e.animation, r = [], o = .5, null == i ? i = [] : "[object Array]" !== Object.prototype.toString.call(i) && (i = [i]), n = "both", d = h = 0, f = i.length; f > h; d = ++h)u = i[d], c = null != (p = null != u ? u.name : void 0) ? p : "none", "none" !== c && (a = null != (g = u.count) ? g : 1, "infinite" === a && d !== i.length - 1 && (a = 1), l = null != (w = u.duration) ? w : 1, 0 === l && (l = .1), o += null != (b = u.delay) ? b : 0, s = "" + c + " " + l + "s " + o + "s " + a + " " + n, o += l * a, r.push(s), n = "forwards");
            return t = r.join(","), {
                width: e.style.width / window.defaultWidth * 100 + "%",
                height: "auto" === e.style.height ? e.style.height : e.style.height / window.defaultHeight * 100 + "%",
                left: e.style.left / window.defaultWidth * 100 + "%",
                top: e.style.top / window.defaultHeight * 100 + "%",
                "z-index": e.zIndex || 0,
                "-webkit-animation": t,
                "-moz-animation": t,
                animation: t
            }
        }, n.calInnerStyle = function (e) {
            var t, r;
            return e.style["font-size"] || "text" !== e.cmpType || (e.style["font-size"] = 14), e.style["border-width"] && !e.style["border-color"] && (e.style["border-color"] = "#000000"), t = "", e.style.rotate && (t = "rotate(" + e.style.rotate + "deg)"), t = t || null, {
                "background-color": e.style["background-color"] || null,
                color: e.style.color || "black",
                "border-radius": e.style["border-radius"] ? -1 !== ("" + e.style["border-radius"]).indexOf("%") ? e.style["border-radius"] : "" + e.style["border-radius"] + "px" : "0",
                "-webkit-border-radius": e.style["border-radius"] ? -1 !== ("" + e.style["border-radius"]).indexOf("%") ? e.style["border-radius"] : "" + e.style["border-radius"] + "px" : "0",
                "border-width": e.style["border-width"] + "px",
                "border-style": e.style["border-style"],
                "border-color": e.style["border-color"] || "transparent",
                "font-size": e.style["font-size"] ? e.style["font-size"] / (window.defaultWidth / window.remSlice) + "rem" : "1rem",
                "-webkit-box-shadow": e.style["box-shadow"] || null,
                "box-shadow": e.style["box-shadow"] || null,
                "-webkit-transform": t,
                "-moz-transform": t,
                transform: t,
                opacity: null != (r = e.style.opacity) ? r : 1,
                "font-family": e.style["font-family"] || null
            }
        }, n.calStyle = function (e) {
            var t, r, o, n;
            return e ? (e.rotate && (r = "rotate(" + e.rotate + "deg)"), r = r || null, t = e.height, "auto" !== e.height && (t = isNaN(parseInt(e.height)) ? e.height : e.height / window.defaultHeight * 100 + "%"), o = e.width, "auto" !== e.width && (o = e.width / window.defaultWidth * 100 + "%"), {
                width: o,
                height: t,
                "background-color": e["background-color"] || null,
                color: e.color || "black",
                "border-radius": e["border-radius"] ? -1 !== ("" + e["border-radius"]).indexOf("%") ? e["border-radius"] : "" + e["border-radius"] + "px" : null,
                "line-height": e["line-height"] + "px",
                "border-width": e["border-width"] + "px",
                "border-style": e["border-style"],
                "border-color": e["border-color"] || "transparent",
                "font-size": e["font-size"] ? e["font-size"] / (window.defaultWidth / window.remSlice) + "rem" : void 0,
                "-webkit-box-shadow": e["box-shadow"] || null,
                "box-shadow": e["box-shadow"] || null,
                "-webkit-transform": r,
                "-moz-transform": r,
                transform: r,
                opacity: null != (n = e.opacity) ? n : 1,
                "font-family": e["font-family"] || null
            }) : {}
        }, n.selectStyle = function (e) {
            var t;
            return t = {}, e ? (t = {
                "font-size": e["font-size"] ? e["font-size"] / (window.defaultWidth / window.remSlice) + "rem" : "1rem",
                "border-color": e["border-color"],
                "border-style": e["border-style"],
                "border-width": e["border-width"] + "px",
                "border-radius": e["border-radius"] ? e["border-radius"] + "px" : 0,
                "background-color": e["background-color"],
                color: e.color,
                opacity: e.opacity
            }, n.formatStyleJSONToString(t)) : ""
        }, n.shouldAddCORS = function (e) {
            return -1 !== n.getLocation(e).host.indexOf("rabbitpre")
        }, n.formatStyleJSONToString = function (e) {
            var t, r, o;
            r = "";
            for (t in e)o = e[t], null !== o && void 0 !== o && (r += "" + t + ":" + o + ";");
            return r
        }, n.calStyleStr = function (e) {
            return n.formatStyleJSONToString(n.calStyle(e))
        }, n.calImageActuralWidth = function (e) {
            return null == e && (e = l), parseInt(e * d.width / defaultWidth * u)
        }, n.loadScript = function (e, t, r, o) {
            var n, i, a;
            null == o && (o = {}), n = document.createElement("script"), n.src = e, n.onload = t, n.onerror = r;
            for (i in o)a = o[i], n[i] = a;
            return null
        }, n.appendStyle = function (e) {
            var t;
            return e ? (t = document.createElement("style"), t.innerHTML = e, document.head.appendChild(t)) : void 0
        }, n.calPageSize = function () {
            var e, t;
            return l = document.body.clientWidth, a = document.body.clientHeight, l / a > defaultWidth / defaultHeight ? (e = a, t = defaultWidth * e / defaultHeight) : (t = l, e = defaultHeight * t / defaultWidth), d = {
                width: t,
                height: e
            }
        }, n.getPageSize = function () {
            return d
        }, n.defaultWidth = defaultWidth, n.bom = {
            query: function (e) {
                var t;
                return t = window.location.search.match(new RegExp("(\\?|&)" + e + "=([^&]*)(&|$)")), t ? decodeURIComponent(t[2]) : ""
            }, getHash: function (e) {
                var t;
                return t = window.location.hash.match(new RegExp("(#|&)" + e + "=([^&]*)(&|$)")), t ? decodeURIComponent(t[2]) : ""
            }
        }, n.str = {
            filterInAttr: function (e) {
                return e.replace(/"/g, "&quot;")
            }, trim: function (e) {
                return e.replace(/(^\s+)|(\s+$)/g, "")
            }, xss: function (e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
        }, n.getLocation = function (e) {
            var t;
            return t = document.createElement("a"), t.href = e, t
        }, n.formatDate = function (e, t) {
            var r, o;
            t = new Date(t), o = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            }, /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (r in o)new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o[r] : ("00" + o[r]).substr(("" + o[r]).length)));
            return e
        }, n.showBigMap = function (e) {
            var t, r, o, n, i, a;
            return i = this.calPageSize(), a = i.width, t = i.height, n = $("#big-map-wrap"), 0 === n.length ? ($("body").append("<div id='big-map-wrap'>												<div id='big-map-wrap-close'></div>											</div>"), $("#big-map-wrap-close").tap(function () {
                return $("#big-map-wrap").hide()
            }), this.map || (o = new AMap.Map("big-map-wrap", {
                resizeEnable: !0,
                layers: [new AMap.TileLayer],
                view: new AMap.View2D({})
            }), o.plugin(["AMap.ToolBar"], function () {
                var e;
                return e = new AMap.ToolBar, o.addControl(e)
            }), this.map = o)) : n.show(), r = e.split(","), this.markMap(r)
        }, n.markMap = function (e) {
            return this.map.clearMap(), new AMap.Marker({
                map: this.map,
                position: e,
                icon: "http://webapi.amap.com/images/0.png"
            }), this.map.setCenter(e), this.map.setFitView()
        }, n.detectDevice = function () {
            var e, t, r, o;
            return t = {
                isPc: !1,
                isMac: !1,
                isLinux: !1,
                isIPad: !1
            }, e = navigator.platform, r = navigator.userAgent, t.isPc = 0 === e.indexOf("Win"), t.isMac = 0 === e.indexOf("Mac"), t.isLinux = 0 === e.indexOf("Linux"), t.isIPad = (null != (o = null !== r.match(/iPad/i)) ? o : !0) ? !1 : void 0, t
        }, r.exports = n
    }).call(this)
});
;define("loading", function (n, t, e) {
    (function () {
        var t, i, o, r, l, u, a, d, f, c, s, h, g, p, m, w, v, b;
        t = n("zepto"), n("zepto/fx"), n("zepto/fx.method"), s = n("animation"), c = null, r = null, o = null, a = null, d = null, u = null, i = null, l = null, f = null, g = 0, h = null, w = window.devicePixelRatio, m = function (n) {
            var e;
            return null == n && (n = {}), c = t("#loading-wrapper"), r = c.find(".loading"), o = c.find(".background"), a = c.find(".percent"), d = c.find(".progress"), u = c.find(".logo"), i = c.find(".loading-bottom"), l = c.find(".loading-img"), f = c.find(".unit"), o.attr({
                width: r.width() * w,
                height: r.height() * w
            }), l.hide(), a.show(), f.show(), i.text(null != (e = n.company) ? e : ""), null != n.src && ("" !== n.src ? u.css("backgroundImage", "url(" + n.src + ")") : u.removeClass("rabbitpre")), b(.1)
        }, p = function () {
            return c.fadeOut(400, function () {
                return c.remove()
            })
        }, b = function (n, t) {
            return h && h.stop(), h = s({
                start: g, end: n, duration: 100, onProgress: function (n) {
                    return g = n, v(n), a.text(parseInt(100 * n))
                }, onComplete: function () {
                    return g = n, n >= 1 ? (u.show(), d.hide(), setTimeout(function () {
                        return "function" == typeof t ? t() : void 0
                    }, 0)) : void 0
                }
            }), h.start()
        }, v = function (n) {
            var t, e, i, r;
            return r = o.width() * w, i = o.height() * w, t = o[0], e = t.getContext("2d"), e.clearRect(0, 0, r, i), e.translate(r / 2, i / 2), e.beginPath(), e.arc(0, 0, .95 * r / 2, -Math.PI / 2, 2 * Math.PI * n - Math.PI / 2), e.strokeStyle = "#ff6b00", e.lineWidth = .1 * r / 2, e.stroke(), e.translate(-r / 2, -i / 2)
        }, e.exports = {init: m, hide: p, update: b, redrawSector: v}
    }).call(this)
});
;define("pageManagement", function (e, t, n) {
    (function () {
        var t, i, a, r, o, l, s, d, c, p, u, g, m, f, h, v, y, S, b, w, x, k, D, T, O, C, j, P, z, I, N, M, J, R, A, K,
            F, q, V, E, B, $, _, L, U, Q, W, G, Z, H, X, Y, et, tt, nt, it, at, rt, ot, lt, st, dt, ct, pt, ut, gt, mt,
            ft, ht, vt, yt, St, bt, wt, xt, kt, Dt, Tt, Ot, Ct, jt, Pt, zt, It, Nt, Mt, Jt, Rt, At, Kt, Ft, qt, Vt, Et,
            Bt, $t, _t, Lt, Ut, Qt, Wt, Gt, Zt, Ht, Xt, Yt, en, tn, nn, an, rn, on, ln;
        t = e("zepto"), o = e("common"), c = e("point"), s = e("db"), p = e("stat"), e("zepto/touch"), d = e("pageManagement/lastads"), l = null, Z = c.create(0, 0), Pt = 2, r = t("#page-list"), i = t("#app-bottom"), a = t(document), At = {}, Bt = {}, x = {}, g = !1, u = !1, rt = [], Kt = {}, at = {
            tag: null,
            older: !1,
            msg: null
        }, s.formSubmit = s.registerMethod({
            type: "POST",
            url: "/form/data"
        }), s.getPraise = s.registerMethod({
            type: "GET",
            url: "/cmp/count"
        }), s.postPraise = s.registerMethod({
            type: "POST",
            url: "/cmp/count"
        }), s.postComment = s.registerMethod({
            url: "/comment",
            type: "post"
        }), s.getSelect = s.registerMethod({
            type: "GET",
            url: "/cmp/getlinkage"
        }), s.gatherSubmit = s.registerMethod({type: "POST", url: "/form/freedata"}), w = function (t) {
            var n;
            if (-1 !== t.target.className.indexOf("cmp ") && (n = gt(t.target.id), null != n ? n.effect : void 0))return e.async(["effect"], function (e) {
                return e.init(n, t.target)
            })
        }, Dt = function (n) {
            e.async(["effect"], function (e) {
                var i, a, r, o, l;
                for (o = n.cmps, a = 0, r = o.length; r > a; a++)i = o[a], (null != (l = i.effect) ? l.name : void 0) && e.init(i, t("#cmp-" + i.id)[0]), "praise" === i.cmpType && Ot(n, i)
            })
        }, Ot = function (e, t) {
            return s.getPraise({
                data: {
                    app: "undefined" != typeof pageData && null !== pageData ? pageData.id : void 0,
                    page: null != e ? e.id : void 0,
                    cmp: null != t ? t.cmp_id : void 0
                }, success: function (e) {
                    var n;
                    return t.count = null != (n = e.data) ? n : 0, Qt(t)
                }
            })
        }, Qt = function (e) {
            return t("#cmp-" + e.id + " .j-icon-text").text(e.count)
        }, gt = function (e) {
            var t;
            return t = e.substr(4), x[t]
        }, Jt = {}, ft = function (e, n) {
            var i;
            return i = ("number" == typeof e ? c.create(e, n) : e).toString(), Jt[i] = Jt[i] || t("#page-" + i)
        }, ht = function (e, t) {
            var n;
            return n = ("number" == typeof e ? c.create(e, t) : e).toString(), At[n]
        }, wt = function () {
            return xt(), kt()
        }, xt = function () {
            var e, t, n, i, a, r, o, l;
            for (a = {
                Default: "320*480",
                "iPhone 4": "320*416",
                "iPhone 5": "320*504",
                "iPhone 6": "375*603",
                "iPhone 6 Plus": "414*672"
            }, n = "iPhone 5", t = a[pageData.device].split("*"), i = a[n].split("*"), pageData.pages.length < 2 ? pageData.pages[0].needlitads = !0 : pageData.pages[1].needlitads = !0, d.appid = pageData.id, d.row = pageData.pages.length, d.point = c.create(d.row, 0), l = d.cmps, r = 0, o = l.length; o > r; r++)e = l[r], e.style.left = e.style.left + (t[0] - i[0]) / 2, e.style.top = e.style.top + (t[1] - i[1]) / 2;
            return pageData.pages.push(d)
        }, kt = function () {
            var e, t;
            return e = document.getElementsByTagName("head")[0], t = document.createElement("script"), t.type = "text/javascript", t.src = "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", t.onload = function () {
                return u = !0, console.log("adsGoogleReady:" + u)
            }, e.appendChild(t)
        }, an = function () {
            var e;
            return console.log("triggerAds"), (e = window.adsbygoogle || []).push({})
        }, mt = function () {
            var e, t, n;
            return n = "http://proj3.rabbitpre.com:8088/xinmei?from=tuzhan", t = "http://static.szzbmy.com/nmedie/500w.jpg", e = "<div class='j-little-ads little-ads' style='background-image:url(" + t + ");'>						<div class='j-little-ads-remove little-ads-remove'></div>						<!-- <div class='little-ads-tip'>							<span>广告</span>						</div>-->						<a class='little-ads-a' href='" + n + "'></a>					</div>"
        }, bt = function (n) {
            var i, a, r, o, s, d;
            if (null == n && (n = {}), o = pageData.pages.length, a = pageData, r = 0, !o)return void("function" == typeof n.cb && n.cb());
            if ($t(pageData), Tt(pageData), prehidePage)for (i = s = 0, d = pageData.maxRow + 1; d >= 0 ? d > s : s > d; i = d >= 0 ? ++s : --s)if (-1 === prehidePage.indexOf(i)) {
                r = i;
                break
            }
            return Z = c.create(r, 0), Et(Z, function (e) {
                return Vt(), "function" == typeof n.cb && n.cb(), Dt(e), setTimeout(function () {
                    return ft(e.point).addClass("current"), t(document).trigger("changedTo", [Z]), Yt()
                }, 16)
            }, {onProgress: n.onProgress}), pageData.comment && e.async("comment", function (e) {
                return l = e, l.init()
            }), f()
        }, k = function (e) {
            var t;
            return (t = e) ? (-1 === e.indexOf("http://") && -1 === e.indexOf("https://") && (t = "http://" + e), t) : null
        }, rn = {}, rn.link = function (e, n) {
            var i, a;
            return a = k(e), a ? (i = n.name, n.text && (i = t(n.text).text()), window.fiboSDK ? window.fiboSDK.btnClick(pageData.id + n.id, "" + i + " - " + a) : window.dataSDK && window.dataSDK.btnClick(pageData.id + n.id, "" + i + " - " + a), window.location.href = a) : void 0
        }, rn.toggle = function (e) {
            var n, i, a, r, o, l;
            for (i = null, n = JSON.parse(e), l = [], r = 0, o = n.length; o > r; r++)a = n[r], i = t(".cmp[data-tid='" + a.tid + "']"), 0 === a.type && i.show(), 1 === a.type && i.hide(), l.push(2 === a.type ? i.toggle() : void 0);
            return l
        }, rn.go = function (e) {
            var t, n, i, a, r, o;
            for (n = Z.x > e ? "prev" : "next", i = [], o = window.prehidePage, a = 0, r = o.length; r > a; a++)t = o[a], t !== e && i.push(t);
            return window.prehidePage = i, y(c.create(e, 0), n)
        }, Ut = function (e, t) {
            var n;
            return n = e.type, rn[n] ? rn[n](e[n], t) : void 0
        }, ut = function (e, t) {
            var n, i, a, r, o;
            if (i = null, null != e ? e.trigger : void 0) {
                for (o = e.trigger, a = 0, r = o.length; r > a; a++)n = o[a], n.event === t && (i = n);
                return i && "none" === i.type && (i = null), i
            }
        }, f = function () {
            var n, r, d, c, u, m, f;
            return a.on("winResize", function () {
                return on(o.calPageSize())
            }), a.on("changedTo", function (e, t) {
                var n, a, r, o;
                if (n = pageData.maxRow, prehidePage)for (a = r = o = pageData.maxRow; 0 >= o ? 0 > r : r > 0; a = 0 >= o ? ++r : --r)if (-1 === prehidePage.indexOf(a)) {
                    n = a;
                    break
                }
                return ("undefined" != typeof pageData && null !== pageData ? pageData.delBottom : void 0) ? i.remove() : i[t.x === n ? "fadeIn" : "fadeOut"]()
            }), a.on("tap", ".cmp", function () {
                var n, i, a, r;
                if (i = gt(this.id), r = i.cmpType, a = ut(i, "click"), ("image" === r || "text" === r || "shape" === r) && a && a.type && "none" !== a.type)return t(this).hasClass("trigger-tips") && t(this).removeClass("trigger-tips"), void Ut(a, i);
                if (i.link && (window.fiboSDK ? window.fiboSDK.btnClick(pageData.id + i.id, "" + i.text + " - " + i.link) : window.dataSDK && window.dataSDK.btnClick(pageData.id + i.id, "" + i.text + " - " + i.link), window.location.href = i.link), "fingerprint" === i.cmpType && (n = t(this), n.addClass("tapped"), e.async("fingerprintDialog", function (e) {
                        return new e({cmp: i, viewcount: pageData.viewcount})
                    })), "video" === i.cmpType && e.async("music", function (e) {
                        return e.stop()
                    }), "bless" === i.cmpType && e.async("blessingList", function (e) {
                        return g = !0, e.show({
                            data: i, onHide: function () {
                                return g = !1
                            }, addComment: function (e) {
                                return null != l ? l.addComment(e) : void 0
                            }
                        })
                    }), "praise" === i.cmpType) {
                    if (i.clicked === !0)return;
                    "icon" === i.content.state && t(this).find(".icon-v").addClass("active"), t(this).find(".j-icon-text").addClass("active"), i.count++, i.clicked = !0, Qt(i), s.postPraise({
                        data: {
                            app: pageData.id,
                            page: i.page,
                            cmp: i.cmp_id
                        }
                    })
                }
                return "applink" === i.cmpType && i.appid ? location.href = Y[i.appid] : void 0
            }), a.on("input", "input", function (e) {
                var n, i, a, r;
                return i = t(this), t(e.target).hasClass("j-comment-input-input") ? void S(e) : (n = i.closest(".cmp"), n.length && (a = gt(n.attr("id")), "ginput" !== a.cmpType) ? (a.$submit || (a.$submit = n.find('input[type="submit"]')), r = lt(a, n), r ? a.$submit.removeAttr("disabled") : a.$submit.attr("disabled", !0)) : void 0)
            }), f = {}, u = null, a.on("submit", "form", function (n) {
                var i, a, r, l, d, c, g, m, h, v, y, S, b, w, x, k, D;
                if (n.preventDefault(), t(n.target).hasClass("j-comment-form"))return void en(n);
                if (r = t(this), i = r.closest(".cmp"), i.length) {
                    if (g = i.attr("id"), d = gt(g), b = "", at.older = !1, u = {}, isNaN(Number(d.id)) && (at.older = !0), "FORM_1" === d.id && (at.older = !1), d.message && (at.msg = d.message), at.older) {
                        if (w = lt(d, i), f[d.id])return;
                        f[d.id] = !0
                    } else w = st(d);
                    if (w) {
                        if ((pageData.level || 0) >= 2 && (b = pageData.logoPath ? "background: url('" + pageData.logoPath + "') no-repeat center center;background-size: contain;" : "display: none;"), a = t(e("pageManagement/loading.tpl")({style: b})), a.appendTo(i), v = {
                                data: {},
                                appid: pageData.id
                            }, at.older)for (v.formid = d.id, D = d.items, x = 0, k = D.length; k > x; x++)m = D[x], "input" === m.type && (v.data[m.name] = m.$input.val(), u[m.name] = {}, u[m.name][m.placeholder] = m.$input.val()); else {
                            d.fuckid && (v.formid = d.fuckid), at.tag && (v.tag = at.tag), y = null, l = [];
                            for (S in Kt)h = Kt[S], ("input" === h.type || "star" === h.type) && (y = encodeURIComponent(h.el.val())), "answer" === h.type && (y = h.el.filter(":checked").val()), "answers" === h.type && (l = [], h.el.each(function () {
                                return t(this).is(":checked") ? l.push(t(this).val()) : void 0
                            }), y = l.join(",")), y && "" !== y && (v.data[S] = y, u[S] = {}, u[S][h.label] = y)
                        }
                        return v.formid && v.appid ? (c = o.bom.query("cnl"), c && (v.cnl = c), v.data = JSON.stringify(v.data), s.formSubmit({
                            data: v,
                            success: function (e) {
                                var t, n;
                                if (null != e && null != (n = e.data) ? n.tag : void 0) {
                                    if (at.tag = e.data.tag, Kt)for (h in Kt)t = Kt[h], u[h] || (u[h] = {}, u[h][t.label] = "");
                                    Xt(u, at.tag)
                                }
                                return e.errormessage ? It(e.errormessage, i) : (e.data.message || (e.data.message = at.msg), It(e.data.message, i))
                            },
                            error: function (e) {
                                return alert("提交失败, 请重试!"), p.sendComponent("ERROR", "FORMSUBMIT", "[" + e.errorCode + "] " + e.errorMsg)
                            },
                            complete: function () {
                                return f[d.id] = !1, a.remove()
                            }
                        })) : void alert("提交失败: 缺少必要参数.")
                    }
                }
            }), a.on("tap", ".j-form-star", function () {
                var e, n, i, a;
                return e = t(this), a = e.data("parent"), i = e.data("index"), t("#" + a).val(i), i -= 1, n = e.parents(".j-form-stars"), n.find(".j-form-star").each(function (e) {
                    return i >= e ? t(this).addClass("stared") : t(this).removeClass("stared")
                })
            }), a.on("tap", ".j-gather-star", function () {
                var e, n, i;
                return e = t(this), i = e.data("parent"), n = e.data("index"), t("input[name='" + i + "']").val(n), n--, e.parents(".j-star-group").find(".j-gather-star").each(function (e) {
                    return n >= e ? t(this).addClass("active") : t(this).removeClass("active")
                })
            }), c = !1, n = [], r = null, d = [], m = function (e) {
                var n, i, a;
                return a = "", e ? i = e.message || "提交成功！感谢您的参与" : (i = "网络不给力，请重新提交", a = "color: #fa3544"), n = "<div class='gather-success'>					<div class='gather-content'>						<p style=" + a + ">" + i + "</p>						<button class='gather-btn'>确定</button>					</div>				</div>", t("body").append(n), t("body").on("click", ".gather-btn", function () {
                    return t(".gather-success").remove()
                })
            }, a.on("tap", ".j-gsubmit", function () {
                var e, i, a, l, u, g, f, h, v, y, S, b, w, x, k, D, T, O, C, j, P, z, I, N, M;
                if (h = JSON.parse(pageData.gather), h = h.strict, g = {}, w = {}, k = [], f = null, v = t(this).data("id"), i = gt(v), x = {}, e = t(this), l = ["ginput", "gselect", "gchoose", "gstar"], e.hasClass("submited"))return void alert("您已经提交过, 请勿重复提交.");
                if (!c) {
                    for (N = pageData.pages, D = 0, j = N.length; j > D; D++)for (b = N[D], M = b.cmps, T = 0, P = M.length; P > T; T++)a = M[T], l.indexOf(a.cmpType) >= 0 && a.required && n.push(a.tid), "ginput" === a.cmpType && d.push(a);
                    c = !0
                }
                for (S in h)k = h[S], f = t("input[name='" + S + "'], select[name='" + S + "']"), "checkbox" !== f.attr("type") && "radio" !== f.attr("type") ? f && 2 === f.length ? (k = [], f.each(function () {
                    var e;
                    return e = t(this).val(), e ? k.push(e) : void 0
                }), k && k.length >= 1 && (g[S] = k.join(","))) : f && f.val() && (g[S] = f.val()) : (k = [], f.each(function () {
                    return t(this).is(":checked") ? k.push(t(this).val()) : void 0
                }), k && k.length >= 1 && (g[S] = k.join(",")));
                for (O = 0, z = n.length; z > O; O++)if (y = n[O], !g[y])return void alert("提交失败，有必填项未填写！");
                for (C = 0, I = d.length; I > C; C++) {
                    if (y = d[C], g[y.tid] && "tel" === y.inptype && !/^1[3-8]\d{9}$/.test(g[y.tid]))return void alert("请输入正确的号码");
                    if (g[y.tid] && "email" === y.inptype && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(g[y.tid]))return void alert("请输入正确的邮箱")
                }
                if ("{}" === JSON.stringify(g))return void alert("请填写表单");
                for (S in g)k = g[S], g[S] = et(k);
                for (S in h)k = h[S], x[S] = {}, x[S][k] = g[S] || "";
                return u = o.bom.query("cnl"), u && (w.cnl = u), w.appid = pageData.id, w.data = JSON.stringify(g), r && (w.tag = r), e.addClass("submited"), s.gatherSubmit({
                    data: w,
                    success: function (e) {
                        var t;
                        return (null != e && null != (t = e.data) ? t.tag : void 0) && (r = e.data.tag), Xt(x, r), m(i)
                    },
                    error: function (t) {
                        return e.removeClass("submited"), m(), p.sendComponent("ERROR", "FORMSUBMIT", "[" + t.errorCode + "] " + t.errorMsg)
                    }
                })
            }), window.onunload = function () {
                var e, t;
                window.dataSDK ? "function" == typeof(e = window.dataSDK).exitPage && e.exitPage(Z.x + 1) : window.fiboSDK && "function" == typeof(t = window.fiboSDK).exitPage && t.exitPage(Z.x + 1)
            }, a.on("tap", "#comment-edit", function () {
                var e, n;
                return g = !0, n = t("#wrapper"), e = t("#comment-input"), e.length < 1 && (e = t("<div id='comment-input' class='comment-input'><form class='j-comment-form comment-form'><input class='j-comment-input-input comment-input-input' placeholder='发布弹幕(不超过30字)' type='text'><input id='comment-submit' class='j-comment-submit comment-submit' type='submit' value='发送'></form></div>"), n.append(e)), e.show(), setTimeout(function () {
                    return e.find(".j-comment-input-input").focus()
                }, 1)
            }), a.on("tap", "#comment-input", function (e) {
                var n;
                return e.stopPropagation(), t(e.target).hasClass("j-comment-input-input") || t(e.target).hasClass("j-comment-form") || t(e.target).hasClass("j-comment-submit") ? void 0 : (n = t("#comment-input"), n.hide(), n.find(".j-comment-input-input").blur(), g = !1)
            }), a.on("tap", "#comment-submit", function (e) {
                return e.stopPropagation(), en(e)
            }), a.on("tap", ".j-little-ads-remove", function (e) {
                return e.stopPropagation(), e.preventDefault(), t(this).parents(".j-little-ads").remove()
            }), a.on("tap", ".j-ads-img", function () {
                var e, n, i, a, r, o;
                return r = t(this).index(), a = ht(Z), n = a.cmps, i = n[r], e = i.ad, "undefined" != typeof window && null !== window && null != (o = window.dataSDK) ? o.pushView(e.pfid, e.id) : void 0
            }), a.on("tap", ".j-small-google", function () {
                var e, t, n;
                return t = ht(Z), e = t.ad, "undefined" != typeof window && null !== window && null != (n = window.dataSDK) ? n.pushView(e.pfid, e.id) : void 0
            })
        }, S = function (e) {
            var n;
            return n = t(e.target).val(), n.length > 30 ? (n = n.slice(0, 30), t(e.target).val(n)) : void 0
        }, en = function () {
            var e, n, i, a;
            return e = t("#comment-input"), n = e.find(".j-comment-input-input"), a = n.val().trim(), a = o.str.xss(a), i = "匿名", a.length ? (s.postComment({
                data: {
                    appid: pageData.id,
                    nickname: i,
                    content: a
                }, success: function () {
                    var e;
                    return e = {content: a, now: !0}, l.addCurComment(e)
                }
            }), n.val(""), e.hide(), e.find(".j-comment-input-input").blur(), g = !1) : void 0
        }, Xt = function (e, t) {
            var n, i, a;
            return n = {data: e}, t && (n.tag = t), (null != (i = window.dataSDK) ? i.saveFormInfo : void 0) ? window.dataSDK.saveFormInfo(n) : (null != (a = window.fiboSDK) ? a.saveFormInfo : void 0) ? window.fiboSDK.saveFormInfo(n) : void 0
        }, It = function (n, i) {
            var a, r, o;
            return o = "", r = "", (pageData.level || 0) >= 2 && (pageData.logoPath ? o = "background: url('" + pageData.logoPath + "') no-repeat center center;background-size: contain;" : (o = "display: none;", r = "top: 30%;")), a = t(e("pageManagement/formSubmitSuccess.tpl")({
                message: n || "提交成功",
                style: o,
                messagestyle: r
            })), a.appendTo(i)
        }, lt = function (e, t) {
            var n, i, a, r, l;
            for (i = !0, l = e.items, a = 0, r = l.length; r > a; a++)if (n = l[a], "input" === n.type && (n.$input || (n.$input = t.find("input[name='" + n.name + "']")), n.isRequired && "" === o.str.trim(n.$input.val()))) {
                i = !1;
                break
            }
            return i
        }, st = function (e) {
            var n, i, a, r, l, s, d, c, p, u;
            for (l = !0, n = null, a = null, s = 0, c = rt.length; c > s; s++)if (i = rt[s], ("question" === i.type || "title" === i.type) && (a = i.text), i.name && "" !== i.name && ("input" === i.type && (a = i.placeholder), Kt[i.name] = {
                    el: t("input[name='" + i.name + "']"),
                    type: i.type,
                    label: a || i.name
                }, a && (a = null)), i.isRequired && "input" === i.type)for (u = e.items, d = 0, p = u.length; p > d; d++)if (r = u[d], r.name === i.name && "" === o.str.trim(Kt[i.name].el.val()))return !1;
            return l
        }, Ct = function () {
            var e, t;
            return e = document.getElementsByTagName("head")[0], t = document.createElement("script"), t.type = "text/javascript", t.src = "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", t.onload = function () {
                return u = !0
            }, e.appendChild(t)
        }, $t = function (e) {
            var t, n, i, a, o;
            for ("8" === e.state && e.viewcount >= 1e5 && (window.adsenable = !0, wt()), (null != e ? e.ad : void 0) && (window.adsenable = !0, Ct()), t = 0, o = e.pages, i = 0, a = o.length; a > i; i++)n = o[i], n.point = c.create(n.row, n.col), At[n.point.toString()] = n, n.row > t && (t = n.row);
            return e.maxRow = t, e.loop && e.pages.length > 1 ? r.data("loop", !0) : void 0
        }, Tt = function (e) {
            var t, n;
            return n = "", 1 !== e.switch_guide && (n = "noSwitch"), r.html(function () {
                var i, a, r, o;
                for (r = e.pages, o = [], i = 0, a = r.length; a > i; i++)t = r[i], o.push("<li id='page-" + t.point.toString() + "' class='page " + n + "'><div id='page-inner-" + t.point.toString() + "' class='page-inner'></div></li>");
                return o
            }().join("")), on(o.calPageSize())
        }, Rt = null, on = function (e) {
            return Rt && (document.head.removeChild(Rt), Rt = null), Rt = document.createElement("style"), Rt.innerHTML = ".page-inner{		width: " + e.width + "px;		height: " + e.height + "px;		margin-left: -" + e.width / 2 + "px;		margin-top: -" + e.height / 2 + "px;	}", document.head.appendChild(Rt)
        }, Et = function (e, t, n) {
            var i, a;
            if (!Bt[e])return _t(e), i = ht(e), a = i.point.toString(), Bt[a] = !0, qt(e, function () {
                return E(e), "function" == typeof t ? t(i) : void 0
            }, n)
        }, _t = function (e) {
            var t, n, i, a, r, l, s, d, c, p, u, g;
            for (r = ht(e), r.bgimage && ("Q" === r.bgserver ? -1 !== r.bgimage.indexOf("?imageMogr2") ? r.bgimage += "" : -1 === r.bgimage.indexOf("?imageView2") && (r.bgimage += "") : -1 !== r.bgimage.indexOf("@") ? (a = r.bgimage.lastIndexOf("."), -1 !== a && a > r.bgimage.indexOf("@") ? (i = r.bgimage.substring(a), r.bgimage = r.bgimage.substring(0, a)  + "?crossorigin=2") : r.bgimage += "?crossorigin=4") : r.bgimage += "?crossorigin=5"), c = r.cmps, g = [], s = 0, d = c.length; d > s; s++)n = c[s], n.dynamicPath ? (l = n.dynamicPath, l = l.replace(/\{shorturl\}/g, null != (p = pageData.shorturl) ? p : pageData.id), l = l.replace(/\{id\}/g, pageData.id), l = l.replace(/\{userid\}/g, pageData.userid), null == n.file && (n.file = {}), n.file.url = l) : (null != (u = n.file) ? u.key : void 0) && (n.file.ignorezip === !0 ? n.file.url = n.file.key : "Q" === n.file.server ? (t = ["quality/70"], n.file.key = n.file.key.replace("?imageMogr2/auto-orient", ""), t.push(n.file.a ? "crop/!" + n.file.a : "auto-orient"), n.file.url = t.length ? "" + n.file.key + "?imageMogr2/" + t.join("/") : "" + n.file.key) : (t = [], n.file.a && t.push(n.file.a + "a"), t.push(""), t.push(""), n.file.url =  n.file.key  + "?crossorigin=3")), g.push(n.link ? /^https?:/.test(n.link) ? void 0 : n.link = "http://" + n.link : void 0);
            return g
        }, qt = function (e, t, n) {
            var i, a, r, l, s, d;
            for (null == n && (n = {}), r = ht(e), a = [], r.bgimage && a.push(r.bgimage), d = r.cmps, l = 0, s = d.length; s > l; l++)i = d[l], "image" === i.cmpType && a.push({
                url: i.file.url,
                opts: {crossOrigin: !0}
            }), "shape" === i.cmpType && a.push({url: i.src, opts: {crossOrigin: !0}});
            return 0 === a.length ? "function" == typeof t ? t(r) : void 0 : o.preloadImages(a, function () {
                return "function" == typeof t ? t(r) : void 0
            }, n)
        }, it = {1: 12, 2: 13, 3: 16, 4: 18, 5: 24, 6: 32, 7: 48}, Ft = function (e) {
            var t, n, i, a, r, o, l, s, d, p;
            if (a = [], i = null, e.trigger) {
                for (d = e.trigger, r = 0, l = d.length; l > r; r++)t = d[r], "go" === t.type && t.go >= 0 && a.push(t.go);
                for (p = [], o = 0, s = a.length; s > o; o++)n = a[o], n >= 0 && "" !== n && n <= pageData.maxRow ? (i = c.create(n, 0), p.push(Bt[i] ? void 0 : Et(i))) : p.push(void 0);
                return p
            }
        }, yt = function (e) {
            var t, n, i, a, r, o, l, s, d;
            if (a = [], e.trigger) {
                for (d = e.trigger, r = 0, l = d.length; l > r; r++)if (n = d[r], "toggle" === n.type && n.toggle)for (t = JSON.parse(n.toggle), o = 0, s = t.length; s > o; o++)i = t[o], 0 === i.type && a.push(i.tid);
                return a
            }
        }, U = {}, dt = [], Y = {}, H = {}, X = function (e) {
            var n, i;
            if (!H[e])return H[e] = !0, n = {}, i = JSON.stringify(n), t.post("https://fds.so/v2/url/" + e, i, function (t) {
                return Y[e] = t.url
            })
        }, E = function (e) {
            var n, i, a, r, l, s, d, c, p, u, g, m, f, h, v, y, S, b, w, k, P, E, Q, W, G;
            if (!U[e]) {
                if (i = ft(e), n = i.find(".page-inner"), u = ht(e), p = [], v = [], f = [], m = [], g = "", u.bgimage && i.css({backgroundImage: "url(" + u.bgimage + ")"}), u.bgcol && i.css({backgroundColor: u.bgcol}), n.html(function () {
                        var e, t, n, i;
                        for (n = u.cmps, i = [], e = 0, t = n.length; t > e; e++)switch (l = n[e], l.id = (l.id || ct()) + "", x[l.id] = l, ("image" === l.cmpType || "text" === l.cmpType || "shape" === l.cmpType) && l.trigger && (Ft(l), r = yt(l), v = v.concat(r)), l.cmpType) {
                            case"image":
                                i.push(F(l));
                                break;
                            case"text":
                                i.push(_(l));
                                break;
                            case"btn":
                                i.push(j(l));
                                break;
                            case"form":
                                i.push(I(l));
                                break;
                            case"video":
                                i.push(L(l));
                                break;
                            case"onecall":
                                i.push(V(l));
                                break;
                            case"fingerprint":
                                i.push(z(l));
                                break;
                            case"applink":
                                l.appid || O(l), a = l.appid, X(a), i.push(O(l));
                                break;
                            case"map":
                                p.push(l), i.push(q(l));
                                break;
                            case"bless":
                                i.push(C(l));
                                break;
                            case"praise":
                                i.push(B(u, l));
                                break;
                            case"ginput":
                                h = M(l), g += h.phCss, i.push(h.tpl);
                                break;
                            case"gsubmit":
                                i.push(K(l));
                                break;
                            case"gselect":
                                l.pageid = u.id, m.push(l), i.push(R(l));
                                break;
                            case"gstar":
                                i.push(A(l));
                                break;
                            case"gchoose":
                                i.push(N(l));
                                break;
                            case"shape":
                                f.push(l), i.push($(l));
                                break;
                            case"adsgoogle":
                                i.push(D(l));
                                break;
                            case"google":
                                i.push(J(l));
                                break;
                            case"adsImg":
                                i.push(T(l));
                                break;
                            default:
                                i.push("")
                        }
                        return i
                    }().join("")), o.appendStyle(g), U[e] = !0, v)for (b = 0, E = v.length; E > b; b++)d = v[b], s = t(".cmp[data-tid='" + d + "']"), s && s.length > 0 && s.hide();
                for (y = function (e) {
                    return t("#cmp-" + e.id).tap(function () {
                        return o.showBigMap(e.coordinate)
                    })
                }, w = 0, Q = p.length; Q > w; w++)l = p[w], y(l);
                for (S = function (e) {
                    var n, i;
                    return n = t("#cmp-" + e.id).find(".cmp-inner"), i = e.fill, t.ajax({
                        url: e.src,
                        dataType: "html",
                        success: function (e) {
                            var a, r, o;
                            return n.html(e), r = n.find("svg"), r.attr({
                                width: "100%",
                                height: "100%"
                            }), null != (o = r[0]) && o.setAttribute("preserveAspectRatio", "none"), a = r.find("path"), a.each(function (e, n) {
                                var a;
                                return (a = i[e]) ? t(n).attr("fill", a) : void 0
                            })
                        }
                    })
                }, k = 0, W = f.length; W > k; k++)l = f[k], S(l);
                for (P = 0, G = m.length; G > P; P++)l = m[P], Gt(l);
                return n.find("font").each(function (e, t) {
                    var n;
                    return t.getAttribute("size") && (n = it[t.size]) ? (t.style.fontSize = n / (window.defaultWidth / window.remSlice) + "rem", t.removeAttribute("size")) : void 0
                }), u.needlitads === !0 ? (c = mt(), i.append(c)) : void 0
            }
        }, Q = 1, ct = function () {
            return Q += 1, Q - 1
        }, St = function (e) {
            var t, n, i, a;
            if (n = "", e) {
                for (i = 0, a = e.length; a > i; i++)t = e[i], "none" !== t.type && t.tips && (n = "trigger-tips"), "toggle" !== t.type || "" !== t.toggle && "[]" !== t.toggle || (n = ""), "link" === t.type && "" === t.link && (n = ""), "go" === t.type && ("" === t.go || t.go > pageData.maxRow) && (n = "");
                return n
            }
        }, M = function (e) {
            var t, n, i, a;
            return n = o.calOuterStyle(e), t = o.calInnerStyle(e), i = e.text, a = e.inptype, e.required && (i += "(必填)"), "name" === a && (a = "text"), {
                phCss: "			.cmp-" + e.tid + "::-webkit-input-placeholder {				color: " + (e.style.color || "black") + ";			}			.cmp-" + e.tid + "::-moz-placeholder {				color: " + (e.style.color || "black") + ";			}			.cmp-" + e.tid + "::-moz-placeholder {				color: " + (e.style.color || "black") + ";			}			.cmp-" + e.tid + "::-ms-input-placeholder {				color: " + (e.style.color || "black") + ";			}		",
                tpl: "<div			id='cmp-" + e.id + "'			data-tid='" + e.tid + "'			class='cmp ginput'			style='" + o.formatStyleJSONToString(n) + "'>			<input				name='" + e.tid + "'				class='cmp-inner cmp-" + e.tid + "'				style='" + o.formatStyleJSONToString(t) + "'				placeholder='" + i + "'				type='" + a + "'			/>		</div>"
            }
        }, K = function (e) {
            var t, n;
            return n = o.calOuterStyle(e), t = o.calInnerStyle(e), "<div id='cmp-" + e.id + "'		data-tid='" + e.tid + "'		class='cmp gsubmit'		style='" + o.formatStyleJSONToString(n) + "'>		<button data-id='cmp-" + e.id + "' class='cmp-inner j-gsubmit' style='" + o.formatStyleJSONToString(t) + "'>" + e.text + "</button>	</div>"
        }, vt = function (e, t) {
            var n, i, a, r, l, s, d, c, p, u, g;
            if (i = "", l = "", s = "", a = "", c = "", d = o.selectStyle(e.style), n = 1 === t.label.length ? "single" : "multi", t.options) {
                for (l += "<option value=''>请选择" + et(t.label[0]) + "</option>", g = t.options, p = 0, u = g.length; u > p; p++)r = g[p], a = et(r.name), c = et(r.value), l += "<option value='" + c + "'>" + a + "</option>";
                i += "<select class='" + n + " j-first-sel' style='" + d + "' name='" + e.tid + "'>" + l + "</select>"
            }
            return 2 === t.label.length && (s = "<option value=''>请选择" + et(t.label[1]) + "</option>", i += "<select class='" + n + " j-second-sel' style='" + d + "' name='" + e.tid + "'>" + s + "</select>"), i
        }, et = function (e) {
            return e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : e
        }, Gt = function (e) {
            var n, i, a;
            return i = "", a = "", e.originlink ? void t.ajax({
                type: "GET",
                url: e.originlink,
                dataType: "jsonp",
                success: function (n) {
                    var r;
                    return i = "", n ? (a = n, i = vt(e, a), r = t("#cmp-" + e.id + " .cmp-inner"), r.html(i), 2 === a.label.length ? h(r, a) : void 0) : void 0
                }
            }) : (a = JSON.parse(e.selector), i = vt(e, a), n = t("#cmp-" + e.id + " .cmp-inner"), n.html(i), 2 === a.label.length ? h(n, a) : void 0)
        }, h = function (e, n) {
            return e.on("change", ".j-first-sel", function () {
                var i, a, r, o, l, s, d, c, p, u, g, m, f;
                for (d = t(this).val(), s = e.find(".j-second-sel"), i = null, a = "", o = "", c = "", f = n.options, p = 0, g = f.length; g > p; p++)if (r = f[p], r.value === d) {
                    i = r.children;
                    break
                }
                if (a += "<option value=''>请选择" + n.label[1] + "</option>", i)for (u = 0, m = i.length; m > u; u++)l = i[u], o = et(l.name), c = et(l.value), a += "<option value='" + c + "'>" + o + "</option>";
                return s.html(a)
            })
        }, R = function (e) {
            var t, n;
            return n = o.calOuterStyle(e), t = o.calInnerStyle(e), "<div		id='cmp-" + e.id + "'		data-tid='" + e.tid + "'		class='cmp gselect'		style='" + o.formatStyleJSONToString(n) + "'>		<div class='cmp-inner'>		</div>	</div>"
        }, A = function (e) {
            var t, n, i, a, r;
            for (a = o.calOuterStyle(e), n = o.calInnerStyle(e), t = "", i = r = 1; 5 >= r; i = ++r)t += "<i class='iconfont icon-" + e.icontype + " j-gather-star' data-index='" + i + "' data-parent='" + e.tid + "' style='font-size: " + n["font-size"] + "px;'></i>";
            return "<div		id='cmp-" + e.id + "'		data-tid='" + e.tid + "'		class='cmp gstar'		style='" + o.formatStyleJSONToString(a) + "'>		<div class='cmp-inner' style='" + o.formatStyleJSONToString(n) + "'>			<div class='star-group j-star-group'>				<input type='hidden' value='' name='" + e.tid + "'/>				" + t + "			</div>		</div>	</div>"
        }, pt = function (e) {
            var t, n, i, a, r, o, l, s, d;
            for (n = "", a = "", o = "", "checkbox" === e.answertype && (t = "choose-checkbox"), e.answertitle && (e.required === !0 && (a = "（必填）"), o = "" + e.answertitle + a, n += "<div class='choose-title' style='color:" + e.style.color + ";'>" + o + "</div>"), d = e.item, i = l = 0, s = d.length; s > l; i = ++l)r = d[i], n += "<div class='field choose-item " + t + "'>							<div class='checkbox radio'>								<input type='" + e.answertype + "' class='hidden' id='" + e.tid + "-" + i + "' name='" + e.tid + "' value='" + r + "'/>								<label for='" + e.tid + "-" + i + "'>" + r + "</label>							</div>						</div>";
            return n
        }, N = function (e) {
            var t, n, i;
            return i = o.calOuterStyle(e), t = o.calInnerStyle(e), n = pt(e), "<div		id='cmp-" + e.id + "'		data-tid='" + e.tid + "'		class='cmp gchoose'		style='" + o.formatStyleJSONToString(i) + "'>		<div class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "'>			" + n + "		</div>	</div>"
        }, F = function (e) {
            var t, n, i, a, r, l;
            return (null != (l = e.file) ? l.url : void 0) ? (i = o.calOuterStyle(e), n = o.calInnerStyle(e), n.position = "absolute", a = e.trigger ? St(e.trigger) : "", r = parseInt(parseFloat(i.width) * o.getPageSize().width / 100), t = parseInt(parseInt(i.height) * o.getPageSize().height / 100), "<div id='cmp-" + e.id + "'				data-tid='" + e.tid + "'				class='cmp image " + a + "'				style='" + o.formatStyleJSONToString(i) + "'				width='" + r + "'				height='" + t + "'>		<img				class='cmp-inner'				src='" + e.file.url + "'				style='" + o.formatStyleJSONToString(n) + "'				width='" + r + "'				height='" + t + "'				" + (o.shouldAddCORS(e.file.url) ? 'crossorigin="anonymous"' : "") + "				ondragstart='return false;'		/>	</div>") : ""
        }, $ = function (e) {
            var t, n, i, a, r;
            return i = o.calOuterStyle(e), n = o.calInnerStyle(e), a = e.trigger ? St(e.trigger) : "", r = parseInt(parseFloat(i.width) * o.getPageSize().width / 100), t = parseInt(parseInt(i.height) * o.getPageSize().height / 100), "<div id='cmp-" + e.id + "'				data-tid='" + e.tid + "'				class='cmp shape " + a + "'				style='" + o.formatStyleJSONToString(i) + "'				width='" + r + "'				height='" + t + "'>			<div class='cmp-inner'				style='" + o.formatStyleJSONToString(n) + "'				width='" + r + "'				height='" + t + "'>			</div>	</div>"
        }, _ = function (e) {
            var n, i, a, r, l;
            return e.text ? (r = o.calOuterStyle(e), i = o.calInnerStyle(e), a = null, l = e.trigger ? St(e.trigger) : "", e.style["line-height"] && (a = e.style["line-height"] / (window.defaultWidth / window.remSlice) + "rem"), t.extend(i, {
                color: e.style.color || "black",
                "line-height": a,
                "text-align": e.style["text-align"] || null
            }), "image" === e.textType ? "<div						id='cmp-" + e.id + "'						data-tid='" + e.tid + "'						class='cmp text " + l + "'						style=\"" + o.formatStyleJSONToString(r) + "\">				<div class='cmp-inner'						style=\"" + o.formatStyleJSONToString(i) + "\"				>					<img src='" + e.imageLink + "' />				</div>			</div>" : (n = t("<div>" + e.text + "</div>"), n.find("div,span,font").each(function () {
                var e, n, i;
                return n = t(this), e = n.css("fontSize"), "-webkit-xxx-large" === e && (e = 48), i = parseInt(e, 10), n.css("fontSize", i / (window.defaultWidth / window.remSlice) + "rem")
            }), e.text = n.html(), n = null, "<div						id='cmp-" + e.id + "'						data-tid='" + e.tid + "'						class='cmp text " + l + "'						style=\"" + o.formatStyleJSONToString(r) + "\">					<div class='cmp-inner'							style=\"" + o.formatStyleJSONToString(i) + '"					>' + e.text + "</div>				</div>")) : ""
        }, j = function (e) {
            var t, n;
            return n = o.calOuterStyle(e), t = o.calInnerStyle(e), "<div	id='cmp-" + e.id + "'	data-tid='" + e.tid + "'	class='cmp btn'	style='" + o.formatStyleJSONToString(n) + "'>		<button class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "; overflow:hidden;'>" + e.text + "</button>	</div>"
        }, O = function (e) {
            var t, n;
            return n = o.calOuterStyle(e), t = o.calInnerStyle(e), "<div	id='cmp-" + e.id + "'	data-tid='" + e.tid + "'	class='cmp btn applink'	style='" + o.formatStyleJSONToString(n) + "'>		<button class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "; overflow:hidden;'>" + e.text + "</button>	</div>"
        }, ot = e("pageManagement/form.tpl"), I = function (e) {
            var t, n, i, a, r, l, s, d;
            for (r = o.calOuterStyle(e), i = o.calInnerStyle(e), t = o.calStyle(e.btnStyle), n = !1, d = e.items, l = 0, s = d.length; s > l; l++)a = d[l], a.isRequired && (n = !0);
            return rt = rt.concat(e.items), ot(e, {C: o, outerStyle: r, innerStyle: i, btnStyle: t, disabled: n})
        }, ln = e("pageManagement/video.tpl"), L = function (e) {
            var t, n, i, a;
            return (null != (i = e.video) ? i.embed : void 0) ? (n = o.calOuterStyle(e), t = o.calInnerStyle(e), window.isPC && (null != (a = e.video) ? a.swf : void 0) && (e.video.embed = e.video.swf), ln(e, {
                C: o,
                outerStyle: n,
                innerStyle: t
            })) : ""
        }, Nt = e("pageManagement/oneCall.tpl"), Mt = e("pageManagement/oneCallPic.tpl"), V = function (e) {
            var t, n;
            switch (n = o.calOuterStyle(e), t = o.calInnerStyle(e), e.version) {
                case"pic":
                    return Mt(e, {C: o, outerStyle: n, innerStyle: t});
                default:
                    return Nt(e, {C: o, outerStyle: n, innerStyle: t})
            }
        }, tt = e("pageManagement/fingerprint.tpl"), nt = e("pageManagement/fingerprintwhite.tpl"), z = function (e) {
            switch (e.version) {
                case"white":
                    return nt(e, {C: o, outerStyle: o.calOuterStyle(e), innerStyle: o.calInnerStyle(e)});
                default:
                    return tt(e, {C: o, outerStyle: o.calOuterStyle(e), innerStyle: o.calInnerStyle(e)})
            }
        }, q = function (e) {
            var t, n, i, a;
            return i = o.calOuterStyle(e), n = o.calInnerStyle(e), a = parseInt(parseFloat(i.width) * o.getPageSize().width / 100), t = parseInt(parseInt(i.height) * o.getPageSize().height / 100), "<div id='cmp-" + e.id + "'				data-tid='" + e.tid + "'				class='cmp map'				style='" + o.formatStyleJSONToString(i) + "'				width='" + a + "'				height='" + t + "'>		<img				class='cmp-inner'				src='http://restapi.amap.com/v3/staticmap?location=" + e.coordinate + "&zoom=16&size=" + a + "*" + t + "&markers=mid,,A:" + e.coordinate + "&key=ee95e52bf08006f63fd29bcfbcf21df0'				style='" + o.formatStyleJSONToString(n) + "'				width='" + a + "'				height='" + t + "'				ondragstart='return false;'		/>	</div>"
        },v = e("pageManagement/blessing.tpl"),C = function (e) {
            var n, i;
            return i = o.calOuterStyle(e), n = o.calInnerStyle(e), t.extend(n, {
                color: e.style.color || "black",
                "line-height": e.style["line-height"] ? e.style["line-height"] / (window.defaultWidth / window.remSlice) + "rem" || null : void 0,
                "text-align": e.style["text-align"] || null,
                "word-break": e.style["word-break"] || null,
                overflow: e.style.overflow || null
            }), v(e, {C: o, outerStyle: i, innerStyle: n})
        },P = function (e) {
            var t, n, i, a, r, o, l;
            for (l = [], r = 0, o = e.length; o > r; r++)t = e[r], n = t.coordinate.split(","), i = new AMap.Map("cmp-" + t.id + "-inner", {
                resizeEnable: !0,
                layers: [new AMap.TileLayer],
                view: new AMap.View2D({})
            }), i.plugin(["AMap.ToolBar"], function () {
                var e;
                return e = new AMap.ToolBar, i.addControl(e)
            }), a = new AMap.Marker({
                map: i,
                position: n,
                icon: "http://webapi.amap.com/images/0.png"
            }), i.setCenter(n), l.push(i.setFitView());
            return l
        },B = function (e, t) {
            var n, i, a, r, l;
            return l = o.calOuterStyle(t), r = o.calInnerStyle(t), i = "", a = "", t.page = e.id, "icon" === t.content.state && (i = "icon-" + t.content.icon), "img" === t.content.state && (n = "width: " + t.content.size + "px;height: " + t.content.size + "px;", a = "<img src='" + t.content.img + "' style='" + n + "'/>"), "<div id='cmp-" + t.id + "'				data-tid='" + t.tid + "'				class='cmp praise'				style='" + o.formatStyleJSONToString(l) + "'>		<div class='cmp-inner " + t.layout + "' style='" + o.formatStyleJSONToString(r) + "font-size:" + t.content.size + "px;'>			<i class='iconfont icon-v " + i + "'>				" + a + "			</i>			<span class='j-icon-text icon-text' style='font-size:" + .5 * t.content.size + "px;line-height: " + t.content.size + "px;'>0</span>		</div>	</div>"
        },D = function (e) {
            var t, n;
            return n = o.calOuterStyle(e), t = o.calInnerStyle(e), "<div id='cmp-" + e.id + "'				data-tid='" + e.tid + "'				class='cmp ads-google'				style='" + o.formatStyleJSONToString(n) + "'>		<div class='cmp-inner' style='" + o.formatStyleJSONToString(t) + "'>			<ins class='adsbygoogle'     		style='display:block'				data-ad-client='" + e.client + "'				data-ad-slot='" + e.slot + "'				data-ad-format='auto'>			</ins>		</div>	</div>"
        },J = function (e) {
            return "<div id='cmp-" + e.id + "'		data-tid='" + e.tid + "'		class='cmp small-google j-small-google'		style='width:300px;height:600px;top:50%;left:50%;margin-left:-150px;margin-top:-300px;'	>		<div class='cmp-inner tz-iframe-container'			style='display: flex;align-items: center;justify-content: center'		>			<ins class='adsbygoogle'     		style='display:inline-block;width:300px;height:600px;'				data-ad-client='" + e.client + "'				data-ad-slot='" + e.slot + "'				data-ad-format='auto'>			</ins>		</div>	</div>"
        },T = function (e) {
            return "<div data-id='cmp-" + e.id + "' class='ads-img j-ads-img'>		<a 			class='cmp-inner ads-img-inner ads-inner-" + e.index + "'			style='background:url(" + e.ad_imgpath + ");background-size:100% 100%;'			href='" + e.ad_link + "'		>		</a>	</div>"
        },Vt = function () {
            var e, t, n, i, a;
            for (a = [], e = i = 1; Pt >= 1 ? Pt >= i : i >= Pt; e = Pt >= 1 ? ++i : --i)t = c.create(Z.x + e, Z.y), ht(t) && !Bt[t.toString()] && Et(t), n = c.create(Z.x, Z.y + e), a.push(ht(n) && !Bt[n.toString()] ? Et(n) : void 0);
            return a
        },W = {
            next: "pt-page-moveToTop",
            prev: "pt-page-moveToBottom",
            left: "pt-page-moveToLeft",
            right: "pt-page-moveToRight"
        },tn = {
            next: "pt-page-moveFromBottom",
            prev: "pt-page-moveFromTop",
            left: "pt-page-moveFromRight",
            right: "pt-page-moveFromLeft"
        },G = {next: "Up", prev: "Down", left: "Left", right: "Right"},nn = {
            next: "Down",
            prev: "Up",
            left: "Left",
            right: "Right"
        },Wt = function (t) {
            var n, i, a, r, o;
            for (r = t.cmps, o = [], i = 0, a = r.length; a > i; i++)n = r[i], n.effect && o.push(e.async(["effect"], function (e) {
                return e.destroy(n, document.getElementById("cmp-" + n.id))
            }));
            return o
        },Zt = function (e) {
            var n, i, a, r, o, l, s;
            for (l = e.cmps, s = [], r = 0, o = l.length; o > r; r++)i = l[r], "video" === i.cmpType ? (n = t("#cmp-" + i.id), a = n.html(), s.push(n.html("").html(a))) : s.push(void 0);
            return s
        },m = null,Yt = function () {
            return pageData.timeinterval ? m = setTimeout(function () {
                return zt()
            }, 1e3 * pageData.timeinterval) : void 0
        },b = function () {
            return m ? clearTimeout(m) : void 0
        },y = function (e, n) {
            var i, a, r, o, l, s, d, p, m, f, h, v, S, w, x, k, D, T;
            if (v = pageData.pages.length, prehidePage && prehidePage.indexOf(e.x) >= 0)return "next" === n && e.x < v - 1 && y(c.create(e.x + 1, 0), "next"), void("prev" === n && e.x > 0 && y(c.create(e.x - 1, 0), "prev"));
            if (!g && ht(e.toString())) {
                if (!Bt[e])return void Et(e);
                if (d = ht(Z), f = ht(e), d.needToCheckAllowMoveToNext)for (x = d.cmps, S = 0, w = x.length; w > S; S++)if (s = x[S], s.notAllowMoveToNext)return;
                if (b(), g = !0, l = f["in"] || pageData["in"] || "move", p = "pt-page-" + l + "Out" + G[n], h = "pt-page-" + l + "In" + nn[n] + " pt-page-onTop", i = ft(Z), a = ft(e), Zt(d), Wt(d), Dt(f), a.show().addClass(h), i.addClass(p), f.needads === !0 && u)try {
                    an()
                } catch (O) {
                    m = O, console.log(m)
                }
                if ((null != f ? f.ad : void 0) && u)try {
                    an()
                } catch (O) {
                    m = O, console.log(m)
                }
                if (setTimeout(function () {
                        return g = !1, a.removeClass(h).addClass("current"), i.removeClass("current " + p), i.hide(), Z = e, Vt(), t(document).trigger("changedTo", [e]), Yt()
                    }, 800), r = window.fiboSDK || window.dataSDK, window.adsenable === !0 && 1 === e.x && "function" == typeof r.pushView && r.pushView("UqAFqbzv", "4a58fea8-1085-4467-b829-2bc62d6936e3"), window.adsenable === !0 && e.x === (null != (k = pageData.pages) ? k.length : void 0) - 1 && "function" == typeof r.pushView && r.pushView("UqAFqbzv", "4a58fea8-1085-4467-b829-2bc62d6936e2"), null != (null != f ? f.ad : void 0)) {
                    if (null != f && null != (D = f.ad) ? D.hasView : void 0)return;
                    return f.ad.hasView = !0, o = f.ad, null != (T = window.dataSDK) && "function" == typeof T.pushView ? T.pushView(o.pfid, o.id) : void 0
                }
            }
        },zt = function () {
            return y(c.create(Z.x + 1 > pageData.maxRow && pageData.loop && pageData.pages.length > 1 ? 0 : Z.x + 1, 0), "next")
        },Lt = function () {
            return y(c.create(Z.x - 1 < 0 && pageData.loop && pageData.pages.length > 1 ? pageData.maxRow : Z.x - 1, 0), "prev")
        },jt = function () {
            return y(c.create(Z.x, Z.y + 1), "left")
        },Ht = function () {
            return y(c.create(Z.x, Z.y - 1), "right")
        },n.exports = {init: bt, next: zt, prev: Lt, left: jt, right: Ht, go: rn.go}
    }).call(this)
});
;define("zepto/touch", function (e) {
    (function () {
        var t, n, o, i, r, u, l, a, c, p, s, g, d, f, v = [].indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (t in this && this[t] === e)return t;
                return -1
            };
        t = e("zepto"), d = {}, f = null, g = null, s = null, i = null, c = null, a = 750, p = function (e, t, n, o) {
            return Math.abs(e - t) >= Math.abs(n - o) ? e - t > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down"
        }, l = function () {
            return c = null, d.last ? (d.el.trigger("longTap"), d = {}) : void 0
        }, o = function () {
            return c && clearTimeout(c), c = null
        }, n = function () {
            return f && clearTimeout(f), g && clearTimeout(g), s && clearTimeout(s), c && clearTimeout(c), f = g = s = c = null, d = {}
        }, u = function () {
            return ("touch" === event.pointerType || event.pointerType === event.MSPOINTER_TYPE_TOUCH) && event.isPrimary
        }, r = function (e, t) {
            return e.type === "pointer" + t || e.type.toLowerCase() === "mspointer" + t
        }, t(function () {
            var e, h, w, m, T, y, M, x, b, P, S;
            return P = null, e = null, m = null, S = null, h = 0, w = 0, b = !1, x = !1, M = function (t, n) {
                return console.log(event), f && clearTimeout(f), P = Date.now(), e = P - (d.last || P), e > 0 && 250 >= e && (d.isDoubleTap = !0), d.last = P, c = setTimeout(l, a), i && n ? i.addPointer(t.pointerId) : void 0
            }, y = function () {
                return h += Math.abs(d.x1 - d.x2), w += Math.abs(d.y1 - d.y2), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? (s = setTimeout(function () {
                    return d.el ? (d.el.trigger("swipe"), d.el.trigger("swipe" + p(d.x1, d.x2, d.y1, d.y2))) : void 0
                }, 0), d.swiped = !0) : void 0
            }, T = function () {
                return d.swiped ? d = {} : "last" in d && (30 > h && 30 > w ? (g && clearTimeout(g), g = setTimeout(function () {
                        var e;
                        return e = t.Event("tap"), e.cancelTouch = n, d.el.trigger(e), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), d = {}) : f = setTimeout(function () {
                            return f = null, d.el && d.el.trigger("singleTap"), d = {}
                        }, 250)
                    }, 0)) : d = {}), h = w = 0
            }, v.call(window, "MSGesture") >= 0 && (i = new MSGesture, i.target = document.body), t(document).on("MSGestureEnd", function (e) {
                var t;
                return t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null, t && d.el ? (d.el.trigger("swipe"), d.el.trigger("swipe" + t)) : void 0
            }).on("touchstart MSPointerDown pointerdown", function (e) {
                return !(S = r(e, "down")) || u(e) ? (m = S ? e : e.touches[0], e.touches && 1 === e.touches.length && d.x2 && (d.x2 = d.y2 = void 0), d.el = t("tagName" in m.target ? m.target : m.target.parentNode), d.x1 = m.pageX, d.y1 = m.pageY, x = !0, M(e, S)) : void 0
            }).on("mousedown", function (e) {
                return x ? void 0 : (b = !0, d.el = t("tagName" in e.target ? e.target : e.target.parentNode), d.x1 = e.pageX, d.y1 = e.pageY, M(e))
            }).on("touchmove MSPointerMove pointermove", function (e) {
                return (S = r(e, "move")) && !u(e) || d.swiped ? void 0 : (o(), m = S ? e : e.touches[0], d.x2 = m.pageX, d.y2 = m.pageY, x = !0, y(e))
            }).on("mousemove", function (e) {
                return !x && b ? (d.x2 = e.pageX, d.y2 = e.pageY, y(e)) : void 0
            }).on("touchend MSPointerUp pointerup", function (e) {
                return !(S = r(e, "up")) || u(e) ? (o(), T(), x = !0) : void 0
            }).on("mouseup", function () {
                return x ? void 0 : (b = !1, o(), T())
            }).on("touchcancel MSPointerCancel pointercancel", n), t(window).on("scroll", n), t.map(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"], function (e) {
                return t.fn[e] = function (t) {
                    return this.on(e, t)
                }
            })
        })
    }).call(this)
});
;define("bounceFix", function (e, t, n) {
    var r;
    r = function () {
        function e(e, t, n, r) {
            this.el = e, this.eventName = t, this.handler = n, this.context = r, this.add()
        }

        return e.prototype._handler = function (e, t) {
            var n = {};
            for (var r in e)n[r] = e[r];
            n.stopPropagation = function () {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }, n.preventDefault = function () {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }, this.handler.call(this.context || t, n)
        }, e.prototype.add = function () {
            var e = this;
            e.cachedHandler = function (t) {
                e._handler.call(e, t, this)
            }, e.el.addEventListener(e.eventName, e.cachedHandler, !1)
        }, e.prototype.remove = function () {
            this.el.removeEventListener(this.eventName, this.cachedHandler)
        }, e
    }();
    var o;
    o = function () {
        var e = {};
        return e.getTargetedEl = function (e, t) {
            for (; ;) {
                if (e.classList.contains(t))break;
                if (!(e = e.parentElement))break
            }
            return e
        }, e.isScrollable = function (e) {
            return e.scrollHeight > e.offsetHeight
        }, e.scrollToEnd = function (e) {
            var t = e.scrollTop, n = e.offsetHeight, r = e.scrollHeight;
            0 >= t && (e.scrollTop = 1), t + n >= r && (e.scrollTop = r - n - 1)
        }, e
    }();
    var i;
    i = function (e, t) {
        var n = function (t) {
            if (!(this instanceof n))return new n(t);
            if (!t)throw new Error('"className" argument is required');
            this.className = t, this.startListener = new e(document, "touchstart", this.touchStart, this), this.endListener = new e(document, "touchend", this.touchEnd, this)
        };
        return n.prototype.touchStart = function (n) {
            var r = t.getTargetedEl(n.target, this.className);
            return r && t.isScrollable(r) ? t.scrollToEnd(r) : void(r && !this.moveListener && (this.moveListener = new e(r, "touchmove", this.touchMove, this)))
        }, n.prototype.touchMove = function (e) {
            e.preventDefault()
        }, n.prototype.touchEnd = function () {
            this.moveListener && (this.moveListener.remove(), delete this.moveListener)
        }, n.prototype.remove = function () {
            this.startListener.remove(), this.endListener.remove()
        }, n
    }(r, o);
    var s;
    s = function (e) {
        var t = {cache: {}};
        return t.add = function (t) {
            this.cache[t] || (this.cache[t] = new e(t))
        }, t.remove = function (e) {
            this.cache[e] && (this.cache[e].remove(), delete this.cache[e])
        }, t
    }(i), n.exports = s
});
;define("slideProgress", function (e, r, n) {
    (function () {
        var r, s, i, o, t, l, a;
        a = 0, r = e("zepto"), i = null, s = null, t = function () {
            return a = pageData.pages.length, i = r("#slide-progress"), l(), s = i.children(), o(), r(document).on("changedTo", function (e, r) {
                return o(r.x)
            })
        }, o = function (e) {
            return s.removeClass("current").eq(e).removeClass("hidden").addClass("current")
        }, l = function () {
            var e, n, s, o, t;
            if (prehidePage) {
                for (e = "", n = t = 0; a >= 0 ? a > t : t > a; n = a >= 0 ? ++t : --t)e += -1 === prehidePage.indexOf(n) ? '<li class="progress-dot">' : '<li class="progress-dot hidden">';
                i.html(e)
            } else i.html(Array(a + 1).join('<li class="progress-dot">'));
            return s = i.height(), o = r("#wrapper").height(), i.css("marginTop", 0 - s / window.rem / 2 + "rem"), s > o ? i.css({
                height: o,
                marginTop: 0 - o / window.rem / 2 + "rem"
            }) : void 0
        }, n.exports = {init: t}
    }).call(this)
});

;define("async", function (n, t, o) {
    function e(n, t, o) {
        t = t || function () {
            }, o = o || {};
        for (var e, l = 0, u = [], i = !1, r = 0; r < n.length; r++)!function (r) {
            n[r](function (c) {
                l++, u[r] = c, o.onProgress && !i && o.onProgress(l / n.length), l >= n.length && !i && (e && (clearTimeout(e), e = null), t.apply(null, u), i = !0)
            })
        }(r);
        o.timeout && (e = setTimeout(function () {
            t.apply(null, u), i = !0
        }, o.timeout))
    }

    o.exports = {parallel: e}
});
;define("common/requestAnimationFrame", function () {
    !function () {
        for (var n = 0, e = ["ms", "moz", "webkit", "o"],
                 i = 0; i < e.length && !window.requestAnimationFrame; ++i)window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
            var i = (new Date).getTime(), o = Math.max(0, 16 - (i - n)), a = window.setTimeout(function () {
                e(i + o)
            }, o);
            return n = i + o, a
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
            clearTimeout(n)
        })
    }()
});
;define("zepto/fx", function () {
    !function (t, n) {
        function i(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }

        function e(t) {
            return a ? a + t : t.toLowerCase()
        }

        var a, o, s, r, f, u, c, d, l, m, p = "", h = {Webkit: "webkit", Moz: "", O: "o"},
            y = document.createElement("div"),
            x = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, b = {};
        t.each(h, function (t, i) {
            return y.style[t + "TransitionProperty"] !== n ? (p = "-" + t.toLowerCase() + "-", a = i, !1) : void 0
        }), o = p + "transform", b[s = p + "transition-property"] = b[r = p + "transition-duration"] = b[u = p + "transition-delay"] = b[f = p + "transition-timing-function"] = b[c = p + "animation-name"] = b[d = p + "animation-duration"] = b[m = p + "animation-delay"] = b[l = p + "animation-timing-function"] = "", t.fx = {
            off: a === n && y.style.transitionProperty === n,
            speeds: {_default: 400, fast: 200, slow: 600},
            cssPrefix: p,
            transitionEnd: e("TransitionEnd"),
            animationEnd: e("AnimationEnd")
        }, t.fn.animate = function (i, e, a, o, s) {
            return t.isFunction(e) && (o = e, a = n, e = n), t.isFunction(a) && (o = a, a = n), t.isPlainObject(e) && (a = e.easing, o = e.complete, s = e.delay, e = e.duration), e && (e = ("number" == typeof e ? e : t.fx.speeds[e] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(i, e, a, o, s)
        }, t.fn.anim = function (e, a, p, h, y) {
            var g, E, w, v = {}, T = "", z = this, L = t.fx.transitionEnd, P = !1;
            if (a === n && (a = t.fx.speeds._default / 1e3), y === n && (y = 0), t.fx.off && (a = 0), "string" == typeof e) v[c] = e, v[d] = a + "s", v[m] = y + "s", v[l] = p || "linear", L = t.fx.animationEnd; else {
                E = [];
                for (g in e)x.test(g) ? T += g + "(" + e[g] + ") " : (v[g] = e[g], E.push(i(g)));
                T && (v[o] = T, E.push(o)), a > 0 && "object" == typeof e && (v[s] = E.join(", "), v[r] = a + "s", v[u] = y + "s", v[f] = p || "linear")
            }
            return w = function (n) {
                if ("undefined" != typeof n) {
                    if (n.target !== n.currentTarget)return;
                    t(n.target).unbind(L, w)
                } else t(this).unbind(L, w);
                P = !0, t(this).css(b), h && h.call(this)
            }, a > 0 && (this.bind(L, w), setTimeout(function () {
                P || w.call(z)
            }, 1e3 * (a + y) + 25)), this.size() && this.get(0).clientLeft, this.css(v), 0 >= a && setTimeout(function () {
                z.each(function () {
                    w.call(this)
                })
            }, 0), this
        }, y = null
    }(Zepto)
});
;define("zepto/fx.method", function () {
    !function (n, t) {
        function i(i, e, o, f, c) {
            "function" != typeof e || c || (c = e, e = t);
            var s = {opacity: o};
            return f && (s.scale = f, i.css(n.fx.cssPrefix + "transform-origin", "0 0")), i.animate(s, e, null, c)
        }

        function e(t, e, o, f) {
            return i(t, e, 0, o, function () {
                c.call(n(this)), f && f.call(this)
            })
        }

        var o = window.document, f = (o.documentElement, n.fn.show), c = n.fn.hide, s = n.fn.toggle;
        n.fn.toggle = function (i, e) {
            return i === t || "boolean" == typeof i ? s.call(this, i) : this.each(function () {
                var t = n(this);
                t["none" == t.css("display") ? "show" : "hide"](i, e)
            })
        }, n.fn.fadeTo = function (n, t, e) {
            return i(this, n, t, null, e)
        }, n.fn.fadeIn = function (n, t) {
            var i = this.css("opacity");
            return i > 0 ? this.css("opacity", 0) : i = 1, f.call(this).fadeTo(n, i, t)
        }, n.fn.fadeOut = function (n, t) {
            return e(this, n, null, t)
        }, n.fn.fadeToggle = function (t, i) {
            return this.each(function () {
                var e = n(this);
                e[0 == e.css("opacity") || "none" == e.css("display") ? "fadeIn" : "fadeOut"](t, i)
            })
        }
    }(Zepto)
});
;define("animation", function (t, n, i) {
    (function () {
        var t;
        t = function (n) {
            var i = this;
            return this === window ? new t(n) : (this.startTime = null, this.animId = null, this.animationCb = function () {
                var t, e;
                return t = (new Date).getTime(), e = (t - i.startTime) / n.duration * (n.end - n.start) + n.start, e = n.end >= n.start ? e > n.end ? n.end : e : e < n.end ? n.end : e, n.onProgress(e), n.end >= n.start && e >= n.end || n.end < n.start && e <= n.end ? ("function" == typeof n.onComplete && n.onComplete(e), cancelAnimationFrame(i.animId), i.startTime = null) : i.animId = requestAnimationFrame(i.animationCb)
            }, this)
        }, t.prototype.start = function () {
            return this.startTime = (new Date).getTime(), this.animId = requestAnimationFrame(this.animationCb)
        }, t.prototype.stop = function () {
            return cancelAnimationFrame(this.animId), this.startTime = null
        }, t.prototype.pause = function () {
            return this.stopTime = (new Date).getTime(), this.animId ? (cancelAnimationFrame(this.animId), this.animId = null) : void 0
        }, t.prototype["continue"] = function () {
            return this.stopTime ? (this.startTime = (new Date).getTime() - this.stopTime + this.startTime, this.animId = requestAnimationFrame(this.animationCb)) : void 0
        }, i.exports = t
    }).call(this)
});
;define("point", function (t, n, i) {
    (function () {
        var t;
        t = function () {
            function t(t, n) {
                this.x = t, this.y = n
            }

            return t.prototype.toString = function () {
                return "" + this.x + "-" + this.y
            }, t
        }(), i.exports = {
            create: function (n, i) {
                return new t(n, i)
            }
        }
    }).call(this)
});
;define("db", function (e, r, t) {
    (function () {
        var r, o;
        r = e("zepto"), o = {}, o.request = function (e) {
            var t, o;
            return null == e && (e = {}), e.data = e.data || {}, e.data.isAjax = !0, e.type = (null != (o = e.type) ? o.toUpperCase() : void 0) || "GET", e.dataType = e.dataType || "json", r.extend(t = {}, e), delete t.complete, t.success = function (r) {
                return r && r.errorcode ? "function" == typeof e.error && e.error({
                        errorCode: r.errorcode,
                        errorMsg: r.errormessage
                    }) : "function" == typeof e.success && e.success(r), "function" == typeof e.complete ? e.complete(r) : void 0
            }, t.error = function (r) {
                var t;
                return t = {
                    errorCode: r.status,
                    xhr: r,
                    errorMsg: r.responseText
                }, "function" == typeof e.error && e.error(t), "function" == typeof e.complete ? e.complete(t) : void 0
            }, r.ajax(t)
        }, o.registerMethod = function (e) {
            return function (t) {
                return o.request(r.extend({}, e, t))
            }
        }, t.exports = o
    }).call(this)
});
;define("stat", function (t, e, n) {
    (function () {
        var e, i, u;
        e = t("zepto"), i = window.location, u = {
            START_TIME: new Date,
            SERVER: "http://tongji.szzbmy.com/tj.gif",
            ORIGIN: "" + i.protocol + "//" + i.host,
            PATHNAME: i.pathname,
            HREF: i.href,
            MAX_COUNT: 1,
            queue: [],
            CLASS_INTO: "INTO",
            CLASS_DURATION: "DURATION",
            CLASS_RELOAD: "RELOAD",
            CLASS_CMP: "COMPONENT",
            CLASS_LINK_INTO: "LINK_TO",
            CLASS_REQUEST: "REQUEST",
            ACTION_INIT: "INIT",
            ACTION_CLICK: "CLICK",
            ACTION_UPD: "UPDATE",
            calQueryStr: function (t) {
                var e, n, i;
                e = [];
                for (n in t)i = t[n], e.push("" + encodeURIComponent(n) + "=" + encodeURIComponent(null != i ? i : ""));
                return e.join("&")
            },
            init: function (t) {
                return null == t && (t = {}), this.inited = !0, this.authid = t.authid
            },
            getUser: function () {
            },
            checkQueue: function () {
                var t, e;
                return e = this.queue, t = e.length, t < this.MAX_COUNT ? void 0 : this.post()
            },
            post: function () {
                var t, e, n, i, u, s, r, o;
                for (u = this.queue, this.queue = [], o = [], s = 0, r = u.length; r > s; s++)e = u[s], t = e.ajax, delete e.ajax, i = this.calQueryStr(e), n = "" + this.SERVER + "?" + i, o.push(this.request(n, t));
                return o
            },
            request: function (t, n) {
                var i;
                return n !== !0 ? (i = new Image, i.onload = function () {
                    return e(i).remove()
                }, void(i.src = t)) : e.ajax({url: t, async: !1, timeout: 1e3})
            },
            send: function (t, e, n, i) {
                var u, s, r, o, h, a, c, l;
                if (null == i && (i = {}), this.inited === !0 && t) {
                    h = new Date, s = this.ORIGIN, r = this.HREF, a = r.replace(s, ""), c = i.user, delete i.user, u = {
                        authid: this.authid,
                        host: s,
                        url: a,
                        time: h.toISOString(),
                        "class": t,
                        name: e,
                        action: n,
                        user: c || this.getUser()
                    };
                    for (o in i)l = i[o], u[o] = l;
                    return this.queue.push(u), this.checkQueue()
                }
            },
            getOthersAgent: function (t) {
                return ""
            },
            getUserAgent: function () {
                var t, e;
                return e = window.navigator.userAgent, t = this.getOthersAgent(e), e += " " + t
            },
            sendInto: function () {
                return this.send(this.CLASS_INTO, this.getUserAgent(), null, {
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    screen_width: window.screen.availWidth,
                    screen_height: window.screen.availHeight
                })
            },
            sendReload: function () {
                var t, e;
                return e = this.START_TIME, t = new Date, this.send(this.CLASS_RELOAD, t.getTime() - e.getTime(), null, {ajax: !0})
            },
            sendRequest: function (t, e, n, i, u, s) {
                var r;
                return null == n && (n = {}), null != t ? (r = {
                    params: JSON.stringify(n),
                    duration: i,
                    result: u,
                    msg: s
                }, this.send(this.CLASS_REQUEST, t, e, r)) : void 0
            },
            sendLinkTo: function (t, e, n, i, u) {
                var s, r, o, h;
                if (null == u && (u = {}), null != t) {
                    s = this.ACTION_INIT, n || (n = this.PATHNAME), i || (i = "_self"), o = {
                        desc: e,
                        from: n,
                        target: i
                    };
                    for (r in u)h = u[r], o[r] = h;
                    return u = o, this.send(this.CLASS_LINK_INTO, t, s, u)
                }
            },
            sendComponent: function (t, e, n, i, u) {
                var s, r, o;
                if (null == u && (u = {}), null != t) {
                    null == i && (i = this.ACTION_INIT), r = {cmpclass: e, cmpvalue: n};
                    for (s in u)o = u[s], r[s] = o;
                    return u = r, this.send(this.CLASS_CMP, t, i, u)
                }
            }
        }, n.exports = u
    }).call(this)
});
;define("pageManagement/lastads", function (e, t, r) {
    (function () {
        var e;
        e = {
            id: "e1cb7570-4ef1-4a9b-a6a7-dfaa40fd8790",
            appid: "33208289-37ce-497e-8843-b8a14d86c698",
            needads: !0,
            row: 0,
            col: 0,
            "in": null,
            out: null,
            bgcol: null,
            bgimage: "http://tenc2.rabbitpre.com/fe7ae01b-20ab-482b-8175-ecf671e28f4f.jpg",
            bgserver: "A",
            bgleft: 0,
            bgtop: 0,
            cmps: [{
                tid: 1478662300528,
                style: {
                    position: "absolute",
                    width: 68,
                    height: 35,
                    left: 126,
                    top: 38,
                    "border-radius": 0,
                    "border-width": 0,
                    "border-style": "solid",
                    rotate: 0,
                    transform: "rotate(0deg)",
                    "border-color": ""
                },
                file: {
                    key: "http://ali1.rabbitpre.com/8e126a7d-c746-4452-b166-622206a2c504.png",
                    filtereffect: "original",
                    a: "0-0-0-0",
                    server: "A",
                    p: ".src",
                    orikey: "http://ali1.rabbitpre.com/8e126a7d-c746-4452-b166-622206a2c504.png",
                    url: "http://ali1.rabbitpre.com/8e126a7d-c746-4452-b166-622206a2c504.png"
                },
                animation: [],
                effect: {},
                link: null,
                remark: {key: "", name: ""},
                trigger: [{event: "click", type: "none", link: "", go: "", toggle: "", tips: !1, prehide: !1}],
                cmpType: "image",
                name: "图片08"
            }, {
                tid: 1478662309029,
                style: {
                    position: "absolute",
                    width: 160,
                    height: 19,
                    left: 80,
                    top: 87,
                    "border-radius": 0,
                    "border-width": 0,
                    "border-style": "solid",
                    rotate: 0,
                    transform: "rotate(0deg)",
                    "border-color": ""
                },
                file: {
                    key: "http://tenc3.rabbitpre.com/01eaf3b6-b441-4e74-bad2-178074d77fe9.png",
                    filtereffect: "original",
                    a: "0-0-0-0",
                    server: "A",
                    p: ".src",
                    orikey: "http://tenc3.rabbitpre.com/01eaf3b6-b441-4e74-bad2-178074d77fe9.png",
                    url: "http://tenc3.rabbitpre.com/01eaf3b6-b441-4e74-bad2-178074d77fe9.png"
                },
                animation: [],
                effect: {},
                link: null,
                remark: {key: "", name: ""},
                trigger: [{event: "click", type: "none", link: "", go: "", toggle: "", tips: !1, prehide: !1}],
                cmpType: "image",
                name: "图片09"
            }, {
                tid: 1478662315607,
                style: {
                    position: "absolute",
                    width: 160,
                    height: 25,
                    left: 80,
                    top: 119,
                    "border-radius": 0,
                    "border-width": 0,
                    "border-style": "solid",
                    rotate: 0,
                    transform: "rotate(0deg)",
                    "border-color": ""
                },
                file: {
                    key: "http://fw.rabbitpre.com/a2f2a88b-df37-40bf-9563-6ecc96b50a02.png",
                    filtereffect: "original",
                    a: "0-0-0-0",
                    server: "A",
                    p: ".src",
                    orikey: "http://fw.rabbitpre.com/a2f2a88b-df37-40bf-9563-6ecc96b50a02.png",
                    url: "http://fw.rabbitpre.com/a2f2a88b-df37-40bf-9563-6ecc96b50a02.png"
                },
                animation: [],
                effect: {},
                link: null,
                remark: {key: "", name: ""},
                trigger: [{event: "click", type: "none", link: "", go: "", toggle: "", tips: !1, prehide: !1}],
                cmpType: "image",
                name: "图片10"
            }, {
                tid: null,
                style: {
                    height: 30,
                    width: 169,
                    "background-color": "rgba(0, 0, 0, 0)",
                    "border-width": 1,
                    "border-style": "solid",
                    "border-color": "rgba(0, 0, 0, 0)",
                    "border-radius": 4,
                    position: "absolute",
                    left: 76,
                    top: 116,
                    color: "rgba(0, 0, 0, 0)",
                    rotate: 0,
                    "font-size": 16,
                    opacity: 0,
                    transform: "rotate(0deg)"
                },
                text: "按钮",
                animation: [{name: "fadeInDown", duration: 1, active: !0}],
                remark: {key: "", name: ""},
                link: "http://www.rabbitpre.com/mobile?Mobile=guanggaoye",
                cmpType: "btn",
                name: "按钮11"
            }, {
                tid: null,
                style: {
                    height: 250,
                    width: 250,
                    position: "absolute",
                    left: 35,
                    top: 224,
                    rotate: 0,
                    opacity: 1,
                    transform: "rotate(0deg)"
                },
                animation: [{name: "none", active: !0}],
                remark: {key: "", name: ""},
                cmpType: "adsgoogle",
                name: "ads1",
                client: "ca-pub-3563784790125235",
                slot: "1748731103"
            }],
            createtime: "2016-11-09T03:03:34.000Z",
            updatetime: "2016-11-09T03:41:37.000Z",
            point: {x: 0, y: 0}
        }, r.exports = e
    }).call(this)
});
;define("pageManagement/loading.tpl", function (n, i, e) {
    e.exports = function (n) {
        n = n || {};
        var i = [];
        return i.push('<div class="full-screen-loading"> <i class="icon icon-rabbitpre" style="', n.style, '"></i></div>'), i.join("")
    }
});
;define("pageManagement/formSubmitSuccess.tpl", function (s, e, i) {
    i.exports = function (s) {
        s = s || {};
        var e = [];
        return e.push('<div class="form-submit-success"> <i class="icon icon-rabbitpre" style="', s.style, '"></i> <p style="', s.messagestyle, '">', s.message, "</p></div>"), e.join("")
    }
});
;define("pageManagement/form.tpl", function (e, i, s) {
    s.exports = function (e, i) {
        e = e || {};
        var s = [];
        s.push('<div id="cmp-', e.id, '" data-tid="', e.tid, '" class="cmp form" style="', i.C.formatStyleJSONToString(i.outerStyle), '"> <form class="cmp-inner" style="', i.C.formatStyleJSONToString(i.innerStyle), '"> ');
        for (var t = 0, a = e.items.length; a > t; t++) {
            s.push(" ");
            var r = e.items[t];
            if (s.push(" "), "input" == r.type) s.push(' <div class="form-item"> <input type="', r.dataType, '" class="form-input" placeholder="', i.C.str.filterInAttr(r.placeholder) + (r.isRequired ? "(必填)" : ""), '" name="', i.C.str.filterInAttr(r.name), '" ', r.isRequired ? "required" : "", " /> </div> "); else if ("title" == r.type) s.push(' <div class="form-item"> <div class="form-title">', r.text, "</div> </div> "); else if ("question" == r.type) s.push(' <div class="form-item"> <div class="form-ques"> <b>', r.bage, "</b>", r.text, " </div> </div> "); else if ("answer" == r.type) {
                s.push(' <div class="form-answer"> ');
                for (var d = 0,
                         l = r.group.length; l > d; d++)s.push(' <div class="field answer-item"> <div class="ui radio checkbox"> <input type="radio" tabindex="0" class="hidden" id="', r.name, "-", d, '" value="', r.group[d], '" name="', r.name, '"> <label for="', r.name, "-", d, '">', r.group[d], "</label> </div> </div> ");
                s.push(" </div> ")
            } else if ("answers" == r.type) {
                s.push(' <div class="form-answer"> ');
                for (var d = 0,
                         n = r.group.length; n > d; d++)s.push(' <div class="field answer-item"> <div class="ui checkbox multi-box"> <input type="checkbox" tabindex="0" class="hidden" id="', r.name, "-", d, '" value="', r.group[d], '" name="', r.name, '"> <label for="', r.name, "-", d, '">', r.group[d], "</label> </div> </div> ");
                s.push(" </div> ")
            } else if ("star" == r.type) {
                s.push(' <div class="form-item"> <div class="form-star j-form-stars"> <input type="hidden" id="', r.name, '" name="', r.name, '" value=""/> ');
                for (var p = 1; 6 > p; p++)s.push(' <i class="icon24 star j-form-star" data-index="', p, '" data-parent="', r.name, '"></i> ');
                s.push(" </div> </div> ")
            } else"submit" == r.type && s.push(' <div class="form-item"> <input type="submit" style="', i.C.formatStyleJSONToString(i.btnStyle), '" value="', r.text, '" ', i.disabled ? "disabled" : "", "/> </div> ");
            s.push(" ")
        }
        return s.push(" </form></div>"), s.join("")
    }
});
;define("pageManagement/video.tpl", function (e, t, i) {
    i.exports = function (e, t) {
        e = e || {};
        var i = [];
        return i.push('<div id="cmp-', e.id, '" data-tid="', e.tid, '" class="cmp video" style="', t.C.formatStyleJSONToString(t.outerStyle), '"> <iframe class="cmp-inner tz-iframe" style="', t.C.formatStyleJSONToString(t.innerStyle), '" src="', e.video.embed, '" frameborder=0 allowfullscreen></iframe></div>'), i.join("")
    }
});
;define("pageManagement/oneCall.tpl", function (t, e, n) {
    n.exports = function (t, e) {
        t = t || {};
        var n = [];
        return n.push('<div id="cmp-', t.id, '" data-tid="', t.tid, '" class="cmp one-call" style="', e.C.formatStyleJSONToString(e.outerStyle), '"> <a class="cmp-inner" href="tel:', t.telNum, '"> <button class="content" style="', e.C.formatStyleJSONToString(e.innerStyle), '">', t.text, "</button> </a></div>"), n.join("")
    }
});
;define("pageManagement/oneCallPic.tpl", function (t, e, n) {
    n.exports = function (t, e) {
        t = t || {};
        var n = [];
        return n.push('<div id="cmp-', t.id, '" data-tid="', t.tid, '" class="cmp one-call-pic" style="', e.C.formatStyleJSONToString(e.outerStyle), '"> <a class="cmp-inner" href="tel:', t.telNum, '"> <button class="content" style="', e.C.formatStyleJSONToString(e.innerStyle), '">', t.text, "</button> </a></div>"), n.join("")
    }
});
;define("pageManagement/fingerprint.tpl", function (n, t, i) {
    i.exports = function (n, t) {
        n = n || {};
        var i = [];
        return i.push('<div id="cmp-', n.id, '" data-tid="', n.tid, '" class="cmp fingerprint" style="', t.C.formatStyleJSONToString(t.outerStyle), '"> <a class="cmp-inner" style="display:block;', t.C.formatStyleJSONToString(t.innerStyle), '" href="javascript:void(0);"> <span class="fingerprint-scan"></span> </a></div>'), i.join("")
    }
});
;define("pageManagement/fingerprintwhite.tpl", function (r, i, n) {
    n.exports = function (r, i) {
        r = r || {};
        var n = [];
        return n.push('<div id="cmp-', r.id, '" data-tid="', r.tid, '" class="cmp fingerprint_white" style="', i.C.formatStyleJSONToString(i.outerStyle), '"> <a class="cmp-inner" style="display:block;', i.C.formatStyleJSONToString(i.innerStyle), "\" href=\"javascript:void(0);\"> <div class='fingerprint-corner fingerprint-corner-right-top'></div> <div class='fingerprint-corner fingerprint-corner-right-bottom'></div> <div class='fingerprint-corner fingerprint-corner-left-top'></div> <div class='fingerprint-corner fingerprint-corner-left-bottom'></div> <span class=\"fingerprint-scan\"></span> </a></div>"), n.join("")
    }
});
;define("pageManagement/blessing.tpl", function (t, e, n) {
    n.exports = function (t, e) {
        t = t || {};
        var n = [];
        return n.push('<div id="cmp-', t.id, '" data-tid="', t.tid, '" class="cmp blessing" style="', e.C.formatStyleJSONToString(e.outerStyle), '"> <button class="cmp-inner" style="', e.C.formatStyleJSONToString(e.innerStyle), '">', t.text, "</button></div>"), n.join("")
    }
});