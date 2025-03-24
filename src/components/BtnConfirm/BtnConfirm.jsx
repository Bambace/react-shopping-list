 import { FaCheck } from "react-icons/fa";

 export default function BtnConfirm({item,setSelectedItemId}) {
   return (
     <>
       <button onClick={()=>setSelectedItemId(item)}>
         <FaCheck />
       </button>
     </>
   );
 }
