export interface ICalegariLocalDataService {

    get(key: string): string|JSON|null;
    insert(key: string, value: JSON): void;
    delete(key: string): void;
}