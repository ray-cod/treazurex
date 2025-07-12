
export const validateLogin = (errorResponse, setErrors) => {
    setErrors({ email: false, password: false });

    if (errorResponse?.message?.includes("password")) {
      setErrors({ email: false, password: true });
      return false;
    } else if (errorResponse?.message?.includes("email")) {
      setErrors({ email: true, password: false });
      return false;
    }
    return true;
}

export const validateSignin = (errorResponse, setErrors) => {
    const resetErrors = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    };
    setErrors(resetErrors);

    if (errorResponse) {
      console.log(errorResponse);
      const err =
        errorResponse.errors?.[0].toLowerCase() ||
        errorResponse.message?.toLowerCase();

      if (err.includes("firstname")) {
        setErrors({ ...resetErrors, firstName: true });
      } else if (err.includes("lastname")) {
        setErrors({ ...resetErrors, lastName: true });
      } else if (err.includes("email")) {
        setErrors({ ...resetErrors, email: true });
      } else if (err.includes("password")) {
        setErrors({ ...resetErrors, password: true });
      }
      return false;
    }
    return true;
};
