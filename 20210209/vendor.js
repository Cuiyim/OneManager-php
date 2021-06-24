(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-qq/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


var oName = 'getUserInfo';
var nName = 'getUserProfile';

var getUserProfile = {
  name: wx.canIUse(nName) ? nName : oName };


var protocols = {
  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getUserProfile: getUserProfile };

var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'getBeacons',
// 'onBeaconUpdate',
// 'onBeaconServiceChange',
// 'addPhoneContact',
// 'getHCEState',
// 'startHCE',
// 'stopHCE',
// 'onHCEMessage',
// 'sendHCEMessage',
// 'startWifi',
// 'stopWifi',
// 'connectWifi',
// 'getWifiList',
// 'onGetWifiList',
// 'setWifiList',
// 'onWifiConnected',
// 'getConnectedWifi',
// 'setTopBarText',
// 'getPhoneNumber',
// 'chooseAddress',
// 'addCard',
// 'openCard',
// 'getWeRunData',
// 'launchApp',
// 'chooseInvoiceTitle',
// 'checkIsSupportSoterAuthentication',
// 'startSoterAuthentication',
// 'checkIsSoterEnrolledInDevice',
// 'vibrate',
// 'loadFontFace',
// 'getExtConfig',
// 'getExtConfigSync'
];
var canIUses = [
'scanCode',
'startAccelerometer',
'stopAccelerometer',
'onAccelerometerChange',
'startCompass',
'onCompassChange',
'setScreenBrightness',
'getScreenBrightness',
'setKeepScreenOn',
'onUserCaptureScreen',
'vibrateLong',
'vibrateShort',
'createWorker',
'connectSocket',
'onSocketOpen',
'onSocketError',
'sendSocketMessage',
'onSocketMessage',
'closeSocket',
'onSocketClose',
'openDocument',
'updateShareMenu',
'getShareInfo',
'createLivePlayerContext',
'createLivePusherContext',
'setNavigationBarColor',
'onMemoryWarning',
'onNetworkStatusChange',
'reportMonitor',
'getLogManager',
'reportAnalytics'];


var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform 'QQ\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform 'QQ\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['qq'],
  share: ['qq'],
  payment: ['qqpay'],
  push: ['qq'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _wx$getSystemInfoSync2 =



  wx.getSystemInfoSync(),windowWidth = _wx$getSystemInfoSync2.windowWidth,windowHeight = _wx$getSystemInfoSync2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMediaQueryObserver: createMediaQueryObserver });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"即刻学术","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueId = this.$options.propsData.vueId;
    var object = center[vueId] = center[vueId] || {};
    object[name] = value;
    if (parents[vueId]) {
      parents[vueId].$forceUpdate();
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-qq";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function parseApp$1(vm) {
  return parseApp(vm);
}

