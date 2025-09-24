import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, Brain, Users, Shield, Vote, BookOpen, Play, Pause, RotateCcw, Award } from 'lucide-react';

const AFL0InteractiveDemo = () => {
  const [currentUnit, setCurrentUnit] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [gameState, setGameState] = useState('idle'); // idle, playing, completed

  const units = [
    {
      title: "What is AI?",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-blue-500",
      lessons: [
        {
          title: "AI in Your Daily Life",
          type: "interactive",
          content: "AI Scavenger Hunt",
          description: "Discover AI applications in your everyday activities"
        },
        {
          title: "How AI Works",
          type: "simulation",
          content: "Pattern Recognition Game",
          description: "Learn how AI recognizes patterns like humans do"
        },
        {
          title: "Types of AI Tools",
          type: "categorization",
          content: "AI Tool Sorting",
          description: "Classify different AI applications by their purpose"
        }
      ]
    },
    {
      title: "Using AI Safely",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-500",
      lessons: [
        {
          title: "First AI Interaction",
          type: "hands-on",
          content: "Voice Assistant Practice",
          description: "Try your first AI conversation safely"
        },
        {
          title: "AI for Learning",
          type: "project",
          content: "Research Assistant",
          description: "Use AI to research a topic of your choice"
        },
        {
          title: "Privacy Settings",
          type: "guided-practice",
          content: "Privacy Configuration",
          description: "Learn to protect your data while using AI"
        }
      ]
    },
    {
      title: "Critical Thinking",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-orange-500",
      lessons: [
        {
          title: "Fact-Checking AI",
          type: "quiz",
          content: "Truth or Fiction",
          description: "Learn to verify AI-generated information"
        },
        {
          title: "Spotting Bias",
          type: "scenario",
          content: "Bias Detection",
          description: "Recognize and address AI bias in real situations"
        }
      ]
    },
    {
      title: "AI & Democracy",
      icon: <Vote className="w-6 h-6" />,
      color: "bg-purple-500",
      lessons: [
        {
          title: "AI in Government",
          type: "exploration",
          content: "Public Services Tour",
          description: "Explore how AI serves citizens and democracy"
        },
        {
          title: "Your Voice in AI Policy",
          type: "civic-action",
          content: "Policy Participation",
          description: "Learn to participate in AI governance discussions"
        }
      ]
    }
  ];

  // Sample interactive activities
  const PatternRecognitionGame = () => {
    const [patterns] = useState([
      { sequence: [1, 2, 3, 4], next: 5 },
      { sequence: [2, 4, 6, 8], next: 10 },
      { sequence: [1, 4, 9, 16], next: 25 }
    ]);
    const [currentPattern, setCurrentPattern] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    const checkAnswer = () => {
      const correct = parseInt(userAnswer) === patterns[currentPattern].next;
      setFeedback(correct ? 'Correct! You found the pattern!' : 'Not quite. Think about the relationship between numbers.');
      if (correct && currentPattern < patterns.length - 1) {
        setTimeout(() => {
          setCurrentPattern(currentPattern + 1);
          setUserAnswer('');
          setFeedback('');
        }, 2000);
      }
    };

    return (
      <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">Pattern Recognition Challenge</h4>
        <p className="mb-4 text-gray-600">What comes next in this sequence?</p>
        
        <div className="flex items-center gap-2 mb-4">
          {patterns[currentPattern].sequence.map((num, idx) => (
            <div key={idx} className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-800">
              {num}
            </div>
          ))}
          <ChevronRight className="w-6 h-6 text-gray-400" />
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center font-bold"
            placeholder="?"
          />
        </div>
        
        <button
          onClick={checkAnswer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Check Answer
        </button>
        
        {feedback && (
          <div className={`mt-4 p-3 rounded ${feedback.includes('Correct') ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
            {feedback}
          </div>
        )}
      </div>
    );
  };

  const AIScavengerHunt = () => {
    const [foundItems, setFoundItems] = useState(new Set());
    const aiItems = [
      { id: 'smartphone', name: 'Smartphone Camera', description: 'Auto-focus, face detection, image enhancement' },
      { id: 'maps', name: 'GPS Navigation', description: 'Route optimization, traffic predictions' },
      { id: 'search', name: 'Search Engine', description: 'Relevant results, autocomplete suggestions' },
      { id: 'streaming', name: 'Video Recommendations', description: 'Personalized content suggestions' },
      { id: 'voice', name: 'Voice Assistant', description: 'Speech recognition, natural language processing' },
      { id: 'shopping', name: 'Online Shopping', description: 'Product recommendations, fraud detection' }
    ];

    const toggleItem = (id) => {
      const newFound = new Set(foundItems);
      if (newFound.has(id)) {
        newFound.delete(id);
      } else {
        newFound.add(id);
      }
      setFoundItems(newFound);
    };

    return (
      <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">AI in Your Daily Life Hunt</h4>
        <p className="mb-4 text-gray-600">Check off the AI applications you've used or seen today:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {aiItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                foundItems.has(item.id)
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {foundItems.has(item.id) && <CheckCircle className="w-5 h-5 text-green-500" />}
                <span className="font-medium">{item.name}</span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            Found {foundItems.size} out of {aiItems.length} AI applications! 
            {foundItems.size === aiItems.length && " 🎉 Great job! AI is everywhere!"}
          </p>
        </div>
      </div>
    );
  };

  const FactCheckingQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
      {
        statement: "AI can read your mind and know your thoughts.",
        answer: false,
        explanation: "AI cannot read minds. It can only work with data you provide or public information."
      },
      {
        statement: "Google Translate uses AI to convert text between languages.",
        answer: true,
        explanation: "Correct! Modern translation services use neural networks and machine learning."
      },
      {
        statement: "AI systems are always 100% accurate and never make mistakes.",
        answer: false,
        explanation: "AI systems can make mistakes, especially with unclear inputs or biased training data."
      }
    ];

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (answer) => {
      setSelectedAnswer(answer);
      setShowExplanation(true);
      if (answer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
    };

    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setShowResults(true);
      }
    };

    if (showResults) {
      return (
        <div className="bg-white p-6 rounded-lg border-2 border-green-200 text-center">
          <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-green-800 mb-2">Quiz Complete!</h4>
          <p className="text-lg mb-4">Your Score: {score}/{questions.length}</p>
          <p className="text-gray-600 mb-4">
            {score === questions.length ? "Perfect! You're ready to fact-check AI content!" :
             score >= questions.length/2 ? "Good work! Keep practicing critical thinking." :
             "Keep learning! Critical thinking about AI is important."}
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResults(false);
              setSelectedAnswer(null);
              setShowExplanation(false);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 rounded-lg border-2 border-orange-200">
        <h4 className="text-lg font-semibold mb-4 text-orange-800">AI Fact Check Challenge</h4>
        <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {questions.length}</p>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-lg">{questions[currentQuestion].statement}</p>
        </div>
        
        {!showExplanation ? (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              True
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              False
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${selectedAnswer === questions[currentQuestion].answer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <p className="font-medium">
                {selectedAnswer === questions[currentQuestion].answer ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="mt-2">{questions[currentQuestion].explanation}</p>
            </div>
            
            <button
              onClick={nextQuestion}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderActivity = () => {
    const unit = units[currentUnit];
    const lesson = unit.lessons[currentLesson];
    
    switch (lesson.content) {
      case 'AI Scavenger Hunt':
        return <AIScavengerHunt />;
      case 'Pattern Recognition Game':
        return <PatternRecognitionGame />;
      case 'Truth or Fiction':
        return <FactCheckingQuiz />;
      default:
        return (
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {unit.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{lesson.title}</h4>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <p className="text-sm text-blue-600 italic">
              Interactive activity: {lesson.content}
            </p>
          </div>
        );
    }
  };

  const calculateProgress = () => {
    const totalLessons = units.reduce((sum, unit) => sum + unit.lessons.length, 0);
    const completedLessons = Object.keys(progress).length;
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const markLessonComplete = () => {
    const lessonKey = `${currentUnit}-${currentLesson}`;
    setProgress({...progress, [lessonKey]: true});
  };

  const navigateToNext = () => {
    const unit = units[currentUnit];
    if (currentLesson < unit.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentUnit < units.length - 1) {
      setCurrentUnit(currentUnit + 1);
      setCurrentLesson(0);
    }
  };

  const navigateToPrev = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentUnit > 0) {
      setCurrentUnit(currentUnit - 1);
      setCurrentLesson(units[currentUnit - 1].lessons.length - 1);
    }
  };

  const progressPercentage = calculateProgress();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">AFL-0: AI Basics for Everyone</h1>
        <p className="text-xl text-gray-600 mb-4">Interactive Learning Experience</p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{progressPercentage}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Units */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-6">
            <h3 className="font-bold text-gray-800 mb-4">Learning Units</h3>
            
            {units.map((unit, unitIndex) => (
              <div key={unitIndex} className="mb-3">
                <div 
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    unitIndex === currentUnit ? 'bg-blue-100 border-2 border-blue-300' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setCurrentUnit(unitIndex);
                    setCurrentLesson(0);
                  }}
                >
                  <div className={`${unit.color} text-white p-2 rounded-lg`}>
                    {unit.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{unit.title}</p>
                    <p className="text-xs text-gray-500">
                      {unit.lessons.length} lessons
                    </p>
                  </div>
                </div>
                
                {unitIndex === currentUnit && (
                  <div className="ml-6 mt-2 space-y-1">
                    {unit.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className={`text-xs p-2 rounded cursor-pointer transition-colors ${
                          lessonIndex === currentLesson ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setCurrentLesson(lessonIndex)}
                      >
                        <div className="flex items-center gap-2">
                          {progress[`${unitIndex}-${lessonIndex}`] && (
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          )}
                          {lesson.title}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md">
            {/* Lesson Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className={`${units[currentUnit].color} text-white p-3 rounded-lg`}>
                  {units[currentUnit].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {units[currentUnit].lessons[currentLesson].title}
                  </h2>
                  <p className="text-gray-600">
                    {units[currentUnit].title} • Lesson {currentLesson + 1} of {units[currentUnit].lessons.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Activity */}
            <div className="p-6">
              {renderActivity()}
            </div>

            {/* Navigation */}
            <div className="border-t border-gray-200 p-6 flex justify-between items-center">
              <button
                onClick={navigateToPrev}
                disabled={currentUnit === 0 && currentLesson === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                  currentUnit === 0 && currentLesson === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-4">
                <button
                  onClick={markLessonComplete}
                  className={`px-4 py-2 rounded transition-colors ${
                    progress[`${currentUnit}-${currentLesson}`]
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {progress[`${currentUnit}-${currentLesson}`] ? (
                    <>
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark Complete'
                  )}
                </button>

                <button
                  onClick={navigateToNext}
                  disabled={currentUnit === units.length - 1 && currentLesson === units[currentUnit].lessons.length - 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                    currentUnit === units.length - 1 && currentLesson === units[currentUnit].lessons.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Progress */}
      {progressPercentage === 100 && (
        <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg text-center">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Congratulations! 🎉</h3>
          <p className="text-lg mb-4">You've completed all AFL-0 modules!</p>
          <p className="mb-4">You're now ready for AFL-0 certification assessment.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Take Certification Assessment
          </button>
        </div>
      )}
    </div>
  );
};

export default AFL0InteractiveDemo;