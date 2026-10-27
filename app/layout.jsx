import Header from "./header";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
