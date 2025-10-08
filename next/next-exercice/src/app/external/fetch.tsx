'use server'

import axios from "axios"

export async function fetchData() {
  const response = await axios.get("https://world.openfoodfacts.org/api/v2/search?code=3263859883713,8437011606013,6111069000451&fields=code,product_name,image_url,nutriments.energy")
  return response.data
}