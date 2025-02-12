"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import { Tangerine } from "next/font/google";
import { Cinzel } from "next/font/google";
const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
});
// 1. Import the WhatsAppButton
import { WhatsAppButton } from "@/components/whatsapp";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const carouselImages = [
    {
      url: "/c3.jpg",
      title: "Cinematic Wedding Stories",
      subtitle: "Capturing  your most precious moments",
    },
    {
      url: "/c2.jpg",
      title: "Pre-Wedding Magic",
      subtitle: "Creating timeless love stories",
    },
    {
      url: "c4.jpg",
      title: "Timeless Memories",
      subtitle: "Professional cinematography for your special day",
    },
    {
      url: "/c5.jpg",
      title: "Premium Production",
      subtitle: "High-end equipment",
    },
    {
      url: "/c6.jpg",
      title: "Maternity & Newborn",
      subtitle: "Capturing the journey of new beginnings",
    },
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative h-screen">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="relative h-screen">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3 animate-fade-up">
                    <h1
                      className={` ${cinzel.className}  text-4xl  md:text-7xl font-semibold text-white max-w-4xl mx-auto`}
                    >
                      {image.title}
                    </h1>
                    <p
                      className={`${tangerine.className} text-2xl md:text-5xl text-yellow-400 max-w-2xl mx-auto`}
                    >
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="animate-fade-up [animation-delay:300ms]"
          >
            <Link href="/portfolio">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/F_W1.jpg",
                title: "Pre-Wedding Story",
                category: "Pre-Wedding",
                youtubeUrl: "https://www.youtube.com/watch?v=DWK48nVGFjA",
              },
              {
                src: "/F_W2.jpg",
                title: "Prithvi & Sakshi",
                category: "Wedding",
                youtubeUrl: " https://www.youtube.com/watch?v=XMqWFRuCiLs",
              },
              {
                src: "/F_W3.jpg",
                title: "Udaipur Pre-Wedding Shoot",
                category: "Pre-Wedding",
                youtubeUrl: "https://youtu.be/zkbxJBP-Q8U?si=rNY9zZrNAahNlrn7",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-video group overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm">
                    <p className="text-sm text-gray-300 mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    <Button
                      variant="outline"
                      size="lg"
                      className="scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                      onClick={() =>
                        item.youtubeUrl &&
                        window.open(item.youtubeUrl, "_blank")
                      }
                    >
                      Watch Film
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Films",
                description: "Cinematic storytelling of your special day",
                image: "/c2.jpg",
              },
              {
                title: "Pre-Wedding Stories",
                description: "Romantic films that capture your journey",
                image: "/t1.jpg",
              },
              {
                title: "Event Coverage",
                description: "Professional coverage for any special occasion",
                image:
                  "https://images.unsplash.com/photo-1472653431158-6364773b2a56",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transform transition-all duration-500 group-hover:bg-black/75">
                      <h3 className="text-xl font-semibold text-white mb-2 transform transition-all duration-500 group-hover:translate-y-0 group-hover:scale-105">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 transform transition-all duration-500 group-hover:translate-y-0">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [animation-delay:200ms]">
            Let's collaborate to capture your special moments in a way that will
            be cherished forever.
          </p>
          <Button
            asChild
            size="lg"
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [animation-delay:400ms]"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 2. Insert the WhatsAppButton anywhere below your content */}
      <WhatsAppButton />
    </>
  );
}
