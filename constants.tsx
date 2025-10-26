
import React from 'react';
import { InfluenceTypeId, Question, InfluenceTypeInfo, AnswerOption } from './types';

const IconA: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 10 L10 50 L42 90 Z" fill="currentColor"/>
    <path d="M58 10 L90 50 L58 90 Z" fill="currentColor"/>
    <rect x="46" y="5" width="8" height="90" fill="#111827"/>
  </svg>
);

const IconB: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L61.8 38.2 L98.1 38.2 L68.1 58.8 L79.9 91 L50 70.4 L20.1 91 L31.9 58.8 L1.9 38.2 L38.2 38.2 Z" fill="currentColor"/>
    <rect x="46" y="0" width="8" height="100" fill="#111827"/>
  </svg>
);

const IconC: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="32" height="35" fill="currentColor"/>
    <rect x="58" y="10" width="32" height="35" fill="currentColor"/>
    <rect x="10" y="55" width="32" height="35" fill="currentColor"/>
    <rect x="58" y="55" width="32" height="35" fill="currentColor"/>
    <rect x="46" y="0" width="8" height="100" fill="#111827"/>
    <rect x="0" y="47.5" width="100" height="5" fill="#111827"/>
  </svg>
);

const IconD: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L10 90 L90 90 Z" fill="currentColor"/>
    <rect x="46" y="5" width="8" height="95" fill="#111827"/>
  </svg>
);

const IconE: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 H42 V70 L26 90 L10 70 V10 Z" fill="currentColor"/>
    <path d="M58 10 H90 V70 L74 90 L58 70 V10 Z" fill="currentColor"/>
    <rect x="46" y="5" width="8" height="95" fill="#111827"/>
  </svg>
);

const IconF: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="14" fill="currentColor"/>
    <circle cx="72" cy="28" r="14" fill="currentColor"/>
    <circle cx="28" cy="72" r="14" fill="currentColor"/>
    <circle cx="72" cy="72" r="14" fill="currentColor"/>
    <rect x="28" y="24" width="44" height="8" fill="currentColor"/>
    <rect x="24" y="28" width="8" height="44" fill="currentColor"/>
    <rect x="68" y="28" width="8" height="44" fill="currentColor"/>
    <rect x="28" y="68" width="44" height="8" fill="currentColor"/>
    <rect x="46" y="0" width="8" height="100" fill="#111827"/>
  </svg>
);

interface QuestionDetail {
  text: string;
  example: string;
}

