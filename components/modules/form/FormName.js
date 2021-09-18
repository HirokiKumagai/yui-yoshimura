import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
export default function FormName({name, control, errors}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: true, message: "名前が入力されていません" },
        maxLength: {
          value: 10,
          message: "10文字以内で入力してください。",
        },
      }}
      render={({ field }) => (
        <TextField
          label="お名前(必須)"
          type="text"
          fullWidth
          margin="normal"
          error={Boolean(errors.name)}
          helperText={errors.name && errors.name.message}
          {...field}
        />
      )}
    />
  );
}
