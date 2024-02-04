// DataTable.js
import React from 'react';



const DataTable = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Seq
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Peptide
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Start
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            End
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Length
          </th>
         {/* here for allele */}
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Score
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-no-wrap">{row.seq}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{row.peptide}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{row.start}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{row.end}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{row.length}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{row.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

