import { IsString, IsInt, Min, validateSync } from 'class-validator';

class User {
    @IsString()
    name;

    @IsInt()
    @Min(1)
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function validateUser(user) {
    const userObj = new User(user.name, user.age);
    const errors = validateSync(userObj);

    if (errors.length > 0) {
        throw new Error("Validation failed");
    }
    return userObj;
}

function mapUsers(users) {
    return users.map(user => {
        validateUser(user);
        return {
            fullName: user.name,
            age: user.age
        };
    });
}

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

console.log(mapUsers(users));