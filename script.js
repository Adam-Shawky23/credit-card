const frontcard = document.getElementById("frontcard")
const cardnumber = document.getElementById("cardnumber")
const cardnumbers = document.getElementById("cardnumbers")
const button = document.getElementById("button")
const cardmonth = document.getElementById("cardmonth")
const cardyear = document.getElementById("cardyear")
const date = document.getElementById("date")
const cardname = document.getElementById("cardname")
const cardnames = document.getElementById("cardnames")
const cvcs = document.getElementById("cvcs")
const cvc = document.getElementById("inputCvc")
const blankyear = document.getElementById("blankyear")
const validmonth = document.getElementById("validmonth")
const validnumber = document.getElementById("validnumber")
const validcvc = document.getElementById("validcvc")
const text = document.getElementById("text")
const complete = document.getElementById("complete")
const completebtn = document.getElementById("contbtn")


button.addEventListener("click", ()=>{ 
    if(cardmonth.value == "" || cardmonth.value.length > 2){
        cardmonth.style.borderColor = "red"
        cardmonth.value = "00/"
        validmonth.style.display = "block"
    }else{
        cardmonth.value = cardmonth.value
        cardmonth.style.borderColor = "black"
        validmonth.style.display = "none"
        cardnumbers.innerText = cardnumber.value
        date.innerText = cardmonth.value + "/" +cardyear.value
        cardnames.innerText = cardname.value
        cvcs.innerText = cvc.value
        text.style.display = "none"
complete.style.display = "block"
    }
    if (cardyear.value == "" || cardyear.value.length > 2){
        cardyear.style.borderColor = "red"
        cvc.value = "00"
        blankyear.style.display = "block"
    }else{
        blankyear.style.display = "none"
        cardmonth.style.borderColor = "black"
        cardnumbers.innerText = cardnumber.value
date.innerText = cardmonth.value + "/" +cardyear.value
cardnames.innerText = cardname.value
cvcs.innerText = cvc.value
text.style.display = "none"
complete.style.display = "block"
    }
    if (cardnumber.value == "" || cardnumber.value.length > 19){
        cardnumber.style.borderColor = "red"
        cvc.value = "0000 0000 0000 0000"
        validnumber.style.display = "block"}
    else{
        cardmonth.style.borderColor = "black"
        validnumber.style.display = "none"
        cardnumbers.innerText = cardnumber.value
date.innerText = cardmonth.value + "/" +cardyear.value
cardnames.innerText = cardname.value
cvcs.innerText = cvc.value
text.style.display = "none"
complete.style.display = "block"
    }
    if (cvc.value == "" || cvc.value.length > 3){
        cvc.style.borderColor = "red"
        cvc.value = "000"
        validcvc.style.display = "block"
        }
    else{
        cardmonth.style.borderColor = "black"
        validcvc.style.display = "none"
        cardnumbers.innerText = cardnumber.value
date.innerText = cardmonth.value + "/" +cardyear.value
cardnames.innerText = cardname.value
cvcs.innerText = cvc.value
text.style.display = "none"
complete.style.display = "block"


}})
completebtn.addEventListener("click", ()=>{
    text.style.display = "block"
    complete.style.display = "none" 
})
