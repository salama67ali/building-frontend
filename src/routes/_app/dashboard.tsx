import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Route = createFileRoute('/_app/dashboard')({
  component: AdminDashboard,
});

function AdminDashboard() {
  // Mock data for demonstration
  const stats = {
    totalApplications: 156,
    pendingReviews: 23,
    approvedToday: 8,
    rejectedToday: 2,
  };

  const recentApplications = [
    {
      id: 'APP-001',
      applicant: 'John Smith',
      project: 'Residential Building',
      status: 'pending',
      submittedDate: '2024-01-15',
      location: 'Downtown District',
    },
    {
      id: 'APP-002',
      applicant: 'Sarah Johnson',
      project: 'Commercial Complex',
      status: 'under_review',
      submittedDate: '2024-01-14',
      location: 'Business Park',
    },
    {
      id: 'APP-003',
      applicant: 'Mike Wilson',
      project: 'Office Building',
      status: 'approved',
      submittedDate: '2024-01-13',
      location: 'City Center',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, label: 'Pending' },
      under_review: { variant: 'default' as const, label: 'Under Review' },
      approved: { variant: 'default' as const, label: 'Approved' },
      rejected: { variant: 'destructive' as const, label: 'Rejected' },
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Admin Dashboard</h1>
          <p className='text-gray-600 mt-2'>
            Building Permit Management System - Administrator Panel
          </p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Total Applications</CardTitle>
              <div className='h-4 w-4 text-muted-foreground'>📋</div>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{stats.totalApplications}</div>
              <p className='text-xs text-muted-foreground'>All time submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Pending Reviews</CardTitle>
              <div className='h-4 w-4 text-muted-foreground'>⏳</div>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{stats.pendingReviews}</div>
              <p className='text-xs text-muted-foreground'>Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Approved Today</CardTitle>
              <div className='h-4 w-4 text-muted-foreground'>✅</div>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-green-600'>{stats.approvedToday}</div>
              <p className='text-xs text-muted-foreground'>Today's approvals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Rejected Today</CardTitle>
              <div className='h-4 w-4 text-muted-foreground'>❌</div>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-red-600'>{stats.rejectedToday}</div>
              <p className='text-xs text-muted-foreground'>Today's rejections</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue='applications' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='applications'>Applications</TabsTrigger>
            <TabsTrigger value='users'>User Management</TabsTrigger>
            <TabsTrigger value='reports'>Reports</TabsTrigger>
            <TabsTrigger value='settings'>System Settings</TabsTrigger>
          </TabsList>

          <TabsContent value='applications' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>
                  Latest permit applications submitted to the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recentApplications.map((app) => (
                    <div key={app.id} className='flex items-center justify-between p-4 border rounded-lg'>
                      <div className='space-y-1'>
                        <div className='flex items-center gap-2'>
                          <span className='font-medium'>{app.id}</span>
                          {getStatusBadge(app.status)}
                        </div>
                        <p className='text-sm text-gray-600'>
                          <strong>{app.applicant}</strong> - {app.project}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {app.location} • Submitted: {app.submittedDate}
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm'>
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='users' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage system users and their roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='text-center py-8'>
                  <p className='text-gray-500 mb-4'>User management features coming soon</p>
                  <Button>Add New User</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='reports' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>System Reports</CardTitle>
                <CardDescription>
                  Generate and view system reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Button variant='outline' className='h-20 flex-col'>
                    <span className='text-lg mb-1'>📊</span>
                    Application Statistics
                  </Button>
                  <Button variant='outline' className='h-20 flex-col'>
                    <span className='text-lg mb-1'>🏗️</span>
                    Risk Assessment Report
                  </Button>
                  <Button variant='outline' className='h-20 flex-col'>
                    <span className='text-lg mb-1'>👥</span>
                    User Activity Report
                  </Button>
                  <Button variant='outline' className='h-20 flex-col'>
                    <span className='text-lg mb-1'>📈</span>
                    Performance Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='settings' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='font-medium'>Email Notifications</h4>
                      <p className='text-sm text-gray-600'>Send email notifications for status updates</p>
                    </div>
                    <Button variant='outline' size='sm'>Configure</Button>
                  </div>
                  <Separator />
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='font-medium'>Risk Assessment Thresholds</h4>
                      <p className='text-sm text-gray-600'>Configure GIS risk assessment parameters</p>
                    </div>
                    <Button variant='outline' size='sm'>Configure</Button>
                  </div>
                  <Separator />
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='font-medium'>Approval Workflow</h4>
                      <p className='text-sm text-gray-600'>Manage multi-stage approval process</p>
                    </div>
                    <Button variant='outline' size='sm'>Configure</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
