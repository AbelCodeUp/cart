import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import thunk from 'redux-thunk';

import reducer from './reducers';

const history = createHistory();

const routerML = routerMiddleware(history);

// 创建一个 store
function configureStore() {
    // 生产构建的时候
        // 不需要开启 redux DevTools
    if(process.env.NODE_ENV === 'production'){
        let store = createStore(
            reducer,
            compose(
                applyMiddleware(thunk, routerML)
            )
        );

        return store;
    }else{
        return createStore(
            reducer,
            compose(
                applyMiddleware(thunk, routerML),
                window.devToolsExtension ? window.devToolsExtension() : f=>f
            )
        );
    }
};

export {history, configureStore};
