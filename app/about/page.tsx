"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Film, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
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

  const stats = [
    { icon: Camera, value: "500+", label: "Weddings and Pre-Weddings Filmed" },
    { icon: Film, value: "10+", label: "Years Experience" },
    { icon: Users, value: "70%", label: "Happy Couples" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4 animate-fade-up [animation-delay:200ms]">
            Passionate storytellers dedicated to capturing life's most precious
            moments
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
              <Image
                src="https://images.unsplash.com/photo-1472653431158-6364773b2a56"
                alt="Our Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [animation-delay:200ms]">
              <h2 className="text-3xl font-bold">Our Journey</h2>
              <p className="text-muted-foreground">
                Founded in 2019, HnG Productions has grown from a small team of
                passionate filmmakers into one of the most sought-after wedding
                cinematography studios. Our journey has been marked by a
                relentless pursuit of excellence and innovation in storytelling.
              </p>
              <p className="text-muted-foreground">
                We believe that every love story is unique and deserves to be
                told in a way that captures its essence. Our approach combines
                cinematic techniques with genuine emotion to create films that
                will be cherished for generations.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
