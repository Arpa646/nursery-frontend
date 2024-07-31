import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image:
        "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-10-1.jpg",
    },
    {
      id: 2,
      image:
        "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-10.jpg",
    },
    {
      id: 3,
      image:
        "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-10-2.jpg",
    },
  ];

  return (
    <div className="relative ">
      <Carousel
        className="  w-full overflow-hidden rounded-lg shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex w-full">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="w-full">
              <Card className="bg-transparent ">
                <CardContent className="relative h-[500px] w-full">
                  {/* Image */}
                  <img
                    src={slider?.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />

<div className="absolute inset-0 flex ms-11 items-center justify-start">
  <div
    style={{ color: "rgb(34,66,41)" }}
    className="text-center text-black p-4 md:p-8 max-w-full md:max-w-[350px]"
  >
    <p className="tracking-[.30em] text-xs md:text-sm lg:text-base uppercase">
      SALE UP TO 30% OFF
    </p>
    <h1
      style={{
        fontFamily: '"Libre Baskerville", serif',
        fontWeight: 400,
        lineHeight: "1.2",
        color: "rgb(34, 66, 41)",
      }}
      className="font-serif tracking-widest text-2xl md:text-4xl lg:text-5xl font-bold mt-2"
    >
      Uncomplicated <br /> Indoor <i> Gardening</i>
    </h1>
    <Button className="border-green-900 mt-3 tracking-widest bg-transparent text-black border rounded-none p-2 md:p-5 lg:p-7">
      Discover
    </Button>
  </div>
</div>

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
