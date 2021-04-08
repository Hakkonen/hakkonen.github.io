/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/elementFactory.js":
/*!*****************************************!*\
  !*** ./src/functions/elementFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar elFactory = function elFactory(tag, attributes) {\n  var el = document.createElement(tag);\n\n  for (var key in attributes) {\n    el.setAttribute(key, attributes[key]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children.forEach(function (child) {\n    if (typeof child === \"string\") {\n      el.appendChild(document.createTextNode(child));\n    } else {\n      el.appendChild(child);\n    }\n  });\n  return el;\n}; // Usage\n// const hello = elFactory(\n//     \"div\",\n//     { class: \"test \"},\n//     elFactory(\"p\", {},  \"Hello world!\"),\n//     \"test\"\n// )\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elFactory);\n\n//# sourceURL=webpack://Web_Folio_2021/./src/functions/elementFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/App */ \"./src/modules/App.js\");\n/* harmony import */ var _functions_elementFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/elementFactory */ \"./src/functions/elementFactory.js\");\n\n\n // Set root ID\n\nvar root = document.getElementById(\"root\"); // Attach each element of App\n\n(0,_modules_App__WEBPACK_IMPORTED_MODULE_1__.default)().forEach(function (child) {\n  root.appendChild(child);\n});\n\n//# sourceURL=webpack://Web_Folio_2021/./src/index.js?");

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementFactory */ \"./src/functions/elementFactory.js\");\n/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Menu */ \"./src/modules/Menu.js\");\n/* harmony import */ var _modules_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Main */ \"./src/modules/Main.js\");\n\n\n // import { folio } from \"../modules/Folio\"\n// import { projects } from \"../modules/Projects\"\n\nvar App = function App() {\n  // Splash layer & header card\n  var splash = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"splash\",\n    \"class\": \"splash\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"header\",\n    \"class\": \"header\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {}, \"JAYDEN\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"br\", {}), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {}, \"REYNOLDS\"))); // Header animation\n\n  window.onload = function () {\n    // Set opacity to 1 for main page on load\n    document.getElementById(\"main\").style.opacity = 1; // // DEV ONLY FOLIO DEFAULT PAGE\n    // document.getElementById(\"folio\").style.opacity = 1\n    // Get header element of splash and blur\n\n    var header = document.getElementById(\"header\");\n    header.style.opacity = \"1\";\n    header.style.filter = \"blur(0)\";\n    console.log(\"loaded\"); // Fade in and out header card\n\n    setTimeout(function () {\n      var getSplash = document.getElementById(\"splash\");\n      getSplash.style.opacity = 0;\n      getSplash.style.filter = \"blur(1.5rem)\"; // Removes div after animation\n\n      setTimeout(function () {\n        document.getElementById(\"root\").removeChild(getSplash); // Return to 800 after Dev\n      }, [800]); // Return to 2000 after Dev\n    }, [2000]); // Spin text for circular name on Main.js\n\n    function rotateText(element, angle) {\n      setInterval(function () {\n        if (document.getElementById(element)) {\n          document.getElementById(element).style.transform = \"rotate(\".concat(angle, \"deg)\");\n          angle == -36000 ? angle = 0 : angle -= 1;\n        } else {\n          angle = 0;\n        }\n      }, 30);\n    }\n\n    rotateText(\"circle-text\", 0);\n  };\n\n  return [splash, (0,_modules_Menu__WEBPACK_IMPORTED_MODULE_1__.menu)(), (0,_modules_Main__WEBPACK_IMPORTED_MODULE_2__.main)() // folio(projects),\n  ];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://Web_Folio_2021/./src/modules/App.js?");

/***/ }),

