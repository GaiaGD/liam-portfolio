import { IoMailOutline } from "react-icons/io5";

export default function Header ( props: any) {
    const { title, subheader } = props
    return (
        <div>
            <h1 className="text-5xl font-bold text-center"> {title} </h1>
            <h3 className="font-light text-center">{subheader}</h3>
            <div className="flex items-center justify-center">
                <IoMailOutline />
                <p>Email</p>
                <IoMailOutline />
                <p>Mobile</p>
                <IoMailOutline />
            </div>
        </div>
    )
}