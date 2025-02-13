import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import AlertMessage from "../components/AlertMessage";
import { validateEmailPattern } from "../utils/helpers";
import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS, getCSRF, postData } from "../api";
import { MutationArgs, ResponseInterface } from "../utils/types";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/AuthContext";
import { TOKEN_NAME } from "../utils/constants";
import { Link, useNavigate } from "react-router";

interface FormData {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

const INITIAL_STATE: FormData = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const INITIAL_RESPONSE: ResponseInterface = {
  message: null,
  data: null,
  errors: null,
  status: null,
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthContext();
  const [response, setResponse] = useState<ResponseInterface>(INITIAL_RESPONSE);

  const { mutate, isPending } = useMutation({
    mutationFn: ({ endpoint, payload }: MutationArgs) => postData(endpoint, payload),
    onSuccess: (data: any) => {
      getCSRF();
      setUser(data?.user);
      setToken(data?.token);
      localStorage.setItem(TOKEN_NAME, data?.token);
      navigate("/", { state: { message: data?.message || "Welcome" + data?.user?.name } });
    },
    onError: (error: any) => {
      setResponse({
        message: error?.response?.data?.message || "Sign Up Failed. Please try again later.",
        errors: error?.response?.data?.errors,
        status: "Error",
      });
      setTimeout(() => {
        setResponse(INITIAL_RESPONSE);
      }, 3500);
    },
  });

  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState<FormData>(INITIAL_STATE);

  const handleFieldError = (field: string, error: any) => {
    setFormErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    handleFieldError(field, "");
  };

  const validateFormData = () => {
    let isValid = true;
    const { name, email, password, password_confirmation } = formData;

    if (!name) {
      handleFieldError("name", "Name is required.");
      isValid = false;
    }

    if (!email) {
      handleFieldError("email", "Email is required.");
      isValid = false;
    }

    if (!password) {
      handleFieldError("password", "Password is required.");
      isValid = false;
    }

    if (!password_confirmation) {
      handleFieldError("password_confirmation", "Password confirmation is required.");
      isValid = false;
    }

    if (email && !validateEmailPattern(email)) {
      handleFieldError("email", "Please enter a valid email address.");
      isValid = false;
    }

    if (password !== password_confirmation) {
      handleFieldError("password_confirmation", "Passwords doesn't match.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (validateFormData()) {
      mutate({ endpoint: ENDPOINTS.REGISTER, payload: formData });
    }
  };

  const PageHeader: React.FC = () => {
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Sign Up</h1>
          <p className="text-sm text-gray-600">
            Already have an account? &nbsp;
            <Link to="/sign-in" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        <hr className="mb-6" />
      </>
    );
  };

  return (
    <div className="h-screen p-4">
      <PageHeader />
      {response && response.message && <AlertMessage status={response.status} message={response.message} />}
      <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e: FormEvent) => handleSubmitForm(e)}>
        <Input
          type="text"
          label="Name"
          placeholder="Name"
          name="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(e.target.name, e.target.value)}
          error={formErrors?.name}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(e.target.name, e.target.value)}
          error={formErrors?.email}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(e.target.name, e.target.value)}
          error={formErrors?.password}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          name="password_confirmation"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(e.target.name, e.target.value)}
          error={formErrors?.password_confirmation}
        />
        <Button type="reset" color="white">
          Cancel
        </Button>
        <Button type="submit" color="white">
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
