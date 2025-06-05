
import { Link } from "react-router-dom";
import { Vote, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <Vote className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">CampusVote</span>
          </Link>
        </div>

        {/* 404 Content */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
          <CardContent className="p-8 text-center">
            <div className="text-8xl font-bold text-emerald-400 mb-4">404</div>
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-blue-100 mb-8">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back to the voting system.
            </p>
            
            <div className="space-y-4">
              <Link to="/">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Home className="h-4 w-4 mr-2" />
                  Go to Home
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <Card className="mt-6 bg-white/5 border-white/20">
          <CardContent className="p-4">
            <h3 className="text-white font-semibold mb-3 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/voter-login">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Voter Login
                </Button>
              </Link>
              <Link to="/admin-login">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Admin Login
                </Button>
              </Link>
              <Link to="/results">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Results
                </Button>
              </Link>
              <Link to="/voting">
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
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
