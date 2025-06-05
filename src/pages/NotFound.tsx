
import { Link } from "react-router-dom";
import { Vote, Home, ArrowLeft, Sparkles, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="relative">
              <Vote className="h-8 w-8 text-emerald-400 group-hover:scale-110 transition-transform" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-ping" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">CampusVote</span>
          </Link>
        </div>

        {/* 404 Content */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in shadow-2xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500/20 p-4 rounded-full">
                <AlertTriangle className="h-12 w-12 text-red-400 animate-pulse" />
              </div>
            </div>
            <div className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4 animate-pulse">404</div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back to the voting system.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover-scale shadow-lg h-11">
                  <Home className="h-4 w-4 mr-2" />
                  Go to Home
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm h-11"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <Card className="mt-4 sm:mt-6 bg-white/5 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4">
            <h3 className="text-white font-semibold mb-3 text-center text-sm sm:text-base">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/voter-login">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm">
                  Voter Login
                </Button>
              </Link>
              <Link to="/admin-login">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm">
                  Admin Login
                </Button>
              </Link>
              <Link to="/results">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm">
                  View Results
                </Button>
              </Link>
              <Link to="/voting">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm">
                  Vote Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
