import React, {useEffect, useState} from 'react';
import {Goods} from "../../../../types/types";
import {Col, Divider, InputNumber, Row} from "antd";
import styles from './Goods.module.css'
import {useDispatch} from "react-redux";
import {productsInCartActions} from "../../../../redux/bottomBarReducer";

export const GoodsList: React.FC<GoodsListProps> = React.memo( ({goods}) => {
    const goodsList = goods.map((g, index) => {
        return <GoodsItem key={index} goodsItem={g} />
    })

    return (
        <div className={styles.goods}>
            <div>
                <Row>
                    <Col flex={1}>
                        <div className={styles.goods__id}><b>ID</b></div>
                    </Col>
                    <Col flex={1}>
                        <div className={styles.goods__name}><b>Name</b></div>
                    </Col>
                    <Col flex={1}>
                        <div className={styles.goods__price}><b>Price</b></div>

                    </Col>
                    <Col flex={1}>
                        <div className={styles.goods__amount}><b>Amount</b></div>
                    </Col>
                    <Col flex={1}>
                        <div className={styles.goods__summary}><b>Summary</b></div>
                    </Col>
                </Row>
            </div>
            <Divider/>
            {goodsList}
        </div>
    );
})

const GoodsItem: React.FC<GoodsItemProps> = React.memo( ({goodsItem}) => {

    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        if (amount === 0) {
            dispatch(productsInCartActions.productDeleted(goodsItem.gid))
        }
        if (amount > 0) {
            dispatch(productsInCartActions.productAdded(
                {id: goodsItem.gid, amount, price: Number(goodsItem.gprice)})
            )
        }
    }, [amount])

    return (
        <div>
            <Row>
                <Col flex={1}>
                    <div className={styles.goods__id}>{goodsItem.gid} </div>
                </Col>
                <Col flex={1}>
                    <div className={styles.goods__name}>{goodsItem.gname} </div>
                </Col>
                <Col flex={1}>
                    <div className={styles.goods__price}>{goodsItem.gprice} &#8381;</div>
                </Col>
                <Col flex={1}>
                    <div className={styles.goods__amount}>
                        <InputNumber value={amount} min={0} onChange={setAmount}/>
                    </div>
                </Col>
                <Col flex={1}>
                    <div className={styles.goods__summary}> {Number(goodsItem.gprice) * amount} &#8381;</div>
                </Col>
            </Row>
            <Divider />
        </div>
    );
})

type GoodsListProps = {
    goods: Goods[]
}
type GoodsItemProps = {
    goodsItem: Goods
}