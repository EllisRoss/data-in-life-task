import React from 'react';
import {useSelector} from "react-redux";
import {selectProducts} from "../redux/productsSelectors";
import { ProductsList } from './ProductsList/ProductsList';

export const Products = React.memo(() => {
    const products = useSelector(selectProducts)

    return (
        <React.Fragment>
            <ProductsList products={products}/>
        </React.Fragment>
    );
})