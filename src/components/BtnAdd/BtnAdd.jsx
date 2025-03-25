import { IoMdAddCircle } from "react-icons/io";
import './BtnAdd.css'
export default function BtnAdd({handleClick,inputList}) {
  return (
    <>

    <button className="add" onClick={handleClick} disabled={inputList.trim()===""}>   <IoMdAddCircle  /></button>
    </>
  );
}
