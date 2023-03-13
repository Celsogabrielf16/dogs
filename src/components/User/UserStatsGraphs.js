import React from "react";
import "./UserStatsGraphs.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );
    setGraph(graphData);
  }, [data]);
  return (
    <section className="animeLeft UserStatsGraphsComponent">
      <div className="total graphItem">
        <p>Acessos: {total}</p>
      </div>
      <div className="graphItem">
        <VictoryPie
          data={graph}
          padding={{top: 20, left: 80, bottom: 20, right: 80}}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className="graphItem">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
