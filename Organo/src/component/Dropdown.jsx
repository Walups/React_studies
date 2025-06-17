const Dropdown = ({itens, label}) => {
  return (
    <div>
        <label htmlFor="dropdown">{label}</label>
        <select id="dropdown">
            {itens.map(iten => {
                return (
                    <option key={iten} value={iten}>
                        {iten}
                    </option>
                );
            })}
            
        </select>
    </div>
  );
};

export default Dropdown;
