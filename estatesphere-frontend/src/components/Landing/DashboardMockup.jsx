import React from 'react';
import ArrowLeftDoubleIcon from '../../assets/svg/dashboardMockup/ArrowLeftDoubleIcon';
import ArrowUpIcon from '../../assets/svg/dashboardMockup/ArrowUpIcon';
import SecurityShieldIcon from '../../assets/svg/dashboardMockup/SecurityShieldIcon';
import { dashboardMockupChartData, dashboardMockupActivities } from '../../data/index.jsx';

export default function DashboardMockup() {
    return (
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Browser Window Mockup */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-fade-up">
                    {/* Browser Chrome */}
                    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        {/* Address Bar */}
                        <div className="flex-1 mx-8 flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm text-slate-600">
                            <ArrowLeftDoubleIcon className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-500">app.estatesphere.com/dashboard</span>
                        </div>

                        {/* Menu */}
                        <div className="flex flex-col gap-1">
                            <div className="w-5 h-0.5 bg-slate-400 rounded"></div>
                            <div className="w-5 h-0.5 bg-slate-400 rounded"></div>
                            <div className="w-5 h-0.5 bg-slate-400 rounded"></div>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex bg-slate-900">
                        {/* Sidebar */}
                        <div className="w-20 bg-slate-950 border-r border-slate-800 py-6 flex flex-col items-center gap-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl"></div>
                            <div className="flex flex-col gap-4">
                                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg border-l-2 border-indigo-600"></div>
                                <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"></div>
                                <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"></div>
                                <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"></div>
                                <div className="w-10 h-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"></div>
                            </div>
                        </div>

                        {/* Main Dashboard */}
                        <div className="flex-1 p-8 bg-slate-900">
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {/* Total Collections */}
                                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-600/50 transition-all duration-300">
                                    <div className="text-xs text-slate-400 font-semibold tracking-wider mb-2">TOTAL COLLECTIONS</div>
                                    <div className="text-3xl font-bold text-white mb-4">$124,592.00</div>
                                    <div className="flex items-end gap-1 h-12">
                                        {[40, 60, 45, 80, 55].map((height, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t" style={{ height: `${height}%` }}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pending Requests */}
                                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-600/50 transition-all duration-300">
                                    <div className="text-xs text-slate-400 font-semibold tracking-wider mb-2">PENDING REQUESTS</div>
                                    <div className="text-3xl font-bold text-white mb-4">42</div>
                                    <div className="flex items-end gap-1 h-12">
                                        {[50, 70, 60, 85, 65].map((height, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t" style={{ height: `${height}%` }}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Occupancy Rate */}
                                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-600/50 transition-all duration-300">
                                    <div className="text-xs text-slate-400 font-semibold tracking-wider mb-2">OCCUPANCY RATE</div>
                                    <div className="text-3xl font-bold text-white mb-2">98.4%</div>
                                    <div className="flex items-center gap-2 text-emerald-400 text-sm">
                                        <ArrowUpIcon className="w-4 h-4" />
                                        <span>+2.4% vs last mo</span>
                                    </div>
                                </div>
                            </div>

                            {/* Charts Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Revenue Analytics */}
                                <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-bold text-white">Revenue Analytics</h3>
                                        <div className="flex items-center gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                                                <span className="text-slate-400">Income</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                                                <span className="text-slate-400">Expenses</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end justify-between gap-3 h-48">
                                        {dashboardMockupChartData.map((bars, i) => (
                                            <div key={i} className="flex-1 flex items-end gap-1">
                                                <div className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t transition-all duration-300 hover:from-indigo-500 hover:to-indigo-300" style={{ height: `${bars[0]}%` }}></div>
                                                <div className="flex-1 bg-gradient-to-t from-slate-600 to-slate-500 rounded-t transition-all duration-300 hover:from-slate-500 hover:to-slate-400" style={{ height: `${bars[1]}%` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Activities */}
                                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                    <h3 className="text-lg font-bold text-white mb-6">Recent Activities</h3>
                                    <div className="space-y-4">
                                        {dashboardMockupActivities.map((_, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex-shrink-0"></div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-3 bg-slate-700 rounded w-full"></div>
                                                    <div className="h-3 bg-slate-700/50 rounded w-2/3"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="absolute bottom-8 right-8 flex items-start gap-4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 max-w-sm animate-float-vertical">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                                <SecurityShieldIcon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">100% Security</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Your community data is protected with enterprise-grade encryption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
