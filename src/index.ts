import { createSagaMiddleware as createSagaExtendedMiddleware } from "@sima-land/isomorph/utils/redux-saga";
import createSagaMiddleware from "redux-saga";

console.log(typeof createSagaMiddleware);
console.log(createSagaMiddleware);

const middleware = createSagaExtendedMiddleware({
  onSagaError(error) {
    console.error(error);
  },
  onConfigError(error) {
    console.error(error);
  },
  onTimeoutInterrupt(info) {
    console.error("Error", info.timeout);
  },
});

