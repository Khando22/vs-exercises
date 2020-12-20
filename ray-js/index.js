const intro = document.querySelector(".intro")
const nav = document.querySelector(".nav")
const skills = document.querySelector(".skillsInfo")
const about = document.querySelector(".aboutInfo")
const projects = document.querySelector(".projectInfo")



const name = "Ray Johnson"


function print(location, text) {  
    let i = 0;
    location.innerHTML = "";
    let id = setInterval(() => {
        if (i >= text.length) {
          clearInterval(id);
        } else {
          location.innerHTML += text[i];
          i++;
        }
      }, 170);
    }


setTimeout(() => print(intro, name), 650)
setTimeout(() => nav.style.opacity = 1, 1000)


function display( block) {
  if (block.style.display === "none") {
    block.style.display = "block"
  } else {
    block.style.display = "none"
  }
   
  
}
