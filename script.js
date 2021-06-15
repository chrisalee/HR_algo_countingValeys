/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

const countingValleys = (steps, path) => {
    // Write your code here
    let currentLevel = 0;
    let valleyCount = 0;
    let valleyStatus = false;
    let pathArr = path.split('');
    // console.log(pathArr);
    
    pathArr.forEach(step => {
        step === 'D' ? currentLevel-- : currentLevel++;
        
        if(currentLevel < 0 && !valleyStatus) {
            valleyCount++;
            valleyStatus = true;
        } else if(currentLevel >= 0 && valleyStatus) {
            valleyStatus = false;
        }
    });
    console.log(valleyCount);
    return valleyCount;
}
