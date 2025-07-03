import React from 'react';

const InvoicesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Invoices</h1>
        <button className="bg-[#4F65B0] text-white px-4 py-2 rounded-lg hover:bg-[#4F65B0]/90 transition-colors">
          Create Invoice
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50">
              <option value="">All Statuses</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50">
              <option value="">All Clients</option>
              <option value="1">John Doe</option>
              <option value="2">Alice Smith</option>
              <option value="3">Robert Kim</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50">
              <option value="">All Time</option>
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoices List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3 text-gray-500 font-medium">Invoice #</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Client</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Amount</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Date</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Status</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">INV-00{item}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#4F65B0]/10 text-[#4F65B0] grid place-items-center font-semibold">
                        {['JD', 'AS', 'RK', 'MP', 'TW'][item - 1]}
                      </div>
                      <span>
                        {['John Doe', 'Alice Smith', 'Robert Kim', 'Maria Perez', 'Tom Wilson'][item - 1]}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    ${[1250, 850, 2300, 1100, 3200][item - 1]}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {['Jun 12, 2023', 'Jun 15, 2023', 'Jun 20, 2023', 'Jun 25, 2023', 'Jun 30, 2023'][item - 1]}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item === 1 ? 'bg-green-100 text-green-800' : 
                      item === 2 ? 'bg-yellow-100 text-yellow-800' :
                      item === 3 ? 'bg-red-100 text-red-800' :
                      item === 4 ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item === 1 ? 'Paid' : 
                       item === 2 ? 'Pending' :
                       item === 3 ? 'Overdue' :
                       item === 4 ? 'Paid' :
                       'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        View
                      </button>
                      <button className="p-1 text-gray-600 hover:text-gray-800">
                        Download
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

export default InvoicesPage;