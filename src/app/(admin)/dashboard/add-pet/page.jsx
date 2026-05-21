"use client";

import { SelectField } from "@/app/components/SelectField";
import { submitAddPetRequest, useUserInfo } from "@/app/lib/action-client";
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
import { redirect, useRouter } from "next/navigation";

const fieldWrapperClass = "w-full";

const AddPetPage = () => {
  const router = useRouter();
  const { session } = useUserInfo();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const petData = {
      ...data,
      userId: session?.id,
      status: "Available",
    };
    console.log("Submitting pet data:", petData);
    const res = await submitAddPetRequest(petData);
    if (res.ok) {
      toast.success("Pet listing added successfully!");
      router.push("/dashboard/my-listings");
    } else {
      toast.danger("Failed to add pet listing. Please try again.");
    }
    console.log("Server response:", res);
  };

  return (
    <main className="min-h-screen px-4 py-8 text-dark-text sm:px-6 lg:px-8">
      <section className="mx-auto max-w-275">
        <div className="mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent shadow-[0_0_0_1px_rgba(255,142,28,0.06)]">
            <span className="text-base leading-none">+</span>
            List a Pet
          </span>
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight text-dark-text sm:text-3xl lg:text-4xl">
              Add a <span className="text-accent">Pet</span> Listing
            </h1>
            <p className="max-w-2xl text-sm text-light-text sm:text-base">
              Help a pet find their forever home by creating a detailed listing.
            </p>
          </div>
        </div>

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
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <TextField
                  className={fieldWrapperClass}
                  name="petName"
                  isRequired
                >
                  <Label>Pet Name</Label>
                  <Input placeholder="e.g. Buddy" />
                </TextField>

                <SelectField
                  name="species"
                  label="Species"
                  placeholder="Select species"
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
                >
                  <Label>Breed</Label>
                  <Input placeholder="e.g. Labrador Retriever" />
                </TextField>

                <TextField
                  defaultValue={0}
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
                />
              </div>

              <TextField className={fieldWrapperClass} name="imageUrl">
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
                >
                  <Label>Location</Label>
                  <Input placeholder="e.g. New York, NY" />
                </TextField>
              </div>

              <TextField className={fieldWrapperClass} name="adoptionFee">
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
                  onPress={() => redirect("/dashboard/my-listings")}
                  type="submit"
                  className=" bg-accent to-primary px-6 py-3 font-semibold text-white rounded-none  shadow-primary/20 transition hover:opacity-95 w-full "
                >
                  Add Pet Listing
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default AddPetPage;
