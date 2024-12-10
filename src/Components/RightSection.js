import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormError from "./FormError";
import FormSubmitted from "./FormSubmitted";
import FormTextArea from "./FormTextArea";

function RightSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    companySize: "",
    team: "",
    projectBudget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData({ ...formData, phoneNumber: value });
      setErrors({ ...errors, phoneNumber: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required.";
    if (!formData.workEmail.trim() || !/\S+@\S+\.\S+/.test(formData.workEmail))
      newErrors.workEmail = "A valid email is required.";
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10)
      newErrors.phoneNumber = "A valid 10-digit phone number is required.";
    if (!formData.companySize)
      newErrors.companySize = "Please select your company size.";
    if (!formData.team) newErrors.team = "Please select a team.";
    if (!formData.projectBudget)
      newErrors.projectBudget = "Please select a project budget.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  return (
    <div>
      {!submitted ? (
        <div>
          <h3 className="text-[4.5cqw] md:text-[1.2cqw] text-darkBlue font-inter font-[700]">
            Fill the form below
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[3cqw] md:gap-[1.4cqw] pt-[6cqw] md:pt-[1.8cqw] text-[16px] md:text-[0.95cqw] font-[400] text-darkBlue font-inter"
          >
            <div className="grid md:grid-cols-2 gap-[3cqw] md:gap-[1.4cqw]">
              <FormInput
                label="Full Name *"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <FormInput
                label="Company Name *"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                error={errors.companyName}
              />
              <FormInput
                label="Work Email *"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                error={errors.workEmail}
              />
              <div>
                <label>Phone Number *</label>
                <input
                  className="input"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneInput}
                />
                <FormError message={errors.phoneNumber} />
              </div>
              <FormSelect
                label="Company Size"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                options={[
                  { value: "", label: "Select size" },
                  { value: "small", label: "Small" },
                  { value: "medium", label: "Medium" },
                  { value: "large", label: "Large" },
                ]}
                error={errors.companySize}
              />
              <FormSelect
                label="Team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                options={[
                  { value: "", label: "Select team" },
                  { value: "engineering", label: "Engineering" },
                  { value: "design", label: "Design" },
                  { value: "marketing", label: "Marketing" },
                ]}
                error={errors.team}
              />
            </div>
            <FormSelect
              label="Project Budget *"
              name="projectBudget"
              value={formData.projectBudget}
              onChange={handleChange}
              options={[
                { value: "", label: "Select Budget" },
                { value: "$20,000+", label: "$20,000+" },
                { value: "$40,000+", label: "$40,000+" },
                { value: "$60,000+", label: "$60,000+" },
              ]}
              error={errors.projectBudget}
            />
            <FormTextArea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="w-full">
              <button
                type="submit"
                className="bg-purple text-white md:text-[1cqw] font-inter font-[600] w-full p-[2.2cqw] md:p-[1cqw] rounded-[1cqw] md:rounded-[0.8cqw]"
              >
                Let's Talk
              </button>
            </div>
            <div>
              <p className="text-[3.4cqw] md:text-[0.95cqw] font-[300] text-[#6C737F] font-inter">
                By submitting this, you agree to the{" "}
                <span className="font-[500] text-darkBlue underline underline-offset-2">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="font-[500] text-darkBlue underline underline-offset-2">
                  Cookie Policy.
                </span>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <FormSubmitted formData={formData} />
      )}
    </div>
  );
}

export default RightSection;
