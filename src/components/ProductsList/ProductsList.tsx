import React from 'react';
import {Product} from "../../types/types";
import { GoodsList } from './GoodsList/GoodsList';
import styles from './Products.module.css'

export const ProductsList: React.FC<ProductsListProps> = React.memo(({products}) => {

    const productList = products.map(( p,index) => {
        return <ProductItem product={p} key={index} />
    })

    return (
        <div className={styles.products}>
            {productList}
        </div>
    );
})

const ProductItem: React.FC<ProductItemProps> = React.memo( ({product}) => {

    return (
        <div>
            <h1 className={styles.products__title}>{product.rname}</h1>
            <GoodsList goods={product.goods}/>
        </div>
    );
})

type ProductsListProps = {
    products: Product[]
}
type ProductItemProps = {
    product: Product
}