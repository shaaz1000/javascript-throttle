let apiCalled;

const throttle = (fn, delay) => {
  if (apiCalled) return;
  apiCalled = true;

  setTimeout(() => {
    fn();
    apiCalled = false;
  }, delay);
};

const sendEmail = () => {
  throttle(() => {
    // make an api call
  }, 500);
};
