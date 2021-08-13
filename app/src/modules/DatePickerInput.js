import React, { useEffect } from "react";
import { Input } from "../styles/home";
import $ from "jquery";
// why import the below as is?
import "jquery-datetimepicker";
// why do I have to explicitely import this?
// how do I know what to import?
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";

function DatePickerInput(props) {
  const elmt = React.useRef();
  const id = props.id;

  useEffect(() => {
    const $elmt = $(elmt.current);
    $elmt.datetimepicker({
      timepicker: false,
      format: "m/d/Y",
      onChangeDateTime: function (dp, $input) {
        // const e = { target: { id: id, value: $input.val() } };
        props.onChange({ target: { id: id, value: $input.val() } });
      },
    });
  });

  return <Input id={props.id} type="text" ref={elmt} />;
}

export default DatePickerInput;
