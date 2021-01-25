# useLocalStorage

Sync React state to localStorage.

## Usage

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
