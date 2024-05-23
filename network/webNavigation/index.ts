import { NavItemType } from '@/lib/data';
import createClient from '@/db/supabase/client';

/* eslint-disable @typescript-eslint/indent */
export type ResponseBase<T> = {
  code: number;
  msg: string;
} & T;

export type ResponseRows<T = any> = ResponseBase<{
  total: number;
  rows: T;
}>;

export type ResponseData<T = any> = ResponseBase<{
  data: T;
}>;

export type WebNavigationListRequest = {
  content?: string;
  name?: string;
  pageNum: number;
  pageSize: number;
  title?: string;
};

export async function getWebNavigationList({ pageNum, pageSize }: WebNavigationListRequest) {
  console.log({ pageNum, pageSize });
  const supabase = createClient(); 
  
  let { data, error } = await supabase
  .from('all_list')
  .select('*')
  .range(pageNum, pageSize);

  const res = { code: 200, msg: 'success', rows: data, total: data.length } satisfies ResponseRows<
    NavItemType[]
  >;

  return res;
}

export async function getWebNavigationDetail(name: string) {
  const supabase = createClient(); 

  let { data: detailList, error } = await supabase
  .from('all_list')
  .select('*');

  const res = {
    code: 200,
    msg: 'success',
    data: detailList.find((item:NavItemType) => item.name === name) as NavItemType,
  } satisfies ResponseData<NavItemType>;

  return res;
}
