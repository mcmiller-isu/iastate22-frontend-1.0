webpackHotUpdate("main", {
  /***/ "./src/js/components/modal.ts":
    /*!************************************!*\
  !*** ./src/js/components/modal.ts ***!
  \************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";
      eval(
        '\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nexports.Modal = void 0;\nvar micromodal_1 = __importDefault(__webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js"));\nvar youtube_player_1 = __importDefault(__webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js"));\nvar body_scroll_lock_1 = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");\nvar accessibility_1 = __importDefault(__webpack_require__(/*! ../utilities/accessibility */ "./src/js/utilities/accessibility.ts"));\nvar Modal = /** @class */ (function () {\n    function Modal(element) {\n        this.isVideo = false;\n        if (!!element) {\n            this.element = element;\n            this.modalId = this.element.id;\n            this.isVideo = this.element.classList.contains("iastate22-modal--video");\n            this.videoMediaWrap = this.element.querySelector(".video-embed__media-wrap");\n            this.init();\n        }\n    }\n    Modal.prototype.init = function () {\n        this.convertAnchorsToButtons();\n        this.createVideoPlayer();\n        this.handleModalEvents();\n        this.moveModalToBottomOfBody();\n    };\n    Modal.prototype.convertAnchorsToButtons = function () {\n        var triggers = document.querySelectorAll("a[data-micromodal-trigger=\\"" + this.modalId + "\\"]");\n        var closers = this.element.querySelectorAll("a[data-micromodal-close]");\n        var anchors = __spreadArrays(Array.from(triggers), Array.from(closers));\n        for (var i = 0; i < anchors.length; i++) {\n            accessibility_1.default.convertAnchorToButton(anchors[i]);\n        }\n        this.triggers = document.querySelectorAll("[data-micromodal-trigger=\\"" + this.modalId + "\\"]");\n        this.closers = this.element.querySelectorAll("[data-micromodal-close]");\n    };\n    Modal.prototype.createVideoPlayer = function () {\n        if (this.isVideo) {\n            var playerRoot = this.element.querySelector(".iastate22-modal__media");\n            var videoId = playerRoot.dataset.vid;\n            this.player = youtube_player_1.default(playerRoot, {\n                videoId: videoId,\n                playerVars: {\n                    rel: 0,\n                },\n            });\n        }\n    };\n    Modal.prototype.handleModalEvents = function () {\n        var _this = this;\n        for (var i = 0; i < this.triggers.length; i++) {\n            this.triggers[i].addEventListener("click", function () {\n                micromodal_1.default.show(_this.modalId, {\n                    onShow: function (modal) {\n                        var event = new CustomEvent("micromodalshow", {\n                            detail: {\n                                modal: modal,\n                            },\n                            bubbles: true,\n                            cancelable: true,\n                            composed: false,\n                        });\n                        body_scroll_lock_1.disableBodyScroll(modal.querySelector(".iastate22-modal__container"));\n                        window.dispatchEvent(event);\n                        if (_this.isVideo) {\n                            _this.player.playVideo();\n                        }\n                    },\n                    onClose: function (modal) {\n                        var trigger = document.querySelector("[data-micromodal-trigger=\\"" + modal.id + "\\"]");\n                        var event = new CustomEvent("micromodalclose", {\n                            detail: {\n                                modal: modal,\n                            },\n                            bubbles: true,\n                            cancelable: true,\n                            composed: false,\n                        });\n                        body_scroll_lock_1.enableBodyScroll(modal.querySelector(".iastate22-modal__container"));\n                        window.dispatchEvent(event);\n                        console.log(trigger);\n                        console.log(trigger.closest(".image-gallery__item"));\n                        if (!!trigger) {\n                            if (!!trigger.closest(".image-gallery__item")) {\n                                var btn = trigger\n                                    .closest(".image-gallery__item")\n                                    .querySelector("button.iastate22-button");\n                                trigger.blur();\n                                btn.blur();\n                            }\n                            else {\n                                setTimeout(function () {\n                                    trigger.focus();\n                                }, 100);\n                            }\n                        }\n                        if (_this.isVideo) {\n                            _this.player.pauseVideo();\n                        }\n                    },\n                });\n            });\n        }\n        for (var i = 0; i < this.closers.length; i++) {\n            this.closers[i].addEventListener("click", function (event) {\n                var target = event.target;\n                var isButton = target.tagName.toLowerCase() === "button";\n                var isOverlay = target.classList.contains("iastate22-modal__overlay") && event.target === event.currentTarget;\n                if (isButton || isOverlay) {\n                    micromodal_1.default.close(_this.modalId);\n                }\n            });\n        }\n    };\n    Modal.prototype.moveModalToBottomOfBody = function () {\n        document.body.appendChild(this.element);\n    };\n    return Modal;\n}());\nexports.Modal = Modal;\nfunction modalsInit() {\n    var modals = document.querySelectorAll(".iastate22-modal");\n    for (var i = 0; i < modals.length; i++) {\n        new Modal(modals[i]);\n    }\n}\nexports.default = modalsInit;\n\n\n//# sourceURL=webpack:///./src/js/components/modal.ts?'
      );

      /***/
    },

  /***/ "./src/js/index.ts":
    /*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";
      eval(
        '\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", { value: true });\n__webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");\n/**\n * Modules\n */\nvar focus_within_1 = __importDefault(__webpack_require__(/*! focus-within */ "./node_modules/focus-within/index.mjs"));\nvar object_fit_images_1 = __importDefault(__webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js"));\nvar silc_core_1 = __webpack_require__(/*! silc-core */ "./node_modules/silc-core/dist/index.js");\nvar silc_accordion_1 = __webpack_require__(/*! silc-accordion */ "./node_modules/silc-accordion/dist/index.js");\nvar modal_1 = __importDefault(__webpack_require__(/*! ./components/modal */ "./src/js/components/modal.ts"));\nvar site_header_1 = __importDefault(__webpack_require__(/*! ./components/site-header */ "./src/js/components/site-header.ts"));\nvar card_1 = __importDefault(__webpack_require__(/*! ./components/card */ "./src/js/components/card.ts"));\nvar subnav_1 = __importDefault(__webpack_require__(/*! ./components/subnav */ "./src/js/components/subnav.ts"));\nvar sortable_table_1 = __importDefault(__webpack_require__(/*! ./components/sortable-table */ "./src/js/components/sortable-table.ts"));\nvar privacy_consent_1 = __importDefault(__webpack_require__(/*! ../components/privacy-consent/privacy-consent */ "./src/components/privacy-consent/privacy-consent.ts"));\nvar accordion_1 = __importDefault(__webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.ts"));\nvar video_embed_1 = __importDefault(__webpack_require__(/*! ./components/video-embed */ "./src/js/components/video-embed.ts"));\nvar ecosystem_home_hero_1 = __importDefault(__webpack_require__(/*! ./components/ecosystem-home-hero */ "./src/js/components/ecosystem-home-hero.ts"));\nvar carousel_1 = __importDefault(__webpack_require__(/*! ./components/carousel */ "./src/js/components/carousel.ts"));\nvar home_1 = __importDefault(__webpack_require__(/*! ./pages/home */ "./src/js/pages/home.ts"));\nvar college_template_1 = __importDefault(__webpack_require__(/*! ./pages/college-template */ "./src/js/pages/college-template.ts"));\nvar accessibility_1 = __importDefault(__webpack_require__(/*! ./utilities/accessibility */ "./src/js/utilities/accessibility.ts"));\nvar scroll_padding_top_1 = __importDefault(__webpack_require__(/*! ./utilities/scroll-padding-top */ "./src/js/utilities/scroll-padding-top.ts"));\nvar calendar_1 = __importDefault(__webpack_require__(/*! ./components/calendar */ "./src/js/components/calendar.ts"));\nvar search_1 = __importDefault(__webpack_require__(/*! ./components/search */ "./src/js/components/search.ts"));\nvar alert_bar_1 = __importDefault(__webpack_require__(/*! ./components/alert-bar */ "./src/js/components/alert-bar.ts"));\n/**\n * Init\n */\nfocus_within_1.default(document);\nobject_fit_images_1.default();\naccessibility_1.default.init();\nsilc_core_1.silcCoreInit();\nsilc_accordion_1.silcAccordionInit();\nsite_header_1.default();\nmodal_1.default();\ncard_1.default();\nprivacy_consent_1.default();\naccordion_1.default();\nsubnav_1.default();\nvideo_embed_1.default();\necosystem_home_hero_1.default();\nhome_1.default();\ncollege_template_1.default();\ncarousel_1.default();\nscroll_padding_top_1.default();\nsortable_table_1.default();\ncalendar_1.default();\nsearch_1.default();\nalert_bar_1.default();\n\n\n//# sourceURL=webpack:///./src/js/index.ts?'
      );

      /***/
    },
});
