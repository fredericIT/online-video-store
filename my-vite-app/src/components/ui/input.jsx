import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  (
    {
      className,
      type = "text",
      placeholder,
      icon: Icon,
      rightAction,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <div className="relative">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            className={cn(
              "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400",
              "bg-white transition-all duration-200",
              "focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none",
              "hover:border-gray-300",
              Icon && "pl-11",
              rightAction && "pr-11",
              error && "border-red-500 focus:border-red-500 focus:ring-red-200",
              className
            )}
            {...props}
          />
          {rightAction && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {rightAction}
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-500 mt-1.5 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
