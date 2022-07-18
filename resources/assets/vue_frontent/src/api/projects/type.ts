
interface Api {
    all: (page: number) => Promise<any>,
    getProject: (projectId: number) => Promise<any>,
    save: () => Promise<any>,
}
