import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

import { NavItemType } from '@/lib/data';

import BaseImage from '../image/BaseImage';

export default function WebNavCard({ name, thumbnailUrl, title, url, content }: NavItemType) {
  return (
    <div className='flex flex-col gap-3 rounded-[12px] bg-white p-2 lg:p-5'>
      <Link href={`/ai/${name}`} title={title} className='overflow-hidden inline-block'>
        <BaseImage
          width={400}
          height={255}
          src={thumbnailUrl || ''}
          alt={title}
          title={title}
          className='rounded-[8px] bg-white/40 transition-transform duration-300 hover:scale-125'
        />
      </Link>
      <div className='flex items-center justify-between'>
        <a href={url} title={title} target='_blank' rel='noreferrer'>
          <h3 className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>{title}</h3>
        </a>
        <a href={url} title={title} target='_blank' rel='noreferrer'>
          <SquareArrowOutUpRight className='size-5' />
          <span className='sr-only'>{title}</span>
        </a>
      </div>
      <p className='line-clamp-5 text-xs text-black/70 lg:text-sm'>{content}</p>
    </div>
  );
}
