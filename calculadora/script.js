function somar() {
    const n1 = Number(document.getElementById("number01").value)
    const n2 = Number(document.getElementById("number02").value)

    const r = n1 + n2
     console.log(  document.getElementById("result").innerText =`Resultado : ${r}`)
   
}
function limpar(){
    document.getElementById("number01").value =""
    document.getElementById("number02").value =""
    console.log(  document.getElementById("result").innerText =`Resultado :`)   
    
}