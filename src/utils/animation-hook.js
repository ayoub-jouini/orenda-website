import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useAnimationHook = () => {
    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1.5
                }
            })
        }
        if (!inView) {
            animation.start({
                y: +500,
                opacity: 0
            })
        }

    }, [inView])

    return { animation, ref };

}

export default useAnimationHook;