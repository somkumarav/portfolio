"use client";
import { FlipDotGrid, TextRenderer, FONT_5x7 } from "flipdots";
import { useEffect, useState } from "react";

const Clock = () => {
  const [hourMatrix, setHourMatrix] = useState<number[][]>([]);
  const [minuteMatrix, setMinuteMatrix] = useState<number[][]>([]);
  const renderer = new TextRenderer({ font: FONT_5x7, letterSpacing: 1 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now
        .toLocaleTimeString("en-GB", { hour12: false })
        .slice(0, 5);

      const hoursMatrix = renderer.render(timeString.split(":")[0]);
      const minutesMatrix = renderer.render(timeString.split(":")[1]);
      setHourMatrix(hoursMatrix);
      setMinuteMatrix(minutesMatrix);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col'>
      <FlipDotGrid
        matrix={hourMatrix}
        padding={{ top: 1, right: 2, bottom: 1, left: 2 }}
        size={3}
        gap={1}
        secondIndicator
        activeColor='#eeeeee'
        inactiveColor='#222222'
      />
      <FlipDotGrid
        matrix={minuteMatrix}
        padding={{ top: 1, right: 2, bottom: 1, left: 2 }}
        size={3}
        gap={1}
        activeColor='#222222'
        inactiveColor='#eeeeee'
      />
    </div>
  );
};

export default Clock;
