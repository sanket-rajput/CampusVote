
import { useState } from "react";
import { Link } from "react-router-dom";
import { Vote, Plus, Users, BarChart3, Settings, LogOut, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [elections] = useState([
    {
      id: 1,
      title: "Student Council President",
      status: "Active",
      totalVotes: 234,
      endDate: "2024-06-10",
      candidates: ["Alice Johnson", "Bob Smith", "Carol Davis"]
    },
    {
      id: 2,
      title: "Campus Sustainability Initiative",
      status: "Active",
      totalVotes: 156,
      endDate: "2024-06-13",
      candidates: ["Yes", "No"]
    },
    {
      id: 3,
      title: "Student Fee Allocation",
      status: "Upcoming",
      totalVotes: 0,
      endDate: "2024-06-20",
      candidates: ["Option A", "Option B", "Option C"]
    }
  ]);

  const totalStudents = 1250;
  const totalVoters = 390;
  const participationRate = (totalVoters / totalStudents) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-emerald-400" />
              <h1 className="text-2xl font-bold text-white">CampusVote Admin</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-white">Admin Panel</span>
              <Link to="/">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-emerald-400">Total Elections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{elections.length}</div>
              <p className="text-blue-200 text-sm">2 Active, 1 Upcoming</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-emerald-400">Total Votes Cast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{totalVoters}</div>
              <p className="text-blue-200 text-sm">Across all elections</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-emerald-400">Participation Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{participationRate.toFixed(1)}%</div>
              <Progress value={participationRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-emerald-400">Registered Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{totalStudents}</div>
              <p className="text-blue-200 text-sm">Eligible voters</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create New Election
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Users className="h-4 w-4 mr-2" />
            Manage Voters
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
          <Link to="/results">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Public Results
            </Button>
          </Link>
        </div>

        {/* Elections Management */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Election Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {elections.map((election) => (
                <Card key={election.id} className="bg-white/5 border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{election.title}</h3>
                        <p className="text-blue-200">Ends: {election.endDate}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={election.status === "Active" ? "default" : "secondary"}
                          className={election.status === "Active" ? "bg-emerald-600" : "bg-blue-600"}
                        >
                          {election.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-blue-200 text-sm">Total Votes</p>
                        <p className="text-2xl font-bold text-white">{election.totalVotes}</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Candidates</p>
                        <p className="text-white">{election.candidates.length} options</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Turnout</p>
                        <p className="text-white">{((election.totalVotes / totalStudents) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                    
                    {election.status === "Active" && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-blue-200 mb-2">
                          <span>Vote Progress</span>
                          <span>{election.totalVotes} votes</span>
                        </div>
                        <Progress value={(election.totalVotes / totalStudents) * 100} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
