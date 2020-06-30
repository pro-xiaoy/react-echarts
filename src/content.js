import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Echarts from "./echarts";
const option = {
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

const Content = (props) => {
  const [loading, setloading] = useState(false)
  const clickDom = () => {
    setloading(!loading)
    setTimeout(() => {
      setloading(!loading)
    }, 1000)
  }

  return <div>
    <div style={{width: 100, height:40, border: '1px solid red', cursor: 'pointer'}} onClick={clickDom}>点一下试试</div>
    <div style={{width: 200, height: 600}}>
      <Echarts options={option} loading={loading}/>
    </div>
  </div>
};

export default Content