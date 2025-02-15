import React from 'react';
import { Upload, BarChart, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const AnalyticsSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360" className="w-full h-full">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="480" height="360" rx="12" fill="#1f2937" className="dark:fill-gray-800" />

      {/* Document Icon */}
      <g transform="translate(80, 60)" filter="url(#shadow)">
        <rect width="120" height="150" rx="8" fill="white" className="dark:fill-gray-700" />
        <rect x="20" y="25" width="80" height="10" rx="2" fill="#e2e8f0" className="dark:fill-gray-600" />
        <rect x="20" y="45" width="80" height="10" rx="2" fill="#e2e8f0" className="dark:fill-gray-600" />
        <rect x="20" y="65" width="60" height="10" rx="2" fill="#e2e8f0" className="dark:fill-gray-600" />
        <rect x="20" y="85" width="80" height="10" rx="2" fill="#e2e8f0" className="dark:fill-gray-600" />
        <rect x="20" y="105" width="40" height="10" rx="2" fill="#e2e8f0" className="dark:fill-gray-600" />

        {/* CSV Label */}
        <rect x="35" y="140" width="50" height="20" rx="4" fill="#3b82f6" />
        <text x="60" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">.CSV</text>
      </g>

      {/* Arrow Animation */}
      <path
        d="M210 105 L260 105"
        stroke="#3b82f6"
        strokeWidth="4"
        strokeDasharray="10,5"
        className="animate-[dash_3s_linear_infinite]"
      />
      <polygon points="265,105 255,100 255,110" fill="#3b82f6" className="animate-[pulse_3s_infinite]" />

      {/* Analytics Dashboard */}
      <g transform="translate(270, 40)" filter="url(#shadow)">
        <rect width="160" height="200" rx="8" fill="white" className="dark:fill-gray-700" />

        {/* Header */}
        <rect x="10" y="10" width="140" height="30" rx="4" fill="#f1f5f9" className="dark:fill-gray-600" />
        <text x="80" y="30" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="bold" className="dark:fill-gray-300">Dashboard</text>

        {/* Chart 1 - Bar chart */}
        <rect x="15" y="50" width="130" height="60" rx="4" fill="#f8fafc" className="dark:fill-gray-800" />
        <rect x="25" y="90" width="15" height="15" rx="2" fill="url(#gradient1)" className="animate-[pulse_2s_infinite]" />
        <rect x="50" y="80" width="15" height="25" rx="2" fill="url(#gradient1)" className="animate-[pulse_2.2s_infinite]" />
        <rect x="75" y="70" width="15" height="35" rx="2" fill="url(#gradient1)" className="animate-[pulse_2.4s_infinite]" />
        <rect x="100" y="60" width="15" height="45" rx="2" fill="url(#gradient1)" className="animate-[pulse_2.6s_infinite]" />

        {/* Chart 2 - Line chart */}
        <rect x="15" y="120" width="130" height="60" rx="4" fill="#f8fafc" className="dark:fill-gray-800" />
        <path
          d="M25 160 Q40 140, 55 155 Q70 170, 85 145 Q100 120, 115 140 Q130 160, 145 150"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Floating Elements - Data points */}
      <circle cx="160" cy="50" r="6" fill="#3b82f6" className="animate-[ping_3s_infinite]" opacity="0.8" />
      <circle cx="320" cy="30" r="4" fill="#06b6d4" className="animate-[ping_2.5s_infinite]" opacity="0.7" />
      <circle cx="100" cy="250" r="5" fill="#4f46e5" className="animate-[ping_4s_infinite]" opacity="0.7" />
      <circle cx="370" cy="280" r="7" fill="#3b82f6" className="animate-[ping_3.5s_infinite]" opacity="0.8" />
      <circle cx="220" cy="300" r="4" fill="#06b6d4" className="animate-[ping_3s_infinite]" opacity="0.7" />

      {/* Connection Lines */}
      <path
        d="M140 125 C 100 180, 160 220, 120 260"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeDasharray="5,5"
        className="dark:stroke-gray-600"
      />
      <path
        d="M340 125 C 380 180, 310 220, 360 260"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeDasharray="5,5"
        className="dark:stroke-gray-600"
      />
    </svg>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16 pb-24">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b82f6_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#6366f1_0%,_transparent_50%)] opacity-20"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]
        opacity-10 animate-grid"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="col-span-6 space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    Transform Your
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 animate-gradient-x">
                  E-Commerce Data
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in opacity-0 [animation-delay:400ms]">
                Upload your CSV data and get instant insights. Our AI-powered platform analyzes your e-commerce data and provides actionable recommendations.
              </p>
            </div>

            <div className="flex gap-4 animate-fade-in opacity-0 [animation-delay:600ms]">
              <Link
                to="/register"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white font-semibold 
                  overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* SVG Container with enhanced effects */}
          <div className="col-span-6 mt-12 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-lg blur-xl opacity-75 
                group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 ring-1 ring-white/10 
                transform hover:scale-[1.02] transition-all duration-500 hover:ring-blue-500/50">
                <div className="w-full h-full">
                  <AnalyticsSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const FeaturesSection = () => {
  const features = [
    {
      icon: <Upload size={24} />,
      title: "Smart Data Upload",
      description: "Seamlessly upload and process your CSV files with our intelligent data handling system",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: <BarChart size={24} />,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with our enterprise-grade analytics engine",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "AI-Powered Assistant",
      description: "Get instant answers and deep insights with our advanced AI chat interface",
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <div id="features" className="relative py-32 bg-gray-900">
      {/* Refined background with subtle patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-300">
              Enterprise-Grade Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful tools designed for modern e-commerce businesses
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group h-full"
            >
              {/* Enhanced card design with fixed height */}
              <div className="relative h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                transition-all duration-500 hover:border-blue-500/50 hover:bg-gray-800/80 flex flex-col">
                {/* Glowing icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-8
                  shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500 flex-shrink-0`}>
                  <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle hover indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Data",
      description: "Securely upload your e-commerce data through our enterprise-grade platform."
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI engine processes and analyzes your data in real-time."
    },
    {
      number: "03",
      title: "Get Insights",
      description: "Access detailed visualizations and actionable business insights."
    },
    {
      number: "04",
      title: "Make Decisions",
      description: "Transform insights into strategic business decisions with confidence."
    }
  ];

  return (
    <div className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_0.5px,transparent_0.5px),linear-gradient(-45deg,#1e293b_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A streamlined process to transform your data into business value
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Professional step card */}
              <div className="relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                transition-all duration-500 hover:border-blue-500/50 hover:bg-gray-800/80">
                {/* Step number */}
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center
                  shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mt-4 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className=" dark:bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive deeper?</span>
          <span className="block text-indigo-200">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Get started
              <ChevronRight size={16} className="ml-2" />
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  // Add useEffect to ensure dark mode is applied
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    // Change the wrapper div to force dark mode styles
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
};

export default Landing;
