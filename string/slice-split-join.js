const address = 'kapasia'
const part = address.slice(1,5);
console.log(part);



const sentence = "I am a good and hardworking person";
console.log(sentence.split('a'));


// const friendList = 'ashik,hasan, alamin, habiz, nazrul,shadin,rayhan, arif, dip,simon';
// const friend = friendList.split(',')
// console.log(friend);


const friendList = ['ashik','hasan', 'alamin', 'habiz', 'nazrul','shadin','rayhan', 'arif', 'dip','simon'];
console.log(friendList.join());
console.log(friendList.join('|'));
console.log(friendList.join('-'));