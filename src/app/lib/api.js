import axios from "axios";
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
})
export const getModulesForCourse = (courseId) => {
    return api.get(`/modules?filters[course][id][$eq]=${courseId}&populate=course`);
};

export default api;