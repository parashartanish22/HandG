"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function Services() {
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

  const services = [
    {
      title: "Wedding Films",
      description:
        "Cinematic storytelling of your special day, capturing every emotion and detail.",
      image: "/c2.jpg",
      features: [
        "Full-day coverage",
        "Drone aerial shots",
        "4K resolution",
        "Licensed music",
        "Color grading",
        "Multiple delivery formats",
      ],
    },
    {
      title: "Pre-Wedding Shoots",
      description:
        "Romantic and artistic pre-wedding films that tell your love story.",
      image: "t1.jpg",
      features: [
        "Location scouting",
        "Creative direction",
        "Cinematic shots",
        "Story development",
        "Custom music selection",
        "Same-day preview",
      ],
    },
    {
      title: "Music Videos",
      description:
        "Creative music video production with cutting-edge visual effects and storytelling.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      features: [
        "Concept development",
        "Location scouting",
        "Professional lighting",
        "Visual effects",
        "Color grading",
        "Multiple edits",
      ],
    },
    {
      title: "Maternity Shoots",
      description:
        "Beautiful and intimate films celebrating the journey of motherhood.",
      image: "c6.jpg",
      features: [
        "Indoor/outdoor settings",
        "Soft lighting setup",
        "Gentle pacing",
        "Family inclusion",
        "Artistic angles",
        "Memory book cuts",
      ],
    },
    {
      title: "Ad Shoots",
      description:
        "Professional commercial and brand films that captivate your audience.",
      image: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050",
      features: [
        "Concept development",
        "Professional lighting",
        "Product showcasing",
        "Brand integration",
        "Commercial editing",
        "Marketing cuts",
      ],
    },
    {
      title: "Corporate Events",
      description:
        "Professional coverage for conferences, product launches, and corporate gatherings.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      features: [
        "Multi-camera setup",
        "Live streaming",
        "Interview segments",
        "Motion graphics",
        "Quick turnaround",
        "Social media cuts",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4 animate-fade-up [animation-delay:200ms]">
            Premium cinematography services tailored to your vision
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="w-4 h-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4 mt-auto">
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Book Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 tracking-tight">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We meet to discuss your vision and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed planning of shots, locations, and timeline",
              },
              {
                step: "03",
                title: "Production",
                description:
                  "Professional filming with state-of-the-art equipment",
              },
              {
                step: "04",
                title: "Post-Production",
                description: "Careful editing and color grading of your film",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-semibold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 tracking-tight">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [animation-delay:200ms]">
            Let's discuss your project and bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [animation-delay:400ms]"
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
