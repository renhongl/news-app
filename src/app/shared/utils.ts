import { HttpHeaders } from '@angular/common/http';

export const translateDate = (date) => {
    // dateString.replace(/-/g, '/');
    // const date = new Date(dateString).getTime();
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
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVkMTk4NDVmZmMxY2MzMjY5Y2I5N2Y5YSIsInVzZXJuYW1lIjoibHJoIiwicGFzc3dvcmQiOiIkMmIkMDUkbzh0ZnlLbEdWb1NhUnZIWnB0NWt3T3I2NXFuREpURG9pMmdZa1hJV0RxeS5CNDA2ZXgzeUciLCJfX3YiOjB9LCJleHAiOjE1NjIxNDk3NjcsImlhdCI6MTU2MjE0NjE2N30.DzFTOPrHEJB0gEVJONK5QOFJWETFAYcXSLBpr3C-9-s';
    // let headers = new HttpHeaders();
    // headers = headers.append('token', token);
    // return headers;
    return null;
};
