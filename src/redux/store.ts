import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import productsReducer from "./productsReducer";
import bottomBarReducer from "./bottomBarReducer";

let rootReducer = combineReducers({
    productsPage: productsReducer,
    bottomBar: bottomBarReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// generate type for reducer's actions
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
));

export default store;