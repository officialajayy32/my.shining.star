
/* =================================
   PUCHKI BIRTHDAY EXPERIENCE
   JAVASCRIPT PART 1
   AUTOMATIC CURTAIN OPENING
================================= */

const introScene = document.getElementById("intro");

const leftCurtain = document.querySelector(".curtain-left");

const rightCurtain = document.querySelector(".curtain-right");

const continueButton = document.getElementById("continue-button");


// Start the theatre opening

function startCurtainOpening() {

  if (!introScene || !leftCurtain || !rightCurtain) {
    console.error("Curtain elements not found!");
    return;
  }

  // Small pause before the show begins

  setTimeout(() => {

    introScene.classList.add("opening");

    leftCurtain.classList.add("open");

    rightCurtain.classList.add("open");

  }, 1200);


  // Reveal the stage after curtains open

  setTimeout(() => {

    introScene.classList.add("revealed");

  }, 6500);


  // Show continue button after the opening

  setTimeout(() => {

  if (continueButton) {
  continueButton.hidden = false;
  continueButton.disabled = false;
  }

  }, 7500);

}


// Automatically start when page loads

startCurtainOpening();

/* =================================
   PART 2: SCENE NAVIGATION
================================= */

(() => {

  const scenes = document.querySelectorAll(".scene");

  const nextButton = document.getElementById(
    "continue-button"
  );

  let currentScene = 0;

  function showScene(index) {

    if (index < 0 || index >= scenes.length) {
      return;
    }

    scenes.forEach((scene, i) => {

      scene.classList.remove("active");
      scene.classList.remove("leaving");

      if (i === currentScene && i !== index) {
        scene.classList.add("leaving");
      }

    });

    scenes[index].classList.add("active");

    currentScene = index;

    // Hide continue button on final scene

    if (nextButton) {
      nextButton.hidden = index === scenes.length - 1;
    }

  }

  // Continue to next scene

  if (nextButton) {

    nextButton.addEventListener("click", () => {

      if (currentScene < scenes.length - 1) {

        showScene(currentScene + 1);

      }

    });

  }

})();



/* =================================
   PART 3: LIVE BIRTHDAY COUNTDOWN
================================= */

(() => {

  // Use the existing golden countdown cards
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    console.error("Countdown elements not found!");
    return;
  }

  // Puchki's Birthday: 24 November 2026
  const birthday = new Date(2026, 10, 24, 0, 0, 0);

  function updateCountdown() {

    const now = new Date();

    let difference = birthday.getTime() - now.getTime();

    if (difference < 0) {
      difference = 0;
    }

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    daysElement.textContent =
      String(days).padStart(2, "0");

    hoursElement.textContent =
      String(hours).padStart(2, "0");

    minutesElement.textContent =
      String(minutes).padStart(2, "0");

    secondsElement.textContent =
      String(seconds).padStart(2, "0");

  }

  updateCountdown();

  setInterval(updateCountdown, 1000);

})();


/* =================================
   PART 4: STARS & FLOATING PARTICLES
================================= */

(() => {

  const starContainer = document.getElementById("stars");
  const particleContainer = document.getElementById("particles");

  if (!starContainer || !particleContainer) return;

  // Create glowing stars

  for (let i = 0; i < 65; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    starContainer.appendChild(star);

  }

  // Create floating golden particles

  for (let i = 0; i < 22; i++) {

    const particle = document.createElement("div");

    particle.className = "floating-particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
      (8 + Math.random() * 10) + "s";

    particle.style.animationDelay =
      (Math.random() * 10) + "s";

    particleContainer.appendChild(particle);

  }

})();

/* =================================
   PART 5: FLOWER MESSAGE INTERACTION
================================= */

(() => {

  const flowers = document.querySelectorAll(".flower");
  const messageBox = document.getElementById("flower-message");

  if (!flowers.length || !messageBox) return;

  flowers.forEach((flower) => {

    flower.addEventListener("click", () => {

      const message = flower.dataset.message;

      if (!message) return;

      messageBox.style.opacity = "0";

      setTimeout(() => {

        messageBox.textContent = message;

        messageBox.style.opacity = "1";

      }, 250);

    });

  });

})();

/* =================================
   PART 6: SPECIAL REASONS
================================= */

(() => {

  const cards = document.querySelectorAll(".reason-card");
  const messageBox = document.getElementById("reason-message");

  if (!cards.length || !messageBox) return;

  cards.forEach((card) => {

    card.addEventListener("click", () => {

      const message = card.dataset.message;

      if (!message) return;

      messageBox.style.opacity = "0";

      setTimeout(() => {

        messageBox.textContent = message;
        messageBox.style.opacity = "1";

      }, 250);

    });

  });

})();

/* =================================
   PART 7: SECRET NOTES
================================= */

