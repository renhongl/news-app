import { HttpHeaders } from '@angular/common/http';
import { SERVER } from './url';

export const translateDate = (date) => {
    const now = Date.now();
    let time = Math.floor((now - date) / 1000 / 60);
    let c = '分钟';
    if (time > 60) {
        time = Math.floor(time / 60);
        c = '小时';
    }
    return `${time} ${c}`;
};

export const parseHtml = (html) => {
    if (!html) {
        return;
    }
    return html.replace(/http:/g, 'https:');
};

export const createAuthHeader = () => {
    const token = 'temp-token';
    let headers = new HttpHeaders();
    headers = headers.append('token', token);
    return headers;
};

export const isArray = (target) => {
    return Object.prototype.toString.call(target) === '[object Array]';
};

export const isString = (target) => {
    return Object.prototype.toString.call(target) === '[object String]';
};

export const addPrefix = (target) => {
    if (isArray(target)) {
        return target.map(item => {
            if (!item.includes('http')) {
                return SERVER + '/' + item;
            }
            return item;
        });
    }
    if (isString(target) && !target.includes('http')) {
        return SERVER + '/' + target;
    }
    return target;
};

export const updateSession = (key, value) => {
    const auth = sessionStorage.getItem('aikan');
    if (auth) {
        const authObj = JSON.parse(auth);
        authObj.user[key] = value;
        sessionStorage.setItem('aikan', JSON.stringify(authObj));
    }
};







