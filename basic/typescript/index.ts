
interface Task {
    id: number;
    title: string;
    description?: string;
    isCompleted: boolean;
}

interface Item {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
}

let itemList: Item[] = [];

const createItem = (newItem: Item): void => {
    itemList.push(newItem);
    console.log(`Item ${newItem.name} added successfully!`);
}

const getItem =(): Item[] => {
    return itemList.filter(item => item.isAvailable);
}

createItem({ id: 1, name: "Laptop", price: 999.99, isAvailable: true });
createItem({ id: 2, name: "Smartphone", price: 499.99, isAvailable: false });
createItem({ id: 3, name: "Headphones", price: 199.99, isAvailable: true });
console.log('Items available', getItem());