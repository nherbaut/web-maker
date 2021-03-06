/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-env browser */

if (
    'serviceWorker' in navigator &&
    location.protocol === 'https:' &&
    document.cookie.indexOf('wmdebug') === -1 &&
    location.href.indexOf('chrome-extension://') === -1 &&
    location.href.indexOf('192.168') === -1
) {
    // Delay registration until after the page has loaded, to ensure that our
    // precaching requests don't degrade the first visit experience.
    // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
    window.addEventListener('load', function() {
        // Your service-worker.js *must* be located at the top-level directory relative to your site.
        // It won't be able to control pages unless it's located at the same level or higher than them.
        // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
        // See https://github.com/slightlyoff/ServiceWorker/issues/468
        navigator.serviceWorker
            .register('service-worker.js')
            .then(function(reg) {
                // updatefound is fired if service-worker.js changes.
                reg.onupdatefound = function() {
                    // The updatefound event implies that reg.installing is set; see
                    // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
                    var installingWorker = reg.installing;

                    installingWorker.onstatechange = function() {
                        /* eslint-disable default-case */
                        switch (installingWorker.state) {
                            case 'installed':
                                if (navigator.serviceWorker.controller) {
                                    // At this point, the old content will have been purged and the fresh content will
                                    // have been added to the cache.
                                    // It's the perfect time to display a "New content is available; please refresh."
                                    // message in the page's interface.
                                    console.log('New or updated content is available.');
                                } else {
                                    // At this point, everything has been precached.
                                    // It's the perfect time to display a "Content is cached for offline use." message.
                                    console.log('Content is now available offline!');
                                    if (window.alertsService) {
                                        window.alertsService.add(
                                            'Web Maker is now ready to be used offline.'
                                        );
                                    }
                                }
                                break;

                            case 'redundant':
                                console.error(
                                    'The installing service worker became redundant.'
                                );
                                break;
                        }
                    };
                };
            })
            .catch(function(e) {
                console.error('Error during service worker registration:', e);
            });
    });
}

