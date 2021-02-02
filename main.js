const button = document.querySelector(".main--btn")
const text = document.querySelectorAll(".text-container--text")
const container = document.querySelector(".main--text-container")

function onClick() {
	container.innerHTML += `<p class="text-container--text">${text[1].innerText}</p>`
}

button.addEventListener('click', onClick)