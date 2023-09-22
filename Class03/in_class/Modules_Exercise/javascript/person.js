/**
*  @param first - The student's first name
*  @param last - The student's last name
*  @param age - The student's age
*  @return the sentence 'My name is @first @last and I am @age years old.'
*  @desc Exporting the function Person to be formatted in another file.
*/

export var Person = (first, last, age) => {
    return "My name is " + first + " " + last + " and I am " + age + " years old.";
};