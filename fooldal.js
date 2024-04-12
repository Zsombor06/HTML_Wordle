function $(id){
    return document.getElementById("id")
}
let szavak=["first"]
let rand_szo=szavak[Math.random() * 20-1].toUpperCase()
let szo=[]
$("Q").addEventListener("onclick",()=>{
    if(szo.length<5){
    szo.push("Q")}
})
$("W").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("W")}
})
$("E").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("E")}
})
$("E").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("E")}
})
$("R").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("R")}
})
$("T").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("T")}
})
$("Z").addEventListener("onclick",()=>{
    if(szo.length<5){  szo.push("Z")}
})
$("U").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("U")}
})
$("I").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("I")}
})
$("O").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("O")}
})
$("P").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("P")}
})
$("A").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("A")}
})
$("S").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("S")}
})
$("D").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("D")}
})
$("F").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("F")}
})
$("G").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("G")}
})
$("H").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("H")}
})
$("J").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("J")}
})
$("K").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("K")}
})
$("L").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("L")}
})
$("Y").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("Y")}
})
$("X").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("X")}
})
$("C").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("C")}
})
$("V").addEventListener("onclick",()=>{
    if(szo.length<5){ szo.push("V")}
})
$("B").addEventListener("onclick",()=>{
    if(szo.length<5){szo.push("B")}
})
$("N").addEventListener("onclick",()=>{
    if(szo.length<5){szo.push("N")}
})
$("M").addEventListener("onclick",()=>{
    if(szo.length<5){szo.push("M")}
})
$("DEL").addEventListener("onclick",()=>{
    szo.pop()
})
$("ENTER").addEventListener("onclick",()=>{
    if(szo.length===5){
        for(let i=0;i<szo.length;i++){
        if(rand_szo.includes(szo[i])){
            if(rand_szo.charAt(i)==szo[i]){
                //zöld
            }
        else{
        //sarga
        }
        }}
        
    }
})
