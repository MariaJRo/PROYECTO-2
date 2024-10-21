const header = document.createElement('header')
document.body.appendChild(header)

const headerNavSection = document.createElement('section')
header.appendChild(headerNavSection)
headerNavSection.classList.add('headerNavSection', 'flex-container-b')

const headerLogoContainer = document.createElement('div')
headerNavSection.appendChild(headerLogoContainer)

const companyLogoImage = document.createElement('img')
companyLogoImage.src =
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1726353030/JD_Sports_logo_1_r31tw2.png'
companyLogoImage.alt = 'Logo de la Empresa'
headerLogoContainer.appendChild(companyLogoImage)

const headerMenuContainer = document.createElement('nav')
headerNavSection.appendChild(headerMenuContainer)

const menuCategories = document.createElement('ul')
menuCategories.innerHTML = ''
headerMenuContainer.appendChild(menuCategories)
menuCategories.classList.add('menuCategories')

const menuOptions = ['Hombre', 'Mujer', 'Niños', 'Ofertas']

for (let i = 0; i < menuOptions.length; i++) {
  const newOptions = document.createElement('li')
  const menuLink = document.createElement('a')
  menuLink.innerText = menuOptions[i]
  newOptions.appendChild(menuLink)
  menuCategories.appendChild(newOptions)
}

const headerCartContainer = document.createElement('ul')
headerCartContainer.innerHTML = ''
headerMenuContainer.appendChild(headerCartContainer)

const menuCartUrls = [
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1726743941/user_unhast.png',
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1726743936/shopping-cart_emkicl.png',
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1726743928/settings_idqgzv.png'
]

for (let i = 0; i < menuCartUrls.length; i++) {
  const newCart = document.createElement('li')
  const cartLink = document.createElement('a')
  cartLink.href = '#'
  const cartImg = document.createElement('img')
  cartImg.src = menuCartUrls[i]
  cartImg.alt = 'Iconos del menú'

  cartLink.appendChild(cartImg)
  newCart.appendChild(cartLink)
  headerCartContainer.appendChild(newCart)
}

const headerImgSection = document.createElement('section')
header.appendChild(headerImgSection)

const imgSection = document.createElement('img')
imgSection.src =
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1726353022/Cover_lyeqjz.png'
imgSection.alt = 'JD imagen'
headerImgSection.appendChild(imgSection)

const main = document.createElement('main')
document.body.appendChild(main)

const sectImgArrow = document.createElement('section')
main.appendChild(sectImgArrow)
sectImgArrow.classList.add('sectImgArrow', 'flex-container-a')

const buttonArrow = document.createElement('button')
sectImgArrow.appendChild(buttonArrow)
buttonArrow.classList.add('buttonArrow', 'flex-container-a')

const arrowImg = document.createElement('img')
arrowImg.src =
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1726833726/pngwing.com_ynuklr.png'
arrowImg.alt = 'Flecha'
buttonArrow.appendChild(arrowImg)
arrowImg.classList.add('arrowImg')

const sectFilterMenu = document.createElement('section')
main.appendChild(sectFilterMenu)
sectFilterMenu.classList.add('sectFilterMenu', 'oculto', 'flex-container-a')

const buttonBack = document.createElement('button')
sectFilterMenu.appendChild(buttonBack)
buttonBack.classList.add('buttonBack')

const arrowBack = document.createElement('img')
arrowBack.src =
  'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727731914/Up_Arrow_rzrbqu.png'
arrowBack.alt = 'Flecha hacia arriba'
buttonBack.appendChild(arrowBack)
arrowBack.classList.add('arrowBack')

const showFilterMenu = () => {
  sectImgArrow.classList.add('oculto')
  sectImgArrow.classList.remove('visible')
  sectFilterMenu.classList.add('visible')
  sectFilterMenu.classList.remove('oculto')
}

const showImgArrow = () => {
  sectFilterMenu.classList.add('oculto')
  sectFilterMenu.classList.remove('visible')
  sectImgArrow.classList.add('visible')
  sectImgArrow.classList.remove('oculto')
}

buttonArrow.addEventListener('click', showFilterMenu)
buttonBack.addEventListener('click', showImgArrow)

const filterMenu = document.createElement('div')
sectFilterMenu.appendChild(filterMenu)
filterMenu.classList.add('filterMenu', 'flex-container')

const sectTrainers = document.createElement('section')
main.appendChild(sectTrainers)
sectTrainers.classList.add('trainersSect')

const divTrainers = document.createElement('div')
sectTrainers.appendChild(divTrainers)

