




let name = prompt('name');
let roll = prompt('Roll');
let eng = Number(prompt('English'));
let math = Number(prompt('Math'));
let sci = Number (prompt('Science'));


console.log(`

 student name :  ${name}
 student roll : ${roll}


 subject                  marks           GPA                 Grade
 
 
 ENGLISH                  ${eng}         ${gpa(eng)}                 ${grade(eng)}
 
 MATH                     ${math}        ${gpa(math)}                ${grade(math)}

 SCIENCE                  ${sci}         ${gpa(sci)}                 ${grade(sci)}

 ---------------------------------------------------------------------------------------


                                  cgpa = ${cgpaa( gpa(eng), gpa(math), gpa(sci) )}



`)

// gpa calculation


function gpa (marks){

    let gpa ;

    if(marks >=0 && marks <= 32 ){
        gpa = 0;
    }else if(marks >= 33 && marks < 40){
        gpa = 1;
    }else if(marks >= 40 && marks < 50){
        gpa = 2;
    }else if(marks >= 50 && marks < 60){
        gpa = 3; 
    }else if(marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if(marks >= 70 && marks < 80){
        gpa = 4;
    }else if(marks >= 80 && marks <= 100 ){
        gpa = 5;
    }
   return gpa;
}




//grade calculation


function grade(marks){

    let grade;

    if(marks >=0 && marks <= 32 ){
        grade = 'F';
    }else if(marks >= 33 && marks < 40){
        grade = 'D';
    }else if(marks >= 40 && marks < 50){
        grade = 'C';
    }else if(marks >= 50 && marks < 60){
        grade = 'B'; 
    }else if(marks >= 60 && marks < 70){
        grade = 'A-';
    }else if(marks >= 70 && marks < 80){
        grade = 'A';
    }else if(marks >= 80 && marks <= 100 ){
        grade = 'A+';
    }
  
  return grade;

}



//cgpa 

 function cgpaa (eng , math , sci ){

    let totalGpa = ( eng + math + sci );

    let cgpa = totalGpa / 6 ;

    if(eng == 0 || math == 0 || sci == 0 ){

        return "You are Failed";

    }else{

        return `tour cgpa = ${cgpa} & Grade = ${ totalGrade(cgpa)} `;
    
    }
   
}



function totalGrade(cgpa){

    if(cgpa >= 0 && cgpa < 1 ){
        return 'F';
    }else if(cgpa >= 1 && cgpa < 2){
        return 'D';
    }else if (cgpa >=2 && cgpa < 3){
        return 'C';
    }else if(cgpa >= 3 && cgpa < 3.5){
        return 'B';
    }else if(cgpa >= 3.5 && cgpa < 4){
        return 'A-';
    }else if(cgpa >= 4 && cgpa < 5){
        return 'A';
    }else if(cgpa >= 5){
        return 'A+'
    }
}













