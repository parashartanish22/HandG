"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Portfolio() {
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

  const portfolioItems = [
    {
      title: "Tanmay & Garvita",
      description: "Pre-Wedding Story",
      image: "/F_W1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=DWK48nVGFjA",
    },
    {
      title: "Prithvi & Sakshi",
      description: "An Intimate Wedding",
      image: "/F_W2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=XMqWFRuCiLs",
    },
    {
      title: "Udaipur Pre-Wedding",
      description: "Pre-Wedding Story",
      image: "/F_W3.jpg",
      videoUrl: "https://youtu.be/zkbxJBP-Q8U?si=rNY9zZrNAahNlrn7",
    },
  ];

  const photoGalleryItems = [
    {
      image: "/p1.jpg",
    },
    {
      image: "/p2.jpg",
    },
    {
      image: "/p3.jpg",
    },
    {
      image: "/p4.jpg",
    },
    {
      image: "/p5.jpg",
    },
    {
      image: "/p6.jpg",
    },
    {
      image: "/p7.jpg",
    },
    {
      image: "/p8.jpg",
    },
    {
      image: "/p9.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-up">
          Our Portfolio
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          A collection of our finest work, showcasing the magic and emotion we
          capture in every frame.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(item.videoUrl, "_blank")}
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transform opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200">{item.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-fit"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Film
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video relative">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-up">
          Our Photo Gallery
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          A collection of our finest work, showcasing the magic and emotion we
          capture in every frame.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {photoGalleryItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      alt="Photo"
                      src={item.image}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transform opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
