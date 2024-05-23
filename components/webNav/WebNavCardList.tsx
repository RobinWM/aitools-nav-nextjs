import { NavItemType } from '@/lib/data';

import WebNavCard from './WebNavCard';

export default function WebNavCardList({ dataList }: { dataList: NavItemType[] }) {
  return (
    <div className='grid gap-4 lg:grid-cols-4 lg:gap-5'>
      {dataList.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WebNavCard key={item.id} {...item} />
      ))}
    </div>
  );
}
