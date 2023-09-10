import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const ref = useRef(null);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowSymbols, setAllowSymbols] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumbers) str += "0123456789";
    if (allowSymbols) str += "~&@#";

    for (let index = 1; index <= length; index++) {
      pass += str.charAt(Math.random() * str.length + 1);
    }
    setPassword(pass);
  }, [allowNumbers, allowSymbols, length, setPassword]);

  const copyToClipboard = useCallback(() => {
    ref.current.select();
    ref.current.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [allowNumbers, allowSymbols, generatePassword, length]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex rounded-lg shadow overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none px-3 py-1 w-full"
          readOnly
          ref={ref}
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-700  px-3 py-1 shirnk-0"
        >
          copy
        </button>
      </div>
      <div className="text-sm flex gap-x-2 ">
        <input
          type="range"
          min={1}
          max={100}
          value={length}
          className=""
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: ({length})</label>
        <input
          type="checkbox"
          defaultChecked={allowNumbers}
          onChange={() => setAllowNumbers((prev) => !prev)}
        />
        <label>Numbers</label>
        <input
          type="checkbox"
          defaultChecked={allowSymbols}
          onChange={() => setAllowSymbols((prev) => !prev)}
        />
        <label>Symbols</label>
      </div>
    </div>
  );
};

export default PasswordGenerator;
