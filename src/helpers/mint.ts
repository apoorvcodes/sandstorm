import axios from 'axios';
async function mintNft(
  stage: number,
  address: string,
  email: string
): Promise<void> {
  const res = await axios({
    method: 'POST',
    url: 'http://localhost:3000/mint/Plutera/0xapoo',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      id: 'Plutera',
      website: 'https://plutera.app',
      email: 'help@plutera.app'
    }
  });
}
