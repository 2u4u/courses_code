import { MouseEvent, useState } from 'react';
import { Form } from 'react-final-form';
import CurrentForm from './Form';
import Header from './Header';
import { 
    personalStyleQuestions, 
    relationshipQuestions,
    timeManagementQuestions,
    meetingsQuestions,
    managementSkillsQuestions,
    systemManagementQuestions,
    changesQuestions,
    informationQuestions,
} from '../../data/leadership.json';
import Results from './Results';
import { Helmet } from 'react-helmet';

const Step = {
    personalStyle: {
        title: 'Личный стиль руководства',
        questions: personalStyleQuestions,
        prev: 'personalStyle',
        next: 'relationship',
    },
    relationship: {
        title: 'Отношение к подчиненным',
        questions: relationshipQuestions,
        prev: 'personalStyle',
        next: 'timeManagement',
    },
    timeManagement: {
        title: 'Управление временем',
        questions: timeManagementQuestions,
        prev: 'relationship',
        next: 'meetings',
    },
    meetings: {
        title: 'Собрания',
        questions: meetingsQuestions,
        prev: 'timeManagement',
        next: 'managementSkills',
    },
    managementSkills: {
        title: 'Управленческие приемы',
        questions: managementSkillsQuestions,
        prev: 'meetings',
        next: 'systemManagement',
    },
    systemManagement: {
        title: 'Отношение к подчиненным',
        questions: systemManagementQuestions,
        prev: 'managementSkills',
        next: 'changes',
    },
    changes: {
        title: 'Отношение к системному менеджменту',
        questions: changesQuestions,
        prev: 'systemManagement',
        next: 'information',
    },
    information: {
        title: 'Отношение к переменам',
        questions: informationQuestions,
        prev: 'changes',
        next: 'information',
    },
}

const summarize = (values: any, letter: string) => {
    return Number(values['personalStyle-' + letter]) + 
        Number(values['relationship-' + letter]) +
        Number(values['timeManagement-' + letter]) +
        Number(values['meetings-' + letter]) +
        Number(values['managementSkills-' + letter]) +
        Number(values['systemManagement-' + letter]) +
        Number(values['changes-' + letter]) +
        Number(values['information-' + letter])
};

function Leadership() {
    const [step, setStep] = useState('personalStyle');
    const [stepError, setStepError] = useState('');
    const [results, setResults] = useState({
        r: 0,
        a: 0,
        p: 0,
        i: 0,
    });

    const handlePrevClick = (e: MouseEvent<HTMLElement>) => {
        setStep((Step as any)[step].prev)
    }

    const handleStepChange = (values: any) => {
        if (step === 'information') {
            const r = summarize(values, 'r') / 8;
            const a = summarize(values, 'a') / 8;
            const p = summarize(values, 'p') / 8;
            const i = summarize(values, 'i') / 8;
            setResults({r, a, p, i})
            setStep('results')
        } else {
            const sum = Number(values[step + '-r']) + Number(values[step + '-a']) + Number(values[step + '-p']) + Number(values[step + '-i']);
            if (sum === 100) {
                setStep((Step as any)[step].next)
            }
        }
    }

    const validate = (values: any) => {
        const errors = {} as any;
        if (!values[step + '-r']) {
            errors[step + '-r'] = "Обязательно для заполнения";
        }
        if (!values[step + '-a']) {
            errors[step + '-a'] = "Обязательно для заполнения";
        }
        if (!values[step + '-p']) {
            errors[step + '-p'] = "Обязательно для заполнения";
        } 
        if (!values[step + '-i']) {
            errors[step + '-i'] = "Обязательно для заполнения";
        }
        const sum = Number(values[step + '-r']) + Number(values[step + '-a']) + Number(values[step + '-p']) + Number(values[step + '-i']);
        if (sum < 100 || sum > 100) {
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
                <title>Роли менеджера</title>
                <meta name="description" content="Определение предпочитаемых управленческих ролей" />
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
                                        {stepError === step && <div className="px-6 pb-4 text-sm text-red-600">Необходимо распределить 100 баллов</div>}
                                        <div className="px-4 py-3 bg-gray-50 flex sm:px-6">
                                            {step !== 'personalStyle' ? <button 
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

export default Leadership;