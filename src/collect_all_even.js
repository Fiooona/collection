'use strict';
function collect_all_even(collection) {
    var r=[],k=0;
    for(var i=0;i<collection.length;i++){
        if((collection[i]%2)==0) {
            r[k]==collection[i]
            k++;
        }
    }
    return r;
}

module.exports = collect_all_even;
