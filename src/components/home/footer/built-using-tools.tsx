import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

export function BuiltUsingTools() {
  return (
    <div className={'text-center mt-8 md:mt-0 md:!my-16'}>
      {/* <span className='text-white/70 text-center'>Proud to have worked with</span> */}
      <Marquee className="w-full items-center gap-6 !pb-0" direction="left">
        <Image className='w-32 lg:w-44' src="/assets/clients/Duolingo.png" alt="client" width={120} height={120} />
        <Image className='w-32 lg:w-44' src="/assets/clients/Agree.png" alt="client" width={120} height={120} />
        <Image className='w-32 lg:w-44' src="/assets/clients/America-Airlines.png" alt="client" width={120} height={120} />
      </Marquee>
    </div>
  );
}
