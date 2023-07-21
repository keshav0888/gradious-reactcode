import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import "../App.css"
export const RenderDropdown = ({
  field,
  data,
  valueField,
  textField,
  ...props
}) => {
  const customStyles = {
    /* Your custom inline styles for the dropdown go here */
    width: "20rem",
    borderRadius: "50px",
    border: "1px solid gray",
    overflow: "hidden",
    // Adding the dropdown specific styles
    ".react-widgets-DropdownList-container": {
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
    },
    ".react-widgets-DropdownList-option": {
      color: "#333",
      fontWeight: "bold",
    },
  };
  return (
    <div>
      <DropdownList
          {...props}
          data={data}
          valueField={valueField}
          textField={textField}
          filter={false}
          defaultValue={"Select Dropdown"}
          style={customStyles}

      />
    </div>
  );
};
