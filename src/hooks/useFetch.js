import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// Custom hook for fetching data from a specified URL with optional query parameters
export default function useFetch(url, query = "") {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to track the loading status
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to handle data fetching
  useEffect(() => {
    // Function to fetch data asynchronously
    async function fetchData() {
      try {
        // Set loading to true before making the request
        setIsLoading(true);
        // Make a GET request to the specified URL with optional query parameters
        const { data } = await axios.get(`${url}/${query}`);
        // Set the fetched data to the state
        setData(data);
      } catch (err) {
        // If an error occurs, set data to an empty array and display an error toast
        setData([]);
        toast.error(err?.message);
      } finally {
        // Set loading to false after the request is completed (either success or failure)
        setIsLoading(false);
      }
    }

    // Call the fetchData function
    fetchData();
  }, [query, url]); // Dependencies include the query and URL to trigger the effect when they change

  // Return the loading status and fetched data
  return { isLoading, data };
}
