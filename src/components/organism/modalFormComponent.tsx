import React, { useState } from "react";
import { Button, Modal } from "antd";
//components
import FormComponent from "./formComponent";

const ModalFormComponent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="btn-filters">
        Filtros
      </Button>
      <Modal
        title={
          <div className="animate__animated animate__headShake">
            Filtros Disponibles
          </div>
        }
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <FormComponent />
      </Modal>
    </>
  );
};

export default ModalFormComponent;
