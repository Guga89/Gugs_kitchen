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

    const postData = useCallback(async function (reqConf) {

        try {
            setIsLoading(true)

            const response = await fetch(reqConf.url, {
                method: reqConf.method ? reqConf.method : 'POST',
                headers: reqConf.headers ? reqConf.headers : {},
                body: reqConf.body ? JSON.stringify(reqConf.body) : null
            });

            if (!response.ok) {
                throw new Error('Something went wrong! :(')
            }
            console.log('Order succesfully submitted!')

            // const dataTransformed = await response.json();
            // setData(dataTransformed)

        } catch (error) {
            setError(error)
        }

        setIsLoading(false)
        // history.go(-1) //will redirect to the previous page before the creat form
        // history.push('/')

    }, [])
    return { data, isLoading, error, getData, postData }

}

export default useFetch