const sketch = document.querySelector(".toSketch")
const sketchDiv = document.querySelectorAll(".toSketch>div")
const div = document.createElement("div")
const ranging = document.querySelector("#select")
const outputing = document.querySelector('.demo')


outputing.innerHTML = ranging.value
// console.log(sketchDiv);


ranging.addEventListener('change',()=>{
    outputing.innerHTML = ranging.value
    const squared = ranging.value ** 2;
    console.log(ranging.value);
    console.log(squared);
})




