// // import classes from './Catalog.module.css'
// // import Header from "../../components/header/Header.jsx";
// // import Modal from "../../components/modal/Modal.jsx";
// // import {useState} from "react";
// // import ProductCard from "../../components/productCard/ProductCard.jsx";
// //
// // const Catalog = () => {
// //
// //     const [modalActive, setModalActive] = useState(false);
// //     const [products] = useState([]);
// //
// //     return (
// //         <div>
// //             <section className="container">
// //                 <Header setModalActive={setModalActive}/>
// //                 <Modal active={modalActive} setActive={setModalActive}/>
// //                 <div className={classes.catalogue_menu}>
// //                     <a href="#">Мёд</a>
// //                     <a href="#">Масла</a>
// //                     <a href="#">Другое</a>
// //                 </div>
// //                 <div className={classes.honey_products}>
// //                     <h1 className={classes.product_type}>Мёд</h1>
// //                     <div className={classes.production_cards}>
// //                         <ProductCard />
// //                         {/*<div className="production_card">*/}
// //                         {/*    <h3 className="product_card_name">Гречишный мёд</h3>*/}
// //                         {/*    <p className="production_card_date">Сбор 24 августа</p>*/}
// //                         {/*    <img className="prod_mini_img" src="./img/products_mini/buckwheat_honey.png"*/}
// //                         {/*         alt="Гречишный мёд"/>*/}
// //                         {/*    <a className="production_card_link" href="#">Подробнее</a>*/}
// //                         {/*</div>*/}
// //
// //                     </div>
// //                 </div>
// //                 <div className={classes.oil_products}>
// //                     <h1 className={classes.product_type}>Масла</h1>
// //                     <div className={classes.production_cards}>
// //                         <ProductCard />
// //                     </div>
// //                 </div>
// //                 <div className={classes.other_products}>
// //                     <h1 className={classes.product_type}>Другое</h1>
// //                     <div className={classes.production_cards}>
// //                         <ProductCard />
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };
// //
// // export default Catalog;
//
// import React, { useState, useEffect } from 'react';
// import classes from './Catalog.module.css';
// import Header from "../../components/header/Header.jsx";
// import Modal from "../../components/modal/Modal.jsx";
// import ProductCard from "../../components/productCard/ProductCard.jsx";
// import { fetchProductsByCategory } from '../../API/API';
//
// const Catalog = () => {
//     const [modalActive, setModalActive] = useState(false);
//     const [honeyProducts, setHoneyProducts] = useState([]);
//     const [oilProducts, setOilProducts] = useState([]);
//     const [otherProducts, setOtherProducts] = useState([]);
//
//     useEffect(() => {
//         const loadProducts = async () => {
//             try {
//                 const honey = await fetchProductsByCategory(1); // ID категории "Мед"
//                 const oil = await fetchProductsByCategory(2); // ID категории "Масло"
//                 const other = await fetchProductsByCategory(4); // ID категории "Другое"
//
//                 setHoneyProducts(honey);
//                 setOilProducts(oil);
//                 setOtherProducts(other);
//             } catch (error) {
//                 console.error("Ошибка при загрузке продуктов:", error);
//             }
//         };
//
//         loadProducts();
//     }, []);
//
//     return (
//         <div>
//             <section className="container">
//                 <Header setModalActive={setModalActive} />
//                 <Modal active={modalActive} setActive={setModalActive} />
//                 <div className={classes.catalogue_menu}>
//                     <a href="#">Мёд</a>
//                     <a href="#">Масла</a>
//                     <a href="#">Другое</a>
//                 </div>
//
//                 <div className={classes.honey_products}>
//                     <h1 className={classes.product_type}>Мёд</h1>
//                     <div className={classes.production_cards}>
//                         {honeyProducts.map(product => (
//                             <ProductCard
//                                 key={product.id}
//                                 name={product.name}
//                                 collection={product.collection}
//                                 photo={product.photo}
//                             />
//                         ))}
//                     </div>
//                 </div>
//
//                 <div className={classes.oil_products}>
//                     <h1 className={classes.product_type}>Масла</h1>
//                     <div className={classes.production_cards}>
//                         {oilProducts.map(product => (
//                             <ProductCard
//                                 key={product.id}
//                                 name={product.name}
//                                 collection={product.collection}
//                                 photo={product.photo}
//                             />
//                         ))}
//                     </div>
//                 </div>
//
//                 <div className={classes.other_products}>
//                     <h1 className={classes.product_type}>Другое</h1>
//                     <div className={classes.production_cards}>
//                         {otherProducts.map(product => (
//                             <ProductCard
//                                 key={product.id}
//                                 name={product.name}
//                                 collection={product.collection}
//                                 photo={product.photo}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default Catalog;
//
import { useState, useEffect } from 'react';
import classes from './Catalog.module.css';
import Header from "../../components/header/Header.jsx";
import Modal from "../../components/modal/Modal.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import { fetchProductsByCategory } from '../../API/API';

const Catalog = () => {
    const [modalActive, setModalActive] = useState(false);
    const [honeyProducts, setHoneyProducts] = useState([]);
    const [oilProducts, setOilProducts] = useState([]);
    const [otherProducts, setOtherProducts] = useState([]);

    useEffect(() => {
        const getProductsByCategory = async () => {
            try {
                const honey = await fetchProductsByCategory(1); // Мёд
                const oil = await fetchProductsByCategory(2); // Масло
                const other = await fetchProductsByCategory(4); // Другое
                setHoneyProducts(honey);
                setOilProducts(oil);
                setOtherProducts(other);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        getProductsByCategory();
    }, []);

    return (
        <div>
            <section className="container">
                <Header setModalActive={setModalActive}/>
                <Modal active={modalActive} setActive={setModalActive}/>
                <div className={classes.catalogue_menu}>
                    <a href="#">Мёд</a>
                    <a href="#">Масла</a>
                    <a href="#">Другое</a>
                </div>
                <div className={classes.honey_products}>
                    <h1 className={classes.product_type}>Мёд</h1>
                    <div className={classes.production_cards}>
                        {honeyProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
                <div className={classes.oil_products}>
                    <h1 className={classes.product_type}>Масла</h1>
                    <div className={classes.production_cards}>
                        {oilProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
                <div className={classes.other_products}>
                    <h1 className={classes.product_type}>Другое</h1>
                    <div className={classes.production_cards}>
                        {otherProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Catalog;

