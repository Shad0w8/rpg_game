  let val=document.querySelector("#username");
  const sbutton=document.querySelector("#submit");
  sbutton.onclick = name;
function name()
{
  localStorage.setItem("name",val.value);
  location.href="game/game.html";
}



