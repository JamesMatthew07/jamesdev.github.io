import { HeroParallax } from '@/components/ui/hero-parallax'

export default function Page() {
  return (
    <>
    <HeroParallax products={[{
       title: 'Product 1',
       link: '/product/1',
       thumbnail: 'https://travelwarm.com/wp-content/uploads/2020/09/Zurich-Switzerland.jpg', 
    },
    {
      title: 'Product 1',
      link: '/product/1',
      thumbnail: 'https://media.timeout.com/images/101746923/image.jpg', 
   },{
    title: 'Product 1',
    link: '/product/1',
    thumbnail: 'https://wallpaperaccess.com/full/4121070.jpg', 
 },{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: 'https://studyinginswitzerland.com/wp-content/uploads/2019/09/damian-markutt-eCkmZ7f8oWY-unsplash.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: 'https://journeyz.co/wp-content/uploads/2020/08/Basel-2048x1365.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: 'https://i.pinimg.com/originals/ab/ea/46/abea46bbd4e0d32dc5c55785437af3dd.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: 'https://handluggageonly.co.uk/wp-content/uploads/2014/10/Hand-Luggage-Only-2.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: 'https://a.cdn-hotels.com/gdcs/production125/d882/347f73d7-bd57-44cf-b3fa-0837c96cb193.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: 'https://wallpaperaccess.com/full/1455072.jpg', 
}]}></HeroParallax>
    </>
  )
}
