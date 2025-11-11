const All = document.querySelector(".All");
const Text = document.querySelector(".Text");
const gif = document.querySelector(".gif");
const Yes = document.querySelector(".Yes");
const No = document.querySelector(".No");

Yes.addEventListener("click", () => {
  Text.innerHTML = "B kr slanh o eng tae";
  gif.src =
    "https://i.pinimg.com/originals/86/f8/f5/86f8f565b386c7c903b92864f6409609.gif";
});

No.addEventListener("mouseover", () => {
  const NoRect = No.getBoundingClientRect();
  const maxX = window.innerWidth - NoRect.width;
  const maxY = window.innerHeight - NoRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  No.style.left = randomX + "px";
  No.style.top = randomY + "px";
});
Yes.ad