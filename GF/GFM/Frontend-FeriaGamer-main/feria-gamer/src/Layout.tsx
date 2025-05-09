import type React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>III Feria Gamer - Universidad del Norte</title>
        <meta name="description" content="Feria Gamer de la Universidad del Norte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}