// 12 inch 1 feet


function inchToFeet (inch){
    const feet = inch /12;
    return  feet
}

const sajidHeight = inchToFeet(75);
console.log(sajidHeight);



function millTOKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const rastarMap = millTOKilometer(4);
const rastarMap2 = kiloMeterToMiles(4);
console.log(rastarMap, rastarMap2);
