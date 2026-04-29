  // convert a string to all lowercase with JavaScript ('Good Morning' => 'good morning')
    const str="Good MorNing";
    console.log(str.toLowerCase());
    
    // repeat a string many times ('test' 2 times => 'testtest')
    const cons= 'Test';
    console.log(cons.repeat(3));
    
    
    
// Create a function isSameProduct(product1, product2), which returns true if 2 products have the same values inside (‘name’ and ‘price’). If not, return false. Create 2 products and try out the function.
//Hint: objects are references so you can’t compare them directly).
product1={
      name:'Shirt',
      price:500
    };
    product2={
      name:'Shirt',
      price:400
    };
    product3={
      name:'Shirt',
      price:500
    };
function isSameProduct(product1,product2){
    if(product1.name===product2.name && product1.price===product2.price){
    return true;
    }else{
    return false;
    }
    }
    console.log(isSameProduct(product1,product2));
    console.log(isSameProduct(product1,product3));