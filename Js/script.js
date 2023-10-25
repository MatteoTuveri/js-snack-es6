/* 
    SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua 
mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati 
in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato 
specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come 
attributi:

nome del tavolo, (tableName)
nome dell'ospite,  (guestName)
posto occupato. (place)
Generiamo e stampiamo in console la lista per i segnaposto.


*/
const invitati=[
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];
const tableName = 'Tavolo Vip';

const posto = invitati.map((element,index) =>{

    const invitato ={
        tableName,
        guestName : element,
        place : index +1
    }
    return invitato;
});
console.log(posto);

/* 
    SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale 
dei loro voti di esame...

1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli 
studenti: creare una lista contenente il loro nome tutto in maiuscolo
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 
    e id superiore a 120
*/

const studenti = [
    {
        id: 213,
        nome:'marco della rovere',
        voto: 78
    },
    {
        id: 110,
        nome:'paola cortellessa',
        voto: 96
    },
    {
        id:250,
        nome:'andrea mantegna',
        voto:48
    },
    {
        id:145,
        nome:'gaia borromini',
        voto:74
    },
    {
        id:196,
        nome:'luigi grimaldello',
        voto:68
    },
    {
        id:102,
        nome:'piero della francesca',
        voto:50
    },
    {
        id:120,
        nome:'francesca da polenta',
        voto:84
    },

]

const studentList = studenti.map((element,index) =>{
    return studenti[index].nome.toUpperCase();
});
console.log(studentList);

const student70 = studenti.filter((element) =>{
    let voto = element.voto;
    if (voto > 70){
        return true;
    }
    else{
        return false;
    }
})
console.log(student70);

const student70id = studenti.filter((element) =>{
    let voto = element.voto;
    let id = element.id;
    if (voto > 70 && id >120){
        return true;
    }
    else{
        return false;
    }
})
console.log(student70id);
