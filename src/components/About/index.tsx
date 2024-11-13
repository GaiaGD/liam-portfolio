
export default function About ( props: any) {
    const { intro } = props
    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-1/2 my-20 md:my-60">
                <p className="font-light text-center">{intro}</p>
            </div>
            <div className="flex items-center justify-center">
            </div>
        </div>
    )
}