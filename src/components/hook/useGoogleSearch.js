import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_KEY from '../keys'
const contextKey = '271063ff6c18fb34e'

const useGoogleSearch = (searchValue) => {
    const[data,setdata]= useState([])
    useEffect(()=>{
        const fetchdata = async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${contextKey}&q=${searchValue}`)
                .then((res)=> res.json())
                .then((Result)=> setdata(Result))
                .catch((err)=>console.log(err))
            }

        fetchdata()
    },[searchValue])

    return {data}
}

export default useGoogleSearch
