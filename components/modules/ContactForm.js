import React from "react";
import { useForm } from "react-hook-form";
export default function ContactForm({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    </div>
  );
}
