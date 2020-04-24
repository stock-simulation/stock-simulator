import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import '../styles/graph.scss';

const Graph = ({ graph }) => {
  // const [graphX, setGraphX] = useState([]);
  // const [graphY, setGraphY] = useState([]);
  // console.log(graph);
  const x = [];
  const y = [];

  for (let key in graph) {
      x.push(key);
      y.push(Number(graph[key]['1. open']));
  }
  // setGraphX(x);
  // setGraphY(y);

  // console.log(x);

  return (
    <Plot className="graph"
      data={[
        {
          x: x,
          y: y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ width: 720, height: 440, title: 'Stocks Graph', plot_bgcolor: 'black', paper_bgcolor: 'white' }}
    />
  );
};

export default Graph;

// for(let key in data['Time Series (5min)']){

// }
