'use client';

import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Calendar as CalendarIcon, 
  LayoutDashboard, 
  Database, 
  Play, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  Layers,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  FileText
} from 'lucide-react';

interface TimetableItem {
  week: number;
  group: string;
  module: string;
  lecturer: string;
  room: string;
  sessionType: string;
  day: string;
  time: string;
  color: string;
}

export default function TimetableSimulator() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'calendar' | 'registry' | 'console'>('dashboard');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isSolving, setIsSolving] = useState(false);
  const [hasConflict, setHasConflict] = useState(false);
  const [selectedCard, setSelectedCard] = useState<TimetableItem | null>(null);

  // Raw timetable data representing output of CSV
  const baseTimetableData: TimetableItem[] = [
    {
      week: 5,
      group: 'GRP04',
      module: 'System Design',
      lecturer: 'Dr. Vishal',
      room: 'John Clare Lecture 6',
      sessionType: 'Lecture',
      day: 'Thursday',
      time: '9 AM',
      color: 'from-orange-500/20 to-red-500/20 border-orange-500/50 text-orange-400'
    },
    {
      week: 5,
      group: 'GRP05',
      module: 'Software Engineering',
      lecturer: 'Dr. Neil',
      room: 'New Hall Lecture 8',
      sessionType: 'Lecture',
      day: 'Tuesday',
      time: '2 PM',
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-cyan-400'
    }
  ];

  const conflictTimetableData: TimetableItem[] = [
    ...baseTimetableData,
    {
      week: 5,
      group: 'GRP04',
      module: 'Database Systems',
      lecturer: 'Dr. Vishal', // lecturer conflict on Thursday 9 AM
      room: 'Newton Lecture 4',
      sessionType: 'Lab',
      day: 'Thursday',
      time: '9 AM',
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/50 text-purple-400'
    }
  ];

  const [timetableData, setTimetableData] = useState<TimetableItem[]>(baseTimetableData);

  const initialLogs = [
    '[SYS] Booting native NTU_Timetable_Solver.exe...',
    '[FILE] Parsing raw structural flat files from standard database directory...',
    '[FILE] Loaded data_modules.csv successfully. (3 modules ready)',
    '[FILE] Loaded data_rooms.csv successfully. (3 rooms ready)',
    '[FILE] Loaded data_lecturers.csv successfully. (3 lecturers ready)',
    '[FILE] Loaded data_students.csv successfully. (2 student groups ready)',
    '[HEURISTIC] Evaluating constraint weights and degree matrix...',
    '[HEURISTIC] Pre-sorting modules using Maximum Constraint Density first: [System Design, Software Engineering]',
    '[CSP] Initializing Depth-First Search (DFS) with recursive backtracking solver...',
    '[CSP] Node 1: Placing "System Design" (GRP04, Thursday 9 AM, John Clare Lecture 6)...',
    '[CSP] Node 1: Checking hard constraints... Room check: PASS, Lecturer check: PASS, Group check: PASS.',
    '[CSP] Node 2: Placing "Software Engineering" (GRP05, Tuesday 2 PM, New Hall Lecture 8)...',
    '[CSP] Node 2: Checking hard constraints... Room check: PASS, Lecturer check: PASS, Group check: PASS.',
    '[SOLVED] Scheduling algorithm solved successfully! Conflict rate: 0.0%',
    '[BENCHMARK] Timetable solved in 12.42 milliseconds. Backtracking steps: 0.',
    '[FILE] Exporting complete schedule to timetable_export.csv... Done.'
  ];

  useEffect(() => {
    // Initial logs typing effect
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < initialLogs.length) {
        setConsoleLogs(prev => [...prev, initialLogs[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const runCSPBenchmark = () => {
    setIsSolving(true);
    setConsoleLogs([]);
    let lines = [
      '[SYS] Restarting CSP solver engine...',
      '[HEURISTIC] Recalculating slot weights...',
      '[CSP] Starting backtracking recursive scheduler...'
    ];

    if (hasConflict) {
      lines = [
        ...lines,
        '[CSP] Node 1: Placing "System Design" (GRP04, Thursday 9 AM, John Clare Room 6)... OK.',
        '[CSP] Node 2: Placing "Software Engineering" (GRP05, Tuesday 2 PM, New Hall Room 8)... OK.',
        '[CSP] Node 3: Placing "Database Systems" (GRP04, Thursday 9 AM, Newton Room 4)...',
        '[WARN] CLASH DETECTED: Lecturer Dr. Vishal is already booked on Thursday 9 AM for "System Design"!',
        '[CSP] Constraint Failed: Lecturer availability check (Dr. Vishal).',
        '[CSP] Backtracking from Node 3... Pruning branch.',
        '[CSP] Heuristic correction: Relocating "Database Systems" to Thursday 11 AM...',
        '[CSP] Node 3 (Alternate): Placing "Database Systems" (GRP04, Thursday 11 AM, Newton Room 4)...',
        '[CSP] Node 3 (Alternate): Checking constraints... Room check: PASS, Lecturer check: PASS, Group check: PASS.',
        '[SOLVED] Backtracking CSP scheduler resolved all conflicts! 100% Conflict-free.',
        '[BENCHMARK] Resolved in 38.15ms. Backtracking steps: 1.'
      ];
    } else {
      lines = [
        ...lines,
        '[CSP] Node 1: Placing "System Design" (GRP04, Thursday 9 AM, John Clare Room 6)... OK.',
        '[CSP] Node 2: Placing "Software Engineering" (GRP05, Tuesday 2 PM, New Hall Room 8)... OK.',
        '[SOLVED] Conflict-free schedule completed! No backtracking required.',
        '[BENCHMARK] Solved in 12.42ms. Backtracking steps: 0.'
      ];
    }

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setConsoleLogs(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        setIsSolving(false);
        clearInterval(interval);
      }
    }, 120);
  };

  const triggerConflictSimulation = () => {
    if (isSolving) return;
    const nextConflictState = !hasConflict;
    setHasConflict(nextConflictState);
    
    if (nextConflictState) {
      // Inject conflict
      setTimetableData(conflictTimetableData);
      setActiveTab('console');
      setConsoleLogs(prev => [
        ...prev,
        '',
        '[SIMULATOR] --- SIMULATING SCHEDULING CONFLICT ---',
        '[SIMULATOR] Injected clashing module "Database Systems" assigned to Dr. Vishal on Thursday 9 AM.',
        '[SIMULATOR] Room selected: Newton Lecture 4. Student Group: GRP04.',
        '[SIMULATOR] Note: Thursday 9 AM is already occupied by Dr. Vishal for "System Design" (GRP04) in John Clare 6.',
        '[SIMULATOR] Please trigger "Run Solver" to see the Backtracking engine detect and prune this clash!',
        ''
      ]);
    } else {
      // Restore clean
      setTimetableData(baseTimetableData);
      setActiveTab('dashboard');
      setConsoleLogs(prev => [
        ...prev,
        '',
        '[SIMULATOR] Resetting to normal optimized state. Dynamic conflicts cleared.',
        ''
      ]);
    }
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

  // Filtered timetable for calendar view
  const filteredTimetable = timetableData.filter(item => {
    if (selectedGroup === 'ALL') return true;
    return item.group === selectedGroup;
  });

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden font-sans text-white my-12">
      {/* Title bar resembling macOS/Windows window */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
          </div>
          <span className="text-xs uppercase tracking-widest text-white/50 font-bold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#ff3d00]" /> NTU_Timetable_Solver.exe — C++ Native GUI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
            hasConflict 
              ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' 
              : 'border-green-500/30 bg-green-500/10 text-green-400'
          }`}>
            {hasConflict ? 'Conflict Injected' : 'Status: Optimal'}
          </span>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Navigation Sidebar */}
        <div className="w-full md:w-64 border-r border-white/5 bg-black/20 flex flex-col justify-between">
          <div className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-[#ff3d00] text-black shadow-lg shadow-[#ff3d00]/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Engine Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'calendar' 
                  ? 'bg-[#ff3d00] text-black shadow-lg shadow-[#ff3d00]/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <CalendarIcon className="w-4 h-4" /> Weekly Schedule Grid
            </button>
            <button 
              onClick={() => setActiveTab('registry')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'registry' 
                  ? 'bg-[#ff3d00] text-black shadow-lg shadow-[#ff3d00]/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-4 h-4" /> Relational CSV Data
            </button>
            <button 
              onClick={() => setActiveTab('console')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'console' 
                  ? 'bg-[#ff3d00] text-black shadow-lg shadow-[#ff3d00]/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <TerminalIcon className="w-4 h-4" /> Backtracking Logs
            </button>
          </div>

          {/* Interactive controls */}
          <div className="p-4 border-t border-white/5 space-y-3 bg-black/40">
            <button
              onClick={runCSPBenchmark}
              disabled={isSolving}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-black" /> {isSolving ? 'Solving CSP...' : 'Run CSP Solver'}
            </button>
            <button
              onClick={triggerConflictSimulation}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all active:scale-[0.98] ${
                hasConflict 
                  ? 'border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20' 
                  : 'border-white/10 hover:bg-white/5 text-white/70'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              {hasConflict ? 'Clear Conflict' : 'Inject Conflict Clash'}
            </button>
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* TAB: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5 text-[#ff3d00]" /> C++ Engine Analytics
                </h3>
                <p className="text-xs text-white/50">Real-time scheduling performance benchmark metrics</p>
              </div>

              {/* Quick Stat Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Execution Speed</span>
                  <div className="text-3xl font-black text-[#ff3d00] tracking-tight">{hasConflict ? '38.15ms' : '12.42ms'}</div>
                  <span className="text-[10px] text-white/50 block mt-2">Native pre-sorting CSP</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Constraint Conflicts</span>
                  <div className={`text-3xl font-black tracking-tight ${hasConflict ? 'text-yellow-400' : 'text-green-400'}`}>
                    {hasConflict ? '1 Clash' : '0 Clashes'}
                  </div>
                  <span className="text-[10px] text-white/50 block mt-2">No Room/Lecturer overlap</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Backtrack Depth</span>
                  <div className="text-3xl font-black text-cyan-400 tracking-tight">{hasConflict ? 'Node 3 (1 step)' : '0 steps'}</div>
                  <span className="text-[10px] text-white/50 block mt-2">DFS recursion matrix</span>
                </div>
              </div>

              {/* Explanatory details */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 space-y-4">
                <h4 className="font-bold text-sm text-[#ff3d00] flex items-center gap-2">
                  <Info className="w-4 h-4" /> C++ Scheduling Logic Heuristics
                </h4>
                <div className="space-y-3 text-xs leading-relaxed text-white/70">
                  <p>
                    The <strong>NTU Academic Timetabling System</strong> is built entirely in C++ to leverage high-speed in-memory structures and direct file stream efficiency. The scheduler models course scheduling as a <strong>Constraint Satisfaction Problem (CSP)</strong>.
                  </p>
                  <p>
                    Rather than a naive brute-force loop, the core algorithm uses <strong>Recursive Backtracking with Constraint Propagation</strong>. Hard constraints (no lecturer or classroom over-allocations) act as pruning rules to instantly discard unviable scheduler branches.
                  </p>
                  <p>
                    To optimize efficiency, a <strong>Maximum Constraint Heuristic</strong> evaluates highly restricted modules first (like large group lectures and lecturers with narrow schedules). This pre-sorting drops recursion depth, solving university schedules in polynomial time!
                  </p>
                </div>
              </div>

              {/* Simple active constraint table */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
                <div className="px-5 py-3 border-b border-white/5 bg-white/5 text-xs font-bold text-white/50 uppercase tracking-wider">
                  Hard Constraints Enforced
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span><strong>No Teacher Overlap:</strong> A lecturer cannot teach two modules at the same hour.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span><strong>No Classroom Overlap:</strong> A room cannot house two separate modules at the same time.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span><strong>Group Availability:</strong> A student group cannot have two classes scheduled concurrently.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span><strong>Classroom Capacity:</strong> Student group sizes must fit within the maximum room seat capacity.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: CALENDAR WEEK GRID */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-[#ff3d00]" /> Dynamic Weekly Calendar
                  </h3>
                  <p className="text-xs text-white/50">Filter timetable exports by student group</p>
                </div>
                
                {/* Filters */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Group:</span>
                  <select 
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className="bg-neutral-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-[#ff3d00]"
                  >
                    <option value="ALL">All Groups (GRP04 & GRP05)</option>
                    <option value="GRP04">GRP04 Only</option>
                    <option value="GRP05">GRP05 Only</option>
                  </select>
                </div>
              </div>

              {/* The Grid */}
              <div className="border border-white/10 rounded-2xl overflow-x-auto bg-black/40">
                <div className="min-w-[650px]">
                  {/* Grid Headers (Days) */}
                  <div className="grid grid-cols-6 border-b border-white/5 bg-white/5 text-center text-xs font-bold text-white/50 py-3 uppercase tracking-wider">
                    <div className="border-r border-white/5 text-left pl-4">Time</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                  </div>

                  {/* Grid Rows (Hours) */}
                  {timeSlots.map((time, timeIdx) => (
                    <div key={timeIdx} className="grid grid-cols-6 border-b border-white/5 last:border-0 text-center min-h-[70px] items-stretch">
                      {/* Time Column */}
                      <div className="border-r border-white/5 flex items-center justify-start pl-4 text-xs font-semibold text-white/40 bg-white/2">
                        {time}
                      </div>

                      {/* Day Columns */}
                      {daysOfWeek.map((day, dayIdx) => {
                        // Check if there is an item at this Day and Time
                        const items = filteredTimetable.filter(
                          item => item.day.trim() === day && item.time.trim() === time
                        );

                        return (
                          <div key={dayIdx} className="border-r border-white/5 last:border-0 p-1.5 flex flex-col justify-center min-h-[70px] relative group bg-white/1">
                            {items.map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedCard(item)}
                                className={`w-full p-2 rounded-xl border text-left flex flex-col justify-between text-[10px] leading-tight bg-gradient-to-br shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${item.color}`}
                              >
                                <div>
                                  <div className="font-extrabold truncate">{item.module}</div>
                                  <div className="opacity-80 truncate text-[9px] mt-0.5">{item.lecturer}</div>
                                </div>
                                <div className="flex items-center justify-between text-[8px] opacity-60 mt-1.5 font-semibold">
                                  <span className="truncate">{item.room.split(' ')[0]}</span>
                                  <span>{item.group}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] text-white/40 flex items-center gap-1.5 justify-end">
                <Info className="w-3.5 h-3.5 text-[#ff3d00]" /> Click on a timetable entry block to view constraint verification details.
              </div>

              {/* Selected Card Modal */}
              {selectedCard && (
                <div className="p-5 rounded-2xl border border-white/10 bg-neutral-950/90 space-y-4 shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-white/10 border border-white/15 rounded text-white/70">
                        {selectedCard.sessionType}
                      </span>
                      <h4 className="text-lg font-black text-white mt-1.5">{selectedCard.module}</h4>
                      <p className="text-xs text-white/60">{selectedCard.lecturer} — {selectedCard.room}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedCard(null)}
                      className="p-1 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="border-t border-white/5 pt-3 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-white/40 block mb-1 uppercase font-bold text-[9px] tracking-wider">Timeslot</span>
                      <p className="font-medium text-white">{selectedCard.day}s at {selectedCard.time} (Week {selectedCard.week})</p>
                    </div>
                    <div>
                      <span className="text-white/40 block mb-1 uppercase font-bold text-[9px] tracking-wider">Assigned Group</span>
                      <p className="font-medium text-white">{selectedCard.group} ({selectedCard.group === 'GRP04' ? '45' : '38'} Students)</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-xs space-y-2 text-green-300">
                    <div className="font-bold flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5" /> Constraint Satisfied
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-90">
                      The C++ optimizer successfully verified lecturer availability, room size capacity limit ({selectedCard.room.includes('Clare') ? '150 seats' : '100 seats'}), and student availability slots for this cell. 0 conflicts.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: DATABASE REGISTRY */}
          {activeTab === 'registry' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#ff3d00]" /> Relational CSV Tables
                </h3>
                <p className="text-xs text-white/50">Tabular database loaded dynamically by the C++ engine</p>
              </div>

              {/* Sub tabs representing CSVs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 text-center">
                  <FileText className="w-4 h-4 mx-auto mb-1 text-[#ff3d00]" />
                  <span className="text-[10px] font-bold block truncate">data_modules.csv</span>
                  <span className="text-[9px] text-white/40 block mt-0.5">3 rows loaded</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 text-center">
                  <FileText className="w-4 h-4 mx-auto mb-1 text-[#ff3d00]" />
                  <span className="text-[10px] font-bold block truncate">data_rooms.csv</span>
                  <span className="text-[9px] text-white/40 block mt-0.5">3 rows loaded</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 text-center">
                  <FileText className="w-4 h-4 mx-auto mb-1 text-[#ff3d00]" />
                  <span className="text-[10px] font-bold block truncate">data_lecturers.csv</span>
                  <span className="text-[9px] text-white/40 block mt-0.5">3 rows loaded</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 text-center">
                  <FileText className="w-4 h-4 mx-auto mb-1 text-[#ff3d00]" />
                  <span className="text-[10px] font-bold block truncate">data_students.csv</span>
                  <span className="text-[9px] text-white/40 block mt-0.5">2 rows loaded</span>
                </div>
              </div>

              {/* Mock loaded data display */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20 text-xs">
                <div className="px-5 py-3 border-b border-white/5 bg-white/5 font-bold text-white/60">
                  Room Data Registry (data_rooms.csv)
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 text-white/40 font-bold uppercase tracking-wider text-[9px]">
                      <th className="px-5 py-3">Room Number / Name</th>
                      <th className="px-5 py-3">Type</th>
                      <th className="px-5 py-3">Capacity</th>
                      <th className="px-5 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3 font-semibold text-white">John Clare Lecture 6</td>
                      <td className="px-5 py-3 text-white/70">Lecture Theatre</td>
                      <td className="px-5 py-3 text-[#ff3d00] font-bold">150 seats</td>
                      <td className="px-5 py-3 text-right"><span className="text-green-400 font-bold">Available</span></td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3 font-semibold text-white">New Hall Lecture 8</td>
                      <td className="px-5 py-3 text-white/70">Lecture Theatre</td>
                      <td className="px-5 py-3 text-[#ff3d00] font-bold">100 seats</td>
                      <td className="px-5 py-3 text-right"><span className="text-green-400 font-bold">Available</span></td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3 font-semibold text-white">Newton Lecture 4</td>
                      <td className="px-5 py-3 text-white/70">Lab / Seminar</td>
                      <td className="px-5 py-3 text-[#ff3d00] font-bold">40 seats</td>
                      <td className="px-5 py-3 text-right"><span className="text-cyan-400 font-bold">Sub-capacity</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20 text-xs">
                <div className="px-5 py-3 border-b border-white/5 bg-white/5 font-bold text-white/60">
                  Lecturer Core Index (data_lecturers.csv)
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 text-white/40 font-bold uppercase tracking-wider text-[9px]">
                      <th className="px-5 py-3">Lecturer Name</th>
                      <th className="px-5 py-3">Primary Module Expertise</th>
                      <th className="px-5 py-3 text-right">Weekly Load Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3 font-semibold text-white">Dr. Vishal</td>
                      <td className="px-5 py-3 text-white/70">System Design, Database Systems</td>
                      <td className="px-5 py-3 text-right text-white/70">12 hours</td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3 font-semibold text-white">Dr. Neil</td>
                      <td className="px-5 py-3 text-white/70">Software Engineering</td>
                      <td className="px-5 py-3 text-right text-white/70">12 hours</td>
                    </tr>
                    <tr className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3 font-semibold text-white">Dr. Sarah</td>
                      <td className="px-5 py-3 text-white/70">Object Oriented Programming</td>
                      <td className="px-5 py-3 text-right text-white/70">15 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: BACKTRACKING CONSOLE LOGS */}
          {activeTab === 'console' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    <TerminalIcon className="w-5 h-5 text-[#ff3d00]" /> C++ Scheduler Compiler Console
                  </h3>
                  <p className="text-xs text-white/50">Verbose standard output stream of backtracking operations</p>
                </div>
                <button
                  onClick={runCSPBenchmark}
                  disabled={isSolving}
                  className="px-3.5 py-1.5 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/5 hover:border-white/20 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3 fill-white" /> Run Solver
                </button>
              </div>

              {/* Glowing Linux/Windows Terminal View */}
              <div className="border border-white/10 rounded-2xl bg-black/80 p-5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border-l-4 border-l-[#ff3d00] relative group">
                <div className="absolute top-4 right-4 flex gap-1 items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[8px] font-mono tracking-widest">LIVE_ENGINE</span>
                </div>
                
                <div className="font-mono text-[11px] leading-relaxed space-y-1.5 max-h-[380px] overflow-y-auto">
                  {consoleLogs.map((log, idx) => {
                    let colorClass = 'text-white/60';
                    if (log.startsWith('[SYS]')) colorClass = 'text-[#ff3d00] font-bold';
                    else if (log.startsWith('[WARN]')) colorClass = 'text-yellow-400 font-extrabold';
                    else if (log.startsWith('[SOLVED]')) colorClass = 'text-green-400 font-black';
                    else if (log.startsWith('[FILE]')) colorClass = 'text-cyan-400';
                    else if (log.startsWith('[HEURISTIC]')) colorClass = 'text-purple-400';
                    else if (log.startsWith('[SIMULATOR]')) colorClass = 'text-white/30 italic font-sans';
                    
                    return (
                      <div key={idx} className={`${colorClass} flex items-start gap-1.5`}>
                        <ChevronRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" />
                        <span>{log}</span>
                      </div>
                    );
                  })}
                  {isSolving && (
                    <div className="flex gap-1.5 items-center mt-2 text-[#ff3d00] animate-pulse">
                      <span className="w-2 h-3.5 bg-[#ff3d00] block" />
                      <span className="font-bold text-[10px] uppercase tracking-wider font-sans">Computing DFS optimization nodes...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
