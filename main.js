let a=prompt("Enter your Name")
let b=prompt("Enter your food order")

let pro=new Promise((resolve,reject)=>{

    let tf=prompt("you want to place the order => Enter yes. otherwise Enter no")

    if(tf==yes){
        resolve(a,b)
    }
  
    else{
        reject(a,b)
    }
})

pro.then(()=>{

    console.log(`${a} - Order Name is ${b}. `)
    order()
}).catch(()=>{
    document.write("Sorry Your order is not placed")
})


function order(){
    setTimeout(() => {

       console.log("your "+ b + " order is placed")


       setTimeout(() => {

        console.log( b + "-Hub prepare the "+ b)

        setTimeout(() => {

            console.log("your "+ b + " on the way")

            setTimeout(()=>{
                delivery(a,b)
            },4000)
             
         }, 5000);
         
     }, 5000);


        
    }, 2000);
}


function delivery(a,b) {

    console.log("your "+ b + " Door step")

    setTimeout(()=>{
        alert(a+ " your "+ b +" is delivered")
    },2000)
  


}