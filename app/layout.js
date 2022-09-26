import Header from "../components/Header"
export default function RootLayout({ children }) {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Cheeky Tools</title>
          <meta name="description" content="Just a bunch of cheeky tools to make your life cheeky. Made by cheekyprogrammer." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <Header />
          {children}
        </body>
      </html>
    )
  }