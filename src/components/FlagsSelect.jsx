import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const FlagsSelect = () => {
  const [selected, setSelected] = useState(null);

  return (
    <ReactFlagsSelect
      countries={["US", "GB", "FR", "DE", "IT"]}
      customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }}
      placeholder="Select Language"
      selected={selected}
      onSelect={(code) => setSelected(code)}
    />
  );
};

export default FlagsSelect;
