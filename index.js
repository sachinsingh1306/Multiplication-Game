 let a = Math.floor(Math.random() * 10) + 1;
      let b = Math.floor(Math.random() * 10) + 1;
      let marks = 0;

      const question = document.getElementById("question");
      const score = document.getElementsByTagName("p")[0];
      const input = document.getElementById("answer");

      function setQuestion() {
        question.innerHTML = `<h1>What is ${a} multiply by ${b} ?</h1>`;
        input.value = "";
      }

      setQuestion();
      score.innerText = `Score : ${marks}`;

      function checkAnswer() {
        const answer = Number(input.value);
        const correctAnswer = a * b;

        if (answer === correctAnswer) {
          marks += 1;
        } else {
          marks -= 1;
        }

        score.innerText = `Score : ${marks}`;

        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;

        setQuestion();
      }