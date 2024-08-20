

export const Button = ({ onClick, children, type, className, style, size }) => {
  const types = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    secondary: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
    tertiary: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    warning: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",
    purp: "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded",
    orange: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
    rainbow: "text-white font-bold py-2 px-4 rounded hover:opacity-90",
  };

  const sizes ={
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4",
    large: "py-3 px-6 text-lg",
  }


  return (
    <button
      onClick={onClick}
      style={{ background: (type === "rainbow" && 'linear-gradient(-45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)'), style }}
      className={types[type] + " cursor-pointer py-2 px-4 rounded " + className + " " + sizes[size]}
    >
      {children}
    </button>
  );
}
