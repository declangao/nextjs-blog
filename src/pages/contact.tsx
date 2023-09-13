import ContactForm from '@/components/contact-form';
import Head from 'next/head';
import React from 'react';

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>

      <ContactForm />
    </>
  );
}
