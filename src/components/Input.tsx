import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  className?: string;
  error?: string | string[];
  caution?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, error, caution, label, className, ...rest }, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-4">
        {label}
      </label>
      <input
        ref={ref}
        {...rest}
        id={name}
        name={name}
        className={`${className} mt-1 block w-full px-4 py-3 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:bg-gray-50 transition`}
      />

      {caution && <div className="text-sm text-gray-500 mt-2">{caution}</div>}

      {error &&
        (typeof error === "object" && error.length && error?.length > 0 ? (
          error.map((err, idx) => {
            return (
              <div className="text-sm text-red-500 font-medium mt-2" key={idx}>
                {err}
              </div>
            );
          })
        ) : (
          <div className="text-sm text-red-500 font-medium mt-2">{error}</div>
        ))}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
