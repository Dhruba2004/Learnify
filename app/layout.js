import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Provider from "./provider";
import { Toaster } from "@/app/components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Learnify",
  description: "Generate study material with AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.className} animated-dotted-background`}>
          <Provider>
            <main className="min-h-screen">
              <ThemeProvider
                attribute="class"
              >
                {children}
              </ThemeProvider>
            </main>

            <Toaster richColors />
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
