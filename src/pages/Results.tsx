
import { Link } from "react-router-dom";
import { Vote, TrendingUp, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const presidentialResults = [
    { name: "Alice Johnson", party: "Progressive Student Alliance", votes: 145, percentage: 62.0 },
    { name: "Bob Smith", party: "Campus Unity Coalition", votes: 67, percentage: 28.6 },
    { name: "Carol Davis", party: "Innovation Forward", votes: 22, percentage: 9.4 }
  ];

  const sustainabilityResults = [
    { option: "Yes", votes: 132, percentage: 84.6, color: "emerald" },
    { option: "No", votes: 24, percentage: 15.4, color: "red" }
  ];

  const totalPresidentialVotes = presidentialResults.reduce((sum, candidate) => sum + candidate.votes, 0);
  const totalSustainabilityVotes = sustainabilityResults.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-emerald-400" />
              <h1 className="text-2xl font-bold text-white">CampusVote Results</h1>
            </Link>
            <div className="flex space-x-4">
              <Link to="/voter-login">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Cast Your Vote
                </Button>
              </Link>
              <Link to="/admin-login">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Admin Panel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Live Results Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Live Election Results
          </h2>
          <div className="flex items-center justify-center space-x-6 text-emerald-200">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Updated in real-time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>{totalPresidentialVotes + totalSustainabilityVotes} total votes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Voting ends June 13, 2024</span>
            </div>
          </div>
        </div>

        {/* Election Status */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Student Council President</CardTitle>
                <Badge className="bg-emerald-600">Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-emerald-200">
                <p>Total Votes: {totalPresidentialVotes}</p>
                <p>Turnout: {((totalPresidentialVotes / 1250) * 100).toFixed(1)}%</p>
                <p>Ends: June 10, 2024</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Sustainability Initiative</CardTitle>
                <Badge className="bg-emerald-600">Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-emerald-200">
                <p>Total Votes: {totalSustainabilityVotes}</p>
                <p>Turnout: {((totalSustainabilityVotes / 1250) * 100).toFixed(1)}%</p>
                <p>Ends: June 13, 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Presidential Results */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white text-xl">Student Council President Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {presidentialResults.map((candidate, index) => (
                <div key={candidate.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{candidate.name}</h3>
                      <p className="text-blue-300 text-sm">{candidate.party}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-lg">{candidate.percentage}%</p>
                      <p className="text-emerald-400 text-sm">{candidate.votes} votes</p>
                    </div>
                  </div>
                  <Progress 
                    value={candidate.percentage} 
                    className={`h-3 ${index === 0 ? 'bg-emerald-200' : 'bg-blue-200'}`}
                  />
                  {index === 0 && (
                    <Badge className="bg-emerald-600 text-white">Leading</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Results */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white text-xl">Campus Sustainability Initiative Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {sustainabilityResults.map((option, index) => (
                <div key={option.option} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-semibold text-lg ${option.color === 'emerald' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {option.option}
                      </h3>
                      <p className="text-blue-300 text-sm">
                        {option.option === 'Yes' ? 'Support the initiative' : 'Do not support the initiative'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-lg">{option.percentage}%</p>
                      <p className="text-emerald-400 text-sm">{option.votes} votes</p>
                    </div>
                  </div>
                  <Progress 
                    value={option.percentage} 
                    className={`h-3 ${option.color === 'emerald' ? 'bg-emerald-200' : 'bg-red-200'}`}
                  />
                  {index === 0 && option.percentage > 50 && (
                    <Badge className="bg-emerald-600 text-white">Passing</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blockchain Verification */}
        <Card className="bg-emerald-900/20 border-emerald-400/30">
          <CardContent className="p-6">
            <h3 className="text-emerald-300 font-semibold mb-4 flex items-center">
              <Vote className="h-5 w-5 mr-2" />
              Blockchain Verification
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-emerald-200">Block Hash:</p>
                <p className="text-emerald-400 font-mono break-all">0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730</p>
              </div>
              <div>
                <p className="text-emerald-200">Last Updated:</p>
                <p className="text-emerald-400">2024-06-05 14:23:07 UTC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Results;
