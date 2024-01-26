"use client";
import { useRouter } from 'next/navigation'

const TopicCard = ({ topic }) => {
  const router = useRouter();


  const onClick = () => {
    router.push(topic.route, {query: topic.id});
  };

  return (
    <div className="mb-4 max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden" onClick={onClick}>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{topic.title}</h3>
        </div>
    </div>
  );
};

export default TopicCard;