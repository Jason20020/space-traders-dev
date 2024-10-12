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

  async getMyAgent() {
    try {
      const response = await axios.get(`${API_BASE_URL}/my/agent`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching agent: ', error);
      throw error;
    }
  }

  async getMyLocation() {
    try {
      const response = await axios.get(`${API_BASE_URL}/systems/agent/waypoints/`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Location: ', error);
      throw error;
    }
  }
}