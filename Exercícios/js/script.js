

        function calcularMedia(){
            var media, n1, n2, n3 ;

        n1= prompt ("Informe a primeira nota: ") ;
        n1= eval (n1) ;

        n2= prompt ("Informe a segunda nota: ") ;
        n2= eval (n2) ; 

        n3= prompt ("Informe a terceira nota: ") ; 
        n3= eval (n3) ;

        media = (n1 + n2 + n3)/3 ;

        if(n1 > 0 && n1 < 10 && n2 > 0 && n2 < 10 && n3 > 0 && n3 < 10 ){
        alert(media);
        }else{
        alert (" Por favor, insira notas válidas de 0 a 10")
        }


               
        }

        function enviar(){

            var nome = document.getElementById("nome");
            var email = document.getElementById("email");
            var media1 = prompt ("Confirme sua média parcial: ")
            media1 = eval (media1)
            trabalho = prompt("Fez o trabalho adicional? ");

            if(trabalho == "sim" || trabalho == "Sim" || trabalho == "s"){
                trabalho = 2;
                trabalho
            } else {
                trabalho = 0;
            }

            var mediaTotal = media1 + trabalho;                  
        
        if(nome.value == ""){
            alert("Por favor, insira seu nome.");
        }else if(email.value=""){
            alert("Por favor, digite o seu e-mail");
        }else  if ( mediaTotal >= 7) 
        {   alert ("obrigada, " + nome.value + " Seus dados foram  inseridos com sucesso! Sua média total foi " + mediaTotal+ " e você está Aprovado nesse bimestre!");
        }   else if (mediaTotal >= 5 ){
            alert("obrigada, " +  nome.value + "Seus dados foram  inseridos com sucesso! Sua média total foi " + mediaTotal + ". Você precisará refazer os testes desse bimestre.");
        }else{
            alert("obrigada, " + nome.value + "Seus dados foram  inseridos com sucesso! Sua média total foi " + mediaTotal + ". Infelizmente você reprovou esse semestre.");
            }
        }