/***/ "./src/modules/Folio.js":
/*!******************************!*\
  !*** ./src/modules/Folio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"folio\": () => (/* binding */ folio)\n/* harmony export */ });\n/* harmony import */ var _functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementFactory */ \"./src/functions/elementFactory.js\");\n\nvar folio = function folio(projects) {\n  // Project indexes\n  // Sets default project to index 0 of imported folio object\n  var currentProject = 0;\n  var projectCount = projects.length; // Folio page\n  // Creates left and right page divisions\n\n  var folio = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"folio\",\n    \"class\": \"folio\"\n  });\n  var folioLeft = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"folio__left\",\n    \"class\": \"folio__left\"\n  });\n  var folioRight = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"folio__right\",\n    \"class\": \"folio__right\"\n  }); // Left side\n  // Contains folio image and next/prev selectors\n\n  var heroImage = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"folio__hero\"\n  }, // Appends image linked from object\n  (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"img\", {\n    id: \"hero-image\",\n    src: projects[currentProject].image\n  })); // Image onclick listener for project link\n\n  heroImage.addEventListener(\"click\", function () {\n    window.open(projects[currentProject].url);\n  }); // Creates folio selector div below\n\n  var projectSelector = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"project-selector\",\n    \"class\": \"folio__project-selector\"\n  });\n  var projectSelectorPage = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"project-selector__page\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"current-project\"\n  }, \"0\".concat(currentProject + 1)), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    style: \"padding: 0 1ch 0 1ch\"\n  }, \" / \"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"total-projects\"\n  }, \"0\".concat(projectCount)));\n  var projectSelectorNav = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"project-selector__nav\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"prev\",\n    \"class\": \"prev\"\n  }, \"prev\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    style: \"padding: 0 1ch 0 1ch\"\n  }, \" / \"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"next\",\n    \"class\": \"next\"\n  }, \"next\"));\n  projectSelector.appendChild(projectSelectorNav);\n  projectSelector.appendChild(projectSelectorPage);\n  folioLeft.appendChild(heroImage);\n  folioLeft.appendChild(projectSelector); // Right side\n\n  var heroHeader = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"folio__header\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"hero-header-text\"\n  }, projects[currentProject].header)); // Header onclick listener for project link\n\n  heroHeader.addEventListener(\"click\", function () {\n    window.open(projects[currentProject].url);\n  });\n  var heroText = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"folio__text\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"hero-text\"\n  })); // Applies folio object text to innerHTML\n\n  setTimeout(function () {\n    document.getElementById(\"hero-text\").innerHTML = projects[currentProject].text;\n  }); // Selector logic\n\n  setTimeout(function () {\n    var nextButton = document.getElementById(\"next\");\n    var prevButton = document.getElementById(\"prev\");\n\n    function refreshDOM() {\n      var heroImageEl = document.getElementById(\"hero-image\");\n      heroImageEl.src = projects[currentProject].image;\n      var heroHeaderEl = document.getElementById(\"hero-header-text\");\n      heroHeaderEl.innerHTML = projects[currentProject].header;\n      var heroTextEl = document.getElementById(\"hero-text\");\n      heroTextEl.innerHTML = projects[currentProject].text;\n      var currentProjectEl = document.getElementById(\"current-project\");\n      currentProjectEl.innerHTML = \"0\".concat(currentProject + 1);\n    }\n\n    nextButton.addEventListener(\"click\", function () {\n      currentProject = (currentProject + 1) % projectCount;\n      refreshDOM();\n    });\n    prevButton.addEventListener(\"click\", function () {\n      if (currentProject > 0) {\n        currentProject -= 1;\n      } else {\n        currentProject = projectCount - 1;\n      }\n\n      refreshDOM();\n    });\n  }, [1000]);\n  folioRight.appendChild(heroHeader);\n  folioRight.appendChild(heroText);\n  folio.appendChild(folioLeft);\n  folio.appendChild(folioRight);\n  return folio;\n};\n\n//# sourceURL=webpack://Web_Folio_2021/./src/modules/Folio.js?");

/***/ }),

