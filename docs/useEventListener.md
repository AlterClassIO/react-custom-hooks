# useEventListener

Easily set up an event listener using React best practices.

## Usage

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
