//Main function that the website uses
function playMusic() {
    document.getElementById("playButton").style.display = "none";
    let ymca = new Audio("audio/ymca.mp3");
    ymca.play();
    setInterval(createDuane, 5000);
}

//Function that randomly creates new "duane" instances
function createDuane() {
    //Creating the image
    let duane = document.createElement("img");
    duane.src = "images/duane.gif";
    duane.classList.add("duane");

    //Generating the random size
    let randomSize = Math.floor(Math.random()*11 + 10);
    duane.style.width = `calc(${randomSize}vw + ${randomSize}vh)`;

    //Adding the image to the site
    document.body.appendChild(duane);

    //Generating the random position
    let randomPosition = Math.floor(Math.random() * ((screen.width - duane.clientWidth - 100)) + 100);
    duane.style.left = randomPosition+"px";
    randomPosition = Math.floor(Math.random() * (screen.height - duane.clientHeight - 100));
    duane.style.top = randomPosition+"px";

    //Makes duane slowly grow
    duane.style.transform = "scale(500%)";
}
document.getElementById("playButton").addEventListener("mouseup", playMusic);