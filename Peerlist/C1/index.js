let btnClick = document.getElementById("btn-click");
let addNum = document.getElementById("add-num");
let upVote = 70;
btnClick.addEventListener("click", () => {
  upVote += 1;
  addNum.innerHTML = upVote;
});
