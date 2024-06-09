function arrayMap(arr, target) {
    let Sum = 0; 
    let left = 0; 

    for (let right = 0; right < arr.length; right++) {
        Sum += arr[right];

        while (Sum > target) {
            Sum -= arr[left];
            left++; 
        }

        if (Sum === target) {
            return true;
        }
    }

    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(arrayMap(arr, target)); 
