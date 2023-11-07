

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/userFeature/authSlice'

const store =  configureStore({
    reducer: {
      auth: authReducer,
    },
  })

  export default store;
  