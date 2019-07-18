/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n  constructor(htmlNodes){\n    this.htmlNodes = htmlNodes;\n  }\n\n  html(string){\n    if(string){\n      this.htmlNodes.forEach(el => el.innerHTML = string)\n    } else{\n      return this.htmlNodes[0].innerHTML;\n    }\n  }\n\n  empty(){\n    this.htmlNodes.map(el => el.innerHTML = \"\");\n  }\n  \n  append(el){\n    if(typeof el === 'string'){\n      this.htmlNodes.forEach(node => node.innerHTML += el);\n    } else{\n      this.htmlNodes.forEach(node => node.innerHTML += (el.htmlNodes[0].outerHTML));\n    }\n  }\n\n  attr(atts, val){\n    if(val){\n      this.htmlNodes.forEach(node => node.setAttribute(atts, val))\n    } else{\n      this.htmlNodes.forEach(node => {\n        if(node.getAttribute(atts)) node.getAttribute(atts)\n      });\n    }\n  }\n\n  addClass(claw) {\n    this.htmlNodes.forEach(node => {\n      node.setAttribute('class', claw)\n    });\n  }\n  removeClass(){\n    this.htmlNodes.forEach(node =>{\n      node.removeAttribute('class');\n    });\n  }\n\n  children(){\n    let msChilds = [];\n    this.htmlNodes.forEach(node => {\n      msChilds.push(node.children);\n    })\n\n    return new DOMNodeCollection(msChilds);\n  }\n\n  parent(){\n    let papaNode = [];\n    this.htmlNodes.forEach(node =>{\n      papaNode.push(node.parentNode);\n    });\n    return new DOMNodeCollection(papaNode);\n  }\n\n  find(selectyboi) {\n    let selects = []\n    selectyboi.querySelectorAll(this.htmlNodes);\n    return new DOMNodeCollection(selects)\n  }\n\n  remove(){\n    this.htmlNodes.forEach(node =>{\n      node.innerHTML = \"\";\n    });\n  }\n\n  on(action, cb){\n    this.htmlNodes.forEach(node =>{\n      node.addEventListener(action, cb);\n    });\n    this.callback = cb;\n  }\n  off(action){\n    this.htmlNodes.forEach(node =>{\n      node.removeEventListener(action, this.callback);\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\ndocument.addEventListener('DOMContentLoaded', () =>{\n  queue.forEach(func =>{\n    func();\n  });\n});\nconst queue = [];\nfunction $l(selector) {\n  if (typeof selector === 'string') {\n    let nodeList = document.querySelectorAll(selector);\n    const nodeListArr = Array.from(nodeList);\n    return new DOMNodeCollection(nodeListArr);\n  } else if (selector instanceof HTMLElement) {\n    const selectorArr = [selector];\n    return new DOMNodeCollection(selectorArr);\n  } else if (selector instanceof Function) {\n    if (document.readyState === 'complete') {\n      selector();\n    } else {\n      queue.push(selector);\n    }\n  }\n}\n$l.prototype.ajax = function (options) {\n  let type = options[type];\n  let url = options[url];\n}\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });