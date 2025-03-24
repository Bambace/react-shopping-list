import { MdOutlineCancel } from "react-icons/md";

export default function BtnRemove({onClickRemove,item}) {
  return (
    <>
    <button onClick={()=>onClickRemove(item)}>
    <MdOutlineCancel />
    </button>
    </>
  )
}
