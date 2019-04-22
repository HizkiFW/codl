import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
    key: 'root',
    storage
}

const initialState = {};
const middleWare = [thunk];

export const store = createStore(
    persistReducer(config, rootReducer),
    initialState,
    compose(
        applyMiddleware(...middleWare)
    )
);

export const persistor = persistStore(store);