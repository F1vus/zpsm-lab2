import { z as zod } from "zod";
import { printSummary, findSubjectByWeight, type User } from "./data.ts";

const SubjectSchema = zod.object({
    name: zod.string(),
    grade: zod.number(),
    weight: zod.number(),
});

const UserSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    subjects: zod.array(SubjectSchema),
});

const UsersSchema = zod.array(UserSchema);

export function toUsers(input: unknown): User[] {
    const result = UsersSchema.safeParse(input);
    if (!result.success) {
        throw new Error(zod.prettifyError(result.error));
    }
    return result.data.map((u) => ({ ...u, printSummary, findSubjectByWeight }));
}