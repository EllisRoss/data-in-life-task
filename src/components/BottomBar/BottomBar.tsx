import { Button, Col, Row } from 'antd';
import React, {useEffect, useState} from 'react';
import styles from './BottomBar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectProductsInCart} from "../../redux/bottomBarSelectors";
import {addProductsToCart} from "../../redux/bottomBarReducer";

export const BottomBar = React.memo(() => {

    const productsInCart = useSelector(selectProductsInCart)
    const [summaryPrice, setSummaryPrice] = useState<number>(0);
    const [goodsAmount, setGoodsAmount] = useState<number>(0);
    const dispatch = useDispatch();
    useEffect(() => {
        let summary = 0;
        let amount = 0;
        productsInCart.forEach(p => {
            summary = p.price * p.amount + summary;
            amount += p.amount;
        })
        setSummaryPrice(summary);
        setGoodsAmount(amount);
    }, [productsInCart]);

    const onClick = () => {
        const formData = new FormData();
        productsInCart.forEach(p => {
            const name = `product[${p.id}]`
            formData.append(name, String(p.amount));
        })
        dispatch(addProductsToCart(formData));
    }

    return (
        <div className={styles.bar}>
            <Row>
                <Col flex={1}>
                    <div className={styles.bar__title}>Amount goods: <b>{goodsAmount}</b></div>
                </Col>
                <Col>
                    <div className={styles.bar__title}>Summary price: <b>{summaryPrice}</b> &#8381;</div>
                </Col>
            </Row>
            <div className={styles.bar__button}>
                <Button onClick={onClick} size="large">In Cart</Button>
            </div>
        </div>
    );
})