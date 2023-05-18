var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector("#screen");
var btnOpt = document.querySelectorAll("#btnOpt");
var optState = false;
var opt = "";
var final =0;

btnNumber.forEach(number => {
    number.addEventListener("click",showNumber);

    function showNumber(){
        this.style.fontSize = "25px"
        if (screen.textContent == "0" || optState) {
            screen.textContent ="";
        }
        screen.textContent += this.textContent; //console.log(this.textContent);
        optState = false;

        setTimeout(() => {
            this.style.fontSize = "15px";
        }, 500);
    }
});

btnOpt.forEach(operator => {
    operator.addEventListener("click", calculator);

    function calculator(){
        optState = true;
        var newOpt = this.textContent;

        switch(opt){
            case "+": 
                screen.textContent = final + Number(screen.textContent);
                break;
            case "-": 
                screen.textContent = final - Number(screen.textContent);
                break;
            case "*": 
                screen.textContent = final * Number(screen.textContent);
                break;
            case "/": 
                screen.textContent = final / Number(screen.textContent);
                break;
            case "=": 
                final = Number(screen.textContent);
                break; //= simgesi çalışmıyor ona tekrardan bak html de id sini belirlememiştik.
                
        }
        final = Number(screen.textContent);
        opt = newOpt;
    }
    
});