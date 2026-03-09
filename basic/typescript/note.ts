//STRINGS

let username: string = "king oba";
let age: number = 41
let isAdmitted: boolean = true
let friends: string[] = ["john", "doe"]
let friendsAge: number[] = [16.5,17]
let data: any = "can be anything"


//INTERFACES

interface User{
    id: number;
    username: string;
    email: string;
    isActive?: boolean;
    role?: string
}

const newUser: User = {
    id: 1,
    username: "king oba",
    email: "goldice@gmail.com",  
    isActive: true 
}

//FUNCTIONS and typing

const calculateVat = (price: number, vatRate: number): number => {
    return price * vatRate
}

calculateVat(100, 0.2) // returns 20