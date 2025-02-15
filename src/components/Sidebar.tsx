import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Brain, 
  Megaphone, 
  MessageSquareMore, 
  BarChart3, 
  Settings,
  LogOut,
  Image as ImageIcon
} from 'lucide-react';

let InboundLogo;
try {
  InboundLogo = new URL('../assets/inbound-logo.png', import.meta.url).href;
} catch (error) {
  console.warn('Logo image not found:', error);
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Users, label: 'Lead Scoring', path: '/lead-scoring' },
  { icon: Brain, label: 'Predictive Insights', path: '/insights' },
  { icon: Megaphone, label: 'Campaigns', path: '/campaigns' },
  { icon: MessageSquareMore, label: 'AI Chatbot', path: '/chatbot' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#14123a] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        {InboundLogo ? (
          <img 
            src={InboundLogo} 
            alt="Inbound Logo" 
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              console.warn('Failed to load logo image');
            }}
          />
        ) : (
          <ImageIcon className="w-8 h-8 text-[#580c3b]" />
        )}
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-[#580c3b] text-white' 
                : 'hover:bg-[#4e557f]/20 text-[#4e557f]'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button className="flex items-center gap-3 px-4 py-3 text-[#4e557f] hover:bg-[#4e557f]/20 rounded-lg transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}