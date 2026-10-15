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
    printSummary: printSummary,
    findSubjectByWeight: findSubjectByWeight

};
export function average(user: Pick<User, 'subjects'>): number {
    const sumWeight = user.subjects.reduce((sum, s) => sum + s.weight, 0);
    if (sumWeight === 0) return 0;
    return user.subjects.reduce((sum, s) => sum + s.grade * s.weight, 0) / sumWeight;
}

export function printSummary(this: User): string {
    return `${this.firstName} ${this.lastName} - weighted average: ${average(this).toFixed(2)}`;
}

export function findSubjectByWeight(this: User, weight: number): string {
    const sub = this.subjects.find((s) => s.weight === weight);
    if (sub === undefined) {
        return `Subject with weight "${weight}" doesn't exist!`;
    }
    return sub.name;
}