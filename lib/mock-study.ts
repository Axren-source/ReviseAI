export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export type Flashcard = {
  front: string;
  back: string;
};

export type StudyPack = {
  summary: string;
  keyPoints: string[];
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
};

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "from",
  "into",
  "your",
  "have",
  "about",
  "are",
  "was",
  "were",
  "has",
  "had",
  "not",
  "you",
  "they",
  "their",
  "them",
  "can",
  "will",
  "its",
  "but",
  "also",
]);

function getSentences(notes: string): string[] {
  return notes
    .replace(/\n/g, " ")
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function getKeywords(notes: string, count: number): string[] {
  const frequency = notes
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4 && !stopWords.has(word))
    .reduce<Record<string, number>>((acc, word) => {
      acc[word] = (acc[word] ?? 0) + 1;
      return acc;
    }, {});

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word]) => word);
}

function unique<T>(values: T[]): T[] {
  return [...new Set(values)];
}

export function generateStudyPack(inputNotes: string): StudyPack {
  const notes = inputNotes.trim();

  if (!notes) {
    return {
      summary: "Paste class notes to generate your study pack.",
      keyPoints: ["No notes detected yet."],
      quiz: [],
      flashcards: [],
    };
  }

  const sentences = getSentences(notes);
  const summarySentences = sentences.slice(0, 3);
  const summary = summarySentences.length
    ? `${summarySentences.join(". ")}.`
    : "ReviseAI could not find enough content to summarize.";

  const keywords = getKeywords(notes, 6);

  const keyPoints = unique([
    ...sentences.slice(0, 2),
    ...keywords.map((word) => `Important concept: ${word}`),
  ]).slice(0, 5);

  const quiz: QuizQuestion[] = keywords.slice(0, 3).map((keyword, index) => {
    const distractors = keywords.filter((word) => word !== keyword).slice(0, 3);

    return {
      question: `Which concept is most connected to topic ${index + 1} in these notes?`,
      options: unique([keyword, ...distractors, "Foundational review"]).slice(0, 4),
      answer: keyword,
    };
  });

  if (!quiz.length) {
    quiz.push({
      question: "What is the main focus of your notes?",
      options: ["Core concept", "Historical context", "Case study", "Exam strategy"],
      answer: "Core concept",
    });
  }

  const flashcards: Flashcard[] = keywords.slice(0, 4).map((keyword) => ({
    front: `Define ${keyword}`,
    back: `In your notes, ${keyword} appears as a core concept. Explain it in your own words and add one example to lock understanding.`,
  }));

  if (!flashcards.length) {
    flashcards.push({
      front: "What should you review first?",
      back: "Start with the topic you found hardest in class and summarize it in 3 bullet points.",
    });
  }

  return {
    summary,
    keyPoints,
    quiz,
    flashcards,
  };
}
