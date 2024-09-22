function alertName(){
    var name = document.getElementById('name').value;
    alert("Hi " + name + "!")
}

function changeColor(){
    var color = document.body.style.backgroundColor
    if(color != 'white'){
        document.body.style.backgroundColor = 'white'
    }
    else{
        document.body.style.backgroundColor = 'lightskyblue'
    }
}

function textTester(){
    var input = document.getElementById('text').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(validation.test(input)){
        alert("There is a special character")
    }
}

function addText(){
    let h1 = document.querySelector("h1");
    var text = document.getElementById('text').value;
    h1.innerHTML = h1.innerHTML + " " + text
}