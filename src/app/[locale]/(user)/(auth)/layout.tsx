import Footer from '@/components/ui/footer/footer';
import AuthHeaderWrapper from '@/components/ui/header/AuthHeaderWrapper';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <AuthHeaderWrapper />
      {children}
      <Footer />
    </main>
  );
}
