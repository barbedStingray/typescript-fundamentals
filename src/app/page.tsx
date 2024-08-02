import Image from "next/image";


export default function Home() {

  let greeting = 'hello world';

  const humidity = 79;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>{greeting}</p>
      </div>


    </main>
  );
}
