import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import BtnAdd from "./components/BtnAdd/BtnAdd";
import Input from "./components/Input/Input";

function App() {
  const [shoppingList, setShoppinglist] = useState([]);
  const [inputList, setInputList] = useState("");
  const [selectedItemId, setSelectedItemId] = useState([]); // non e piu null, lo tratiamo come un array
  const [editItem,setEditItem]= useState('')
  function handleClick() {
    if(inputList.trim() ==="") {
      return;
    }
    setShoppinglist([
      ...shoppingList,
      { id: crypto.randomUUID(), list: inputList },
    ]);
    setInputList("");
  }

  function toggleItemSelection(id) {
    //if(selectedItemId.incluides(id)){
    //setSelectedItemId(selectedItemId.filter(s => s!==id))}
    //else{
    //setSelectedItemId([...selectedItemId,id])}
    


     
    setSelectedItemId(
      (prevSelected) =>
        prevSelected.includes(id) // include verifica si el id esta dentro del elemento
          ? prevSelected.filter((itemId) => itemId !== id) //si gia essite lo toglie
          : [...prevSelected, id] //se non lo trova lo aggiunge
    );
  }



  return (
    <>
      <h1>Shopping list:</h1>
    
      <Input inputList={inputList} setInputList={setInputList} />
      <BtnAdd handleClick={handleClick} inputList={inputList} />

      <List
        shoppingList={shoppingList}
        onClickRemove={(item) =>
          setShoppinglist(shoppingList.filter((i) => i.id !== item))
        }
        setSelectedItemId={(id) => setSelectedItemId(id)}
        toggleItemSelection={toggleItemSelection}
        selectedItemId={selectedItemId}



        
      />
    </>
  );
}

export default App;
