const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
