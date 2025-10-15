import * as Popover from "@radix-ui/react-popover";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// função para converter HEX → HSL
function hexToHsl(hex) {

  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;
  l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function ColorPicker() {
  const [color, setColor] = useState("#8b5cf6"); // cor inicial (violet-500)

  // paleta de cores pré-definida
  const colorOptions = [
    "#8b5cf6", // violet
    "#6366f1", // indigo
    "#3b82f6", // blue
    "#10b981", // emerald
    "#f59e0b", // amber
    "#ef4444", // red
    "#ec4899", // pink
    "#14b8a6", // teal
  ];

  // carrega cor salva no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme-primary");
    if (saved) {
      setColor(saved);
      const hsl = hexToHsl(saved);
      document.documentElement.style.setProperty("--primary", `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    }
  }, []);

  // aplica nova cor
  const applyColor = (hex) => {
    setColor(hex);
    localStorage.setItem("theme-primary", hex);
    const hsl = hexToHsl(hex);
    document.documentElement.style.setProperty("--primary", `${hsl.h} ${hsl.s}% ${hsl.l}%`);
  };

  return (

    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant=""
          title="Change Theme color" 
          className={cn(
            "fixed max-sm:hidden z-[9999] top-14 right-3 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden border"
          )}
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </Button>
      </Popover.Trigger>

      <Popover.Content
        sideOffset={8}
        className="rounded-md border bg-card p-4 z-[10000]"
      >
        <Popover.PopoverArrow className="" />
        {/* Paleta de cores */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {colorOptions.map((c) => (
            <button
              key={c}
              onClick={() => applyColor(c)}
              className={cn(
                "w-8 h-8 rounded-full z-[9999] border transition-transform hover:scale-110",
                c === color && "ring-2 ring-offset-2 ring-primary"
              )}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Input de cor manual
        <div className="flex flex-col items-center space-y-3">
          <input
            type="color"
            value={color}
            onChange={(e) => applyColor(e.target.value)}
            className="w-20 h-20 rounded-full z-[9999] border cursor-pointer appearance-none p-0 color-input"
            style={{ backgroundColor: color, WebkitAppearance: 'none', appearance: 'none' }}
            aria-label="Select the color"
          />
          <span className="text-sm text-muted-foreground">
            {color.toUpperCase()}
          </span>
        </div> */}
      </Popover.Content>
    </Popover.Root>
  );
}
