function gradeChange() {
    var grade = document.getElementById("grade").value;
    document.getElementById("curr-grade").innerHTML = grade;
  }
  
  function sendForm() {
    document.getElementById("my-form").className = "was-submitted";
  }