import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import React from "react";

function TopicInput({ setTopic, setDiificultyLevel }) {
  return (
    <div>
      <h2 className="text-white">
        Enter the topic or paste the content for which you want to generate
        study material
      </h2>
      <Textarea
        placeholder="Start Writing here"
        className="mt-2 text-white"
        onChange={(event) => setTopic(event.target.value)}
      />
      <h2 className="mt-5 mb-3 text-white">Select the difficulty level</h2>

      <Select
        className="dark"
        onValueChange={(value) => setDiificultyLevel(value)}
      >
        <SelectTrigger>
          <SelectValue className="" placeholder="Difficulty Level" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="Easy">Easy</SelectItem>
          <SelectItem value="Moderate">Moderate</SelectItem>
          <SelectItem value="Hard">Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;
