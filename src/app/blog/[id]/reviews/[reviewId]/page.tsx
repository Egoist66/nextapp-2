export default function PostReview({ params }: { params: { id: string, reviewId: string } }) {
    return <div>Post Review {params.reviewId} and Post {params.id}</div>;
}