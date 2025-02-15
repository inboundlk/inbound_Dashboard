import React, { useState } from 'react';
import { 
  Mail,
  MessageSquare,
  Target,
  Zap,
  Calendar,
  Users,
  BarChart2,
  Plus,
  Edit3,
  Trash2,
  AlertCircle
} from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'social' | 'ads';
  status: 'active' | 'draft' | 'scheduled';
  audience: string;
  engagement: number;
  nextSend: string;
  performance: number;
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Welcome Series',
    type: 'email',
    status: 'active',
    audience: 'New Subscribers',
    engagement: 78,
    nextSend: 'Automated',
    performance: 92
  },
  {
    id: '2',
    name: 'Product Launch',
    type: 'social',
    status: 'scheduled',
    audience: 'All Customers',
    engagement: 65,
    nextSend: 'Tomorrow, 10:00 AM',
    performance: 85
  },
  {
    id: '3',
    name: 'Re-engagement Flow',
    type: 'email',
    status: 'draft',
    audience: 'Inactive Users',
    engagement: 0,
    nextSend: 'Not scheduled',
    performance: 0
  }
];

const metrics = [
  {
    label: 'Active Campaigns',
    value: '12',
    change: 2,
    icon: <Zap className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Total Audience',
    value: '24.5K',
    change: 12.5,
    icon: <Users className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Avg. Open Rate',
    value: '32%',
    change: 3.8,
    icon: <Mail className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Engagement Score',
    value: '8.7/10',
    change: 0.5,
    icon: <Target className="w-6 h-6 text-[#b7cd51]" />
  }
];

export default function CampaignsPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#b7cd51]">Automated Campaigns</h1>
          <p className="text-white">Engage your audience with AI-powered automation</p>
        </div>
        <button className="px-4 py-2 text-white bg-[#580c3b] rounded-lg hover:bg-[#a0404e] transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Campaign
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[#14123a] rounded-xl p-6 shadow-sm border border-[#4e557f]/20">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#580c3b]/10 rounded-lg">
                {React.cloneElement(metric.icon, { className: "w-6 h-6 text-[#b7cd51]" })}
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

      {/* Tabs and Campaign List */}
      <div className="bg-[#14123a] rounded-xl shadow-sm border border-[#4e557f]/20">
        <div className="border-b border-[#4e557f]/20">
          <div className="p-4">
            <nav className="flex gap-4">
              <button
                onClick={() => setSelectedTab('all')}
                className={`pb-4 px-2 text-sm font-medium ${
                  selectedTab === 'all'
                    ? 'text-[#b7cd51] border-b-2 border-[#580c3b]'
                    : 'text-[#4e557f] hover:text-white'
                }`}
              >
                All Campaigns
              </button>
              <button
                onClick={() => setSelectedTab('active')}
                className={`pb-4 px-2 text-sm font-medium ${
                  selectedTab === 'active'
                    ? 'text-[#b7cd51] border-b-2 border-[#580c3b]'
                    : 'text-[#4e557f] hover:text-white'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setSelectedTab('drafts')}
                className={`pb-4 px-2 text-sm font-medium ${
                  selectedTab === 'drafts'
                    ? 'text-[#b7cd51] border-b-2 border-[#580c3b]'
                    : 'text-[#4e557f] hover:text-white'
                }`}
              >
                Drafts
              </button>
            </nav>
          </div>
        </div>

        <div className="divide-y divide-[#4e557f]/20">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-6 hover:bg-[#4e557f]/10 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    campaign.type === 'email' 
                      ? 'bg-[#580c3b]/10' 
                      : campaign.type === 'social'
                      ? 'bg-[#b7cd51]/10'
                      : 'bg-[#a0404e]/10'
                  }`}>
                    {campaign.type === 'email' 
                      ? <Mail className="w-5 h-5 text-[#b7cd51]" />
                      : campaign.type === 'social'
                      ? <MessageSquare className="w-5 h-5 text-[#b7cd51]" />
                      : <Target className="w-5 h-5 text-[#b7cd51]" />
                    }
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{campaign.name}</h4>
                    <p className="text-sm text-[#4e557f]">{campaign.audience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'active' 
                      ? 'bg-[#580c3b]/20 text-[#b7cd51]'
                      : campaign.status === 'scheduled'
                      ? 'bg-[#4e557f]/20 text-white'
                      : 'bg-[#4e557f]/10 text-[#4e557f]'
                  }`}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                  <button className="text-[#4e557f] hover:text-[#b7cd51]">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="text-[#4e557f] hover:text-[#a0404e]">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#4e557f]" />
                  <div>
                    <p className="text-sm font-medium text-[#4e557f]">Next Send</p>
                    <p className="text-sm text-white">{campaign.nextSend}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#4e557f]" />
                  <div>
                    <p className="text-sm font-medium text-[#4e557f]">Engagement</p>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#4e557f]/20 rounded-full h-2">
                        <div 
                          className="bg-[#580c3b] h-2 rounded-full" 
                          style={{ width: `${campaign.engagement}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-white">{campaign.engagement}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BarChart2 className="w-5 h-5 text-[#4e557f]" />
                  <div>
                    <p className="text-sm font-medium text-[#4e557f]">Performance</p>
                    <p className="text-sm text-white">{campaign.performance}/100</p>
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
          <AlertCircle className="w-6 h-6 text-[#b7cd51]" />
          <h3 className="text-lg font-semibold">AI Campaign Tips</h3>
        </div>
        <ul className="space-y-3 text-[#4e557f]">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
            Personalize content based on user behavior
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
            Optimize send times for maximum engagement
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
            A/B test your campaign messages
          </li>
        </ul>
      </div>
    </div>
  );
} 