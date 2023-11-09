import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToggleItem }) {
  const handleClearList = () => {
    // Implementasi untuk membersihkan daftar belanjaan
    setItems([]);
  };

  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={handleClearList}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
