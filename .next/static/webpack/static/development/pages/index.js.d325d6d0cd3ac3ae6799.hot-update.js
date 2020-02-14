webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles.sass */ "./styles.sass");
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\user\\Downloads\\marychew97.github.io-weather\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
      location: '',
      country: '',
      lat: null,
      "long": null,
      date: '',
      temp: 0,
      weather: '',
      image: null,
      hourForecast: [],
      weekForecast: [],
      monthAvg: []
    };
    _this.getLocationWeather = _this.getLocationWeather.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getLocationWeather();
    }
  }, {
    key: "getLocationWeather",
    value: function getLocationWeather() {
      var _this2 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getLocationWeather$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var _long = position.coords.longitude;

                _this2.setState({
                  lat: lat,
                  "long": _long
                });

                axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(_long, "&appid=bb8842d60516f2656d00cdbc9f999293")).then(function (res) {
                  var result = res.data;
                  console.log(result); //in kelvin
                  // this.getTemp(result.main.temp)

                  _this2.setState({
                    location: result.name,
                    country: result.sys.country,
                    weather: result.weather[0].main,
                    date: _this2.getDate(result.dt)
                  });
                });

                _this2.getWeekForecast(lat, _long);

                _this2.getHourForecast(lat, _long);
              }));

            case 2:
              console.log(this.state);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getWeekForecast",
    value: function getWeekForecast(lat, _long2) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=".concat(lat, ",").concat(_long2, "&format=json&num_of_days=8")).then(function (res) {
        var result = res.data.data;
        console.log(result);

        _this3.setState({
          temp: result.current_condition[0].temp_C,
          image: result.current_condition[0].weatherIconUrl[0].value,
          monthAvg: result.ClimateAverages[0]
        });

        result.weather.map(function (data) {
          var day = new Date(data.date);
          var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          day = days[day.getDay()];

          _this3.setState({
            weekForecast: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.weekForecast), [{
              day: day,
              date: data.date,
              maxTemp: data.maxtempC,
              hour: {
                time: data.hourly
              }
            }])
          });
        });
      });
    }
  }, {
    key: "getHourForecast",
    value: function getHourForecast(lat, _long3) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=".concat(lat, ",").concat(_long3, "&format=json&num_of_days=7")).then(function (res) {
        var result = res.data.data;
        result.weather[0].hourly.map(function (data) {
          _this4.setState({
            hourForecast: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.state.hourForecast), [{
              time: data.time,
              temp: data.tempC,
              weather: data.weatherDesc[0].value,
              image: data.weatherIconUrl[0].value
            }])
          });
        });
      });
    }
  }, {
    key: "getDate",
    value: function getDate(dt) {
      var tf = new Date(dt * 1000);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var day = days[tf.getDay()];
      var date = tf.getDate();
      var month = months[tf.getMonth()];
      var year = tf.getFullYear();
      return "".concat(day, ", ").concat(date, " ").concat(month, " ").concat(year);
    }
  }, {
    key: "render",
    value: function render() {
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
      }, "(", this.state.lat, ", ", this.state["long"], ")"), __jsx("br", {
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
      }, hours.map(function (hour) {
        return __jsx("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, hour);
      }))), __jsx("tbody", {
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
      }, this.state.hourForecast.map(function (data) {
        return __jsx("td", {
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
        }), data.weather);
      })))))), __jsx("div", {
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
      }), hours.map(function (hour) {
        return __jsx("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, hour);
      }))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, this.state.weekForecast.map(function (day) {
        return __jsx("tr", {
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
        }, day.day), "\xA0\xA0", day.date), day.hour.time.map(function (data) {
          return __jsx("td", {
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
          }));
        }));
      }))))), __jsx("div", {
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
      }, this.state.monthAvg.month.map(function (day) {
        return __jsx("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, __jsx("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, __jsx("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, day.day), "\xA0\xA0", day.date), day.hour.time.map(function (data) {
          return __jsx("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, data.tempC, "\u2103", __jsx("img", {
            src: data.weatherIconUrl[0].value,
            alt: "weather icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            },
            __self: this
          }));
        }));
      })))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d325d6d0cd3ac3ae6799.hot-update.js.map