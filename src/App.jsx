import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: true,
  },

  {
    id: 4,
    name: "kopi",
    quantity: 3,
    checked: false,
  },
];

export default function app() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    // Cek apakah item dengan id yang sama sudah ada di dalam daftar
    if (items.some((existingItem) => existingItem.id === item.id)) {
      // Jika sudah ada, mungkin tampilkan pesan kesalahan atau lakukan sesuatu
      console.log("Item dengan ID yang sama sudah ada di dalam daftar.");
      return;
    }

    // Jika belum ada, tambahkan item baru ke dalam daftar
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Footer items={items} />
    </div>
  );
}
