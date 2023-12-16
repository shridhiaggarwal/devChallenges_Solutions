function onSubmitClick() {
    let name = document.getElementById("name").value;
    let companyEmail = document.getElementById("companyEmail").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //validation
    if (name.trim() === "") {
        alert("Name is required.");
    } else if (companyEmail.trim() === "") {
        alert("Email is required.");
    } else if(!emailRegex.test(companyEmail)){
        alert("Please enter a valid email.");
    } else {
        alert("Form Submitted Successfully!",);
    }

    // Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("companyEmail").value = "";
    document.getElementById("companySize").value = "50-100-employees";
    document.getElementById("messageSubject").value = "Building Landing pages";
    document.getElementById("message").value = "50-100 employees";
    
    // Prevent the default form submission
    event.preventDefault();
}

// document.getElementById('companySize').addEventListener('focus', function () {
//     this.style.borderBottomLeftRadius = '0px';
//     this.style.borderBottomRightRadius = '0px';
// });

// document.getElementById('companySize').addEventListener('change', function () {
//     this.style.borderBottomLeftRadius = '16px';
//     this.style.borderBottomRightRadius = '16px';
// });