import axios from "../config/axios"

export const getCircleByCircleId = (circleId) => axios.get(`/circle/${circleId}`)
export const addBot = (circleId,data) => axios.post(`/circle/${circleId}/members`, data)
export const updateBot = (circleId,memberId,data) => axios.patch(`/circle/${circleId}/members/${memberId}`, data)
export const getCircleMemberByCircleId = (circleId) => axios.get(`/circle/${circleId}/members`)
export const deleteMemberByMemberId = (circleId, memberId) => axios.delete(`/circle/${circleId}/members/${memberId}`)
export const getCircleBillByCircleId = (circleId) => axios.get(`/circle/${circleId}/bills`)
export const createBill = (circleId,data) => axios.post(`/circle/${circleId}/bills`, data)
export const updateBillByBillId = (circleId, billId, data) => axios.patch(`/circle/${circleId}/bills/${billId}`, data)
export const deleteBillByBillId = (circleId, billId) => axios.delete(`/circle/${circleId}/bills/${billId}`)