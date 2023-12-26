"use client";
import React, { useEffect, useState } from "react";

const RestaurantTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <table className="mt-5">
        <thead>
          <tr>
            <th className="border border-gray-400 custom-scrollbar  p-2">
              <div className="custom-w">Name</div>
            </th>
            <th className="border border-gray-400 custom-scrollbar p-4">
              <div className="custom-w">Website</div>
            </th>
            <th className="border border-gray-400 custom-scrollbar p-4">
              <div className="custom-w">Phone</div>
            </th>
            <th className="border border-gray-400 custom-scrollbar p-4">
              <div className="custom-w">Mail</div>
            </th>
            <th className="border border-gray-400 custom-scrollbar p-4">
              <div className="custom-w">Facebook</div>
            </th>
            <th className="border border-gray-400 custom-scrollbar p-4">
              <div className="custom-w">Instagram</div>
            </th>
            <th className="border border-gray-400 custom-scrollbar p-4">Map</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.name}</div>
              </td>{" "}
              <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.website}</div>
              </td>{" "}
              <td className="p-2  border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.phone}</div>
              </td>{" "}
              <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.mail}</div>
              </td>{" "}
              <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.facebook} </div>
              </td>{" "}
              <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.instagram}</div>
              </td>
              <td className="p-2 border border-gray-400 custom-scrollbar overflow-auto">
                <div className="custom-w">{item.map} </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RestaurantTable;
