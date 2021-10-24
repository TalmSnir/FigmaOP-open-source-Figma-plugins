/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hooks/index.tsx":
/*!*****************************!*\
  !*** ./src/hooks/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMessage": () => (/* reexport safe */ _useMessage__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useLocalStorage": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _useMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMessage */ "./src/hooks/useMessage.tsx");
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLocalStorage */ "./src/hooks/useLocalStorage.tsx");





/***/ }),

/***/ "./src/hooks/useLocalStorage.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useLocalStorage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/hooks/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function useLocalStorage() {
    const { showNotification } = (0,___WEBPACK_IMPORTED_MODULE_0__.useMessage)();
    const saveToStorage = (key, data) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield figma.clientStorage.setAsync(key, JSON.stringify(data));
        }
        catch (err) {
            console.log('in saveToStorage catch: ', err);
            showNotification('warning', 'reject');
        }
    });
    const getFromStorage = (key) => __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield figma.clientStorage.getAsync(key);
            return JSON.parse(data);
        }
        catch (err) {
            console.log('in getFromStorage catch: ', err);
            showNotification('warning', 'reject');
        }
    });
    return { saveToStorage, getFromStorage };
}


/***/ }),

/***/ "./src/hooks/useMessage.tsx":
/*!**********************************!*\
  !*** ./src/hooks/useMessage.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMessage)
/* harmony export */ });
/* harmony import */ var _pluginMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pluginMessages */ "./src/pluginMessages.tsx");

function useMessage() {
    let notificationHandler;
    const showNotification = (state, msg) => {
        notificationHandler ? notificationHandler.cancel() : '';
        notificationHandler = figma.notify(_pluginMessages__WEBPACK_IMPORTED_MODULE_0__.pluginMessages[state][msg], {
            timeout: 2000,
        });
    };
    const postMessageToUI = (msg, data) => {
        figma.ui.postMessage({ msg, data });
    };
    const postMessageToPlugin = (msg, data) => {
        parent.postMessage({ pluginMessage: { msg, data } }, '*');
    };
    return {
        showNotification,
        postMessageToPlugin,
        postMessageToUI,
    };
}


/***/ }),

/***/ "./src/pluginMessages.tsx":
/*!********************************!*\
  !*** ./src/pluginMessages.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginMessages": () => (/* binding */ pluginMessages)
/* harmony export */ });
const pluginMessages = {
    warning: {
        reject: '✘ something went wrong please run again',
    },
    success: {
        createIndex: '✔ index has been created successfully',
        createPages: '✔ new pages have been added successfully',
        deletePages: '✔ selected pages have been deleted successfully',
        updatedTemplate: '✔ templates has been updated successfully',
        newTemplate: '✔ new template has been created successfully',
        deletedTemplate: '✔ template has been deleted successfully',
        updatePages: '✔ pages list has been updated successfully',
    },
};


/***/ }),

/***/ "./src/utills/createAutoLayout.tsx":
/*!*****************************************!*\
  !*** ./src/utills/createAutoLayout.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAutoLayout)
/* harmony export */ });
function createAutoLayout(node, { layoutMode = 'HORIZONTAL', primaryAxisSizingMode = 'AUTO', counterAxisSizingMode = 'AUTO', primaryAxisAlignItems = 'MIN', counterAxisAlignItems = 'MIN', itemSpacing = 32, padding = [16, 16, 16, 16], }) {
    node.layoutMode = layoutMode;
    node.primaryAxisSizingMode = primaryAxisSizingMode;
    node.counterAxisSizingMode = counterAxisSizingMode;
    node.primaryAxisAlignItems = primaryAxisAlignItems;
    node.counterAxisAlignItems = counterAxisAlignItems;
    node.itemSpacing = itemSpacing;
    node.paddingTop = padding[0];
    node.paddingRight = padding[1];
    node.paddingBottom = padding[2];
    node.paddingLeft = padding[3];
}


/***/ }),

/***/ "./src/utills/createTextNode.tsx":
/*!***************************************!*\
  !*** ./src/utills/createTextNode.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTextNode)
/* harmony export */ });
function createTextNode({ fontName = { family: 'Roboto', style: 'Regular' }, characters = '', fontSize = 16, hyperlink = null, }) {
    const node = figma.createText();
    node.fontName = fontName;
    node.characters = characters;
    node.fontSize = fontSize;
    node.hyperlink = hyperlink;
    return node;
}


