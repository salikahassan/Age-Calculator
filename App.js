let userInput= document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");
let button=document.getElementById('myButton');

function calculateAge(birthDate) {

    function calculateAge(birthDate) {
        var today = new Date();
        var birthDate = new Date(birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }
    
    // Example usage:
    var birthDate = "1990-05-15"; // Format: YYYY-MM-DD
    var age = calculateAge(birthDate);
    console.log("Age: " + age);
}    








button.addEventListener("click",calculateAge);
result.innerText = "Age: " + age;