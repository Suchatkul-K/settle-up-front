import axios from "../config/axios"

export const createCircle = data => axios.post('/user/create',data)
export const getUserCircle = () => axios.get('/user/circles')
export const updateCircle = data => axios.patch('/user/circles',data)