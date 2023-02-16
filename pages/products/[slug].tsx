// when we navigate to products, display all the products

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Product } from '@/types';
import { getAllProducts, getProductBySlug } from '@/lib/api';


type Props = {
    product: Product;
};

export default function ProductPage({ product }: Props) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <span> product={product} </span>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = await getProductBySlug(params.slug as string);

    return {
        props: {
            product,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {

    const products = await getAllProducts();

    const paths = products.map((product) => ({
        params: {
            slug: product.slug,
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

// Path: pages/products/index.tsx