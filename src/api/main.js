import axios from "../config/axios"

export const getCircleByCircleId = (circleId) => axios.get(`/circle/${circleId}`)
export const addBot = (circleId,data) => axios.post(`/circle/${circleId}/members`, data)
export const getCircleMemberByCircleId = (circleId) => axios.get(`/circle/${circleId}/members`)
