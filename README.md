## Lógica de programação
 - Computador:
   - Máquina que extrai dados 
   - Processar: realizar operações nos dados de entrada.
 ---
 - Dado: É o que pode ser processado.
---
- Informação: Resultado de processamento.
---
 - Processamento de dados: Entrada (dados) > Processamento > Saída (informação)
---
- Lógica: Aquilo que faz sentido. 
---
### - Como escrever um programa?
> - Aplicar a ***lógica de programação*** para descrever os passos para resolver um problema em ordem de execução.
#### - A lógica de programação
> - É a técnica de sequenciar pensamentos, passos, fluxo de dados, para atingir um objetivo: ainformação.
> - A sequência de passos, instruçoes que o computador deve seguir é conhecida como **algorítmo**. 

### Algoritmo:
> - Sequencia lógica e finita de instruções que resolve um problema
> - Exemplo: Receita de bolo, manual de instruções. 
> - Nem todo algoritmo é um programa de computador, mas todo programa de computador é um algoritmo.
> - Quem viabiliza o funcionamento dos algoritmos nos computadores: linguagem de programação. 

### Algoritmo para calcular a média de 3 números:
>1. Início;
>2. Receber o primeiro número: Entrada 1;
>3. Receber o segundo número:  Entrada 2;
>4. Receber o terceiro número: Entrada 3;
>5. PROCESSAMENTO: Somar os 3 números recebidos e dividir por 3 (entrada 1 + entrada 2 + entrada 3) / 3;
>6. Exibir p resultado: print, echo, console.log;
>7. Fim;

### - Torre de Hanoi
>- Mover todos os discos para a direita, com o menor número de movimentos possível, sem colocar um disco em cima de um disco menor.
>- https://www.somatematica.com.br/jogos/hanoi/



## Funcionalidades gerais do JavaScript:
- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: Elementos HTML, eventos (click, submit), estilos CSS
-Node.js: Framework JS para back-end / runtime em JS
-Mongo.db: banco de dados em JS
React / Vue.js / Angular: rammeworrks JS para desenvolvimento mobile
- Reactive Native: Framework JS para desenvolvimento mobile

- receber e manipular daddos
- tomar decisões baseadas  na lógica computacional
- loops e interações
- condições de saída

### Instalação do node.js
- Para a gente conseguir executar scripts  do js no terminal de comando, precisamos usar o Node.js
- Instalação: https://nodejs.org/pt-br/download/package-manager/

## Variáveis
    - var
    - const
    - let
    - string
    - array

# Operadores
## Aritméticos: retornam o resultado de uma operação.

> (+) somar  
>(-) subtrair  
> (*) multiplicar   
 > (/) dividir  
 > (%) resto de divisão


## Comparadores matemáticos: teste lófico, retorno booleano (true / false):
> (<) menor que  
> (>)  maior que  
> (<=) menor ou igual  
> (>=) maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true / false):
> (==) igualdade entre sentenças (*valor*)  
> (!=) diferença entre sentenças (*valor*)  
> (===) igualdade entre sentenãs (*valor e tipo*)  
> (!==) diferença entre sentenças (*valor e tipo*)
  

## Operadores de lógica e junção lógica

>(!) Nao (NOT)  
>(&&) E (AND)  
>(||) OU (OR)  


# Condicionais

## If
> if (..) {  
>   
> }

## Else
> else {  
>   
> }  


### Else if
> If (...) {
>   
> }  
> 
> Else if (...) {
>   
> }

## Switch
  
> switch (cor) {  
>   case 'branco' :
>       meuCarro = 'branco';  
> break;  
>   case 'vermelho'    
> break;  
>       meuCarro = 'vermelho';  
> break;  
> default:
> console.log('Não temos a cor desejada)  
> }

### Exemplo
#### media
> var nota1 = 10;  
> var nota2 = 8;  
> var nota3 = 9;  
> var nota4 = 7.5;  
> var media = (nota1 + nota2 + nota3 + nota4) / 4;   
>   
> 
>> if(media > 8) {  
>      console.log("Aluno aprovado");  
> } else {  
>      console.log("Aluno em recuperação")  
> }

## Loops

### for

> for ([expressãoinicial]; [condição]; [incremento]) {
>    execução  
> }
>   
>> // fazer a revisão do carro aos 10 km;  
>> var km;  
>> var revisão = 3
>>  
>> for(km = 0; km < revisão; km++){  
>   console.log("apenas " + km + "kms, então pode rodar");  
> }

### While

> while (condição) {  
>     [execução]  
> }  
>   

### do while

>do {  
>   [execução]    
> } while([condição])


## Funções

- Evitar a repetição de código
- - Realizar   
chamadas dinâmicas de algoritmos

>function nomeFunção() {  
>   
> }



# DOM

- Document Object Model  
- Estrutura de um arquivo na web   
- Representa documentos HTML ou XML  
- Interface de programação  
- Não é uma linguagem de programação  
- É essencial para o JS entender o modelo de páginas web  

## Para que serve?
- Alterar a estrutura  
- Alterar o estilo  
- Alterar o conteúdo  

## Como? 
- Disponibilizando API (Aplication Programming Interface)  
- Rotinas e padrões estabelecidos  
- Métodos (funções)  
- Árvore de elementos  
- Seletores  
- Objetos (nós / nodes)  

> <html>  
>   html : {
>       head : {},  
>        body : {  
>          h1 : {  
>            }  
>          }  
>        }  
>   }  


## DOM X JS
- O DOMpodeserusado por outraslinguagens  
- Sem o DOM o  JS  não teria noção da página  


### Vantagens de usar JavaScript
- código é executado por navegadores  
- Tornar as páginas dinâmicas  
- Evitarrequisiçõesdesnecessárias (performance)  
- SPA (Single PAge Application)  
- Reagir rapidamente a açoes dos usuários  

### Desvantagens de usar JavaScript
- código é executado por navegadores  
- O conteúdo não fica visível para indexadores de busca  
- Alterações em tempo de execução não ficam salvas no documento  

### Exemplos
seleciona objeto e disponibiliza (métodos)

- document.getElementById(id)  
- document.getElementByTagName('div')  
- document.createElement('div')  
- element.innerHTML  
- element.style  
- element.setAttribute('name')  
- element.getAttribute('name')  
- element.addEventListener()  
- window.location  
- windown.onload   
- console.log()  
- window.scrollTo()

## Seletores
- Tipos de seletores: Tag, Id, Class, Name, Query  
- Callback  
- getElementById()  
- getElementsByTagName()   
- getElementsByName()
- getElementsByClassName()  

## Formulários
-   Evitar que o usuário passe dados incorretos  
- Ou seja,   direcionar melhor o uso do sistema  
- Proteger a injeçao de código malicioso  
- Evitarerros de processamento  
- Formatar  dados para facilitar o processamento  
- Regex (expressões regulares)  