const trainers = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_9_wuklg7.png',
    brand: 'Nike Original',
    model: 'Air Max 1',
    size: '37',
    price: '120.00 €',
    buy: 'Comprar'
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_2_p5pr4d.png',
    brand: 'New Balance',
    model: 'NB 9060',
    size: '38',
    price: '80.00 €',
    buy: 'Comprar'
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_3_iyzwoi.png',
    brand: 'Nike Original',
    model: 'Nike Revolution',
    size: '37',
    price: '90.00 €',
    buy: 'Comprar'
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084890/Todos%20los%20tenis/nike1_1_4_fqsb4l.png',
    brand: 'Adidas Original',
    model: 'Forum Buckle',
    size: '39',
    price: '100.00 €',
    buy: 'Comprar'
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_5_nqenmf.png',
    brand: 'Adidas Original',
    model: 'Campus',
    size: '37',
    price: '120.00 €',
    buy: 'Comprar'
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084890/Todos%20los%20tenis/nike1_1_6_wdmpzm.png',
    brand: 'New Balance',
    model: 'NB 327',
    size: '40',
    price: '120.00 €',
    buy: 'Comprar'
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084890/Todos%20los%20tenis/nike1_1_7_kip05y.png',
    brand: 'Nike Original',
    model: 'Dunk Low',
    size: '39',
    price: '100.00 €',
    buy: 'Comprar'
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_8_jcuil6.png',
    brand: 'Adidas Original',
    model: 'Gazelle',
    size: '41',
    price: '90.00 €',
    buy: 'Comprar'
  },
  {
    id: 9,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_9_wuklg7.png',
    brand: 'Nike Original',
    model: 'Air Max SC',
    size: '40',
    price: '150.00 €',
    buy: 'Comprar'
  },
  {
    id: 10,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_10_sslu9e.png',
    brand: 'Adidas Original',
    model: 'Handball Spezial',
    size: '38',
    price: '120.00 €',
    buy: 'Comprar'
  },
  {
    id: 11,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_11_o19y7e.png',
    brand: 'Nike Original',
    model: 'Air Force',
    size: '38',
    price: '130.00 €',
    buy: 'Comprar'
  },
  {
    id: 12,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084890/Todos%20los%20tenis/nike1_1_12_cr4rvr.png',
    brand: 'New Balance',
    model: 'NB 9060',
    size: '42',
    price: '100.00 €',
    buy: 'Comprar'
  },
  {
    id: 13,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084890/Todos%20los%20tenis/nike1_1_13_wpkhka.png',
    brand: 'New Balance',
    model: 'NB 480',
    size: '41',
    price: '150.00 €',
    buy: 'Comprar'
  },
  {
    id: 14,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_3_iyzwoi.png',
    brand: 'Nike Original',
    model: 'Full Force Low',
    size: '43',
    price: '70.00 €',
    buy: 'Comprar'
  },
  {
    id: 15,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084890/Todos%20los%20tenis/nike1_1_15_nl1jer.png',
    brand: 'Nike Original',
    model: 'Air Max SC',
    size: '39',
    price: '160.00 €',
    buy: 'Comprar'
  },
  {
    id: 16,
    img: 'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1727084891/Todos%20los%20tenis/nike1_1_16_zjndlj.png',
    brand: 'Adidas Original',
    model: 'Handball Spezial',
    size: '42',
    price: '140.00 €',
    buy: 'Comprar'
  }
]

const BRANDS = []
const MODELS = []
const SIZES = []

const fillBrands = (trainers) => {
  BRANDS.splice(0)
  for (const trainer of trainers) {
    if (!BRANDS.includes(trainer.brand)) {
      BRANDS.push(trainer.brand)
    }
  }
}

const fillModels = (trainers) => {
  MODELS.splice(0)
  for (const trainer of trainers) {
    if (!MODELS.includes(trainer.model)) {
      MODELS.push(trainer.model)
    }
  }
}

const fillSizes = (trainers) => {
  SIZES.splice(0)
  for (const trainer of trainers) {
    if (!SIZES.includes(trainer.size)) {
      SIZES.push(trainer.size)
    }
  }
}

fillBrands(trainers)
fillModels(trainers)
fillSizes(trainers)

const createSelectBrand = () => {
  const selectBrand = document.createElement('select')
  const defaultOptionA = document.createElement('option')
  defaultOptionA.value = ''
  defaultOptionA.textContent = 'Selecciona una marca'
  defaultOptionA.disabled = true
  defaultOptionA.selected = true
  selectBrand.appendChild(defaultOptionA)
  for (const brand of BRANDS) {
    const optionsBrand = document.createElement('option')
    optionsBrand.value = brand
    optionsBrand.textContent = brand
    selectBrand.appendChild(optionsBrand)
  }
  filterMenu.appendChild(selectBrand)
  return selectBrand
}

