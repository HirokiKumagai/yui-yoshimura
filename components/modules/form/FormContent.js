
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
export default function FormContent({ name, control, errors }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: "お問い合わせ内容を入力してください",
        },
      }}
      render={({ field }) => (
        <TextField
          label="お問い合わせ内容(必須)"
          type="text"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
          error={Boolean(errors.content)}
          helperText={errors.content && errors.content.message}
          {...field}
        />
      )}
    />
  );
}
