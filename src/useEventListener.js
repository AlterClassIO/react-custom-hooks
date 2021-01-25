/**
 * useEventListener - Easily set up an event listener using React best practices.
 *
 * @author Greg D'Angelo <gregory.dangelo@alterclass.io>
 *
 * @param {string} eventType - The name of the event to listen for.
 * @param {function} listener - The function to run when an event of the specified type occurs.
 * @param {DOM Element} target - The DOM element under which to listen for the event.
 * @param {object} options - The options for the event listener. See available options here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 *
 * @returns {undefined}
 */

export default useEventListener = (
  eventType = '',
  listener = () => null,
  target = window,
  options = null
) => {
  // Create a React ref's object that stores the listener and persist it accross renders
  const savedListener = useRef();

  // Update ref.current value if listener changes
  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  // Add (and remove) the event listener
  useEffect(() => {
    // Make sure target supports addEventListener
    if (!target?.addEventListener) return;

    // Create event listener that calls listener function stored in ref
    const eventListener = event => savedListener.current(event);

    // Add event listener
    target.addEventListener(eventType, eventListener, options);

    // Remove event listener on cleanup
    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target]);
};
