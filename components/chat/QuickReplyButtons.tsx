'use client'

interface QuickReplyOption {
  text: string
  nextStep?: string
  action?: string
}

interface QuickReplyButtonsProps {
  options: QuickReplyOption[]
  onSelect: (option: QuickReplyOption) => void
}

export default function QuickReplyButtons({ options, onSelect }: QuickReplyButtonsProps) {
  if (!options || options.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="quick-reply-btn"
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}
