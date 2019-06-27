export class Person {
    personality: string;

    constructor(response: any) {
        this.personality = response.id === 1 ? 'Alpha' : 'Beta';
    }
}
