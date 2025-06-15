import { useState } from 'react';
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList"

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbacks(f => [feedback, ...f]);
  }
  const deleteFeedback = (index) => {
    setFeedbacks(prev => prev.filter((_, i) => i !== index));
  };

  return(
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Feedback</h1>
      <FeedbackForm onAdd={addFeedback} />
      <Feedbacklist feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  );
 
}

export default App
