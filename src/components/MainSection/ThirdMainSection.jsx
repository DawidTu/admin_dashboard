import React from "react";
import PieChart from "../Charts/PieChart";
import TableComponent from "../Table";

const ThirdMainSection = () => {
    
    const columns = [
        { Header: 'SOURCE', accessor: 'source' },
        { Header: 'Visitors', accessor: 'visitors' },
        { Header: 'Revenues', accessor: 'revenues' },
        { Header: 'Sales', accessor: 'sales' },
        { Header: 'Conversion', accessor: 'conversion' },
      ];
    
      const data = [
        { source: "Github.com", visitors: '2.4K', revenues: '$3,877', sales: 267, conversion: '4.7%', },
        { source: "Twitter", visitors: '2.2K', revenues: '$3,877', sales: 249, conversion: '4.4%', },
        { source: "Google (organic)", visitors: '2.0K', revenues: '$3,877', sales: 224, conversion: '4.2%', },
        { source: "Vimeo.com", visitors: '1.9K', revenues: '$3,877', sales: 220, conversion: '4.2%', },
        { source: "Indiehackers.com", visitors: '1.7K', revenues: '$3,877', sales: 204, conversion: '3.9%', },
      ];
    
  return (
    <div className="flex gap-x-7 mt-8">
      <div className="border p-5 w-1/3">
        <h2 className="w-full border-b pb-2 font-bold">Top Countries</h2>
        <div className="mt-2 w-full h-60">
          <PieChart />
        </div>
      </div>
      <div className="border p-5 w-2/3">
        <h2 className="w-full border-b pb-2 font-bold">Top Channels</h2>
        <div className="mt-2 w-full h-60">
          <TableComponent columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ThirdMainSection;
