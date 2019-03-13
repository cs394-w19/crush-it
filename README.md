# CRUSH IT
Crush It is a financial literacy quiz, developed by students in the Winter 2019 section of EECS 394 in conjuction with client partners in the MPD program at Northwestern University. The target demographic is college-aged adults.

## Getting Started

Install [expo-cli](https://docs.expo.io/versions/latest/introduction/installation/) globally on your computer. Then follow the directions to download the Expo app on your phone (Android or iOS).

Clone the repository to your local machine.

Navigate to the project folder on your machine and run 
``` 
$ npm install 
$ npm update 
$ expo start
```
This will open a new tab in your browser with a QR code on the bottom left of the screen. If you are using an iPhone, open your camera app and scan the QR code that appears on the web page. If you are using an Android phone, open the Expo app and scan the QR code from the app. 

You should be up and running in development mode. Once you make changes in the code, the app will reload on save. If it does not automatically reload on Android, click the back button and select "Reload". On iOS, shake your phone and select "Reload".

## Adding Quiz Questions
The quiz questions are currently stored locally in a Javascript file located at ./assets/quiz_data.js. Each "question" represents a different page in the quiz. The order they are written in the file will be the order they appear in the quiz. A question can be comprised of many different components.
* header: This will be bold text on top of the page
* statement: This is regular weighted text that will appear above an image (if provided)
* question: This is regular weighted text that will appear below an image (if provided)
* image: Path to an image that will appear in the center of the page, needs to be in a `require()`. Also include the require path to the image in App.js inside the `Asset.loadAsync` array.
* answerChoices: An array of answer choices. There must be at least one item included in answerChoices. This ensures a button appears to move to the next question. 
    * buttonOrder: 0 = green on press; 1 = red on press; 2 = neutral
    * answerText: What words appear on the button
    * isCorrect: true/false. In place to keep track of correct answers in the future.
    * emoji: Find a list of emojis [here](https://unicodey.com/emoji-data/table.htm?fbclid=IwAR36sLDOFtam-svvNDv9cFnG9nPhLbKpgL_uLC45CTOmZ10MWVoqnyJaVwE). Include the "Short Name" in quotes, without the colons (:) on either side. This will display the chosen emoji to the left of the button text.



## Warnings and Known Issues

* There currently is no persistence in the app, meaning that a no data is saved after a given session closes. We suggest Firebase Realtime Database as a reasonably easy solution to use.