function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parseComponent$1(vueComponentOptions) {
  return parseComponent(vueComponentOptions);
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent$1(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parsePage$1(vuePageOptions) {
  return parsePage(vuePageOptions);
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage$1(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp$1(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp$1(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-qq" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 12:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 136:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/wemark/parser.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Remarkable = __webpack_require__(/*! ./remarkable.js */ 137),parser = new Remarkable({ html: !0 }),prism = __webpack_require__(/*! ./prism.js */ 138);
function parse(w, q) {q || (q = {});var l = parser.parse(w, {}),v = [],f = [],m = 0,r = [0, 0],t,p = function p(a) {var d = [],e,b = {};if ("htmlblock" === a.type) for (var n = /<video.*?src\s*=\s*['"]*([^\s^'^"]+).*?(poster\s*=\s*['"]*([^\s^'^"]+).*?)?(?:\/\s*>|<\/video>)/g, g = a.content.replace(/\n/g, ""); a = n.exec(g);) {if (a[1]) {var h = { type: "video", src: a[1] };a[3] && (h.poster = a[3]);d.push(h);}} else a.children && a.children.forEach(function (c, k) {-1 < ["text", "code"].indexOf(c.type) ? (d.push({ type: e || c.type, content: c.content, data: b }), e = "", b =
      {}) : "del_open" === c.type ? e = "deleted" : "softbreak" !== c.type && ("hardbreak" === c.type ? d.push({ type: "text", content: "\n" }) : "strong_open" === c.type ? e = "em" === e ? "strong_em" : "strong" : "em_open" === c.type ? e = "strong" === e ? "strong_em" : "em" : "link_open" === c.type ? q.link && (e = "link", b = { href: c.href }) : "image" === c.type && d.push({ type: c.type, src: c.src }));});return d;},x = function x(a, d, e) {if ("htmlblock" === a.type) return p(a);if ("heading_open" === a.type) return { type: "h" + a.hLevel, content: p(l[d + 1]) };if ("paragraph_open" === a.type) {a = "";f.length && (
      a = f.join("_") + "_");var b = p(l[d + 1]);"li" === f[f.length - 1] && "ol" === f[f.length - 2] && (d = "\u3000", e && (d = r[m - 1] + ". "), b.unshift({ type: "text", content: d }));return { type: a + "p", content: b };}if ("fence" === a.type || "code" === a.type) {b = a.content;e = !1;q.highlight && a.params && prism.languages[a.params] && (b = prism.tokenize(b, prism.languages[a.params]), e = !0);var n = function n(g, h, c) {h = void 0 === h ? [] : h;c = void 0 === c ? "" : c;Array.isArray(g) ? g.forEach(function (k) {if ("object" === typeof k) Array.isArray(k.content) ? n(k.content, h, k.type) :
          n(k, h, k.type);else {var u = {};u.type = c || "text";u.content = k;h.push(u);}}) : h.push(g);return h;};e && (a = b, b = [], a.forEach(function (g) {Array.isArray(g.content) ? b = b.concat(n(g.content, [], "")) : b.push(g);}));return { type: "code", highlight: e, content: b };}if ("bullet_list_open" === a.type) f.push("ul"), m++;else if ("ordered_list_open" === a.type) f.push("ol"), m++;else if ("list_item_open" === a.type) f.push("li"), "ol" === f[f.length - 2] && r[m - 1]++;else if ("list_item_close" === a.type) f.pop();else if ("bullet_list_close" === a.type) f.pop(),
    m--;else if ("ordered_list_close" === a.type) f.pop(), m--, r[m] = 0;else if ("blockquote_open" === a.type) f.push("blockquote");else if ("blockquote_close" === a.type) f.pop();else {if ("tr_open" === a.type) return t = { type: "table_tr", content: [] };"th_open" === a.type ? t.content.push({ type: "table_th", content: p(l[d + 1]).map(function (g) {return g.content;}).join("") }) : "td_open" === a.type && t.content.push({ type: "table_td", content: p(l[d + 1]).map(function (g) {return g.content;}).join("") });}};l.forEach(function (a, d) {var e = !1;"paragraph_open" ===
    a.type && l[d - 1] && "list_item_open" === l[d - 1].type && (e = !0);if (a = x(a, d, e)) Array.isArray(a) || (a = [a]), a.forEach(function (b) {Array.isArray(b.content) ? b.isArray = !0 : b.isArray = !1;v.push(b);});});return v;}module.exports = { parse: parse };

/***/ }),

/***/ 137:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/wemark/remarkable.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*! remarkable 1.6.0 https://github.com/jonschlinkert/remarkable @license MIT */
!function (e) {
  if (true) module.exports = e();else { var t; }
}(function () {
  var e;
  return function t(e, r, n) {
    function s(i, l) {
      if (!r[i]) {
        if (!e[i]) {
          var a = "function" == typeof require && require;
          if (!l && a) return require(i, !0);
          if (o) return o(i, !0);
          var c = new Error("Cannot find module '" + i + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }

        var u = r[i] = {
          exports: {} };

        e[i][0].call(u.exports, function (t) {
          var r = e[i][1][t];
          return s(r ? r : t);
        }, u, u.exports, t, e, r, n);
      }

      return r[i].exports;
    }

    for (var o = "function" == typeof require && require, i = 0; i < n.length; i++) {s(n[i]);}

    return s;
  }({
    1: [function (e, t, r) {
      "use strict";

      t.exports = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        AMP: "&",
        amp: "&",
        And: "⩓",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        ap: "≈",
        apacir: "⩯",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        Barwed: "⌆",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        Because: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxDL: "╗",
        boxDl: "╖",
        boxdL: "╕",
        boxdl: "┐",
        boxDR: "╔",
        boxDr: "╓",
        boxdR: "╒",
        boxdr: "┌",
        boxH: "═",
        boxh: "─",
        boxHD: "╦",
        boxHd: "╤",
        boxhD: "╥",
        boxhd: "┬",
        boxHU: "╩",
        boxHu: "╧",
        boxhU: "╨",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxUL: "╝",
        boxUl: "╜",
        boxuL: "╛",
        boxul: "┘",
        boxUR: "╚",
        boxUr: "╙",
        boxuR: "╘",
        boxur: "└",
        boxV: "║",
        boxv: "│",
        boxVH: "╬",
        boxVh: "╫",
        boxvH: "╪",
        boxvh: "┼",
        boxVL: "╣",
        boxVl: "╢",
        boxvL: "╡",
        boxvl: "┤",
        boxVR: "╠",
        boxVr: "╟",
        boxvR: "╞",
        boxvr: "├",
        bprime: "‵",
        Breve: "˘",
        breve: "˘",
        brvbar: "¦",
        Bscr: "ℬ",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        Cap: "⋒",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        CenterDot: "·",
        centerdot: "·",
        Cfr: "ℭ",
        cfr: "𝔠",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        cir: "○",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        Colon: "∷",
        colon: ":",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        Conint: "∯",
        conint: "∮",
        ContourIntegral: "∮",
        Copf: "ℂ",
        copf: "𝕔",
        coprod: "∐",
        Coproduct: "∐",
        COPY: "©",
        copy: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        Cross: "⨯",
        cross: "✗",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        Cup: "⋓",
        cup: "∪",
        cupbrcap: "⩈",
        CupCap: "≍",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        Dagger: "‡",
        dagger: "†",
        daleth: "ℸ",
        Darr: "↡",
        dArr: "⇓",
        darr: "↓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        DD: "ⅅ",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        Diamond: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        Downarrow: "⇓",
        downarrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        ecir: "≖",
        Ecirc: "Ê",
        ecirc: "ê",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        eDot: "≑",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp: " ",
        emsp13: " ",
        emsp14: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        Escr: "ℰ",
        escr: "ℯ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        ExponentialE: "ⅇ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        ForAll: "∀",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        Fscr: "ℱ",
        fscr: "𝒻",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        gE: "≧",
        ge: "≥",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        Gg: "⋙",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gl: "≷",
        gla: "⪥",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gnE: "≩",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        GT: ">",
        Gt: "≫",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        hArr: "⇔",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        Hfr: "ℌ",
        hfr: "𝔥",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        Hopf: "ℍ",
        hopf: "𝕙",
        horbar: "―",
        HorizontalLine: "─",
        Hscr: "ℋ",
        hscr: "𝒽",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        Ifr: "ℑ",
        ifr: "𝔦",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Im: "ℑ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        "in": "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        Int: "∬",
        "int": "∫",
        intcal: "⊺",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        Iscr: "ℐ",
        iscr: "𝒾",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        Lang: "⟪",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        Larr: "↞",
        lArr: "⇐",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        lAtail: "⤛",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lBarr: "⤎",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        lE: "≦",
        le: "≤",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        Leftarrow: "⇐",
        leftarrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        Ll: "⋘",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lnE: "≨",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftarrow: "⟵",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        Lscr: "ℒ",
        lscr: "𝓁",
        Lsh: "↰",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        LT: "<",
        Lt: "≪",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        Mscr: "ℳ",
        mscr: "𝓂",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        nearhk: "⤤",
        neArr: "⇗",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlArr: "⇍",
        nlarr: "↚",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nLeftarrow: "⇍",
        nleftarrow: "↚",
        nLeftrightarrow: "⇎",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        nopf: "𝕟",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nRightarrow: "⇏",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nVDash: "⊯",
        nVdash: "⊮",
        nvDash: "⊭",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwArr: "⇖",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "⊚",
        Ocirc: "Ô",
        ocirc: "ô",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        Or: "⩔",
        or: "∨",
        orarr: "↻",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        Otimes: "⨷",
        otimes: "⊗",
        otimesas: "⨶",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        par: "∥",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        Popf: "ℙ",
        popf: "𝕡",
        pound: "£",
        Pr: "⪻",
        pr: "≺",
        prap: "⪷",
        prcue: "≼",
        prE: "⪳",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        Prime: "″",
        prime: "′",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportion: "∷",
        Proportional: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        Qopf: "ℚ",
        qopf: "𝕢",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        QUOT: '"',
        quot: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        Rang: "⟫",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        Rarr: "↠",
        rArr: "⇒",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        rAtail: "⤜",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        RBarr: "⤐",
        rBarr: "⤏",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        Re: "ℜ",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        REG: "®",
        reg: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        Rfr: "ℜ",
        rfr: "𝔯",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        Rightarrow: "⇒",
        rightarrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        Ropf: "ℝ",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        Rscr: "ℛ",
        rscr: "𝓇",
        Rsh: "↱",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        Sc: "⪼",
        sc: "≻",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        sccue: "≽",
        scE: "⪴",
        sce: "⪰",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        searhk: "⤥",
        seArr: "⇘",
        searr: "↘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        Square: "□",
        square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        Sub: "⋐",
        sub: "⊂",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        Subset: "⋐",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        Sum: "∑",
        sum: "∑",
        sung: "♪",
        Sup: "⋑",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        Supset: "⋑",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swArr: "⇙",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: " ",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        Therefore: "∴",
        therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        thinsp: " ",
        ThinSpace: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        Tilde: "∼",
        tilde: "˜",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        TRADE: "™",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        Uarr: "↟",
        uArr: "⇑",
        uarr: "↑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrow: "↑",
        Uparrow: "⇑",
        uparrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        updownarrow: "↕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        upsi: "υ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        vArr: "⇕",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        Vbar: "⫫",
        vBar: "⫨",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        VDash: "⊫",
        Vdash: "⊩",
        vDash: "⊨",
        vdash: "⊢",
        Vdashl: "⫦",
        Vee: "⋁",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        Verbar: "‖",
        verbar: "|",
        Vert: "‖",
        vert: "|",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        Wedge: "⋀",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        Xi: "Ξ",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        Yuml: "Ÿ",
        yuml: "ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        Zfr: "ℨ",
        zfr: "𝔷",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        Zopf: "ℤ",
        zopf: "𝕫",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌" };

    }, {}],
    2: [function (e, t, r) {
      "use strict";

      var n = {};
      ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function (e) {
        n[e] = !0;
      }), t.exports = n;
    }, {}],
    3: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        return e = e.source, t = t || "", function r(n, s) {
          return n ? (s = s.source || s, e = e.replace(n, s), r) : new RegExp(e, t);
        };
      }

      var s = /[a-zA-Z_:][a-zA-Z0-9:._-]*/,
      o = /[^"'=<>`\x00-\x20]+/,
      i = /'[^']*'/,
      l = /"[^"]*"/,
      a = n(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", o)("single_quoted", i)("double_quoted", l)(),
      c = n(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", s)("attr_value", a)(),
      u = n(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", c)(),
      p = /<\/[A-Za-z][A-Za-z0-9]*\s*>/,
      h = /<!--([^-]+|[-][^-]+)*-->/,
      f = /<[?].*?[?]>/,
      d = /<![A-Z]+\s+[^>]*>/,
      g = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,
      m = n(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", u)("close_tag", p)("comment", h)("processing", f)("declaration", d)("cdata", g)();
      t.exports.HTML_TAG_RE = m;
    }, {}],
    4: [function (e, t, r) {
      "use strict";

      t.exports = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"];
    }, {}],
    5: [function (e, t, r) {
      "use strict";

      function n(e) {
        return Object.prototype.toString.call(e);
      }

      function s(e) {
        return "[object String]" === n(e);
      }

      function o(e, t) {
        return e ? d.call(e, t) : !1;
      }

      function i(e) {
        var t = [].slice.call(arguments, 1);
        return t.forEach(function (t) {
          if (t) {
            if ("object" != typeof t) throw new TypeError(t + "must be object");
            Object.keys(t).forEach(function (r) {
              e[r] = t[r];
            });
          }
        }), e;
      }

      function l(e) {
        return e.indexOf("\\") < 0 ? e : e.replace(g, "$1");
      }

      function a(e) {
        return e >= 55296 && 57343 >= e ? !1 : e >= 64976 && 65007 >= e ? !1 : 65535 === (65535 & e) || 65534 === (65535 & e) ? !1 : e >= 0 && 8 >= e ? !1 : 11 === e ? !1 : e >= 14 && 31 >= e ? !1 : e >= 127 && 159 >= e ? !1 : e > 1114111 ? !1 : !0;
      }

      function c(e) {
        if (e > 65535) {
          e -= 65536;
          var t = 55296 + (e >> 10),
          r = 56320 + (1023 & e);
          return String.fromCharCode(t, r);
        }

        return String.fromCharCode(e);
      }

      function u(e, t) {
        var r = 0;
        return o(v, t) ? v[t] : 35 === t.charCodeAt(0) && b.test(t) && (r = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), a(r)) ? c(r) : e;
      }

      function p(e) {
        return e.indexOf("&") < 0 ? e : e.replace(m, u);
      }

      function h(e) {
        return y[e];
      }

      function f(e) {
        return k.test(e) ? e.replace(_, h) : e;
      }

      var d = Object.prototype.hasOwnProperty,
      g = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,
      m = /&([a-z#][a-z0-9]{1,31});/gi,
      b = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
      v = e("./entities"),
      k = /[&<>"]/,
      _ = /[&<>"]/g,
      y = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;" };

      r.assign = i, r.isString = s, r.has = o, r.unescapeMd = l, r.isValidEntityCode = a, r.fromCodePoint = c, r.replaceEntities = p, r.escapeHtml = f;
    }, {
      "./entities": 1 }],

    6: [function (e, t, r) {
      "use strict";

      t.exports = {
        options: {
          html: !0,
          xhtmlOut: !0,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          linkTarget: "",
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20 },

        components: {
          core: {
            rules: ["block", "inline", "references", "abbr2"] },

          block: {
            rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"] },

          inline: {
            rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"] } } };



    }, {}],
    7: [function (e, t, r) {
      "use strict";

      t.exports = {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          linkTarget: "",
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20 },

        components: {
          core: {
            rules: ["block", "inline", "references", "replacements", "linkify", "smartquotes", "references", "abbr2", "footnote_tail"] },

          block: {
            rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"] },

          inline: {
            rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"] } } };



    }, {}],
    8: [function (e, t, r) {
      "use strict";

      t.exports = {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          linkTarget: "",
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20 },

        components: {
          core: {},
          block: {},
          inline: {} } };


    }, {}],
    9: [function (e, t, r) {
      "use strict";

      var n = e("../common/utils").replaceEntities;

      t.exports = function (e) {
        var t = n(e);

        try {
          t = decodeURI(t);
        } catch (r) {}

        return encodeURI(t);
      };
    }, {
      "../common/utils": 5 }],

    10: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        return e.trim().replace(/\s+/g, " ").toUpperCase();
      };
    }, {}],
    11: [function (e, t, r) {
      "use strict";

      var n = e("./normalize_link"),
      s = e("../common/utils").unescapeMd;

      t.exports = function (e, t) {
        var r,
        o,
        i,
        l = t,
        a = e.posMax;

        if (60 === e.src.charCodeAt(t)) {
          for (t++; a > t;) {
            if (r = e.src.charCodeAt(t), 10 === r) return !1;
            if (62 === r) return i = n(s(e.src.slice(l + 1, t))), e.parser.validateLink(i) ? (e.pos = t + 1, e.linkContent = i, !0) : !1;
            92 === r && a > t + 1 ? t += 2 : t++;
          }

          return !1;
        }

        for (o = 0; a > t && (r = e.src.charCodeAt(t), 32 !== r) && !(r > 8 && 14 > r);) {if (92 === r && a > t + 1) t += 2;else {
            if (40 === r && (o++, o > 1)) break;
            if (41 === r && (o--, 0 > o)) break;
            t++;
          }}

        return l === t ? !1 : (i = s(e.src.slice(l, t)), e.parser.validateLink(i) ? (e.linkContent = i, e.pos = t, !0) : !1);
      };
    }, {
      "../common/utils": 5,
      "./normalize_link": 9 }],

    12: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o = -1,
        i = e.posMax,
        l = e.pos,
        a = e.isInLabel;
        if (e.isInLabel) return -1;
        if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;

        for (e.pos = t + 1, e.isInLabel = !0, r = 1; e.pos < i;) {
          if (s = e.src.charCodeAt(e.pos), 91 === s) r++;else if (93 === s && (r--, 0 === r)) {
            n = !0;
            break;
          }
          e.parser.skipToken(e);
        }

        return n ? (o = e.pos, e.labelUnmatchedScopes = 0) : e.labelUnmatchedScopes = r - 1, e.pos = l, e.isInLabel = a, o;
      };
    }, {}],
    13: [function (e, t, r) {
      "use strict";

      var n = e("../common/utils").unescapeMd;

      t.exports = function (e, t) {
        var r,
        s = t,
        o = e.posMax,
        i = e.src.charCodeAt(t);
        if (34 !== i && 39 !== i && 40 !== i) return !1;

        for (t++, 40 === i && (i = 41); o > t;) {
          if (r = e.src.charCodeAt(t), r === i) return e.pos = t + 1, e.linkContent = n(e.src.slice(s + 1, t)), !0;
          92 === r && o > t + 1 ? t += 2 : t++;
        }

        return !1;
      };
    }, {
      "../common/utils": 5 }],

    14: [function (e, t, r) {
      "use strict";

      function n(e, t, r) {
        this.src = t, this.env = r, this.options = e.options, this.tokens = [], this.inlineMode = !1, this.inline = e.inline, this.block = e.block, this.renderer = e.renderer, this.typographer = e.typographer;
      }

      function s(e, t) {
        "string" != typeof e && (t = e, e = "default"), this.inline = new c(), this.block = new a(), this.core = new l(), this.renderer = new i(), this.ruler = new u(), this.options = {}, this.configure(p[e]), this.set(t || {});
      }

      var o = e("./common/utils").assign,
      i = e("./renderer"),
      l = e("./parser_core"),
      a = e("./parser_block"),
      c = e("./parser_inline"),
      u = e("./ruler"),
      p = {
        "default": e("./configs/default"),
        full: e("./configs/full"),
        commonmark: e("./configs/commonmark") };

      s.prototype.set = function (e) {
        o(this.options, e);
      }, s.prototype.configure = function (e) {
        var t = this;
        if (!e) throw new Error("Wrong `remarkable` preset, check name/content");
        e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function (r) {
          e.components[r].rules && t[r].ruler.enable(e.components[r].rules, !0);
        });
      }, s.prototype.use = function (e, t) {
        return e(this, t), this;
      }, s.prototype.parse = function (e, t) {
        var r = new n(this, e, t);
        return this.core.process(r), r.tokens;
      }, s.prototype.render = function (e, t) {
        return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
      }, s.prototype.parseInline = function (e, t) {
        var r = new n(this, e, t);
        return r.inlineMode = !0, this.core.process(r), r.tokens;
      }, s.prototype.renderInline = function (e, t) {
        return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
      }, t.exports = s, t.exports.utils = e("./common/utils");
    }, {
      "./common/utils": 5,
      "./configs/commonmark": 6,
      "./configs/default": 7,
      "./configs/full": 8,
      "./parser_block": 15,
      "./parser_core": 16,
      "./parser_inline": 17,
      "./renderer": 18,
      "./ruler": 19 }],

    15: [function (e, t, r) {
      "use strict";

      function n() {
        this.ruler = new s();

        for (var e = 0; e < i.length; e++) {this.ruler.push(i[e][0], i[e][1], {
            alt: (i[e][2] || []).slice() });}

      }

      var s = e("./ruler"),
      o = e("./rules_block/state_block"),
      i = [["code", e("./rules_block/code")], ["fences", e("./rules_block/fences"), ["paragraph", "blockquote", "list"]], ["blockquote", e("./rules_block/blockquote"), ["paragraph", "blockquote", "list"]], ["hr", e("./rules_block/hr"), ["paragraph", "blockquote", "list"]], ["list", e("./rules_block/list"), ["paragraph", "blockquote"]], ["footnote", e("./rules_block/footnote"), ["paragraph"]], ["heading", e("./rules_block/heading"), ["paragraph", "blockquote"]], ["lheading", e("./rules_block/lheading")], ["htmlblock", e("./rules_block/htmlblock"), ["paragraph", "blockquote"]], ["table", e("./rules_block/table"), ["paragraph"]], ["deflist", e("./rules_block/deflist"), ["paragraph"]], ["paragraph", e("./rules_block/paragraph")]];

      n.prototype.tokenize = function (e, t, r) {
        for (var n, s, o = this.ruler.getRules(""), i = o.length, l = t, a = !1; r > l && (e.line = l = e.skipEmptyLines(l), !(l >= r)) && !(e.tShift[l] < e.blkIndent);) {
          for (s = 0; i > s && !(n = o[s](e, l, r, !1)); s++) {;}

          if (e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), l = e.line, r > l && e.isEmpty(l)) {
            if (a = !0, l++, r > l && "list" === e.parentType && e.isEmpty(l)) break;
            e.line = l;
          }
        }
      };

      var l = /[\n\t]/g,
      a = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
      c = /\u00a0/g;
      n.prototype.parse = function (e, t, r, n) {
        var s,
        i = 0,
        u = 0;
        return e ? (e = e.replace(c, " "), e = e.replace(a, "\n"), e.indexOf("  ") >= 0 && (e = e.replace(l, function (t, r) {
          var n;
          return 10 === e.charCodeAt(r) ? (i = r + 1, u = 0, t) : (n = "    ".slice((r - i - u) % 4), u = r - i + 1, n);
        })), s = new o(e, this, t, r, n), void this.tokenize(s, s.line, s.lineMax)) : [];
      }, t.exports = n;
    }, {
      "./ruler": 19,
      "./rules_block/blockquote": 21,
      "./rules_block/code": 22,
      "./rules_block/deflist": 23,
      "./rules_block/fences": 24,
      "./rules_block/footnote": 25,
      "./rules_block/heading": 26,
      "./rules_block/hr": 27,
      "./rules_block/htmlblock": 28,
      "./rules_block/lheading": 29,
      "./rules_block/list": 30,
      "./rules_block/paragraph": 31,
      "./rules_block/state_block": 32,
      "./rules_block/table": 33 }],

    16: [function (e, t, r) {
      "use strict";

      function n() {
        this.options = {}, this.ruler = new s();

        for (var e = 0; e < o.length; e++) {this.ruler.push(o[e][0], o[e][1]);}
      }

      var s = e("./ruler"),
      o = [["block", e("./rules_core/block")], ["abbr", e("./rules_core/abbr")], ["references", e("./rules_core/references")], ["inline", e("./rules_core/inline")], ["footnote_tail", e("./rules_core/footnote_tail")], ["abbr2", e("./rules_core/abbr2")], ["replacements", e("./rules_core/replacements")], ["smartquotes", e("./rules_core/smartquotes")], ["linkify", e("./rules_core/linkify")]];
      n.prototype.process = function (e) {
        var t, r, n;

        for (n = this.ruler.getRules(""), t = 0, r = n.length; r > t; t++) {n[t](e);}
      }, t.exports = n;
    }, {
      "./ruler": 19,
      "./rules_core/abbr": 34,
      "./rules_core/abbr2": 35,
      "./rules_core/block": 36,
      "./rules_core/footnote_tail": 37,
      "./rules_core/inline": 38,
      "./rules_core/linkify": 39,
      "./rules_core/references": 40,
      "./rules_core/replacements": 41,
      "./rules_core/smartquotes": 42 }],

    17: [function (e, t, r) {
      "use strict";

      function n() {
        this.ruler = new o();

        for (var e = 0; e < a.length; e++) {this.ruler.push(a[e][0], a[e][1]);}

        this.validateLink = s;
      }

      function s(e) {
        var t = ["vbscript", "javascript", "file"],
        r = e.trim().toLowerCase();
        return r = l.replaceEntities(r), -1 !== r.indexOf(":") && -1 !== t.indexOf(r.split(":")[0]) ? !1 : !0;
      }

      var o = e("./ruler"),
      i = e("./rules_inline/state_inline"),
      l = e("./common/utils"),
      a = [["text", e("./rules_inline/text")], ["newline", e("./rules_inline/newline")], ["escape", e("./rules_inline/escape")], ["backticks", e("./rules_inline/backticks")], ["del", e("./rules_inline/del")], ["ins", e("./rules_inline/ins")], ["mark", e("./rules_inline/mark")], ["emphasis", e("./rules_inline/emphasis")], ["sub", e("./rules_inline/sub")], ["sup", e("./rules_inline/sup")], ["links", e("./rules_inline/links")], ["footnote_inline", e("./rules_inline/footnote_inline")], ["footnote_ref", e("./rules_inline/footnote_ref")], ["autolink", e("./rules_inline/autolink")], ["htmltag", e("./rules_inline/htmltag")], ["entity", e("./rules_inline/entity")]];
      n.prototype.skipToken = function (e) {
        var t,
        r,
        n = this.ruler.getRules(""),
        s = n.length,
        o = e.pos;
        if ((r = e.cacheGet(o)) > 0) return void (e.pos = r);

        for (t = 0; s > t; t++) {if (n[t](e, !0)) return void e.cacheSet(o, e.pos);}

        e.pos++, e.cacheSet(o, e.pos);
      }, n.prototype.tokenize = function (e) {
        for (var t, r, n = this.ruler.getRules(""), s = n.length, o = e.posMax; e.pos < o;) {
          for (r = 0; s > r && !(t = n[r](e, !1)); r++) {;}

          if (t) {
            if (e.pos >= o) break;
          } else e.pending += e.src[e.pos++];
        }

        e.pending && e.pushPending();
      }, n.prototype.parse = function (e, t, r, n) {
        var s = new i(e, this, t, r, n);
        this.tokenize(s);
      }, t.exports = n;
    }, {
      "./common/utils": 5,
      "./ruler": 19,
      "./rules_inline/autolink": 43,
      "./rules_inline/backticks": 44,
      "./rules_inline/del": 45,
      "./rules_inline/emphasis": 46,
      "./rules_inline/entity": 47,
      "./rules_inline/escape": 48,
      "./rules_inline/footnote_inline": 49,
      "./rules_inline/footnote_ref": 50,
      "./rules_inline/htmltag": 51,
      "./rules_inline/ins": 52,
      "./rules_inline/links": 53,
      "./rules_inline/mark": 54,
      "./rules_inline/newline": 55,
      "./rules_inline/state_inline": 56,
      "./rules_inline/sub": 57,
      "./rules_inline/sup": 58,
      "./rules_inline/text": 59 }],

    18: [function (e, t, r) {
      "use strict";

      function n() {
        this.rules = s.assign({}, o), this.getBreak = o.getBreak;
      }

      var s = e("./common/utils"),
      o = e("./rules");
      t.exports = n, n.prototype.renderInline = function (e, t, r) {
        for (var n = this.rules, s = e.length, o = 0, i = ""; s--;) {i += n[e[o].type](e, o++, t, r, this);}

        return i;
      }, n.prototype.render = function (e, t, r) {
        for (var n = this.rules, s = e.length, o = -1, i = ""; ++o < s;) {i += "inline" === e[o].type ? this.renderInline(e[o].children, t, r) : n[e[o].type](e, o, t, r, this);}

        return i;
      };
    }, {
      "./common/utils": 5,
      "./rules": 20 }],

    19: [function (e, t, r) {
      "use strict";

      function n() {
        this.__rules__ = [], this.__cache__ = null;
      }

      n.prototype.__find__ = function (e) {
        for (var t = this.__rules__.length, r = -1; t--;) {if (this.__rules__[++r].name === e) return r;}

        return -1;
      }, n.prototype.__compile__ = function () {
        var e = this,
        t = [""];
        e.__rules__.forEach(function (e) {
          e.enabled && e.alt.forEach(function (e) {
            t.indexOf(e) < 0 && t.push(e);
          });
        }), e.__cache__ = {}, t.forEach(function (t) {
          e.__cache__[t] = [], e.__rules__.forEach(function (r) {
            r.enabled && (t && r.alt.indexOf(t) < 0 || e.__cache__[t].push(r.fn));
          });
        });
      }, n.prototype.at = function (e, t, r) {
        var n = this.__find__(e),
        s = r || {};

        if (-1 === n) throw new Error("Parser rule not found: " + e);
        this.__rules__[n].fn = t, this.__rules__[n].alt = s.alt || [], this.__cache__ = null;
      }, n.prototype.before = function (e, t, r, n) {
        var s = this.__find__(e),
        o = n || {};

        if (-1 === s) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(s, 0, {
          name: t,
          enabled: !0,
          fn: r,
          alt: o.alt || [] }),
        this.__cache__ = null;
      }, n.prototype.after = function (e, t, r, n) {
        var s = this.__find__(e),
        o = n || {};

        if (-1 === s) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(s + 1, 0, {
          name: t,
          enabled: !0,
          fn: r,
          alt: o.alt || [] }),
        this.__cache__ = null;
      }, n.prototype.push = function (e, t, r) {
        var n = r || {};
        this.__rules__.push({
          name: e,
          enabled: !0,
          fn: t,
          alt: n.alt || [] }),
        this.__cache__ = null;
      }, n.prototype.enable = function (e, t) {
        e = Array.isArray(e) ? e : [e], t && this.__rules__.forEach(function (e) {
          e.enabled = !1;
        }), e.forEach(function (e) {
          var t = this.__find__(e);

          if (0 > t) throw new Error("Rules manager: invalid rule name " + e);
          this.__rules__[t].enabled = !0;
        }, this), this.__cache__ = null;
      }, n.prototype.disable = function (e) {
        e = Array.isArray(e) ? e : [e], e.forEach(function (e) {
          var t = this.__find__(e);

          if (0 > t) throw new Error("Rules manager: invalid rule name " + e);
          this.__rules__[t].enabled = !1;
        }, this), this.__cache__ = null;
      }, n.prototype.getRules = function (e) {
        return null === this.__cache__ && this.__compile__(), this.__cache__[e];
      }, t.exports = n;
    }, {}],
    20: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        return ++t >= e.length - 2 ? t : "paragraph_open" === e[t].type && e[t].tight && "inline" === e[t + 1].type && 0 === e[t + 1].content.length && "paragraph_close" === e[t + 2].type && e[t + 2].tight ? n(e, t + 2) : t;
      }

      var s = e("./common/utils").has,
      o = e("./common/utils").unescapeMd,
      i = e("./common/utils").replaceEntities,
      l = e("./common/utils").escapeHtml,
      a = {};
      a.blockquote_open = function () {
        return "<blockquote>\n";
      }, a.blockquote_close = function (e, t) {
        return "</blockquote>" + c(e, t);
      }, a.code = function (e, t) {
        return e[t].block ? "<pre><code>" + l(e[t].content) + "</code></pre>" + c(e, t) : "<code>" + l(e[t].content) + "</code>";
      }, a.fence = function (e, t, r, n, a) {
        var u,
        p,
        h = e[t],
        f = "",
        d = r.langPrefix,
        g = "";

        if (h.params) {
          if (u = h.params.split(/\s+/g)[0], s(a.rules.fence_custom, u)) return a.rules.fence_custom[u](e, t, r, n, a);
          g = l(i(o(u))), f = ' class="' + d + g + '"';
        }

        return p = r.highlight ? r.highlight(h.content, g) || l(h.content) : l(h.content), "<pre><code" + f + ">" + p + "</code></pre>" + c(e, t);
      }, a.fence_custom = {}, a.heading_open = function (e, t) {
        return "<h" + e[t].hLevel + ">";
      }, a.heading_close = function (e, t) {
        return "</h" + e[t].hLevel + ">\n";
      }, a.hr = function (e, t, r) {
        return (r.xhtmlOut ? "<hr />" : "<hr>") + c(e, t);
      }, a.bullet_list_open = function () {
        return "<ul>\n";
      }, a.bullet_list_close = function (e, t) {
        return "</ul>" + c(e, t);
      }, a.list_item_open = function () {
        return "<li>";
      }, a.list_item_close = function () {
        return "</li>\n";
      }, a.ordered_list_open = function (e, t) {
        var r = e[t],
        n = r.order > 1 ? ' start="' + r.order + '"' : "";
        return "<ol" + n + ">\n";
      }, a.ordered_list_close = function (e, t) {
        return "</ol>" + c(e, t);
      }, a.paragraph_open = function (e, t) {
        return e[t].tight ? "" : "<p>";
      }, a.paragraph_close = function (e, t) {
        var r = !(e[t].tight && t && "inline" === e[t - 1].type && !e[t - 1].content);
        return (e[t].tight ? "" : "</p>") + (r ? c(e, t) : "");
      }, a.link_open = function (e, t, r) {
        var n = e[t].title ? ' title="' + l(i(e[t].title)) + '"' : "",
        s = r.linkTarget ? ' target="' + r.linkTarget + '"' : "";
        return '<a href="' + l(e[t].href) + '"' + n + s + ">";
      }, a.link_close = function () {
        return "</a>";
      }, a.image = function (e, t, r) {
        var n = ' src="' + l(e[t].src) + '"',
        s = e[t].title ? ' title="' + l(i(e[t].title)) + '"' : "",
        o = ' alt="' + (e[t].alt ? l(i(e[t].alt)) : "") + '"',
        a = r.xhtmlOut ? " /" : "";
        return "<img" + n + o + s + a + ">";
      }, a.table_open = function () {
        return "<table>\n";
      }, a.table_close = function () {
        return "</table>\n";
      }, a.thead_open = function () {
        return "<thead>\n";
      }, a.thead_close = function () {
        return "</thead>\n";
      }, a.tbody_open = function () {
        return "<tbody>\n";
      }, a.tbody_close = function () {
        return "</tbody>\n";
      }, a.tr_open = function () {
        return "<tr>";
      }, a.tr_close = function () {
        return "</tr>\n";
      }, a.th_open = function (e, t) {
        var r = e[t];
        return "<th" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">";
      }, a.th_close = function () {
        return "</th>";
      }, a.td_open = function (e, t) {
        var r = e[t];
        return "<td" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">";
      }, a.td_close = function () {
        return "</td>";
      }, a.strong_open = function () {
        return "<strong>";
      }, a.strong_close = function () {
        return "</strong>";
      }, a.em_open = function () {
        return "<em>";
      }, a.em_close = function () {
        return "</em>";
      }, a.del_open = function () {
        return "<del>";
      }, a.del_close = function () {
        return "</del>";
      }, a.ins_open = function () {
        return "<ins>";
      }, a.ins_close = function () {
        return "</ins>";
      }, a.mark_open = function () {
        return "<mark>";
      }, a.mark_close = function () {
        return "</mark>";
      }, a.sub = function (e, t) {
        return "<sub>" + l(e[t].content) + "</sub>";
      }, a.sup = function (e, t) {
        return "<sup>" + l(e[t].content) + "</sup>";
      }, a.hardbreak = function (e, t, r) {
        return r.xhtmlOut ? "<br />\n" : "<br>\n";
      }, a.softbreak = function (e, t, r) {
        return r.breaks ? r.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
      }, a.text = function (e, t) {
        return l(e[t].content);
      }, a.htmlblock = function (e, t) {
        return e[t].content;
      }, a.htmltag = function (e, t) {
        return e[t].content;
      }, a.abbr_open = function (e, t) {
        return '<abbr title="' + l(i(e[t].title)) + '">';
      }, a.abbr_close = function () {
        return "</abbr>";
      }, a.footnote_ref = function (e, t) {
        var r = Number(e[t].id + 1).toString(),
        n = "fnref" + r;
        return e[t].subId > 0 && (n += ":" + e[t].subId), '<sup class="footnote-ref"><a href="#fn' + r + '" id="' + n + '">[' + r + "]</a></sup>";
      }, a.footnote_block_open = function (e, t, r) {
        var n = r.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
        return n + '<section class="footnotes">\n<ol class="footnotes-list">\n';
      }, a.footnote_block_close = function () {
        return "</ol>\n</section>\n";
      }, a.footnote_open = function (e, t) {
        var r = Number(e[t].id + 1).toString();
        return '<li id="fn' + r + '"  class="footnote-item">';
      }, a.footnote_close = function () {
        return "</li>\n";
      }, a.footnote_anchor = function (e, t) {
        var r = Number(e[t].id + 1).toString(),
        n = "fnref" + r;
        return e[t].subId > 0 && (n += ":" + e[t].subId), ' <a href="#' + n + '" class="footnote-backref">↩</a>';
      }, a.dl_open = function () {
        return "<dl>\n";
      }, a.dt_open = function () {
        return "<dt>";
      }, a.dd_open = function () {
        return "<dd>";
      }, a.dl_close = function () {
        return "</dl>\n";
      }, a.dt_close = function () {
        return "</dt>\n";
      }, a.dd_close = function () {
        return "</dd>\n";
      };

      var c = a.getBreak = function (e, t) {
        return t = n(e, t), t < e.length && "list_item_close" === e[t].type ? "" : "\n";
      };

      t.exports = a;
    }, {
      "./common/utils": 5 }],

    21: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
        o,
        i,
        l,
        a,
        c,
        u,
        p,
        h,
        f,
        d,
        g = e.bMarks[t] + e.tShift[t],
        m = e.eMarks[t];
        if (g > m) return !1;
        if (62 !== e.src.charCodeAt(g++)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (n) return !0;

        for (32 === e.src.charCodeAt(g) && g++, a = e.blkIndent, e.blkIndent = 0, l = [e.bMarks[t]], e.bMarks[t] = g, g = m > g ? e.skipSpaces(g) : g, o = g >= m, i = [e.tShift[t]], e.tShift[t] = g - e.bMarks[t], p = e.parser.ruler.getRules("blockquote"), s = t + 1; r > s && (g = e.bMarks[s] + e.tShift[s], m = e.eMarks[s], !(g >= m)); s++) {if (62 !== e.src.charCodeAt(g++)) {
            if (o) break;

            for (d = !1, h = 0, f = p.length; f > h; h++) {if (p[h](e, s, r, !0)) {
                d = !0;
                break;
              }}

            if (d) break;
            l.push(e.bMarks[s]), i.push(e.tShift[s]), e.tShift[s] = -1337;
          } else 32 === e.src.charCodeAt(g) && g++, l.push(e.bMarks[s]), e.bMarks[s] = g, g = m > g ? e.skipSpaces(g) : g, o = g >= m, i.push(e.tShift[s]), e.tShift[s] = g - e.bMarks[s];}

        for (c = e.parentType, e.parentType = "blockquote", e.tokens.push({
          type: "blockquote_open",
          lines: u = [t, 0],
          level: e.level++ }),
        e.parser.tokenize(e, t, s), e.tokens.push({
          type: "blockquote_close",
          level: --e.level }),
        e.parentType = c, u[1] = e.line, h = 0; h < i.length; h++) {e.bMarks[h + t] = l[h], e.tShift[h + t] = i[h];}

        return e.blkIndent = a, !0;
      };
    }, {}],
    22: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r) {
        var n, s;
        if (e.tShift[t] - e.blkIndent < 4) return !1;

        for (s = n = t + 1; r > n;) {if (e.isEmpty(n)) n++;else {
            if (!(e.tShift[n] - e.blkIndent >= 4)) break;
            n++, s = n;
          }}

        return e.line = n, e.tokens.push({
          type: "code",
          content: e.getLines(t, s, 4 + e.blkIndent, !0),
          block: !0,
          lines: [t, e.line],
          level: e.level }),
        !0;
      };
    }, {}],
    23: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        var r,
        n,
        s = e.bMarks[t] + e.tShift[t],
        o = e.eMarks[t];
        return s >= o ? -1 : (n = e.src.charCodeAt(s++), 126 !== n && 58 !== n ? -1 : (r = e.skipSpaces(s), s === r ? -1 : r >= o ? -1 : r));
      }

      function s(e, t) {
        var r,
        n,
        s = e.level + 2;

        for (r = t + 2, n = e.tokens.length - 2; n > r; r++) {e.tokens[r].level === s && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0, e.tokens[r].tight = !0, r += 2);}
      }

      t.exports = function (e, t, r, o) {
        var i, l, a, c, u, p, h, f, d, g, m, b, v, k;
        if (o) return e.ddIndent < 0 ? !1 : n(e, t) >= 0;
        if (h = t + 1, e.isEmpty(h) && ++h > r) return !1;
        if (e.tShift[h] < e.blkIndent) return !1;
        if (i = n(e, h), 0 > i) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        p = e.tokens.length, e.tokens.push({
          type: "dl_open",
          lines: u = [t, 0],
          level: e.level++ }),
        a = t, l = h;

        e: for (;;) {
          for (k = !0, v = !1, e.tokens.push({
            type: "dt_open",
            lines: [a, a],
            level: e.level++ }),
          e.tokens.push({
            type: "inline",
            content: e.getLines(a, a + 1, e.blkIndent, !1).trim(),
            level: e.level + 1,
            lines: [a, a],
            children: [] }),
          e.tokens.push({
            type: "dt_close",
            level: --e.level });;)
          {
            if (e.tokens.push({
              type: "dd_open",
              lines: c = [h, 0],
              level: e.level++ }),
            b = e.tight, d = e.ddIndent, f = e.blkIndent, m = e.tShift[l], g = e.parentType, e.blkIndent = e.ddIndent = e.tShift[l] + 2, e.tShift[l] = i - e.bMarks[l], e.tight = !0, e.parentType = "deflist", e.parser.tokenize(e, l, r, !0), (!e.tight || v) && (k = !1), v = e.line - l > 1 && e.isEmpty(e.line - 1), e.tShift[l] = m, e.tight = b, e.parentType = g, e.blkIndent = f, e.ddIndent = d, e.tokens.push({
              type: "dd_close",
              level: --e.level }),
            c[1] = h = e.line, h >= r) break e;
            if (e.tShift[h] < e.blkIndent) break e;
            if (i = n(e, h), 0 > i) break;
            l = h;
          }

          if (h >= r) break;
          if (a = h, e.isEmpty(a)) break;
          if (e.tShift[a] < e.blkIndent) break;
          if (l = a + 1, l >= r) break;
          if (e.isEmpty(l) && l++, l >= r) break;
          if (e.tShift[l] < e.blkIndent) break;
          if (i = n(e, l), 0 > i) break;
        }

        return e.tokens.push({
          type: "dl_close",
          level: --e.level }),
        u[1] = h, e.line = h, k && s(e, p), !0;
      };
    }, {}],
    24: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
        o,
        i,
        l,
        a,
        c = !1,
        u = e.bMarks[t] + e.tShift[t],
        p = e.eMarks[t];
        if (u + 3 > p) return !1;
        if (s = e.src.charCodeAt(u), 126 !== s && 96 !== s) return !1;
        if (a = u, u = e.skipChars(u, s), o = u - a, 3 > o) return !1;
        if (i = e.src.slice(u, p).trim(), i.indexOf("`") >= 0) return !1;
        if (n) return !0;

        for (l = t; (l++, !(l >= r)) && (u = a = e.bMarks[l] + e.tShift[l], p = e.eMarks[l], !(p > u && e.tShift[l] < e.blkIndent));) {if (e.src.charCodeAt(u) === s && !(e.tShift[l] - e.blkIndent >= 4 || (u = e.skipChars(u, s), o > u - a || (u = e.skipSpaces(u), p > u)))) {
            c = !0;
            break;
          }}

        return o = e.tShift[t], e.line = l + (c ? 1 : 0), e.tokens.push({
          type: "fence",
          params: i,
          content: e.getLines(t + 1, l, o, !0),
          lines: [t, e.line],
          level: e.level }),
        !0;
      };
    }, {}],
    25: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
        o,
        i,
        l,
        a,
        c = e.bMarks[t] + e.tShift[t],
        u = e.eMarks[t];
        if (c + 4 > u) return !1;
        if (91 !== e.src.charCodeAt(c)) return !1;
        if (94 !== e.src.charCodeAt(c + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;

        for (l = c + 2; u > l; l++) {
          if (32 === e.src.charCodeAt(l)) return !1;
          if (93 === e.src.charCodeAt(l)) break;
        }

        return l === c + 2 ? !1 : l + 1 >= u || 58 !== e.src.charCodeAt(++l) ? !1 : n ? !0 : (l++, e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.refs || (e.env.footnotes.refs = {}), a = e.src.slice(c + 2, l - 2), e.env.footnotes.refs[":" + a] = -1, e.tokens.push({
          type: "footnote_reference_open",
          label: a,
          level: e.level++ }),
        s = e.bMarks[t], o = e.tShift[t], i = e.parentType, e.tShift[t] = e.skipSpaces(l) - l, e.bMarks[t] = l, e.blkIndent += 4, e.parentType = "footnote", e.tShift[t] < e.blkIndent && (e.tShift[t] += e.blkIndent, e.bMarks[t] -= e.blkIndent), e.parser.tokenize(e, t, r, !0), e.parentType = i, e.blkIndent -= 4, e.tShift[t] = o, e.bMarks[t] = s, e.tokens.push({
          type: "footnote_reference_close",
          level: --e.level }),
        !0);
      };
    }, {}],
    26: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
        o,
        i,
        l = e.bMarks[t] + e.tShift[t],
        a = e.eMarks[t];
        if (l >= a) return !1;
        if (s = e.src.charCodeAt(l), 35 !== s || l >= a) return !1;

        for (o = 1, s = e.src.charCodeAt(++l); 35 === s && a > l && 6 >= o;) {o++, s = e.src.charCodeAt(++l);}

        return o > 6 || a > l && 32 !== s ? !1 : n ? !0 : (a = e.skipCharsBack(a, 32, l), i = e.skipCharsBack(a, 35, l), i > l && 32 === e.src.charCodeAt(i - 1) && (a = i), e.line = t + 1, e.tokens.push({
          type: "heading_open",
          hLevel: o,
          lines: [t, e.line],
          level: e.level }),
        a > l && e.tokens.push({
          type: "inline",
          content: e.src.slice(l, a).trim(),
          level: e.level + 1,
          lines: [t, e.line],
          children: [] }),
        e.tokens.push({
          type: "heading_close",
          hLevel: o,
          level: e.level }),
        !0);
      };
    }, {}],
    27: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
        o,
        i,
        l = e.bMarks[t],
        a = e.eMarks[t];
        if (l += e.tShift[t], l > a) return !1;
        if (s = e.src.charCodeAt(l++), 42 !== s && 45 !== s && 95 !== s) return !1;

        for (o = 1; a > l;) {
          if (i = e.src.charCodeAt(l++), i !== s && 32 !== i) return !1;
          i === s && o++;
        }

        return 3 > o ? !1 : n ? !0 : (e.line = t + 1, e.tokens.push({
          type: "hr",
          lines: [t, e.line],
          level: e.level }),
        !0);
      };
    }, {}],
    28: [function (e, t, r) {
      "use strict";

      function n(e) {
        var t = 32 | e;
        return t >= 97 && 122 >= t;
      }

      var s = e("../common/html_blocks"),
      o = /^<([a-zA-Z]{1,15})[\s\/>]/,
      i = /^<\/([a-zA-Z]{1,15})[\s>]/;

      t.exports = function (e, t, r, l) {
        var a,
        c,
        u,
        p = e.bMarks[t],
        h = e.eMarks[t],
        f = e.tShift[t];
        if (p += f, !e.options.html) return !1;
        if (f > 3 || p + 2 >= h) return !1;
        if (60 !== e.src.charCodeAt(p)) return !1;

        if (a = e.src.charCodeAt(p + 1), 33 === a || 63 === a) {
          if (l) return !0;
        } else {
          if (47 !== a && !n(a)) return !1;

          if (47 === a) {
            if (c = e.src.slice(p, h).match(i), !c) return !1;
          } else if (c = e.src.slice(p, h).match(o), !c) return !1;

          if (s[c[1].toLowerCase()] !== !0) return !1;
          if (l) return !0;
        }

        for (u = t + 1; u < e.lineMax && !e.isEmpty(u);) {u++;}

        return e.line = u, e.tokens.push({
          type: "htmlblock",
          level: e.level,
          lines: [t, e.line],
          content: e.getLines(t, u, 0, !0) }),
        !0;
      };
    }, {
      "../common/html_blocks": 2 }],

    29: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r) {
        var n,
        s,
        o,
        i = t + 1;
        return i >= r ? !1 : e.tShift[i] < e.blkIndent ? !1 : e.tShift[i] - e.blkIndent > 3 ? !1 : (s = e.bMarks[i] + e.tShift[i], o = e.eMarks[i], s >= o ? !1 : (n = e.src.charCodeAt(s), 45 !== n && 61 !== n ? !1 : (s = e.skipChars(s, n), s = e.skipSpaces(s), o > s ? !1 : (s = e.bMarks[t] + e.tShift[t], e.line = i + 1, e.tokens.push({
          type: "heading_open",
          hLevel: 61 === n ? 1 : 2,
          lines: [t, e.line],
          level: e.level }),
        e.tokens.push({
          type: "inline",
          content: e.src.slice(s, e.eMarks[t]).trim(),
          level: e.level + 1,
          lines: [t, e.line - 1],
          children: [] }),
        e.tokens.push({
          type: "heading_close",
          hLevel: 61 === n ? 1 : 2,
          level: e.level }),
        !0))));
      };
    }, {}],
    30: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        var r, n, s;
        return n = e.bMarks[t] + e.tShift[t], s = e.eMarks[t], n >= s ? -1 : (r = e.src.charCodeAt(n++), 42 !== r && 45 !== r && 43 !== r ? -1 : s > n && 32 !== e.src.charCodeAt(n) ? -1 : n);
      }

      function s(e, t) {
        var r,
        n = e.bMarks[t] + e.tShift[t],
        s = e.eMarks[t];
        if (n + 1 >= s) return -1;
        if (r = e.src.charCodeAt(n++), 48 > r || r > 57) return -1;

        for (;;) {
          if (n >= s) return -1;

          if (r = e.src.charCodeAt(n++), !(r >= 48 && 57 >= r)) {
            if (41 === r || 46 === r) break;
            return -1;
          }
        }

        return s > n && 32 !== e.src.charCodeAt(n) ? -1 : n;
      }

      function o(e, t) {
        var r,
        n,
        s = e.level + 2;

        for (r = t + 2, n = e.tokens.length - 2; n > r; r++) {e.tokens[r].level === s && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0, e.tokens[r].tight = !0, r += 2);}
      }

      t.exports = function (e, t, r, i) {
        var l,
        a,
        c,
        u,
        p,
        h,
        f,
        d,
        g,
        m,
        b,
        v,
        k,
        _,
        y,
        x,
        w,
        A,
        q,
        C,
        S,
        E,
        M = !0;

        if ((d = s(e, t)) >= 0) k = !0;else {
          if (!((d = n(e, t)) >= 0)) return !1;
          k = !1;
        }
        if (e.level >= e.options.maxNesting) return !1;
        if (v = e.src.charCodeAt(d - 1), i) return !0;

        for (y = e.tokens.length, k ? (f = e.bMarks[t] + e.tShift[t], b = Number(e.src.substr(f, d - f - 1)), e.tokens.push({
          type: "ordered_list_open",
          order: b,
          lines: w = [t, 0],
          level: e.level++ })) :
        e.tokens.push({
          type: "bullet_list_open",
          lines: w = [t, 0],
          level: e.level++ }),
        l = t, x = !1, q = e.parser.ruler.getRules("list"); !(!(r > l) || (_ = e.skipSpaces(d), g = e.eMarks[l], m = _ >= g ? 1 : _ - d, m > 4 && (m = 1), 1 > m && (m = 1), a = d - e.bMarks[l] + m, e.tokens.push({
          type: "list_item_open",
          lines: A = [t, 0],
          level: e.level++ }),
        u = e.blkIndent, p = e.tight, c = e.tShift[t], h = e.parentType, e.tShift[t] = _ - e.bMarks[t], e.blkIndent = a, e.tight = !0, e.parentType = "list", e.parser.tokenize(e, t, r, !0), (!e.tight || x) && (M = !1), x = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = u, e.tShift[t] = c, e.tight = p, e.parentType = h, e.tokens.push({
          type: "list_item_close",
          level: --e.level }),
        l = t = e.line, A[1] = l, _ = e.bMarks[t], l >= r) || e.isEmpty(l) || e.tShift[l] < e.blkIndent);) {
          for (E = !1, C = 0, S = q.length; S > C; C++) {if (q[C](e, l, r, !0)) {
              E = !0;
              break;
            }}

          if (E) break;

          if (k) {
            if (d = s(e, l), 0 > d) break;
          } else if (d = n(e, l), 0 > d) break;

          if (v !== e.src.charCodeAt(d - 1)) break;
        }

        return e.tokens.push({
          type: k ? "ordered_list_close" : "bullet_list_close",
          level: --e.level }),
        w[1] = l, e.line = l, M && o(e, y), !0;
      };
    }, {}],
    31: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o,
        i,
        l,
        a = t + 1;
        if (r = e.lineMax, r > a && !e.isEmpty(a)) for (l = e.parser.ruler.getRules("paragraph"); r > a && !e.isEmpty(a); a++) {if (!(e.tShift[a] - e.blkIndent > 3)) {
            for (s = !1, o = 0, i = l.length; i > o; o++) {if (l[o](e, a, r, !0)) {
                s = !0;
                break;
              }}

            if (s) break;
          }}
        return n = e.getLines(t, a, e.blkIndent, !1).trim(), e.line = a, n.length && (e.tokens.push({
          type: "paragraph_open",
          tight: !1,
          lines: [t, e.line],
          level: e.level }),
        e.tokens.push({
          type: "inline",
          content: n,
          level: e.level + 1,
          lines: [t, e.line],
          children: [] }),
        e.tokens.push({
          type: "paragraph_close",
          tight: !1,
          level: e.level })),
        !0;
      };
    }, {}],
    32: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n, s) {
        var o, i, l, a, c, u, p;

        for (this.src = e, this.parser = t, this.options = r, this.env = n, this.tokens = s, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", i = this.src, u = 0, p = !1, l = a = u = 0, c = i.length; c > a; a++) {
          if (o = i.charCodeAt(a), !p) {
            if (32 === o) {
              u++;
              continue;
            }

            p = !0;
          }

          (10 === o || a === c - 1) && (10 !== o && a++, this.bMarks.push(l), this.eMarks.push(a), this.tShift.push(u), p = !1, u = 0, l = a + 1);
        }

        this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
      }

      n.prototype.isEmpty = function (e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
      }, n.prototype.skipEmptyLines = function (e) {
        for (var t = this.lineMax; t > e && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++) {;}

        return e;
      }, n.prototype.skipSpaces = function (e) {
        for (var t = this.src.length; t > e && 32 === this.src.charCodeAt(e); e++) {;}

        return e;
      }, n.prototype.skipChars = function (e, t) {
        for (var r = this.src.length; r > e && this.src.charCodeAt(e) === t; e++) {;}

        return e;
      }, n.prototype.skipCharsBack = function (e, t, r) {
        if (r >= e) return e;

        for (; e > r;) {if (t !== this.src.charCodeAt(--e)) return e + 1;}

        return e;
      }, n.prototype.getLines = function (e, t, r, n) {
        var s,
        o,
        i,
        l,
        a,
        c = e;
        if (e >= t) return "";
        if (c + 1 === t) return o = this.bMarks[c] + Math.min(this.tShift[c], r), i = n ? this.eMarks[c] + 1 : this.eMarks[c], this.src.slice(o, i);

        for (l = new Array(t - e), s = 0; t > c; c++, s++) {a = this.tShift[c], a > r && (a = r), 0 > a && (a = 0), o = this.bMarks[c] + a, i = t > c + 1 || n ? this.eMarks[c] + 1 : this.eMarks[c], l[s] = this.src.slice(o, i);}

        return l.join("");
      }, t.exports = n;
    }, {}],
    33: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        var r = e.bMarks[t] + e.blkIndent,
        n = e.eMarks[t];
        return e.src.substr(r, n - r);
      }

      t.exports = function (e, t, r, s) {
        var o, i, l, a, c, u, p, h, f, d;
        if (t + 2 > r) return !1;
        if (c = t + 1, e.tShift[c] < e.blkIndent) return !1;
        if (l = e.bMarks[c] + e.tShift[c], l >= e.eMarks[c]) return !1;
        if (o = e.src.charCodeAt(l), 124 !== o && 45 !== o && 58 !== o) return !1;
        if (i = n(e, t + 1), !/^[-:| ]+$/.test(i)) return !1;
        if (u = i.split("|"), 2 >= u) return !1;

        for (p = [], a = 0; a < u.length; a++) {
          if (h = u[a].trim(), !h) {
            if (0 === a || a === u.length - 1) continue;
            return !1;
          }

          if (!/^:?-+:?$/.test(h)) return !1;
          58 === h.charCodeAt(h.length - 1) ? p.push(58 === h.charCodeAt(0) ? "center" : "right") : 58 === h.charCodeAt(0) ? p.push("left") : p.push("");
        }

        if (i = n(e, t).trim(), -1 === i.indexOf("|")) return !1;
        if (u = i.replace(/^\||\|$/g, "").split("|"), p.length !== u.length) return !1;
        if (s) return !0;

        for (e.tokens.push({
          type: "table_open",
          lines: f = [t, 0],
          level: e.level++ }),
        e.tokens.push({
          type: "thead_open",
          lines: [t, t + 1],
          level: e.level++ }),
        e.tokens.push({
          type: "tr_open",
          lines: [t, t + 1],
          level: e.level++ }),
        a = 0; a < u.length; a++) {e.tokens.push({
            type: "th_open",
            align: p[a],
            lines: [t, t + 1],
            level: e.level++ }),
          e.tokens.push({
            type: "inline",
            content: u[a].trim(),
            lines: [t, t + 1],
            level: e.level,
            children: [] }),
          e.tokens.push({
            type: "th_close",
            level: --e.level });}


        for (e.tokens.push({
          type: "tr_close",
          level: --e.level }),
        e.tokens.push({
          type: "thead_close",
          level: --e.level }),
        e.tokens.push({
          type: "tbody_open",
          lines: d = [t + 2, 0],
          level: e.level++ }),
        c = t + 2; r > c && !(e.tShift[c] < e.blkIndent) && (i = n(e, c).trim(), -1 !== i.indexOf("|")); c++) {
          for (u = i.replace(/^\||\|$/g, "").split("|"), e.tokens.push({
            type: "tr_open",
            level: e.level++ }),
          a = 0; a < u.length; a++) {e.tokens.push({
              type: "td_open",
              align: p[a],
              level: e.level++ }),
            e.tokens.push({
              type: "inline",
              content: u[a].replace(/^\|? *| *\|?$/g, ""),
              level: e.level,
              children: [] }),
            e.tokens.push({
              type: "td_close",
              level: --e.level });}


          e.tokens.push({
            type: "tr_close",
            level: --e.level });

        }

        return e.tokens.push({
          type: "tbody_close",
          level: --e.level }),
        e.tokens.push({
          type: "table_close",
          level: --e.level }),
        f[1] = d[1] = c, e.line = c, !0;
      };
    }, {}],
    34: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n) {
        var i, l, a, c, u, p;
        if (42 !== e.charCodeAt(0)) return -1;
        if (91 !== e.charCodeAt(1)) return -1;
        if (-1 === e.indexOf("]:")) return -1;
        if (i = new s(e, t, r, n, []), l = o(i, 1), 0 > l || 58 !== e.charCodeAt(l + 1)) return -1;

        for (c = i.posMax, a = l + 2; c > a && 10 !== i.src.charCodeAt(a); a++) {;}

        return u = e.slice(2, l), p = e.slice(l + 2, a).trim(), 0 === p.length ? -1 : (n.abbreviations || (n.abbreviations = {}), "undefined" == typeof n.abbreviations[":" + u] && (n.abbreviations[":" + u] = p), a);
      }

      var s = e("../rules_inline/state_inline"),
      o = e("../helpers/parse_link_label");

      t.exports = function (e) {
        var t,
        r,
        s,
        o,
        i = e.tokens;
        if (!e.inlineMode) for (t = 1, r = i.length - 1; r > t; t++) {if ("paragraph_open" === i[t - 1].type && "inline" === i[t].type && "paragraph_close" === i[t + 1].type) {
            for (s = i[t].content; s.length && (o = n(s, e.inline, e.options, e.env), !(0 > o));) {s = s.slice(o).trim();}

            i[t].content = s, s.length || (i[t - 1].tight = !0, i[t + 1].tight = !0);
          }}
      };
    }, {
      "../helpers/parse_link_label": 12,
      "../rules_inline/state_inline": 56 }],

    35: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
      }

      var s = " \n()[]'\".,!?-";

      t.exports = function (e) {
        var t,
        r,
        o,
        i,
        l,
        a,
        c,
        u,
        p,
        h,
        f,
        d,
        g = e.tokens;
        if (e.env.abbreviations) for (e.env.abbrRegExp || (d = "(^|[" + s.split("").map(n).join("") + "])(" + Object.keys(e.env.abbreviations).map(function (e) {
          return e.substr(1);
        }).sort(function (e, t) {
          return t.length - e.length;
        }).map(n).join("|") + ")($|[" + s.split("").map(n).join("") + "])", e.env.abbrRegExp = new RegExp(d, "g")), h = e.env.abbrRegExp, r = 0, o = g.length; o > r; r++) {if ("inline" === g[r].type) for (i = g[r].children, t = i.length - 1; t >= 0; t--) {if (l = i[t], "text" === l.type) {
              for (u = 0, a = l.content, h.lastIndex = 0, p = l.level, c = []; f = h.exec(a);) {h.lastIndex > u && c.push({
                  type: "text",
                  content: a.slice(u, f.index + f[1].length),
                  level: p }),
                c.push({
                  type: "abbr_open",
                  title: e.env.abbreviations[":" + f[2]],
                  level: p++ }),
                c.push({
                  type: "text",
                  content: f[2],
                  level: p }),
                c.push({
                  type: "abbr_close",
                  level: --p }),
                u = h.lastIndex - f[3].length;}

              c.length && (u < a.length && c.push({
                type: "text",
                content: a.slice(u),
                level: p }),
              g[r].children = i = [].concat(i.slice(0, t), c, i.slice(t + 1)));
            }}}
      };
    }, {}],
    36: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        e.inlineMode ? e.tokens.push({
          type: "inline",
          content: e.src.replace(/\n/g, " ").trim(),
          level: 0,
          lines: [0, 1],
          children: [] }) :
        e.block.parse(e.src, e.options, e.env, e.tokens);
      };
    }, {}],
    37: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        var t,
        r,
        n,
        s,
        o,
        i,
        l,
        a,
        c,
        u = 0,
        p = !1,
        h = {};

        if (e.env.footnotes && (e.tokens = e.tokens.filter(function (e) {
          return "footnote_reference_open" === e.type ? (p = !0, a = [], c = e.label, !1) : "footnote_reference_close" === e.type ? (p = !1, h[":" + c] = a, !1) : (p && a.push(e), !p);
        }), e.env.footnotes.list)) {
          for (i = e.env.footnotes.list, e.tokens.push({
            type: "footnote_block_open",
            level: u++ }),
          t = 0, r = i.length; r > t; t++) {
            for (e.tokens.push({
              type: "footnote_open",
              id: t,
              level: u++ }),
            i[t].tokens ? (l = [], l.push({
              type: "paragraph_open",
              tight: !1,
              level: u++ }),
            l.push({
              type: "inline",
              content: "",
              level: u,
              children: i[t].tokens }),
            l.push({
              type: "paragraph_close",
              tight: !1,
              level: --u })) :
            i[t].label && (l = h[":" + i[t].label]), e.tokens = e.tokens.concat(l), o = "paragraph_close" === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null, s = i[t].count > 0 ? i[t].count : 1, n = 0; s > n; n++) {e.tokens.push({
                type: "footnote_anchor",
                id: t,
                subId: n,
                level: u });}


            o && e.tokens.push(o), e.tokens.push({
              type: "footnote_close",
              level: --u });

          }

          e.tokens.push({
            type: "footnote_block_close",
            level: --u });

        }
      };
    }, {}],
    38: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        var t,
        r,
        n,
        s = e.tokens;

        for (r = 0, n = s.length; n > r; r++) {t = s[r], "inline" === t.type && e.inline.parse(t.content, e.options, e.env, t.children);}
      };
    }, {}],
    39: [function (e, t, r) {
      "use strict";

      function n(e) {
        return /^<a[>\s]/i.test(e);
      }

      function s(e) {
        return /^<\/a\s*>/i.test(e);
      }

      function o() {
        var e = [],
        t = new i({
          stripPrefix: !1,
          url: !0,
          email: !0,
          twitter: !1,
          replaceFn: function replaceFn(t, r) {
            switch (r.getType()) {
              case "url":
                e.push({
                  text: r.matchedText,
                  url: r.getUrl() });

                break;

              case "email":
                e.push({
                  text: r.matchedText,
                  url: "mailto:" + r.getEmail().replace(/^mailto:/i, "") });}



            return !1;
          } });

        return {
          links: e,
          autolinker: t };

      }

      var i = e("autolinker"),
      l = /www|@|\:\/\//;

      t.exports = function (e) {
        var t,
        r,
        i,
        a,
        c,
        u,
        p,
        h,
        f,
        d,
        g,
        m,
        b,
        v = e.tokens,
        k = null;
        if (e.options.linkify) for (r = 0, i = v.length; i > r; r++) {if ("inline" === v[r].type) for (a = v[r].children, g = 0, t = a.length - 1; t >= 0; t--) {if (c = a[t], "link_close" !== c.type) {
              if ("htmltag" === c.type && (n(c.content) && g > 0 && g--, s(c.content) && g++), !(g > 0) && "text" === c.type && l.test(c.content)) {
                if (k || (k = o(), m = k.links, b = k.autolinker), u = c.content, m.length = 0, b.link(u), !m.length) continue;

                for (p = [], d = c.level, h = 0; h < m.length; h++) {e.inline.validateLink(m[h].url) && (f = u.indexOf(m[h].text), f && (d = d, p.push({
                    type: "text",
                    content: u.slice(0, f),
                    level: d })),
                  p.push({
                    type: "link_open",
                    href: m[h].url,
                    title: "",
                    level: d++ }),
                  p.push({
                    type: "text",
                    content: m[h].text,
                    level: d }),
                  p.push({
                    type: "link_close",
                    level: --d }),
                  u = u.slice(f + m[h].text.length));}

                u.length && p.push({
                  type: "text",
                  content: u,
                  level: d }),
                v[r].children = a = [].concat(a.slice(0, t), p, a.slice(t + 1));
              }
            } else for (t--; a[t].level !== c.level && "link_open" !== a[t].type;) {t--;}}}
      };
    }, {
      autolinker: 60 }],

    40: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n) {
        var c, u, p, h, f, d, g, m, b;
        if (91 !== e.charCodeAt(0)) return -1;
        if (-1 === e.indexOf("]:")) return -1;
        if (c = new s(e, t, r, n, []), u = o(c, 0), 0 > u || 58 !== e.charCodeAt(u + 1)) return -1;

        for (h = c.posMax, p = u + 2; h > p && (f = c.src.charCodeAt(p), 32 === f || 10 === f); p++) {;}

        if (!i(c, p)) return -1;

        for (g = c.linkContent, p = c.pos, d = p, p += 1; h > p && (f = c.src.charCodeAt(p), 32 === f || 10 === f); p++) {;}

        for (h > p && d !== p && l(c, p) ? (m = c.linkContent, p = c.pos) : (m = "", p = d); h > p && 32 === c.src.charCodeAt(p);) {p++;}

        return h > p && 10 !== c.src.charCodeAt(p) ? -1 : (b = a(e.slice(1, u)), "undefined" == typeof n.references[b] && (n.references[b] = {
          title: m,
          href: g }),
        p);
      }

      var s = e("../rules_inline/state_inline"),
      o = e("../helpers/parse_link_label"),
      i = e("../helpers/parse_link_destination"),
      l = e("../helpers/parse_link_title"),
      a = e("../helpers/normalize_reference");

      t.exports = function (e) {
        var t,
        r,
        s,
        o,
        i = e.tokens;
        if (e.env.references = e.env.references || {}, !e.inlineMode) for (t = 1, r = i.length - 1; r > t; t++) {if ("inline" === i[t].type && "paragraph_open" === i[t - 1].type && "paragraph_close" === i[t + 1].type) {
            for (s = i[t].content; s.length && (o = n(s, e.inline, e.options, e.env), !(0 > o));) {s = s.slice(o).trim();}

            i[t].content = s, s.length || (i[t - 1].tight = !0, i[t + 1].tight = !0);
          }}
      };
    }, {
      "../helpers/normalize_reference": 10,
      "../helpers/parse_link_destination": 11,
      "../helpers/parse_link_label": 12,
      "../helpers/parse_link_title": 13,
      "../rules_inline/state_inline": 56 }],

    41: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e.indexOf("(") < 0 ? e : e.replace(o, function (e, t) {
          return i[t.toLowerCase()];
        });
      }

      var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
      o = /\((c|tm|r|p)\)/gi,
      i = {
        c: "©",
        r: "®",
        p: "§",
        tm: "™" };


      t.exports = function (e) {
        var t, r, o, i, l;
        if (e.options.typographer) for (l = e.tokens.length - 1; l >= 0; l--) {if ("inline" === e.tokens[l].type) for (i = e.tokens[l].children, t = i.length - 1; t >= 0; t--) {r = i[t], "text" === r.type && (o = r.content, o = n(o), s.test(o) && (o = o.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), r.content = o);}}
      };
    }, {}],
    42: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        return 0 > t || t >= e.length ? !1 : !l.test(e[t]);
      }

      function s(e, t, r) {
        return e.substr(0, t) + r + e.substr(t + 1);
      }

      var o = /['"]/,
      i = /['"]/g,
      l = /[-\s()\[\]]/,
      a = "’";

      t.exports = function (e) {
        var t, r, l, c, u, p, h, f, d, g, m, b, v, k, _, y, x;

        if (e.options.typographer) for (x = [], _ = e.tokens.length - 1; _ >= 0; _--) {if ("inline" === e.tokens[_].type) for (y = e.tokens[_].children, x.length = 0, t = 0; t < y.length; t++) {if (r = y[t], "text" === r.type && !o.test(r.text)) {
              for (h = y[t].level, v = x.length - 1; v >= 0 && !(x[v].level <= h); v--) {;}

              x.length = v + 1, l = r.content, u = 0, p = l.length;

              e: for (; p > u && (i.lastIndex = u, c = i.exec(l));) {if (f = !n(l, c.index - 1), u = c.index + 1, k = "'" === c[0], d = !n(l, u), d || f) {
                  if (m = !d, b = !f) for (v = x.length - 1; v >= 0 && (g = x[v], !(x[v].level < h)); v--) {if (g.single === k && x[v].level === h) {
                      g = x[v], k ? (y[g.token].content = s(y[g.token].content, g.pos, e.options.quotes[2]), r.content = s(r.content, c.index, e.options.quotes[3])) : (y[g.token].content = s(y[g.token].content, g.pos, e.options.quotes[0]), r.content = s(r.content, c.index, e.options.quotes[1])), x.length = v;
                      continue e;
                    }}
                  m ? x.push({
                    token: t,
                    pos: c.index,
                    single: k,
                    level: h }) :
                  b && k && (r.content = s(r.content, c.index, a));
                } else k && (r.content = s(r.content, c.index, a));}
            }}}
      };
    }, {}],
    43: [function (e, t, r) {
      "use strict";

      var n = e("../common/url_schemas"),
      s = e("../helpers/normalize_link"),
      o = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
      i = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;

      t.exports = function (e, t) {
        var r,
        l,
        a,
        c,
        u,
        p = e.pos;
        return 60 !== e.src.charCodeAt(p) ? !1 : (r = e.src.slice(p), r.indexOf(">") < 0 ? !1 : (l = r.match(i)) ? n.indexOf(l[1].toLowerCase()) < 0 ? !1 : (c = l[0].slice(1, -1), u = s(c), e.parser.validateLink(c) ? (t || (e.push({
          type: "link_open",
          href: u,
          level: e.level }),
        e.push({
          type: "text",
          content: c,
          level: e.level + 1 }),
        e.push({
          type: "link_close",
          level: e.level })),
        e.pos += l[0].length, !0) : !1) : (a = r.match(o), a ? (c = a[0].slice(1, -1), u = s("mailto:" + c), e.parser.validateLink(u) ? (t || (e.push({
          type: "link_open",
          href: u,
          level: e.level }),
        e.push({
          type: "text",
          content: c,
          level: e.level + 1 }),
        e.push({
          type: "link_close",
          level: e.level })),
        e.pos += a[0].length, !0) : !1) : !1));
      };
    }, {
      "../common/url_schemas": 4,
      "../helpers/normalize_link": 9 }],

    44: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o,
        i,
        l = e.pos,
        a = e.src.charCodeAt(l);
        if (96 !== a) return !1;

        for (r = l, l++, n = e.posMax; n > l && 96 === e.src.charCodeAt(l);) {l++;}

        for (s = e.src.slice(r, l), o = i = l; -1 !== (o = e.src.indexOf("`", i));) {
          for (i = o + 1; n > i && 96 === e.src.charCodeAt(i);) {i++;}

          if (i - o === s.length) return t || e.push({
            type: "code",
            content: e.src.slice(l, o).replace(/[ \n]+/g, " ").trim(),
            block: !1,
            level: e.level }),
          e.pos = i, !0;
        }

        return t || (e.pending += s), e.pos += s.length, !0;
      };
    }, {}],
    45: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o,
        i,
        l = e.posMax,
        a = e.pos;
        if (126 !== e.src.charCodeAt(a)) return !1;
        if (t) return !1;
        if (a + 4 >= l) return !1;
        if (126 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 126 === o) return !1;
        if (126 === i) return !1;
        if (32 === i || 10 === i) return !1;

        for (n = a + 2; l > n && 126 === e.src.charCodeAt(n);) {n++;}

        if (n > a + 3) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;

        for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
          if (126 === e.src.charCodeAt(e.pos) && 126 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 126 !== i && 126 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
            r = !0;
            break;
          }

          e.parser.skipToken(e);
        }

        return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
          type: "del_open",
          level: e.level++ }),
        e.parser.tokenize(e), e.push({
          type: "del_close",
          level: --e.level })),
        e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1);
      };
    }, {}],
    46: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e >= 48 && 57 >= e || e >= 65 && 90 >= e || e >= 97 && 122 >= e;
      }

      function s(e, t) {
        var r,
        s,
        o,
        i = t,
        l = !0,
        a = !0,
        c = e.posMax,
        u = e.src.charCodeAt(t);

        for (r = t > 0 ? e.src.charCodeAt(t - 1) : -1; c > i && e.src.charCodeAt(i) === u;) {i++;}

        return i >= c && (l = !1), o = i - t, o >= 4 ? l = a = !1 : (s = c > i ? e.src.charCodeAt(i) : -1, (32 === s || 10 === s) && (l = !1), (32 === r || 10 === r) && (a = !1), 95 === u && (n(r) && (l = !1), n(s) && (a = !1))), {
          can_open: l,
          can_close: a,
          delims: o };

      }

      t.exports = function (e, t) {
        var r,
        n,
        o,
        i,
        l,
        a,
        c,
        u = e.posMax,
        p = e.pos,
        h = e.src.charCodeAt(p);
        if (95 !== h && 42 !== h) return !1;
        if (t) return !1;
        if (c = s(e, p), r = c.delims, !c.can_open) return e.pos += r, t || (e.pending += e.src.slice(p, e.pos)), !0;
        if (e.level >= e.options.maxNesting) return !1;

        for (e.pos = p + r, a = [r]; e.pos < u;) {if (e.src.charCodeAt(e.pos) !== h) e.parser.skipToken(e);else {
            if (c = s(e, e.pos), n = c.delims, c.can_close) {
              for (i = a.pop(), l = n; i !== l;) {
                if (i > l) {
                  a.push(i - l);
                  break;
                }

                if (l -= i, 0 === a.length) break;
                e.pos += i, i = a.pop();
              }

              if (0 === a.length) {
                r = i, o = !0;
                break;
              }

              e.pos += n;
              continue;
            }

            c.can_open && a.push(n), e.pos += n;
          }}

        return o ? (e.posMax = e.pos, e.pos = p + r, t || ((2 === r || 3 === r) && e.push({
          type: "strong_open",
          level: e.level++ }),
        (1 === r || 3 === r) && e.push({
          type: "em_open",
          level: e.level++ }),
        e.parser.tokenize(e), (1 === r || 3 === r) && e.push({
          type: "em_close",
          level: --e.level }),
        (2 === r || 3 === r) && e.push({
          type: "strong_close",
          level: --e.level })),
        e.pos = e.posMax + r, e.posMax = u, !0) : (e.pos = p, !1);
      };
    }, {}],
    47: [function (e, t, r) {
      "use strict";

      var n = e("../common/entities"),
      s = e("../common/utils").has,
      o = e("../common/utils").isValidEntityCode,
      i = e("../common/utils").fromCodePoint,
      l = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
      a = /^&([a-z][a-z0-9]{1,31});/i;

      t.exports = function (e, t) {
        var r,
        c,
        u,
        p = e.pos,
        h = e.posMax;
        if (38 !== e.src.charCodeAt(p)) return !1;
        if (h > p + 1) if (r = e.src.charCodeAt(p + 1), 35 === r) {
          if (u = e.src.slice(p).match(l)) return t || (c = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), e.pending += i(o(c) ? c : 65533)), e.pos += u[0].length, !0;
        } else if (u = e.src.slice(p).match(a), u && s(n, u[1])) return t || (e.pending += n[u[1]]), e.pos += u[0].length, !0;
        return t || (e.pending += "&"), e.pos++, !0;
      };
    }, {
      "../common/entities": 1,
      "../common/utils": 5 }],

    48: [function (e, t, r) {
      "use strict";

      for (var n = [], s = 0; 256 > s; s++) {n.push(0);}

      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
        n[e.charCodeAt(0)] = 1;
      }), t.exports = function (e, t) {
        var r,
        s = e.pos,
        o = e.posMax;
        if (92 !== e.src.charCodeAt(s)) return !1;

        if (s++, o > s) {
          if (r = e.src.charCodeAt(s), 256 > r && 0 !== n[r]) return t || (e.pending += e.src[s]), e.pos += 2, !0;

          if (10 === r) {
            for (t || e.push({
              type: "hardbreak",
              level: e.level }),
            s++; o > s && 32 === e.src.charCodeAt(s);) {s++;}

            return e.pos = s, !0;
          }
        }

        return t || (e.pending += "\\"), e.pos++, !0;
      };
    }, {}],
    49: [function (e, t, r) {
      "use strict";

      var n = e("../helpers/parse_link_label");

      t.exports = function (e, t) {
        var r,
        s,
        o,
        i,
        l = e.posMax,
        a = e.pos;
        return a + 2 >= l ? !1 : 94 !== e.src.charCodeAt(a) ? !1 : 91 !== e.src.charCodeAt(a + 1) ? !1 : e.level >= e.options.maxNesting ? !1 : (r = a + 2, s = n(e, a + 1), 0 > s ? !1 : (t || (e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.list || (e.env.footnotes.list = []), o = e.env.footnotes.list.length, e.pos = r, e.posMax = s, e.push({
          type: "footnote_ref",
          id: o,
          level: e.level }),
        e.linkLevel++, i = e.tokens.length, e.parser.tokenize(e), e.env.footnotes.list[o] = {
          tokens: e.tokens.splice(i) },
        e.linkLevel--), e.pos = s + 1, e.posMax = l, !0));
      };
    }, {
      "../helpers/parse_link_label": 12 }],

    50: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o,
        i = e.posMax,
        l = e.pos;
        if (l + 3 > i) return !1;
        if (!e.env.footnotes || !e.env.footnotes.refs) return !1;
        if (91 !== e.src.charCodeAt(l)) return !1;
        if (94 !== e.src.charCodeAt(l + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;

        for (n = l + 2; i > n; n++) {
          if (32 === e.src.charCodeAt(n)) return !1;
          if (10 === e.src.charCodeAt(n)) return !1;
          if (93 === e.src.charCodeAt(n)) break;
        }

        return n === l + 2 ? !1 : n >= i ? !1 : (n++, r = e.src.slice(l + 2, n - 1), "undefined" == typeof e.env.footnotes.refs[":" + r] ? !1 : (t || (e.env.footnotes.list || (e.env.footnotes.list = []), e.env.footnotes.refs[":" + r] < 0 ? (s = e.env.footnotes.list.length, e.env.footnotes.list[s] = {
          label: r,
          count: 0 },
        e.env.footnotes.refs[":" + r] = s) : s = e.env.footnotes.refs[":" + r], o = e.env.footnotes.list[s].count, e.env.footnotes.list[s].count++, e.push({
          type: "footnote_ref",
          id: s,
          subId: o,
          level: e.level })),
        e.pos = n, e.posMax = i, !0));
      };
    }, {}],
    51: [function (e, t, r) {
      "use strict";

      function n(e) {
        var t = 32 | e;
        return t >= 97 && 122 >= t;
      }

      var s = e("../common/html_re").HTML_TAG_RE;

      t.exports = function (e, t) {
        var r,
        o,
        i,
        l = e.pos;
        return e.options.html ? (i = e.posMax, 60 !== e.src.charCodeAt(l) || l + 2 >= i ? !1 : (r = e.src.charCodeAt(l + 1), (33 === r || 63 === r || 47 === r || n(r)) && (o = e.src.slice(l).match(s)) ? (t || e.push({
          type: "htmltag",
          content: e.src.slice(l, l + o[0].length),
          level: e.level }),
        e.pos += o[0].length, !0) : !1)) : !1;
      };
    }, {
      "../common/html_re": 3 }],

    52: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o,
        i,
        l = e.posMax,
        a = e.pos;
        if (43 !== e.src.charCodeAt(a)) return !1;
        if (t) return !1;
        if (a + 4 >= l) return !1;
        if (43 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 43 === o) return !1;
        if (43 === i) return !1;
        if (32 === i || 10 === i) return !1;

        for (n = a + 2; l > n && 43 === e.src.charCodeAt(n);) {n++;}

        if (n !== a + 2) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;

        for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
          if (43 === e.src.charCodeAt(e.pos) && 43 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 43 !== i && 43 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
            r = !0;
            break;
          }

          e.parser.skipToken(e);
        }

        return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
          type: "ins_open",
          level: e.level++ }),
        e.parser.tokenize(e), e.push({
          type: "ins_close",
          level: --e.level })),
        e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1);
      };
    }, {}],
    53: [function (e, t, r) {
      "use strict";

      var n = e("../helpers/parse_link_label"),
      s = e("../helpers/parse_link_destination"),
      o = e("../helpers/parse_link_title"),
      i = e("../helpers/normalize_reference");

      t.exports = function (e, t) {
        var r,
        l,
        a,
        c,
        u,
        p,
        h,
        f,
        d = !1,
        g = e.pos,
        m = e.posMax,
        b = e.pos,
        v = e.src.charCodeAt(b);
        if (33 === v && (d = !0, v = e.src.charCodeAt(++b)), 91 !== v) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (r = b + 1, l = n(e, b), 0 > l) return !1;

        if (p = l + 1, m > p && 40 === e.src.charCodeAt(p)) {
          for (p++; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++) {;}

          if (p >= m) return !1;

          for (b = p, s(e, p) ? (c = e.linkContent, p = e.pos) : c = "", b = p; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++) {;}

          if (m > p && b !== p && o(e, p)) for (u = e.linkContent, p = e.pos; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++) {;} else u = "";
          if (p >= m || 41 !== e.src.charCodeAt(p)) return e.pos = g, !1;
          p++;
        } else {
          if (e.linkLevel > 0) return !1;

          for (; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++) {;}

          if (m > p && 91 === e.src.charCodeAt(p) && (b = p + 1, p = n(e, p), p >= 0 ? a = e.src.slice(b, p++) : p = b - 1), a || ("undefined" == typeof a && (p = l + 1), a = e.src.slice(r, l)), h = e.env.references[i(a)], !h) return e.pos = g, !1;
          c = h.href, u = h.title;
        }

        return t || (e.pos = r, e.posMax = l, d ? e.push({
          type: "image",
          src: c,
          title: u,
          alt: e.src.substr(r, l - r),
          level: e.level }) : (
        e.push({
          type: "link_open",
          href: c,
          title: u,
          level: e.level++ }),
        e.linkLevel++, e.parser.tokenize(e), e.linkLevel--, e.push({
          type: "link_close",
          level: --e.level }))),
        e.pos = p, e.posMax = m, !0;
      };
    }, {
      "../helpers/normalize_reference": 10,
      "../helpers/parse_link_destination": 11,
      "../helpers/parse_link_label": 12,
      "../helpers/parse_link_title": 13 }],

    54: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s,
        o,
        i,
        l = e.posMax,
        a = e.pos;
        if (61 !== e.src.charCodeAt(a)) return !1;
        if (t) return !1;
        if (a + 4 >= l) return !1;
        if (61 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 61 === o) return !1;
        if (61 === i) return !1;
        if (32 === i || 10 === i) return !1;

        for (n = a + 2; l > n && 61 === e.src.charCodeAt(n);) {n++;}

        if (n !== a + 2) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;

        for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
          if (61 === e.src.charCodeAt(e.pos) && 61 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 61 !== i && 61 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
            r = !0;
            break;
          }

          e.parser.skipToken(e);
        }

        return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
          type: "mark_open",
          level: e.level++ }),
        e.parser.tokenize(e), e.push({
          type: "mark_close",
          level: --e.level })),
        e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1);
      };
    }, {}],
    55: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
        n,
        s = e.pos;
        if (10 !== e.src.charCodeAt(s)) return !1;

        for (r = e.pending.length - 1, n = e.posMax, t || (r >= 0 && 32 === e.pending.charCodeAt(r) ? r >= 1 && 32 === e.pending.charCodeAt(r - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push({
          type: "hardbreak",
          level: e.level })) : (
        e.pending = e.pending.slice(0, -1), e.push({
          type: "softbreak",
          level: e.level })) :
        e.push({
          type: "softbreak",
          level: e.level })),
        s++; n > s && 32 === e.src.charCodeAt(s);) {s++;}

        return e.pos = s, !0;
      };
    }, {}],
    56: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n, s) {
        this.src = e, this.env = n, this.options = r, this.parser = t, this.tokens = s, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
      }

      n.prototype.pushPending = function () {
        this.tokens.push({
          type: "text",
          content: this.pending,
          level: this.pendingLevel }),
        this.pending = "";
      }, n.prototype.push = function (e) {
        this.pending && this.pushPending(), this.tokens.push(e), this.pendingLevel = this.level;
      }, n.prototype.cacheSet = function (e, t) {
        for (var r = this.cache.length; e >= r; r++) {this.cache.push(0);}

        this.cache[e] = t;
      }, n.prototype.cacheGet = function (e) {
        return e < this.cache.length ? this.cache[e] : 0;
      }, t.exports = n;
    }, {}],
    57: [function (e, t, r) {
      "use strict";

      var n = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

      t.exports = function (e, t) {
        var r,
        s,
        o = e.posMax,
        i = e.pos;
        if (126 !== e.src.charCodeAt(i)) return !1;
        if (t) return !1;
        if (i + 2 >= o) return !1;
        if (e.level >= e.options.maxNesting) return !1;

        for (e.pos = i + 1; e.pos < o;) {
          if (126 === e.src.charCodeAt(e.pos)) {
            r = !0;
            break;
          }

          e.parser.skipToken(e);
        }

        return r && i + 1 !== e.pos ? (s = e.src.slice(i + 1, e.pos), s.match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = i, !1) : (e.posMax = e.pos, e.pos = i + 1, t || e.push({
          type: "sub",
          level: e.level,
          content: s.replace(n, "$1") }),
        e.pos = e.posMax + 1, e.posMax = o, !0)) : (e.pos = i, !1);
      };
    }, {}],
    58: [function (e, t, r) {
      "use strict";

      var n = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

      t.exports = function (e, t) {
        var r,
        s,
        o = e.posMax,
        i = e.pos;
        if (94 !== e.src.charCodeAt(i)) return !1;
        if (t) return !1;
        if (i + 2 >= o) return !1;
        if (e.level >= e.options.maxNesting) return !1;

        for (e.pos = i + 1; e.pos < o;) {
          if (94 === e.src.charCodeAt(e.pos)) {
            r = !0;
            break;
          }

          e.parser.skipToken(e);
        }

        return r && i + 1 !== e.pos ? (s = e.src.slice(i + 1, e.pos), s.match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = i, !1) : (e.posMax = e.pos, e.pos = i + 1, t || e.push({
          type: "sup",
          level: e.level,
          content: s.replace(n, "$1") }),
        e.pos = e.posMax + 1, e.posMax = o, !0)) : (e.pos = i, !1);
      };
    }, {}],
    59: [function (e, t, r) {
      "use strict";

      function n(e) {
        switch (e) {
          case 10:
          case 92:
          case 96:
          case 42:
          case 95:
          case 94:
          case 91:
          case 93:
          case 33:
          case 38:
          case 60:
          case 62:
          case 123:
          case 125:
          case 36:
          case 37:
          case 64:
          case 126:
          case 43:
          case 61:
          case 58:
            return !0;

          default:
            return !1;}

      }

      t.exports = function (e, t) {
        for (var r = e.pos; r < e.posMax && !n(e.src.charCodeAt(r));) {r++;}

        return r === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
      };
    }, {}],
    60: [function (t, r, n) {
      !function (t, s) {
        "function" == typeof e && e.amd ? e([], function () {
          return t.Autolinker = s();
        }) : "object" == typeof n ? r.exports = s() : t.Autolinker = s();
      }(this, function () {
        var e = function e(t) {
          e.Util.assign(this, t);
        };

        return e.prototype = {
          constructor: e,
          urls: !0,
          email: !0,
          twitter: !0,
          newWindow: !0,
          stripPrefix: !0,
          truncate: void 0,
          className: "",
          htmlParser: void 0,
          matchParser: void 0,
          tagBuilder: void 0,
          link: function link(e) {
            for (var t = this.getHtmlParser(), r = t.parse(e), n = 0, s = [], o = 0, i = r.length; i > o; o++) {
              var l = r[o],
              a = l.getType(),
              c = l.getText();
              if ("element" === a) "a" === l.getTagName() && (l.isClosing() ? n = Math.max(n - 1, 0) : n++), s.push(c);else if ("entity" === a) s.push(c);else if (0 === n) {
                var u = this.linkifyStr(c);
                s.push(u);
              } else s.push(c);
            }

            return s.join("");
          },
          linkifyStr: function linkifyStr(e) {
            return this.getMatchParser().replace(e, this.createMatchReturnVal, this);
          },
          createMatchReturnVal: function createMatchReturnVal(t) {
            var r;
            if (this.replaceFn && (r = this.replaceFn.call(this, this, t)), "string" == typeof r) return r;
            if (r === !1) return t.getMatchedText();
            if (r instanceof e.HtmlTag) return r.toString();
            var n = this.getTagBuilder(),
            s = n.build(t);
            return s.toString();
          },
          getHtmlParser: function getHtmlParser() {
            var t = this.htmlParser;
            return t || (t = this.htmlParser = new e.htmlParser.HtmlParser()), t;
          },
          getMatchParser: function getMatchParser() {
            var t = this.matchParser;
            return t || (t = this.matchParser = new e.matchParser.MatchParser({
              urls: this.urls,
              email: this.email,
              twitter: this.twitter,
              stripPrefix: this.stripPrefix })),
            t;
          },
          getTagBuilder: function getTagBuilder() {
            var t = this.tagBuilder;
            return t || (t = this.tagBuilder = new e.AnchorTagBuilder({
              newWindow: this.newWindow,
              truncate: this.truncate,
              className: this.className })),
            t;
          } },
        e.link = function (t, r) {
          var n = new e(r);
          return n.link(t);
        }, e.match = {}, e.htmlParser = {}, e.matchParser = {}, e.Util = {
          abstractMethod: function abstractMethod() {
            throw "abstract";
          },
          assign: function assign(e, t) {
            for (var r in t) {t.hasOwnProperty(r) && (e[r] = t[r]);}

            return e;
          },
          extend: function extend(t, r) {
            var n = t.prototype,
            s = function s() {};

            s.prototype = n;
            var o;
            o = r.hasOwnProperty("constructor") ? r.constructor : function () {
              n.constructor.apply(this, arguments);
            };
            var i = o.prototype = new s();
            return i.constructor = o, i.superclass = n, delete r.constructor, e.Util.assign(i, r), o;
          },
          ellipsis: function ellipsis(e, t, r) {
            return e.length > t && (r = null == r ? ".." : r, e = e.substring(0, t - r.length) + r), e;
          },
          indexOf: function indexOf(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t);

            for (var r = 0, n = e.length; n > r; r++) {if (e[r] === t) return r;}

            return -1;
          },
          splitAndCapture: function splitAndCapture(e, t) {
            if (!t.global) throw new Error("`splitRegex` must have the 'g' flag set");

            for (var r, n = [], s = 0; r = t.exec(e);) {n.push(e.substring(s, r.index)), n.push(r[0]), s = r.index + r[0].length;}

            return n.push(e.substring(s)), n;
          } },
        e.HtmlTag = e.Util.extend(Object, {
          whitespaceRegex: /\s+/,
          constructor: function constructor(t) {
            e.Util.assign(this, t), this.innerHtml = this.innerHtml || this.innerHTML;
          },
          setTagName: function setTagName(e) {
            return this.tagName = e, this;
          },
          getTagName: function getTagName() {
            return this.tagName || "";
          },
          setAttr: function setAttr(e, t) {
            var r = this.getAttrs();
            return r[e] = t, this;
          },
          getAttr: function getAttr(e) {
            return this.getAttrs()[e];
          },
          setAttrs: function setAttrs(t) {
            var r = this.getAttrs();
            return e.Util.assign(r, t), this;
          },
          getAttrs: function getAttrs() {
            return this.attrs || (this.attrs = {});
          },
          setClass: function setClass(e) {
            return this.setAttr("class", e);
          },
          addClass: function addClass(t) {
            for (var r, n = this.getClass(), s = this.whitespaceRegex, o = e.Util.indexOf, i = n ? n.split(s) : [], l = t.split(s); r = l.shift();) {-1 === o(i, r) && i.push(r);}

            return this.getAttrs()["class"] = i.join(" "), this;
          },
          removeClass: function removeClass(t) {
            for (var r, n = this.getClass(), s = this.whitespaceRegex, o = e.Util.indexOf, i = n ? n.split(s) : [], l = t.split(s); i.length && (r = l.shift());) {
              var a = o(i, r);
              -1 !== a && i.splice(a, 1);
            }

            return this.getAttrs()["class"] = i.join(" "), this;
          },
          getClass: function getClass() {
            return this.getAttrs()["class"] || "";
          },
          hasClass: function hasClass(e) {
            return -1 !== (" " + this.getClass() + " ").indexOf(" " + e + " ");
          },
          setInnerHtml: function setInnerHtml(e) {
            return this.innerHtml = e, this;
          },
          getInnerHtml: function getInnerHtml() {
            return this.innerHtml || "";
          },
          toString: function toString() {
            var e = this.getTagName(),
            t = this.buildAttrsStr();
            return t = t ? " " + t : "", ["<", e, t, ">", this.getInnerHtml(), "</", e, ">"].join("");
          },
          buildAttrsStr: function buildAttrsStr() {
            if (!this.attrs) return "";
            var e = this.getAttrs(),
            t = [];

            for (var r in e) {e.hasOwnProperty(r) && t.push(r + '="' + e[r] + '"');}

            return t.join(" ");
          } }),
        e.AnchorTagBuilder = e.Util.extend(Object, {
          constructor: function constructor(t) {
            e.Util.assign(this, t);
          },
          build: function build(t) {
            var r = new e.HtmlTag({
              tagName: "a",
              attrs: this.createAttrs(t.getType(), t.getAnchorHref()),
              innerHtml: this.processAnchorText(t.getAnchorText()) });

            return r;
          },
          createAttrs: function createAttrs(e, t) {
            var r = {
              href: t },

            n = this.createCssClass(e);
            return n && (r["class"] = n), this.newWindow && (r.target = "_blank"), r;
          },
          createCssClass: function createCssClass(e) {
            var t = this.className;
            return t ? t + " " + t + "-" + e : "";
          },
          processAnchorText: function processAnchorText(e) {
            return e = this.doTruncate(e);
          },
          doTruncate: function doTruncate(t) {
            return e.Util.ellipsis(t, this.truncate || Number.POSITIVE_INFINITY);
          } }),
        e.htmlParser.HtmlParser = e.Util.extend(Object, {
          htmlRegex: function () {
            var e = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
            t = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
            r = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,
            n = t.source + "(?:\\s*=\\s*" + r.source + ")?";
            return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", n, "|", r.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + e.source + ")", "(?:", "\\s+", n, ")*", "\\s*/?", ">", ")"].join(""), "gi");
          }(),
          htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
          parse: function parse(e) {
            for (var t, r, n = this.htmlRegex, s = 0, o = []; null !== (t = n.exec(e));) {
              var i = t[0],
              l = t[1] || t[3],
              a = !!t[2],
              c = e.substring(s, t.index);
              c && (r = this.parseTextAndEntityNodes(c), o.push.apply(o, r)), o.push(this.createElementNode(i, l, a)), s = t.index + i.length;
            }

            if (s < e.length) {
              var u = e.substring(s);
              u && (r = this.parseTextAndEntityNodes(u), o.push.apply(o, r));
            }

            return o;
          },
          parseTextAndEntityNodes: function parseTextAndEntityNodes(t) {
            for (var r = [], n = e.Util.splitAndCapture(t, this.htmlCharacterEntitiesRegex), s = 0, o = n.length; o > s; s += 2) {
              var i = n[s],
              l = n[s + 1];
              i && r.push(this.createTextNode(i)), l && r.push(this.createEntityNode(l));
            }

            return r;
          },
          createElementNode: function createElementNode(t, r, n) {
            return new e.htmlParser.ElementNode({
              text: t,
              tagName: r.toLowerCase(),
              closing: n });

          },
          createEntityNode: function createEntityNode(t) {
            return new e.htmlParser.EntityNode({
              text: t });

          },
          createTextNode: function createTextNode(t) {
            return new e.htmlParser.TextNode({
              text: t });

          } }),
        e.htmlParser.HtmlNode = e.Util.extend(Object, {
          text: "",
          constructor: function constructor(t) {
            e.Util.assign(this, t);
          },
          getType: e.Util.abstractMethod,
          getText: function getText() {
            return this.text;
          } }),
        e.htmlParser.ElementNode = e.Util.extend(e.htmlParser.HtmlNode, {
          tagName: "",
          closing: !1,
          getType: function getType() {
            return "element";
          },
          getTagName: function getTagName() {
            return this.tagName;
          },
          isClosing: function isClosing() {
            return this.closing;
          } }),
        e.htmlParser.EntityNode = e.Util.extend(e.htmlParser.HtmlNode, {
          getType: function getType() {
            return "entity";
          } }),
        e.htmlParser.TextNode = e.Util.extend(e.htmlParser.HtmlNode, {
          getType: function getType() {
            return "text";
          } }),
        e.matchParser.MatchParser = e.Util.extend(Object, {
          urls: !0,
          email: !0,
          twitter: !0,
          stripPrefix: !0,
          matcherRegex: function () {
            var e = /(^|[^\w])@(\w{1,15})/,
            t = /(?:[\-;:&=\+\$,\w\.]+@)/,
            r = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
            n = /(?:www\.)/,
            s = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
            o = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
            i = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
            return new RegExp(["(", e.source, ")", "|", "(", t.source, s.source, o.source, ")", "|", "(", "(?:", "(", r.source, s.source, ")", "|", "(?:", "(.?//)?", n.source, s.source, ")", "|", "(?:", "(.?//)?", s.source, o.source, ")", ")", "(?:" + i.source + ")?", ")"].join(""), "gi");
          }(),
          charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
          constructor: function constructor(t) {
            e.Util.assign(this, t), this.matchValidator = new e.MatchValidator();
          },
          replace: function replace(e, t, r) {
            var n = this;
            return e.replace(this.matcherRegex, function (e, s, o, i, l, a, c, u, p) {
              var h = n.processCandidateMatch(e, s, o, i, l, a, c, u, p);

              if (h) {
                var f = t.call(r, h.match);
                return h.prefixStr + f + h.suffixStr;
              }

              return e;
            });
          },
          processCandidateMatch: function processCandidateMatch(t, r, n, s, o, i, l, a, c) {
            var u,
            p = a || c,
            h = "",
            f = "";
            if (r && !this.twitter || o && !this.email || i && !this.urls || !this.matchValidator.isValidMatch(i, l, p)) return null;
            if (this.matchHasUnbalancedClosingParen(t) && (t = t.substr(0, t.length - 1), f = ")"), o) u = new e.match.Email({
              matchedText: t,
              email: o });else
            if (r) n && (h = n, t = t.slice(1)), u = new e.match.Twitter({
              matchedText: t,
              twitterHandle: s });else
            {
              if (p) {
                var d = p.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                d && (h = d, t = t.slice(1));
              }

              u = new e.match.Url({
                matchedText: t,
                url: t,
                protocolUrlMatch: !!l,
                protocolRelativeMatch: !!p,
                stripPrefix: this.stripPrefix });

            }
            return {
              prefixStr: h,
              suffixStr: f,
              match: u };

          },
          matchHasUnbalancedClosingParen: function matchHasUnbalancedClosingParen(e) {
            var t = e.charAt(e.length - 1);

            if (")" === t) {
              var r = e.match(/\(/g),
              n = e.match(/\)/g),
              s = r && r.length || 0,
              o = n && n.length || 0;
              if (o > s) return !0;
            }

            return !1;
          } }),
        e.MatchValidator = e.Util.extend(Object, {
          invalidProtocolRelMatchRegex: /^[\w]\/\//,
          hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
          uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
          hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
          isValidMatch: function isValidMatch(e, t, r) {
            return t && !this.isValidUriScheme(t) || this.urlMatchDoesNotHaveProtocolOrDot(e, t) || this.urlMatchDoesNotHaveAtLeastOneWordChar(e, t) || this.isInvalidProtocolRelativeMatch(r) ? !1 : !0;
          },
          isValidUriScheme: function isValidUriScheme(e) {
            var t = e.match(this.uriSchemeRegex)[0].toLowerCase();
            return "javascript:" !== t && "vbscript:" !== t;
          },
          urlMatchDoesNotHaveProtocolOrDot: function urlMatchDoesNotHaveProtocolOrDot(e, t) {
            return !(!e || t && this.hasFullProtocolRegex.test(t) || -1 !== e.indexOf("."));
          },
          urlMatchDoesNotHaveAtLeastOneWordChar: function urlMatchDoesNotHaveAtLeastOneWordChar(e, t) {
            return e && t ? !this.hasWordCharAfterProtocolRegex.test(e) : !1;
          },
          isInvalidProtocolRelativeMatch: function isInvalidProtocolRelativeMatch(e) {
            return !!e && this.invalidProtocolRelMatchRegex.test(e);
          } }),
        e.match.Match = e.Util.extend(Object, {
          constructor: function constructor(t) {
            e.Util.assign(this, t);
          },
          getType: e.Util.abstractMethod,
          getMatchedText: function getMatchedText() {
            return this.matchedText;
          },
          getAnchorHref: e.Util.abstractMethod,
          getAnchorText: e.Util.abstractMethod }),
        e.match.Email = e.Util.extend(e.match.Match, {
          getType: function getType() {
            return "email";
          },
          getEmail: function getEmail() {
            return this.email;
          },
          getAnchorHref: function getAnchorHref() {
            return "mailto:" + this.email;
          },
          getAnchorText: function getAnchorText() {
            return this.email;
          } }),
        e.match.Twitter = e.Util.extend(e.match.Match, {
          getType: function getType() {
            return "twitter";
          },
          getTwitterHandle: function getTwitterHandle() {
            return this.twitterHandle;
          },
          getAnchorHref: function getAnchorHref() {
            return "https://twitter.com/" + this.twitterHandle;
          },
          getAnchorText: function getAnchorText() {
            return "@" + this.twitterHandle;
          } }),
        e.match.Url = e.Util.extend(e.match.Match, {
          urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
          protocolRelativeRegex: /^\/\//,
          protocolPrepended: !1,
          getType: function getType() {
            return "url";
          },
          getUrl: function getUrl() {
            var e = this.url;
            return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (e = this.url = "http://" + e, this.protocolPrepended = !0), e;
          },
          getAnchorHref: function getAnchorHref() {
            var e = this.getUrl();
            return e.replace(/&amp;/g, "&");
          },
          getAnchorText: function getAnchorText() {
            var e = this.getUrl();
            return this.protocolRelativeMatch && (e = this.stripProtocolRelativePrefix(e)), this.stripPrefix && (e = this.stripUrlPrefix(e)), e = this.removeTrailingSlash(e);
          },
          stripUrlPrefix: function stripUrlPrefix(e) {
            return e.replace(this.urlPrefixRegex, "");
          },
          stripProtocolRelativePrefix: function stripProtocolRelativePrefix(e) {
            return e.replace(this.protocolRelativeRegex, "");
          },
          removeTrailingSlash: function removeTrailingSlash(e) {
            return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e;
          } }),
        e;
      });
    }, {}],
    "/": [function (e, t, r) {
      "use strict";

      t.exports = e("./lib/");
    }, {
      "./lib/": 14 }] },

  {}, [])("/");
});

