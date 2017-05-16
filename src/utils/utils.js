export function datetime_to_unix(datetime) {
    var tmp_datetime = datetime.replace(/:/g, '-');
    tmp_datetime = tmp_datetime.replace(/ /g, '-');
    var arr = tmp_datetime.split("-");
    var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
    return parseInt(now.getTime() / 1000);
}

export function formatSeconds(time) {
    let hours = parseInt(time / 3600)
    hours = hours === 0 ? '' : (hours + '小时')
    let minutes = parseInt(time % 3600 / 60)
    minutes = minutes === 0 ? '' : (minutes + '分')
    let seconds = parseInt(time % 3600 % 60)
    seconds = seconds + '秒'
    return hours + minutes + seconds
}
