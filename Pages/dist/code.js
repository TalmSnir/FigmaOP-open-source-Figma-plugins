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
    const pagesNames = pages.map(page => page.name);
    postMessageToUI('pagesNames', pagesNames);
}
function createPages(msg, data) {
    data.forEach(page => {
        const newPage = figma.createPage();
        newPage.name = page;
    });
    getPages();
    showNotification('success', msg);
}
function deletePages(msg, data) {
    const pagesToDelete = pages.filter(page => data.includes(page.name));
    pages = pages.filter(page => !data.includes(page.name));
    if (pages.length === 0) {
        const newPage = figma.createPage();
        newPage.name = 'new page';
        figma.currentPage = newPage;
    }
    else {
        figma.currentPage = pagesToDelete.includes(currentPage)
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
function updatePages() {
    currentPage = figma.currentPage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQix1REFBYztBQUN6Qyx3QkFBd0Isb0NBQW9DO0FBQzVEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5Qix1REFBYztBQUN2Qyw0QkFBNEIsb0NBQW9DO0FBQ2hFLCtCQUErQixPQUFPLElBQUksVUFBVTtBQUNwRDtBQUNBLDZCQUE2Qiw4QkFBOEI7QUFDM0QsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlTG9jYWxTdG9yYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbk1lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGxzL2NyZWF0ZUF1dG9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlsbHMvY3JlYXRlVGV4dE5vZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlsbHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlsbHMvbG9hZEZvbnRzLnRzeCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlTWVzc2FnZSBmcm9tICcuL3VzZU1lc3NhZ2UnO1xyXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJy4vdXNlTG9jYWxTdG9yYWdlJztcclxuZXhwb3J0IHsgdXNlTWVzc2FnZSwgdXNlTG9jYWxTdG9yYWdlIH07XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgdXNlTWVzc2FnZSB9IGZyb20gJy4nO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB7IHNob3dOb3RpZmljYXRpb24gfSA9IHVzZU1lc3NhZ2UoKTtcclxuICAgIGNvbnN0IHNhdmVUb1N0b3JhZ2UgPSAoa2V5LCBkYXRhKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gc2F2ZVRvU3RvcmFnZSBjYXRjaDogJywgZXJyKTtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignd2FybmluZycsICdyZWplY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGdldEZyb21TdG9yYWdlID0gKGtleSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBnZXRGcm9tU3RvcmFnZSBjYXRjaDogJywgZXJyKTtcclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignd2FybmluZycsICdyZWplY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHNhdmVUb1N0b3JhZ2UsIGdldEZyb21TdG9yYWdlIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgcGx1Z2luTWVzc2FnZXMgfSBmcm9tICcuLi9wbHVnaW5NZXNzYWdlcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbm90aWZpY2F0aW9uSGFuZGxlcjtcclxuICAgIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSAoc3RhdGUsIG1zZykgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbkhhbmRsZXIgPyBub3RpZmljYXRpb25IYW5kbGVyLmNhbmNlbCgpIDogJyc7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uSGFuZGxlciA9IGZpZ21hLm5vdGlmeShwbHVnaW5NZXNzYWdlc1tzdGF0ZV1bbXNnXSwge1xyXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBvc3RNZXNzYWdlVG9VSSA9IChtc2csIGRhdGEpID0+IHtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IG1zZywgZGF0YSB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwb3N0TWVzc2FnZVRvUGx1Z2luID0gKG1zZywgZGF0YSkgPT4ge1xyXG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgbXNnLCBkYXRhIH0gfSwgJyonKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24sXHJcbiAgICAgICAgcG9zdE1lc3NhZ2VUb1BsdWdpbixcclxuICAgICAgICBwb3N0TWVzc2FnZVRvVUksXHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwbHVnaW5NZXNzYWdlcyA9IHtcclxuICAgIHdhcm5pbmc6IHtcclxuICAgICAgICByZWplY3Q6ICfinJggc29tZXRoaW5nIHdlbnQgd3JvbmcgcGxlYXNlIHJ1biBhZ2FpbicsXHJcbiAgICB9LFxyXG4gICAgc3VjY2Vzczoge1xyXG4gICAgICAgIGNyZWF0ZUluZGV4OiAn4pyUIGluZGV4IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBjcmVhdGVQYWdlczogJ+KclCBuZXcgcGFnZXMgaGF2ZSBiZWVuIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgZGVsZXRlUGFnZXM6ICfinJQgc2VsZWN0ZWQgcGFnZXMgaGF2ZSBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICB1cGRhdGVkVGVtcGxhdGU6ICfinJQgdGVtcGxhdGVzIGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBuZXdUZW1wbGF0ZTogJ+KclCBuZXcgdGVtcGxhdGUgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIGRlbGV0ZWRUZW1wbGF0ZTogJ+KclCB0ZW1wbGF0ZSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBdXRvTGF5b3V0KG5vZGUsIHsgbGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJywgcHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nLCBjb3VudGVyQXhpc1NpemluZ01vZGUgPSAnQVVUTycsIHByaW1hcnlBeGlzQWxpZ25JdGVtcyA9ICdNSU4nLCBjb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnTUlOJywgaXRlbVNwYWNpbmcgPSAzMiwgcGFkZGluZyA9IFsxNiwgMTYsIDE2LCAxNl0sIH0pIHtcclxuICAgIG5vZGUubGF5b3V0TW9kZSA9IGxheW91dE1vZGU7XHJcbiAgICBub2RlLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IHByaW1hcnlBeGlzU2l6aW5nTW9kZTtcclxuICAgIG5vZGUuY291bnRlckF4aXNTaXppbmdNb2RlID0gY291bnRlckF4aXNTaXppbmdNb2RlO1xyXG4gICAgbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBwcmltYXJ5QXhpc0FsaWduSXRlbXM7XHJcbiAgICBub2RlLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IGNvdW50ZXJBeGlzQWxpZ25JdGVtcztcclxuICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBpdGVtU3BhY2luZztcclxuICAgIG5vZGUucGFkZGluZ1RvcCA9IHBhZGRpbmdbMF07XHJcbiAgICBub2RlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdbMV07XHJcbiAgICBub2RlLnBhZGRpbmdCb3R0b20gPSBwYWRkaW5nWzJdO1xyXG4gICAgbm9kZS5wYWRkaW5nTGVmdCA9IHBhZGRpbmdbM107XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoeyBmb250TmFtZSA9IHsgZmFtaWx5OiAnUm9ib3RvJywgc3R5bGU6ICdSZWd1bGFyJyB9LCBjaGFyYWN0ZXJzID0gJycsIGZvbnRTaXplID0gMTYsIGh5cGVybGluayA9IG51bGwsIH0pIHtcclxuICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICBub2RlLmZvbnROYW1lID0gZm9udE5hbWU7XHJcbiAgICBub2RlLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xyXG4gICAgbm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgbm9kZS5oeXBlcmxpbmsgPSBoeXBlcmxpbms7XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQXV0b0xheW91dCBmcm9tICcuL2NyZWF0ZUF1dG9MYXlvdXQnO1xyXG5pbXBvcnQgY3JlYXRlVGV4dE5vZGUgZnJvbSAnLi9jcmVhdGVUZXh0Tm9kZSc7XHJcbmltcG9ydCBsb2FkRm9udHMgZnJvbSAnLi9sb2FkRm9udHMnO1xyXG5leHBvcnQgeyBjcmVhdGVBdXRvTGF5b3V0LCBjcmVhdGVUZXh0Tm9kZSwgbG9hZEZvbnRzIH07XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZvbnRzKGZvbnRzKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gZm9udHMubWFwKGZvbnQgPT4gZmlnbWEubG9hZEZvbnRBc3luYyhmb250KSk7XHJcbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIHJldHVybiBmb250cztcclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyB1c2VNZXNzYWdlLCB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2hvb2tzJztcclxuaW1wb3J0IHsgY3JlYXRlVGV4dE5vZGUsIGNyZWF0ZUF1dG9MYXlvdXQgfSBmcm9tICcuL3V0aWxscyc7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQwMCB9KTtcclxuY29uc3QgeyBwb3N0TWVzc2FnZVRvVUksIHNob3dOb3RpZmljYXRpb24gfSA9IHVzZU1lc3NhZ2UoKTtcclxuY29uc3QgeyBnZXRGcm9tU3RvcmFnZSwgc2F2ZVRvU3RvcmFnZSB9ID0gdXNlTG9jYWxTdG9yYWdlKCk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1lc3NhZ2UgPT4ge1xyXG4gICAgY29uc3QgeyBtc2csIGRhdGEgfSA9IG1lc3NhZ2U7XHJcbiAgICBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgICAgIGRlbGV0ZVBhZ2VzOiAoKSA9PiBkZWxldGVQYWdlcyhtc2csIGRhdGEpLFxyXG4gICAgICAgIGNyZWF0ZVBhZ2VzOiAoKSA9PiBjcmVhdGVQYWdlcyhtc2csIGRhdGEpLFxyXG4gICAgICAgIGNyZWF0ZUluZGV4OiAoKSA9PiBjcmVhdGVJbmRleChtc2cpLFxyXG4gICAgICAgIG5ld1RlbXBsYXRlOiAoKSA9PiB1cGRhdGVUZW1wbGF0ZShtc2csIGRhdGEpLFxyXG4gICAgICAgIHVwZGF0ZWRUZW1wbGF0ZTogKCkgPT4gdXBkYXRlVGVtcGxhdGUobXNnLCBkYXRhKSxcclxuICAgICAgICBkZWxldGVkVGVtcGxhdGU6ICgpID0+IHVwZGF0ZVRlbXBsYXRlKG1zZywgZGF0YSksXHJcbiAgICB9O1xyXG4gICAgYWN0aW9uc1ttc2ddKCk7XHJcbn07XHJcbmxldCBwYWdlcztcclxubGV0IHRlbXBsYXRlcztcclxuZnVuY3Rpb24gdXBkYXRlVGVtcGxhdGUobXNnLCBkYXRhKSB7XHJcbiAgICB0ZW1wbGF0ZXMgPSBkYXRhO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIG1zZyk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5kZXgobXNnKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdSb2JvdG8nLCBzdHlsZTogJ1JlZ3VsYXInIH0pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgIGluZGV4RnJhbWUubmFtZSA9ICdQYWdlcyBJbmRleCc7XHJcbiAgICAgICAgY3JlYXRlQXV0b0xheW91dChpbmRleEZyYW1lLCB7XHJcbiAgICAgICAgICAgIGxheW91dE1vZGU6ICdWRVJUSUNBTCcsXHJcbiAgICAgICAgICAgIHByaW1hcnlBeGlzU2l6aW5nTW9kZTogJ0FVVE8nLFxyXG4gICAgICAgICAgICBjb3VudGVyQXhpc1NpemluZ01vZGU6ICdBVVRPJyxcclxuICAgICAgICAgICAgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zOiAnTUlOJyxcclxuICAgICAgICAgICAgY291bnRlckF4aXNBbGlnbkl0ZW1zOiAnTUlOJyxcclxuICAgICAgICAgICAgaXRlbVNwYWNpbmc6IDMyLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBbMTYsIDMyLCAxNiwgMzJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VGl0bGUgPSBjcmVhdGVUZXh0Tm9kZSh7XHJcbiAgICAgICAgICAgIGZvbnROYW1lOiB7IGZhbWlseTogJ1JvYm90bycsIHN0eWxlOiAnUmVndWxhcicgfSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyczogJ3BhZ2VzIGluZGV4JyxcclxuICAgICAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluZGV4RnJhbWUuYXBwZW5kQ2hpbGQoaW5kZXhUaXRsZSk7XHJcbiAgICAgICAgcGFnZXMuZm9yRWFjaCgocGFnZSwgaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGNyZWF0ZVRleHROb2RlKHtcclxuICAgICAgICAgICAgICAgIGZvbnROYW1lOiB7IGZhbWlseTogJ1JvYm90bycsIHN0eWxlOiAnUmVndWxhcicgfSxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM6IGAke2lkICsgMX0uICR7cGFnZS5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICBoeXBlcmxpbms6IHsgdHlwZTogJ05PREUnLCB2YWx1ZTogcGFnZS5pZCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXhGcmFtZS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgbXNnKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldFBhZ2VzKCkge1xyXG4gICAgcGFnZXMgPSBmaWdtYS5yb290LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgcGFnZXNOYW1lcyA9IHBhZ2VzLm1hcChwYWdlID0+IHBhZ2UubmFtZSk7XHJcbiAgICBwb3N0TWVzc2FnZVRvVUkoJ3BhZ2VzTmFtZXMnLCBwYWdlc05hbWVzKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQYWdlcyhtc2csIGRhdGEpIHtcclxuICAgIGRhdGEuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgIG5ld1BhZ2UubmFtZSA9IHBhZ2U7XHJcbiAgICB9KTtcclxuICAgIGdldFBhZ2VzKCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgbXNnKTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVQYWdlcyhtc2csIGRhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2VzVG9EZWxldGUgPSBwYWdlcy5maWx0ZXIocGFnZSA9PiBkYXRhLmluY2x1ZGVzKHBhZ2UubmFtZSkpO1xyXG4gICAgcGFnZXMgPSBwYWdlcy5maWx0ZXIocGFnZSA9PiAhZGF0YS5pbmNsdWRlcyhwYWdlLm5hbWUpKTtcclxuICAgIGlmIChwYWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zdCBuZXdQYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xyXG4gICAgICAgIG5ld1BhZ2UubmFtZSA9ICduZXcgcGFnZSc7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBwYWdlc1RvRGVsZXRlLmluY2x1ZGVzKGN1cnJlbnRQYWdlKVxyXG4gICAgICAgICAgICA/IHBhZ2VzWzBdXHJcbiAgICAgICAgICAgIDogY3VycmVudFBhZ2U7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGFnZXNUb0RlbGV0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHBhZ2VzVG9EZWxldGUucG9wKCk7XHJcbiAgICAgICAgcGFnZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGdldFBhZ2VzKCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgbXNnKTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVQYWdlcygpIHtcclxuICAgIGN1cnJlbnRQYWdlID0gZmlnbWEuY3VycmVudFBhZ2U7XHJcbiAgICBnZXRQYWdlcygpO1xyXG59XHJcbmZ1bmN0aW9uIG9uUnVuKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXR1cm5lZERhdGEgPSB5aWVsZCBnZXRGcm9tU3RvcmFnZSgndGVtcGxhdGVzJyk7XHJcbiAgICAgICAgdGVtcGxhdGVzID0gcmV0dXJuZWREYXRhID8gcmV0dXJuZWREYXRhIDogW107XHJcbiAgICAgICAgZ2V0UGFnZXMoKTtcclxuICAgICAgICBwb3N0TWVzc2FnZVRvVUkoJ3RlbXBsYXRlcycsIHRlbXBsYXRlcyk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBvbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB5aWVsZCBzYXZlVG9TdG9yYWdlKCd0ZW1wbGF0ZXMnLCB0ZW1wbGF0ZXMpO1xyXG4gICAgfSk7XHJcbn1cclxubGV0IGN1cnJlbnRQYWdlID0gZmlnbWEuY3VycmVudFBhZ2U7XHJcbmZpZ21hLm9uKCdydW4nLCBvblJ1bik7XHJcbmZpZ21hLm9uKCdjbG9zZScsIG9uQ2xvc2UpO1xyXG5maWdtYS5vbignY3VycmVudHBhZ2VjaGFuZ2UnLCB1cGRhdGVQYWdlcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==