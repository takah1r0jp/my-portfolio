import * as React from "react"
import { cn } from "@/lib/utils"

interface IconWithButtonProps extends React.ComponentProps<"a"> {
  icon: React.ReactNode
  label: string
}

const IconWithButton = React.forwardRef<HTMLAnchorElement, IconWithButtonProps>(
  ({ className, icon, label, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          // 基本スタイル
          "inline-flex items-center justify-center",
          // サイズとパディング
          "h-8 py-2",
          // 枠線とボーダー
          "border border-black rounded-md",
          // 背景とテキスト
          "bg-white text-gray-900",
          // ホバー効果
          "hover:bg-gray-100",
          // トランジション
          "transition-colors duration-200",
          // フォーカス
          "focus:outline-none",
          // その他
          "text-sm font-medium whitespace-nowrap",
          className
        )}
        style={{ 
          paddingLeft: '10px', 
          paddingRight: '10px',
        }}
        {...props}
      >
        <span>
          {icon}
        </span>
        <span className="ml-2">
          {label}
        </span>
      </a>
    )
  }
)

IconWithButton.displayName = "IconWithButton"

export { IconWithButton }