/***/ }),

/***/ 138:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/wemark/prism.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* PrismJS 1.22.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+batch+c+csharp+cpp+git+go+http+java+json+less+markup-templating+mongodb+php+powershell+python+jsx+tsx+ruby+sass+scss+sql+stylus+typescript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},Prism = function (u) {var c = /\blang(?:uage)?-([\w-]+)\b/i,n = 0,_ = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e(n) {return n instanceof M ? new M(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");}, type: function type(e) {return Object.prototype.toString.call(e).slice(8, -1);}, objId: function objId(e) {return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;}, clone: function t(e, r) {var a, n;switch (r = r || {}, _.util.type(e)) {case "Object":if (n = _.util.objId(e), r[n]) return r[n];for (var i in a = {}, r[n] = a, e) {e.hasOwnProperty(i) && (a[i] = t(e[i], r));}return a;case "Array":return n = _.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {a[n] = t(e, r);}), a);default:return e;}}, getLanguage: function getLanguage(e) {for (; e && !c.test(e.className);) {e = e.parentElement;}return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";}, currentScript: function currentScript() {if ("undefined" == typeof document) return null;if ("currentScript" in document) return document.currentScript;try {throw new Error();} catch (e) {var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];if (n) {var t = document.getElementsByTagName("script");for (var r in t) {if (t[r].src == n) return t[r];}}return null;}}, isActive: function isActive(e, n, t) {for (var r = "no-" + n; e;) {var a = e.classList;if (a.contains(n)) return !0;if (a.contains(r)) return !1;e = e.parentElement;}return !!t;} }, languages: { extend: function extend(e, n) {var t = _.util.clone(_.languages[e]);for (var r in n) {t[r] = n[r];}return t;}, insertBefore: function insertBefore(t, e, n, r) {var a = (r = r || _.languages)[t],i = {};for (var l in a) {if (a.hasOwnProperty(l)) {if (l == e) for (var o in n) {n.hasOwnProperty(o) && (i[o] = n[o]);}n.hasOwnProperty(l) || (i[l] = a[l]);}}var s = r[t];return r[t] = i, _.languages.DFS(_.languages, function (e, n) {n === s && e != t && (this[e] = i);}), i;}, DFS: function e(n, t, r, a) {a = a || {};var i = _.util.objId;for (var l in n) {if (n.hasOwnProperty(l)) {t.call(n, l, n[l], r || l);var o = n[l],s = _.util.type(o);"Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a));}}} }, plugins: {}, highlightAll: function highlightAll(e, n) {_.highlightAllUnder(document, e, n);}, highlightAllUnder: function highlightAllUnder(e, n, t) {var r = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };_.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), _.hooks.run("before-all-elements-highlight", r);for (var a, i = 0; a = r.elements[i++];) {_.highlightElement(a, !0 === n, r.callback);}}, highlightElement: function highlightElement(e, n, t) {var r = _.util.getLanguage(e),a = _.languages[r];e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;var i = e.parentElement;i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);var l = { element: e, language: r, grammar: a, code: e.textContent };function o(e) {l.highlightedCode = e, _.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, _.hooks.run("after-highlight", l), _.hooks.run("complete", l), t && t.call(l.element);}if (_.hooks.run("before-sanity-check", l), !l.code) return _.hooks.run("complete", l), void (t && t.call(l.element));if (_.hooks.run("before-highlight", l), l.grammar) {if (n && u.Worker) {var s = new Worker(_.filename);s.onmessage = function (e) {o(e.data);}, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 }));} else o(_.highlight(l.code, l.grammar, l.language));} else o(_.util.encode(l.code));}, highlight: function highlight(e, n, t) {var r = { code: e, grammar: n, language: t };return _.hooks.run("before-tokenize", r), r.tokens = _.tokenize(r.code, r.grammar), _.hooks.run("after-tokenize", r), M.stringify(_.util.encode(r.tokens), r.language);}, tokenize: function tokenize(e, n) {var t = n.rest;if (t) {for (var r in t) {n[r] = t[r];}delete n.rest;}var a = new i();return z(a, a.head, e), function e(n, t, r, a, i, l) {for (var o in r) {if (r.hasOwnProperty(o) && r[o]) {var s = r[o];s = Array.isArray(s) ? s : [s];for (var u = 0; u < s.length; ++u) {if (l && l.cause == o + "," + u) return;var c = s[u],g = c.inside,f = !!c.lookbehind,h = !!c.greedy,d = c.alias;if (h && !c.pattern.global) {var v = c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern = RegExp(c.pattern.source, v + "g");}for (var p = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {var k = m.value;if (t.length > n.length) return;if (!(k instanceof M)) {var b,x = 1;if (h) {if (!(b = W(p, y, n, f))) break;var w = b.index,A = b.index + b[0].length,P = y;for (P += m.value.length; P <= w;) {m = m.next, P += m.value.length;}if (P -= m.value.length, y = P, m.value instanceof M) continue;for (var S = m; S !== t.tail && (P < A || "string" == typeof S.value); S = S.next) {x++, P += S.value.length;}x--, k = n.slice(y, P), b.index -= y;} else if (!(b = W(p, 0, k, f))) continue;var w = b.index,E = b[0],O = k.slice(0, w),L = k.slice(w + E.length),N = y + k.length;l && N > l.reach && (l.reach = N);var j = m.prev;O && (j = z(t, j, O), y += O.length), I(t, j, x);var C = new M(o, g ? _.tokenize(E, g) : E, d, E);m = z(t, j, C), L && z(t, m, L), 1 < x && e(n, t, r, m.prev, y, { cause: o + "," + u, reach: N });}}}}}}(e, a, n, a.head, 0), function (e) {var n = [],t = e.head.next;for (; t !== e.tail;) {n.push(t.value), t = t.next;}return n;}(a);}, hooks: { all: {}, add: function add(e, n) {var t = _.hooks.all;t[e] = t[e] || [], t[e].push(n);}, run: function run(e, n) {var t = _.hooks.all[e];if (t && t.length) for (var r, a = 0; r = t[a++];) {r(n);}} }, Token: M };function M(e, n, t, r) {this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;}function W(e, n, t, r) {e.lastIndex = n;var a = e.exec(t);if (a && r && a[1]) {var i = a[1].length;a.index += i, a[0] = a[0].slice(i);}return a;}function i() {var e = { value: null, prev: null, next: null },n = { value: null, prev: e, next: null };e.next = n, this.head = e, this.tail = n, this.length = 0;}function z(e, n, t) {var r = n.next,a = { value: t, prev: n, next: r };return n.next = a, r.prev = a, e.length++, a;}function I(e, n, t) {for (var r = n.next, a = 0; a < t && r !== e.tail; a++) {r = r.next;}(n.next = r).prev = n, e.length -= a;}if (u.Prism = _, M.stringify = function n(e, t) {if ("string" == typeof e) return e;if (Array.isArray(e)) {var r = "";return e.forEach(function (e) {r += n(e, t);}), r;}var a = { type: e.type, content: n(e.content, t), tag: "span", classes: ["token", e.type], attributes: {}, language: t },i = e.alias;i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), _.hooks.run("wrap", a);var l = "";for (var o in a.attributes) {l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';}return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";}, !u.document) return u.addEventListener && (_.disableWorkerMessageHandler || u.addEventListener("message", function (e) {var n = JSON.parse(e.data),t = n.language,r = n.code,a = n.immediateClose;u.postMessage(_.highlight(r, _.languages[t], t)), a && u.close();}, !1)), _;var e = _.util.currentScript();function t() {_.manual || _.highlightAll();}if (e && (_.filename = e.src, e.hasAttribute("data-manual") && (_.manual = !0)), !_.manual) {var r = document.readyState;"loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16);}return _;}(_self); true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {"entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function value(a, e) {var s = {};s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };var t = {};t[a] = { pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {return a;}), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", t);} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function (e) {var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"), string: { pattern: t, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css;var s = e.languages.markup;s && (s.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i, lookbehind: !0, inside: { "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { style: { pattern: /(["'])[\s\S]+(?=["']$)/, lookbehind: !0, alias: "language-css", inside: e.languages.css }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, "attr-name": /^style/i } } }, s.tag));}(Prism);
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: Prism.languages.regex }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/ } }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
!function (e) {var r = /%%?[~:\w]+%?|!\S+!/,t = { pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im, alias: "attr-name", inside: { punctuation: /:/ } },n = /"(?:[\\"]"|[^"])*"(?!")/,i = /(?:\b|-)\d+\b/;Prism.languages.batch = { comment: [/^::.*/m, { pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im, lookbehind: !0 }], label: { pattern: /^:.*/m, alias: "property" }, command: [{ pattern: /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im, lookbehind: !0, inside: { keyword: /^for\b|\b(?:in|do)\b/i, string: n, parameter: t, variable: r, number: i, punctuation: /[()',]/ } }, { pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|[^\s"]\S*)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|[^\s"]\S*))/im, lookbehind: !0, inside: { keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i, string: n, parameter: t, variable: r, number: i, operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i } }, { pattern: /((?:^|[&()])[ \t]*)else\b/im, lookbehind: !0, inside: { keyword: /^else\b/i } }, { pattern: /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im, lookbehind: !0, inside: { keyword: /^set\b/i, string: n, parameter: t, variable: [r, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/], number: i, operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/, punctuation: /[()',]/ } }, { pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/im, lookbehind: !0, inside: { keyword: /^\w+\b/i, string: n, parameter: t, label: { pattern: /(^\s*):\S+/m, lookbehind: !0, alias: "property" }, variable: r, number: i, operator: /\^/ } }], operator: /[&@]/, punctuation: /[()']/ };}();
Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/, function: /[a-z_]\w*(?=\s*\()/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/, number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, Prism.languages.c.string], comment: Prism.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c } } }, constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/ }), delete Prism.languages.c.boolean;
!function (s) {function a(e, s) {return e.replace(/<<(\d+)>>/g, function (e, n) {return "(?:" + s[+n] + ")";});}function t(e, n, s) {return RegExp(a(e, n), s || "");}function e(e, n) {for (var s = 0; s < n; s++) {e = e.replace(/<<self>>/g, function () {return "(?:" + e + ")";});}return e.replace(/<<self>>/g, "[^\\s\\S]");}var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i = "class enum interface struct",r = "add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e) {return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";}var d = l(i),p = RegExp(l(n + " " + i + " " + r + " " + o)),c = l(i + " " + r + " " + o),u = l(n + " " + i + " " + o),g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),b = e("\\((?:[^()]|<<self>>)*\\)", 2),h = "@?\\b[A-Za-z_]\\w*\\b",f = a("<<0>>(?:\\s*<<1>>)?", [h, g]),m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),k = "\\[\\s*(?:,\\s*)*\\]",y = a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),w = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [a("\\(<<0>>+(?:,<<0>>+)+\\)", [a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k])]), m, k]),v = { keyword: p, punctuation: /[<>()?,.:[\]]/ },x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",$ = '"(?:\\\\.|[^\\\\"\r\n])*"';s.languages.csharp = s.languages.extend("clike", { string: [{ pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']), lookbehind: !0, greedy: !0 }, { pattern: t("(^|[^@$\\\\])<<0>>", [$]), lookbehind: !0, greedy: !0 }, { pattern: RegExp(x), greedy: !0, alias: "character" }], "class-name": [{ pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]), lookbehind: !0, inside: v }, { pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, w]), lookbehind: !0, inside: v }, { pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: !0 }, { pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]), lookbehind: !0, inside: v }, { pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]), lookbehind: !0, inside: v }, { pattern: t("(\\bwhere\\s+)<<0>>", [h]), lookbehind: !0 }, { pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]), lookbehind: !0, inside: v }, { pattern: t("\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [w, u, h]), inside: v }], keyword: p, number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i, operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), s.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }), s.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]), lookbehind: !0, alias: "punctuation" } }), s.languages.insertBefore("csharp", "class-name", { namespace: { pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]), lookbehind: !0, inside: { punctuation: /\./ } }, "type-expression": { pattern: t("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*)(?:[^()\\s]|\\s(?!\\s*\\))|<<0>>)*(?=\\s*\\))", [b]), lookbehind: !0, alias: "class-name", inside: v }, "return-type": { pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [w, m]), inside: v, alias: "class-name" }, "constructor-invocation": { pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [w]), lookbehind: !0, inside: v, alias: "class-name" }, "generic-method": { pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]), inside: { function: t("^<<0>>", [h]), generic: { pattern: RegExp(g), alias: "class-name", inside: v } } }, "type-list": { pattern: t("\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, w, p.source]), lookbehind: !0, inside: { keyword: p, "class-name": { pattern: RegExp(w), greedy: !0, inside: v }, punctuation: /,/ } }, preprocessor: { pattern: /(^\s*)#.*/m, lookbehind: !0, alias: "property", inside: { directive: { pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/, lookbehind: !0, alias: "keyword" } } } });var _ = $ + "|" + x,B = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [_]),E = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),R = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",P = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, E]);s.languages.insertBefore("csharp", "class-name", { attribute: { pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [R, P]), lookbehind: !0, greedy: !0, inside: { target: { pattern: t("^<<0>>(?=\\s*:)", [R]), alias: "keyword" }, "attribute-arguments": { pattern: t("\\(<<0>>*\\)", [E]), inside: s.languages.csharp }, "class-name": { pattern: RegExp(m), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } });var z = ":[^}\r\n]+",S = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),j = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [S, z]),A = e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [_]), 2),F = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [A, z]);function U(e, n) {return { interpolation: { pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [e]), lookbehind: !0, inside: { "format-string": { pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n, z]), lookbehind: !0, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: s.languages.csharp } } }, string: /[\s\S]+/ };}s.languages.insertBefore("csharp", "string", { "interpolation-string": [{ pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [j]), lookbehind: !0, greedy: !0, inside: U(j, S) }, { pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [F]), lookbehind: !0, greedy: !0, inside: U(F, A) }] });}(Prism), Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;
!function (e) {var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function () {return t.source;})), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: t, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i, greedy: !0 }, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:true|false)\b/ }), e.languages.insertBefore("cpp", "string", { "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)(?:[^;{}"'])+?(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "operator", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);}(Prism);
Prism.languages.git = { comment: /^#.*/m, deleted: /^[-–].*/m, inserted: /^\+.*/m, string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m, command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } }, coord: /^@@.*@@$/m, "commit-sha1": /^commit \w{40}$/m };
Prism.languages.go = Prism.languages.extend("clike", { keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/, boolean: /\b(?:_|iota|nil|true|false)\b/, operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i, string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 } }), delete Prism.languages.go["class-name"];
!function (t) {t.languages.http = { "request-line": { pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m, inside: { property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/, "attr-name": /:\w+/ } }, "response-status": { pattern: /^HTTP\/1.[01] \d+.*/m, inside: { property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 } } }, "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" } };var a,e,n,i = t.languages,p = { "application/javascript": i.javascript, "application/json": i.json || i.javascript, "application/xml": i.xml, "text/xml": i.xml, "text/html": i.html, "text/css": i.css },s = { "application/json": !0, "application/xml": !0 };for (var r in p) {if (p[r]) {a = a || {};var T = s[r] ? (void 0, n = (e = r).replace(/^[a-z]+\//, ""), "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + n + "(?![+\\w.-]))") : r;a[r.replace(/\//g, "-")] = { pattern: RegExp("(content-type:\\s*" + T + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"), lookbehind: !0, inside: p[r] };}}a && t.languages.insertBefore("http", "header-name", a);}(Prism);
!function (e) {var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",a = { pattern: RegExp(n + "[A-Z](?:\\w*[a-z]\\w*)?\\b"), lookbehind: !0, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ } };e.languages.java = e.languages.extend("clike", { "class-name": [a, { pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])"), lookbehind: !0, inside: a.inside }], keyword: t, function: [e.languages.clike.function, { pattern: /(\:\:\s*)[a-z_]\w*/, lookbehind: !0 }], number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: !0 } }), e.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: !0, alias: "string" } }), e.languages.insertBefore("java", "class-name", { annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: !0, alias: "punctuation" }, generics: { pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/, inside: { "class-name": a, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/ } }, namespace: { pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function () {return t.source;})), lookbehind: !0, inside: { punctuation: /\./ } } });}(Prism);
Prism.languages.json = { property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 }, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism.languages.webmanifest = Prism.languages.json;
Prism.languages.less = Prism.languages.extend("css", { comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }], atrule: { pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/, inside: { punctuation: /[:()]/ } }, selector: { pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/, inside: { variable: /@+[\w-]+/ } }, property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i, operator: /[+\-*\/]/ }), Prism.languages.insertBefore("less", "property", { variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/], "mixin-usage": { pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/, lookbehind: !0, alias: "function" } });
!function (h) {function v(e, n) {return "___" + e.toUpperCase() + n + "___";}Object.defineProperties(h.languages["markup-templating"] = {}, { buildPlaceholders: { value: function value(a, r, e, o) {if (a.language === r) {var c = a.tokenStack = [];a.code = a.code.replace(e, function (e) {if ("function" == typeof o && !o(e)) return e;for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));) {++t;}return c[t] = e, n;}), a.grammar = h.languages.markup;}} }, tokenizePlaceholders: { value: function value(p, k) {if (p.language === k && p.tokenStack) {p.grammar = h.languages[k];var m = 0,d = Object.keys(p.tokenStack);!function e(n) {for (var t = 0; t < n.length && !(m >= d.length); t++) {var a = n[t];if ("string" == typeof a || a.content && "string" == typeof a.content) {var r = d[m],o = p.tokenStack[r],c = "string" == typeof a ? a : a.content,i = v(k, r),u = c.indexOf(i);if (-1 < u) {++m;var g = c.substring(0, u),l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),s = c.substring(u + i.length),f = [];g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;}} else a.content && e(a.content);}return n;}(p.tokens);}} } });}(Prism);
!function ($) {var e = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$function", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"],t = "(?:" + (e = e.map(function ($) {return $.replace("$", "\\$");})).join("|") + ")\\b";$.languages.mongodb = $.languages.extend("javascript", {}), $.languages.insertBefore("mongodb", "string", { property: { pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)(?=\s*:)/, greedy: !0, inside: { keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$") } } }), $.languages.mongodb.string.inside = { url: { pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i, greedy: !0 }, entity: { pattern: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/, greedy: !0 } }, $.languages.insertBefore("mongodb", "constant", { builtin: { pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"), alias: "keyword" } });}(Prism);
!function (a) {var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t = [{ pattern: /\b(?:false|true)\b/i, alias: "boolean" }, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/, /\b(?:null)\b/i],i = /\b0b[01]+\b|\b0x[\da-f]+\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,s = /[{}\[\](),:;]/;a.languages.php = { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" }, comment: e, variable: /\$+(?:\w+\b|(?={))/i, package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: !0, inside: { punctuation: /\\/ } }, keyword: [{ pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i, alias: "type-casting", greedy: !0, lookbehind: !0 }, { pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 }, { pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 }, { pattern: /(\)\s*:\s*\??\s*)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i, alias: "return-type", greedy: !0, lookbehind: !0 }, { pattern: /(\)\s*:\s*\??\s*[a-z0-9_|]\|\s*)(?:null|false)\b/i, alias: "return-type", greedy: !0, lookbehind: !0 }, { pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i, alias: "type-declaration", greedy: !0 }, { pattern: /(\|\s*)(?:null|false)\b/i, alias: "type-declaration", greedy: !0, lookbehind: !0 }, { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: !0 }, /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i], "argument-name": /\b[a-z_]\w*(?=\s*:(?!:))/i, "class-name": [{ pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 }, { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 }, { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 }, { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } }, { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: !0, inside: { punctuation: /\\/ } }, { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: "class-name-fully-qualified", greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: !0 }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: !0, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: !0 }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: !0, inside: { punctuation: /\\/ } }, { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 }, { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } }, { pattern: /(\)\s*:\s*\??\s*)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: !0, lookbehind: !0 }, { pattern: /(\)\s*:\s*\??\s*)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } }], constant: t, function: /\w+\s*(?=\()/, property: { pattern: /(->)[\w]+/, lookbehind: !0 }, number: i, operator: n, punctuation: s };var l = { pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/, lookbehind: !0, inside: a.languages.php },r = [{ pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: !0, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, alias: "heredoc-string", greedy: !0, inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: l } }, { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: !0 }, { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: !0, inside: { interpolation: l } }];a.languages.insertBefore("php", "variable", { string: r }), a.languages.insertBefore("php", "variable", { attribute: { pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im, greedy: !0, inside: { "attribute-content": { pattern: /^(#\[)[\s\S]+(?=]$)/, lookbehind: !0, inside: { comment: e, string: r, "attribute-class-name": [{ pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: !0, lookbehind: !0 }, { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } }], constant: t, number: i, operator: n, punctuation: s } }, delimiter: { pattern: /^#\[|]$/, alias: "punctuation" } } } }), a.hooks.add("before-tokenize", function (e) {if (/<\?/.test(e.code)) {a.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi);}}), a.hooks.add("after-tokenize", function (e) {a.languages["markup-templating"].tokenizePlaceholders(e, "php");});}(Prism);
!function (e) {var i = Prism.languages.powershell = { comment: [{ pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 }, { pattern: /(^|[^`])#.*/, lookbehind: !0 }], string: [{ pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: { function: { pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/, lookbehind: !0, inside: {} } } }, { pattern: /'(?:[^']|'')*'/, greedy: !0 }], namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i, boolean: /\$(?:true|false)\b/i, variable: /\$\w+\b/, function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i], keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i, operator: { pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i, lookbehind: !0 }, punctuation: /[|{}[\];(),.]/ },r = i.string[0].inside;r.boolean = i.boolean, r.variable = i.variable, r.function.inside = i;}();
Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 }, "string-interpolation": { pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^\s*)@\w+(?:\.\w+)*/im, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:True|False|None)\b/, number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
!function (i) {var t = i.util.clone(i.languages.javascript);i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore("inside", "attr-name", { spread: { pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/, inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ } } }, i.languages.jsx.tag), i.languages.insertBefore("inside", "attr-value", { script: { pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i, inside: { "script-punctuation": { pattern: /^=(?={)/, alias: "punctuation" }, rest: i.languages.jsx }, alias: "language-javascript" } }, i.languages.jsx.tag);var o = function o(t) {return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : "";},p = function p(t) {for (var n = [], e = 0; e < t.length; e++) {var a = t[e],s = !1;if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({ tagName: o(a.content[0].content[1]), openedBraces: 0 }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {var g = o(a);e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token("plain-text", g, null, g);}a.content && "string" != typeof a.content && p(a.content);}};i.hooks.add("after-tokenize", function (t) {"jsx" !== t.language && "tsx" !== t.language || p(t.tokens);});}(Prism);
!function (e) {e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }), delete e.languages.typescript.parameter;var n = e.languages.extend("typescript", {});delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { "generic-function": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;}(Prism);
!function (a) {var e = a.util.clone(a.languages.typescript);a.languages.tsx = a.languages.extend("jsx", e);var t = a.languages.tsx.tag;t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;}(Prism);
!function (e) {e.languages.ruby = e.languages.extend("clike", { comment: [/#.*/, { pattern: /^=begin\s[\s\S]*?^=end/m, greedy: !0 }], "class-name": { pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/ });var n = { pattern: /#\{[^}]+\}/, inside: { delimiter: { pattern: /^#\{|\}$/, alias: "tag" }, rest: e.languages.ruby } };delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", { regex: [{ pattern: RegExp("%r(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}", "\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}", "<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|") + ")"), greedy: !0, inside: { interpolation: n } }, { pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 }], variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/, symbol: { pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: !0 }, "method-definition": { pattern: /(\bdef\s+)[\w.]+/, lookbehind: !0, inside: { function: /\w+$/, rest: e.languages.ruby } } }), e.languages.insertBefore("ruby", "number", { builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/, constant: /\b[A-Z]\w*(?:[?!]|\b)/ }), e.languages.ruby.string = [{ pattern: RegExp("%[qQiIwWxs]?(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")"), greedy: !0, inside: { interpolation: n } }, { pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/, greedy: !0, inside: { interpolation: n } }], e.languages.rb = e.languages.ruby;}(Prism);
!function (e) {e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } }), e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule;var t = /\$[-\w]+|#\{\$[-\w]+\}/,a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }];e.languages.insertBefore("sass", "property", { "variable-line": { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: a } }, "property-line": { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: a, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/, lookbehind: !0 } });}(Prism);
Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)?url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, property: { pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { "module-modifier": { pattern: /\b(?:as|with|show|hide)\b/i, alias: "keyword" }, placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" }, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:TRUE|FALSE|NULL)\b/i, number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ };
!function (e) {var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },r = { pattern: /(^|[^\w.-])-?\d*\.?\d+/, lookbehind: !0 },i = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 }, string: { pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: !0 }, interpolation: null, func: null, important: /\B!(?:important|optional)\b/i, keyword: { pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/, lookbehind: !0 }, hexcode: /#[\da-f]{3,6}/i, color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, { pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: r, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, boolean: /\b(?:true|false)\b/, operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/], number: r, punctuation: /[{}()\[\];:,]/ };i.interpolation = { pattern: /\{[^\r\n}:]+\}/, alias: "variable", inside: { delimiter: { pattern: /^{|}$/, alias: "punctuation" }, rest: i } }, i.func = { pattern: /[\w-]+\([^)]*\).*/, inside: { function: /^[^(]+/, rest: i } }, e.languages.stylus = { "atrule-declaration": { pattern: /(^\s*)@.+/m, lookbehind: !0, inside: { atrule: /^@[\w-]+/, rest: i } }, "variable-declaration": { pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m, lookbehind: !0, inside: { variable: /^\S+/, rest: i } }, statement: { pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m, lookbehind: !0, inside: { keyword: /^\S+/, rest: i } }, "property-declaration": { pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m, lookbehind: !0, inside: { property: { pattern: /^[^\s:]+/, inside: { interpolation: i.interpolation } }, rest: i } }, selector: { pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m, lookbehind: !0, inside: { interpolation: i.interpolation, comment: i.comment, punctuation: /[{},]/ } }, func: i.func, string: i.string, comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0, greedy: !0 }, interpolation: i.interpolation, punctuation: /[{}()\[\];:.]/ };}(Prism);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ 3)))

/***/ }),

/***/ 19:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/utils/api.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * 即刻学术小程序开源版 v1.2.2
 * Author: 即刻学术
 * Help document: https://ijkxs.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 ijkxs.com All rights reserved.
 */
var Config = __webpack_require__(/*! ./config.js */ 20);

function makeURL(module, action) {
  if (Config.JQ_DEBUG) {
    return "http://".concat(Config.DEBUG_DOMAIN, "/onetypecho/v1/").concat(module, "/").concat(action);
  } else {
    return "https://".concat(Config.JQ_DOMAIN, "/onetypecho/v1/").concat(module, "/").concat(action);
  }
}

function makeRes(res, name) {
  if (Config.JQ_DEBUG) {
    return "http://".concat(Config.DEBUG_DOMAIN, "/usr/plugins/OneTypecho/assets/").concat(res, "/").concat(name);
  } else {
    return "https://".concat(Config.JQ_DOMAIN, "/usr/plugins/OneTypecho/assets/").concat(res, "/").concat(name);
  }
}

module.exports = {
  /**
                    * 获取首页配置
                    */
  JIANGQIE_SETTING_HOME: makeURL('setting', 'home'),

  /**
                                                      * 获取热门配置
                                                      */
  JIANGQIE_SETTING_HOT: makeURL('setting', 'hot'),

  /**
                                                    * 获取分类配置
                                                    */
  JIANGQIE_SETTING_CATEGORY: makeURL('setting', 'category'),

  /**
                                                              * 获取我的配置
                                                              */
  JIANGQIE_SETTING_UCENTER: makeURL('setting', 'ucenter'),

  /**
                                                            * 获取分类 只获取一级分类
                                                            */
  JIANGQIE_CATEGORY_INDEX: makeURL('category', 'index'),

  /**
                                                          * 获取最新文章列表
                                                          */
  JIANGQIE_POSTS_LAST: makeURL('posts', 'last'),

  /**
                                                  * 获取某个分类下文章
                                                  */
  JIANGQIE_POSTS_CATEGORY: makeURL('posts', 'category'),

  /**
                                                          * 获取某个TAG下文章
                                                          */
  JIANGQIE_POSTS_TAG: makeURL('posts', 'tag'),

  /**
                                                * 获取热门文章列表
                                                */
  JIANGQIE_POSTS_HOT: makeURL('posts', 'hot'),

  /**
                                                * 搜索文章
                                                */
  JIANGQIE_POSTS_SEARCH: makeURL('posts', 'search'),

  /**
                                                      * 热门搜索
                                                      */
  JIANGQIE_POSTS_SEARCH_HOT: makeURL('posts', 'search/hot'),

  /**
                                                              * [我的]文章
                                                              */
  JIANGQIE_POSTS_MY: makeURL('posts', 'my'),

  /**
                                              * 获取文章详情
                                              */
  JIANGQIE_POST_DETAIL: makeURL('posts', 'detail'),

  /**
                                                     * 获取页面详情
                                                     */
  JIANGQIE_POST_PAGE: makeURL('posts', 'page'),

  /**
                                                 * 获取小程序码
                                                 */
  JIANGQIE_POST_WXACODE: makeURL('posts', 'wxacode'),

  /**
                                                       * 用户登录
                                                       */
  JIANGQIE_USER_LOGIN: makeURL('user', 'login'),

  /**
                                                  * 用户数据
                                                  */
  JIANGQIE_USER_INDEX: makeURL('user', 'index'),

  /**
                                                  * 用户 点赞文章
                                                  */
  JIANGQIE_USER_LIKE: makeURL('user', 'like'),

  /**
                                                * 用户 收藏文章
                                                */
  JIANGQIE_USER_FAVORITE: makeURL('user', 'favorite'),

  /**
                                                        * 文章评论
                                                        */
  JIANGQIE_COMMENT_INDEX: makeURL('comment', 'index'),

  /**
                                                        * 添加评论
                                                        */
  JIANGQIE_COMMENT_ADD: makeURL('comment', 'add'),

  /**
                                                    * 删除评论
                                                    */
  JIANGQIE_COMMENT_DELETE: makeURL('comment', 'delete'),
  JIANGQIE_BG_INDEX: makeRes('images', 'id_bg.png'),
  JIANGQIE_BG_TIMELINE: makeRes('images', 'timeline_bg.png'),
  JIANGQIE_BG_MY: makeRes('images', 'my_bg.png'),
  JIANGQIE_BG_CATEGORY: makeRes('images', 'cat_bg.png'),
  JIANGQIE_BG_HOT: makeRes('images', 'hot_bg.png'),
  JIANGQIE_CAT_COVER: makeRes('images', 'cat_cover.png') };

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"即刻学术","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"即刻学术","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"即刻学术","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"即刻学术","VUE_APP_PLATFORM":"mp-qq","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/utils/config.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * 即刻学术小程序开源版 v1.2.2
 * Author: 即刻学术
 * Help document: https://ijkxs.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 ijkxs.com All rights reserved.
 */
module.exports = {
  //你的域名
  JQ_DOMAIN: 'p.conzhu.org',
  DEBUG_DOMAIN: 'p.conzhu.org',
  JQ_DEBUG: true };

/***/ }),

/***/ 21:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/utils/rest.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/*
 * 即刻学术小程序开源版 v1.2.2
 * Author: 即刻学术
 * Help document: https://ijkxs.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 ijkxs.com All rights reserved.
 */
var Auth = __webpack_require__(/*! ./auth.js */ 8);
/**
                                  * request封装
                                  */


function request(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
  return new Promise(function (resolve, reject) {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1].$vm;
    currentPage.setData({
      loading: true });
    // wx.showLoading();

    data.token = Auth.getToken();
    data.t = new Date().getTime();
    data.r = Math.floor(Math.random() * 10000);
    uni.request({
      url: url,
      data: data,
      method: method,
      success: function success(res) {
        // wx.hideLoading();
        currentPage.setData({
          loading: false });


        if (res.statusCode != 200) {
          reject(res.errMsg);
          return;
        }

        if (res.data.code == -1) {
          currentPage.setData({
            showPopLogin: true });

          return;
        }


        resolve(res.data);
        return;
      },
      fail: function fail(err) {
        // wx.hideLoading();
        currentPage.setData({
          loading: false });

        reject(err);
      } });

  });
}
/**
   * get请求
   */


function get(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return request(url, data, 'GET');
}
/**
   * post请求
   */


function post(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return request(url, data, 'POST');
}

module.exports = {
  get: get,
  post: post };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/pages.json ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 46:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/utils/util.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/*
 * 即刻学术小程序开源版 v1.2.2
 * Author: 即刻学术
 * Help document: https://ijkxs.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 ijkxs.com All rights reserved.
 */
function navigateBack() {
  uni.navigateBack({
    delta: 1,
    fail: function fail(res) {
      uni.switchTab({
        url: '/pages/index/index' });

    } });

}

module.exports = {
  navigateBack: navigateBack };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 71:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/components/poster/poster/poster.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var defaultOptions = {
  selector: '#poster' };


function Poster() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var that = arguments.length > 1 ? arguments[1] : undefined;
  options = _objectSpread(_objectSpread({}, defaultOptions),
  options);

  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1].$vm;
  if (that) ctx = that;
  var poster = ctx.selectComponent(options.selector).$vm;
  delete options.selector;
  return poster;
}

;

Poster.create = function () {var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var that = arguments.length > 1 ? arguments[1] : undefined;
  var poster = Poster({}, that);

  if (!poster) {
    console.error('请设置组件的id="poster"!!!');
  } else {
    return Poster({}, that).onCreate(reset);
  }
};

module.exports = Poster;

/***/ }),

/***/ 8:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/utils/auth.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/*
 * 即刻学术小程序开源版 v1.2.2
 * Author: 即刻学术
 * Help document: https://ijkxs.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 ijkxs.com All rights reserved.
 */
var Constant = __webpack_require__(/*! ./constants.js */ 9); //获取TOKEN


function getToken() {
  var user = uni.getStorageSync(Constant.JQ_USER_KEY);

  if (!user) {
    return false;
  }

  return user.token;
} //注销


function logout() {
  uni.setStorageSync(Constant.JQ_USER_KEY, false);
}

module.exports = {
  //检查登录态
  checkSession: function checkSession() {
    uni.checkSession({
      fail: function fail() {
        logout();
      } });


  },
  logout: logout,
  //获取TOKEN
  getToken: getToken,
  //是否已登录
  isLogin: getToken,
  //获取用户信息
  getWXUser: function getWXUser() {
    return new Promise(function (resolve, reject) {
      uni.login({
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        } });

    }).then(function (data) {
      return new Promise(function (resolve, reject) {
        uni.getUserInfo({
          success: function success(res) {
            res.code = data.code;
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          } });

      });
    });
  },
  setUser: function setUser(user) {
    uni.setStorageSync(Constant.JQ_USER_KEY, user);
  },
  getUser: function getUser() {
    return uni.getStorageSync(Constant.JQ_USER_KEY);
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 9:
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Share101/Desktop/UniTypecho-1.2.0/WeChat-Typecho-master/OneTypecho-uni-v1/client_main_uni/utils/constants.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * 即刻学术小程序开源版 v1.2.2
 * Author: 即刻学术
 * Help document: https://ijkxs.com/ky
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 ijkxs.com All rights reserved.
 */
module.exports = {
  JQ_VERSION: '1.2.2',
  //分页 每页 数量 需要与服务器一致
  JQ_PER_PAGE_COUNT: 10,
  //搜索词 做多缓存个数
  JQ_SEARCH_MAX_COUNT: 10,
  //搜索词 缓存 key
  JQ_SEARCH_KEY: 'jiangqie_search',
  //用户信息
  JQ_USER_KEY: 'jiangqie_user' };

/***/ })

}]);