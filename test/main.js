const axios = require("axios")





// async function fetch(){
//         const res = await axios({
//             method: 'GET',
//             url: 'http://localhost:3000/users/read/alfred',
//             headers: {
//               'Content-Type':'application/json',
//             },
//           });
    
//         console.log(res)
//     }
    
//  fetch()



// async function fetch(){
//     const res = await axios({
//         method: 'GET',
//         url: 'http://localhost:3000/users/read/Fred',
//         headers: {
//           'Content-Type':'application/json',
//         },
//       });

//     console.log(res)
// }

// fetch()



async function fetch(){
    const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/buidls/create/Fred',
        headers: {
          'Content-Type':'application/json',
        },
        data: JSON.stringify({
          id: '12233svfrf',
          website: "https://github.com/apoorvcodes",
          github: "sfwef",
          email: "frg"

        }),
      });

    console.log(res)
}

fetch()
