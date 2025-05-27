import * as React from "react"
import {
  SelectPortal,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const SelectComponent = React.forwardRef<
  React.ElementRef<typeof Select>,
  React.ComponentPropsWithoutRef<typeof Select>
>(({ className, children, ...props }, ref) => (
  <Select
    ref={ref}
    className={cn("grid gap-1", className)}
    {...props}
  >
    {children}
    <SelectTrigger className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
      <SelectValue placeholder="Select" />
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectTrigger>
    <SelectContent className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
      {children}
    </SelectContent>
  </Select>
))
SelectComponent.displayName = Select.displayName

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  React.ComponentPropsWithoutRef<typeof SelectTrigger>
>(({ className, children, ...props }, ref) => (
  <SelectTrigger ref={ref} className={cn(className)} {...props}>
    {children}
  </SelectTrigger>
))
SelectTrigger.displayName = SelectTrigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectScrollUpButton>
))
SelectScrollUpButton.displayName = SelectScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectScrollDownButton>
))
SelectScrollDownButton.displayName = SelectScrollDownButton.displayName

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectValue>,
  React.ComponentPropsWithoutRef<typeof SelectValue>
>(({ className, ...props }, ref) => (
  <SelectValue ref={ref} className={cn("text-sm", className)} {...props} />
))
SelectValue.displayName = SelectValue.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectContent>,
  React.ComponentPropsWithoutRef<typeof SelectContent>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPortal>
    <SelectContent
      ref={ref}
      className={cn(
        "max-h-96 min-w-[8rem] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      {children}
    </SelectContent>
  </SelectPortal>
))
SelectContent.displayName = SelectContent.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectItem>,
  React.ComponentPropsWithoutRef<typeof SelectItem>
>(({ className, children, ...props }, ref) => (
  <SelectItem
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <Check className="h-4 w-4 opacity-0" />
    </span>

    <SelectItemText>{children}</SelectItemText>
  </SelectItem>
))
SelectItem.displayName = SelectItem.displayName

const SelectItemText = React.forwardRef<
  React.ElementRef<typeof SelectItemText>,
  React.ComponentPropsWithoutRef<typeof SelectItemText>
>(({ className, ...props }, ref) => (
  <SelectItemText
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
))
SelectItemText.displayName = SelectItemText.displayName

export {
  SelectComponent as Select,
  SelectTrigger,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
}
