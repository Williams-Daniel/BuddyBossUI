import { useSelector } from "react-redux"

interface iSubSider {
    icon:any,
    text:string,
}

const GlobalSubSider: React.FC<iSubSider> = ({icon,text}) => {

  const toggle = useSelector((state:any)=>state.toggleState)

  // 
  // 
  return (
    <div className={`  flex
    ml-[${!toggle ? "50px" : "40px"}]
    mb-[${!toggle ? "35px" : "45px"}]`}>
      <div className="
      text-[19px]
      ">
      {icon}
      </div>
        <div className="
        text-[14px]
        ">{text}</div>
    </div>
  )
}

export default GlobalSubSider
// ${!toggle ? "50px" : "40px"}
// ${!toggle ? "35px" : "45px"}