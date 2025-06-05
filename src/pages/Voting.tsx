
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Vote, CheckCircle, LogOut, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Voting = () => {
  const [selectedPresident, setSelectedPresident] = useState("");
  const [selectedSustainability, setSelectedSustainability] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const presidentialCandidates = [
    {
      id: "alice",
      name: "Alice Johnson",
      party: "Progressive Student Alliance",
      platform: "Affordable housing, mental health resources, sustainable campus"
    },
    {
      id: "bob",
      name: "Bob Smith",
      party: "Campus Unity Coalition",
      platform: "Improved dining options, better Wi-Fi, expanded study spaces"
    },
    {
      id: "carol",
      name: "Carol Davis",
      party: "Innovation Forward",
      platform: "Tech upgrades, career services, alumni networking programs"
    }
  ];

  const handleSubmitVotes = async () => {
    if (!selectedPresident || !selectedSustainability) {
      toast({
        title: "Incomplete Ballot",
        description: "Please make selections for all elections before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setHasVoted(true);
      setIsSubmitting(false);
      toast({
        title: "Vote Successfully Recorded!",
        description: "Your votes have been securely recorded on the blockchain.",
      });
    }, 2000);
  };

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-md w-full text-center animate-scale-in">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Vote Recorded!</h2>
            <p className="text-emerald-100 mb-6">
              Your votes have been successfully recorded on the blockchain. 
              Thank you for participating in campus democracy!
            </p>
            <div className="space-y-3">
              <Link to="/results">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Live Results
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">Digital Voting Booth</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-emerald-200">Student ID: 2024001</span>
              <Link to="/">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <LogOut className="h-4 w-4 mr-2" />
                  Exit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Security Notice */}
        <Card className="bg-blue-900/30 border-blue-400/30 mb-8">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-blue-400" />
              <p className="text-blue-200 text-sm">
                Your votes are encrypted and recorded on a secure blockchain. 
                All ballots are anonymous and cannot be traced back to you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Presidential Election */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white text-xl">Student Council President</CardTitle>
            <p className="text-emerald-200">Choose one candidate to represent the student body</p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedPresident} onValueChange={setSelectedPresident}>
              <div className="space-y-4">
                {presidentialCandidates.map((candidate) => (
                  <Card key={candidate.id} className="bg-white/5 border-white/20 hover:bg-white/10 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value={candidate.id} id={candidate.id} className="mt-1" />
                        <Label htmlFor={candidate.id} className="flex-1 cursor-pointer">
                          <div>
                            <h3 className="text-white font-semibold">{candidate.name}</h3>
                            <p className="text-blue-300 text-sm">{candidate.party}</p>
                            <p className="text-emerald-200 text-sm mt-1">{candidate.platform}</p>
                          </div>
                        </Label>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Sustainability Initiative */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white text-xl">Campus Sustainability Initiative</CardTitle>
            <p className="text-emerald-200">Support new green policies for our campus</p>
          </CardHeader>
          <CardContent>
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <p className="text-white text-sm leading-relaxed">
                This initiative would implement solar panels on all campus buildings, 
                establish a campus-wide recycling program, create bike-sharing stations, 
                and transition to 100% renewable energy by 2026.
              </p>
            </div>
            
            <RadioGroup value={selectedSustainability} onValueChange={setSelectedSustainability}>
              <div className="space-y-3">
                <Card className="bg-white/5 border-white/20 hover:bg-white/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-white cursor-pointer flex-1">
                        <span className="font-semibold text-emerald-400">Yes</span> - Support the sustainability initiative
                      </Label>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 border-white/20 hover:bg-white/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-white cursor-pointer flex-1">
                        <span className="font-semibold text-red-400">No</span> - Do not support the sustainability initiative
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            onClick={handleSubmitVotes}
            disabled={isSubmitting || !selectedPresident || !selectedSustainability}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            {isSubmitting ? "Recording Vote on Blockchain..." : "Submit Ballot"}
          </Button>
          
          {(!selectedPresident || !selectedSustainability) && (
            <p className="text-emerald-300 text-sm mt-2">
              Please make selections for all elections
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Voting;
