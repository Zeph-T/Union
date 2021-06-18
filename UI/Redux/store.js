import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistCombineReducers} from 'redux-persist';
import auth from './Reducers/auth';
import user from './Reducers/user';
import activities  from './Reducers/activities';

const config = {
    key:'root',
    storage : AsyncStorage
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config,{
            auth,
            user,
            activities
        }),
        applyMiddleware(thunk),
    )
    const persistor = persistStore(store);

    return {persistor , store}
}