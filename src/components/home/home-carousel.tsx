"use client";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
export const HomeCarousel = () => {
    return (
        <Carousel
            className="max-h-[286px]"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
                Fade(),
            ]}
        >
            <CarouselContent>
                <CarouselItem>
                    <Image
                        src="/banner_one.jpg"
                        alt="nec"
                        height={500}
                        width={500}
                        className="h-auto w-full"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/banner_two.jpg"
                        alt="nec"
                        height={500}
                        width={500}
                        className="h-auto w-full"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/banner_three.jpg"
                        alt="nec"
                        height={500}
                        width={500}
                        className="h-auto w-full"
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
};
