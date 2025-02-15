import React from 'react';
import { 
  Users, 
  Brain, 
  TrendingUp, 
  BarChart2, 
  Mail, 
  Globe, 
  Download,
  RefreshCw
} from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  score: number;
  lastActivity: string;
  engagement: string;
  interactions: number;
  email: string;
  status: 'Hot' | 'Warm' | 'Cold';
}

const leads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    score: 92,
    lastActivity: 'Downloaded whitepaper',
    engagement: 'Very High',
    interactions: 15,
    email: 'sarah.j@company.com',
    status: 'Hot'
  },
  {
    id: '2',
    name: 'Michael Chen',
    score: 85,
    lastActivity: 'Viewed pricing page',
    engagement: 'High',
    interactions: 12,
    email: 'm.chen@tech.com',
    status: 'Hot'
  },
  {
    id: '3',
    name: 'Emma Williams',
    score: 67,
    lastActivity: 'Email opened',
    engagement: 'Medium',
    interactions: 8,
    email: 'emma.w@corp.com',
    status: 'Warm'
  }
];

const metrics = [
  {
    label: 'Total Leads',
    value: '247',
    change: 12.5,
    icon: <Users className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Avg. Score',
    value: '76/100',
    change: 3.2,
    icon: <BarChart2 className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Conversion Rate',
    value: '24%',
    change: 5.3,
    icon: <TrendingUp className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'AI Predictions',
    value: '89%',
    change: 2.1,
    icon: <Brain className="w-6 h-6 text-[#b7cd51]" />
  }
];

export default function LeadScoringPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#b7cd51]">AI-Powered Lead Scoring</h1>
          <p className="text-[#4e557f]">Convert More Leads with Smart Prioritization</p>
        </div>
        <button className="px-4 py-2 text-white bg-[#580c3b] rounded-lg hover:bg-[#a0404e] transition-colors flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh Lead Scores
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[#14123a] rounded-xl p-6 shadow-sm border border-[#4e557f]/20">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#580c3b]/10 rounded-lg">
                {metric.icon}
              </div>
              <span className={`flex items-center text-sm ${
                metric.change >= 0 ? 'text-[#b7cd51]' : 'text-[#a0404e]'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
            <h3 className="text-sm text-[#4e557f] mb-1">{metric.label}</h3>
            <p className="text-2xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Lead List */}
      <div className="bg-[#14123a] rounded-xl shadow-sm border border-[#4e557f]/20">
        <div className="p-6 border-b border-[#4e557f]/20">
          <h3 className="text-lg font-semibold text-[#b7cd51] mb-1">Scored Leads</h3>
          <p className="text-sm text-[#4e557f]">Prioritized list of leads based on AI scoring</p>
        </div>
        <div className="divide-y divide-[#4e557f]/20">
          {leads.map((lead) => (
            <div key={lead.id} className="p-6 hover:bg-[#4e557f]/10 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#580c3b]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#b7cd51]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{lead.name}</h4>
                    <p className="text-sm text-[#4e557f]">{lead.email}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  lead.status === 'Hot' 
                    ? 'bg-[#580c3b] text-white'
                    : lead.status === 'Warm'
                    ? 'bg-[#a0404e] text-white'
                    : 'bg-[#4e557f] text-white'
                }`}>
                  {lead.status}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <BarChart2 className="w-5 h-5 text-[#4e557f]" />
                  <div>
                    <p className="text-sm font-medium text-[#4e557f]">Lead Score</p>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#4e557f]/20 rounded-full h-2">
                        <div 
                          className="bg-[#580c3b] h-2 rounded-full" 
                          style={{ width: `${lead.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-[#4e557f]">{lead.score}/100</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#4e557f]" />
                  <div>
                    <p className="text-sm font-medium text-[#4e557f]">Engagement</p>
                    <p className="text-sm text-white">{lead.engagement}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#4e557f]" />
                  <div>
                    <p className="text-sm font-medium text-[#4e557f]">Last Activity</p>
                    <p className="text-sm text-white">{lead.lastActivity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Card */}
      <div className="bg-gradient-to-br from-[#580c3b] to-[#14123a] rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-6 h-6 text-[#b7cd51]" />
          <h3 className="text-lg font-semibold">AI Scoring Insights</h3>
        </div>
        <ul className="space-y-3 text-[#4e557f]">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
            Scores are updated in real-time based on user interactions
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
            Higher engagement patterns indicate stronger purchase intent
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
            AI considers over 20 different behavioral signals
          </li>
        </ul>
      </div>
    </div>
  );
} 