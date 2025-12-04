function toggleBox(id) {
  let box = document.querySelectorAll(".box");

  box.forEach((b, index) => {
    if (index === id - 1) {
      b.classList.toggle("active");
    } else {
      b.classList.remove("active");
    }
  });
}
