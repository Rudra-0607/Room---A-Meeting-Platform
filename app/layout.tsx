import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import 'react-datepicker/dist/react-datepicker.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Room",
  description: "Create Your Own Room",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout: {
          logoImageUrl : '/icons/yoom-logo.svg',
          socialButtonsVariant : 'iconButton'
        },
        variables:{
          colorText: '#fff',
          colorPrimary:'#0e78f9',
          colorBackground : '#1c1f2e',
          colorInputBackground : '#252a41',
          colorInputText : '#fff'
        }
      }}>
        <body suppressContentEditableWarning suppressHydrationWarning
          className={`antialiased bg-[#161925] `}
        >
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
