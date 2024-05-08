const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
let word;

async function getwordinfo(word) {
    let data; // Redefine data variable outside the try block
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        data = await response.json(); // Assign data inside try block
        console.log(data);
        // Update result element with data
        result.innerHTML = `<h2> Word: ${data[0].word}<h2>${data[0].meanings[0].partOfSpeech} <br> Meaning:${data[0].meanings[0].definitions[0].definition}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        result.textContent = "Error fetching data. Please try again later.";
    }
}

button.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    word = input.value.trim(); // Get the word from input field
    if (word === "") {
        alert("Please enter a word");
    } else {
        getwordinfo(word);
    }
});
