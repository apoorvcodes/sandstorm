import { connect, set } from 'mongoose';

export async function mongoConnect(pass: string) {
  set('strictQuery', false);
  connect(pass, {
    connectTimeoutMS: 10000
  })
    .then(() => {
      console.log('DataBase Connected');
    })
    .catch((err: Error) => {
      console.log(err);
    });
}
