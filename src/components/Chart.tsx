import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface ChartProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  trend?: {
    value: number;
    label: string;
  };
}

export default function Chart({ title, subtitle, children, trend }: ChartProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {trend && (
          <div className={`flex items-center gap-2 text-sm ${
            trend.value >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.value >= 0 ? 
              <ArrowUpRight className="w-4 h-4" /> : 
              <ArrowDownRight className="w-4 h-4" />
            }
            <span>{Math.abs(trend.value)}% {trend.label}</span>
          </div>
        )}
      </div>
      <div className="h-[300px] flex items-center justify-center relative">
        {children || (
          <div className="text-gray-400 flex flex-col items-center gap-2">
            <TrendingUp className="w-8 h-8" />
            <span>Chart data loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}