import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import navigationBarSlice from '../features/NavigationBarSlice'
import productsSlice from '../features/ProductsSlice'
import userSlice, { checkAuthMiddleware } from '../features/UserSlice'
import notificationSlice from '../features/NotificationSlice'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	notification: notificationSlice,
	navigationBar: navigationBarSlice,
	products: productsSlice,
	user: userSlice,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(checkAuthMiddleware),
})

const persistor = persistStore(store)

export { store, persistor }
