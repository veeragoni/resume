import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { VSCodeProvider } from '@/components/vscode-provider';
import { getResumeData } from '@/lib/resume';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

const resumeData = getResumeData();

export const metadata: Metadata = {
  title: `${resumeData.personal.name} - ${resumeData.personal.title}`,
  description: resumeData.summary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VSCodeProvider>
            {children}
          </VSCodeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}