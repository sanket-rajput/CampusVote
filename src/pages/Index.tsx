
import { Link } from "react-router-dom";
import { Vote, Shield, Users, BarChart3, CheckCircle, Sparkles, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Vote className="h-8 w-8 text-emerald-400 animate-pulse" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-ping" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">CampusVote</h1>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link to="/admin-login">
                <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                  Admin Login
                </Button>
              </Link>
              <Link to="/voter-login">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white hover-scale w-full sm:w-auto">
                  Vote Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center animate-pulse">
                <Vote className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Trophy className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Secure Campus Voting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 animate-pulse">
              Powered by Blockchain
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of democratic participation with our transparent, 
            tamper-proof voting system designed specifically for campus elections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/voter-login">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover-scale w-full sm:w-auto shadow-xl">
                <Vote className="h-5 w-5 mr-2" />
                Cast Your Vote
              </Button>
            </Link>
            <Link to="/results">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto backdrop-blur-sm">
                <BarChart3 className="h-5 w-5 mr-2" />
                View Results
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-all">
                <Shield className="h-8 w-8 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-blue-100 text-sm sm:text-base">Blockchain technology ensures vote integrity and prevents tampering</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-all">
                <Users className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Accessible</h3>
              <p className="text-blue-100 text-sm sm:text-base">Easy-to-use interface designed for all students and faculty</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-all">
                <BarChart3 className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Transparent</h3>
              <p className="text-blue-100 text-sm sm:text-base">Real-time results and public audit trail for complete transparency</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-all">
                <CheckCircle className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Verified</h3>
              <p className="text-blue-100 text-sm sm:text-base">Every vote is cryptographically verified and permanently recorded</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Elections */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-6 w-6 text-emerald-400 mr-2 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Active Elections</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-emerald-400/30 hover-scale group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-emerald-800 transition-colors">Student Council President</h4>
                    <p className="text-blue-900 mb-4 text-sm sm:text-base">Choose your next student body president</p>
                  </div>
                  <Trophy className="h-6 w-6 text-yellow-400 animate-pulse" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-emerald-400 mr-1" />
                    <span className="text-red-400 font-semibold text-sm">Ends in 2 days</span>
                  </div>
                  <Link to="/voter-login">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 hover-scale w-full sm:w-auto">
                      Vote Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/30 hover-scale group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-emerald-900 transition-colors">Campus Sustainability Initiative</h4>
                    <p className="text-blue-900 mb-4 text-sm sm:text-base">Vote on proposed green campus policies</p>
                  </div>
                  <Shield className="h-6 w-6 text-green-400 animate-pulse" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-emerald-400 mr-1" />
                    <span className="text-red-400 font-semibold text-sm">Ends in 5 days</span>
                  </div>
                  <Link to="/voter-login">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 hover-scale w-full sm:w-auto">
                      Vote Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-white/5 backdrop-blur-md border-t border-white/20 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Vote className="h-5 w-5 text-emerald-400" />
              <span className="text-blue-100 text-sm sm:text-base">© 2024 CampusVote</span>
            </div>
            <span className="text-blue-300 text-sm sm:text-base">Securing democracy through blockchain technology.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
