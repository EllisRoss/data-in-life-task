import React, {useState} from 'react';
import {Goods} from "../../../types/types";
import {Col, InputNumber, Row} from "antd";
import styles from './Goods.module.css'

export const GoodsList: React.FC<GoodsListProps> = React.memo( ({goods}) => {
    const goodsList = goods.map((g, index) => {
        return <GoodsItem key={index} goodsItem={g} />
    })

    return (
        <div className={styles.goods}>
            {goodsList}
        </div>
    );
})

const GoodsItem: React.FC<GoodsItemProps> = React.memo( ({goodsItem}) => {

    const [amount, setAmount] = useState(0)

    return (
        <div>
            <Row>
                <Col flex={1}>
                    <p className={styles.goods__id}>ID</p>
                    <div className={styles.goods__id}>{goodsItem.gid} </div>
                </Col>
                <Col flex={1}>
                    <p className={styles.goods__name}>Name</p>
                    <div className={styles.goods__name}>{goodsItem.gname} </div>
                </Col>
                <Col flex={1}>
                    <p className={styles.goods__name}>Price</p>
                    <div className={styles.goods__name}>{goodsItem.gprice} &#8381;</div>
                </Col>
                <Col flex={1}>
                    <p className={styles.goods__name}>Amount</p>
                    <div className={styles.goods__name}>
                        <InputNumber value={amount} min={0} onChange={setAmount}/>
                    </div>
                </Col>
                <Col flex={1}>
                    <p className={styles.goods__summary}>Summary</p>
                    <div className={styles.goods__summary}> {Number(goodsItem.gprice) * amount} &#8381;</div>
                </Col>
            </Row>
        </div>
    );
})

type GoodsListProps = {
    goods: Goods[]
}
type GoodsItemProps = {
    goodsItem: Goods
}