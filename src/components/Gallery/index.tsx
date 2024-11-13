
export default function Gallery ( props: any) {
    const { title, tiles } = props

    return (
        <div className="pt-36 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tiles.map((image: any, index: number) => (
            <div key={index} className="group">
                <img
                    className="h-96 w-full rounded-lg object-cover object-center hover:opacity-75 transition duration-300 ease-in-out"
                    src={image.url}
                    alt={image.title}
                />
            </div>
        ))}
    </div>
    )
}