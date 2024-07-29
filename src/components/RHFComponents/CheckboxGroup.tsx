import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckboxGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  description?: string;
  options: { id: string | number; label: string }[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  label,
  description,
  options,
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            {label && (
              <FormLabel className="text-md font-normal">{label}</FormLabel>
            )}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          {options.map(({ id, label }) => (
            <FormField
              key={id}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={id}
                    className="flex flex-row items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== id,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-base font-normal">
                      {label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CheckboxGroup;
