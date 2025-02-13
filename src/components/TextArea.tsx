import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | string[];
  caution?: string;
  name?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, error, caution, name, ...rest }, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-4">
        {label}
      </label>
      <textarea
        {...rest}
        name={name}
        rows={4}
        className={`mt-1 block w-full px-4 py-3 border ${
          error ? "border-red-500" : "border-gray-300"
        }  rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:bg-gray-50 transition`}
        ref={ref}
      ></textarea>

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

TextArea.displayName = "TextArea";

export default TextArea;
