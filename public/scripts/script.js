// Buttons voor informatie principes
const guidelineBtn = document.querySelectorAll('.guidelines__btn')
const guidelineInfo = document.querySelectorAll('.principleInfo')

// Buttons voor informatie crincipes
const criteriaBtn = document.querySelectorAll('.guidelines__btn1')
const criteraInfo = document.querySelectorAll('.criteriaInfo')

// Active menu item
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

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

        criteraInfo.forEach(content => content.classList.add('hide1'))
        active.classList.remove('hide1')

    })

});

// Active menu item
for (let i = 0; i < menuLength; i++) {
    // console.log(menuItem[i].href);
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active "
    }
}