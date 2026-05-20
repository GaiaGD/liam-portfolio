import { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { motion } from "framer-motion";
import Picture from "../Picture";

export default function Gallery ( props: any) {
    const { pictures } = props
    const [open, setOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(-1)

    useEffect(() => {
        if (open) {
          // Disable scrolling when modal is open
          document.body.style.overflow = "hidden";
        } else {
          // Re-enable scrolling when modal is closed
          document.body.style.overflow = "";
        }
        return () => {
          // Cleanup to ensure no unintended side effects
          document.body.style.overflow = "";
        };
    }, [open]);

    // const onOpenModal = () => setOpen(true);
    const onOpenModal = (index: number) => {
        setOpen(true)
        setModalIndex(index)
    }
    const onCloseModal = () => setOpen(false);

    const goToPrevPicture = () => {
        setModalIndex((prevModalIndex) => {
            if (modalIndex > 0) {
              return prevModalIndex - 1; // Move to next picture
            }
            setOpen(false)
            return -1; // Loop back to the first picture
          });
    }

    const goToNextPicture = () => {
        console.log('next')
        setModalIndex((prevModalIndex) => {
            if (prevModalIndex < pictures.length - 1) {
              return prevModalIndex + 1; // Move to next picture
            }
            setOpen(false)
            return -1; // Loop back to the first picture
          });
    }

    const pictureRef = useRef(null);

    // when clicked outside picture
    // useEffect(() => {
    //     const handleClickOutside = (event: Event) => {
    //       if (pictureRef.current && !pictureRef.current.contains(event.target)) {
    //         onCloseModal(); // Close modal if click is outside
    //       }
    //     };
    
    //     // Add event listener on mount
    //     document.addEventListener("mousedown", handleClickOutside);
    
    //     // Clean up the event listener on unmount
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   }, [onCloseModal]); // Adding onCloseModal as a dependency

    return (
    <>

        <motion.div
            className="pt-24 grid grid-cols-1 gap-4 md:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1, // Stagger the animations by 0.3 seconds
                },
                },
            }}
            >
            {pictures.map((picture: any, index: number) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 0 }, // Start offscreen or invisible
                    visible: { opacity: 1, y: 0 },  // Move to the normal position
                }}
                >
                    <Picture onOpenModal={onOpenModal} key={index} index={index} picture={picture} />
                </motion.div>
            ))}
        </motion.div>

        <div style={{ display: open ? "grid" : "none" }} className="fixed inset-0 place-items-center bg-black bg-opacity-90">
            {modalIndex >= 0 && <img ref={pictureRef} src={pictures[modalIndex].url} className="lg:w-2/3 w-5/6 h-auto rounded-lg shadow-lg" />}
            <div onClick={goToPrevPicture} className="absolute h-screen flex items-center justify-start left-0 w-1/2 p-2 md:p-6 cursor-pointer">
                <MdArrowBackIos />
            </div>
            <div onClick={goToNextPicture} className="absolute h-screen flex items-center justify-end right-0 w-1/2 p-2 md:p-6 cursor-pointer transform">
                <div className="rotate-180">
                    <MdArrowBackIos/>
                </div>
            </div>
            <div className="absolute top-0 right-0 p-6 cursor-pointer">
                <IoCloseSharp onClick={onCloseModal} />
            </div>
        </div>

    </>
    )
}