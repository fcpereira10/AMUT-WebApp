
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
//Activities
export const insertActivity = payload => api.post(`/activity`, payload)
export const getAllActivities = () => api.get(`/activities`)
export const getMostRecentActivity = () => api.get(`/activities/recent`)
export const updateActivityById = (id, payload) => api.put(`/activity/${id}`, payload)
export const deleteActivityById = id => api.delete(`/activity/${id}`)
export const getActivityById = id => api.get(`/activity/${id}`)
export const uploadActivityImage = payload => api.post(`/uploadactivityimage`, payload);
//News
export const insertArticle = payload => api.post(`/article`, payload)
export const getAllNews = () => api.get(`/news`)
export const getMostRecentArticle = () => api.get(`/news/recent`)
export const updateArticleById = (id, payload) => api.put(`/article/${id}`, payload)
export const deleteArticleById = id => api.delete(`/article/${id}`)
export const getArticleById = id => api.get(`/article/${id}`)
export const uploadArticleImage = payload => api.post(`/uploadarticleimage`, payload);
//Users
export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)


const apis = {
    //Activities
    insertActivity,
    getAllActivities,
    updateActivityById,
    deleteActivityById,
    getActivityById,
    getMostRecentActivity,
    uploadActivityImage,
    //News
    insertArticle,
    getAllNews,
    updateArticleById,
    deleteArticleById,
    getArticleById,
    getMostRecentArticle,
    uploadArticleImage,
    //News
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis