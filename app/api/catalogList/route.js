import axios from 'axios';

export async function GET(request) {
  try {
    const response = await axios.get('https://api.example.com/catalog');
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch catalog' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}