 import { FaCheck } from "react-icons/fa";

 export default function BtnConfirm({item,toggleItemSelection}) {
   return (
     <>
       <button onClick={()=>toggleItemSelection(item)}>
         <FaCheck />
       </button>
     </>
   );
 }
