import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '../components/ProductCard';

export const ProductDataLoad = () => {
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setGetData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>loading data...</div>;
  }

  return (
    <>
      <div className='products'>
        {getData?.map((advertisement) => (
          <ProductCard
            key={advertisement.id}
            title={advertisement.title}
            sumary={advertisement.sumary}
            price={advertisement.price}
            category={advertisement.category}
            city={advertisement.city}
          />
        ))}
      </div>
    </>
  );
};
