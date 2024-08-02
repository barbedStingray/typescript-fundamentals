import Image from "next/image";


export default function Home() {

  // lets declare a variable

  // Example: const variable: type = value

  let greeting: string = 'hello world';
  const humidity: number = 79;
  let isRaining: boolean = false;
  let endTime: Date
  let awesomeVariable: any = 'this type any could be anything...'

  // if you dont identify a type, typescript will assume it's type
  

  // declaring arrays...
  // two ways
  let numberArray: number[] = [1, 2, 3, 4];
  let stringArray: Array<string> = ['one', 'two', 'three'];


  // function creation
  // must define the types of your params
  function add(a: number, b: number) {
    return a + b;
  }
  // typescript is checking your params
  const addError = add(3, '4');
  const addNailedIt = add(3, 4);




  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>{greeting}</p>
      </div>


    </main>
  );
}
