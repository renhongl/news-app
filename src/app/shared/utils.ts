

export const translateDate = (dateStamp) => {
    let now = Date.now() / 1000;
    let time = Math.ceil((now - dateStamp) / 1000 * 60);
    let c = '分钟';
    if (time > 60) {
        time = Math.ceil(time / 60);
        c = '小时';
    }
    return `${time} ${c}`;
};