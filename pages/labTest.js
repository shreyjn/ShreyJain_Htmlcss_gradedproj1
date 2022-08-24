document.getElementById("vmessage").style.display = 'none'
let vmessage = false;
let copy = yes;

const isCopy=(value)=>{
    copy = value;
    console.log(copy)
}





function submitForm(e){
    e.preventDefault()
    let fullName = document.getElementById('name').value;
    let patientId = document.getElementById('patient-id').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('h-no').value+', '+ document.getElementById('street').value+', '+document.getElementById('area').value;
    let district = document.getElementById('district').value;
    let test = document.getElementsByName('test')
    var result =""
    for (var i = 0; i < test.length; i++) {
        if (test[i].checked) {
            result += test[i].value + ', ' 
        }
    }    
    if(result){
        vmessage= false
        document.getElementById("vmessage").style.display = 'none'
    }
    else{
        document.getElementById("vmessage").style.display = 'block'
        vmessage = true
    }
     

    console.log(result)

 
}