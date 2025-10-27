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
    <div className="flex flex-wrap gap-2 justify-start">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="px-4 py-2 bg-white border-2 border-primary-300 text-primary-700 rounded-full hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all font-medium text-sm shadow-sm"
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}
