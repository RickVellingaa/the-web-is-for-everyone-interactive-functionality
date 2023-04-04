// Buttons voor informatie principes
const guidelineBtn = document.querySelectorAll('.richtlijn__btn')
const guidelineInfo = document.querySelectorAll('.principe__informatie')

// Buttons voor informatie crincipes
const criteriaBtn = document.querySelectorAll('.richtlijn__btn1')
const criteraInfo = document.querySelectorAll('.criteria__informatie')

guidelineBtn.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        guidelineInfo.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')

    })

});

criteriaBtn.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        criteraInfo.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')

    })

});

