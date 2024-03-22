import React from "react";
import { TableData } from "../../data/TableData";

const TableComponent = () => {
  return (
    <table className="w-full">
      <thead className="uppercase text-xs xl:text-sm text-sidebar-text bg-gray-100 h-10">
        <tr>
          <th className="text-left pl-4">
            <div>Source</div>
          </th>
          <th>
            <div>Visitors</div>
          </th>
          <th>
            <div>Revenues</div>
          </th>
          <th>
            <div>Sales</div>
          </th>
          <th>
            <div>Conversion</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {TableData.map((row, id) => {
          return (
            <tr
              className={`text-center text-xs xl:text-sm ${
                id !== TableData.length - 1 ? "border-b" : ""
              }`}
              key={id}
            >
              <td className="text-left flex items-center gap-x-2 p-2">
                <div>{row.img}</div>
                <div>{row.text}</div>
              </td>
              <td>
                <div>{row.firstCol}</div>
              </td>
              <td>
                <div className="text-green-500">{row.secondCol}</div>
              </td>
              <td>
                <div>{row.thirdCol}</div>
              </td>
              <td>
                <div className="text-blue-400">{row.fourthCol}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
