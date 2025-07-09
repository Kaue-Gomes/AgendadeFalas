import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./button";

export function Theme() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="p-4">
      <Button
        variant="ghost"
        onClick={() => setIsDark(!isDark)}
        className="flex items-center gap-2"
      >
        {isDark ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
