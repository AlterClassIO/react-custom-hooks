/**
 * useDarkMode - Easily implement and add dark mode to your React app with this custom hook.
 *
 * @author Greg D'Angelo <gregory.dangelo@alterclass.io>
 *
 * @requires useMediaQuery
 * @requires useLocalStorage
 *
 * @returns {Array} Array that contains a stateful value corresponding to the dark mode state, and a function to update it while persisting it in localStorage.
 */

export default useDark = () => {
  // Check user's browser/OS preference for dark mode. Use it to initialize the state.
  const prefersDarkMode = useMediaQuery(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );

  // Persist dark mode state in local storage
  const [enabled, setEnabled] = useLocalStorage('dark-mode', prefersDarkMode);

  // Effect to set/unset dark mode by adding/removing the 'dark' class to the document.body
  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [enabled]);

  // Return enabled state and update function
  return [enabled, setEnabled];
};
