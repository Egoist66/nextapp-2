

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>This is a blog layout</h2>
            {children}
        </>
    )
}