/**
 * useFetch - Fetch data using the Fetch API, handle errors, and indicate loading status.
 *
 * @author Greg D'Angelo <gregory.dangelo@alterclass.io>
 *
 * @param {string} url - The URL to fetch.
 * @param {object} options - The init options object containing any custom settings to apply to the request. See the full list of options here: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
 *
 * @returns {object} An object containing the data fetched from the URL, the error if any occurred, and the status of the request (is loading or not).
 */

export default useFetch = (url = '', options = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Set loading status
    setLoading(true);
    // Use the Fetch API to fetch the data
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        // Update state with fetched data
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch(error => {
        // Update state with error
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    // Cleanup
    return () => (isMounted = false);
  }, [url, options]);

  return { loading, error, data };
};
