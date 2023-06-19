import Hero from '@/components/Hero'
import Jewellery from '@/components/Jewellery'
import Newslatter from '@/components/NewsLatter'
import ProductList from '@/components/ProductList'

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
