export function createStore(reducer) {
  let currentState = {};
  let currentListener = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListener.push(listener);
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListener.forEach(v => v());
    return action;
  }

  dispatch({ type: '@CUSTOMIZE/REDUX' });
  
  return { getState, subscribe, dispatch };
}