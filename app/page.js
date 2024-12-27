import Link from "next/link";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Book, Brain, Gamepad,Bot,Loader } from "lucide-react";

export const metadata = {
  icons: {
    icon: "/logo.svg",
  },
};

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
      icon: Bot
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
      icon: Loader
    },
  ];
  return (
    <div className="h-screen">
      <section className="h-screen">
        <Header />
        <div className="relative flex flex-col gap-5 w-full items-center justify-center overflow-hidden rounded-lg p-4 mt-[12rem]">
          <span className="pointer-events-none z-10 whitespace-pre-wrap gradient-title text-center text-7xl font-bold leading-none tracking-tighter">
            AI Study Material Generator
          </span>
          <h2 className="text-gray-500 max-w-3xl text-center text-xl">
            Experience the AI-Powered Learning Revolution and Unlock your exam
            potential instantly
          </h2>
          <div className="flex justify-center items-center gap-5">
            <Link href="/dashboard">
              <Button className="text-white max-w-5xl ">Get started</Button>
            </Link>
            <Button variant="outline">Watch Video</Button>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 p-20 h-[90vh] overflow-scroll">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-center text-blue-500">Features We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[4rem] ">
            {features.map((item, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 ease-in-out">
                <CardHeader className="flex flex-col items-center justify-center text-center cursor-pointer gap-3">
                  <item.icon className="h-10 w-10"/>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.subtitle}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
