module.exports = function longestConsecutiveLength(array) {
    let set = new Set(array);
    let maxLength = 0;
    let step = 1;
    let canFindNext = true;

    set.forEach((value) => {
        while(canFindNext) {
            if(set.has(value + step)) {
                set.delete(value+step);
                step++;
            }
            else canFindNext = false;
        }
        if(step > maxLength) maxLength = step;
        step = 1;
        canFindNext = true;
    });

    return maxLength;
};
