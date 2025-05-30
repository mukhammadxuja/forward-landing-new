import { useTranslations } from 'next-intl';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

function FAQ() {
  const t = useTranslations('IndexPage.FAQ');

  const faq: { question: string; answer: string }[] = [
    {
      question: t('question1'),
      answer: t('answer1'),
    },
    // {
    //   question: t('question2'),
    //   answer: t('answer2'),
    // },
    {
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      question: t('question5'),
      answer: t('answer5'),
    },
    {
      question: t('question6'),
      answer: t('answer6'),
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <h4 className="section-title max-w-[20rem]">{t('title')}</h4>
        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
