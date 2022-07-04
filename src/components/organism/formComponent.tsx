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
    const filters = {
      Name: values.name,
      Faction: [
        values.awaken && "Awaken",
        values.entropy && "Entropy",
        values.inhuman && "Inhuman",
        values.owner && "Owner",
        values.undeviant && "Undeviant",
      ],
      Rarity: [
        values.legendary && "Legendary",
        values.rare && "Rare",
        values.uncommon && "Uncommon",
        values.common && "Common",
      ],
    };

    const getFiltersCards: DetailsCategoryInterface = {
      HQ: listCategory?.[CategoryEnum.HQ]?.filter(
        (item: any) =>
          item.Name === values.name ||
          filters.Rarity.includes(item.Rarity) ||
          filters.Faction.includes(item.Faction)
      ),
      Character: listCategory?.[CategoryEnum.CHARACTER]?.filter(
        (item: any) =>
          item.Name === values.name ||
          filters.Rarity.includes(item.Rarity) ||
          filters.Faction.includes(item.Faction)
      ),
      Technology: listCategory?.[CategoryEnum.TECHNOLOGY]?.filter(
        (item: any) =>
          item.Name === values.name ||
          filters.Rarity.includes(item.Rarity) ||
          filters.Faction.includes(item.Faction)
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
      size="small"
    >
      <Form.Item
        name="name"
        wrapperCol={{ span: 24 }}
        className="label-name"
        // rules={[{ required: true, message: "Es necesario un Nombre!" }]}
        shouldUpdate
      >
        <Input
          placeholder="nombre tarjeta"
          disabled={form.getFieldValue("name")}
        />
      </Form.Item>

      <Divider orientation="left" plain>
        FACTIONS
      </Divider>

      <Form.Item
        name="awaken"
        label="Awaken"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("awaken")} />
      </Form.Item>

      <Form.Item
        name="entropy"
        label="Entropy"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("entropy")} />
      </Form.Item>

      <Form.Item
        name="inhuman"
        label="Inhuman"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("inhuman")} />
      </Form.Item>

      <Form.Item
        name="owner"
        label="Owner"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("owner")} />
      </Form.Item>

      <Form.Item
        name="undeviant"
        label="Undeviant"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("undeviant")} />
      </Form.Item>

      <Divider orientation="left" plain>
        RARITY
      </Divider>

      <Form.Item
        name="legendary"
        label="Legendary"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("legendary")} />
      </Form.Item>

      <Form.Item name="rare" label="Rare" valuePropName="checked" shouldUpdate>
        <Switch disabled={form.getFieldValue("rare")} />
      </Form.Item>

      <Form.Item
        name="uncommon"
        label="Uncommon"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("uncommon")} />
      </Form.Item>

      <Form.Item
        name="common"
        label="Common"
        valuePropName="checked"
        shouldUpdate
      >
        <Switch disabled={form.getFieldValue("common")} />
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
