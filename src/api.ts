// src/api.ts
import axios from 'axios';
import { API_BASE_URL } from '../public/constants/api.constant';

export class SpaceTraderAPI {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async getMyShips() {
    try {
      const response = await axios.get(`${API_BASE_URL}/my/ships`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching ships:', error);
      throw error;
    }
  }

  
}