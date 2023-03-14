const navEmail = document.querySelector('.navbar-email')
navEmail.addEventListener('click' , toggleDesktopMenu)
const desktopMenu = document.querySelector('.desktop-menu')

const iconBurguerMenu = document.querySelector('.icon-menu')
iconBurguerMenu.addEventListener('click' , toggleMobileMenu)
const mobileMenu = document.querySelector('.mobile-menu')

const iconShoppingCar = document.querySelector('.navbar-shopping-cart')
iconShoppingCar.addEventListener('click' , toggleShoppingDetail)
const shoppingDetail = document.querySelector('.shopping-detail')

const shoppingDetailClose = document.querySelector('.shopping-detail-close')
shoppingDetailClose.addEventListener('click' , toggleShoppingDetail)

const productDetail = document.querySelector('.product-detail')

const imgProductDetailClose = document.querySelector('.product-detail-close')
imgProductDetailClose.addEventListener('click' , closeProductDetail)

const cardsContainer = document.querySelector('.cards-container')





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

    if (desktopMenu || mobileMenu || productDetail) {
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
        productDetail.classList.add('inactive')
    }
}
function openProductDetail() {
    productDetail.classList.remove('inactive')
    
    desktopMenu.classList.add('inactive')
    shoppingDetail.classList.add('inactive')
}
function closeProductDetail() {
    productDetail.classList.add('inactive')
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
        productImg.addEventListener('click' , openProductDetail)
    
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
