import React, { useState } from 'react';
import { MoreHorizontal, Star, Search, Filter, Download } from 'lucide-react';

const leads = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Solutions Inc',
    score: 92,
    status: 'Hot',
    lastContact: '2h ago',
    email: 'sarah@techsolutions.com',
    source: 'Website',
    location: 'New York, USA'
  },
  {
    name: 'Michael Chen',
    company: 'Digital Dynamics',
    score: 78,
    status: 'Warm',
    lastContact: '1d ago',
    email: 'michael@digitaldynamics.com',
    source: 'LinkedIn',
    location: 'San Francisco, USA'
  },
  {
    name: 'Emma Williams',
    company: 'Growth Labs',
    score: 85,
    status: 'Hot',
    lastContact: '3h ago',
    email: 'emma@growthlabs.io',
    source: 'Referral',
    location: 'London, UK'
  },
  {
    name: 'James Wilson',
    company: 'Innovate AI',
    score: 95,
    status: 'Hot',
    lastContact: '1h ago',
    email: 'james@innovateai.com',
    source: 'Conference',
    location: 'Toronto, Canada'
  },
  {
    name: 'Lisa Anderson',
    company: 'Future Tech',
    score: 72,
    status: 'Warm',
    lastContact: '2d ago',
    email: 'lisa@futuretech.com',
    source: 'Website',
    location: 'Berlin, Germany'
  }
];

export default function LeadTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Leads</h3>
          <div className="flex gap-2">
            <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="px-3 py-2 text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-lg">
              Add Lead
            </button>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-10 pr-8 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="All">All Status</option>
              <option value="Hot">Hot</option>
              <option value="Warm">Warm</option>
              <option value="Cold">Cold</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredLeads.map((lead) => (
              <tr key={lead.email} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-sm text-gray-500">{lead.company}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{lead.score}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    lead.status === 'Hot' 
                      ? 'bg-red-100 text-red-800' 
                      : lead.status === 'Warm'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {lead.source}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {lead.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {lead.lastContact}
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}