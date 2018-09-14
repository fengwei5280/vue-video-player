/* eslint-disable */ ! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["videojs"], t) : "object" == typeof exports ? exports.VueVideoPlayer = t(require("video.js")) : e.VueVideoPlayer = t(e.videojs)
}(this, function (e) {
  return function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
      return e
    }, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/", t(t.s = 3)
  }([function (t, n) {
    t.exports = e
  }, function (e, t, n) {
    "use strict";

    function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(0),
      o = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r),
      s = window.videojs || o.default;
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
      value: function (e, t) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
          var r = arguments[i];
          if (null != r)
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
        }
        return n
      },
      writable: !0,
      configurable: !0
    });
    var a = ["loadeddata", "canplay", "canplaythrough", "play", "pause", "waiting", "playing", "ended", "error"];
    t.default = {
      name: "video-player",
      props: {
        start: {
          type: Number,
          default: 0
        },
        crossOrigin: {
          type: String,
          default: ""
        },
        playsinline: {
          type: Boolean,
          default: !1
        },
        customEventName: {
          type: String,
          default: "statechanged"
        },
        options: {
          type: Object,
          required: !0
        },
        events: {
          type: Array,
          default: function () {
            return []
          }
        },
        globalOptions: {
          type: Object,
          default: function () {
            return {
              controls: !0,
              controlBar: {
                remainingTimeDisplay: !1,
                playToggle: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeMenuButton: {
                  inline: !1,
                  vertical: !0
                }
              },
              techOrder: ["html5"],
              plugins: {}
            }
          }
        },
        globalEvents: {
          type: Array,
          default: function () {
            return []
          }
        }
      },
      data: function () {
        return {
          player: null,
          reseted: !0
        }
      },
      mounted: function () {
        this.player || this.initialize()
      },
      beforeDestroy: function () {
        this.player && this.dispose()
      },
      methods: {
        initialize: function () {
          var e = this,
            t = Object.assign({}, this.globalOptions, this.options);
          if (this.options && this.options.poster && this.$refs.video) {
            this.$refs.video.setAttribute('poster', this.options.poster);
          }
          this.playsinline && (this.$refs.video.setAttribute("playsinline", this.playsinline), this.$refs.video.setAttribute("webkit-playsinline", this.playsinline), this.$refs.video.setAttribute("x5-playsinline", this.playsinline), this.$refs.video.setAttribute("x5-video-player-type", "h5"), this.$refs.video.setAttribute("x5-video-player-fullscreen", !1)), "" !== this.crossOrigin && (this.$refs.video.crossOrigin = this.crossOrigin, this.$refs.video.setAttribute("crossOrigin", this.crossOrigin));
          var n = function (t, n) {
            t && e.$emit(t, e.player), n && e.$emit(e.customEventName, i({}, t, n))
          };
          t.plugins && delete t.plugins.__ob__;
          var r = this;
          this.player = s(this.$refs.video, t, function () {
            for (var e = this, t = a.concat(r.events).concat(r.globalEvents), i = {}, o = 0; o < t.length; o++) "string" == typeof t[o] && void 0 === i[t[o]] && function (t) {
              i[t] = null, e.on(t, function () {
                n(t, !0)
              })
            }(t[o]);
            this.on("timeupdate", function () {
              n("timeupdate", this.currentTime())
            }), r.$emit("ready", this)
          })
        },
        dispose: function (e) {
          var t = this;
          this.player && this.player.dispose && ("Flash" !== this.player.techName_ && this.player.pause && this.player.pause(), this.player.dispose(), this.player = null, this.$nextTick(function () {
            t.reseted = !1, t.$nextTick(function () {
              t.reseted = !0, t.$nextTick(function () {
                e && e()
              })
            })
          }))
        }
      },
      watch: {
        options: {
          deep: !0,
          handler: function (e, t) {
            var n = this;
            this.dispose(function () {
              e && e.sources && e.sources.length && n.initialize()
            })
          }
        }
      }
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(1),
      r = n.n(i);
    for (var o in i)["default", "default"].indexOf(o) < 0 && function (e) {
      n.d(t, e, function () {
        return i[e]
      })
    }(o);
    var s = n(5),
      a = n(4),
      l = a(r.a, s.a, !1, null, null, null);
    t.default = l.exports
  }, function (e, t, n) {
    "use strict";

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.install = t.videoPlayer = t.videojs = void 0;
    var r = n(0),
      o = i(r),
      s = n(2),
      a = i(s),
      l = window.videojs || o.default,
      u = function (e, t) {
        t && (t.options && (a.default.props.globalOptions.default = function () {
          return t.options
        }), t.events && (a.default.props.globalEvents.default = function () {
          return t.events
        })), e.component(a.default.name, a.default)
      },
      d = {
        videojs: l,
        videoPlayer: a.default,
        install: u
      };
    t.default = d, t.videojs = l, t.videoPlayer = a.default, t.install = u
  }, function (e, t) {
    e.exports = function (e, t, n, i, r, o) {
      var s, a = e = e || {},
        l = typeof e.default;
      "object" !== l && "function" !== l || (s = e, a = e.default);
      var u = "function" == typeof a ? a.options : a;
      t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0), n && (u.functional = !0), r && (u._scopeId = r);
      var d;
      if (o ? (d = function (e) {
          e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
        }, u._ssrRegister = d) : i && (d = i), d) {
        var c = u.functional,
          f = c ? u.render : u.beforeCreate;
        c ? (u._injectStyles = d, u.render = function (e, t) {
          return d.call(t), f(e, t)
        }) : u.beforeCreate = f ? [].concat(f, d) : [d]
      }
      return {
        esModule: s,
        exports: a,
        options: u
      }
    }
  }, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.reseted ? n("div", {
          staticClass: "video-player"
        }, [n("video", {
          ref: "video",
          staticClass: "video-js"
        })]) : e._e()
      },
      r = [],
      o = {
        render: i,
        staticRenderFns: r
      };
    t.a = o
  }])
});
