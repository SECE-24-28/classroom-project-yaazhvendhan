let student={name:"Yaazh",age:18,knowAbtMe:function(){
    console.log("Hi I am "+ this.name+" and I am "+ this.age+" years old");
}}
student.knowAbtMe();

student.college="Sri Eshwar College of Engineering";
console.log("After adding college property:",student);

student.knowAbtCollege=function(){
    console.log("I study at "+ this.college);
}
student.knowAbtCollege();

delete student.college;
console.log("After deleting college property:",student);
student.knowAbtMe();