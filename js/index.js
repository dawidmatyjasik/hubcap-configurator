const handleMenu = () => {
    const list = document.querySelectorAll('.settings li');
    const carModelList = document.querySelector('.car-menu__model-list');
    const carColorList = document.querySelector('.car-menu__color-list');
    const carMenu = document.querySelector('.car-menu')
    const carWrapper = document.querySelector('.car-wrapper');
    const arrow = document.querySelector('.settings__logo:nth-last-child(1)');
    const navigation = document.querySelector('.navigation');

    list.forEach(li => {
        li.addEventListener('click', () => {
            if (li.dataset.listType === "models") {
                if (carModelList.classList.contains('is-hidden')) {
                    carModelList.classList.remove('is-hidden');
                    carColorList.classList.add('is-hidden');
                    carMenu.style.backgroundColor = "white";
                    carWrapper.style.paddingLeft = "10vw"
                } else {
                    carModelList.classList.add('is-hidden');
                    carColorList.classList.add('is-hidden');
                    carMenu.style.backgroundColor = "transparent"
                    carWrapper.style.paddingLeft = "0"
                }
            } else if (li.dataset.listType === "colors") {
                if (carColorList.classList.contains('is-hidden')) {
                    carColorList.classList.remove('is-hidden');
                    carModelList.classList.add('is-hidden');
                    carMenu.style.backgroundColor = "white";
                    carWrapper.style.paddingLeft = "10vw"
                } else {
                    carColorList.classList.add('is-hidden');
                    carModelList.classList.add('is-hidden');
                    carMenu.style.backgroundColor = "transparent"
                    carWrapper.style.paddingLeft = "0"
                }
            } else if (li.dataset.listType === "company") {
                navigation.classList.toggle('visibility');

            }
        })
    });
}

const handleWindowSize = () => {
    const reportWindowSize = () => {
        const carWrapper = document.querySelector('.car-wrapper');
        height = carWrapper.offsetHeight;
        document.querySelector('.car-menu').style.height = `${height}px`
    }
    const setWindowSize = () => {
        const carWrapper = document.querySelector('.car-wrapper');
        height = carWrapper.offsetHeight;
        document.querySelector('.car-menu').style.height = `${height}px`
    }
    window.addEventListener('load', setWindowSize)
    window.addEventListener('resize', reportWindowSize);

}

handleWindowSize()
handleMenu()