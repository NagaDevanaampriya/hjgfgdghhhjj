player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
 
document.getElementById("player1_name").innerHTML= player1_name+" : ";
document.getElementById("player2_name").innerHTML= player2_name+" : ";


document.getElementById("player1_score").innerHTML= player1_score;

document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn - " + player1_name;

document.getElementById("player_answer").innerHTML= "Answer Turn - " + player2_name;

function send(){
    number1=document.getElementById("num1").value;
    number2=document.getElementById("num2").value;
    actual_answer = parseInt(num1) * parseInt(num2);

    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'> ";  
    check_button = "<br><br><button onclick='check()' class='btn btn-primary'>Check</button>";

    row = question + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
