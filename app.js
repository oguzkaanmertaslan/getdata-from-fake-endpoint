
import axios from 'axios'
async function getData(number){
    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+number)
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?id="+number)
    return {user,"posts: ":post}
}

 export default getData;


//PROMISE Yapısı
 //  const  getUser=(param1)=>{
//     return new Promise(async(resolve,reject)=>{
//         const {data} = await axios("https://jsonplaceholder.typicode.com/users/"+param1)

//         resolve(data)
//     })    
// }
// const  getPost=(param2)=>{
//     return new Promise(async(resolve,reject)=>{
//         const {data} = await axios("https://jsonplaceholder.typicode.com/posts?id="+param2)
//         resolve(data)
//     })    
// }
// async function getData(number){
//              const users=await  getUser(number)
//              .then((data)=>console.log(data))
//               .catch((e)=>console.log("hata"))
//               const post1= await getPost(number)
//                .then((data)=>console.log(data))
//                .catch((e)=>console.log("hata"))
// }
//Promise.all kullanarak yazdırma
// Promise.all([getUser(1),getPost(1)]).then((data)=>console.log(data)).catch((e)=>console.log("hata"))