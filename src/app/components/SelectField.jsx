import { Description, Header, Label, ListBox, Select } from "@heroui/react";
const selectFieldClass = "w-full";

export const SelectField = ({
  name,
  label,
  placeholder,
  description,
  items,
  isRequired = false,
  defaultValue,
}) => {
  return (
    <Select
      className={selectFieldClass}
      name={name}
      placeholder={placeholder}
      isRequired={isRequired}
      defaultValue={defaultValue}
    >
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      {description ? <Description>{description}</Description> : null}
      <Select.Popover>
        <ListBox>
          {items.map((item) =>
            item.section ? (
              <ListBox.Section key={item.section}>
                <Header>{item.section}</Header>
                {item.options.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                  >
                    <Label>{option.label}</Label>
                    {option.description ? (
                      <Description>{option.description}</Description>
                    ) : null}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox.Section>
            ) : (
              <ListBox.Item key={item.id} id={item.id} textValue={item.label}>
                <Label>{item.label}</Label>
                {item.description ? (
                  <Description>{item.description}</Description>
                ) : null}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ),
          )}
        </ListBox>
      </Select.Popover>
    </Select>
  );
};
