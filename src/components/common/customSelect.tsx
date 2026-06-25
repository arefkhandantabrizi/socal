import useCustomSelect from "@/hooks/common/useCustomSelect";
import ISelect from "@/interfaces/common/select";

const CustomSelect = <T extends { _id?: string | number }>({
  name,
  value,
  optionText,
  data,
  dataField,
  desiredValue,
  isDisabled = false,
  handleChange,
}: ISelect<T>) => {
  const {
    containerRef,
    isOpen,
    selectedLabel,
    isHighlighted,
    isSelected,
    onSelectOption,
    onSelectPlaceholder,
    handleKeyDown,
    toggleDropdown,
    getLabel,
  } = useCustomSelect({
    name,
    value,
    optionText,
    data,
    dataField,
    desiredValue,
    handleChange,
  });

  return (
    <div
      className={`custom-select-container`}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`custom-select-box ${isDisabled ? "disabled" : ""}`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen && !isDisabled}
      >
        {selectedLabel}
      </div>

      {isOpen && !isDisabled && (
        <ul className="custom-select-dropdown" role="listbox">
          <li
            className="custom-select-option"
            key="placeholder"
            onClick={onSelectPlaceholder}
          >
            {optionText}
          </li>

          {data?.map((item, index) => (
            <li
              key={item._id}
              role="option"
              aria-selected={isSelected(item)}
              className={`custom-select-option ${
                isSelected(item) ? "selected" : ""
              } ${isHighlighted(index) ? "highlighted" : ""}`}
              onClick={() => onSelectOption(item)}
            >
              {getLabel(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
