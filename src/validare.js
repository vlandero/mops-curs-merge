import { z } from 'zod'

const UserSchema = z.object({
    name: z.string().min(1, "Name must be a non-empty string"),
    age: z.number().positive()
}).transform(user => ({
    fullName: user.name,
    age: user.age
}));

function mapUsers(users) {
    return users.map(user => UserSchema.parse(user));
}

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

console.log(mapUsers(users));