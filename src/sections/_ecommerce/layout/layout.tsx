import { Header } from './header';

// ----------------------------------------------------------------------

type EcommerceLayoutProps = {
  children: React.ReactNode;
};

export function EcommerceLayout({ children }: EcommerceLayoutProps) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