const questionsData: { typeId: InfluenceTypeId, strengths: QuestionDetail[], weaknesses: QuestionDetail[] }[] = [
  { 
    typeId: InfluenceTypeId.A, 
    strengths: [
      { text: 'I recalibrate the situation when the direction feels unfocused', example: "In a meeting that's going in circles, I'll say, 'Let's pause and redefine our main objective here.'" },
      { text: 'I initiate movement rather than wait for external momentum', example: "Instead of waiting for approval, I'll start a small-scale prototype to demonstrate the concept's value." },
      { text: 'I challenge avoidance when progress is stalled', example: "When the team is avoiding a tough decision, I'll put it on the table and facilitate the conversation." },
      { text: 'I assert structure when things become vague or inefficient', example: "If a project lacks clear roles, I'll propose a structure and define responsibilities for everyone." },
      { text: 'My focused intention can sculpt reality and bring about desired outcomes', example: "By consistently communicating my vision, I was able to get a cross-functional team aligned on a difficult project." },
      { text: 'I monitor the environment to ensure it aligns with my intended direction', example: "I regularly check in on key metrics and team morale to make sure we're still on the right trajectory." }
    ], 
    weaknesses: [
      { text: 'I can be so focused on my vision that I overlook valuable input from others', example: "I was so certain about my approach that I didn't fully listen to a teammate's valid concerns until it was too late." },
      { text: 'In conflict, my instinct is to increase my directional push', example: "When faced with resistance, my immediate reaction is to double down on my position instead of seeking compromise." },
      { text: 'My drive to push outcomes can create pressure on those around me', example: "I've been told that my intensity about deadlines can sometimes stress out the team." },
      { text: 'I tend to engage deeply only with people who demonstrate tangible capability', example: "I realize I spend most of my time with the 'A-players' and might be neglecting to develop others." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.B, 
    strengths: [
      { text: 'I am highly attuned to subtle shifts in tone, mood, or atmosphere', example: "I walked into the office and immediately sensed the tension, even though everyone was acting normal." },
      { text: 'I feel a strong need to understand the "why" behind someone\'s behavior', example: "Instead of getting upset at a colleague's comment, I try to understand what experience or fear might be driving it." },
      { text: 'I constantly track whether a situation aligns with my personal values', example: "I turned down a project because, while profitable, it didn't feel ethically right to me." },
      { text: 'I detach and recenter myself when overwhelmed instead of reacting immediately', example: "During a heated argument, I said 'I need a moment' and stepped away to think before responding." },
      { text: 'I hold back my own expression until I feel I fully understand what is happening emotionally', example: "I listened to a friend vent for an hour, asking questions to understand, before offering any advice or sharing my own feelings." },
      { text: 'My engagement with others is based on a feeling of authentic vibration and emotional safety', example: "I can't maintain a friendship that feels fake; I need to know the connection is genuine." }
    ], 
    weaknesses: [
      { text: 'When emotionally overstimulated, my first instinct is to withdraw to reset', example: "After a long, intense social event, I need a full day alone to feel like myself again." },
      { text: 'I can "disappear" socially when I need to protect my inner clarity', example: "Friends know that I sometimes go offline for a few days without explanation to recharge." },
      { text: 'My need to re-center on my values can cause me to disengage sharply from conflicts', example: "If an argument becomes about winning instead of understanding, I just shut down and walk away." },
      { text: 'I go quiet and reserved when a situation violates my internal standards', example: "During a meeting where a decision felt wrong, I stopped contributing and just observed." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.C, 
    strengths: [
      { text: 'I am always looking for the underlying structure or pattern beneath what is immediately visible', example: "While others saw a sales dip, I saw a pattern connected to our recent marketing shift." },
      { text: 'I have a knack for combining separate, disparate concepts into a single coherent framework', example: "I was able to connect the engineering team's goals with the marketing team's strategy in a way that made sense to both." },
      { text: 'I prioritize depth and internal logic over scattered, superficial information', example: "I'd rather read one well-researched book on a topic than skim a dozen articles." },
      { text: 'I maintain a sense of internal conceptual order, even in highly complex or ambiguous situations', example: "Even when a project is chaotic, I keep a clear mental map of how all the pieces should connect." },
      { text: 'I evaluate new ideas based on how well they fit into the broader systems I am mentally constructing', example: "When someone suggests a new feature, my first thought is how it impacts the entire user experience, not just its standalone value." },
      { text: 'When presented with new data, my first instinct is to see how it requires me to update my existing mental frameworks', example: "After reading a surprising study, I spent the afternoon rethinking my assumptions on the topic." }
    ], 
    weaknesses: [
      { text: 'I can appear detached in social contexts because I am often gathering data and observing', example: "I was quiet during dinner, not because I was bored, but because I was fascinated by the group's dynamics." },
      { text: 'I take a long time to finalize conclusions because I am busy aligning multiple layers of meaning', example: "My team gets frustrated because I won't sign off on a plan until I'm sure I've considered every angle." },
      { text: 'My need for information to "fit" my mental models can make me appear overly analytical or skeptical', example: "I'm often the one asking 'But how does that connect to...?' which can slow down brainstorming sessions." },
      { text: 'I prefer intellectual exploration, which can make me seem disengaged in more conventional social conversations', example: "I have a hard time with small talk because my mind is always looking for a deeper pattern to discuss." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.D, 
    strengths: [
      { text: 'I naturally shift my approach and tone based on how others are reacting', example: "I noticed the audience was losing focus, so I changed my presentation style to be more interactive and engaging." },
      { text: 'I enjoy creating movement and liveliness in group settings', example: "If a party feels dull, I'm the one who'll suggest a game or put on music to get things going." },
      { text: 'I feel a sense of responsibility for maintaining momentum and engagement during interactions', example: "In a conversation, I actively work to prevent awkward silences and keep the energy flowing." },
      { text: 'I prefer dynamic environments where the tone and mood can shift freely and spontaneously', example: "I thrive in brainstorming sessions where ideas are flowing fast and the energy is high." },
      { text: 'My actions are often grounded and practical, focused on the immediate situation', example: "Instead of debating theory, I'd rather build a quick prototype to see if the idea actually works in practice." }
    ], 
    weaknesses: [
      { text: 'I sometimes test people\'s reactions without explicitly stating my intentions', example: "I might make a provocative comment just to see how someone will respond." },
      { text: 'I have a tendency to test boundaries out of curiosity rather than for a specific purpose', example: "I asked a question in a meeting that I knew would make things a bit uncomfortable, just to see what would happen." },
      { text: 'In conflict, I\'m more likely to deflect by shifting the tone or creating a distraction', example: "When a conversation got too heated, I made a joke to break the tension instead of addressing the issue directly." },
      { text: 'My focus on adapting to the moment can mean I avoid long-term, abstract planning', example: "I'm great at improvising, but I struggle to create and stick to a detailed five-year plan." },
      { text: 'I sometimes intentionally shift the atmosphere of a room just to see how others will adapt', example: "I once played somber music at a cheerful gathering to observe how the mood would change." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.E, 
    strengths: [
      { text: 'I\'m very selective about where I invest my energy, focusing only on what I feel is truly worth it', example: "I declined a meeting invitation because I assessed that my input wasn't essential and my time was better spent elsewhere." },
      { text: 'I have a default tendency to conserve my emotional energy', example: "I don't get worked up about minor issues; I save my energy for the things that truly matter." },
      { text: 'I prefer to let things resolve on their own without my interference or control', example: "Two colleagues were in a minor disagreement, and I chose to let them work it out themselves rather than stepping in." },
      { text: 'I often observe a situation for a while before committing any emotional investment', example: "I'll listen to the whole debate before I decide where I stand and speak up." },
      { text: 'I naturally step back from situations that feel scattered, chaotic, or inefficient', example: "The project planning was all over the place, so I stepped back until there was a clearer direction." },
      { text: 'I stay involved in a project or discussion only as long as the outcome genuinely matters to me', example: "Once I realized the decision wouldn't affect my work, I stopped participating in the lengthy debate." }
    ], 
    weaknesses: [
      { text: 'My selective engagement can be mistaken for apathy or a lack of caring', example: "A coworker thought I didn't care about the project, but I was just waiting for a moment where my contribution would be most effective." },
      { text: 'I tend to avoid involvement in issues unless they directly affect me or my core interests', example: "I didn't join the committee to plan the office party because it just didn't feel like a good use of my time." },
      { text: 'In conflict, my instinct is to shut down my investment entirely to conserve energy', example: "When an argument started getting heated and unproductive, I just emotionally checked out." },
      { text: 'I am more comfortable on a stable, conventional path and require something meaningful to interrupt my pattern', example: "I've been in the same job for years; it would take a really special opportunity for me to consider leaving." }
    ] 
  },
  { 
    typeId: InfluenceTypeId.F, 
    strengths: [
      { text: 'I\'m adept at maintaining my own pacing rather than letting others dictate the tempo', example: "When everyone is rushing, I intentionally slow down to ensure the quality of my work is not compromised." },
      { text: 'In chaotic situations, my first instinct is to restore coherence and stability', example: "During a crisis at work, I focused on creating a clear, step-by-step plan to get everyone on the same page." },
      { text: 'I manage control by adjusting the tempo of a situation, rather than by using direct force', example: "Instead of demanding a change, I gradually introduced new processes over time to let the team adapt comfortably." },
      { text: 'I\'m able to switch between patience and assertiveness depending on what the context requires', example: "I was patient while my team was learning a new skill, but became assertive when the final deadline was approaching." },
      { text: 'I often work to stabilize an environment before trying to address the root cause of a problem', example: "I first calmed everyone down after a heated argument, before we tried to discuss what the core issue was." },
      { text: 'I preserve a strong internal sense of order, even when my external environment is disorganized', example: "Even if my desk is messy, my digital files and internal thought processes are meticulously organized." },
      { text: 'My foresight comes from understanding how past choices shape the present and future', example: "I advised against a risky shortcut because I've seen similar decisions lead to long-term problems in the past." }
    ], 
    weaknesses: [
      { text: 'I get easily irritated when the pacing of a project or conversation becomes disorganized', example: "It visibly frustrates me when a meeting has no clear agenda and people keep going off-topic." },
      { text: 'My need to maintain order can make me "snap" if disorder persists for too long', example: "After weeks of a chaotic workflow, I finally had to insist, 'We are going to follow the process, no exceptions!'" },
      { text: 'I feel a subtle friction or irritation when encountering perspectives that challenge my established way of seeing things', example: "I found myself mentally arguing with a presenter whose ideas fundamentally contradicted my own well-established beliefs." },
      { text: 'My responses are deliberate and calibrated, which can make me seem distant while I\'m processing', example: "Someone asked for my opinion, and my long pause to think made them think I was uninterested." },
      { text: 'I tend to grant my attention primarily to people who have proven themselves to be consistent and reliable', example: "I'm hesitant to collaborate with a new colleague until I've seen that their work is dependable." }
    ] 
  },
];

const extractedText = questionsData.reduce((acc, curr) => {
    acc[curr.typeId] = {
        strengths: curr.strengths.map(s => s.text),
        weaknesses: curr.weaknesses.map(w => w.text)
    };
    return acc;
}, {} as Record<InfluenceTypeId, {strengths: string[], weaknesses: string[]}>);


export const INFLUENCE_TYPES: InfluenceTypeInfo[] = [
  { 
    id: InfluenceTypeId.A, name: 'Imposition', title: 'Influence: Imposition', 
    description: 'Drives direction by adjusting internal and external models to push transformation in chosen outcomes.',
    longDescription: 'Those who understand that reality is not fixed but malleable to conscious will. They perceive the invisible architecture of power and energy in every situation, and their fundamental drive is to sculpt reality through focused intention and structural intelligence. These individuals often present a reserved or measured exterior, but the restraint is intentional. Their influence does not rely on volume or social presence; it comes from internal direction and clarity of intent. They tend to construct their own trajectory rather than adapt to external expectations.', 
    friendships: 'They engage deeply with those who demonstrate substantive character and tangible capability. Their conversations are investments in individuals who possess both inner depth and external competence, seeing others as potential collaborators in their visionary projects.',
    examples: '"Let\'s reframe this to get back on track." "We can\'t stall here, a decision needs to be made." "I need to think, then I will act."',
    strengths: extractedText.A.strengths,
    weaknesses: extractedText.A.weaknesses,
    color: 'bg-red-900/40 border-red-700', textColor: 'text-red-400', icon: IconA 
  },
  { 
    id: InfluenceTypeId.B, name: 'Impassioned', title: 'Influence: Impassioned', 
    description: 'Seeks interpersonal coherence and emotional context, withdraws to recenter values when overwhelmed.',
    longDescription: 'Those who navigate the world through profound emotional resonance. They perceive the subtle currents of feeling and authenticity that flow beneath surface interactions, and their power lies in creating spaces of genuine connection. Their intelligence operates through intuitive social sensing. They perceive interpersonal dynamics and moral structures as ongoing patterns. Their emotional expression is integrated with reasoning, and they read tone, implication, and relational gravity quickly, often without conscious effort.',
    friendships: 'They maintain contact based on intuitive standards of emotional safety and authentic vibration. Their engagement is a careful calibration - they withdraw from what feels dissonant and deepen connections with those who demonstrate respectful understanding.',
    examples: '"I\'m tracking the tone here more than the words." "I need to withdraw to get clear on my values." "I need to understand why they feel that way."',
    strengths: extractedText.B.strengths,
    weaknesses: extractedText.B.weaknesses,
    color: 'bg-purple-900/40 border-purple-700', textColor: 'text-purple-400', icon: IconB 
  },
  { 
    id: InfluenceTypeId.C, name: 'Integrative', title: 'Influence: Integrative', 
    description: 'Synthesizes intellectual and emotional data for layered understanding and long-range insight.',
    longDescription: 'Those who see the hidden patterns connecting disparate systems of thought and being. Their consciousness operates as a synthesizing force, finding coherence in complexity and building bridges between seemingly separate realms of understanding. For this type, knowledge is absorbed to be reorganized, cross-referenced, and synthesized. Their curiosity is driven by structural understanding, not novelty. They create internal systems of meaning—frameworks that connect concepts across domains, forming a coherent cognitive architecture.', 
    friendships: 'They are drawn to minds capable of authentic intellectual exploration and reflective depth. Their conversations become laboratories for thought, valuing the process of connecting ideas over mere social convention or superficial exchange.',
    examples: '"This pattern reminds me of a concept from a totally different field." "I need more time, the pieces don\'t fit together yet." "Let\'s look at the underlying structure here."',
    strengths: extractedText.C.strengths,
    weaknesses: extractedText.C.weaknesses,
    color: 'bg-blue-900/40 border-blue-700', textColor: 'text-blue-400', icon: IconC 
  },
  { 
    id: InfluenceTypeId.D, name: 'Indulgence', title: 'Influence: Indulgence', 
    description: 'Stimulates environments and tracks reactions to generate shared engagement or momentum.',
    longDescription: 'Those who master the art of presence and find profound meaning in momentary experience. They possess broad cognitive flexibility and can move across topics, interests, and environments smoothly. They adapt quickly because they understand multiple perspectives well enough to operate functionally in each. Their decisive movement often emerges in the physical or immediate domain rather than in abstract planning. They excel in environments where versatility and responsiveness are more valuable than depth in a single specialization.',
    friendships: 'They communicate through the quality of presence itself, equally comfortable with deep philosophical exploration and light spontaneous exchange. Their interactions are dances in the immediate moment, valuing genuine connection over predetermined formats.',
    examples: '"Let\'s try something just to see what happens." "I\'m just trying to get some energy going in the room." "Their reaction told me everything I need to know."',
    strengths: extractedText.D.strengths,
    weaknesses: extractedText.D.weaknesses,
    color: 'bg-yellow-900/40 border-yellow-700', textColor: 'text-yellow-400', icon: IconD 
  },
  { 
    id: InfluenceTypeId.E, name: 'Indifference', title: 'Influence: Indifference', 
    description: 'Conserves energy by detaching from outcomes and allowing systems to self-sort.',
    longDescription: 'Those who wield influence through strategic conservation and precise deployment of energy. They understand the power of stillness, creating impact through what they choose not to do as much as through their actions. This influence is defined by selective engagement. They evaluate whether connections, ideas, or tasks are worth investment before committing any energy. This can look like apathy, but it is often an efficiency strategy rooted in conserving effort for what genuinely aligns. They move along a stable path unless something meaningful interrupts their pattern.',
    friendships: 'Their engagement is highly selective, reserved for topics and people that resonate with their core interests on a fundamental level. They communicate through meaningful silence as much as speech, creating spaces where what isn\'t said holds as much weight as what is.',
    examples: '"This will likely resolve itself without my input." "I\'m conserving my energy for a more important issue." "My involvement here won\'t change the outcome."',
    strengths: extractedText.E.strengths,
    weaknesses: extractedText.E.weaknesses,
    color: 'bg-green-900/40 border-green-700', textColor: 'text-green-400', icon: IconE 
  },
  { 
    id: InfluenceTypeId.F, name: 'Inplaced', title: 'Influence: Inplaced', 
    description: 'Maintains controlled progression and stability, shifts pace (slow or forceful) to preserve coherence.',
    longDescription: 'Those who shape their environment through the power of being firmly, reliably, and correctly positioned. Their influence comes from the unwavering certainty of their presence. They are the stabilizing nodes in the network of life, creating order simply by embodying a consistent role. This type demonstrates stability developed from an internal understanding of temporal contexts. They recognize how past choices shape present conditions and how present actions open or close future paths. This gives them reliable foresight and timing.',
    friendships: 'They engage through a framework of demonstrated reliability and easy resonance. Their attention is granted to those who prove themselves consistent and relatable. While open to intriguing qualities in others, they experience a subtle friction when encountering perspectives that challenge their deeply-rooted systems of understanding.',
    examples: '"Let\'s slow down and get this right." "The current pace is unsustainable; we need to restore order." "My position on this is consistent."',
    strengths: extractedText.F.strengths,
    weaknesses: extractedText.F.weaknesses,
    color: 'bg-cyan-900/40 border-cyan-700', textColor: 'text-cyan-400', icon: IconF 
  },
];

let questionIdCounter = 0;
export const ALL_QUESTIONS: Question[] = questionsData.flatMap(({ typeId, strengths, weaknesses }) => 
  [...strengths, ...weaknesses].map(q => ({
    id: questionIdCounter++,
    text: q.text,
    example: q.example,
    typeId: typeId,
  }))
);


export const ANSWER_OPTIONS: AnswerOption[] = [
    { text: "Definitely not", score: -3, color: 'bg-red-700', hex: '#b91c1c' },
    { text: "No", score: -2, color: 'bg-red-500', hex: '#ef4444' },
    { text: "Maybe not", score: -1, color: 'bg-orange-500', hex: '#f97316' },
    { text: "Neutral", score: 0, color: 'bg-gray-500', hex: '#6b7280' },
    { text: "Maybe", score: 1, color: 'bg-yellow-500', hex: '#eab308' },
    { text: "Yes", score: 2, color: 'bg-green-500', hex: '#22c55e' },
    { text: "Absolutely", score: 3, color: 'bg-emerald-500', hex: '#10b981' },
];