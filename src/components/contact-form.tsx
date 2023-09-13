import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Spinner from './UI/spinner';
import { motion } from 'framer-motion';

import { isValidEmail } from '@/util/utils';

type Props = {};

export default function ContactForm({}: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !isValidEmail(email) ||
      !message ||
      message.trim() === ''
    ) {
      toast.error('Invalid user input...');
      return;
    }

    setIsPending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Something went wrong...');

      toast.success('Message sent!');

      nameRef.current!.value = '';
      emailRef.current!.value = '';
      messageRef.current!.value = '';
    } catch (err) {
      toast.error('Something went wrong...');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="mx-auto my-8 rounded-md bg-slate-200 dark:bg-slate-800 w-[90%] max-w-4xl p-4 shadow-md text-2xl">
      <motion.h1
        className="text-center text-4xl md:text-left mx-0 my-4"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Have a question? Send me a message below.
      </motion.h1>

      <ToastContainer />

      <motion.form
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[10rem]">
            <label className="block font-bold mx-0 mt-2 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="p-1 rounded w-full border border-slate-400 bg-slate-50 resize-none"
              required
              ref={nameRef}
            />
          </div>

          <div className="flex-1 min-w-[10rem]">
            <label className="block font-bold mx-0 mt-2 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="p-1 rounded w-full border border-slate-400 bg-slate-50 resize-none"
              required
              ref={emailRef}
            />
          </div>
        </div>

        <div className="flex-1 min-w-[10rem]">
          <label className="block font-bold mx-0 mt-2 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            ref={messageRef}
            className="p-1 rounded w-full border border-slate-400 bg-slate-50 resize-none"
          ></textarea>
        </div>

        <div className="mt-4 text-right">
          <button
            className="cursor-pointer inline-flex items-center bg-red-400 border border-red-400 px-4 py-2 rounded text-slate-200 shadow hover:bg-red-500 hover:border-red-500"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Spinner className="mr-3" />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
}
