const openBtn = document.getElementById("openBtn");
const landing = document.getElementById("landing");
const valentine = document.getElementById("valentine");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const loveTextEl = document.getElementById("loveText");

let noMoves = 0;

// Open main page
openBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  valentine.classList.remove("hidden");
});

// Make NO button run away 😈
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const maxX = 120;
  const maxY = 60;

  const x = Math.random() * (maxX * 2) - maxX;
  const y = Math.random() * (maxY * 2) - maxY;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noMoves++;
  if (noMoves === 3) noBtn.textContent = "Are you sure? 😏";
  if (noMoves === 6) noBtn.textContent = "Just say YES 😭";
  if (noMoves === 9) noBtn.textContent = "Please? 😩";
  
}

// Typewriter effect
function typeWriter(text, el, speed = 60) {
  let i = 0;
  el.textContent = "";
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// YES button: show result and play video
yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  document.querySelector(".buttons").style.display = "none";

  const video = document.getElementById("valVideo");
  video.currentTime = 0;
  video.muted = false;

  video.load();

  video.play().then(() => {
    console.log("Video playing with sound!");
    // Start typewriter after video starts
    setTimeout(() => {
      typeWriter("Every moment with you feels like home. Happy Valentine's Day, my love 💘", loveTextEl, 60);
    }, 500);
  }).catch(err => {
    console.error("Unmuted failed:", err);
    video.muted = true;
    video.play().then(() => {
      console.log("Video playing muted.");
      setTimeout(() => {
        typeWriter("Every moment with you feels like home. Happy Valentine's Day, my love 💘", loveTextEl, 60);
      }, 500);
    });
  });
});
