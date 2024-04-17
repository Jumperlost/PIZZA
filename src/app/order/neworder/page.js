"use client";
import Header from "../../login/component/header";
import FormRegistr from "./components/FormNew";

const NewOrder = () => {
  return (
    <div className="flex flex-col gap-7">
      <Header className="scroll-mb-2.5" />
      <FormRegistr />
    </div>
  );
};

export default NewOrder;
