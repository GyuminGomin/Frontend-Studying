import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/posts')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            })
    }, []);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    )
}