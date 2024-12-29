"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

import FlashCardItem from "./FlashCardItem";

function Flashcard() {
  const [flashcards, setFlashcards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const { courseId } = useParams();

  useEffect(() => {
    GetFlashCards();
  }, []);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const GetFlashCards = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "Flashcard",
    });

    console.log(result?.data);
    setFlashcards(result?.data);
  };
  return (
    <div children="">
      <h2 className="font-bold text-2xl">Flashcards</h2>
      <p>Flashcards : The Ultimate To Lock in concepts</p>
      <div className="flex justify-center items-center mt-10">
        <Carousel className="max-w-[800px]">
          <CarouselContent>
            {flashcards[0]?.content && flashcards[0]?.content?.map((flashcard, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center"
                >
                  <FlashCardItem
                    handleClick={handleClick}
                    isFlipped={isFlipped}
                    flashcard={flashcard}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Flashcard;
