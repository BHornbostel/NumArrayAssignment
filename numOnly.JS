function numonly(arr){
    for(var i =0;i<arr.length();i++){
        if (typeof arr[i]!=="number"){
            pop(arr[i]);
        }
    }
    return arr;
}