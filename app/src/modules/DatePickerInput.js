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

  /** After component has mounted, jQuery plugin updates input field with datepicker functionality.
   * OnChange method is passed as prop into module.
   * Object with target.id and target.value values passed in as argument to replace missing event object.
   */
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

  return (
    // wieso funktioniert das hier mit readOnly? Nutzer kann trotzdem noch Datum verändern.
    <Input id={props.id} type="text" ref={elmt} value={props.value} readOnly />
  );
}

export default DatePickerInput;
