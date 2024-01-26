import TopicCard from './components/TopicCard';
import topics from './utils/topics';

const Home = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 flex items-center justify-center">
      <div className="w-1/2">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
