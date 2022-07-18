import {appFetch} from "@/utilites/appFetch";
import {Projects as routes} from "@/api/routes";

export default {
    async all(page: number = 1) {
        return await appFetch(routes.All, {
            page: page,
        });
    },
    async getProject(projectId: number) {
        return await appFetch(routes.Get);
    },
    async save(project: object) {
        return await appFetch(routes.Save, project);
    },

} as Api
