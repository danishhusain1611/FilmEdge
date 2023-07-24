import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api"; // traditional method.
const useFetch = (url) => {
    const [data, setData] = useState(null); // three states with null value.
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url) // we will make it dynamic because we will pass it through the component.
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;