import { InquiryField, InquiryValues } from "@/types/InquiryForm.types";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Icon from "../shared/Icon";
import { cn } from "@/utils/cn";

interface Props {
  name: InquiryField["name"];
  label: InquiryField["label"];
  type?: InquiryField["type"];
  placeholder: InquiryField["placeholder"];
  required?: boolean;
  options?: InquiryField["options"];
  setValues: Dispatch<SetStateAction<InquiryValues>>;
  index: number;
}

export default function ContactInput({
  name,
  label,
  type = "text",
  placeholder,
  required = true,
  options = [],
  setValues,
  index,
}: Props) {
  const [value, setValue] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
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

      {(type === "text" || type === "email") && (
        <input
          placeholder={placeholder}
          type={type}
          className={cn(
            "serif border-b border-dashed border-black/50 text-3xl leading-12 focus:outline-none sm:text-4xl sm:leading-normal",
            index % 2 === 0 ? "w-full lg:w-11/12" : "",
          )}
          autoComplete="disabled"
          required={required}
          value={value}
          onChange={handleChange}
        />
      )}

      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          className={cn(
            "serif resize-none border-b border-dashed border-black/50 text-3xl leading-12 focus:outline-none sm:text-4xl sm:leading-normal",
            index % 2 === 0 ? "w-full lg:w-11/12" : "",
          )}
          autoComplete="disabled"
          rows={2}
          required={required}
          value={value}
          onChange={handleChange}
        />
      )}

      {type === "select" && (
        <div
          className={cn("relative", index % 2 === 0 ? "w-full lg:w-11/12" : "")}
        >
          <select
            className={cn(
              "serif w-full cursor-pointer appearance-none border-b border-dashed border-black/50 pr-12 text-3xl leading-12 focus:outline-none sm:text-4xl sm:leading-normal",
              value === "" ? "text-black/50" : "",
            )}
            required={required}
            value={value}
            onChange={handleChange}
          >
            <option
              value=""
              disabled
              className="sans px-4 py-3 text-xl font-normal"
            >
              {placeholder}
            </option>

            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="sans border-t border-dashed border-black/50 px-4 py-3 text-xl font-normal transition-colors hover:bg-black/5"
              >
                {option}
              </option>
            ))}
          </select>

          <Icon
            name="CaretRight"
            size={20}
            className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-50"
          />
        </div>
      )}
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
