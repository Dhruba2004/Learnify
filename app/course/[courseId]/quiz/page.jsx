"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import StepProgress from "../_components/StepProgress";
import QuizCardItem from "./_components/QuizCardItem";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";

function Quiz() {
  const [quizData, setQuizData] = useState();
  const [quiz, setQuiz] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const [isCorrectanswer, setIsCorrectanswer] = useState(null);
  const [correctAns, setCorrectAns] = useState();
  const { courseId } = useParams();
  useEffect(() => {
    GetQuizData();
  }, []);
  useEffect(()=>{
    setCorrectAns(null)
    setIsCorrectanswer(null)
  },[stepCount])
  const GetQuizData = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "Quiz",
    });
    console.log(result?.data[0]?.content);
    setQuizData(result?.data[0]?.content);
    setQuiz(result?.data[0]?.content);
  };

  const checkAnswer = (userAnswer, currentQuestion) => {
    console.log(currentQuestion?.correctAnswer, userAnswer);
    if (userAnswer == currentQuestion?.correctAnswer) {
      setIsCorrectanswer(true);

      return;
    }
    setIsCorrectanswer(false);
    setCorrectAns(currentQuestion?.correctAnswer);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Quiz</h2>
      <StepProgress
        data={quiz}
        stepCount={stepCount}
        setStepCount={(value) => setStepCount(value)}
      />
      <div>
        <QuizCardItem
          quiz={quiz[stepCount]}
          userSelectedOption={(value) => checkAnswer(value, quiz[stepCount])}
        />
      </div>
      {isCorrectanswer == false && (
        <Alert variant="destructive">
          <AlertTitle>Incorrect</AlertTitle>
          <AlertDescription>Correct Answer is : {correctAns}</AlertDescription>
        </Alert>
      )}
      {isCorrectanswer == true && (
        <Alert className="border-green-700">
          <AlertTitle className="text-green-500">Correct</AlertTitle>
          <AlertDescription className="text-green-500">
            Your Answer is Correct
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default Quiz;
