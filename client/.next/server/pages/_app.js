/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/eggrollz/Desktop/BornToCode/client/components/TopNav.js\";\n\n\n\n\n\n\n\n\nconst {\n  Item,\n  SubMenu\n} = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;\n\nconst TopNav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    state,\n    dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n  const {\n    user\n  } = state;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n     false && 0;\n  }, [ false && 0]);\n\n  const logout = async () => {\n    dispatch({\n      type: \"LOGOUT\"\n    });\n    window.localStorage.removeItem(\"user\");\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/api/logout\");\n    react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(data.message);\n    router.push(\"/login\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    mode: \"horizontal\",\n    selectedKeys: [current],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CodeSandboxOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"BornToCode Academy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, undefined)\n    }, \"/\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined), user === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CoffeeOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/login\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, undefined)\n      }, \"/login\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserAddOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/register\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, undefined)\n      }, \"/register\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), user !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ClusterOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }, undefined),\n      title: user && user.name,\n      className: \"float-right\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: logout,\n        className: \"float-center\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LogoutOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, undefined),\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CommentOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 19\n        }, undefined),\n        className: \"float-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"https://bugchat.netlify.app/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            target: \"_blank\",\n            children: \"Messenger\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz83ZTU3Il0sIm5hbWVzIjpbIkl0ZW0iLCJTdWJNZW51IiwiTWVudSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiYXhpb3MiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZSIsImtleSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBLE1BQUY7QUFBUUM7QUFBUixJQUFvQkMsc0NBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBRUEsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLGlEQUFVLENBQUNDLDZDQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdKLEtBQWpCO0FBRUEsUUFBTUssTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxjQUFtQlQsQ0FBbkI7QUFDRCxHQUZRLEVBRU4sQ0FBQyxVQUFtQlUsQ0FBcEIsQ0FGTSxDQUFUOztBQUlBLFFBQU1DLE1BQU0sR0FBRyxZQUFZO0FBQ3pCUixZQUFRLENBQUM7QUFBRVMsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0FGLFVBQU0sQ0FBQ0csWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0IsTUFBL0I7QUFDQSxV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O0FBdUZBLCtEQUFldkIsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9wTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge1xuICBDb2RlU2FuZGJveE91dGxpbmVkLFxuICBDb2ZmZWVPdXRsaW5lZCxcbiAgQ29tbWVudE91dGxpbmVkLFxuICBDbHVzdGVyT3V0bGluZWQsXG4gIExvZ291dE91dGxpbmVkLFxuICBVc2VyQWRkT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmNvbnN0IHsgSXRlbSwgU3ViTWVudSB9ID0gTWVudTtcblxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dPVVRcIiB9KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9sb2dvdXRcIik7XG4gICAgdG9hc3Quc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0+XG4gICAgICA8SXRlbVxuICAgICAgICBrZXk9XCIvXCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICBpY29uPXs8Q29kZVNhbmRib3hPdXRsaW5lZCAvPn1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Cb3JuVG9Db2RlIEFjYWRlbXk8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvSXRlbT5cblxuICAgICAge3VzZXIgPT09IG51bGwgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9XCIvbG9naW5cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgICAgaWNvbj17PENvZmZlZU91dGxpbmVkIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9JdGVtPlxuXG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIGtleT1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgICBpY29uPXs8VXNlckFkZE91dGxpbmVkIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9JdGVtPlxuXG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3VzZXIgIT09IG51bGwgJiYgKFxuICBcbiAgICAgICAgPFN1Yk1lbnVcbiAgICAgICAgICBpY29uPXs8Q2x1c3Rlck91dGxpbmVkLz59IFxuICAgICAgICAgIHRpdGxlPXt1c2VyICYmIHVzZXIubmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgID4gXG4gICAgICAgICAgPEl0ZW0gb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJmbG9hdC1jZW50ZXJcIlxuICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvSXRlbT4gICBcblxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgICBpY29uPXs8Q29tbWVudE91dGxpbmVkIC8+fSBjbGFzc05hbWU9XCJmbG9hdC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2J1Z2NoYXQubmV0bGlmeS5hcHAvXCI+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPk1lc3NlbmdlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+ICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICl9XG5cbiAgICAgXG4gICAgPC9NZW51PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"Provider\": function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/eggrollz/Desktop/BornToCode/client/context/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //inital state \n\nconst initialState = {\n  user: null\n}; //create context\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(); // root reducer \n\nconst rootReducer = (state, action) => {\n  switch (action.type) {\n    case \"LOGIN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    case \"LOGOUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: null\n      });\n\n    default:\n      return state;\n  }\n}; //  context provider \n\n\nconst Provider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, initialState);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    dispatch({\n      type: \"LOGIN\",\n      payload: JSON.parse(window.localStorage.getItem('user'))\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzAyNjUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFO0FBRFcsQ0FBckIsQyxDQUlBOztBQUNBLE1BQU1DLE9BQU8sZ0JBQUdDLG9EQUFhLEVBQTdCLEMsQ0FFQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ25DLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssT0FBTDtBQUNBLDZDQUFXRixLQUFYO0FBQWtCSixZQUFJLEVBQUVLLE1BQU0sQ0FBQ0U7QUFBL0I7O0FBQ0EsU0FBSyxRQUFMO0FBQ0ksNkNBQVdILEtBQVg7QUFBa0JKLFlBQUksRUFBRTtBQUF4Qjs7QUFDQTtBQUNJLGFBQU9JLEtBQVA7QUFOWjtBQVFILENBVEQsQyxDQVdBOzs7QUFDQSxNQUFNSSxRQUFRLEdBQUUsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDNUIsUUFBTTtBQUFBLE9BQUNMLEtBQUQ7QUFBQSxPQUFRTTtBQUFSLE1BQW9CQyxpREFBVSxDQUFDUixXQUFELEVBQWNKLFlBQWQsQ0FBcEM7QUFFQWEsa0RBQVMsQ0FBQyxNQUFNO0FBQ1pGLFlBQVEsQ0FBRTtBQUNOSixVQUFJLEVBQUUsT0FEQTtBQUVOQyxhQUFPLEVBQUVNLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLENBQVg7QUFGSCxLQUFGLENBQVI7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0ksOERBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFO0FBQUNiLFdBQUQ7QUFBUU07QUFBUixLQUF6QjtBQUFBLGNBQTZDRDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSCxDQWJEIiwiZmlsZSI6Ii4vY29udGV4dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuLy9pbml0YWwgc3RhdGUgXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogbnVsbCxcbn1cblxuLy9jcmVhdGUgY29udGV4dFxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG4vLyByb290IHJlZHVjZXIgXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXI6IG51bGx9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4vLyAgY29udGV4dCBwcm92aWRlciBcbmNvbnN0IFByb3ZpZGVyID0oe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoICh7XG4gICAgICAgICAgICB0eXBlOiBcIkxPR0lOXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSxcbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCB7Q29udGV4dCwgUHJvdmlkZXJ9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopNav */ \"./components/TopNav.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\nvar _jsxFileName = \"/Users/eggrollz/Desktop/BornToCode/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n      position: \"top-center\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopNav__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFDQyxXQUFEO0FBQVlDO0FBQVosQ0FBZixFQUF1QztBQUNuQyxzQkFDSSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb3BOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BOYXYnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnLi4vY29udGV4dCdcblxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlcj5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIiAvPlxuICAgICAgICAgICAgPFRvcE5hdi8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();