import React from 'react';
import {useSelector} from "react-redux";
import {selectFolderOfProducts} from "../../redux/productsSelectors";
import {ProductItem } from './ProductsList/ProductsList';

// render chosen product
export const ProductsFolder = React.memo(() => {
    const product = useSelector(selectFolderOfProducts);
    return (
        <React.Fragment>
            <ProductItem product={product}/>
        </React.Fragment>
    );
})