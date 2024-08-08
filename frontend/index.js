const example =document.getElementById("table");
const gloss_btn = document.getElementById("gloss_btn");
const text_btn =document.getElementById("text_btn");
const speech_btn =document.getElementById("speech_btn");
const example_value0 =document.getElementById("example_value0");
const example_value1 =document.getElementById("example_value1");
const example_value2 =document.getElementById("example_value2");
const text_area = document.getElementById("word-input");
const word_value = document.getElementById("word");
const alert = document.getElementById("alert");
const close = document.getElementById("close");
const heading = document.getElementById("heading");
const alert_show = document.getElementById("show-alert");
const animation_container = document.getElementById("animation-container");
let a=document.getElementsByClassName("for-gloss-display");
let b=document.getElementsByClassName("for-text-display");
let speech_flag=0;
// example_btn.addEventListener("click", function() {
//   text.classList.add("d-none");
//   example.classList.remove("d-none");
//   text_btn.classList.remove("active");
//   example_btn.classList.add("active");
// });
// text_btn.addEventListener("click", function() {
//   text.classList.remove("d-none");
//   example.classList.add("d-none");
//   text_btn.classList.add("active");
//   example_btn.classList.remove("active");
// });
speech_btn.addEventListener("click",function(){
  if(speech_flag==0){
    speech_btn.classList.add("btn1");
    speech_flag=1;
  }
  else{
    speech_btn.classList.remove("btn1")
    speech_flag=0;
  }
})
example_value0.addEventListener("click", function() {
  text_area.value+=example_value0.innerHTML;
});
example_value1.addEventListener("click", function() {
  text_area.value+=example_value1.innerHTML;
});
example_value2.addEventListener("click", function() {
  text_area.value+=example_value2.innerHTML;
});
const messageForm = document.getElementById("cnfrm");
messageForm.addEventListener("click", go_die);
function go_die(){
  for(let i=0;i<a.length;i++){
    a[i].classList.remove("d-none");
  }
  for(let i=0;i<b.length;i++){
    b[i].classList.add("d-none");
  }
  gloss_btn.classList.add("active");
  text_btn.classList.remove("active");
}
const reset = document.getElementById("reset");
reset.addEventListener("click", come_alive);
function come_alive(){
  for(let i=0;i<a.length;i++){
    a[i].classList.add("d-none");
  }
  for(let i=0;i<b.length;i++){
    b[i].classList.remove("d-none");
  }
  gloss_btn.classList.remove("active");
  text_btn.classList.add("active");
  text_area.value="";
}
alert.addEventListener("click", ()=>{
  alert_show.classList.remove("d-none");
});
close.addEventListener("click", ()=>{
  alert.classList.add("d-none");
  heading.classList.remove("pt-1");
  heading.classList.add("pt-3");
  animation_container.classList.remove("pt-1");
  animation_container.classList.add("pt-3");
});

