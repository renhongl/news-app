

export const translateDate = (dateString) => {
    dateString.replace(/-/g, '/');
    const date = new Date(dateString).getTime();
    const now = Date.now();
    let time = Math.ceil((now - date) / 1000 / 60);
    let c = '分钟';
    if (time > 60) {
        time = Math.ceil(time / 60);
        c = '小时';
    }
    return `${time} ${c}`;
};

export const parseHtml = (html) => {
    return html.replace(/http:/g, 'https:');
}