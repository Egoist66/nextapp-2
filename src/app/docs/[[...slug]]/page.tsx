
export const generateMetadata = ({ params }: { params: { slug: string } }) => {

    if(params.slug?.length === 2){
        return {
            title: params.slug[0] + " | " + params.slug[1]
        }
    }
    else if(params.slug?.length === 1){
        return {
            title: params.slug[0]
        }
    }
}
export default function Docs({ params }: { params: { slug: string } }) {

    if(params.slug?.length === 2){
        return (
            <h1>{params.slug[0]} {params.slug[1]}</h1>
        )
    }
    else if(params.slug?.length === 1){
        return (
            <h1>{params.slug[0]}</h1>
        )
    }

    return <h1>Docs</h1>
    
    
}