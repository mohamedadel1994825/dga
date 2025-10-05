/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

const DgaTextInput = dynamic(async () => (await import("platformscode-new-react")).DgaTextInput, { ssr: false });
const DgaDatepicker = dynamic(async () => (await import("platformscode-new-react")).DgaDatepicker, { ssr: false });
const DgaButton = dynamic(async () => (await import("platformscode-new-react")).DgaButton, { ssr: false });
const DgaNumberInput = dynamic(async () => (await import("platformscode-new-react")).DgaNumberInput, { ssr: false });
const DgaTextarea = dynamic(async () => (await import("platformscode-new-react")).DgaTextarea, { ssr: false });
const DgaCheckbox = dynamic(async () => (await import("platformscode-new-react")).DgaCheckbox, { ssr: false });

type ValueRef = { value?: string } | null;
type CheckedRef = { checked?: boolean } | null;

export default function Home() {
  const nameRef = useRef<ValueRef>(null);
  const emailRef = useRef<ValueRef>(null);
  const dateRef = useRef<ValueRef>(null);
  const phoneRef = useRef<ValueRef>(null);
  const ageRef = useRef<ValueRef>(null);
  const messageRef = useRef<ValueRef>(null);
  const termsRef = useRef<CheckedRef>(null);

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
            <DgaTextInput ref={(el: any) => { (nameRef as any).current = el; }} placeholder="Your name"></DgaTextInput>
          </div>
          <div className="col-span-1">
            <DgaTextInput ref={(el: any) => { (emailRef as any).current = el; }} placeholder="Email address" type="text"></DgaTextInput>
          </div>
          <div className="col-span-1">
            <DgaTextInput ref={(el: any) => { (phoneRef as any).current = el; }} placeholder="Phone number" type="text"></DgaTextInput>
          </div>
          <div className="col-span-1">
            <DgaNumberInput ref={(el: any) => { (ageRef as any).current = el; }} placeholder="Age"></DgaNumberInput>
          </div>
          <div className="md:col-span-2 col-span-1">
            <DgaDatepicker ref={(el: any) => { (dateRef as any).current = el; }}></DgaDatepicker>
          </div>
          <div className="md:col-span-2 col-span-1">
            <DgaTextarea ref={(el: any) => { (messageRef as any).current = el; }} placeholder="Message"></DgaTextarea>
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className="flex items-center gap-2 text-sm">
              <DgaCheckbox ref={(el: any) => { (termsRef as any).current = el; }}></DgaCheckbox>
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
