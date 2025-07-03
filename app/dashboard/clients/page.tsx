import React from 'react';

const ClientsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
        <button className="bg-[#4F65B0] text-white px-4 py-2 rounded-lg hover:bg-[#4F65B0]/90 transition-colors">
          Add New Client
        </button>
      </div>

      {/* Clients List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">All Clients</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3 text-gray-500 font-medium">Name</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Email</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Phone</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Status</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#4F65B0]/10 text-[#4F65B0] grid place-items-center font-semibold">
                        {['JD', 'AS', 'RK', 'MP', 'TW'][item - 1]}
                      </div>
                      <span className="font-medium">
                        {['John Doe', 'Alice Smith', 'Robert Kim', 'Maria Perez', 'Tom Wilson'][item - 1]}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {['john@example.com', 'alice@example.com', 'robert@example.com', 'maria@example.com', 'tom@example.com'][item - 1]}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {['(555) 123-4567', '(555) 234-5678', '(555) 345-6789', '(555) 456-7890', '(555) 567-8901'][item - 1]}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item % 2 === 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item % 2 === 0 ? 'Active' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;