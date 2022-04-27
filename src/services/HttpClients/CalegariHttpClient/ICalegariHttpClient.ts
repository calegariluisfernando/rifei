export interface ICalegariHttpResponse {
    statusCode: number,
    data: string
}

export interface ICalegariHttpClient {
    get: (url: string) => Promise<ICalegariHttpResponse>,
    post: (url: string, data: JSON) => Promise<ICalegariHttpResponse>,
    put: (url: string, data: JSON) => Promise<ICalegariHttpResponse>,
    delete: (url: string) => Promise<ICalegariHttpResponse>
}