const createSelectModels = () => {
  const selectModel = document.createElement('select')
  const defaultOptionB = document.createElement('option')
  defaultOptionB.value = ''
  defaultOptionB.textContent = 'Selecciona un modelo'
  defaultOptionB.disabled = true
  defaultOptionB.selected = true
  selectModel.appendChild(defaultOptionB)
  for (const model of MODELS) {
    const optionsModel = document.createElement('option')
    optionsModel.value = model
    optionsModel.textContent = model
    selectModel.appendChild(optionsModel)
  }
  filterMenu.appendChild(selectModel)
  return selectModel
}

const createSelectSize = () => {
  const selectSize = document.createElement('select')
  const defaultOptionC = document.createElement('option')
  defaultOptionC.value = ''
  defaultOptionC.textContent = 'Selecciona una talla'
  defaultOptionC.disabled = true
  defaultOptionC.selected = true
  selectSize.appendChild(defaultOptionC)
  for (const size of SIZES) {
    const optionSize = document.createElement('option')
    optionSize.value = size
    optionSize.textContent = size
    selectSize.appendChild(optionSize)
  }
  filterMenu.appendChild(selectSize)
  return selectSize
}

const selectBrand = createSelectBrand()
const selectModel = createSelectModels()
const selectSize = createSelectSize()

const printTrainers = (trainersToPrint) => {
  divTrainers.innerHTML = ''
  for (const trainer of trainersToPrint) {
    const divTrainer = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const brand = document.createElement('h2')

    const divModelPrice = document.createElement('div')
    const model = document.createElement('h3')
    const price = document.createElement('p')

    const buy = document.createElement('button')

    img.src = trainer.img
    brand.textContent = trainer.brand
    model.textContent = trainer.model
    price.textContent = trainer.price
    buy.textContent = trainer.buy

    divTrainers.appendChild(divTrainer)
    divTrainer.classList.add('card', 'flex-container-a')
    divTrainer.appendChild(divImg)
    divImg.appendChild(img)
    divImg.classList.add('divImg')
    divTrainer.appendChild(brand)
    divModelPrice.appendChild(model)
    divModelPrice.appendChild(price)
    divTrainer.appendChild(divModelPrice)
    divModelPrice.classList.add('divModelPrice')
    price.classList.add('price')
    divTrainer.appendChild(buy)
    buy.classList.add('buy', 'flex-container-b')
  }
}

printTrainers(trainers)

const filter = document.createElement('button')
filter.textContent = 'Filtrar'
filterMenu.appendChild(filter)
filter.classList.add('filter', 'filClin')

const clean = document.createElement('button')
clean.textContent = 'Limpiar'
filterMenu.appendChild(clean)
clean.classList.add('clean', 'filClin')

filter.addEventListener('click', () => {
  const selectedBrand = selectBrand.value
  const selectedModel = selectModel.value
  const selectedSize = selectSize.value

  const filteredTrainers = []

  for (const trainer of trainers) {
    const matchesBrand = selectedBrand === '' || trainer.brand === selectedBrand
    const matchesModel = selectedModel === '' || trainer.model === selectedModel
    const matchesSize = selectedSize === '' || trainer.size === selectedSize

    if (matchesBrand && matchesModel && matchesSize) {
      filteredTrainers.push(trainer)
    }
  }

  const existingMessage = document.querySelector('.suggestionMessage')
  if (existingMessage) {
    existingMessage.remove()
  }

  if (filteredTrainers.length > 0) {
    printTrainers(filteredTrainers)
  } else {
    const suggestedProducts = []
    const usedProducts = {}

    for (let i = 0; i < trainers.length && suggestedProducts.length < 3; i++) {
      const randomTrainers = Math.floor(Math.random() * trainers.length)
      if (!usedProducts[randomTrainers]) {
        suggestedProducts.push(trainers[randomTrainers])
        usedProducts[randomTrainers] = true
      }
    }

    printTrainers(suggestedProducts)

    const suggestionMessage = document.createElement('p')
    suggestionMessage.textContent =
      'No se encontró el producto deseado, ¡aquí tienes algunas sugerencias!'
    suggestionMessage.classList.add('suggestionMessage')
    sectTrainers.insertBefore(suggestionMessage, divTrainers)
  }
})

