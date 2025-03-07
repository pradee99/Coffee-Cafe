import React, { useState, useEffect } from "react";
import "./Admin.css";

function Admin({ setItems, setUpdateMessage }) {
  const [localItems, setLocalItems] = useState([]); // Local state to manage items
  const [newItem, setNewItem] = useState(""); // State for item name
  const [newPrice, setNewPrice] = useState(""); // State for item price
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (newItem.trim() === "" || newPrice.trim() === "") return; // Ensure both fields are filled
    if (isNaN(Number(newPrice))) {
      alert("Price must be a valid number.");
      return;
    }
    if (editingIndex !== null) {
      const updatedItems = [...localItems];
      updatedItems[editingIndex] = { name: newItem, price: newPrice };
      setLocalItems(updatedItems);
      setEditingIndex(null);
    } else {
      setLocalItems([...localItems, { name: newItem, price: newPrice }]);
    }
    setNewItem(""); // Clear item name field
    setNewPrice(""); // Clear item price field
  };

  const handleEdit = (index) => {
    setNewItem(localItems[index].name);
    setNewPrice(localItems[index].price);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setLocalItems(localItems.filter((_, i) => i !== index));
  };

  const handleUpdateMenu = () => {
    setItems(localItems); // Update the parent component's state
  };

  useEffect(() => {
    if (localItems.length > 0) {
      setUpdateMessage("You have successfully updated the Menu!");
      const timeout = setTimeout(() => setUpdateMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [localItems, setUpdateMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>MY CAFFE</h2>
        <h3>Caffe Menu</h3>

        {/* Input fields for item name and price */}
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item name"
          aria-label="Item Name"
        />
        <input
          type="text"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Enter item price"
          aria-label="Item Price"
        />

        {/* Button to add or update an item */}
        <button onClick={handleAdd}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>

        {/* Table for displaying items */}
        <table border="1">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (LKR)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {localItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Button to update the menu */}
        <button onClick={handleUpdateMenu}>Update the Menu</button>
      </header>
    </div>
  );
}

export default Admin;



