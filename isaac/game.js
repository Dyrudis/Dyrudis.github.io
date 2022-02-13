let life = 12;
let maxlife = life % 2 ? life + 1 : life;
let score = 0;

function showLife(life) {
    if (life > maxlife) {
        life = maxlife;
    }
    if (life < 0) {
        life = 0;
    }
    document.getElementById("life").innerText = "";
    for (let i = 0; i < Math.floor(life / 2); i++) {
        document.getElementById("life").innerHTML += "<img src='resources/heart1.png' alt='heart'/>";
    }
    if (life % 2 == 1) {
        document.getElementById("life").innerHTML += "<img src='resources/heart2.png' alt='heart'/>";
        for (i = Math.floor(life / 2) + 1; i < Math.floor(maxlife / 2); i++) {
            document.getElementById("life").innerHTML += "<img src='resources/heart3.png' alt='heart'/>";
        }
    } else {
        for (i = Math.floor(life / 2) + 1; i <= Math.floor(maxlife / 2); i++) {
            document.getElementById("life").innerHTML += "<img src='resources/heart3.png' alt='heart'/>";
        }
    }
}

function showScore(score) {
    document.getElementById("score").innerText = score;
}

function play() {
    let audio = new Audio("resources/next.wav");
    audio.volume = 0.15;
    audio.play();
    document.getElementById("next").style.display = "none";
    // Select four random items
    let selectedItems = [];
    let itemsCopy = items.slice();
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * itemsCopy.length);
        if (
            selectedItems.some((item) => {
                item.desc == itemsCopy[random].desc;
            }) ||
            itemsCopy[random].name == ""
        ) {
            i--;
        } else {
            selectedItems.push(itemsCopy[random]);
            itemsCopy.splice(random, 1);
        }
    }

    let goodAnswer = Math.floor(Math.random() * 4);
    document.getElementById("items").innerHTML = "";
    selectedItems.forEach((item, index) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = item.name;
        div.addEventListener("click", click);

        function click() {
            if (index == goodAnswer) {
                div.classList.add("good");
                document.getElementById("next").style.display = "block";
                let audio = new Audio("resources/thumbs up.wav");
                audio.volume = 0.07;
                audio.play();
                score+= 100;
                showScore(score);
            } else {
                div.classList.add("bad");
                let audio = new Audio("resources/hurt" + (Math.round(Math.random() * 2) + 1) + ".wav");
                audio.volume = 0.1;
                audio.play();
                showLife(--life);
                score -= 10;
                showScore(score);
            }
            div.style.cursor = "default";
            div.removeEventListener("click", click);
        }

        let img = document.createElement("img");
        let src = "resources/items/" + item.id.padStart(3, "0") + ".png";
        fetch(src).then((res) => {
            if (res.ok) {
                img.src = src;
            } else {
                img.src = "resources/items/questionmark.png";
            }
        });

        div.appendChild(img);
        div.appendChild(p);

        document.getElementById("items").appendChild(div);

        if (index == goodAnswer) {
            let desc = item.desc.replaceAll("#", "</br>");
            desc = desc.replaceAll("↑", "<img src='resources/up.png'></img>");
            desc = desc.replaceAll("↓", "<img src='resources/down.png'></img>");
            desc = desc.replaceAll("!!!", "<img src='resources/warning.png'></img>");
            document.getElementById("description").innerHTML = desc;
        }
    });
}

document.getElementById("next").addEventListener("click", play);
showLife(life);
showScore(score);
play();
