export interface ICalegariLocalDataService {

    get(key: string): Object|null;
    insert(key: string, value: any): void;
    delete(key: string): void;
}