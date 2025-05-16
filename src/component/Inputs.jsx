function Inputs({ type, placeholder, value, text, id }) {
  return (
    <form action="">
        
        <label htmlFor={id} >{text}</label>    
    
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          id={id}
          className='border border-solid border-[#6278F7] rounded-md p-2  mb-4'
        />
    </form>
  );
}

export default Inputs;