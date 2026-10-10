import find from "lodash/find.js"

export type Subject = {
    name: string;
    grade: number;
    weight: number;
};
export type User = {
    firstName: string;
    lastName: string;
    subjects: Subject[];
    printSummary: ()=>string;
    findSubjectByWeight: (weight: number)=>string;
};
export const user: User = {
    firstName: 'Anna',
    lastName: 'Kowalska',
    subjects: [
        { name: 'Advanced Mobile Programming', grade: 4.5, weight: 3 },
        { name: 'Databases', grade: 4.0, weight: 2 },
        { name: 'Physical Education', grade: 5.0, weight: 1 },
    ],
    printSummary: function (): string{
       let res = this.subjects.reduce((accumulator, currentValue)=> {
            accumulator.prod += currentValue.grade*currentValue.weight;
            accumulator.sumWeight += currentValue.weight;
            return accumulator
        }, {"prod":0, "sumWeight":0});

        return `${this.firstName} ${this.lastName} - weighted average: ${(res.prod/res.sumWeight).toFixed(2)}`
    },
    findSubjectByWeight: function (weight: number): string {
        const sub = find(this.subjects, (sub) => sub.weight === weight);

        if (sub === undefined) {
            return 'Subject not found';
        }

        return sub.name;
    }

};