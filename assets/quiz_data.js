export default (quiz_data = [
  {
    quizName: "Credit Card Debt Level 1",
    quizCategory: 0,
    quizLevel: 1,
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
            answerText: "No way",
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
            answerText: "It’s my credit rating ",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "It’s basically interest ",
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
            answerText: "Only pay the minimum ",
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
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Got it",
            isCorrect: true
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/good-work.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next",
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
          "The Fair Credit Billing Act limits cardholder liabilities in the event of fraud. If charges are incurred after the card is reported stolen, the cardholder is not liable for ANY charges and $50 until the card is reported stolen.\n\nYour credit card has been stolen, and before you know it, the thief has charged $10,000. How much should you expect to have to pay?",
        question:
          "A. $0\nB. $50 until card reported stolen\nC. All Charges\nD. A & B",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "D",
            isCorrect: true
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/dwight.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "View Explanation",
            isCorrect: true
          }
        ]
      },
      {
        statement: "The Fair Credit Billing Act limits cardholder liabilities in the event of fraud. If charges are incurred after the card is reported stolen, the cardholder is not liable for ANY charges and $50 until the card is reported stolen.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next Question",
            isCorrect: true
          }
        ]
      },
      {
        //statement: "",
        statement: "In 2010, federal regulations changed, adding consumer protection that:",
        question:
          "A. Prohibits card issuers from charging a penalty of more than $25 for a customer's first late payment\nB. Forbids 'any time, any reason' rate hikes\nC. Requires card issuers to ask customers whether they want to over-limit protection\nD. All of the above",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "D",
            isCorrect: true
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/minion.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "View Explanation",
            isCorrect: true
          }
        ]
      },
      {
        statement: "In 2010, as part of the credit card reform law and associated regulations, issuers had to make multiple changes. Among them:\n\n- Credit card companies cannot charge more than $25 for routine, occasional late payments.\n-  Card issuers can't raise rates at any time for any reason.\n- Cardholders must 'opt in' to over-limit protection -- and the hefty fees that go with such programs. They previously had been imposed automatically.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next Question",
            isCorrect: true
          }
        ]
      },
      {
        statement: "A credit-card bill arrives on the 15th of the month; it's due on the 30th. When should you pay it to get the best results on your credit record?",
        question:
          "A. The day it arrives in the mail\nB. Wait until a few days before it's due, then pay it\nC. On time, but a few days before the credit card company sends payment data to the credit bureaus -- that way you’ll show zero balance\nD. There are no 'credit cards.' They are the invention of the Trilateral Commission bent on a New World Order.",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "C",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "D",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/kanye.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "View Explanation",
            isCorrect: true
          }
        ]
      },
      {
        statement: "Your credit card bill’s due date simply signifies that a billing cycle has ended and it’s time to pay up. The due date is not necessarily when your current balance will be reported to the credit bureaus. That’s why it might make sense to pay your bill well before it’s actually due. For example say your payment is due on the 20th of each month, but your issuer reports your balance on the 15th. If your issuer reported a $4,500 balance on the 15th, the credit bureaus would see a 45% utilization ratio — even if you paid it off in full just days later. Your credit score could end up getting dinged, even though your payment habits are solid.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Finish Quiz",
            isCorrect: true
          }
        ]
      }
    ]
  },
  {
    quizName: "Credit Card Debt Level 3",
    quizCategory: 0,
    quizLevel: 3,
    questions: [
      {
        question:
          "Suppose you buy a $100 shirt on a credit card with 30% APR. If you don’t make any payments, how much do you owe after a year?\n\nA. Less than $120\nB. About $130\nC. Wait. Pay?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false
          },
          {
            buttonOrder: "0",
            answerText: "B",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/dog.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next",
            isCorrect: true
          }
        ]
      },
      {
        statement: "",
        question:
          " If inflation goes up, what’s going to happen to the interest rate of your credit card?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "It goes up",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "It goes down",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/im-rich.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next",
            isCorrect: true
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/poor.gif"),
        statement: "",
        question:
          "Suppose you have a $1000 balance on a credit card with 30% APR. If you don’t make any payments, how long will it take for that balance to double?\n\nA. Less than 3 years\nB. More than 3 years\nC. Wait. Payment?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "A",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/poor.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next",
            isCorrect: true
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/bear.gif"),
        statement: "Suppose you have $100 in a savings account earning 2% interest a year, and a credit card with a balance of $100 and 20% APR. What is the best thing to do?",
        question:
          "A. Pay off the credit card!\nB. Don’t do a thing and get all of that interest!\nC. IDK",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "A",
            isCorrect: true
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false
          }
        ]
      },
      {
        image: require("./images/credit-card-debt/bear.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Next",
            isCorrect: true
          }
        ]
      },
    ]
  }
]);
