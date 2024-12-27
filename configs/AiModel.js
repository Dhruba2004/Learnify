const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const courseOutline = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for Python for Exam and difficulty level will be Easy with the summary of course , List of chapters along with summary for each chapter , Topic list in each chapter in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Introduction to Python Programming\",\n  \"summary\": \"This course provides a foundational understanding of Python, covering basic syntax, data types, control flow, functions, and data structures. It is designed for beginners with little to no prior programming experience.  The focus is on practical application with simple examples and exercises.\",\n  \"difficulty\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapter_name\": \"Getting Started with Python\",\n      \"summary\": \"Introduction to Python, its features, installation, and setting up a development environment.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Why learn Python?\",\n        \"Installing Python\",\n        \"Choosing an IDE (VS Code, Thonny, etc.)\",\n        \"Running your first Python program ('Hello, World!')\"\n      ]\n    },\n    {\n      \"chapter_name\": \"Variables and Data Types\",\n      \"summary\": \"Understanding how to store and manipulate data using variables and different data types.\",\n      \"topics\": [\n        \"Variables and assignment\",\n        \"Numeric types (integers, floats)\",\n        \"Strings and string operations\",\n        \"Booleans\",\n        \"Type conversion\"\n      ]\n    },\n    {\n      \"chapter_name\": \"Operators and Expressions\",\n      \"summary\": \"Performing operations on data using various operators.\",\n      \"topics\": [\n        \"Arithmetic operators (+, -, *, /, //, %)\",\n        \"Comparison operators (==, !=, <, >, <=, >=)\",\n        \"Logical operators (and, or, not)\",\n        \"Assignment operators (=, +=, -=, etc.)\",\n        \"Operator precedence\"\n      ]\n    },\n    {\n      \"chapter_name\": \"Control Flow\",\n      \"summary\": \"Controlling the execution of code using conditional statements and loops.\",\n      \"topics\": [\n        \"Conditional statements (if, elif, else)\",\n        \"For loops\",\n        \"While loops\",\n        \"Break and continue statements\" \n      ]\n    },\n    {\n      \"chapter_name\": \"Functions\",\n      \"summary\": \"Creating reusable blocks of code using functions.\",\n      \"topics\": [\n        \"Defining and calling functions\",\n        \"Function arguments and parameters\",\n        \"Return values\",\n        \"Scope of variables\",\n        \"Built-in functions (print, input, len, etc.)\"\n      ]\n    },\n    {\n      \"chapter_name\": \"Lists and Tuples\",\n      \"summary\": \"Working with collections of data using lists and tuples.\",\n      \"topics\": [\n        \"Creating and accessing lists\",\n        \"List methods (append, insert, remove, etc.)\",\n        \"List slicing\",\n        \"Introduction to tuples and their immutability\",\n        \"Iterating through lists and tuples\"\n      ]\n    },\n    {\n      \"chapter_name\": \"Dictionaries\",\n      \"summary\": \"Storing data in key-value pairs using dictionaries.\",\n      \"topics\": [\n        \"Creating and accessing dictionaries\",\n        \"Dictionary methods (keys, values, items)\",\n        \"Iterating through dictionaries\"\n      ]\n    },    \n    {\n      \"chapter_name\": \"String Manipulation\",\n      \"summary\": \"Advanced techniques for working with strings.\",\n      \"topics\": [\n        \"String formatting\",\n        \"String methods (split, join, replace, etc.)\",\n        \"Working with substrings\" \n      ]\n    }\n\n\n  ]\n}\n```\n\n\nThis JSON provides a structured format for your Python study material, covering fundamental concepts at an easy difficulty level. You can easily convert this JSON to other formats or use it directly within a web application or learning platform. Remember to supplement this structure with actual code examples, practice exercises, and quizzes for a comprehensive learning experience."},
          ],
        },
      ],
    });
