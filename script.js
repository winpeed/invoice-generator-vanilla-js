const carWash = document.getElementById("car-wash");
const mowLawn = document.getElementById("mow-lawn");
const pullWeeds = document.getElementById("pull-weeds");
const total = document.getElementById("total");
const item = document.getElementsByClassName("item");
const remove = document.getElementsByClassName("remove");

let sum = 0;

carWash.addEventListener("click", function () {
  sum += 10;
  item[0].classList.remove("hide");
  total.innerHTML = `$`;
  total.innerHTML += `${sum}`;
  carWash.disabled = true;
});

mowLawn.addEventListener("click", function () {
  sum += 20;
  item[1].classList.remove("hide");
  total.innerHTML = `$`;
  total.innerHTML += `${sum}`;
  mowLawn.disabled = true;
});

pullWeeds.addEventListener("click", function () {
  sum += 30;
  item[2].classList.remove("hide");
  total.innerHTML = `$`;
  total.innerHTML += `${sum}`;
  pullWeeds.disabled = true;
});

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    item[i].classList.add("hide");
    if (i == 0) {
      sum -= 10;
      carWash.disabled = false;
    } else if (i == 1) {
      sum -= 20;
      mowLawn.disabled = false;
    } else if (i == 2) {
      sum -= 30;
      pullWeeds.disabled = false;
    }
    total.innerHTML = `$`;
    total.innerHTML += `${sum}`;
  });
}
