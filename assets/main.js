/* 
📌Consegna
 - Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email.
 - stamparli in pagina all'interno di una lista.
*/
// Get DOM elements
const displayerEl = document.querySelector('.displayer')
const btnGenerateEl = document.querySelector('.generate-btn')
// For loop to cicle 10 times
for (let i = 0; i <= 10; i++) {
    //fetch API send request to server  for some data(e-mail)
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        //after obtaining the data
        .then((response) => response.json())//.json used to transform the data in an object
        //after parsing the data to an object
        .then((data) => {
            console.log(data.response);//response is the key of the data object the email is the value
            //create html element
            const listItem = document.createElement('li')
            listItem.innerText = data.response
            //display the results in page
            displayerEl.appendChild(listItem)
        })
        .catch((error) => console.error(error));
}




