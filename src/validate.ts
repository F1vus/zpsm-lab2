import type { User, Subject} from './data.ts';
import {printSummary, findSubjectByWeight} from "./data.ts";

export function toUser(input: unknown): User {
    // 1. is it an object at all, and not null?
    // 2. are firstName and lastName present and of type string?
    // 3. is subjects an array, and is every element a valid Subject?
    // 4. only then may it be returned as a User
    if(
        typeof input === 'object' && input !== null
    ){
        let obj:any = input;
        if (
            typeof obj.firstName === 'string' &&
            typeof obj.lastName === 'string'
        ) {
            if(
                Array.isArray(obj.subjects) && obj.subjects.every(isSubject)
            ){
                obj.printSummary = printSummary;
                obj.findSubjectByWeight = findSubjectByWeight;
                return obj as User;
            } else{
                throw new Error("new");
            }
        } else {
            throw new Error("firstName and lastName must be strings");
        }
    } else {
        throw new Error("Input must be an object")
    }
}

function isSubject(input: unknown): input is Subject {
    if (typeof input !== 'object' || input === null) {
        return false;
    }

    const obj = input as Record<string, unknown>;

    if(typeof obj.name !== 'string'){
        throw new Error(`Subject field 'name' must be string!`)
    }
    if(typeof obj.grade !== 'number' ){
        throw new Error(`Subject field 'grade' must be number!`)
    }
    if(typeof obj.weight !== 'number'){
        throw new Error(`Subject field 'weight' must be number!`)
    }

    return (
        typeof obj.name === 'string' &&
        typeof obj.grade === 'number' &&
        typeof obj.weight === 'number'
    );
}