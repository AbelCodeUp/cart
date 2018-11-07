import { routerReducer } from 'react-router-redux';
import {combineReducers} from 'redux';

import {category, goodsDetail} from 'route/Shop';
import {cart} from 'route/Cart';

export default combineReducers({
    router: routerReducer,
    // 这里的 shop 应该是 category，
    // 后面的维护人员，在情况允许的情况下可以改成 category
    // sorry
    shop: category,

    goodsDetail,
    cart
})
