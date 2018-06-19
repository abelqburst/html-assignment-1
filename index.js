window.onload = ()=>{

    

    range = document.getElementById('inputRange')
    inp = document.getElementById('inputName')
    email = document.getElementById('inputEmail')
    password = document.getElementById('inputPassword')
    submit = document.getElementById('submit')

    document.getElementById('sessionRange').innerHTML = localStorage.getItem('range')
    document.getElementById('sessionName').innerHTML = localStorage.getItem('name')
    document.getElementById('sessionEmail').innerHTML = localStorage.getItem('email')
    document.getElementById('sessionPassword').innerHTML = localStorage.getItem('password')
    document.getElementById('sessionGender').innerHTML = localStorage.getItem('gender')
    
    document.getElementById('rangeValDisplay').innerText = range.value
    range.oninput = ()=>{
        document.getElementById('rangeValDisplay').innerText = range.value
    }
    //console.log( $('input[name=gridRadios]:checked').val() )
    submit.onclick = ()=>{
        inp.value.trim()!=""?localStorage.setItem('name',inp.value):null
        email.value.trim()!=""?localStorage.setItem('email',email.value):null
        password.value.trim()!=""?localStorage.setItem('password',password.value):null
        range.value.trim()!=""?localStorage.setItem('range',range.value):null
        $('input[name=gridRadios]:checked').val().trim()!=""?localStorage.setItem('gender', $('input[name=gridRadios]:checked').val() ):null
    }
    
}
