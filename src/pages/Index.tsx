
import { Link } from "react-router-dom";
import { Vote, Shield, Users, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-emerald-400" />
              <h1 className="text-2xl font-bold text-white">CampusVote</h1>
            </div>
            <div className="flex space-x-4">
              <Link to="/admin-login">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Admin Login
                </Button>
              </Link>
              <Link to="/voter-login">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Vote Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            Secure Campus Voting
            <span className="block text-emerald-400">Powered by Blockchain</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the future of democratic participation with our transparent, 
            tamper-proof voting system designed specifically for campus elections.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/voter-login">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg hover-scale">
                Cast Your Vote
              </Button>
            </Link>
            <Link to="/results">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg">
                View Results
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-blue-100">Blockchain technology ensures vote integrity and prevents tampering</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Accessible</h3>
              <p className="text-blue-100">Easy-to-use interface designed for all students and faculty</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Transparent</h3>
              <p className="text-blue-100">Real-time results and public audit trail for complete transparency</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Verified</h3>
              <p className="text-blue-100">Every vote is cryptographically verified and permanently recorded</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Elections */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Active Elections</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Student Council President</h4>
                <p className="text-blue-100 mb-4">Choose your next student body president</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-semibold">Ends in 2 days</span>
                  <Link to="/voter-login">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Vote Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Campus Sustainability Initiative</h4>
                <p className="text-blue-100 mb-4">Vote on proposed green campus policies</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-semibold">Ends in 5 days</span>
                  <Link to="/voter-login">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
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
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-100">
            © 2024 CampusVote. Securing democracy through blockchain technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
