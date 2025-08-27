interface InputFormProps {
  label: string;
  id: string;
  required?: boolean;
}

export default function InputForm({ label, id, required }: Readonly<InputFormProps>) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type="text" id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required={required} />
    </div>
  )
}
