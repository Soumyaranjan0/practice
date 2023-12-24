var objX = {
    fname: "xyz",
    lname: "abc",
    // printFullName: function (){
    //     return this.fname + " " + this.lname;
    // }
};

function printFullName(greetings, smiley){
    return greetings + " " +this.fname + " " + this.lname + smiley;
}
var params = ["Hi", ":)"];
var fullname = printFullName.apply(objX, params);
console.log(fullname);