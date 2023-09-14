import Header from '../components/header'
import Footer from '../components/Footer'

export default function App({Component, pageProps}){
    return <>
        <Header/>
        <Component {...pageProps}></Component>
        <Footer/>
    </>
}