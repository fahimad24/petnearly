"use client";
import { SelectField } from "@/app/components/SelectField";
import { updatePetDetails, useUserInfo } from "@/app/lib/action-client";
import {
  Button,
  Card,
  Form,
  Label,
  Input,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const fieldWrapperClass = "w-full";

const PetForm = ({ pet }) => {
  const router = useRouter();
  const { session } = useUserInfo();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const petData = Object.fromEntries(formData.entries());
    petData.ownerEmail = session?.email || "";

    const res = await updatePetDetails(pet._id, petData);
    if (res.ok) {
      toast.success("Pet listing updated successfully!");
      router.push(`/dashboard/my-listings`);
    } else {
      toast.danger("Failed to update pet listing. Please try again.");
    }
  };

  return (
    <Card className="border border-primary/15 bg-neutral shadow-[0_24px_80px_rgba(47,143,47,0.08)]">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex items-center gap-3 text-lg font-bold text-dark-text">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-primary ring-1 ring-secondary/30">
            ✿
          </span>
          <span>Pet Information</span>
        </div>

        <Form
          className="space-y-6"
          render={(props) => <form {...props} />}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextField
              className={fieldWrapperClass}
              name="petName"
              isRequired
              defaultValue={pet?.petName}
            >
              <Label>Pet Name</Label>
              <Input placeholder="e.g. Buddy" />
            </TextField>

            <SelectField
              name="species"
              label="Species"
              placeholder="Select species"
              defaultValue={pet.species}
              isRequired
              items={[
                { id: "dog", label: "Dog" },
                { id: "cat", label: "Cat" },
                { id: "rabbit", label: "Rabbit" },
                { id: "bird", label: "Bird" },
                { id: "other", label: "Other" },
              ]}
            />

            <TextField
              isRequired
              className={fieldWrapperClass}
              name="breed"
              defaultValue={pet?.breed}
            >
              <Label>Breed</Label>
              <Input placeholder="e.g. Labrador Retriever" />
            </TextField>

            <TextField
              defaultValue={pet?.age || 0}
              className={fieldWrapperClass}
              name="age"
            >
              <Label>Age (years)</Label>
              <Input type="number" min="0" placeholder="e.g. 2" />
            </TextField>

            <SelectField
              name="gender"
              label="Gender"
              placeholder="Select gender"
              items={[
                { id: "male", label: "Male" },
                { id: "female", label: "Female" },
                { id: "unknown", label: "Unknown" },
              ]}
              defaultValue={pet?.gender}
            />

            <SelectField
              name="vaccinationStatus"
              label="Vaccination Status"
              placeholder="Select status"
              items={[
                { id: "vaccinated", label: "Vaccinated" },
                { id: "partial", label: "Partial" },
                { id: "not-vaccinated", label: "Not vaccinated" },
              ]}
              defaultValue={pet?.vaccinationStatus}
            />
          </div>

          <TextField
            className={fieldWrapperClass}
            name="imageUrl"
            defaultValue={pet?.imageUrl}
          >
            <Label>Pet Image URL</Label>
            <Input placeholder="https://i.ibb.co/..." />
            <p className="mt-2 text-xs text-light-text">
              upload to imgbb.com first
            </p>
          </TextField>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SelectField
              name="healthStatus"
              label="Health Status"
              placeholder="Select health status"
              defaultValue={pet?.healthStatus}
              isRequired
              items={[
                { id: "healthy", label: "Healthy" },
                { id: "recovering", label: "Recovering" },
                { id: "needs-care", label: "Needs care" },
              ]}
            />

            <TextField
              className={fieldWrapperClass}
              name="location"
              isRequired
              defaultValue={pet?.location}
            >
              <Label>Location</Label>
              <Input placeholder="e.g. New York, NY" />
            </TextField>
          </div>

          <TextField
            className={fieldWrapperClass}
            name="adoptionFee"
            defaultValue={pet?.adoptionFee}
          >
            <Label>Adoption Fee ($)</Label>
            <Input type="number" min="0" placeholder="0" />
            <p className="mt-2 text-xs text-light-text">Enter 0 for free</p>
          </TextField>

          <TextField
            type="email"
            name="ownerEmail"
            isReadOnly
            value={session?.email ?? ""}
            className={fieldWrapperClass}
          >
            <Label>Owner Email</Label>
            <Input />
          </TextField>

          <TextField
            className={fieldWrapperClass}
            name="description"
            isRequired
            defaultValue={pet?.description}
          >
            <Label>Description</Label>
            <TextArea placeholder="Describe the pet's personality, habits, needs and anything adopters should know..." />
          </TextField>

          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="bordered"
              className="border-primary/20 bg-white px-6 py-3 font-semibold text-dark-text rounded-none hover:bg-backTone w-full "
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className=" bg-accent to-primary px-6 py-3 font-semibold text-white rounded-none  shadow-primary/20 transition hover:opacity-95 w-full "
            >
              Update Pet Listing
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default PetForm;
