import React, {createContext, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native'
import axios from 'axios';

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=2', {
          responseType: 'json',
        });
        const apiproducts = response.data;
        setProducts(apiproducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);
  const contextValue = {
    products,
  };
  return (
    <DataContext.Provider value={contextValue}>
       {children}
    </DataContext.Provider>
  );
};
