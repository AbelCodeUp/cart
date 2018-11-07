import Header from 'container/Header';
import ShopHeader from 'component/ShopHeader';

export default function ShopLayout(props){
    return (
        <div id="app">
            <Header>
                <ShopHeader/>
            </Header>
            {props.children}
        </div>
    )
}
