"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
require("./DynamicIslandNavbar.css");
const DynamicIslandNavbar = () => {
    (0, react_1.useEffect)(() => {
        const navbarIcon = document.querySelector(".din-navbar-icon");
        const Menu = gsap_1.default.timeline({ paused: true });
        let isMenuOpen = false;
        Menu.to(".din-link-item", { opacity: 0, duration: 0.2, stagger: -0.1 });
        Menu.to(".din-links-container", { maxWidth: "0%", padding: 0, gap: 0, duration: 1 });
        Menu.to(".din-dynamic-island-container", { width: 200, height: 40, duration: 0.5 }, "-=1");
        const toggleMenu = () => {
            if (isMenuOpen) {
                Menu.reverse();
            }
            else {
                Menu.play();
            }
            isMenuOpen = !isMenuOpen;
        };
        navbarIcon === null || navbarIcon === void 0 ? void 0 : navbarIcon.addEventListener("click", toggleMenu);
        return () => {
            navbarIcon === null || navbarIcon === void 0 ? void 0 : navbarIcon.removeEventListener("click", toggleMenu);
        };
    }, []);
    return (react_1.default.createElement("div", { className: "din-dynamic-island-container" },
        react_1.default.createElement("div", { className: "logo" },
            react_1.default.createElement("img", { src: "https://njwebdesigning.in/wp-content/uploads/2021/05/youtube-logo-white.svg", alt: "Logo", width: "50px", height: "50px" })),
        react_1.default.createElement("div", { className: "din-links-container" },
            react_1.default.createElement("p", { className: "din-link-item" }, "Home"),
            react_1.default.createElement("p", { className: "din-link-item" }, "About"),
            react_1.default.createElement("p", { className: "din-link-item" }, "Works"),
            react_1.default.createElement("p", { className: "din-link-item" }, "Contact"),
            react_1.default.createElement("p", { className: "din-link-item" }, "Blogs")),
        react_1.default.createElement("div", { className: "din-navbar-icon" },
            react_1.default.createElement("i", { className: "fa fa-times" }))));
};
exports.default = DynamicIslandNavbar;
