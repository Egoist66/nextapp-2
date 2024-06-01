export default function NewsLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            News Layout
            {children}
        </div>
    )
}