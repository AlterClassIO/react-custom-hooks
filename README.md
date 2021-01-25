# Custom React Hooks! 🎣 ⚛

A collection of easy-to-use React custom hooks.

- **useEventListener**:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useEventListener.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useEventListener.md)

  ```jsx
  import useEventListener from './useEventListener';

  const Dialog = ({ show = false, onClose = () => null }) => {
    // Event listener to close dialog on click outside element
    useEventListener('mousedown', event => {
      // Do nothing if the event was already processed
      if (event.defaultPrevented) {
        return;
      }
      // Check if click is outside the dialog
      if (!target?.current?.contains(event.target)) {
        onClose();
      }
    });

    // Renders dailog
    return show ? React.createPortal(<div>...</div>, document.body) : null;
  };
  ```

- **useFetch**:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useFetch.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useFetch.md)

  ```jsx
  import useFetch from './useFetch';

  const App = () => {
    const { loading, error, data = [] } = useFetch(
      'https://hn.algolia.com/api/v1/search?query=react'
    );

    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <ul>
          {data?.hits?.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  ```

- **useLocalStorage**:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useLocalStorage.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useLocalStorage.md)

  ```jsx
  import useLocalStorage from './useLocalStorage';

  const defaultSettings = {...};

  const App = () => {
    const [appSettings, setAppSettings] = useLocalStorage(
      'app-settings',
      defaultSettings
    );

    return (
      <div>
        <p>Your application's settings:</p>
        <pre>
          <code>{appSettings}</code>
        </pre>
        <button onClick={() => setAppSettings(defaultSettings)}>Reset settings</button>
      </div>
    );
  };
  ```

- **useMediaQuery**:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useMediaQuery.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useMediaQuery.md)

  ```jsx
  import useMediaQuery from './useMediaQuery';

  const App = () => {
    const canHover = useMediaQuery(
      // Media queries
      ['(hover: hover)'],
      // Values corresponding to the above media queries by array index
      [true],
      // Default value
      false
    );

    const canHoverClass = 'opacity-0 hover:opacity-100 transition-opacity';
    const defaultClass = 'opacity-100';

    return <div className={canHover ? canHoverClass : defaultClass}>...</div>;
  };
  ```

- **useDarkMode**:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useDarkMode.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useDarkMode.md)

  ```jsx
  import useDarkMode from './useDarkMode';

  const App = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
      <div>
        Dark mode:
        <button onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? 'Disable' : 'Enable'}
        </button>
      </div>
    );
  };
  ```
