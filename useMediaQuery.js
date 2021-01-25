/**
 * useMediaQuery - Easily use media queries in your React components, listen to changes, and sync with your component's state.
 *
 * @author Greg D'Angelo <gregory.dangelo@alterclass.io>
 *
 * @param {Array} queries - Array of strings corresponding to media queries.
 * @param {Array} values - Values matching media queries. Order matters.
 * @param defaultValue - Default value of no media query matches.
 *
 * @returns value - The value corresponding to the media query that matched.
 */

export default useMediaQuery = (queries = [], values = [], defaultValue) => {
  // Array containing a media query list for each matched media query
  const mediaQueryList = queries.map(q => window.matchMedia(q));

  // Function to retrieve the corresponding value based on the matching media query
  const getValue = useCallback(() => {
    // Get index of first media query that matches
    const index = mediaQueryList.findIndex(mql => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [mediaQueryList, values, defaultValue]);

  // React state to store the matched value
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    // Set a listener for each media query
    mediaQueryList.forEach(mql => mql.addEventListener('change', handler));
    // Remove listeners on cleanup
    return () =>
      mediaQueryList.forEach(mql => mql.removeEventListener('change', handler));
  }, [getValue, mediaQueryList]);

  return value;
};
