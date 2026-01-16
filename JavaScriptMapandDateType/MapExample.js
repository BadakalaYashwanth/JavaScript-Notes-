 var data = new Map();
    data.set(1, "Samsung TV");
    data.set("html", ['Normal Elements', 'Void Elements']);
    for(var item of data.entries()){
        console.log(item);
    }
    console.log(data.size)

    if(data.has('css')){
        console.log(data.get('css'))
    
    }else{
        console.log("CSS not found")
    }
