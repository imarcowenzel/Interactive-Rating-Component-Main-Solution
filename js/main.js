const btnRatingList = document.querySelectorAll("[data-btnRating]")
const ratingResultText = document.querySelector('[data-ratingResultText]')
const btnSubmit = document.querySelector('[data-btnSubmit]')
const thxCard = document.querySelector('[data-thxCard]')
const mainCard = document.querySelector('[data-mainCard]')
let number = null

console.log()

btnRatingList.forEach(btnRating => {
    
    btnRating.addEventListener('click', () => {

        btnRatingList.forEach(btnRating => {
            btnRating.classList.remove('is-active')
        })

        btnRating.classList.add('is-active')

        number = btnRating.textContent

    })

});

btnSubmit.addEventListener('click', () => {
   
    if (number != null) {
        thxCard.classList.remove('visually-hidden')
        mainCard.classList.add('visually-hidden')
        ratingResultText.innerText = `You selected ${number} out of 5`
    }

})
