
function moveElement() {
    // Get the element
    var element = document.getElementById("moveMe");

    // Calculate new position (for example, move it right by 50px and down by 50px)
    var newPositionX = Math.floor(Math.random()*270)-200;
    var newPositionY = Math.floor(Math.random()*680)-500;

    // Update the element's position
    element.style.transform = "translate(" + newPositionX + "px, " + newPositionY + "px)";
}

function yesButton(){
    var lovegif = document.getElementById("lovegif");
    var innocentdog = document.getElementById("innocentdog");
    var text = document.getElementsByTagName("p")[0];
    var noButton = document.getElementById("moveMe");

    lovegif.style.display = "block";
    innocentdog.style.display = "none";
    text.innerHTML = "I knew it &#129402; and I love you sooooo much mooooree &#128538;"
    text.style.color = "pink";
    noButton.style.display = "none";

    var container = document.getElementsByClassName("container")[0];
    var heartWrapper = document.createElement("div");
    heartWrapper.setAttribute('id', 'heartWrapper');
    var heart = document.createElement("div");
    heart.setAttribute('id', 'heart');
    
    heartWrapper.appendChild(heart);
    container.appendChild(heartWrapper);

    setTimeout(() => {
        heartWrapper.remove();
    }, 3000);
}