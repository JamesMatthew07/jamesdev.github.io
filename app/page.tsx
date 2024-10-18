"use client";

import Hero from "@/components/organisms/page";
import HoverEffect from "@/components/ui/card-hover-effect";
import TextGenerateEffect from "@/components/ui/text-generate-effect";




export default function Page() {

  return (
    <>
    <Hero></Hero>
    <div className="container-fluid mt-40">
      <div className="row">
        <div className="col">
          <div className="flex justify-center items-center text-center p-4">
          <TextGenerateEffect words={"Let us explore this wonders of Switzerland!"}></TextGenerateEffect>
        </div>
        </div>
      </div>
    </div>
    <div className="p-4">
    <HoverEffect items={[
      {
        title: "Bernese Oberland",
        description: "The Bernese Oberland is a popular Swiss holiday region south-east of the city Bern. You’ll find a very diverse landscape here with lakes, high peaks, scenic mountain villages and much, much more.",
        link: "https://www.berneseoberlandpass.ch/maps-bernese-oberland/",
        image: "https://cdn.tourcms.com/a/62/2101/1/large.jpg",
        width: 0,
        height: 0
      },{
        title: "Lauterbrunnen",
        description: "Marvel at natural spectacles against an alpine backdrop. Stroll through picture-postcard villages. Take Switzerland’s most beautiful hiking and winter sports areas by storm.",
        link: "https://www.myswitzerland.com/en/destinations/lauterbrunnen/",
        image: "http://www.youramazingplaces.com/wp-content/uploads/2014/10/Lauterbrunnen-Valley-6.jpg",
        width: 0,
        height: 0
      },
      {
        title: "Jungfrau",
        description: "Jungfrau, at 4,158 meters (13,642 feet) in the Swiss Bernese Alps, is famous for its stunning glaciers and breathtaking views. It attracts outdoor enthusiasts with activities like skiing and hiking, especially from the Jungfraujoch, the 'Top of Europe.'",
        link: "https://www.jungfrau.ch/en-gb/",
        image: "https://cdn.audleytravel.com/4195/2997/79/15986864-jungfraujoch--the-top-of-europe.jpg",
        width: 0,
        height: 0
      },
      {
        title: "Zermatt",
        description: "Experience breathtaking views of the iconic Matterhorn while exploring charming streets and indulging in outdoor adventures. Zermatt offers skiing, hiking, and an enchanting alpine atmosphere.",
        link: "/assets/ricardo-gomez-angel-Qgph3PrfOFY-unsplash-scaled.JPG'",
        image: "https://www.travelandleisure.com/thmb/ISDM_sDW3_0NSMJTZ3jgXjpRgsk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zermatt-switzerland-aerial_SKITOWN0123-0df880426acd494c9d8791be79b07494.jpg",
        width: 0,
        height: 0
      },
      {
        title: "Interlaken",
        description: "Nestled between Lake Thun and Lake Brienz, Interlaken is a hub for adventure sports and offers stunning views of the surrounding mountains. Enjoy activities like paragliding, hiking, and boat trips in this picturesque destination.",
        link: "/assets/Interlaken.JPG",
        image: "https://sttp.tripbooker.ch/FR/upload/products-illustrations/kt_2020_360_Keytours_excursions_Swisstours_interlaken_village10_2048_10_10.jpg",
        width: 0,
        height: 0
      },
      {
        title: "Grindelwald",
        description: "Discover the beauty of Grindelwald, where dramatic mountain scenery meets cozy Swiss chalets. This destination is perfect for hiking, skiing, and enjoying the breathtaking views of the Eiger North Face.",
        link: "/assets/ricardo-gomez-angel-Qgph3PrfOFY-unsplash-scaled.JPG'",
        image: "https://cdn.audleytravel.com/3549/2535/79/15986035-grindelwald.jpg",
        width: 0,
        height: 0
      },
    ]}></HoverEffect>
  <footer className="container border-top h-full">
  <div className="py-3">
    <div className="d-flex justify-content-center align-items-center ">
    </div>
    <div>
      <p className="text-center m-0 text-white"><i className="bi bi-c-circle"></i> @james.dev</p>
    </div>
  </div>
</footer>
    </div>
    </>
  );
}
