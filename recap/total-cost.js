const numbers = [300, 1000, 800, 1200];
const products = [
   {name: 'shampoo', price:300},
   {name: 'ghori', price:1000},
   {name: 'shirt', price:800},
   {name: 'pant', price:1200}
];

function getShoppingTotal (products){
    let total = 0;
    for(const product of products){
        total = total + product.price;

        
        
    }
    return total;


}
const total = getShoppingTotal(products);
console.log('total ajke kosabe:', total);
