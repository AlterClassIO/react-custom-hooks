# useMediaQuery

Easily use media queries in your React components, listen to changes, and sync
with your component's state.

## Usage

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
