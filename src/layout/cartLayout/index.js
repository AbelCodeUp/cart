import Header from 'container/Header';

export default function CartLayout(props){
    return (
        <div id="app">
            <Header isCartIconShow={false} />
            {props.children}
        </div>
    )
}
