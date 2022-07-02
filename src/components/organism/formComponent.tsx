import React from "react";
import { Button, Divider, Form, Input, Switch } from "antd";

const FormComponent: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        label="Nombre"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input placeholder="nombre tarjeta" />
      </Form.Item>

      <Form.Item name="cat" label="Switch 1" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="get" label="Switch 2" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Divider />

      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Buscar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
