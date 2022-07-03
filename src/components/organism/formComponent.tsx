import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Switch } from "antd";
// utils
import { CategoryEnum } from "@utils/enum";
import { DetailsCategoryInterface } from "./ts/interfaces";
//store & slice
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { setCardsFilters, setListCards } from "@features/cardSlice";

const FormComponent: React.FC<any> = ({
  inModal,
  visible,
  setIsModalVisible,
}) => {
  const dispatch = useAppDispatch();
  const { listCategory, tempCategory } = useAppSelector(
    (state) => state.cardlist
  );

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const onFinish = (values: any) => {
    const getFiltersCards: DetailsCategoryInterface = {
      HQ: listCategory?.[CategoryEnum.HQ]?.filter(
        (item: any) => item.Name.toLowerCase() === values.name.toLowerCase()
      ),
      Character: listCategory?.[CategoryEnum.CHARACTER]?.filter(
        (item: any) => item.Name.toLowerCase() === values.name.toLowerCase()
      ),
      Technology: listCategory?.[CategoryEnum.TECHNOLOGY]?.filter(
        (item: any) => item.Name.toLowerCase() === values.name.toLowerCase()
      ),
    };
    if (inModal) setIsModalVisible(!visible);
    dispatch(setCardsFilters(getFiltersCards));
  };

  const onReset = () => {
    form.resetFields();
    dispatch(setListCards(tempCategory));
    if (inModal) setIsModalVisible(!visible);
  };

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      layout="horizontal"
      onFinish={onFinish}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      form={form}
    >
      <Form.Item
        name="name"
        wrapperCol={{ span: 24 }}
        className="label-name"
        rules={[{ required: true, message: "Es necesario un Nombre!" }]}
      >
        <Input placeholder="nombre tarjeta" />
      </Form.Item>

      {/* en espera de los otros parametros para consultar */}
      <Form.Item name="cat" label="Param 1" valuePropName="checked">
        <Switch disabled />
      </Form.Item>

      <Form.Item name="get" label="Param 2" valuePropName="checked">
        <Switch disabled />
      </Form.Item>

      <Divider />

      <Form.Item wrapperCol={{ span: 12 }} shouldUpdate>
        {() => (
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Button
                htmlType="button"
                onClick={onReset}
                className="mr-1"
                disabled={
                  !form.isFieldsTouched(false) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Reset
              </Button>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(false) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Buscar
              </Button>
            </Col>
          </Row>
        )}
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
