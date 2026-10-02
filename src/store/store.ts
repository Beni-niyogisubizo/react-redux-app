// Author: Beni Niyogisubizo

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducers";

const logger = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
