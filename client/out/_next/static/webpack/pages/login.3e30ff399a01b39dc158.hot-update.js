webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/UserAuthDialog.js":
/*!******************************************!*\
  !*** ./src/components/UserAuthDialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormDialog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
/* harmony import */ var _styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AuthDialogSyles */ "./src/styles/AuthDialogSyles.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      handleDialogClose = _ref.handleDialogClose,
      styles = _ref.styles;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].route,
      userId = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].userId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(userId),
      userID = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState2[0],
      setCheckInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      auth = _useState3[0],
      setAuth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      authSession = _useState4[0],
      setAuthSession = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      increment = _useState5[0],
      setIncrement = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState6[0],
      setInput = _useState6[1];

  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setCheckInput(false);
    setInput('');
    setAuthSession(authSession + 1);
    increment === message.length - 1 ? setIncrement(0) : setIncrement(increment + 1);
  };

  var backAndReset = function backAndReset() {
    tDNA.current.reset();
    setCheckInput(false);
    setIncrement(0);
    handleDialogClose();
  };

  var checkPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var typingPattern, patternQuality, res, _yield$res$json, _message;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tDNA.current.stop();
              setCheckInput(true);
              _context.next = 4;
              return tDNA.current.getTypingPattern({
                type: 0,
                text: input
              });

            case 4:
              typingPattern = _context.sent;
              patternQuality = tDNA.current.getQuality(typingPattern);

              if (!(patternQuality > 0.3)) {
                _context.next = 18;
                break;
              }

              _context.next = 9;
              return fetch(route.signUp, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  typingPattern: typingPattern,
                  patternQuality: patternQuality,
                  authSession: authSession,
                  userID: userID,
                  input: input
                })
              });

            case 9:
              res = _context.sent;
              _context.next = 12;
              return res.json();

            case 12:
              _yield$res$json = _context.sent;
              _message = _yield$res$json.message;
              console.log(_message);

              if (res.status === 200) {
                handleIncrementUp();

                if (_message.result === 1 && _message.enrollment === 1) {
                  setAuth(true);
                }
              } else {
                alert("An error occurred on our end. Please refresh and try again.");
                handleIncrementUp();
              }

              _context.next = 19;
              break;

            case 18:
              handleIncrementUp();

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkPattern() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!tDNA.current) {
      tDNA.current = new TypingDNA();
    }
  }, [tDNA]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    input.length === message[increment].length && checkPattern();
  }, [input]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 157
    }
  }, "Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, message[increment].substring(input.length + 1, message[increment].length))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    autoFocus: true,
    autoComplete: "off",
    margin: "dense",
    id: "name",
    label: "Type Message Here",
    color: "secondary",
    value: input,
    inputProps: {
      spellCheck: 'false'
    },
    disabled: checkInput,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "AwhJGiQysksz0ABs6T9Lh6/xBUQ=", false, function () {
  return [_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"]];
});

_c = FormDialog;

var _c;

