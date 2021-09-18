import { useForm } from "react-hook-form";
import FormName from "../components/modules/form/FormName";
import FormEmail from "../components/modules/form/FormEmail";
import FormContent from "../components/modules/form/FormContent";
import FormSendButton from "../components/modules/form/FormSendButton";
import HomeButtons from "../components/modules/form/HomeBackButton";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    registerUser(event);
  };
  const registerUser = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.content.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    return result;
  };
  return (
    <div className="lg:mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormName name="name" control={control} errors={errors} />
        <FormEmail name="email" control={control} errors={errors} />
        <FormContent name="content" control={control} errors={errors} />
        <FormSendButton />
        <HomeButtons url="/" />
        <HomeButtons url="https://www.yoshimura-yui-buyoschool.com/" />
      </form>
    </div>
  );
}
