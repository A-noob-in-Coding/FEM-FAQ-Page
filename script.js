let first_des = document.getElementById("first-des")
let second_des = document.getElementById("second-des")
let third_des = document.getElementById("third-des")
let forth_des = document.getElementById("forth-des")
let btn_1 = document.getElementById("btn-1")
let btn_2 = document.getElementById("btn-2")
let btn_3 = document.getElementById("btn-3")
let btn_4 = document.getElementById("btn-4")
let first_title = document.getElementById("first-title")
let second_title = document.getElementById("second-title")
let third_title = document.getElementById("third-title")
let forth_title = document.getElementById("forth-title")
//functions

function first_btn_handler(){
    if(first_des.classList.contains("visible")){
        first_des.classList.remove("visible")
        document.getElementById("first-plus").style.display = "block"   
        document.getElementById("first-minus").style.display = "none"   
    }
    else{
        document.getElementById("first-plus").style.display = "none"   
        document.getElementById("first-minus").style.display = "block"   
        first_des.classList.add("visible")
    }
}


function second_btn_handler(){
    if (second_des.classList.contains("visible")) {
        document.getElementById("second-plus").style.display = "block";
        document.getElementById("second-minus").style.display = "none";
        second_des.classList.remove("visible");
    } else {
        console.log("to");
        document.getElementById("second-plus").style.display = "none";
        document.getElementById("second-minus").style.display = "block";
        second_des.classList.add("visible");
    }
}

function third_btn_handler(){
    if(third_des.classList.contains("visible")){
        document.getElementById("third-plus").style.display = "block"   
        document.getElementById("third-minus").style.display = "none"   
        
        third_des.classList.remove("visible")
    }
    else{
        document.getElementById("third-plus").style.display = "none"   
        document.getElementById("third-minus").style.display = "block"   
        third_des.classList.add("visible")
    }
}

function forth_btn_handler(){
    if(forth_des.classList.contains("visible")){
        document.getElementById("forth-plus").style.display = "block"   
        document.getElementById("forth-minus").style.display = "none"   
        forth_des.classList.remove("visible")
        
    }
    else{
        forth_des.classList.add("visible")
        document.getElementById("forth-plus").style.display = "none"   
        document.getElementById("forth-minus").style.display = "block"   
    }
}

btn_1.addEventListener("click",()=>{
    first_btn_handler()    
})

btn_2.addEventListener("click", () => {
    second_btn_handler()    
});

btn_3.addEventListener("click",()=>{
    third_btn_handler()
})

btn_4.addEventListener("click",()=>{
    forth_btn_handler()
})

first_title.addEventListener("click",()=>{
    first_btn_handler()
})

second_title.addEventListener("click",()=>{
    second_btn_handler()
})

third_title.addEventListener("click",()=>{
    third_btn_handler()
})

forth_title.addEventListener("click",()=>{
    forth_btn_handler()
})