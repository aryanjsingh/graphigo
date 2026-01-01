"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const SelectContext = React.createContext<{
    value: string
    onValueChange: (value: string) => void
    open: boolean
    setOpen: (open: boolean) => void
}>({
    value: "",
    onValueChange: () => { },
    open: false,
    setOpen: () => { },
})

const Select = ({
    children,
    value,
    onValueChange,
}: {
    children: React.ReactNode
    value?: string
    onValueChange?: (value: string) => void
}) => {
    const [internalValue, setInternalValue] = React.useState(value || "")
    const [open, setOpen] = React.useState(false)

    const handleValueChange = (newValue: string) => {
        setInternalValue(newValue)
        onValueChange?.(newValue)
        setOpen(false)
    }

    return (
        <SelectContext.Provider
            value={{
                value: value || internalValue,
                onValueChange: handleValueChange,
                open,
                setOpen,
            }}
        >
            {children}
        </SelectContext.Provider>
    )
}

const SelectTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext)

    return (
        <button
            ref={ref}
            type="button"
            className={cn(
                "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            onClick={() => setOpen(!open)}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
    )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
    const { value } = React.useContext(SelectContext)
    return <span>{value || placeholder}</span>
}

const SelectContent = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    const { open } = React.useContext(SelectContext)

    if (!open) return null

    return (
        <div
            className={cn(
                "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md",
                className
            )}
        >
            {children}
        </div>
    )
}

const SelectItem = ({
    value,
    children,
    className,
}: {
    value: string
    children: React.ReactNode
    className?: string
}) => {
    const { onValueChange } = React.useContext(SelectContext)

    return (
        <div
            className={cn(
                "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                className
            )}
            onClick={() => onValueChange(children as string)}
        >
            {children}
        </div>
    )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
