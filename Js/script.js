function valueUpdate(valueID, value) {
    const updatePrice = document.getElementById(valueID);
    updatePrice.innerText = value;
}



function updateTotalValue() {

    const ramPrice = parseInt(document.getElementById('extra-memory-price').innerText);

    console.log(ramPrice);

    const storagePrice = parseInt(document.getElementById('extra-storage-price').innerText);
    console.log(storagePrice);

    const deliveryCharge = parseInt(document.getElementById('delivery=charge').innerText);
    console.log(deliveryCharge);


    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    console.log(bestPrice);


    const totalValue = document.getElementById('total-price');
    totalValue.innerText = bestPrice + ramPrice + storagePrice + deliveryCharge;
    const finalPrice = document.getElementById('final-price');
    finalPrice.innerText = totalValue.innerText;


}



////////////////////////////////// Ram Section Starts ////////////////////////////////
document.getElementById('8gb-ram').addEventListener('click', function () {

    valueUpdate('extra-memory-price', 0);
    updateTotalValue();


});



document.getElementById('16gb-ram').addEventListener('click', function () {

    valueUpdate('extra-memory-price', 180);
    updateTotalValue();


})
////////////////////////////////// Ram Section End ////////////////////////////////




////////////////////////////////// Storage Section Start ////////////////////////////////
document.getElementById('256gb-storage').addEventListener('click', function () {

    valueUpdate('extra-storage-price', 0);
    updateTotalValue();

})


document.getElementById('512gb-storage').addEventListener('click', function () {

    valueUpdate('extra-storage-price', 100);
    updateTotalValue();
})




document.getElementById('1tb-storage').addEventListener('click', function () {

    valueUpdate('extra-storage-price', 180);
    updateTotalValue();
})

////////////////////////////////// Storage Section End ////////////////////////////////





////////////////////////////////// Delivery Section Start ////////////////////////////////

document.getElementById('slow-delivery').addEventListener('click', function () {

    valueUpdate('delivery=charge', 0);
    updateTotalValue();

})

document.getElementById('fast-delivery').addEventListener('click', function () {

    valueUpdate('delivery=charge', 20);
    updateTotalValue();

})
////////////////////////////////// Storage Section End ////////////////////////////////


document.getElementById('cupon-button').addEventListener('click', function () {
    const cuponCode = document.getElementById('cupon-code').value;
    const totalPrice = document.getElementById('total-price').innerText;
    const finalPrice = document.getElementById('final-price');

    if (cuponCode == 'stevekaku') {
        finalPrice.innerText = totalPrice * 0.8;
        console.log('Paiya gesi');
    } else {
        console.log('Painai ');
    }
})