/***/ "./src/modules/Main.js":
/*!*****************************!*\
  !*** ./src/modules/Main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementFactory */ \"./src/functions/elementFactory.js\");\n/* harmony import */ var _modules_Folio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Folio */ \"./src/modules/Folio.js\");\n/* harmony import */ var _modules_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var circletype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! circletype */ \"./node_modules/circletype/dist/circletype.min.js\");\n/* harmony import */ var circletype__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(circletype__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_travel1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/travel1.jpg */ \"./src/images/travel1.jpg\");\n\n\n\n\n\nvar main = function main() {\n  // Main page\n  var main = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"main\",\n    \"class\": \"main\"\n  });\n  var mainLeft = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"main__left\",\n    \"class\": \"main__left\"\n  });\n  var mainRight = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"main__right\",\n    \"class\": \"main__right\"\n  });\n  var mainHeader = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__header\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__header--web\"\n  }, \"WEB\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__header--dev\"\n  }, \"DEV\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__header--and\"\n  }, \"&\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__header--photo\"\n  }, \"PHOTO\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__header--graphy\"\n  }, \"GRAPHY\"));\n  var mainHero = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__hero\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"img\", {\n    src: _images_travel1_jpg__WEBPACK_IMPORTED_MODULE_4__.default\n  }));\n  var subHeader = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"sub-header\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    \"class\": \"sub-header__text\"\n  }, \"Jayden is a photographer and front-end web developer based in Melbourne, Australia. With a keen eye for design which is carried through his multi-disciplinary interests, he's always up for a chat about a project you would like developed, or even to just say hi.\"));\n  var showMeMore = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"main__more\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {}, \"Show me more...\")); // Circular text element\n  // Spinning function on Window.load in main\n\n  var circularText = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"circle-text\",\n    \"class\": \"circular-text\",\n    style: \"opacity: 0\"\n  }, \"Jayden \\\"JS is the easy part\\\" Reynolds\");\n  var radius = 0;\n  window.innerHeight > window.innerWidth ? radius = 80 : radius = 135;\n  setTimeout(function () {\n    var circleType = new (circletype__WEBPACK_IMPORTED_MODULE_3___default())(document.getElementById(\"circle-text\"));\n    circleType.radius(radius); // Delaying circle function by 300ms seems to fix off-center rotation\n    // Opacity defaults at 0 so that the page has time to load circle func.\n\n    document.getElementById(\"circle-text\").style.opacity = \"1\";\n  }, [300]); // More button / Show folio\n\n  showMeMore.addEventListener(\"click\", function () {\n    // Fades out element\n    var main = document.getElementById(\"main\");\n    main.style.transition = \".3s all\";\n    main.style.opacity = \"1\";\n    main.style.opacity = \"0\";\n    setTimeout(function () {\n      window.scrollTo(0, 0);\n      document.getElementById(\"root\").removeChild(main);\n      document.getElementById(\"root\").appendChild((0,_modules_Folio__WEBPACK_IMPORTED_MODULE_1__.folio)(_modules_Projects__WEBPACK_IMPORTED_MODULE_2__.projects));\n      setTimeout(function () {\n        document.getElementById(\"folio\").style.opacity = 1;\n      }, [50]);\n    }, [500]);\n  });\n  mainLeft.appendChild(mainHeader);\n  mainLeft.appendChild(showMeMore);\n  mainRight.appendChild(mainHero);\n  mainRight.appendChild(subHeader);\n  main.appendChild(mainLeft);\n  main.appendChild(mainRight);\n  main.appendChild(circularText);\n  return main;\n};\n\n//# sourceURL=webpack://Web_Folio_2021/./src/modules/Main.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementFactory */ \"./src/functions/elementFactory.js\");\n/* harmony import */ var _modules_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Main */ \"./src/modules/Main.js\");\n/* harmony import */ var _modules_Folio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Folio */ \"./src/modules/Folio.js\");\n/* harmony import */ var _modules_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var _modules_MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/MenuList */ \"./src/modules/MenuList.js\");\n\n\n\n\n\n\nvar menu = function menu() {\n  // Menu bar\n  var menu = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"menu\",\n    \"class\": \"menu\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"menu__left\"\n  }), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"menu__center\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"menu__logo\",\n    \"class\": \"menu__logo\"\n  }, \"jayden reynolds\")), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"menu__right\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"menu__folio\",\n    \"class\": \"menu__folio\"\n  }, \"folio\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"menu__social\",\n    \"class\": \"menu__social\"\n  }, \"social\"), (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"span\", {\n    id: \"menu__contact\",\n    \"class\": \"menu__contact\"\n  }, \"contact\"))); // Menu reload main\n\n  setTimeout(function () {\n    var menuButton = document.getElementById(\"menu__logo\");\n    menuButton.addEventListener(\"click\", function () {\n      var root = document.getElementById(\"root\");\n\n      if (document.getElementById(\"folio\")) {\n        var childNode = document.getElementById(\"folio\");\n        childNode.style.opacity = 0;\n        setTimeout(function () {\n          root.removeChild(childNode);\n          root.appendChild((0,_modules_Main__WEBPACK_IMPORTED_MODULE_1__.main)());\n          setTimeout(function () {\n            document.getElementById(\"main\").style.opacity = 1;\n          }, [50]);\n        }, [1000]);\n      }\n    });\n    var folioButton = document.getElementById(\"menu__folio\");\n    folioButton.addEventListener(\"click\", function () {\n      var root = document.getElementById(\"root\");\n\n      if (document.getElementById(\"main\")) {\n        var childNode = document.getElementById(\"main\");\n        childNode.style.opacity = 0;\n        setTimeout(function () {\n          root.removeChild(childNode);\n          root.appendChild((0,_modules_Folio__WEBPACK_IMPORTED_MODULE_2__.folio)(_modules_Projects__WEBPACK_IMPORTED_MODULE_3__.projects));\n          setTimeout(function () {\n            document.getElementById(\"folio\").style.opacity = 1;\n          }, [50]);\n        }, [1000]);\n      }\n    }); // Social logic\n\n    var socialButton = document.getElementById(\"menu__social\");\n    socialButton.addEventListener(\"click\", function () {\n      var root = document.getElementById(\"root\");\n\n      if (!document.getElementById(\"social-page\")) {\n        root.appendChild((0,_modules_MenuList__WEBPACK_IMPORTED_MODULE_4__.social)());\n        setTimeout(function () {\n          document.getElementById(\"social-page\").style.height = \"27ch\";\n          document.getElementById(\"social-item-one\").style.padding = \"1ch 0 1ch 5%\";\n          document.getElementById(\"social-item-one\").style.borderBottom = \"1px solid white\";\n          document.getElementById(\"social-item-two\").style.padding = \"1ch 0 1ch 5%\";\n        }, [50]);\n      } else {\n        document.getElementById(\"social-page\").style.height = \".5vh\";\n        setTimeout(function () {\n          document.getElementById(\"social-item-one\").style.padding = \".5ch 0 0 5%\";\n          document.getElementById(\"social-item-one\").style.borderBottom = \"none\";\n          document.getElementById(\"social-item-two\").style.padding = \".5ch 0 0 5%\";\n          root.removeChild(document.getElementById(\"social-page\"));\n        }, [300]);\n      }\n    }); // Contact logic\n\n    var contactButton = document.getElementById(\"menu__contact\");\n    contactButton.addEventListener(\"click\", function () {\n      var root = document.getElementById(\"root\");\n\n      if (!document.getElementById(\"contact-page\")) {\n        root.appendChild((0,_modules_MenuList__WEBPACK_IMPORTED_MODULE_4__.contact)());\n        setTimeout(function () {\n          document.getElementById(\"contact-page\").style.height = \"13.7ch\";\n          document.getElementById(\"contact-item-one\").style.padding = \"1ch 0 1ch 5%\"; // document.getElementById(\"contact-item-two\").style.padding = \"1ch 0 1ch 5%\"\n        }, [50]);\n      } else {\n        document.getElementById(\"contact-page\").style.height = \".5vh\";\n        setTimeout(function () {\n          document.getElementById(\"contact-item-one\").style.padding = \".5ch 0 0 5%\"; // document.getElementById(\"contact-item-two\").style.padding = \"0 .5ch 0 5%\"\n\n          root.removeChild(document.getElementById(\"contact-page\"));\n        }, [300]);\n      }\n    });\n  }, [1000]);\n  return menu;\n};\n\n//# sourceURL=webpack://Web_Folio_2021/./src/modules/Menu.js?");

