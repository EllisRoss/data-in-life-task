import React, {useState} from 'react';
import {Goods} from "../../../types/types";
import {Col, Divider, InputNumber, Row} from "antd";
import styles from './Goods.module.css'

export const GoodsList: React.FC<GoodsListProps> = React.memo( ({goods}) => {
    const goodsList = goods.map((g, index) => {
        return <GoodsItem key={index} goodsItem={g} />
    })

    return (
        <div className={styles.goods}>
            <div>
                <Row>
                    <Col flex={1}>
                        <p className={styles.goods__id}>ID</p>
                    </Col>
                    <Col flex={1}>
                        <p className={styles.goods__name}>Name</p>
                    </Col>
                    <Col flex={1}>
                        <p className={styles.goods__price}>Price</p>

                    </Col>
                    <Col flex={1}>
                        <p className={styles.goods__amount}>Amount</p>
                    </Col>
                    <Col flex={1}>
                        <p className={styles.goods__summary}>Summary</p>
                    </Col>
                </Row>
            </div>

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
            <Divider></Divider>
        </div>
    );
})

type GoodsListProps = {
    goods: Goods[]
}
type GoodsItemProps = {
    goodsItem: Goods
}