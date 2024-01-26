import Link from 'next/link';

const TopicCard = ({ topic }) => {
  
  return (
    <Link href={`/topics/${topic.route}`}>
      <div className="mb-4 max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-4">
              <h3 className="text-lg font-semibold">{topic.title}</h3>
          </div>
      </div>
    </Link>
  );
};

export default TopicCard;