class TodoList{
    constructor(name, stat){
        this.name = name;
        this.stat = stat;
    }
}
var list = [];
if(JSON.parse(localStorage.getItem("TodoList"))!=null){
    list = JSON.parse(localStorage.getItem("TodoList"));
}

function show(){
    var tdlist = JSON.parse(localStorage.getItem("TodoList"));
    document.getElementById("todolist").innerHTML = "";
    if(tdlist != null){
        for(var i = 0; i<tdlist.length; i++){
            if(tdlist[i].stat == true){
                document.getElementById("todolist").innerHTML += "<li class='done'>"+ tdlist[i].name +"<button id='btndel1' onclick = del("+ i +")>x</button>"+"<button id='btndone1' onclick = done("+ i +")>v</button>"+"</li>"+"</br>";
            }
            else{
                document.getElementById("todolist").innerHTML += "<li>"+ tdlist[i].name +"<button id='btndel' onclick = del("+ i +")>x</button>"+"<button id='btndone' onclick = done("+ i +")>v</button>"+"</li>"+"</br>";
            }
        }
    }
}



window.onload = function(){
   
    var btnadd = document.getElementById("btnadd");
    btnadd.onclick = function(e){
        var name = document.getElementById("title").value;
        var td = new TodoList(name,false);
        list.push(td);
        var todostr = JSON.stringify(list);
        localStorage.setItem("TodoList",todostr);
        show();
        e.preventDefault();
    }
    if(localStorage.getItem("TodoList")!=null){
        show();
    }

}


function del(index){
    list.splice(index,1);
    var todostr = JSON.stringify(list);
    localStorage.setItem("TodoList",todostr);
    show();
}


function done(index){
    list[index].stat = true;
    var todostr = JSON.stringify(list);
    localStorage.setItem("TodoList",todostr);
    show();
}