import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rd3 from 'rd3';
import d3 from 'd3';
import ReactDOM from 'react-dom';

var LineChart = rd3.LineChart
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


var data = {
  'series 1': [ 
    { x: 1423915030039, y: 11.2 },
    { x: 1423913330040, y: 2.1 }
  ]
};


for (var i = 0; i < dataSrc[0].nodes.length; i++) {
        //result[i]表示获得第i个json对象即JSONObject
        //result[i]通过.字段名称即可获得指定字段的值
        dataSrc[0].nodes[i].time;
}

var lineData_Dev = [
      { 
        name: 'Number of developers',
        values: [   
            { x: 0, y: 20 }, 
            { x: dataSrc[0].nodes[1].time, y: 30 }, 
            { x: dataSrc[0].nodes[2].time, y: 10 }, 
            { x: dataSrc[0].nodes[3].time, y: 5 }, 
            { x: dataSrc[0].nodes[4].time, y: 8 }, 
            { x: dataSrc[0].nodes[5].time, y: 15 }, 
            { x: dataSrc[0].nodes[6].time, y: 10 } ]
      }
];
    
var lineData_Edit = [
      { 
        name: 'Edit times',
        values: [   
            { x: 0, y: 20 }, 
            { x: 1, y: 30 }, 
            { x: 2, y: 10 }, 
            { x: 3, y: 5 }, 
            { x: 4, y: 8 }, 
            { x: 5, y: 15 }, 
            { x: 6, y: 10 } ]
      }
];
//var formatter = d3.time.format("%Y-%m-%d %H:%M:%S %Y").parse;

class App extends Component {
  render() {
    return (
      <div id = "123">
          {(dataSrc[0].nodes[2].time)}
          <div>
          <LineChart
            legend={true}
            data={lineData_Dev}
            width='40%'
            height={400}
            viewBoxObject={{
              x: 0,
              y: 0,
              width: 500,
              height: 300
            }}
            title="Number of developers along the time"
            yAxisLabel="Altitude"
            xAxisLabel="Elapsed Time (sec)"
            gridHorizontal={true}
            /*xAccessor={
                (d)=> {
                    return formatter(d.x);
                }     
            }*/
          />
          </div>
          <div>
          <LineChart
            legend={true}
            data={lineData_Edit}
            width='40%'
            height={400}
            viewBoxObject={{
              x: 0,
              y: 0,
              width: 500,
              height: 300
            }}
            title="Edit times along the time"
            yAxisLabel="Altitude"
            xAxisLabel="Elapsed Time (sec)"
            gridHorizontal={true}
          />
          </div>
          <div>
              <LineChart
              data={data}
              xAccessor={(d)=> {
                  return new Date(d.x);
                }     
              }
              yAccessor={(d)=>d.y}
              xAxisTickInterval={{unit: 'year', interval: 2}}
            />    
          </div>
      </div>
    );
  }
}

export default App;
