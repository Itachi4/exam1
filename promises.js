const newMobile = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const num = Math.random();
    if(num<0.5){
    resolve();
    }
    else{
        reject();    
    }
    },3000);
    });
    };
    newMobile().then(()=>{
    console.log("new mobile");
    }).catch(()=>{
    console.log("old mobile");
    });

// const newMobile = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const num = Math.random();
//       if (num > 0.5) {
//         resolve();
//       } else {
//           reject();
//       }
//     }, 2000); 
//   });
   
  
//  newMobile.then(() => {
//     console.log(newMobile);
//     console.log('Promise is resolved!');
//   })
//   .catch(() => {
//     console.log('Promised is rejected!!!');
//     });
  