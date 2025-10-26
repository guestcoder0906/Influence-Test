
import React, { useState } from 'react';
import { INFLUENCE_TYPES } from '../constants';

const frameworkData = {
    introduction: {
        p1: "This framework isn’t about “who you are” as a personality. It’s about how your presence moves in a room and tracks your influence and the way your energy interacts with other people and environments. It’s about how you affect your surroundings and others. These are influence states, not fixed identities. You don’t get “typed” and stay there; you shift depending on context, pressure, growth, and intentionality. Having more than one type is normal, and movement between types is expected. The point is to gain awareness of your influence pattern. It’s a guide for navigating social dynamics and recognizing ways you influence others."
    },
    coreTypes: [
        {
            name: "Imposition",
            title: "Influence Imposition",
            coreDescription: "Drives direction by adjusting internal and external models to push transformation in chosen outcomes.",
            d2: "These individuals often present a reserved or measured exterior, but the restraint is intentional. Their influence does not rely on volume or social presence; it comes from internal direction and clarity of intent. They tend to construct their own trajectory rather than adapt to external expectations. This self-determining stance naturally generates authority within groups, even when unspoken. Their “abundance” is not solely material—it's the consistent return of resources, opportunities, or support because they move with purpose and coherence. Some may appear more outwardly expressive, but the defining trait remains: they operate from an internal locus of control, shaping outcomes through vision anchored by action.",
            socialHabit: "They engage deeply with those who demonstrate substantive character and tangible capability. Their conversations are investments in individuals who possess both inner depth and external competence, seeing others as potential collaborators in their visionary projects."
        },
        {
            name: "Impassioned",
            title: "Influence Impassioned",
            coreDescription: "Seeks interpersonal coherence and emotional context, withdraws to recenter values when overwhelmed.",
            d2: "This type’s intelligence operates through intuitive social sensing. They do not rely on explicit theories or emotional dramatization; instead, they perceive interpersonal dynamics and moral structures as ongoing patterns. Their emotional expression is integrated with reasoning rather than separate from it. They read tone, implication, and relational gravity quickly, often without conscious effort. Their energy feels unified because their internal values and external interactions are aligned. They process the environment as a living network of signals—responding based on resonance, ethics, and underlying relational stability rather than reaction or impulse.",
            socialHabit: "They maintain contact based on intuitive standards of emotional safety and authentic vibration. Their engagement is a careful calibration - they withdraw from what feels dissonant and deepen connections with those who demonstrate respectful understanding."
        },
        {
            name: "Integrative",
            title: "Influence Integrative",
            coreDescription: "Synthesizes intellectual and emotional data for layered understanding and long-range insight.",
            d2: "For this type, knowledge is not collected for prestige or accumulation. It is absorbed to be reorganized, cross-referenced, and synthesized. Their curiosity is driven by structural understanding, not novelty. They create internal systems of meaning—frameworks that connect concepts across domains, forming a coherent cognitive architecture. This often leads to analytical or skeptical thinking, not out of contrarianism, but because information must “fit” logically within their constructed models. In social contexts, they may appear detached or selectively engaged, using observation as a method of data gathering rather than emotional withdrawal. Their influence is quiet but precise.",
            socialHabit: "They are drawn to minds capable of authentic intellectual exploration and reflective depth. Their conversations become laboratories for thought, valuing the process of connecting ideas over mere social convention or superficial exchange."
        },
        {
            name: "Indulgence",
            title: "Influence Indulgence",
            coreDescription: "Stimulates environments and tracks reactions to generate shared engagement or momentum.",
            d2: "These individuals possess broad cognitive flexibility and can move across topics, interests, and environments smoothly. They adapt quickly because they understand multiple perspectives well enough to operate functionally in each. This makes them appear like generalists or “jack of all trades” types. However, their decisive movement often emerges in the physical or immediate domain rather than in abstract planning. Their thinking holds multiple dimensions, yet when they choose to act, it is usually grounded and practical. They excel in environments where versatility and responsiveness are more valuable than depth in a single specialization.",
            socialHabit: "They communicate through the quality of presence itself, equally comfortable with deep philosophical exploration and light spontaneous exchange. Their interactions are dances in the immediate moment, valuing genuine connection over predetermined formats."
        },
        {
            name: "Indifference",
            title: "Influence Indifference",
            coreDescription: "Conserves energy by detaching from outcomes and allowing systems to self-sort.",
            d2: "This influence is defined by selective engagement. They evaluate whether connections, ideas, or tasks are worth investment before committing any energy. This can look like apathy, but it is often an efficiency strategy rooted in conserving effort for what genuinely aligns. They do not feel compelled to define or chase a personal “destiny” in the way some other types do. Instead, they move along a stable and often socially conventional path unless something meaningful interrupts their pattern. In many situations, they resemble the Indulgence type—simply present, observing, and participating at a comfortable distance, without urgency or expectation.",
            socialHabit: "Their engagement is highly selective, reserved for topics and people that resonate with their core interests on a fundamental level. They communicate through meaningful silence as much as speech, creating spaces where what isn't said holds as much weight as what is."
        },
        {
            name: "Inplaced",
            title: "Influence Inplaced",
            coreDescription: "Maintains controlled progression and stability, shifts pace (slow or forceful) to preserve coherence.",
            d2: "This type demonstrates stability developed from an internal understanding of temporal contexts. They recognize how past choices shape present conditions and how present actions open or close future paths. This gives them reliable foresight and timing. Their responses tend to be deliberate rather than reactive, which can make them appear momentarily distant when processing. However, this is not emotional detachment—it is recalibration. They are flexible within their structure and rarely overextend. Their presence often becomes grounding for others because they hold awareness of multiple timelines at once, maintaining continuity and direction without needing to assert control.",
            socialHabit: "They engage through a framework of demonstrated reliability and easy resonance. Their attention is granted to those who prove themselves consistent and relatable, operating within the organized architecture of their carefully maintained world. While they maintain an openness to intriguing qualities in others, they experience a subtle friction when encountering perspectives that challenge their deeply-rooted systems of understanding—a slight irritation at what disturbs their established order of things."
        }
    ],
    triggers: [
        { name: "Imposition", text: "Their influence activates when there is a clear need to reshape or direct the situation. The drive comes from an internal sense of purpose and the impulse to evolve reality according to their chosen trajectory." },
        { name: "Impassioned", text: "Their influence activates when relational clarity and interpersonal coherence are required. They read subtext, tone, and social gravity to maintain alignment between people. It’s not about feelings—it’s about understanding how people connect and what holds those connections together." },
        { name: "Integrative", text: "Their influence activates when there is complexity to decode or when multiple ideas need to be synthesized. They create internal structures of understanding that link emotional and intellectual information into a coherent model." },
        { name: "Indulgence", text: "Their influence activates when there is momentum or shared engagement in the environment. They influence through presence and adaptive interaction, shaping the collective atmosphere rather than directing it." },
        { name: "Indifference", text: "Their influence activates when energy must be conserved or when involvement offers no meaningful return. They understand the structure of the world well enough to withhold direction instead of forcing presence." },
        { name: "Inplaced", text: "Their influence activates when stability, continuity, or correct timing is required. They shape environments by holding their position with consistency, guiding outcomes through dependable presence rather than overt movement." },
    ],
    conflicts: [
        { name: "Imposition", text: "They carry a quiet weight. They assess both internal models and external signals, then adjust their stance accordingly. They can emotionally and logically re-evaluate a situation, update the model, and then amplify their direction. When they act, it is deliberate. Not loud. Just inevitable." },
        { name: "Impassioned", text: "They are interpersonal when invested, but can detach sharply as a self-preservation mechanism. When they detach, they evaluate things through a surprisingly rational frame rather than relational closeness. They return only after values are re-centered. The priority is: stabilize → understand → re-engage on their terms." },
        { name: "Integrative", text: "Stable in their values. They recognize contradictions and can merge perspectives without losing their internal axis. They don’t rush. They choose which influences to accept and which to discard. There is a slow but strong consolidation process. They preserve cohesion." },
        { name: "Indulgence", text: "Not “flexible” by nature, but they read reactions and context with adaptive interpretation. They analyze how things move before they place intent. Some variants use vague intuition, others use subtle probing. Their flexibility is contextual response, not identity fluidity." },
        { name: "Indifference", text: "Energy is sparse. They minimize output as protection. They detach to reduce friction and conserve stability. Flexibility appears because they don’t commit to any hard position unless forced. It looks apathetic, but it is simply resource rationing." },
        { name: "Inplaced", text: "Can be patient or impatient depending on what disrupts their pacing. They prefer to move at a controlled tempo. They self-moderate, either slowing interactions or enforcing direction. The aim is to maintain internal regulation. The behavior is unpredictable only in timing, not intention." }
    ]
};

