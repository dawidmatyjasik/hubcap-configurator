/* let src = {
  company: `argo`,
  model: `1_avalon_carbon`,
}; */
let choices = {
  carChoice: "bmw",
  colorChoice: "black",
  background: "tlo_1",
  company: `argo`,
  model: `1_avalon_carbon`,
  header: "",
  color: "",
  size: "",
  data: [],
  argo: 0,
  racing: 0,
  jtac: 0,
};

const handleMenu = () => {
  const list = document.querySelectorAll(".settings li");
  const carModelList = document.querySelector(".car-menu__model-list");
  const carColorList = document.querySelector(".car-menu__color-list");
  const carWrapper = document.querySelector(".car-wrapper");
  const navigation = document.querySelector(".navigation");

  list.forEach((li) => {
    li.addEventListener("click", () => {
      if (li.dataset.listType === "models") {
        if (carModelList.classList.contains("is-hidden")) {
          carModelList.classList.remove("is-hidden");
          carColorList.classList.add("is-hidden");
          carModelList.classList.add("car-menu--slide-in");
          carModelList.classList.remove("car-menu--slide-out");
          carWrapper.classList.add("background--slide-in");
          carWrapper.classList.remove("background--slide-out");
        } else {
          carModelList.classList.remove("car-menu--slide-in");
          carModelList.classList.add("car-menu--slide-out");
          carWrapper.classList.add("background--slide-out");
          carWrapper.classList.remove("background--slide-in");

          setTimeout(() => {
            carModelList.classList.add("is-hidden");
            carColorList.classList.add("is-hidden");
          }, 500);
        }
      } else if (li.dataset.listType === "colors") {
        if (carColorList.classList.contains("is-hidden")) {
          carColorList.classList.remove("is-hidden");
          carModelList.classList.add("is-hidden");
          carColorList.classList.add("car-menu--slide-in");
          carColorList.classList.remove("car-menu--slide-out");
          carWrapper.classList.add("background--slide-in");
          carWrapper.classList.remove("background--slide-out");
        } else {
          carColorList.classList.remove("car-menu--slide-in");
          carColorList.classList.add("car-menu--slide-out");
          carWrapper.classList.add("background--slide-out");
          carWrapper.classList.remove("background--slide-in");
          setTimeout(() => {
            carColorList.classList.add("is-hidden");
            carModelList.classList.add("is-hidden");
          }, 500);
        }
      } else if (li.dataset.listType === "company") {
        if (navigation.classList.contains("navigation--slide-out")) {
          navigation.classList.remove("navigation--slide-out");
          navigation.classList.add("navigation--slide-in");
        } else if (navigation.classList.contains("navigation--slide-in")) {
          navigation.classList.remove("navigation--slide-in");
          navigation.classList.add("navigation--slide-out");
        }
      }
    });
  });
};

const handleWindowSize = () => {
  const reportWindowSize = () => {
    const carWrapper = document.querySelector(".car-wrapper");
    height = carWrapper.offsetHeight;
    document.querySelector(".car-menu").style.height = `${height}px`;
  };
  const setWindowSize = () => {
    const carWrapper = document.querySelector(".car-wrapper");
    const carModelList = document.querySelector(".car-menu__model-list");
    height = carWrapper.offsetHeight;
    carModelList.classList.remove("visiblity");
    carModelList.classList.add("is-hidden");
    document.querySelector(".car-menu").style.height = `${height}px`;
  };
  window.addEventListener("load", setWindowSize);
  window.addEventListener("resize", reportWindowSize);
};

