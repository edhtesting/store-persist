import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cartReducer } from './reducers/cartReducer'
import { lineItemCountReducer } from './reducers/lineReducer'
import { trashReducer } from './reducers/trashReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['trash'] 
}

export const reducer = combineReducers({
    cart: cartReducer,
    lineItemCount: lineItemCountReducer,
    trash: trashReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware())
)

const persistor = persistStore(store)

export { store, persistor }
