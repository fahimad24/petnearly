"use client";

import Icon from "@/app/components/Icon";
import Logo from "@/app/components/Logo";
import { signInWithGoogle, signOut } from "@/app/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const image = formData.get("Photo");
    const { error } = await signUp.email({
      name, // required
      email, // required
      password, // required
      image, // required
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    await signOut();
    toast.success("Account created successfully!");
    redirect("/login");
  };
  return (
    <section className="flex flex-col pt-24 py-10 items-center justify-center bg-[url('/dogs.webp')] bg-cover bg-center relative">
      <div className="flex items-center mb-5 z-10">
        <Logo />
        <p className="font-black font-nunito text-5xl">
          {" "}
          <span className="text-accent">Pet</span>
          <span className="text-primary">Nearly</span>
        </p>
      </div>
      <div className="backdrop-blur absolute w-full h-full top-0"></div>
      <div className="w-120 border-2 border-accent shadow rounded p-6 bg-neutral/80 z-10">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Create an Account!
        </h1>
        <p className="mb-6 sm font-bold text-gray-600 text-center">
          Please fill in the form to create an account.
        </p>
        <Form
          className="flex  flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={handleFormSubmit}
        >
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (!value.trim()) {
                return "Please enter your name";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="Photo"
            type="url"
            validate={(value) => {
              if (
                !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i.test(value)
              ) {
                return "Please enter a valid image URL (png, jpg, jpeg, gif, svg, webp)";
              }

              return null;
            }}
          >
            <Label>Photo</Label>
            <Input placeholder="Enter your photo URL" />
            <FieldError />
          </TextField>

          {/* Password Field */}

          <TextField
            className="w-full"
            minLength={6}
            name="password"
            isRequired
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                id="password"
                className="w-full"
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 6 characters with 1 uppercase, 1 lowercase, and 1
              number
            </Description>
            <FieldError />
          </TextField>

          {/* Confirm Password Field */}
          <TextField
            className="w-full"
            minLength={6}
            name="confirmPassword"
            type="password"
            isRequired
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              if (value !== document.getElementById("password").value) {
                return "Passwords do not match";
              }

              return null;
            }}
          >
            <Label>Confirm Password</Label>
            <Input placeholder="Enter Confirm Password" />
            <FieldError />
          </TextField>

          <div className="flex justify-center items-center gap-2">
            <Button className="rounded-none" type="submit">
              <Check />
              Sign Up
            </Button>
            <Button
              type="reset"
              className="rounded-none bg-primary hover:bg-primary/90 transition-colors delay-100"
            >
              Reset
            </Button>
          </div>
        </Form>
        <div>
          <div className="flex items-center justify-center gap-4 my-4">
            <hr className="flex-1 border-t-2" />
            or
            <hr className="flex-1 border-t-2" />
          </div>
          <div className="flex items-center justify-center  mt-4">
            <Button
              onPress={signInWithGoogle}
              className="bg-white text-accent rounded-none"
            >
              <Icon
                src="/google.png"
                alt="Google Logo"
                width={18}
                height={18}
              ></Icon>
              Sign up with Google
            </Button>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
