module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.sass */ "./styles.sass");
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\user\\Downloads\\marychew97.github.io-weather\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





class Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      country: '',
      lat: null,
      long: null,
      date: '',
      temp: 0,
      weather: '',
      image: null,
      hourForecast: [],
      weekForecast: [],
      monthAvg: []
    };
    this.getLocationWeather = this.getLocationWeather.bind(this);
  }

  componentDidMount() {
    this.getLocationWeather();
  }

  async getLocationWeather() {
    await navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.setState({
        lat: lat,
        long: long
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bb8842d60516f2656d00cdbc9f999293`).then(res => {
        const result = res.data;
        console.log(result); //in kelvin
        // this.getTemp(result.main.temp)

        this.setState({
          location: result.name,
          country: result.sys.country,
          weather: result.weather[0].main,
          date: this.getDate(result.dt)
        });
      });
      this.getWeekForecast(lat, long);
      this.getHourForecast(lat, long);
    });
    console.log(this.state);
  }

  getWeekForecast(lat, long) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=${lat},${long}&format=json&num_of_days=8`).then(res => {
      const result = res.data.data;
      console.log(result);
      this.setState({
        temp: result.current_condition[0].temp_C,
        image: result.current_condition[0].weatherIconUrl[0].value,
        monthAvg: result.ClimateAverages[0].month
      });
      result.weather.map(data => {
        var day = new Date(data.date);
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        day = days[day.getDay()];
        this.setState({
          weekForecast: [...this.state.weekForecast, {
            day: day,
            date: data.date,
            maxTemp: data.maxtempC,
            hour: {
              time: data.hourly
            }
          }]
        });
      });
    });
  }

  getHourForecast(lat, long) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=${lat},${long}&format=json&num_of_days=7`).then(res => {
      const result = res.data.data;
      result.weather[0].hourly.map(data => {
        this.setState({
          hourForecast: [...this.state.hourForecast, {
            time: data.time,
            temp: data.tempC,
            weather: data.weatherDesc[0].value,
            image: data.weatherIconUrl[0].value
          }]
        });
      });
    });
  }

  getDate(dt) {
    var tf = new Date(dt * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day = days[tf.getDay()];
    var date = tf.getDate();
    var month = months[tf.getMonth()];
    var year = tf.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  render() {
    var hours = ['0000', '0300', '0600', '0900', '1200', '1500', '1800', '2100'];
    console.log(this.state);
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      className: "columns is-desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("div", {
      className: "column is-three-fifths is-offset-one-fifth",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("div", {
      className: "card-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Weather Forecast"), __jsx("h1", {
      className: "title is-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, this.state.location, ", ", this.state.country), __jsx("p", {
      className: "subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "(", this.state.lat, ", ", this.state.long, ")"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), __jsx("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, this.state.date), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), __jsx("p", {
      className: "subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, this.state.temp, "\u2103", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), this.state.weather, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx("img", {
      src: this.state.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }))), __jsx("div", {
      className: "card-hour",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("p", {
      className: "subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Hourly Weather Forecast"), __jsx("div", {
      className: "table-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("table", {
      className: "table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, hours.map(hour => __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, hour)))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, this.state.hourForecast.map(data => __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, data.temp, "\u2103", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), __jsx("img", {
      src: data.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), data.weather))))))), __jsx("div", {
      className: "card-week",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("p", {
      className: "subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Weekly Weather Forecast"), __jsx("div", {
      className: "table-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx("table", {
      className: "table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), hours.map(hour => __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, hour)))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, this.state.weekForecast.map(day => __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, day.day), "\xA0\xA0", day.date), day.hour.time.map(data => __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, data.tempC, "\u2103", __jsx("img", {
      src: data.weatherIconUrl[0].value,
      alt: "weather icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }))))))))), __jsx("div", {
      className: "card-month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, __jsx("p", {
      className: "subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "Average Monthly Weather Forecast"), __jsx("div", {
      className: "table-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("table", {
      className: "table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, this.state.monthAvg.map(data => __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, data.name), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }), data.avgMinTemp, "\u2103")))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles.sass":
/*!*********************!*\
  !*** ./styles.sass ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Downloads\marychew97.github.io-weather\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map