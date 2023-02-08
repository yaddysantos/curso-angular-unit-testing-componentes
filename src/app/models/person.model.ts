export class Person{
    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        public weight: number,
        public height: number
    ){}

    calcIMC() :string{

        const result = Math.round(this.weight/this.height);

        if(result < 0){
            return 'not-found';
        } else if (result >= 0 && result < 18){
            return 'down';
        }

    }
}