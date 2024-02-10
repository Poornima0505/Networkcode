function submitForm()
{
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
 const userData = {
    name:name,
    age:age,
    dob:dob,
    address:address
 }  ;
 const jsonData = JSON.stringify(userData);
 localStorage.setItem('userData' , jsonData) ;
 alert('Form Submitted Successfully');

}
