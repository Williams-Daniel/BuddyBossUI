import img from "../../assets/Giantshoemancrop-removebg-preview.png"
import {PiPulseLight} from "react-icons/pi"
import {BiBell, BiDotsHorizontalRounded} from "react-icons/bi"
import {FaUserGroup} from "react-icons/fa6"
import {BsPersonCircle,BsChatLeftDots,BsSearch} from "react-icons/bs"
import { VscInbox } from "react-icons/vsc"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoDocumentTextOutline } from "react-icons/io5"
import img1 from "../../assets/circle1.png"
import { useSelector } from "react-redux"


const Header = () => {

const toggle = useSelector((state:any)=> state.toggleState)

  return (
    <div className="
    w-full
    h-[75px]
    flex
    items-center
    justify-center
    bg-[white]
    ">
      <div className="
      flex
      w-[95%]
      h-[100%]
      items-center
      justify-between
      ">
       <div className="
       flex
       ">
       <img src={img} className="
        h-[35px]
        "/>
        <div className="
        w-[1px]
        h-[35px]
        bg-[#bbbbbb]
        ml-[10px]
        mr-[10px]
        "/>
        <div className="
        leading-5
        font-[500]
        text-[20px]
        ">
          <div>Aj</div>
          <div>Connect</div>
        </div>
       </div>
        <div className="
        w-[300px]
        flex
        justify-between
        items-center
        ">
        <PiPulseLight className="
        mr-[10px]
        h-[20px]
        w-[20px]
        border-[1.5px]
        border-[black]
        rounded
        "/>
        <BsPersonCircle className="
        text-[20px]
        "/>
        <FaUserGroup className="
        text-[20px]
        "/>
        <BsChatLeftDots className="
        text-[20px]
        "/>
        {!toggle ? <BiDotsHorizontalRounded className="
        text-[25px]
        "/>: ""}

        {toggle ? <IoDocumentTextOutline className=" text-[22px] "/> : ""}
        </div>

      <div className="
      flex
      items-center
      ">
      <BsSearch className="
        text-[20px]
        "/>
        <div className="
        w-[1px]
        h-[25px]
        bg-[#ababab]
        ml-[15px]
        mr-[15px]
        "/>
        <div className="
        w-[100px]
        flex
        justify-between
        items-center
        ">
          
          
        <VscInbox className="
        text-[black]
        mr-[10px]
        text-[20px]
        "/>
        <BiBell className="
        text-[20px]
        "/>
        <AiOutlineShoppingCart className="
        text-[20px]
        "/>
        </div>
        <div className="
        ml-[30px]
        mr-[4px]
        font-[500]
        text-[14px]
        text-[#6d6d6d]
        ">Williams</div>
        <div className="
        w-[35px]
        h-[35px]
        rounded-[50%]
        ">
          <img src={img1} className="
          object-cover

          "/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header