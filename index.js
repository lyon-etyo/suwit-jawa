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
let myInterval;
function loadingImg2(img) {
  const imgList = ["gajah", "semut", "orang"];
  let i = 0;
  myInterval = setInterval(() => {
    img.src = `img/${imgList[i++]}.png`;
    if (i == imgList.length) i = 0;
  }, 100);
}

const player = document.querySelector(".area-player");
const info = document.querySelector(".info");
const computer = document.querySelector(".img-komputer");
player.addEventListener("click", e => {
  if (e.target.tagName == "IMG") {
    const pilihanKomputer = pilihanKomp();
    const pilihanPlayer = e.target.className;
    // loadingImg(computer);
    clearInterval(myInterval);
    computer.src = `img/${pilihanKomputer}.png`;
    info.textContent = `${getHasil(pilihanKomputer, pilihanPlayer).toUpperCase()}!`;
  }
});

const li = player.querySelectorAll("li img");
li.forEach(el => {
  el.addEventListener("mouseenter", () => {
    loadingImg2(computer);
  });
  el.addEventListener("mouseout", () => {
    clearInterval(myInterval);
  });
});
