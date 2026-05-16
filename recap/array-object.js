// 21-4 Find the cheapest phone from an array of phone objects

const phones = [
    {name:'samsung', price:20000, camera:'12mp', color: 'black'},
    {name:'sony', price:15000, camera:'12mp', color: 'black'},
    {name:'Iphone', price:100000, camera:'12mp', color: 'black'},
    {name:'pixel', price:20000, camera:'12mp', color: 'black'},
    {name:'oppo', price:20000, camera:'12mp', color: 'black'},
    {name:'redme', price:20000, camera:'12mp', color: 'black'},
]


function getChepestPhone(phones){
     let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.price){
            min= phone;
        }
    }
    return min;
}

const cheap = getChepestPhone(phones);
console.log('cheapest phone is:', cheap);


