import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Award, Clock, User, FileText, Mic, Camera, Shield, Vote, Brain, Target } from 'lucide-react';

const AFL0AssessmentTool = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [results, setResults] = useState(null);
  const [practicalTasks, setPracticalTasks] = useState({});

  // Assessment structure
  const assessmentSections = [
    {
      title: "AI Recognition & Understanding",
      icon: <Brain className="w-5 h-5" />,
      type: "knowledge",
      weight: 25,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Which of the following is the BEST example of AI helping in daily life?",
          options: [
            "A calculator doing basic math",
            "Google Maps suggesting the fastest route based on current traffic",
            "A digital clock showing the time",
            "A flashlight turning on when you press a button"
          ],
          correct: 1,
          explanation: "Google Maps uses AI to analyze real-time traffic data and suggest optimal routes - this is pattern recognition and prediction."
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "When you ask Siri or Google Assistant a question, what is the AI doing?",
          options: [
            "Reading pre-written responses from a book",
            "Connecting you directly to a human operator",
            "Converting your speech to text and processing the meaning",
            "Playing a random recorded response"
          ],
          correct: 2,
          explanation: "Voice assistants use speech recognition to convert audio to text, then natural language processing to understand and respond."
        },
        {
          id: 3,
          type: "scenario",
          question: "Your smartphone camera automatically focuses on people's faces in photos. This is an example of:",
          options: [
            "Face recognition AI",
            "Simple programming",
            "Random camera adjustment",
            "Manual focus setting"
          ],
          correct: 0,
          explanation: "Face detection in cameras uses AI to identify facial patterns and adjust focus accordingly."
        }
      ]
    },
    {
      title: "Safe AI Usage",
      icon: <Shield className="w-5 h-5" />,
      type: "practical",
      weight: 30,
      questions: [
        {
          id: 4,
          type: "scenario",
          question: "You're using an AI chatbot for homework help. What's the MOST important thing to remember?",
          options: [
            "AI is always 100% correct",
            "You should verify important information from other sources",
            "AI can read your mind to know what you need",
            "You must pay money for accurate answers"
          ],
          correct: 1,
          explanation: "Always verify AI responses, especially for important information like homework, health, or financial advice."
        },
        {
          id: 5,
          type: "multiple-choice",
          question: "When using AI tools, which privacy practice is MOST important?",
          options: [
            "Share all personal information to get better results",
            "Never use AI tools at all",
            "Check privacy settings and avoid sharing sensitive personal data",
            "Only use AI tools on public computers"
          ],
          correct: 2,
          explanation: "Protecting your privacy while using AI tools involves understanding what data you're sharing and controlling those settings."
        },
        {
          id: 6,
          type: "practical-task",
          question: "Practical Task: Privacy Settings Check",
          instruction: "Imagine you're setting up a new AI app. Which privacy settings would you enable?",
          options: [
            "Allow data sharing with third parties",
            "Enable location tracking for all features",
            "Limit data collection to essential functions only",
            "Share conversation history for improvement"
          ],
          correct: 2,
          explanation: "Limiting data collection to essential functions helps protect your privacy while still allowing the AI to work effectively."
        }
      ]
    },
    {
      title: "Critical Thinking",
      icon: <AlertTriangle className="w-5 h-5" />,
      type: "analysis",
      weight: 25,
      questions: [
        {
          id: 7,
          type: "scenario",
          question: "An AI system tells you: 'Eating ice cream daily will make you healthier.' What should you do?",
          options: [
            "Start eating ice cream daily immediately",
            "Share this advice with everyone you know",
            "Question this claim and check reliable health sources",
            "Ask the AI to provide more ice cream recommendations"
          ],
          correct: 2,
          explanation: "Always critically evaluate AI health advice and verify with reliable medical sources."
        },
        {
          id: 8,
          type: "bias-detection",
          question: "You notice that an AI job recommendation system mostly suggests nursing jobs to women and engineering jobs to men. This suggests:",
          options: [
            "The AI is perfectly accurate about gender preferences",
            "The AI may have learned bias from historical data",
            "Men and women naturally prefer different jobs",
            "The AI is trying to be helpful by making assumptions"
          ],
          correct: 1,
          explanation: "AI systems can perpetuate historical biases present in their training data, leading to unfair recommendations."
        },
        {
          id: 9,
          type: "fact-check",
          question: "An AI tells you that 'India has 50 states.' How would you verify this?",
          instruction: "Select the best verification approach:",
          options: [
            "Accept it as true since AI said it",
            "Check multiple reliable sources like government websites",
            "Ask friends on social media",
            "Ask the same AI system again"
          ],
          correct: 1,
          explanation: "Cross-reference AI information with authoritative sources. India actually has 28 states and 8 union territories."
        }
      ]
    },
    {
      title: "Democratic Participation",
      icon: <Vote className="w-5 h-5" />,
      type: "civic",
      weight: 20,
      questions: [
        {
          id: 10,
          type: "civic-scenario",
          question: "Your city wants to use AI for traffic management. As a citizen, what's the BEST way to participate in this decision?",
          options: [
            "Let the government decide without citizen input",
            "Oppose all AI use in government",
            "Attend public consultations and ask about privacy and transparency",
            "Only support AI if it benefits you personally"
          ],
          correct: 2,
          explanation: "Democratic participation means engaging in public consultations and asking important questions about AI governance."
        },
        {
          id: 11,
          type: "rights-awareness",
          question: "Which of these is a fundamental right that should be protected when AI is used in government services?",
          options: [
            "The right to demand AI work perfectly",
            "The right to transparency about how AI decisions affect you",
            "The right to get free AI services",
            "The right to prevent others from using AI"
          ],
          correct: 1,
          explanation: "Transparency in AI decision-making is crucial for accountability and protecting citizens' rights."
        }
      ]
    }
  ];

  // Practical tasks for hands-on assessment
  const practicalTasksConfig = [
    {
      id: 'voice-assistant',
      title: 'Voice Assistant Interaction',
      instruction: 'Ask a voice assistant for today\'s weather, then verify the information using a weather app.',
      criteria: ['Successfully used voice assistant', 'Verified information independently', 'Demonstrated privacy awareness']
    },
    {
      id: 'fact-checking',
      title: 'AI Response Verification',
      instruction: 'Ask an AI chatbot about a recent news event, then fact-check the response using reliable news sources.',
      criteria: ['Asked appropriate question', 'Identified potential inaccuracies', 'Used reliable sources for verification']
    },
    {
      id: 'privacy-settings',
      title: 'Privacy Configuration',
      instruction: 'Review and adjust privacy settings on an AI-powered app or service.',
      criteria: ['Located privacy settings', 'Made informed choices about data sharing', 'Understood implications of settings']
    }
  ];

  useEffect(() => {
    let interval;
    if (assessmentStarted && !assessmentComplete) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [assessmentStarted, assessmentComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const calculateResults = () => {
    let totalScore = 0;
    let maxScore = 0;
    let sectionScores = {};

    assessmentSections.forEach(section => {
      let sectionScore = 0;
      let sectionMax = section.questions.length;
      
      section.questions.forEach(question => {
        maxScore++;
        if (answers[question.id] === question.correct) {
          totalScore++;
          sectionScore++;
        }
      });
      
      sectionScores[section.title] = {
        score: sectionScore,
        max: sectionMax,
        percentage: Math.round((sectionScore / sectionMax) * 100),
        weight: section.weight
      };
    });

    const overallPercentage = Math.round((totalScore / maxScore) * 100);
    const passed = overallPercentage >= 70; // 70% passing threshold

    return {
      totalScore,
      maxScore,
      overallPercentage,
      passed,
      sectionScores,
      timeElapsed: formatTime(timeElapsed),
      recommendations: generateRecommendations(sectionScores)
    };
  };

  const generateRecommendations = (sectionScores) => {
    const recommendations = [];
    
    Object.entries(sectionScores).forEach(([section, score]) => {
      if (score.percentage < 70) {
        switch (section) {
          case 'AI Recognition & Understanding':
            recommendations.push('Review Unit 1: "What is AI?" - Focus on identifying AI in daily applications');
            break;
          case 'Safe AI Usage':
            recommendations.push('Practice Unit 2: "Using AI Safely" - Emphasis on privacy settings and verification');
            break;
          case 'Critical Thinking':
            recommendations.push('Strengthen Unit 3: "Critical Thinking" - Work on fact-checking and bias detection');
            break;
          case 'Democratic Participation':
            recommendations.push('Engage with Unit 4: "AI & Democracy" - Learn about civic participation in AI governance');
            break;
        }
      }
    });
    
    return recommendations;
  };

  const completeAssessment = () => {
    const assessmentResults = calculateResults();
    setResults(assessmentResults);
    setAssessmentComplete(true);
  };

  const nextQuestion = () => {
    const section = assessmentSections[currentSection];
    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < assessmentSections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      completeAssessment();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(assessmentSections[currentSection - 1].questions.length - 1);
    }
  };

  const startAssessment = () => {
    setAssessmentStarted(true);
    setTimeElapsed(0);
  };

  // Assessment Introduction
  if (!assessmentStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">AFL-0 Certification Assessment</h1>
          <p className="text-xl text-gray-600 mb-8">AI Basics for Everyone - Comprehensive Evaluation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Assessment Structure
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• 4 competency areas</li>
                <li>• 11 questions total</li>
                <li>• Multiple formats: scenarios, practical tasks</li>
                <li>• 70% minimum passing score</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Instructions
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• No time limit - work at your pace</li>
                <li>• Read each question carefully</li>
                <li>• Choose the BEST answer</li>
                <li>• You can navigate back and forth</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 text-yellow-800 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">Assessment Sections</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {assessmentSections.map((section, index) => (
                <div key={index} className="flex items-center gap-2">
                  {section.icon}
                  <span>{section.title} ({section.weight}%)</span>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={startAssessment}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (assessmentComplete && results) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              results.passed ? 'bg-green-500' : 'bg-orange-500'
            }`}>
              {results.passed ? (
                <Award className="w-10 h-10 text-white" />
              ) : (
                <AlertTriangle className="w-10 h-10 text-white" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Assessment Complete!</h1>
            <p className="text-xl text-gray-600 mb-4">
              Score: {results.totalScore}/{results.maxScore} ({results.overallPercentage}%)
            </p>
            <p className="text-lg">Time: {results.timeElapsed}</p>
          </div>
          
          {/* Pass/Fail Status */}
          <div className={`p-6 rounded-lg mb-8 text-center ${
            results.passed ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'
          }`}>
            {results.passed ? (
              <div className="text-green-800">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-xl font-bold mb-2">Congratulations! You Passed! 🎉</h3>
                <p>You've successfully demonstrated AFL-0 competencies and are ready for your certification.</p>
              </div>
            ) : (
              <div className="text-orange-800">
                <XCircle className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-xl font-bold mb-2">Almost There!</h3>
                <p>You need 70% to pass. Review the recommendations below and try again when ready.</p>
              </div>
            )}
          </div>
          
          {/* Section Breakdown */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Section Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(results.sectionScores).map(([section, score]) => (
                <div key={section} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{section}</span>
                    <span className={`font-bold ${score.percentage >= 70 ? 'text-green-600' : 'text-orange-600'}`}>
                      {score.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${score.percentage >= 70 ? 'bg-green-500' : 'bg-orange-500'}`}
                      style={{ width: `${score.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {score.score}/{score.max} questions correct
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recommendations */}
          {results.recommendations.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Improvement Recommendations</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-blue-800">
                      <Target className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Next Steps */}
          <div className="text-center">
            {results.passed ? (
              <div className="space-y-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
                  Download AFL-0 Certificate
                </button>
                <div>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Start AFL-1 Pathway
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAssessmentStarted(false);
                  setAssessmentComplete(false);
                  setCurrentSection(0);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setResults(null);
                  setTimeElapsed(0);
                }}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Review & Retake Assessment
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main Assessment Interface
  const section = assessmentSections[currentSection];
  const question = section.questions[currentQuestion];
  const totalQuestions = assessmentSections.reduce((sum, s) => sum + s.questions.length, 0);
  const questionNumber = assessmentSections.slice(0, currentSection).reduce((sum, s) => sum + s.questions.length, 0) + currentQuestion + 1;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg text-white ${section.type === 'knowledge' ? 'bg-blue-500' : section.type === 'practical' ? 'bg-green-500' : section.type === 'analysis' ? 'bg-orange-500' : 'bg-purple-500'}`}>
              {section.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              <p className="text-gray-600">Question {questionNumber} of {totalQuestions}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeElapsed)}</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{question.question}</h3>
          {question.instruction && (
            <p className="text-gray-600 mb-4 italic">{question.instruction}</p>
          )}
        </div>
        
        {/* Answer Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(question.id, index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                answers[question.id] === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  answers[question.id] === index
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {answers[question.id] === index && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={prevQuestion}
            disabled={currentSection === 0 && currentQuestion === 0}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentSection === 0 && currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>
          
          <span className="text-gray-500">
            {questionNumber} / {totalQuestions}
          </span>
          
          <button
            onClick={nextQuestion}
            disabled={answers[question.id] === undefined}
            className={`px-6 py-2 rounded-lg transition-colors ${
              answers[question.id] === undefined
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : currentSection === assessmentSections.length - 1 && currentQuestion === section.questions.length - 1
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {currentSection === assessmentSections.length - 1 && currentQuestion === section.questions.length - 1
              ? 'Complete Assessment'
              : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AFL0AssessmentTool;