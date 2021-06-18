import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistCombineReducers} from 'redux-persist';
import rootReducer from './Reducers/root';
// const config = {
//     key:'root',
//     storage : AsyncStorage
// }

// export const ConfigureStore = () => {
//     const store = createStore(
//         persistCombineReducers(config,{
//             auth,
//             user,
//             activities
//         }),
//         applyMiddleware(thunk),
//     )
//     const persistor = persistStore(store);

//     return {persistor , store}
// }


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;