const FormSubmitted = ({ formData }) => (
    <div className="border-[0.01cqw] border-gray-500 p-[3cqw] md:p-[1cqw] rounded-[1cqw]">
      <h3 className="text-[4cqw] md:text-[1.2cqw] text-darkBlue font-jakarta font-[500]">
        Form Submitted Successfully!
      </h3>
      <div className="flex flex-col gap-[1cqw] md:gap-[0.3cqw] pt-[6cqw] md:pt-[1.2cqw]">
        {Object.keys(formData).map((key) => (
          <div className="flex items-center gap-[1cqw] md:gap-[0.3cqw]" key={key}>
            <p className="label-submitted">{key.replace(/([A-Z])/g, " $1")}: </p>
            <p className="data-submitted">{formData[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default FormSubmitted;
  