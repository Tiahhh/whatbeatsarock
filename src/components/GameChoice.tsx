import { cn } from "@/lib/utils";

type GameChoiceProps = {
  choice: string;
  selected?: boolean;
  onClick: () => void;
};

export function GameChoice({ choice, selected, onClick }: GameChoiceProps) {
  return (
    <div
      className={cn("game-choice", selected && "choice-selected")}
      onClick={onClick}
    >
      <span className="text-4xl">{getEmoji(choice)}</span>
    </div>
  );
}

function getEmoji(choice: string): string {
  switch (choice.toLowerCase()) {
    case "rock":
      return "🪨";
    case "paper":
      return "📄";
    case "scissors":
      return "✂️";
    default:
      return "❓";
  }
}