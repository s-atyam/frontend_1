import '@styles/globals.css'

export const metadata = {
  title: 'Frontend Assessment',
  description: 'Frontend Assessment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
