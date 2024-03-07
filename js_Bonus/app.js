// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// BONUS:
// Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
// Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement





// BONUS    
// RECUPERO L'ELEMENTO ul DAL DOM MEDIANTE LA SUA CLASSE [document.querySelector('.class')]
// (fuori dal ciclo, perchè mi serve una sola volta. Se lo svolgessi nel ciclo,
//  il suo recupero avverrebbe stante volte quante sono le iterazioni del ciclo)

const ulElement = document.querySelector('.main_grid')


// STAMPARE DA 1 A 100
// IMPOSTO LA VARIABILE n CHE CORRISPONDE AL NUMERO DI CICLI DA ESEGUIRE (n = 100)

let n = 100


// INIZZIALIZZO L'ASSEGNAZIONE DEL CICLO
// 1. DICHIARO LA VARIABILE i INDICANDO DA DOVE PARTIRE (let i = 0)
// 2. CICHIARO IL NUMERO DI CICLI IN BASE AL VALORE DELLA VARIABILE n (i < 100)
// 3. DICHIARO CHE ALLA FINE DI OGNI CICLO LA VARIABILE i INCREMENTI (i++) 

for (let i = 0; i < n; i++){

    // VOGLIO CHE I NUMERI IN CONSOLE SIANO STAMPATI FINO AL 100 (INCLUSO)
    // CON LE DICHIARAZIONI SU DESCRITTE AVRO' STAMPATO FINO A 99,
    // QUINDI DICHIARO UNA VARIABILE CHE MI PERMETTA DI AVERE ANCHE IL 100 (i + 1)

    let num = (i + 1) ;


    // console.log(num)  [<- prova per capire se funziona il ciclo]



    // BONUS
    // CREO UN ELEMENTO liElement NEL DOM [document.createElement('')]
    // ASSEGNO COME PADRE DI liElement LA VARIABILE ulElement
    // (che corrisponde al contenitore nel DOM) [.append()]

    const liElement = document.createElement('li')

    ulElement.append(liElement)


    // 1. SE MULTIPLI DI 3 ALLORA STAMPARE "FIZZ"
    //      1.a DICHIARO UNA VARIABILE PER IDENTIFICARE I MULTIPLI DI 3 (multipliTre)
    //      1.b DICHIARO LA FUNZIONE CHE MI DIA RESTO 0 QUANDO num E' DIVISIBILE PER 3 (num % 3)


    // 2. SE MULTIPLI DI 5 STAMPARE "BUZZ"
    //      2.a DICHIARO UNA VARIABILE PER IDENTIFICARE I MULTIPLI DI 5 (multipliCinque)
    //      2.b DICHIARO LA FUNZIONE CHE MI DIA RESTO 0 QUANDO num E' DIVISIBILE PER 5 (num % 5)


    // 3. SE MULTIPLI DI 3 e DI 5 STAMPARE "FIZZBUZZ"
    //      3.a DICHIARO LA CONDIZIONE SIA multipliTre SIA multipliCinque


    let multipliTre = (num % 3) ;
    let multipliCinque = (num % 5) ;
    
    // CALCOLO

    if (multipliTre === 0 && multipliCinque === 0){     // 1. SE multipliTre (num % 3) AND multipliCinque (num % 5) STRETTAMENTE UGUALE (===) 0
        console.log('fizzbuzz') ;                       //    STAMPARE IN CONSOLE "fizzbuzz"
        liElement.classList.add('box', 'box-fizzbuzz') ;// BONUS: AGGIUNGO CLASSI ALL'ELEMENTO [.classList.add('', '')]                          
        liElement.innerHTML = 'fizzbuzz' ;// BONUS: AGGIUNGO CONTENUTO NELL'ELEMENTO [.innerHTML]     
    }else if (multipliCinque === 0){                    // 2. multipliCinque (num % 5) STRETTAMENTE UGUALE (===) 0 STAMPARE IN CONSOLE "buzz"  
        console.log('buzz') ;
        liElement.classList.add('box', 'box-buzz') ;// BONUS: AGGIUNGO CLASSI ALL'ELEMENTO [.classList.add('', '')]
        liElement.innerHTML = 'buzz' ;// BONUS: AGGIUNGO CONTENUTO NELL'ELEMENTO [.innerHTML] 
    }else if (multipliTre === 0){                       // 3. multipliTre (num % 3) STRETTAMENTE UGUALE (===) 0 STAMPARE IN CONSOLE "fizz" 
        console.log('fizz') ;
        liElement.classList.add('box', 'box-fizz') ;// BONUS: AGGIUNGO CLASSI ALL'ELEMENTO [.classList.add('', '')]
        liElement.innerHTML = 'fizz' ;// BONUS: AGGIUNGO CONTENUTO NELL'ELEMENTO [.innerHTML] 
    }else{                                              // 4. SE NUSSUNA DELLE PRECEDENTI STAMPARE IN CONSOLE LA VARIABILE num
        console.log(num) ;
        liElement.classList.add('box', 'box-num') ;// BONUS: AGGIUNGO CLASSI ALL'ELEMENTO [.classList.add('', '')]
        liElement.innerHTML = num ;// BONUS: AGGIUNGO CONTENUTO NELL'ELEMENTO [.innerHTML] 
    }
}









