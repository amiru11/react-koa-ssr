/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ increase; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ decrease; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ increaseBy; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "typesafe-actions"
var external_typesafe_actions_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/modules/counter.ts


var _createReducer;

 // Create Action Type

var INCREASE = 'counter/INCREASE';
var DECREASE = 'counter/DECREASE';
var INCREASE_BY = 'counter/INCREASE_BY'; // Create Action funciton

var increase = Object(external_typesafe_actions_["createAction"])(INCREASE)();
var decrease = Object(external_typesafe_actions_["createAction"])(DECREASE)();
var increaseBy = Object(external_typesafe_actions_["createAction"])(INCREASE_BY)(); // Declare Action Object Type

var actions = {
  increase: increase,
  decrease: decrease,
  increaseBy: increaseBy
};
// Declare initialState
var initialState = {
  count: 0
}; // Create Reducer

var reducer = Object(external_typesafe_actions_["createReducer"])(initialState, (_createReducer = {}, _defineProperty(_createReducer, INCREASE, function (state) {
  return {
    count: state.count + 1
  };
}), _defineProperty(_createReducer, DECREASE, function (state) {
  return {
    count: state.count > 0 ? state.count - 1 : 0
  };
}), _defineProperty(_createReducer, INCREASE_BY, function (state, action) {
  return {
    count: state.count + action.payload
  };
}), _createReducer));
/* harmony default export */ var counter = __webpack_exports__["b"] = (reducer);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TasksPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NotFoundPage; });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);

var HomePage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-home-HomePage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve(/* import() | pages-home-HomePage */).then(__webpack_require__.bind(null, 19));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(19);
    }

    return eval('require.resolve')("pages/home/HomePage");
  }
});
var TasksPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-tasks-TasksPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve(/* import() | pages-tasks-TasksPage */).then(__webpack_require__.bind(null, 20));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(20);
    }

    return eval('require.resolve')("pages/tasks/TasksPage");
  }
});
var CounterPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-counter-CounterPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve(/* import() | pages-counter-CounterPage */).then(__webpack_require__.bind(null, 21));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(21);
    }

    return eval('require.resolve')("pages/counter/CounterPage");
  }
});
var NotFoundPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-common-NotFoundPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve(/* import() | pages-common-NotFoundPage */).then(__webpack_require__.bind(null, 22));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(22);
    }

    return eval('require.resolve')("pages/common/NotFoundPage");
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet-async");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0___default()(subClass, superClass);
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1___default()();
  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0___default()(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result);
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/getPrototypeOf");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(2);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./src/pages/home/Home.module.scss
// Exports
/* harmony default export */ var Home_module = ({
	"home-container": "Home_home-container__92Swo"
});

// CONCATENATED MODULE: ./src/pages/home/HomePage.tsx



var cx = bind_default.a.bind(Home_module);

function HomePage() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: cx('home-container')
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Home"));
}

/* harmony default export */ var home_HomePage = __webpack_exports__["default"] = (HomePage);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(15);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(2);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./src/pages/tasks/Tasks.module.scss
// Exports
/* harmony default export */ var Tasks_module = ({
	"tasks-container": "Tasks_tasks-container__2N63x"
});

// CONCATENATED MODULE: ./src/pages/tasks/TasksPage.tsx







var cx = bind_default.a.bind(Tasks_module);

var TasksPage_TasksPage = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(TasksPage, _Component);

  var _super = Object(createSuper["a" /* default */])(TasksPage);

  function TasksPage() {
    Object(classCallCheck["a" /* default */])(this, TasksPage);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(TasksPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: cx('tasks-container')
      }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Tasks"));
    }
  }]);

  return TasksPage;
}(external_react_["Component"]);

/* harmony default export */ var tasks_TasksPage = __webpack_exports__["default"] = (TasksPage_TasksPage);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(5);

// EXTERNAL MODULE: ./src/modules/counter.ts + 1 modules
var counter = __webpack_require__(4);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(2);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./src/pages/counter/Counter.module.scss
// Exports
/* harmony default export */ var Counter_module = ({
	"counter-container": "Counter_counter-container__3sBln"
});

// CONCATENATED MODULE: ./src/pages/counter/CounterPage.tsx




 // const { useState } = React;

