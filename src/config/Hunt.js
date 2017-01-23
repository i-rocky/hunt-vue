import config from './config'

let storage = null;
if(typeof Storage != 'undefined') {
    storage = {
        storage: {
            set(key, value) {
                return window.localStorage.setItem(key, value);
            },
            get(key) {
                return window.localStorage.getItem(key);
            },
            delete(key) {
                return window.localStorage.removeItem(key);
            }
        },
        updateToken(token) {
            this._token = token;
            return this.storage.set('_token', token);
        },
        deleteToken() {
            this._token = null;
            return this.storage.delete('_token');
        },
        getToken() {
            return this.storage.get('_token');
        }
    }
}
else {
    storage = {
        storage: {
            set(key, value) {
                let d = new Date();
                d.setTime(d.getTime() + 24*60*60*1000);
                let expires = 'expires=' + d.toUTCString();
                document.cookie = key+'='+value+';'+expires+';path=/';
            },
            get(key) {
                let name = key + "=";
                let ca = document.cookie.split(';');
                for(let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            },
            delete(key) {
                let d = new Date();
                d.setTime(d.getTime() - 24*60*60*1000);
                let expires = 'expires=' + d.toUTCString();
                return document.cookie = key+'=null;'+expires+';path=/';
            }
        },
        updateToken(token) {
            return this.storage.set('_token', token);
        },
        deleteToken() {
            this.storage.delete('_token');
        },
        getToken() {
            return this.storage.get('_token');
        }
    }
}
export default Object.assign({BASE_URL:config.BASE_URL, _token: storage.getToken()}, storage);