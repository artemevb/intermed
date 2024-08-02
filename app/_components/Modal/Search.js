

export default function Search() {
  return (
    <div className="fixed h-screen w-full bg-modalBg ">
        <div className="w-full bg-white h-[80%]">
            <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 pt-8">
            <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={values[field]}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={() => setFocusedInput(null)}
                  className={`block w-full px-3 py-3 bg-white rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm border-2 ${
                    focusedInput === field
                      ? validateInput(field, values[field]).isValid
                        ? "border-green-500"
                        : "border-red-500"
                      : "border-transparent"
                  }`}
                  placeholder={
                    field === "fullName"
                      ? "Full name"
                      : field === "phoneNumber"
                      ? "Phone number"
                      : field === "email"
                      ? "E-mail"
                      : "Your question"
                  }
                />
                <label
                  htmlFor={field}
                  className={`absolute left-3  transition-all ${
                    focusedInput === field || values[field]
                      ? "-top-4 text-xs"
                      : "top-3 text-sm"
                  } ${
                    focusedInput === field
                      ? validateInput(field, values[field]).isValid
                        ? "text-green-500"
                        : "text-red-500"
                      : "text-gray-400"
                  } cursor-text`}
                  onClick={() => document.getElementsByName(field)[0].focus()}
                >
                  {focusedInput === field && values[field].length > 0 ? (
                    validateInput(field, values[field]).message
                  ) : field === "fullName" ? (
                    <p>
                      Full Name
                      <span className="text-red-600 ml-2">*</span>
                    </p>
                  ) : field === "phoneNumber" ? (
                    <p>
                      Phone number
                      <span className="text-red-600 ml-2">*</span>
                    </p>
                  ) : field === "email" ? (
                    "E-mail"
                  ) : (
                    "Your question"
                  )}
                </label>
            </div>
        </div>
    </div>
  )
}
