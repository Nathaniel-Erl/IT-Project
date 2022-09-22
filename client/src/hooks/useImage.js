import React, { useEffect, useState } from 'react'
import { fetchImages } from '../api/images';

const useImage = (param) => {
    const [response, setResponse] = useState([]);

    const getImage = async (url) => {
        try {
            const res = await fetchImages(url)
            setResponse(res.data.results);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getImage(param)
    }, [param])
    
    return {
        response,
        getImage
    }
}

export default useImage