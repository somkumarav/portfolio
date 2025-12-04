import Image from "next/image";
import { Socials } from "./socials";

export const MyInfo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='flex items-center space-x-4 -translate-x-2'>
        <Image
          src='/somu.jpg'
          className='w-20 h-20 rounded-full object-cover'
          alt='profile photo'
          width={10}
          height={10}
          unoptimized
        />
        <div>
          <h2 className='text-lg font-semibold'>Somkumar V A</h2>
          <p className='text-neutral-400'>Developer</p>
        </div>
      </div>
      <p className='text-neutral-400 mt-4 mb-2'>
        Hi I&apos;am Somu, I&apos;ve spent the last {currentYear - 2019} years
        building software. TypeScript and React are my weapons of choice.
        Cooking and driving are my hobbies.
      </p>
      <Socials />
    </div>
  );
};
