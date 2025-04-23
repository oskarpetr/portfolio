import { InquiryField, InquiryValues } from "@/types/ContactForm.types";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Props {
  name: InquiryField["name"];
  label: InquiryField["label"];
  type?: InquiryField["type"];
  placeholder: InquiryField["placeholder"];
  required?: InquiryField["required"];
  setValues: Dispatch<SetStateAction<InquiryValues>>;
}

export default function ContactInput({
  name,
  label,
  type = "text",
  placeholder,
  required = true,
  setValues,
}: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setValues((prev: InquiryValues) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-normal opacity-80">
        {label} {required ? "(*)" : ""}
      </div>

      <input
        placeholder={placeholder}
        type={type}
        className="serif border-b border-dashed border-black/50 text-4xl leading-14 focus:outline-none sm:text-5xl sm:leading-normal lg:w-11/12"
        autoComplete="disabled"
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// interface Props {
//   name: string;
// }

// function ContactInput({ name }: Props) {
//   const [value, setValue] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const spanRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (inputRef.current && spanRef.current) {
//       const width = spanRef.current.getBoundingClientRect().width;
//       inputRef.current.style.width = `${width}px`;
//     }
//   }, [value]);

//   return (
//     <div className="flex">
//       <div className="flex items-baseline gap-2 text-[blue]">
//         <div>(</div>
//         <input
//           ref={inputRef}
//           type="text"
//           className="w-fit text-[blue] placeholder:text-[blue] focus:outline-none"
//           placeholder={name}
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <div>)</div>
//       </div>
//       <div
//         ref={spanRef}
//         className="serif pointer-events-none absolute text-6xl opacity-0 select-none"
//       >
//         {value.length === 0 ? name : value}
//       </div>
//     </div>
//   );
// }

// export default ContactInput;
