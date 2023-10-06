


interface iSub {
    img : string,
    text1 : string,
    text2 : string
}
const SubGlobalCard2:React.FC<iSub> = ({    img ,
    text1 ,
    text2 }) => {
  return (
    <div className="
    flex
    items-center
    mt-[20px]
    mb-[10px]
    ">
        <img className="
        w-[55px]
        h-[55px]
        rounded-[20px]
        "
        src={img}
        />
        <div className="
        ml-[10px]
        leading-6
        ">
            <div className="
            text-[16px]
            font-[500]
            ">
            {text1}
            </div>
            <div className="
            text-[15px]
            ">{text2}</div>
        </div>
    </div>
  )
}

export default SubGlobalCard2