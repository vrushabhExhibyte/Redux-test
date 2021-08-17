import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import { logger } from "redux-logger";
// import rootSaga from "../sagas";
// import constants from "../constants";

const configureStore = () => {
  //   const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(logger));
  store.subscribe(() => localStorage(store.getState()));
  //   sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
// localStorage(),
