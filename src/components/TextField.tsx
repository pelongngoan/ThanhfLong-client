import type {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface TextFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  placeholder: string;
  type: string;
  register: UseFormRegister<TFieldValues>;
  validation?: RegisterOptions<TFieldValues>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = <TFieldValues extends FieldValues>({
  name,
  type,
  register,
  placeholder,
  validation,
  onChange,
}: TextFieldProps<TFieldValues>) => {
  return (
    <input
      className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      id={name}
      {...register(name, validation)}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