type Tab = 'framework' | 'types' | 'triggers';

const TabButton: React.FC<{ label: string; tabName: Tab; activeTab: Tab; setActiveTab: (tab: Tab) => void }> = ({ label, tabName, activeTab, setActiveTab }) => {
    const isActive = activeTab === tabName;
    return (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`py-3 px-2 sm:px-6 text-base font-medium border-b-2 transition-colors duration-300 ${isActive
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200'
                }`}
        >
            {label}
        </button>
    );
};

const InfluenceFrameworkInfo: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('framework');

    return (
        <div className="w-full max-w-6xl mx-auto text-left">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
                Deep Dive into the Framework
            </h2>
            <div className="flex justify-center flex-wrap border-b border-gray-700 mb-8">
                <TabButton label="The Framework" tabName="framework" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabButton label="Core Types" tabName="types" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabButton label="Triggers & Conflicts" tabName="triggers" activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="prose prose-invert max-w-none text-gray-300 px-4 sm:px-0">
                {activeTab === 'framework' && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-300 mb-4 not-prose">What is the Influence Framework?</h3>
                            <p>{frameworkData.introduction.p1}</p>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center not-prose">The Six Influence Types</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
                                {INFLUENCE_TYPES.map(type => (
                                    <div key={type.id} className={`p-4 rounded-lg flex items-start gap-4 border transition-transform hover:scale-105 hover:shadow-lg ${type.color}`}>
                                        <type.icon className={`w-10 h-10 flex-shrink-0 ${type.textColor}`} />
                                        <div>
                                            <h4 className={`text-lg font-semibold ${type.textColor}`}>{type.name}</h4>
                                            <p className="text-sm text-gray-400 mt-1">{type.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'types' && (
                    <div className="space-y-10">
                        {frameworkData.coreTypes.map(type => {
                            const typeInfo = INFLUENCE_TYPES.find(t => t.name === type.name);
                            if (!typeInfo) return null;

                            const borderClass = typeInfo.color.split(' ')[1]; // e.g., border-red-700

                            return (
                                <div key={type.name} className={`p-4 border-l-4 ${borderClass} bg-gray-800/30 rounded-r-lg`}>
                                    <div className="flex items-center mb-3">
                                        <typeInfo.icon className={`w-10 h-10 mr-4 flex-shrink-0 ${typeInfo.textColor}`} />
                                        <h2 className={`mt-0 mb-0 text-3xl font-bold ${typeInfo.textColor}`}>{type.title}</h2>
                                    </div>
                                    <blockquote className="border-none p-0 m-0 italic text-gray-400">"{type.coreDescription}"</blockquote>
                                    <p>{type.d2}</p>
                                    <h4 className={`text-lg font-semibold ${typeInfo.textColor} not-prose`}>Social Habit</h4>
                                    <p>{type.socialHabit}</p>
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === 'triggers' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-cyan-300 not-prose mb-4">Influence Triggers</h2>
                            <div className="space-y-4">
                                {frameworkData.triggers.map(item => (
                                    <div key={item.name}>
                                        <h4 className="font-bold text-gray-100">{item.name}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-cyan-300 not-prose mb-4">Influence Conflict Reactions</h2>
                            <div className="space-y-4">
                                {frameworkData.conflicts.map(item => (
                                    <div key={item.name}>
                                        <h4 className="font-bold text-gray-100">{item.name}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfluenceFrameworkInfo;
