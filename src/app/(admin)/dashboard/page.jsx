import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <p className="text-sm text-gray-600 mb-6">Manage pets and requests.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow text-center">
          <div className="text-xl font-bold">12</div>
          <div className="text-xs text-gray-500">Active Pets</div>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <div className="text-xl font-bold">3</div>
          <div className="text-xs text-gray-500">Pending Requests</div>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <div className="text-xl font-bold">5</div>
          <div className="text-xs text-gray-500">Users</div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Add Pet
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded">View Requests</button>
      </div>
    </div>
  );
};

export default Dashboard;
