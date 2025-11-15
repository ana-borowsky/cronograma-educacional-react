export const GridSlot = ({ slotKey, dayIndex, timeIndex, isSelected, activeTab, handleSlotClick }) => {
  const isStudyMode = activeTab === 'estudo'

  let bgColor = 'bg-neutral-100'
  let cursor = isStudyMode ? 'cursor-pointer' : ''

  if (isStudyMode && isSelected) {
    bgColor = 'bg-green-500/80 hover:bg-green-600'
  } else if (isStudyMode) {
    bgColor = 'bg-neutral-100 hover:bg-neutral-200/50'
  }

  return (
    <div
      key={slotKey}
      className={`
        time-slot border-t border-l border-neutral-400 text-xs transition-colors duration-200 
        ${bgColor} 
        ${cursor}
      `}
      style={{ gridColumn: dayIndex + 2, gridRow: timeIndex + 2 }}
      onClick={isStudyMode ? () => handleSlotClick(dayIndex, timeIndex) : undefined}
    ></div>
  )
}