$RefreshReg$(_c, "FormDialog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlcklkIiwidXNlU3RhdGUiLCJ1c2VySUQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImF1dGgiLCJzZXRBdXRoIiwiYXV0aFNlc3Npb24iLCJzZXRBdXRoU2Vzc2lvbiIsImluY3JlbWVudCIsInNldEluY3JlbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJ0RE5BIiwidXNlUmVmIiwiaGFuZGxlSW5jcmVtZW50VXAiLCJjdXJyZW50Iiwic3RhcnQiLCJsZW5ndGgiLCJiYWNrQW5kUmVzZXQiLCJyZXNldCIsImNoZWNrUGF0dGVybiIsInN0b3AiLCJnZXRUeXBpbmdQYXR0ZXJuIiwidHlwZSIsInRleHQiLCJ0eXBpbmdQYXR0ZXJuIiwicGF0dGVyblF1YWxpdHkiLCJnZXRRdWFsaXR5IiwiZmV0Y2giLCJzaWduVXAiLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInJlc3VsdCIsImVucm9sbG1lbnQiLCJhbGVydCIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsInN1YnN0cmluZyIsImNoYXJBdCIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBR2UsU0FBU0EsVUFBVCxPQUF5RDtBQUFBOztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFB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QVEsV0FBTyxFQUFFaUIsWUFBakI7QUFBK0IsU0FBSyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQWxDSixDQURKLENBREo7QUE0Q0g7O0dBN0h1QmhDLFU7VUFDNkNJLGlFOzs7S0FEN0NKLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uM2UzMGZmMzk5YTAxYjM5ZGMxNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQ2lyY3VsYXJQcm9ncmVzc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL0F1dGhEaWFsb2dTeWxlcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlLCBzdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBjb250ZW50LCB0eXBvcywgY3VycmVudENoYXIsIGNoYXJzVG9CZVR5cGVkLCB3ZWxjb21lIH0gPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgcm91dGUsIHVzZXJJZCB9ID0gYXV0aFN0ZXBzO1xyXG4gICAgY29uc3QgW3VzZXJJRF0gPSB1c2VTdGF0ZSh1c2VySWQpO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja0lucHV0LCBzZXRDaGVja0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2F1dGhTZXNzaW9uLCBzZXRBdXRoU2Vzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbmNyZW1lbnQsIHNldEluY3JlbWVudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgdEROQSA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICBzZXRBdXRoU2Vzc2lvbihhdXRoU2Vzc2lvbiArIDEpXHJcbiAgICAgICAgaW5jcmVtZW50ID09PSBtZXNzYWdlLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCkgOlxyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFja0FuZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldEluY3JlbWVudCgwKTtcclxuICAgICAgICBoYW5kbGVEaWFsb2dDbG9zZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdG9wKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dCh0cnVlKTtcclxuICAgICAgICBjb25zdCB0eXBpbmdQYXR0ZXJuID0gYXdhaXQgdEROQS5jdXJyZW50LmdldFR5cGluZ1BhdHRlcm4oe1xyXG4gICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5RdWFsaXR5ID0gdEROQS5jdXJyZW50LmdldFF1YWxpdHkodHlwaW5nUGF0dGVybik7XHJcblxyXG4gICAgICAgIGlmIChwYXR0ZXJuUXVhbGl0eSA+IDAuMykge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyb3V0ZS5zaWduVXAsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGluZ1BhdHRlcm4sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblF1YWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJlc3VsdCA9PT0gMSAmJiBtZXNzYWdlLmVucm9sbG1lbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdXRoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBvbiBvdXIgZW5kLiBQbGVhc2UgcmVmcmVzaCBhbmQgdHJ5IGFnYWluLlwiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdEROQV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGggJiYgY2hlY2tQYXR0ZXJuKClcclxuICAgIH0sIFtpbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2JhY2tBbmRSZXNldH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+PGltZyB3aWR0aD1cIjIwMFwiIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9BcmNoaXZhbGRpLzR3aGVlbHovYmxvYi9tYXN0ZXIvY2xpZW50L3NyYy9pbWFnZXMvU2hvcHBlZFR5cGluZ0ROQS5wbmc/cmF3PXRydWVcIiAvPjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG8gZW5zdXJlIHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlY3VyaXR5LCB3ZSBhcmUgdXNpbmcgYSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB0ZXN0IHdobyB5b3UgYXJlIGJ5IHRoZSB3YXkgeW91IHR5cGUhIHshYXV0aCAmJiAoPHNwYW4+UGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFhdXRoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgPHNwYW4gY2xhc3NOYW1lPXt0eXBvc30+KHR5cG9zIGFjY2VwdGVkKTwvc3Bhbj46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N1cnJlbnRDaGFyfT57bWVzc2FnZVtpbmNyZW1lbnRdLmNoYXJBdChpbnB1dC5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjaGFyc1RvQmVUeXBlZH0+e21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoaW5wdXQubGVuZ3RoICsgMSwgbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBNZXNzYWdlIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt3ZWxjb21lfT5XZWxjb21lIHt1c2VySUR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtiYWNrQW5kUmVzZXR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==