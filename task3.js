/* 3. Создать класс данных “Товар”
С полями
Название
Цена
Количество
Описание
*/
class Product {
    constructor(name, price, quantity, description = "") {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

// Наполнить массив объектами такого класса.
let products = [
    new Product("fd", 2, 6, "dabc"), 
    new Product("fdac", 2, 8, "feabc"),
    new Product("fdce", 4, 5, "abc")
];

/* Написать метод, который получает строку вида
“name-contains-fd&price-=2&quantity->5&description-ends-abc”
“name-starts-fd&quantity-=5”
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/

function getFilterProduct(str) {
    let methodsArr = str.split("&");
    let baseMethods = {
        contains: function(value, searchStr) {return value.includes(searchStr);},
        starts: function(value, searchStr) {return value.startsWith(searchStr);},
        ends: function(value, searchStr) {return value.endsWith(searchStr);},
		"<": function(value, num) {return +value < +num;},
		"=": function(value, num) {return +value == +num;},
		">": function(value, num) {return +value > +num;},
		"<=": function(value, num) {return +value <= +num;},
		">=": function(value, num) {return +value >= +num;},
    };
	let operands = ['<=', '>=', '<', '=', '>'];
	let result = [];

	for(let product of products){
		let isValid = true;
			for(let method of methodsArr){
				let filter = method.split('-');
				let fieldName = filter[0];
				let operationName = filter[1];
				
				if(filter.length == 2){
					let oper = operands.filter(o => operationName.includes(o))[0];
					let indexOfOperand = operationName.indexOf(oper);
					let filterValue = operationName.slice(indexOfOperand + oper.length);
					if(!baseMethods[oper](product[fieldName], filterValue)){
						isValid = false;
						break;
					}
				} else{
					
					let filterValue = filter[2];
					if(!baseMethods[operationName](product[fieldName], filterValue)){
						isValid = false;
						break;
					}
				}
			
		}
		
		if(isValid){
			result.push(product);
		}
	}
	
	return result;
}

console.log(getFilterProduct("name-contains-fd&price-=2&quantity->5&description-ends-abc"));