export default quiz_data =
[
  {
    quizName: 'Credit Card Debt Level 1',
    quizCategory: 'debt',
    learningCategories: [
      'interest rates',
      'credit score'
    ],
    questions: [
      {
        image: require('./images/credit-card-debt/ready.gif'),
        answerChoices: [
          {
            buttonOrder: '2',
            answerText: 'Let’s do this!',
            isCorrect: true
          }
        ]
      },
      {
        statement: 'You’re applying for a credit card. \n\nYou look up some stuff online and read that credit card interest rates can be as high as 30%. ',
        learningCategory: 'credit score',
        question: 'Do you believe it?',
        answerChoices: [
          {
            buttonOrder: '0',
            answerText: 'Yes',
            isCorrect: true
          },
          {
            buttonOrder: '1',
            answerText: 'No way.',
            isCorrect: false
          }
        ]
      },
      {
        statement: 'Interest is the fee you pay to borrow money.\n\nIt will be higher or lower depending on your credit history and on how the economy is doing.  ',
        question: 'Now what do you think “APR” is?',
        answerChoices: [
          {
            buttonOrder: '1',
            answerText: 'It’s my credit rating. ',
            isCorrect: false
          },
          {
            buttonOrder: '0',
            answerText: 'It’s basically interest. ',
            isCorrect: true
          }
        ]
      },
      {
        statement: 'APR is basically interest!\n\nAn APR tells you how much interest you’ll have to pay over the course of a year if your normal payments are missed or delayed.',
        question: 'What is the “best” APR?',
        answerChoices: [
          {
            buttonOrder: '0',
            answerText: '0%',
            isCorrect: true
          },
          {
            buttonOrder: '1',
            answerText: '30%',
            isCorrect: false
          }
        ]
      },
      {
        statement: 'Most credit cards offer 0% Introductory APR as an incentive.\n\nPay attention to what APR is after the intro period though. It could jump to that 30%.',
        question: 'How can you get the lowest APR?',
        answerChoices: [
          {
            buttonOrder: '1',
            answerText: 'Only pay the minimum. ',
            isCorrect: false
          },
          {
            buttonOrder: '0',
            answerText: 'Increase my credit score',
            isCorrect: true
          }
        ]
      },
      {
        statement: 'Think of credit like trust.\n\nYou build trust, and credit, when you show you’re reliable. This is one reason to pay your bills on time and in full!',
        question: 'Be honest with yourself: Do you pay your bills on time? ',
        answerChoices: [
          {
            buttonOrder: '0',
            answerText: 'Always',
            isCorrect: true
          },
          {
            buttonOrder: '0',
            answerText: 'Not really',
            isCorrect: true
          }
        ]
      },
      {
        statement: 'Honesty is a good start!\n\nIf you pay attention to interest & pay bills in full and on time, you’re on the right track to building solid credit.',
        image: require('./images/credit-card-debt/good-work.gif'),
        answerChoices: [
          {
            buttonOrder: '2',
            answerText: 'Got it',
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    quizName: 'Credit Card Debt Level 2',
    quizCategory: 'debt',
    learningCategories: [
      'interest rates',
      'credit score'
    ],
    questions: [
      {
        statement: 'The Fair Credit Billing Act limits cardholder liabilities in the event of fraud. If charges are incurred after the card is reported stolen, the cardholder is not liable for ANY charges and $50 until the card is reported stolen.',
        learningCategory: 'interest rates',
        question: 'Your credit card has been stolen, and before you know it, the thief has charged $10,000. How much should you expect to have to pay?',
        answerChoices: [
          {
            buttonOrder: '2',
            answerText: 'A. $0',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'B. $50 until card reported stolen',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'C. All Charges',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'D. A & B',
            isCorrect: true
          }
        ]
      },
      {
        statement: '',
        learningCategory: 'credit score',
        question: 'In 2010, federal regulations changed, adding consumer protection that:',
        answerChoices: [
          {
            buttonOrder: '2',
            answerText: 'A. Prohibits card issuers from charging a penalty of more than $25 for a customer\'s first late payment.',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'Forbids \'any time, any reason\' rate hikes.',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'Requires card issuers to ask customers whether they want to over-limit protection.',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'All of the Above',
            isCorrect: true
          }
        ]
      },
      {
        statement: '',
        learningCategory: 'interest rates',
        question: 'A credit-card bill arrives on the 15th of the month; it\'s due on the 30th. When should you pay it to get the best results on your credit record?',
        answerChoices: [
          {
            buttonOrder: '2',
            answerText: 'The day it arrives in the mail.',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'Wait until a few days before it\'s due, then pay it.',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'You can wait until the 29th of the following month.',
            isCorrect: false
          },
          {
            buttonOrder: '2',
            answerText: 'On time, but a few days before the credit card company sends payment data to the credit bureaus -- that way you\'ll show zero balance.',
            isCorrect: true
          }
        ]
      }
    ]
  }
];
