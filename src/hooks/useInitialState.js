import { useState, useEffect } from 'react';

const useInitialState = (API, requestOptions) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(API, requestOptions)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return data;
};

export default useInitialState;
