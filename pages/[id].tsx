import { useRouter } from 'next/router'

type ProductProps = {
    product: {
        title: string
        stock: number
        images: string[]

    }
}

export default function Product({ product }: ProductProps) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>Stock: {product.stock}</p>
            <p>Image:</p> <img src={product.images[0]} /> 
        </div>
    )
}

export async function getStaticPaths() {
    // dummyjson.com/products returns an array of products in JSON
    const res = await fetch('https://dummyjson.com/products')
    const products = await res.json()

    // Get the paths we want to pre-render based on products
    const paths = products.map((product: { id: number }) => ({
        params: { id: product.id.toString() }, 
    }))
   
    return { paths, fallback: true }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const res = await fetch(
        `https://dummyjson.com/products/${params.id}`
    )
    const product = await res.json()
    console.log('product', product)

    return { props: { product } }
}
