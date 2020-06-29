"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("echarts/lib/chart/bar");

require("echarts/lib/chart/line");

require("echarts/lib/chart/pie");

require("echarts/lib/chart/scatter");

require("echarts/lib/chart/map");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/geo");

require("echarts/lib/component/title");

require("echarts/lib/component/legendScroll");

require("echarts/lib/component/legend");

require("echarts/lib/component/toolbox");

require("echarts/lib/chart/pictorialBar");

require("echarts/lib/component/dataZoom");

require("echarts/lib/component/visualMap");

require("echarts/lib/component/visualMapPiecewise");

require("echarts/lib/component/visualMapContinuous");

require("echarts/lib/chart/effectScatter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var echarts = require("echarts");
// 引入提示框和标题组件


var throttle = function throttle(fn) {
  var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  var timeStatus = null;
  return function () {
    var _this = this;
    var args = arguments;
    if (timeStatus) {
      clearTimeout(timeStatus);
    }
    timeStatus = setTimeout(function () {
      fn.apply(_this, args);
    }, timer);
  };
};

var Echarts = function Echarts(props) {
  var _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style,
      _props$options = props.options,
      options = _props$options === undefined ? {} : _props$options,
      _props$loading = props.loading,
      loading = _props$loading === undefined ? false : _props$loading;

  var container = (0, _react.useRef)(null);
  var charts = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    charts.current = echarts.init(container.current);
    charts.current.setOption(options);
  }, []);

  (0, _react.useEffect)(function () {
    charts.current.setOption(options);
  }, [options]);

  (0, _react.useEffect)(function () {
    loading ? charts.current.showLoading() : charts.current.hideLoading();
  }, [loading]);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement("div", {
      ref: container,
      style: (0, _extends3.default)({ width: "100%", height: "100%" }, style)
    })
  );
};

exports.default = Echarts;