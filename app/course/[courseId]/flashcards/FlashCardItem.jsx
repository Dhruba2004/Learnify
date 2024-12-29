import React from "react";
import ReactCardFlip from "react-card-flip";

function FlashCardItem({ isFlipped, handleClick,flashcard }) {
  return (
    <div className="flex items-center justify-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          className="p-4 bg-primary shadow-lg text-white flex items-center justify-center  text-center rounded-lg cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
        >
          <h2 className="text-xl">{flashcard?.front}</h2>
        </div>

        <div
          onClick={handleClick}
          className="p-4  bg-white text-primary shadow-lg flex items-center justify-center text-center rounded-lg cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
        >
          <h2 className="text-xl">{flashcard?.back}</h2>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlashCardItem;
