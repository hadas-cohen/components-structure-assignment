import {ProductCard} from './ProductCard'

export function Products(){
    const products =[
        {
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },{
            imgUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            name: "Winter Jacket",
            price: 99.99
        },
    ]
    return (<section class="products">
        { products.map((product,i) => (<ProductCard key={i} { ...product }/>))}
    </section>)
}