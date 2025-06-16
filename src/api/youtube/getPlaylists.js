// @vendors
import axios from 'axios';

const API_URL = process.env.VITE_API_URL;

export async function fetchPlaylistsData() {
  try {

    const response = await axios.get(`${API_URL}api/v1/youtube/`, {
      headers: {
        Accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch YouTube data:', error);
    throw new Error('Failed to fetch YouTube data');
  }
}