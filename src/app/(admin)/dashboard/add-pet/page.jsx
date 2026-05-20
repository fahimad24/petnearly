"use client";

import {
  Button,
  Card,
  Form,
  Label,
  ListBox,
  Input,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

const fieldWrapperClass = "w-full";

const selectFieldClass = "w-full";

const SelectField = ({ label, placeholder, items, isRequired = false }) => {
  return (
    <Select
      className={selectFieldClass}
      placeholder={placeholder}
      isRequired={isRequired}
    >
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {items.map((item) => (
            <ListBox.Item key={item.id} id={item.id} textValue={item.label}>
              {item.label}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

const AddPetPage = () => {
  return (
    <main className="min-h-screen bg-backTone px-4 py-8 text-dark-text sm:px-6 lg:px-8">
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

            <Form className="space-y-6" render={(props) => <form {...props} />}>
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

                <TextField className={fieldWrapperClass} name="breed">
                  <Label>Breed</Label>
                  <Input placeholder="e.g. Labrador Retriever" />
                </TextField>

                <TextField className={fieldWrapperClass} name="age">
                  <Label>Age (years)</Label>
                  <Input type="number" min="0" placeholder="e.g. 2" />
                </TextField>

                <SelectField
                  label="Gender"
                  placeholder="Select gender"
                  items={[
                    { id: "male", label: "Male" },
                    { id: "female", label: "Female" },
                    { id: "unknown", label: "Unknown" },
                  ]}
                />

                <SelectField
                  label="Vaccination Status"
                  placeholder="Select status"
                  items={[
                    { id: "vaccinated", label: "Vaccinated" },
                    { id: "partial", label: "Partial" },
                    { id: "not-vaccinated", label: "Not vaccinated" },
                  ]}
                />
              </div>

              <TextField className={fieldWrapperClass} name="petImage">
                <Label>Pet Image URL</Label>
                <Input placeholder="https://i.ibb.co/..." />
                <p className="mt-2 text-xs text-light-text">
                  upload to imgbb.com first
                </p>
              </TextField>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <SelectField
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
                className={fieldWrapperClass}
              >
                <Label>Owner Email</Label>
                <Input placeholder="mdtaraqueahramfahim@gmail.com" />
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
                  type="button"
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
