const useMediaQuery = (queries = [], values = [], defaultValue) => {
  const mediaQueryList = queries.map(q => window.matchMedia(q));
  const getValue = useCallback(() => {
    const index = mediaQueryList.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [mediaQueryList, values, defaultValue]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryList.forEach(mql => mql.addEventListener('change', handler));

    return () =>
      mediaQueryList.forEach(mql => mql.removeEventListener('change', handler));
  }, [getValue, mediaQueryList]);

  return value;
};

export default useMediaQuery;
