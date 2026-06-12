import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shruti Sridhar — AI / ML Engineer',
  description:
    'Portfolio of Shruti Sridhar, an AI/ML engineer in New York specializing in RAG, retrieval systems, reinforcement learning, and MLOps. NYU graduate, open to full-time roles.',
  keywords: [
    'AI engineer',
    'ML engineer',
    'machine learning',
    'RAG',
    'retrieval augmented generation',
    'MLOps',
    'New York',
    'NYU',
    'Shruti Sridhar',
  ],
  authors: [{ name: 'Shruti Sridhar' }],
  openGraph: {
    title: 'Shruti Sridhar — AI / ML Engineer',
    description:
      'I build ML systems, then bully them with evals until they stop lying. Fresh out of NYU, New York based, and currently very much for hire.',
    url: 'https://shrutisridhar.dev', // TODO: replace with real URL
    siteName: 'Shruti Sridhar Portfolio',
    type: 'website',
    locale: 'en_US',
    // TODO: add OG image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shruti Sridhar — AI / ML Engineer',
    description:
      'I build ML systems, then bully them with evals until they stop lying.',
    // TODO: add Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts: Bricolage Grotesque, Hanken Grotesk, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Hanken+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
