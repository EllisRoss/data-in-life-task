import React from 'react';
import styles from './Sidebar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../../redux/productsSelectors";
import { Divider } from 'antd';
import {NavLink} from "react-router-dom";
import {Product} from "../../types/types";
import {productsActions} from "../../redux/productsReducer";

// render navigation panel
export const Sidebar: React.FC = React.memo(() => {

    const products = useSelector(selectProducts);

    const chapterList = products.map((p, i) => {
        return <SidebarItem key={i} id={p.rid} title={p.rname} product={p}/>
    })

    return (
        <div className={styles.sidebar}>
            <NavLink className={styles.sidebar__title} to='/'>
                <div>
                    <p>Main</p>
                    <Divider/>
                </div>
            </NavLink>
            {chapterList}
        </div>
    );
})

// render folders of products
const SidebarItem: React.FC<SidebarItemProps> = React.memo(({title , id, product}) => {

    const dispatch = useDispatch();

    const onClick = () => {
      dispatch(productsActions.productFolderChanged(product))
    }

    return (
        <NavLink className={styles.sidebar__title} onClick={onClick} to={id ? id : 'empty-title'} >
            <div>
                <p>{title ? title : 'Empty Title'}</p>
                <Divider/>
            </div>
        </NavLink>
    );
})

type SidebarItemProps = {
    title: string
    id: string
    product: Product
}