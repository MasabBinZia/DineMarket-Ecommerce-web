import Hero from '@/views/Hero'
import Jewellery from '@/views/Jewellery'
import Newslatter from '@/views/NewsLatter'
import ProductList from '@/views/ProductList'

export default function Home() {
  return (
    <>
    <div className='py-0 ml-0 lg:py-12 lg:ml-20'>
    <Hero/>
    <ProductList/>
    <Jewellery/>
    <Newslatter/>
    </div>
    </>
  )
}
