import Header from "../../login/component/header";
import FormRegistr from "./components/FormNew";
import { Suspense } from "react";

const NewOrder = () => {
  return (
    <div className="flex flex-col gap-7">
      <Suspense fallback={<p>Loading...</p>}>
        <Header className="scroll-mb-2.5" />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <FormRegistr />
      </Suspense>
    </div>
  );
};

export default NewOrder;
