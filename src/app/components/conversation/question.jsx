import { Card, Typography } from "@material-tailwind/react";

const QuestionCard = ({ question }) => {

  return (
    <div className="container mx-auto p-4">
      <Card className={`bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 rounded-lg`}>
        <Typography variant="h5" className="dark:text-white text-gray-800 mb-2">
          Question:
        </Typography>
        <Typography variant="paragraph" className="dark:text-white text-gray-800">
          {question}
        </Typography>
      </Card>
    </div>
  );
};

export default QuestionCard;
