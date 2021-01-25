# useDarkMode

Easily implement and add dark mode to your React app with this custom hook.

## Usage

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
