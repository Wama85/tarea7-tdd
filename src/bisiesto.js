// const bisiesto=(year)=>{
 // return((year%400==0) || year%100 !==0)

//};

function bisiesto(year){

 if(year%400===0){
  return true
  }

  if(year%100===0){
    return false
  }
  if(year%4===0){
    return true
  }
 
}
  

export default bisiesto;
