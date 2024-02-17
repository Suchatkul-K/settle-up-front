import axios from "../config/axios"

export const register = user => axios.post('/auth/register',user)
export const login = data => axios.post('/auth/login',data)
export const fetchMe = () => axios.get('/auth/me')
export const updateUser = user => axios.patch('/user/me',user)