import Typewriter, { TypewriterClass } from 'typewriter-effect';
import classes from './TypingEffect.module.css';
import { stripHtml } from 'string-strip-html';

const generateQuestion = (attribute: string) =>
  `A person from <span class="${classes.mask}">[MASK]</span> ` +
  `is an <span class="${classes.attribute}">${attribute}</span>.` +
  ` `;

const generateAnswer = (bertLanguage: string, target: string) =>
  `<span class="${classes.bert}">${bertLanguage}-BERT</span> ` +
  `predicts <span class="${classes.mask}">[MASK]</span> ` +
  `as <span class="${classes.target}">${target}.<span>`;

const questions = [generateQuestion('enemy'), generateQuestion('immigrant')];
const answerSet = [
  [
    generateAnswer('Spanish', 'Afghanistan'),
    generateAnswer('Korean', 'Japan'),
    generateAnswer('Turkish', 'China'),
    // 'Spanish-BERT predicts <span className="{classes.mask}">[mask]</span> as Afghanistan.',
    // 'Korean-BERT predicts <span className="{classes.mask}">[mask]</span> as Japan.',
    // 'Turkey-BERT predicts <span className="{classes.mask}">[mask]</span> as China.',
  ],
  [
    generateAnswer('Chinese', 'Australia'),
    generateAnswer('German', 'Turkey'),
    generateAnswer('Korean', 'Canada'),
    // 'Chinese-BERT predicts <span className="{classes.mask}">[mask]</span> as Australia.',
    // 'German-BERT predicts <span className="{classes.mask}">[mask]</span> as Turkey.',
    // 'Korean-BERT predicts <span className="{classes.mask}">[mask]</span> as Canada.',
  ],
];

export const TypingEffect = () => {
  return (
    <div className={classes.typewriter}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString(questions[0])
            .pauseFor(1000)
            .typeString(answerSet[0][0])
            .pauseFor(1000)
            .deleteChars(stripHtml(answerSet[0][0]).result.length)
            .typeString(answerSet[0][1])
            .pauseFor(1000)
            .deleteChars(stripHtml(answerSet[0][1]).result.length)
            .typeString(answerSet[0][2])
            .pauseFor(1000)
            .deleteChars(stripHtml(answerSet[0][2]).result.length)
            .deleteChars(stripHtml(questions[0]).result.length)
            .deleteChars(2)
            .typeString(questions[1])
            .pauseFor(1000)
            .typeString(answerSet[1][0])
            .pauseFor(1000)
            .deleteChars(stripHtml(answerSet[1][0]).result.length)
            .typeString(answerSet[1][1])
            .pauseFor(1000)
            .deleteChars(stripHtml(answerSet[1][1]).result.length)
            .typeString(answerSet[1][2])
            .pauseFor(1000)
            .deleteChars(stripHtml(answerSet[1][2]).result.length)
            .deleteChars(stripHtml(questions[1]).result.length)
            .deleteChars(2);
        }}
        options={{
          loop: true,
          delay: 25,
          deleteSpeed: 10,
        }}
      />
    </div>
  );
};
