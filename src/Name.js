import React, { Component } from "react";
import Echarts from "./echarts";
class Name extends Component {
  render() {
    const options = {
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
    return (
      <div>
        <Echarts options={options} />
      </div>
    );
  }
}
export default Name;
