'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

interface NodeProps {
  label: string;
  sub?: string;
  icon: string;
  color: string;
  index: number;
}

function Node({ label, sub, icon, color, index }: NodeProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex flex-col items-center text-center gap-1"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
        style={{ backgroundColor: `${color}20`, border: `1.5px solid ${color}60` }}
      >
        {icon}
      </div>
      <p className="text-white font-semibold text-xs leading-tight mt-1 max-w-[80px]">{label}</p>
      {sub && <p className="text-white/40 text-[10px] leading-tight max-w-[80px]">{sub}</p>}
    </motion.div>
  );
}

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className={`flex items-center justify-center ${vertical ? 'flex-col' : 'flex-row'}`}>
      <div
        className={`bg-white/20 ${vertical ? 'w-px h-6' : 'h-px w-6'}`}
      />
      <span className="text-white/30 text-xs leading-none">
        {vertical ? '▼' : '▶'}
      </span>
    </div>
  );
}

interface StepBadgeProps {
  num: number;
  label: string;
  index: number;
}

function StepBadge({ num, label, index }: StepBadgeProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-[10px] shrink-0">
        {num}
      </div>
      <p className="text-white/70 text-xs">{label}</p>
    </motion.div>
  );
}

export function RagPipelineDiagram({ accent = '#d4af37' }: { accent?: string }) {
  return (
    <section className="mb-32">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4"
          style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}40`, color: accent }}
        >
          <span>🔁</span> RAG Pipeline Architecture
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Zero-Hallucination AI Architecture
        </h2>
        <p className="text-white/50 text-base max-w-2xl">
          An 8-step retrieval-augmented generation pipeline that grounds every AI response in verified product data — eliminating hallucinations in safety-critical sales conversations.
        </p>
      </motion.div>

      {/* Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1410 100%)' }}
      >
        <div className="p-8 md:p-12">

          {/* Top Label */}
          <div className="flex items-center justify-center mb-10">
            <div
              className="px-6 py-2 rounded-full font-black text-sm uppercase tracking-[0.3em]"
              style={{ backgroundColor: `${accent}20`, border: `2px solid ${accent}`, color: accent }}
            >
              RAG Pipeline — TRUKBK AI Sales Concierge
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN — Query Flow */}
            <div className="space-y-4">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-4">Query Flow</p>

              <Node index={0} icon="🧑" label="Customer" sub="Asks about product specs & price" color="#60a5fa" />
              <Arrow vertical />
              <Node index={1} icon="💻" label="TRUKBK Interface" sub="React · Tailwind · Vite" color="#34d399" />
              <Arrow vertical />
              <Node index={2} icon="🔍" label="Query Embedder" sub="Real-time vectorization" color={accent} />
              <Arrow vertical />
              <div
                className="rounded-2xl p-4 border text-center"
                style={{ backgroundColor: `${accent}10`, borderColor: `${accent}40` }}
              >
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Step 3</p>
                <p className="text-white font-bold text-sm">Vectorized Query</p>
                <p className="text-white/50 text-[11px] mt-1">High-dimensional embedding sent to vector DB</p>
              </div>
            </div>

            {/* CENTRE COLUMN — Semantic Search + Generation */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-4">Semantic Search & Generation</p>

              {/* Cosine Similarity Diamond */}
              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="w-full"
              >
                <div
                  className="mx-auto w-36 h-36 flex items-center justify-center text-center rounded-2xl rotate-45 shadow-xl"
                  style={{ backgroundColor: `${accent}20`, border: `2px solid ${accent}` }}
                >
                  <div className="-rotate-45">
                    <div className="text-2xl mb-1">📐</div>
                    <p className="text-white font-bold text-[11px] leading-tight">Cosine Similarity</p>
                    <p className="text-white/50 text-[9px]">Semantic Search</p>
                  </div>
                </div>
              </motion.div>

              <Arrow vertical />

              {/* RAG Pipeline Box — CLEARLY HIGHLIGHTED */}
              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="w-full"
              >
                <div
                  className="rounded-2xl p-5 text-center shadow-2xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${accent}30, ${accent}10)`,
                    border: `2px solid ${accent}`,
                    boxShadow: `0 0 30px ${accent}30`,
                  }}
                >
                  {/* Glow pulse */}
                  <div
                    className="absolute inset-0 rounded-2xl animate-pulse opacity-10"
                    style={{ backgroundColor: accent }}
                  />
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">🔁</div>
                    <p
                      className="font-black text-base uppercase tracking-[0.2em] mb-1"
                      style={{ color: accent }}
                    >
                      RAG Pipeline
                    </p>
                    <p className="text-white/60 text-[11px]">Retrieval-Augmented Generation</p>
                  </div>
                </div>
              </motion.div>

              <Arrow vertical />

              <Node index={5} icon="🤖" label="Google Gemini 1.5 Flash" sub="LLM Response Generation" color="#a78bfa" />

              <Arrow vertical />

              {/* Steps legend */}
              <div className="w-full rounded-2xl p-4 border border-white/10 bg-white/5 space-y-2">
                <StepBadge num={6} label="Inject Query + Retrieved Context into Gemini prompt" index={6} />
                <StepBadge num={7} label="Generate zero-hallucination response from grounded context" index={7} />
                <StepBadge num={8} label="Deliver accurate specs & price back to customer" index={8} />
              </div>
            </div>

            {/* RIGHT COLUMN — Knowledge Base */}
            <div className="space-y-4">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-4">Knowledge Base</p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📄</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Product Specs & Pricing</p>
                    <p className="text-white/40 text-[11px]">Dimensions, Alloy Grades, Compatibility</p>
                  </div>
                </div>
                <Arrow vertical />
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚙️</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Chunking & Encoding</p>
                    <p className="text-white/40 text-[11px]">Documents split into semantic chunks</p>
                  </div>
                </div>
                <Arrow vertical />
                <div className="flex items-start gap-3">
                  <span className="text-xl">🧠</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Embedding Engine</p>
                    <p className="text-white/40 text-[11px]">Vectorization of knowledge chunks</p>
                  </div>
                </div>
                <Arrow vertical />
                <div className="flex items-start gap-3">
                  <span className="text-xl">🗄️</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Supabase pgvector</p>
                    <p className="text-white/40 text-[11px]">Vector Database — stores high-dimensional embeddings</p>
                  </div>
                </div>
                <Arrow vertical />
                <div
                  className="rounded-xl p-3 text-center text-xs font-bold uppercase tracking-widest"
                  style={{ backgroundColor: `${accent}15`, color: accent, border: `1px solid ${accent}40` }}
                >
                  Step 4 → Return Nearest Neighbors
                </div>
              </div>

              {/* Example query */}
              <motion.div
                custom={9}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl p-4 border border-white/10 bg-white/5"
              >
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Live Example</p>
                <p className="text-white/80 text-xs italic mb-2">
                  "Does the 1800mm tray fit a double-cab Ranger?"
                </p>
                <p className="text-[11px]" style={{ color: accent }}>
                  → AI retrieves exact spec: <strong>1600mm required for Ranger DC</strong>. Responds with verified data. No hallucination. ✅
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom flow summary */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
              {[
                { num: 1, label: 'Customer asks' },
                { num: 2, label: 'Forward query' },
                { num: 3, label: 'Vectorize' },
                { num: 4, label: 'Retrieve neighbors' },
                { num: 5, label: 'Return specs' },
                { num: 6, label: 'Inject context' },
                { num: 7, label: 'Generate response' },
                { num: 8, label: 'Deliver answer' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="px-3 py-1 rounded-full font-bold"
                    style={{ backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
                  >
                    {step.num}. {step.label}
                  </div>
                  {i < 7 && <span className="text-white/20">→</span>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
