import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const renderTime = (label, time) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-base-content">{time}</span>
      <span className="text-sm text-base-content">{label}</span>
    </div>
  );

  const timeLeft = calculateTimeLeft();
  const totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-semibold text-base-content">Marathon Countdown</h1>
      <CountdownCircleTimer
        isPlaying
        duration={totalSeconds}
        colors={["#22C55E", "#FACC15", "#F87171", "#EF4444"]}
        colorsTime={[totalSeconds, totalSeconds / 2, totalSeconds / 4, 0]}
        onComplete={() => ({ shouldRepeat: false })}
        size={220}
        strokeWidth={6}
      >
        {({ elapsedTime }) => {
          const remainingTime = totalSeconds - elapsedTime;
          const remainingDays = Math.floor(remainingTime / 86400);
          const remainingHours = Math.floor((remainingTime % 86400) / 3600);
          const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
          const remainingSeconds = Math.floor(remainingTime % 60);

          return (
            <div className="grid grid-cols-2 gap-4">
              {renderTime("Days", remainingDays)}
              {renderTime("Hours", remainingHours)}
              {renderTime("Minutes", remainingMinutes)}
              {renderTime("Seconds", remainingSeconds)}
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default MarathonCountdown;
