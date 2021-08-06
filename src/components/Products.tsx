import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../redux/productsSelectors";
import { ProductsList } from './ProductsList/ProductsList';
import {getProducts} from "../redux/productsReducer";

export const Products = React.memo(() => {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    },[])

    return (
        <React.Fragment>
            <ProductsList products={products}/>
        </React.Fragment>
    );
})