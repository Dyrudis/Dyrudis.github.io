(() => {
    const guess = document.getElementById("guess");
    const wordsDiv = document.getElementById("words");

    const word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    function play(guessWord) {
        const wordP = document.createElement("p");
        wordP.classList.add("word");
        let index = 0;
        let count = {};
        guessWord.split("").forEach((letter) => {
            const letterElement = document.createElement("span");
            letterElement.innerText = letter;
            letterElement.classList.add("letter");
            if (word.includes(letter)) {
                if (word[index] === guessWord[index]) {
                    letterElement.classList.add("correct");

                    // Replacing inside foundWord
                    foundWord = foundWord.split("");
                    foundWord[index] = word[index];
                    foundWord = foundWord.join("");
                    if (count[letter] === undefined) {
                        count[letter] = 1;
                    } else {
                        count[letter]++;
                    }
                } else if (/* count[letter] <= word.match(/letter/g).length */ true) {
                    letterElement.classList.add("include");
                    if (count[letter] === undefined) {
                        count[letter] = 1;
                    } else {
                        count[letter]++;
                    }
                }
            }
            wordP.appendChild(letterElement);
            index++;
        });
        wordsDiv.appendChild(wordP);
    }

    let guessWord = word[0];
    let foundWord = word[0] + "_".repeat(word.length - 1);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            if (guessWord.length === word.length && words.includes(guessWord)) {
                play(guessWord);
                if (guessWord === word) {
                    alert("You win!");
                } else {
                    guessWord = foundWord;
                    refreshGuess();
                    guessWord = word[0];
                }
            }
        } else if (e.key === "Backspace") {
            guessWord = guessWord.slice(0, -1);
            if (guessWord.length <= 1) {
                guessWord = foundWord;
                refreshGuess();
                guessWord = word[0];
            } else {
                refreshGuess();
            }
        } else if (e.key >= "a" && e.key <= "z" && guessWord.length < word.length) {
            guessWord += e.key;
            refreshGuess();
        }
    });

    refreshGuess();
    function refreshGuess() {
        guess.innerHTML = "";
        guessWord.split("").forEach((letter) => {
            const letterElement = document.createElement("span");
            letterElement.innerText = letter;
            letterElement.classList.add("letter");
            guess.appendChild(letterElement);
        });
        for (let i = 0; i < word.length - guessWord.length; i++) {
            const letterElement = document.createElement("span");
            letterElement.innerText = "_";
            letterElement.classList.add("letter");
            guess.appendChild(letterElement);
        }
    }
})();
