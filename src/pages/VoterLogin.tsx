
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Vote, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const VoterLogin = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (studentId && password) {
        toast({
          title: "Login Successful",
          description: "Welcome! You can now cast your vote.",
        });
        navigate("/voting");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid student credentials.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <Vote className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">CampusVote</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <User className="h-6 w-6 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Student Voter Portal</h1>
          </div>
          <p className="text-emerald-100">Your secure gateway to campus democracy</p>
        </div>

        {/* Login Form */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-center text-white">Student Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-white">Student ID</Label>
                <Input
                  id="studentId"
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Enter your student ID"
                  className="bg-white/10 border-white/30 text-white placeholder:text-emerald-200"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-white/10 border-white/30 text-white placeholder:text-emerald-200 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-200 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Enter Voting Booth"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/admin-login" className="text-blue-400 hover:text-blue-300 text-sm">
                Administrator? Access admin panel
              </Link>
            </div>

            <div className="mt-4 text-center">
              <Link to="/" className="text-emerald-200 hover:text-white text-sm">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-blue-900/20 border-blue-400/30">
          <CardContent className="p-4">
            <p className="text-blue-300 text-sm text-center mb-2">Demo Credentials:</p>
            <p className="text-blue-200 text-xs text-center">Student ID: 2024001</p>
            <p className="text-blue-200 text-xs text-center">Password: vote123</p>
          </CardContent>
        </Card>

        {/* Voting Information */}
        <Card className="mt-4 bg-white/5 border-white/20">
          <CardContent className="p-4">
            <h3 className="text-white font-semibold mb-2">Active Elections:</h3>
            <ul className="text-emerald-200 text-sm space-y-1">
              <li>• Student Council President</li>
              <li>• Campus Sustainability Initiative</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VoterLogin;
