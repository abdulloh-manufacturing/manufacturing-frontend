import { Form, Input } from 'antd';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IInputController {
  name: string;
  label: string;
  control: Control<any, any>;
}

export const InputController: FC<IInputController> = ({ name, control, label }) => {
  return (
    <Form.Item name={name} label={label}>
      <Controller name={name} control={control} render={({ field }) => <Input {...field} />} />
    </Form.Item>
  );
};
