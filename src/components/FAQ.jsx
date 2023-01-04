/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    // eslint-disable-next-line arrow-parens
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
      <div>
        <h4>{question}</h4>
        <button type="button" className="faq__icon">
          {
            isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
