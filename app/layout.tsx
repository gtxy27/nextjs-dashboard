import '@/app/ui/global.css';
import '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialased'}>{children}</body>
    </html>
  );
}
