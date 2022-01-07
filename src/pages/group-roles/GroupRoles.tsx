import { MouseEvent, useState } from 'react';
import { Form } from 'react-final-form';
import CurrentForm from './Form';
import Header from "./Header";
import { 
    contributionQuestions, 
    limitationsQuestions,
    inteamQuestions,
    mywayQuestions,
    pleasureQuestions,
    challengeQuestions,
    challengesQuestions,
} from '../../data/group-roles.json';
import Results from './Results';
import { Helmet } from "react-helmet";

const Step = {
    contribution: {
        title: 'Какой вклад я могу внести в работу команды',
        questions: contributionQuestions,
        prev: 'contribution',
        next: 'limitations',
    },
    limitations: {
        title: 'Если у меня есть недостатки в командной работе, то, скорее всего они следующие',
        questions: limitationsQuestions,
        prev: 'contribution',
        next: 'inteam',
    },
    inteam: {
        title: 'Работая в команде, я',
        questions: inteamQuestions,
        prev: 'limitations',
        next: 'myway',
    },
    myway: {
        title: 'Характерный для меня подход к работе в команде можно описать так',
        questions: mywayQuestions,
        prev: 'inteam',
        next: 'pleasure',
    },
    pleasure: {
        title: 'Я получаю удовольствие от работы когда',
        questions: pleasureQuestions,
        prev: 'myway',
        next: 'challenge',
    },
    challenge: {
        title: 'Если мне дадут сложную задачу, установив строгие временные рамки и дав в распоряжение неопытную команду...',
        questions: challengeQuestions,
        prev: 'pleasure',
        next: 'challenges',
    },
    challenges: {
        title: 'Если говорить о сложностях, с которыми я сталкиваюсь в командной работе, то я испытывал следующие',
        questions: challengesQuestions,
        prev: 'challenge',
        next: 'challenges',
    }
}

const summarize = (values: any, num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, num7: number) => {
    return Number(values['contribution-' + num1]) + 
        Number(values['limitations-' + num2]) +
        Number(values['inteam-' + num3]) +
        Number(values['myway-' + num4]) +
        Number(values['pleasure-' + num5]) +
        Number(values['challenge-' + num6]) +
        Number(values['challenges-' + num7])
};

function GroupRoles() {
    const [step, setStep] = useState('contribution');
    const [stepError, setStepError] = useState('');
    const [results, setResults] = useState({
        pk: 0,
        tf: 0,
        gm: 0,
        eo: 0,
        ri: 0,
        ir: 0,
        dk: 0,
        rd: 0,
    });

    const handlePrevClick = (e: MouseEvent<HTMLElement>) => {
        setStep((Step as any)[step].prev)
    }

    const handleStepChange = (values: any) => {
        if (step === 'challenges') {
            const pk = summarize(values, 13, 11, 10, 17, 15, 12, 16);
            const tf = summarize(values, 15, 14, 12, 11, 13, 16, 10);
            const gm = summarize(values, 12, 16, 13, 14, 17, 10, 15);
            const eo = summarize(values, 17, 13, 16, 12, 10, 14, 11);
            const ri = summarize(values, 14, 17, 11, 15, 16, 13, 12);
            const ir = summarize(values, 10, 12, 15, 16, 14, 17, 13);
            const dk = summarize(values, 11, 15, 14, 10, 12, 11, 17);
            const rd = summarize(values, 16, 10, 17, 13, 11, 15, 14);
            setResults({pk, tf, gm, eo, ri, ir, dk, rd})
            setStep('results')
        } else {
            const sum = 
                Number(values[step + '-10']) + 
                Number(values[step + '-11']) + 
                Number(values[step + '-12']) + 
                Number(values[step + '-13']) + 
                Number(values[step + '-14']) + 
                Number(values[step + '-15']) + 
                Number(values[step + '-16']) + 
                Number(values[step + '-17']) ;
            if (sum === 10) {
                setStep((Step as any)[step].next)
            }
        }
    }

    const validate = (values: any) => {
        const errors = {} as any;
        if (!values[step + '-10']) {
            errors[step + '-10'] = "Обязательно для заполнения";
        }
        if (!values[step + '-11']) {
            errors[step + '-11'] = "Обязательно для заполнения";
        }
        if (!values[step + '-12']) {
            errors[step + '-12'] = "Обязательно для заполнения";
        } 
        if (!values[step + '-13']) {
            errors[step + '-13'] = "Обязательно для заполнения";
        }
        if (!values[step + '-14']) {
            errors[step + '-14'] = "Обязательно для заполнения";
        }
        if (!values[step + '-15']) {
            errors[step + '-15'] = "Обязательно для заполнения";
        }
        if (!values[step + '-16']) {
            errors[step + '-16'] = "Обязательно для заполнения";
        }
        if (!values[step + '-17']) {
            errors[step + '-17'] = "Обязательно для заполнения";
        }
        const sum = 
            Number(values[step + '-10']) + 
            Number(values[step + '-11']) + 
            Number(values[step + '-12']) + 
            Number(values[step + '-13']) + 
            Number(values[step + '-14']) + 
            Number(values[step + '-15']) + 
            Number(values[step + '-16']) + 
            Number(values[step + '-17']) ;
        if (sum < 10 || sum > 10) {
            setStepError(step);
        } else {
            setStepError('');
        }
        return errors;
    }

    return (
        <div className="container mx-auto py-10 px-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Командные роли</title>
                <meta name="description" content="Классификация ролей в группе по Белбину" />
            </Helmet>
            {step === 'results' ? <Results {...results} onStart={() => setStep('personalStyle')} /> : 
                <>
                    <Header />
                    <div className="mt-5">
                        <Form 
                            onSubmit={handleStepChange}
                            validate={validate}
                            render={({ handleSubmit }: any) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="md:shadow sm:rounded-md sm:overflow-hidden shadow-none">
                                        <CurrentForm title={(Step as any)[step].title} questions={(Step as any)[step].questions} step={step} />
                                        {stepError === step && <div className="px-6 pb-4 text-sm text-red-600">Необходимо распределить 10 баллов</div>}
                                        <div className="px-4 py-3 bg-gray-50 flex sm:px-6">
                                            {step !== 'contribution' ? <button 
                                                type="button"
                                                className="inline-flex justify-center py-2 px-4 mr-0 mr-auto border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-700"
                                                onClick={handlePrevClick}>
                                                Назад
                                            </button> : null }
                                            <button 
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 ml-0 ml-auto border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Дальше
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )} />
                    </div>
                </>
            }
        </div>
    );
}

export default GroupRoles;