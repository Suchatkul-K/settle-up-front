import axios from "../config/axios"

export const getCircleByCircleId = (id) => axios.get(`/circle/${id}`)
