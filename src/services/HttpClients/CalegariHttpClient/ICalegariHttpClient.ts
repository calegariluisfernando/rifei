export interface ICalegariHttpClient {
    get: (url: string) => Promise<string|JSON|null>,
    post: (url: string, data: string|JSON|null) => Promise<string|JSON|null>,
    put: (url: string, data: string|JSON|null) => Promise<string|JSON|null>,
    delete: (url: string) => Promise<string|JSON|null>
}