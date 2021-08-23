import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export function ToastAlert() {
  const [position, setPosition] = useState("bottom-right");
  useEffect(() => {
    setPosition(window.innerWidth > 800 ? "top-right" : "top-center");
  }, [window.innerWidth]);
  return <Toaster position={position} reverseOrder={false} />;
}
