import { useState } from "react";
import { ModalUsage } from "../Modal/Modal";
import { Container } from "./Container";

export function Category({ label, token }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-10 items-start">
        <ModalUsage open={open} setOpen={setOpen} label={label} token={token} />
        <div className="flex flex-col gap-5 p-5 bg-gray-800 rounded-md w-full">
          <h1 className="text-2xl font-bold text-base">{label}</h1>
        </div>

        {label !== "Users" && (
          <button
            className="bg-gray-800 text-white p-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            Create a new {label}
          </button>
        )}
      </div>
      {label === "Games" && <Container label="games" />}
    </>
  );
}
