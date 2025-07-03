import React from 'react';

const TransactionsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>
        <button className="bg-[#4F65B0] text-white px-4 py-2 rounded-lg hover:bg-[#4F65B0]/90 transition-colors">
          Record Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Total Income</span>
          <span className="text-2xl font-bold mt-2">$24,500</span>
          <span className="text-green-500 text-sm mt-2">↑ 15% from last month</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Total Expenses</span>
          <span className="text-2xl font-bold mt-2">$5,240</span>
          <span className="text-red-500 text-sm mt-2">↑ 3% from last month</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Net Profit</span>
          <span className="text-2xl font-bold mt-2">$19,260</span>
          <span className="text-green-500 text-sm mt-2">↑ 18% from last month</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50">
              <option value="">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
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

      {/* Transactions List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3 text-gray-500 font-medium">Date</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Description</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Type</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Amount</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Status</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500">
                    {['Jul 01, 2023', 'Jun 28, 2023', 'Jun 25, 2023', 'Jun 20, 2023', 'Jun 15, 2023'][item - 1]}
                  </td>
                  <td className="px-6 py-4">
                    {[
                      'Payment for Invoice #INV-001',
                      'Office Supplies',
                      'Payment for Invoice #INV-002',
                      'Software Subscription',
                      'Payment for Invoice #INV-003'
                    ][item - 1]}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item % 2 === 1 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item % 2 === 1 ? 'Income' : 'Expense'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <span className={item % 2 === 1 ? 'text-green-600' : 'text-red-600'}>
                      {item % 2 === 1 ? '+' : '-'}${[1250, 350, 850, 120, 2300][item - 1]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item === 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {item === 5 ? 'Pending' : 'Completed'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        View
                      </button>
                      <button className="p-1 text-gray-600 hover:text-gray-800">
                        Edit
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

export default TransactionsPage;