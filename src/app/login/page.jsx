"use client";

import Icon from "@/components/Icon";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="w-120 border-2 border-accent/40 shadow rounded p-6">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Welcome Back Again!
        </h1>
        <p className="mb-6 sm font-bold text-gray-600 text-center">
          Please enter your credentials to access your account.
        </p>
        <Form
          className="flex  flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
        >
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
            minLength={6}
            name="password"
            type="password"
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
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 6 characters with 1 uppercase, 1 lowercase, and 1
              number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex justify-center items-center gap-2">
            <Button className="rounded-none" type="submit">
              <Check />
              Login
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
            <Button className="bg-white text-accent rounded-none">
              <Icon
                src="/google.png"
                alt="Google Logo"
                width={18}
                height={18}
              ></Icon>
              Sign in with Google
            </Button>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
