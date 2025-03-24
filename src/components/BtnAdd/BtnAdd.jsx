import { IoMdAddCircle } from "react-icons/io";
export default function BtnAdd({handleClick}) {
  return (
    <>

    <button onClick={handleClick}>   <IoMdAddCircle  /></button>
    </>
  );
}
