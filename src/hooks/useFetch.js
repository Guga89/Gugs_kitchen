import { useCallback, useState } from 'react'

const useFetch = (reqConf) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const getData = useCallback(async function (reqConf) {

        try {
            setIsLoading(true)

            const response = await fetch(reqConf.url, {
                method: reqConf.method ? reqConf.method : 'GET',
                headers: reqConf.headers ? reqConf.headers : {},
                body: reqConf.body ? JSON.stringify(reqConf.body) : null
            });

            if (!response.ok) {
                throw new Error('Something went wrong! :(')
            }

            const dataTransformed = await response.json();
            setData(dataTransformed)

        } catch (error) {
            setError(error)
        }

        setIsLoading(false)

    }, [])


    return { data, isLoading, error, getData }

}

export default useFetch