import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Dec 20',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Jan 21',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Feb 21',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: 'Mar 21',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Apr 21',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'May 21',
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-stacked-by-sign-cbct8';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5
          }}
        > 
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#0096FF" stackId="stack" />
          <Bar dataKey="uv" fill="#0047AB" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
