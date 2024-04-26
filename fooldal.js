function $(id){
    return document.getElementById(id)
}
let szavak=["smart",
"brave",
"first",
"drink",
"fight",
"night",
"light",
"tight",
"giant",
"punch",
"drive",
"right",
"write",
"cloud",
"white",
"penis"//testvérem ötlete volt
]
let rand_szo=szavak[Math.floor(Math.random()*16)].toUpperCase()

let szo=[];
let i=0
let tipp
let sor=0
let oszlop=0
let hely
$("Q").addEventListener("click",()=>{
    if(szo.length<5){
    szo.push("Q")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("W").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("W")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("E").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("E")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("R").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("R")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("T").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("T")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("Z").addEventListener("click",()=>{
    if(szo.length<5){  szo.push("Z")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("U").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("U")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("I").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("I")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("O").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("O")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("P").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("P")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("A").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("A")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("S").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("S")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("D").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("D")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("F").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("F")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("G").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("G")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("H").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("H")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("J").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("J")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("K").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("K")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("L").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("L")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("Y").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("Y")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("X").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("X")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("C").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("C")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("V").addEventListener("click",()=>{
    if(szo.length<5){ szo.push("V")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("B").addEventListener("click",()=>{
    if(szo.length<5){szo.push("B")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("N").addEventListener("click",()=>{
    if(szo.length<5){szo.push("N")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("M").addEventListener("click",()=>{
    if(szo.length<5){szo.push("M")
    hely="box"+sor+""+oszlop
    $(hely).innerHTML=szo[oszlop]
    oszlop++}
})
$("DEL").addEventListener("click",()=>{
    szo.pop()
    hely=hely="box"+sor+""+(oszlop-1)
    $(hely).innerHTML = ""
    oszlop--
})
$("ENTER").addEventListener("click",()=>{

    tipp=szo.join('')
    if(szo.length===5){
        if(tipp==rand_szo.toUpperCase()){
            for(let i=0;i<5;i++){
                hely="box"+sor+""+i
                $(hely).classList.add("jo")
                
            }alert("Nyertél, menny el!")
        }
    else{for(let i=0;i<szo.length;i++){
        let doboz=("box"+sor+""+i)
            if(szo[i]==rand_szo[i]){
                $(doboz).classList.add("jo")
                }
            else if(rand_szo.indexOf(szo[i])>=0){
                $(doboz).classList.add("hely")
            }
            else{

            $(doboz).classList.add("rossz")}

        }szo= [] 
        sor++
        oszlop=0
        hely=""
        if(sor==6){
            alert("Vesztettél, a szavad: "+rand_szo)
        }
    }}
    else{alert("Nem elég hosszú")}
    
})
