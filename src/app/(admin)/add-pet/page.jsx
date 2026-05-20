"use client";

import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Select,
  SelectItem,
  TextArea,
  TextField,
} from "@heroui/react";

const fieldWrapperClass = "w-full";

const AddPetPage = () => {
  return (
    <main className="min-h-screen bg-[#0e1220] px-4 py-8 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-275">
        <div className="mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm font-semibold text-pink-300 shadow-[0_0_0_1px_rgba(244,114,182,0.06)]">
            <span className="text-base leading-none">+</span>
            List a Pet
          </span>
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Add a <span className="text-pink-300">Pet</span> Listing
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              Help a pet find their forever home by creating a detailed listing.
            </p>
          </div>
        </div>

        <Card className="border border-white/10 bg-[#11182c] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <CardBody className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3 text-lg font-bold text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 text-pink-300 ring-1 ring-pink-400/20">
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

                <Select
                  className={fieldWrapperClass}
                  label="Species"
                  placeholder="Select species"
                  isRequired
                >
                  <SelectItem key="dog">Dog</SelectItem>
                  <SelectItem key="cat">Cat</SelectItem>
                  <SelectItem key="rabbit">Rabbit</SelectItem>
                  <SelectItem key="bird">Bird</SelectItem>
                  <SelectItem key="other">Other</SelectItem>
                </Select>

                <TextField className={fieldWrapperClass} name="breed">
                  <Label>Breed</Label>
                  <Input placeholder="e.g. Labrador Retriever" />
                </TextField>

                <TextField className={fieldWrapperClass} name="age">
                  <Label>Age (years)</Label>
                  <Input type="number" min="0" placeholder="e.g. 2" />
                </TextField>

                <Select
                  className={fieldWrapperClass}
                  label="Gender"
                  placeholder="Select gender"
                >
                  <SelectItem key="male">Male</SelectItem>
                  <SelectItem key="female">Female</SelectItem>
                  <SelectItem key="unknown">Unknown</SelectItem>
                </Select>

                <Select
                  className={fieldWrapperClass}
                  label="Vaccination Status"
                  placeholder="Select status"
                >
                  <SelectItem key="vaccinated">Vaccinated</SelectItem>
                  <SelectItem key="partial">Partial</SelectItem>
                  <SelectItem key="not-vaccinated">Not vaccinated</SelectItem>
                </Select>
              </div>

              <TextField className={fieldWrapperClass} name="petImage">
                <Label>Pet Image URL</Label>
                <Input placeholder="https://i.ibb.co/..." />
                <p className="mt-2 text-xs text-slate-400">
                  upload to imgbb.com first
                </p>
              </TextField>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Select
                  className={fieldWrapperClass}
                  label="Health Status"
                  placeholder="Select health status"
                  isRequired
                >
                  <SelectItem key="healthy">Healthy</SelectItem>
                  <SelectItem key="recovering">Recovering</SelectItem>
                  <SelectItem key="needs-care">Needs care</SelectItem>
                </Select>

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
                <p className="mt-2 text-xs text-slate-400">Enter 0 for free</p>
              </TextField>

              <TextField className={fieldWrapperClass} name="ownerEmail">
                <Label>Owner Email</Label>
                <Input
                  type="email"
                  defaultValue="mdtaraqueahramfahim@gmail.com"
                />
              </TextField>

              <TextField
                className={fieldWrapperClass}
                name="description"
                isRequired
              >
                <Label>Description</Label>
                <TextArea
                  minRows={4}
                  placeholder="Describe the pet's personality, habits, needs and anything adopters should know..."
                />
              </TextField>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button
                  type="button"
                  variant="bordered"
                  className="rounded-full border-white/10 bg-transparent px-6 py-3 font-semibold text-white hover:bg-white/5"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="rounded-full bg-linear-to-r from-pink-500 via-rose-400 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:opacity-95"
                >
                  Add Pet Listing
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
};

export default AddPetPage;
