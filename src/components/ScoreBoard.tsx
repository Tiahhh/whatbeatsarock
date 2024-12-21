import { Card } from "@/components/ui/card";

type ScoreBoardProps = {
  playerScore: number;
  computerScore: number;
};

export function ScoreBoard({ playerScore, computerScore }: ScoreBoardProps) {
  return (
    <Card className="p-6 mb-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Score</h2>
      <div className="flex justify-center gap-8">
        <div>
          <p className="text-muted-foreground">You</p>
          <p className="text-4xl font-bold text-primary">{playerScore}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Computer</p>
          <p className="text-4xl font-bold text-primary">{computerScore}</p>
        </div>
      </div>
    </Card>
  );
}