/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    function compareFn(a, b) {
        return a - b;
    }

    let int = data.split(',');
    int.sort(compareFn);
    return int.join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    function isBigEnough(value) {
        return value < 100;
    }
    let cur;
    let arr = [];
    arr = data.filter(isBigEnough);
    return arr;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arr = [];
    let count = 0;

    for (let i = 0; i < 5; i++) {
        arr[count] = array1[i];
        arr[count + 1] = array2[i];
        count += 2;
    }
    return arr;
}
