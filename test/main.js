const axios = require("axios")

async function fetch(){
    const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/users/create',
        headers: {
          'Content-Type':'application/json',
        },
        data: JSON.stringify({
          id: 'Fred',
          name: 'Flintstone'
        }),
      });

    console.log(res)
}

fetch()