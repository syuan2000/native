import {useState, useEffect} from 'react';
import axios from 'axios';
import dummyData from './dummy';


const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': 'e3a50bce4dmshc7431cb6e711d00p1cf0f9jsn8a7012be2a9f',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
    
    };

    const fetchData = async() =>{
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);

        }catch(error){
            setError(error);

        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }


    // const refetch = () =>{
    // }
    return {data, isLoading, error, refetch};
}

export default useFetch;
