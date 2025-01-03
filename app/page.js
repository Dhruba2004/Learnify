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
import { Book, Brain, Gamepad, Bot, Loader } from "lucide-react";
import { TextAnimate } from "./components/ui/text-animate";
import WordPullUp from "./components/ui/word-pull-up";
import ShineBorder from "./components/ui/shine-border";

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
  return (
    <div className="h-screen">
      <section className="h-screen">
        <Header />
        <div className="relative flex flex-col gap-5 w-full items-center justify-center overflow-hidden rounded-lg p-6 top-[10rem]">
          <TextAnimate animation="scaleUp" by="text" className="text-center">
            <span className="pointer-events-none z-10 whitespace-pre-wrap gradient-title text-center text-7xl max-lg:text-[40px] font-bold leading-none tracking-tighter">
              AI Study Material Generator
            </span>
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="character"className="text-gray-500 max-w-3xl text-center text-2xl max:lg-text-xl">
            Experience the AI-Powered Learning Revolution and Unlock your exam
            potential instantly
          </TextAnimate>

          <div className="flex justify-center items-center gap-5">
            <Link href="/dashboard">
              <Button className="text-white max-w-5xl ">Get started</Button>
            </Link>
            <Button variant="outline">Watch Video</Button>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 p-20 h-screen overflow-scroll">
        <div className="flex flex-col">
          <TextAnimate animation="blurInUp" by="character" className="text-5xl font-bold text-center text-blue-500">
            Features We Offer
          </TextAnimate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[4rem] max-lg:ml-[-1.5rem]">
            {features.map((item, index) => (
             
                <Card
                  key={index}
                  className="hover:scale-105 transition-all duration-300 ease-in-out border-none "
                >
                   <ShineBorder
                className="relative w-full overflow-hidden rounded-lg border"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                  <CardHeader className="flex flex-col items-center justify-center text-center cursor-pointer gap-3">
                    <item.icon className="h-10 w-10" />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.subtitle}</CardDescription>
                  </CardHeader>
                  </ShineBorder>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
