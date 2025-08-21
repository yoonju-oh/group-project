import { useState } from "react";

function Grid() {
  const [data, setData] = useState([]); 

  return (
    <div>
      <table className="min-w-full table-fixed border-collapse border border-gray-300 bg-white">
        <colgroup>
          <col className="w-1/12" /> 
          <col className="w-3/12" /> 
          <col className="w-2/12" /> 
          <col className="w-2/12" /> 
          <col className="w-3/12" />
        </colgroup>
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 align-middle text-center">{}</th>
            <th className="border border-gray-300 px-4 py-2 align-middle text-center">{}</th>
            <th className="border border-gray-300 px-4 py-2 align-middle text-center">{}</th>
            <th className="border border-gray-300 px-4 py-2 align-middle text-center">{}</th>
            <th className="border border-gray-300 px-4 py-2 align-middle text-center">{}</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="border border-gray-300 text-center py-4 text-gray-500 align-middle">
                데이터가 없습니다.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 align-middle text-center">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2 align-middle text-center">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2 align-middle text-center">{item.category}</td>
                <td className="border border-gray-300 px-4 py-2 align-middle text-center">{item.unit}</td>
                <td className="border border-gray-300 px-4 py-2 align-middle text-right">{item.unitPrice}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
