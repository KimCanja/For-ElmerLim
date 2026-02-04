const message = `I just want you to know that I'm so happy that I've met you.\nWe both came out from a toxic relationship..\n\nWe just met on a random day, you replied to my story and then we chatted for days, and days turns to wweeks, and finally it turns to months. Being with you feels like I'm with myself, I can easily shows my childish side, my OA side, everything.\n\nI just want you to stay by my side forever.(I know it sounds a bit more cringe). \n\nI hope you reach all of your dreams, I'm always here for youu. I love you always <3`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
