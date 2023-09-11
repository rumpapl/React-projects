import PropTypes from "prop-types";

function InputBox({
  label,
  amount,
  setAmount,
  className,
  currencyOptions,
  selectedCurrency,
  setSelectedCurrency,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount && setAmount(+e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) =>
            setSelectedCurrency && setSelectedCurrency(e.target.value)
          }
        >
          {currencyOptions.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  setAmount: PropTypes.func,
  className: PropTypes.string,
  currencyOptions: PropTypes.array,
  selectedCurrency: PropTypes.string,
  setSelectedCurrency: PropTypes.func,
};

InputBox.defaultProps = {
  label: "",
  amount: 0,
  className: "",
  currencyOptions: [],
  selectedCurrency: "usd",
};

export default InputBox;
