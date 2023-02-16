import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ProductProvider } from '@/components/ProductContext'



export default function App({ Component, pageProps }: AppProps) {

    return (
        <ProductProvider>
            <Component {...pageProps} />
        </ProductProvider>

    )

}