clean.addEventListener('click', () => {
  selectBrand.selectedIndex = 0
  selectModel.selectedIndex = 0
  selectSize.selectedIndex = 0

  fillBrands(trainers)
  fillModels(trainers)
  fillSizes(trainers)

  selectBrand.innerHTML = ''
  const defaultOptionA = document.createElement('option')
  defaultOptionA.value = ''
  defaultOptionA.textContent = 'Selecciona una marca'
  defaultOptionA.disabled = true
  defaultOptionA.selected = true
  selectBrand.appendChild(defaultOptionA)
  for (const brand of BRANDS) {
    const optionsBrand = document.createElement('option')
    optionsBrand.value = brand
    optionsBrand.textContent = brand
    selectBrand.appendChild(optionsBrand)
  }

  selectModel.innerHTML = ''
  const defaultOptionB = document.createElement('option')
  defaultOptionB.value = ''
  defaultOptionB.textContent = 'Selecciona un modelo'
  defaultOptionB.disabled = true
  defaultOptionB.selected = true
  selectModel.appendChild(defaultOptionB)
  for (const model of MODELS) {
    const optionsModel = document.createElement('option')
    optionsModel.value = model
    optionsModel.textContent = model
    selectModel.appendChild(optionsModel)
  }

  selectSize.innerHTML = ''
  const defaultOptionC = document.createElement('option')
  defaultOptionC.value = ''
  defaultOptionC.textContent = 'Selecciona una talla'
  defaultOptionC.disabled = true
  defaultOptionC.selected = true
  selectSize.appendChild(defaultOptionC)
  for (const size of SIZES) {
    const optionSize = document.createElement('option')
    optionSize.value = size
    optionSize.textContent = size
    selectSize.appendChild(optionSize)
  }

  printTrainers(trainers)

  const existingMessage = document.querySelector('.suggestionMessage')
  if (existingMessage) {
    existingMessage.remove()
  }
})

selectBrand.addEventListener('change', () => {
  const selectedBrand = selectBrand.value
  const selectedModel = selectModel.value

  const filteredModels = []

  for (const trainer of trainers) {
    if (trainer.brand === selectedBrand) {
      if (!filteredModels.includes(trainer.model)) {
        filteredModels.push(trainer.model)
      }
    }
  }

  selectModel.innerHTML = ''

  const defaultOptionB = document.createElement('option')
  defaultOptionB.value = ''
  defaultOptionB.textContent = 'Selecciona un modelo'
  defaultOptionB.disabled = true
  defaultOptionB.selected = true
  selectModel.appendChild(defaultOptionB)

  for (const model of filteredModels) {
    const option = document.createElement('option')
    option.value = model
    option.textContent = model
    selectModel.appendChild(option)
  }

  if (selectedModel && filteredModels.includes(selectedModel)) {
    selectModel.value = selectedModel
  } else {
    selectModel.selectedIndex = 0
  }
})

selectModel.addEventListener('change', () => {
  const selectedModel = selectModel.value
  const selectedBrand = selectBrand.value

  const filteredBrands = []

  for (const trainer of trainers) {
    if (trainer.model === selectedModel) {
      if (!filteredBrands.includes(trainer.brand)) {
        filteredBrands.push(trainer.brand)
      }
    }
  }

  selectBrand.innerHTML = ''

  const defaultOptionA = document.createElement('option')
  defaultOptionA.value = ''
  defaultOptionA.textContent = 'Selecciona una marca'
  defaultOptionA.disabled = true
  defaultOptionA.selected = true
  selectBrand.appendChild(defaultOptionA)

  for (const brand of filteredBrands) {
    const option = document.createElement('option')
    option.value = brand
    option.textContent = brand
    selectBrand.appendChild(option)
  }

  if (selectedBrand && filteredBrands.includes(selectedBrand)) {
    selectBrand.value = selectedBrand
  } else {
    selectBrand.selectedIndex = 0
  }
})

const footer = document.createElement('footer')
document.body.appendChild(footer)
footer.classList.add('footer', 'flex-container')

const footerSect = document.createElement('Section')
footer.appendChild(footerSect)
footerSect.classList.add('footerSect', 'flex-container')

const footerCards = [
  {
    id: 1,
    h3: 'Compra con JD',
    lis: [
      'Guía de tallas',
      'Buscador de tallas',
      'Descuento de estudiantes',
      'Calendario lanzamientos',
      'Inscríbete a JDX',
      'JD Blog'
    ]
  },
  {
    id: 2,
    h3: 'Atención al cliente',
    lis: [
      'Preguntas frecuentes',
      'Envíos y devoluciones',
      'Seguimiento de envío',
      'Contacto'
    ]
  },
  {
    id: 3,
    h3: 'Aviso legal',
    lis: [
      'Términos y condiciones',
      'Promociones y condiciones',
      'Política de privacidad',
      'Política de Cookies',
      'Ajustes de Cookies',
      'Accesibilidad'
    ]
  }
]

const printFooter = (footerCards) => {
  footerSect.innerHTML = ''
  for (const footerCard of footerCards) {
    const footerDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')

    h3.textContent = footerCard.h3
    footerSect.appendChild(footerDiv)
    footerDiv.classList.add('footerDiv')
    footerDiv.appendChild(h3)
    footerDiv.appendChild(ul)

    for (const li of footerCard.lis) {
      const footerlis = document.createElement('li')
      footerlis.textContent = li
      ul.appendChild(footerlis)
    }
  }
}
printFooter(footerCards)
