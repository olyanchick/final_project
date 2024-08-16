// import { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import ProductCard from '../productCard/ProductCard';
// import { fetchProducts } from '../../API/API';
// import classes from './CardsCarousel.module.css';
//
// const CardsCarousel = () => {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 const allProducts = await fetchProducts();
//                 setProducts(allProducts);
//             } catch (error) {
//                 console.error("Ошибка при получении данных:", error);
//             }
//         };
//
//         getProducts();
//     }, []);
//
//     return (
//         <Carousel
//             showThumbs={false}
//             showStatus={false}
//             infiniteLoop
//             centerMode
//             centerSlidePercentage={33.33} // Основной размер карточки
//             className={classes.product_carousel}
//             renderIndicator={() => null}
//         >
//             {products.map((product) => (
//                 <div key={product.id} className={classes.product_slide}>
//                     <ProductCard {...product} />
//                 </div>
//             ))}
//         </Carousel>
//     );
// };
//
// export default CardsCarousel;

import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from '../productCard/ProductCard';
import { fetchProducts } from '../../API/API';
import classes from './CardsCarousel.module.css';

const CardsCarousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const allProducts = await fetchProducts();
                setProducts(allProducts);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        getProducts();
    }, []);

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={33.33}
            className={classes.product_carousel}
            renderIndicator={() => null}
        >
            {products.map((product) => (
                <div key={product.id} className={classes.product_slide}>
                    <ProductCard {...product} />
                </div>
            ))}
        </Carousel>
    );
};

export default CardsCarousel;