(() => {

  const notes = document.querySelectorAll(".note-card");
  const messageBox = document.getElementById("note-message");

  if (!notes.length || !messageBox) return;

  notes.forEach((note) => {

    note.addEventListener("click", () => {

      const message = note.dataset.message;

      if (!message) return;

      messageBox.style.opacity = "0";

      setTimeout(() => {

        messageBox.textContent = message;
        messageBox.style.opacity = "1";

      }, 250);

    });

  });

})();


/* =================================
   PART 8: OPENABLE LETTER
================================= */

(() => {

  const envelope = document.getElementById("envelope");
  const openButton = document.getElementById("open-letter");
  const letterContent = document.getElementById("letter-content");
  const typedLetter = document.getElementById("typed-letter");

  if (!envelope || !openButton || !letterContent || !typedLetter) return;

  const letter = "Some people make ordinary moments feel special. And somehow, you are one of those people. May your life always be filled with happiness, beautiful dreams and countless reasons to smile. Happy Birthday, Puchki! 💗";

  let opened = false;

  openButton.addEventListener("click", () => {

    if (opened) return;
    opened = true;

    envelope.classList.add("opened");
    letterContent.hidden = false;

    let index = 0;

    function typeNext() {

      if (index < letter.length) {

        typedLetter.textContent += letter.charAt(index);
        index++;

        setTimeout(typeNext, 38);

      }

    }

    setTimeout(typeNext, 700);

  });

})();

/* =================================
   PART 9: CAKE CELEBRATION
================================= */

(() => {

  const candles = document.querySelectorAll(".candle");
  const blowButton = document.getElementById("blow-candles");
  const celebrateButton = document.getElementById("celebrate");
  const cakeMessage = document.getElementById("cake-message");
  const confettiBox = document.getElementById("confetti-container");

  if (!blowButton || !celebrateButton) return;

  blowButton.addEventListener("click", () => {

    candles.forEach((candle) => {
      candle.classList.add("blown");
    });

    if (cakeMessage) {
      cakeMessage.textContent = "Make a wish, Puchki! ✨";
    }

  });

  celebrateButton.addEventListener("click", () => {

    if (cakeMessage) {
      cakeMessage.textContent = "HAPPY BIRTHDAY, PUCHKI! 🎉💗";
    }

    if (!confettiBox) return;

    confettiBox.innerHTML = "";

    for (let i = 0; i < 90; i++) {

      const piece = document.createElement("span");

      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.animationDelay = Math.random() * 2 + "s";
      piece.style.animationDuration = 2 + Math.random() * 3 + "s";

      confettiBox.appendChild(piece);

    }

  });

})();

/* =================================
   PART 10: SECRET SURPRISE BOX
================================= */

(() => {

  const secretBox = document.getElementById("secret-box");
  const secretMessage = document.getElementById("secret-message");

  if (!secretBox || !secretMessage) return;

  const revealSecret = () => {

    secretBox.classList.add("opened");

    secretMessage.hidden = false;

    secretMessage.textContent =
      "A little reminder: You are special, you are precious, and you deserve all the happiness in this world. Never stop smiling, Puchki! 💗";

  };

  secretBox.addEventListener("click", revealSecret);

  secretBox.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

      event.preventDefault();
      revealSecret();

    }

  });

})();


/* =================================
   PART 11: CONFESSION REVEAL
================================= */

(() => {

  const revealButton = document.getElementById("reveal-confession");
  const confessionContent = document.getElementById("confession-content");

  if (!revealButton || !confessionContent) return;

  revealButton.addEventListener("click", () => {

    confessionContent.hidden = false;

    confessionContent.classList.add("revealed");

    revealButton.textContent = "A little more from my heart 💗";

    revealButton.disabled = true;

  });

})();


/* =================================
   PART 12: GRAND FINALE REPLAY
================================= */

(() => {

  const replayButton = document.getElementById("replay");

  if (!replayButton) return;

  replayButton.addEventListener("click", () => {

    window.location.reload();

  });

})();


/* SECRET MESSAGE INITIAL STATE FIX */

(() => {

  const secretMessage = document.getElementById("secret-message");

  if (secretMessage) {
    secretMessage.hidden = true;
  }

})();
/* GIFT BOX OPEN + GOLDEN SPARKLES */
document.querySelectorAll(".reason-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("gift-open")) return;

    card.classList.add("gift-open");

    const symbols = ["✦", "✧", "❋", "✧", "✦"];

    symbols.forEach((symbol, index) => {
      const sparkle = document.createElement("span");

      sparkle.className = "gift-sparkle";
      sparkle.textContent = symbol;

      sparkle.style.left = (15 + index * 16) + "%";
      sparkle.style.top = (20 + (index % 2) * 35) + "%";

      card.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 1300);
    });
  });
});
