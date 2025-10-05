"use client";

import Image from "next/image";
import { useRef } from "react";
import dynamic from "next/dynamic";

const DgaTextInput = dynamic(async () => (await import("platformscode-new-react")).DgaTextInput, { ssr: false });
const DgaDatepicker = dynamic(async () => (await import("platformscode-new-react")).DgaDatepicker, { ssr: false });
const DgaButton = dynamic(async () => (await import("platformscode-new-react")).DgaButton, { ssr: false });
const DgaNumberInput = dynamic(async () => (await import("platformscode-new-react")).DgaNumberInput, { ssr: false });
const DgaTextarea = dynamic(async () => (await import("platformscode-new-react")).DgaTextarea, { ssr: false });
const DgaCheckbox = dynamic(async () => (await import("platformscode-new-react")).DgaCheckbox, { ssr: false });

export default function Home() {
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const dateRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const ageRef = useRef<any>(null);
  const messageRef = useRef<any>(null);
  const termsRef = useRef<any>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const date = dateRef.current?.value ?? "";
    const phone = phoneRef.current?.value ?? "";
    const age = ageRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";
    const accepted = !!(termsRef.current?.checked ?? false);
    console.log({ name, email, date, phone, age, message, accepted });
    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nDate: ${date}\nMessage: ${message}\nAccepted Terms: ${accepted ? 'Yes' : 'No'}`);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl p-6 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-black/20">
        <h2 className="text-lg font-semibold mb-4">Quick Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <DgaTextInput ref={nameRef} placeholder="Your name"></DgaTextInput>
          </div>
          <div className="col-span-1">
            <DgaTextInput ref={emailRef} placeholder="Email address" type="text"></DgaTextInput>
          </div>
          <div className="col-span-1">
            <DgaTextInput ref={phoneRef} placeholder="Phone number" type="text"></DgaTextInput>
          </div>
          <div className="col-span-1">
            <DgaNumberInput ref={ageRef} placeholder="Age"></DgaNumberInput>
          </div>
          <div className="md:col-span-2 col-span-1">
            <DgaDatepicker ref={dateRef}></DgaDatepicker>
          </div>
          <div className="md:col-span-2 col-span-1">
            <DgaTextarea ref={messageRef} placeholder="Message"></DgaTextarea>
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className="flex items-center gap-2 text-sm">
              <DgaCheckbox ref={termsRef}></DgaCheckbox>
              <span>I accept the terms</span>
            </label>
          </div>
          <div className="md:col-span-2 col-span-1 flex justify-end">
            <DgaButton type="submit" label="Submit"></DgaButton>
          </div>
        </div>
      </form>
    </div>
  );
}
