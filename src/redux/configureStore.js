import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(intialState) {
    const composeEnhancers =
        window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose // add support to redux dev tool

    return createStore(
        rootReducer,
        intialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())))
}
