import {useRef} from "react";

const FadingTextBox = ({text}) => {
    const textBoxRef = useRef(null);

    return (
        <div className="flex w-full items-center justify-center self-center mt-[30px] md:mt-[50px]">
            <p
                ref={textBoxRef}
                className="flex w-full h-[16vh] overflow-y-auto text-10 md:text-16 text-justify text-black no-scrollbar my-[30px] md:my-[50px] leading-relaxed"
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    lineHeight: '2rem',
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default FadingTextBox;
