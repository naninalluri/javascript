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
    console.log(d)
})
