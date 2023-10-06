import {BsLayoutTextSidebar, BsLayoutTextSidebarReverse, BsPerson} from "react-icons/bs"
import {TbPhotoSquareRounded} from "react-icons/tb"
import {PiPulseLight} from "react-icons/pi"
import {AiOutlineSetting} from "react-icons/ai"
import {GiGraduateCap} from "react-icons/gi"
import {BiSolidNetworkChart,BiChat} from "react-icons/bi"
import {HiOutlineUserGroup,HiDocumentDuplicate} from "react-icons/hi"
import {VscInbox} from "react-icons/vsc"
import GlobalSider from "../reUse/globalSider"
import GlobalSubSider from "../reUse/globalSubSider"
import { useDispatch, useSelector } from "react-redux"
import { changeState } from "../../global/globalState"
const Sider = () => {
  const dispatch = useDispatch()
  const toggle = useSelector((state:any)=>state.toggleState)
console.log(!toggle)
  const onChangeState = ()=>{
    dispatch(changeState(!toggle))
  }
  

  //
  return (
    <div className={` w-[${!toggle ? "203px" : "83px"}]
    min-h-[100vh]
    fixed
    hover:transition-all
    duration-75
    hover:cursor-pointer
    shadow-lg
    `}>
      <div className="
      w-[100%]
      h-[80px]
      flex
      items-center
      ">
        { !toggle ? (<BsLayoutTextSidebar className ="
        ml-[40px]
        text-[grey]
        "
        onClick={onChangeState}
        />):(<BsLayoutTextSidebarReverse className ="
        ml-[40px]
        text-[grey]
        "
        onClick={onChangeState}
        />)}
      </div>
      <div className="
      w-[100%]
      ">
        <GlobalSider
        div={<GlobalSubSider 
        icon={<BsPerson className={`ml-[${!toggle ? "0px" : ""}] mr-[10px] text-[grey]`}/>} 
        text={`${!toggle ? "My Profile" : ""}`}/>}
        title={`${!toggle ? "PERSONAL" : ""}`}
        />
        <GlobalSubSider
        icon={<PiPulseLight className="
        mr-[10px]
        h-[20px]
        w-[20px]
        border-[1.5px]
        border-[grey]
        rounded
        "/>}
        text={`${!toggle ? "My Timeline" : ""}`}
        />
        <GlobalSubSider
        icon={<VscInbox className="
        text-[grey]
        mr-[10px]
        "/>}
        text={`${!toggle ? "My Inbox" : ""}`}
        />
        {toggle ? <div className="
        h-[1px]
        w-[20px]
        bg-[grey]
        ml-[40px]
        mt-[20px]
        mb-[20px]
        hover:transition-all
        duration-300
        "/> : ""}
        <GlobalSider
        div={<GlobalSubSider 
        icon={<HiOutlineUserGroup className={`ml-[${!toggle ? "0px" : ""}] mr-[10px]
        text-[grey]
        `}/>} 
        text={`${!toggle ? "My Groups" : ""}`}/>}
        title={`${!toggle ? "COMMUNITY" : ""}`}
        />
        <GlobalSubSider
        icon={<BiSolidNetworkChart className="
        text-[grey]
        mr-[10px]
        "/>}
        text={`${!toggle ? "My Connection" : ""}`}
        />
        <GlobalSubSider
        icon={<BiChat className="
        text-[grey]
        mr-[10px]
        "/>}
        text={`${!toggle ? "My Discussion" : ""}`}
        />
        <GlobalSubSider
        icon={<GiGraduateCap className="
        text-[grey]
        mr-[10px]
        "/>}
        text={`${!toggle ? "My Courses" : ""}`}
        />
        {toggle ? <div className="
        h-[0.5px]
        w-[20px]
        bg-[grey]
        ml-[40px]
        mt-[20px]
        mb-[20px]
        hover:transition-all
        duration-300
        "/> : ""}
        <GlobalSider
        div={<GlobalSubSider 
        icon={<TbPhotoSquareRounded className={`ml-[${!toggle ? "0px" : ""}] mr-[10px]
        text-[grey]
        `}/>} 
        text={`${!toggle ? "My Photos" : ""}`}/>}
        title={`${!toggle ? "MEDIA" : ""}`}
        />
        
        <GlobalSubSider
        icon={<HiDocumentDuplicate className="
        text-[grey]
        mr-[10px]
        "/>}
        text={`${!toggle ? "My Documents" : ""}`}
        />
      </div>
      <div className={` w-[100%]
      mt-[40px]
      flex
      items-center
      px-[${!toggle ? "50px" : "40px"}]`}>
        <AiOutlineSetting className="
        text-[20px]
        text-[grey]
        "/>
        {!toggle ? <div className="
        ml-[10px]
        text-[15px]
        ">Settings</div> : ""}
      </div>
    </div>
  )
}

export default Sider
// ${!toggle ? "50px" : "40px"}