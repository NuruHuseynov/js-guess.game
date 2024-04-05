let input = document.querySelector(".text");
let button = document.querySelector(".btn");
let result = document.querySelector(".parag");

let arr = ['Mercedes', 'BMW', 'Chevrolet', 'GMC', 'Ferrari', 'Nissan', 'Toyota'];
let randomWord = arr[Math.floor(Math.random() * arr.length)];
console.log("This Car:", randomWord);

button.addEventListener('click', function () {
    if (input.value.toLowerCase().trim() === randomWord.toLowerCase().trim()) {
        result.innerText = "Nice you won Prius";
    } else {
        result.innerText = "TRY Again";
    }
    input.value = "";
});

