import React, { useEffect } from "react";
import { Input } from "../styles/home";
import $ from "jquery";
import "jquery-datetimepicker";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";

function DatePickerInput(props) {
  const elmt = React.useRef();
  const id = props.id;
  const e = {
    target: {
      id: undefined,
      value: undefined,
    },
  };

  useEffect(() => {
    const $elmt = $(elmt.current);
    $elmt.datetimepicker({
      timepicker: false,
      format: "m/d/Y",
      onChangeDateTime: function (dp, $input) {
        // wieso nimmt er sich id nicht von $elmt.id?
        // wieso erstellt er neues dateOfBirth key außerhalb von createEmployee Object?
        e.target.id = id;
        e.target.value = $input.val();
        props.onChange(e);
      },
    });
  });

  return <Input id={props.id} type="text" ref={elmt} />;
}

export default DatePickerInput;
