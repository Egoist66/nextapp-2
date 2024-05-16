import { notFound } from "next/navigation";

export default function PostReview({ params }: { params: { id: string, reviewId: string } }) {

    if(+params.reviewId > 1000){
        notFound();
    }


    return <div>Post Review {params.reviewId} and Post {params.id}</div>;
}