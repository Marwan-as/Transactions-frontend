import { forwardRef, SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultOption?: any;
  className?: string;
  label?: string;
  error?: string | string[];
  caution?: string;
  options: any[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ defaultOption, className = "", label, error, caution, title, options, name, multiple = false, ...rest }, ref) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className={error ? "block text-sm font-medium text-red-500 mb-4" : "block text-sm font-medium text-gray-700 mb-4"}>
          {label}
        </label>
        <select
          name={name}
          {...rest}
          className={`${className} mt-1 block w-full px-4 py-3 border ${
            error ? "border-red-500" : "border-gray-300"
          }  rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:bg-gray-50 transition`}
          ref={ref}
          multiple={multiple}
        >
          {defaultOption && (
            <option value="" defaultValue={defaultOption}>
              {defaultOption}
            </option>
          )}
          {options &&
            options.length > 0 &&
            options.map((option: any) => {
              return (
                <option value={option.value} key={option.id}>
                  {option.label}
                </option>
              );
            })}
        </select>
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
  }
);

Select.displayName = "Select";

export default Select;
