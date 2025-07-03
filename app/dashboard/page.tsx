import React from 'react';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="bg-white p-2 rounded-full shadow">
          <div className="w-8 h-8 rounded-full bg-[#4F65B0] text-white grid place-items-center font-semibold">
            JS
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Summary Cards */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Total Invoices</span>
          <span className="text-2xl font-bold mt-2">24</span>
          <span className="text-green-500 text-sm mt-2">↑ 12% from last month</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Pending Invoices</span>
          <span className="text-2xl font-bold mt-2">7</span>
          <span className="text-yellow-500 text-sm mt-2">3 due this week</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Total Revenue</span>
          <span className="text-2xl font-bold mt-2">$12,450</span>
          <span className="text-green-500 text-sm mt-2">↑ 8% from last month</span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
          <span className="text-gray-500 text-sm">Active Clients</span>
          <span className="text-2xl font-bold mt-2">18</span>
          <span className="text-blue-500 text-sm mt-2">2 new this month</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#4F65B0]/10 text-[#4F65B0] grid place-items-center">
                {item % 2 === 0 ? '📄' : '💰'}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">
                  {item % 2 === 0 ? 'New invoice created' : 'Payment received'}
                </h3>
                <p className="text-sm text-gray-500">
                  {item % 2 === 0 ? 'Invoice #INV-00' + item : 'Payment for #INV-00' + (item - 1)}
                </p>
              </div>
              <span className="text-sm text-gray-500">
                {item} hour{item !== 1 ? 's' : ''} ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;