import { HeroParallax } from '@/components/ui/hero-parallax'

export default function Page() {
  return (
    <>
    <HeroParallax products={[{
       title: 'Product 1',
       link: '/product/1',
       thumbnail: '/assets/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg', 
    },
    {
      title: 'Product 1',
      link: '/product/1',
      thumbnail: '/assets/Bern-scaled.jpg', 
   },{
    title: 'Product 1',
    link: '/product/1',
    thumbnail: '/assets/ccimage-shutterstock_273787769.jpg', 
 },{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: '/assets/ricardo-gomez-angel-Qgph3PrfOFY-unsplash-scaled.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: '/assets/towns-in-Switzerland-Lauterbrunnen.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: '/assets/Waterfall-in-Lauterbrunnen-village.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: '/assets/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: '/assets/zermatt-switzerland-aerial_SKITOWN0123-0df880426acd494c9d8791be79b07494.jpg', 
},{
  title: 'Product 1',
  link: '/product/1',
  thumbnail: '/assets/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg', 
}]}></HeroParallax>
    </>
  )
}
