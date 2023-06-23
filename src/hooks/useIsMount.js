import { useRef, useEffect } from "react";

export const useIsMount = () => {
  const isMountRef = useRef(true);

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
    }
  }, []);

  return isMountRef.current;
};