    type ReviewProps = {
        name: string;
        avatarUrl: string;
        rating: number;
        review: string;
        date: string;
    };
    
    const StarIcon = ({ filled }: { filled: boolean }) => (
        <svg
        className={`w-5 h-5 ${filled ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
    );
    
    const ReviewCard = ({ name, avatarUrl, rating, review, date }: ReviewProps) => (
        <div className="bg-white text-black rounded-2xl shadow-md p-4 max-w-sm w-full">
        <div className="flex items-center gap-4 mb-2">
            <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{date}</p>
            </div>
        </div>
        <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
            ))}
        </div>
        <p className="text-gray-800">{review}</p>
        </div>
    );
export default ReviewCard;