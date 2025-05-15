import React, { useEffect, useRef, useState } from "react";

const FadingTextBox = ({ text }) => {
    const scrollBoxRef = useRef(null);
    const [opacities, setOpacities] = useState([]);

    // Split the input text into lines based on the newline character
    const lines = text.split("\n");

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollBoxRef.current) return;

            const scrollBox = scrollBoxRef.current;
            const scrollHeight = scrollBox.scrollHeight - scrollBox.clientHeight;
            const scrollTop = scrollBox.scrollTop;

            const newOpacities = lines.map((_, index) => {
                // Calculate distance from top of the scroll container
                const linePosition = index * 30;  // You can adjust the line height factor (30px)
                const distanceFromTop = Math.abs(linePosition - scrollTop);

                // Calculate opacity based on the line's position
                let opacity = 1 - distanceFromTop / scrollHeight;

                // Fade lines gradually towards 10% opacity as they scroll
                opacity = Math.max(0.1, opacity);

                return opacity;
            });

            setOpacities(newOpacities);
        };

        const scrollBox = scrollBoxRef.current;
        if (scrollBox) {
            scrollBox.addEventListener("scroll", handleScroll);
            handleScroll(); // Initialize opacity on first render
        }

        return () => {
            if (scrollBox) {
                scrollBox.removeEventListener("scroll", handleScroll);
            }
        };
    }, [lines.length]);

    return (
        <div className="flex w-full items-center justify-center self-center mt-[30px] lg:mt-[50px]">
            <div
                ref={scrollBoxRef}
                className="w-full h-[20vh] overflow-y-auto text-10 lg:text-16 text-justify text-black space-y-6 no-scrollbar my-[30px] lg:my-[50px]"
            >
                {/* Render the text as word-wrapped lines */}
                {lines.map((line, index) => (
                    <p
                        key={index}
                        className="transition-opacity duration-300 text-justify leading-relaxed w-full mx-auto"
                        style={{ opacity: opacities[index] , textAlign: "justify", hyphens: "auto" }}
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default FadingTextBox;
