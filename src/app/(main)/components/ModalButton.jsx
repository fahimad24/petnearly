"use client";

import Icon from "@/app/components/Icon";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import { DatePickerComponent } from "../../../ui/DatePicker";

import {
  submitAdoptionRequest,
  updatePetStatus,
  useUserInfo,
} from "@/app/lib/action-client";
import { useRouter } from "next/navigation";

export function ModalButton({ btnProps, btntext = "Adopt Now", icon, pet }) {
  const router = useRouter();
  const { session } = useUserInfo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);

    //send the data to the server
    const res = await submitAdoptionRequest(formData, pet, session);
    // const ress = await updatePetStatus(pet._id, "");

    if (res.ok) {
      toast.success("Adoption request submitted successfully!");
      router.refresh();
    } else {
      toast.danger("Failed to submit adoption request. Please try again.");
    }
  };
  return (
    <Modal>
      <Button {...btnProps}>
        {btntext}
        {icon}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Icon src="/paw.png" alt="Adopt" width={16} height={16} />
              </Modal.Icon>
              <Modal.Heading className="font-black">
                Request to Adopt {pet?.petName}
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Please fill out the form below to submit your adoption request.
                Our team will review your request and get back to you as soon
                asdate possible.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextField
                    isReadOnly
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Pet Name</Label>
                    <Input value={pet?.petName} placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    isReadOnly
                    className="w-full"
                    name="username"
                    type="text"
                  >
                    <Label>User Name</Label>
                    <Input
                      value={session?.name}
                      placeholder="Enter your username"
                    />
                  </TextField>
                  <TextField
                    isReadOnly
                    className="w-full"
                    name="email"
                    type="email"
                  >
                    <Label>Email</Label>
                    <Input
                      value={session?.email}
                      placeholder="Enter your email"
                    />
                  </TextField>

                  <DatePickerComponent />

                  <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit">
                      Adopt now
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
