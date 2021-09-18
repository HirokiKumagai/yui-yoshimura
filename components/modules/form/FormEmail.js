import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
export default function FormEmail({ name, control, errors }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: "メールアドレスを入力してください",
        },
        pattern:{
          value: /[a-zA-Z0-9]+[a-zA-Z0-9\._-]*@[a-zA-Z0-9_-]+[a-zA-Z0-9\._-]+/,
          message: "英数字半角でご入力下さい"
        }
      }}
      render={({ field }) => (
        <TextField
          label="Email(必須)"
          type="text"
          fullWidth
          margin="normal"
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
          {...field}
        />
      )}
    />
  );
}
