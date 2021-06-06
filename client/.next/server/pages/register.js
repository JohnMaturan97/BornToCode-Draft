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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/eggrollz/Desktop/BornToCode/client/pages/register.js\";\n\n\n\nconst Register = () => {\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  const handleSubmit = async e => {\n    e.preventDefault(); //console.log({name, email, password});\n\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`http://localhost:8000/api/register`, {\n      name,\n      email,\n      password\n    });\n    console.log('REGISTERED RESPONSE', data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"jumbotron text-center bg-info square\",\n      children: \"Register\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"page-container-Register\": true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container col-md-4 offset-md-4 pd-5\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n          onSubmit: handleSubmit,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"name\",\n            className: \"form-control mb-4 p-4\",\n            value: name,\n            onChange: e => setName(e.target.value),\n            placeholder: \"Enter Legal Name\",\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"email\",\n            className: \"form-control mb-4 p-4\",\n            value: email,\n            onChange: e => setEmail(e.target.value),\n            placeholder: \"Enter Valid Email\",\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"password\",\n            className: \"form-control mb-4 p-4\",\n            value: password,\n            onChange: e => setPassword(e.target.value),\n            placeholder: \"Enter Proper Password\",\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: \"button btn-block btn-info p-2\",\n            children: \"Submit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9yZWdpc3Rlci5qcz8wZWNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImF4aW9zIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNmLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW1CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLCtDQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFSixRQUFNSyxZQUFZLEdBQUcsTUFBTUMsQ0FBTixJQUFZO0FBQzdCQSxLQUFDLENBQUNDLGNBQUYsR0FENkIsQ0FFN0I7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVcsTUFBTUMsaURBQUEsQ0FBWSxvQ0FBWixFQUFpRDtBQUNwRVgsVUFEb0U7QUFFcEVHLFdBRm9FO0FBR3BFRTtBQUhvRSxLQUFqRCxDQUF2QjtBQUtBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0gsSUFBbkM7QUFDSCxHQVREOztBQVdBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLHFDQUFMO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsK0JBQ0k7QUFBTSxrQkFBUSxFQUFFSCxZQUFoQjtBQUFBLGtDQUVJO0FBQ0EsZ0JBQUksRUFBQyxNQURMO0FBRUEscUJBQVMsRUFBQyx1QkFGVjtBQUdBLGlCQUFLLEVBQUVQLElBSFA7QUFJQSxvQkFBUSxFQUFHUSxDQUFELElBQU9QLE9BQU8sQ0FBQ08sQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FKeEI7QUFLQSx1QkFBVyxFQUFDLGtCQUxaO0FBTUEsb0JBQVE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBV0k7QUFDQSxnQkFBSSxFQUFDLE9BREw7QUFFQSxxQkFBUyxFQUFDLHVCQUZWO0FBR0EsaUJBQUssRUFBRVosS0FIUDtBQUlBLG9CQUFRLEVBQUdLLENBQUQsSUFBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUp6QjtBQUtBLHVCQUFXLEVBQUMsbUJBTFo7QUFNQSxvQkFBUTtBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEosZUFvQkk7QUFDQSxnQkFBSSxFQUFDLFVBREw7QUFFQSxxQkFBUyxFQUFDLHVCQUZWO0FBR0EsaUJBQUssRUFBRVYsUUFIUDtBQUlBLG9CQUFRLEVBQUdHLENBQUQsSUFBT0YsV0FBVyxDQUFDRSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUo1QjtBQUtBLHVCQUFXLEVBQUMsdUJBTFo7QUFNQSxvQkFBUTtBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJKLGVBNkJJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsK0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLGtCQURKO0FBd0NILENBeEREOztBQTBEQSwrREFBZWhCLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdPSB1c2VTdGF0ZSgnJyk7XG4gICAgICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coe25hbWUsIGVtYWlsLCBwYXNzd29yZH0pO1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICBuYW1lLCBcbiAgICAgICAgICAgIGVtYWlsLCBcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ1JFR0lTVEVSRUQgUkVTUE9OU0UnLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyIGJnLWluZm8gc3F1YXJlXCI+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgPGRpdiBwYWdlLWNvbnRhaW5lci1SZWdpc3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGQtNSc+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIG1iLTQgcC00JyBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgTGVnYWwgTmFtZScgXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgbWItNCBwLTQnIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFZhbGlkIEVtYWlsJyBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBtYi00IHAtNCcgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgUHJvcGVyIFBhc3N3b3JkJyBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz4gICBcblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidXR0b24gYnRuLWJsb2NrIGJ0bi1pbmZvIHAtMic+U3VibWl0PC9idXR0b24+ICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+ICAgICAgXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();