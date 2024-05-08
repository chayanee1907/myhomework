var score=0;
var isCorrect1= false;
var isCorrect2= false;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    const result3 = document.getElementById('result3');
    if (answer === 'a') {
        result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        result.textContent = "Correct PIM ย่อมาจาก พีไอเอ็ม";
        result.style.color = 'green';
        if(!isCorrect1){
            score++;
            isCorrect1= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        if(isCorrect1){
            score--;
            isCorrect1= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }
}
function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'b') {
  
        result2.textContent = "You're right";
        result2.style.color = 'green';
        if(!isCorrect2){
            score++;
            isCorrect2= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
        if(isCorrect2){
            score--;
            isCorrect2= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }
}