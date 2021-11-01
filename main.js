
// 1)
// const temp = arr1.concat(arr2);

// const test = ' welcome webbrain';

// const test5 = test.repeat(5).match(/we/gi).length;

// 2)
// const add =(c)=>{
//     const a = 'welcom webbrain';
//     const b = a.repeat(c).match(/we/gi).length;
    
//      return b;
   
// }

// document.write(add(5));


// const d = (125 ** (1/3));
// console.log((d));


// const d = (100 ** 0.5);
// console.log(d);


// function abs(abs){
//     const d = abs ** 2; 
//     return(d ** 0.5);
// }
// console.log(abs(-4));



//  function ceil(a){
         
//         const d = parseInt(a);
//         return(d+1);
//     }
//     console.log(ceil(1.3));



//  function ceil(a){
         
//         const d = parseInt(a);
//         return(d);
//     }
//     console.log(ceil(1.8));




//  function round(a){
         
//         const d = parseInt(a);
//         return(d);
//     }
//     console.log(round(1.8));


                                    // Juft yoki Toq sonlarni topish:


// function myfunc(){
//     const ArrJuft= [];
//     const ArrToq= [];
//     var m = 0;
//     var j = 0;
//     for (let i = 0; i <= 10; i ++){
//         if(i % 2 == 0){
//             ArrJuft[j ++] = i;
//         }else{
//             ArrToq[m ++] = i;
//         }
//     }
//     for (let i = 0; i < ArrJuft.length; i++) {
//         console.log(ArrJuft[i]);
//         // console.log(ArrToq[i]);
        
//     }
// }

// console.log(myfunc());


                                 // Tub sonlarni topish:

// function myfunc(){
//     const ArrTub= [];
//     var k = 0;
//     for (let i = 2; i <= 10; i ++){

//         var bool = true;

//         for (let  j= 2; j <= parseInt(Math.sqrt(i)); j++){
//             if(i % j == 0){
//                 bool = false;
//                 // ArrTub[k++] = i;
//                 break;
//             }
//         }
//         if (bool == true){
//             console.console.log(i);
//         }
//     }
//     // for (let i = 0; i < ArrTub.length; i++) {
//     //     console.log(ArrTub[i]);
//     //     // console.log(ArrToq[i]);
        
//     // }
// }

// console.log(myfunc());

                                 //Teskari sonlar:

// const temp =()=>{
        
// for (let i = 10; i > 0; i-- ) {
     
//     console.log(i);
    
// }

// }

// temp();



                                //    index SUM


// const num = 748394736384937483;

// const str = num.toString();

// const arr = Array.from(str);
// var sum1 = 0; 
// var sum2 = 0;
// for (let i = 0; i < arr.length; i++) {
    
    
    
//     if(i % 2 == 0){
//         sum1 += parseInt(arr[i]);
                
//     }
//     else{
//         sum2 +=parseInt(arr[i]);
        
//     }
    
// }
// console.log(sum1);
// console.log(sum2);


                                //    remove white space

// var str  = 'Hello World Mening Ismim Eldor';
// var array = Array.from(str);

// var j=0;
// for (let i = 0; i < array.length; i++) {
    
//     if(array[i] !== ' '){
//         array[j++] = array[i];
//     }else{
//         array[j++] = '';
//     }   
// }

// var str2 = array.join('');
// console.log(str2);



// while loop dan.N son berilgan. Shuni teskarisini chiqaring. 
// N=12345 Natija:54321 N son berilgan. 

// Sonni raqamlarini sozlarda yozing
// N=2345 Natija: ikki uch tort besh

// var N = "SaloM"; // N=12345;
// // const str = N.toString(); 
// const arr = Array.from(N);
// var j =arr.length-1;
// var i =0;
// while (i < arr.length) {
//     console.log(arr[j--]);
//     i++;
// }


/*
$n = array(12, 5, 2, 66, 22, 56, 123, 7, 1, 67). 
Ushbu massivni elementlari o’sish tartibda saralang va hosil bo’lgan yangi 
massivni ekranga chiqaring.
Natija  : 1, 2, 5, 7, 12, 22, 56, 66, 67, 123
*/

// const array = [12, -34, 53, 13, 15, -1, 0, 67, 123, 43];
// var a =0;
// for (let i = 0; i < array.length; i++) {
    
//     for (let j = 0; j < array.length; j++) {
        
//         if(array[i] < array[j]){
//             a = array[i];
//             array[i] = array[j];
//             array[j] = a;
//         }
        
//     }
    
// }

// for (let i = 0; i < array.length; i++) {
    
//     console.log(array[i]);
    
// }





                            // OneValue =()=>


// const OneValue =()=>{

// const array = ['a','A','a','a'];
// var m=0;
// var n=0;
// for (let i = 0; i < array.length; i++) {
    
//     for (let j = 0; j < array.length; j++) {

//         if(array[i] == array[j]){
//             n++;
            
//         }else{
//             m++;
//            break;
//         }
//     }
// }

// if(n == array.length ** 2 ){
//     console.log('===========  true ============');
// }else if( m != 0 ){
//     console.log('=========== false =============');
// }

// }

// OneValue();



                            // Num_muN =(num)=>   

// const Num_muN =(num)=>{
    
//     var str = num.toString();
//     var array = Array.from(str);
    
//     for (let i = array.length-1; i >= 0 ; i--) {
        
//         console.log(array[i]);
        
//     }
//     for (let j = 0; j < array.length ; j++) {
        
//         console.log(array[j]);
        
//     }
// }

// Num_muN(012345);




                                    // remove white space

function Remove(){

    var str = 'Ass Daa Naaaa NMMMd';
    var array = Array.from(str);
    let a = '';
    
     for (let i = 0; i < array.length; i++) {     

        if(array[i] == ' ' && ('A' <= array[i+1] && 'Z' >= array[i+1]) ){
            array[i] = '';
            a += array[i];
        }
        a += array[i];
     }
     console.log(a);
}

Remove();










