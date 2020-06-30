import React, { useEffect, useRef } from "react";
var echarts = require("echarts");
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/map";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/geo";
import "echarts/lib/component/title";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/legend";
import "echarts/lib/component/toolbox";
import "echarts/lib/chart/pictorialBar";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/visualMapPiecewise";
import "echarts/lib/component/visualMapContinuous";
import "echarts/lib/chart/effectScatter";

const throttle = (fn, timer = 300) => {
  let timeStatus = null;
  return function () {
    const _this = this;
    const args = arguments;
    if (timeStatus) {
      clearTimeout(timeStatus);
    }
    timeStatus = setTimeout(() => {
      fn.apply(_this, args);
    }, timer);
  };
};

const Echarts = (props) => {
  const { style = {}, options = {}, loading = false } = props;
  const container = useRef(null);
  const charts = useRef(null);

  useEffect(() => {
    charts.current = echarts.init(container.current);
    charts.current.setOption(options);
    const resize = throttle(windowResize, 200)
    window.addEventListener('resize', throttle(resize, 150))
  }, []);

  useEffect(() => {
    charts.current.setOption(options);
  }, [options]);

  useEffect(() => {
    loading ? charts.current.showLoading() : charts.current.hideLoading();
  }, [loading]);

  const windowResize = () => {
    if(charts) {
      charts.resize();
    }
  }

  return (
    <React.Fragment>
      <div
        ref={container}
        style={{ width: "100%", height: "100%", ...style }}
      ></div>
    </React.Fragment>
  );
};

export default Echarts;
