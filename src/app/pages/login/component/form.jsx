const Form = ({ children }) => {
  return (
    <form className="flex items-center justify-center gap-2.5">{children}</form>
  );
};

const Input = () => {
  return (
    <input
      className="px-4 py-3 border rounded border-solid  border-gray-600 focus:outline-yellow-500 text-base/[10px]"
      type="text"
      placeholder="Your full name"
    />
  );
};

const Button = () => {
  return (
    <button className="px-4 py-3 font-roboto bg-yellow-500 text-base/[20px] rounded cursor-pointer">
      Login
    </button>
  );
};

const FormInput = ({ type, placeholder }) => {
  return (
    <Form>
      <Input type={type} placeholder={placeholder}></Input>
      <Button></Button>
    </Form>
  );
};

export { FormInput };
