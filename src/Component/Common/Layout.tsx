import { Outlet } from "react-router-dom"
import Sider from "../Static/Sider"
import { useSelector } from "react-redux"

const Layout = () => {
  const toggle = useSelector((state:any)=>state.toggleState)
  return (
    <div>
        <div className="
        flex
        ">
        <Sider/>
        <div className="
        w-[100vw]
        min-h-[100vh]
        flex
        justify-end
        hover:transition-all
          duration-75
          overflow-hidden
        ">
          <div className={`w-[${!toggle ? "calc(100vw-220px)":"calc(100vw-100px)"}] 
          hover:transition-all
          duration-75
          bg-[red]
          `}>
          <Outlet/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Layout
// ${!toggle ? "calc(100vw-220px)":"calc(100vw-100px)"}
// 