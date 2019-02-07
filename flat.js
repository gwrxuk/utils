function flat_array(item){
      
       return item.reduce(function(accu,curr){
              return accu.concat(Array.isArray(curr) ? flat_array(curr):curr);
       },[]);
}
