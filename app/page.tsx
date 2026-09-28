<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Music Quest</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
      color: #252238;
      background:
        radial-gradient(circle at top left, #ddd5f5 0, transparent 32%),
        radial-gradient(circle at bottom right, #f6d8c7 0, transparent 30%),
        #f4f1ea;
    }

    button {
      font: inherit;
    }

    .screen {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .card {
      width: min(680px, 100%);
      background: rgba(255,255,255,0.94);
      border-radius: 28px;
      padding: 45px;
      box-shadow: 0 20px 60px rgba(40,35,50,0.12);
      text-align: center;
    }

    .music-icon {
      font-size: 64px;
      margin-bottom: 10px;
    }

    .eyebrow {
      margin: 0 0 10px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      opacity: 0.5;
    }

    h1 {
      margin: 0;
      font-size: clamp(32px, 7vw, 54px);
      line-height: 1.05;
    }

    .description {
      max-width: 520px;
      margin: 22px auto;
      font-size: 17px;
      line-height: 1.7;
      opacity: 0.7;
    }

    .info-row {
      display: flex;
      justify-content: center;
      gap: 45px;
      margin: 35px 0;
    }

    .info-row div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .info-row strong {
      font-size: 28px;
    }

    .info-row span {
      font-size: 12px;
      opacity: 0.55;
    }

    .primary-button {
      border: 0;
      border-radius: 14px;
      padding: 17px 28px;
      background: #28233d;
      color: white;
      font-weight: 800;
      cursor: pointer;
      transition: 0.15s;
    }

    .primary-button:hover {
      transform: translateY(-2px);
    }

    .game {
      min-height: 100vh;
      padding: 30px 18px;
    }

    .game-container {
      width: min(900px, 100%);
      margin: auto;
    }

    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    .game-header h2 {
      margin: 0;
      font-size: 30px;
    }

    .score-badge {
      background: white;
      border-radius: 100px;
      padding: 12px 18px;
      font-weight: 800;
      box-shadow: 0 8px 25px rgba(40,35,50,0.08);
    }

    .progress-text {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 700;
      opacity: 0.6;
      margin-bottom: 8px;
    }

    .progress-bar {
      height: 9px;
      border-radius: 20px;
      background: rgba(40,35,61,0.1);
      overflow: hidden;
      margin-bottom: 22px;
    }

    .progress-fill {
      height: 100%;
      width: 0;
      background: #28233d;
      transition: width 0.3s ease;
    }

    .question-card {
      background: white;
      border-radius: 28px;
      padding: clamp(25px, 5vw, 55px);
      box-shadow: 0 20px 60px rgba(40,35,50,0.1);
    }

    .question-number {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.15em;
      opacity: 0.45;
    }

    .question-card h1 {
      font-size: clamp(28px, 5vw, 46px);
      line-height: 1.15;
      margin: 12px 0 35px;
    }

    .options {
      display: grid;
      gap: 13px;
    }

    .option {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 17px;
      border: 2px solid #e8e5df;
      border-radius: 15px;
      background: white;
      text-align: left;
      cursor: pointer;
      transition: 0.15s;
    }

    .option:hover {
      border-color: #28233d;
      transform: translateX(3px);
    }

    .option-letter {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      border-radius: 10px;
      background: #f0edf6;
      font-weight: 800;
    }

    .option.correct {
      border-color: #4d8a68;
      background: #edf8f1;
    }

    .option.correct .option-letter {
      background: #4d8a68;
      color: white;
    }

    .option.wrong {
      border-color: #b85c5c;
      background: #fff0f0;
    }

    .option.wrong .option-letter {
      background: #b85c5c;
      color: white;
    }

    .result-symbol {
      margin-left: auto;
      font-size: 22px;
      font-weight: 900;
    }

    .feedback {
      margin-top: 20px;
      padding: 18px;
      border-radius: 15px;
      line-height: 1.5;
    }

    .feedback-good {
      background: #edf8f1;
    }

    .feedback-bad {
      background: #fff0f0;
    }

    .feedback p {
      margin: 5px 0 0;
    }

    .next-area {
      min-height: 85px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .score {
      margin: 30px 0;
      font-size: 75px;
      font-weight: 900;
    }

    .score small {
      font-size: 25px;
      opacity: 0.45;
    }

    .result-emoji {
      font-size: 70px;
      margin-bottom: 15px;
    }

    @media (max-width: 600px) {
      .card {
        padding: 30px 22px;
      }

      .info-row {
        gap: 22px;
      }

      .game {
        padding: 20px 12px;
      }

      .question-card {
        padding: 25px 18px;
      }

      .game-header h2 {
        font-size: 24px;
      }

      .option {
        padding: 14px;
      }

      .next-area .primary-button {
        width: 100%;
      }
    }
  </style>
</head>

<body>

  <div id="app"></div>

  <script>

    const questions = [
      {
        question: "Which period came first?",
        options: ["Classical", "Baroque", "Romantic", "Modern"],
        answer: 1,
        explanation: "The Baroque period came before the Classical period."
      },
      {
        question: "Which composer is strongly associated with the Baroque period?",
        options: ["J.S. Bach", "Mozart", "Beethoven", "Debussy"],
        answer: 0,
        explanation: "J.S. Bach was one of the major composers of the Baroque period."
      },
      {
        question: "Which composer is strongly associated with the Classical period?",
        options: ["Vivaldi", "J.S. Bach", "Mozart", "Handel"],
        answer: 2,
        explanation: "Mozart is one of the best-known Classical-period composers."
      },
      {
        question: "Which word best describes the tempo marking Allegro?",
        options: ["Very slow", "Slow", "Fast", "Gradually slower"],
        answer: 2,
        explanation: "Allegro generally means fast or lively."
      },
      {
        question: "Which instrument family does the flute belong to?",
        options: ["Strings", "Woodwind", "Brass", "Percussion"],
        answer: 1,
        explanation: "The flute belongs to the woodwind family."
      },
      {
        question: "Which instrument is a string instrument?",
        options: ["Violin", "Trumpet", "Flute", "Timpani"],
        answer: 0,
        explanation: "The violin belongs to the string family."
      },
      {
        question: "Which period came after the Baroque period?",
        options: ["Medieval", "Classical", "Renaissance", "Romantic"],
        answer: 1,
        explanation: "The Classical period followed the Baroque period."
      },
      {
        question: "Which instrument became important during the Classical period?",
        options: [
          "Harpsichord only",
          "Piano",
          "Electric guitar",
          "Synthesizer"
        ],
        answer: 1,
        explanation: "The piano became increasingly important during the Classical period."
      },
      {
        question: "What does piano (p) mean in dynamics?",
        options: ["Loud", "Very loud", "Soft", "Gradually louder"],
        answer: 2,
        explanation: "Piano means soft or quiet."
      },
      {
        question: "Which composer belongs to the Classical period?",
        options: ["Mozart", "Bach", "Vivaldi", "Handel"],
        answer: 0,
        explanation: "Mozart is a major composer of the Classical period."
      }
    ];

    let current = 0;
    let score = 0;
    let selected = null;

    const app = document.getElementById("app");

    function showStart() {

      app.innerHTML = `
        <main class="screen">

          <div class="card">

            <div class="music-icon">🎼</div>

            <p class="eyebrow">MUSIC QUEST 01</p>

            <h1>Music History Challenge</h1>

            <p class="description">
              Test your knowledge of the Baroque and Classical periods,
              composers, instruments and musical terms.
            </p>

            <div class="info-row">

              <div>
                <strong>10</strong>
                <span>Questions</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Point each</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Try again</span>
              </div>

            </div>

            <button class="primary-button" onclick="startGame()">
              START QUEST →
            </button>

          </div>

        </main>
      `;
    }


    function startGame() {

      current = 0;
      score = 0;
      selected = null;

      showQuestion();
    }


    function showQuestion() {

      const q = questions[current];

      const progress =
        ((current + 1) / questions.length) * 100;

      app.innerHTML = `

        <main class="game">

          <div class="game-container">

            <header class="game-header">

              <div>
                <p class="eyebrow">MUSIC QUEST 01</p>
                <h2>Music History</h2>
              </div>

              <div class="score-badge">
                ⭐ ${score}
              </div>

            </header>


            <div class="progress-text">

              <span>
                Question ${current + 1} / ${questions.length}
              </span>

              <span>
                ${Math.round(progress)}%
              </span>

            </div>


            <div class="progress-bar">

              <div
                class="progress-fill"
                style="width:${progress}%">
              </div>

            </div>


            <section class="question-card">

              <p class="question-number">
                QUESTION ${String(current + 1).padStart(2, "0")}
              </p>

              <h1>
                ${q.question}
              </h1>

              <div class="options">

                ${q.options.map((option, index) => `

                  <button
                    class="option"
                    onclick="chooseAnswer(${index})">

                    <span class="option-letter">
                      ${String.fromCharCode(65 + index)}
                    </span>

                    <span>
                      ${option}
                    </span>

                  </button>

                `).join("")}

              </div>

              <div id="feedback"></div>

            </section>


            <div class="next-area" id="next-area"></div>

          </div>

        </main>
      `;
    }


    function chooseAnswer(index) {

      if (selected !== null) {
        return;
      }

      selected = index;

      const q = questions[current];

      const buttons =
        document.querySelectorAll(".option");

      buttons.forEach((button, i) => {

        button.disabled = true;

        if (i === q.answer) {

          button.classList.add("correct");

          button.innerHTML +=
            '<span class="result-symbol">✓</span>';

        }

        if (i === index && i !== q.answer) {

          button.classList.add("wrong");

          button.innerHTML +=
            '<span class="result-symbol">✗</span>';

        }

      });


      const correct = index === q.answer;

      if (correct) {
        score++;
      }


      const feedback =
        document.getElementById("feedback");

      feedback.innerHTML = `

        <div class="feedback ${
          correct
            ? "feedback-good"
            : "feedback-bad"
        }">

          <strong>
            ${correct ? "Correct! 🎉" : "Not quite!"}
          </strong>

          <p>
            ${q.explanation}
          </p>

        </div>

      `;


      const nextArea =
        document.getElementById("next-area");

      nextArea.innerHTML = `

        <button
          class="primary-button"
          onclick="nextQuestion()">

          ${
            current === questions.length - 1
              ? "SEE MY RESULT →"
              : "NEXT QUESTION →"
          }

        </button>

      `;
    }


    function nextQuestion() {

      if (current === questions.length - 1) {

        showResult();

        return;
      }

      current++;

      selected = null;

      showQuestion();
    }


    function showResult() {

      let emoji;
      let title;
      let message;

      if (score >= 9) {

        emoji = "🏆";
        title = "Music Master!";
        message =
          "Excellent work. You have a strong understanding of the topics!";

      } else if (score >= 7) {

        emoji = "🎵";
        title = "Great Job!";
        message =
          "You have a good understanding of the music concepts.";

      } else if (score >= 5) {

        emoji = "🎹";
        title = "Keep Exploring!";
        message =
          "You have a good starting point. Keep listening and learning!";

      } else {

        emoji = "🎶";
        title = "Let's Try Again!";
        message =
          "Review the topics and give it another try!";

      }


      app.innerHTML = `

        <main class="screen">

          <div class="card">

            <div class="result-emoji">
              ${emoji}
            </div>

            <p class="eyebrow">
              QUEST COMPLETE
            </p>

            <h1>
              ${title}
            </h1>

            <div class="score">
              ${score}
              <small>/ 10</small>
            </div>

            <p class="description">
              ${message}
            </p>

            <button
              class="primary-button"
              onclick="startGame()">

              PLAY AGAIN ↻

            </button>

          </div>

        </main>

      `;
    }


    showStart();

  </script>

</body>
</html>
