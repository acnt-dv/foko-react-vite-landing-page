import {motion} from "framer-motion";

const LoadingOverlay = ({ show, text = 'FOKO' }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center">
            <motion.span
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="text-white text-3xl md:text-5xl font-semibold tracking-[0.5em]"
            >
                {text}
            </motion.span>
        </div>
    );
};

export default LoadingOverlay;