interface iMe {
    name: string;
    age: string;
}

export class DataModel implements iMe{
    constructor(
      public name: string,
      public age: string
    ){}
}