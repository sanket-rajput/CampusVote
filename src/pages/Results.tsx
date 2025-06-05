
import { Link } from "react-router-dom";
import { Vote, TrendingUp, Users, Calendar, Shield, Clock, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Results = () => {
  const presidentialResults = [
    { name: "Alice Johnson", party: "Progressive Student Alliance", votes: 145, percentage: 62.0, color: "emerald" },
    { name: "Bob Smith", party: "Campus Unity Coalition", votes: 67, percentage: 28.6, color: "blue" },
    { name: "Carol Davis", party: "Innovation Forward", votes: 22, percentage: 9.4, color: "purple" }
  ];

  const sustainabilityResults = [
    { option: "Yes", votes: 132, percentage: 84.6, color: "emerald" },
    { option: "No", votes: 24, percentage: 15.4, color: "red" }
  ];

  const totalPresidentialVotes = presidentialResults.reduce((sum, candidate) => sum + candidate.votes, 0);
  const totalSustainabilityVotes = sustainabilityResults.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: "4s"}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-400 shadow-lg group-hover:shadow-emerald-400/25 transition-all duration-300">
                <Vote className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Live Results</h1>
            </Link>
            <div className="flex space-x-3">
              <Link to="/voter-login">
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-emerald-400/25 transition-all duration-300">
                  Cast Vote
                </Button>
              </Link>
              <Link to="/admin-login">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Hero Stats */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text mb-6 animate-fade-in">
            Election Insights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{totalPresidentialVotes + totalSustainabilityVotes}</div>
              <div className="text-emerald-100 text-sm font-medium">Total Votes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{((totalPresidentialVotes / 1250) * 100).toFixed(1)}%</div>
              <div className="text-blue-100 text-sm font-medium">Turnout</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-purple-100 text-sm font-medium">Active Polls</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-yellow-100 text-sm font-medium">Verified</div>
            </div>
          </div>
        </div>

        {/* Presidential Race Visualization */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 mb-8 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-500 animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-emerald-400" />
                <CardTitle className="text-white text-xl">Student Council President</CardTitle>
              </div>
              <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0">
                <CheckCircle className="h-4 w-4 mr-1" />
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {presidentialResults.map((candidate, index) => (
              <div key={candidate.name} className="group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                      candidate.color === 'emerald' ? 'from-emerald-400 to-emerald-500' :
                      candidate.color === 'blue' ? 'from-blue-400 to-blue-500' :
                      'from-purple-400 to-purple-500'
                    } flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{candidate.name}</h3>
                      <p className="text-gray-200 text-sm font-medium">{candidate.party}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-2xl">{candidate.percentage}%</p>
                    <p className="text-emerald-300 text-sm font-medium">{candidate.votes} votes</p>
                  </div>
                </div>
                <div className="relative">
                  <Progress 
                    value={candidate.percentage} 
                    className="h-4 bg-white/10 rounded-full overflow-hidden"
                  />
                  <div 
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${
                      candidate.color === 'emerald' ? 'from-emerald-400 to-emerald-500' :
                      candidate.color === 'blue' ? 'from-blue-400 to-blue-500' :
                      'from-purple-400 to-purple-500'
                    } transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${candidate.percentage}%` }}
                  />
                </div>
                {index === 0 && (
                  <Badge className="mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-0 font-medium">
                    🏆 Leading
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sustainability Initiative */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 mb-8 hover:shadow-2xl hover:shadow-blue-400/10 transition-all duration-500 animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500">
                  <Vote className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Campus Sustainability Initiative</CardTitle>
              </div>
              <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {sustainabilityResults.map((option, index) => (
                <div key={option.option} className="relative group">
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${
                    option.color === 'emerald' ? 'from-emerald-500/20 to-green-500/20 border-emerald-400/30' : 
                    'from-red-500/20 to-pink-500/20 border-red-400/30'
                  } border backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className={`text-6xl font-bold mb-2 ${
                        option.color === 'emerald' ? 'text-emerald-300' : 'text-red-300'
                      }`}>
                        {option.percentage}%
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        option.color === 'emerald' ? 'text-emerald-100' : 'text-red-100'
                      }`}>
                        {option.option}
                      </h3>
                      <p className="text-gray-100 text-sm mb-4 font-medium">
                        {option.option === 'Yes' ? '✓ Support Initiative' : '✗ Against Initiative'}
                      </p>
                      <div className="text-white font-medium">{option.votes} votes</div>
                    </div>
                  </div>
                  {index === 0 && option.percentage > 50 && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0">
                      Passing ✓
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blockchain Verification - Abstract Design */}
        <Card className="bg-gradient-to-r from-emerald-900/20 via-blue-900/20 to-purple-900/20 border border-emerald-400/20 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-400 to-blue-400 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-emerald-200 font-bold text-xl">Blockchain Security</h3>
              </div>
              <Badge className="bg-green-500 text-white animate-pulse">Verified</Badge>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-emerald-100 text-sm font-medium">Block Hash</p>
                <div className="bg-black/30 rounded-lg p-3 border border-emerald-400/20">
                  <p className="text-emerald-300 font-mono text-xs break-all">0x7d865e...d97730</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-blue-100 text-sm font-medium">Network Status</p>
                <div className="bg-black/30 rounded-lg p-3 border border-blue-400/20">
                  <p className="text-blue-300 font-mono text-xs">Ethereum Mainnet</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-purple-100 text-sm font-medium">Last Update</p>
                <div className="bg-black/30 rounded-lg p-3 border border-purple-400/20">
                  <p className="text-purple-300 font-mono text-xs">2 mins ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Results;
