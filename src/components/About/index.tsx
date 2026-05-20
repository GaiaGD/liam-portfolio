
export default function About ( props: any) {
    const { intro, img } = props
    return (
        <div className="w-full py-32">
            <div className="my-20 md:my-auto py-12">
                <p className="font-light text-center">{intro}</p>
            </div>
            <div className="flex items-center justify-center">
            <img
                className="h-96 md:w-1/2 w-full rounded-lg object-cover object-center transition duration-300 ease-in-out"
                src={img.url}
                alt={img.title}
            />
           </div>
        </div>
    )
}