import { Toaster } from "sonner";

const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-right" 
      richColors={true} 
      expand={true} 
      duration={5000} 
    />
  );
};

export default ToasterProvider;