/***/ }),

/***/ "./src/modules/MenuList.js":
/*!*********************************!*\
  !*** ./src/modules/MenuList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"social\": () => (/* binding */ social)\n/* harmony export */ });\n/* harmony import */ var _functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementFactory */ \"./src/functions/elementFactory.js\");\n\nvar contact = function contact() {\n  var contactPage = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"contact-page\",\n    \"class\": \"contact-page\"\n  });\n  var rowOne = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"contact-page__row\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"contact-item-one\",\n    \"class\": \"contact-page__row__link\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\", {\n    href: \"mailto:jayden@jaydenreynolds.com\"\n  }, \"email\")));\n  var rowTwo = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"contact-page__row\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"contact-item-two\",\n    \"class\": \"contact-page__row__link\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\", {\n    href: \"https://www.instagram.com/dasistjayden/\",\n    target: \"_blank\"\n  }, \"instagram\")));\n  contactPage.appendChild(rowOne); // contactPage.appendChild(rowTwo)\n\n  return contactPage;\n};\nvar social = function social() {\n  var contactPage = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"social-page\",\n    \"class\": \"contact-page\"\n  });\n  var rowOne = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"contact-page__row\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"social-item-one\",\n    \"class\": \"contact-page__row__link\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\", {\n    href: \"https://www.instagram.com/dasistjayden/\",\n    target: \"_blank\"\n  }, \"instagram\")));\n  var rowTwo = (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    \"class\": \"contact-page__row\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", {\n    id: \"social-item-two\",\n    \"class\": \"contact-page__row__link\"\n  }, (0,_functions_elementFactory__WEBPACK_IMPORTED_MODULE_0__.default)(\"a\", {\n    href: \"https://github.com/Hakkonen/\",\n    target: \"_blank\"\n  }, \"github\")));\n  contactPage.appendChild(rowOne);\n  contactPage.appendChild(rowTwo);\n  return contactPage;\n};\n\n//# sourceURL=webpack://Web_Folio_2021/./src/modules/MenuList.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _images_web0_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/web0.png */ \"./src/images/web0.png\");\n/* harmony import */ var _images_web1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/web1.png */ \"./src/images/web1.png\");\n/* harmony import */ var _images_web2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/web2.png */ \"./src/images/web2.png\");\n/* harmony import */ var _images_web3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/web3.png */ \"./src/images/web3.png\");\n/* harmony import */ var _images_minWeather_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/minWeather.png */ \"./src/images/minWeather.png\");\n\n\n\n\n\nvar projects = [{\n  image: _images_web0_png__WEBPACK_IMPORTED_MODULE_0__.default,\n  header: \"Web Folio\",\n  url: \"https://www.jaydenreynolds.com\",\n  text: \"\\n        <h3>Stack: ES6, Webpack 4 & SCSS.</h3>\\n        <p>\\n        This web folio was created entirely with JS and SCSS. The only HTML is a boilerplate file with a root ID div to populate the DOM from. An element constructor is the foundation of the JS DOM manipulation, along with ES6 modules via Webpack to help manage code distribution. In order to help understand the move towards new web frameworks such as React, the website code is created in a manner that replicates the structure of a React app. An App.js returns the main components, such as the splash page, and folio pages, and updates them according to page selection.\\n        </p>\\n        <p>\\n        While it has been a good learning experience to try and replicate the functionality of a framework such as React, or Vue, it has vindicated the ease and value of simply starting a project with an NPM pull such as \\\"create-react-app\\\". And in fact, the biggest difficulty with project has not been in creating an ES6 framework from scratch, but in managing the front-end elements computation with the various browsers that render them. As it turns out: a vast majority of functionality is not cross-browser compatible, for exmaple a small bug (or \\\"feature\\\" according to Apple) can compute page 100% page height entirely differently.\\n        </p>\\n        <p>\\n        The most important lesson I have learned from creating this website from scratch is to KISS. Keep It Stupidly Simple. Users know how to scroll up and down, users understand traditional page layouts. Developing new User Experiences is extremely fun, but has considerable drawbacks in useability, as well as cross-browser compatibility. In in end it would seem that minimalism will always trump complexity in the wild west of web development.\\n        </p>\\n        <a href=\\\"https://github.com/Hakkonen/Web_Folio_2021/ target='_blank'\\\">Github</a>\\n        \"\n}, {\n  image: _images_web1_png__WEBPACK_IMPORTED_MODULE_1__.default,\n  header: \"Bill Buster\",\n  url: \"https://bill-buster.netlify.app\",\n  github: \"https://github.com/Hakkonen/BillBuster/\",\n  text: \"\\n        <h3>Stack: ES6, React & SCSS.</h3>\\n        <p>\\n        Bill Buster is a web app that utilises an algorithm to split the daily cost of a bill between present housemates. While most bills are simple enough to calculate: simply divide the cost between the number of housemates, things get complicated quickly when there are people moving in, out, or simply away for chunks of the bill period.\\n        </p>\\n        <p>\\n        The stack primarily utilised is React, along with React Hooks for state control. Bill Buster's algorithm works by calculating the bill's per diem, each hosuemate's percentage share of the bill period, and then dividing the bill cost into their respective percent ratios.\\n        </p>\\n        <a href=\\\"https://github.com/Hakkonen/BillBuster/ target='_blank'\\\">Github</a>\\n        \"\n}, {\n  image: _images_minWeather_png__WEBPACK_IMPORTED_MODULE_4__.default,\n  header: \"Minimal Weather\",\n  url: \"https://minimal-weather-by-jayden.herokuapp.com/\",\n  text: \"\\n        <h3>Stack: ES6, React & Bootstrap.</h3>\\n        <p>\\n        This app was created as prt of The Odin Project's self-guided front-end web developer course. The projects purpose is to learn API calls, as such the web app makes a call to a forecasting database according the either default or user location input and returns necessary information such as the temperature, and wind direction. The information is further displayed on a temperature min-max bar, as well as a 24-hour graph.\\n        </p>\\n        <a href=\\\"https://github.com/Hakkonen/weather-app/ target='_blank'\\\">Github</a>\\n        \"\n}, {\n  image: _images_web2_png__WEBPACK_IMPORTED_MODULE_2__.default,\n  header: \"Simple Note\",\n  url: \"https://simple-note-react.herokuapp.com\",\n  text: \"\\n        <h3>Stack: ES6 & React.</h3>\\n        <p>\\n        Simple Note was created as a refresher to React. It utilises React Hooks to demonstrate the ease of which state can be controlled within the framework. The notes' state is volatile because it is currently front-end only, though a Node.JS back end could compliment the web app and allow it to be used beyond demonstrative purposes. \\n        </p>\\n        <a href=\\\"https://github.com/Hakkonen/simple-note/ target='_blank'\\\">Github</a>\\n        \"\n}, {\n  image: _images_web3_png__WEBPACK_IMPORTED_MODULE_3__.default,\n  header: \"Word Counter\",\n  url: \"https://word-counter-by-jayden.herokuapp.com\",\n  text: \"\\n        <h3>Stack: ES6 & React.</h3>\\n        <p>\\n        This web app was created solely to demonstrate the ability to create an algorithm that parses through a given text, in this case it returns the most commonly found words in the original Star Wars manuscript.\\n        </p>\\n        <a href=\\\"https://github.com/Hakkonen/word-counter/ target='_blank'\\\">Github</a>\\n        \"\n}];\n\n//# sourceURL=webpack://Web_Folio_2021/./src/modules/Projects.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Libre Baskerville\\\", serif;\\n  background-color: black;\\n}\\n\\n.splash {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  z-index: 100;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -khtml-user-select: none;\\n  /* Konqueror HTML */\\n  -moz-user-select: none;\\n  /* Old versions of Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n  background-color: white;\\n  transition: 1.5s all;\\n  opacity: 1;\\n  filter: blur(0);\\n}\\n.splash .header {\\n  font-size: 10rem;\\n  color: black;\\n  text-align: right;\\n  filter: blur(1.5rem);\\n  opacity: 0;\\n  transition: 1.5s;\\n}\\n@media (orientation: portrait) {\\n  .splash .header {\\n    font-size: 15vw;\\n  }\\n}\\n\\n.menu {\\n  width: 96vw;\\n  height: 5%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  margin: 0 2vw 0 2vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 80;\\n  background-color: black;\\n  border-bottom: 1px solid white;\\n  transition: 0.3s all;\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -khtml-user-select: none;\\n  /* Konqueror HTML */\\n  -moz-user-select: none;\\n  /* Old versions of Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n}\\n.menu__left {\\n  width: 33%;\\n}\\n@media (orientation: portrait) {\\n  .menu__left {\\n    width: 0;\\n  }\\n}\\n.menu__center {\\n  width: 33%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n@media (orientation: portrait) {\\n  .menu__center {\\n    width: 50%;\\n    justify-content: flex-start;\\n    margin-left: 1ch;\\n  }\\n}\\n.menu__right {\\n  width: 33%;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n@media (orientation: portrait) {\\n  .menu__right {\\n    width: 50%;\\n    justify-content: flex-end;\\n  }\\n  .menu__right .menu__folio {\\n    margin-right: 1ch;\\n  }\\n  .menu__right .menu__social {\\n    margin-right: 1ch;\\n  }\\n  .menu__right .menu__contact {\\n    margin-right: 1ch;\\n  }\\n}\\n.menu__logo {\\n  color: #FF2D55;\\n  text-align: center;\\n  transition: 0.3s all;\\n}\\n.menu__logo:hover {\\n  filter: brightness(1.2);\\n}\\n.menu__folio {\\n  color: white;\\n  margin-right: 2ch;\\n  transition: 0.3s all;\\n}\\n.menu__folio:hover {\\n  color: #FF2D55;\\n}\\n.menu__social {\\n  color: white;\\n  margin-right: 2ch;\\n  transition: 0.3s all;\\n}\\n.menu__social:hover {\\n  color: #FF2D55;\\n}\\n.menu__contact {\\n  color: white;\\n  margin-right: 2ch;\\n  transition: 0.3s all;\\n}\\n.menu__contact:hover {\\n  color: #FF2D55;\\n}\\n\\n.contact-page {\\n  width: 96%;\\n  height: 0.5vh;\\n  margin: 0 2% 0 2%;\\n  position: absolute;\\n  top: 5%;\\n  left: 0;\\n  right: 0;\\n  z-index: 70;\\n  color: white;\\n  background-color: black;\\n  border-bottom: 1px solid white;\\n  transition: 0.3s all;\\n  overflow: hidden;\\n}\\n.contact-page__row {\\n  height: auto;\\n  transition: 0.5s all;\\n}\\n.contact-page__row__link {\\n  padding: 0.5ch 0 0 5%;\\n  font-size: 5ch;\\n  transition: 0.5s all;\\n}\\n.contact-page__row__link > a {\\n  text-decoration: none;\\n  color: white;\\n  transition: 0.3s all;\\n}\\n.contact-page__row__link > a:hover {\\n  color: #FF2D55;\\n}\\n\\n.main {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  background-color: black;\\n  opacity: 0;\\n  transition: 0.5s all;\\n}\\n.main__left {\\n  width: 50%;\\n  height: 100%;\\n}\\n.main__right {\\n  width: 50%;\\n  height: 100%;\\n}\\n.main__header {\\n  height: auto;\\n  width: auto;\\n  max-width: 70vw;\\n  z-index: 10;\\n  font-size: 17vh;\\n  font-weight: 100;\\n  color: white;\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -khtml-user-select: none;\\n  /* Konqueror HTML */\\n  -moz-user-select: none;\\n  /* Old versions of Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n}\\n@media (orientation: landscape) {\\n  .main__header {\\n    position: relative;\\n    left: 8%;\\n  }\\n}\\n@media (orientation: portrait) {\\n  .main__header {\\n    font-size: 7vh;\\n    position: relative;\\n    top: 50%;\\n  }\\n}\\n.main__header--web {\\n  position: absolute;\\n  top: 1.5ch;\\n  left: 1ch;\\n  letter-spacing: 0.07ch;\\n  z-index: 50;\\n  transition: 0.3s all;\\n}\\n.main__header--web:hover {\\n  color: #FF2D55;\\n}\\n.main__header--dev {\\n  position: absolute;\\n  top: 2.8ch;\\n  left: 2.7ch;\\n  z-index: 50;\\n  transition: 0.3s all;\\n}\\n.main__header--dev:hover {\\n  color: #FF2D55;\\n}\\n.main__header--and {\\n  position: absolute;\\n  top: 2.8ch;\\n  left: 1.2ch;\\n  z-index: 50;\\n  transition: 0.3s all;\\n}\\n.main__header--and:hover {\\n  color: #d6d6d6;\\n}\\n.main__header--photo {\\n  position: absolute;\\n  top: 4.1ch;\\n  left: 0.2ch;\\n  z-index: 50;\\n  transition: 0.3s all;\\n}\\n.main__header--photo:hover {\\n  color: #CEFF2D;\\n}\\n.main__header--graphy {\\n  position: absolute;\\n  top: 5.4ch;\\n  left: 1.15ch;\\n  z-index: 50;\\n  transition: 0.3s all;\\n}\\n.main__header--graphy:hover {\\n  color: #CEFF2D;\\n}\\n.main__hero {\\n  width: auto;\\n  height: auto;\\n  position: relative;\\n  top: 18%;\\n  right: 8%;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  z-index: 0;\\n}\\n@media (orientation: portrait) {\\n  .main__hero {\\n    top: 10%;\\n  }\\n}\\n.main__hero > img {\\n  width: 45vw;\\n  height: 35vh;\\n  object-fit: cover;\\n  object-position: center center;\\n}\\n@media (orientation: portrait) {\\n  .main__hero > img {\\n    width: 80vw;\\n    height: 70vh;\\n  }\\n}\\n.main .sub-header {\\n  width: auto;\\n  height: auto;\\n  z-index: 5;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n@media (orientation: landscape) {\\n  .main .sub-header {\\n    position: relative;\\n    top: 22%;\\n    right: 8%;\\n  }\\n}\\n.main .sub-header__text {\\n  transition: 0.3s all;\\n  opacity: 1;\\n  width: 60%;\\n  text-align: right;\\n  color: white;\\n  font-size: 3vh;\\n}\\n@media (max-aspect-ratio: 3/2) {\\n  .main .sub-header__text {\\n    opacity: 0;\\n    top: 0;\\n    left: 0;\\n  }\\n}\\n@media (orientation: portrait) {\\n  .main .sub-header__text {\\n    width: 60%;\\n    position: absolute;\\n    left: 33%;\\n    top: 93%;\\n    opacity: 1;\\n    font-size: 2vh;\\n    padding-bottom: 2ch;\\n  }\\n}\\n.main__more {\\n  position: absolute;\\n  top: 90%;\\n  left: 44.7%;\\n  color: white;\\n  transition: 0.3s all;\\n  z-index: 50;\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -khtml-user-select: none;\\n  /* Konqueror HTML */\\n  -moz-user-select: none;\\n  /* Old versions of Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n}\\n@media (orientation: portrait) {\\n  .main__more {\\n    top: 128%;\\n    left: 33%;\\n    padding-bottom: 5%;\\n  }\\n}\\n.main__more:hover {\\n  color: #FF2D55;\\n  transform: scale(1.02);\\n}\\n.main__text-circle {\\n  width: 100px;\\n  height: 100px;\\n  border-radius: 50%;\\n  color: white;\\n  font-size: 3vh;\\n}\\n\\n@media (orientation: landscape) {\\n  .folio {\\n    width: 100%;\\n    height: 100vh;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    z-index: 1;\\n    opacity: 0;\\n    transition: 0.5s all;\\n    background-color: black;\\n  }\\n  .folio__left {\\n    width: 50%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: nowrap;\\n    justify-content: center;\\n    align-items: flex-end;\\n  }\\n}\\n@media (orientation: landscape) and (max-aspect-ratio: 3/2) {\\n  .folio__left .folio__hero {\\n    width: auto;\\n  }\\n  .folio__left .folio__hero > img {\\n    width: 40vw;\\n  }\\n  .folio__left .folio__project-selector {\\n    width: 40vw;\\n  }\\n}\\n@media (orientation: landscape) {\\n  .folio__right {\\n    width: 50%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: nowrap;\\n    justify-content: center;\\n    align-items: flex-end;\\n    opacity: 1;\\n    transition: 0.2s all;\\n  }\\n}\\n@media (orientation: landscape) and (max-aspect-ratio: 3/2) {\\n  .folio__right .folio__text {\\n    overflow: scroll;\\n  }\\n}\\n@media (orientation: landscape) {\\n  .folio__hero {\\n    width: auto;\\n    height: auto;\\n    padding: 5% 0 0 0;\\n  }\\n  .folio__hero > img {\\n    width: 75vh;\\n    height: 75vh;\\n    object-fit: cover;\\n    object-position: center center;\\n    filter: opacity(0.5);\\n    transition: 0.3s all;\\n  }\\n  .folio__hero > img:hover {\\n    filter: opacity(1);\\n  }\\n}\\n@media (orientation: landscape) {\\n  .folio__project-selector {\\n    width: 75vh;\\n    height: auto;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 2% 0 0 0;\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    color: white;\\n    font-size: 3vh;\\n  }\\n  .folio__project-selector .project-selector__nav {\\n    display: flex;\\n    width: 50%;\\n    transition: 0.2s all;\\n  }\\n  .folio__project-selector .project-selector__nav > .prev:hover {\\n    color: #FF2D55;\\n  }\\n  .folio__project-selector .project-selector__nav > .next:hover {\\n    color: #FF2D55;\\n  }\\n  .folio__project-selector .project-selector__page {\\n    width: 50%;\\n    display: flex;\\n    justify-content: flex-end;\\n  }\\n}\\n@media (orientation: landscape) {\\n  .folio__header {\\n    width: 100%;\\n    height: 28vh;\\n    margin: 0 12% 0 0;\\n    display: flex;\\n    align-items: flex-end;\\n    justify-items: flex-end;\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    color: #FF2D55;\\n    font-size: 10vh;\\n    text-align: left;\\n    font-style: italic;\\n    filter: opacity(0.8);\\n    transition: 0.3s all;\\n  }\\n  .folio__header:hover {\\n    filter: opacity(1);\\n  }\\n}\\n@media (orientation: landscape) {\\n  .folio__text {\\n    width: 90%;\\n    height: 72vh;\\n    margin: 0 9% 0 0;\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    color: white;\\n    font-size: 3vh;\\n    text-align: justify;\\n  }\\n  .folio__text h3 {\\n    font-size: 4vh;\\n    margin: 0;\\n    padding: 0;\\n    transition: 0.3s all;\\n    color: #CEFF2D;\\n    filter: opacity(0.9);\\n  }\\n  .folio__text h3:hover {\\n    color: #CEFF2D;\\n    filter: opacity(1);\\n  }\\n}\\n@media (orientation: portrait) {\\n  .folio {\\n    width: 100%;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    z-index: 1;\\n    opacity: 0;\\n    transition: 0.5s all;\\n    background-color: black;\\n  }\\n  .folio__left {\\n    width: 100%;\\n    height: 65vh;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  .folio__right {\\n    width: 100%;\\n    height: auto;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n    opacity: 1;\\n    transition: 0.2s all;\\n  }\\n  .folio__hero {\\n    width: 90%;\\n    height: auto;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 10% 0 0 0;\\n  }\\n  .folio__hero > img {\\n    width: 50vh;\\n    height: 50vh;\\n    max-width: 100%;\\n    object-fit: cover;\\n    object-position: center center;\\n    filter: opacity(0.7);\\n    transition: 0.3s all;\\n  }\\n  .folio__hero > img:hover {\\n    filter: opacity(1);\\n  }\\n  .folio__project-selector {\\n    width: 90%;\\n    height: auto;\\n    margin-top: -8%;\\n    display: flex;\\n    justify-content: space-between;\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    color: white;\\n    font-size: 1.5vh;\\n  }\\n  .folio__project-selector .project-selector__nav {\\n    display: flex;\\n    width: 50%;\\n    transition: 0.2s all;\\n  }\\n  .folio__project-selector .project-selector__nav > .prev:hover {\\n    color: #FF2D55;\\n  }\\n  .folio__project-selector .project-selector__nav > .next:hover {\\n    color: #FF2D55;\\n  }\\n  .folio__project-selector .project-selector__page {\\n    width: 50%;\\n    display: flex;\\n    justify-content: flex-end;\\n  }\\n  .folio__header {\\n    width: 90%;\\n    height: auto;\\n    margin: 2% 0 2% 2%;\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    color: #FF2D55;\\n    font-size: 8vh;\\n    text-align: left;\\n    font-style: italic;\\n    filter: opacity(0.9);\\n    transition: 0.3s all;\\n  }\\n  .folio__header:hover {\\n    filter: opacity(1);\\n  }\\n  .folio__text {\\n    width: 90%;\\n    height: auto;\\n    margin: 0 2% 7% 2%;\\n    -webkit-touch-callout: none;\\n    /* iOS Safari */\\n    -webkit-user-select: none;\\n    /* Safari */\\n    -khtml-user-select: none;\\n    /* Konqueror HTML */\\n    -moz-user-select: none;\\n    /* Old versions of Firefox */\\n    -ms-user-select: none;\\n    /* Internet Explorer/Edge */\\n    user-select: none;\\n    color: white;\\n    font-size: 3vh;\\n    text-align: justify;\\n  }\\n  .folio__text h3 {\\n    font-size: 4vh;\\n    margin: 0;\\n    padding: 0;\\n    transition: 0.3s all;\\n    color: #CEFF2D;\\n    filter: opacity(0.9);\\n  }\\n  .folio__text h3:hover {\\n    color: #CEFF2D;\\n    filter: opacity(1);\\n  }\\n}\\n\\na:link {\\n  transition: 0.3s all;\\n  color: white;\\n  text-decoration: none;\\n}\\n\\na:visited {\\n  color: white;\\n  text-decoration: none;\\n}\\n\\na:hover {\\n  color: #CEFF2D;\\n  text-decoration: none;\\n}\\n\\na:active {\\n  color: #CEFF2D;\\n  filter: invert(0.2);\\n  text-decoration: none;\\n}\\n\\n#circle-text {\\n  transition: 0.3s all;\\n  color: white;\\n  mix-blend-mode: exclusion;\\n  z-index: 50;\\n}\\n@media (orientation: portrait) {\\n  #circle-text {\\n    position: absolute;\\n    top: 7%;\\n    left: 7ch;\\n    font-size: 1.2rem;\\n  }\\n}\\n@media (orientation: landscape) {\\n  #circle-text {\\n    position: absolute;\\n    top: 7%;\\n    right: 8ch;\\n    font-size: 2rem;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Web_Folio_2021/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/images/minWeather.png":
/*!***********************************!*\
  !*** ./src/images/minWeather.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"643a61b261c5c87ae0dc6ae3caf5c6e3.png\");\n\n//# sourceURL=webpack://Web_Folio_2021/./src/images/minWeather.png?");

/***/ }),

