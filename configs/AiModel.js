const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const courseOutlineAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for Python for Exam and difficulty level will be Easy with the summary of course , List of chapters along with summary and Emoji icon for each chapter , Topic list in each chapter in JSON format"},
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

    export const generateNotesAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "\nGenerate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL, Head, Body, title tag), The chapters\n\n{\n      \"chapter_name\": \"Introduction to Data Structures and Algorithms\",\n      \"summary\": \"Overview of data structures, algorithms, and their importance in software development.\",\n      \"topics\": [\n        \"What are data structures?\",\n        \"What are algorithms?\",\n        \"Time and space complexity analysis (Big O notation)\",\n        \"Algorithm design paradigms (greedy, divide and conquer, dynamic programming)\"\n      ]\n    },\n\n\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```html\n<h2>Chapter 1: Introduction to Data Structures and Algorithms</h2>\n\n<h3>Overview</h3>\n<p>This chapter provides a foundational understanding of data structures and algorithms, highlighting their significance in software development.  It introduces key concepts such as time and space complexity and explores various algorithm design paradigms.</p>\n\n<h3>Topics Covered</h3>\n\n<h4>1. What are Data Structures?</h4>\n<p>Explores the concept of data structures, defining them as specialized ways of organizing and storing data in a computer so that it can be used efficiently. Discusses different types of data structures and their characteristics. Examples include arrays, linked lists, stacks, queues, trees, and graphs.</p>\n\n<h4>2. What are Algorithms?</h4>\n<p>Defines algorithms as a set of well-defined instructions or a step-by-step procedure designed to solve a specific problem or perform a particular task.  Explains the properties of good algorithms, such as correctness, efficiency, and clarity. Provides examples of common algorithms like sorting and searching.</p>\n\n<h4>3. Time and Space Complexity Analysis (Big O Notation)</h4>\n<p>Introduces the concept of analyzing algorithm efficiency in terms of time and space. Explains Big O notation as a way to express the growth rate of an algorithm's resource consumption (time and memory) as the input size grows.  Covers common time complexities like O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n).  Illustrates how to calculate the time and space complexity of simple algorithms.</p>\n\n<h4>4. Algorithm Design Paradigms (Greedy, Divide and Conquer, Dynamic Programming)</h4>\n<p>Introduces different approaches to designing algorithms.\n    <ul>\n        <li><strong>Greedy Algorithms:</strong> Explains the greedy approach where the algorithm makes locally optimal choices at each step with the hope of finding a global optimum. Provides examples of greedy algorithms.</li>\n        <li><strong>Divide and Conquer:</strong>  Describes the divide and conquer strategy, breaking down a problem into smaller subproblems, solving them recursively, and combining the solutions to solve the original problem.  Examples include merge sort and quicksort.</li>\n        <li><strong>Dynamic Programming:</strong> Introduces dynamic programming as a technique for solving optimization problems by breaking them down into overlapping subproblems and storing the solutions to these subproblems to avoid redundant computations. Explains the concepts of memoization and tabulation.  Provides examples of dynamic programming algorithms.</li>\n    </ul>\n</p>\n\n\n\n```\n"},
          ],
        },
      ],
    });
