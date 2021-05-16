function pilihanKomp() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "seri";
  if (player == "gajah") return comp == "orang" ? "menang" : "kalah";
  if (player == "orang") return comp == "gajah" ? "kalah" : "menang";
  if (player == "semut") return comp == "orang" ? "kalah" : "menang";
}

function loadingImg(img) {
  const imgList = ["gajah", "semut", "orang"];
  let i = 0;
  const t0 = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - t0 > 1000) {
      clearInterval;
      return;
    }
    img.src = `img/${imgList[i++]}.png`;
    if (i == imgList.length) i = 0;
  }, 100);
}
let myInterval, textInterval;
function loadingImg2(img) {
  const imgList = ["gajah", "semut", "orang"];
  let i = 0;
  myInterval = setInterval(() => {
    img.src = `img/${imgList[i++]}.png`;
    if (i == imgList.length) i = 0;
  }, 100);
}
function loadingText(text) {
  const charList = [".", ".", ".", "?"];
  let i = 0;
  textInterval = setInterval(() => {
    text.textContent += charList[i];
    if (i == charList.length) {
      text.textContent = "";
      i = 0;
    }
    i++;
  }, 250);
}

const player = document.querySelector(".area-player");
const info = document.querySelector(".info");
const computer = document.querySelector(".img-komputer");
const skorPlayer = document.querySelector(".skor-player");
const skorKomputer = document.querySelector(".skor-komputer");
player.addEventListener("click", e => {
  if (e.target.tagName == "IMG") {
    const pilihanKomputer = pilihanKomp();
    const pilihanPlayer = e.target.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    // loadingImg(computer);
    clearInterval(myInterval);
    clearInterval(textInterval);
    computer.src = `img/${pilihanKomputer}.png`;
    info.textContent = `${hasil.toUpperCase()}!`;
    if (hasil == "menang") {
      skorPlayer.textContent = parseInt(skorPlayer.textContent) + 1;
    } else if (hasil == "kalah") {
      skorKomputer.textContent = parseInt(skorKomputer.textContent) + 1;
    }
  }
});

const li = player.querySelectorAll("li img");
li.forEach(el => {
  el.addEventListener("mouseenter", () => {
    loadingText(info);
    loadingImg2(computer);
  });
  el.addEventListener("mouseout", () => {
    clearInterval(myInterval);
    clearInterval(textInterval);
    info.textContent = "";
  });
});
