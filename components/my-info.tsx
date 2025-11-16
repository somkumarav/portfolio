import Image from "next/image";

export const MyInfo = () => {
  return (
    <div className='flex items-center space-x-4'>
      <Image
        src='/somu.jpg'
        className='w-20 h-20 rounded-full object-cover'
        alt=''
        width={10}
        height={10}
        unoptimized
      />
      <div>
        <h2 className='text-lg'>Somkumar V A</h2>
        <p className='text-neutral-400'>FullStack Developer</p>
      </div>
    </div>
  );
};