/***/ "./src/images/travel1.jpg":
/*!********************************!*\
  !*** ./src/images/travel1.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"af4287e4ded7daf9a96563e41835afd2.jpg\");\n\n//# sourceURL=webpack://Web_Folio_2021/./src/images/travel1.jpg?");

/***/ }),

/***/ "./src/images/web0.png":
/*!*****************************!*\
  !*** ./src/images/web0.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"09d812aa73dfbb6fbf8f6f1a9c75da04.png\");\n\n//# sourceURL=webpack://Web_Folio_2021/./src/images/web0.png?");

/***/ }),

/***/ "./src/images/web1.png":
/*!*****************************!*\
  !*** ./src/images/web1.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"df68899e03ef3e0333f59fdfe4c573f6.png\");\n\n//# sourceURL=webpack://Web_Folio_2021/./src/images/web1.png?");

/***/ }),

/***/ "./src/images/web2.png":
/*!*****************************!*\
  !*** ./src/images/web2.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"55ba28bfa6228b70a431359aa5318dfc.png\");\n\n//# sourceURL=webpack://Web_Folio_2021/./src/images/web2.png?");

/***/ }),

/***/ "./src/images/web3.png":
/*!*****************************!*\
  !*** ./src/images/web3.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"996717da809175244bf544c332f23c3d.png\");\n\n//# sourceURL=webpack://Web_Folio_2021/./src/images/web3.png?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://Web_Folio_2021/./src/style.scss?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkWeb_Folio_2021"] = self["webpackChunkWeb_Folio_2021"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_circletype_dist_circletype_min_js-node_modules_css-loader_dist_runtime_a-661b86"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;