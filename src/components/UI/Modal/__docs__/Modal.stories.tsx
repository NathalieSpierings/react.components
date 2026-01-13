import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';
import { SvgSprite } from '../../../../assets/SvgSprite';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import Button from '../../Button/Button';
import Modal, { ModalVariant } from '../Modal';

const meta: Meta<typeof Modal> = {
    title: 'UI kit/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (StoryFn) => (
            <>
                <div id="modal" />
                <SvgSprite />
                <StoryFn />
            </>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Modal
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => setModalOpen(true)}>
                Modal
            </button>
        </>
    );
};

export const Primary: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalVariant, setModalVariant] = useState<ModalVariant>();

    const openModal = (variant?: ModalVariant) => {
        setModalVariant(variant);
        setModalOpen(true);
    };

    return (
        <>
            <Modal
                variant={modalVariant}
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => openModal('primary')}>
                Primary
            </button>
        </>
    );
};

export const Warning: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalVariant, setModalVariant] = useState<ModalVariant>();

    const openModal = (variant?: ModalVariant) => {
        setModalVariant(variant);
        setModalOpen(true);
    };

    return (
        <>
            <Modal
                variant={modalVariant}
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => openModal('warning')}>
                Warning
            </button>
        </>
    );
};

export const Informational: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalVariant, setModalVariant] = useState<ModalVariant>();

    const openModal = (variant?: ModalVariant) => {
        setModalVariant(variant);
        setModalOpen(true);
    };

    return (
        <>
            <Modal
                variant={modalVariant}
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => openModal('informational')}>
                Informational
            </button>
        </>
    );
};

export const Positive: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalVariant, setModalVariant] = useState<ModalVariant>();

    const openModal = (variant?: ModalVariant) => {
        setModalVariant(variant);
        setModalOpen(true);
    };

    return (
        <>
            <Modal
                variant={modalVariant}
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => openModal('positive')}>
                Positive
            </button>
        </>
    );
};

export const Negative: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalVariant, setModalVariant] = useState<ModalVariant>();

    const openModal = (variant?: ModalVariant) => {
        setModalVariant(variant);
        setModalOpen(true);
    };

    return (
        <>
            <Modal
                variant={modalVariant}
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => openModal('negative')}>
                Negative
            </button>
        </>
    );
};

export const Bakckground: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBackground, setModalBackground] = useState<ColorDefinitions>();

    const openModal = (background?: ColorDefinitions) => {
        setModalBackground(background);
        setModalOpen(true);
    };

    return (
        <>
            <Modal
                background={modalBackground}
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => openModal(ColorDefinitions.Olive)}>
                Negative
            </button>
        </>
    );
};

export const ActionsCentered: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Modal
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActionPosition="center"
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => setModalOpen(true)}>
                Modal
            </button>
        </>
    );
};

export const ActionsRight: StoryFn = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Modal
                isOpen={modalOpen}
                title="My modal title"
                onClose={() => setModalOpen(false)}
                footerActionPosition="right"
                footerActions={
                    <>
                        <Button color={ColorDefinitions.Primary} raised={true} onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    </>
                }
            >
                My content goes here...
            </Modal>

            <button className="btn" onClick={() => setModalOpen(true)}>
                Modal
            </button>
        </>
    );
};
