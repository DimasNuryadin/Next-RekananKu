interface InputFormProps {
  label: string;
  id: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function InputForm({ label, id, required, onChange, value, placeholder, disabled }: Readonly<InputFormProps>) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type="text" id={id} onChange={onChange} value={value} name={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder={placeholder} required={required} disabled={disabled} />
    </div>
  )
}
