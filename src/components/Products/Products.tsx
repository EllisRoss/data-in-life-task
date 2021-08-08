import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../../redux/productsSelectors";
import {getProducts} from "../../redux/productsReducer";
import styles from './Products.module.css'
import { ProductsList } from './ProductsList/ProductsList';

export const Products = React.memo(() => {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    },[])

    return (
        <React.Fragment>
            <ProductsList products={products}/>
            <div className={styles.products__footer} />
        </React.Fragment>
    );
})