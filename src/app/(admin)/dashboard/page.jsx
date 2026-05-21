import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-lg text-gray-700">
        Welcome to the admin dashboard! Here you can manage pet adoption
        requests, user accounts, and view analytics about your pet adoption
        platform.
      </p>
      <p className="mt-4 text-gray-600">
        Use the navigation menu to access different sections of the dashboard,
        including pending adoption requests, user management, and analytics.
      </p>
    </div>
  );
};

export default Dashboard;
