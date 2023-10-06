// import GlobalSubSider from "./globalSubSider"
// import { PiPulseLight} from "react-icons/pi"
// import { VscInbox} from "react-icons/vsc"


interface iGlobal {
  title:string,
  div:any
}
const GlobalSider:React.FC<iGlobal> = ({title,div}) => {

  return (
    <div>
        <div className="
        text-[15px]
        mb-[10px]
        ml-[20px]
        text-[grey]
        ">{title}</div>
        <div className="
        mb-[20px]
        ">
            {div}
        </div>
        {/* <div className="
        mb-[15px]
        ">
            
            <GlobalSubSider
            icon={<PiPulseLight className="
            w-[20px]
            h-[20px]
            flex
            justify-center
            items-center
            border-[1.5px]
            border-[grey]
            rounded-[5px]
            mr-[10px]
            "/>}
            text="My Timeline" 
            />
            </div>
            <div className="
        mb-[20px]
        ">
            <GlobalSubSider
            icon={<VscInbox className="
            text-[grey]
            text-[22px]
            mr-[9px]
            "/>}
            text="My Inbox" 
            />
        </div> */}
    </div>
  )
}

export default GlobalSider