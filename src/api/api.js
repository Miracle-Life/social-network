import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {"API-KEY": "5ead7a43-483a-418c-a00b-db5f528990e2"}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(res => res.data)
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}
// debugger
export const profileAPI = {
    getProfileUser(userId) {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(res => res.data)
    },

    updateUserStatus(status) {
        return instance.put(`/profile/status`, {status: status})
            .then(res => res.data)
    }
}