var cx = bind_default.a.bind(Counter_module);

function CounterPage() {
  var count = Object(external_react_redux_["useSelector"])(function (state) {
    return state.counter.count;
  }); // Get State from redux

  var dispatch = Object(external_react_redux_["useDispatch"])(); // Get Dispatch from redux
  // const [count, setCount] = useState<number>(0);
  // const increaseCount = (): void => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = (): void => {
  //   if (count < 1) return;
  //   setCount(count - 1);
  // };

  var onIncrease = function onIncrease() {
    dispatch(Object(counter["c" /* increase */])());
  };

  var onDecrease = function onDecrease() {
    dispatch(Object(counter["a" /* decrease */])());
  };

  var onIncreaseBy = function onIncreaseBy(count) {
    dispatch(Object(counter["d" /* increaseBy */])(count));
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: cx('counter-container')
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Counter: ", count), /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: onIncrease
  }, "+1"), /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: onDecrease
  }, "-1"), /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return onIncreaseBy(5);
    }
  }, "+5"));
}

/* harmony default export */ var counter_CounterPage = __webpack_exports__["default"] = (CounterPage);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(15);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(2);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./src/pages/common/NotFound.module.scss
// Exports
/* harmony default export */ var NotFound_module = ({
	"notfound-container": "NotFound_notfound-container__xAhe_"
});

// CONCATENATED MODULE: ./src/pages/common/NotFoundPage.tsx







var cx = bind_default.a.bind(NotFound_module);

var NotFoundPage_NotFoundPage = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(NotFoundPage, _Component);

  var _super = Object(createSuper["a" /* default */])(NotFoundPage);

  function NotFoundPage() {
    Object(classCallCheck["a" /* default */])(this, NotFoundPage);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(NotFoundPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: cx('notfound-container')
      }, /*#__PURE__*/external_react_default.a.createElement("h1", null, "Not Found"));
    }
  }]);

  return NotFoundPage;
}(external_react_["Component"]);

/* harmony default export */ var common_NotFoundPage = __webpack_exports__["default"] = (NotFoundPage_NotFoundPage);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@koa/router");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header__container{background-color:#ffffff;box-shadow:rgba(0,0,0,0.18) 0px 1px 2px;display:flex;align-items:center;justify-content:space-between;width:100%;position:fixed;top:0;left:50%;height:60px;transform:translateX(-50%);transition:background-color 0.25s ease-in-out;z-index:10}.header__wrap{display:flex;align-items:center;justify-content:space-between;max-width:1024px;margin:0 auto;width:100%}.nav__container ul{display:flex}.nav__container ul li{position:relative;text-align:center}.nav__container ul li>a{color:#8e8e8e;display:inline-block;font-size:20px;font-weight:normal;line-height:80px;width:100%}.nav__container ul li:hover a{color:#313439}.nav__container ul li .active{color:#313439}.nav__container ul li+li{margin-left:30px}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/setPrototypeOf");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/isNativeReflectConstruct");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/possibleConstructorReturn");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "koa"
var external_koa_ = __webpack_require__(23);
var external_koa_default = /*#__PURE__*/__webpack_require__.n(external_koa_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(9);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: external "koa-static"
var external_koa_static_ = __webpack_require__(24);
var external_koa_static_default = /*#__PURE__*/__webpack_require__.n(external_koa_static_);

// EXTERNAL MODULE: external "@koa/router"
var router_ = __webpack_require__(25);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(16);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@loadable/server"
var external_loadable_server_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-helmet-async"
var external_react_helmet_async_ = __webpack_require__(11);

// CONCATENATED MODULE: ./src/config/routes.ts
var PATH_HOME = '/';
var PATH_COUNTER = '/counter';
var PATH_TASKS = '/tasks';
var PATH_NOTFOUND = '/notfound';
// EXTERNAL MODULE: ./src/pages/index.ts
var pages = __webpack_require__(6);

// CONCATENATED MODULE: ./src/shared/Routes.tsx





function Routes() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Switch"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: PATH_HOME,
    component: pages["b" /* HomePage */],
    exact: true
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: PATH_COUNTER,
    component: pages["a" /* CounterPage */],
    exact: true
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: PATH_TASKS,
    component: pages["d" /* TasksPage */],
    exact: true
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: PATH_NOTFOUND,
    component: pages["c" /* NotFoundPage */],
    exact: true
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Redirect"], {
    from: "*",
    to: PATH_NOTFOUND
  }));
}

/* harmony default export */ var shared_Routes = (Routes);
// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(2);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./src/shared/App.module.scss
// Exports
/* harmony default export */ var App_module = ({
	"app-container": "App_app-container__7so6N",
	"main-container": "App_main-container__2qzOl",
	"empty-list": "App_empty-list__28wZD"
});

// EXTERNAL MODULE: ./src/components/common/Header.scss
var Header = __webpack_require__(26);

// CONCATENATED MODULE: ./src/components/common/Header.tsx




var cx = bind_default.a.bind(Header["a" /* default */]);

function Header_Header() {
  return /*#__PURE__*/external_react_default.a.createElement("header", {
    className: cx('header__container')
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: cx('header__wrap')
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: '/'
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "",
    alt: "logo"
  })), /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: cx('nav__container')
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    to: "/",
    activeClassName: "active",
    exact: true
  }, "Home")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    to: "/counter",
    activeClassName: "active"
  }, "Counter")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    to: "/tasks",
    activeClassName: "active"
  }, "Tasks"))))));
}

/* harmony default export */ var common_Header = (Header_Header);
// CONCATENATED MODULE: ./src/shared/App.tsx






var App_cx = bind_default.a.bind(App_module);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: App_cx('app-container')
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_async_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "React-Koa-SSR"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "title",
    content: 'React-Koa-SSR'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: 'React-Koa-SSR Description'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "keyword",
    content: 'React, Koa, Server-side-rendering'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "author",
    content: 'SaeMii'
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "image_src",
    href: ''
  })), /*#__PURE__*/external_react_default.a.createElement(common_Header, null), /*#__PURE__*/external_react_default.a.createElement("main", {
    className: App_cx('main-container')
  }, /*#__PURE__*/external_react_default.a.createElement(shared_Routes, null)));
}

/* harmony default export */ var shared_App = (App);
// CONCATENATED MODULE: ./src/server/Html.tsx

var favicons = [{
  rel: 'shortcut icon',
  path: '/favicon.ico'
}, {
  rel: 'apple-touch-icon',
  sizes: '152x152',
  path: '/favicons/apple-icon-152x152.png'
}, {
  rel: 'icon',
  type: 'image/png',
  sizes: '32x32',
  path: '/favicons/favicon-32x32.png'
}, {
  rel: 'icon',
  type: 'image/png',
  sizes: '96x96',
  path: '/favicons/favicon-96x96.png'
}, {
  rel: 'icon',
  type: 'image/png',
  sizes: '16x16',
  path: '/favicons/favicon-16x16.png'
}];

function Html(_ref) {
  var content = _ref.content,
      extractor = _ref.extractor,
      helmet = _ref.helmet,
      reduxState = _ref.reduxState;
  return /*#__PURE__*/external_react_default.a.createElement("html", null, /*#__PURE__*/external_react_default.a.createElement("head", null, helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), extractor.getLinkElements(), extractor.getStyleElements(), favicons.map(function (favicon) {
    return /*#__PURE__*/external_react_default.a.createElement("link", {
      key: favicon.path,
      rel: favicon.rel,
      sizes: favicon.sizes,
      href: "".concat(favicon.path)
    });
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })), /*#__PURE__*/external_react_default.a.createElement("body", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/external_react_default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__REDUX_STATE__=".concat(JSON.stringify(reduxState).replace(/</g, "\\u003c"), ";")
    }
  }), extractor.getScriptElements()));
}

/* harmony default export */ var server_Html = (Html);
// EXTERNAL MODULE: ./src/modules/counter.ts + 1 modules
var counter = __webpack_require__(4);

// CONCATENATED MODULE: ./src/modules/index.ts


var rootReducer = Object(external_redux_["combineReducers"])({
  counter: counter["b" /* default */]
});
/* harmony default export */ var modules = (rootReducer);
// CONCATENATED MODULE: ./src/server/serverRender.tsx


 // import fs from 'fs';











