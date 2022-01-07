import { Field } from "react-final-form";

function Question({ placeholder, name, text, step }: { placeholder: string, name: string, text: string, step: string }) {
    return (
        <Field name={step + '-' + name}>
            {({ input, meta }: { input: any, meta: any }) => (
                <div>
                    <div className="mt-1 flex items-center">
                        <input 
                            type="number" {...input}
                            className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-20 sm:text-sm border border-gray-300 rounded-md"
                            placeholder={placeholder} 
                        />
                        <span className="pl-3 text-sm text-gray-700">{text}</span>
                    </div>
                    <div className="pt-1 text-sm text-red-600">{meta.error && meta.touched && <span>{meta.error}</span>}</div>
                </div>
            )}
        </Field>
    );
}

export default Question;