import React, { useState } from "react";
import Bar from "../components/bar/bar";
import { TextInput, Textarea } from "react-materialize";
import { calculateSalaryFrom } from "../helpers/salary";
import "./style.css";

const SalaryPage = (props) => {
  const [baseInssValue, setBaseInssValue] = useState("0");
  const [inssValue, setInssValue] = useState("0");
  const [salaryValue, setSalaryValue] = useState("0");
  const [baseIrpfValue, setBaseIrpfValue] = useState("0");
  const [discountIrpfValue, setDiscountIrpfValue] = useState("0");
  const [salaryLiquidValue, setSalaryLiquidValue] = useState("0");

  const handleSalaryValueChange = (event) => {
    const value = event.target.value;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(value);

    setSalaryValue(value);
    setBaseInssValue(baseINSS);
    setInssValue(discountINSS);
    setBaseIrpfValue(baseIRPF);
    setDiscountIrpfValue(discountIRPF);
    setSalaryLiquidValue(netSalary);
  };

  return (
    <div className="salaryContainer">
      <div className="titleWrapper">Calculadora de Salário</div>
      <div className="salaryInputWrapper">
        <TextInput
          style={{ color: "#17a2b8", fontWeight: "bold" }}
          id="salaryValue"
          label="Salário"
          type="number"
          value={`${salaryValue}`}
          onChange={handleSalaryValueChange}
        />
      </div>
      <div className="readOnlyInputsWrapper">
        <TextInput
          disabled
          id="baseInss"
          label="Base INSS"
          type="number"
          value={`${baseInssValue}`}
        />
        <TextInput
          style={{ color: "#dc3545", fontWeight: "bold" }}
          disabled
          id="inss"
          label="INSS"
          value={`${inssValue}`}
        />
        <TextInput
          disabled
          id="baseIRPF"
          label="Base IRPF"
          type="number"
          value={`${baseIrpfValue}`}
        />
        <TextInput
          style={{ color: "#ffc107", fontWeight: "bold" }}
          disabled
          id="irpf"
          label="IRPF"
          value={`${discountIrpfValue}`}
        />
        <TextInput
          disabled
          id="descontoIRPF"
          type="number"
          label="Desconto IRPF"
          value={`${inssValue}`}
        />
      </div>
      <div className="salaryLiquidWrapper">
        <TextInput
          disabled
          style={{ color: "#28a745", fontWeight: "bold" }}
          id="salaryLiquid"
          label="Salário Liquido"
          type="number"
          value={`${salaryLiquidValue}`}
        />
      </div>
      <div className="containerBar">
        <Bar value={25} color="#28a745" />
        <Bar value={25} color="#dc3545" />
        <Bar value={25} color="#ffc107" />
      </div>
    </div>
  );
};

export default SalaryPage;
