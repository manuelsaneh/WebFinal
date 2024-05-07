import { useState, useEffect } from "react";

// Interface for the viewport dimensions
interface ViewportDimensions {
  width: number;
}

// Hook to get the current viewport dimensions
export const useViewport = (): ViewportDimensions => {
  // State to hold the viewport dimensions
  const [dimensions, setDimensions] = useState<ViewportDimensions>({
    width: window.innerWidth,
  });

  // Function to update the viewport dimensions when the window is resized
  const handleWindowResize = (): void => {
    setDimensions({
      width: window.innerWidth,
    });
  };

  // Effect to add event listener for window resize when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  // Return the viewport dimensions
  return dimensions;
};
