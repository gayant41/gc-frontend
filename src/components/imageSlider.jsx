import { useState } from "react";

export default function ImageSlider(props) {
    const images = props.images;
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col w-full aspect-square items-center justify-center space-y-6 p-6 bg-[#f2eed9] rounded-2xl shadow-lg relative">
            {/* Main Image */}

            <img
                src={images[activeImage]}
                alt="Main product image"
                className="w-full  object-cover aspect-square"
            />
            <div className="absolute bottom-0 w-full h-[80px] backdrop-brightness-80">
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="w-16 h-16 cursor-pointer object-cover mx-2"
                            onClick={() => setActiveImage(index)}
                        />
                    ))}

                </div>

            </div>


            {/* Thumbnail Gallery */}
            <div className="flex gap-4">

            </div>
        </div >

    )

}