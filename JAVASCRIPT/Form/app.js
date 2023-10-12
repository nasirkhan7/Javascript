let inputs = document.querySelectorAll('input')
// console.log(inputs);

let btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    inputs.forEach((inp) => {
        console.log(inp.value);
        inp.value=''
        document.querySelector('inp')
    })
})


