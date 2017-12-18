const store = {};

export default class DownloadCache {

    static get(id) {
        return store[id];
    }

    static set(id, data) {
        store[id] = data;
    }

}

