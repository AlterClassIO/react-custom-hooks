/**
 * useLocalStorage - Sync React state to localStorage.
 *
 * @author Greg D'Angelo <gregory.dangelo@alterclass.io>
 *
 * @param {string} key - The name of the key to create/update in localStorage.
 * @param {string} initialValue - The initial value to give to the key.
 *
 * @returns {Array} Array that contains a stateful value, and a function to update it while persisting it in localStorage.
 */

export default useLocalStorage = (key = '', initialValue = '') => {
  // React state in sync with the localStorage data
  const [state, setState] = useState(() => {
    // Lazy initialization - only run once
    try {
      // Read localStorage to get the key's value if any
      const item = window.localStorage.getItem(key);
      // Parse stored value or return initialValue if the key does not exist
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If reading localStorage fails, return initialValue as well
      console.error(
        `Unable to read ${key} in localStorage --> Initializing with initial value.`
      );
      return initialValue;
    }
  });

  // Function to update the state and persist data in localStorage
  const setLocalStorageState = newState => {
    try {
      // Support functional updates as with the regular useState hook
      const newStateValue =
        typeof newState === 'function' ? newState(state) : newState;
      // Update React state
      setState(newStateValue);
      // Store value in localStorage
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  };

  return [state, setLocalStorageState];
};
