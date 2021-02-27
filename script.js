var titleCaps=function(x){
    let newarr=[];
    for(var i in x){
        let a="";
        let newstr=x[i].toLowerCase().split(" ");
        for(var j in newstr){
            a=a+newstr[j].charAt(0).toUpperCase()+newstr[j].slice(1)+" ";
        }
        
        newarr.push(a.trim());
    }
    console.log(newarr);
}

titleCaps(["this is dibakar","hello world","this iS gUvi taSK"])