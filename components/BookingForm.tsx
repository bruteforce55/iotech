"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BookingFormProps {
  onClose: () => void;
}

export default function BookingForm({ onClose }: BookingFormProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[50] right-[150px] rounded-[10px] border-[3px] border-[#ffffff]">
      <div className="bg-[#392921] p-[50px] rounded-[8px] shadow-lg max-w-[400px] w-[100%] text-[#ffffff]">
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-[#ffffff] rounded-[100%] top-[16px] right-[16px] text-[#af1f1f] appearance-none border-none hover:text-gray-300 text-[24px] font-bold focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-[20px] font-[600] mb-[16px] mt-[0px]">
          Book Appointment
        </h2>

        <Formik
          initialValues={{ name: "", email: "", date: "" }}
          validate={(values) => {
            const errors: Record<string, string> = {};
            if (!values.name) errors.name = "Required";
            if (!values.email) errors.email = "Required";
            else if (!/\S+@\S+\.\S+/.test(values.email))
              errors.email = "Invalid email";
            if (!values.date) errors.date = "Required";
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              toast.success("Appointment booked successfully!");
              setSubmitting(false);

              setTimeout(() => {
                onClose();
              }, 3000);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <Form className="space-y-[16px]">
                <div>
                  <label className="block mb-[4px] text-[14px] font-medium">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-[100%] box-border border border-gray-300 px-[12px] py-[8px] rounded-[4px] text-[14px]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-[#dc2626] text-[12px] mt-[4px]"
                  />
                </div>

                <div>
                  <label className="block mb-[4px] text-[14px] font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-[100%] box-border border border-gray-300 px-[12px] py-[8px] rounded-[4px] text-[14px]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-[#dc2626] text-[12px] mt-[4px]"
                  />
                </div>

                <div>
                  <label className="block mb-[4px] text-[14px] font-medium">
                    Date
                  </label>
                  <Field
                    type="date"
                    name="date"
                    className="w-[100%] box-border border border-gray-300 px-[12px] py-[8px] rounded-[4px] text-[14px]"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-[#dc2626] text-[12px] mt-[4px]"
                  />
                </div>

                <div className="flex justify-center space-x-[8px] pt-[16px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-[16px] py-[8px] bg-[#2b1700] text-[#ffffff] rounded-[4px] border-[1px] border-[#ffffff] hover:bg-blue-700 text-[14px] disabled:opacity-50 cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </Form>
              <ToastContainer position="bottom-right" autoClose={3000} />
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
