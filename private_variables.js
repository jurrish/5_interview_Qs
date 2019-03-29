//how do you create private variables in javascript?
//create a variable within the scope of a function

function secretVariable() {
  var private = 'super secret code';

  return function(){
    return private;
  }
}

var getPrivateVariable = secretVariable();

console.log(getPrivateVariable());


//what is the output?

var num = 4;
function outer(){
  var num = 2;
  function inner(){
    num ++;
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();

//output will be 3 because of closures

//what will this return?

console.log(typeof typeof 1);  //string
//will look like this:  typeof (typeof 1)


//what will this output?

var hero - {
  _name: 'John Doe',
  getSecretIdentity: function(){
    return this._name;
  }
}

var stoleSecretIdentity = hero.getSecretIdentity;
//if we wanted stoleSecretIdentity() to return john doe, we need to bind it here:
//var stoleSecretIdentity = hero.getSecretIdentity.bind(hero)
console.log(stoleSecretIdentity()); //undefined (window object is 'this')
console.log(hero.getSecretIdentity()); //John Doe
