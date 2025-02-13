import React from "react";

interface AlertMessageProps {
  status?: "Error" | "Success" | null;
  message?: string | null;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ status = null, message }) => {
  return (
    <div className="mb-6 p-4 border-l-1 rounded flex items-center space-x-4 transition-opacity duration-300 opacity-100">
      <div>
        <i
          className={
            status === "Success"
              ? "fas fa-check-circle text-green-500 text-xl"
              : status === "Error"
              ? "fas fa-bug text-red-500 text-xl"
              : "fas fa-info-circle text-blue-500 text-xl"
          }
        ></i>
      </div>
      <div className="flex-grow">
        <p className={status === "Success" ? "text-green-700 font-medium" : status === "Error" ? "text-red-700 font-medium" : "font-medium"}>{message}</p>
      </div>
    </div>
  );
};

export default AlertMessage;
