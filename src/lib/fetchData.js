/**
 * Function that makes requests to the api
 * @param {*} url
 * @param {*} requestOptions
 * @returns data or request error
 */
const fetchData = async (url, requestOptions) => {
  if (!url) return;
  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return response.json().then((error) => {
        throw new Error(error.message);
      });
    }
  } catch (error) {
    return new Error(error);
  }
};

export default fetchData;
