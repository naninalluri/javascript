//var h1=document.getElementById("root")
//var container=document.querySelector("#root")
//var card=document.createElement("div");
//card.setAttribute("id","card")
//container.appendChild(card)
//child
//var image=document.createElement("img");
//image.src="images/user.svg"
//image.alt="Image"
//image.style.width="20%"
//card.appendChild(image)
//var name1=document.createElement("name");
//var h1=document.getElementById("root")
//var container=document.querySelector("#root")
//var card=document.createElement("div");
//card.setAttribute("id","card")
//container.appendChild(card)
//child
//var image=document.createElement("img");
//image.src="images/user.svg"
//image.alt="Image"
//image.style.width="20%"
//card.appendChild(image)
//var name1=document.createElement("name");

function loadJson(file,callback){
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/jSON");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4 && ajax.status===200){
            callback(ajax.responseText);
        }
    }
    ajax.send();
}
loadJson("json/data.json",(text)=>{
    var d=JSON.parse(text);
    details(d.details);
    other(d.multipledata);
})
var root=document.getElementById("root");
function details(cse){
    var m=document.createElement("p");
    m.setAttribute("class","name");
    m.textContent=cse.mobile;
    root.appendChild(m);


    var n=document.createElement("h1");
    n.setAttribute("class","name");
    n.textContent=cse.name;
    root.appendChild(n);
}
function other(r){
    var ul=document.createElement("ul");
    root.appendChild(ul);
    for (let i = 0; i < r.length; i++){
        var li=document.createElement("li");
        li.textContent=r[i].name;
        ul.appendChild(li);
        var li1=document.createElement("li");
        li.textContent=r[i].mobile;
        ul.appendChild(li1);
    }
}
