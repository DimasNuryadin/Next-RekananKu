import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";

interface InputDateProps {
  label: string;
  onDateChange: (date: Date | undefined) => void;
  value?: Date;
}

export default function InputDateForm({ label, value, onDateChange }: Readonly<InputDateProps>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 mb-5">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {value ? value.toLocaleDateString() : "Select date"}
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              onDateChange(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
