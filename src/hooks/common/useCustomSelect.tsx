import { KeyboardEvent, useEffect, useRef, useState } from "react";
import ISelectDropdownProps from "@/interfaces/common/selectDropdownProps";
import getNestedValue from "@/utils/getNestedValue";

const useCustomSelect = <T extends { _id?: string | number }>({
  name,
  value,
  optionText,
  data,
  dataField,
  desiredValue,
  handleChange,
}: ISelectDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getLabel = (item: T): string => {
    return dataField ? String(getNestedValue(item, dataField)) : "";
  };

  const selectedItem = data.find(
    (d) => String(getNestedValue(d, desiredValue as string)) === String(value),
  );

  const selectedLabel = selectedItem ? getLabel(selectedItem) : optionText;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const onSelectOption = (item: T) => {
    const val = desiredValue ? getNestedValue(item, desiredValue) : "";
    const syntheticEvent = {
      target: { id: name, value: val },
    } as React.ChangeEvent<HTMLSelectElement>;

    handleChange?.(syntheticEvent);
    setIsOpen(false);
  };

  const onSelectPlaceholder = () => {
    const syntheticEvent = {
      target: { id: name, value: "0" },
    } as React.ChangeEvent<HTMLSelectElement>;

    handleChange?.(syntheticEvent);
    setIsOpen(false);
  };

  const isSelected = (item: T) =>
    String(getNestedValue(item, desiredValue as string)) === String(value);

  const isHighlighted = (index: number) => index === highlightedIndex;

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      e.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(0);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < (data?.length ?? 0) - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : (data?.length ?? 0) - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex !== -1 && data) {
          onSelectOption(data[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    isOpen,
    highlightedIndex,
    containerRef,
    selectedLabel,
    handleKeyDown,
    toggleDropdown,
    isSelected,
    isHighlighted,
    onSelectOption,
    onSelectPlaceholder,
    getLabel,
  };
};

export default useCustomSelect;
