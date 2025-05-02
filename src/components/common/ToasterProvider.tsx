"use client";

import { Toaster, ToastBar, toast } from "react-hot-toast";
import { X } from "@/configuration/icons";

export default function ToasterProvider() {
  return (
    <Toaster toastOptions={{ duration: 15000 }}>
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <X
                  className="cursor-pointer"
                  onClick={() => toast.dismiss(t.id)}
                />
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
