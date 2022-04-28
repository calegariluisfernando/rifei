export interface ICalegariLocalDataService {

    get(key: string): string|null;
    insert(key: string, value: string): void;
    delete(key: string): void;
}