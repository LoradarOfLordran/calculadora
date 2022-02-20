
document.addEventListener("DOMContentLoaded", e=>{

    const value1 = document.querySelector(".value1");
    const value2 = document.querySelector(".value2");
    const value3 = document.querySelector(".value3");
    const operador = document.querySelector(".operador");

    const calculadora = {
        num1 : 0,
        num2 : 0,
        operador : "",
        resultado : 0,

        calc : function(){
            this.num1 = Number(this.num1);
            this.num2 = Number(this.num2);
        
            if(this.operador == "+"){
                this.resultado = this.num1+this.num2;
            }
            if(this.operador == "-"){
                this.resultado = this.num1-this.num2;
            }
            if(this.operador == "x"){
                this.resultado = this.num1*this.num2;
            }
            if(this.operador == "/"){
                // this.resultado = this.num1/this.num2;
                let div = this.num1/this.num2;
                if(div) this.resultado = div;
                if(div == Infinity) this.resultado = this.num1;
            }
            if(this.operador == "%"){
                // this.resultado = this.num1%this.num2;
                let div = this.num1%this.num2;
                if(div) this.resultado = div;
                if(div == NaN) this.resultado = this.num1;
            }
            if(this.operador == "^"){
                this.resultado = Math.pow(this.num1, this.num2);
            }
        }
    }

    function verificarOperacion(btn){
        if(value2.textContent) return
        if(value1.textContent){
            operador.textContent = btn;
            calculadora.operador = btn;
            calculadora.num1 = value1.textContent;
        }
    }

    function reactivarOperacion(btn){
        let num1 = value1.textContent;
        let num2 = value2.textContent;
        let num3 = value3.textContent;
        let op = btn;
        if((num1 && num2 && num3) || (!num1 && !num2 && num3)){
            if(value1.textContent.length < 6) value1.style.fontSize = "45px";
            if(value1.textContent.length > 12) value1.style.fontSize = "15px";
            resetAll();
            value1.textContent = num3.slice(1, num3.length)
            verificarOperacion(op);
            calculadora.calc();
            value3.textContent = `=${calculadora.resultado}`;
            
        }
    }

    function resetAll(){
        value1.textContent = "";
        value2.textContent = "";
        value3.textContent = "";
        operador.textContent = "";  
        calculadora.num1 = 0;
        calculadora.num2 = 0;
        calculadora.resultado = 0;
        calculadora.operador = "";
    }


    document.addEventListener("click", e=>{

        if(e.target.matches(".btn")){
            
            const btn = e.target.textContent;
            switch (btn) {
                case "C":
                    resetAll();
                    break;

                case "<":
                    if(!operador.textContent){
                        let index = value1.textContent.length-1;
                        value1.textContent = value1.textContent.substring(0, index);
                        calculadora.num1 = value1.textContent;
                        value3.textContent = `${value1.textContent}`;
                    }else{
                        if(!value2.textContent){
                            operador.textContent = "";
                            calculadora.operador = "";
                        }
                        let index = value2.textContent.length-1;
                        value2.textContent = value2.textContent.substring(0, index);
                        calculadora.num2 = value2.textContent;
                        calculadora.calc();
                        value3.textContent = `=${calculadora.resultado}`;
                    }
                    break;

                case "+":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;

                case "-":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;
                
                case "x":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;

                case "/":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;  
                case "%":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;
                case "%":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;
                case "^":
                    verificarOperacion(btn);
                    reactivarOperacion(btn);
                    break;
                case "=":
                    // if(!operador.textContent)
                    if(!operador.textContent || !value2.textContent){
                        console.log("asd");
                        value3.textContent = `=${value1.textContent}`;
                        if(value3.textContent.length < 6) value3.style.fontSize = "45px";
                        if(value3.textContent.length > 12) value3.style.fontSize = "15px";
                        calculadora.num1 = 0;
                        calculadora.num2 = 0;
                        calculadora.operador = "";
                        value1.textContent = "";
                        value2.textContent = "";
                        operador.textContent = "";
                        return
                    }
                    calculadora.calc();
                    value3.textContent = `=${calculadora.resultado}`;
                    if(value3.textContent.length < 6) value3.style.fontSize = "45px";
                    if(value3.textContent.length > 14) value3.style.fontSize = "15px";
                    calculadora.num1 = 0;
                    calculadora.num2 = 0;
                    calculadora.operador = "";
                    value1.textContent = "";
                    value2.textContent = "";
                    operador.textContent = "";
                    break; 

                case ".":
                    if(!operador.textContent){
                        if(!value1.textContent.includes(".")) value1.textContent+=".";
                    }else{
                        if(!value2.textContent.includes(".")) value2.textContent+=".";
                    }

                    break; 

                default:
                    if(!operador.textContent){
                        if(value1.textContent.length < 6) value1.style.fontSize = "45px";
                        if(value1.textContent.length > 6) value1.style.fontSize = "25px";
                        if(value1.textContent.length >= 11) return
                        value1.textContent += btn;
                        value3.textContent = `=${value1.textContent}`;
                        value3.style.fontSize = "25px"
                    }else{
                        if(value2.textContent.length < 6) value2.style.fontSize = "45px";
                        if(value2.textContent.length > 6) value2.style.fontSize = "25px";
                        if(value2.textContent.length >= 11) return
                        value2.textContent += btn;
                        calculadora.num2 = value2.textContent;
                        calculadora.calc();
                        value3.textContent = `=${calculadora.resultado}`;
                        if(value3.textContent.length >= 11)  value3.style.fontSize = "15px"
                    }
                    break;
            }
        }
    })
})
