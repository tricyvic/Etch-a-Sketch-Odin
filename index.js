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
    let auto = ''
    // console.log(ranging.value);
    // console.log(squared);


    for (let i = 0; i < squared; i++) {
        sketch.appendChild(div)
        console.log("am added");
    }
    for (let i = 0; i < ranging.value; i++) {
        sketch.appendChild(div)
        console.log("am added");
        auto += "auto "
    }
    console.log(auto);
    sketch.style = `grid-template-columns: ${auto}`
})

sketchDiv.forEach(div=>{
    div.addEventListener('click',()=>{
        console.log("clicked");
        div.style = 'background-color:black'
})

})



