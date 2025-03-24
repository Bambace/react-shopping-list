 import BtnConfirm from '../BtnConfirm/BtnConfirm'
 import BtnRemove from '../BtnRemove/BtnRemove'

 export default function List({shoppingList,onClickRemove,setSelectedItemId,selectedItemId}) {
   return (
     <>
    
         <ul>
             {shoppingList.map(item=>(
               <div key={item.id}  >
                 <li >{item.list}
                  <BtnConfirm item={item.id} setSelectedItemId={setSelectedItemId}  selectedItemId={selectedItemId}/> 

                  <BtnRemove onClickRemove={onClickRemove} item={item.id} /> </li>
                  </div>
             ))}
         </ul>
     </>
   )
 }
