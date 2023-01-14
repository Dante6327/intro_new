//네비게이션 버튼 클릭시 화면 이동
document.querySelector("#navHome").addEventListener("click", (e) => {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navAbout").addEventListener("click", (e) => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navSkills").addEventListener("click", (e) => {
  document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navPortfolio").addEventListener("click", (e) => {
  document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navContact").addEventListener("click", (e) => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
