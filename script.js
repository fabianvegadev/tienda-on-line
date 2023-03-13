const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const iconBurguerMenu = document.querySelector('.icon-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const iconShoppingCar = document.querySelector('.navbar-shopping-cart')
const shoppingDetail = document.querySelector('.shopping-detail')

const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click' , toggleDesktopMenu)
iconBurguerMenu.addEventListener('click' , toggleMobileMenu)
iconShoppingCar.addEventListener('click' , toggleShoppingDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

    if (shoppingDetail) {
        shoppingDetail.classList.add('inactive')
    }
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}
function toggleShoppingDetail() {
    shoppingDetail.classList.toggle('inactive')

    if (desktopMenu || mobileMenu) {
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
    }
}

const productList = [];
productList.push({
    name: 'Jabón carbón activo',
    price: 25000,
    image: './products/jabonFacialCarbonActivo.png'
})
productList.push({
    name: 'Jabón',
    price: 25000,
    image: './products/jabonFacialCarbonActivo.png'
})
productList.push({
    name: 'Jabón',
    price: 25000,
    image: './products/jabonFacialCarbonActivo.png'
})
productList.push({
    name: 'Jabón',
    price: 25000,
    image: './products/jabonFacialCarbonActivo.png'
})
productList.push({
    name: 'Jabón',
    price: 25000,
    image: './products/jabonFacialCarbonActivo.png'
})
productList.push({
    name: 'Jabón',
    price: 25000,
    image: './products/jabonFacialCarbonActivo.png'
})

function pagProductList(array) {
    for (product of array) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src' , product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const divProductInfo = document.createElement('div')
        
        const pPrice = document.createElement('p')
        pPrice.innerText = '$' + product.price
        const pName = document.createElement('p')
        pName.innerText = product.name
    
        const figureProductInfo = document.createElement('figure')
    
        const logoImg = document.createElement('img')
        logoImg.setAttribute('src' , './icons/carrito+.svg')
    
    
        divProductInfo.appendChild(pPrice)
        divProductInfo.appendChild(pName)
    
        figureProductInfo.appendChild(logoImg)
    
        productInfo.appendChild(divProductInfo)
        productInfo.appendChild(figureProductInfo)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

pagProductList(productList)
