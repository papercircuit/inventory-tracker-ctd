import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ProductProvider } from '@/components/ProductContext'

export default function App({ Component, pageProps }: AppProps) {

    return (
        <ProductProvider>
            <Component {...pageProps} />
        </ProductProvider>

    )

}


