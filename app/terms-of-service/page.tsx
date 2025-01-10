"use client";
import { appdata } from "@/data";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      id="privacy-policy"
      className="bg-white min-h-screen flex flex-col px-4 lg:px-12 justify-start items-start lg:items-center py-10 lg:py-20 transition duration-300 ease-in-out"
    >
      <div className="w-full lg:w-[60%]">
        <h2 className="text-left text-black py-16 text-2xl md:text-3xl lg:text-4xl font-semibold">
          Terms and Conditions of Service
        </h2>

        <p className="text-gray-700 mt-4 text-sm lg:text-base">
          Last Updated: December 26, 2024
        </p>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">Note</h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            Only{" "}
            <span className="text-black font-semibold">Manuchimso Oliver</span>{" "}
            has the right to publish the iOS version of Swapam on Apple Store.
            <br /> Only{" "}
            <span className="text-black font-semibold">
              Manuchimso Oliver
            </span>{" "}
            has the right to publish the iOS version of Swapam on Apple Store.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Introduction
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            Welcome to{" "}
            <a href="https://swapamnow.com/" className="text-blue-500">
              Swapam
            </a>{" "}
            ("we," "us," "our"). These Terms and Conditions ("T&C") govern your
            use of our platform, including but not limited to our website, app,
            and associated services (collectively referred to as "the Service").
            By accessing or using our Service, you agree to comply with and be
            bound by these T&C. If you disagree with any part of the T&C, you
            must refrain from using our Service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Eligibility
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            To use our Service, you must be at least 13 years old (or the
            minimum age required in your jurisdiction). If you are under the age
            of 18, you must obtain consent from your parent or legal guardian.
            We reserve the right to terminate your account if we suspect that
            you do not meet the eligibility requirements.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Account Registration
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            You agree to provide accurate and complete information when
            registering for an account. You are responsible for maintaining the
            confidentiality of your login credentials and for all activities
            under your account. Notify us immediately of any unauthorized access
            or security breach.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Acceptable Use
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            Only{" "}
            <span className="text-black font-semibold">Manuchimso Oliver</span>{" "}
            has the right to publish the iOS version of Swapam on Apple Store.
          </p>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            You agree to use the Service only for lawful purposes and in
            accordance with these T&C. Prohibited activities include, but are
            not limited to:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-sm lg:text-base">
            <li>Engaging in fraudulent, abusive, or harmful behavior.</li>
            <li>Uploading viruses, malware, or other malicious code.</li>
            <li>Violating the intellectual property rights of others.</li>
            <li>Using the Service for illegal or unauthorized purposes.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Services Provided
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            Swapam offers a range of financial and utility services, including
            but not limited to:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-sm lg:text-base">
            <li>Crypto off ramp solutions.</li>
            <li>Virtual account management.</li>
            <li>
              Payment of utility bills (electricity, airtime, cable, etc.).
            </li>
            <li>Funding betting accounts.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Fees and Payments
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            Certain features of the Service may require payment. By using such
            features, you agree to pay all applicable fees. All payments are
            non-refundable unless otherwise stated.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Privacy Policy
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            Your use of the Service is subject to our Privacy Policy. By using
            the Service, you consent to the collection, use, and sharing of your
            information as described in our{" "}
            <Link href="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            To the fullest extent permitted by law, Swapam shall not be liable
            for any indirect, incidental, consequential, or punitive damages
            arising out of your use of the Service. Our total liability is
            limited to the amount paid for the Service, if applicable.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Changes to Terms
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            We may update these T&C from time to time. Changes will be effective
            immediately upon posting unless otherwise specified. Your continued
            use of the Service constitutes your acceptance of the revised T&C.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Governing Law
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            These T&C are governed by and construed in accordance with the laws
            of Nigeria. Any disputes arising from these terms will be resolved
            in the courts of Nigeria.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black">
            Contact Us
          </h2>
          <p className="text-gray-700 mt-4 text-sm lg:text-base leading-6">
            If you have any questions or concerns regarding these T&C, please
            contact us at{" "}
            <a href={`mailto:${appdata.email}`} className="text-blue-500">
              {appdata.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
