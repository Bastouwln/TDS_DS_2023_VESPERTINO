function changeMarisa(){
document.getElementById("title").innerHTML = "Marisa - THW"
}
function changeReimu(){
document.getElementById("title").innerHTML = "Reimu - THW"
}
function changeRemilia(){
document.getElementById("title").innerHTML = "Remilia - THW"
}

reimu = document.getElementById("reimu")
marisa = document.getElementById("marisa")
remilia = document.getElementById("remilia")

console.log(reimu)


if(reimu = true){
    changeReimu()
}
else if(marisa = true){
    changeMarisa()
}
else if(remilia = true){
    changeRemilia()
}