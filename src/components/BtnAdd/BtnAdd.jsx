import { IoMdAddCircle } from "react-icons/io";
import './BtnAdd.css'
export default function BtnAdd({handleClick}) {
  return (
    <>

    <button className="add" onClick={handleClick}>   <IoMdAddCircle  /></button>
    </>
  );
}
