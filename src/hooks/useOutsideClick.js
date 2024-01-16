import { useEffect } from "react";

// Custom hook to detect clicks outside a specified DOM element (ref) with an exception element
export default function useOutsideClick(ref, exceptionId, cb) {
  useEffect(() => {
    // Function to handle outside clicks
    function handleOutsideClick(event) {
      // Check if the clicked element is outside the specified ref and not the exception element
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exceptionId
      ) {
        // Call the provided callback function
        cb();
      }
    }

    // Add an event listener for mousedown events
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, cb, exceptionId]); // Dependencies include the ref, callback function, and exceptionId to trigger the effect when they change

  // No return value as this hook is primarily for its side effect
}
