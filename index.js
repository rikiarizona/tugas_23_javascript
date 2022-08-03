function panggilFilt() {
    var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    var result = angka.filter(array => {
        return array > 15;
    })
    return result;
}
console.log(panggilFilt());