import React from "react";
import "./Menu.css";



function Menu({ items }) {
  return (
   
    <div className="Menu">
      <h3>Today's Menu</h3>

      {items.length === 0 ? (
        <p>No items added yet</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (LKR)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
   
  );
}

export default Menu;

