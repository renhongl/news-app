

export const translateDate = (dateString) => {
    let date = new Date(dateString).getTime();
    let now = Date.now();
    let time = Math.ceil((now - date) / 1000 / 60);
    let c = '分钟';
    if (time > 60) {
        time = Math.ceil(time / 60);
        c = '小时';
    }
    return `${time} ${c}`;
};