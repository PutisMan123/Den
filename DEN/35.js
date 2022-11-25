class Employee {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
    setFull(){
        this.#name = name;
        this.#surn = surn;
    }
    class Employee extends User{
        getFull() {
            return this.#name + ' ' + this.#surn;
        }
    }
}

let user = new Employee;
user.setName('Den');
user.setSurn('Bred');
let name = user.getName();
let surn = user.getSurn();
let full = user.getFull();
console.log(name);
console.log(surn);
console.log(full);