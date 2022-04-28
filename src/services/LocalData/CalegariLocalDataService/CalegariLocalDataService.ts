import { ICalegariLocalDataService } from "./ICalegariLocalDataService";

export default class CalegariLocalDataService implements ICalegariLocalDataService {

    private static _instance: CalegariLocalDataService;
    private _storage: Storage;

    private constructor() {

        this._storage = localStorage;
    }

    get storage(): Storage {

        return this._storage;
    }

    public static getInstance(): CalegariLocalDataService {

        if (!CalegariLocalDataService._instance) {

            CalegariLocalDataService._instance = new CalegariLocalDataService();
        }

        return CalegariLocalDataService._instance;
    }

    get(key: string): string|null {

        if (!key) {

            throw new Error("Param not found.");
        }

        const item = localStorage.getItem(key);
        return item || null;
    }

    insert(key: string, value: string): void {

        if (!key || !value) {

            throw new Error("Params not found.");
        }

        this.storage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    }

    delete(key: string): void {

        if (!key) {

            throw new Error("Param not found.");
        }

        this.storage.removeItem(key);
    }
}