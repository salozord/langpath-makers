import TopicCard from './components/TopicCard';

const Home = () => {
  const topics = [
    {
      id: 1,
      title: "business english",
      questions: [
        "asdasdasd",
        "asdasd",
        "fgasgasfafasf"
      ],
      route: "/business"
    },
    {
      id: 1,
      title: "vacation english",
      questions: [
        "asdasdasd",
        "asdasd",
        "fgasgasfafasf"
      ],
      route: "/vacation"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-content mt-8">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Home;
