export default (n) => {
    const width = 4
    const z = '0';
    n = n + '';
    return (n.length >= width) ? n : new Array(width - n.length + 1).join(z) + n;
}
