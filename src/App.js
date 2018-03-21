import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rd3 from 'rd3';
import d3 from 'd3';
import ReactDOM from 'react-dom';
import ReactBubbleChart from 'react-bubble-chart';

var LineChart = rd3.LineChart;
var dataSrc = [
  {
    "nodes": [
        {
          "time": "2016-11-22 14:41:58.0",
          "author": "aabrasha@gmail.com"
        },
        {
          "time": "2016-11-17 09:51:00.0",
          "author": "ggregory@apache.org"
        },
        {
          "time": "2016-11-17 11:36:51.0",
          "author": "ggregory@apache.org"
        },
        {
          "time": "2016-11-28 13:27:25.0",
          "author": "garydgregory@gmail.com"
        },
        {
          "time": "2016-12-14 14:28:40.0",
          "author": "ggregory@apache.org"
        },
        {
          "time": "2016-11-06 10:38:43.0",
          "author": "pascalschumacher@gmx.net"
        },
        {
          "time": "2016-11-16 15:35:23.0",
          "author": "ggregory@apache.org"
        },
        {
          "time": "2016-11-16 16:41:57.0",
          "author": "ggregory@apache.org"
        },
        {
          "time": "2016-11-30 11:27:55.0",
          "author": "tmartin193@gmail.com"
        },
        {
          "time": "2016-11-17 11:49:17.0",
          "author": "ggregory@apache.org"
        }
    ]
  }
];

var colorLegend = [
  //reds from dark to light
  /*{color: "#67000d", text: 'Negative', textColor: */"#ffffff"/*}*/, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  /*{color: */"#f0f0f0"/*, text: 'Neutral'}*/,
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", /*{color: "#08306b", text: 'Positive', textColor: */"#ffffff"/*}*/
];

var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Commits'
}/*, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}*/];

var data = {
  'series 1': [ 
    { x: '2014-07-10', y: 1.2 },
    { x: '2014-10-15', y: 22.1 }
  ]
};


for (var i = 0; i < dataSrc[0].nodes.length; i++) {
        //result[i]表示获得第i个json对象即JSONObject
        //result[i]通过.字段名称即可获得指定字段的值
        dataSrc[0].nodes[i].time;
}

var lineData_Dev = [
      { 
        name: 'Project_1',
        values: [   
            { x: '2016-11-22 14:41:58.0', y: 2 }, 
            { x: '2016-11-29 14:41:58.0', y: 4 },
            { x: '2016-12-6 14:41:58.0', y: 5 }, 
            { x: '2016-12-13 14:41:58.0', y: 6 }
        ]
      }
];
    
var lineData_Edit = [
      { 
        name: 'Project_1',
        values: [   
            { x: '2016-11-22 14:41:58.0', y: 5 }, 
            { x: '2016-11-29 14:41:58.0', y: 20 },
            { x: '2016-12-6 14:41:58.0', y: 40 }, 
            { x: '2016-12-13 14:41:58.0', y: 62 }
        ]
      }
];

//var formatter = d3.time.format("%Y-%m-%d %H:%M:%S.%Y").parse;


//pie chart
var PieChart = rd3.PieChart
var pieData = [
  {label: "ggregory@apache.org", value: 70.0}, 
  {label: "aabrasha@gmail.com", value: 10.0}, 
  {label: "tmartin193@gmail.com", value: 10.0 }, 
  {label: "pascalschumacher@gmx.net", value: 10.0 }
];

class App extends Component {
  render() {
       var data = [
      {
        _id: "ggregory@apache.org",        // unique id (required)
        value: 7,      // used to determine relative size of bubbles (required)
        displayText: "7",// will use _id if undefined
        colorValue: -4, // used to determine color
        selected: false,  // if true will use selectedColor/selectedTextColor for circle/text
      },
      {
        _id: "aabrasha@gmail.com",  
        value: 1,      
        displayText: "1",
        colorValue: -2, 
        selected: false,
      },
      {
        _id: "tmartin193@gmail.com",   
        value: 1,      
        displayText: "1",
        colorValue: 1, 
        selected: false,  
      },
      {
        _id: "pascalschumacher@gmx.net",      
        value: 1,     
        displayText: "1",
        colorValue: 3, 
        selected: false,  
      }
    ]
    return (
      <div id = "123">
          <div>
          <LineChart
            legend={true}
            data={lineData_Dev}
            width='50%'
            height={400}
            viewBoxObject={{
              x: 0,
              y: 0,
              width: 1000,
              height: 300
            }}
            title="Number of developers along the time"
            yAxisLabel="Number of developers"
            xAxisLabel="Date"
            gridHorizontal={true}
            xAccessor={(d)=> {
              var formatter = d3.time.format("%Y-%m-%d %H:%M:%S.%Y").parse;
              return formatter(d.x);
            }}
            domain={{x: [,], y: [0,]}}
          />
          </div>
          <div>
          <LineChart
            legend={true}
            data={lineData_Edit}
            width='50%'
            height={400}
            viewBoxObject={{
              x: 0,
              y: 0,
              width: 1000,
              height: 300
            }}
            title="Edit times along the time"
            yAxisLabel="Number of Edits"
            xAxisLabel="Date"
            gridHorizontal={true}
            xAccessor={(d)=> {
              var formatter = d3.time.format("%Y-%m-%d %H:%M:%S.%Y").parse;
              return formatter(d.x);
            }}
            domain={{x: [,], y: [0,]}}
          />
          </div>
          <div>
            <ReactBubbleChart
              className="my-cool-chart"
              colorLegend={colorLegend}
              data={data}
              //selectedColor="#737373"
              //selectedTextColor="#d9d9d9"
              fixedDomain={{min: -5, max: 5}}
              tooltip={true}
              tooltipProps={tooltipProps}
              //onClick={Actions.doStuff.bind(Actions)}
              legend={true}
              legendSpacing={1}
            />
          </div>
          <div>
            <PieChart
              data={pieData}
              width={650}
              height={400} 
              radius={110}
              innerRadius={40}
              sectorBorderColor="white"
              title="Contribution of authors" 
            />
          </div>
          

      </div>
    );
  }
}


export default App;
