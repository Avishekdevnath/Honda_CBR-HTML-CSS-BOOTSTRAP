////////////////////////////////////////////////
//////////// Updating Value ////////////////////
////////////////////////////////////////////////

function valueUpdate(valueID, value) {
    const updatePrice = document.getElementById(valueID);
    updatePrice.innerText = value;
}


////////////////////////////////////////////////
//////////// Updating Total Value //////////////
////////////////////////////////////////////////

function updateTotalValue() {

    const ramPrice = parseInt(document.getElementById('extra-memory-price').innerText);

    const storagePrice = parseInt(document.getElementById('extra-storage-price').innerText);

    const deliveryCharge = parseInt(document.getElementById('delivery=charge').innerText);

    const bestPrice = parseInt(document.getElementById('best-price').innerText);



    ////////////////////// Final Calculation ////////////////////////

    const totalValue = document.getElementById('total-price');
    totalValue.innerText = bestPrice + ramPrice + storagePrice + deliveryCharge;
    const finalPrice = document.getElementById('final-price');
    finalPrice.innerText = totalValue.innerText;


}



//////////////////////   Ram Section Starts    //////////////////

document.getElementById('8gb-ram').addEventListener('click', function () {

    valueUpdate('extra-memory-price', 0);
    updateTotalValue();


});



document.getElementById('16gb-ram').addEventListener('click', function () {

    valueUpdate('extra-memory-price', 180);
    updateTotalValue();

})
///////////////////////// Ram Section End /////////////////////////




/////////////////////// Storage Section Start /////////////////////////
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



//////////////////////////////////////////////////////////////
///////////// Cupon Code Checking "stevekaku" ////////////////
//////////////////////////////////////////////////////////////

document.getElementById('cupon-button').addEventListener('click', function () {
    const cuponCode = document.getElementById('cupon-code');

    const totalPrice = document.getElementById('total-price').innerText;
    const finalPrice = document.getElementById('final-price');

    ///////////   Matching Condition ///////////
    if (cuponCode.value == 'stevekaku') {
        finalPrice.innerText = totalPrice * 0.8;

    }
    cuponCode.value = '';
})