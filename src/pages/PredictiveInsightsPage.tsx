import React from 'react';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  LineChart,
  Users,
  Zap,
  AlertCircle,
  ArrowUpRight,
  BarChart2
} from 'lucide-react';

interface InsightCard {
  title: string;
  description: string;
  impact: string;
  trend: number;
  category: 'behavior' | 'conversion' | 'engagement';
}

const insights: InsightCard[] = [
  {
    title: "Rising Customer Segment Identified",
    description: "Tech-savvy professionals aged 25-34 showing increased engagement",
    impact: "Potential 28% conversion rate increase",
    trend: 28,
    category: 'behavior'
  },
  {
    title: "Optimal Campaign Timing",
    description: "Tuesday and Thursday mornings show peak engagement rates",
    impact: "15% higher click-through rate potential",
    trend: 15,
    category: 'engagement'
  },
  {
    title: "Content Performance Prediction",
    description: "How-to guides and video content trending upward",
    impact: "32% predicted engagement increase",
    trend: 32,
    category: 'conversion'
  }
];

const metrics = [
  {
    label: 'Prediction Accuracy',
    value: '94%',
    change: 3.2,
    icon: <Brain className="w-6 h-6 text-purple-600" />
  },
  {
    label: 'Insights Generated',
    value: '1,247',
    change: 12.5,
    icon: <Zap className="w-6 h-6 text-purple-600" />
  },
  {
    label: 'Revenue Impact',
    value: '$2.4M',
    change: 18.3,
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />
  },
  {
    label: 'Active Predictions',
    value: '24',
    change: 5.7,
    icon: <Target className="w-6 h-6 text-purple-600" />
  }
];

export default function PredictiveInsightsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#b7cd51]">Predictive Insights & Analytics</h1>
          <p className="text-[#4e557f]">AI-powered predictions to drive business growth</p>
        </div>
        <button className="px-4 py-2 text-white bg-[#580c3b] rounded-lg hover:bg-[#a0404e] transition-colors flex items-center gap-2">
          <Brain className="w-4 h-4" />
          Generate New Insights
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#14123a] rounded-xl shadow-sm border border-[#4e557f]/20">
            <div className="p-6 border-b border-[#4e557f]/20">
              <h3 className="text-lg font-semibold mb-1 text-[#b7cd51]">Latest AI Insights</h3>
              <p className="text-sm text-[#4e557f]">Actionable predictions based on your data</p>
            </div>
            <div className="divide-y divide-[#4e557f]/20">
              {insights.map((insight, index) => (
                <div key={index} className="p-6 hover:bg-[#4e557f]/10 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        insight.category === 'behavior' 
                          ? 'bg-[#580c3b]/10' 
                          : insight.category === 'conversion'
                          ? 'bg-[#b7cd51]/10'
                          : 'bg-[#a0404e]/10'
                      }`}>
                        {insight.category === 'behavior' 
                          ? <Users className="w-5 h-5 text-[#580c3b]" />
                          : insight.category === 'conversion'
                          ? <Target className="w-5 h-5 text-[#b7cd51]" />
                          : <Zap className="w-5 h-5 text-[#a0404e]" />
                        }
                      </div>
                      <h4 className="font-medium text-white">{insight.title}</h4>
                    </div>
                    <span className="text-[#b7cd51] flex items-center text-sm font-medium">
                      +{insight.trend}%
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                  <p className="text-[#4e557f] mb-3">{insight.description}</p>
                  <div className="flex items-center gap-2 text-sm text-[#580c3b]">
                    <Target className="w-4 h-4" />
                    {insight.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-[#14123a] rounded-xl p-6 shadow-sm border border-[#4e557f]/20">
            <h3 className="text-lg font-semibold mb-4 text-[#b7cd51]">Trend Analysis</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#4e557f]/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Customer Behavior</h4>
                  <BarChart2 className="w-5 h-5 text-[#4e557f]" />
                </div>
                <div className="h-32 flex items-center justify-center text-[#4e557f]">
                  [Behavior Chart]
                </div>
              </div>
              <div className="p-4 bg-[#4e557f]/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Conversion Patterns</h4>
                  <LineChart className="w-5 h-5 text-[#4e557f]" />
                </div>
                <div className="h-32 flex items-center justify-center text-[#4e557f]">
                  [Conversion Chart]
                </div>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-gradient-to-br from-[#580c3b] to-[#14123a] rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-[#b7cd51]" />
              <h3 className="text-lg font-semibold">Optimization Tips</h3>
            </div>
            <ul className="space-y-3 text-[#4e557f]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
                Focus on high-impact customer segments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
                Optimize campaign timing based on predictions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b7cd51]"></div>
                Leverage trending content formats
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 