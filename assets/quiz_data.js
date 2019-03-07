export default (quiz_data = [
  {
    quizName: "Credit Card Debt Level 1",
    quizCategory: 0,
    quizLevel: 1,
    learningCategories: ["interest rates", "credit score"],
    questions: [
      {
        image: require("./images/credit-card-debt/ready.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Let’s do this!",
            isCorrect: true
          }
        ]
      },
      {
        statement:
          "You’re applying for a credit card. \n\nYou look up some stuff online and read that credit card interest rates can be as high as 30%. ",
        learningCategory: "credit score",
        question: "Do you believe it?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Yes",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "No way.",
            isCorrect: false
          }
        ]
      },
      {
        statement:
          "Interest is the fee you pay to borrow money.\n\nIt will be higher or lower depending on your credit history and on how the economy is doing.  ",
        question: "Now what do you think “APR” is?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "It’s my credit rating. ",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "It’s basically interest. ",
            isCorrect: true
          }
        ]
      },
      {
        statement:
          "APR is basically interest!\n\nAn APR tells you how much interest you’ll have to pay over the course of a year if your normal payments are missed or delayed.",
        question: "What is the “best” APR?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "0%",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "30%",
            isCorrect: false
          }
        ]
      },
      {
        statement:
          "Most credit cards offer 0% Introductory APR as an incentive.\n\nPay attention to what APR is after the intro period though. It could jump to that 30%.",
        question: "How can you get the lowest APR?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "Only pay the minimum. ",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "Increase my credit score",
            isCorrect: true
          }
        ]
      },
      {
        statement:
          "Think of credit like trust.\n\nYou build trust, and credit, when you show you’re reliable. This is one reason to pay your bills on time and in full!",
        question: "Be honest with yourself: Do you pay your bills on time? ",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Always",
            isCorrect: true
          },
          {
            buttonOrder: "0",
            answerText: "Not really",
            isCorrect: true
          }
        ]
      },
      {
        statement:
          "Honesty is a good start!\n\nIf you pay attention to interest & pay bills in full and on time, you’re on the right track to building solid credit.",
        image: require("./images/credit-card-debt/good-work.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Got it",
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    quizName: "Credit Card Debt Level 2",
    quizCategory: 0,
    quizLevel: 2,
    learningCategories: ["interest rates", "credit score"],
    questions: [
      {
        statement:
          "The Fair Credit Billing Act limits cardholder liabilities in the event of fraud. If charges are incurred after the card is reported stolen, the cardholder is not liable for ANY charges and $50 until the card is reported stolen.",
        image: require("./images/credit-card-debt/dwight.gif"),
        learningCategory: "interest rates",
        question:
          "Your credit card has been stolen, and before you know it, the thief has charged $10,000. How much should you expect to have to pay?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A. $0",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B. $50 until card reported stolen",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "C. All Charges",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "D. A & B",
            isCorrect: true
          }
        ]
      },
      {
        statement: "",
        image: require("./images/credit-card-debt/dwight.gif"),
        learningCategory: "credit score",
        question:
          "In 2010, federal regulations changed, adding consumer protection that:",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText:
              "A. Prohibits card issuers from charging a penalty of more than $25 for a customer's first late payment.",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B. Forbids 'any time, any reason' rate hikes.",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText:
              "C. Requires card issuers to ask customers whether they want to over-limit protection.",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "D. All of the Above",
            isCorrect: true
          }
        ]
      },
      {
        statement: "",
        image: require("./images/credit-card-debt/minion.gif"),
        learningCategory: "credit score",
        question:
          "In 2010, as part of the credit card reform law and associated regulations, issuers had to make multiple changes. Among them:",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText:
              "A. Credit card companies cannot charge more than $25 for routine, occasional late payments.",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B.  Card issuers can't raise rates at any time for any reason.",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText:
              "C. Cardholders must 'opt in' to over-limit protection -- and the hefty fees that go with such programs. They previously had been imposed automatically.",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "D. All the above",
            isCorrect: true
          }
        ]
      },
      {
        statement: "",
        image: require("./images/credit-card-debt/kanye.gif"),
        learningCategory: "interest rates",
        question:
          "A credit-card bill arrives on the 15th of the month; it's due on the 30th. When should you pay it to get the best results on your credit record?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A. The day it arrives in the mail.",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B. Wait until a few days before it's due, then pay it.",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "C. On time, but a few days before the credit card company sends payment data to the credit bureaus -- that way you’ll show zero balance.",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText:
              "D. There are no 'credit cards.' They are the invention of the Trilateral Commission bent on a New World Order.",
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    quizName: "Credit Card Debt Level 3",
    quizCategory: 0,
    quizLevel: 3,
    learningCategories: ["interest rates", "credit score"],
    questions: [
      {
        image: require("./images/credit-card-debt/dog.gif"),

        learningCategory: "interest rates",
        question:
          "Suppose you buy a $100 shirt on a credit card with 30% APR. If you don’t make any payments, how much do you owe after a year?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "Less than $120",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "About $130",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "Wait. Pay?",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/im-rich.gif"),
        statement: "",
        learningCategory: "credit score",
        question:
          " If inflation goes up, what’s going to happen to the interest rate of your credit card?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "It goes up.",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "It goes down.",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/poor.gif"),
        statement: "",
        learningCategory: "interest rates",
        question:
          "Suppose you have a $1000 balance on a credit card with 30% APR. If you don’t make any payments, how long will it take for that balance to double?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Less than 3 years",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "More than 3 years",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "Wait. Payment?",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/bear.gif"),
        statement: "",
        learningCategory: "interest rates",
        question:
          "Suppose you have $100 in a savings account earning 2% interest a year, and a credit card with a balance of $100 and 20% APR. What is the best thing to do?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Pay off the credit card! ",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "Don’t do a thing and get all of that interest!",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "IDK",
            isCorrect: false
          }
        ]
      }
    ]
  }
]);
