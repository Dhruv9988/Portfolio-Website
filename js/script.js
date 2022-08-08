var typed = new Typed(".typing",{
  strings:["Software Engineer","Web Developer", "Cricketer", "Gamer"],
  typeSpeed:100,
  BackSpeed: 60,
  loop:true
})

const nav= document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++)
{
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function()
  {
    console.log(this)
  })
}