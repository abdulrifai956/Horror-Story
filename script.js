const sections = document.querySelectorAll(".section");

const buttons = document.querySelectorAll("[data-target]");

/* sembunyiin semua */
sections.forEach(section => {
  section.style.display = "none";
});

/* cek hash */
const hash = window.location.hash;

/* buka halaman */
if(hash === "#menu"){

  document.getElementById("menu")
  .style.display = "flex";

}
else{

  document.getElementById("cover")
  .style.display = "flex";

}

/* tombol */
buttons.forEach(button => {

  button.addEventListener("click", () => {

    const target = button.dataset.target;

    sections.forEach(section => {
      section.style.display = "none";
    });

    const element = document.getElementById(target);

    if(element){
      element.style.display = "flex";
    }

  });

});