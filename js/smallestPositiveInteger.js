const arr = [1, 2, 3];
const arr2 = [1, 3, 6, 4, 1, 2, -2];
const arr3 = [-1, -3]
// [1, 3, 6, 4, 1, 2] -> 5

//  [1, 2, 3] - > 4

// [-1, -3] -> 1

const getFirstPositiveInteger = (arr) => {
    const sort = arr.filter( i => i > 0).sort();
  
    let output = 1;
    let comp = [];
    sort.forEach((i, idx) => {
        
        if(comp.length === 0) {
            comp.push(i);
            output = i + 1;
        } else { 
            if(comp[idx-1]){
                comp.push(i);
                if(comp[idx -1] + 1 === i){ 
                    output = i + 1
                } else {  
                    output = comp[idx-1] + 1;  
                }
            }
            
        }
    });
    console.log(output)
    return output; 
}

getFirstPositiveInteger(arr2)
