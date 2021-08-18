const bars  =document.querySelector(".menuicon")
const sidebar = document.querySelector(".sidebar");
const clossingButton =document.querySelector(".cross")
bars.addEventListener("click",()=>{
    sidebar.classList.toggle("show-sidebar");
});
    
clossingButton.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar");
});