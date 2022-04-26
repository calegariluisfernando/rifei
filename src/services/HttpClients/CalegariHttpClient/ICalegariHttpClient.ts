export interface ICalegariHttpResponse {
    statusCode: number,
    data: string
}

export interface ICalegariHttpClient {
    get: (url: string) => Promise<ICalegariHttpResponse>,
    post: (url: string, data: any) => Promise<ICalegariHttpResponse>,
    put: (url: string, data: any) => Promise<ICalegariHttpResponse>,
    delete: (url: string) => Promise<ICalegariHttpResponse>
}