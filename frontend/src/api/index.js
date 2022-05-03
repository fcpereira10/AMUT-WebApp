
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.110:3000/api',
})

export const insertActivity = payload => api.post(`/atividade`, payload)
export const getAllActivities = () => api.get(`/atividades`)
export const updateActivityById = (id, payload) => api.put(`/atividade/${id}`, payload)
export const deleteActivityById = id => api.delete(`/atividade/${id}`)
export const getActivityById = id => api.get(`/atividades/${id}`)

const apis = {
    insertActivity,
    getAllActivities,
    updateActivityById,
    deleteActivityById,
    getActivityById,
}

export default apis