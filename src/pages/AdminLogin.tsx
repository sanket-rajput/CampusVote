
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Vote, Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
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
      if (email && password) {
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard!",
        });
        navigate("/admin-dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-emerald-500/20 p-2 rounded-full">
              <Shield className="h-6 w-6 text-emerald-400" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">Admin Access</h1>
          </div>
          <p className="text-blue-100 text-sm sm:text-base">Secure administrative portal for election management</p>
        </div>

        {/* Login Form */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-white text-lg sm:text-xl">Administrator Login</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@university.edu"
                  className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-emerald-400 transition-colors h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-emerald-400" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 pr-10 focus:border-emerald-400 transition-colors h-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white h-11 hover-scale shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Access Dashboard
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/voter-login" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
                Are you a voter? Click here to vote
              </Link>
            </div>

            <div className="mt-4 text-center">
              <Link to="/" className="text-blue-200 hover:text-white text-sm transition-colors">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-4 sm:mt-6 bg-emerald-900/20 border-emerald-400/30 backdrop-blur-sm">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-4 w-4 text-emerald-300 mr-1" />
              <p className="text-emerald-300 text-sm font-medium">Demo Credentials</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-emerald-200 text-xs">Email: admin@university.edu</p>
              <p className="text-emerald-200 text-xs">Password: admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
