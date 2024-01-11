import React, {createContext, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native'
import axios from 'axios';

// Create a context with default values
const DataContext = createContext();

// Create a custom hook to use the data context
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({children}) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=1', {
          responseType: 'json',
        });
        const apiproducts = response.data;
        console.log(JSON.stringify(apiproducts.products, null, 2)); 
        setProducts(apiproducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

   
  // Run once when the component mounts

  const contextValue = {
    products,
  };

  return (
    <DataContext.Provider value={contextValue}>
       {children}
    </DataContext.Provider>
  );
};
