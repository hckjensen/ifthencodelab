
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.

if (A==B) {
    console.log('statement true!');
}else{
    console.log('statement false')
}


//opgave 2: skrive en If then statement der vurderer om A er større end B.

if (A>B) {
    console.log('A is bigger than B')
}else if(B>A){
    console.log('B is bigger than A')
}


//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B


if (A<=B) {
    console.log('statement true')
} else {
    console.log('statement false');
}


//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.


if (B===C){
    console.log('true')
}else{
    console.log('false');
}


//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.

if (B==C){
    console.log('true')
}else{
    console.log('false');
}


//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE. 

if (B==C && E!=A){
    console.log('TRUE')

}
