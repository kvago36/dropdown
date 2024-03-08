import { useState, useEffect, useRef } from "react";

import { GradientButton, DropdownItem, DropdownWrapper, DropdownContent } from './Dropdown.style'

import ArrowIcon from './menu_arrow_down 2.svg'

interface Selectable {
  value: string;
  label: string
}

type DropdownProps = {
  value: string
  options: Selectable[]
  onChange: (value: string) => void
}

export default function Dropdown({ value, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(function () {
    return options.find(option => option.value === value)
  })

  const dropdownRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleDropdownClick = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDropdownClick, true);

    return () => {
      document.removeEventListener("click", handleDropdownClick, true);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (option: Selectable) => {
    setSelected(option)
    onChange(option.value);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <DropdownItem onClick={() => handleChange(option)} key={option.value}>
        {option.label}
        <img src={ArrowIcon} />
      </DropdownItem>
    );
  });

  return (
    <DropdownWrapper ref={dropdownRef}>
      <GradientButton type="button" onClick={handleClick}>
        {selected?.label}
      </GradientButton>
      {isOpen && (
        <DropdownContent>
          {renderedOptions}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
}