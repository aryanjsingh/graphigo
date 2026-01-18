"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, Globe, ArrowRight } from "lucide-react";
import { TextLoop } from "@/components/core/text-loop";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { LogoStrip } from "@/components/logo-strip";

const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));
const SimpleCollection = dynamic(() =>
  import("@/components/ui/container-scroll-animation").then((mod) => mod.SimpleCollection)
);
const ThreePillars = dynamic(() =>
  import("@/components/three-pillars").then((mod) => mod.ThreePillars)
);
const GraphigoFeatures = dynamic(() =>
  import("@/components/graphigo-features").then((mod) => mod.GraphigoFeatures)
);


const VideoCarousel = dynamic(() =>
  import("@/components/ui/video-carousel").then((mod) => mod.default)
);



const MarqueeTestimonials = dynamic(() =>
  import("@/components/ui/marquee-testimonials").then((mod) => mod.MarqueeTestimonials)
);

const testimonials = [
  {
    quote:
      "Working with Graphigo was a game-changer. Our engagement has skyrocketed since we started.",
    name: "Jitu IG Coach",
    designation: "IG Coach",
    src: "/Creators photos/4.png",
  },
  {
    quote:
      "Graphigo has completely transformed our content strategy. Their attention to detail is unmatched.",
    name: "Paritosh Anand",
    designation: "Wesmile media",
    src: "/Creators photos/1.png",
  },
  {
    quote:
      "The team at Graphigo is incredibly talented. They brought our vision to life perfectly.",
    name: "Arvind Arora",
    designation: "A2 motivation",
    src: "/Creators photos/2.png",
  },
  {
    quote:
      "Professional, creative, and efficient. I highly recommend Graphigo for any video production needs.",
    name: "Surbhi Gandhi",
    designation: "Influencer",
    src: "/Creators photos/3.png",
  },
  {
    quote:
      "They truly understand the nuances of social media content. The results speak for themselves.",
    name: "Barkha Singh",
    designation: "Actress",
    src: "/Creators photos/5.png",
  },
  {
    quote:
      "I'm blown away by the quality of the edits. Graphigo is the best in the business.",
    name: "Avanti Nagral",
    designation: "Singer, Influencer",
    src: "/Creators photos/6.png",
  },
  {
    quote:
      "Fast turnaround times and exceptional quality. Graphigo exceeded all our expectations.",
    name: "Raj Samani",
    designation: "Entrepreneur",
    src: "/Creators photos/7.png",
  },
  {
    quote:
      "The storytelling in their videos is captivating. They know how to keep the audience engaged.",
    name: "Shivansh Garg",
    designation: "Creator",
    src: "/Creators photos/8.png",
  },
  {
    quote:
      "Graphigo made the entire process seamless. I couldn't be happier with the final product.",
    name: "Ishaan Sharma",
    designation: "Creator",
    src: "/Creators photos/9.png",
  },
  {
    quote:
      "Their creativity knows no bounds. Graphigo helps us stand out in a crowded market.",
    name: "Manveer Singh",
    designation: "Youtuber",
    src: "/Creators photos/10.png",
  },
  {
    quote:
      "A dedicated team that goes above and beyond. Graphigo is a partner you can trust.",
    name: "Vivek Bindra",
    designation: "Business Coach",
    src: "/Creators photos/13.png",
  },
  {
    quote:
      "Start-to-finish excellence. Graphigo is simply the best choice for video content.",
    name: "Aryan Singh",
    designation: "Founder",
    src: "/Creators photos/dev .png",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-screen w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full">
                <Sparkles className="h-4 w-4" />
                Podcast Specialist
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-public-sans font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl max-w-5xl mx-auto leading-tight">
                Strategic Post-Production <br /> Built for{" "}
                <TextLoop className="text-primary font-bold italic">
                  <span>Positioning</span>
                  <span>Distribution</span>
                  <span>Scalability</span>
                </TextLoop>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              From strategy to storytelling, we help brands dominate digital spaces
              with content that performs, Converts, and lasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Decorative Elements */}
              {/* Decorative Elements */}


            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute bottom-4 left-0 right-0 z-20"
        >
          <LogoStrip />
        </motion.div>
        {/* Background */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 top-0"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#2222222e_1px,transparent_1px),linear-gradient(to_bottom,#2222222e_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_55%_75%_at_50%_50%,#000_45%,transparent_55%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(55%_100%_at_50%_100%,rgba(4,209,205,0.58)_10%,rgba(255,255,255,0)_100%)]"></div>
        </motion.div>
      </div>



      {/* Simple Collection Section */}
      <section className="w-full bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(55%_100%_at_50%_0%,rgba(4,209,205,0.58)_10%,rgba(255,255,255,0)_100%)] pointer-events-none"></div>
        <SimpleCollection />
      </section>

      {/* Three Pillars Section */}
      <ThreePillars />

      {/* Video Carousel Section */}
      <VideoCarousel />

      {/* Animated Testimonials Section */}
      <MarqueeTestimonials testimonials={testimonials} />

      {/* Features Section */}
      <GraphigoFeatures />

      <Footer />
    </>
  );
}
