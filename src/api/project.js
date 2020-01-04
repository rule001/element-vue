export function getProjectList() {
    const url = '/api/project/list'
    return $axios.get(url)
}