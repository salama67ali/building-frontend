import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const features = [
    {
      title: 'Multi-role Registration System',
      description: 'Secure role-based access control for different user types',
    },
    {
      title: 'Digital Application Submission',
      description:
        'Online permit application forms with document upload capabilities',
    },
    {
      title: 'GIS-Based Risk Assessment',
      description: 'Environmental risk analysis using spatial data',
    },
    {
      title: 'Building Safety Assessment',
      description: 'Structural strength evaluation and compliance verification',
    },
    {
      title: 'Approval Workflow Management',
      description: 'Multi-stage review process with status tracking',
    },
    {
      title: 'Digital Certification',
      description:
        'Electronic permit generation with QR code-enabled certificates',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Hero Section */}
      <section className='py-20 px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>
            Building Permit Management System
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Streamline your construction permit process with our digital
            platform. Submit applications, track approvals, and receive digital
            certifications efficiently.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              to='/sign-up'
              className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300'
            >
              Get Started
            </Link>
            <button className='bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 transition duration-300'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
            Our Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'
              >
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
