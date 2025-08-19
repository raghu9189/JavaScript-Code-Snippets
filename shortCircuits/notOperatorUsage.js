const userFound = {
    name: 'raghu',
    photoId: null,
    bio:{
        age: 24
    },
}
const userNotFound = {
    name: null,
    photoId: null,
    bio:null
}
// console.log(userNotFound.bio.age); // ❌ Cannot read properties of null (reading 'age')

if(!userNotFound.bio){
    console.log('User Not found');
}