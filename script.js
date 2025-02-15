//Name Validation//
function split(){
    let text = (document.getElementById("fname").value)
    if(text== ""){
        console.log("Eter name please")
        alert("Please Enter Name ..")
    } else{
        const myarray = text.split(" ");
        document.getElementById("fname").innerHTML = myarray[0];
         console.log("The First Name : "+myarray[0])
          console.log("The Middle Name : "+myarray[1])
           console.log("The Last Name : "+myarray[2])
    }
}
//Mobile Number Validation//
function lengths(){
    let text = (document.getElementById("num").value)
    let length = document.getElementById("num").innerHTML = text.length;
    if(length ==" "){
        console.log(" Enter mobile number");
        alert("Enter Mobile Number ");
    }
    else if( length == 10 && text[0]>5){
        console.log("\nThe Mobile nunber is  " +text,+length," Digits")
        console.log(" Valid Mobile Number ");
        alert(" Valid Mobile Number ");
    } else{
        console.log("\nThe Mobile nunber is  " +length,"Digits")
        console.log(" Invalid  Mobile Number ");
        alert(" Invalid number ");
    }
}
//Adhar Number Validation//
function Adharno(){
    let text = (document.getElementById("anum").value)
    let number = document.getElementById("anum").innerHTML = text.length;
    if(text ==""){
        console.log("Enter Adhar number")
        alert("Enter Adhar Number")
    }
    else if( number==12 ){
        console.log("\n The Adhar number is : " +text,+number,"Digits")
        console.log(" VERIFIED ");
        alert(" Adhar Number Verifed")
    }else{
        alert("Invalid adhar Number ")
        console.log(" Invalid Adhar Number ");
    }
}
//Pan Number Validation//
function pannum(){
    var text = (document.getElementById("text").value)
    var length = document.getElementById("text").innerHTML = text.length;

    if (text.length !== 10) {
        console.log("Invalid PAN Number")
        alert("PAN number must be 10 characters long.");
        return;
      }
      for (var i = 0; i < 5; i++) {
        if (!/[A-Za-z]/.test(text[i])) {
          alert("\nFirst 5 characters must be alphabets.");
          return;
        }
      }
      for (var i = 5; i < 9; i++) {
        if (!/[0-9]/.test(text[i])) {
          alert("\nNext 4 characters must be digits.");
          return;
        }
      }
      if (!/[A-Za-z]/.test(text[9])) {
        alert("\nThe last character must be an alphabet.");
        return;
      }  
      console.log("\nThe PAN Number : "+text,+length,"Digits\nValid Number ")
      alert("PAN number is valid!");
    }
    //Date of Birth Validation//
function birth(){
    let dob = (document.getElementById("dob").value)
    let today = new Date(); 
    let selectedDate = new Date(dob); 
    if(dob ==""){
        alert("Enter the Birthdate");
        console.log("Enter the Birthdate");
    }
    else if (selectedDate > today) {
        console.log("\nInvalid date. Date of birth cannot be in the future.");
    } else {
        console.log("\n The Birth-Date : "+dob,"is Valid .");
    }
}
//Marks Validation//
function bestof(){

    const subject = [
        parseInt(document.getElementById("subject1").value),
        parseInt(document.getElementById("subject2").value),
        parseInt(document.getElementById("subject3").value),
        parseInt(document.getElementById("subject4").value),
        parseInt(document.getElementById("subject5").value),
        parseInt(document.getElementById("subject6").value)
    ]
    for (var i = 0; i < subject.length; i++) {
        if (subject[i] > 100 || subject[i] < 0 || isNaN(subject[i])) {
            alert("Marks cannot be greater than 100 or 0 . Please enter valid marks.");
            console.log("Enter valid marks")
            return; 
        }

    }
        subject.sort(function(a, b){return b - a});
            console.log("\nSubjects Marks :"+subject)
           const marks = subject.slice(0,5);
          console.log("Best 5 Subjects :"+marks);
         let total=0;
         let percentage;
         for( var i=0;i<5;i++){
            total = total+subject[i];
         }
        percentage = total/5;
         alert("The Student Percentage is :"+percentage)
        console.log("The Percentage is : "+percentage);
}
