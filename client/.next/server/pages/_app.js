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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/eggrollz/Desktop/BornToCode/client/components/TopNav.js\";\n\n\n\n\n\n\n\n\nconst {\n  Item,\n  SubMenu,\n  ItemGroup\n} = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;\n\nconst TopNav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    state,\n    dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n  const {\n    user\n  } = state;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n     false && 0;\n  }, [ false && 0]);\n\n  const logout = async () => {\n    dispatch({\n      type: \"LOGOUT\"\n    });\n    window.localStorage.removeItem(\"user\");\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/api/logout\");\n    react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(data.message);\n    router.push(\"/login\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    mode: \"horizontal\",\n    selectedKeys: [current],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CodeSandboxOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"BornToCode Academy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, undefined)\n    }, \"/\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), user === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        className: \"float-right\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserAddOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/register\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, undefined)\n      }, \"/register\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        className: \"float-right\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CoffeeOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/login\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, undefined)\n      }, \"/login\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), user !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.BarsOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }, undefined),\n      title: user && user.name,\n      className: \"float-right\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemGroup, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ClusterOutlined, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 37\n          }, undefined),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: \"DashBoard\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 15\n          }, undefined)\n        }, \"/user\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          onClick: logout,\n          className: \"float-center\",\n          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LogoutOutlined, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 19\n          }, undefined),\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          onClick: e => setCurrent(e.key),\n          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SketchOutlined, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 19\n          }, undefined),\n          className: \"float-center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"https://codeverse-network-site.herokuapp.com/login\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              target: \"_blank\",\n              children: \"Refactor\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz83ZTU3Il0sIm5hbWVzIjpbIkl0ZW0iLCJTdWJNZW51IiwiSXRlbUdyb3VwIiwiTWVudSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiYXhpb3MiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZSIsImtleSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBLE1BQUY7QUFBUUMsU0FBUjtBQUFnQkM7QUFBaEIsSUFBOEJDLHNDQUFwQzs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyxpREFBVSxDQUFDQyw2Q0FBRCxDQUF0QztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXSixLQUFqQjtBQUVBLFFBQU1LLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsY0FBbUJULENBQW5CO0FBQ0QsR0FGUSxFQUVOLENBQUMsVUFBbUJVLENBQXBCLENBRk0sQ0FBVDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsWUFBWTtBQUN6QlIsWUFBUSxDQUFDO0FBQUVTLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBRixVQUFNLENBQUNHLFlBQVAsQ0FBb0JD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QUVFLGNBQUksZUFBRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSO0FBR0UsbUJBQVMsRUFBQyxjQUhaO0FBQUEsaUNBS0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLG9EQUFYO0FBQUEsbUNBQ0U7QUFBRyxvQkFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBFRCxDQTlGRDs7QUFnR0EsK0RBQWV2QixNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub3BOYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIENvZGVTYW5kYm94T3V0bGluZWQsXG4gIENvZmZlZU91dGxpbmVkLFxuICBDb21tZW50T3V0bGluZWQsXG4gIENsdXN0ZXJPdXRsaW5lZCxcbiAgTG9nb3V0T3V0bGluZWQsXG4gIFVzZXJBZGRPdXRsaW5lZCxcbiAgU2tldGNoT3V0bGluZWQsXG4gIEJhcnNPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuY29uc3QgeyBJdGVtLCBTdWJNZW51LEl0ZW1Hcm91cCB9ID0gTWVudTtcblxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dPVVRcIiB9KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9sb2dvdXRcIik7XG4gICAgdG9hc3Quc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0+XG4gICAgICA8SXRlbVxuICAgICAgICBrZXk9XCIvXCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICBpY29uPXs8Q29kZVNhbmRib3hPdXRsaW5lZCAvPn1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Cb3JuVG9Db2RlIEFjYWRlbXk8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvSXRlbT5cblxuICAgICAge3VzZXIgPT09IG51bGwgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgaWNvbj17PFVzZXJBZGRPdXRsaW5lZCAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgIDxhPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSXRlbT5cblxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9XCIvbG9naW5cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgaWNvbj17PENvZmZlZU91dGxpbmVkIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9JdGVtPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHt1c2VyICE9PSBudWxsICYmIChcbiAgICAgICAgPFN1Yk1lbnVcbiAgICAgICAgICBpY29uPXs8QmFyc091dGxpbmVkLz59XG4gICAgICAgICAgdGl0bGU9e3VzZXIgJiYgdXNlci5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJdGVtR3JvdXA+XG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvdXNlclwiIGljb249ezxDbHVzdGVyT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICA8YT5EYXNoQm9hcmQ8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvSXRlbT5cblxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1jZW50ZXJcIlxuICAgICAgICAgICAgaWNvbj17PExvZ291dE91dGxpbmVkIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvSXRlbT5cblxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgICBpY29uPXs8U2tldGNoT3V0bGluZWQvPn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vY29kZXZlcnNlLW5ldHdvcmstc2l0ZS5oZXJva3VhcHAuY29tL2xvZ2luXCI+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlJlZmFjdG9yPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICA8L0l0ZW1Hcm91cD5cbiAgICAgICAgICBcbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgKX1cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","context_index_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();