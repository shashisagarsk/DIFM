// src/components/Table.jsx
import React from 'react';

const Home = () => {
  const data = [
    { id: 1, username: "Sagar Kumar", email: "sagarazm999@gmail.com", job: "MERN Stack Developer", number: "9537412280" },
    { id: 2, username: "Meet", email: "Meet1@email.com", job: "Webdeveloper", number: "9090987889" },
    { id: 3, username: "Nilay", email: "Nilay@email.com", job: "IC Engineer", number: "908997909" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Add Data Button */}
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          + Add Data
        </button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-800 text-white uppercase text-xs md:text-sm leading-normal">
              <th className="py-3 px-2 md:px-6 text-left">Id</th>
              <th className="py-3 px-2 md:px-6 text-left">Username</th>
              <th className="py-3 px-2 md:px-6 text-left">Email</th>
              <th className="py-3 px-2 md:px-6 text-left">Job</th>
              <th className="py-3 px-2 md:px-6 text-left">Number</th>
              <th className="py-3 px-2 md:px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs md:text-sm font-light">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">{item.id}</td>
                <td className="py-3 px-2 md:px-6 text-left">{item.username}</td>
                <td className="py-3 px-2 md:px-6 text-left">{item.email}</td>
                <td className="py-3 px-2 md:px-6 text-left">{item.job}</td>
                <td className="py-3 px-2 md:px-6 text-left">{item.number}</td>
                <td className="py-3 px-2 md:px-6 text-center flex justify-center space-x-1">
                  <button className="bg-green-500 text-white p-1 md:p-2 rounded-full hover:bg-green-600 transition">
                    👁️
                  </button>
                  <button className="bg-blue-500 text-white p-1 md:p-2 rounded-full hover:bg-blue-600 transition">
                    ✏️
                  </button>
                  <button className="bg-red-500 text-white p-1 md:p-2 rounded-full hover:bg-red-600 transition">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
