class Wordle {
    constructor(word, dictionnary) {
        // The word to be guessed
        this.word = word;

        // The word as it is currently displayed
        this.foundWord = word[0] + "_".repeat(word.length - 1);

        this.dictionnary = dictionnary;
        this.startTime = new Date();
        this.attempts = 0;
    }

    // Try to guess the word
    try(guess) {
        if (guess[0] !== this.foundWord[0]) {
            return {
                success: false,
                message: 'La première lettre du mot doit être "' + this.foundWord[0].toUpperCase() + '".',
            };
        }
        if (guess.length != this.word.length) {
            return { success: false, message: "Le mot doit contenir " + this.word.length + " lettres." };
        }
        if (!this.dictionnary.includes(guess)) {
            return { success: false, message: "Le mot doit être dans le dictionnaire." };
        }

        let hint = [];
        let count = [];

        // First loop: we only check for correct letters
        guess.split("").forEach((letter, index) => {
            // The letter is correct and at the correct position
            if (this.word[index] === letter) {
                this.foundWord = this.foundWord.split("");
                this.foundWord[index] = letter;
                this.foundWord = this.foundWord.join("");
                hint[index] = { letter: letter, include: true, position: true };
                count[letter] = (count[letter] || 0) + 1;

                document.querySelector("[data-key='" + letter + "']").classList.add("correct");
            }
        });

        // Second loop: we check for correct letters but at the wrong position
        guess.split("").forEach((letter, index) => {
            // The letter has not been checked yet
            if (!hint[index]) {
                // The letter is correct but not at the correct position
                if (this.word.includes(letter) && (count[letter] || 0) < this.word.split(letter).length - 1) {
                    hint[index] = { letter: letter, include: true, position: false };
                    count[letter] = (count[letter] || 0) + 1;

                    document.querySelector("[data-key='" + letter + "']").classList.add("include");
                }

                // The letter is not correct
                else if (this.word.includes(letter)) {
                    hint[index] = { letter: letter, include: false, position: false };
                }

                // The letter is not correct and never will be
                else {
                    hint[index] = { letter: letter, include: false, position: false };

                    document.querySelector("[data-key='" + letter + "']").classList.add("false");
                }
            }
        });
        this.attempts++;

        // The word is guessed
        if (this.foundWord === this.word) {
            return {
                success: true,
                guessed: true,
                foundWord: this.foundWord,
                time: (new Date() - this.startTime) / 1000,
                attempts: this.attempts,
                hint: hint,
            };
        }

        return {
            success: true,
            guessed: false,
            foundWord: this.foundWord,
            hint: hint,
            attempts: this.attempts,
            time: (new Date() - this.startTime) / 1000,
        };
    }
}

(() => {
    const guess = document.getElementById("guess");

    const word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    let wordle = new Wordle(word, dictionnary);
    const NbOfTries = 6;

    // Creating all placeholders
    for (let i = 0; i < NbOfTries - 1; i++) {
        let placeHolder = document.createElement("p");
        placeHolder.classList.add("guess");
        for (let j = 0; j < word.length; j++) {
            let span = document.createElement("span");
            span.classList.add("letter");
            placeHolder.appendChild(span);
        }
        document.getElementById("futureGuesses").appendChild(placeHolder);
    }

    let guessWord = word[0];
    let foundWord = word[0] + "_".repeat(word.length - 1);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            let result = wordle.try(guessWord);
            if (result.success) {
                if (result.guessed) {
                    win(result.foundWord, result.time, result.attempts);
                    document.getElementById("guess").remove();
                } else if (result.attempts >= NbOfTries) {
                    lose(word, result.time);
                    document.getElementById("guess").remove();
                } else {
                    foundWord = result.foundWord;
                    guessWord = foundWord;
                    refreshGuess();
                    document.getElementById("futureGuesses").firstChild?.remove();
                    guessWord = word[0];
                }
                let guess = document.createElement("p");
                guess.classList.add("guess");
                result.hint.forEach((elem) => {
                    let span = document.createElement("span");
                    span.innerText = elem.letter;
                    span.classList.add("letter");
                    if (elem.position) {
                        span.classList.add("correct");
                    } else if (elem.include) {
                        span.classList.add("include");
                    }
                    guess.appendChild(span);
                });
                document.getElementById("previousGuesses").appendChild(guess);
            } else {
                errorMessage(result.message);
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

    function errorMessage(message) {
        let error = document.createElement("p");
        error.innerText = message;
        error.classList.add("error");
        error.style.opacity = 0;
        document.getElementById("errors").appendChild(error);
        setTimeout(() => {
            error.style.opacity = 1;
            setTimeout(() => {
                error.style.opacity = 0;
                setTimeout(() => {
                    error.remove();
                }, 500);
            }, 2000);
        }, 1);
    }

    function win(foundWord, time, attempts) {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        document.getElementById("win").style.display = "block";
        document.getElementById(
            "winText"
        ).innerText = `Vous avez gagné !\n\nLe mot était "${foundWord.toUpperCase()}".\n\nVous l'avez trouvé en ${minutes} minute${
            minutes > 1 ? "s" : ""
        } et ${seconds} seconde${seconds > 1 ? "s" : ""}\navec ${attempts} essai${attempts > 1 ? "s" : ""} !`;
    }

    function lose(word, time) {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        document.getElementById("win").style.display = "block";
        document.getElementById(
            "winText"
        ).innerText = `Vous avez perdu...\n\nLe mot était "${word.toUpperCase()}".\n\nTemps : ${minutes} minute${
            minutes > 1 ? "s" : ""
        } et ${seconds} seconde${seconds > 1 ? "s" : ""}.`;
    }

    // Utilisation du
    document.querySelectorAll(".key").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            document.dispatchEvent(new KeyboardEvent("keydown", { key: e.target.getAttribute("data-key") }));
        });
    });
})();
