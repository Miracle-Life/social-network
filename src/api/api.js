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
    getProfileUser(userId) {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(res => res.data)
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    }
}


