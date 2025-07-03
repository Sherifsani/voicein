import React from 'react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {['Account', 'Profile', 'Billing', 'Notifications', 'Security'].map((tab, index) => (
              <button 
                key={tab} 
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                  index === 0 
                    ? 'text-[#4F65B0] border-b-2 border-[#4F65B0]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Account Settings Form */}
        <div className="p-6">
          <div className="max-w-2xl space-y-6">
            {/* Profile Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Account Information</h2>
              
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#4F65B0]/10 text-[#4F65B0] grid place-items-center text-2xl font-semibold">
                  JS
                </div>
                <div>
                  <button className="bg-[#4F65B0] text-white px-4 py-2 rounded-lg hover:bg-[#4F65B0]/90 transition-colors text-sm">
                    Upload New Photo
                  </button>
                  <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. Max size 2MB</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="space-y-4 pt-4 border-t">
              <h2 className="text-lg font-semibold">Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT Number</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="US123456789"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="123 Business St, Suite 100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50"
                    defaultValue="San Francisco"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F65B0]/50">
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t flex justify-end">
              <button className="bg-[#4F65B0] text-white px-6 py-2 rounded-lg hover:bg-[#4F65B0]/90 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;