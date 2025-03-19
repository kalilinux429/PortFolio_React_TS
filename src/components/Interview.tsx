import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, ChevronUp, PlusCircle } from "lucide-react";

// Define types for questions
type Question = {
  id: string;
  title: string;
  codeSnippet?: string;
  answer: string;
  category: string;
};

const tabs: string[] = ["JavaScript", "React", "Coding", "Other"];

export default function Interview() {
  const [questions, setQuestions] = useState<Record<string, Question[]>>({
    JavaScript: [],
    React: [],
    Coding: [],
    Other: [],
  });
  const [activeTab, setActiveTab] = useState<string>("JavaScript");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false);
  const [newQuestion, setNewQuestion] = useState<Omit<Question, "id">>({
    title: "",
    codeSnippet: "",
    answer: "",
    category: "JavaScript",
  });

  // Set the new API base URL
  axios.defaults.baseURL = "https://qustionapiporfolio.onrender.com";

  // Fetch questions on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/api/questions");
        const categorizedQuestions = tabs.reduce<Record<string, Question[]>>(
          (acc, tab) => {
            acc[tab] = response.data.filter((q: Question) => q.category === tab);
            return acc;
          },
          {}
        );
        setQuestions(categorizedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  // Handle new question submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.title || !newQuestion.answer) return;

    try {
      const response = await axios.post("/api/questions", {
        ...newQuestion,
        category: activeTab,
      });

      setQuestions((prev) => ({
        ...prev,
        [activeTab]: [...prev[activeTab], response.data],
      }));

      setNewQuestion({ title: "", codeSnippet: "", answer: "", category: activeTab });
      setShowAddQuestion(false);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Interview Questions</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === tab ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Add question toggle */}
        <button
          onClick={() => setShowAddQuestion(!showAddQuestion)}
          className="mb-4 flex items-center text-indigo-600 hover:underline"
        >
          <PlusCircle className="w-5 h-5 mr-2" /> Add Question
        </button>

        {/* Add Question Form */}
        {showAddQuestion && (
          <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Question</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Question Title</label>
                <input
                  type="text"
                  value={newQuestion.title}
                  onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Enter your question"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Code Snippet (optional)</label>
                <textarea
                  value={newQuestion.codeSnippet}
                  onChange={(e) => setNewQuestion({ ...newQuestion, codeSnippet: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm font-mono"
                  placeholder="Enter code example"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Answer</label>
                <textarea
                  value={newQuestion.answer}
                  onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Enter the answer"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Add Question
              </button>
            </div>
          </form>
        )}

        {/* Question List */}
        <div className="space-y-4">
          {questions[activeTab]?.map((question) => (
            <div key={question.id} className="bg-white shadow-sm rounded-lg overflow-hidden">
              {/* ✅ Fixed: Now only one question expands at a time */}
              <button
                onClick={() =>
                  setExpandedId((prevId) => (prevId === question.id ? null : question.id))
                }
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">{question.title}</span>
                {expandedId === question.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedId === question.id && (
                <div className="px-6 pb-4">
                  {question.codeSnippet && (
                    <pre className="bg-gray-900 text-white rounded-md p-4 overflow-x-auto text-sm font-mono">
                      {question.codeSnippet}
                    </pre>
                  )}
                  <p className="text-gray-700 mt-2">{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
