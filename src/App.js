import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleBill = (event) => {
    setBill(Number(event.target.value));
  };

  const handleTip = (event) => {
    setTip(Number(event.target.value));
  };

  const handleTip2 = (event) => {
    setTip2(Number(event.target.value));
  };

  const tipPerc1 = (tip / 100) * bill;
  const tipPerc2 = (tip2 / 100) * bill;
  const totalBill = bill + tipPerc1 + tipPerc2;

  function handleReset() {
    setBill(0);
    setTip(0);
    setTip2(0);
    window.location.reload(false);
  }

  return (
    <div className="container">
      <Bill bill={bill} onChangeBill={handleBill} />
      <Tip tip1={tip} onChangeTip={handleTip}>
        How did you like the service?
      </Tip>
      <Tip tip2={tip2} onChangeTip={handleTip2}>
        How did your friend like the service?
      </Tip>
      <BillCalculation
        bill={bill}
        tip={tipPerc1}
        tip2={tipPerc2}
        totalBill={totalBill}
      />
      <ResetApp handleReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onChangeBill }) {
  return (
    <div>
      <label for="bill">How much was the bill? </label>
      <input
        type="number"
        min={0}
        id="bill"
        name="bill"
        placeholder={bill}
        onChange={onChangeBill}
      />
    </div>
  );
}

function Tip({ onChangeTip, children }) {
  return (
    <div>
      <label for="tips">{children}</label>
      <select id="tips" name="tips" onChange={onChangeTip}>
        <option value={0}>Disatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutlely Amazing! (20%)</option>
      </select>
    </div>
  );
}

function BillCalculation({ bill, tip, tip2, totalBill }) {
  return (
    <div>
      <h3>{`You pay $${totalBill.toFixed(2)} ($${bill} + $${tip + tip2})`}</h3>
    </div>
  );
}

function ResetApp({ handleReset }) {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
