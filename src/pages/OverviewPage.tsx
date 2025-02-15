import React from 'react';
import { Users, Target, Zap, Mail, Brain, ArrowRight } from 'lucide-react';
import KPICard from '../components/KPICard';
import Chart from '../components/Chart';
import LeadTable from '../components/LeadTable';

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#b7cd51]">Dashboard Overview</h1>
          <p className="text-white">Welcome back! Here's what's happening today.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#580c3b] text-white rounded-lg hover:bg-[#a0404e] transition-colors">
          <span>Create Campaign</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Total Leads"
          value="2,543"
          change={12.5}
          icon={<Users className="w-6 h-6 text-[#b7cd51]" />}
        />
        <KPICard
          title="Conversion Rate"
          value="3.6%"
          change={-2.3}
          icon={<Target className="w-6 h-6 text-[#b7cd51]" />}
        />
        <KPICard
          title="Engagement Score"
          value="78/100"
          change={5.2}
          icon={<Zap className="w-6 h-6 text-[#b7cd51]" />}
        />
        <KPICard
          title="Active Campaigns"
          value="12"
          change={0}
          icon={<Mail className="w-6 h-6 text-[#b7cd51]" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Chart 
          title="Lead Generation Trends" 
          subtitle="Last 30 days performance"
          trend={{ value: 8.2, label: 'vs last month' }}
        >
          [Chart Placeholder]
        </Chart>
        <Chart 
          title="Campaign Performance" 
          subtitle="Conversion rates by channel"
          trend={{ value: -2.4, label: 'vs last month' }}
        >
          [Chart Placeholder]
        </Chart>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#14123a] rounded-xl p-6 shadow-sm col-span-2 border border-[#4e557f]/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-[#b7cd51]">AI Insights</h3>
              <p className="text-sm text-[#4e557f]">Actionable recommendations</p>
            </div>
            <Brain className="w-6 h-6 text-[#b7cd51]" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-[#4e557f]/10 rounded-lg border border-[#4e557f]/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#580c3b]/10 flex items-center justify-center">
                  <Target className="w-4 h-4 text-[#b7cd51]" />
                </div>
                <h4 className="font-medium text-white">Optimize Email Campaign Timing</h4>
              </div>
              <p className="text-sm text-[#4e557f]">Based on engagement patterns, sending emails between 10 AM and 2 PM could increase open rates by 23%.</p>
            </div>
            <div className="p-4 bg-[#4e557f]/10 rounded-lg border border-[#4e557f]/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#580c3b]/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#b7cd51]" />
                </div>
                <h4 className="font-medium text-white">Lead Scoring Adjustment</h4>
              </div>
              <p className="text-sm text-[#4e557f]">Consider increasing weight for website visits. Users who visit pricing pages show 3x higher conversion rates.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#580c3b] to-[#14123a] rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
          <p className="text-sm text-[#b7cd51] mb-6">Streamline your workflow</p>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-[#4e557f]/10 hover:bg-[#a0404e]/30 rounded-lg transition-colors text-left">
              Create New Campaign
            </button>
            <button className="w-full px-4 py-2 bg-[#4e557f]/10 hover:bg-[#a0404e]/30 rounded-lg transition-colors text-left">
              Import Leads
            </button>
            <button className="w-full px-4 py-2 bg-[#4e557f]/10 hover:bg-[#a0404e]/30 rounded-lg transition-colors text-left">
              Schedule Report
            </button>
            <button className="w-full px-4 py-2 bg-[#4e557f]/10 hover:bg-[#a0404e]/30 rounded-lg transition-colors text-left">
              Configure Chatbot
            </button>
          </div>
        </div>
      </div>

      <LeadTable />
    </div>
  );
} 