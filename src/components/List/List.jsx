import './List.css'
import BtnConfirm from '../BtnConfirm/BtnConfirm'
import BtnRemove from '../BtnRemove/BtnRemove'


 export default function List({shoppingList,onClickRemove,setSelectedItemId,selectedItemId,toggleItemSelection,editItem,setEditItem}) {
   return (
     <>
    
         <ul>
             {shoppingList.map(item=>(
               <div key={item.id} className={`list-item ${selectedItemId.includes(item.id) ?  "selezionato" : ""} ` }>
                 <li >{item.list}
                  <div className='button-group'>
                  <BtnConfirm  item={item.id} setSelectedItemId={setSelectedItemId}  selectedItemId={selectedItemId} toggleItemSelection={toggleItemSelection}/> 
            
                  <BtnRemove onClickRemove={onClickRemove} item={item.id} /> 
                  </div>
                  </li>
                  
                  </div>
             ))}
         </ul>
     </>
   )
 }
