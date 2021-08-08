import React, {useEffect} from 'react';
import './App.css';
import {Products} from './components/Products/Products';
import {BottomBar} from "./components/BottomBar/BottomBar";
import {Sidebar} from './components/Sidebar/Sidebar';
import {useDispatch} from "react-redux";
import {getProducts} from "./redux/productsReducer";
import {Route, Switch} from 'react-router-dom';
import {ProductsFolder} from "./components/Products/ProductsFolder";

const App = () => {

    const catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
        alert(event.reason);
    }

    useEffect(() => {
        // catch all unhandled rejections
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);

        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        }
    },[]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    },[])

    return (
        <div>
            <header/>
            <div className='content'>
                <Sidebar/>
                <Switch>
                    <Route exact path='/' render={() => <Products />}/>
                    <Route path='/:id?' render={() => <ProductsFolder />}/>
                    <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                </Switch>

                <BottomBar/>
            </div>
            <footer/>
        </div>
    );
}

export default App;
