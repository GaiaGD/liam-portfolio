import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Picture (props: any){
    const {index, picture, onOpenModal} = props

    return (
        <>
            <div onClick={() => onOpenModal(index)} className="picture-tile">
                <img
                    className="h-96 w-full rounded-lg object-cover object-center hover:opacity-75 transition duration-300 ease-in-out"
                    src={picture.url}
                    alt={picture.title}
                />
            </div>
        </>
    )
}