const Inputs = ({ type, placeholder, value, text, id }) => {
  return (
    
        
      <div>
        <label 
          htmlFor={id} 
          className="block font-bold text-2xl mb-2">
            {text}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          id={id}
          className=' p-6 w-full bg-white text-2xl shadow-[10px_10px_30px_rgba(0,_0,_0,_0.06)] border-none box-border'
        />
      </div>
    
  );
}

export default Inputs;