import Header from "../login/component/header";
import MenuList from "./component/MenuList";
import { DisplayName } from "../login/component/form";
import { Suspense } from "react";

const Menu = () => {
  return (
    <div className="flex flex-col gap-7">
      <Suspense fallback={<p>Loading..</p>}>
        <Header className="scroll-mb-2.5" />
      </Suspense>
      <Suspense fallback={<p>Loading..</p>}>
        <ul className="w-9/12 m-0 m-auto mt-28">
          <MenuList />
        </ul>
      </Suspense>
    </div>
  );
};

export default Menu;
