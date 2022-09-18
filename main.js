function submit()
{
var display_student_array =[];

for (var a=1; a <=4;a++)
{
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
var lenght_of_name_of_students_array=name_of_the_student_array.lenght;
 console.log(lenght_of_name_of_students_array);
 for (var k=1; k <=4;k++)
 {
    display_student_array.push("<h4NAME - >"+ name_of_the_student[k]+"</h4>");
console.log()
 }






}