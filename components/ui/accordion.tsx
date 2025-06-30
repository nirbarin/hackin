"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const AccordionTitleContext = React.createContext<((label: React.ReactNode) => void) | null>(null)

const AccordionStateContext = React.createContext<{
  onlyOne: boolean
  openItem: string | null
  setOpenItem: (id: string | null) => void
  openSet: Set<string>
  toggleItem: (id: string) => void
} | null>(null)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  onlyOne?: boolean
}

function Accordion({ children, className, onlyOne = false }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)
  const [openSet, setOpenSet] = React.useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenSet(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <AccordionStateContext.Provider value={{
      onlyOne,
      openItem,
      setOpenItem,
      openSet,
      toggleItem,
    }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionStateContext.Provider>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  defaultOpen?: boolean
  id: string
}

function AccordionItem({
  children,
  className,
  open,
  defaultOpen,
  id,
  ...props
}: AccordionItemProps) {
  const [label, setLabel] = React.useState<React.ReactNode>(null)
  const accordionState = React.useContext(AccordionStateContext)

  const isControlled = open !== undefined

  let isOpen = false

  if (isControlled) {
    isOpen = open
  } else if (accordionState?.onlyOne) {
    isOpen = accordionState.openItem === id
  } else {
    isOpen = accordionState?.openSet.has(id) || defaultOpen || false
  }

  const handleToggle = () => {
    if (!accordionState) return

    if (accordionState.onlyOne) {
      if (accordionState.openItem === id) {
        accordionState.setOpenItem(null)
      } else {
        accordionState.setOpenItem(null)
        setTimeout(() => {
          accordionState.setOpenItem(id)
        }, 100)
      }
    } else {
      accordionState.toggleItem(id)
    }
  }

  return (
    <AccordionTitleContext.Provider value={setLabel}>
      <div
        className={cn(
          "collapse collapse-arrow border border-base-300 bg-base-100 rounded-box transition-all duration-300",
          className
        )}
        {...props}
      >
        <input
          type="checkbox"
          className="peer"
          checked={!!isOpen}
          onChange={handleToggle}
          readOnly
        />
        <div className="collapse-title text-base font-medium flex items-center gap-2">
          {label}
        </div>
        <div
          className={cn(
            "collapse-content text-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            !isOpen && "opacity-0 scale-y-95 h-0 overflow-hidden",
            isOpen && "opacity-100 scale-100"
          )}
        >
          {children}
        </div>
      </div>
    </AccordionTitleContext.Provider>
  )
}

function AccordionTitle({ children }: { children: React.ReactNode }) {
  const setLabel = React.useContext(AccordionTitleContext)

  React.useEffect(() => {
    if (setLabel) setLabel(children)
  }, [children, setLabel])

  return null
}

export { Accordion, AccordionItem, AccordionTitle }