import Head from "next/head";
import { useForm } from "react-hook-form";
import FormName from "../components/modules/form/FormName";
import FormEmail from "../components/modules/form/FormEmail";
import FormContent from "../components/modules/form/FormContent";
import FormSendButton from "../components/modules/form/FormSendButton";
import HomeButtons from "../components/modules/form/HomeBackButton";

import { API } from "aws-amplify";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const onSubmit = (data, event) => {
    const result = registerUser(event);
  };
  const onSampleApi = async (e) =>{
    console.log("success")
    const test = await API.post("sampleApi", "/sampleApi", {body: "test"})
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors.response);
      });
  }
  const registerUser = async (event) => {
    event.preventDefault();

    const myInit = {
      body: {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.content.value,
      },
    };
    console.log("success")
    const response = await API
      .post("sendgrid", "/send", myInit)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors.response);
      });
  };
  return (
    <div className="lg:mx-auto">
      <Head>
        <title>上方舞吉村流吉村ゆい お問い合わせ</title>
        <meta
          name="description"
          content="上方舞吉村流吉村ゆいへのお問い合わせ"
        />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormName name="name" control={control} errors={errors} />
        <FormEmail name="email" control={control} errors={errors} />
        <FormContent name="content" control={control} errors={errors} />
        <FormSendButton />
        <HomeButtons
          url="https://www.yoshimura-yui-buyoschool.com/"
          text="稽古場に関して"
        />
        <HomeButtons url="/" text="吉村ゆいに関して" />
        <p onClick={onSampleApi}>test</p>
        <p>{registerUser}</p>
      </form>
    </div>
  );
}
