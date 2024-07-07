import { useState } from "react";

import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "Milk",
      checked: false,
    },
  ]);
  const [item, setItem] = useState("");
  console.log(item);
  const [filter, setFilter] = useState("");
  console.log(filter);

  function handleSubmit(event) {
    const newItem = {
      id: items.length + 1,
      item: item,
      checked: false,
    };
    event.preventDefault();
    setItems([...items, newItem]);
    setItem("");
  }

  function handleDelete(id) {
    const deleteElement = items.filter((item) => item.id !== id);
    setItems(deleteElement);
  }
  function handleCheck(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem item={item} setItem={setItem} handleSubmit={handleSubmit} />
      <SearchItem filter={filter} setFilter={setFilter} />
      <main>
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(filter.toLowerCase())
          )}
          setItems={setItems}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
