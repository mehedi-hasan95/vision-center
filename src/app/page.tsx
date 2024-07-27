"use client";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
          // Fade(),
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

      <div className="px-6">
        <h2 className="text-2xl font-bold text-green-500 pt-3">
          REMOTE PATIENT CONSULTATION SYSTEM
        </h2>
        <p className="py-3">
          Remote Patient Consultation System Provides neccessary information to
          the users for interaction with doctor through online and provides the
          diagnosis for the patient desease and suggest the apt treatment by
          consulting the doctor through online. The tool helps in the processes
          of patient registration, enter various patient details like medical
          record and capture eye images.
          <br />
          <br />
          Separate screen to enter Medical record details and also eye image
          capture provision provided. Different screens to provide details about
          the patient for all doctors and vision centre user made available.
        </p>
        <div className="flex justify-center py-10">
          <Image src="/gift.jpg" alt="nec" height={120} width={120} />
        </div>
      </div>
    </main>
  );
}
