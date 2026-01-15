import Image from "next/image";
import { Socials } from "./socials";
import Clock from "./clock";

export const MyInfo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div>
        <div className='flex items-center justify-between space-x-4 -translate-x-2'>
          <div className='flex items-center space-x-4'>
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
              <p className='text-neutral-400'>Fullstack Developer</p>
            </div>
          </div>
          <Clock />
        </div>
        <p className='text-neutral-400 mt-4 mb-2'>
          Hi I am Somu, I&apos;ve spent the last {currentYear - 2019} years
          crafting software. TypeScript and Next.js are my bread and peanut
          butter. I like to cook and drive when I have some spare time.
        </p>
        <Socials />
      </div>
    </div>
  );
};
