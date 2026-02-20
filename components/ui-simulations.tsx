"use client"

import { motion } from "framer-motion"
import { Search, Filter, MoreHorizontal, MessageSquare, Code, Play, CheckCircle2, LayoutGrid, List, Plus, Settings, BarChart3, Clock, DollarSign, Tag, ArrowRight, Users } from "lucide-react"

export function AILabsSimulation() {
  return (
    <div className="p-0 h-full flex flex-col bg-slate-950 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Code size={16} className="text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">AI Labs / Sandbox</div>
            <div className="text-[10px] text-slate-500">v2.4.0-stable</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </div>
          <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-bold uppercase tracking-wider">
            GPT-4o
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 border-r border-slate-800 p-4 space-y-4 bg-slate-900/20 hidden md:block">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Deployments</div>
          {[
            { name: "Report Summarizer", status: "Running" },
            { name: "Content Audit", status: "Paused" },
            { name: "Sentiment Engine", status: "Running" },
            { name: "Ad-Copy Gen", status: "Running" },
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-lg border transition-colors cursor-pointer ${i === 0 ? "bg-blue-600/10 border-blue-500/50" : "bg-slate-900/50 border-slate-800 hover:border-slate-700"}`}>
              <div className="text-[10px] font-semibold text-white truncate">{item.name}</div>
              <div className="text-[8px] text-slate-500 mt-1 flex justify-between items-center">
                <span>{item.status}</span>
                <div className={`h-1 w-1 rounded-full ${item.status === "Running" ? "bg-emerald-500" : "bg-orange-500"}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-6 font-mono text-[11px] leading-relaxed text-slate-400 overflow-hidden">
            <div className="mb-4">
              <span className="text-blue-400 font-bold">SYSTEM:</span> You are an agency reporting assistant. Analyze the CSV input and extract 3 key growth metrics.
            </div>
            <div className="mb-4 p-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <span className="text-blue-400">USER:</span> process_client_data(path="/uploads/q4_data.csv", format="exec_summary")
            </div>
            <div className="space-y-2 opacity-80">
              <div><span className="text-emerald-400">LOG:</span> Initializing data parser...</div>
              <div><span className="text-emerald-400">LOG:</span> Mapping fields: [clicks, spend, conversions]</div>
              <div><span className="text-emerald-400">LOG:</span> Running regression analysis...</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                className="inline-block h-4 w-1 bg-blue-500 ml-1 translate-y-1"
              />
            </div>
          </div>
          <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex gap-2">
            <div className="flex-1 h-10 bg-slate-950 border border-slate-800 rounded px-4 flex items-center text-[10px] text-slate-500">
              Type prompt or /cmd to execute...
            </div>
            <button className="h-10 px-4 bg-blue-600 rounded text-white flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Play size={14} fill="white" />
              <span className="text-xs font-bold uppercase tracking-tight">Run</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MarketplaceSimulation() {
  return (
    <div className="p-0 h-full flex flex-col bg-slate-950 font-sans">
      <div className="border-b border-slate-800 px-6 py-4 bg-slate-900/30">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
             <LayoutGrid size={16} className="text-cyan-400" />
             Asset Marketplace
          </h4>
          <div className="flex gap-2">
             <div className="h-8 w-8 rounded border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer"><Settings size={14} /></div>
             <div className="h-8 px-3 rounded bg-blue-600 flex items-center gap-2 text-[10px] font-bold text-white cursor-pointer hover:bg-blue-700">
               <Plus size={14} /> List Asset
             </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 h-9 bg-slate-950 border border-slate-800 rounded-lg flex items-center px-3 gap-2">
            <Search size={14} className="text-slate-500" />
            <span className="text-[10px] text-slate-500">Search 1,200+ AI templates...</span>
          </div>
          <div className="h-9 w-24 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center gap-2 text-[10px] font-semibold text-slate-300">
            <Filter size={14} /> Filters
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 grid grid-cols-2 gap-4 overflow-hidden">
        {[
          { name: "SEO Keyword Clusterer", price: "$49", sales: "1.2k", cat: "Automation" },
          { name: "TikTok Content Engine", price: "$129", sales: "840", cat: "Creatives" },
          { name: "Email Outreach AI", price: "$75", sales: "2.1k", cat: "Sales" },
          { name: "B2B Lead Auditor", price: "$199", sales: "320", cat: "Data" },
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                <Tag size={18} />
              </div>
              <div className="text-xs font-bold text-white">{item.price}</div>
            </div>
            <div className="text-[11px] font-bold text-white mb-1">{item.name}</div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{item.cat}</span>
              <span className="text-[9px] text-slate-500">{item.sales} sales</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="text-[9px] font-bold text-blue-400 uppercase">View Details</div>
               <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center"><ArrowRight size={12} className="text-slate-400" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AcademySimulation() {
  return (
    <div className="p-0 h-full flex flex-col bg-slate-950 font-sans">
      <div className="flex-1 flex flex-col">
        <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
           <div className="relative z-10 h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 cursor-pointer hover:scale-110 transition-transform">
              <Play size={24} fill="white" className="text-white ml-1" />
           </div>
           <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4">
              <div className="text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap">Course 04: AI Implementation</div>
              <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500" />
              </div>
              <div className="text-[10px] font-bold text-white">68%</div>
           </div>
        </div>
        <div className="flex-1 p-6 space-y-4 overflow-hidden">
          <div className="text-xs font-bold text-white mb-2 uppercase tracking-tight">Curriculum</div>
          {[
             { title: "Introduction to Neural Workflows", duration: "12:45", status: "completed" },
             { title: "Prompt Engineering for Agencies", duration: "24:20", status: "completed" },
             { title: "Client Data Privacy & Security", duration: "18:10", status: "active" },
             { title: "Automated Reporting Pipelines", duration: "45:00", status: "locked" },
          ].map((lesson, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-pointer">
              <div className={`h-6 w-6 rounded-full flex items-center justify-center border ${lesson.status === 'completed' ? 'bg-emerald-500 border-emerald-500 text-white' : lesson.status === 'active' ? 'border-blue-500 text-blue-500' : 'border-slate-800 text-slate-700'}`}>
                {lesson.status === 'completed' ? <CheckCircle2 size={12} /> : <div className="text-[9px] font-bold">{i+1}</div>}
              </div>
              <div className="flex-1">
                <div className={`text-[11px] font-semibold ${lesson.status === 'locked' ? 'text-slate-600' : 'text-slate-300'}`}>{lesson.title}</div>
              </div>
              <div className="text-[9px] text-slate-500 font-mono">{lesson.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ClientManagementSimulation() {
  return (
    <div className="p-0 h-full flex flex-col bg-slate-950 font-sans">
      <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between bg-slate-900/30">
        <div className="text-sm font-bold text-white flex items-center gap-2">
          <Users size={16} className="text-emerald-400" />
          Client Overview
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => <div key={i} className="h-6 w-6 rounded-full border border-slate-950 bg-slate-800" />)}
            <div className="h-6 w-6 rounded-full border border-slate-950 bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">+12</div>
          </div>
          <button className="h-8 w-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400"><MoreHorizontal size={14} /></button>
        </div>
      </div>

      <div className="p-6 grid grid-cols-3 gap-4 border-b border-slate-800">
        {[
          { label: "Total MRR", val: "$42,500", icon: DollarSign, color: "text-blue-400" },
          { label: "Active Projs", val: "24", icon: BarChart3, color: "text-emerald-400" },
          { label: "Team Cap", val: "88%", icon: Clock, color: "text-orange-400" },
        ].map((stat, i) => (
          <div key={i} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
            <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <stat.icon size={10} className={stat.color} />
              {stat.label}
            </div>
            <div className="text-sm font-bold text-white">{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="flex-1 p-6 space-y-4 overflow-hidden">
        <div className="flex justify-between items-center mb-2">
           <div className="text-[10px] font-bold text-slate-500 uppercase">Recent Activity</div>
           <div className="text-[10px] text-blue-400 font-bold hover:underline cursor-pointer">View All</div>
        </div>
        {[
          { client: "GlobalAds", action: "Report Generated", time: "2m ago", status: "Success" },
          { client: "LandBiznes", action: "New Audit Started", time: "15m ago", status: "Processing" },
          { client: "Configure SL", action: "Asset Purchased", time: "1h ago", status: "Success" },
          { client: "Nexus Corp", action: "Ticket Resolved", time: "4h ago", status: "Success" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="h-10 w-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-colors">
              <MessageSquare size={16} />
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-bold text-white">{item.client}</div>
              <div className="text-[9px] text-slate-500">{item.action} • {item.time}</div>
            </div>
            <div className={`text-[8px] font-bold px-2 py-0.5 rounded-full border ${item.status === 'Success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
