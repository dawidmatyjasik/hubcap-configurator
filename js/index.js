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
        const carModelList = document.querySelector('.car-menu__model-list');
        height = carWrapper.offsetHeight;
        carModelList.classList.remove('visiblity');
        carModelList.classList.add('is-hidden');
        document.querySelector('.car-menu').style.height = `${height}px`
    }
    window.addEventListener('load', setWindowSize)
    window.addEventListener('resize', reportWindowSize);

}

const handleCarMenu = () => {
    const carImg = document.querySelector('.car__img');
    const car = document.querySelector('.car');
    const list = document.querySelectorAll('.car-menu__li-img')
    let choices = {
        carChoice: "bmw",
        colorChoice: "black",
    };
    const resetCarValues = () => {
        const car = document.querySelector('.car');
        car.classList.remove('car--size-default',
            'car--size-mercedes',
            'car--size-range',
            'car--size-vw',
            'car--size-fiat',
            'car--size-van',
            'car--size-bus',
            'car--size-truck')

    }

    const pickModelAndColor = (e) => {
        const origin = e.target;
        if (origin.dataset.colorType || origin.dataset.carType) {
            choices.carChoice = origin.dataset.carType || choices.carChoice;
            choices.colorChoice = origin.dataset.colorType || choices.colorChoice;
            carImg.src = `assets/auto/${choices.carChoice}/${choices.colorChoice}.png`
        }
        resetCarValues()
        if (origin.dataset.carType === "bmw") {
            car.classList.add('car--size-default')
        }
        else if (origin.dataset.carType === "mazda") {
            car.classList.add('car--size-default')
        }
        else if (origin.dataset.carType === "mazda_wagon") {
            car.classList.add('car--size-default')
        }
        else if (origin.dataset.carType === "mercedes") {
            car.classList.add('car--size-mercedes')
        }
        else if (origin.dataset.carType === "range") {
            car.classList.add('car--size-range')
        }
        else if (origin.dataset.carType === "vw") {
            car.classList.add('car--size-vw')
        }
        else if (origin.dataset.carType === "fiat") {
            car.classList.add('car--size-fiat')
        }
        else if (origin.dataset.carType === "van") {
            car.classList.add('car--size-van')
        }
        else if (origin.dataset.carType === "minibus") {
            car.classList.add('car--size-van')
        }
        else if (origin.dataset.carType === "bus_scania") {
            car.classList.add('car--size-bus')
        }
        else if (origin.dataset.carType === "truck") {
            car.classList.add('car--size-truck')
        }
    }
    list.forEach(li => {
        li.addEventListener("click", pickModelAndColor);
    });

}
const handleRimMenu = () => {
    const list = document.querySelectorAll('.navigation__photo')
    const menu = document.querySelectorAll('.splide__list')
    const argo = document.querySelector('.argo');
    const racing = document.querySelector('.racing');
    const jtac = document.querySelector('.jtac');
    const max6 = document.querySelector('.max6');
    const resetCompanyValues = () => {
        menu.forEach(li => {
            li.classList.add('is-hidden')

        });
    }
    const pickCompany = (e) => {
        const origin = e.target;
        console.log(origin.dataset.companyName);
        resetCompanyValues()
        if (origin.dataset.companyName === "argo") {
            argo.classList.remove('is-hidden')
        }
        else if (origin.dataset.companyName === "4racing") {
            racing.classList.remove('is-hidden')
        }
        else if (origin.dataset.companyName === "jtac") {
            jtac.classList.remove('is-hidden')
        }
        else if (origin.dataset.companyName === "max6") {
            max6.classList.remove('is-hidden')
        }

    }
    list.forEach(li => {
        li.addEventListener('click', pickCompany)
    })
}





handleRimMenu()
handleCarMenu()
handleWindowSize()
handleMenu()



