const axios = require('axios');

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

// async function fetch(){
//     const res = await axios({
//         method: 'DELETE',
//         url: 'http://localhost:3000/buidls/delete/12233svfrf',
//         headers: {
//           'Content-Type':'application/json',
//         },
//         data: JSON.stringify({
//           id: '12233svfrf',
//           website: "https://github.com/gominima",
//           github: "sfwef",
//           email: "frg"

//         }),
//       });

//     console.log(res)
// }

// fetch()

// async function fetch(){
//         const res = await axios({
//             method: 'GET',
//             url: 'http://localhost:3000/mint/Plutera/0xapoo',
//             headers: {
//               'Content-Type':'application/json',
//             },
//             data: {
//               id: "Plutera",
//               website: "https://plutera.app",
//               email: "help@plutera.app"

//             }
//           });

//         console.log(res)
//     }

async function fetch() {
  const res = await axios({
    method: 'POST',
    url: 'http://localhost:4000/users/create',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      address: '0xapoo'
    }
  });
  console.log(res)
}

fetch();
