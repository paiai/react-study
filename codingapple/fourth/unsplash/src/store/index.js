import { createStore } from './redux';
import reducers from './reducer'

const configure = () => {
  const store = createStore(reducers /* devTools */);
  //const devTools = window.__REDUX
  return store;
}

export default configure();
