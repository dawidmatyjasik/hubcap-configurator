console.log("test");

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

        if (origin.dataset.carType === "bmw") {
            resetCarValues()
            car.classList.add('car--size-default')
        }
        else if (origin.dataset.carType === "mazda") {
            resetCarValues()
            car.classList.add('car--size-default')
        }
        else if (origin.dataset.carType === "mazda_wagon") {
            resetCarValues()
            car.classList.add('car--size-default')
        }
        else if (origin.dataset.carType === "mercedes") {
            resetCarValues()
            car.classList.add('car--size-mercedes')
        }
        else if (origin.dataset.carType === "range") {
            resetCarValues()
            car.classList.add('car--size-range')
        }
        else if (origin.dataset.carType === "vw") {
            resetCarValues()
            car.classList.add('car--size-vw')
        }
        else if (origin.dataset.carType === "fiat") {
            resetCarValues()
            car.classList.add('car--size-fiat')
        }
        else if (origin.dataset.carType === "van") {
            resetCarValues()
            car.classList.add('car--size-van')
        }
        else if (origin.dataset.carType === "minibus") {
            resetCarValues()
            car.classList.add('car--size-van')
        }
        else if (origin.dataset.carType === "bus_scania") {
            resetCarValues()
            car.classList.add('car--size-bus')
        }
        else if (origin.dataset.carType === "truck") {
            resetCarValues()
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
    const logo = document.querySelector('.info__logo');
    const resetCompanyValues = () => {
        menu.forEach(li => {
            li.classList.add('is-hidden')

        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        const a = new Splide('#a', {
            perPage: 5,
            perMove: 1,
            // cover: true,
            breakpoints: {
                500: {
                    perPage: 2,
                },
                640: {
                    perPage: 3,
                },
                780: {
                    perPage: 3,
                }
            }
        }).mount();

    });
    const pickCompany = (e) => {
        const origin = e.target;
        const b = new Splide('#b', {
            perPage: 5,
            perMove: 1,
            breakpoints: {
                500: {
                    perPage: 2,
                },
                640: {
                    perPage: 3,
                },
                780: {
                    perPage: 3,
                }
            }
        })
        const c = new Splide('#c', {
            perPage: 5,
            perMove: 1,
            breakpoints: {
                500: {
                    perPage: 2,
                },
                640: {
                    perPage: 3,
                },
                780: {
                    perPage: 3,
                }
            }
        })
        const d = new Splide('#d', {
            perPage: 5,
            perMove: 1,
            breakpoints: {
                500: {
                    perPage: 2,
                },
                640: {
                    perPage: 3,
                },
                780: {
                    perPage: 3,
                }
            }
        })
        if (origin.dataset.companyName === "argo") {
            argo.classList.remove('is-hidden')
            racing.classList.add('is-hidden')
            jtac.classList.add('is-hidden')
            max6.classList.add('is-hidden')
            logo.src = "assets/logo/argo.png"
        }
        else if (origin.dataset.companyName === "4racing") {
            argo.classList.add('is-hidden')
            racing.classList.remove('is-hidden')
            jtac.classList.add('is-hidden')
            max6.classList.add('is-hidden')
            logo.src = "assets/logo/4racing.png"
            b.mount();
        }
        else if (origin.dataset.companyName === "jtac") {
            argo.classList.add('is-hidden')
            racing.classList.add('is-hidden')
            jtac.classList.remove('is-hidden')
            max6.classList.add('is-hidden')
            logo.src = "assets/logo/j-tec.png"
            c.mount();
        }
        else if (origin.dataset.companyName === "max6") {
            argo.classList.add('is-hidden')
            racing.classList.add('is-hidden')
            jtac.classList.add('is-hidden')
            max6.classList.remove('is-hidden')
            logo.src = "assets/logo/max6.png"
            d.mount();
        }

    }
    list.forEach(li => {
        li.addEventListener('click', pickCompany)
    })
}
const handleRimChange = () => {
    const hubcaps = document.querySelectorAll('.car__hubcap')
    const list = document.querySelectorAll('.navigation__photo')
    const menu = document.querySelectorAll('.splide__image')

    let src = {
        company: `argo`,
        model: `avalone_pro`
    }

    const pickCompany = (e) => {
        const origin = e.target;
        src.company = origin.dataset.companyName;
        console.log(src);
    }
    const pickModel = (e) => {
        const origin = e.target;
        const header = document.querySelector('.description__header');
        const color = document.querySelector('.description__color');
        const size = document.querySelector('.description__size');
        header.textContent = origin.dataset.modelHeader
        color.textContent = origin.dataset.modelColor
        size.textContent = origin.dataset.modelSize
        src.model = origin.dataset.modelName;
        hubcaps.forEach(hubcap => {
            hubcap.style.backgroundImage = `url('assets/kolpaki_bez_opon/${src.company}/${src.model}.png')`
        })

    }
    list.forEach(li => {
        li.addEventListener('click', pickCompany)
    })
    menu.forEach(li => {
        li.addEventListener('click', pickModel)
    })
}






handleMenu()
handleWindowSize()
handleCarMenu()
handleRimMenu()
handleRimChange()






