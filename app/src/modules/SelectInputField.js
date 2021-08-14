import React, { useEffect } from "react";
import $ from "jquery";
// import "jquery-ui/themes/base/core.css";
// import "jquery-ui/themes/base/theme.css";
// import "jquery-ui/themes/base/selectmenu.css";
// import "jquery-ui/ui/widget";
// import "jquery-ui/ui/position";
// import "jquery-ui/ui/core";
// import "jquery-ui/ui/widgets/menu";
// import "jquery-ui/ui/widgets/selectmenu";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

function SelectInputField(props) {
  const elmt = React.useRef();

  /** After component has mounted, jQuery plugin generates table from employee data.
   * Data is passed as prop into module.
   */
  useEffect(() => {
    const $elmt = $(elmt.current);
    $elmt.selectmenu({
      change: function (event, ui) {
        props.onChange({ target: { id: props.id, value: ui.item.value } });
      },
    });
  });

  return (
    <select name="state" id={props.id} value={props.value} ref={elmt} readOnly>
      {props.data.map((state, index) => {
        return (
          <option value={state.name} text={state.name} key={index}>
            {state.name}
          </option>
        );
      })}
    </select>
  );
}

export default SelectInputField;
