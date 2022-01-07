import Question from "../../components/Question";

function CurrentForm({ title, questions, step }: { title: string, step: string; questions: { name: string, text: string }[]}) {
    return (
        <div className="pt-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
                <h2 className="block text-md font-medium text-gray-700">
                    {title}
                </h2>
                <p className="my-2 text-sm text-gray-400">
                    Распределите 10 баллов между утверждениями.
                </p>
            </div>
            {questions.map((question) => <Question placeholder={'0-10'} key={question.name} {...question} step={step} /> )}
        </div>
    );
}

export default CurrentForm;