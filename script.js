let first_des = document.getElementById("first-des")
let second_des = document.getElementById("second-des")
let third_des = document.getElementById("third-des")
let forth_des = document.getElementById("forth-des")
let btn_1 = document.getElementById("btn-1")
let btn_2 = document.getElementById("btn-2")
let btn_3 = document.getElementById("btn-3")
let btn_4 = document.getElementById("btn-4")

btn_1.addEventListener("click",()=>{
    if(first_des.style.display == "block"){
        first_des.style.display = "none"
        document.getElementById("first-plus").style.display = "block"   
        document.getElementById("first-minus").style.display = "none"   
    }
    else{
        document.getElementById("first-plus").style.display = "none"   
        document.getElementById("first-minus").style.display = "block"   
        first_des.style.display = "block"
    }
})

btn_2.addEventListener("click",()=>{
    if(second_des.style.display == "block"){
        document.getElementById("second-plus").style.display = "block"   
        document.getElementById("second-minus").style.display = "none"   
        second_des.style.display = "none"
        
    }
    else{
        document.getElementById("second-plus").style.display = "none"   
        document.getElementById("second-minus").style.display = "block"   
        second_des.style.display = "block"
    }
})

btn_3.addEventListener("click",()=>{
    if(third_des.style.display == "block"){
        third_des.style.display = "none"
        document.getElementById("third-plus").style.display = "block"   
        document.getElementById("third-minus").style.display = "none"   
        
    }
    else{
        document.getElementById("third-plus").style.display = "none"   
        document.getElementById("third-minus").style.display = "block"   
        third_des.style.display = "block"
    }
})

btn_4.addEventListener("click",()=>{
    if(forth_des.style.display == "block"){
        document.getElementById("forth-plus").style.display = "block"   
        document.getElementById("forth-minus").style.display = "none"   
        forth_des.style.display = "none"
        
    }
    else{
        forth_des.style.display = "block"
        document.getElementById("forth-plus").style.display = "none"   
        document.getElementById("forth-minus").style.display = "block"   
    }
})