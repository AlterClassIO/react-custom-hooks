# Custom React Hooks! 🎣 ⚛

A collection of easy-to-use React custom hooks.

- useEventListener:
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

- useFetch:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useFetch.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useFetch.md)

- useLocalStorage:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useLocalStorage.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useLocalStorage.md)

- useMediaQuery:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useMediaQuery.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useMediaQuery.md)

- useDarkMode:
  [src](https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useDarkMode.js)
  /
  [doc](https://github.com/AlterClassIO/react-custom-hooks/blob/master/docs/useDarkMode.md)
