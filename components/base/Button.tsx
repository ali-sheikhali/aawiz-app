interface ButtonProps {
  name: string;
  type: "submit" | "button";
  variant?: "primary" | "secondary";
}

export default function Button({ name, type = "submit" , variant="primary" }: ButtonProps) {

  const base = "w-full text-center py-2 rounded-md cursor-pointer"  
   const variants = {
    primary: "bg-green text-fill-primary ",
    secondary: "bg-gray-200 dark:bg-gray-700 dark:text-white"
  };  
  return (
    <div>
      <button className={`${base} ${variants[variant]}`} type={type}>{name}</button>
    </div>
  );
}
