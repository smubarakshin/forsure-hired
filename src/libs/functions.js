import axios from "axios"

const API_URL = "https://json-server-tpl.adaptable.app"

/**
 * Obtener la lista de compañías desde la API.
 * @returns {Promise<Array>} Una promesa que resuelve en un array de compañías.
 */

export async function getCompanies() {
    try {
        const response = await axios.get(`${API_URL}/companies`)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

/**
 * Obtener la lista de empleos desde la API.
 * @returns {Promise<Array>} Una promesa que resuelve en un array de empleos.
 */

export async function getJobs() {
    try {
        const response = await axios.get(`${API_URL}/jobs`)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}