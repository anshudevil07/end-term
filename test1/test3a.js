
 function readable(author,title){
    if(obj.author=="Galvin" && obj.publisher=="Willey"){
        return true;
    }else{
        return false;
    }
}
        var obj={
            author:"Amitabh Bachhan",
            title:"the book",
            publisher:"Himanshu",
            Edition:2020,
        };
       console.log(readable(obj.author,obj.title));
       

