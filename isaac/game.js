function play() {
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
        let p = document.createElement("p");
        p.innerText = item.name;
        p.addEventListener("click", () => {
            if (index == goodAnswer) {
                p.style.backgroundColor = "#2bad24";
                document.getElementById("next").style.display = "block";
            } else {
                p.style.backgroundColor = "#eb4034";
            }
        });
        document.getElementById("items").appendChild(p);
        if (index == goodAnswer) {
            document.getElementById("description").innerText = item.desc.replaceAll("#", "\n");
        }
    });
}

document.getElementById("next").addEventListener("click", play);
play();
