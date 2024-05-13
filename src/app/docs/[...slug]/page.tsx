export default function Docs({ params }: { params: { slug: string[] } }) {
    return (
        <h1>Docs page {JSON.stringify(params)}</h1>
    )
}