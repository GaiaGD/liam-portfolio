import { IoMailOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";

export default function Header ( props: any) {
    const { title, subheader } = props
    return (
        <div className="block lg:flex w-full justify-between items-end pt-12 ">
            <h1 className="text-5xl font-bold w-96"> {title} </h1>
            <h3 className="font-light lg:text-center">{subheader}</h3>
            <div className="flex items-center lg:justify-end w-96 gap-6">
                <IoMailOutline />
                <AiOutlinePhone />
            </div>
        </div>
    )
}