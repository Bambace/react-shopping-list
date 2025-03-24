import { useState } from "react";
import "./App.css";

import List from "./components/List/List";
import BtnAdd from "./components/BtnAdd/BtnAdd";
import Input from "./components/Input/Input";

function App() {
  const [shoppingList, setShoppinglist] = useState([]);
  const [inputList, setInputList] = useState("");
  const [selectedItemId,setSelectedItemId]= useState(null); 

  function handleClick() {
    setShoppinglist([...shoppingList, { id: crypto.randomUUID(), list: inputList }]);
    setInputList("");
  }

  return (
    <>
      <h1>Shopping list:</h1>

      <Input inputList={inputList} setInputList={setInputList} />
      <BtnAdd handleClick={handleClick} />

      <List shoppingList={shoppingList} 
      onClickRemove={(item)=>setShoppinglist(shoppingList.filter(i=>i.id!==item))}
      setSelectedItemId={setSelectedItemId}
      selectedItemId={selectedItemId}
      />
    </>
  );
}

export default App;
