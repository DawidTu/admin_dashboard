import React from 'react';

const Button = ({ customColor, color, backgroundColor, size, icon, text, group, type, onClick, onSubmit }) => {
  const getButtonClasses = () => {
    let classes = 'inline-flex items-center justify-center hover:border-gray-300 rounded-[4px] border shadow-sm outline-none';
    
    // Nastavenie farby písma
    if (customColor) {
      classes += ` text-${customColor}`;
    } else if (color) {
      classes += ` text-${color}-500`;
    }

    // Nastavenie farby pozadia
    if (backgroundColor) {
      classes += ` bg-${backgroundColor} hover:bg-${backgroundColor}-600`;
    }

    // Nastavenie veľkosti
    if (size === 'xs'){
      classes += ' px-2.5 py-1 max-h-7 text-xs';
    } else if (size === 'small') {
      classes += ' px-2.5 py-1.5 max-h-9 text-sm';
    } else if (size === 'medium') {
      classes += ' px-3.5 py-1.5 max-h-10 text-base';
    } else if (size === 'large') {
      classes += ' px-4 py-2 max-h-12 text-lg';
    } else {
      classes += ' w-full py-2 text-base';
    }

    return classes;
  };

  return (
    <button onClick={onClick} onSubmit={onSubmit} className={getButtonClasses()} disabled={type === 'disabled'} style={{ cursor: type === 'disabled' ? 'not-allowed' : 'pointer' }}>
      {/* Ikonka */}
      {icon && <span className={text ? "mr-2" : ""}>{icon}</span>}
      
      {/* Text */}
      {text && <span>{text}</span>}
      
      {/* Ikona a text */}
      {icon && text && <span className="ml-2"></span>}

      {/* Group Button */}
      {group && (
        <div className="flex border-none flex-nowrap">
          <button text={text} />
          <button text={text} />
          <button text={text} />
        </div>
      )}
    </button>
  );
};

export default Button;
