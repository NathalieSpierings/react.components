

import React, { useRef, useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { AlertColorDefinitions, ColorDefinitions } from "../../lib/utils/definitions";
import { Modal, ModalVariant } from "../../components/UI/Modal";
import { Button } from "../../components/UI/Button";

const ModalDemo: React.FC = () => {

  usePageTitle("Modal", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Modal", href: "/demo/modal" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<ModalVariant>();
  const [modalBackground, setModalBackground] = useState<ColorDefinitions>();

   const openModal = (variant?: ModalVariant, background?: ColorDefinitions) => {
      setModalVariant(variant);
      setModalBackground(background);
      setModalOpen(true);
   };

  const confirmButton = (variant: ModalVariant) => {
    let color = ColorDefinitions.Theme500;

    switch (variant) {
      case "primary":
        color = ColorDefinitions.Primary;
        break;
      case "warning":
        color = ColorDefinitions.Orange;
        break;
      case "informational":
        color = ColorDefinitions.Blue;
        break;
      case "positive":
        color = ColorDefinitions.Green;
        break;
      case "negative":
        color = ColorDefinitions.Red;
        break;
    }

    return (
      <Button color={color} raised={true} onClick={() => setModalOpen(false)}>
        Confirm
      </Button>
    );
  }

  return (
    <>
     <Modal
          background={modalBackground}
          variant={modalVariant}
          isOpen={modalOpen}
          title="My modal title"
          onClose={() => setModalOpen(false)}     
          footerActions={
						<>					
						<Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
							Confirm
						</Button>
						<Button onClick={() => setModalOpen(false)}>
								Cancel
						</Button>
						</>
					}    
        >
          My content goes here...
        </Modal>

      <h2>Modal</h2>
      <button className="btn" onClick={() => setModalOpen(true)} >Modal</button>      

      <button className="btn" onClick={() => openModal("primary")}>Primary</button>
      <button className="btn" onClick={() => openModal("warning")}>Warning</button>
      <button className="btn" onClick={() => openModal("informational")}>Informational</button>
      <button className="btn" onClick={() => openModal("positive")}>Positive</button>
      <button className="btn" onClick={() => openModal("negative")}>Negative</button>
      <button className="btn" onClick={() => openModal(undefined, ColorDefinitions.Olive)}>Background</button>
    </>
  )
};

export default ModalDemo;