const handleCarMenu = () => {
  const carImg = document.querySelector(".car__img");
  const car = document.querySelector(".car");
  const list = document.querySelectorAll(".car-menu__li-img");
  const resetCarValues = () => {
    const car = document.querySelector(".car");
    car.classList.remove(
      "car--size-default",
      "car--size-mazda",
      "car--size-mercedes",
      "car--size-range",
      "car--size-vw",
      "car--size-fiat",
      "car--size-van",
      "car--size-mini-bus",
      "car--size-bus",
      "car--size-truck"
    );
  };
  const resetNavigationValues = () => {
    document
      .querySelectorAll(".splide__track")[0]
      .classList.remove("splide--slide-in");
    document
      .querySelectorAll(".splide__track")[1]
      .classList.remove("splide--slide-in");
    document
      .querySelectorAll(".splide__track")[2]
      .classList.remove("splide--slide-in");
    document
      .querySelectorAll(".splide__track")[3]
      .classList.remove("splide--slide-in");
  };
  const pickModelAndColor = (e) => {
    const origin = e.target;
    const icons = document.querySelectorAll(`.navigation__logo`);
    const argo = document.querySelector(".argo");
    const racing = document.querySelector(".racing");
    const jtac = document.querySelector(".jtac");
    const max6 = document.querySelector(".max6");
    const logo = document.querySelector(".info__logo");
    const hubcaps = document.querySelectorAll(".car__hubcap");
    const header = document.querySelector(".description__header");
    const color = document.querySelector(".description__color");
    const size = document.querySelector(".description__size");

    const a = new Splide("#a", {
      perPage: 5,
      perMove: 1,
      start: choices.argo,
      breakpoints: {
        450: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });

    const b = new Splide("#b", {
      perPage: 5,
      perMove: 1,
      start: choices.racing,
      breakpoints: {
        450: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });
    const c = new Splide("#c", {
      perPage: 5,
      perMove: 1,
      start: choices.jtac,
      breakpoints: {
        560: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });
    const d = new Splide("#d", {
      perPage: 5,
      perMove: 1,
      breakpoints: {
        560: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });

    if (origin.dataset.colorType || origin.dataset.carType) {
      choices.carChoice = origin.dataset.carType || choices.carChoice;
      choices.colorChoice = origin.dataset.colorType || choices.colorChoice;
      carImg.src = `assets/auto/${choices.carChoice}/${choices.colorChoice}.png`;
    }

    if (choices.carChoice === "truck" || choices.carChoice === "bus_scania") {
      icons[0].classList.add("is-hidden");
      icons[1].classList.add("is-hidden");
      icons[2].classList.add("is-hidden");
      icons[3].classList.remove("is-hidden");
      resetNavigationValues();
      document
        .querySelectorAll(".splide__track")[3]
        .classList.add("splide--slide-in");
      argo.classList.add("is-hidden");
      racing.classList.add("is-hidden");
      jtac.classList.add("is-hidden");
      max6.classList.remove("is-hidden");
      logo.src = "assets/logo/truck.png";
      header.textContent = "TB01-F";
      color.textContent = "";
      size.textContent = '22.5"';
      d.mount();
    } else {
      icons[0].classList.remove("is-hidden");
      icons[1].classList.remove("is-hidden");
      icons[2].classList.remove("is-hidden");
      icons[3].classList.add("is-hidden");
      if (choices.company === "argo") {
        resetNavigationValues();
        document
          .querySelectorAll(".splide__track")[0]
          .classList.add("splide--slide-in");
        argo.classList.remove("is-hidden");
        racing.classList.add("is-hidden");
        jtac.classList.add("is-hidden");
        max6.classList.add("is-hidden");
        logo.src = "assets/logo/argo.png";
        a.mount();
      } else if (choices.company === "4racing") {
        resetNavigationValues();
        document
          .querySelectorAll(".splide__track")[1]
          .classList.add("splide--slide-in");
        argo.classList.add("is-hidden");
        racing.classList.remove("is-hidden");
        jtac.classList.add("is-hidden");
        max6.classList.add("is-hidden");
        logo.src = "assets/logo/4racing.png";
        b.mount();
      } else if (choices.company === "jtac") {
        resetNavigationValues();
        document
          .querySelectorAll(".splide__track")[2]
          .classList.add("splide--slide-in");
        argo.classList.add("is-hidden");
        racing.classList.add("is-hidden");
        jtac.classList.remove("is-hidden");
        max6.classList.add("is-hidden");
        logo.src = "assets/logo/j-tec.png";
        c.mount();
      }
      header.textContent = choices.header;
      color.textContent = choices.color;
      size.textContent = choices.size;
    }

    if (choices.carChoice === "truck" || choices.carChoice === "bus_scania") {
      hubcaps.forEach((hubcap) => {
        hubcap.style.backgroundImage = `url('')`;
      });
    } else {
      hubcaps.forEach((hubcap) => {
        hubcap.style.backgroundImage = `url('./assets/kolpaki/${choices.company}/${choices.model}.webp')`;
      });
    }

    if (origin.dataset.carType === "bmw") {
      resetCarValues();
      car.classList.add("car--size-default");
    } else if (origin.dataset.carType === "mazda") {
      resetCarValues();
      car.classList.add("car--size-mazda");
    } else if (origin.dataset.carType === "mazda_wagon") {
      resetCarValues();
      car.classList.add("car--size-mazda");
    } else if (origin.dataset.carType === "mercedes") {
      resetCarValues();
      car.classList.add("car--size-mercedes");
    } else if (origin.dataset.carType === "range") {
      resetCarValues();
      car.classList.add("car--size-range");
    } else if (origin.dataset.carType === "vw") {
      resetCarValues();
      car.classList.add("car--size-vw");
    } else if (origin.dataset.carType === "fiat") {
      resetCarValues();
      car.classList.add("car--size-fiat");
    } else if (origin.dataset.carType === "van") {
      resetCarValues();
      car.classList.add("car--size-van");
    } else if (origin.dataset.carType === "minibus") {
      resetCarValues();
      car.classList.add("car--size-mini-bus");
    } else if (origin.dataset.carType === "bus_scania") {
      resetCarValues();
      car.classList.add("car--size-bus");
    } else if (origin.dataset.carType === "truck") {
      resetCarValues();
      car.classList.add("car--size-truck");
    }
  };

  list.forEach((li) => {
    li.addEventListener("click", pickModelAndColor);
  });
};
const handleRimMenu = (e) => {
  const list = document.querySelectorAll(".navigation__photo");
  const menu = document.querySelectorAll(".splide__list");
  const argo = document.querySelector(".argo");
  const racing = document.querySelector(".racing");
  const jtac = document.querySelector(".jtac");
  const max6 = document.querySelector(".max6");
  const logo = document.querySelector(".info__logo");

  const resetNavigationValues = () => {
    document
      .querySelectorAll(".splide__track")[0]
      .classList.remove("splide--slide-in");
    document
      .querySelectorAll(".splide__track")[1]
      .classList.remove("splide--slide-in");
    document
      .querySelectorAll(".splide__track")[2]
      .classList.remove("splide--slide-in");
    document
      .querySelectorAll(".splide__track")[3]
      .classList.remove("splide--slide-in");
  };

  const pickCompany = (e) => {
    const origin = e.target;

    const a = new Splide("#a", {
      perPage: 5,
      perMove: 1,
      start: choices.argo,
      breakpoints: {
        560: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });

    const b = new Splide("#b", {
      perPage: 5,
      perMove: 1,
      start: choices.racing,
      breakpoints: {
        560: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });
    const c = new Splide("#c", {
      perPage: 5,
      perMove: 1,
      start: choices.jtac,
      breakpoints: {
        560: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });
    const d = new Splide("#d", {
      perPage: 5,
      perMove: 1,
      breakpoints: {
        560: {
          perPage: 2,
        },
        640: {
          perPage: 3,
        },
        780: {
          perPage: 3,
        },
        1100: {
          perPage: 4,
        },
      },
    });

    if (origin.dataset.companyName === "argo") {
      resetNavigationValues();
      document
        .querySelectorAll(".splide__track")[0]
        .classList.add("splide--slide-in");

      argo.classList.remove("is-hidden");
      racing.classList.add("is-hidden");
      jtac.classList.add("is-hidden");
      max6.classList.add("is-hidden");
      logo.src = "assets/logo/argo.png";
      a.mount();
    } else if (origin.dataset.companyName === "4racing") {
      resetNavigationValues();
      document
        .querySelectorAll(".splide__track")[1]
        .classList.add("splide--slide-in");
      argo.classList.add("is-hidden");
      racing.classList.remove("is-hidden");
      jtac.classList.add("is-hidden");
      max6.classList.add("is-hidden");
      logo.src = "assets/logo/4racing.png";
      b.mount();
    } else if (origin.dataset.companyName === "jtac") {
      resetNavigationValues();
      document
        .querySelectorAll(".splide__track")[2]
        .classList.add("splide--slide-in");
      argo.classList.add("is-hidden");
      racing.classList.add("is-hidden");
      jtac.classList.remove("is-hidden");
      max6.classList.add("is-hidden");
      logo.src = "assets/logo/j-tec.png";
      c.mount();
    } else if (origin.dataset.companyName === "max6") {
      resetNavigationValues();
      document
        .querySelectorAll(".splide__track")[3]
        .classList.add("splide--slide-in");
      argo.classList.add("is-hidden");
      racing.classList.add("is-hidden");
      jtac.classList.add("is-hidden");
      max6.classList.remove("is-hidden");
      logo.src = "assets/logo/truck.png";
      d.mount();
    }
  };
  list.forEach((li) => {
    li.addEventListener("click", pickCompany);
  });
};

const handleRimChange = () => {
  const hubcaps = document.querySelectorAll(".car__hubcap");
  const list = document.querySelectorAll(".navigation__photo");
  const menu = document.querySelectorAll(".splide__image");

  const pickCompany = (e) => {
    const origin = e.target;
    if (origin.dataset.companyName !== "max6") {
      choices.company = origin.dataset.companyName;
    }
  };
  const pickModel = (e) => {
    const origin = e.target;
    const header = document.querySelector(".description__header");
    const color = document.querySelector(".description__color");
    const size = document.querySelector(".description__size");

    if (origin.dataset.modelName !== "TB01-F_ok") {
      choices.model = origin.dataset.modelName;
      choices.header = origin.dataset.modelHeader;
      choices.color = origin.dataset.modelColor;
      choices.size = origin.dataset.modelSize;
      header.textContent = choices.header;
      color.textContent = choices.color;
      size.textContent = choices.size;
      hubcaps.forEach((hubcap) => {
        hubcap.style.backgroundImage = `url('./assets/kolpaki/${choices.company}/${choices.model}.webp')`;
      });
    } else {
      header.textContent = "TB01-F";
      color.textContent = "";
      size.textContent = '22.5"';
    }
    const argoArr = [];
    const racingArr = [];
    const jtecArr = [];

    choices.data.argo.map((item) => {
      argoArr.push(item.path);
    });
    choices.data.racing.map((item) => {
      racingArr.push(item.path);
    });
    choices.data.jtac.map((item) => {
      jtecArr.push(item.path);
    });
    if (choices.company === "argo") {
      choices.argo = argoArr.indexOf(choices.model);
      choices.racing = 0;
      choices.jtac = 0;
    } else if (choices.company === "4racing") {
      choices.argo = 0;
      choices.racing = racingArr.indexOf(choices.model);
      choices.jtac = 0;
    } else if (choices.company === "jtac") {
      choices.argo = 0;
      choices.racing = 0;
      choices.jtac = jtecArr.indexOf(choices.model);
    }
  };
  list.forEach((li) => {
    li.addEventListener("click", pickCompany);
  });
  menu.forEach((li) => {
    li.addEventListener("click", pickModel);
  });
};
const createSplide = () => {
  new Splide("#a", {
    perPage: 5,
    perMove: 1,
    breakpoints: {
      450: {
        perPage: 2,
      },
      640: {
        perPage: 3,
      },
      780: {
        perPage: 3,
      },
      1100: {
        perPage: 4,
      },
    },
  }).mount();
};

async function getData() {
  const url = "./data.json";
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  const data = await getData();
  const argoList = document.querySelector(".argo-list");
  const racingList = document.querySelector(".racing-list");
  const jtacList = document.querySelector(".jtac-list");
  const maxList = document.querySelector(".max-list");
  choices.data = data;

  // for (const i of choices.data.argo) {
  //   console.log(i.path);
  //   choices.data.argo.path.indexOf(choices.path);
  // }

  let argo = "";
  let racing = "";
  let jtac = "";
  let max = "";

  data.argo.forEach((data) => {
    let htmlSegment = `
        <li class="splide__slide">
        <h1 class="splide__header header"><span class="header__title">${data.header}
        </span></h1>
        <h2 class="splide__sub-header header"><span class="visiblity">
        1</span><span class="header__description">${data.color}</span></h2>
        <img src="assets/kolpaki/argo/${data.path}.webp" class="splide__image"
        data-model-name="${data.path}" 
        data-model-header="${data.header}"
        data-model-color="${data.color}"
        data-model-size='${data.size} '>
        </li> 
        `;
    argo += htmlSegment;
  });
  data.racing.forEach((data) => {
    let htmlSegment = `
        <li class="splide__slide">
        <h1 class="splide__header header"><span class="header__title">${data.header}
        </span></h1>
        <h2 class="splide__sub-header header"><span class="visiblity">
        1</span><span class="header__description">${data.color}</span></h2>
        <img src="assets/kolpaki/4racing/${data.path}.webp" class="splide__image"
        data-model-name="${data.path}" 
        data-model-header="${data.header}"
        data-model-color="${data.color}"
        data-model-size='${data.size} '>
        </li> 
        `;
    racing += htmlSegment;
  });
  data.jtac.forEach((data) => {
    let htmlSegment = `
        <li class="splide__slide">
        <h1 class="splide__header header"><span class="header__title">${data.header}
        </span></h1>
        <h2 class="splide__sub-header header"><span class="visiblity">
        1</span><span class="header__description">${data.color}</span></h2>
        <img src="assets/kolpaki/jtac/${data.path}.webp" class="splide__image"
        data-model-name="${data.path}" 
        data-model-header="${data.header}"
        data-model-color="${data.color}"
        data-model-size='${data.size} '>
        </li> 
        `;

    jtac += htmlSegment;
  });

  data.max.forEach((data) => {
    let htmlSegment = `
        <li class="splide__slide">
        <h1 class="splide__header header"><span class="header__title">${data.header}
        </span></h1>
        <h2 class="splide__sub-header header"><span class="visiblity">
        1</span><span class="header__description">${data.color}</span></h2>
        <img src="assets/kolpaki/max6/${data.path}.webp" class="splide__image"
        data-model-name="${data.path}" 
        data-model-header="${data.header}"
        data-model-color="${data.color}"
        data-model-size='${data.size} '>
        </li>
        `;
    max += htmlSegment;
  });
  /*  <a target="_blank" href="http://config.gorecki.pl/podglad.html?rim=images/kolpaki/max6/${data.path}.webp&background=images/tla/przymierzalnia_${choices.background}.png&auto=${choices.carChoice}&color=${choices.colorChoice}&front=undefined"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
  </li>  */
  argoList.innerHTML = argo;
  racingList.innerHTML = racing;
  jtacList.innerHTML = jtac;
  maxList.innerHTML = max;
  createSplide();
}
const handleBackgroundChange = () => {
  const backgroundImages = document.querySelectorAll(".background-menu__image");
  changeBackground = (e) => {
    const origin = e.target;
    const background = document.querySelector(".car-wrapper");
    if (origin.dataset.background === "tlo_4") {
      choices.background = "tlo_4";
      background.style.backgroundImage = `url('./assets/${choices.background}.png')`;
    } else if (origin.dataset.background === "tlo_2") {
      choices.background = "tlo_2";
      background.style.backgroundImage = `url('./assets/${choices.background}.png')`;
    } else if (origin.dataset.background === "tlo_3") {
      choices.background = "tlo_3";
      background.style.backgroundImage = `url('./assets/${choices.background}.png')`;
    }
  };

  backgroundImages.forEach((image) => {
    image.addEventListener("click", changeBackground);
  });
};
const handleMenuChange = () => {
  const icons = document.querySelectorAll(".splide__slide");
  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      icons.forEach((icon) => {
        icon.classList.remove("settings--active");
      });
      icon.classList.add("settings--active");
    });
  });
};

/* const setBackground = () => {
    const list = document.querySelectorAll('.splide__slide')
    const reset = () => {
        list.forEach(li => {
            li.classList.remove('selected')
        });
    }
    list.forEach(li => {
        li.addEventListener('click', (e) => {
            reset()
            e.target.classList.add('selected')
            console.log(e.target);

        })
    });
} */
const handleIconBackground = () => {
  const icons = document.querySelectorAll(".navigation__logo");
  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      icons.forEach((icon) => {});
      icons.forEach((icon) => {
        icon.classList.remove("navigation--active");

        if (icon.dataset.icon === choices.company) {
          icon.classList.add("navigation--active");
        }
      });
    });
  });
};

const handleIconChange = () => {
  const icons = document.querySelectorAll(".settings--change");
  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      icons.forEach((icon) => {
        icon.classList.remove("settings--active");
      });
      icon.classList.add("settings--active");
    });
  });
};
const handleBrowser = () => {
  // Opera 8.0+
  var isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== "undefined";

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && window["safari"].pushNotification)
    );

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Edge (based on chromium) detection
  var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isSafari) {
    alert(
      "Trwają pracę nad kombatymilnością aplikacji w safari. Przepraszamy za utrudnienia."
    );
  }
};

/* const preloader = () => {
  const preload = document.querySelector(".preload");

  preload.classList.add("show-preloader");
  window.addEventListener("load", () => {
    preload.classList.remove("show-preloader");
  });
}; */
const start = () => {
  // preloader();
  renderUsers().then((r) => {
    handleRimChange();
    handleMenuChange();
    // setBackground()
  });
  handleMenu();
  handleWindowSize();
  handleCarMenu();
  handleRimMenu();
  handleBackgroundChange();
  handleIconChange();
  handleIconBackground();
  handleBrowser();
};

start();
