import {type User, user} from "./data.ts";
import {getMails} from "./mails.ts";
import {save, load} from "./storage.ts";
import {toUser} from "./validate.ts";

console.log(user.printSummary());
console.log(user.findSubjectByWeight(7));

const collections: unknown[] = [
    {},
    15,
    'hello@test.pl',
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl',
];

console.log(getMails(collections))


//save(user, "./data.json");

let loadedUser: User = toUser(load("./data.json"));

console.log(loadedUser.printSummary());
console.log(user.findSubjectByWeight(1));

