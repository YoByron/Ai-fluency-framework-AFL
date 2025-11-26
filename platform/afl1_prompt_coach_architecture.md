# AFL-1 AI Prompt Coach - Technical Architecture
## WebLLM-Based Intelligent Tutoring System

**Version:** 1.0  
**Last Updated:** November 21, 2025  
**Purpose:** Real-time prompt coaching with 80%+ success rate tracking

---

## System Overview

The AFL-1 AI Prompt Coach is an intelligent tutoring system that teaches prompt engineering through real-time feedback, adaptive difficulty, and personalized practice scenarios.

**Key Capabilities:**
- Analyzes prompts and suggests improvements
- Demonstrates best practices with examples
- Generates unlimited practice scenarios
- Tracks success rate (target: 80%+)
- Adapts to learner's skill level and sector
- Integrates with multiple AI tools

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                AFL-1 Prompt Coach UI                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ Prompt Input │  │  AI Feedback │  │   Practice   │ │
│  │   Editor     │  │    Panel     │  │   Scenarios  │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
┌───────▼────────┐                  ┌─────────▼────────┐
│  Prompt Coach  │                  │  Multi-AI Tool   │
│  (WebLLM 7B)   │◄────────────────►│   Integration    │
│                │                  │                  │
│ - Analyze      │                  │ - ChatGPT        │
│ - Suggest      │                  │ - Gemini         │
│ - Teach        │                  │ - Claude         │
│ - Track        │                  │ - Sector Tools   │
└────────┬───────┘                  └──────────────────┘
         │
    ┌────▼────┐
    │ Learner │
    │  Model  │
    │         │
    │ - Skill │
    │ - Sector│
    │ - History│
    └─────────┘
```

---

## Core Components

### 1. Prompt Analyzer

**Function:** Analyze learner's prompts and identify improvements

```typescript
interface PromptAnalysis {
  score: number; // 0-100
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  improvedPrompt: string;
  successProbability: number; // 0-1
}

