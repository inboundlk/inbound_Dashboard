import React, { useState } from 'react';
import { 
  MessageCircle,
  Settings, 
  Clock,
  ThumbsUp,
  Users, 
  Zap,
  Edit3,
  Save,
  AlertCircle
} from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

interface Conversation {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  response: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

const metrics: Metric[] = [
  {
    label: 'Total Conversations',
    value: '1,234',
    change: 12.5,
    icon: <MessageCircle className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Response Rate',
    value: '92%',
    change: 3.2,
    icon: <Zap className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'Avg. Response Time',
    value: '2m 15s',
    change: -8.1,
    icon: <Clock className="w-6 h-6 text-[#b7cd51]" />
  },
  {
    label: 'User Satisfaction',
    value: '4.8/5',
    change: 4.3,
    icon: <ThumbsUp className="w-6 h-6 text-[#b7cd51]" />
  }
];

const recentConversations: Conversation[] = [
  {
    id: '1',
    user: 'Sarah Johnson',
    message: 'What are your pricing plans?',
    timestamp: '2 minutes ago',
    response: 'We offer three plans: Starter ($49/mo), Professional ($99/mo), and Enterprise (custom pricing). Would you like me to explain the features of each plan?',
    sentiment: 'positive'
  },
  {
    id: '2',
    user: 'Michael Chen',
    message: 'Having trouble logging in',
    timestamp: '15 minutes ago',
    response: "I'm sorry to hear that. Let me help you with the login process. Could you tell me what error message you're seeing?",
    sentiment: 'negative'
  },
  {
    id: '3',
    user: 'Emma Williams',
    message: 'How do I integrate with Slack?',
    timestamp: '1 hour ago',
    response: 'Our Slack integration is simple to set up. First, go to Settings > Integrations, then click on the Slack icon and follow the prompts. Would you like me to walk you through it?',
    sentiment: 'neutral'
  }
];

export default function ChatbotPage() {
  const [activeTab, setActiveTab] = useState('conversations');
  const [isEditing, setIsEditing] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi there! 👋 I'm your AI assistant. How can I help you today?"
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#b7cd51]">AI Chatbot</h1>
          <p className="text-white">Manage your AI chatbot settings and monitor conversations</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-white bg-[#14123a] rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Configure
          </button>
          <button className="px-4 py-2 text-white bg-[#580c3b] rounded-lg hover:bg-[#a0404e] transition-colors flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Test Chatbot
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[#14123a] rounded-xl p-6 shadow-sm border border-white/20">
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
            <h3 className="text-sm text-white mb-1">{metric.label}</h3>
            <p className="text-2xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-white/20">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('conversations')}
            className={`pb-4 px-2 text-sm font-medium ${
              activeTab === 'conversations'
                ? 'text-[#b7cd51] border-b-2 border-[#580c3b]'
                : 'text-white hover:text-[#b7cd51]'
            }`}
          >
            Conversations
          </button>
          <button
            onClick={() => setActiveTab('responses')}
            className={`pb-4 px-2 text-sm font-medium ${
              activeTab === 'responses'
                ? 'text-[#b7cd51] border-b-2 border-[#580c3b]'
                : 'text-white hover:text-[#b7cd51]'
            }`}
          >
            Automated Responses
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-4 px-2 text-sm font-medium ${
              activeTab === 'analytics'
                ? 'text-[#b7cd51] border-b-2 border-[#580c3b]'
                : 'text-white hover:text-[#b7cd51]'
            }`}
          >
            Analytics
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'conversations' && (
        <div className="space-y-6">
          <div className="bg-[#14123a] rounded-xl shadow-sm border border-white/20">
            <div className="p-6 border-b border-white/20">
              <h3 className="text-lg font-semibold mb-1 text-[#b7cd51]">Recent Conversations</h3>
              <p className="text-white">Monitor and manage customer interactions</p>
            </div>
            <div className="divide-y divide-white/20">
              {recentConversations.map((conv) => (
                <div key={conv.id} className="p-6 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#580c3b]/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#b7cd51]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{conv.user}</h4>
                        <p className="text-sm text-white/60">{conv.timestamp}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      conv.sentiment === 'positive' 
                        ? 'bg-[#580c3b]/20 text-[#b7cd51]'
                        : conv.sentiment === 'negative'
                        ? 'bg-[#a0404e]/20 text-[#a0404e]'
                        : 'bg-white/10 text-white'
                    }`}>
                      {conv.sentiment.charAt(0).toUpperCase() + conv.sentiment.slice(1)}
                    </span>
                  </div>
                  <div className="pl-13">
                    <p className="text-white/80 mb-2">
                      <span className="font-medium text-white">User: </span>
                      {conv.message}
                    </p>
                    <p className="text-white/80">
                      <span className="font-medium text-white">Bot: </span>
                      {conv.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'responses' && (
        <div className="space-y-6">
          <div className="bg-[#14123a] rounded-xl shadow-sm p-6 border border-white/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-1 text-[#b7cd51]">Welcome Message</h3>
                <p className="text-white">Customize your chatbot's initial greeting</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[#b7cd51] hover:text-white"
              >
                {isEditing ? <Save className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
              </button>
            </div>
            {isEditing ? (
              <textarea
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                className="w-full p-4 bg-[#14123a] border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#580c3b] focus:border-transparent"
                rows={3}
              />
            ) : (
              <div className="p-4 bg-[#14123a] rounded-lg border border-white/20 text-white">
                {welcomeMessage}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Common Responses</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Pricing Inquiry</h4>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  We offer flexible pricing plans starting at $49/month. Would you like me to explain our different tiers?
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Feature Questions</h4>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Our platform includes email marketing, lead scoring, and automation tools. Which feature would you like to learn more about?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Pro Tips</h3>
            </div>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-100"></div>
                Keep responses concise and friendly
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-100"></div>
                Use natural language and avoid jargon
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-100"></div>
                Include clear calls-to-action
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="bg-[#14123a] rounded-xl shadow-sm p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1 text-[#b7cd51]">Response Time Analysis</h3>
                <p className="text-white">Average response times over the last 30 days</p>
              </div>
            </div>
            <div className="h-[300px] flex items-center justify-center bg-[#14123a] rounded-lg border border-white/20">
              [Response Time Chart]
            </div>
          </div>
        </div>
      )}
    </div>
  );
}