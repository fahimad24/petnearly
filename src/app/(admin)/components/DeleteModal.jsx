import { deletePet } from "@/app/lib/action-client";
import { CircleInfo } from "@gravity-ui/icons";
import { Button, Modal, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteModal = ({ pet }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await deletePet(pet._id);
    if (res.ok) {
      toast.success("Pet listing deleted successfully!");
      router.refresh();
    } else {
      toast.error("Failed to delete pet");
    }
  };
  return (
    <Modal>
      <Button
        isIconOnly
        className="bg-red-500 text-white hover:bg-red-600 transition-colors"
        title="Delete Listing"
      >
        <MdDelete size={18} />
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.Header>
              <Modal.Icon className="bg-red-200/40 text-red-500">
                <CircleInfo className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Delete Pet {pet?.petName}</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete this pet listing? This action
                cannot be undone.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onPress={handleDelete}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteModal;
