const displayerEl = document.querySelector('.displayer')
const btnGenerateEl = document.querySelector('.generate-btn')
const btnGenerateNewEl = document.querySelector('.new-btn')

btnGenerateEl.addEventListener('click', () => {
    for (let i = 0; i <= 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                const listItem = document.createElement('li')
                listItem.innerText = data.response
                displayerEl.appendChild(listItem)
                displayerEl.classList.add('d-flex', 'gap-2', 'flex-wrap')
            })
    }

})
btnGenerateNewEl.addEventListener('click', () => {
    displayerEl.innerHTML = ''
    for (let i = 0; i <= 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                const listItem = document.createElement('li')
                listItem.classList.add('text-danger')
                listItem.innerText = data.response
                displayerEl.appendChild(listItem)
            })
    }
})