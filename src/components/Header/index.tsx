export default function Header ( props: any) {
    const { title, subheader, phone, email } = props
    return (
        <div className="lg:flex w-full justify-between items-end pt-12 ">
            <h1 className="text-5xl font-bold lg:w-96"> {title} </h1>
            <h3 className="font-light lg:text-center">{subheader}</h3>
            <div className="lg:w-96 gap-6 flex justify-start md:justify-end">
                <div>
                    <h3 className="font-light">{phone}</h3>
                    <h3 className="font-light">{email}</h3>
                </div>
            </div>
        </div>
    )
}