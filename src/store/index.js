import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slice/counter';
import authReducer from './slice/authentication';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
