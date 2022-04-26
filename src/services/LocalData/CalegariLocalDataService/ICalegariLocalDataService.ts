export interface ICalegariLocalDataService {

    get(key: string): any;
    insert(key: string, value: any): void;
    delete(key: string): void;
}