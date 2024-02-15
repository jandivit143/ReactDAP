// Custom Hook - reusability logic of fetching data from url
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        // fetching the data from RESTFul Service - doing side effect stuff in useEffect hook only once
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    },[url]);

    return [data];
}
export default useFetch;