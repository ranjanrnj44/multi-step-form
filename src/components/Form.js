import React, { useState } from "react";
//components - other pages
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import GeneralInfo from "./GeneralInfo";

function FormComponent() {
  //states for pages
  let [page, setPage] = useState(0); // initial part (SignUp)
  //state for total form data
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    other: "",
  });

  //titles
  let formTitles = ["SignUp", "Personal Info", "General Info"];

  //array of components
  let componentPage = [
    <SignUpInfo formData={formData} setFormData={setFormData} />,
    <PersonalInfo formData={formData} setFormData={setFormData} />,
    <GeneralInfo formData={formData} setFormData={setFormData} />,
  ];

  //function to display particular page
  // let displayPage = () => {
  // if(page === 0){
  //   return <SignUpInfo />;
  // }
  // else if(page === 1){
  //   return <PersonalInfo />;
  // }
  // else{
  //   return <GeneralInfo />;
  // }
  // }

  //handleSubmit
  let handleSubmit = () => {
    alert(`Form Submitted, Thank you ${formData.firstName}`);
  };
  return (
    <>
      <form>
        <div className="progressbar">
          <div
            style={{
              width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{formTitles[page]}</h1>
          </div>
          <div className="body">{componentPage[page]}</div>
          <div className="footer">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            {page === formTitles.length - 1 ? (
              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                submit
              </button>
            ) : (
              <button
                type="button"
                disabled={page >= formTitles.length - 1}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default FormComponent;
