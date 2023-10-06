// import SubGlobalCard2 from "./subGlobalCard2"
import img from "../../assets/pexels-anh-nguyen-16946947.jpg"

import SubGlobalCard2 from "./subGlobalCard2"


interface iGlobal {
    text1: string,
    text2: string,
    text3: string,
    text4: string,
}
const Globalcard2: React.FC<iGlobal> = ({
    text1,
    text2,
    text3,
    text4
}) => {
  return (
    <div className="
    w-[90%]
    h-[460px]
    mt-[18px]
    rounded-[8px]
    flex
    justify-center
    shadow-md
    border-[1px]
    border-[lightgrey]
        bg-white
    ">
        <div className="
        w-[90%]
        ">
        <div className="
        mt-[20px]
        text-[20px]
        font-[500]
        ">{text1}</div>
        <div className="
        flex
        w-[200px]
        justify-between
        ">
            <div className="
            text-[15px]
            font-[500]
            ">{text2}</div>
            <div className="
            text-[15px]
            font-[500]
            ">{text3}</div>
            <div className="
            text-[15px]
            font-[500]
            ">{text4}</div>
        </div>
        <SubGlobalCard2
        img={img}
        text1="Sport Player"
        text2="active a year ago"
        />
        <SubGlobalCard2
        img={img}
        text1="Sport Player"
        text2="active a year ago"
        />
        <SubGlobalCard2
        img={img}
        text1="Sport Player"
        text2="active a year ago"
        />
        <SubGlobalCard2
        img={img}
        text1="Sport Player"
        text2="active a year ago"
        />
        
        <div className="
        mt-[30px]
        w-[80px]
        h-[35px]
        bg-[lightgrey]
        flex
        justify-center
        items-center
        rounded-[5px]
        ">SEE ALL</div>
        </div>
    </div>
  )
}

export default Globalcard2