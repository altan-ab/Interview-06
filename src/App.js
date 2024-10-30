import React, { useState } from 'react'

const QUESTIONS = [
  {
    question: '2*(4+4) sonucu nedir?',
    answers: ['2', '4', '8', '16'],
    correct: 3,
  },
  {
    question: '9*9 sonucu nedir?',
    answers: ['18', '81', '80', '79'],
    correct: 1,
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      'Max Verstappen',
      'Charles Leclerd',
      'Lewis Hamilton',
      'Lando Norris',
    ],
    correct: 0,
  },
  {
    question: 'Formula 1 takviminde ilk sırada hangi grand prix vardır?',
    answers: [
      'Bahreyn Grand Prix',
      'Suudi Arabistan Grand Prix',
      'Avustralya Grand Prix',
      'Emilia Romagna Grand Prix',
    ],
    correct: 0,
  },
  {
    question: 'Hangisi Formula 1 takımlarından değildir?',
    answers: [
      'Ford-AMG F1 Team',
      'Alfa Romeo F1 Team Orlen',
      'BWT Alpine F1 Team',
      'Oracle Red Bull Racing',
    ],
    correct: 0,
  },
]

function App() {
  return <Quiz questions={QUESTIONS} />
}

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="flex justify-center items-center mt-6">
      {showScore ? (
        <div>
          <h2>Sınav Sonucu</h2>
          <p>Doğru Cevap Sayısı: {score}</p>
          <p>Puan: %{(score / questions.length) * 100}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-2">
            {questions[currentQuestion].answers.map((answer, index) => (
              <div
                key={crypto.randomUUID()}
                onClick={() => handleAnswerClick(index)}
              >
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-yellow-500">
                  {answer}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