/**
 * import ReactDOMServer from 'react-dom/server';
 * ReactDOMServer 객체를 통해 컴포넌트를 정적 마크업으로 렌더링할 수 있습니다.
 * https://ko.reactjs.org/docs/react-dom-server.html
 */

/**
 * { StaticRouter } from 'react-router-dom'
 * react-router-dom의 <Router />는 실제로 location 변화가 없기 때문에 SSR에서 사용하는 StaticRouter
 * https://reactrouter.com/web/api/StaticRouter
 */

/**
 * { ChunkExtractor } from '@loadable/server'
 * loadable-stats.json에서 chunkFile을 추출해서 React App의 Provider를 감싸줍니다.
 * https://loadable-components.com/docs/server-side-rendering/
 */

/**
 * import { FilledContext, HelmetProvider } from 'react-helmet-async'
 * react에서 선언한 metadata를 읽어들이는 역할을 합니다.
 * https://github.com/staylor/react-helmet-async
 */

var statsFile = external_path_default.a.resolve(__dirname, '../build/loadable-stats.json'); // const template = fs.readFileSync(
//   path.join(__dirname, '../../dist/index.html'),
//   { encoding: 'utf8' }
// );
// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.

var serverRender = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref) {
    var url, store, context, extractor, helmetContext, Root, content, html, pageHtml;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url;
            console.log('URL: ', url); // prepare redux store

            store = Object(external_redux_["createStore"])(modules);
            context = {
              statusCode: 200
            };
            extractor = new external_loadable_server_["ChunkExtractor"]({
              statsFile: statsFile,
              publicPath: ""
            });
            helmetContext = {};
            Root = /*#__PURE__*/external_react_default.a.createElement(external_loadable_server_["ChunkExtractorManager"], {
              extractor: extractor
            }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_async_["HelmetProvider"], {
              context: helmetContext
            }, /*#__PURE__*/external_react_default.a.createElement(external_react_redux_["Provider"], {
              store: store
            }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["StaticRouter"], {
              location: url,
              context: context
            }, /*#__PURE__*/external_react_default.a.createElement(shared_App, null)))));
            content = server_default.a.renderToString(extractor.collectChunks(Root)); // React 엘리먼트의 초기 HTML을 렌더링합니다.

            html = /*#__PURE__*/external_react_default.a.createElement(server_Html, {
              content: content,
              reduxState: store.getState(),
              extractor: extractor,
              helmet: helmetContext.helmet
            });
            pageHtml = "<!doctype html>\n".concat(server_default.a.renderToStaticMarkup(html)); // html 마크업 및 뼈대넣기

            return _context.abrupt("return", {
              html: pageHtml,
              statusCode: context.statusCode
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var server_serverRender = (serverRender);
// CONCATENATED MODULE: ./src/server/ssrMiddleware.ts




var ssrMiddleware = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee(ctx, next) {
    var renderResult;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return server_serverRender({
              url: ctx.url
            });

          case 3:
            renderResult = _context.sent;

            if (renderResult) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", next());

          case 6:
            ctx.body = renderResult.html;
            ctx.status = renderResult.statusCode;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            ctx.throw(500, _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function ssrMiddleware(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var server_ssrMiddleware = (ssrMiddleware);
// CONCATENATED MODULE: ./src/index.server.ts





var app = new external_koa_default.a(); // Koa 인스턴스 생성

var router = new router_default.a(); // Koa Router 인스턴스 생성

/**
 * 정적파일 serve(rootDir, { ...opt })
 * ref: https://github.com/koajs/static
 */

app.use(external_koa_static_default()(external_path_default.a.resolve('./build'), {
  index: false // "/" 경로에서 index.html 을 보여주지 않도록 설정

}));
/**
 * Koa Router
 * router.routes(): 요청과 일치하는 라우트를 반환해주는 미들웨어입니다.
 * router.allowedMethods(): OPTIONS 요청에 응답(Allow 헤더)과 405 Method Not Allowed, 501 Not Implemented를 반환해주는 미들웨어입니다.
 */

app.use(router.routes()).use(router.allowedMethods());
/**
 * Koa Middleware for SSR
 */

app.use(server_ssrMiddleware); // Start server with port 4000.

app.listen(4000, function () {
  console.log('SSR server is listening to http://localhost:4000');
});

/***/ })
/******/ ]);