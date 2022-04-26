export interface ICalegariLocalDataService {

    get(key: string): any|null;
    insert(key: string, value: any): void;
    delete(key: string): void;
}