const buttons = document.querySelectorAll(".gate button");
const panels = document.querySelectorAll(".panel");
const img = document.getElementById("profile-img");
const toggle = document.getElementById("mosToggle");

/* Gate switching */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    panels.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");

    img.style.opacity = btn.dataset.target === "about" ? "1" : "0";
  });
});

/* NMOS / PMOS toggle */
toggle.addEventListener("change", () => {
  document.body.classList.toggle("pmos");
  document.body.classList.toggle("nmos");
});
