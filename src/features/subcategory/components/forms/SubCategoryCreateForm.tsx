import { Button } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from '../../../../components/form';
import { InputController, SelectController } from '../../../../components/input';

interface ISubCategoryCreateForm {
  onSubmit: (values: any) => void;
}

export const SubCategoryCreateForm: FC<ISubCategoryCreateForm> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <FormComponent onFinish={handleSubmit(onSubmit)} name="categoryCreateForm" layout="vertical">
      <SelectController
        control={control}
        label="Kategoriya"
        name=""
        options={[{ label: 'asd', value: 'ads' }]}
      />
      <InputController control={control} name="category_name" label="Subkategoriya nomi" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormComponent>
  );
};
