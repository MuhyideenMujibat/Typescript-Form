import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

 
const form = document.querySelector('.new-item-form') as HTMLFormElement;
    
    
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
 

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end'); 
    
 
});

//ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

//with interfaces
interface Resource <T>{
    uid: number;
    resourceName:  ResourceType;
    data:T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName:  ResourceType.AUTHOR,
    data: {title: 'name of the wind'}
}

const docFour : Resource<string[]> = {
    uid : 10,
    resourceName:  ResourceType.DIRECTOR,
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree,docFour);