/***/ }),

/***/ "./src/utills/index.tsx":
/*!******************************!*\
  !*** ./src/utills/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAutoLayout": () => (/* reexport safe */ _createAutoLayout__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _createTextNode__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "loadFonts": () => (/* reexport safe */ _loadFonts__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _createAutoLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAutoLayout */ "./src/utills/createAutoLayout.tsx");
/* harmony import */ var _createTextNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTextNode */ "./src/utills/createTextNode.tsx");
/* harmony import */ var _loadFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadFonts */ "./src/utills/loadFonts.tsx");






/***/ }),

/***/ "./src/utills/loadFonts.tsx":
/*!**********************************!*\
  !*** ./src/utills/loadFonts.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFonts)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadFonts(fonts) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = fonts.map(font => figma.loadFontAsync(font));
        yield Promise.all(promises);
        return fonts;
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./src/hooks/index.tsx");
/* harmony import */ var _utills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utills */ "./src/utills/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


figma.showUI(__html__, { width: 300, height: 400 });
const { postMessageToUI, showNotification } = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.useMessage)();
const { getFromStorage, saveToStorage } = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)();
figma.ui.onmessage = message => {
    const { msg, data } = message;
    const actions = {
        deletePages: () => deletePages(msg, data),
        createPages: () => createPages(msg, data),
        createIndex: () => createIndex(msg),
        newTemplate: () => updateTemplate(msg, data),
        updatedTemplate: () => updateTemplate(msg, data),
        deletedTemplate: () => updateTemplate(msg, data),
        updatePages: () => updatePages(msg),
    };
    actions[msg]();
};
let pages;
let templates;
function updateTemplate(msg, data) {
    templates = data;
    showNotification('success', msg);
}
function createIndex(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
        const indexFrame = figma.createFrame();
        indexFrame.name = 'Pages Index';
        (0,_utills__WEBPACK_IMPORTED_MODULE_1__.createAutoLayout)(indexFrame, {
            layoutMode: 'VERTICAL',
            primaryAxisSizingMode: 'AUTO',
            counterAxisSizingMode: 'AUTO',
            primaryAxisAlignItems: 'MIN',
            counterAxisAlignItems: 'MIN',
            itemSpacing: 32,
            padding: [16, 32, 16, 32],
        });
        const indexTitle = (0,_utills__WEBPACK_IMPORTED_MODULE_1__.createTextNode)({
            fontName: { family: 'Roboto', style: 'Regular' },
            characters: 'pages index',
            fontSize: 24,
        });
        indexFrame.appendChild(indexTitle);
        pages.forEach((page, id) => {
            const link = (0,_utills__WEBPACK_IMPORTED_MODULE_1__.createTextNode)({
                fontName: { family: 'Roboto', style: 'Regular' },
                characters: `${id + 1}. ${page.name}`,
                fontSize: 16,
                hyperlink: { type: 'NODE', value: page.id },
            });
            indexFrame.appendChild(link);
        });
        showNotification('success', msg);
    });
}
function getPages() {
    pages = figma.root.children;
    const returnPages = pages.map(page => {
        return { name: page.name, id: page.id };
    });
    postMessageToUI('pages', returnPages);
}
function createPages(msg, data) {
    data.forEach(name => {
        const newPage = figma.createPage();
        newPage.name =
            name[0] === '-' && name[name.length - 1] === '-'
                ? `— — — — ${name.replace('-', '')}— — — — `
                : name;
    });
    getPages();
    showNotification('success', msg);
}
function deletePages(msg, data) {
    const pagesToDelete = pages.filter(page => data.includes(page.id));
    pages = pages.filter(page => !data.includes(page.id));
    if (pages.length === 0) {
        const newPage = figma.createPage();
        newPage.name = 'page 1';
        figma.currentPage = newPage;
    }
    else {
        figma.currentPage = pagesToDelete.find(page => page.id === currentPage.id)
            ? pages[0]
            : currentPage;
    }
    while (pagesToDelete.length > 0) {
        const page = pagesToDelete.pop();
        page.remove();
    }
    getPages();
    showNotification('success', msg);
}
function updatePages(msg = null) {
    currentPage = figma.currentPage;
    if (msg)
        showNotification('success', msg);
    getPages();
}
function onRun() {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedData = yield getFromStorage('templates');
        templates = returnedData ? returnedData : [];
        getPages();
        postMessageToUI('templates', templates);
    });
}
function onClose() {
    return __awaiter(this, void 0, void 0, function* () {
        yield saveToStorage('templates', templates);
    });
}
let currentPage = figma.currentPage;
figma.on('run', onRun);
figma.on('close', onClose);
figma.on('currentpagechange', updatePages);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNVO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkMsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQytCO0FBQ2hCO0FBQ2YsWUFBWSxtQkFBbUIsRUFBRSw2Q0FBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ21EO0FBQ3BDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJEQUFjO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQixhQUFhO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ2JlLGtDQUFrQyx3TUFBd007QUFDelA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWGUsMEJBQTBCLGFBQWEsb0NBQW9DLHFEQUFxRDtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0Q7QUFDSjtBQUNWO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7QUNIdkQsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ3NEO0FBQ007QUFDNUQseUJBQXlCLHlCQUF5QjtBQUNsRCxRQUFRLG9DQUFvQyxFQUFFLGtEQUFVO0FBQ3hELFFBQVEsZ0NBQWdDLEVBQUUsdURBQWU7QUFDekQ7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIsdURBQWM7QUFDekMsd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsdURBQWM7QUFDdkMsNEJBQTRCLG9DQUFvQztBQUNoRSwrQkFBK0IsT0FBTyxJQUFJLFVBQVU7QUFDcEQ7QUFDQSw2QkFBNkIsOEJBQThCO0FBQzNELGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ob29rcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUxvY2FsU3RvcmFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZU1lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wbHVnaW5NZXNzYWdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxscy9jcmVhdGVBdXRvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGxzL2NyZWF0ZVRleHROb2RlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGxzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGxzL2xvYWRGb250cy50c3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZU1lc3NhZ2UgZnJvbSAnLi91c2VNZXNzYWdlJztcclxuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZSc7XHJcbmV4cG9ydCB7IHVzZU1lc3NhZ2UsIHVzZUxvY2FsU3RvcmFnZSB9O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHVzZU1lc3NhZ2UgfSBmcm9tICcuJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgeyBzaG93Tm90aWZpY2F0aW9uIH0gPSB1c2VNZXNzYWdlKCk7XHJcbiAgICBjb25zdCBzYXZlVG9TdG9yYWdlID0gKGtleSwgZGF0YSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIHNhdmVUb1N0b3JhZ2UgY2F0Y2g6ICcsIGVycik7XHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ3dhcm5pbmcnLCAncmVqZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZXRGcm9tU3RvcmFnZSA9IChrZXkpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gZ2V0RnJvbVN0b3JhZ2UgY2F0Y2g6ICcsIGVycik7XHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ3dhcm5pbmcnLCAncmVqZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzYXZlVG9TdG9yYWdlLCBnZXRGcm9tU3RvcmFnZSB9O1xyXG59XHJcbiIsImltcG9ydCB7IHBsdWdpbk1lc3NhZ2VzIH0gZnJvbSAnLi4vcGx1Z2luTWVzc2FnZXMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNZXNzYWdlKCkge1xyXG4gICAgbGV0IG5vdGlmaWNhdGlvbkhhbmRsZXI7XHJcbiAgICBjb25zdCBzaG93Tm90aWZpY2F0aW9uID0gKHN0YXRlLCBtc2cpID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb25IYW5kbGVyID8gbm90aWZpY2F0aW9uSGFuZGxlci5jYW5jZWwoKSA6ICcnO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbkhhbmRsZXIgPSBmaWdtYS5ub3RpZnkocGx1Z2luTWVzc2FnZXNbc3RhdGVdW21zZ10sIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwb3N0TWVzc2FnZVRvVUkgPSAobXNnLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBtc2csIGRhdGEgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcG9zdE1lc3NhZ2VUb1BsdWdpbiA9IChtc2csIGRhdGEpID0+IHtcclxuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IG1zZywgZGF0YSB9IH0sICcqJyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uLFxyXG4gICAgICAgIHBvc3RNZXNzYWdlVG9QbHVnaW4sXHJcbiAgICAgICAgcG9zdE1lc3NhZ2VUb1VJLFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGx1Z2luTWVzc2FnZXMgPSB7XHJcbiAgICB3YXJuaW5nOiB7XHJcbiAgICAgICAgcmVqZWN0OiAn4pyYIHNvbWV0aGluZyB3ZW50IHdyb25nIHBsZWFzZSBydW4gYWdhaW4nLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICBjcmVhdGVJbmRleDogJ+KclCBpbmRleCBoYXMgYmVlbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgY3JlYXRlUGFnZXM6ICfinJQgbmV3IHBhZ2VzIGhhdmUgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIGRlbGV0ZVBhZ2VzOiAn4pyUIHNlbGVjdGVkIHBhZ2VzIGhhdmUgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgdXBkYXRlZFRlbXBsYXRlOiAn4pyUIHRlbXBsYXRlcyBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgbmV3VGVtcGxhdGU6ICfinJQgbmV3IHRlbXBsYXRlIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBkZWxldGVkVGVtcGxhdGU6ICfinJQgdGVtcGxhdGUgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHVwZGF0ZVBhZ2VzOiAn4pyUIHBhZ2VzIGxpc3QgaGFzIGJlZW4gdXBkYXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXV0b0xheW91dChub2RlLCB7IGxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCcsIHByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJywgY291bnRlckF4aXNTaXppbmdNb2RlID0gJ0FVVE8nLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMgPSAnTUlOJywgY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ01JTicsIGl0ZW1TcGFjaW5nID0gMzIsIHBhZGRpbmcgPSBbMTYsIDE2LCAxNiwgMTZdLCB9KSB7XHJcbiAgICBub2RlLmxheW91dE1vZGUgPSBsYXlvdXRNb2RlO1xyXG4gICAgbm9kZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBwcmltYXJ5QXhpc1NpemluZ01vZGU7XHJcbiAgICBub2RlLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IGNvdW50ZXJBeGlzU2l6aW5nTW9kZTtcclxuICAgIG5vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gcHJpbWFyeUF4aXNBbGlnbkl0ZW1zO1xyXG4gICAgbm9kZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBjb3VudGVyQXhpc0FsaWduSXRlbXM7XHJcbiAgICBub2RlLml0ZW1TcGFjaW5nID0gaXRlbVNwYWNpbmc7XHJcbiAgICBub2RlLnBhZGRpbmdUb3AgPSBwYWRkaW5nWzBdO1xyXG4gICAgbm9kZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nWzFdO1xyXG4gICAgbm9kZS5wYWRkaW5nQm90dG9tID0gcGFkZGluZ1syXTtcclxuICAgIG5vZGUucGFkZGluZ0xlZnQgPSBwYWRkaW5nWzNdO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHsgZm9udE5hbWUgPSB7IGZhbWlseTogJ1JvYm90bycsIHN0eWxlOiAnUmVndWxhcicgfSwgY2hhcmFjdGVycyA9ICcnLCBmb250U2l6ZSA9IDE2LCBoeXBlcmxpbmsgPSBudWxsLCB9KSB7XHJcbiAgICBjb25zdCBub2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgbm9kZS5mb250TmFtZSA9IGZvbnROYW1lO1xyXG4gICAgbm9kZS5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcclxuICAgIG5vZGUuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIG5vZGUuaHlwZXJsaW5rID0gaHlwZXJsaW5rO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUF1dG9MYXlvdXQgZnJvbSAnLi9jcmVhdGVBdXRvTGF5b3V0JztcclxuaW1wb3J0IGNyZWF0ZVRleHROb2RlIGZyb20gJy4vY3JlYXRlVGV4dE5vZGUnO1xyXG5pbXBvcnQgbG9hZEZvbnRzIGZyb20gJy4vbG9hZEZvbnRzJztcclxuZXhwb3J0IHsgY3JlYXRlQXV0b0xheW91dCwgY3JlYXRlVGV4dE5vZGUsIGxvYWRGb250cyB9O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGb250cyhmb250cykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IGZvbnRzLm1hcChmb250ID0+IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udCkpO1xyXG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICByZXR1cm4gZm9udHM7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgdXNlTWVzc2FnZSwgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9ob29rcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHROb2RlLCBjcmVhdGVBdXRvTGF5b3V0IH0gZnJvbSAnLi91dGlsbHMnO1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiA0MDAgfSk7XHJcbmNvbnN0IHsgcG9zdE1lc3NhZ2VUb1VJLCBzaG93Tm90aWZpY2F0aW9uIH0gPSB1c2VNZXNzYWdlKCk7XHJcbmNvbnN0IHsgZ2V0RnJvbVN0b3JhZ2UsIHNhdmVUb1N0b3JhZ2UgfSA9IHVzZUxvY2FsU3RvcmFnZSgpO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcclxuICAgIGNvbnN0IHsgbXNnLCBkYXRhIH0gPSBtZXNzYWdlO1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgICAgICBkZWxldGVQYWdlczogKCkgPT4gZGVsZXRlUGFnZXMobXNnLCBkYXRhKSxcclxuICAgICAgICBjcmVhdGVQYWdlczogKCkgPT4gY3JlYXRlUGFnZXMobXNnLCBkYXRhKSxcclxuICAgICAgICBjcmVhdGVJbmRleDogKCkgPT4gY3JlYXRlSW5kZXgobXNnKSxcclxuICAgICAgICBuZXdUZW1wbGF0ZTogKCkgPT4gdXBkYXRlVGVtcGxhdGUobXNnLCBkYXRhKSxcclxuICAgICAgICB1cGRhdGVkVGVtcGxhdGU6ICgpID0+IHVwZGF0ZVRlbXBsYXRlKG1zZywgZGF0YSksXHJcbiAgICAgICAgZGVsZXRlZFRlbXBsYXRlOiAoKSA9PiB1cGRhdGVUZW1wbGF0ZShtc2csIGRhdGEpLFxyXG4gICAgICAgIHVwZGF0ZVBhZ2VzOiAoKSA9PiB1cGRhdGVQYWdlcyhtc2cpLFxyXG4gICAgfTtcclxuICAgIGFjdGlvbnNbbXNnXSgpO1xyXG59O1xyXG5sZXQgcGFnZXM7XHJcbmxldCB0ZW1wbGF0ZXM7XHJcbmZ1bmN0aW9uIHVwZGF0ZVRlbXBsYXRlKG1zZywgZGF0YSkge1xyXG4gICAgdGVtcGxhdGVzID0gZGF0YTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBtc2cpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KG1zZykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUm9ib3RvJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcclxuICAgICAgICBjb25zdCBpbmRleEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICBpbmRleEZyYW1lLm5hbWUgPSAnUGFnZXMgSW5kZXgnO1xyXG4gICAgICAgIGNyZWF0ZUF1dG9MYXlvdXQoaW5kZXhGcmFtZSwge1xyXG4gICAgICAgICAgICBsYXlvdXRNb2RlOiAnVkVSVElDQUwnLFxyXG4gICAgICAgICAgICBwcmltYXJ5QXhpc1NpemluZ01vZGU6ICdBVVRPJyxcclxuICAgICAgICAgICAgY291bnRlckF4aXNTaXppbmdNb2RlOiAnQVVUTycsXHJcbiAgICAgICAgICAgIHByaW1hcnlBeGlzQWxpZ25JdGVtczogJ01JTicsXHJcbiAgICAgICAgICAgIGNvdW50ZXJBeGlzQWxpZ25JdGVtczogJ01JTicsXHJcbiAgICAgICAgICAgIGl0ZW1TcGFjaW5nOiAzMixcclxuICAgICAgICAgICAgcGFkZGluZzogWzE2LCAzMiwgMTYsIDMyXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpbmRleFRpdGxlID0gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgICAgICAgICBmb250TmFtZTogeyBmYW1pbHk6ICdSb2JvdG8nLCBzdHlsZTogJ1JlZ3VsYXInIH0sXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnM6ICdwYWdlcyBpbmRleCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmRleEZyYW1lLmFwcGVuZENoaWxkKGluZGV4VGl0bGUpO1xyXG4gICAgICAgIHBhZ2VzLmZvckVhY2goKHBhZ2UsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVUZXh0Tm9kZSh7XHJcbiAgICAgICAgICAgICAgICBmb250TmFtZTogeyBmYW1pbHk6ICdSb2JvdG8nLCBzdHlsZTogJ1JlZ3VsYXInIH0sXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBgJHtpZCArIDF9LiAke3BhZ2UubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgaHlwZXJsaW5rOiB7IHR5cGU6ICdOT0RFJywgdmFsdWU6IHBhZ2UuaWQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGluZGV4RnJhbWUuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIG1zZyk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRQYWdlcygpIHtcclxuICAgIHBhZ2VzID0gZmlnbWEucm9vdC5jaGlsZHJlbjtcclxuICAgIGNvbnN0IHJldHVyblBhZ2VzID0gcGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHBhZ2UubmFtZSwgaWQ6IHBhZ2UuaWQgfTtcclxuICAgIH0pO1xyXG4gICAgcG9zdE1lc3NhZ2VUb1VJKCdwYWdlcycsIHJldHVyblBhZ2VzKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQYWdlcyhtc2csIGRhdGEpIHtcclxuICAgIGRhdGEuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgIG5ld1BhZ2UubmFtZSA9XHJcbiAgICAgICAgICAgIG5hbWVbMF0gPT09ICctJyAmJiBuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICctJ1xyXG4gICAgICAgICAgICAgICAgPyBg4oCUIOKAlCDigJQg4oCUICR7bmFtZS5yZXBsYWNlKCctJywgJycpfeKAlCDigJQg4oCUIOKAlCBgXHJcbiAgICAgICAgICAgICAgICA6IG5hbWU7XHJcbiAgICB9KTtcclxuICAgIGdldFBhZ2VzKCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgbXNnKTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVQYWdlcyhtc2csIGRhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2VzVG9EZWxldGUgPSBwYWdlcy5maWx0ZXIocGFnZSA9PiBkYXRhLmluY2x1ZGVzKHBhZ2UuaWQpKTtcclxuICAgIHBhZ2VzID0gcGFnZXMuZmlsdGVyKHBhZ2UgPT4gIWRhdGEuaW5jbHVkZXMocGFnZS5pZCkpO1xyXG4gICAgaWYgKHBhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XHJcbiAgICAgICAgbmV3UGFnZS5uYW1lID0gJ3BhZ2UgMSc7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBwYWdlc1RvRGVsZXRlLmZpbmQocGFnZSA9PiBwYWdlLmlkID09PSBjdXJyZW50UGFnZS5pZClcclxuICAgICAgICAgICAgPyBwYWdlc1swXVxyXG4gICAgICAgICAgICA6IGN1cnJlbnRQYWdlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKHBhZ2VzVG9EZWxldGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1RvRGVsZXRlLnBvcCgpO1xyXG4gICAgICAgIHBhZ2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYWdlcygpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIG1zZyk7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlUGFnZXMobXNnID0gbnVsbCkge1xyXG4gICAgY3VycmVudFBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZTtcclxuICAgIGlmIChtc2cpXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIG1zZyk7XHJcbiAgICBnZXRQYWdlcygpO1xyXG59XHJcbmZ1bmN0aW9uIG9uUnVuKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXR1cm5lZERhdGEgPSB5aWVsZCBnZXRGcm9tU3RvcmFnZSgndGVtcGxhdGVzJyk7XHJcbiAgICAgICAgdGVtcGxhdGVzID0gcmV0dXJuZWREYXRhID8gcmV0dXJuZWREYXRhIDogW107XHJcbiAgICAgICAgZ2V0UGFnZXMoKTtcclxuICAgICAgICBwb3N0TWVzc2FnZVRvVUkoJ3RlbXBsYXRlcycsIHRlbXBsYXRlcyk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBvbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB5aWVsZCBzYXZlVG9TdG9yYWdlKCd0ZW1wbGF0ZXMnLCB0ZW1wbGF0ZXMpO1xyXG4gICAgfSk7XHJcbn1cclxubGV0IGN1cnJlbnRQYWdlID0gZmlnbWEuY3VycmVudFBhZ2U7XHJcbmZpZ21hLm9uKCdydW4nLCBvblJ1bik7XHJcbmZpZ21hLm9uKCdjbG9zZScsIG9uQ2xvc2UpO1xyXG5maWdtYS5vbignY3VycmVudHBhZ2VjaGFuZ2UnLCB1cGRhdGVQYWdlcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==