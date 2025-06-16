"use client";
import Link from "next/link";
import Header from "./components/Header";
import { Button } from "./components/ui/button";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Book, Brain, Gamepad, Bot, Loader, GraduationCap, Lightbulb } from "lucide-react";
import { TextAnimate } from "./components/ui/text-animate";
import ShineBorder from "./components/ui/shine-border";
import { Spotlight } from "./components/ui/spotlight";

export default function Home() {
  const features = [
    {
      title: "Personalized Study Guides",
      subtitle: "Tailored to your learning style and pace.",
      icon: Brain,
    },
    {
      title: "AI-Powered Content Generation",
      subtitle: "Effortless creation of flashcards, summaries, and more.",
      icon: Bot,
    },
    {
      title: "Interactive Learning",
      subtitle: "Engaging quizzes and games to make learning fun.",
      icon: Gamepad,
    },
    {
      title: "Expert-Curated Content",
      subtitle: "High-quality materials aligned with industry standards.",
      icon: Book,
    },
    {
      title: "Track Your Progress",
      subtitle:
        "Monitor your learning journey and identify areas for improvement.",
      icon: Loader,
    },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      title: "Student",
      quote: "Learnify has transformed my study habits. The personalized guides are incredibly helpful!",
    },
    {
      name: "Bob Williams",
      title: "Educator",
      quote: "I recommend Learnify to all my students. It's an invaluable tool for effective learning.",
    },
  ];

  return (
    <div className="h-screen">
      <section className="h-screen">
        <Header />
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="purple"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="purple"
          />
          <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
            <div className="relative flex flex-col gap-5 w-full items-center justify-center overflow-hidden rounded-lg p-6 max-lg:top-[7rem]">
              <TextAnimate
                animation="fadeIn"
                by="text"
                className="text-center"
              >
                <span className="pointer-events-none z-10 whitespace-pre-wrap gradient-title text-center text-7xl max-lg:text-[40px] font-bold leading-none tracking-tighter">
                  AI Study Material Generator
                </span>
              </TextAnimate>
              <TextAnimate
                animation="fadeIn"
                by="character"
                className="text-gray-500 max-w-3xl text-center text-2xl max:lg-text-xl"
              >
                Experience the AI-Powered Learning Revolution and Unlock your
                exam potential instantly
              </TextAnimate>
              <div className="flex justify-center items-center gap-5">
                <Link href="/dashboard">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Get Started
                    </span>
                  </button>
                </Link>
                <Button variant="outline">Watch Video</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-950 py-16 px-6 sm:px-10 md:px-20 overflow-hidden">
        <div className="flex flex-col">
          <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-4xl sm:text-5xl font-bold text-center text-blue-500"
          >
        Features We Offer
          </TextAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 mx-auto">
        {features.map((item, index) => (
          <Card
            key={index}
            className="hover:scale-105 transition-all duration-300 ease-in-out border-none"
          >
            <ShineBorder
          className="relative w-full overflow-hidden rounded-lg border"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
          <CardHeader className="flex flex-col items-center justify-center text-center cursor-pointer gap-3 p-4">
            <item.icon className="h-8 w-8 sm:h-10 sm:w-10" />
            <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
            <CardDescription className="text-sm sm:text-base">{item.subtitle}</CardDescription>
          </CardHeader>
            </ShineBorder>
          </Card>
        ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <TextAnimate
            className="text-3xl font-semibold text-white mb-12"
          >
            What Our Users Say
          </TextAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-950 rounded-lg shadow-md p-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="text-blue-500 font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <TextAnimate
            className="text-4xl font-bold text-white mb-8"
          >
            Ready to Transform Your Learning Experience?
          </TextAnimate>
          <p className="text-lg text-blue-100 mb-12">
            Join Learnify today and unlock a world of personalized, AI-powered learning.
          </p>
          <Link href="/dashboard">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Learnify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
