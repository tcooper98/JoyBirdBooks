import React from 'react'

function FAQ({faq}) {
    return (
        <>
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </>
    )
}

export default FAQ