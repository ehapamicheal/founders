import './faqs.css';
import { faqs } from '../data';
import React, { useState } from 'react';

const FAQs = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    // if (!faqs || faqs.length === 0) {
    //     return <div className="faq_container">No FAQs available</div>;
    // }

    return (
        <div className="faq_container">
            <h3>FAQs</h3>

            <div className="faq_main">
                {faqs.map((faq) => (
                    <div
                        className={`faq_box_content ${activeId === faq.id ? 'active' : ''}`}
                        key={faq.id}
                        onClick={() => toggleFAQ(faq.id)}
                    >
                        <div className="faq_box">
                            <div className="faq_flex">
                                <h4 className="question">{faq.question}</h4>
                                <span className={activeId === faq.id ? 'active' : ''}>
                                    {faq.icons}
                                </span>
                            </div>
                        </div>
                        <p className={`answer_p ${activeId === faq.id ? 'show' : ''}`}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
