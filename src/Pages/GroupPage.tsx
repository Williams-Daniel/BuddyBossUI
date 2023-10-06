import { BiSearch } from "react-icons/bi"
import { IoMenuOutline } from "react-icons/io5"
import { BsGrid } from "react-icons/bs"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import Header from "../Component/Static/Header"
import { useState } from "react"
import GlobalCard from "../Component/reUse/globalCard"

import img from "../assets/pexels-anh-nguyen-16946947.jpg"
import img1 from "../assets/circle6.png"
import img2 from "../assets/circle5.png"
import img3 from "../assets/circle1.png"
import Globalcard2 from "../Component/reUse/globalcard2"

const GroupPage = () => {

  const [state,setState] = useState<boolean>(false)

  const onClick = ()=>{
    setState(!state)
  }
  return (
    <div className="
    m in-h-[100vh]
    flex
    flex-col
    items-center
    bg-[#f2f2f2]
    ">
      <Header/>
      <div className="
      min-h-[100vh]
      w-[95%]
      flex
      justify-between
    bg-[#f2f2f2]
      ">
        <div className="
        w-[67%]
        ">
        <div  className="
        w-[100%]
        h-[70px]
        flex
        justify-between
        items-center
        ">
          <div className="
          text-[28px]
          text-[#393E41]
          font-[700]
          ">Groups</div>
          <div className={` flex
          items-center
          justify-around
          bg-[white]
          border-[1px]
          border-[${!state ? "red" :"grey"}]
          w-[220px]
          h-[35px]
          rounded-[8px]`}
          onClick={onClick}
          >
            <BiSearch className="
            text-[#acacac]
            text-[19px]
            "/>
            <input className="
            w-[170px]
            outline-none
            text-[13px]
            "
            placeholder="Search Groups..."
            />
          </div>
        </div>
        <div className="
        w-[100%]
        mt-[20px]
        ">
        <div className="
        flex
        justify-between
        w-[58%]
        
        ">
          <div className="
          flex
          items-center
          ">
            <div className="
            text-[14px]
            font-[500]
            text-[#636363]
            "
            >All Groups</div>
            <div className="
            w-[18px]
            h-[18px]
            flex
            justify-center
            items-center
            rounded
            border-[1px]
            border-[grey]
            text-[13px]
            ml-[10px]
            text-[#636363]

            ">15</div>
          </div>
          <div className="
          flex
          items-center
          ">
            <div className="
            text-[14px]
            font-[500]
            text-[#636363]
            ">My Groups</div>
            <div className="
            w-[18px]
            h-[18px]
            flex
            justify-center
            items-center
            rounded
            border-[1px]
            border-[grey]
            text-[13px]
            text-[#636363]
            ml-[10px]
            ">15</div>
          </div>
          <div>
            <div className="
            text-[14px]
            text-[#636363]
            font-[500]
            ">Create a Group</div>
          </div>
        </div>
        <div className="
        w-[100%]
        mt-[20px]
        flex
        justify-end
        ">
          <div className="
          flex
          items-center
          ">
            <div className="
            flex
            items-center
            justify-center
            w-[135px]
            h-[35px]
            border-[1px]
            border-[lightgrey]
            text-[14px]
            rounded-[5px]
        bg-white

            ">
              Recently Active
              <MdOutlineKeyboardArrowDown/>
            </div>
            <div className="
            w-[70px]
            h-[35px]
            border-[1px]
            border-[lightgrey]
            flex
            justify-around 
            items-center
            rounded-[4px]
            ml-[10px]
        bg-white

            ">
              <BsGrid className="
              text-[22px]
              "/>
              <div className="
              h-[100%]
              w-[1px]
              bg-[lightgrey]
              "/>
              <IoMenuOutline className="
              text-[25px]
              "/>
            </div>
          </div>
        </div>
        </div>
        <div className="
        flex
        justify-around
        mt-[20px]
        flex-wrap
        ">
        <GlobalCard 
        img1={img}
        img2={img}
        img3={img1}
        img4={img2}
        img5={img3}
        text1="Sport Players"
        text2="Public"
        text3="Group"
        />
        <GlobalCard 
        img1={img}
        img2={img}
        img3={img1}
        img4={img2}
        img5={img3}
        text1="Sport Players"
        text2="Public"
        text3="Group"
        />
        <GlobalCard 
        img1={img}
        img2={img}
        img3={img1}
        img4={img2}
        img5={img3}
        text1="Sport Players"
        text2="Public"
        text3="Group"
        />
        <GlobalCard 
        img1={img}
        img2={img}
        img3={img1}
        img4={img2}
        img5={img3}
        text1="Sport Players"
        text2="Public"
        text3="Group"
        />
        <GlobalCard 
        img1={img}
        img2={img}
        img3={img1}
        img4={img2}
        img5={img3}
        text1="Sport Players"
        text2="Public"
        text3="Group"
        />
        <GlobalCard 
        img1={img}
        img2={img}
        img3={img1}
        img4={img2}
        img5={img3}
        text1="Sport Players"
        text2="Public"
        text3="Group"
        />
        </div>
        </div>
        <div className="
        w-[32%]
        flex
        flex-col
        items-center
        ">
          <Globalcard2 
          text1="Groups"
          text2="NEWEST"
          text3="ACTIVE"
          text4="POPULAR"
        />
        </div>
      </div>
    </div>
  )
}

export default GroupPage