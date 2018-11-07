import {Route,Redirect} from 'react-router-dom';
import {ShopView} from 'route/Shop';
import CartView from 'route/Cart';

export default (
    <div>
        <Route exact path="/" render={()=><Redirect to="/shop"/>}/>
        <Route path="/shop" component={ShopView}/>
        <Route path="/cart" component={CartView}/>
    </div>
)
