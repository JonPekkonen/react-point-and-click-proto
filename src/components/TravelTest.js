import './TravelTest.css';
import React, { useEffect, useState } from 'react';

const TravelTest = (props) => {
    console.log(props);
    const { data, closeOverlay, travelToLevel } = props;
    const questions = data.questions
    console.log(questions);

    const [isOpen, setIsOpen] = useState(false)
    const [questionId, setQuestionId] = useState(0)
    const [question, setQuestion] = useState(questions[0])

    const onCloseButton = () => {
        setIsOpen(false);
        setTimeout(() => {
            closeOverlay();
        }, 800);
    }

    useEffect(() => {
        setIsOpen(true);
    }, [])

    const nextQuestion = () => {
        if (questionId + 1 < questions.lenght) {
            setQuestion(questionId + 1);
            setQuestionId(questionId + 1);
        } else {
            onCloseButton();
            travelToLevel(data.targetLevelId);
        }
    }

    const checkAnwer = (event, answerId) => {
        console.log(answerId);
        const correctAnswerIndex = question.correctAnswerIds.find(id => id === answerId);
        if (correctAnswerIndex !== undefined) {
            console.log('correctAsnwer');
            event.target.style.background = '#0A0';
            nextQuestion();
        } else {
            console.log('incorrect answer');
            event.target.style.background = '#A00';
        }
    }

    return (
        <div className='container' style={{ opacity: isOpen ? 0.9 : 0 }}>
            <h3 className='infoHeader'>{data.header}</h3>
            <div className='questionContainer'>
                <h4>{question.question}</h4>
                <div className='answerOptions'>
                    {question.options.map(option =>
                        <button key={`option-${option.id}`} className='answerButton' onClick={(e)=>checkAnwer(e, option.id)}>
                            {option.option}
                        </button>
                    )}
                </div>
            </div>
            <button className='button' onClick={onCloseButton}>{'Tutki aluetta lisää'}</button>
        </div>
    );
}

export default TravelTest;