const analyzePrompt = async (
  prompt: string,
  context: LearnerContext
): Promise<PromptAnalysis> => {
  const systemPrompt = `You are an expert prompt engineering coach.
Analyze this prompt and provide constructive feedback.

Evaluation criteria:
- Clarity: Is the task clear?
- Specificity: Are requirements detailed?
- Context: Is necessary background provided?
- Format: Is desired output format specified?
- Constraints: Are limitations/requirements stated?

Learner context:
- Skill level: ${context.skillLevel}
- Sector: ${context.sector}
- Previous attempts: ${context.attempts}`;

  const response = await promptCoachEngine.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Analyze: "${prompt}"` }
    ],
    temperature: 0.3, // Lower for consistent analysis
  });

  return parseAnalysis(response.choices[0].message.content);
};
```

### 2. Success Rate Tracker

**Function:** Measure and track prompt effectiveness

```typescript
interface PromptAttempt {
  prompt: string;
  aiOutput: string;
  learnerRating: number; // 1-5
  coachRating: number; // 1-5
  taskCompleted: boolean;
  timeToSuccess: number; // seconds
  iterationsNeeded: number;
}

interface SuccessMetrics {
  totalAttempts: number;
  successfulAttempts: number;
  successRate: number; // 0-1
  averageIterations: number;
  averageTime: number;
  improvementTrend: number[]; // Success rate over time
}

const trackSuccess = (
  attempt: PromptAttempt,
  learnerModel: LearnerModel
): SuccessMetrics => {
  // Success criteria
  const isSuccessful = 
    attempt.taskCompleted &&
    attempt.learnerRating >= 4 &&
    attempt.iterationsNeeded <= 2;

  // Update learner model
  learnerModel.attempts.push(attempt);
  learnerModel.successCount += isSuccessful ? 1 : 0;

  // Calculate metrics
  const successRate = 
    learnerModel.successCount / learnerModel.attempts.length;

  return {
    totalAttempts: learnerModel.attempts.length,
    successfulAttempts: learnerModel.successCount,
    successRate,
    averageIterations: calculateAvgIterations(learnerModel.attempts),
    averageTime: calculateAvgTime(learnerModel.attempts),
    improvementTrend: calculateTrend(learnerModel.attempts),
  };
};
```

### 3. Practice Scenario Generator

**Function:** Create personalized practice tasks

```typescript
const generatePracticeScenario = async (
  learnerModel: LearnerModel
): Promise<PracticeScenario> => {
  const systemPrompt = `Generate a prompt engineering practice scenario.

Learner profile:
- Skill level: ${learnerModel.skillLevel} (1-10)
- Sector: ${learnerModel.sector}
- Weak areas: ${learnerModel.weakAreas.join(", ")}
- Completed scenarios: ${learnerModel.completedScenarios.length}

Requirements:
- Difficulty: ${calculateTargetDifficulty(learnerModel)}
- Focus on weak areas
- Relevant to learner's sector
- Include success criteria

Output format:
{
  "task": "...",
  "context": "...",
  "successCriteria": [...],
  "hints": [...],
  "exampleSolution": "..."
}`;

  const response = await promptCoachEngine.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }],
    temperature: 0.8, // Higher for variety
  });

  return JSON.parse(response.choices[0].message.content);
};

// Example generated scenario
{
  "task": "Create a social media post for a local handicraft business",
  "context": "Small business in Rajasthan selling handmade textiles. Target audience: urban millennials interested in sustainable fashion. Platform: Instagram.",
  "successCriteria": [
    "150-200 characters",
    "Includes 3-5 relevant hashtags",
    "Highlights unique selling point",
    "Culturally appropriate",
    "Call to action included"
  ],
  "hints": [
    "Specify target audience in prompt",
    "Mention platform constraints",
    "Include brand voice/tone",
    "Request specific format"
  ],
  "exampleSolution": "Write an Instagram post (150-200 chars) for a Rajasthan handicraft business selling handmade textiles. Target: urban millennials interested in sustainable fashion. Tone: warm, authentic. Include 3-5 hashtags. Highlight: traditional techniques, eco-friendly. End with call to action."
}
```

### 4. Adaptive Difficulty Engine

**Function:** Adjust challenge level based on performance

```typescript
const calculateTargetDifficulty = (
  learnerModel: LearnerModel
): number => {
  const recentSuccess = calculateRecentSuccessRate(
    learnerModel.attempts.slice(-10)
  );

  // Zone of Proximal Development
  if (recentSuccess > 0.85) {
    // Too easy, increase difficulty
    return Math.min(10, learnerModel.currentDifficulty + 1);
  } else if (recentSuccess < 0.60) {
    // Too hard, decrease difficulty
    return Math.max(1, learnerModel.currentDifficulty - 1);
  } else {
    // Just right, maintain
    return learnerModel.currentDifficulty;
  }
};

// Difficulty levels
const DIFFICULTY_LEVELS = {
  1: "Basic single-task prompts",
  2: "Simple multi-requirement prompts",
  3: "Prompts with context and constraints",
  4: "Few-shot prompting",
  5: "Multi-turn conversations",
  6: "Prompt chaining (2-3 steps)",
  7: "Complex multi-step workflows",
  8: "Domain-specific advanced prompts",
  9: "Creative problem-solving prompts",
  10: "Expert-level optimization"
};
```

---

## Multi-AI Tool Integration

### Tool Comparison Feature

```typescript
const compareAITools = async (
  prompt: string,
  tools: AITool[]
): Promise<ToolComparison> => {
  const results = await Promise.all(
    tools.map(async (tool) => ({
      tool: tool.name,
      output: await tool.generate(prompt),
      responseTime: tool.lastResponseTime,
      cost: tool.estimatedCost,
    }))
  );

  // AI Coach analyzes differences
  const analysis = await promptCoachEngine.chat.completions.create({
    messages: [{
      role: "user",
      content: `Compare these AI outputs for the prompt "${prompt}":
      
${results.map((r, i) => `
Tool ${i + 1} (${r.tool}):
${r.output}
`).join("\n")}

Analyze:
- Quality differences
- Which is best for this task?
- Why?
- When to use each tool?`
    }],
  });

  return {
    results,
    analysis: analysis.choices[0].message.content,
    recommendation: selectBestTool(results),
  };
};
```

---

## Real-Time Feedback System

### Interactive Coaching

```typescript
const provideRealTimeFeedback = async (
  prompt: string,
  learnerModel: LearnerModel
): Promise<CoachFeedback> => {
  // Analyze as user types
  const analysis = await analyzePrompt(prompt, learnerModel);

  // Generate feedback
  const feedback: CoachFeedback = {
    score: analysis.score,
    level: getFeedbackLevel(analysis.score),
    message: generateFeedbackMessage(analysis, learnerModel),
    suggestions: analysis.suggestions,
    improvedVersion: analysis.improvedPrompt,
    encouragement: generateEncouragement(learnerModel),
  };

  return feedback;
};

const getFeedbackLevel = (score: number): FeedbackLevel => {
  if (score >= 80) return "excellent";
  if (score >= 60) return "good";
  if (score >= 40) return "needs-improvement";
  return "try-again";
};

const generateFeedbackMessage = (
  analysis: PromptAnalysis,
  learner: LearnerModel
): string => {
  const templates = {
    excellent: [
      "Great prompt! {strengths}. Ready to try it?",
      "Excellent work! This prompt has {score}/100. {strengths}.",
    ],
    good: [
      "Good start! {strengths}. To improve: {suggestions[0]}",
      "You're on the right track! Consider: {suggestions[0]}",
    ],
    "needs-improvement": [
      "Let's improve this. Missing: {weaknesses[0]}. Try adding: {suggestions[0]}",
      "This prompt needs more detail. {suggestions[0]}",
    ],
    "try-again": [
      "Let's break this down. What are you trying to achieve?",
      "This prompt is too vague. Let's start with: {suggestions[0]}",
    ],
  };

  const level = getFeedbackLevel(analysis.score);
  const template = templates[level][Math.floor(Math.random() * templates[level].length)];

  return interpolate(template, { ...analysis, score: analysis.score });
};
```

---

## Learner Model

```typescript
interface LearnerModel {
  id: string;
  skillLevel: number; // 1-10
  sector: string;
  currentDifficulty: number;
  
  // Performance tracking
  attempts: PromptAttempt[];
  successCount: number;
  completedScenarios: string[];
  
  // Skill breakdown
  skills: {
    clarity: number; // 0-1
    specificity: number;
    contextProvision: number;
    formatSpecification: number;
    constraintDefinition: number;
    multiTurn: number;
    promptChaining: number;
  };
  
  // Weak areas
  weakAreas: string[];
  
  // Learning preferences
  preferredExampleTypes: string[];
  learningPace: "slow" | "medium" | "fast";
  
  // Progress
  hoursSpent: number;
  lastActive: Date;
  milestones: Milestone[];
}

// Update learner model after each attempt
const updateLearnerModel = (
  model: LearnerModel,
  attempt: PromptAttempt,
  analysis: PromptAnalysis
): LearnerModel => {
  // Update skill levels based on performance
  model.skills.clarity += (analysis.clarityScore - model.skills.clarity) * 0.1;
  model.skills.specificity += (analysis.specificityScore - model.skills.specificity) * 0.1;
  // ... update other skills

  // Identify weak areas
  model.weakAreas = Object.entries(model.skills)
    .filter(([_, score]) => score < 0.6)
    .map(([skill, _]) => skill);

  // Update skill level (1-10)
  const avgSkill = Object.values(model.skills).reduce((a, b) => a + b) / Object.keys(model.skills).length;
  model.skillLevel = Math.round(avgSkill * 10);

  return model;
};
```

---

## Deployment

### WebLLM Integration

```typescript
import * as webllm from "@mlc-ai/web-llm";

const initPromptCoach = async () => {
  const engine = await webllm.CreateMLCEngine(
    "Llama-3.2-7B-Instruct-q4f16_1-MLC", // 7B for better coaching
    {
      initProgressCallback: (progress) => {
        updateLoadingUI(`Loading AI Prompt Coach: ${progress.progress}%`);
      },
    }
  );

  // Load AFL-1 fine-tuned adapter
  await engine.loadAdapter("afl1-prompt-coach-adapter");

  return engine;
};
```

### Performance Optimization

- **Model Size:** 7B quantized to ~4GB (vs. 3B for AFL-0)
- **Inference Speed:** 15-25 tokens/sec on modern devices
- **Caching:** Cache common feedback patterns
- **Lazy Loading:** Load sector-specific knowledge on demand

---

## Success Metrics

**Individual:**
- Prompt success rate: 80%+ target
- Time to proficiency: <20 hours
- Skill improvement: +40 points (0-100 scale)

**Aggregate:**
- Average success rate across all learners
- Completion rate: 75%+ target
- Satisfaction: NPS 4.5+

---

**Version:** 1.0  
**Status:** Architecture complete, ready for implementation  
**Next:** Build UI and integrate with AFL-1 curriculum
