export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='mx-auto w-full max-w-pc bg-white text-black'>{children}</div>;
}
