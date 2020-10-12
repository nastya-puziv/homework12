//1

obj = {anonim: {say: 'Hello anonim'}, 
    user: {say: 'Hello user'}, 
    admin: {say: 'Hello admin'}};

function greeting(who) {
    console.log(this[who].say)
    return this[who].say
}
greeting.call(obj, 'user');

//2

var user = {name: 'Алексей'}
function func(surname, patronymic) { alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); }

func.apply(user, ['Петров','Алексеевич ']); 

//3

var user = {name: 'Алексей'}
function func(surname, patronymic) { alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); }

var func = func.bind(user);
func('Николаев', 'Иванович'); 