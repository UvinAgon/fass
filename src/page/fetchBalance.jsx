import axios from "axios";
import { useEffect, useState } from "react";

const UseDataFetch = (url) => {
    const [financialData,setFinancialData] = useState([])
    const [error,setError] = useState("")
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(url)
        .then(response => {
            setFinancialData(response.data)
            setIsLoading(false)
        })
        .catch(error => {
            setError("Something went wrong.",error)
            setIsLoading(false)
        })
    }, [url])

    return { financialData, error, isLoading }
}

export default UseDataFetch