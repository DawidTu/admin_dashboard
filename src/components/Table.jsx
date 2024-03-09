import React from 'react';
import { useTable } from 'react-table';

const TableComponent = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead className="uppercase bg-gray-100 h-10">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className={`p-2 ${column.id === 'secondColumn' ? 'ml-8' : ''}`}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr className="text-center border-t border-gray-300" {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  className={`p-2 ${cell.column.id === 'secondColumn' ? 'pl-8' : ''} ${
                    cell.column.id === 'thirdColumn' ? 'text-green-500' : ''} ${
                    cell.column.id === 'fifthColumn' ? 'text-blue-500' : ''}`}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
