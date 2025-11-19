export default function Button({type, action, disabled}) {
  return (
    <>
    <button onClick={action} disabled={disabled}
      style={{ 
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      className="flex-1 text-white bg-orange-500 box-border border-2 border-orange-500 hover:opacity-90 focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-md text-md cursor-pointer px-4 py-2.5 focus:outline-none">
      {type}
    </button>
    </>
  );
}
