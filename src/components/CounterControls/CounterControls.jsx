import { useEffect } from "react";
import { MinusIcon, PlusIcon, ResetIcon } from "../Icons/Icons";

export function CounterControls({ setCount }) {
  const handleCount = (type) => {
    if (type === "reset") {
      setCount(0);
    } else if (type === "decrement") {
      setCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return 0;
        }
      });
    } else if (type === "increment") {
      setCount((prev) => {
        return prev + 1;
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        handleCount("decrement");
      } else if (event.key === "ArrowUp") {
        handleCount("increment");
      } else if (event.key === " ") {
        handleCount("reset");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="counter-controls">
        <button onClick={() => handleCount("reset")}>
          <ResetIcon />
        </button>
        <button onClick={() => handleCount("decrement")}>
          <MinusIcon />
        </button>
        <button onClick={() => handleCount("increment")}>
          <PlusIcon />
        </button>
      </div>
    </>
  );
}