webpackJsonp([0], {
    "+ZAi": function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var r = o("KM04"),
            l = o("inAt"),
            d = n(l),
            c = o("CIHI"),
            p = n(c),
            h = (0, r.h)("h1", null, "Atomic CSS Settings"),
            u = (0, r.h)("h3", null, "Configure Atomizer settings.", " ", (0, r.h)("a", {
                href: "https://github.com/acss-io/atomizer#api",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read more"), " ", "about available settings."),
            m = function(e) {
                function t() {
                    return s(this, t), a(this, e.apply(this, arguments))
                }
                return i(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.props.show && setTimeout(function() {
                        e.props.settings && e.cm.setValue(e.props.settings.acssConfig), e.cm.refresh(), e.cm.focus()
                    }, 500)
                }, t.prototype.render = function() {
                    var e = this;
                    return (0, r.h)(d.default, {
                        show: this.props.show,
                        closeHandler: this.props.closeHandler
                    }, h, u, (0, r.h)("div", {
                        style: "height: calc(100vh - 350px);"
                    }, (0, r.h)(p.default, {
                        options: {
                            mode: "application/ld+json",
                            theme: this.props.editorTheme
                        },
                        onCreation: function(t) {
                            return e.cm = t
                        },
                        onBlur: function(t) {
                            return e.props.onChange(t.getValue())
                        }
                    })), (0, r.h)("div", {
                        class: "flex flex-h-end"
                    }, (0, r.h)("button", {
                        class: "btn btn--primary",
                        onClick: this.props.closeHandler
                    }, "Apply and Close")))
                }, t
            }(r.Component);
        t.default = m
    },
    0: function() {},
    "03MQ": function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0, t.CreateNewModal = function(e) {
            var t = e.show,
                o = e.closeHandler,
                n = e.onBlankTemplateSelect,
                a = e.onTemplateSelect;
            return (0, s.h)(i.default, {
                show: t,
                closeHandler: o,
                smll: !0
            }, (0, s.h)("div", {
                class: "tac"
            }, (0, s.h)("button", {
                className: "btn",
                onClick: n
            }, "Start a blank creation")), c, "Or choose from a template:", (0, s.h)("div", {
                class: "saved-items-pane__container"
            }, d.default.map(function(e) {
                return (0, s.h)(r.ItemTile, {
                    item: e,
                    focusable: !0,
                    onClick: a.bind(null, e)
                })
            })))
        };
        var s = o("KM04"),
            a = o("inAt"),
            i = n(a),
            r = o("iGzD"),
            l = o("g3Nw"),
            d = n(l),
            c = (0, s.h)("hr", null)
    },
    "0job": function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.Icons = function() {
            return (0, n.h)("svg", {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    display: "none"
                }
            }, s, a, i, r, l, d, c, p, h, u, m, f, (0, n.h)("symbol", {
                id: "gift-icon",
                viewBox: "0 0 24 24"
            }, g, b, y, v, C, k, S, (0, n.h)("symbol", {
                id: "loader-icon",
                viewBox: "0 0 44 44"
            }, w)))
        };
        var n = o("KM04"),
            s = (0, n.h)("symbol", {
                id: "logo",
                viewBox: "-145 -2 372 175"
            }, (0, n.h)("g", {
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(-145.000000, -1.000000)"
            }, (0, n.h)("polygon", {
                id: "Path-1",
                fill: "#FF4600",
                points: "31 0 232 0 132 173.310547"
            }), (0, n.h)("polygon", {
                id: "Path-1",
                fill: "#FF6C00",
                points: "0 0 201 0 101 173.310547"
            }), (0, n.h)("polygon", {
                id: "Path-1",
                fill: "#FF6C00",
                transform: "translate(271.500000, 86.500000) scale(1, -1) translate(-271.500000, -86.500000) ",
                points: "171 0 372 0 272 173.310547"
            }), (0, n.h)("polygon", {
                id: "Path-1",
                fill: "#FF4600",
                transform: "translate(241.500000, 86.500000) scale(1, -1) translate(-241.500000, -86.500000) ",
                points: "141 0 342 0 242 173.310547"
            }))),
            a = (0, n.h)("symbol", {
                id: "bug-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"
            })),
            i = (0, n.h)("symbol", {
                id: "google-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
            })),
            r = (0, n.h)("symbol", {
                id: "fb-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
            })),
            l = (0, n.h)("symbol", {
                id: "github-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            })),
            d = (0, n.h)("symbol", {
                id: "settings-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
            })),
            c = (0, n.h)("symbol", {
                id: "twitter-icon",
                viewBox: "0 0 16 16"
            }, (0, n.h)("path", {
                d: "M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809 c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"
            })),
            p = (0, n.h)("symbol", {
                id: "heart-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            })),
            h = (0, n.h)("symbol", {
                id: "play-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("svg", null, (0, n.h)("path", {
                d: "M8,5.14V19.14L19,12.14L8,5.14Z"
            }))),
            u = (0, n.h)("symbol", {
                id: "cancel-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("svg", null, (0, n.h)("path", {
                d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z"
            }))),
            m = (0, n.h)("symbol", {
                id: "chevron-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("svg", null, (0, n.h)("path", {
                d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            }))),
            f = (0, n.h)("symbol", {
                id: "chat-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M8,14H6V12H8V14M8,11H6V9H8V11M8,8H6V6H8V8M15,14H10V12H15V14M18,11H10V9H18V11M18,8H10V6H18V8Z"
            })),
            g = (0, n.h)("path", {
                d: "M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z"
            }),
            b = (0, n.h)("symbol", {
                id: "gift-icon",
                viewBox: "0 0 24 24"
            }),
            y = (0, n.h)("symbol", {
                id: "cross-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            })),
            v = (0, n.h)("symbol", {
                id: "keyboard-icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M19,10H17V8H19M19,13H17V11H19M16,10H14V8H16M16,13H14V11H16M16,17H8V15H16M7,10H5V8H7M7,13H5V11H7M8,11H10V13H8M8,8H10V10H8M11,11H13V13H11M11,8H13V10H11M20,5H4C2.89,5 2,5.89 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7C22,5.89 21.1,5 20,5Z"
            })),
            C = (0, n.h)("symbol", {
                id: "mode-icon",
                viewBox: "0 0 100 100"
            }, (0, n.h)("g", null, (0, n.h)("rect", {
                x: 0,
                y: 0,
                width: 28,
                height: 47
            }), (0, n.h)("rect", {
                x: 36,
                y: 0,
                width: 28,
                height: 47
            }), (0, n.h)("rect", {
                x: 72,
                y: 0,
                width: 28,
                height: 47
            }), (0, n.h)("rect", {
                x: 0,
                y: 53,
                width: 100,
                height: 47
            }))),
            k = (0, n.h)("symbol", {
                id: "vertical-mode-icon",
                viewBox: "0 0 100 100"
            }, (0, n.h)("g", null, (0, n.h)("rect", {
                x: 0,
                y: 0,
                width: 20,
                height: 100
            }), (0, n.h)("rect", {
                x: 23,
                y: 0,
                width: 20,
                height: 100
            }), (0, n.h)("rect", {
                x: 46,
                y: 0,
                width: 20,
                height: 100
            }), (0, n.h)("rect", {
                x: 69,
                y: 0,
                width: 32,
                height: 100
            }))),
            S = (0, n.h)("symbol", {
                id: "search",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            })),
            w = (0, n.h)("g", {
                fill: "none",
                fillRule: "evenodd",
                strokeWidth: 10
            }, (0, n.h)("circle", {
                cx: 22,
                cy: 22,
                r: 1
            }, (0, n.h)("animate", {
                attributeName: "r",
                begin: "0s",
                dur: "1.8s",
                values: "1; 20",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.165, 0.84, 0.44, 1",
                repeatCount: "indefinite"
            }), (0, n.h)("animate", {
                attributeName: "stroke-opacity",
                begin: "0s",
                dur: "1.8s",
                values: "1; 0",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.3, 0.61, 0.355, 1",
                repeatCount: "indefinite"
            })), (0, n.h)("circle", {
                cx: 22,
                cy: 22,
                r: 1
            }, (0, n.h)("animate", {
                attributeName: "r",
                begin: "-0.9s",
                dur: "1.8s",
                values: "1; 20",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.165, 0.84, 0.44, 1",
                repeatCount: "indefinite"
            }), (0, n.h)("animate", {
                attributeName: "stroke-opacity",
                begin: "-0.9s",
                dur: "1.8s",
                values: "1; 0",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.3, 0.61, 0.355, 1",
                repeatCount: "indefinite"
            })))
    },
    "0lUe": function(e, t, o) {
        "use strict";

        function n(e, t) {
            var o = {};
            for (var n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
            return o
        }

        function s(e) {
            var t, o = e.type,
                n = e.children;
            return "bug" === o ? t = c : "a11y" === o ? t = p : "ui" === o && (t = h), (0, l.h)("li", null, t, ": ", n)
        }

        function a(e) {
            var t = e.name,
                o = e.url;
            return (0, l.h)("a", {
                href: o,
                target: "_blank",
                rel: "noopener noreferrer"
            }, " ", t)
        }

        function i(e) {
            var t = e.version,
                o = e.isLatest,
                s = n(e, ["version", "isLatest"]);
            return (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, t), (0, l.h)("ul", null, s.children), o ? (0, l.h)("div", {
                class: "mt-2"
            }, u, m, (0, l.h)("p", null, "Web Maker now has more than 50K weekly active users! Thank you for being a part of this community of awesome developers. If you find Web Maker helpful,", " ", f, "\xA0", g, "\xA0", (0, l.h)(d.Button, {
                "aria-label": "Support the developer",
                onClick: s.onSupportBtnClick,
                "data-event-action": "supportDeveloperChangelogBtnClick",
                "data-event-category": "ui",
                class: "btn btn-icon"
            }, "Support the developer"))) : null)
        }
        t.__esModule = !0;
        var r = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        };
        t.Notifications = function(e) {
            return (0, l.h)("div", null, b, (0, l.h)(i, r({
                version: "3.4.1",
                isLatest: !0
            }, e), y, v, C, k), (0, l.h)(i, r({
                version: "3.4.0"
            }, e), S, w, M, _, x), (0, l.h)(i, r({
                version: "3.3.2"
            }, e), H, I, L, j), (0, l.h)(i, r({
                version: "3.3.0"
            }, e), E, B), (0, l.h)(i, r({
                version: "3.2.0"
            }, e), A, O, T, P, D), (0, l.h)(i, r({
                version: "3.1.1"
            }, e), V), (0, l.h)(i, r({
                version: "3.1.0"
            }, e), F), (0, l.h)(i, r({
                version: "3.0.4"
            }, e), z, N), (0, l.h)(i, r({
                version: "3.0.3"
            }, e), W), U, R, K, J, q, G, Z, Y, Q, X, ee, te, oe, ne, se, ae, ie, re, le, de, ce, pe, he, ue, me, fe, ge)
        };
        var l = o("KM04"),
            d = o("f66c"),
            c = (0, l.h)("strong", null, "\uD83D\uDD27 Bugfix"),
            p = (0, l.h)("strong", null, "\u267F\uFE0F Accessibility"),
            h = (0, l.h)("strong", null, "\uD83D\uDDA5 Interface"),
            u = (0, l.h)("p", null, (0, l.h)("strong", null, "\uD83D\uDE80 Announcement"), ": Hi! I am Kushagra Gour (creator of Web Maker) and I have launched a", (0, l.h)("a", {
                href: "https://patreon.com/kushagra",
                target: "_blank",
                rel: "noopener noreferrer"
            }, " ", "Patreon campaign"), ". If you love Web Maker, consider pledging to", (0, l.h)("a", {
                href: "https://patreon.com/kushagra",
                target: "_blank",
                rel: "noopener noreferrer"
            }, " ", "support me"), " ", ":)"),
            m = (0, l.h)("p", null, (0, l.h)("a", {
                href: "https://github.com/chinchang/web-maker/issues",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Suggest features or report bugs.")),
            f = (0, l.h)("a", {
                href: "https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/reviews",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "btn"
            }, "Please rate Web Maker ", (0, l.h)("span", {
                class: "star"
            })),
            g = (0, l.h)("a", {
                href: "http://twitter.com/share?url=https://webmakerapp.com/&text=Web Maker - A blazing fast %26 offline web playground! via @webmakerApp&related=webmakerApp&hashtags=web,editor,chrome,extension",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "btn"
            }, "Share it"),
            b = (0, l.h)("h1", null, "Whats new?"),
            y = (0, l.h)("li", null, (0, l.h)("strong", null, "Js13kGames Mode"), ": Add image upload option using Pasteboard.co.", " ", (0, l.h)("a", {
                href: "https://medium.com/web-maker/js13kgames-jam-with-web-maker-a3389cf2cbb",
                target: "_blank",
                rel: "noopener"
            }, "Read more about it here.")),
            v = (0, l.h)("li", null, (0, l.h)("strong", null, "Kontra.js template"), ": Update to latest 4.0.0."),
            C = (0, l.h)(s, {
                type: "a11y"
            }, "Fix color contrast for various texts."),
            k = (0, l.h)(s, {
                type: "bug"
            }, "Fix external script paths in downloaded zip in Js13KGame mode."),
            S = (0, l.h)("li", null, (0, l.h)("strong", null, "\uD83C\uDF89 Js13kGames Mode"), ": For all you Js13kGames compo participants out there. Turn it on from Settings.", " ", (0, l.h)("a", {
                href: "https://medium.com/web-maker/js13kgames-jam-with-web-maker-a3389cf2cbb",
                target: "_blank",
                rel: "noopener"
            }, "Read more about it here.")),
            w = (0, l.h)("li", null, (0, l.h)("strong", null, "\uD83C\uDF89 Templates"), ": Presenting, templates for major libraries and frameworks. Hit the \"New\" button to explore."),
            M = (0, l.h)(s, {
                type: "a11y"
            }, "Add missing focus rings around focusable element."),
            _ = (0, l.h)(s, {
                type: "ui"
            }, "Migrate remaining interface elements to dark theme. Now complete app is in dark theme."),
            x = (0, l.h)(s, {
                type: "bug"
            }, "Fix \"Save as HTML\" and \"Take Screenshot\" features in Chrome extension."),
            H = (0, l.h)(s, {
                type: "a11y"
            }, "Improper links are now buttons with proper focus indication and screen-reader support. Thanks", " ", (0, l.h)(a, {
                url: "https://github.com/jpsc",
                name: "@jpsc"
            })),
            I = (0, l.h)(s, {
                type: "bug"
            }, "Auto-complete suggestions are now working."),
            L = (0, l.h)(s, {
                type: "bug"
            }, "Fixes resetting pane sizes when opening any popup or console."),
            j = (0, l.h)("li", null, (0, l.h)("strong", null, "[Dev] Tests"), ": We now have one running automated test :) More to come. Thanks", " ", (0, l.h)(a, {
                url: "https://github.com/DanielRuf",
                name: "@DanielRuf"
            })),
            E = (0, l.h)("li", null, (0, l.h)("strong", null, "\uD83D\uDD25 [Dev] Code Refactor"), ": I rewrote Web Maker. Yes, Web Maker's codebase has been ported from plain JS to", " ", (0, l.h)("a", {
                href: "https://preactjs.com/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Preact"), ". What does this mean for you as a end-user? This means that now that the code is much smaller, more modular and maintainable. Hence, future features can be developed more rapidly. So fasten your seat belts, and get ready to use loads of new features coming your way in next releases!", (0, l.h)("br", null), (0, l.h)("a", {
                href: "https://medium.com/web-maker/web-maker-is-now-in-preact-85af98be8683",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read more about this big code refactor"), "."),
            B = (0, l.h)("li", null, (0, l.h)("a", {
                href: "https://p5js.org/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "p5.js"), " ", "added to popular JS libraries list. Thanks", " ", (0, l.h)(a, {
                url: "https://github.com/nucliweb",
                name: "@nucliweb"
            }), "."),
            A = (0, l.h)("li", null, (0, l.h)("strong", null, "\uD83D\uDE80 Loop timeout setting"), ": You now have a setting to tweak the maximum timeout of a loop iteration before it's marked as infinite loop."),
            O = (0, l.h)(s, {
                type: "a11y"
            }, "Modals now have proper keyboard navigation integrated."),
            T = (0, l.h)(s, {
                type: "a11y"
            }, "Color contrast improvements."),
            P = (0, l.h)("li", null, "\uD83D\uDE80 Popular libraries list updated. Thanks", (0, l.h)(a, {
                url: "https://github.com/diomed",
                name: "@diomed"
            }), " &", " ", (0, l.h)(a, {
                url: "https://github.com/leninalbertolp",
                name: "@leninalbertolp"
            })),
            D = (0, l.h)(s, {
                type: "bug"
            }, "Modal take up appropriate width instead of spanning full width."),
            V = (0, l.h)(s, {
                type: "bug"
            }, "Fix the \"Run\" button not refreshing the preview after release 3.0.4."),
            F = (0, l.h)("li", null, (0, l.h)("strong", null, "Mobile Support (app only)."), ": Make the Web Maker app usable on mobile. This is only for web app as Chrome extensions don't run on mobile."),
            z = (0, l.h)(s, {
                type: "bug"
            }, "Guarantee code doesn't execute when \"auto preview\" is off."),
            N = (0, l.h)("li", null, "Add link to our new", (0, l.h)("a", {
                href: "https://web-maker.slack.com",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Slack channel"), " ", "\uD83E\uDD17."),
            W = (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix (extension)"), ": \"Save as HTML\" file saves with correct extension."),
            U = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "3.0.1"), (0, l.h)("ul", null, (0, l.h)("li", null, "After months of work, here is Web Maker 3.0.", (0, l.h)("a", {
                href: "https://medium.com/web-maker/web-maker-3-0-is-here-f158a40eeaee",
                target: "_blank",
                rel: "noopener noreferrer"
            }, " ", "Read the blog post about it"), "."), (0, l.h)("li", null, "Web Maker is no more just a Chrome extension, it is also available as web app that runs offline just like the extension! Checkout it out ->", (0, l.h)("a", {
                href: "https://webmakerapp.com/app/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "https://webmakerapp.com/app/"), "."), (0, l.h)("li", null, "Now use Web Maker web app on any modern browser (tested with Chrome and Firefox)."), (0, l.h)("li", null, (0, l.h)("strong", null, "User Accounts"), " - The much requested user accounts are here. Now maintain your account and store all your creations in the cloud and access them anywhere anytime."), (0, l.h)("li", null, (0, l.h)("strong", null, "New layout mode"), " - One more layout mode, that lets you align all the panes vertically."), (0, l.h)("li", null, (0, l.h)("strong", null, "No more restriction on scripts (Web app only)"), " - If you are using the web app, there is no more a restriction to load scripts from only specific domains. Load any script!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Inline scripts (Web app only)"), " - The restriction of writing JavaScript only in JS pane is also removed."))),
            R = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.7"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("a", {
                href: "https://tailwindcss.com/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Tailwind CSS"), " ", "added to popular CSS libraries list. Thanks", " ", (0, l.h)(a, {
                url: "https://github.com/diomed",
                name: "diomed"
            }), "."), (0, l.h)("li", null, "Popular libraries list updated. Thanks", " ", (0, l.h)(a, {
                url: "https://github.com/diomed",
                name: "diomed"
            }), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Dev"), ": Bug fixes and code refactoring to make things simple.", " ", (0, l.h)(a, {
                url: "https://github.com/iamandrewluca",
                name: "iamandrewluca"
            }), " ", "."))),
            K = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.6"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Fix close buttons not working in notifications and keyboard shortcuts modal."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Fix keyboard shortcut to see keyboard shortcuts :) Thanks", (0, l.h)("a", {
                href: "https://github.com/ClassicOldSong",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "ClassicOldSong"), "."))),
            J = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.5"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("a", {
                href: "https://medium.com/web-maker/release-2-9-5-add-library-search-pane-collapsing-ux-improvements-more-1085216c1301",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read blog post about this release.")), (0, l.h)("li", null, (0, l.h)("strong", null, "Keyboard shortcuts panel"), ": Add a list of all keyboard shotcuts. Access with", (0, l.h)("code", null, " Ctrl/\u2318 + Shift + ?"), " or click keyboard button in footer."), (0, l.h)("li", null, (0, l.h)("strong", null, "Add external library"), ": Better UX for searching third party libraries."), (0, l.h)("li", null, (0, l.h)("strong", null, "Improvement"), ": Code panes now go fullscreen when double-clicked on their headers - which is much more intuitive behavior based on feedback from lot of developers."), (0, l.h)("li", null, (0, l.h)("strong", null, "Improvement"), ": Add", (0, l.h)("code", null, "allowfullscreen"), " attribute on iframes. Thanks", (0, l.h)("a", {
                href: "https://github.com/ClassicOldSong",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "ClassicOldSong"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Stop screenlog.js from showing up in the exported HTML."), (0, l.h)("li", null, "Popular external libraries list updated. Thanks", (0, l.h)("a", {
                href: "https://github.com/jlapitan",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "jlapitan"), "."))),
            q = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.4"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Improvement"), ": Atomic CSS (Atomizer) has been updated to latest version. Now you can do things like psuedo elements. Learn More."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Logging circular objects is now possible. It won't show in the Web Maker console, but will show fine in browser's console."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Console's z-index issue has been fixed."))),
            G = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.3"), (0, l.h)("ul", null, (0, l.h)("li", null, "Choose the save location while exporting your saved creations. Now easily sync them to your Dropbox or any cloud storage."), (0, l.h)("li", null, "All modals inside the app now have a close button."), (0, l.h)("li", null, "Checkbox that showed on clicking a boolean value is now removed. Thanks", (0, l.h)("a", {
                href: "https://github.com/gauravmuk",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Gaurav Nanda"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Screenshots on retina device are now correct. Thanks", (0, l.h)("a", {
                href: "https://github.com/AshBardhan",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Ashish Bardhan"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Double console log in detached mode fixed."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Console.clear now works in detached mode too."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - DOCTYPE added in preview."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Typo correction in README. Thanks", (0, l.h)("a", {
                href: "https://github.com/AdilMah",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Adil Mahmood"), "."), (0, l.h)("li", null, "gstatic.com is available to load external JavaScripts from."), (0, l.h)("li", null, "Popular libraries list updated. Thanks", (0, l.h)("a", {
                href: "https://github.com/diomed",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "diomed"), "."), (0, l.h)("li", null, "Added", (0, l.h)("a", {
                href: "https://github.com/chinchang/web-maker/blob/master/CONTRIBUTING.md",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "contribution guidelines"), " ", "in the Github repository."))),
            Z = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.2"), (0, l.h)("ul", null, (0, l.h)("li", null, "Minor bug fixes."))),
            Y = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.1"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("a", {
                href: "https://medium.com/web-maker/v2-9-lots-of-goodies-bd1e939571f6",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read blog post about last release.")), (0, l.h)("li", null, "Use Ctrl/Cmd+D to select next occurence of matching selection."), (0, l.h)("li", null, "Improve onboard experience."))),
            Q = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.9.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("a", {
                href: "https://medium.com/web-maker/v2-9-lots-of-goodies-bd1e939571f6",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read blog post about this release.")), (0, l.h)("li", null, (0, l.h)("strong", null, "Detached Preview"), " - Yes, you read that correct! You can now detach your preview and send it to your secondary monitor."), (0, l.h)("li", null, (0, l.h)("strong", null, "Find & Replace"), " - Long awaited, now its there. Ctrl/Cmd+f to find and add Alt to replace."), (0, l.h)("li", null, (0, l.h)("strong", null, "Atomic CSS (Atomizer) configurations"), " - Add custom config for Atomic CSS.", (0, l.h)("a", {
                href: "https://github.com/acss-io/atomizer#api",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read more"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Light mode"), " - This new setting makes Web Maker drop some heavy effects like blur etc to gain more performance. Thanks", (0, l.h)("a", {
                href: "https://github.com/iamandrewluca",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Andrew"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Preserve logs setting"), " - Choose whether or not to preserve logs across preview refreshes. Thanks", (0, l.h)("a", {
                href: "https://github.com/BasitAli",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Basit"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Line wrap setting"), " - As the name says."), (0, l.h)("li", null, "Semantic UI added to popular libraries."), (0, l.h)("li", null, "Bootstrap, Vue, UI-Kit and more updated to latest versions in popular libraries."), (0, l.h)("li", null, "UX improvements in settings UI"), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Trigger preview refresh anytime with Ctrl/\u2318 + Shift + 5. Even with auto-preview on."))),
            X = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.8.1"), (0, l.h)("ul", null, (0, l.h)("li", null, "Vue.js & UIKit version updated to latest version in 'Add Library' list."), (0, l.h)("li", null, "UTF-8 charset added to preview HTML to support universal characters."))),
            ee = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.8.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("a", {
                href: "https://medium.com/web-maker/release-v2-8-is-out-f44e6ea5d9c4",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read blog post about this release.")), (0, l.h)("li", null, (0, l.h)("strong", null, "Auto Save"), " - Your creations now auto-save after your first manual save. This is configurable from settings."), (0, l.h)("li", null, (0, l.h)("strong", null, "Base2Tone-Meadow Editor Theme"), " - First user contributed theme. Thanks to Diomed."), (0, l.h)("li", null, (0, l.h)("strong", null, "Use System Fonts"), " - You can now use any of your existing system fonts in the editor!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Matching Tag Highlight"), " - Cursor over any HTML tag would highlight the matching pair tag."), (0, l.h)("li", null, "Auto-completion suggestion can now be switched off from settings."), (0, l.h)("li", null, (0, l.h)("strong", null, "Improvement"), " - Stop white flicker in editor when the app opens."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Add Babel Polyfill to enable use of next-gen built-ins like Promise or WeakMap."), (0, l.h)("li", null, "Vue.js version updated to 2.4.0 in popular library list."), (0, l.h)("li", null, "Downloads permission is optional. Asked only when you take screenshot."))),
            te = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.7.2"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "External Libraries"), " - Add Foundation.js and update UIKit 3 to latest beta."), (0, l.h)("li", null, (0, l.h)("strong", null, "rawgit.com"), " &", (0, l.h)("strong", null, "wzrd.in"), " domains are now allowed for loading external libraries from."), (0, l.h)("li", null, "Minor booting speed improvements"))),
            oe = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.7.1"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Framer.js support"), " - You can now load the latest framer.js library from", (0, l.h)("a", {
                href: "https://builds.framerjs.com/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "framer builds page"), " ", "and start coding framer prototypes."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Edit on CodePen is back in action."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Autocompletion menu doesn't show on cut and paste now."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Updated & fixed urls of some common external libraries to latest versions. UIKit3 & Bootstrap 4\u03B1 are now in the list."), (0, l.h)("li", null, "Preprocessor selector are now more accessible."))),
            ne = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.7.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Fork any creation!"), ": Now you can fork any existing creation of yours to start a new work based on it. One big use case of this feature is \"Templates\"!", (0, l.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://kushagragour.in/blog/2017/05/web-maker-fork-templates/?utm_source=webmakerapp&utm_medium=referral"
            }, "Read more about it"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Fonts \uD83D\uDE0D "), ": Super-awesome 4 fonts (mostly with ligature support) now available to choose from. Fira Code is the default font now."), (0, l.h)("li", null, "Updated most used external libraries to latest versions."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Add missing Bootstrap JS file to most used external libraries list."), (0, l.h)("li", null, "Several other minor bugfixes and improvements to make Web Maker awesome!"), (0, l.h)("li", null, "Great news to share with you - Web Maker has been featured on the Chrome Webstore homepage! Thanks for all the love :)"))),
            se = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.6.1"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": Emojis vanishing while exporting to Codepen has been fixed."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ":", (0, l.h)("code", null, "console.clear()"), " now doesn't error and clears the inbuilt console."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), ": External libraries added to the creation are exported as well to Codepen."))),
            ae = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.6.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "The \"Console\""), ": The most awaited feature is here! There is now an inbuilt console to see your logs, errors and for quickly evaluating JavaScript code inside your preview. Enjoy! I also a", (0, l.h)("a", {
                href: "https://kushagragour.in/blog/2017/05/web-maker-console-is-here/?utm_source=webmakerapp&utm_medium=referral",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "blog post about it"), "."), (0, l.h)("li", null, "Number slider which popped on clicking any number in the code has been removed due to poor user experience."), (0, l.h)("li", null, "Minor usability improvements."))),
            ie = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.5.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Atomic CSS"), ": Use can now use Atomic CSS(ACSS) in your work!", (0, l.h)("a", {
                href: "https://acss.io/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read more about it here"), "."), (0, l.h)("li", null, (0, l.h)("strong", null, "Search your saved creations"), ": Easily search through all your saved creations by title."), (0, l.h)("li", null, (0, l.h)("strong", null, "Configurable Auto-preview"), " - You can turn off the auto preview in settings if you don't want the preview to update as you type."), (0, l.h)("li", null, (0, l.h)("strong", null, "Configurable refresh on resize"), " - You can configure whether you want the preview to refresh when you resize the preview panel."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Fix indentation", (0, l.h)("a", {
                href: "https://github.com/chinchang/web-maker/issues/104",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "issue"), " ", "with custom indentation size."))),
            re = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.4.2"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Improved infinite loop protection"), ": Infinite loop protection is now faster and more reliable. And works without the need of Escodegen. Thanks to Ariya Hidayat!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Default parameters not working in JavaScript is fixed."))),
            le = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.4.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Import/Export"), ": Your creations are most important. Now export all your creations into a single file as a backup that can be imported anytime & anywhere."), (0, l.h)("li", null, (0, l.h)("strong", null, "Editor themes"), ": You have been heard. Now you can choose from a huge list of wonderful editor themes!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Identation settings"), ": Not a spaces fan? Switch to tabs and set your indentation size."), (0, l.h)("li", null, (0, l.h)("strong", null, "Vim key bindings"), ": Rejoice Vim lovers!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Code blast"), ": Why don't you try coding with this switched on from the settings? Go on..."), (0, l.h)("li", null, (0, l.h)("strong", null, "Important"), ": Due to security policy changes from Chrome 57 onwards, Web Maker now allows loading external JavaScript libraries only from certain whitelisted domains (localhost, https://ajax.googleapis.com, https://code.jquery.com, https://cdnjs.cloudflare.com, https://unpkg.com, https://maxcdn.com, https://cdn77.com, https://maxcdn.bootstrapcdn.com, https://cdn.jsdelivr.net/)"), (0, l.h)("li", null, "Save button now highlights when you have unsaved changes."), (0, l.h)("li", null, "Jade is now called Pug. Just a name change."))),
            de = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.3.2"), (0, l.h)("ul", null, (0, l.h)("li", null, "Update Babel to support latest and coolest ES6 features."), (0, l.h)("li", null, "Improve onboarding experience at first install."))),
            ce = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.3.1"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Splitting of code and preview panes is remembered by the editor."), (0, l.h)("li", null, "Title of the creation is used for the file name when saving as HTML."))),
            pe = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.3.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Add Library Autocompletion"), " - Just start typing the name of library and you'll be shown matching libraries from cdnjs."), (0, l.h)("li", null, (0, l.h)("strong", null, "Preview Screenshot Capture"), " - Want to grab a nice screenshot of your creation. You have it! Click and capture."), (0, l.h)("li", null, (0, l.h)("strong", null, "Auto Indent Code"), " - Select your code and hit Shift-Tab to auto-indent it!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Keyboard Navigation in Saved List"), " - Now select your creation using arrow keys and hit ENTER to open it."), (0, l.h)("li", null, "Highlight active line in code panes."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Fix in generated title of new creation."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - HTML autocompletion is manual triggered now with Ctrl+Space."))),
            he = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.2.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Code Autocompletion"), " - See code suggestions while you type!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Full Screen Preview"), " - Checkout your creation in a full-screen layout."), (0, l.h)("li", null, (0, l.h)("strong", null, "SASS"), " - SASS support added for CSS."), (0, l.h)("li", null, (0, l.h)("strong", null, "Faster CSS update"), " - Preview updates instantly without refresh when just CSS is changed."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Indentation fixed while going on new line."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Works even in Chrome Canary now. Though libraries can be added only through CDNs."))),
            ue = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.1.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "TypeScript"), " - Now you can code in TypeScript too!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Stylus Preprocessor"), " - Stylus supported adding for CSS."), (0, l.h)("li", null, (0, l.h)("strong", null, "Code Folding"), " - Collapse large code blocks for easy editing."), (0, l.h)("li", null, (0, l.h)("strong", null, "Bugfix"), " - Support JSX in JavaScript."), (0, l.h)("li", null, "Better onboarding for first time users."))),
            me = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "2.0.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Save and Load"), " - Long pending and super-useful, now you can save your creations and resume them anytime later."), (0, l.h)("li", null, (0, l.h)("strong", null, "Insert JS & CSS"), " - Load popular JavaScript & CSS libraries in your work without writing any code."), (0, l.h)("li", null, (0, l.h)("strong", null, "Collapsed Panes"), " - Collapse/uncollapse code panes with a single click. Your pane configuration is even saved with every creation!"), (0, l.h)("li", null, (0, l.h)("strong", null, "Quick color & number change"), " - Click on any color or number and experiment with quick values using a slider."), (0, l.h)("li", null, (0, l.h)("strong", null, "Linting"), " - See your code errors right where you are coding."), (0, l.h)("li", null, "No more browser hang due to infinite loops!"))),
            fe = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "1.7.0"), (0, l.h)("ul", null, (0, l.h)("li", null, (0, l.h)("strong", null, "Preprocessors!"), " - Enjoy a whole list of preprocessors for HTML(Jade & markdown), CSS(SCSS & LESS) and JavaScript(CoffeeScript & Babel)."), (0, l.h)("li", null, "More awesome font for code."))),
            ge = (0, l.h)("div", {
                class: "notification"
            }, (0, l.h)("span", {
                class: "notification__version"
            }, "1.6.0"), (0, l.h)("ul", null, (0, l.h)("li", null, "You can now configure Web-Maker to not replace new tab page from the settings. It is always accessible from the icon in the top-right."), (0, l.h)("li", null, "Download current code as HTML file with Ctrl/\u2318 + S keyboard shortcut."), (0, l.h)("li", null, "New notifications panel added so you are always aware of the new changes in Web-Maker.")))
    },
    1: function() {},
    "18yn": function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.Profile = function(e) {
            var t = e.user,
                o = e.logoutBtnHandler;
            return (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("img", {
                height: "80",
                class: "profile-modal__avatar-img",
                src: t ? t.photoURL || s : "",
                id: "profileAvatarImg",
                alt: "Profile image"
            }), (0, n.h)("h3", {
                id: "profileUserName",
                class: "mb-2"
            }, t && t.displayName ? t.displayName : "Anonymous Creator"), (0, n.h)("p", null, (0, n.h)("button", {
                class: "btn",
                "aria-label": "Logout from your account",
                onClick: o
            }, "Logout")))
        };
        var n = o("KM04"),
            s = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='#ccc' d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z' /%3E%3C/svg%3E"
    },
    "1IZv": function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.KeyboardShortcutsModal = function(e) {
            var t = e.show,
                o = e.closeHandler;
            return (0, n.h)(a.default, {
                show: t,
                closeHandler: o
            }, i, r)
        };
        var n = o("KM04"),
            s = o("inAt"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = (0, n.h)("h1", null, "Keyboard Shortcuts"),
            r = (0, n.h)("div", {
                class: "flex"
            }, (0, n.h)("div", null, (0, n.h)("h2", null, "Global"), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + Shift + ?"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "See keyboard shortcuts")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + Shift + 5"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Refresh preview")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + S"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Save current creations")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + O"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Open list of saved creations")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl + L"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Clear console (works when console input is focused)")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Esc"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Close saved creations panel & modals"))), (0, n.h)("div", {
                class: "ml-2"
            }, (0, n.h)("h2", null, "Editor"), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + F"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Find")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + G"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Select next match")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + Shift + G"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Select previous match")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + Opt/Alt + F"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Find & replace")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Shift + Tab"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Realign code")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + ]"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Indent code right")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + ["), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Indent code left")), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Tab"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Emmet code completion", " ", (0, n.h)("a", {
                href: "https://emmet.io/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read more"))), (0, n.h)("p", null, (0, n.h)("span", {
                class: "kbd-shortcut__keys"
            }, "Ctrl/\u2318 + /"), (0, n.h)("span", {
                class: "kbd-shortcut__details"
            }, "Single line comment"))))
    },
    "3Z4F": function(e, t) {
        "use strict";
        t.__esModule = !0;
        var o = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        };
        t.deferred = function() {
            var e = {},
                t = new Promise(function(t, o) {
                    e.resolve = t, e.reject = o
                });
            return e.promise = t, o(e, t)
        }
    },
    "4Qrw": function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.Js13KModal = function(e) {
            var t = e.show,
                o = e.closeHandler;
            return (0, n.h)(a.default, {
                show: t,
                closeHandler: o,
                small: !0
            }, i, r)
        };
        var n = o("KM04"),
            s = o("inAt"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("div", {
                className: "flex flex-v-center flex-h-center "
            }, (0, n.h)("img", {
                src: "/icon-128.png",
                alt: "Web Maker logo",
                height: "100",
                style: "margin:0 0.5rem;"
            }), (0, n.h)("h2", null, "Web Maker"), (0, n.h)("span", {
                style: "font-size:3rem;margin:0 1rem;"
            }, "+"), (0, n.h)("h2", null, "JS13K Games"), (0, n.h)("img", {
                src: "assets/js13kgames-square-logo.png",
                alt: "JS13K Games logo",
                height: "100",
                style: "margin:0 0.5rem;"
            }))),
            r = (0, n.h)("div", null, (0, n.h)("p", null, (0, n.h)("strong", null, "Js13kGames"), " is a JavaScript coding competition for", " ", (0, n.h)("strong", null, "HTML5 Game Developers"), ". The fun part of the compo is the file size limit set to ", (0, n.h)("strong", null, "13 kilobytes"), ". The competition will start at ", (0, n.h)("strong", null, "13:00 CEST, 13th August"), " and will end at ", (0, n.h)("strong", null, "13:00 CEST, 13th September 2018"), "."), (0, n.h)("p", null, "You have activated Web Maker's Js13kGames mode! This gives you some extra support to build your awesome game right here. Constantly see your game's zipped size in the footer. When you are done, download the zip.", " ", (0, n.h)("a", {
                href: "https://medium.com/web-maker/js13kgames-jam-with-web-maker-a3389cf2cbb",
                target: "_blank",
                rel: "noopener"
            }, "Read more about this collaboration"), "."), (0, n.h)("ul", null, (0, n.h)("li", null, (0, n.h)("a", {
                href: "https://gamedevelopment.tutsplus.com/articles/how-to-minify-your-html5-game-for-the-js13kgames-competition--cms-21883",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read Tuts+ Gamedev intro article")), (0, n.h)("li", null, (0, n.h)("a", {
                href: "http://js13kgames.github.io/resources/",
                target: "_blank",
                rel: "noopener"
            }, "Resources and useful tools")), (0, n.h)("li", null, (0, n.h)("a", {
                href: "http://2018.js13kgames.com/#rules",
                target: "_blank",
                rel: "noopener"
            }, "Compo rules"))), (0, n.h)("p", null, "Have fun building games!"))
    },
    "6Ptt": function(e, t, o) {
        "use strict";

        function n() {
            if (window.DEBUG) {
                var e;
                (e = console).log.apply(e, [Date.now()].concat(Array.prototype.slice.call(arguments)))
            }
        }

        function s(e, t) {
            (function() {
                var o = document.createElement("a");
                o.href = window.URL.createObjectURL(t), o.download = e, o.style.display = "none", document.body.appendChild(o), o.click(), o.remove()
            })()
        }

        function a(e, t, o) {
            function s(e) {
                return function() {
                    n(arguments), (0, r.trackEvent)("fn", "error", e), a.errorCount = (a.errorCount || 0) + 1, 4 === a.errorCount && setTimeout(function() {
                        alert("Oops! Seems like your preview isn't updating. It's recommended to switch to the web app: https://webmakerapp.com/app/.\n\n If you still want to get the extension working, please try the following steps until it fixes:\n - Refresh Web Maker\n - Restart browser\n - Update browser\n - Reinstall Web Maker (don't forget to export all your creations from saved items pane (click the OPEN button) before reinstalling)\n\nIf nothing works, please tweet out to @webmakerApp."), (0, r.trackEvent)("ui", "writeFileMessageSeen")
                    }, 1e3)
                }
            }
            var i = !1;
            window.webkitRequestFileSystem(window.TEMPORARY, 5242880, function(n) {
                n.root.getFile(e, {
                    create: !0
                }, function(e) {
                    e.createWriter(function(e) {
                        e.onwriteend = function() {
                            return i ? o() : (i = !0, e.seek(0), e.write(t), !1)
                        }, e.truncate(0)
                    }, s("createWriterFail"))
                }, s("getFileFail"))
            }, s("webkitRequestFileSystemFail"))
        }

        function i(e, t, o, n, s) {
            if (!n) return "";
            var a = "",
                i = "";
            n.externalLibs && (a = n.externalLibs.js.split("\n").reduce(function(e, t) {
                return e + (t ? "\n<script src=\"" + t + "\"></script>" : "")
            }, ""), i = n.externalLibs.css.split("\n").reduce(function(e, t) {
                return e + (t ? "\n<link rel=\"stylesheet\" href=\"" + t + "\"></link>" : "")
            }, ""));
            var r = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\" />\n" + i + "\n<style id=\"webmakerstyle\">\n" + t + "\n</style>\n</head>\n<body>\n" + e + "\n" + a + "\n";
            if (s || (r += "<script src=\"" + (chrome.extension ? chrome.extension.getURL("lib/screenlog.js") : "" + location.origin + (window.DEBUG ? "" : h) + "/lib/screenlog.js") + "\"></script>"), n.jsMode === d.JsModes.ES6 && (r += "<script src=\"" + (chrome.extension ? chrome.extension.getURL("lib/transpilers/babel-polyfill.min.js") : "" + location.origin + h + "/lib/transpilers/babel-polyfill.min.js") + "\"></script>"), "string" == typeof o) r += "<script>\n" + o + "\n//# sourceURL=userscript.js";
            else {
                var l = chrome.i18n.getMessage() ? "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") : "" + location.origin;
                r += "<script src=\"filesystem:" + l + "/temporary/script.js\">"
            }
            return r += "\n</script>\n</body>\n</html>", r
        }
        t.__esModule = !0, t.BASE_PATH = void 0, t.semverCompare = function(e, t) {
            for (var o = e.split("."), n = t.split("."), s = 0; 3 > s; s++) {
                var a = +o[s],
                    i = +n[s];
                if (a > i) return 1;
                if (i > a) return -1;
                if (!isNaN(a) && isNaN(i)) return 1;
                if (isNaN(a) && !isNaN(i)) return -1
            }
            return 0
        }, t.generateRandomId = function(e) {
            for (var t = "", o = e || 10; o--;) t += u[~~(Math.random() * u.length)];
            return t
        }, t.onButtonClick = function(e, t) {
            e.addEventListener("click", function(o) {
                return t(o), !1
            })
        }, t.log = n, t.addInfiniteLoopProtection = function(e, t) {
            var o = t.timeout,
                n = 1,
                s = [],
                a = "_wmloopvar";
            return p.parse(e, {
                tolerant: !0,
                range: !0,
                jsx: !0
            }, function(e) {
                switch (e.type) {
                    case "DoWhileStatement":
                    case "ForStatement":
                    case "ForInStatement":
                    case "ForOfStatement":
                    case "WhileStatement":
                        var t = 1 + e.body.range[0],
                            i = e.body.range[1],
                            r = ("\nif (Date.now() - %d > " + o + ") { window.top.previewException(new Error(\"Infinite loop\")); break;}\n").replace("%d", a + n),
                            l = "";
                        "BlockStatement" !== e.body.type && (r = "{" + r, l = "}", --t), s.push({
                            pos: t,
                            str: r
                        }), s.push({
                            pos: i,
                            str: l
                        }), s.push({
                            pos: e.range[0],
                            str: "var %d = Date.now();\n".replace("%d", a + n)
                        }), ++n;
                        break;
                    default:
                }
            }), s.sort(function(e, t) {
                return t.pos - e.pos
            }).forEach(function(t) {
                e = e.slice(0, t.pos) + t.str + e.slice(t.pos)
            }), e
        }, t.getHumanDate = function(e) {
            var t = new Date(e),
                o = t.getDate() + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()] + " " + t.getFullYear();
            return o
        }, t.once = function(e, t, o) {
            e.addEventListener(t, function(n) {
                return n.target.removeEventListener(t, arguments.callee), o(n)
            })
        }, t.downloadFile = s, t.writeFile = a, t.loadJS = function(e) {
            var t = (0, c.deferred)(),
                o = window.document.getElementsByTagName("script")[0],
                n = window.document.createElement("script");
            return n.src = e, n.async = !0, o.parentNode.insertBefore(n, o), n.onload = function() {
                t.resolve()
            }, t.promise
        }, t.getCompleteHtml = i, t.saveAsHtml = function(e) {
            var t = (0, l.computeHtml)(e.html, e.htmlMode),
                o = (0, l.computeCss)(e.css, e.cssMode),
                n = (0, l.computeJs)(e.js, e.jsMode, !1);
            Promise.all([t, o, n]).then(function(t) {
                var o = t[0].code,
                    n = t[1].code,
                    a = t[2].code,
                    l = i(o, n, a, e, !0),
                    c = new Date,
                    d = ["web-maker", c.getFullYear(), c.getMonth() + 1, c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()].join("-");
                e.title && (d = e.title), d += ".html";
                var p = new Blob([l], {
                    type: "text/html;charset=UTF-8"
                });
                s(d, p), (0, r.trackEvent)("fn", "saveFileComplete")
            })
        }, t.handleDownloadsPermission = function() {
            var e = (0, c.deferred)();
            return window.IS_EXTENSION ? (chrome.permissions.contains({
                permissions: ["downloads"]
            }, function(t) {
                t ? e.resolve() : chrome.permissions.request({
                    permissions: ["downloads"]
                }, function(t) {
                    t ? ((0, r.trackEvent)("fn", "downloadsPermGiven"), e.resolve()) : e.reject()
                })
            }), e.promise) : (e.resolve(), e.promise)
        }, t.getFilenameFromUrl = function(e) {
            return e ? e.match(/\/([^/]*)$/)[1] : ""
        };
        var r = o("qV3Q"),
            l = o("E5zE"),
            d = o("y5h4"),
            c = o("3Z4F"),
            p = o("4E2n");
        window.DEBUG = -1 < document.cookie.indexOf("wmdebug"), window.$ = document.querySelector.bind(document), window.chrome = window.chrome || {}, window.chrome.i18n = {
            getMessage: function() {}
        }, window.$all = function(e) {
            return [].concat(document.querySelectorAll(e))
        }, window.IS_EXTENSION = !!window.chrome.extension;
        var h = t.BASE_PATH = window.chrome.extension || window.DEBUG ? "/" : "/app",
            u = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Node.prototype.nextUntil = function(e) {
            var t = Array.from(this.parentNode.querySelectorAll(e)),
                o = t.indexOf(this);
            return t[o + 1]
        }, Node.prototype.previousUntil = function(e) {
            var t = Array.from(this.parentNode.querySelectorAll(e)),
                o = t.indexOf(this);
            return t[o - 1]
        }, window.requestIdleCallback = window.requestIdleCallback || function(e) {
            setTimeout(e, 10)
        }, window.IS_EXTENSION ? document.body.classList.add("is-extension") : document.body.classList.add("is-app")
    },
    "6Vka": function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var i = o("KM04"),
            r = o("eNb1"),
            l = o("qV3Q"),
            d = o("9VU0"),
            c = (0, i.h)("h1", null, "Add Library"),
            p = (0, i.h)("svg", {
                style: "width: 30px; height: 30px;fill:rgb(255,255,255,0.5)"
            }, (0, i.h)("use", {
                xlinkHref: "#search"
            })),
            h = (0, i.h)("input", {
                type: "text",
                id: "externalLibrarySearchInput",
                class: "full-width",
                placeholder: "Type here to search libraries"
            }),
            u = (0, i.h)("div", {
                class: "tar opacity--70"
            }, (0, i.h)("small", null, "Powered by cdnjs")),
            m = (0, i.h)("option", {
                value: ""
            }, "-------"),
            f = (0, i.h)("h3", {
                class: "mb-0"
            }, "JS"),
            g = (0, i.h)("p", {
                class: "mt-0 help-text"
            }, "Put each library in new line"),
            b = (0, i.h)("p", {
                style: "font-size: 0.8em;",
                class: "show-when-extension opacity--70"
            }, "Note: You can load external scripts from following domains: localhost, https://ajax.googleapis.com, https://code.jquery.com, https://cdnjs.cloudflare.com, https://unpkg.com, https://maxcdn.com, https://cdn77.com, https://maxcdn.bootstrapcdn.com, https://cdn.jsdelivr.net/, https://rawgit.com, https://wzrd.in"),
            y = (0, i.h)("h3", {
                class: "mb-0"
            }, "CSS"),
            v = (0, i.h)("p", {
                class: "mt-0 help-text"
            }, "Put each library in new line"),
            C = function(e) {
                function t(o) {
                    n(this, t);
                    var a = s(this, e.call(this, o));
                    return a.state = {
                        css: o.css || "",
                        js: o.js || ""
                    }, a
                }
                return a(t, e), t.prototype.onSelectChange = function(t) {
                    var e = t.target;
                    if (e.value) {
                        var o = e.selectedOptions[0].dataset.type;
                        "js" === o ? this.setState({
                            js: this.state.js + "\n" + e.value
                        }) : this.setState({
                            css: this.state.css + "\n" + e.value
                        }), (0, l.trackEvent)("ui", "addLibrarySelect", e.selectedOptions[0].label), this.props.onChange({
                            js: this.state.js,
                            css: this.state.css
                        }), e.value = ""
                    }
                }, t.prototype.textareaBlurHandler = function(t, e) {
                    var o = t ? t.target : e,
                        n = o.dataset.lang;
                    "js" === n ? this.setState({
                        js: o.value || ""
                    }) : this.setState({
                        css: o.value || ""
                    }), this.props.onChange({
                        js: this.state.js,
                        css: this.state.css
                    })
                }, t.prototype.suggestionSelectHandler = function(e) {
                    var t = e.match(/\.js$/) ? window.externalJsTextarea : window.externalCssTextarea;
                    t.value = t.value + "\n" + e, window.externalLibrarySearchInput.value = "", this.textareaBlurHandler(null, t)
                }, t.prototype.render = function() {
                    return (0, i.h)("div", null, c, (0, i.h)("div", {
                        class: "flex flex-v-center"
                    }, p, (0, i.h)(d.LibraryAutoSuggest, {
                        fullWidth: !0,
                        onSelect: this.suggestionSelectHandler.bind(this)
                    }, h)), u, (0, i.h)("div", {
                        style: "margin:20px 0;"
                    }, "Choose from popular libraries:", " ", (0, i.h)("select", {
                        name: "",
                        id: "js-add-library-select",
                        onChange: this.onSelectChange.bind(this)
                    }, m, (0, i.h)("optgroup", {
                        label: "JavaScript Libraries"
                    }, r.jsLibs.map(function(e) {
                        return (0, i.h)("option", {
                            "data-type": e.type,
                            value: e.url
                        }, e.label)
                    })), (0, i.h)("optgroup", {
                        label: "CSS Libraries"
                    }, r.cssLibs.map(function(e) {
                        return (0, i.h)("option", {
                            "data-type": e.type,
                            value: e.url
                        }, e.label)
                    })))), f, g, b, (0, i.h)("textarea", {
                        onBlur: this.textareaBlurHandler.bind(this),
                        "data-lang": "js",
                        class: "full-width",
                        id: "externalJsTextarea",
                        cols: "30",
                        rows: "5",
                        value: this.state.js
                    }), y, v, (0, i.h)("textarea", {
                        onBlur: this.textareaBlurHandler.bind(this),
                        "data-lang": "css",
                        class: "full-width",
                        id: "externalCssTextarea",
                        cols: "30",
                        rows: "5",
                        value: this.state.css
                    }))
                }, t
            }(i.Component);
        t.default = C
    },
    "7vko": function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var r = o("KM04"),
            l = o("IaNL"),
            d = n(l),
            c = o("E5zE"),
            p = o("y5h4"),
            h = o("6Ptt"),
            u = o("YWKo"),
            m = o("qV3Q"),
            f = o("c/up"),
            g = n(f),
            b = o("CIHI"),
            y = n(b),
            v = o("3Z4F"),
            C = o("+ZAi"),
            k = n(C),
            S = 33,
            w = (0, r.h)("span", {
                class: "caret"
            }),
            M = (0, r.h)("option", {
                value: "html"
            }, "HTML"),
            _ = (0, r.h)("option", {
                value: "markdown"
            }, "Markdown"),
            x = (0, r.h)("option", {
                value: "jade"
            }, "Pug"),
            H = (0, r.h)("span", {
                class: "caret"
            }),
            I = (0, r.h)("option", {
                value: "css"
            }, "CSS"),
            L = (0, r.h)("option", {
                value: "scss"
            }, "SCSS"),
            j = (0, r.h)("option", {
                value: "sass"
            }, "SASS"),
            E = (0, r.h)("option", {
                value: "less"
            }, "LESS"),
            B = (0, r.h)("option", {
                value: "stylus"
            }, "Stylus"),
            A = (0, r.h)("option", {
                value: "acss"
            }, "Atomic CSS"),
            O = (0, r.h)("svg", null, (0, r.h)("use", {
                xlinkHref: "#settings-icon"
            })),
            T = (0, r.h)("span", {
                class: "caret"
            }),
            P = (0, r.h)("option", {
                value: "js"
            }, "JS"),
            D = (0, r.h)("option", {
                value: "coffee"
            }, "CoffeeScript"),
            V = (0, r.h)("option", {
                value: "es6"
            }, "ES6 (Babel)"),
            F = (0, r.h)("option", {
                value: "typescript"
            }, "TypeScript"),
            z = (0, r.h)("span", {
                class: "code-wrap__header-label"
            }, "Console (", (0, r.h)("span", {
                id: "logCountEl"
            }, "0"), ")"),
            N = (0, r.h)("svg", null, (0, r.h)("use", {
                xlinkHref: "#cancel-icon"
            })),
            W = (0, r.h)("svg", {
                width: "18",
                height: "18",
                fill: "#346fd2"
            }, (0, r.h)("use", {
                xlinkHref: "#chevron-icon"
            })),
            U = function(e) {
                function t(o) {
                    s(this, t);
                    var n = a(this, e.call(this, o));
                    return n.state = {
                        isConsoleOpen: !1,
                        isCssSettingsModalOpen: !1
                    }, n.updateTimer = null, n.updateDelay = 500, n.htmlMode = p.HtmlModes.HTML, n.jsMode = p.HtmlModes.HTML, n.cssMode = p.CssModes.CSS, n.jsMode = p.JsModes.JS, n.prefs = {}, n.codeInPreview = {
                        html: null,
                        css: null,
                        js: null
                    }, n.cmCodes = {
                        html: o.currentItem.html,
                        css: "",
                        js: ""
                    }, n.cm = {}, n.logCount = 0, window.onMessageFromConsole = n.onMessageFromConsole.bind(n), window.previewException = n.previewException.bind(n), window.clearConsole = n.clearConsole.bind(n), n
                }
                return i(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    return this.state.isConsoleOpen !== t.isConsoleOpen || this.state.isCssSettingsModalOpen !== t.isCssSettingsModalOpen || this.state.codeSplitSizes !== t.codeSplitSizes || this.state.mainSplitSizes !== t.mainSplitSizes || this.props.currentLayoutMode !== e.currentLayoutMode || this.props.currentItem !== e.currentItem || this.props.prefs !== e.prefs
                }, t.prototype.componentDidUpdate = function() {
                    window.logCountEl.textContent = this.logCount
                }, t.prototype.componentDidMount = function() {
                    this.props.onRef(this)
                }, t.prototype.onHtmlCodeChange = function(e, t) {
                    this.cmCodes.html = e.getValue(), this.props.onCodeChange("html", this.cmCodes.html, "setValue" !== t.origin), this.onCodeChange(e, t)
                }, t.prototype.onCssCodeChange = function(e, t) {
                    this.cmCodes.css = e.getValue(), this.props.onCodeChange("css", this.cmCodes.css, "setValue" !== t.origin), this.onCodeChange(e, t)
                }, t.prototype.onJsCodeChange = function(e, t) {
                    this.cmCodes.js = e.getValue(), this.props.onCodeChange("js", this.cmCodes.js, "setValue" !== t.origin), this.onCodeChange(e, t)
                }, t.prototype.onCodeChange = function(e, t) {
                    var o = this;
                    clearTimeout(this.updateTimer), this.updateTimer = setTimeout(function() {
                        "setValue" !== t.origin && (!1 !== o.prefs.autoPreview && o.setPreviewContent(), m.trackEvent.previewCount = (m.trackEvent.previewCount || 0) + 1, 4 === m.trackEvent.previewCount && (0, m.trackEvent)("fn", "usingPreview"))
                    }, this.updateDelay)
                }, t.prototype.createPreviewFile = function(e, t, o) {
                    var n = this,
                        s = !window.webkitRequestFileSystem || !window.IS_EXTENSION,
                        a = (0, h.getCompleteHtml)(e, t, s ? o : null, this.props.currentItem),
                        i = new Blob([a], {
                            type: "text/plain;charset=UTF-8"
                        }),
                        r = new Blob([o], {
                            type: "text/plain;charset=UTF-8"
                        });
                    !m.trackEvent.hasTrackedCode && (e || t || o) && ((0, m.trackEvent)("fn", "hasCode"), m.trackEvent.hasTrackedCode = !0), s ? this.detachedWindow ? ((0, h.log)("\u2709\uFE0F Sending message to detached window"), this.detachedWindow.postMessage({
                        contents: a
                    }, "*")) : (this.frame.src = this.frame.src, setTimeout(function() {
                        n.frame.contentDocument.open(), n.frame.contentDocument.write(a), n.frame.contentDocument.close()
                    }, 10)) : (0, h.writeFile)("script.js", r, function() {
                        (0, h.writeFile)("preview.html", i, function() {
                            var e = chrome.i18n.getMessage() ? "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") : "" + location.origin,
                                t = "filesystem:" + e + "/temporary/preview.html";
                            n.detachedWindow ? n.detachedWindow.postMessage(t, "*") : n.frame.src = t
                        })
                    })
                }, t.prototype.cleanupErrors = function(e) {
                    this.cm[e].clearGutter("error-gutter")
                }, t.prototype.showErrors = function(e, t) {
                    var o = this.cm[e];
                    t.forEach(function(t) {
                        o.operation(function() {
                            var e = document.createElement("div");
                            e.setAttribute("data-title", t.message), e.classList.add("gutter-error-marker"), o.setGutterMarker(t.lineNumber, "error-gutter", e)
                        })
                    })
                }, t.prototype.setPreviewContent = function(e, t) {
                    var o = this;
                    if (this.props.prefs.autoPreview || t) {
                        this.props.prefs.preserveConsoleLogs || this.clearConsole(), this.cleanupErrors("html"), this.cleanupErrors("css"), this.cleanupErrors("js");
                        var n = {
                            html: this.cmCodes.html,
                            css: this.cmCodes.css,
                            js: this.cmCodes.js
                        };
                        (0, h.log)("\uD83D\uDD0E setPreviewContent", e);
                        var s = this.detachedWindow ? this.detachedWindow.document.querySelector("iframe") : this.frame,
                            a = this.props.currentItem.cssMode;
                        if (!e && n.html === this.codeInPreview.html && n.js === this.codeInPreview.js)(0, c.computeCss)(a === p.CssModes.ACSS ? n.html : n.css, a, this.props.currentItem.cssSettings).then(function(e) {
                            a === p.CssModes.ACSS && o.cm.css.setValue(e.code || ""), s.contentDocument.querySelector("#webmakerstyle") && (s.contentDocument.querySelector("#webmakerstyle").textContent = e.code || "")
                        });
                        else {
                            var i = (0, c.computeHtml)(n.html, this.props.currentItem.htmlMode),
                                r = (0, c.computeCss)(a === p.CssModes.ACSS ? n.html : n.css, a, this.props.currentItem.cssSettings),
                                l = (0, c.computeJs)(n.js, this.props.currentItem.jsMode, !0, this.props.prefs.infiniteLoopTimeout);
                            Promise.all([i, r, l]).then(function(e) {
                                a === p.CssModes.ACSS && o.cm.css.setValue(e[1].code || ""), o.createPreviewFile(e[0].code || "", e[1].code || "", e[2].code || ""), e.forEach(function(e) {
                                    e.errors && o.showErrors(e.errors.lang, e.errors.data)
                                })
                            })
                        }
                        this.codeInPreview.html = n.html, this.codeInPreview.css = n.css, this.codeInPreview.js = n.js
                    }
                }, t.prototype.isValidItem = function(e) {
                    return !!e.title
                }, t.prototype.refreshEditor = function() {
                    var e = this;
                    this.cmCodes.html = this.props.currentItem.html, this.cmCodes.css = this.props.currentItem.css, this.cmCodes.js = this.props.currentItem.js, this.cm.html.setValue(this.cmCodes.html || ""), this.cm.css.setValue(this.cmCodes.css || ""), this.cm.js.setValue(this.cmCodes.js || ""), this.cm.html.refresh(), this.cm.css.refresh(), this.cm.js.refresh(), this.clearConsole(), Promise.all([this.updateHtmlMode(this.props.currentItem.htmlMode), this.updateCssMode(this.props.currentItem.cssMode), this.updateJsMode(this.props.currentItem.jsMode)]).then(function() {
                        return e.setPreviewContent(!0)
                    })
                }, t.prototype.applyCodemirrorSettings = function(e) {
                    var t = this;
                    this.cm && (htmlCodeEl.querySelector(".CodeMirror").style.fontSize = cssCodeEl.querySelector(".CodeMirror").style.fontSize = jsCodeEl.querySelector(".CodeMirror").style.fontSize = parseInt(e.fontSize, 10) + "px", window.consoleEl.querySelector(".CodeMirror").style.fontSize = parseInt(e.fontSize, 10) + "px", window.editorThemeLinkTag.href = "lib/codemirror/theme/" + e.editorTheme + ".css", window.fontStyleTag.textContent = window.fontStyleTemplate.textContent.replace(/fontname/g, ("other" === e.editorFont ? e.editorCustomFont : e.editorFont) || "FiraCode"), this.consoleCm.setOption("theme", e.editorTheme), ["html", "js", "css"].forEach(function(o) {
                        t.cm[o].setOption("indentWithTabs", "spaces" !== e.indentWith), t.cm[o].setOption("blastCode", !!e.isCodeBlastOn && {
                            effect: 2,
                            shake: !1
                        }), t.cm[o].setOption("indentUnit", +e.indentSize), t.cm[o].setOption("tabSize", +e.indentSize), t.cm[o].setOption("theme", e.editorTheme), t.cm[o].setOption("keyMap", e.keymap), t.cm[o].setOption("lineWrapping", e.lineWrap), t.cm[o].refresh()
                    }))
                }, t.prototype.updateCodeWrapCollapseStates = function() {
                    var e = this;
                    clearTimeout(this.updateCodeWrapCollapseStates.timeout), this.updateCodeWrapCollapseStates.timeout = setTimeout(function() {
                        var t = e.props.currentLayoutMode,
                            o = 2 === t || 5 === t ? "width" : "height";
                        [htmlCodeEl, cssCodeEl, jsCodeEl].forEach(function(e) {
                            var t = e.getBoundingClientRect(),
                                n = t[o];
                            100 > n ? e.classList.add("is-minimized") : e.classList.remove("is-minimized"), -1 === e.style[o].indexOf("100% - " + 2 * S + "px") ? e.classList.remove("is-maximized") : e.classList.add("is-maximized")
                        })
                    }, 50)
                }, t.prototype.toggleCodeWrapCollapse = function(e) {
                    if (e.classList.contains("is-minimized") || e.classList.contains("is-maximized")) e.classList.remove("is-minimized"), e.classList.remove("is-maximized"), this.codeSplitInstance.setSizes([33.3, 33.3, 33.3]);
                    else {
                        var t = parseInt(e.dataset.codeWrapId, 10),
                            o = [S + "px", S + "px", S + "px"];
                        o[t] = "calc(100% - " + 2 * S + "px)", this.codeSplitInstance.setSizes(o), e.classList.add("is-maximized")
                    }
                    this.updateSplits()
                }, t.prototype.collapseBtnHandler = function(t) {
                    var e = t.currentTarget.parentElement.parentElement.parentElement;
                    this.toggleCodeWrapCollapse(e), (0, m.trackEvent)("ui", "paneCollapseBtnClick", e.dataset.type)
                }, t.prototype.codeWrapHeaderDblClickHandler = function(t) {
                    if (t.target.classList.contains("js-code-wrap__header")) {
                        var e = t.target.parentElement;
                        this.toggleCodeWrapCollapse(e), (0, m.trackEvent)("ui", "paneHeaderDblClick", e.dataset.type)
                    }
                }, t.prototype.resetSplitting = function() {
                    this.setState({
                        codeSplitSizes: this.getCodeSplitSizes(),
                        mainSplitSizes: this.getMainSplitSizesToApply()
                    })
                }, t.prototype.updateSplits = function() {
                    this.props.onSplitUpdate(), this.state.codeSplitSizes = this.props.currentItem.sizes, this.state.mainSplitSizes = this.props.currentItem.mainSizes
                }, t.prototype.getMainSplitSizesToApply = function() {
                    var e, t = this.props,
                        o = t.currentItem,
                        n = t.currentLayoutMode;
                    return e = o && o.mainSizes ? 3 === n ? [o.mainSizes[1], o.mainSizes[0]] : o.mainSizes : 5 === n ? [75, 25] : [50, 50], e
                }, t.prototype.getCodeSplitSizes = function() {
                    return this.props.currentItem && this.props.currentItem.sizes ? this.props.currentItem.sizes : [33.33, 33.33, 33.33]
                }, t.prototype.mainSplitDragEndHandler = function() {
                    var e = this;
                    this.props.prefs.refreshOnResize && setTimeout(function() {
                        e.setPreviewContent(!0)
                    }, 1), this.updateSplits()
                }, t.prototype.codeSplitDragStart = function() {
                    document.body.classList.add("is-dragging")
                }, t.prototype.codeSplitDragEnd = function() {
                    this.updateCodeWrapCollapseStates(), document.body.classList.remove("is-dragging"), this.updateSplits()
                }, t.prototype.handleModeRequirements = function(e) {
                    function t() {
                        p.modes[e].hasLoaded = !0, n.resolve()
                    }
                    var o = "lib/transpilers",
                        n = (0, v.deferred)();
                    return p.modes[e].hasLoaded ? (n.resolve(), n.promise) : (e === p.HtmlModes.JADE ? (0, h.loadJS)(o + "/jade.js").then(t) : e === p.HtmlModes.MARKDOWN ? (0, h.loadJS)(o + "/marked.js").then(t) : e === p.CssModes.LESS ? (0, h.loadJS)(o + "/less.min.js").then(t) : e === p.CssModes.SCSS || e === p.CssModes.SASS ? (0, h.loadJS)(o + "/sass.js").then(function() {
                        window.sass = new Sass(o + "/sass.worker.js"), t()
                    }) : e === p.CssModes.STYLUS ? (0, h.loadJS)(o + "/stylus.min.js").then(t) : e === p.CssModes.ACSS ? (0, h.loadJS)(o + "/atomizer.browser.js").then(t) : e === p.JsModes.COFFEESCRIPT ? (0, h.loadJS)(o + "/coffee-script.js").then(t) : e === p.JsModes.ES6 ? (0, h.loadJS)(o + "/babel.min.js").then(t) : e === p.JsModes.TS ? (0, h.loadJS)(o + "/typescript.js").then(t) : n.resolve(), n.promise)
                }, t.prototype.updateHtmlMode = function(e) {
                    return this.props.onCodeModeChange("html", e), this.props.currentItem.htmlMode = e, this.cm.html.setOption("mode", p.modes[e].cmMode), g.default.autoLoadMode(this.cm.html, p.modes[e].cmPath || p.modes[e].cmMode), this.handleModeRequirements(e)
                }, t.prototype.updateCssMode = function(e) {
                    return this.props.onCodeModeChange("css", e), this.props.currentItem.cssMode = e, this.cm.css.setOption("mode", p.modes[e].cmMode), this.cm.css.setOption("readOnly", p.modes[e].cmDisable), window.cssSettingsBtn.classList[p.modes[e].hasSettings ? "remove" : "add"]("hide"), g.default.autoLoadMode(this.cm.css, p.modes[e].cmPath || p.modes[e].cmMode), this.handleModeRequirements(e)
                }, t.prototype.updateJsMode = function(e) {
                    return this.props.onCodeModeChange("js", e), this.props.currentItem.jsMode = e, this.cm.js.setOption("mode", p.modes[e].cmMode), g.default.autoLoadMode(this.cm.js, p.modes[e].cmPath || p.modes[e].cmMode), this.handleModeRequirements(e)
                }, t.prototype.codeModeChangeHandler = function(t) {
                    var e = this,
                        o = t.target.value,
                        n = t.target.dataset.type,
                        s = this.props.currentItem["html" === n ? "htmlMode" : "css" === n ? "cssMode" : "jsMode"];
                    s !== o && ("html" === n ? this.updateHtmlMode(o).then(function() {
                        return e.setPreviewContent(!0)
                    }) : "js" === n ? this.updateJsMode(o).then(function() {
                        return e.setPreviewContent(!0)
                    }) : "css" === n && this.updateCssMode(o).then(function() {
                        return e.setPreviewContent(!0)
                    }), (0, m.trackEvent)("ui", "updateCodeMode", o))
                }, t.prototype.detachPreview = function() {
                    var e = this;
                    if (this.detachedWindow) return void this.detachedWindow.focus();
                    var t = this.frame.getBoundingClientRect(),
                        o = t.width,
                        n = t.height;
                    document.body.classList.add("is-detached-mode"), window.globalConsoleContainerEl.insertBefore(window.consoleEl, null), this.detachedWindow = window.open("./preview.html", "Web Maker", "width=" + o + ",height=" + n + ",resizable,scrollbars=yes,status=1"), setTimeout(function() {
                        e.setPreviewContent(!0)
                    }, 1500);
                    var s = window.setInterval(function() {
                        e.detachedWindow && e.detachedWindow.closed && (clearInterval(s), document.body.classList.remove("is-detached-mode"), $("#js-demo-side").insertBefore(window.consoleEl, null), e.detachedWindow = null, e.setPreviewContent(!0))
                    }, 500)
                }, t.prototype.onMessageFromConsole = function() {
                    var e = this;
                    [].concat(Array.prototype.slice.call(arguments)).forEach(function(t) {
                        t && t.indexOf && -1 !== t.indexOf("filesystem:chrome-extension") && (t = t.replace(/filesystem:chrome-extension.*\.js:(\d+):*(\d*)/g, "script $1:$2"));
                        try {
                            e.consoleCm.replaceRange(t + " " + ((t + "").match(/\[object \w+]/) ? JSON.stringify(t) : "") + "\n", {
                                line: Infinity
                            })
                        } catch (t) {
                            e.consoleCm.replaceRange("\uD83C\uDF00\n", {
                                line: Infinity
                            })
                        }
                        e.consoleCm.scrollTo(0, Infinity), e.logCount++
                    }), logCountEl.textContent = this.logCount
                }, t.prototype.previewException = function(e) {
                    console.error("Possible infinite loop detected.", e.stack), this.onMessageFromConsole("Possible infinite loop detected.", e.stack)
                }, t.prototype.toggleConsole = function() {
                    this.setState({
                        isConsoleOpen: !this.state.isConsoleOpen
                    }), (0, m.trackEvent)("ui", "consoleToggle")
                }, t.prototype.consoleHeaderDblClickHandler = function(t) {
                    t.target.classList.contains("js-console__header") && ((0, m.trackEvent)("ui", "consoleToggleDblClick"), this.toggleConsole())
                }, t.prototype.clearConsole = function() {
                    this.consoleCm.setValue(""), this.logCount = 0, window.logCountEl.textContent = this.logCount
                }, t.prototype.clearConsoleBtnClickHandler = function() {
                    this.clearConsole(), (0, m.trackEvent)("ui", "consoleClearBtnClick")
                }, t.prototype.evalConsoleExpr = function(t) {
                    (76 === t.which || 12 === t.which) && t.ctrlKey ? (this.clearConsole(), (0, m.trackEvent)("ui", "consoleClearKeyboardShortcut")) : 13 === t.which && (this.onMessageFromConsole("> " + t.target.value), this.frame.contentWindow._wmEvaluate(t.target.value), t.target.value = "", (0, m.trackEvent)("fn", "evalConsoleExpr"))
                }, t.prototype.cssSettingsBtnClickHandler = function() {
                    this.setState({
                        isCssSettingsModalOpen: !0
                    }), (0, m.trackEvent)("ui", "cssSettingsBtnClick")
                }, t.prototype.cssSettingsChangeHandler = function(e) {
                    this.props.onCodeSettingsChange("css", e), this.setPreviewContent(!0)
                }, t.prototype.getDemoFrame = function(e) {
                    e(this.frame)
                }, t.prototype.editorFocusHandler = function(e) {
                    this.props.onEditorFocus(e)
                }, t.prototype.render = function() {
                    var e = this;
                    return (0, r.h)(u.SplitPane, {
                        class: "content-wrap  flex  flex-grow",
                        sizes: this.state.mainSplitSizes,
                        minSize: 150,
                        style: "",
                        direction: 2 === this.props.currentLayoutMode ? "vertical" : "horizontal",
                        onDragEnd: this.mainSplitDragEndHandler.bind(this)
                    }, (0, r.h)(u.SplitPane, {
                        class: "code-side",
                        id: "js-code-side",
                        sizes: this.state.codeSplitSizes,
                        minSize: S,
                        direction: 2 === this.props.currentLayoutMode || 5 === this.props.currentLayoutMode ? "horizontal" : "vertical",
                        onDragStart: this.codeSplitDragStart.bind(this),
                        onDragEnd: this.codeSplitDragEnd.bind(this),
                        onSplit: function(t) {
                            return e.codeSplitInstance = t
                        }
                    }, (0, r.h)("div", {
                        "data-code-wrap-id": "0",
                        id: "htmlCodeEl",
                        "data-type": "html",
                        class: "code-wrap",
                        onTransitionEnd: this.updateCodeWrapCollapseStates.bind(this)
                    }, (0, r.h)("div", {
                        class: "js-code-wrap__header  code-wrap__header",
                        title: "Double click to toggle code pane",
                        onDblClick: this.codeWrapHeaderDblClickHandler.bind(this)
                    }, (0, r.h)("label", {
                        class: "btn-group",
                        dropdow: !0,
                        title: "Click to change"
                    }, (0, r.h)("span", {
                        class: "code-wrap__header-label"
                    }, p.modes[this.props.currentItem.htmlMode || "html"].label), w, (0, r.h)("select", {
                        "data-type": "html",
                        class: "js-mode-select  hidden-select",
                        onChange: this.codeModeChangeHandler.bind(this),
                        value: this.props.currentItem.htmlMode
                    }, M, _, x)), (0, r.h)("div", {
                        class: "code-wrap__header-right-options"
                    }, (0, r.h)("a", {
                        class: "js-code-collapse-btn  code-wrap__header-btn  code-wrap__collapse-btn",
                        title: "Toggle code pane",
                        onClick: this.collapseBtnHandler.bind(this)
                    }))), (0, r.h)(d.default, {
                        options: {
                            mode: "htmlmixed",
                            profile: "xhtml",
                            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                            noAutocomplete: !0,
                            matchTags: {
                                bothTags: !0
                            },
                            emmet: !0
                        },
                        prefs: this.props.prefs,
                        onChange: this.onHtmlCodeChange.bind(this),
                        onCreation: function(t) {
                            return e.cm.html = t
                        },
                        onFocus: this.editorFocusHandler.bind(this)
                    })), (0, r.h)("div", {
                        "data-code-wrap-id": "1",
                        id: "cssCodeEl",
                        "data-type": "css",
                        class: "code-wrap",
                        onTransitionEnd: this.updateCodeWrapCollapseStates.bind(this)
                    }, (0, r.h)("div", {
                        class: "js-code-wrap__header  code-wrap__header",
                        title: "Double click to toggle code pane",
                        onDblClick: this.codeWrapHeaderDblClickHandler.bind(this)
                    }, (0, r.h)("label", {
                        class: "btn-group",
                        title: "Click to change"
                    }, (0, r.h)("span", {
                        class: "code-wrap__header-label"
                    }, p.modes[this.props.currentItem.cssMode || "css"].label), H, (0, r.h)("select", {
                        "data-type": "css",
                        class: "js-mode-select  hidden-select",
                        onChange: this.codeModeChangeHandler.bind(this),
                        value: this.props.currentItem.cssMode
                    }, I, L, j, E, B, A)), (0, r.h)("div", {
                        class: "code-wrap__header-right-options"
                    }, (0, r.h)("a", {
                        href: "#",
                        id: "cssSettingsBtn",
                        title: "Atomic CSS configuration",
                        onClick: this.cssSettingsBtnClickHandler.bind(this),
                        class: "code-wrap__header-btn hide"
                    }, O), (0, r.h)("a", {
                        class: "js-code-collapse-btn  code-wrap__header-btn  code-wrap__collapse-btn",
                        title: "Toggle code pane",
                        onClick: this.collapseBtnHandler.bind(this)
                    }))), (0, r.h)(d.default, {
                        options: {
                            mode: "css",
                            gutters: ["error-gutter", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                            emmet: !0
                        },
                        prefs: this.props.prefs,
                        onChange: this.onCssCodeChange.bind(this),
                        onCreation: function(t) {
                            return e.cm.css = t
                        },
                        onFocus: this.editorFocusHandler.bind(this)
                    })), (0, r.h)("div", {
                        "data-code-wrap-id": "2",
                        id: "jsCodeEl",
                        "data-type": "js",
                        class: "code-wrap",
                        onTransitionEnd: this.updateCodeWrapCollapseStates.bind(this)
                    }, (0, r.h)("div", {
                        class: "js-code-wrap__header  code-wrap__header",
                        title: "Double click to toggle code pane",
                        onDblClick: this.codeWrapHeaderDblClickHandler.bind(this)
                    }, (0, r.h)("label", {
                        class: "btn-group",
                        title: "Click to change"
                    }, (0, r.h)("span", {
                        class: "code-wrap__header-label"
                    }, p.modes[this.props.currentItem.jsMode || "js"].label), T, (0, r.h)("select", {
                        "data-type": "js",
                        class: "js-mode-select  hidden-select",
                        onChange: this.codeModeChangeHandler.bind(this),
                        value: this.props.currentItem.jsMode
                    }, P, D, V, F)), (0, r.h)("div", {
                        class: "code-wrap__header-right-options"
                    }, (0, r.h)("a", {
                        class: "js-code-collapse-btn  code-wrap__header-btn  code-wrap__collapse-btn",
                        title: "Toggle code pane",
                        onClick: this.collapseBtnHandler.bind(this)
                    }))), (0, r.h)(d.default, {
                        options: {
                            mode: "javascript",
                            gutters: ["error-gutter", "CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                        },
                        prefs: this.props.prefs,
                        autoComplete: this.props.prefs.autoComplete,
                        onChange: this.onJsCodeChange.bind(this),
                        onCreation: function(t) {
                            return e.cm.js = t
                        },
                        onFocus: this.editorFocusHandler.bind(this)
                    }))), (0, r.h)("div", {
                        class: "demo-side",
                        id: "js-demo-side",
                        style: ""
                    }, (0, r.h)("iframe", {
                        ref: function(t) {
                            return e.frame = t
                        },
                        src: "about://blank",
                        frameborder: "0",
                        id: "demo-frame",
                        allowfullscreen: !0
                    }), (0, r.h)("div", {
                        id: "consoleEl",
                        class: "console " + (this.state.isConsoleOpen ? "" : "is-minimized")
                    }, (0, r.h)("div", {
                        id: "consoleLogEl",
                        class: "console__log"
                    }, (0, r.h)("div", {
                        class: "js-console__header  code-wrap__header",
                        title: "Double click to toggle console",
                        onDblClick: this.consoleHeaderDblClickHandler.bind(this)
                    }, z, (0, r.h)("div", {
                        class: "code-wrap__header-right-options"
                    }, (0, r.h)("a", {
                        class: "code-wrap__header-btn",
                        title: "Clear console (CTRL + L)",
                        onClick: this.clearConsoleBtnClickHandler.bind(this)
                    }, N), (0, r.h)("a", {
                        class: "code-wrap__header-btn  code-wrap__collapse-btn",
                        title: "Toggle console",
                        onClick: this.toggleConsole.bind(this)
                    }))), (0, r.h)(y.default, {
                        options: {
                            mode: "javascript",
                            lineWrapping: !0,
                            theme: "monokai",
                            foldGutter: !0,
                            readOnly: !0,
                            gutters: ["CodeMirror-foldgutter"]
                        },
                        onCreation: function(t) {
                            return e.consoleCm = t
                        }
                    })), (0, r.h)("div", {
                        id: "consolePromptEl",
                        class: "console__prompt flex flex-v-center"
                    }, W, (0, r.h)("input", {
                        tabIndex: this.state.isConsoleOpen ? 0 : -1,
                        onKeyUp: this.evalConsoleExpr.bind(this),
                        class: "console-exec-input"
                    }))), (0, r.h)(k.default, {
                        show: this.state.isCssSettingsModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isCssSettingsModalOpen: !1
                            })
                        },
                        onChange: this.cssSettingsChangeHandler.bind(this),
                        settings: this.props.currentItem.cssSettings,
                        editorTheme: this.props.prefs.editorTheme
                    })))
                }, t
            }(r.Component);
        t.default = U
    },
    "9VU0": function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.LibraryAutoSuggest = void 0;
        var i = function() {
                function e(e, t) {
                    for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function(t, o, n) {
                    return o && e(t.prototype, o), n && e(t, n), t
                }
            }(),
            r = o("KM04"),
            l = o("qV3Q"),
            d = t.LibraryAutoSuggest = function(e) {
                function t() {
                    return n(this, t), s(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    var t = this;
                    this.t = this.wrap.querySelector("input,textarea"), this.filter = this.props.filter, this.selectedCallback = this.props.onSelect, setTimeout(function() {
                        requestIdleCallback(function() {
                            document.body.appendChild(t.list), t.list.style.position = "fixed"
                        })
                    }, 100), this.t.addEventListener("input", function(o) {
                        return t.onInput(o)
                    }), this.t.addEventListener("keydown", function(o) {
                        return t.onKeyDown(o)
                    }), this.t.addEventListener("blur", function(o) {
                        return t.closeSuggestions(o)
                    }), this.list.addEventListener("mousedown", function(o) {
                        return t.onListMouseDown(o)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    var t = this;
                    this.t.removeEventListener("input", function(o) {
                        return t.onInput(o)
                    }), this.t.removeEventListener("keydown", function(o) {
                        return t.onKeyDown(o)
                    }), this.t.removeEventListener("blur", function(o) {
                        return t.closeSuggestions(o)
                    }), this.list.removeEventListener("mousedown", function(o) {
                        return t.onListMouseDown(o)
                    })
                }, t.prototype.closeSuggestions = function() {
                    this.list.classList.remove("is-open"), this.isShowingSuggestions = !1
                }, t.prototype.getList = function(e) {
                    return fetch("https://api.cdnjs.com/libraries?search=" + e).then(function(e) {
                        return e.json().then(function(e) {
                            return e.results
                        })
                    })
                }, t.prototype.replaceCurrentLine = function(e) {
                    var t = this.t.value.split("\n");
                    t.splice(this.currentLineNumber - 1, 1, e), this.t.value = t.join("\n")
                }, t.prototype.onInput = function() {
                    var e = this,
                        t = this.currentLine;
                    if (t) {
                        if (-1 !== t.indexOf("/") || t.match(/https*:\/\//)) return;
                        clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                            e.loader.style.display = "block", e.getList(t).then(function(t) {
                                if (e.loader.style.display = "none", !t.length) return void e.closeSuggestions();
                                e.list.innerHTML = "", e.filter && (t = t.filter(e.filter));
                                for (var o = 0; o < Math.min(t.length, 10); o++) e.list.innerHTML += "<li data-url=\"" + t[o].latest + "\"><a>" + t[o].name + "</a></li>";
                                e.isShowingSuggestions = !0, e.textareaBounds || (e.textareaBounds = e.t.getBoundingClientRect(), e.list.style.top = e.textareaBounds.bottom + "px", e.list.style.left = e.textareaBounds.left + "px", e.list.style.width = e.textareaBounds.width + "px"), e.list.classList.add("is-open")
                            })
                        }, 500)
                    }
                }, t.prototype.onKeyDown = function(e) {
                    var t;
                    this.isShowingSuggestions && (27 === e.keyCode && (this.closeSuggestions(), e.stopPropagation()), 40 === e.keyCode && this.isShowingSuggestions ? (t = this.list.querySelector(".selected"), t ? (t.classList.remove("selected"), t.nextElementSibling.classList.add("selected")) : this.list.querySelector("li:first-child").classList.add("selected"), this.list.querySelector(".selected").scrollIntoView(!1), e.preventDefault()) : 38 === e.keyCode && this.isShowingSuggestions ? (t = this.list.querySelector(".selected"), t ? (t.classList.remove("selected"), t.previousElementSibling.classList.add("selected")) : this.list.querySelector("li:first-child").classList.add("selected"), this.list.querySelector(".selected").scrollIntoView(!1), e.preventDefault()) : 13 === e.keyCode && this.isShowingSuggestions && (t = this.list.querySelector(".selected"), this.selectSuggestion(t.dataset.url), this.closeSuggestions()))
                }, t.prototype.onListMouseDown = function(e) {
                    var t = e.target;
                    t.parentElement.dataset.url && this.selectSuggestion(t.parentElement.dataset.url)
                }, t.prototype.selectSuggestion = function(e) {
                    this.t.focus(), (0, l.trackEvent)("ui", "autoSuggestionLibSelected", e), this.selectedCallback ? this.selectedCallback.call(null, e) : this.replaceCurrentLine(e), this.closeSuggestions()
                }, t.prototype.render = function() {
                    var e = this;
                    return (0, r.h)("div", {
                        class: "btn-group " + (this.props.fullWidth ? "flex-grow" : ""),
                        ref: function(t) {
                            return e.wrap = t
                        }
                    }, this.props.children, (0, r.h)("ul", {
                        ref: function(t) {
                            return e.list = t
                        },
                        class: "dropdown__menu autocomplete-dropdown"
                    }), (0, r.h)("div", {
                        ref: function(t) {
                            return e.loader = t
                        },
                        class: "loader autocomplete__loader",
                        style: "display:none"
                    }))
                }, i(t, [{
                    key: "currentLineNumber",
                    get: function() {
                        return this.t.value.substr(0, this.t.selectionStart).split("\n").length
                    }
                }, {
                    key: "currentLine",
                    get: function() {
                        var e = this.currentLineNumber;
                        return this.t.value.split("\n")[e - 1]
                    }
                }]), t
            }(r.Component)
    },
    BcU7: function(e, t, o) {
        "use strict";

        function n(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, o) {
                    function n(s, a) {
                        try {
                            var i = t[s](a),
                                r = i.value
                        } catch (e) {
                            return void o(e)
                        }
                        return i.done ? void e(r) : Promise.resolve(r).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        })
                    }
                    return n("next")
                })
            }
        }
        var s = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        };
        o("uXt8");
        var a = o("ZUoI"),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a);
        o("7vHL");
        var r = o("3Z4F"),
            l = o("qV3Q"),
            d = o("6Ptt");
        (function() {
            var e, t, o = function() {
                    var o = n(function*() {
                        return t ? t : ((0, d.log)("Initializing firestore"), t = new Promise(function(t, o) {
                            return e ? t(e) : i.default.firestore().enablePersistence().then(function() {
                                e = i.default.firestore(), (0, d.log)("firebase db ready", e), t(e)
                            }).catch(function(e) {
                                o(e.code), "failed-precondition" === e.code ? (alert("Opening Web Maker web app in multiple tabs isn't supported at present and it seems like you already have it opened in another tab. Please use in one tab."), (0, l.trackEvent)("fn", "multiTabError")) : "unimplemented" === e.code
                            })
                        }), t)
                    });
                    return function() {
                        return o.apply(this, arguments)
                    }
                }(),
                a = function() {
                    var e = n(function*() {
                        var e = (0, r.deferred)();
                        return f.get({
                            lastSeenVersion: ""
                        }, function(t) {
                            e.resolve(t.lastSeenVersion)
                        }), e.promise
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = n(function*(e) {
                        if (f.set({
                                lastSeenVersion: e
                            }, function() {}), window.user) {
                            var t = yield o();
                            t.doc("users/" + window.user.uid).update({
                                lastSeenVersion: e
                            })
                        }
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = n(function*(e) {
                        var t = yield o();
                        return t.doc("users/" + e).get().then(function(o) {
                            if (!o.exists) return t.doc("users/" + e).set({}, {
                                merge: !0
                            });
                            var n = o.data();
                            return s(window.user, n), n
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                h = 1,
                u = {
                    get: function(e, t) {
                        var o = {};
                        "string" == typeof e ? (o[e] = JSON.parse(window.localStorage.getItem(e)), setTimeout(function() {
                            return t(o)
                        }, h)) : (Object.keys(e).forEach(function(t) {
                            var n = window.localStorage.getItem(t);
                            o[t] = void 0 === n || null === n ? e[t] : JSON.parse(n)
                        }), setTimeout(function() {
                            return t(o)
                        }, h))
                    },
                    set: function(e, t) {
                        Object.keys(e).forEach(function(t) {
                            window.localStorage.setItem(t, JSON.stringify(e[t]))
                        }), setTimeout(function() {
                            if (t) return t()
                        }, h)
                    },
                    remove: function(e, t) {
                        window.localStorage.removeItem(e), setTimeout(function() {
                            return t()
                        }, h)
                    }
                },
                m = chrome && chrome.storage ? chrome.storage.local : u,
                f = chrome && chrome.storage ? chrome.storage.sync : u;
            window.db = {
                getDb: o,
                getUser: p,
                getUserLastSeenVersion: a,
                setUserLastSeenVersion: c,
                getSettings: function(e) {
                    var t = (0, r.deferred)();
                    return f.get(e, function(e) {
                        t.resolve(e)
                    }), t.promise
                },
                local: m,
                sync: f
            }
        })()
    },
    CIHI: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var i = o("KM04"),
            r = o("c/up"),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        o("qqFR");
        var d = function(e) {
            function t() {
                return n(this, t), s(this, e.apply(this, arguments))
            }
            return a(t, e), t.prototype.componentDidMount = function() {
                this.initEditor()
            }, t.prototype.shouldComponentUpdate = function() {
                return !1
            }, t.prototype.initEditor = function() {
                this.cm = l.default.fromTextArea(this.textarea, this.props.options), this.props.onChange && this.cm.on("change", this.props.onChange), this.props.onBlur && this.cm.on("blur", this.props.onBlur), this.props.onCreation(this.cm)
            }, t.prototype.render = function() {
                var e = this;
                return (0, i.h)("textarea", {
                    ref: function(t) {
                        return e.textarea = t
                    },
                    name: "",
                    id: "",
                    cols: "30",
                    rows: "10"
                })
            }, t
        }(i.Component);
        t.default = d
    },
    CbJP: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.Alerts = void 0;
        var i = o("KM04"),
            r = (0, i.h)("div", {
                class: "alerts-container",
                id: "js-alerts-container"
            }),
            l = t.Alerts = function(e) {
                function t() {
                    return n(this, t), s(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function() {
                    return !1
                }, t.prototype.render = function() {
                    return r
                }, t
            }(i.Component)
    },
    E5zE: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.computeHtml = function(e, t) {
            var o = e,
                s = (0, n.deferred)();
            return t === a.HtmlModes.HTML ? s.resolve({
                code: o
            }) : t === a.HtmlModes.MARKDOWN ? s.resolve(window.marked ? {
                code: marked(o)
            } : {
                code: o
            }) : t === a.HtmlModes.JADE && s.resolve(window.jade ? {
                code: jade.render(o)
            } : {
                code: o
            }), s.promise
        }, t.computeCss = function(e, t, o) {
            var s, i = e,
                r = (0, n.deferred)();
            if (t === a.CssModes.CSS) r.resolve({
                code: i
            });
            else if (t === a.CssModes.SCSS || t === a.CssModes.SASS) window.sass && i ? window.sass.compile(i, {
                indentedSyntax: t === a.CssModes.SASS
            }, function(e) {
                e.line && e.message && (s = {
                    lang: "css",
                    data: [{
                        lineNumber: e.line - 1,
                        message: e.message
                    }]
                }), r.resolve({
                    code: e.text,
                    errors: s
                })
            }) : r.resolve({
                code: i
            });
            else if (t === a.CssModes.LESS) less.render(i).then(function(e) {
                r.resolve({
                    code: e.css
                })
            }, function(e) {
                s = {
                    lang: "css",
                    data: [{
                        lineNumber: e.line,
                        message: e.message
                    }]
                }, r.resolve({
                    code: "",
                    errors: s
                })
            });
            else if (t === a.CssModes.STYLUS) stylus(i).render(function(e, t) {
                if (e) {
                    window.err = e;
                    var o = e.message.split("\n");
                    o.pop(), s = {
                        lang: "css",
                        data: [{
                            lineNumber: +e.message.match(/stylus:(\d+):/)[1] - 298,
                            message: o.pop()
                        }]
                    }
                }
                r.resolve({
                    code: t,
                    errors: s
                })
            });
            else if (t === a.CssModes.ACSS)
                if (!window.atomizer) r.resolve({
                    code: ""
                });
                else {
                    var l, d = atomizer.findClassNames(i);
                    try {
                        l = atomizer.getConfig(d, JSON.parse(o.acssConfig))
                    } catch (t) {
                        l = atomizer.getConfig(d, {})
                    }
                    var c = atomizer.getCss(l);
                    r.resolve({
                        code: c
                    })
                }
            return r.promise
        }, t.computeJs = function(e, t, o, r) {
            var l, c = e,
                p = (0, n.deferred)();
            if (!c) return p.resolve(""), p.promise;
            if (t === a.JsModes.JS) try {
                i.parse(c, {
                    tolerant: !0
                })
            } catch (t) {
                l = {
                    lang: "js",
                    data: [{
                        lineNumber: t.lineNumber - 1,
                        message: t.description
                    }]
                }
            } finally {
                !1 !== o && (c = l ? c : (0, s.addInfiniteLoopProtection)(c, {
                    timeout: r
                })), p.resolve({
                    code: c,
                    errors: l
                })
            } else if (t === a.JsModes.COFFEESCRIPT) {
                if (!window.CoffeeScript) return p.resolve(""), p.promise;
                try {
                    c = CoffeeScript.compile(c, {
                        bare: !0
                    })
                } catch (t) {
                    l = {
                        lang: "js",
                        data: [{
                            lineNumber: t.location.first_line,
                            message: t.message
                        }]
                    }
                } finally {
                    !1 !== o && (c = l ? c : (0, s.addInfiniteLoopProtection)(c, {
                        timeout: r
                    })), p.resolve({
                        code: c,
                        errors: l
                    })
                }
            } else if (t === a.JsModes.ES6) {
                if (!window.Babel) return p.resolve(""), p.promise;
                try {
                    i.parse(c, {
                        tolerant: !0,
                        jsx: !0
                    })
                } catch (t) {
                    l = {
                        lang: "js",
                        data: [{
                            lineNumber: t.lineNumber - 1,
                            message: t.description
                        }]
                    }
                } finally {
                    c = Babel.transform(c, {
                        presets: ["latest", "stage-2", "react"]
                    }).code, !1 !== o && (c = l ? c : (0, s.addInfiniteLoopProtection)(c, {
                        timeout: r
                    })), p.resolve({
                        code: c,
                        errors: l
                    })
                }
            } else if (t === a.JsModes.TS) try {
                if (!window.ts) return p.resolve({
                    code: ""
                }), p.promise;
                c = ts.transpileModule(c, {
                    reportDiagnostics: !0,
                    compilerOptions: {
                        noEmitOnError: !0,
                        diagnostics: !0,
                        module: ts.ModuleKind.ES2015
                    }
                }), c.diagnostics.length && (l = {
                    lang: "js",
                    data: [{
                        message: c.diagnostics[0].messageText,
                        lineNumber: ts.getLineOfLocalPosition(c.diagnostics[0].file, c.diagnostics[0].start) - 1
                    }]
                }), c = c.outputText, !1 === o || l || (c = (0, s.addInfiniteLoopProtection)(c, {
                    timeout: r
                })), p.resolve({
                    code: c,
                    errors: l
                })
            } catch (t) {}
            return p.promise
        };
        var n = o("3Z4F"),
            s = o("6Ptt"),
            a = o("y5h4"),
            i = o("4E2n")
    },
    IaNL: function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var r = o("KM04"),
            l = o("c/up"),
            d = n(l);
        o("uQIK"), o("xdvC"), o("pTe4"), o("BVSg"), o("X7my"), o("H+g/"), o("tMLt"), o("1JcR"), o("5gBI"), o("bU21"), o("zs1I"), o("rbVD"), o("6r0S"), o("LiPu"), o("IYZm"), o("SUmx"), o("gPKv"), o("29F7"), o("Jo/m"), o("4e7A"), o("ew/s"), o("HeB0"), o("ggoL"), o("qqFR"), o("AIXc"), o("Xc2M"), o("yLr7"), o("AhD2");
        var c = o("/QFk"),
            p = n(c);
        (0, p.default)(d.default);
        var h = function(e) {
            function t() {
                return s(this, t), a(this, e.apply(this, arguments))
            }
            return i(t, e), t.prototype.componentDidMount = function() {
                this.initEditor()
            }, t.prototype.shouldComponentUpdate = function() {
                return !1
            }, t.prototype.initEditor = function() {
                var e = this,
                    t = this.props.options;
                this.cm = d.default.fromTextArea(this.textarea, {
                    mode: t.mode,
                    lineNumbers: !0,
                    lineWrapping: !0,
                    autofocus: t.autofocus || !1,
                    autoCloseBrackets: !0,
                    autoCloseTags: !0,
                    matchBrackets: !0,
                    matchTags: t.matchTags || !1,
                    tabMode: "indent",
                    keyMap: "sublime",
                    theme: "monokai",
                    lint: !!t.lint,
                    tabSize: 2,
                    foldGutter: !0,
                    styleActiveLine: !0,
                    gutters: t.gutters || [],
                    profile: t.profile || "",
                    extraKeys: {
                        Up: function(e) {
                            d.default.commands.goLineUp(e)
                        },
                        Down: function(e) {
                            d.default.commands.goLineDown(e)
                        },
                        "Shift-Tab": function(e) {
                            d.default.commands.indentAuto(e)
                        },
                        Tab: function(e) {
                            if (t.emmet) {
                                var o = e.execCommand("emmetExpandAbbreviation");
                                if (!0 === o) return
                            }
                            var n = $("[data-setting=indentWith]:checked");
                            e.somethingSelected() || n && "spaces" !== n.value ? d.default.commands.defaultTab(e) : d.default.commands.insertSoftTab(e)
                        },
                        Enter: "emmetInsertLineBreak"
                    }
                }), this.cm.on("focus", function(t) {
                    "function" == typeof e.props.onFocus && e.props.onFocus(t)
                }), this.cm.on("change", this.props.onChange), this.cm.addKeyMap({
                    "Ctrl-Space": "autocomplete"
                }), t.noAutocomplete || this.cm.on("inputRead", function(t, o) {
                    e.props.prefs.autoComplete && "+input" === o.origin && ";" !== o.text[0] && "," !== o.text[0] && " " !== o.text[0] && d.default.commands.autocomplete(e.cm, null, {
                        completeSingle: !1
                    })
                }), this.props.onCreation(this.cm)
            }, t.prototype.render = function() {
                var e = this;
                return (0, r.h)("textarea", {
                    ref: function(t) {
                        return e.textarea = t
                    },
                    name: "",
                    id: "",
                    cols: "30",
                    rows: "10"
                })
            }, t
        }(r.Component);
        t.default = h
    },
    JkW7: function(e, t, o) {
        "use strict";
        t.__esModule = !0;
        var n = o("uv7j"),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n);
        t.default = s.default
    },
    MXol: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var i = o("KM04"),
            r = o("f66c"),
            l = (0, i.h)("img", {
                src: "assets/js13kgames.png",
                alt: "JS13K Games logo",
                height: "24"
            }),
            d = function(e) {
                function t(o) {
                    n(this, t);
                    var a, i = s(this, e.call(this, o)),
                        r = new Date("August 13 2018 11:00 GMT"),
                        l = new Date;
                    return +r > +l && (a = Math.floor((r - l) / 1e3 / 3600 / 24)), i.setState({
                        daysLeft: a
                    }), i
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.codeSize ? (this.props.codeSize / 1024).toFixed(2) : 0;
                    return (0, i.h)("div", {
                        role: "button",
                        class: "flex flex-v-center",
                        tabIndex: "0",
                        onClick: this.props.onClick,
                        onBlur: this.props.onBlur
                    }, l, " ", (0, i.h)("div", {
                        class: "footer__js13k-days-left"
                    }, this.state.daysLeft, " days to go"), (0, i.h)("div", {
                        class: "footer__js13k-code-size",
                        style: {
                            color: 10 < e ? "crimson" : "limegreen"
                        }
                    }, e, " KB/ 13KB"), (0, i.h)("span", {
                        class: "caret",
                        style: "transition:0.3s ease; transform-origin: center 2px; " + (this.props.isOpen ? "transform:rotate(180deg);" : "")
                    }))
                }, t
            }(i.Component),
            c = (0, i.h)("a", {
                href: "https://webmakerapp.com/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, (0, i.h)("div", {
                class: "logo"
            })),
            p = (0, i.h)("span", {
                class: "web-maker-with-tag"
            }, "Web Maker"),
            h = (0, i.h)("svg", {
                style: "width:20px; height:20px; vertical-align:text-bottom",
                viewBox: "0 0 24 24"
            }, (0, i.h)("path", {
                d: "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
            })),
            u = (0, i.h)("use", {
                xlinkHref: "#keyboard-icon"
            }),
            m = (0, i.h)("use", {
                xlinkHref: "#twitter-icon"
            }),
            f = (0, i.h)("svg", {
                viewBox: "0 0 24 24"
            }, (0, i.h)("path", {
                d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
            })),
            g = (0, i.h)("svg", {
                style: "display: none;",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, i.h)("symbol", {
                id: "codepen-logo",
                viewBox: "0 0 120 120"
            }, (0, i.h)("path", {
                class: "outer-ring",
                d: "M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z"
            }), (0, i.h)("path", {
                class: "inner-box",
                d: "M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z"
            }))),
            b = (0, i.h)("svg", null, (0, i.h)("use", {
                xlinkHref: "#codepen-logo"
            })),
            y = (0, i.h)("svg", {
                style: "width:24px;height:24px",
                viewBox: "0 0 24 24"
            }, (0, i.h)("path", {
                d: "M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
            })),
            v = (0, i.h)("div", {
                class: "footer__separator hide-on-mobile"
            }),
            C = (0, i.h)("svg", {
                viewBox: "0 0 100 100",
                style: "transform:rotate(-90deg)"
            }, (0, i.h)("use", {
                xlinkHref: "#mode-icon"
            })),
            k = (0, i.h)("svg", {
                viewBox: "0 0 100 100"
            }, (0, i.h)("use", {
                xlinkHref: "#mode-icon"
            })),
            S = (0, i.h)("svg", {
                viewBox: "0 0 100 100",
                style: "transform:rotate(90deg)"
            }, (0, i.h)("use", {
                xlinkHref: "#mode-icon"
            })),
            w = (0, i.h)("svg", {
                viewBox: "0 0 100 100"
            }, (0, i.h)("use", {
                xlinkHref: "#vertical-mode-icon"
            })),
            M = (0, i.h)("svg", {
                viewBox: "0 0 100 100"
            }, (0, i.h)("rect", {
                x: "0",
                y: "0",
                width: "100",
                height: "100"
            })),
            _ = (0, i.h)("svg", {
                viewBox: "0 0 24 24"
            }, (0, i.h)("path", {
                d: "M22,17V7H6V17H22M22,5A2,2 0 0,1 24,7V17C24,18.11 23.1,19 22,19H16V21H18V23H10V21H12V19H6C4.89,19 4,18.11 4,17V7A2,2 0 0,1 6,5H22M2,3V15H0V3A2,2 0 0,1 2,1H20V3H2Z"
            })),
            x = (0, i.h)("div", {
                class: "footer__separator"
            }),
            H = (0, i.h)("svg", {
                viewBox: "0 0 24 24"
            }, (0, i.h)("path", {
                d: "M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V16L21,19H3L6,16V10C6,7.03 8.16,4.56 11,4.08V3A1,1 0 0,1 12,2Z"
            })),
            I = (0, i.h)("span", {
                class: "notifications-btn__dot"
            }),
            L = (0, i.h)("svg", null, (0, i.h)("use", {
                xlinkHref: "#settings-icon"
            })),
            j = function(e) {
                function t(o) {
                    n(this, t);
                    var a = s(this, e.call(this, o));
                    return a.state = {
                        isKeyboardShortcutsModalOpen: !1,
                        isJs13kDropdownOpen: !1
                    }, a
                }
                return a(t, e), t.prototype.layoutBtnClickhandler = function(e) {
                    this.props.layoutBtnClickHandler(e)
                }, t.prototype.js13kClickHandler = function() {
                    this.setState({
                        isJs13kDropdownOpen: !this.state.isJs13kDropdownOpen
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return (0, i.h)("div", {
                        id: "footer",
                        class: "footer"
                    }, (0, i.h)("div", null, c, "\xA9", p, " \xA0\xA0", (0, i.h)(r.Button, {
                        onClick: this.props.helpBtnClickHandler,
                        "data-event-category": "ui",
                        "data-event-action": "helpButtonClick",
                        class: "footer__link  hint--rounded  hint--top-right",
                        "aria-label": "Help"
                    }, h), (0, i.h)(r.Button, {
                        onClick: this.props.keyboardShortcutsBtnClickHandler,
                        "data-event-category": "ui",
                        "data-event-action": "keyboardShortcutButtonClick",
                        class: "footer__link hint--rounded  hint--top-right hide-on-mobile",
                        "aria-label": "Keyboard shortcuts"
                    }, (0, i.h)("svg", {
                        style: {
                            width: "20px",
                            height: "20px",
                            verticalAlign: "text-bottom"
                        }
                    }, u)), (0, i.h)("a", {
                        class: "footer__link  hint--rounded  hint--top-right",
                        "aria-label": "Tweet about 'Web Maker'",
                        href: "http://twitter.com/share?url=https://webmakerapp.com/&text=Web Maker - A blazing fast %26 offline web playground! via @webmakerApp&related=webmakerApp&hashtags=web,frontend,playground,offline",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, (0, i.h)("svg", {
                        style: {
                            width: "20px",
                            height: "20px",
                            verticalAlign: "text-bottom"
                        }
                    }, m)), (0, i.h)(r.Button, {
                        onClick: this.props.supportDeveloperBtnClickHandler,
                        "data-event-category": "ui",
                        "data-event-action": "supportDeveloperFooterBtnClick",
                        class: "footer__link  ml-1  hint--rounded  hint--top-right hide-on-mobile support-link",
                        "aria-label": "Support the developer by pledging some amount"
                    }, "Donate")), this.props.prefs.isJs13kModeOn ? (0, i.h)("div", {
                        class: "flex flex-v-center"
                    }, (0, i.h)(d, {
                        isOpen: this.state.isJs13kDropdownOpen,
                        codeSize: this.props.codeSize,
                        onClick: this.js13kClickHandler.bind(this),
                        onBlur: function() {
                            return setTimeout(function() {
                                return e.setState({
                                    isJs13kDropdownOpen: !1
                                })
                            }, 300)
                        }
                    }), this.state.isJs13kDropdownOpen && (0, i.h)("div", {
                        className: "js13k__dropdown"
                    }, (0, i.h)("button", {
                        class: "btn",
                        style: {
                            width: "200px",
                            display: "block",
                            marginBottom: "16px"
                        },
                        onClick: this.props.onJs13KDownloadBtnClick
                    }, "Download game as zip"), (0, i.h)("a", {
                        class: "btn",
                        rel: "noopener",
                        style: {
                            width: "200px",
                            display: "block",
                            marginBottom: "16px"
                        },
                        href: "https://pasteboard.co/",
                        target: "_blank"
                    }, "Upload Image"), (0, i.h)("button", {
                        class: "btn",
                        style: {
                            width: "200px",
                            display: "block"
                        },
                        onClick: this.props.onJs13KHelpBtnClick
                    }, "Help"))) : null, (0, i.h)("div", {
                        class: "footer__right"
                    }, (0, i.h)("button", {
                        onClick: this.props.saveHtmlBtnClickHandler,
                        id: "saveHtmlBtn",
                        class: "mode-btn  hint--rounded  hint--top-left hide-on-mobile",
                        "aria-label": "Save as HTML file"
                    }, f), g, (0, i.h)("button", {
                        onClick: this.props.codepenBtnClickHandler,
                        id: "codepenBtn",
                        class: "mode-btn  hint--rounded  hint--top-left  hide-on-mobile",
                        "aria-label": "Edit on CodePen"
                    }, b), (0, i.h)("button", {
                        id: "screenshotBtn",
                        class: "mode-btn  hint--rounded  hint--top-left show-when-extension",
                        onClick: this.props.screenshotBtnClickHandler,
                        "aria-label": "Take screenshot of preview"
                    }, y), v, (0, i.h)("button", {
                        onClick: this.layoutBtnClickhandler.bind(this, 1),
                        id: "layoutBtn1",
                        class: "mode-btn hide-on-mobile",
                        "aria-label": "Switch to layout with preview on right"
                    }, C), (0, i.h)("button", {
                        onClick: this.layoutBtnClickhandler.bind(this, 2),
                        id: "layoutBtn2",
                        class: "mode-btn hide-on-mobile",
                        "aria-label": "Switch to layout with preview on bottom"
                    }, k), (0, i.h)("button", {
                        onClick: this.layoutBtnClickhandler.bind(this, 3),
                        id: "layoutBtn3",
                        class: "mode-btn hide-on-mobile",
                        "aria-label": "Switch to layout with preview on left"
                    }, S), (0, i.h)("button", {
                        onClick: this.layoutBtnClickhandler.bind(this, 5),
                        id: "layoutBtn5",
                        class: "mode-btn hide-on-mobile",
                        "aria-label": "Switch to layout with all vertical panes"
                    }, w), (0, i.h)("button", {
                        onClick: this.layoutBtnClickhandler.bind(this, 4),
                        id: "layoutBtn4",
                        class: "mode-btn hint--top-left hint--rounded  hide-on-mobile",
                        "aria-label": "Switch to full screen preview"
                    }, M), (0, i.h)("button", {
                        class: "mode-btn hint--top-left hint--rounded hide-on-mobile",
                        "aria-label": "Detach Preview",
                        onClick: this.props.detachedPreviewBtnHandler
                    }, _), x, (0, i.h)("button", {
                        onClick: this.props.notificationsBtnClickHandler,
                        id: "notificationsBtn",
                        class: "notifications-btn  mode-btn  hint--top-left  hint--rounded " + (this.props.hasUnseenChangelog ? "has-new" : ""),
                        "aria-label": "See Changelog"
                    }, H, I), (0, i.h)(r.Button, {
                        onClick: this.props.settingsBtnClickHandler,
                        "data-event-category": "ui",
                        "data-event-action": "settingsBtnClick",
                        class: "mode-btn  hint--top-left  hint--rounded",
                        "aria-label": "Settings"
                    }, L)))
                }, t
            }(i.Component);
        t.default = j
    },
    Mo6r: function(e, t) {
        "use strict";
        t.__esModule = !0;
        var o, n = t.alertsService = {
            add: function(e) {
                var t = $("#js-alerts-container");
                t.textContent = e, t.classList.add("is-active"), clearTimeout(o), o = setTimeout(function() {
                    t.classList.remove("is-active")
                }, 2e3)
            }
        };
        window.alertsService = n
    },
    Q8fL: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function i(e) {
            var t = e.title,
                o = e.label,
                n = e.onChange,
                s = e.pref,
                a = e.name,
                i = e.showWhenExtension;
            return (0, r.h)("label", {
                class: "line " + (i ? "show-when-extension" : "") + " ",
                title: t
            }, (0, r.h)("input", {
                type: "checkbox",
                checked: s,
                onChange: n,
                "data-setting": a
            }), " ", o)
        }
        t.__esModule = !0, t.default = void 0;
        var r = o("KM04"),
            l = o("kL0g"),
            d = (0, r.h)("h1", null, "Settings"),
            c = (0, r.h)("h3", null, "Indentation"),
            p = (0, r.h)("datalist", {
                id: "indentationSizeList"
            }, (0, r.h)("option", null, "1"), (0, r.h)("option", null, "2"), (0, r.h)("option", null, "3"), (0, r.h)("option", null, "4"), (0, r.h)("option", null, "5"), (0, r.h)("option", null, "6"), (0, r.h)("option", null, "7")),
            h = (0, r.h)("hr", null),
            u = (0, r.h)("h3", null, "Editor"),
            m = (0, r.h)("label", {
                class: "line"
            }, "Default Preprocessors"),
            f = (0, r.h)("option", {
                value: "html"
            }, "HTML"),
            g = (0, r.h)("option", {
                value: "markdown"
            }, "Markdown"),
            b = (0, r.h)("option", {
                value: "jade"
            }, "Pug"),
            y = (0, r.h)("option", {
                value: "css"
            }, "CSS"),
            v = (0, r.h)("option", {
                value: "scss"
            }, "SCSS"),
            C = (0, r.h)("option", {
                value: "sass"
            }, "SASS"),
            k = (0, r.h)("option", {
                value: "less"
            }, "LESS"),
            S = (0, r.h)("option", {
                value: "stylus"
            }, "Stylus"),
            w = (0, r.h)("option", {
                value: "acss"
            }, "Atomic CSS"),
            M = (0, r.h)("option", {
                value: "js"
            }, "JS"),
            _ = (0, r.h)("option", {
                value: "coffee"
            }, "CoffeeScript"),
            x = (0, r.h)("option", {
                value: "es6"
            }, "ES6 (Babel)"),
            H = (0, r.h)("option", {
                value: "typescript"
            }, "TypeScript"),
            I = (0, r.h)("option", {
                value: "FiraCode"
            }, "Fira Code"),
            L = (0, r.h)("option", {
                value: "Inconsolata"
            }, "Inconsolata"),
            j = (0, r.h)("option", {
                value: "Monoid"
            }, "Monoid"),
            E = (0, r.h)("option", {
                value: "FixedSys"
            }, "FixedSys"),
            B = (0, r.h)("option", {
                disabled: "disabled"
            }, "----"),
            A = (0, r.h)("option", {
                value: "other"
            }, "Other font from system"),
            O = (0, r.h)("hr", null),
            T = (0, r.h)("h3", null, "Fun"),
            P = (0, r.h)("hr", null),
            D = (0, r.h)("h3", null, "Advanced"),
            V = (0, r.h)("div", {
                class: "help-text"
            }, "If any loop iteration takes more than the defined time, it is detected as a potential infinite loop and further iterations are stopped."),
            F = function(e) {
                function t() {
                    return n(this, t), s(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.updateSetting = function(t) {
                    this.props.onChange(t)
                }, t.prototype.shouldComponentUpdate = function() {
                    return !0
                }, t.prototype.render = function() {
                    return (0, r.h)("div", null, d, c, (0, r.h)("div", {
                        class: "line",
                        title: "I know this is tough, but you have to decide one!"
                    }, (0, r.h)("label", null, (0, r.h)("input", {
                        type: "radio",
                        name: "indentation",
                        value: "spaces",
                        checked: "spaces" === this.props.prefs.indentation,
                        onChange: this.updateSetting.bind(this),
                        "data-setting": "indentWith"
                    }), " ", "Spaces"), (0, r.h)("label", {
                        class: "ml-1"
                    }, (0, r.h)("input", {
                        type: "radio",
                        name: "indentation",
                        value: "tabs",
                        checked: "tabs" === this.props.prefs.indentation,
                        onChange: this.updateSetting.bind(this),
                        "data-setting": "indentWith"
                    }), " ", "Tabs")), (0, r.h)("label", {
                        class: "line",
                        title: ""
                    }, "Indentation Size", " ", (0, r.h)("input", {
                        type: "range",
                        class: "va-m ml-1",
                        value: this.props.prefs.indentSize,
                        min: "1",
                        max: "7",
                        list: "indentationSizeList",
                        "data-setting": "indentSize",
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)("span", {
                        id: "indentationSizeValueEl"
                    }, this.props.prefs.indentSize), p), h, u, (0, r.h)("div", {
                        class: "flex block--mobile"
                    }, (0, r.h)("div", null, m, (0, r.h)("div", {
                        class: "flex line"
                    }, (0, r.h)("select", {
                        style: "flex:1;margin-left:20px",
                        "data-setting": "htmlMode",
                        value: this.props.prefs.htmlMode,
                        onChange: this.updateSetting.bind(this)
                    }, f, g, b), (0, r.h)("select", {
                        style: "flex:1;margin-left:20px",
                        "data-setting": "cssMode",
                        value: this.props.prefs.cssMode,
                        onChange: this.updateSetting.bind(this)
                    }, y, v, C, k, S, w), (0, r.h)("select", {
                        style: "flex:1;margin-left:20px",
                        "data-setting": "jsMode",
                        value: this.props.prefs.jsMode,
                        onChange: this.updateSetting.bind(this)
                    }, M, _, x, H)), (0, r.h)("label", {
                        class: "line"
                    }, "Theme", (0, r.h)("select", {
                        style: "flex:1;margin:0 20px",
                        "data-setting": "editorTheme",
                        value: this.props.prefs.editorTheme,
                        onChange: this.updateSetting.bind(this)
                    }, l.editorThemes.map(function(e) {
                        return (0, r.h)("option", {
                            value: e
                        }, e)
                    }))), (0, r.h)("label", {
                        class: "line"
                    }, "Font", (0, r.h)("select", {
                        style: "flex:1;margin:0 20px",
                        "data-setting": "editorFont",
                        value: this.props.prefs.editorFont,
                        onChange: this.updateSetting.bind(this)
                    }, I, L, j, E, B, A), "other" === this.props.prefs.editorFont && (0, r.h)("input", {
                        id: "customEditorFontInput",
                        type: "text",
                        value: this.props.prefs.editorCustomFont,
                        placeholder: "Custom font name here",
                        "data-setting": "editorCustomFont",
                        onChange: this.updateSetting.bind(this)
                    })), (0, r.h)("label", {
                        class: "line"
                    }, "Font Size", " ", (0, r.h)("input", {
                        style: "width:70px",
                        type: "number",
                        value: this.props.prefs.fontSize,
                        "data-setting": "fontSize",
                        onChange: this.updateSetting.bind(this)
                    }), " ", "px"), (0, r.h)("div", {
                        class: "line"
                    }, "Key bindings", (0, r.h)("label", {
                        class: "ml-1"
                    }, (0, r.h)("input", {
                        type: "radio",
                        name: "keymap",
                        value: "sublime",
                        checked: "sublime" === this.props.prefs.keymap,
                        "data-setting": "keymap",
                        onChange: this.updateSetting.bind(this)
                    }), " ", "Sublime"), (0, r.h)("label", {
                        class: "ml-1"
                    }, (0, r.h)("input", {
                        type: "radio",
                        name: "keymap",
                        value: "vim",
                        checked: "vim" === this.props.prefs.keymap,
                        "data-setting": "keymap",
                        onChange: this.updateSetting.bind(this)
                    }), " ", "Vim"))), (0, r.h)("div", {
                        class: "ml-2 ml-0--mobile"
                    }, (0, r.h)(i, {
                        name: "lineWrap",
                        title: "Toggle wrapping of long sentences onto new line",
                        label: "Line wrap",
                        pref: this.props.prefs.lineWrap,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "refreshOnResize",
                        title: "Your Preview will refresh when you resize the preview split",
                        label: "Refresh preview on resize",
                        pref: this.props.prefs.refreshOnResize,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "autoComplete",
                        title: "Turns on the auto-completion suggestions as you type",
                        label: "Auto-complete suggestions",
                        pref: this.props.prefs.autoComplete,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "autoPreview",
                        title: "Refreshes the preview as you code. Otherwise use the Run button",
                        label: "Auto-preview",
                        pref: this.props.prefs.autoPreview,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "autoSave",
                        title: "Auto-save keeps saving your code at regular intervals after you hit the first save manually",
                        label: "Auto-save",
                        pref: this.props.prefs.autoSave,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "preserveLastCode",
                        title: "Loads the last open creation when app starts",
                        label: "Preserve last written code",
                        pref: this.props.prefs.preserveLastCode,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "replaceNewTab",
                        title: "Turning this on will start showing Web Maker in every new tab you open",
                        label: "Replace new tab page",
                        pref: this.props.prefs.replaceNewTab,
                        onChange: this.updateSetting.bind(this),
                        showWhenExtension: !0
                    }), (0, r.h)(i, {
                        name: "preserveConsoleLogs",
                        title: "Preserves the console logs across your preview refreshes",
                        label: "Preserve console logs",
                        pref: this.props.prefs.preserveConsoleLogs,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        name: "lightVersion",
                        title: "Switch to lighter version for better performance. Removes things like blur etc.",
                        label: "Fast/light version",
                        pref: this.props.prefs.lightVersion,
                        onChange: this.updateSetting.bind(this)
                    }))), O, T, (0, r.h)("p", null, (0, r.h)(i, {
                        title: "Enjoy wonderful particle blasts while you type",
                        label: "Code blast!",
                        name: "isCodeBlastOn",
                        pref: this.props.prefs.isCodeBlastOn,
                        onChange: this.updateSetting.bind(this)
                    }), (0, r.h)(i, {
                        title: "Get ready to build some games at JS13KGames",
                        label: "Js13kGames Mode",
                        name: "isJs13kModeOn",
                        pref: this.props.prefs.isJs13kModeOn,
                        onChange: this.updateSetting.bind(this)
                    })), P, D, (0, r.h)("p", null, (0, r.h)("label", {
                        class: "line",
                        title: "This timeout is used to indentify a possible infinite loop and prevent it."
                    }, "Maximum time allowed in a loop iteration", " ", (0, r.h)("input", {
                        type: "number",
                        value: this.props.prefs.infiniteLoopTimeout,
                        "data-setting": "infiniteLoopTimeout",
                        onChange: this.updateSetting.bind(this)
                    }), " ", "ms"), V))
                }, t
            }(r.Component);
        t.default = F
    },
    UzHC: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.SupportDeveloperModal = function(e) {
            var t = e.show,
                o = e.closeHandler;
            return (0, n.h)(a.default, {
                extraClasses: "pledge-modal",
                show: t,
                closeHandler: o
            }, i)
        };
        var n = o("KM04"),
            s = o("inAt"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("h1", null, "Support the Developer"), (0, n.h)("p", null, "Hi,", " ", (0, n.h)("a", {
                href: "https://kushagragour.in",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Kushagra"), " ", "here! Web Maker is a free and open-source project. To keep myself motivated for working on such open-source and free", " ", (0, n.h)("a", {
                href: "https://kushagragour.in/lab/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "side projects"), ", I am accepting donations. Your pledge, no matter how small, will act as an appreciation towards my work and keep me going forward making Web Maker more awesome\uD83D\uDD25. So please consider donating. \uD83D\uDE4F\uD83C\uDFFC (could be as small as $1/month)."), (0, n.h)("div", {
                class: "flex flex-h-center",
                id: "onboardDontShowInTabOptionBtn",
                "d-click": "onDontShowInTabClicked"
            }, (0, n.h)("a", {
                class: "onboard-selection",
                href: "https://patreon.com/kushagra",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Make a monthly pledge on Patreon"
            }, (0, n.h)("img", {
                src: "assets/patreon.png",
                height: "60",
                alt: "Become a patron image"
            }), (0, n.h)("h3", {
                class: "onboard-selection-text"
            }, "Make a monthly pledge on Patreon"))), (0, n.h)("a", {
                href: "https://www.paypal.me/kushagragour",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Make a one time donation on Paypal"
            }, "Or, make a one time donation"))
    },
    VB7N: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var i = o("KM04"),
            r = o("qV3Q"),
            l = o("jHnz"),
            d = (0, i.h)("h2", null, "Login / Signup"),
            c = (0, i.h)("svg", null, (0, i.h)("use", {
                xlinkHref: "#github-icon"
            })),
            p = (0, i.h)("svg", null, (0, i.h)("use", {
                xlinkHref: "#google-icon"
            })),
            h = (0, i.h)("svg", null, (0, i.h)("use", {
                xlinkHref: "#fb-icon"
            })),
            u = (0, i.h)("p", null, "Join a community of 50,000+ Developers"),
            m = function(e) {
                function t() {
                    return n(this, t), s(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.login = function(t) {
                    var e = t.target.dataset.authProvider;
                    (0, r.trackEvent)("ui", "loginProviderClick", e), l.auth.login(e)
                }, t.prototype.componentDidMount = function() {
                    window.db.local.get({
                        lastAuthProvider: ""
                    }, function(e) {
                        e.lastAuthProvider && document.body.classList.add("last-login-" + e.lastAuthProvider)
                    })
                }, t.prototype.render = function() {
                    return (0, i.h)("div", null, d, (0, i.h)("div", null, (0, i.h)("p", null, (0, i.h)("button", {
                        type: "button",
                        onClick: this.login.bind(this),
                        class: "social-login-btn social-login-btn--github  btn btn-icon btn--big full-width hint--right hint--always",
                        "data-auth-provider": "github",
                        "data-hint": "You logged in with Github last time"
                    }, c, "Login with Github")), (0, i.h)("p", null, (0, i.h)("button", {
                        type: "button",
                        onClick: this.login.bind(this),
                        class: "social-login-btn social-login-btn--google  btn btn-icon btn--big full-width hint--right hint--always",
                        "data-auth-provider": "google",
                        "data-hint": "You logged in with Google last time"
                    }, p, "Login with Google")), (0, i.h)("p", {
                        class: "mb-2"
                    }, (0, i.h)("button", {
                        type: "button",
                        onClick: this.login.bind(this),
                        class: "social-login-btn social-login-btn--facebook  btn btn-icon btn--big full-width hint--right hint--always",
                        "data-auth-provider": "facebook",
                        "data-hint": "You logged in with Facebook last time"
                    }, h, "Login with Facebook")), u))
                }, t
            }(i.Component);
        t.default = m
    },
    W5Uw: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.OnboardingModal = function(e) {
            return (0, n.h)(a.default, {
                show: e.show,
                closeHandler: e.closeHandler
            }, i, r, l, (0, n.h)("p", {
                class: "tac"
            }, (0, n.h)("button", {
                class: "btn btn--primary",
                onClick: e.closeHandler
            }, "Lets start!")))
        };
        var n = o("KM04"),
            s = o("inAt"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("svg", {
                width: "130px",
                height: "50px",
                "aria-hidden": "true"
            }, (0, n.h)("use", {
                xlinkHref: "#logo"
            })), (0, n.h)("h1", {
                style: "margin-top:20px"
            }, "Welcome to Web Maker")),
            r = (0, n.h)("div", {
                class: "flex--desk",
                style: "margin-top:40px;"
            }, (0, n.h)("div", {
                class: "onboard-step show-when-app hide-on-mobile"
            }, (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("svg", {
                class: "onboard-step__icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"
            }))), (0, n.h)("p", null, "Open Web Maker anytime by visiting", " ", (0, n.h)("a", null, "https://webmakerapp.com/app/"), " - Even when you are offline! It just works! \uD83D\uDE31 ", (0, n.h)("strong", null, "Drag the following bookmarklet"), " on your bookmark bar to create a quick access shortcut:", (0, n.h)("a", {
                class: "ml-1 bookmarklet",
                href: "https://webmakerapp.com/app/"
            }, (0, n.h)("svg", {
                width: "20",
                height: "20",
                "aria-hidden": "true"
            }, (0, n.h)("use", {
                xlinkHref: "#logo"
            })), "Web Maker"))), (0, n.h)("div", {
                class: "onboard-step show-when-extension"
            }, (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("svg", {
                class: "onboard-step__icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"
            }))), (0, n.h)("p", null, "Open Web Maker anytime by clicking the", (0, n.h)("svg", {
                class: "relative",
                style: "top:5px;",
                width: "40",
                height: "30"
            }, (0, n.h)("use", {
                xlinkHref: "#logo"
            })), " ", "button in top-right side of your browser.")), (0, n.h)("div", {
                class: "onboard-step"
            }, (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("svg", {
                class: "onboard-step__icon",
                viewBox: "0 0 24 24"
            }, (0, n.h)("use", {
                xlinkHref: "#settings-icon"
            }))), (0, n.h)("p", null, "Configure and customize settings by clicking the gear icon (", (0, n.h)("svg", {
                style: "width:18px;height:18px;position:relative;top:3px;fill:#888",
                viewBox: "0 0 24 24"
            }, (0, n.h)("use", {
                xlinkHref: "#settings-icon"
            })), ") in bottom right of the app.")), (0, n.h)("div", {
                class: "onboard-step"
            }, (0, n.h)("div", {
                class: "tac"
            }, (0, n.h)("svg", {
                class: "onboard-step__icon",
                style: "stroke-width:0.3px;"
            }, (0, n.h)("use", {
                xlinkHref: "#twitter-icon"
            }))), (0, n.h)("p", null, "Follow", " ", (0, n.h)("a", {
                href: "https://twitter.com/intent/follow?screen_name=webmakerApp",
                targe: "_blank",
                rel: "noopener noreferrer"
            }, "@webmakerApp"), " ", "to know about the new upcoming features!"))),
            l = (0, n.h)("p", {
                class: "tac show-when-app"
            }, "If you are an existing Chrome extension user, you can import your creations from there to here.", " ", (0, n.h)("a", {
                href: "https://medium.com/web-maker/importing-exporting-your-creations-d92e7de5c3dc",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Learn how to export/import"), ".")
    },
    YWKo: function(e, t, o) {
        "use strict";

        function n(e, t) {
            var o = {};
            for (var n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
            return o
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.SplitPane = void 0;
        var r = o("KM04"),
            l = o("mSND"),
            d = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            c = t.SplitPane = function(e) {
                function t() {
                    return s(this, t), a(this, e.apply(this, arguments))
                }
                return i(t, e), t.prototype.componentDidMount = function() {
                    this.updateSplit()
                }, t.prototype.componentWillUpdate = function() {
                    this.splitInstance && this.splitInstance.destroy()
                }, t.prototype.componentDidUpdate = function() {
                    this.updateSplit()
                }, t.prototype.updateSplit = function() {
                    var e = {
                        direction: this.props.direction,
                        minSize: this.props.minSize,
                        gutterSize: 6,
                        sizes: this.props.sizes
                    };
                    this.props.onDragEnd && (e.onDragEnd = this.props.onDragEnd), this.props.onDragStart && (e.onDragStart = this.props.onDragStart), this.splitInstance = (0, d.default)(this.props.children.map(function(e) {
                        return "#" + e.attributes.id
                    }), e), this.props.onSplit && this.props.onSplit(this.splitInstance)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        o = n(e, ["children"]);
                    return (0, r.h)("div", o, this.props.children)
                }, t
            }(r.Component)
    },
    "Zox/": function(e, t, o) {
        "use strict";

        function n(e) {
            function t() {
                var e = "filesystem:chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/temporary/" + d;
                return window.open(e)
            }

            function o(t) {
                (0, s.log)(t)
            }
            for (var n = atob(e.split(",")[1]), a = e.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(n.length), l = new Uint8Array(r), c = 0; c < n.length; c++) l[c] = n.charCodeAt(c);
            var i = new Blob([r], {
                    type: a
                }),
                p = i.size + 512,
                h = new Date,
                d = ["web-maker-screenshot", h.getFullYear(), h.getMonth() + 1, h.getDate(), h.getHours(), h.getMinutes(), h.getSeconds()].join("-");
            d += ".png", window.webkitRequestFileSystem(window.TEMPORARY, p, function(e) {
                e.root.getFile(d, {
                    create: !0
                }, function(e) {
                    e.createWriter(function(e) {
                        e.onwriteend = t, e.write(i)
                    }, o)
                }, o)
            }, o)
        }
        t.__esModule = !0, t.takeScreenshot = function(e) {
            (0, s.handleDownloadsPermission)().then(function() {
                function t(o) {
                    var s = document.createElement("canvas"),
                        a = e;
                    s.width = a.width, s.height = a.height;
                    var i = s.getContext("2d"),
                        r = window.devicePixelRatio || 1;
                    i.drawImage(o, a.left * r, a.top * r, a.width * r, a.height * r, 0, 0, a.width, a.height), o.removeEventListener("load", t), n(s.toDataURL())
                }
                var o = document.createElement("style");
                o.textContent = "[class*=\"hint\"]:after, [class*=\"hint\"]:before { display: none!important; }", document.body.appendChild(o), setTimeout(function() {
                    chrome.tabs.captureVisibleTab(null, {
                        format: "png",
                        quality: 100
                    }, function(e) {
                        if (o.remove(), e) {
                            var n = new Image;
                            n.src = e, n.addEventListener("load", function() {
                                return t(n, e)
                            })
                        }
                    })
                }, 50), (0, a.trackEvent)("ui", "takeScreenshotBtnClick")
            })
        };
        var s = o("6Ptt"),
            a = o("qV3Q")
    },
    bjFU: function(e, t, o) {
        "use strict";

        function n(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, o) {
                    function n(s, a) {
                        try {
                            var i = t[s](a),
                                r = i.value
                        } catch (e) {
                            return void o(e)
                        }
                        return i.done ? void e(r) : Promise.resolve(r).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        })
                    }
                    return n("next")
                })
            }
        }
        t.__esModule = !0, t.itemService = void 0;
        var s = o("3Z4F"),
            a = o("gfUn"),
            i = t.itemService = {
                getItem: function() {
                    var e = n(function*(e) {
                        var t = yield window.db.getDb();
                        return t.doc("items/" + e).get().then(function(e) {
                            return e.data()
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                getUserItemIds: function() {
                    var e = n(function*() {
                        if (window.user) return new Promise(function(e) {
                            e(window.user.items || {})
                        });
                        var e = yield window.db.getDb();
                        return e.doc("users/" + window.user.uid).get().then(function(e) {
                            return e.exists ? e.data().items : {}
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                getAllItems: function() {
                    var e = n(function*() {
                        var e = Date.now(),
                            t = (0, s.deferred)(),
                            o = yield this.getUserItemIds();
                        o = Object.getOwnPropertyNames(o || {}), (0, a.log)("itemids", o), o.length || t.resolve([]);
                        var n = yield window.db.getDb(),
                            i = [];
                        return n.collection("items").where("createdBy", "==", window.user.uid).onSnapshot(function(o) {
                            o.forEach(function(e) {
                                i.push(e.data())
                            }), (0, a.log)("Items fetched in ", Date.now() - e, "ms"), t.resolve(i)
                        }, function() {
                            t.resolve([])
                        }), t.promise
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                setUser: function() {
                    var e = n(function*() {
                        var e = yield window.db.getDb();
                        return e.doc("users/" + window.user.uid).set({
                            items: {}
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                setItem: function() {
                    var e = n(function*(e, t) {
                        var o, n, i = (0, s.deferred)(),
                            r = (o = {}, o[e] = t, o);
                        if (db.local.set(r, function() {
                                !window.IS_EXTENSION && window.user && navigator.onLine || i.resolve()
                            }), "code" === e) return !1;
                        if (window.user) {
                            var l = yield window.db.getDb();
                            (0, a.log)("Starting to save item " + e), t.createdBy = window.user.uid, n = l.collection("items").doc(e).set(t, {
                                merge: !0
                            }).then(function(e) {
                                (0, a.log)("Document written", e), i.resolve()
                            }).catch(i.reject)
                        }
                        return window.user && navigator.onLine ? n : i.promise
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                saveItems: function(e) {
                    var t = (0, s.deferred)();
                    return window.user ? window.db.getDb().then(function(o) {
                        var n = o.batch();
                        for (var s in e) {
                            var a;
                            e[s].createdBy = window.user.uid, n.set(o.doc("items/" + s), e[s]), n.update(o.doc("users/" + window.user.uid), (a = {}, a["items." + s] = !0, a)), window.user.items = window.user.items || {}, window.user.items[s] = !0
                        }
                        n.commit().then(t.resolve)
                    }) : (window.db.local.set(e, t.resolve), window.db.local.get({
                        items: {}
                    }, function(t) {
                        for (var o in e) t.items[o] = !0;
                        window.db.local.set({
                            items: t.items
                        })
                    })), t.promise
                },
                removeItem: function() {
                    var e = n(function*(e) {
                        if (!window.user) {
                            var t = (0, s.deferred)();
                            return window.db.local.remove(e, t.resolve), t.promise
                        }
                        var o = yield window.db.getDb();
                        return (0, a.log)("Starting to save item " + e), o.collection("items").doc(e).delete().then(function(e) {
                            (0, a.log)("Document removed", e)
                        }).catch(function(e) {
                            return (0, a.log)(e)
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                setItemForUser: function() {
                    var e = n(function*(e) {
                        var t;
                        if (!window.user) return window.db.local.get({
                            items: {}
                        }, function(t) {
                            t.items[e] = !0, window.db.local.set({
                                items: t.items
                            })
                        });
                        var o = yield window.db.getDb();
                        return o.collection("users").doc(window.user.uid).update((t = {}, t["items." + e] = !0, t)).then(function(t) {
                            (0, a.log)("Item " + e + " set for user", t), window.user.items = window.user.items || {}, window.user.items[e] = !0
                        }).catch(function(e) {
                            return (0, a.log)(e)
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                unsetItemForUser: function() {
                    var e = n(function*(e) {
                        var t;
                        if (!window.user) return window.db.local.get({
                            items: {}
                        }, function(t) {
                            delete t.items[e], window.db.local.set({
                                items: t.items
                            })
                        });
                        var o = yield window.db.getDb();
                        return o.collection("users").doc(window.user.uid).update((t = {}, t["items." + e] = firebase.firestore.FieldValue.delete(), t)).then(function(t) {
                            delete window.user.items[e], (0, a.log)("Item " + e + " unset for user", t)
                        }).catch(function(e) {
                            return (0, a.log)(e)
                        })
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }
    },
    "c/up": function(e, t, o) {
        "use strict";

        function n(e, t) {
            var o = t;
            return function() {
                0 == --o && e()
            }
        }

        function s(e, t) {
            var o = r.default.modes[e].dependencies;
            if (!o) return t();
            for (var s = [], a = 0; a < o.length; ++a) r.default.modes.hasOwnProperty(o[a]) || s.push(o[a]);
            if (!s.length) return t();
            var i = n(t, s.length);
            for (a = 0; a < s.length; ++a) r.default.requireMode(s[a], i)
        }
        t.__esModule = !0;
        var a = o("tQq4"),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a);
        window.CodeMirror = r.default, r.default.modeURL || (r.default.modeURL = "lib/codemirror/mode/%N/%N.js");
        var i = {};
        r.default.requireMode = function(e, t) {
            if ("string" != typeof e && (e = e.name), r.default.modes.hasOwnProperty(e)) return s(e, t);
            if (i.hasOwnProperty(e)) return i[e].push(t);
            var o = r.default.modeURL.replace(/%N/g, e),
                n = document.createElement("script");
            n.src = o;
            var a = document.getElementsByTagName("script")[0],
                l = i[e] = [t];
            r.default.on(n, "load", function() {
                s(e, function() {
                    for (var e = 0; e < l.length; ++e) l[e]()
                })
            }), a.parentNode.insertBefore(n, a)
        }, r.default.autoLoadMode = function(e, t) {
            r.default.modes.hasOwnProperty(t) || r.default.requireMode(t, function() {
                e.setOption("mode", e.getOption("mode"))
            })
        }, t.default = r.default
    },
    eNb1: function(e, t) {
        "use strict";
        t.__esModule = !0;
        var o = t.jsLibs = [{
                url: "https://code.jquery.com/jquery-3.2.1.min.js",
                label: "jQuery",
                type: "js"
            }, {
                url: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
                label: "Bootstrap 3",
                type: "js"
            }, {
                url: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js",
                label: "Bootstrap 4",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.min.js",
                label: "Foundation",
                type: "js"
            }, {
                url: "https://semantic-ui.com/dist/semantic.min.js",
                label: "Semantic UI",
                type: "js"
            }, {
                url: "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.5/angular.min.js",
                label: "Angular",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js",
                label: "React",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js",
                label: "React DOM",
                type: "js"
            }, {
                url: "https://unpkg.com/vue/dist/vue.min.js",
                label: "Vue.js",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js",
                label: "Three.js",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js",
                label: "D3",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
                label: "Underscore",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js",
                label: "Greensock TweenMax",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/js/uikit.min.js",
                label: "UIkit 2",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.42/js/uikit.min.js",
                label: "UIkit 3",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js",
                label: "p5.js",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js",
                label: "p5.js DOM",
                type: "js"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.sound.min.js",
                label: "p5.js Sound",
                type: "js"
            }],
            n = t.cssLibs = [{
                url: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
                label: "Bootstrap 3",
                type: "css"
            }, {
                url: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
                label: "Bootstrap 4",
                type: "css"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css",
                label: "Foundation",
                type: "css"
            }, {
                url: "https://semantic-ui.com/dist/semantic.min.css",
                label: "Semantic UI",
                type: "css"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
                label: "Bulma",
                type: "css"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.5.0/hint.min.css",
                label: "Hint.css",
                type: "css"
            }, {
                url: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css",
                label: "Tailwind.css",
                type: "css"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/css/uikit.min.css",
                label: "UIkit 2",
                type: "css"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.42/css/uikit.min.css",
                label: "UIkit 3",
                type: "css"
            }, {
                url: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
                label: "Animate.css",
                type: "css"
            }, {
                url: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
                label: "FontAwesome 4",
                type: "css"
            }, {
                url: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
                label: "FontAwesome 5",
                type: "css"
            }]
    },
    f66c: function(e, t, o) {
        "use strict";

        function n(e, t) {
            var o = {};
            for (var n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
            return o
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0;
        var r = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        };
        t.A = function(e) {
            return (0, l.h)(c, r({
                Tag: "a"
            }, e))
        }, t.Button = function(e) {
            return (0, l.h)(c, r({
                Tag: "button"
            }, e))
        };
        var l = o("KM04"),
            d = o("qV3Q"),
            c = function(e) {
                function t() {
                    return s(this, t), a(this, e.apply(this, arguments))
                }
                return i(t, e), t.prototype.handleClick = function(t) {
                    var e = t.currentTarget;
                    (0, d.trackEvent)(e.getAttribute("data-event-category"), e.getAttribute("data-event-action")), this.props.onClick(t)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.onClick,
                        o = e.Tag,
                        s = n(e, ["onClick", "Tag"]);
                    return (0, l.h)(o, r({
                        onClick: this.handleClick.bind(this)
                    }, s))
                }, t
            }(l.Component)
    },
    g1Sf: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.AskToImportModal = function(e) {
            var t = e.show,
                o = e.closeHandler,
                s = e.oldSavedCreationsCount,
                l = e.dontAskBtnClickHandler,
                d = e.importBtnClickHandler;
            return (0, n.h)(a.default, {
                extraClasses: "ask-to-import-modal",
                show: t,
                closeHandler: o
            }, i, (0, n.h)("div", null, (0, n.h)("p", null, "You have ", (0, n.h)("span", null, s), " creations saved in your local machine. Do you want to import those creations in your account so they are more secure and accessible anywhere?"), r, (0, n.h)("div", {
                class: "flex flex-h-end"
            }, (0, n.h)("button", {
                onClick: l,
                class: "btn"
            }, "Don't ask me again"), (0, n.h)("button", {
                onClick: d,
                class: "btn btn--primary ml-1"
            }, "Yes, please import"))))
        };
        var n = o("KM04"),
            s = o("inAt"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = (0, n.h)("h2", null, "Import your creations in your account"),
            r = (0, n.h)("p", null, "It's okay if you don't want to. You can simply logout and access them anytime on this browser.")
    },
    g3Nw: function(e, t) {
        "use strict";
        t.__esModule = !0, t.default = [{
            id: "preact",
            title: "Preact",
            img: "assets/preact-logo.svg"
        }, {
            id: "react",
            title: "React",
            img: "assets/react-logo.svg"
        }, {
            id: "kontra-game-engine",
            title: "Kontra Game Engine",
            img: "assets/html5-logo.svg"
        }]
    },
    i8IT: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.HelpModal = function(e) {
            return (0, n.h)(a.default, {
                show: e.show,
                closeHandler: e.closeHandler
            }, (0, n.h)("h1", null, r, (0, n.h)("small", {
                style: "font-size:14px;"
            }, e.version)), (0, n.h)("div", null, l, d, c, p, (0, n.h)("p", null, (0, n.h)(i.Button, {
                "aria-label": "Support the developer",
                onClick: e.onSupportBtnClick,
                "data-event-action": "supportDeveloperHelpBtnClick",
                "data-event-category": "ui",
                class: "btn btn-icon"
            }, h, "Support the developer"), " ", u, " ", m, " ", f), g, b))
        };
        var n = o("KM04"),
            s = o("inAt"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = o("f66c"),
            r = (0, n.h)("div", {
                class: "web-maker-with-tag"
            }, "Web Maker"),
            l = (0, n.h)("p", null, "Made with ", (0, n.h)("span", {
                style: "margin-right: 8px;"
            }, "\uD83D\uDC96"), " &", " ", (0, n.h)("span", {
                style: "margin-right: 8px;"
            }, "\uD83D\uDE4C"), " by", " ", (0, n.h)("a", {
                href: "https://twitter.com/chinchang457",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Kushagra Gour")),
            d = (0, n.h)("p", null, (0, n.h)("a", {
                href: "/docs",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Read the documentation"), "."),
            c = (0, n.h)("p", null, "Tweet out your feature requests, comments & suggestions to", " ", (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://twitter.com/webmakerApp"
            }, "@webmakerApp"), "."),
            p = (0, n.h)("p", null, "Like this extension? Please", " ", (0, n.h)("a", {
                href: "https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/reviews",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "rate it here"), "."),
            h = (0, n.h)("svg", null, (0, n.h)("use", {
                xlinkHref: "#gift-icon"
            })),
            u = (0, n.h)("a", {
                "aria-label": "Rate Web Maker",
                href: "https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/reviews",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "btn btn-icon"
            }, (0, n.h)("svg", null, (0, n.h)("use", {
                xlinkHref: "#heart-icon"
            })), "Review Web Maker"),
            m = (0, n.h)("a", {
                "aria-label": "Chat",
                href: "https://spectrum.chat/web-maker",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "btn btn-icon"
            }, (0, n.h)("svg", null, (0, n.h)("use", {
                xlinkHref: "#chat-icon"
            })), "Chat"),
            f = (0, n.h)("a", {
                "aria-label": "Report a Bug",
                href: "https://github.com/chinchang/web-maker/issues",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "btn btn-icon"
            }, (0, n.h)("svg", null, (0, n.h)("use", {
                xlinkHref: "#bug-icon"
            })), "Report a bug"),
            g = (0, n.h)("p", null, (0, n.h)("h3", null, "Awesome libraries used"), (0, n.h)("ul", null, (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://kushagragour.in/lab/hint/"
            }, "Hint.css"), " ", "&", (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://github.com/chinchang/screenlog.js"
            }, "Screenlog.js"), " ", "- By me :)"), (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://nathancahill.github.io/Split.js/"
            }, "Split.js"), " ", "- Nathan Cahill"), (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://codemirror.net/"
            }, "Codemirror"), " ", "- Marijn Haverbeke"), (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://emmet.io/"
            }, "Emmet"), " ", "- Sergey Chikuyonok"), (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "http://esprima.org/"
            }, "Esprima"), " ", "- Ariya Hidayat"), (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://github.com/enjalot/Inlet"
            }, "Inlet"), " ", "- Ian Johnson"), (0, n.h)("li", null, (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://webmakerapp.com/"
            }, "Web Maker!"), " ", "- whhat!"))),
            b = (0, n.h)("p", null, (0, n.h)("h3", null, "License"), "\"Web Maker\" is", " ", (0, n.h)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://github.com/chinchang/web-maker"
            }, "open-source"), " ", "under the", " ", (0, n.h)("a", {
                href: "https://opensource.org/licenses/MIT",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "MIT License"), ".")
    },
    iGzD: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.ItemTile = function(e) {
            var t = e.item,
                o = e.onClick,
                a = e.onForkBtnClick,
                i = e.onRemoveBtnClick,
                l = e.focusable;
            return (0, n.h)("div", {
                role: l ? "button" : null,
                tabindex: l ? 0 : null,
                class: "js-saved-item-tile saved-item-tile",
                "data-item-id": t.id,
                onClick: o
            }, (0, n.h)("div", {
                class: "saved-item-tile__btns"
            }, a ? (0, n.h)("a", {
                class: "js-saved-item-tile__fork-btn  saved-item-tile__btn hint--left hint--medium",
                "aria-label": "Creates a duplicate of this creation (Ctrl/\u2318 + F)",
                onClick: a
            }, "Fork", r) : null, i ? (0, n.h)("a", {
                class: "js-saved-item-tile__remove-btn  saved-item-tile__btn hint--left",
                "aria-label": "Remove",
                onClick: i
            }, "X") : null), (0, n.h)("div", {
                className: "flex flex-v-center"
            }, t.img ? (0, n.h)("div", null, (0, n.h)("img", {
                class: "saved-item-tile__img",
                height: "40",
                src: t.img,
                alt: ""
            })) : null, (0, n.h)("h3", {
                class: "saved-item-tile__title"
            }, t.title)), t.updatedOn ? (0, n.h)("div", {
                class: "saved-item-tile__meta"
            }, "Last updated: ", (0, s.getHumanDate)(t.updatedOn)) : null)
        };
        var n = o("KM04"),
            s = o("6Ptt"),
            a = o("inAt"),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            r = (0, n.h)("span", {
                class: "show-when-selected"
            }, "(Ctrl/\u2318 + F)")
    },
    inAt: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var i = o("KM04"),
            r = o("q6qL"),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            d = function(e) {
                function t() {
                    return n(this, t), s(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("keydown", this.onKeyDownHandler.bind(this))
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("keydown", this.onKeyDownHandler.bind(this)), this.focusGrabber && (this.focusGrabber.remove(), this.focusGrabber = null)
                }, t.prototype.onKeyDownHandler = function(t) {
                    27 === t.keyCode && this.props.closeHandler()
                }, t.prototype.onOverlayClick = function(t) {
                    t.target === this.overlayEl && this.props.closeHandler()
                }, t.prototype.componentDidUpdate = function(e) {
                    var t = this;
                    this.props.show !== e.show && (document.body.classList[this.props.show ? "add" : "remove"]("overlay-visible"), this.props.show ? (setTimeout(function() {
                        t.overlayEl.querySelector(".js-modal__close-btn").focus()
                    }, 0), this.focusGrabber = document.createElement("input"), this.focusGrabber.setAttribute("style", "height:0;opacity:0;overflow:hidden;width:0;"), setTimeout(function() {
                        document.body.appendChild(t.focusGrabber)
                    }, 10)) : (this.focusGrabber.remove(), this.focusGrabber = null))
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.show ? (0, i.h)(l.default, {
                        into: "body"
                    }, (0, i.h)("div", {
                        class: (this.props.extraClasses || "") + " modal is-modal-visible " + (this.props.small ? "modal--small" : ""),
                        ref: function(t) {
                            return e.overlayEl = t
                        },
                        onClick: this.onOverlayClick.bind(this)
                    }, (0, i.h)("div", {
                        class: "modal__content"
                    }, (0, i.h)("button", {
                        type: "button",
                        onClick: this.props.closeHandler,
                        "aria-label": "Close modal",
                        title: "Close",
                        class: "js-modal__close-btn modal__close-btn"
                    }, "Close"), this.props.children))) : null
                }, t
            }(i.Component);
        t.default = d
    },
    jHnz: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.auth = void 0;
        var n = o("qV3Q"),
            s = o("ZUoI"),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            i = o("6Ptt"),
            r = t.auth = {
                logout: function() {
                    a.default.auth().signOut()
                },
                login: function(e) {
                    var t;
                    return "facebook" === e ? t = new a.default.auth.FacebookAuthProvider : "twitter" === e ? t = new a.default.auth.TwitterAuthProvider : "google" === e ? (t = new a.default.auth.GoogleAuthProvider, t.addScope("https://www.googleapis.com/auth/userinfo.profile")) : t = new a.default.auth.GithubAuthProvider, a.default.auth().signInWithPopup(t).then(function() {
                        (0, n.trackEvent)("fn", "loggedIn", e), window.db.local.set({
                            lastAuthProvider: e
                        })
                    }).catch(function(e) {
                        (0, i.log)(e), "auth/account-exists-with-different-credential" === e.code && alert("You have already signed up with the same email using different social login")
                    })
                }
            }
    },
    kL0g: function(e, t) {
        "use strict";
        t.__esModule = !0;
        t.editorThemes = ["3024-day", "3024-night", "abcdef", "ambiance", "base2tone-meadow-dark", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "hopscotch", "icecoder", "isotope", "lesser-dark", "liquibyte", "material", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "solarized dark", "solarized light", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "zenburn"]
    },
    qV3Q: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.trackEvent = function(e, t, o, s) {
            return window.DEBUG ? void(0, n.log)("trackevent", e, t, o, s) : void(window.ga && ga("send", "event", e, t, o, s))
        };
        var n = o("6Ptt");
        navigator.onLine && !window.DEBUG && setTimeout(function() {
            (function(e, t, n, o, s, i, a) {
                e.GoogleAnalyticsObject = s, e[s] = e[s] || function() {
                    (e[s].q = e[s].q || []).push(arguments)
                }, e[s].l = 1 * new Date, i = t.createElement(n), a = t.getElementsByTagName(n)[0], i.async = 1, i.src = o, a.parentNode.insertBefore(i, a)
            })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), -1 === location.href.indexOf("chrome-extension://") ? ga("create", "UA-87786708-1") : (ga("create", "UA-87786708-1", {
                cookieDomain: "none"
            }), ga("set", "checkProtocolTask", function() {})), ga("send", "pageview")
        }, 100)
    },
    qoQ6: function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var i = o("KM04"),
            r = o("6Ptt"),
            l = o("qV3Q"),
            c = o("bjFU"),
            p = o("Mo6r"),
            h = o("3Z4F"),
            d = o("iGzD"),
            u = (0, i.h)("div", {
                class: "mt-1"
            }, "No match found."),
            m = (0, i.h)("h2", {
                class: "opacity--30"
            }, "Nothing saved here."),
            f = function(e) {
                function t(o) {
                    n(this, t);
                    var a = s(this, e.call(this, o));
                    return a.items = [], a.state = {
                        filteredItems: []
                    }, a
                }
                return a(t, e), t.prototype.componentWillUpdate = function(e) {
                    this.props.items !== e.items && (this.items = Object.values(e.items), this.items.sort(function(e, t) {
                        return t.updatedOn - e.updatedOn
                    }), this.setState({
                        filteredItems: this.items
                    }))
                }, t.prototype.componentDidUpdate = function(e) {
                    this.props.isOpen && !e.isOpen && (window.searchInput.value = "")
                }, t.prototype.onCloseIntent = function() {
                    this.props.closeHandler()
                }, t.prototype.itemClickHandler = function(e) {
                    this.props.itemClickHandler(e)
                }, t.prototype.itemRemoveBtnClickHandler = function(t, o) {
                    o.stopPropagation(), this.props.itemRemoveBtnClickHandler(t)
                }, t.prototype.itemForkBtnClickHandler = function(t, o) {
                    o.stopPropagation(), this.props.itemForkBtnClickHandler(t)
                }, t.prototype.keyDownHandler = function(e) {
                    if (this.props.isOpen) {
                        var t = e.ctrlKey || e.metaKey,
                            o = t && 70 === e.keyCode,
                            n = 40 === e.keyCode,
                            s = 38 === e.keyCode,
                            a = 13 === e.keyCode,
                            i = $(".js-saved-item-tile.selected"),
                            r = 0 !== $all(".js-saved-item-tile").length;
                        if ((n || s) && r) {
                            var d = n ? "nextUntil" : "previousUntil";
                            i ? (i.classList.remove("selected"), i[d](".js-saved-item-tile:not(.hide)").classList.add("selected")) : $(".js-saved-item-tile:not(.hide)").classList.add("selected"), $(".js-saved-item-tile.selected").scrollIntoView(!1)
                        }
                        if (a && i) {
                            var c = this.props.items[i.dataset.itemId];
                            console.log("opening", c), this.props.itemClickHandler(c), (0, l.trackEvent)("ui", "openItemKeyboardShortcut")
                        }
                        if (o) {
                            e.preventDefault();
                            var p = this.props.items[i.dataset.itemId];
                            this.props.itemForkBtnClickHandler(p), (0, l.trackEvent)("ui", "forkKeyboardShortcut")
                        }
                    }
                }, t.prototype.mergeImportedItems = function(e) {
                    var t = [],
                        o = {},
                        n = (0, h.deferred)(),
                        s = {};
                    this.items.forEach(function(e) {
                        return s[e.id] = e
                    }), e.forEach(function(e) {
                        s[e.id] ? t.push(e.id) : ((0, r.log)("merging", e.id), o[e.id] = e)
                    });
                    var a = e.length - t.length;
                    if (t.length) {
                        var i = confirm(t.length + " creations already exist. Do you want to replace them?");
                        i && ((0, r.log)("shouldreplace", i), e.forEach(function(e) {
                            o[e.id] = e
                        }), a = e.length)
                    }
                    return a ? c.itemService.saveItems(o).then(function() {
                        n.resolve(), p.alertsService.add(a + " creations imported successfully."), (0, l.trackEvent)("fn", "itemsImported", a)
                    }) : n.resolve(), this.props.closeHandler(), n.promise
                }, t.prototype.importFileChangeHandler = function(t) {
                    var e = this,
                        o = t.target.files[0],
                        n = new FileReader;
                    n.addEventListener("load", function(t) {
                        var o;
                        try {
                            o = JSON.parse(t.target.result), (0, r.log)(o), e.mergeImportedItems(o)
                        } catch (e) {
                            (0, r.log)(e), alert("Oops! Selected file is corrupted. Please select a file that was generated by clicking the \"Export\" button.")
                        }
                    }), n.readAsText(o, "utf-8")
                }, t.prototype.importBtnClickHandler = function(t) {
                    var e = document.createElement("input");
                    e.type = "file", e.style.display = "none", e.accept = "accept=\"application/json", document.body.appendChild(e), e.addEventListener("change", this.importFileChangeHandler.bind(this)), e.click(), (0, l.trackEvent)("ui", "importBtnClicked"), t.preventDefault()
                }, t.prototype.searchInputHandler = function(t) {
                    var e = t.target.value;
                    e ? this.setState({
                        filteredItems: this.items.filter(function(t) {
                            return -1 !== t.title.toLowerCase().indexOf(e)
                        })
                    }) : this.setState({
                        filteredItems: this.items
                    }), (0, l.trackEvent)("ui", "searchInputType")
                }, t.prototype.render = function() {
                    var e = this;
                    return (0, i.h)("div", {
                        id: "js-saved-items-pane",
                        class: "saved-items-pane " + (this.props.isOpen ? "is-open" : ""),
                        onKeyDown: this.keyDownHandler.bind(this)
                    }, (0, i.h)("button", {
                        onClick: this.onCloseIntent.bind(this),
                        class: "btn  saved-items-pane__close-btn",
                        id: "js-saved-items-pane-close-btn"
                    }, "X"), (0, i.h)("div", {
                        class: "flex flex-v-center",
                        style: "justify-content: space-between;"
                    }, (0, i.h)("h3", null, "My Library (", this.items.length, ")"), (0, i.h)("div", null, (0, i.h)("button", {
                        onClick: this.props.exportBtnClickHandler,
                        class: "btn--dark hint--bottom-left hint--rounded hint--medium",
                        "aria-label": "Export all your creations into a single importable file."
                    }, "Export"), (0, i.h)("button", {
                        onClick: this.importBtnClickHandler.bind(this),
                        class: "btn--dark hint--bottom-left hint--rounded hint--medium",
                        "aria-label": "Import your creations. Only the file that you export through the 'Export' button can be imported."
                    }, "Import"))), (0, i.h)("input", {
                        id: "searchInput",
                        class: "search-input",
                        onInput: this.searchInputHandler.bind(this),
                        placeholder: "Search your creations here..."
                    }), (0, i.h)("div", {
                        id: "js-saved-items-wrap",
                        class: "saved-items-pane__container"
                    }, !this.state.filteredItems.length && this.items.length ? u : null, this.state.filteredItems.map(function(t) {
                        return (0, i.h)(d.ItemTile, {
                            item: t,
                            onClick: e.itemClickHandler.bind(e, t),
                            onForkBtnClick: e.itemForkBtnClickHandler.bind(e, t),
                            onRemoveBtnClick: e.itemRemoveBtnClickHandler.bind(e, t)
                        })
                    }), this.items.length ? null : m))
                }, t
            }(i.Component);
        t.default = f
    },
    uO6b: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.MainHeader = function(e) {
            return (0, n.h)("div", {
                class: "main-header"
            }, (0, n.h)("input", {
                type: "text",
                id: "titleInput",
                title: "Click to edit",
                class: "item-title-input",
                value: e.title,
                onBlur: e.titleInputBlurHandler
            }), (0, n.h)("div", {
                class: "main-header__btn-wrap  flex  flex-v-center"
            }, (0, n.h)("button", {
                id: "runBtn",
                class: "hide btn--dark flex flex-v-center hint--rounded hint--bottom-left",
                "aria-label": "Run preview (Ctrl/\u2318 + Shift + 5)",
                onClick: e.runBtnClickHandler
            }, i, "Run"), (0, n.h)(s.Button, {
                onClick: e.addLibraryBtnHandler,
                "data-event-category": "ui",
                "data-event-action": "addLibraryButtonClick",
                class: "btn--dark flex-v-center hint--rounded hint--bottom-left",
                "aria-label": "Add a JS/CSS library"
            }, "Add library", " ", (0, n.h)("span", {
                id: "js-external-lib-count",
                style: "display:" + (e.externalLibCount ? "inline" : "none"),
                class: "count-label"
            }, e.externalLibCount)), (0, n.h)("button", {
                class: "btn--dark flex  flex-v-center hint--rounded hint--bottom-left",
                "aria-label": "Start a new creation",
                onClick: e.newBtnHandler
            }, r, "New"), (0, n.h)("button", {
                id: "saveBtn",
                class: "btn--dark flex  flex-v-center hint--rounded hint--bottom-left " + (e.isSaving ? "is-loading" : "") + " " + (e.unsavedEditCount ? "is-marked" : 0),
                "aria-label": "Save current creation (Ctrl/\u2318 + S)",
                onClick: e.saveBtnHandler
            }, l, d, "Save"), (0, n.h)("button", {
                id: "openItemsBtn",
                class: "btn--dark flex flex-v-center hint--rounded hint--bottom-left " + (e.isFetchingItems ? "is-loading" : ""),
                "aria-label": "Open a saved creation (Ctrl/\u2318 + O)",
                onClick: e.openBtnHandler
            }, c, p, "Open"), (0, n.h)(s.Button, {
                onClick: e.loginBtnHandler,
                "data-event-category": "ui",
                "data-event-action": "loginButtonClick",
                class: "hide-on-login btn--dark flex  flex-v-center  hint--rounded  hint--bottom-left",
                "aria-label": "Login/Signup"
            }, "Login/Signup"), (0, n.h)(s.Button, {
                onClick: e.profileBtnHandler,
                "data-event-category": "ui",
                "data-event-action": "headerAvatarClick",
                "aria-label": "See profile or Logout",
                class: "hide-on-logout btn--dark hint--rounded  hint--bottom-left"
            }, (0, n.h)("img", {
                id: "headerAvatarImg",
                width: "20",
                src: e.user ? e.user.photoURL || a : "",
                class: "main-header__avatar-img"
            }))))
        };
        var n = o("KM04"),
            s = o("f66c"),
            a = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='#ccc' d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z' /%3E%3C/svg%3E",
            i = (0, n.h)("svg", {
                style: "width: 14px; height: 14px;"
            }, (0, n.h)("use", {
                xlinkHref: "#play-icon"
            })),
            r = (0, n.h)("svg", {
                style: "vertical-align:middle;width:14px;height:14px",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            })),
            l = (0, n.h)("svg", {
                style: "vertical-align:middle;width:14px;height:14px",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
            })),
            d = (0, n.h)("svg", {
                class: "btn-loader",
                width: "15",
                height: "15",
                stroke: "#fff"
            }, (0, n.h)("use", {
                xlinkHref: "#loader-icon"
            })),
            c = (0, n.h)("svg", {
                style: "width:14px;height:14px;vertical-align:middle;",
                viewBox: "0 0 24 24"
            }, (0, n.h)("path", {
                d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            })),
            p = (0, n.h)("svg", {
                class: "btn-loader",
                width: "15",
                height: "15",
                stroke: "#fff"
            }, (0, n.h)("use", {
                xlinkHref: "#loader-icon"
            }))
    },
    uXt8: function(e, t, o) {
        "use strict";
        var n = o("ZUoI"),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n);
        s.default.initializeApp({
            apiKey: "AIzaSyBl8Dz7ZOE7aP75mipYl2zKdLSRzBU2fFc",
            authDomain: "web-maker-app.firebaseapp.com",
            databaseURL: "https://web-maker-app.firebaseio.com",
            projectId: "web-maker-app",
            storageBucket: "web-maker-app.appspot.com",
            messagingSenderId: "560473480645"
        })
    },
    uv7j: function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, o) {
                    function n(s, a) {
                        try {
                            var i = t[s](a),
                                r = i.value
                        } catch (e) {
                            return void o(e)
                        }
                        return i.done ? void e(r) : Promise.resolve(r).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        })
                    }
                    return n("next")
                })
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var l = Object.assign || function(e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            },
            d = o("KM04"),
            c = o("uO6b"),
            p = o("7vko"),
            h = n(p),
            u = o("MXol"),
            m = n(u),
            f = o("qoQ6"),
            g = n(f),
            b = o("6Vka"),
            y = n(b),
            v = o("inAt"),
            C = n(v),
            k = o("VB7N"),
            S = n(k),
            w = o("E5zE"),
            M = o("6Ptt"),
            _ = o("bjFU");
        o("BcU7");
        var x = o("0lUe"),
            H = o("Q8fL"),
            I = n(H),
            L = o("y5h4"),
            j = o("qV3Q"),
            E = o("3Z4F"),
            B = o("Mo6r"),
            A = o("ZUoI"),
            O = n(A);
        o("zKjx");
        var T = o("18yn"),
            P = o("jHnz"),
            D = o("UzHC"),
            V = o("1IZv"),
            F = o("Zox/"),
            z = o("g1Sf"),
            N = o("CbJP"),
            W = o("q6qL"),
            U = n(W),
            R = o("i8IT"),
            K = o("W5Uw"),
            J = o("4Qrw"),
            q = o("03MQ"),
            G = o("0job"),
            Z = o("1miM"),
            Y = n(Z);
        var Q = {
                LOGIN_AND_SAVE_MESSAGE_SEEN: "loginAndsaveMessageSeen",
                ASKED_TO_IMPORT_CREATIONS: "askedToImportCreations"
            },
            X = 15,
            ee = "3.4.1",
            te = (0, d.h)("div", {
                class: "global-console-container",
                id: "globalConsoleContainerEl"
            }),
            oe = (0, d.h)(N.Alerts, null),
            ne = (0, d.h)("form", {
                style: "display:none;",
                action: "https://codepen.io/pen/define",
                method: "POST",
                target: "_blank",
                id: "js-codepen-form"
            }, (0, d.h)("input", {
                type: "hidden",
                name: "data",
                value: "{\"title\": \"New Pen!\", \"html\": \"<div>Hello, World!</div>\"}"
            })),
            se = (0, d.h)(S.default, null),
            ae = (0, d.h)(G.Icons, null),
            ie = (0, d.h)("form", {
                style: "display:none;",
                action: "https://codepen.io/pen/define",
                method: "POST",
                target: "_blank",
                id: "codepenForm"
            }, (0, d.h)("input", {
                type: "hidden",
                name: "data",
                value: "{\"title\": \"New Pen!\", \"html\": \"<div>Hello, World!</div>\"}"
            })),
            re = function(e) {
                function t() {
                    a(this, t);
                    var o = i(this, e.call(this));
                    return o.AUTO_SAVE_INTERVAL = 15000, o.modalDefaultStates = {
                        isModalOpen: !1,
                        isAddLibraryModalOpen: !1,
                        isSettingsModalOpen: !1,
                        isHelpModalOpen: !1,
                        isNotificationsModalOpen: !1,
                        isLoginModalOpen: !1,
                        isProfileModalOpen: !1,
                        isSupportDeveloperModalOpen: !1,
                        isKeyboardShortcutsModalOpen: !1,
                        isAskToImportModalOpen: !1,
                        isOnboardModalOpen: !1,
                        isJs13KModalOpen: !1,
                        isCreateNewModalOpen: !1
                    }, o.state = l({
                        isSavedItemPaneOpen: !1
                    }, o.modalDefaultStates, {
                        prefs: {},
                        currentItem: {
                            title: "",
                            externalLibs: {
                                js: "",
                                css: ""
                            }
                        }
                    }), o.defaultSettings = {
                        preserveLastCode: !0,
                        replaceNewTab: !1,
                        htmlMode: "html",
                        jsMode: "js",
                        cssMode: "css",
                        isCodeBlastOn: !1,
                        indentWith: "spaces",
                        indentSize: 2,
                        editorTheme: "monokai",
                        keymap: "sublime",
                        fontSize: 16,
                        refreshOnResize: !1,
                        autoPreview: !0,
                        editorFont: "FiraCode",
                        editorCustomFont: "",
                        autoSave: !0,
                        autoComplete: !0,
                        preserveConsoleLogs: !0,
                        lightVersion: !1,
                        lineWrap: !0,
                        infiniteLoopTimeout: 1e3,
                        layoutMode: 2,
                        isJs13kModeOn: !1
                    }, o.prefs = {}, O.default.auth().onAuthStateChanged(function(e) {
                        o.setState({
                            isLoginModalOpen: !1
                        }), e ? ((0, M.log)("You are -> ", e), B.alertsService.add("You are now logged in!"), o.setState({
                            user: e
                        }), window.user = e, !window.localStorage[Q.ASKED_TO_IMPORT_CREATIONS] && o.fetchItems(!1, !0).then(function(e) {
                            e.length && (o.oldSavedItems = e, o.oldSavedCreationsCount = e.length, o.setState({
                                isAskToImportModalOpen: !0
                            }), (0, j.trackEvent)("ui", "askToImportModalSeen"))
                        }), window.db.getUser(e.uid).then(function(t) {
                            if (t) {
                                var n = l({}, o.state.prefs);
                                l(n, e.settings), o.setState({
                                    prefs: n
                                }), o.updateSetting()
                            }
                        })) : (o.setState({
                            user: void 0
                        }), delete window.user), o.updateProfileUi()
                    }), o
                }
                return r(t, e), t.prototype.componentWillMount = function() {
                    var e, t = this;
                    window.onunload = function() {
                        t.saveCode("code"), t.detachedWindow && t.detachedWindow.close()
                    }, db.local.get({
                        layoutMode: 1,
                        code: ""
                    }, function(o) {
                        t.toggleLayout(o.layoutMode), t.state.prefs.layoutMode = o.layoutMode, o.code && (e = o.code)
                    }), db.getSettings(this.defaultSettings).then(function(o) {
                        o.preserveLastCode && e ? (t.setState({
                            unsavedEditCount: 0
                        }), e.id && window.IS_EXTENSION ? db.local.get(e.id, function(o) {
                            o[e.id] && ((0, M.log)("Load item ", e.id), t.setCurrentItem(o[e.id]).then(function() {
                                return t.refreshEditor()
                            }))
                        }) : ((0, M.log)("Load last unsaved item", e), t.setCurrentItem(e).then(function() {
                            return t.refreshEditor()
                        }))) : t.createNewItem(), l(t.state.prefs, o), t.setState({
                            prefs: t.state.prefs
                        }), t.updateSetting()
                    }), db.getUserLastSeenVersion().then(function(e) {
//                        e || (t.setState({
//                            isOnboardModalOpen: !0
//                        }), -1 === document.cookie.indexOf("onboarded") && ((0, j.trackEvent)("ui", "onboardModalSeen", ee), document.cookie = "onboarded=1"), window.db.setUserLastSeenVersion(ee)), e && -1 === (0, M.semverCompare)(e, ee) && !window.localStorage.pledgeModalSeen && (t.openSupportDeveloperModal(), window.localStorage.pledgeModalSeen = !0), e && -1 !== (0, M.semverCompare)(e, ee) || (t.setState({
//                            hasUnseenChangelog: !0
 //                       }), t.hasSeenNotifications = !1)
                    })
                }, t.prototype.updateProfileUi = function() {
                    this.state.user ? document.body.classList.add("is-logged-in") : document.body.classList.remove("is-logged-in")
                }, t.prototype.refreshEditor = function() {
                    this.toggleLayout(this.state.currentItem.layoutMode || this.state.prefs.layoutMode), this.updateExternalLibCount(), this.contentWrap.refreshEditor()
                }, t.prototype.forkItem = function(e) {
                    var t = this;
                    if (this.state.unsavedEditCount) {
                        var o = confirm("You have unsaved changes in your current work. Do you want to discard unsaved changes and continue?");
                        if (!o) return
                    }
                    var n = JSON.parse(JSON.stringify(e));
                    delete n.id, n.title = "(Forked) " + e.title, n.updatedOn = Date.now(), this.setCurrentItem(n).then(function() {
                        return t.refreshEditor()
                    }), B.alertsService.add("\"" + e.title + "\" was forked"), (0, j.trackEvent)("fn", "itemForked")
                }, t.prototype.createNewItem = function() {
                    var e = this,
                        t = new Date;
                    this.setCurrentItem({
                        title: "Untitled " + t.getDate() + "-" + (t.getMonth() + 1) + "-" + t.getHours() + ":" + t.getMinutes(),
                        html: "",
                        css: "",
                        js: "",
                        externalLibs: {
                            js: "",
                            css: ""
                        },
                        layoutMode: this.state.currentLayoutMode
                    }).then(function() {
                        return e.refreshEditor()
                    }), B.alertsService.add("New item created")
                }, t.prototype.openItem = function(e) {
                    var t = this;
                    this.setCurrentItem(e).then(function() {
                        return t.refreshEditor()
                    }), B.alertsService.add("Saved item loaded")
                }, t.prototype.removeItem = function(e) {
                    var t = this,
                        o = confirm("Are you sure you want to delete \"" + e.title + "\"?");
                    o && (_.itemService.unsetItemForUser(e.id), _.itemService.removeItem(e.id).then(function() {
                        B.alertsService.add("Item removed.", e), t.state.currentItem.id === e.id && t.createNewItem()
                    }), delete this.state.savedItems[e.id], this.setState({
                        savedItems: l({}, this.state.savedItems)
                    }), (0, j.trackEvent)("fn", "itemRemoved"))
                }, t.prototype.setCurrentItem = function(e) {
                    var t = (0, E.deferred)();
                    return e.htmlMode = e.htmlMode || this.state.prefs.htmlMode || L.HtmlModes.HTML, e.cssMode = e.cssMode || this.state.prefs.cssMode || L.CssModes.CSS, e.jsMode = e.jsMode || this.state.prefs.jsMode || L.JsModes.JS, this.setState({
                        currentItem: e
                    }, t.resolve), this.isAutoSavingEnabled = !1, this.setState({
                        unsavedEditCount: 0
                    }), t.promise
                }, t.prototype.saveBtnClickHandler = function() {
                    (0, j.trackEvent)("ui", "saveBtnClick", this.state.currentItem.id ? "saved" : "new"), this.saveItem()
                }, t.prototype.populateItemsInSavedPane = function() {
                    this.setState({
                        savedItems: l({}, this.state.savedItems)
                    }), this.toggleSavedItemsPane()
                }, t.prototype.toggleSavedItemsPane = function() {
                    this.setState({
                        isSavedItemPaneOpen: !this.state.isSavedItemPaneOpen
                    }), this.state.isSavedItemPaneOpen ? window.searchInput.focus() : window.searchInput.value = "", document.body.classList[this.state.isSavedItemPaneOpen ? "add" : "remove"]("overlay-visible")
                }, t.prototype.fetchItems = function() {
                    var e = s(function*(e, t) {
                        var o = this,
                            n = (0, E.deferred)();
                        this.state.savedItems = {};
                        var s = [];
                        return window.user && !t ? (s = yield _.itemService.getAllItems(), (0, M.log)("got items"), e && s.forEach(function(e) {
                            o.state.savedItems[e.id] = e
                        }), n.resolve(s), n.promise) : (db.local.get("items", function(t) {
                            var a = Object.getOwnPropertyNames(t.items || {});
                            a.length || n.resolve([]), (0, j.trackEvent)("fn", "fetchItems", a.length);
                            for (var r = function(t) {
                                    db.local.get(a[t], function(i) {
                                        e && (o.state.savedItems[a[t]] = i[a[t]]), s.push(i[a[t]]), a.length === s.length && n.resolve(s)
                                    })
                                }, l = 0; l < a.length; l++) r(l)
                        }), n.promise)
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), t.prototype.openSavedItemsPane = function() {
                    var e = this;
                    this.setState({
                        isFetchingItems: !0
                    }), this.fetchItems(!0).then(function(t) {
                        e.setState({
                            isFetchingItems: !1
                        }), e.populateItemsInSavedPane(t)
                    })
                }, t.prototype.openAddLibrary = function() {
                    this.setState({
                        isAddLibraryModalOpen: !0
                    })
                }, t.prototype.closeSavedItemsPane = function() {
                    this.setState({
                        isSavedItemPaneOpen: !1
                    }), document.body.classList.remove("overlay-visible"), this.editorWithFocus && this.editorWithFocus.focus()
                }, t.prototype.componentDidMount = function() {
                    var e = this;
                    document.body.style.height = window.innerHeight + "px", window.addEventListener("keydown", function(t) {
                        (t.ctrlKey || t.metaKey) && 83 === t.keyCode && (t.preventDefault(), e.saveItem(), (0, j.trackEvent)("ui", "saveItemKeyboardShortcut")), (t.ctrlKey || t.metaKey) && t.shiftKey && 53 === t.keyCode ? (t.preventDefault(), e.contentWrap.setPreviewContent(!0, !0), (0, j.trackEvent)("ui", "previewKeyboardShortcut")) : (t.ctrlKey || t.metaKey) && 79 === t.keyCode ? (t.preventDefault(), e.openSavedItemsPane(), (0, j.trackEvent)("ui", "openCreationKeyboardShortcut")) : (t.ctrlKey || t.metaKey) && t.shiftKey && 191 === t.keyCode ? (t.preventDefault(), e.setState({
                            isKeyboardShortcutsModalOpen: !e.state.isKeyboardShortcutsModalOpen
                        }), (0, j.trackEvent)("ui", "showKeyboardShortcutsShortcut")) : 27 === t.keyCode && e.closeSavedItemsPane()
                    }), window.addEventListener("focusin", function(t) {
                        if (document.body.classList.contains("overlay-visible")) {
                            var e = $(".is-modal-visible");
                            if (!e) return;
                            e.contains(t.target) || (t.preventDefault(), e.querySelector(".js-modal__close-btn").focus())
                        }
                    })
                }, t.prototype.closeAllOverlays = function() {
                    this.state.isSavedItemPaneOpen && this.closeSavedItemsPane(), this.setState(l({}, this.modalDefaultStates))
                }, t.prototype.onExternalLibChange = function(e) {
                    (0, M.log)("onExternalLibChange"), this.state.currentItem.externalLibs = {
                        js: e.js,
                        css: e.css
                    }, this.updateExternalLibCount(), this.setState({
                        currentItem: l({}, this.state.currentItem)
                    }), this.contentWrap.setPreviewContent(!0), B.alertsService.add("Libraries updated.")
                }, t.prototype.updateExternalLibCount = function() {
                    var e = 0;
                    this.state.currentItem.externalLibs && (e += this.state.currentItem.externalLibs.js.split("\n").filter(function(e) {
                        return !!e
                    }).length, e += this.state.currentItem.externalLibs.css.split("\n").filter(function(e) {
                        return !!e
                    }).length, this.setState({
                        externalLibCount: e
                    }))
                }, t.prototype.toggleLayout = function(e) {
                    var t = this;
                    return e = 600 > window.innerWidth ? 2 : e, this.state.currentLayoutMode === e ? (this.contentWrap.resetSplitting(), void this.setState({
                        currentLayoutMode: e
                    })) : void([1, 2, 3, 4, 5].forEach(function(e) {
                        window["layoutBtn" + e].classList.remove("selected"), document.body.classList.remove("layout-" + e)
                    }), $("#layoutBtn" + e).classList.add("selected"), document.body.classList.add("layout-" + e), this.setState({
                        currentLayoutMode: e
                    }, function() {
                        t.contentWrap.resetSplitting(), t.contentWrap.setPreviewContent(!0)
                    }))
                }, t.prototype.layoutBtnClickHandler = function(e) {
                    this.saveSetting("layoutMode", e), (0, j.trackEvent)("ui", "toggleLayoutClick", e), this.toggleLayout(e)
                }, t.prototype.getCodePaneSizes = function() {
                    var e, t = this.state.currentLayoutMode,
                        o = 2 === t || 5 === t ? "width" : "height";
                    try {
                        e = [htmlCodeEl.style[o], cssCodeEl.style[o], jsCodeEl.style[o]]
                    } catch (t) {
                        e = [33.33, 33.33, 33.33]
                    } finally {
                        return e
                    }
                }, t.prototype.getMainPaneSizes = function() {
                    var e, t = this.state.currentLayoutMode,
                        o = 2 === t ? "height" : "width";
                    try {
                        e = [+$("#js-code-side").style[o].match(/([\d.]+)%/)[1], +$("#js-demo-side").style[o].match(/([\d.]+)%/)[1]]
                    } catch (t) {
                        e = [50, 50]
                    } finally {
                        return e
                    }
                }, t.prototype.saveSetting = function(e, t) {
                    var o, n = (0, E.deferred)(),
                        s = (o = {}, o[e] = t, o);
                    return db.local.set(s, n.resolve), n.promise
                }, t.prototype.saveCode = function(e) {
                    return this.state.currentItem.updatedOn = Date.now(), this.state.currentItem.layoutMode = this.state.currentLayoutMode, this.state.currentItem.sizes = this.getCodePaneSizes(), this.state.currentItem.mainSizes = this.getMainPaneSizes(), (0, M.log)("saving key", e || this.state.currentItem.id, this.state.currentItem), _.itemService.setItem(e || this.state.currentItem.id, this.state.currentItem).then(function() {
                        window.user && !navigator.onLine ? B.alertsService.add("Item saved locally. Will save to account when you are online.") : B.alertsService.add("Item saved."), this.setState({
                            unsavedEditCount: 0
                        })
                    }.bind(this))
                }, t.prototype.saveItem = function() {
                    var e = this;
                    if (!window.user && !window.localStorage[Q.LOGIN_AND_SAVE_MESSAGE_SEEN]) {
                        var t = confirm("Saving without signing in will save your work only on this machine and this browser. If you want it to be secure & available anywhere, please login in your account and then save.\n\nDo you still want to continue saving locally?");
                        if (window.localStorage[Q.LOGIN_AND_SAVE_MESSAGE_SEEN] = !0, !t) return (0, j.trackEvent)("ui", Q.LOGIN_AND_SAVE_MESSAGE_SEEN, "login"), this.closeAllOverlays(), void this.setState({
                            isLoginModalOpen: !0
                        });
                        (0, j.trackEvent)("ui", Q.LOGIN_AND_SAVE_MESSAGE_SEEN, "local")
                    }
                    var o = !this.state.currentItem.id;
                    this.state.currentItem.id = this.state.currentItem.id || "item-" + (0, M.generateRandomId)(), this.setState({
                        isSaving: !0
                    }), this.saveCode().then(function() {
                        e.setState({
                            isSaving: !1
                        }), !e.isAutoSavingEnabled && e.state.prefs.autoSave && (e.isAutoSavingEnabled = !0, B.alertsService.add("Auto-save enabled."))
                    }), o && _.itemService.setItemForUser(this.state.currentItem.id)
                }, t.prototype.onCodeModeChange = function(e, t) {
                    var o = l({}, this.state.currentItem);
                    o[e + "Mode"] = t, this.setState({
                        currentItem: o
                    })
                }, t.prototype.onCodeChange = function(e, t, o) {
                    var n = this;
                    this.state.currentItem[e] = t, o && (this.setState({
                        unsavedEditCount: this.state.unsavedEditCount + 1
                    }), 0 == this.state.unsavedEditCount % X && this.state.unsavedEditCount >= X && (window.saveBtn.classList.add("animated"), window.saveBtn.classList.add("wobble"), window.saveBtn.addEventListener("animationend", function() {
                        window.saveBtn.classList.remove("animated"), window.saveBtn.classList.remove("wobble")
                    }))), this.state.prefs.isJs13kModeOn && (this.codeSizeCalculationTimeout && clearTimeout(this.codeSizeCalculationTimeout), this.codeSizeCalculationTimeout = setTimeout(function() {
                        n.calculateCodeSize(), n.codeSizeCalculationTimeout = null
                    }, 1e3))
                }, t.prototype.onCodeSettingsChange = function(e, t) {
                    this.state.currentItem[e + "Settings"] = {
                        acssConfig: t
                    }
                }, t.prototype.titleInputBlurHandler = function(t) {
                    this.state.currentItem.title = t.target.value, this.state.currentItem.id && (this.saveItem(), (0, j.trackEvent)("ui", "titleChanged"))
                }, t.prototype.updateSetting = function(t) {
                    var e = this;
                    if (t) {
                        var o = t.target.dataset.setting,
                            n = {},
                            s = t.target;
                        (0, M.log)(o, "checkbox" === s.type ? s.checked : s.value);
                        var a = l({}, this.state.prefs);
                        a[o] = "checkbox" === s.type ? s.checked : s.value, n[o] = a[o], this.setState({
                            prefs: a
                        }), db.sync.set(n, function() {
                            B.alertsService.add("Setting saved")
                        }), window.user && window.db.getDb().then(function(t) {
                            var n;
                            t.collection("users").doc(window.user.uid).update((n = {}, n["settings." + o] = e.state.prefs[o], n)).then(function(e) {
                                (0, M.log)("Setting \"" + o + "\" for user", e)
                            }).catch(function(e) {
                                return (0, M.log)(e)
                            })
                        }), (0, j.trackEvent)("ui", "updatePref-" + o, a[o])
                    }
                    var i = this.state.prefs;
                    runBtn.classList[i.autoPreview ? "add" : "remove"]("hide"), this.contentWrap.applyCodemirrorSettings(this.state.prefs), i.autoSave ? !this.autoSaveInterval && (this.autoSaveInterval = setInterval(function() {
                        e.autoSaveLoop()
                    }, this.AUTO_SAVE_INTERVAL)) : (clearInterval(this.autoSaveInterval), this.autoSaveInterval = null), document.body.classList[i.lightVersion ? "add" : "remove"]("light-version")
                }, t.prototype.autoSaveLoop = function() {
                    this.isAutoSavingEnabled && this.state.unsavedEditCount && this.saveItem()
                }, t.prototype.loginBtnClickHandler = function() {
                    this.setState({
                        isLoginModalOpen: !0
                    })
                }, t.prototype.profileBtnClickHandler = function() {
                    this.setState({
                        isProfileModalOpen: !0
                    })
                }, t.prototype.logout = function() {
                    if (this.state.unsavedEditCount) {
                        var e = confirm("You have unsaved changes. Do you still want to logout?");
                        if (!e) return
                    }(0, j.trackEvent)("fn", "loggedOut"), P.auth.logout(), this.setState({
                        isProfileModalOpen: !1
                    }), B.alertsService.add("Log out successfull")
                }, t.prototype.itemClickHandler = function(e) {
                    var t = this;
                    setTimeout(function() {
                        t.openItem(e)
                    }, 350), this.toggleSavedItemsPane()
                }, t.prototype.itemRemoveBtnClickHandler = function(e) {
                    this.removeItem(e)
                }, t.prototype.itemForkBtnClickHandler = function(e) {
                    var t = this;
                    this.toggleSavedItemsPane(), setTimeout(function() {
                        t.forkItem(e)
                    }, 350)
                }, t.prototype.newBtnClickHandler = function() {
                    if ((0, j.trackEvent)("ui", "newBtnClick"), this.state.unsavedEditCount) {
                        var e = confirm("You have unsaved changes. Do you still want to create something new?");
                        e && this.setState({
                            isCreateNewModalOpen: !0
                        })
                    } else this.setState({
                        isCreateNewModalOpen: !0
                    })
                }, t.prototype.openBtnClickHandler = function() {
                    (0, j.trackEvent)("ui", "openBtnClick"), this.openSavedItemsPane()
                }, t.prototype.detachedPreviewBtnHandler = function() {
                    (0, j.trackEvent)("ui", "detachPreviewBtnClick"), this.contentWrap.detachPreview()
                }, t.prototype.notificationsBtnClickHandler = function() {
                    return this.setState({
                        isNotificationsModalOpen: !0
                    }), this.state.isNotificationsModalOpen && !this.hasSeenNotifications && (this.hasSeenNotifications = !0, this.setState({
                        hasUnseenChangelog: !1
                    }), window.db.setUserLastSeenVersion(ee)), (0, j.trackEvent)("ui", "notificationButtonClick", ee), !1
                }, t.prototype.codepenBtnClickHandler = function(t) {
                    if (this.state.currentItem.cssMode === L.CssModes.ACSS) return alert("Oops! CodePen doesn't supports Atomic CSS currently. \nHere is something you can still do -> https://medium.com/web-maker/sharing-your-atomic-css-work-on-codepen-a402001b26ab"), void t.preventDefault();
                    var e = {
                        title: "A Web Maker experiment",
                        html: this.state.currentItem.html,
                        css: this.state.currentItem.css,
                        js: this.state.currentItem.js,
                        html_pre_processor: L.modes[this.state.currentItem.htmlMode].codepenVal,
                        css_pre_processor: L.modes[this.state.currentItem.cssMode].codepenVal,
                        js_pre_processor: L.modes[this.state.currentItem.jsMode].codepenVal,
                        css_external: this.state.currentItem.externalLibs.css.split("\n").join(";"),
                        js_external: this.state.currentItem.externalLibs.js.split("\n").join(";")
                    };
                    this.state.currentItem.title.match(/Untitled\s\d\d*-\d/) || (e.title = this.state.currentItem.title), e = JSON.stringify(e), window.codepenForm.querySelector("input").value = e, window.codepenForm.submit(), (0, j.trackEvent)("ui", "openInCodepen"), t.preventDefault()
                }, t.prototype.saveHtmlBtnClickHandler = function(t) {
                    (0, M.saveAsHtml)(this.state.currentItem), (0, j.trackEvent)("ui", "saveHtmlClick"), t.preventDefault()
                }, t.prototype.runBtnClickHandler = function() {
                    this.contentWrap.setPreviewContent(!0, !0), (0, j.trackEvent)("ui", "runBtnClick")
                }, t.prototype.exportItems = function() {
                    var e = this;
                    (0, M.handleDownloadsPermission)().then(function() {
                        e.fetchItems().then(function(e) {
                            var t = new Date,
                                o = ["web-maker-export", t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()].join("-");
                            o += ".json";
                            var n = new Blob([JSON.stringify(e, !1, 2)], {
                                type: "application/json;charset=UTF-8"
                            });
                            (0, M.downloadFile)(o, n), (0, j.trackEvent)("fn", "exportItems")
                        })
                    })
                }, t.prototype.exportBtnClickHandler = function(t) {
                    this.exportItems(), t.preventDefault(), (0, j.trackEvent)("ui", "exportBtnClicked")
                }, t.prototype.screenshotBtnClickHandler = function(t) {
                    this.contentWrap.getDemoFrame(function(e) {
                        (0, F.takeScreenshot)(e.getBoundingClientRect())
                    }), t.preventDefault()
                }, t.prototype.openSupportDeveloperModal = function() {
                    this.closeAllOverlays(), this.setState({
                        isSupportDeveloperModalOpen: !0
                    })
                }, t.prototype.supportDeveloperBtnClickHandler = function(t) {
                    this.openSupportDeveloperModal(t)
                }, t.prototype.dontAskToImportAnymore = function(t) {
                    this.setState({
                        isAskToImportModalOpen: !1
                    }), window.localStorage[Q.ASKED_TO_IMPORT_CREATIONS] = !0, t && (0, j.trackEvent)("ui", "dontAskToImportBtnClick")
                }, t.prototype.importCreationsAndSettingsIntoApp = function() {
                    var e = this;
                    this.mergeImportedItems(this.oldSavedItems).then(function() {
                        (0, j.trackEvent)("fn", "oldItemsImported"), e.dontAskToImportAnymore()
                    })
                }, t.prototype.editorFocusHandler = function(e) {
                    this.editorWithFocus = e
                }, t.prototype.modalOverlayClickHandler = function() {
                    this.closeAllOverlays()
                }, t.prototype.splitUpdateHandler = function() {
                    this.state.currentItem.sizes = this.getCodePaneSizes(), this.state.currentItem.mainSizes = this.getMainPaneSizes()
                }, t.prototype.calculateTextSize = function(e) {
                    if (!e) return 0;
                    var t = /(\r?\n|\r)/g,
                        o = /(\r?\n|\r|\s+)/g;
                    return {
                        count: function(e, n) {
                            n = n || {}, n.lineBreaks = n.lineBreaks || 1, n.ignoreWhitespace = n.ignoreWhitespace || !1;
                            var s = e.length,
                                a = s - e.replace(/[\u0100-\uFFFF]/g, "").length,
                                i = s - e.replace(t, "").length;
                            return n.ignoreWhitespace ? (e = e.replace(o, ""), e.length + a) : s + a + Math.max(0, n.lineBreaks * (i - 1))
                        },
                        format: function(e, t) {
                            for (var o = 0; 1024 < e;) e /= 1024, o++;
                            return e = Math.round(100 * e) / 100, o = ["", "K", "M", "G", "T"][o], (t ? e : "<strong>" + e + "</strong>") + " " + o + "B"
                        }
                    }.count(e)
                }, t.prototype.getExternalLibCode = function() {
                    var e = this.state.currentItem,
                        t = e.externalLibs && e.externalLibs.js || "";
                    return t += "\n" + e.externalLibs && e.externalLibs.css || "", t = t.split("\n").filter(function(e) {
                        return e
                    }), t.map(function(e) {
                        return fetch(e).then(function(e) {
                            return e.text()
                        }).then(function(t) {
                            return {
                                code: t,
                                fileName: (0, M.getFilenameFromUrl)(e)
                            }
                        })
                    })
                }, t.prototype.calculateCodeSize = function() {
                    var e = this,
                        t = this.state.currentItem,
                        o = (0, w.computeHtml)(t.html, t.htmlMode),
                        n = (0, w.computeCss)(t.css, t.cssMode),
                        s = (0, w.computeJs)(t.js, t.jsMode, !1);
                    Promise.all([o, n, s].concat(this.getExternalLibCode())).then(function(o) {
                        var n = o[0].code || "",
                            s = o[1].code || "",
                            a = o[2].code || "",
                            r = (0, M.getCompleteHtml)(n, s, a, t, !0);
                        r = r.replace(/<script src="(.*\/)([^/<]*?)"/g, "<script src=\"$2\"");
                        var l = new Y.default;
                        l.file("index.html", r);
                        for (var d, c = 3; c < o.length; c++) d = o[c], l.file(d.fileName, d.code);
                        var i = null;
                        i = l.generateAsync({
                            type: "base64",
                            compression: "DEFLATE",
                            compressionOptions: {
                                level: 9
                            }
                        }), i.then(function(t) {
                            var o = e.calculateTextSize(atob(t));
                            e.setState({
                                codeSize: o
                            }), e.currentItemZipBase64Data = t
                        })
                    })
                }, t.prototype.js13KHelpBtnClickHandler = function() {
                    this.setState({
                        isJs13KModalOpen: !0
                    })
                }, t.prototype.js13KDownloadBtnClickHandler = function() {
                    var e = document.createElement("a");
                    e.setAttribute("download", this.state.currentItem.title), e.href = "data:application/zip;base64," + this.currentItemZipBase64Data, document.body.appendChild(e), e.click(), e.remove()
                }, t.prototype.blankTemplateSelectHandler = function() {
                    this.createNewItem(), this.setState({
                        isCreateNewModalOpen: !1
                    })
                }, t.prototype.templateSelectHandler = function(e) {
                    var t = this;
                    fetch("templates/template-" + e.id + ".json").then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        t.forkItem(e)
                    }), this.setState({
                        isCreateNewModalOpen: !1
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return (0, d.h)("div", null, (0, d.h)("div", {
                        class: "main-container"
                    }, (0, d.h)(c.MainHeader, {
                        externalLibCount: this.state.externalLibCount,
                        openBtnHandler: this.openBtnClickHandler.bind(this),
                        newBtnHandler: this.newBtnClickHandler.bind(this),
                        saveBtnHandler: this.saveBtnClickHandler.bind(this),
                        loginBtnHandler: this.loginBtnClickHandler.bind(this),
                        profileBtnHandler: this.profileBtnClickHandler.bind(this),
                        addLibraryBtnHandler: this.openAddLibrary.bind(this),
                        runBtnClickHandler: this.runBtnClickHandler.bind(this),
                        isFetchingItems: this.state.isFetchingItems,
                        isSaving: this.state.isSaving,
                        title: this.state.currentItem.title,
                        titleInputBlurHandler: this.titleInputBlurHandler.bind(this),
                        user: this.state.user,
                        unsavedEditCount: this.state.unsavedEditCount
                    }), (0, d.h)(h.default, {
                        currentLayoutMode: this.state.currentLayoutMode,
                        currentItem: this.state.currentItem,
                        onCodeChange: this.onCodeChange.bind(this),
                        onCodeSettingsChange: this.onCodeSettingsChange.bind(this),
                        onCodeModeChange: this.onCodeModeChange.bind(this),
                        onRef: function(t) {
                            return e.contentWrap = t
                        },
                        prefs: this.state.prefs,
                        onEditorFocus: this.editorFocusHandler.bind(this),
                        onSplitUpdate: this.splitUpdateHandler.bind(this)
                    }), te, (0, d.h)(m.default, {
                        prefs: this.state.prefs,
                        layoutBtnClickHandler: this.layoutBtnClickHandler.bind(this),
                        helpBtnClickHandler: function() {
                            return e.setState({
                                isHelpModalOpen: !0
                            })
                        },
                        settingsBtnClickHandler: function() {
                            return e.setState({
                                isSettingsModalOpen: !0
                            })
                        },
                        notificationsBtnClickHandler: this.notificationsBtnClickHandler.bind(this),
                        supportDeveloperBtnClickHandler: this.supportDeveloperBtnClickHandler.bind(this),
                        detachedPreviewBtnHandler: this.detachedPreviewBtnHandler.bind(this),
                        codepenBtnClickHandler: this.codepenBtnClickHandler.bind(this),
                        saveHtmlBtnClickHandler: this.saveHtmlBtnClickHandler.bind(this),
                        keyboardShortcutsBtnClickHandler: function() {
                            return e.setState({
                                isKeyboardShortcutsModalOpen: !0
                            })
                        },
                        screenshotBtnClickHandler: this.screenshotBtnClickHandler.bind(this),
                        onJs13KHelpBtnClick: this.js13KHelpBtnClickHandler.bind(this),
                        onJs13KDownloadBtnClick: this.js13KDownloadBtnClickHandler.bind(this),
                        hasUnseenChangelog: this.state.hasUnseenChangelog,
                        codeSize: this.state.codeSize
                    })), (0, d.h)(g.default, {
                        items: this.state.savedItems,
                        isOpen: this.state.isSavedItemPaneOpen,
                        closeHandler: this.closeSavedItemsPane.bind(this),
                        itemClickHandler: this.itemClickHandler.bind(this),
                        itemRemoveBtnClickHandler: this.itemRemoveBtnClickHandler.bind(this),
                        itemForkBtnClickHandler: this.itemForkBtnClickHandler.bind(this),
                        exportBtnClickHandler: this.exportBtnClickHandler.bind(this)
                    }), oe, ne, (0, d.h)(C.default, {
                        show: this.state.isAddLibraryModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isAddLibraryModalOpen: !1
                            })
                        }
                    }, (0, d.h)(y.default, {
                        js: this.state.currentItem.externalLibs ? this.state.currentItem.externalLibs.js : "",
                        css: this.state.currentItem.externalLibs ? this.state.currentItem.externalLibs.css : "",
                        onChange: this.onExternalLibChange.bind(this)
                    })), (0, d.h)(C.default, {
                        show: this.state.isNotificationsModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isNotificationsModalOpen: !1
                            })
                        }
                    }, (0, d.h)(x.Notifications, {
                        onSupportBtnClick: this.openSupportDeveloperModal.bind(this)
                    })), (0, d.h)(C.default, {
                        extraClasses: "modal--settings",
                        show: this.state.isSettingsModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isSettingsModalOpen: !1
                            })
                        }
                    }, (0, d.h)(I.default, {
                        prefs: this.state.prefs,
                        onChange: this.updateSetting.bind(this)
                    })), (0, d.h)(C.default, {
                        extraClasses: "login-modal",
                        show: this.state.isLoginModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isLoginModalOpen: !1
                            })
                        }
                    }, se), (0, d.h)(C.default, {
                        show: this.state.isProfileModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isProfileModalOpen: !1
                            })
                        }
                    }, (0, d.h)(T.Profile, {
                        user: this.state.user,
                        logoutBtnHandler: this.logout.bind(this)
                    })), (0, d.h)(R.HelpModal, {
                        show: this.state.isHelpModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isHelpModalOpen: !1
                            })
                        },
                        onSupportBtnClick: this.openSupportDeveloperModal.bind(this),
                        version: "3.3.1"
                    }), (0, d.h)(D.SupportDeveloperModal, {
                        show: this.state.isSupportDeveloperModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isSupportDeveloperModalOpen: !1
                            })
                        }
                    }), (0, d.h)(V.KeyboardShortcutsModal, {
                        show: this.state.isKeyboardShortcutsModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isKeyboardShortcutsModalOpen: !1
                            })
                        }
                    }), (0, d.h)(z.AskToImportModal, {
                        show: this.state.isAskToImportModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isAskToImportModalOpen: !1
                            })
                        },
                        oldSavedCreationsCount: this.oldSavedCreationsCount,
                        importBtnClickHandler: this.importCreationsAndSettingsIntoApp.bind(this),
                        dontAskBtnClickHandler: this.dontAskToImportAnymore.bind(this)
                    }), (0, d.h)(K.OnboardingModal, {
                        show: this.state.isOnboardModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isOnboardModalOpen: !1
                            })
                        }
                    }), (0, d.h)(J.Js13KModal, {
                        show: this.state.isJs13KModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isJs13KModalOpen: !1
                            })
                        }
                    }), (0, d.h)(q.CreateNewModal, {
                        show: this.state.isCreateNewModalOpen,
                        closeHandler: function() {
                            return e.setState({
                                isCreateNewModalOpen: !1
                            })
                        },
                        onBlankTemplateSelect: this.blankTemplateSelectHandler.bind(this),
                        onTemplateSelect: this.templateSelectHandler.bind(this)
                    }), (0, d.h)(U.default, {
                        into: "body"
                    }, (0, d.h)("div", {
                        class: "modal-overlay",
                        onClick: this.modalOverlayClickHandler.bind(this)
                    })), ae, ie)
                }, t
            }(d.Component);
        t.default = re
    },
    y5h4: function(e, t) {
        "use strict";
        t.__esModule = !0;
        var o = t.HtmlModes = {
                HTML: "html",
                MARKDOWN: "markdown",
                JADE: "jade"
            },
            n = t.CssModes = {
                CSS: "css",
                SCSS: "scss",
                SASS: "sass",
                LESS: "less",
                STYLUS: "stylus",
                ACSS: "acss"
            },
            s = t.JsModes = {
                JS: "js",
                ES6: "es6",
                COFFEESCRIPT: "coffee",
                TS: "typescript"
            },
            a = t.modes = {};
        a[o.HTML] = {
            label: "HTML",
            cmMode: "htmlmixed",
            codepenVal: "none"
        }, a[o.MARKDOWN] = {
            label: "Markdown",
            cmMode: "markdown",
            codepenVal: "markdown"
        }, a[o.JADE] = {
            label: "Pug",
            cmMode: "pug",
            codepenVal: "pug"
        }, a[s.JS] = {
            label: "JS",
            cmMode: "javascript",
            codepenVal: "none"
        }, a[s.COFFEESCRIPT] = {
            label: "CoffeeScript",
            cmMode: "coffeescript",
            codepenVal: "coffeescript"
        }, a[s.ES6] = {
            label: "ES6 (Babel)",
            cmMode: "jsx",
            codepenVal: "babel"
        }, a[s.TS] = {
            label: "TypeScript",
            cmPath: "jsx",
            cmMode: "text/typescript-jsx",
            codepenVal: "typescript"
        }, a[n.CSS] = {
            label: "CSS",
            cmPath: "css",
            cmMode: "css",
            codepenVal: "none"
        }, a[n.SCSS] = {
            label: "SCSS",
            cmPath: "css",
            cmMode: "text/x-scss",
            codepenVal: "scss"
        }, a[n.SASS] = {
            label: "SASS",
            cmMode: "sass",
            codepenVal: "sass"
        }, a[n.LESS] = {
            label: "LESS",
            cmPath: "css",
            cmMode: "text/x-less",
            codepenVal: "less"
        }, a[n.STYLUS] = {
            label: "Stylus",
            cmMode: "stylus",
            codepenVal: "stylus"
        }, a[n.ACSS] = {
            label: "Atomic CSS",
            cmPath: "css",
            cmMode: "css",
            codepenVal: "notsupported",
            cmDisable: !0,
            hasSettings: !0
        }
    }
}, ["pwNi"]);
