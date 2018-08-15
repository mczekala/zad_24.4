const formatDate = (seconds = 0) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = Math.floor(seconds % 60);
    if (hours === 0) {
        if (minutes === 0) {
            return `${seconds}s`
        } else if (seconds === 0) {
            return `${minutes}m`
        }
        return `${minutes}m ${seconds}s`
    } else if ((minutes === 0) && (seconds === 0)) {
        return `${hours}h`;
    }
    if (minutes === 0) {
        return `${hours}h ${seconds}s`
    } else if (seconds === 0) {
        return `${hours}h ${minutes}m`
    }
    return `${hours}h ${minutes}m ${seconds}s`
}
module.exports = formatDate;