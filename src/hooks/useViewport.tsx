import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const THROTTLE_SPEED = 100;

export const useViewport = () => {
  const [pageYOffset, setYOffset] = useState<number>(0);
  const [innerWidth, setInnerWidth] = useState<number>(720);
  const [innerHeight, setInnerHeight] = useState<number>(480);

  const handleScroll = () => {
    setYOffset(window.pageYOffset);
  };

  const handleResize = (): void => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  };

  const throttledHandleScroll = throttle(handleScroll, THROTTLE_SPEED);
  const throttledHandleResize = throttle(handleResize, THROTTLE_SPEED);

  useEffect(() => {
    throttledHandleScroll(); // run once to establish a base;
    throttledHandleResize();
    window.addEventListener("scroll", throttledHandleScroll);
    window.addEventListener("resize", throttledHandleResize);
    // The return will execute on unmount, cleaning up the listener.
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  return { pageYOffset, innerWidth, innerHeight };
};

export default useViewport;
