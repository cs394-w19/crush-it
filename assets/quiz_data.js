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
            isCorrect: true,
            emoji: ""
          }
        ]
      },
      {
        header: "Level 1",
        statement:
          "You’re applying for a credit card. \n\nYou look up some stuff online and read that credit card interest rates can be over 29%. ",
        learningCategory: "credit score",
        question: "Do you believe it?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Yes",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "No way",
            isCorrect: false,
            emoji: ""
          }
        ]
      },
      {
        statement:
          "Crazy, right?!\n\nInterest is the fee you pay to borrow money.\n\nIt will be higher or lower depending on your credit history and on how the economy is doing.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Good to know!",
            isCorrect: true,
            emoji: "+1"
          },
        ]
      },
      { 
        statement:
          "Now... what do you think \"APR\" is?",
        question:
          "A.  Absolute Perfect Rate\n\nB.  My Credit Rating\n\nC.  Basically Interest\n\nD.  Average Price Range",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "C",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "D",
            isCorrect: false,
            emoji: ""
          }
        ]
      },
      {
        header: "APR = Annual Percentage Rate\n",
        statement:
          "It's basically interest!\n\nAPR tells you how much interest you’ll pay over 1 year if you have an outstanding balance.",
        question: "So which APR would you rather have?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "0%",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "30%",
            isCorrect: false,
            emoji: ""
          }
        ]
      },
      {
        statement:
          "Remember...",
        image: require("./images/credit-card-debt/apr.png"),  
        question: "\n\nYou want to minimize fees, so 0% is the best APR.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "I get it now!",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        header:
          "WATCH OUT!",
        image: require("./images/credit-card-debt/watchout.png"),  
        question: "Most credit cards offer 0% Introductory APR as an incentive.\n\nPay attention to what APR is after the intro period. It could jump to that 30%.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Whew! Thanks!",
            isCorrect: true,
            emoji: "sweat_smile"
          },
        ]
      },
      {
        statement:
          "How can you get the lowest APR?",
        question: "A.  Make minimum payment only\n\nB.  ↑ credit score\n\nC.  Open multiple credit cards\n\nD.  I can’t affect APR",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "B",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "D",
            isCorrect: false,
            emoji: ""
          }
        ]
      },
      {
        header:
          "↑ credit score = ↓ APR.\n",
        statement:
          "Think of credit like trust.\n\nYou build trust, and credit, when you show you’re reliable.\n\nThis is one reason to pay your bills on time and in full!",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Makes sense",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "Time to be honest with yourself…\n\nDo you pay your bills on time?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Duh!",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "Not really",
            isCorrect: true,
            emoji: ""
          }
        ] 
      },
      {
        statement:
          "Honesty is a good start!\n\nIf you pay bills in full and on time, you’re on the right track to building solid credit.",
        image: require("./images/credit-card-debt/good-work.gif"),  
        answerChoices: [  
          {
            buttonOrder: "2",
            answerText: "Got it!",
            isCorrect: true,
            emoji: ""
          }
        ]
      },
    ]
  },
  {
    quizName: "Credit Card Debt Level 2",
    quizCategory: 0,
    quizLevel: 2,
    learningCategories: ["interest rates", "credit score"],
    questions: [
      {
        header: "Level 2",
        statement:
          "You just bought a $100 shirt for your next adventure.\n\nRealizing you’re low on cash this month, you charged it to your credit card.",
        image: require("./images/credit-card-debt/shrug.png"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "I'll pay for it later",
            isCorrect: true,
            emoji: ""
          }
        ]
      },
      {
        statement:
          "Your credit card has a 20% APR and requires a minimum monthly payment of $25.",
        question: "If you only pay the minimum $25 each month, how much did this shirt actually cost?",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "$100",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: ">$100",
            isCorrect: true,
            emoji: ""
          }
        ]
      },
      {
        //statement: "",
        statement:
          "If you carry a balance, you may pay interest on that balance, making $100 closer to $105.\n\nImagine if you had a $1,000 expense on that same card and only made the $25 payment…",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Oh boy...",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "How long would it take to pay off $1,000 with 30% APR?",
        question:
          "A.  < 12 months\n\nB.  40 months\n\nC.  > 80 months",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "C",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "Not only would it take 7 years to pay off, but you would pay more than $1000 in interest!",
        image: require("./images/credit-card-debt/impoor.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "OMG!",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "To recover from this shock, you went on a Netflix binge…\n\nSuddenly, you remembered you forgot to pay your credit card bill.\n\nCan you prevent this oversight from hurting your credit score?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Yes",
            isCorrect: true,
            emoji:""
          },
          {
            buttonOrder: "1",
            answerText: "No way",
            isCorrect: false,
            emoji:""
          },
        ]
      },
      {
        statement:
          "Yes!\n\nIf you make up the payment before your next due date, your credit score should be safe.\n\nYou may still be charged a late fee though.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Got it!",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        header:
          "PSST...",
        image: require("./images/credit-card-debt/secret.png"),
        question: "\n\nIf it’s your first offense, try calling your credit card company. They may waive the fee if you ask nicely.",  
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Got it!",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "All that talk about missing a payment made you check your bank account.\n\nYou have $100 in savings earning 2% interest a year.",
        image: require("./images/credit-card-debt/woman-tipping-hand.png"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Woohoo!",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "Your credit card (CC) has a balance of $100 and 17% APR.\n\nWhat should you do?",
        question:
          "A.  Pay off the card\n\nB.  Keep the $ in savings\n\nC.  IDK",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "A",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "Start by putting the $100 towards your highest interest rate (APR) credit card.",
        image: require("./images/credit-card-debt/interest.png"),
        question:
          "\n\nKeep going until you have zero CC debt.",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "I'll give it a shot",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
    ]
  },
  {
    quizName: "Credit Card Debt Level 3",
    quizCategory: 0,
    quizLevel: 3,
    questions: [
      {
        header: "Level 3",
        statement:
          "Now let’s say your credit card has been stolen…\n\nThe thief charged $10,000!",
        image: require("./images/credit-card-debt/shit.png"),  
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Sh*t... Now what?",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "How much are you liable for?",
        question:
          "A.  Nothing!\n\nB.  $50 until card reported stolen\n\nC.  The full $10,000\n\nD.  A & B",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "B",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "D",
            isCorrect: true,
            emoji: ""
          }
         ]
      },
      {
        statement: "If the thief has already started holiday shopping on your dime, you may be liable for up to $50.\n\nEasily report the theft to your CC company via phone or online.\n\nThen you’re off the hook!",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Whew!",
            isCorrect: true,
            emoji:""
          },
        ]
      },
      {
        statement: "You’re also protected from being taken advantage of.",
        question:
          "Can a credit card issuer, such as Chase or Discover, change your interest rate at any time without notice?",
        answerChoices: [
          {
            buttonOrder: "0",
            answerText: "Yes",
            isCorrect: true,
            emoji:""
          },
          {
            buttonOrder: "1",
            answerText: "No",
            isCorrect: false,
            emoji:""
          },
        ]
      },
      {
        statement:
          "Most of the time, issuers don’t need to provide notice.",
        question:
          "Which one situation does require notice?\n\nA.  Paid ≥ 60 days late\nB.  Fixed APR\nC.  Promotion expired\nD.  Variable interest",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "B",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "D",
            isCorrect: false,
            emoji: ""
          }
         ]
      },
      {
        statement:
          "Because fixed APRs are set-in-stone, issuers must provide 45-day notice prior to any changes.\n\nThe Captain is looking out for you.",
        image: require("./images/credit-card-debt/cap.png"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "Thanks Cap!",
            isCorrect: true,
            emoji:""
          }
        ]
      },
      {
        header: "PRO TIP",
        statement:
          "Reading the fine print of a contract can be a total snooze.\n\nHowever, it can help you avoid late fees and save you money in the long run.\n\nWho doesn’t love money?",
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "OK, I'll look",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "Speaking of fine print…\n\nIf you’re an authorized user on your parents’ account, who is liable if you can’t pay your charges?",
        question:
          "A.  You are\n\nB.  Your parents\n\nC.  No one if you're under 21",
        answerChoices: [
          {
            buttonOrder: "1",
            answerText: "A",
            isCorrect: false,
            emoji: ""
          },
          {
            buttonOrder: "0",
            answerText: "B",
            isCorrect: true,
            emoji: ""
          },
          {
            buttonOrder: "1",
            answerText: "C",
            isCorrect: false,
            emoji: ""
          },
        ]
      },
      {
        statement:
          "The risk is all theirs.\n\nKeep in mind… they likely know where you live…",
        image: require("./images/credit-card-debt/im-watching-you.gif"),
        answerChoices: [
          {
            buttonOrder: "2",
            answerText: "I'll pay! I swear!",
            isCorrect: true,
            emoji: ""
          },
        ]
      },
    ]
  }
]);
