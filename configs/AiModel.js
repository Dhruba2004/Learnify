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
            {text: "\nGenerate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL, Head, Body, title tag), The chapters:\n\n{\n      \"chapter_name\": \"Introduction to Data Structures and Algorithms\",\n      \"summary\": \"Overview of data structures, algorithms, and their importance in software development.\",\n      \"topics\": [\n        \"What are data structures?\",\n        \"What are algorithms?\",\n        \"Time and space complexity analysis (Big O notation)\",\n        \"Algorithm design paradigms (greedy, divide and conquer, dynamic programming)\"\n      ]\n    },\n\n\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```html\n<h2>Chapter 1: Introduction to Data Structures and Algorithms</h2>\n\n<h3>Overview</h3>\n<p>This chapter introduces the fundamental concepts of data structures and algorithms, highlighting their significance in software development.  We explore the definitions and types of data structures and algorithms, and delve into the crucial aspects of time and space complexity analysis using Big O notation. Finally, we introduce common algorithm design paradigms such as greedy, divide and conquer, and dynamic programming.</p>\n\n<h3>Topics Covered</h3>\n\n<h4>1. What are Data Structures?</h4>\n<p>Definition of a data structure. Different types of data structures (e.g., arrays, linked lists, stacks, queues, trees, graphs).  How data structures are used to organize and store data efficiently. Choosing appropriate data structures based on specific needs.</p>\n\n\n<h4>2. What are Algorithms?</h4>\n<p>Definition of an algorithm. Characteristics of a good algorithm (correctness, efficiency, clarity, maintainability). Different ways to represent algorithms (pseudocode, flowcharts). Relationship between algorithms and data structures.</p>\n\n<h4>3. Time and Space Complexity Analysis (Big O Notation)</h4>\n<p>Introduction to Big O notation.  Analyzing the time complexity of algorithms. Analyzing the space complexity of algorithms.  Best-case, worst-case, and average-case scenarios. Understanding how to compare the efficiency of different algorithms. Practical examples of analyzing common algorithms.</p>\n\n\n<h4>4. Algorithm Design Paradigms (Greedy, Divide and Conquer, Dynamic Programming)</h4>\n<p>Introduction to common algorithm design paradigms.\n<ul>\n<li><strong>Greedy Algorithms:</strong> Explanation of the greedy approach.  Examples of greedy algorithms (e.g., Dijkstra's algorithm, Huffman coding). Limitations of greedy algorithms.</li>\n<li><strong>Divide and Conquer:</strong> Explanation of the divide and conquer strategy.  Examples of divide and conquer algorithms (e.g., merge sort, quicksort). Analyzing the time complexity of divide and conquer algorithms.</li>\n<li><strong>Dynamic Programming:</strong> Explanation of dynamic programming.  Examples of dynamic programming algorithms (e.g., knapsack problem, Fibonacci sequence).  Top-down and bottom-up approaches.  Comparing dynamic programming with recursion.</li>\n</ul>\n</p>\n\n\n```\n"},
          ],
        },
      ],
    });
    
    export const generateFlashcardAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate the flashcard on topic : Flutter Fundamentals,User Interface (UI) Development,Basic App Navigation in JSON format with front back content, Maximum 15\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of a Flutter UI. Everything visible on the screen is a widget.\"\n  },\n  {\n    \"front\": \"What are the two main types of widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  },\n  {\n    \"front\": \"When to use a StatelessWidget?\",\n    \"back\": \"When the widget's appearance doesn't change in response to user interaction or time.\"\n  },\n  {\n    \"front\": \"When to use a StatefulWidget?\",\n    \"back\": \"When the widget's appearance needs to change dynamically.\"\n  },\n  {\n    \"front\": \"Explain the role of `build()` method.\",\n    \"back\": \"The method in a widget that describes the widget's UI. It's called whenever the widget needs to be redrawn.\"\n  },\n  {\n    \"front\": \"What is a `BuildContext`?\",\n    \"back\": \"An object that provides information about the widget's location in the widget tree.\"\n  },\n  {\n    \"front\": \"Name three common layout widgets.\",\n    \"back\": \"Row, Column, Stack\"\n  },\n  {\n    \"front\": \"What does `Scaffold` provide?\",\n    \"back\": \"A basic visual layout structure for an app, including app bar, body, and floating action button.\"\n  },\n  {\n    \"front\": \"How to navigate to a new screen using Navigator?\",\n    \"back\": \"Use `Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()));`\"\n  },\n  {\n    \"front\": \"How to pop a screen from the navigation stack?\",\n    \"back\": \"Use `Navigator.pop(context);`\"\n  },\n  {\n    \"front\": \"What is a Route in Flutter Navigation?\",\n    \"back\": \"A description of a screen, typically a MaterialPageRoute.\"\n  },\n  {\n    \"front\": \"What's the difference between `push` and `pushReplacementNamed`?\",\n    \"back\": \"`push` adds a new route; `pushReplacementNamed` replaces the current route.\"\n  },\n  {\n    \"front\": \"How to pass data to a new screen during navigation?\",\n    \"back\": \"Using arguments in the `MaterialPageRoute`'s `builder` or using named routes and passing data via arguments.\"\n  },\n  {\n    \"front\": \"What is a `MaterialApp`?\",\n    \"back\": \"A widget that provides a Material Design theme and manages the app's navigation.\"\n  },\n  {\n    \"front\": \"What is the purpose of `Key` in widgets?\",\n    \"back\": \"Helps Flutter identify and manage widgets, especially useful for preserving state across rebuilds.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });

    export const generateQuizAiModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Quiz on topic : Flutter fundamentals , User Interface (UI) development,Basic App Navigation with Question and Options along with correct answer in JSON format, (Max 10)\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"question\": \"What is the primary function of a StatelessWidget in Flutter?\",\n    \"options\": [\n      \"To manage state and rebuild the UI when data changes\",\n      \"To define UI elements that do not change dynamically\",\n      \"To handle user input and gestures\",\n      \"To manage animations and transitions\"\n    ],\n    \"correctAnswer\": \"To define UI elements that do not change dynamically\"\n  },\n  {\n    \"question\": \"Which widget is commonly used as the root of a Flutter app?\",\n    \"options\": [\n      \"Scaffold\",\n      \"MaterialApp\",\n      \"Container\",\n      \"Column\"\n    ],\n    \"correctAnswer\": \"MaterialApp\"\n  },\n  {\n    \"question\": \"What is the purpose of the 'pubspec.yaml' file in a Flutter project?\",\n    \"options\": [\n      \"To define the app's UI layout\",\n      \"To manage project dependencies and configurations\",\n      \"To store app data and user preferences\",\n      \"To write Dart code for the app's logic\"\n    ],\n    \"correctAnswer\": \"To manage project dependencies and configurations\"\n  },\n  {\n    \"question\": \"Which widget is used for displaying a list of items in Flutter?\",\n    \"options\": [\n      \"Row\",\n      \"Column\",\n      \"ListView\",\n      \"GridView\"\n    ],\n    \"correctAnswer\": \"ListView\"\n  },\n  {\n    \"question\": \"How do you navigate to a new screen in Flutter using Navigator?\",\n    \"options\": [\n      \"Navigator.go()\",\n      \"Navigator.pop()\",\n      \"Navigator.push()\",\n      \"Navigator.replace()\"\n    ],\n    \"correctAnswer\": \"Navigator.push()\"\n  },\n  {\n    \"question\": \"What is the function of the 'build' method in a StatefulWidget?\",\n    \"options\": [\n      \"To initialize the widget's state\",\n      \"To describe the UI of the widget\",\n      \"To handle user interactions\",\n      \"To dispose of the widget's resources\"\n    ],\n    \"correctAnswer\": \"To describe the UI of the widget\"\n  },\n  {\n    \"question\": \"Which widget is used for displaying images in Flutter?\",\n    \"options\": [\n      \"Image\",\n      \"Icon\",\n      \"Picture\",\n      \"ImageIcon\"\n    ],\n    \"correctAnswer\": \"Image\"\n  },\n  {\n    \"question\": \"What is a 'key' used for in Flutter widgets?\",\n    \"options\": [\n      \"To uniquely identify a widget in the widget tree\",\n      \"To style the widget's appearance\",\n      \"To animate the widget\",\n      \"To handle user input on the widget\"\n    ],\n    \"correctAnswer\": \"To uniquely identify a widget in the widget tree\"\n  },\n  {\n    \"question\": \"What is the purpose of the 'setState' method in a StatefulWidget?\",\n    \"options\": [\n      \"To rebuild the UI when the widget's state changes\",\n      \"To initialize the widget's state\",\n      \"To handle user interactions\",\n      \"To navigate to a new screen\"\n    ],\n    \"correctAnswer\": \"To rebuild the UI when the widget's state changes\"\n  },\n   {\n    \"question\": \"Which layout widget allows you to arrange its children in a horizontal sequence?\",\n    \"options\": [\n      \"Column\",\n      \"Row\",\n      \"Stack\",\n      \"ListView\"\n    ],\n    \"correctAnswer\": \"Row\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  