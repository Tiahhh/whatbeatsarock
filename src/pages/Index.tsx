import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GameChoice } from "@/components/GameChoice";
import { ScoreBoard } from "@/components/ScoreBoard";
import { useToast } from "@/components/ui/use-toast";

const CHOICES = ["Rock", "Paper", "Scissors"];

const Index = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const { toast } = useToast();

  const determineWinner = (player: string, computer: string) => {
    if (player === computer) return "tie";
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "player";
    }
    return "computer";
  };

  const handleChoice = (choice: string) => {
    const computerSelection = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerSelection);

    const winner = determineWinner(choice, computerSelection);
    
    if (winner === "player") {
      setPlayerScore(prev => prev + 1);
      toast({
        title: "You won! 🎉",
        description: `${choice} beats ${computerSelection}`,
      });
    } else if (winner === "computer") {
      setComputerScore(prev => prev + 1);
      toast({
        title: "Computer won! 🤖",
        description: `${computerSelection} beats ${choice}`,
      });
    } else {
      toast({
        title: "It's a tie! 🤝",
        description: `Both chose ${choice}`,
      });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen p-4 md:p-8">
        <ThemeToggle />
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Rock Paper Scissors
          </h1>
          
          <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
          
          <div className="mb-8">
            <h2 className="text-xl text-center mb-4">Computer chose: {computerChoice || "?"}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CHOICES.map((choice) => (
              <GameChoice
                key={choice}
                choice={choice}
                selected={playerChoice === choice}
                onClick={() => handleChoice(choice)}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;